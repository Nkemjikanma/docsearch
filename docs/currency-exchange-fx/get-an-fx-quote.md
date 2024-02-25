---
title: "Get an FX Quote"
slug: "get-an-fx-quote"
category: 646cd1945401b10a69ef65c2
excerpt: "Find out the currency exchange rate before you make a payout."
hidden: false
order: 1
createdAt: "Thu Jun 08 2023 15:15:24 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 28 2023 10:08:18 GMT+0000 (Coordinated Universal Time)"
---
You can use the Navro API to generate a forex (FX) quote. This tells you the current indicative exchange rate between two different currencies.

Use this information to make an informed decision on the potential cost of a transaction. For country codes, use the [ISO 3166 3-letter standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3). For currency or asset codes, use the [ISO 4217 3-letter standard](https://en.wikipedia.org/wiki/ISO_4217).

> 🚧 Note
>
> Making a request will not lock in an exchange rate. It only gives the current indicative exchange rate.

***

## Query Parameters

When requesting an FX quote, include the currency pair and corresponding countries within the request URL as query parameters.

In the URL, the parameters display in the following order.

| Query Parameter      | Description                                                                                                                                                           |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceCountry`      | The country to request the payout from, following ISO 3166-1 3-letter code format.                                                                                    |
| `sourceAsset`        | The source currency to use. For example, when converting GBP (£) to USD ($), you should set this parameter to `GBP`. This should be in ISO 4217 3-letter code format. |
| `destinationCountry` | The country to send the payout to, following ISO 3166-1 3-letter format.                                                                                              |
| `destinationAsset`   | The source currency to use. For example, when converting GBP (£) to USD ($), you should set this parameter to `USD`. This should be in ISO 4217 3-letter format.      |

### Request Example

The following example uses the currency pair of GBP and USD, for the UK and the United States, respectively.

<!-- markdownlint-disable-next-line fenced-code-language -->
```
{{baseUrl}}/platform/quotes?sourceCountry=GBR&sourceAsset=GBP&destinationCountry=USA&destinationAsset=USD
```

### Response Example

The following example shows the `rate` returned. This is the current indicative exchange rate between the two currency pairs. To get the destination value, you can multiply this rate against the source asset value. To get a fixed amount to the destination, you can reverse this rate.

```json
{
    "sourceCountry": "GBR",
    "sourceAsset": "GBP",
    "destinationCountry": "USA",
    "destinationAsset": "USD",
    "rate": 1.24049
}
```

A source rate of 1.24049 between GBP and USD would mean that £200 is equal to $248.09. Likewise, to receive $200, you would need to send £161.22, when rounding to two decimal places.
