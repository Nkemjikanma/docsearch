---
title: "Manage Your Beneficiaries"
slug: "manage-your-beneficiaries"
category: 646cd19e8fd000001a7b7763
excerpt: "Create beneficiaries so you can send payouts quickly and maintain up to date records."
hidden: false
order: 1
createdAt: "Thu Jun 08 2023 15:29:03 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jan 02 2024 16:30:02 GMT+0000 (Coordinated Universal Time)"
---
A beneficiary is an individual or a company that receives funds from a payout initiated through Navro.

***

## Beneficiary Types

You can create two types of beneficiary account:

- **Individual** — a person you want to pay
- **Company** — an organisation you want to pay

There are two ways of creating a beneficiary:

- as part of the [payout process](https://navro.readme.io/docs/make-an-fx-payout), during which you can create the beneficiary
- as a standalone process, in which you can create the beneficiary without having to make a payout

These options are supported in both the Navro Hub and API.

***

## Manage Beneficiaries in the Hub

In the [Navro Hub](https://navro.readme.io/docs/get-started-with-navro#navro-hub), you can create and manage records for both of the individual and company beneficiary types. These records consolidate the personally identifiable information (PII) and account details for each beneficiary. This means you can use the stored details to send payouts to a beneficiary, eliminating the need to capture data continuously or store the information yourself.

***

## Manage Beneficiaries Through the API

To manage your beneficiaries through the API, use the following endpoints.

| Endpoint                                                                                            | Enables You to                                                                               |
| :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| [Create Beneficiary](https://navro.readme.io/reference/create-beneficiary)                        | Create beneficiary records for individuals and companies                                     |
| [Search Beneficiary](https://navro.readme.io/reference/search-beneficiaries)                      | Search for beneficiaries, using specified parameters (for example, `name`, `status`, `type`) |
| [Search Beneficiary By ID](https://navro.readme.io/reference/search-beneficiary-by-beneficiaryid) | Search for beneficiaries, using the `beneficiaryId` parameter                                |
| [Update Beneficiary](https://navro.readme.io/reference/update-beneficiary)                        | Edit the details for an existing beneficiary, using the `beneficiaryId` parameter            |
| [Delete Beneficiary](https://navro.readme.io/reference/delete-beneficiary)                        | Remove a beneficiary from the platform, using the `beneficiaryId` parameter                  |

***

## Beneficiary Requirements

Beneficiary requirements will vary, depending on the payment type, currency and country used. To ensure you are capturing the right beneficiary requirements, check the [supported regions/countries](https://navro.readme.io/docs/supported-regions-and-countries) and payment corridor documentation.
