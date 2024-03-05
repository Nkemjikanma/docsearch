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
    const { items } = searchResult;

    // remove duplicate filenames - so we can have a unique list of files
    const filterSearchResponse = items.filter((value, index, self) => {
        return index === self.findIndex((t) => t.path === value.path);
    });

    const cleanedUpResults = filterSearchResponse.map(
        ({ name, path, text_matches }) => {
            return {
                text: name,
                path,
                text_matches: text_matches?.map(({ fragment }) => fragment),
            };
        },
    );

    return cleanedUpResults;
};
