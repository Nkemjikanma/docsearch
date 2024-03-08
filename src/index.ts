import type { Handler } from "@netlify/functions";
import { block, slackApi, validateRequest } from "./utils/slack";
import { parse } from "querystring";
import { repoContent } from "./utils/github";
import { query } from "./utils/ai";

/*
 *
 */
export async function handleSlashCommand(payload: SlackSlashCommandPayload) {
    switch (payload.command) {
        // get the github repo content

        case "/docsearch":
            const results = await repoContent(payload.text);
            const aiResults = await query(payload.text);

            const displayResult = JSON.stringify(
                block(aiResults as any, payload.user_name, payload.text),
            );

            const response = await slackApi("chat.postMessage", {
                channel: payload.channel_id,
                blocks: displayResult,
            });

            if (!response.ok) {
                console.log(response);
            }

            break;
        default:
            return {
                statusCode: 400,
                body: `Command ${payload.command} is invalid`,
            };
    }

    return {
        statusCode: 200,
        body: "",
    };
}

export async function handleInteractivity(payload: SlackModalPayload) {
    const callback_id = payload?.callback_id ?? payload?.view?.callback_id;

    switch (callback_id) {
        case "docsearch":
            const channel = "C06KU6MF92A";
            const user = payload?.user?.id;
            const threads = payload?.message?.thread_ts ?? payload?.message?.ts;

            console.log(threads);

            await slackApi("chat.postMessage", {
                channel,
                threads,
                text: `Hey <@${user}>, you forgot to add the right command. Run the \`/docsearch\` slash command to search!`,
            });
    }

    return {
        statusCode: 200,
        body: "",
    };
}

export const handler: Handler = async (event) => {
    // validate request
    const isValid = validateRequest(event);

    if (!isValid) {
        console.log("Unauthorized request");
        return {
            statusCode: 400,
            body: "Unauthorized attempt",
        };
    }

    // handle slash command
    const body = parse(event.body ?? "") as SlackPayload;

    if (body.command) {
        return handleSlashCommand(body as SlackSlashCommandPayload);
    }

    if (body.payload) {
        const payload = JSON.parse(body.payload);
        return handleInteractivity(payload);
    }

    return {
        statusCode: 200,
        body: "Hello, World!!!",
    };
};
