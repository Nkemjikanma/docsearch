import { z } from "zod";

const envSchema = z.object({
    SLACK_BOT_OAUTH_TOKE: z.string(),
    SLACK_SIGNING_SECRET: z.string(),
    GITHUB_APP_ID: z.string(),
    GITHUB_PRIVATE_KEY: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    GITHUB_ACCESS_TOKEN: z.string(),
});

envSchema.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}
