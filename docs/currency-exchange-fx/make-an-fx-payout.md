---
title: "Make an FX Payout"
slug: "make-an-fx-payout"
category: 646cd1945401b10a69ef65c2
excerpt: "Check and confirm FX rates so you can send your beneficiaries fixed amounts."
hidden: false
order: 2
createdAt: "Thu Jun 08 2023 15:24:29 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 28 2023 10:08:36 GMT+0000 (Coordinated Universal Time)"
---
When requesting a forex (FX) payout through Navro, ensure you:

- have checked all payment corridor requirements
- have the appropriate beneficiary data required to complete the payout

If you are unsure of next steps, contact [support@navro.io](mailto:support@navro.io).

> 🚧 Note
>
> The FX rate of the payout is only fixed once you've initiated the payout and there are sufficient funds available. If a payout is held in a [**Committed** status](https://navro.readme.io/docs/payout-statuses) due to insufficient funds, the FX rate will not be fixed.

Each FX payout goes through a minimum two-step process:

1. You request the payout.
2. You confirm the payout at the FX rate displayed.

***

## Source and Destination Values

The source value is the value of the currency you're funding the payout from. The destination value is the value of the currency in which the beneficiary receives the payout.

For example, if you send a beneficiary:

- £200 for conversion to USD, then £200 is the source value
- $200 converted from GBP, then $200 is the destination value

### Source Amount Value

Use the `source.amount.value` field to send the beneficiary a fixed amount of the source currency. For example, when sending a payout with a source value of €2000, regardless of the value of the currency you're converting into.

#### Request Example

```json
{
    "compliance":{
        "purposeOfRemittance":"BILL_PAYMENTS",
        "reference":"demopayment",
        "sourceOfFunds":"EMPLOYMENT_INCOME"
    },
    "source":{
        "bankAccountId":"6b0fb4ae-ae04-43f2-86e9-099a53f1a1f5",
        "amount":{
            "assetCode":"GBP",
            "assetType":"FIAT"
        }
    },
    "destination":{
        "countryCode":"CZE",
        "amount":{
            "assetCode":"CZK",
            "assetType":"FIAT",                      
            "value":"15"
        }
    },
    "beneficiaryId": "4b76df48-5052-4336-9310-915af89251cf"
}
```

### Destination Amount Value

Use the `destination.amount.value` field to send the beneficiary a fixed amount of the destination currency. For example, to ensure that the recipient receives $2000 (after you've accepted the FX rate), regardless of the cost of the source currency.

#### Request Example

```json
{
    "compliance":{
        "purposeOfRemittance":"BILL_PAYMENTS",
        "reference":"demopayment",
        "sourceOfFunds":"EMPLOYMENT_INCOME"
    },
    "source":{
        "bankAccountId":"6b0fb4ae-ae04-43f2-86e9-099a53f1a1f5",
        "amount":{
            "assetCode":"GBP",
            "assetType":"FIAT",
            "value":"15"
        }
    },
    "destination":{
        "countryCode":"CZE",
        "amount":{
            "assetCode":"CZK",
            "assetType":"FIAT"
        }
    },
    "beneficiaryId": "4b76df48-5052-4336-9310-915af89251cf"
}
```

#### Response Example

Each FX payout will have a response body like the following:

```json
{
    "externalId": null,
    "batchId": null,
    "externalBatchId": null,
    "source": {
        "bankAccountId": "6b0fb4ae-ae04-43f2-86e9-099a53f1a1f5",
        "countryCode": null,
        "amount": {
            "value": 15,
            "assetCode": "GBP",
            "assetType": "FIAT"
        }
    },
    "destination": {
        "countryCode": "CZE",
        "amount": {
            "value": 409,
            "assetCode": "CZK",
            "assetType": "FIAT"
        }
    },
    "compliance": {
        "sourceOfFunds": "EMPLOYMENT_INCOME",
        "purposeOfRemittance": "BILL_PAYMENTS",
        "reference": "demopayment"
    },
    "id": "8ccb6540-e87e-4a87-a695-ead058e26de8",
    "sourcePartyId": "6c4cb36c-2d16-4b75-8040-efeb02501ee5",
    "provider": "TRANSFERMATE",
    "beneficiaryId": "4b76df48-5052-4336-9310-915af89251cf",
    "beneficiary": {
        "externalId": "9ab7b989-c499-46ad-a38c-620dfcb8e208",
        "beneficiaryType": "INDIVIDUAL",
        "alias": null,
        "accountType": "SINGLE",
        "accountDetails": {
            "accountNumber": "00145399",
            "accountRoutingDetails": [
                {
                    "type": "IBAN",
                    "code": "CZ6508000000192000145399"
                },
                {
                    "type": "SWIFT_BIC",
                    "code": "AIRACZPP"
                }
            ]
        },
        "beneficiaryBank": {
            "name": "JPM",
            "address": {
                "countryCode": "CZE",
                "stateCode": null,
                "cityName": null,
                "postalCode": null,
                "line1": null
            },
            "beneficiaryCreditTo": null,
            "intermediaryBank": null
        },
        "individuals": [
            {
                "type": "PRIMARY",
                "firstName": "River",
                "middleName": null,
                "lastName": "Song",
                "nationality": null,
                "dateOfBirth": null,
                "address": {
                    "countryCode": "CZE",
                    "stateCode": null,
                    "cityName": "Prague",
                    "postalCode": "100 00",
                    "line1": "1 Old Street"
                },
                "contactDetails": null,
                "identification": null
            }
        ],
        "company": null
    },
    "rate": 27.27708,
    "expirationDate": "2023-05-31T13:24:50.254375158Z",
    "payoutStatus": {
        "status": "REQUESTED",
        "reason": null
    },
    "createdAt": "2023-05-31T13:23:43.117181868Z",
    "updatedAt": "2023-05-31T13:23:50.266125785Z",
    "toAllowConfirm": null,
    "feeAmount": {
        "value": 120,
        "assetCode": "GBP"
    }
}
```

#### Response Body Fields

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Description",
    "0-0": "`expirationDate`",
    "0-1": "When you request an FX payout, the request needs to be confirmed before you can complete it. It can take up to 60 seconds to confirm the transaction at the current rate. Any transaction confirmed after the 60-second period will be committed to a different rate.",
    "1-0": "`feeAmount` [object]",
    "1-1": "Houses the current transactional fee and show both the amount, and the asset in which that amount is displayed.  \nAll value amounts are displayed in minor units. For example, `120` = `1.20`.",
    "2-0": "`rate`",
    "2-1": "Displays the FX rate used for the payout, between the source and destination currencies.",
    "3-0": "`toAllowConfirm`",
    "3-1": "Tells you whether the current user or API access has the permissions to confirm the payout. Typically used for maker or checker processes where one party creates payouts and another reviews and confirms those payouts.",
    "4-0": "`value`",
    "4-1": "Sits in either the source or the destination object, depending on your use case."
  },
  "cols": 2,
  "rows": 5,
  "align": [
    "left",
    "left"
  ]
}
[/block]

***

## Confirm or Cancel a Request

To confirm or cancel an FX payout, use the [Confirm](https://navro.readme.io/reference/confirm-payout-by-id) or [Cancel Payout](https://navro.readme.io/reference/cancel-payout-by-id) endpoints.

Depending on the endpoint you choose, you will then either confirm and commit the payout, or else cancel it.

> 🚧 Note
>
> FX payouts only have a 60-second period in which the rate displayed in the response body is valid. Any payout confirmed after that 60-second period is subject to a new FX rate.
