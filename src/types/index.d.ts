const octokit = new Octokit();

type SlackApiEndpoint = "chat.postMessage";
type SlackApiRequestBody = {};
type SlackSlashCommandPayload = {
    token: string;
    team_id: string;
    team_domain: string;
    channel_id: string;
    channel_name: string;
    user_id: string;
    user_name: string;
    command: string;
    text: string;
    api_app_id: string;
    is_enterprise_install: boolean;
    response_url: string;
    trigger_id: string;
    payload: never;
};

type SlackInteractivityPayload = {
    payload: string;
    command: never;
};

type SlackPayload = SlackSlashCommandPayload | SlackInteractivityPayload;

type SectionBlockKitArgs = {
    text: string;
    path: string | any[];
    text_matches: string | (string | undefined)[] | undefined;
};

type SlackBlockKitSection = {
    blocks: [
        {
            type: "header";
            text: {
                type: "mrkdwn";
                text: string;
                verbatim?: boolean;
            };
        },
        {
            type: "section";
            text: {
                type: "mrkdwn";
                text: string;
            };
        }[]?,
    ];
};

type SlackModalPayload = {
    type: string;
    callback_id?: string;
    team: {
        id: string;
        domain: string;
    };
    user: {
        id: string;
        username: string;
        name: string;
        team_id: string;
    };
    channel?: {
        id: string;
        name: string;
    };
    message: {
        ts: string;
        thread_ts?: string;
    };
    api_app_id: string;
    token: string;
    trigger_id: string;
    view: {
        id: string;
        team_id: string;
        type: string;
        blocks: SlackBlock[];
        private_metadata: string;
        callback_id: string;
        state: FoodOpinionModalState;
        hash: string;
        title: {
            type: "plain_text";
            text: string;
            emoji: boolean;
        };
        clear_on_close: boolean;
        notify_on_close: boolean;
        close: null;
        submit: {
            type: "plain_text";
            text: string;
            emoji: boolean;
        };
        app_id: string;
        external_id: string;
        app_installed_team_id: string;
        bot_id: string;
    };
};
