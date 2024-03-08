---
title: "Get Started with Navro"
slug: "get-started-with-navro"
category: 6481946a854ed40052a41a38
excerpt: "Find out what you need to start using Navro's APIs."
hidden: false
order: 1
createdAt: "Thu Jun 08 2023 08:45:10 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 28 2023 10:05:12 GMT+0000 (Coordinated Universal Time)"
---
Use this page to learn:

- how the Navro platform can meet your business needs
- how you can start using Navro's APIs
- best practice and troubleshooting advice

To get started, you’ll need:

- access to the Navro Hub
- API credentials

> 🚧 Note
>
> If you do not have access to the Navro Hub, then contact [support@navro.com](mailto:support@navro.com).

***

## Navro Hub

Use the Navro Hub to streamline your operations and make your financial transactions easier to manage. The Navro Hub has the same capabilities as our API, enabling you to perform all the same tasks.

For example, you can:

- initiate payouts
- create and manage beneficiaries
- check real-time foreign exchange (FX) quotes
- create new users, enabling you to expand your team's access as needed

***

## Access the Navro APIs

To access Navro's APIs, you'll need:

- the `client_id`
- the secret key

These credentials authenticate your access and ensure the security of your interactions.  
To get these credentials:

1. Sign in to the Navro Hub. If you’re a sandbox user, go to <https://portal.sandbox.navro.cloud.> If you’re a production user, go to <https://portal.navro.cloud.>
2. Go to **API Credentials**. This is where you'll find your unique `client_id` and secret key.

> 🚧 Note
>
> If you do not see any API credentials, then contact [support@navro.com](mailto:support@navro.com).

***

## Specify the API Version

When you make an API request to Navro, you must include a custom header specifying the API version you want to use. This ensures seamless and efficient integration with our APIs. Navro uses `X-API-Version` as the custom header to denote the correct API version.

### Valid Headers

When you set your custom header, make sure you follow the correct format and use the whole number recommended by Navro. For example, `X-API-Version: 1`, which is our current version.

### Invalid Headers

Do not include headers that have additional characters, or do not use whole numbers. These headers are incompatible with Navro’s API versioning. For example:

- `X-API-Version: 3.0`
- `X-API-Version: A`
- `X-API-Version: v1`

### Error Handling

If you do not include the `X-API-Version` header with a valid version, your request will be rejected. These requests return a `422 (Unprocessable Entity)` error code and this error message:

`The API version is either not supplied in the custom header or is incorrectly formatted.`

### API Version Updates

When Navro releases a new version of the API, we'll notify you. You'll then need to update your requests to include the new version number in the `X-API-Version` header.

### API Version Support

Navro supports a maximum of two versions for any public-facing API: the current version and the deprecated version. When we release a new version of the API, we deprecate the previous version. Nine months after the release of a new version, we will remove the deprecated version.
