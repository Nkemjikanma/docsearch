import { Octokit, App } from "octokit";

const app = new App({
    appId: process.env.GITHUB_APP_ID,
    privateKey: process.env.GITHUB_PRIVATE_KEY,
    // clientId: process.env.GITHUB_CLIENT_ID,
    // clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

const INSTALLATION_ID = 47677647;

export const repoContent = async (searchText: string) => {
    const { data: slug } = await app.octokit.rest.apps.getAuthenticated();

    // console.log("oshey", slug);

    if (slug) {
        const octokit = await app.getInstallationOctokit(INSTALLATION_ID);

        const getDirectoryContent = async (path: string) => {
            return await octokit.rest.repos.getContent({
                owner: "Nkemjikanma",
                repo: "docsearch",
                path: path,
                ref: "main",
                mediaType: {
                    format: "raw",
                },
            });
        };

        const searchCode = async (searchTextInput: string, path: string) => {
            const searchText = `${searchTextInput}+in:file+language:markdown+path:${path}`;
            return await octokit.rest.search.code({
                q: searchText,
            });
        };

        const repoContentResponse = await getDirectoryContent("src");

        if (Array.isArray(repoContentResponse.data)) {
            return repoContentResponse.data.map(async (result) => {
                switch (result.type) {
                    case "file":
                        const codeSearchResult = await searchCode(
                            searchText,
                            result.path,
                        );
                        return codeSearchResult;
                    case "dir":
                        return await getDirectoryContent(result.path);
                }
            });
        }

        console.log(repoContentResponse);
    }
};

// For example, if you want to find the definition of the addClass function inside jQuery repository, your query would look something like this:

// q=addClass+in:file+language:js+repo:jquery/jquery

// This query searches for the keyword addClass within a file's contents. The query limits the search to files where the language is JavaScript in the jquery/jquery repository.
