---
title: "Payout Statuses"
slug: "payout-statuses"
category: 646cd18024feb8004cf6777b
excerpt: "Get real-time updates on the progress of your payouts."
hidden: false
order: 10
createdAt: "Tue May 23 2023 17:27:34 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jan 09 2024 12:37:08 GMT+0000 (Coordinated Universal Time)"
---
The statuses you receive will depend on whether your payout happens in the [Navro Hub](https://navro.readme.io/docs/payout-statuses#navro-hub-payout-statuses) or via [our API](https://navro.readme.io/docs/payout-statuses#navro-api-payout-statuses).

***

## Navro Hub Payout Statuses

Depending on its stage in the payout lifecycle, a payout made via the Navro Hub will have one of the following statuses.

### Draft

The payout is drafted in the Hub. You now need to request approval so the payout can move to **Pending booking** status. After this stage, you can no longer edit the payout.

### Pending booking

The payout is ready to be reviewed and booked. You can also cancel the payout at this stage. This status can have one of the following reasons.

#### Pending approval

The payout request is awaiting approval. If no approvers are assigned in your payout flow, then the payout goes straight to **Committed** status.

#### Book failed

The payout request failed, for example, because of incorrect payout data, or because a longer-than-expected approval process meant the payout could not occur on the requested day

### Requested

The payout was initiated, so you now need to confirm your acceptance of the foreign exchange (FX) rate. If you’re unhappy with the FX rate, then you can cancel the payout. After this stage, you can no longer cancel the payout.

### Committed

The payout process has started, triggering internal activities, for example, performing Anti-Money Laundering (AML). You don’t need to input anything else. At this stage and the next ones, you may see changes to your account balance. If, for any reason, the payout is rejected, we'll re-credit the amount. This status can have one of the following reasons.

#### Held

The payout is on hold, for example, because of insufficient funds.

#### Reviewing

Navro internal users are reviewing the payout.

#### Pending

You need to provide additional input, for example, additional documents (bank documents, some form of ID) or approval.

### Sent

The payout was sent to our payout partner and cannot be cancelled. If you need to recall a payout now or at the next stage, contact [support@navro.com](mailto:support@navro.com).

### Completed

The payout is completed. You don’t need to do anything else. This status can have one of the following reasons.

#### Rejected

The payout was rejected, for example, by our payout partner or the beneficiary or intermediary banks. To find out why, you may need to contact [support@navro.com](mailto:support@navro.com).

#### Paid

The payout has been successfully paid out to your recipient or beneficiary. If rejected by the beneficiary or intermediary bank, this payout will transition to a **Completed** status with a **Rejected** reason.

#### Cancelled

The payout was cancelled. For example, because:

- an approver cancelled it
- Navro or its partners cancelled it due to incorrect beneficiary bank data

***

## Navro API Payout Statuses

Depending on its stage in the payout lifecycle, a payout made via the Navro API will have one of the following statuses.

### Draft

The payout is drafted. After this stage, you can no longer edit the payout. From here, the payout will go straight to **Requested** status, unless there’s an error. To resolve errors, go to the Hub and ensure the draft payout contains the correct information. If this does not resolve the error, then contact [support@navro.com](mailto:support@navro.com).

### Requested

The payout was initiated, so you now need to confirm your acceptance of the foreign exchange (FX) rate. If you’re unhappy with the FX rate, then you can cancel the payout. After this stage, you can no longer cancel the payout.

### Committed

The payout process has started, triggering internal activities, for example, performing Anti-Money Laundering (AML). You don’t need to input anything else. At this stage and the next ones, you may see changes to your account balance. If, for any reason, the payout is rejected, we'll re-credit the amount. This status can have one of the following reasons.

#### Held

The payout is on hold, for example, because of insufficient funds.

#### Reviewing

Navro internal users are reviewing the payout.

#### Pending

You need to provide additional input, for example, additional documents (bank documents, some form of ID) or approval.

### Sent

The payout was sent to our payout partner and cannot be cancelled. If you need to recall a payout now or at the next stage, contact [support@navro.com](mailto:support@navro.com).

### Completed

The payout is completed. You don’t need to do anything else. This status can have one of the following reasons.

#### Rejected

The payout was rejected, for example, by our payout partner or the beneficiary or intermediary banks. To find out why, you may need to contact [support@navro.com](mailto:support@navro.com).

#### Paid

The payout has been successfully paid out to your recipient or beneficiary. If rejected by the beneficiary or intermediary bank, this payout will transition to a **Completed** status with a **Rejected** reason.

#### Cancelled

The payout was cancelled. For example, because:

- an approver cancelled it
- Navro or its partners cancelled it due to incorrect beneficiary bank data

![The potential stages of a payout lifecycle.](/uploads/initiate-payout.png)
