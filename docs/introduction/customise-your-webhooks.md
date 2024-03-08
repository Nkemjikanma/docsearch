---
title: "Customise Your Webhooks"
slug: "customise-your-webhooks"
category: 6481946a854ed40052a41a38
excerpt: "Build notification flows tailored to your business needs."
hidden: false
order: 3
createdAt: "Tue Jun 20 2023 12:41:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Dec 28 2023 10:06:16 GMT+0000 (Coordinated Universal Time)"
---
During your Navro onboarding process, we'll set up a webhook notification system that sends updates directly to a specified endpoint. We've designed this to keep you informed in real-time about important events during the payout journey.

When an event occurs, Navro sends an HTTP `POST` payload to your endpoint. This payload contains the event details, represented in JSON format. To confirm you've received this data, your callback endpoint should respond with an HTTP `2XX` status code. If your application is unable to receive and process the callback, you can query the entity status directly via the API.

***

## Allowlist the Navro IP Addresses

Navro's webhooks come from a set of fixed Internet Protocol (IP) addresses for production and sandbox environments. We recommend that you allowlist the following IP addresses during your integration.

Production environment:

- `13.41.103.238`
- `18.130.165.50`
- `18.170.17.43`

Sandbox environment:

- `13.41.126.115`
- `18.169.211.8`
- `52.56.75.129`

> 🚧 Note
>
> To get the most out of Navro, you'll need to provide us with two endpoints, one for each environment. This enables us to deliver accurate, timely notifications, so you can monitor and manage your transactions.

***

## Notification Event Types

Navro supports a wide range of payout events and provides comprehensive updates on your payout statuses.

We send notifications for the following statuses:

- **Draft**
- **Pending booking**
- **Requested**
- **Committed**
- **Sent**
- **Completed**

Learn more about [payout statuses](https://navro.readme.io/docs/payout-statuses).

***

## Response Example

Each webhook message will have a response body like the following:

```json
{
  "eventDateTime": "2023-05-25T13:16:35.725483651Z",
  "eventType": "payout-status.change",
  "eventBody": {
    "payoutId": "366cebf7-2aa0-493a-ad19-70782b07f83b",
    "status": "COMPLETED",
    "reason": "REJECTED",
    "statusMessage": null
  }
}
```
