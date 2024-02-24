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

    console.log("oshey", slug);

    const octokit = await app.getInstallationOctokit(INSTALLATION_ID);

    const repoContentResponse = await octokit.rest.repos.getContent({
        owner: "Nkemjikanma",
        repo: "docsearch",
        path: "src",
        ref: "main",
    });

    console.log("fetched", repoContentResponse);

    /**
     * TODO: maps through the results, handling folders,
     *
     */
    const content = repoContentResponse.map((result) => {});
};
