---
title: "Create a Payout"
slug: "create-a-payout"
category: 646cd18024feb8004cf6777b
excerpt: "Draft a payout for your approvers to review before you pay your beneficiaries."
hidden: false
order: 2
---
The **Payouts** page is where you can create a payout. You can also [search for specific payouts](https://navro.readme.io/docs/search-for-payouts) or [export your payouts as a CSV file](https://navro.readme.io/docs/export-payouts).

> 🚧 Note
>
> You must complete any fields that have a red asterisk.

To create a payout:

1. In the navigation panel, go to **Payouts > Payouts**.
2. Select **Create payout**. This opens the **Payout details** screen.
3. Under **Select funding**, choose the funding source for your payout.
Under **Select destination**, choose the Country and Currency for your payout.
Under **Payout amount**, fill in either the **Funding** or **Destination** amounts. As you do this, the other field (either **Funding** or **Destination**) auto-fills.
If your account does not have enough balance to fund the payout, a warning displays. However, you can still continue the payout process.
Once you complete these fields, select **Next**. This opens the **Select beneficiaries** screen.
4. Under **Find or create a beneficiary**, either search for a beneficiary or select **Create new beneficiary**.
If you want to create a beneficiary, go to **Beneficiary type** and select either **Individual** or **Company**. Then complete the fields and select **Save**. This displays the details for your new beneficiary.
5. Complete the **Reference information** fields, then select **Save**.
If you do not have any approvers, you can select either **Save and book** or **Save**. Select **Save** if you want to make the **View payout** option available.
6. If you want to check the payout details before you request approval, select **View payout**.
Alternatively, select **Request approval** to [send your payout to your organisation’s approvers for review](https://navro.readme.io/docs/ask-for-approvals).

> 🚧 Note
>
> (API user-only)
>
> If you provide the **Destination** amount and it's too low to send, an error message will be returned.
> If you provide the **Funding** amount and it's too low to send, you will only be notified at the booking stage.
> To ensure you send an appropriate amount, see [_Minimum Payout Values_](https://navro.readme.io/docs/minimum-payout-values).
