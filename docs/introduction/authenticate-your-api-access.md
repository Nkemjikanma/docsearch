---
title: "Authenticate Your API Access"
slug: "authenticate-your-api-access"
category: 6481946a854ed40052a41a38
excerpt: "Find out how you can access Navro's APIs."
hidden: false
order: 2
createdAt: "Tue Jun 20 2023 12:44:36 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Jan 17 2024 09:28:11 GMT+0000 (Coordinated Universal Time)"
---
Navro uses the [OAuth 2.0 protocol](https://oauth.net/2/) as part of our API authentication procedure.

OAuth 2.0 gives you secure and seamless access to our APIs while protecting your data, whether you're on web, mobile or desktop.

***

## Sandbox and Production Environments

You can use access tokens in both the sandbox and production environments.

### Sandbox

Use this environment to test payouts and other functionality. No actual payouts occur.

### Production

Use this environment to make actual payouts, manage actual users and beneficiaries, retrieve real API credentials and so on.

***

## Get Your Sandbox Access Token

1. Go to <https://portal.sandbox.navro.cloud.> to sign in to the sandbox environment for the Navro Hub.
2. Select **API Credentials**. This is where you'll find your `unique client_id` and secret key. These credentials grant you access to Navro's APIs and ensure the security of your data.
3. Convert your `client_id` and secret key in hand into Base64 format. The format should be `client_id:secret`. Then set an authorisation header in the format `Authorization: Basic <your base64 code>`.
4. As part of your `POST` request, you need to include specific parameters in the request body. Set the `scope` as `openid` and the `grant_type` as `client_credentials`. Encode these parameters to `multipart/form-data` to enable efficient data transmission.
5. To get your access token for the sandbox environment, complete this `POST` request:

```shell
curl --location --request POST 'https://api.sandbox.navro.cloud/authentication/<company name>/token' \
--header 'X-API-Version: 1' \
--header 'Authorization: Basic <your base64 code>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=openid'
```

> 🚧 Note
>
> Access tokens are not permanent and will expire after 300 seconds. However, you can use the same endpoint to get a new token — this ensures you maintain uninterrupted access to our APIs.

***

## Get Your Production Access Token

1. Go to <https://portal.navro.cloud.> to sign in to the production environment for the Navro Hub.
2. Select **API Credentials**. This is where you'll find your `unique client_id` and secret key. These credentials grant you access to Navro's APIs and ensure the security of your data.
3. Convert your `client_id` and secret key in hand into Base64 format. The format should be `client_id:secret`. Then set an authorisation header in the format `Authorization: Basic <your base64 code>`.
4. As part of your `POST` request, you need to include specific parameters in the request body. Set the `scope` as `openid` and the `grant_type` as `client_credentials`. Encode these parameters to `multipart/form-data` to enable efficient data transmission.
5. To get your access token for the production environment, complete this `POST` request:

```shell
curl --location --request POST 'https://api.navro.cloud/authentication/<company name>/token' \
--header 'X-API-Version: 1' \
--header 'Authorization: Basic <your base64 code>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=openid'
```

***

## Additional Service Accounts

Depending on your requirements, you may need additional service accounts. For help in creating these accounts, contact [support@navro.com](mailto:support@navro.com). We'll make sure you have the access you need, without any disruptions.

***

## Reset Your Client Secret

If you ever need to reset your client secret, you can do so securely through the Navro Hub. To ensure the security of your data, this is the only way it can be reset.

> 🚧 Note
>
> After you reset, your old secret will no longer work. If you have any active integrations still using the old secret, they will start to receive `401` (unauthenticated) errors.
