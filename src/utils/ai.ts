// https://js.langchain.com/docs/integrations/document_loaders/web_loaders/github
import OpenAI from "openai";
import { Document } from "langchain/document";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai"; // used to get the embeddings of the text
import { CharacterTextSplitter } from "langchain/text_splitter";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { GithubRepoLoader } from "langchain/document_loaders/web/github";
import { ChatCompletion } from "openai/resources";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// create vector store
const createVectoreStore = async (docs: any[]) => {
    return MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings());
};

// load documents from github
const loadDocumentation = async () => {
    const loader = new GithubRepoLoader(
        "https://github.com/nkemjikanma/docsearch",
        {
            branch: "feat/add-ai-functionality",
            accessToken: process.env.GITHUB_ACCESS_TOKEN, // get github access token
            ignorePaths: [
                "data/*",
                "public/*",
                "specs/*",
                "src/*",
                "README.md",
                "node_modules/*",
                ".netlify/*",
            ],
            ignoreFiles: ["*.sh", "*.json", "*.toml", "README.md"],
            recursive: true,
            unknown: "warn",
        },
    );

    // load and split the documents

    return loader.loadAndSplit(
        //TODO: keep testing to find the best separator and chunk size/overlap
        RecursiveCharacterTextSplitter.fromLanguage("markdown", {
            chunkSize: 5000, // how many tokens per chunk?
            chunkOverlap: 200, // some overlap between chunks
        }),
    );
};

// load the vector store
const loadStore = async (): Promise<MemoryVectorStore> => {
    const docs = await loadDocumentation();

    const vectorStore = await createVectoreStore(docs);

    console.log(vectorStore);

    return vectorStore;
};

export const query = async (queryString: string) => {
    const store = await loadStore();

    const results = await store.similaritySearch(queryString, 1);

    const response: ChatCompletion = await openai.chat.completions.create({
        model: "gpt-4",
        temperature: 0,
        messages: [
            {
                role: "system",
                content:
                    "You are a helpful Ai assistant that provides accurate information for users who need help understanding documentation. Answer questions to your best ability",
            },
            {
                role: "user",
                content: `Answer the following question using the provided context. If you cannot answer the question with the context, don't make up stuff. Just say you need more context.
            Question: ${queryString}
            Context: ${results.map((r) => r.pageContent)}`,
            },
        ],
    });

    return {
        text: "",
        path: results.map((r) => r.metadata.source),
        text_matches: response?.choices[0]?.message.content,
    };
};
