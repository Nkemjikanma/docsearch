---
title: "Batch File Columns"
slug: "batch-file-columns"
category: 646cd1b8ede10300754a5084
excerpt: "Our column explainer can help you decide what fields to include when you make batch payouts."
hidden: false
order: 4
---
| Column Name | Mandatory | Description | Accepted Values |
| ------- | -------- | ------------------------ | ------------- |
| **Client Batch ID** | Yes | External, client-based ID to identify each batch. The ID must be unique for each batch file. Duplicated IDs across multiple batches will result in an error. | Freeform text that you can set, for example, `Nov-payroll2024` |
| **Reference ID** | No | External ID to be used by the client to identify individual payments within the batch. The ID must be unique for each payment. Duplicated IDs will result in an error.  | Freeform text that you can set, for example, `Payment001`, `Payment0002` |
| **Funding account ID** | Yes | The ID of the account that payouts are to be made from. You can get this ID on the **Balances** page. | The unique identifier, for example, `ca20c0f4-66ec-4a4f-b45e-3f72c8d7da2a` |
| **Funding account external ID** | No | The external ID used by the client to identify which account the balance is coming from | Freeform text that you can set, for example, `USD Balance` |
| **Destination Currency** | Yes | The currency you want funds to be received in. | Asset (currency) code in ISO-4217 three-letter format<br />For example, for Sterling, the code will be the currency 3-alpha numeric code value `GBP`<br />Maximum Length: 3 chars<br />Minimum Length: 3 chars |
| **Destination Country** | Yes | The country you want to send funds to. | ISO 3166-1 alpha-3 code, for example, `USA`<br />Maximum Length: 3 chars<br />Minimum Length: 3 chars |
| **Direction** | Yes | This determines whether the payout amount is fixed at the sender or beneficiary side, for example, whether we send `100USD` or the beneficiary receives `100GBP`. | Allowed values:<br />- `funding`: fixed on the sender side<br />- `destination`: fixed on the beneficiary side |
| **Amount** | Yes | The amount to be sent in the payout. | Number<br />Decimals accepted<br />Typically written as, for example, `10` or `10.57` |
| **Payment Method** | No | The method used to send a payment to a beneficiary. This field is a future functionality that we are still developing, which means you cannot currently use it. | Allowed values: `ACH`, `FPS`, `SEPA`, `SEPA_INSTANT`, `WIRE` |
| **Charge Code** | No | Stipulates who would pay the fees. This field is a future functionality that we are still developing, which means you cannot currently use it. | Allowed values: `BEN`, `OUR`, `SHA` |
| **Payment Execution Date** | No | The target delivery date. This field is a future functionality that we are still developing, which means you cannot currently use it. | Value format: `[year]-[month]-[date]`, for example, `2024-01-31` |
| **Reference Info** | Yes | This is the payout reference and is mandated. | Maximum Length: 18<br />Minimum Length: 6<br />Pattern: `^[A-Za-z0-9 /&.-]*$`<br />Example: `Az074-124` |
| **Source Of Funds** | No | This is the source of funds to be paid out - while it is not mandatory, we recommend you include it. Payouts may be rejected by third-party providers downstream. | You can view the values on the Source of Funds sheet |
| **Purpose of Remittance** | Yes | Outlines the purpose of the payout. | You can view the values on the Purpose of Remittance sheet |
| **Beneficiary Unique Identifier** | Conditional | Required if you're using existing beneficiaries. You can get the Beneficiary ID from the **Beneficiaries** tab in the Hub. | Freeform text that you can set |
| **Beneficiary External ID** | No | External ID, used by the client to identify which beneficiary they are making a payout to. This will be the Client ID created by you, or automatically generated if not supplied. | Example Beneficiary External ID: `DOCLCVOETPMJ` |
| **Beneficiary Type** | Yes | Determines the beneficiary type and required fields. Only required when populating the Batch Sheet with beneficiary data. If you're using existing beneficiaries and the **Beneficiary Unique Identifier** field, you do not need to provide this. | - `Company`<br />- `Individual` |
| **Company Name** | Conditional | Official company name, mandated for company beneficiary types. | Maximum Length: 35 chars<br />Minimum Length: 0 characters<br />example: `BLUE LION PLACE LLP` |
| **First Name** | Conditional | The individual's first name, mandated for `Individual` beneficiary types. | Maximum Length: 35 chars<br />Minimum Length: 1 char<br />Pattern: `^[a-zA-Z0-9 \.-]*$`<br />Example: `Dave` |
| **Middle Name** | No | The individual's middle name. | Maximum Length: 35 chars<br />Minimum Length: 0 chars<br />Pattern:``^[a-zA-Z0-9 \.-]*$``<br />Example: `Jennifer` |
| **Last Name** | Conditional | The individual's last name, mandated for individual beneficiary types. | Maximum Length: 35 chars<br />Minimum Length: 1 char<br />Pattern: `^[a-zA-Z0-9 \.-]*$`<br />Example:`Johnson` |
| **Beneficiary Address Line 1** | Yes | Line 1 address. Typically, a combination of address number and street name. | Maximum Length: 150 chars<br />Minimum Length: 1 char<br />Pattern: ``^[A-Za-z0-9 ./*\-)(\\@#`,*]*$``<br />Example: `154 Cookies Street` |
| **Beneficiary City** | Yes | The city of the beneficiary, whether the beneficiary is a company or an individual. | Maximum Length: 100 chars<br />Minimum Length: 1 char<br />Pattern: `^[A-Za-z -]*$`<br />Example: `London` |
| **Beneficiary State/County** | No | The state/county code of the beneficiary, for example, NY-US. | Maximum Length: 35 chars<br />Minimum Length: 0 chars<br />Pattern: `^[A-Za-z0-9 -]*$`<br />Example: `1` (this value represents the country's state, county or region code) |
| **Beneficiary ZIP/Postal Code** | Yes | The beneficiary’s ZIP or postal code. | The postal address code that has country-specific format and length.<br />Maximum Length: 35<br />Minimum Length: 0<br />Pattern: `^[A-Za-z0-9 -]*$`<br />Example: `N2 4KB` |
| **Beneficiary Country** | Yes | The country that the beneficiary lives in. | Maximum Length: 3<br />Minimum Length: 3<br />Example: `USA`<br />For more information, see [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3). |
| **Beneficiary Phone Number** | No | The beneficiary's phone number. | Must include `+` symbol and country area code.<br />Maximum Length: 16<br />Minimum Length: 6<br />Pattern: `^\+[1-9]\d{1,14}$`<br />Example: `+440001111111` |
| **Beneficiary DOB** | No | The beneficiary's date of birth. | Date format: `YYYY-MM-DD`<br />Example: `1990-06-19` |
| **Beneficiary Nationality** | No | The beneficiary's nationality. | Maximum Length: 3<br />Minimum Length: 3<br />Example: `USA<br />For more information, see [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3). |
| **Beneficiary Email** | No | The beneficiary's email address. | Maximum Length: 100 chars<br />Minimum Length: 0 chars<br />Example:`test@gmail.com` |
| **Beneficiary Tax ID** | No | The beneficiary's tax identifier. | Maximum Length: 50 chars<br />Minimum Length: 0 chars<br />Example: `SL435346FG` |
| **Beneficiary Company Registration Number** | No | The company's registration number. | Maximum Length: 50 chars<br />Minimum Length: 0 chars<br />Example: `SL435346FG` |
| **Beneficiary Passport** | No | The beneficiary's passport number. | Maximum Length: 50 chars<br />Minimum Length: 0 chars<br />Example: `SL435346FG` |
| **Beneficiary National ID** | No | The beneficiary's National ID. | Maximum Length: 50 chars<br />Minimum Length: 0 chars<br />Example: `SL435346FG` |
| **Account Number** | Conditional | Only required for the countries that specify an account number, for example, Canada, USA. | Maximum Length: 35<br />Minimum Length: 0<br />Example: `55546722` |
| **IBAN** | Conditional | Only required for countries that require IBAN. | Maximum Length: 35<br />Minimum Length: 0<br />Example: `GB29NWBK60161331926819` |
| **SWIFT/BIC** | Conditional | Only required for countries that require SWIFT/BIC. | Maximum Length: 35<br />Minimum Length: 0<br />Example: `HBUKGB4BXXX` |
| **Bank Code Type** | Conditional | Required for all non-SWIFT and Sort Code payments. | For an overview on which countries require other bank codes, see the Country Routing Requirements Sheet. |
| **Bank Code** | Conditional | The value associated with the bank code. Set the file field to plain text when you add a code that starts with a `0`. | Maximum Length: 35<br />Minimum Length: 0 |
| **Bank Name** | Optional | The beneficiary bank’s name. | Maximum Length: 100 chars<br />Minimum Length: 0 chars<br />Example:`HSBC UK BANK PLC` |
| **Bank Address Line 1** | Optional | Line 1 address. Typically, a combination of address number and street name. | Maximum Length: 150 chars<br />Minimum Length: 1 char<br />Pattern: ``^[A-Za-z0-9 ./*\-)(\\@#`,*]*$``<br />Example: `154 Cookies Street` |
| **Bank City** | Optional | The city the bank is based in. | Maximum Length: 100 chars<br />Minimum Length: 1 char<br />Pattern: `^[A-Za-z -]*$`<br />Example: `London` |
| **Bank State/County** | Optional | The state or country the bank is based in. | Maximum Length: 35 chars<br />Minimum Length: 0 chars<br />Pattern: `^[A-Za-z0-9 -]*$`<br />Example: `1` (this value represents the country's state, county or region code) |
| **Bank ZIP/Postal Code** | Optional | The bank's ZIP or postal code. | The postal address code that has country-specific format and length.<br />Maximum Length: 35<br />Minimum Length: 0<br />Pattern: `^[A-Za-z0-9 -]*$`<br />Example: `N2 4KB` |
| **Bank Country** | Yes | The bank’s country. | Maximum Length: 3 chars<br />Minimum Length: 3 chars<br />Example: `USA`<br />For more information, see [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3). |
| **Beneficiary Credit Type** | No | Whether the beneficiary is an individual or a company. | `COMPANY`<br />`INDIVIDUAL` |
| **Beneficiary Credit To** | No | The freetext field that should include the beneficiary for further credit to name/details. | Data type: string<br />Maximum Length: 100 chars<br />Minimum Length: 0 chars<br />Example: `BLUE LION PLACE LLP` |
| **Intermediary Bank Account Number** | No | The account number of the intermediary bank you want to use. | Maximum Length: 35<br />Minimum Length: 0<br />Example: `55546722` |
| **Intermediary SWIFT/BIC** | No | The SWIFT/BIC of the intermediary bank you want to use. | Maximum Length: 35<br />Minimum Length: 0<br />Example: `HBUKGB4BXXX` |
| **Intermediary Bank Name** | No | The intermediary bank’s name. | Maximum Length: 100 chars<br />Minimum Length: 0 chars<br />Example: `HSBC UK BANK PLC` |
| **Intermediary Bank Address Line 1** | No | Line 1 address. Typically, a combination of address number and street name. | Maximum Length: 150 chars<br />Minimum Length: 1 char<br />Pattern: ``^[A-Za-z0-9 ./_\-)(\\@#`,*]*$``<br />Example: `154 Cookies Street` |
| **Intermediary Bank City** | No | The city the bank is based in. | Maximum Length: 100 chars<br />Minimum Length: 1 char<br />Pattern: `^[A-Za-z -]*$`<br />Example:`London` |
| **Intermediary Bank State/County** | No | The state or country the bank is based in. | Maximum Length: 35 chars<br />Minimum Length: 0 chars<br />Pattern: `^[A-Za-z0-9 -]*$`<br />Example: `1` (this value represents the country's state, county or region code) |
| **Intermediary Bank ZIP/Postal Code** | No | The bank's ZIP or postal code. | The postal address code that has country-specific format and length.<br />Maximum Length: 35<br />Minimum Length: 0<br />Pattern: `^[A-Za-z0-9 -]*$`<br />Example:`N2 4KB` |
| **Intermediary Bank Country** | No | The bank's country. | Maximum Length: 3<br />Minimum Length: 3<br />Example: `USA`<br />For more information, see [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3). |
| **Resident Type** | No | The beneficiary's resident type. | `RESIDENT`<br />`NON_RESIDENT` |
