import { App } from "octokit";
import { cleanUpSearchResponse } from "./utils";

const app = new App({
    appId: process.env.GITHUB_APP_ID,
    privateKey: process.env.GITHUB_PRIVATE_KEY,
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
});

const INSTALLATION_ID = 47868889;

export const repoContent = async (searchText: string) => {
    const { data: slug } = await app.octokit.rest.apps.getAuthenticated();

    if (slug && searchText) {
        const octokit = await app.getInstallationOctokit(INSTALLATION_ID);

        // TODO: set the correct query string for the search
        // TODO: Investigate making it more dynamic

        const queryString = `${searchText} language:ts repo:nkemjikanma/docsearch`;

        const searchCode = async () => {
            return await octokit
                .request("GET /search/code", {
                    q: queryString,
                    headers: {
                        accept: "application/vnd.github.text-match+json",
                    },
                })
                .then((response) => response.data);
        };

        const cleanedUpResults = cleanUpSearchResponse(await searchCode());

        return cleanedUpResults;
    }
};
