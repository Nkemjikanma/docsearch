// https://js.langchain.com/docs/integrations/document_loaders/web_loaders/github
import OpenAI from "openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai"; // used to get the embeddings of the text
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
            branch: "main",
            accessToken: process.env.GITHUB_ACCESS_TOKEN, // get github access token
            ignorePaths: [
                "data/*",
                "public/*",
                "specs/*",
                "README.md",
                "node_modules",
                ".netlify",
            ],
            ignoreFiles: ["*.sh", "*.json", "*.toml", "README.md"],
            unknown: "warn",
        },
    );
    // load and split the documents

    return loader.loadAndSplit(
        //TODO: keep testing to find the best separator and chunk size/overlap
        RecursiveCharacterTextSplitter.fromLanguage("markdown", {
            chunkSize: 5000, // how many tokens per chunk?
            chunkOverlap: 0, // some overlap between chunks
        }),
    );
};

// load the vector store
const loadStore = async (): Promise<MemoryVectorStore> => {
    const docs = await loadDocumentation().then((docs) => {
        return docs.filter((doc) => doc.metadata.source.startsWith("docs/"));
    });

    const vectorStore = await createVectoreStore([...docs]);

    return vectorStore;
};

export const query = async (queryString: string) => {
    const store = await loadStore();

    // compare the query string to the documents
    const results = await store.similaritySearch(queryString, 2);

    const response: ChatCompletion = await openai.chat.completions.create({
        model: "gpt-4",
        temperature: 0,
        messages: [
            {
                role: "system",
                content:
                    "You are a helpful AI assistant that confidently provides accurate financial information for users and developers who need help understanding Navro's documentation. Even when direct answers are not explicit, deduce the right answers from the context you'be been given. Always snswer questions to the best of your ability and awalys site the source of information you provide.",
            },
            {
                role: "user",
                content: `Answer the following question using the provided context. If you cannot answer the question with the context, don't make up stuff and sound confident in your replies. Redirect user to product team when context is insufficient and incorporate markdown formatting for URLs to enhance user experience.'.
            Question: ${queryString}
            Context: ${results.map((r) => r.pageContent)}`,
            },
        ],
    });

    return {
        path: results.map((r) => r.metadata.source),
        text_matches: response?.choices[0]?.message.content,
    };
};
