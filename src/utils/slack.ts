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
    searchResults: SectionBlockKitArgs | undefined,
    userId: string,
    searchText: string,
) => {
    const resultSection = {
        type: "section",
        text: {
            type: "mrkdwn",
            text: `*path:* ${searchResults?.path.map((p) => p)} \n *text matches:* \`\`\`${searchResults?.text_matches}\`\`\``,
        },
    };

    const date = Date.now();

    return [
        {
            type: "header",
            text: {
                type: "plain_text",
                text: ":mag: New Search Results",
            },
        },
        {
            type: "divider",
        },
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: `Hey @${userId}, your result(s) are ready! Search query \`${searchText}\` - Follow any of the links provided for more details! :party_blob:`,
            },
        },
        resultSection, // this is the array of search results
        {
            type: "divider",
        },
        {
            type: "context",
            elements: [
                {
                    type: "plain_text",
                    text: `${new Date(date).toLocaleTimeString()}`,
                },
                {
                    type: "plain_text",
                    text: `${new Date(date).toLocaleDateString()}`,
                },
                { type: "plain_text", text: ":navro2:" },
            ],
        },
    ];
};
