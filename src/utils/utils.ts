import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";

const octokit = new Octokit();

export type SearchResultType = GetResponseDataTypeFromEndpointMethod<
    typeof octokit.rest.search.code
>;

export const cleanUpSearchResponse = (searchResult: SearchResultType) => {
    if (searchResult.total_count === 0) {
        return;
    }

    return searchResult.items.map(({ name, path, url, text_matches }) => {
        return {
            name,
            path,
            url,
            text_matches: text_matches?.map(({ fragment, matches }) => {
                return {
                    fragment,
                    matches: matches?.map(({ text }) => text),
                };
            }),
        };
    });
};
