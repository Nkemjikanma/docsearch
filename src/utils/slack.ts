import type { HandlerEvent } from "@netlify/functions";
import { createHmac } from "crypto";

export async function slackApi(
    endpoint: SlackApiEndpoint,
    body: SlackApiRequestBody,
): Promise<any> {
    return await fetch(`https://slack.com/api/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.SLACK_BOT_OAUTH_TOKEN}`,
        },
        body: JSON.stringify(body),
    }).then((response) => response.json());
}

// request validator
export function validateRequest(request: HandlerEvent) {
    // ensure secret is set
    const secret = process.env.SLACK_SIGNING_SECRET!;

    // get signature from request
    const signatrue = request.headers["x-slack-signature"];

    // handle replay attack
    const timestamp = Number(request.headers["x-slack-request-timestamp"]);

    // match slack timestamp precision w
    const timeNow = Math.floor(Date.now() / 1000);

    // check if the request is older than 5 minutes
    if (Math.abs(timeNow - timestamp) > 300) {
        return false;
    }

    // create hash like slack
    const hmac = createHmac("sha256", secret)
        .update(`v0:${timestamp}:${request.body}`)
        .digest("hex");

    // coompare our hash signature with the one from slack
    return `v0=${hmac}` === signatrue;
}

export const block = (
    searchResults: SectionBlockKitArgs[] | undefined,
    userId: string,
) => {
    if (!searchResults || searchResults.length === 0) {
        return [
            {
                type: "header",
                text: {
                    type: "plain_text",
                    text: "No record of search found :no_entry:",
                },
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: "No record of search found. Please try again with a different search query. :sweat_smile:",
                },
            },
        ];
    }

    const resultSection = searchResults.map((result) => ({
        type: "section",
        text: {
            type: "mrkdwn",
            text: `*file:* ${result.text} \n *path:* ${result.path} \n *text matches:* \`\`\`${result.text_matches}\`\`\``,
        },
    }));

    return [
        {
            type: "header",
            text: {
                type: "plain_text",
                text: "New Search Results",
            },
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `Hey @${userId}, the results of your search are ready! Follow any of the links provided for more details! :party_blob:`,
            },
        },
        {
            type: "divider",
        },
        ...resultSection, // this is the array of search results
        {
            type: "divider",
        },
    ];
};
