---
title: "Add Your Bank Code"
slug: "add-your-bank-code"
category: 646cd18024feb8004cf6777b
excerpt: "When making a payout, choose the bank code that best reflects your use case."
hidden: false
order: 5
createdAt: "Tue May 30 2023 12:47:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 28 2023 10:07:42 GMT+0000 (Coordinated Universal Time)"
---
When using Navro's API, you must complete the `accountRoutingDetails<type, code>` field.

This is because using the appropriate bank code:

- identifies the specific payment method for a transaction
- helps us process your transactions correctly and efficiently

This applies whether you're using:

- an IBAN (International Bank Account Number)
- a BIC (Bank Identifier Code)
- a SWIFT (Society for Worldwide Interbank Financial Telecommunication) code
- a Sort Code
- any other payment method

***

## Bank Code Options

To complete the field, choose from the following bank code types.

| Code              | Use for                 |
| :---------------- | :---------------------- |
| `IBAN`            | all supported countries |
| `SWIFT_BIC`       | all supported countries |
| `SORT_CODE`       | UK and Ireland          |
| `ABA`             | USA                     |
| `BSB`             | Australia               |
| `TRANSIT_CODE`    | Canada                  |
| `OTHER_BANK_CODE` | all other countries     |
