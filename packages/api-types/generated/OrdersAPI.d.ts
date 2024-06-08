export interface paths {
    "/api/oms/pvt/orders/{orderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get order
         * @description This endpoint retrieves order details by searching a specific order ID or sequence number.
         *
         *     > You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
         *
         *     > **Onboarding guide**
         *     >
         *     > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **List Orders** |
         *     | Checkout         | CheckoutResources | **Orders Full Access** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | OMS - Full access | List Orders |
         *     | Checkout Admin | List Orders |
         *     | IntegrationProfile - Fulfillment Oms | List Orders |
         *     | OMS - Full access | Orders Full Access |
         *     | Checkout Admin | Orders Full Access |
         *     | IntegrationProfile - Fulfillment Oms | Orders Full Access |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["GetOrder"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List orders
         * @description Retrieves a list of orders according to the filters described below.
         *
         *     The limit of information retrieval is 30 pages, the default number of orders per page is 15 and it is possible to configure it up to 100 using the `per_page` parameter.
         *
         *     Be aware that since October 3rd, 2018, this endpoint does not return the `items` property.
         *
         *     > You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
         *
         *     > This endpoint should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed) for this purpose.
         *
         *     This endpoint returns only orders that already have been indexed, which takes approximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up-to-date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/docs/guides/orders-feed).
         *
         *     > **Onboarding guide**
         *     >
         *     > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **List Orders** |
         *     | Checkout         | CheckoutResources | **Orders Full Access** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | OMS - Full access | List Orders |
         *     | Checkout Admin | List Orders |
         *     | IntegrationProfile - Fulfillment Oms | List Orders |
         *     | OMS - Full access | Orders Full Access |
         *     | Checkout Admin | Orders Full Access |
         *     | IntegrationProfile - Fulfillment Oms | Orders Full Access |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["ListOrders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/start-handling": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start handling order
         * @description Changes the status of an order to indicate that it is in `handling`.
         *
         *
        > Expect a `status 204` response with no content in case of a successful request. The store must validate this response to retry the call if the response differs from the `204` code, making this flow the store's responsibility. This endpoint can also respond with `status 500`.
         *
         *
        > The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
         */
        post: operations["StartHandling"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel order
         * @description Cancels an order using its identification code (`orderId`). A common scenario is when the seller has a problem fulfilling the order and requests the marketplace to cancel it.
         *
         *     ## Orders that cannot be canceled
         *
         *     The following situations do not allow order cancellation:
         *
         *     - **Partial invoices:** [Partially invoiced](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) orders cannot be canceled. However, the customer can [change the order](https://developers.vtex.com/docs/guides/change-order) to replace or remove items from it.
         *
         *     - **Invoiced status:** Orders with `invoiced` [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) cannot be canceled. If the order has already been invoiced, you can use the [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice) endpoint to generate a return invoice.
         *
         *     - **Incomplete orders:** [Incomplete orders](https://help.vtex.com/en/tutorial/how-incomplete-orders-work--tutorials_294) cannot be canceled.
         *
         *     ## Declining order cancelation
         *
         *     The order flow has a cancellation window (grace period) in which the customer can automatically cancel the order. Except for that period, the seller can [decline an order cancellation request](https://help.vtex.com/en/tutorial/declining-order-cancelation--F2n0h1TeQ5td540Gjyff4), regardless of whether the customer or the marketplace initiated it.
         *
         *     For more information, see [Order canceling improvements](https://developers.vtex.com/docs/guides/order-canceling-improvements).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **Cancel order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | OMS - Full access | Cancel order |
         *     | IntegrationProfile - Fulfillment Oms | Cancel order |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["CancelOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register change on order
         * @description This request allows [changing an order](https://help.vtex.com/en/tutorial/changing-items-from-a-completed-order--tutorials_190) by:
         *
         *     - Adding items to an order.
         *
         *     - Removing items from an order.
         *
         *     - Applying discounts to the total value of the order.
         *
         *     - Incrementing the total value of the order.
         *
         *     > **Timeout settings:** This is a synchronous API, which means the application requests data and waits until a value is returned. This behavior can cause timeout errors. To avoid them, we recommend setting the timeout in 20 seconds.
         *
         *     In change order scenarios, it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a partial invoice scenario. The updated value is settled by the VTEX Payment Gateway, and the customer reimbursement is automatic.
         *
         *     This action can only be done for orders in the following status:
         *
         *     - `handling`
         *
         *     - `waiting-for-fulfillment`
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *     | OMS | OMS access | **Cancel order** |
         *     | OMS | OMS access | **Change order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Orders Full Access |
         *     | OMS - Full access | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Oms | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Gateway | Cancel order |
         *     | IntegrationProfile - Fulfillment Gateway Oms | <p>Cancel order</p><p>Change order</p> |
         *     | inStore Sales Person | <p>Cancel order</p><p>Change order</p> |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         */
        post: operations["RegisterChange"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/interactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add log in orders
         * @description Add a Log in Interactions Order Array.
         */
        post: operations["AddLog"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Order invoice notification
         * @description This request is used for [invoicing an order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT). Entering the order's invoice means it was successfully completed, and the order status can be changed to the `invoiced` in the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). Once an order is `invoiced`, its status cannot be changed.
         *
         *     After the insertion of the invoice, the order's total value will be updated, even in [partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenarios.
         *
         *     >❗ To avoid rounding errors, we recommend always sending the object of items being invoiced.
         *
         *     ## Partial invoices
         *
         *     After adding a [partial invoice](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe), the order's value will be updated, corresponding to a partial settled value in the VTEX payment gateway.
         *
         *     Partially invoiced orders cannot be canceled, and cancellation attempts will result in a `400` status code error. If the customer wants to replace or remove items, it is possible to [change the order](https://developers.vtex.com/docs/guides/change-order).
         *
         *     > The partial invoices feature is available for all VTEX stores. The partial settlement in the gateway is in Beta, and requires a connector with the Payment Provider Protocol.
         *
         *     ## Returning items
         *
         *     Besides using this endpoint for generating invoices for sold items, you can use it for generating invoices for returned items. You determine this in the request body `type` field by choosing one of the following values:
         *
         *     - `output`: selling order invoice.
         *
         *     - `input`: returning items invoice.
         *
         *     Be aware of generating return invoices only after the full order amount was invoiced, otherwise, no refund will occur.
         *
         *     ## Changing the receipt code
         *
         *     Every time this endpoint is called using the same `invoiceNumber`, a new `receipt` code is generated, and it overrides the previous one. By doing this, you cannot change other information, only the `receipt` code.
         *
         *     ## Integration with marketplaces
         *
         *     The invoice should be pushed to the fulfillment account, not to the marketplace account. Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.
         *
         *     This endpoint is also used by the seller to send the order tracking information. However, this only should be done after the seller has the tracking information.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **Notify invoice** |
         *     | OMS | OMS access | **Notify refund** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | OMS - Full access | Cancel order |
         *     | IntegrationProfile - Fulfillment Oms | Cancel order |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["InvoiceNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update order's partial invoice (send tracking number)
         * @description Update a given order, adding its tracking number to its [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe).
         *
         *
        After using this call to add a tracking number to an order, you can use the [Update order tracking status](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-/tracking) API request to add tracking events.
         *
         *
        > The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).
         */
        patch: operations["Updatepartialinvoice.SendTrackingNumber"];
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/invoice/{invoiceNumber}/tracking": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update order tracking status
         * @description This endpoint sends a tracking event to an order that already has a tracking number registered to its invoice.
         *
         *     This request is not meant to send a tracking number and URL to the invoice. If you wish to send a tracking number and URL to an order, use the [Update order's partial invoice](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-) endpoint. For more information, see [Partial invoice](https://help.vtex.com/en/tracks/partial-invoices--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenarios.
         *
         *     This endpoint applies to orders with any shipping type, whether delivery or [pickup](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
         *
         *     > The `Notify invoice` License Manager resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about [License Manager Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).
         */
        put: operations["UpdateTrackingStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/conversation-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve order conversation
         * @description List all order conversations of an order by its order ID.
         */
        get: operations["GetConversation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/payment-transaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve payment transaction
         * @description Retrieves transaction details by order ID. All events in the transaction will be registered in this call's response body.
         *
         *     In scenarios of [order changes](https://developers.vtex.com/vtex-rest-api/reference/registerchange), it is possible to insert a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). The total value of the order will be updated after the insertion of the invoice, even when there is a [Partial invoice](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) scenario. The updated value is settled by VTEX's Payment Gateway. The reimbursement for the shopper is automatic.
         */
        get: operations["GetPaymenttransaction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/orders/{orderId}/payments/{paymentId}/payment-notification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send payment notification
         * @description Send a payment notification of a given order, by order ID.
         *
         *
        > The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
         */
        post: operations["SendPaymentNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/pvt/feed/orders/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get feed order status
         * @description Get feed order status (deprecated)
         */
        get: operations["Getfeedorderstatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/feed/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get feed configuration
         * @description The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration).
         *
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
         *
         *
         */
        get: operations["GetFeedConfiguration"];
        put?: never;
        /**
         * Create or update feed configuration
         * @description The Orders Feed v3 is the best way to create order integrations. Below you can find details on the configuration API specification, and to know more see our [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed) and our [order integration guide](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)
         *
         *
        There are two types of filtering that can be used. The `FromWorkflow` type filters orders by status, whereas the `FromOrders` type uses JSONata expressions to filter orders according to any property in the orders JSON document. This enables stores to filter delivered orders and orders in which products have been added or removed, for example. To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [Test JSONata expression](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata) endpoint.
         */
        post: operations["FeedConfiguration"];
        /**
         * Delete feed configuration
         * @description Deletes the configuration set up in [Feed v3](https://developers.vtex.com/docs/guides/orders-feed).
         */
        delete: operations["FeedConfigurationDelete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/feed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve feed items
         * @description Retrieve items from [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.
         *
         *     The event will be removed if the message `send retry` is equal to, or greater than the maximum retention period.
         *
         *     > This API will return `404 Not Found` if there is no [Feed Configuration](https://developers.vtex.com/docs/guides/orders-feed) available for the given X-VTEX-API-AppKey.
         */
        get: operations["Getfeedorderstatus1"];
        put?: never;
        /**
         * Commit feed items
         * @description Commit items in the [feed](https://developers.vtex.com/docs/guides/orders-feed) queue.
         */
        post: operations["Commititemfeedorderstatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/hook/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get hook configuration
         * @description Retrieves a given hook's configuration details. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).
         *
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
         *
         *
         */
        get: operations["GetHookConfiguration"];
        put?: never;
        /**
         * Create or update hook configuration
         * @description Configures filtering rules applied to orders hook. Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).
         *
         *
        There are two types of filtering that can be used:
         *
         *
         - `FromWorkflow`: filters orders by status.
         *
         *
         - `FromOrders`: uses JSONata expressions to filter orders according to any property in the orders JSON document.
         *
         *
         This enables stores to filter delivered orders and orders in which products have been added or removed, for example.
         *
         *
        To learn more, access the [JSONata documentation](https://docs.jsonata.org/overview.html) and test filtering JSONata expressions with our [expressions API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/orders/expressions/jsonata).
         */
        post: operations["HookConfiguration"];
        /**
         * Delete hook configuration
         * @description Deletes a given hook configuration.
         *
         *
        Learn more with the [orders hook guide](https://developers.vtex.com/vtex-rest-api/docs/orders-feed#hook).
         */
        delete: operations["DeleteHookConfiguration"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/user/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve user's orders
         * @description Lists all orders from a given customer, filtering by their email.
         *
         *     > You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
         *
         *     > Note that this request should be made by an [user](https://developers.vtex.com/docs/guides/user-authentication-and-login) or [an appKey / appToken pair](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) that is associated with the [Call center operator](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#call-center-operator) role. Otherwise, it will return only orders from the same email informed in the `clientEmail` query parameter.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **View order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Call center operator | View order |
         *     | OMS - Read only | View order |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["Userorderslist"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/oms/user/orders/{orderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve user order details
         * @description Lists all details from an order, through the perspective of the customer who placed the order.
         *
         *     > You can only access information from orders created in the last two years, and that same period is valid for customers through [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
         *
         *     > Note that this request should be made by an [user](https://developers.vtex.com/docs/guides/user-authentication-and-login) or [an appKey / appToken pair](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) that is associated with the [Call center operator](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#call-center-operator) role. Otherwise, it will return only orders from the same email informed in the `clientEmail` query parameter.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **View order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Call center operator | View order |
         *     | OMS - Read only | View order |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["Userorderdetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/expressions/jsonata": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Test JSONata expression
         * @description This endpoint allows you to test a JSON document with a JSONata expression, returning `true` if the document meets the criteria posed in the expression, or `false` if it does not.
         *
         *
        Since JSONata expressions can be used to filter order updates in the [Orders API feed and hook](https://developers.vtex.com/docs/guides/orders-feed), this endpoint can be used to test an expression's results before configuring the [feed or hook](https://developers.vtex.com/docs/guides/orders-feed).
         *
         *
        Learn more about how to use JSONata expressions, in the [JSONata documentation](https://docs.jsonata.org/overview.html).
         */
        post: operations["TestJSONataExpression"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pvt/configuration/window-to-change-seller": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get window to change seller
         * @description Retrieves a marketplace's window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
         *
         *
        The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.
         */
        get: operations["GetWindowToChangeSeller"];
        put?: never;
        /**
         * Update window to change seller
         * @description Updates a marketplace's window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
         *
         *
        It is possible to check the current window using the request Get window to change seller.
         */
        post: operations["UpdateWindowToChangeSeller"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/order-system/orders/{changeOrderId}/changes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get order change history
         * @description This endpoint retrieves a history of every successful [Change order request](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) made to an order and provides detailed information about each request.
         *
         *     You can access an order's history using the `changeOrderId`, which corresponds to its `orderId`.
         *
         *     > If you want detailed information about a single change request, you can use the endpoint [Get order change details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https:/developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https:/help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *     | OMS | OMS access | **Cancel order** |
         *     | OMS | OMS access | **Change order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Orders Full Access |
         *     | OMS - Full access | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Oms | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Gateway | Cancel order |
         *     | IntegrationProfile - Fulfillment Gateway Oms | <p>Cancel order</p><p>Change order</p> |
         *     | inStore Sales Person | <p>Cancel order</p><p>Change order</p> |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         */
        get: operations["GetChangeHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Create order change
         * @description [Change order](https://help.vtex.com/en/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ) feature allows you to modify an order, whether the change is motivated by customer mistakes, product unavailability, or others. Both sellers and marketplaces can use this endpoint and change orders in multiple scenarios, and it is possible to make a single change or combine multiple ones in the same request.
         *     The possible change order operations you can perform are the following:
         *     - **Add:** Adding items, quantity, or product weight.
         *     - **Remove:** Removing a part of items or the total quantity.
         *     - **Replace:** Changing items' quantity, weight, or price. You can also replace one or more items with different ones, including weighable products.
         *
         *     >❗ When removing or adding items to an order, your [inventory](https://help.vtex.com/en/tutorial/inventory-management--tutorials_139) is not automatically updated. You can use the [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-) endpoint.
         *
         *     The next sections are listed below:
         *     - Number of changes per order
         *     - Acceptable order status for changes
         *     - Order change and price
         *     - Combining multiples operations
         *
         *     ## Number of changes per order
         *     Besides being able to combine multiple change operations - add, remove, and replace - in a single request, you can make different change requests, and there is no limit to how many times an order can be changed.
         *
         *     Each order has its change history, you can retrieve it using the [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes) endpoint.
         *
         *     ## Acceptable order status for changes
         *     You can only change an order when it is one of the following [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) status:
         *     - `handling`
         *     - `waiting-for-fulfillment`
         *     - `ready for invoicing`
         *
         *     It is not possible to change an order when the payment transaction is complete.
         *
         *     ## Order change and price
         *     When you add, remove or replace items using this endpoint, the order and payment transaction values are automatically updated. Change order calculates the update of the following values:
         *     - Item value
         *     - Total value
         *
         *     **Example:** If you send the request body for replacing items without the unit multiplier (`unitMultiplier`) or measurement (`measurementUnit`), Change order will get this information on your store's Catalog, Pricing and Payment systems.
         *     >⚠️ Increasing the price of an order is allowed only when the order was paid by credit card, [payable notes](https:/help.vtex.com/en/tutorial/setting-up-payments-with-promissory--5pW7avTwtyQcMu4uiW8quQ), cash, or [credit control](https:/help.vtex.com/en/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0). In addition, the [acquirer](https:/help.vtex.com/en/tutorial/what-is-an-acquirer--7N1oRTG8dGmOiIugC0cs4E) must allow transactions without the CVV code and two charging transactions in the same order.
         *
         *     For order changes with discounts, Order Management System (OMS) considers that you still can change the order's transactional value, as long as its status in Transaction Details is not `Finished`.
         *
         *     ## Order change and payment transaction flow
         *
         *     An order's [transaction flow](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y) goes through various payment statuses before its conclusion. Within certain conditions, it is possible to change settled orders. The requirements are the following:
         *
         *     - The order's [payment method](https://help.vtex.com/en/tutorial/difference-between-payment-methods-and-payment-conditions--3azJenhGFyUy2gsocms42Q) is a credit card.
         *     - The settlement occurs before the order is invoiced.
         *     - The payment connector is configured to allow partial refunds.
         *
         *     > Currently, [Adyen](https://help.vtex.com/en/tutorial/configuring-payment-with-adyenv3--7xAz67E2Eg63LWCQNjVdwv) is the only payment connector that supports that operation.
         *
         *     If the order change increases or decreases the cost for the customer, the platform has the following behavior:
         *
         *     - **Smaller price after order change:** An automatic notification is sent to the payment [gateway](https://help.vtex.com/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) to reimburse the customer for the difference.
         *     - **Higher price after order change:** An automatic notification is sent to the payment gateway to require the customer to pay for the additional cost.
         *
         *     ## Combining multiples operations
         *     You can use this endpoint to make a single change operation or combine them in the same request. See some examples below.
         *
         *     ### Add request body example:
         *
         *     ```json
         *     {
         *        "add": {
         *           "items": [
         *               {
         *                   "id": "8",
         *                   "quantity": 1,
         *                   "measurementUnit": "un",
         *                   "unitMultiplier": 1
         *               }
         *           ]
         *         }
         *     }
         *     ```
         *
         *     ### Remove request body example:
         *
         *     ```json
         *     {
         *         "reason": "The client wants to remove a product.",
         *         "remove": {
         *             "items": [
         *                 {
         *                     "id": "8",
         *                     "quantity": 2,
         *                     "measurementUnit": "un",
         *                     "unitMultiplier": 1
         *                 }
         *             ]
         *         }
         *     }
         *     ```
         *
         *     ### Replace request body example:
         *     ```json
         *     {
         *         "reason": "The client wants to increase the product weight.",
         *         "replace": [
         *             {
         *                 "from": {
         *                     "items": [
         *                         {
         *                             "id": "1",
         *                             "quantity": 1
         *                         }
         *                     ]
         *                 },
         *                 "to": {
         *                     "items": [
         *                         {
         *                             "id": "1",
         *                             "quantity": 1,
         *                             "measurementUnit": "kg",
         *                             "unitMultiplier": 1.0
         *                         }
         *                     ],
         *                     "shippingData": {
         *                         "logisticsInfo": [
         *                             {
         *                                 "itemIndex": 0,
         *                                 "slaId": "Normal",
         *                                 "deliveryChannel": "delivery",
         *                                 "addressId": "12334048475146857",
         *                                 "price": 1000
         *                             }
         *                         ]
         *                     }
         *                 }
         *             }
         *         ]
         *     }
         *     ```
         *
         *
         *     ### Add, remove and replace request body example:
         *
         *
         *     ```json
         *     {
         *       "reason": "The client wants to add, remove and replace a weighable product.",
         *       "manualDiscountValue": 0,
         *       "add": {
         *           "items": [
         *               {
         *                   "id": "8",
         *                   "quantity": 1,
         *                   "measurementUnit": "un",
         *                   "unitMultiplier": 1
         *               }
         *           ]
         *       },
         *       "remove": {
         *           "items": [
         *               {
         *                   "id": "31",
         *                   "quantity": 1,
         *                   "measurementUnit": "un",
         *                   "unitMultiplier": 1
         *               }
         *           ]
         *       },
         *       "replace": [
         *                             {
         *                               "from": {
         *                                 "items": [
         *                                   {
         *                                     "id": "1",
         *                                     "quantity": 1
         *                                   }
         *                                 ]
         *                               },
         *                               "to": {
         *                                 "items": [
         *                                   {
         *                                     "id": "1",
         *                                     "quantity": 1,
         *                                     "measurementUnit": "kg",
         *                                     "unitMultiplier": 1.0
         *                                   }
         *                                 ],
         *                                 "shippingData": {
         *                                   "logisticsInfo": [
         *                                     {
         *                                       "itemIndex": 0,
         *                                       "slaId": "Normal",
         *                                       "deliveryChannel": "delivery",
         *                                       "addressId": "12334048475146857",
         *                                       "price": 1000
         *                                     }
         *                                ]
         *                            }
         *                       }
         *                 }
         *          ]
         *     }
         *     ```
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *     | OMS | OMS access | **Cancel order** |
         *     | OMS | OMS access | **Change order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Orders Full Access |
         *     | OMS - Full access | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Oms | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Gateway | Cancel order |
         *     | IntegrationProfile - Fulfillment Gateway Oms | <p>Cancel order</p><p>Change order</p> |
         *     | inStore Sales Person | <p>Cancel order</p><p>Change order</p> |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         */
        patch: operations["Createchange"];
        trace?: never;
    };
    "/api/order-system/orders/{changeOrderId}/changes/{changeRequestId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get order change details
         * @description This endpoint retrieves detailed information about a specific order change. So after creating multiple changes, you can get information on each one of them by its `changeRequestId`, the unique identification code generated by the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint.
         *
         *     The successful status code is `200 OK`, and its response body schema is very similar to the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint, with some additional fields:
         *
         *     - `status`: The change request status in the workflow, which progresses in the following order:
         *       - `waiting-acknowledgement`
         *       - `waiting-confirmation`
         *       - `done`
         *       - `canceled`
         *
         *     - `inProgress`: When set as `true`, the order is still progressing in the order flow, when set as `false`, it is complete, whether by cancellation or because the customer received it.
         *
         *     - `logs`: Lists the workflow processing logs.
         *
         *     > If you want information about all the changes made to an order, use the [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes) endpoint.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *     | OMS | OMS access | **Cancel order** |
         *     | OMS | OMS access | **Change order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Orders Full Access |
         *     | OMS - Full access | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Oms | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Gateway | Cancel order |
         *     | IntegrationProfile - Fulfillment Gateway Oms | <p>Cancel order</p><p>Change order</p> |
         *     | inStore Sales Person | <p>Cancel order</p><p>Change order</p> |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         */
        get: operations["GetChangeDetail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/order-system/orders/{changeOrderId}/changes/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Preview order change
         * @description This endpoint allows you to simulate an order change and preview what the real change will look like if you use the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint. A preview is especially useful for more complex scenarios, such as orders with multiple items and combinations of change operations — add, remove, and replace. Ensuring you get the desired results before making the actual change helps prevent mistakes.
         *
         *     The request body is the same one to be used in the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint, and the response body of a successful request provides a preview of the change order effect.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *     | OMS | OMS access | **Cancel order** |
         *     | OMS | OMS access | **Change order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Orders Full Access |
         *     | OMS - Full access | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Oms | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Gateway | Cancel order |
         *     | IntegrationProfile - Fulfillment Gateway Oms | <p>Cancel order</p><p>Change order</p> |
         *     | inStore Sales Person | <p>Cancel order</p><p>Change order</p> |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         */
        post: operations["PreviewChange"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/order-system/orders/{changeOrderId}/changes/{changeRequestId}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Retry order change
         * @description This endpoint makes a new attempt to perform an order change previously made using the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint that, for some reason, was not completely processed.
         *
         *     To make this request, you need the `changeRequestId`, a unique change identification code that you get when you make a [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) request. When you retry to change an order using the `changeRequestId`, instead of creating a new change, you avoid duplications.
         *
         *     This endpoint's successful response status code is `204 No Content`, therefore with no response body.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *     | OMS | OMS access | **Cancel order** |
         *     | OMS | OMS access | **Change order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Orders Full Access |
         *     | OMS - Full access | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Oms | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Gateway | Cancel order |
         *     | IntegrationProfile - Fulfillment Gateway Oms | <p>Cancel order</p><p>Change order</p> |
         *     | inStore Sales Person | <p>Cancel order</p><p>Change order</p> |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         */
        post: operations["RetryChange"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/order-system/orders/{changeOrderId}/changes/{changeRequestId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel order change
         * @description This endpoint cancels an [order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes). It is meant for when, due to an error, a change was not completely processed, and you do not wish to [retry](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry) it. For this request, you need the order's `changeRequestId`, the unique identification code generated by the [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) endpoint.
         *
         *     >⚠️ Once an order change has been successfully processed, canceling it is no longer possible. If you wish to revert the changes made to an order, you will have to [create a new order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *     | OMS | OMS access | **Cancel order** |
         *     | OMS | OMS access | **Change order** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Orders Full Access |
         *     | OMS - Full access | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Oms | <p>Cancel order</p><p>Change order</p> |
         *     | IntegrationProfile - Fulfillment Gateway | Cancel order |
         *     | IntegrationProfile - Fulfillment Gateway Oms | <p>Cancel order</p><p>Change order</p> |
         *     | inStore Sales Person | <p>Cancel order</p><p>Change order</p> |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         */
        post: operations["CancelChangeStoppedonError"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * GetOrder
         * @example {
         *       "emailTracked": "a27499cad31f42b7a771ae34f57c8358@ct.vtex.com.br",
         *       "approvedBy": "Person's name",
         *       "cancelledBy": "Person's name",
         *       "cancelReason": "Explanation for cancellation",
         *       "orderId": "v5195004lux-01",
         *       "sequence": "502556",
         *       "marketplaceOrderId": "",
         *       "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
         *       "sellerOrderId": "00-v5195004lux-01",
         *       "origin": "Marketplace",
         *       "affiliateId": "",
         *       "salesChannel": "1",
         *       "merchantName": null,
         *       "status": "handling",
         *       "statusDescription": "Preparando Entrega",
         *       "value": 1160,
         *       "creationDate": "2019-01-28T20:09:43.899958+00:00",
         *       "lastChange": "2019-02-06T20:46:11.7010747+00:00",
         *       "orderGroup": null,
         *       "totals": [
         *         {
         *           "id": "Items",
         *           "name": "Total dos Itens",
         *           "value": 3290
         *         },
         *         {
         *           "id": "Discounts",
         *           "name": "Total dos Descontos",
         *           "value": 0
         *         },
         *         {
         *           "id": "Shipping",
         *           "name": "Total do Frete",
         *           "value": 1160
         *         },
         *         {
         *           "id": "Tax",
         *           "name": "Total da Taxa",
         *           "value": 0
         *         },
         *         {
         *           "id": "Change",
         *           "name": "Total das mudanças",
         *           "value": -3290
         *         }
         *       ],
         *       "items": [
         *         {
         *           "uniqueId": "87F0945396994B349158C7D9C9941442",
         *           "id": "1234568358",
         *           "productId": "9429485",
         *           "ean": null,
         *           "lockId": "00-v5195004lux-01",
         *           "itemAttachment": {
         *             "content": {},
         *             "name": null
         *           },
         *           "attachments": [],
         *           "quantity": 1,
         *           "seller": "1",
         *           "name": "Bay Max L",
         *           "refId": "BIGHEROBML",
         *           "price": 3290,
         *           "listPrice": 3290,
         *           "manualPrice": null,
         *           "priceTags": [],
         *           "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
         *           "detailUrl": "/bay-max-9429485/p",
         *           "components": [],
         *           "bundleItems": [],
         *           "params": [],
         *           "offerings": [],
         *           "attachmentOfferings": [
         *             {
         *               "name": "vtex.subscription.weekly",
         *               "required": false,
         *               "schema": {
         *                 "vtex.subscription.key.frequency": {
         *                   "MaximumNumberOfCharacters": 7,
         *                   "Domain": [
         *                     " 1 week",
         *                     " 2 week",
         *                     " 3 week",
         *                     " 4 week"
         *                   ]
         *                 }
         *               }
         *             }
         *           ],
         *           "sellerSku": "1234568358",
         *           "priceValidUntil": null,
         *           "commission": 0,
         *           "tax": 0,
         *           "preSaleDate": null,
         *           "additionalInfo": {
         *             "brandName": "VTEX",
         *             "brandId": "2000023",
         *             "categoriesIds": "/1/",
         *             "productClusterId": "135,142",
         *             "commercialConditionId": "5",
         *             "dimension": {
         *               "cubicweight": 0.7031,
         *               "height": 15,
         *               "length": 15,
         *               "weight": 15,
         *               "width": 15
         *             },
         *             "offeringInfo": null,
         *             "offeringType": null,
         *             "offeringTypeId": null
         *           },
         *           "measurementUnit": "un",
         *           "unitMultiplier": 1,
         *           "sellingPrice": 3290,
         *           "isGift": false,
         *           "shippingPrice": null,
         *           "rewardValue": 0,
         *           "freightCommission": 0,
         *           "priceDefinitions": {
         *             "sellingPrices": [
         *               {
         *                 "value": 99,
         *                 "quantity": 1
         *               }
         *             ],
         *             "calculatedSellingPrice": 99,
         *             "total": 99
         *           },
         *           "taxCode": null,
         *           "parentItemIndex": null,
         *           "parentAssemblyBinding": null,
         *           "callCenterOperator": "callCenterOp5473869",
         *           "serialNumbers": "3",
         *           "assemblies": [],
         *           "costPrice": 52
         *         }
         *       ],
         *       "marketplaceItems": [],
         *       "clientProfileData": {
         *         "id": "clientProfileData",
         *         "email": "rodrigo.cunha@vtex.com.br",
         *         "firstName": "Rodrigo",
         *         "lastName": "VTEX",
         *         "documentType": "cpf",
         *         "document": "11047867702",
         *         "phone": "+5521972321094",
         *         "corporateName": null,
         *         "tradeName": null,
         *         "corporateDocument": null,
         *         "stateInscription": null,
         *         "corporatePhone": null,
         *         "isCorporate": false,
         *         "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93",
         *         "customerClass": null
         *       },
         *       "giftRegistryData": null,
         *       "marketingData": "marketing data",
         *       "ratesAndBenefitsData": {
         *         "id": "ratesAndBenefitsData",
         *         "rateAndBenefitsIdentifiers": []
         *       },
         *       "shippingData": {
         *         "id": "shippingData",
         *         "address": {
         *           "addressType": "residential",
         *           "receiverName": "Rodrigo Cunha",
         *           "addressId": "-1425945657910",
         *           "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *           "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *           "postalCode": "22250-040",
         *           "city": "Rio de Janeiro",
         *           "state": "RJ",
         *           "country": "BRA",
         *           "street": "Praia de Botafogo",
         *           "number": "300",
         *           "neighborhood": "Botafogo",
         *           "complement": "3",
         *           "reference": null,
         *           "geoCoordinates": []
         *         },
         *         "logisticsInfo": [
         *           {
         *             "itemIndex": 1,
         *             "selectedSla": "Normal",
         *             "lockTTL": "10d",
         *             "price": 1160,
         *             "listPrice": 1160,
         *             "sellingPrice": 1160,
         *             "deliveryWindow": null,
         *             "deliveryCompany": "Todos os CEPS",
         *             "shippingEstimate": "5bd",
         *             "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
         *             "slas": [
         *               {
         *                 "id": "Normal",
         *                 "name": "Normal",
         *                 "shippingEstimate": "5bd",
         *                 "deliveryWindow": null,
         *                 "price": 1160,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region196",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "3d",
         *                 "pickupDistance": 0
         *               },
         *               {
         *                 "id": "Expressa",
         *                 "name": "Expressa",
         *                 "shippingEstimate": "5bd",
         *                 "deliveryWindow": null,
         *                 "price": 1160,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region196",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "3d",
         *                 "pickupDistance": 0
         *               },
         *               {
         *                 "id": "Quebra Kit",
         *                 "name": "Quebra Kit",
         *                 "shippingEstimate": "2bd",
         *                 "deliveryWindow": null,
         *                 "price": 1392,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region196",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "3d",
         *                 "pickupDistance": 0
         *               },
         *               {
         *                 "id": "Sob Encomenda",
         *                 "name": "Sob Encomenda",
         *                 "shippingEstimate": "32bd",
         *                 "deliveryWindow": null,
         *                 "price": 1392,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region196",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "3d",
         *                 "pickupDistance": 0
         *               }
         *             ],
         *             "shipsTo": [
         *               "BRA"
         *             ],
         *             "deliveryIds": [
         *               {
         *                 "courierId": "197a56f",
         *                 "courierName": "Todos os CEPS",
         *                 "dockId": "1",
         *                 "quantity": 1,
         *                 "warehouseId": "1_1",
         *                 "accountCarrierName": "recorrenciaqa",
         *                 "kitItemDetails": []
         *               }
         *             ],
         *             "deliveryChannels": [
         *               {
         *                 "id": "delivery",
         *                 "stockBalance": 0
         *               },
         *               {
         *                 "id": "pickup-in-point",
         *                 "stockBalance": 0
         *               }
         *             ],
         *             "deliveryChannel": "delivery",
         *             "pickupStoreInfo": {
         *               "additionalInfo": null,
         *               "address": null,
         *               "dockId": null,
         *               "friendlyName": null,
         *               "isPickupStore": false
         *             },
         *             "addressId": "-1425945657910",
         *             "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *             "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *             "polygonName": "region46",
         *             "pickupPointId": "1_VTEX-RJ",
         *             "transitTime": "3d"
         *           }
         *         ],
         *         "trackingHints": null,
         *         "selectedAddresses": [
         *           {
         *             "addressId": "-1425945657910",
         *             "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *             "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *             "addressType": "residential",
         *             "receiverName": "Rodrigo Cunha",
         *             "street": "Praia de Botafogo",
         *             "number": "518",
         *             "complement": "10",
         *             "neighborhood": "Botafogo",
         *             "postalCode": "22250-040",
         *             "city": "Rio de Janeiro",
         *             "state": "RJ",
         *             "country": "BRA",
         *             "reference": null,
         *             "geoCoordinates": []
         *           }
         *         ]
         *       },
         *       "paymentData": {
         *         "transactions": [
         *           {
         *             "isActive": true,
         *             "transactionId": "418213DE29634837A63DD693A937A696",
         *             "merchantName": "luxstore",
         *             "payments": [
         *               {
         *                 "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *                 "paymentSystem": "6",
         *                 "paymentSystemName": "Boleto Bancário",
         *                 "value": 4450,
         *                 "installments": 1,
         *                 "referenceValue": 4450,
         *                 "cardHolder": null,
         *                 "cardNumber": null,
         *                 "firstDigits": null,
         *                 "lastDigits": null,
         *                 "cvv2": null,
         *                 "expireMonth": null,
         *                 "expireYear": null,
         *                 "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *                 "giftCardId": null,
         *                 "giftCardName": null,
         *                 "giftCardCaption": null,
         *                 "redemptionCode": null,
         *                 "group": "bankInvoice",
         *                 "tid": null,
         *                 "dueDate": "2019-02-02",
         *                 "connectorResponses": {
         *                   "Tid": "94857956",
         *                   "ReturnCode": "200",
         *                   "Message": "logMessage",
         *                   "authId": "857956"
         *                 },
         *                 "giftCardProvider": "presentCard",
         *                 "giftCardAsDiscount": false,
         *                 "koinUrl": "koinURL",
         *                 "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *                 "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *                 "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
         *                 "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
         *                 "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
         *                 "bankIssuedInvoiceBarCodeType": "i25",
         *                 "billingAddress": {}
         *               }
         *             ]
         *           }
         *         ]
         *       },
         *       "packageAttachment": {
         *         "packages": []
         *       },
         *       "sellers": [
         *         {
         *           "id": "1",
         *           "name": "Loja do Suporte",
         *           "logo": "https://sellersLogo/images.png",
         *           "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName"
         *         }
         *       ],
         *       "callCenterOperatorData": null,
         *       "followUpEmail": "7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br",
         *       "lastMessage": null,
         *       "hostname": "luxstore",
         *       "invoiceData": null,
         *       "changesAttachment": {
         *         "id": "changeAttachment",
         *         "changesData": [
         *           {
         *             "reason": "Blah",
         *             "discountValue": 3290,
         *             "incrementValue": 0,
         *             "itemsAdded": [],
         *             "itemsRemoved": [
         *               {
         *                 "id": "1234568358",
         *                 "name": "Bay Max L",
         *                 "quantity": 1,
         *                 "price": 3290,
         *                 "unitMultiplier": null
         *               }
         *             ],
         *             "receipt": {
         *               "date": "2019-02-06T20:46:04.4003606+00:00",
         *               "orderId": "v5195004lux-01",
         *               "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *             }
         *           }
         *         ]
         *       },
         *       "openTextField": null,
         *       "roundingError": 0,
         *       "orderFormId": "caae7471333e403f959fa5fd66951340",
         *       "commercialConditionData": null,
         *       "isCompleted": true,
         *       "customData": null,
         *       "storePreferencesData": {
         *         "countryCode": "BRA",
         *         "currencyCode": "BRL",
         *         "currencyFormatInfo": {
         *           "CurrencyDecimalDigits": 2,
         *           "CurrencyDecimalSeparator": ",",
         *           "CurrencyGroupSeparator": ".",
         *           "CurrencyGroupSize": 3,
         *           "StartsWithCurrencySymbol": true
         *         },
         *         "currencyLocale": 1046,
         *         "currencySymbol": "R$",
         *         "timeZone": "E. South America Standard Time"
         *       },
         *       "allowCancellation": false,
         *       "allowEdition": false,
         *       "isCheckedIn": false,
         *       "marketplace": {
         *         "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
         *         "isCertified": null,
         *         "name": "luxstore"
         *       },
         *       "authorizedDate": "2019-01-28T20:33:04+00:00",
         *       "invoicedDate": null
         *     }
         */
        GetOrder: {
            emailTracked: string;
            approvedBy: string | null;
            /** @description User that canceled the order. */
            cancelledBy: string | null;
            /** @description Explanation for cancellation. */
            cancelReason: string | null;
            orderId: string;
            sequence: string;
            marketplaceOrderId: string;
            marketplaceServicesEndpoint: string;
            sellerOrderId: string;
            origin: string;
            affiliateId: string;
            salesChannel: string;
            merchantName: string | null;
            status: string;
            /**
             * @deprecated
             * @description `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.
             */
            statusDescription: string;
            value: number;
            creationDate: string;
            lastChange: string;
            orderGroup: string | null;
            /** @description Array containing totals' information. */
            totals: components["schemas"]["Total"][];
            /** @description Array containing items' information. */
            items: components["schemas"]["Item"][];
            /** @description Array containing marketplace items information. */
            marketplaceItems: string[];
            clientProfileData: components["schemas"]["ClientProfileData"];
            giftRegistryData: string | null;
            marketingData: string | null;
            ratesAndBenefitsData: components["schemas"]["RatesAndBenefitsData"];
            shippingData: components["schemas"]["ShippingData"];
            paymentData: components["schemas"]["PaymentData"];
            packageAttachment: components["schemas"]["PackageAttachment"];
            /** @description Array containing sellers information. */
            sellers: components["schemas"]["Seller"][];
            callCenterOperatorData: string | null;
            followUpEmail: string;
            lastMessage: string | null;
            hostname: string;
            /** @description Information pertinent to the order's invoice. */
            invoiceData: Record<string, never>;
            changesAttachment: components["schemas"]["ChangesAttachment"];
            /** @description This field must be filled in using the following format:
             *
            ```
             *
            {
             *         "fieldExample": "ValueExample"
             *       }
             *
            ```
             *
            . */
            openTextField: string | null;
            roundingError: number;
            orderFormId: string;
            commercialConditionData: string | null;
            isCompleted: boolean;
            customData: string | null;
            storePreferencesData: components["schemas"]["StorePreferencesData"];
            allowCancellation: boolean;
            allowEdition: boolean;
            isCheckedIn: boolean;
            marketplace: components["schemas"]["Marketplace"];
            authorizedDate: string;
            invoicedDate: string | null;
        };
        /**
         * Total
         * @example {
         *       "id": "Items",
         *       "name": "Total dos Itens",
         *       "value": 3290
         *     }
         */
        Total: {
            /** @description Code that identifies if the information is about `Items`, `Discounts`, `Shipping`, `Tax` or `Change`. */
            id: string;
            /** @description Name of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`. */
            name: string;
            /** @description Total amount of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`. */
            value: number;
        };
        /**
         * Item
         * @example {
         *       "uniqueId": "87F0945396994B349158C7D9C9941442",
         *       "id": "1234568358",
         *       "productId": "9429485",
         *       "ean": null,
         *       "lockId": "00-v5195004lux-01",
         *       "itemAttachment": {
         *         "content": {},
         *         "name": null
         *       },
         *       "attachments": [],
         *       "quantity": 1,
         *       "seller": "1",
         *       "name": "Bay Max L",
         *       "refId": "BIGHEROBML",
         *       "price": 3290,
         *       "listPrice": 3290,
         *       "manualPrice": null,
         *       "priceTags": [],
         *       "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
         *       "detailUrl": "/bay-max-9429485/p",
         *       "components": [],
         *       "bundleItems": [],
         *       "params": [],
         *       "offerings": [],
         *       "attachmentOfferings": [
         *         {
         *           "name": "vtex.subscription.weekly",
         *           "required": false,
         *           "schema": {
         *             "vtex.subscription.key.frequency": {
         *               "MaximumNumberOfCharacters": 7,
         *               "Domain": [
         *                 " 1 week",
         *                 " 2 week",
         *                 " 3 week",
         *                 " 4 week"
         *               ]
         *             }
         *           }
         *         },
         *         {
         *           "name": "vtex.subscription.daily",
         *           "required": false,
         *           "schema": {
         *             "vtex.subscription.key.frequency": {
         *               "MaximumNumberOfCharacters": 5,
         *               "Domain": [
         *                 "1 day"
         *               ]
         *             }
         *           }
         *         }
         *       ],
         *       "sellerSku": "1234568358",
         *       "priceValidUntil": null,
         *       "commission": 0,
         *       "tax": 0,
         *       "preSaleDate": null,
         *       "additionalInfo": {
         *         "brandName": "VTEX",
         *         "brandId": "2000023",
         *         "categoriesIds": "/1/",
         *         "productClusterId": "135,142",
         *         "commercialConditionId": "5",
         *         "dimension": {
         *           "cubicweight": 0.7031,
         *           "height": 15,
         *           "length": 15,
         *           "weight": 15,
         *           "width": 15
         *         },
         *         "offeringInfo": null,
         *         "offeringType": null,
         *         "offeringTypeId": null
         *       },
         *       "measurementUnit": "un",
         *       "unitMultiplier": 1,
         *       "sellingPrice": 3290,
         *       "isGift": false,
         *       "shippingPrice": null,
         *       "rewardValue": 0,
         *       "freightCommission": 0,
         *       "priceDefinitions": {
         *         "sellingPrices": [
         *           {
         *             "value": 99,
         *             "quantity": 1
         *           }
         *         ],
         *         "calculatedSellingPrice": 99,
         *         "total": 99
         *       },
         *       "taxCode": null,
         *       "parentItemIndex": null,
         *       "parentAssemblyBinding": null,
         *       "callCenterOperator": "callCenterOp5473869",
         *       "serialNumbers": "3",
         *       "assemblies": [],
         *       "costPrice": 52
         *     }
         */
        Item: {
            /** @description Unique ID is an alphanumeric sequence that identifies an SKU in a given order. */
            uniqueId: string;
            /** @description Item's SKU ID, which is a unique numerical identifier. */
            id: string;
            /** @description ID of the Product associated with the item. */
            productId: string;
            /** @description EAN of the SKU. */
            ean: string | null;
            /** @description Reservation ID. */
            lockId: string;
            itemAttachment: components["schemas"]["ItemAttachment"];
            /** @description Array containing information on attachments. */
            attachments: string[];
            /** @description Quantity of items. */
            quantity: number;
            /** @description Seller related to the order. */
            seller: string;
            /** @description Item's name. */
            name: string;
            /** @description Product referencial code associated with the item. */
            refId: string;
            /** @description Item's price. */
            price: number;
            /** @description Item's list price. */
            listPrice: number;
            /** @description Item's manual price. */
            manualPrice: string | null;
            /** @description List of objects with item's price modifiers. */
            priceTags: string[];
            /** @description Item's SKU image URL. */
            imageUrl: string;
            /** @description URL slug of the item. */
            detailUrl: string;
            /** @description Item's components. */
            components: string[];
            /** @description Information on services sold along with the item's SKU. For example, a gift package. */
            bundleItems: string[];
            /** @description Information about params. */
            params: string[];
            /** @description Item's offerings, which are services related to the item. For example, guarantee or installation. */
            offerings: string[];
            /** @description List of attachments details. */
            attachmentOfferings: {
                /** @description Name of the attachment. */
                name: string | null;
                /** @description If the attachment is required (`true`) or not (`false`). */
                required: boolean | null;
                /** @description Schema of the content declared in the field `attachmentOfferings`. */
                schema: Record<string, never>;
            }[] | null;
            /** @description SKU ID from the seller perspective. */
            sellerSku: string;
            /** @description Date until when the price is going to be valid if there is a promotion. */
            priceValidUntil: string | null;
            /** @description Commission value registered for the seller. */
            commission: number;
            /** @description Item's tax. */
            tax: number;
            /** @description Item's pre sale date. */
            preSaleDate: string | null;
            additionalInfo: components["schemas"]["AdditionalInfo"];
            /** @description Item's measurement unit. */
            measurementUnit: string;
            /** @description Item's unit multiplier. */
            unitMultiplier: number;
            /** @description Item's selling price. */
            sellingPrice: number;
            /** @description This field is `true` when the item is a gift in order context and `false` when it is not. */
            isGift: boolean;
            /** @description Item's shipping price. */
            shippingPrice: string | null;
            /** @description Item's reward value. */
            rewardValue: number;
            /** @description Value of the freight commission. */
            freightCommission: number;
            /** @description Item's price information. */
            priceDefinitions: {
                /** @description Details on item's selling price. */
                sellingPrices: {
                    /** @description Total value of items in cents. */
                    value: number;
                    /** @description Quantity of items. */
                    quantity: number;
                }[];
                /** @description Item's calculated unitary selling price in cents. */
                calculatedSellingPrice: number;
                /** @description Total value of all item's units in cents. */
                total: number;
            };
            /** @description  Item's tax code. */
            taxCode: string | null;
            /** @description Parent item index. */
            parentItemIndex: string | null;
            /** @description Parent assembly binding. */
            parentAssemblyBinding: string | null;
            /** @description Call center operator responsible for the order. */
            callCenterOperator: string | null;
            /**
             * @deprecated
             * @description This field identifies the order in the `handling` status in the workflow, and it was used for VTEX internal control.
             */
            serialNumbers: string | null;
            /** @description Retrieves information about orders item's customizations. */
            assemblies: string[] | null;
            /** @description Item's cost price. */
            costPrice: number;
        };
        /**
         * ItemAttachment
         * @description Information about attachments, if it applies.
         * @example {
         *       "content": {},
         *       "name": null
         *     }
         */
        ItemAttachment: {
            /** @description Attachment's custom field for content. */
            content: Record<string, never>;
            /** @description Attachment's name. */
            name: string | null;
        };
        /**
         * AdditionalInfo
         * @description Additional information about the item.
         * @example {
         *       "brandName": "VTEX",
         *       "brandId": "2000023",
         *       "categoriesIds": "/1/",
         *       "productClusterId": "135,142",
         *       "commercialConditionId": "5",
         *       "dimension": {
         *         "cubicweight": 0.7031,
         *         "height": 15,
         *         "length": 15,
         *         "weight": 15,
         *         "width": 15
         *       },
         *       "offeringInfo": null,
         *       "offeringType": null,
         *       "offeringTypeId": null
         *     }
         */
        AdditionalInfo: {
            /** @description Item's brand name. */
            brandName: string;
            /** @description Item's brand ID. */
            brandId: string;
            /** @description Item's category ID. */
            categoriesIds: string;
            /** @description All product clusters related to the item. */
            productClusterId: string;
            /** @description Commercial conditions ID. */
            commercialConditionId: string;
            dimension: components["schemas"]["Dimension"];
            /** @description Information about services related to the item. For example: guarantee or installation. */
            offeringInfo: string | null;
            /** @description Offering type. */
            offeringType: string | null;
            /** @description Offering type ID. */
            offeringTypeId: string | null;
        };
        /**
         * Dimension
         * @example {
         *       "cubicweight": 0.7031,
         *       "height": 15,
         *       "length": 15,
         *       "weight": 15,
         *       "width": 15
         *     }
         */
        Dimension: {
            /** @description Item's cubic weight. */
            cubicweight: number;
            /** @description Item's height. */
            height: number;
            /** @description Item's length. */
            length: number;
            /** @description Item's weight. */
            weight: number;
            /** @description Item's width. */
            width: number;
        };
        /**
         * ClientProfileData
         * @description Object with information on the client's profile.
         * @example {
         *       "id": "clientProfileData",
         *       "email": "rodrigo.cunha@vtex.com.br",
         *       "firstName": "Rodrigo",
         *       "lastName": "VTEX",
         *       "documentType": "cpf",
         *       "document": "11047867702",
         *       "phone": "+5521972321094",
         *       "corporateName": null,
         *       "tradeName": null,
         *       "corporateDocument": null,
         *       "stateInscription": null,
         *       "corporatePhone": null,
         *       "isCorporate": false,
         *       "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93",
         *       "customerClass": null
         *     }
         */
        ClientProfileData: {
            /** @description Object ID, the expected value is `clientProfileData`. */
            id: string;
            /** @description Customer's email. */
            email: string;
            /** @description Customer's first name. */
            firstName: string;
            /** @description Customer's last name. */
            lastName: string;
            /** @description Type of the document informed by the customer. */
            documentType: string;
            /** @description Document identification code informed by the customer. */
            document: string;
            /** @description Customers's phone number. */
            phone: string;
            /** @description If the customer is a legal entity, here goes the corporate name. */
            corporateName: string | null;
            /** @description If the customer is a legal entity, here goes the trade name. */
            tradeName: string | null;
            /** @description If the customer is a legal entity, here goes the corporate document. */
            corporateDocument: string | null;
            /** @description If the customer is a legal entity, here goes the state inscription. */
            stateInscription: string | null;
            /** @description If the customer is a legal entity, here goes the corpany's phone number. */
            corporatePhone: string | null;
            /** @description The value is `true` when the customer is a legal entity and `false` when not. */
            isCorporate: boolean;
            /** @description Customer user profile ID. */
            userProfileId: string;
            /** @description Identification of the class the customer belongs to. */
            customerClass: string | null;
        };
        /**
         * RatesAndBenefitsData
         * @description Information on promotions and taxes that apply to the order.
         * @example {
         *       "id": "ratesAndBenefitsData",
         *       "rateAndBenefitsIdentifiers": []
         *     }
         */
        RatesAndBenefitsData: {
            /** @description ID of the rate or benefit. */
            id: string;
            /** @description Information about order's promotions and taxes identifiers. */
            rateAndBenefitsIdentifiers: string[];
        };
        /**
         * ShippingData
         * @description Object containing shipping data.
         * @example {
         *       "id": "shippingData",
         *       "address": {
         *         "addressType": "residential",
         *         "receiverName": "Rodrigo Cunha",
         *         "addressId": "-1425945657910",
         *         "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *         "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *         "postalCode": "22250-040",
         *         "city": "Rio de Janeiro",
         *         "state": "RJ",
         *         "country": "BRA",
         *         "street": "Praia de Botafogo",
         *         "number": "300",
         *         "neighborhood": "Botafogo",
         *         "complement": "3",
         *         "reference": null,
         *         "geoCoordinates": []
         *       },
         *       "logisticsInfo": [
         *         {
         *           "itemIndex": 0,
         *           "selectedSla": "Normal",
         *           "lockTTL": "10d",
         *           "price": 1160,
         *           "listPrice": 1160,
         *           "sellingPrice": 1160,
         *           "deliveryWindow": null,
         *           "deliveryCompany": "Todos os CEPS",
         *           "shippingEstimate": "5bd",
         *           "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
         *           "slas": [
         *             {
         *               "id": "Normal",
         *               "name": "Normal",
         *               "shippingEstimate": "5bd",
         *               "deliveryWindow": null,
         *               "price": 1160,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": "",
         *               "lockTTL": "12d",
         *               "pickupPointId": "store35",
         *               "transitTime": "3d",
         *               "pickupDistance": 0
         *             },
         *             {
         *               "id": "Expressa",
         *               "name": "Expressa",
         *               "shippingEstimate": "5bd",
         *               "deliveryWindow": null,
         *               "price": 1160,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": "",
         *               "lockTTL": "12d",
         *               "pickupPointId": "store45",
         *               "transitTime": "3d",
         *               "pickupDistance": 0
         *             },
         *             {
         *               "id": "Quebra Kit",
         *               "name": "Quebra Kit",
         *               "shippingEstimate": "2bd",
         *               "deliveryWindow": null,
         *               "price": 1392,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": "",
         *               "lockTTL": "12d",
         *               "pickupPointId": "store45",
         *               "transitTime": "3d",
         *               "pickupDistance": 0
         *             },
         *             {
         *               "id": "Sob Encomenda",
         *               "name": "Sob Encomenda",
         *               "shippingEstimate": "32bd",
         *               "deliveryWindow": null,
         *               "price": 1392,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": "",
         *               "lockTTL": "12d",
         *               "pickupPointId": "store46",
         *               "transitTime": "3d",
         *               "pickupDistance": 0
         *             }
         *           ],
         *           "shipsTo": [
         *             "BRA"
         *           ],
         *           "deliveryIds": [
         *             {
         *               "courierId": "197a56f",
         *               "courierName": "Todos os CEPS",
         *               "dockId": "1",
         *               "quantity": 1,
         *               "warehouseId": "1_1",
         *               "accountCarrierName": "recorrenciaqa",
         *               "kitItemDetails": []
         *             }
         *           ],
         *           "deliveryChannels": [
         *             {
         *               "id": "delivery",
         *               "stockBalance": 0
         *             }
         *           ],
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "addressId": "4791759472332",
         *           "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *           "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *           "polygonName": "",
         *           "pickupPointId": "store67",
         *           "transitTime": "3d"
         *         }
         *       ],
         *       "trackingHints": null,
         *       "selectedAddresses": [
         *         {
         *           "addressId": "-1425945657910",
         *           "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *           "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *           "addressType": "residential",
         *           "receiverName": "Rodrigo Cunha",
         *           "street": "Praia de Botafogo",
         *           "number": "518",
         *           "complement": "10",
         *           "neighborhood": "Botafogo",
         *           "postalCode": "22250-040",
         *           "city": "Rio de Janeiro",
         *           "state": "RJ",
         *           "country": "BRA",
         *           "reference": null,
         *           "geoCoordinates": []
         *         }
         *       ]
         *     }
         */
        ShippingData: {
            /** @description Object ID, the expected value is `shippingData`. */
            id: string;
            address: components["schemas"]["Address"];
            /** @description Array of objects containing item's logistics information. */
            logisticsInfo: components["schemas"]["LogisticsInfo"][];
            trackingHints: string | null;
            /** @description Information about selected adresses. */
            selectedAddresses: components["schemas"]["SelectedAddress"][];
        };
        /**
         * Address
         * @description Shipping address details.
         * @example {
         *       "addressType": "residential",
         *       "receiverName": "Rodrigo Cunha",
         *       "addressId": "-1425945657910",
         *       "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *       "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *       "postalCode": "22250-040",
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "country": "BRA",
         *       "street": "Praia de Botafogo",
         *       "number": "300",
         *       "neighborhood": "Botafogo",
         *       "complement": "3",
         *       "reference": null,
         *       "geoCoordinates": []
         *     }
         */
        Address: {
            /** @description Type of address. For example, `Residential` or `Pickup`, among others. */
            addressType: string;
            /** @description Name of the person who is going to receive the order. */
            receiverName: string;
            /** @description Shipping address ID. */
            addressId: string;
            /** @description Shipping address version ID. */
            versionId: string | null;
            /** @description Shipping address entity ID. */
            entityId: string | null;
            /** @description Postal code of the shipping address. */
            postalCode: string;
            /** @description City of the shipping address. */
            city: string;
            /** @description State of the shipping address. */
            state: string;
            /** @description Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3). */
            country: string;
            /** @description Street of the shipping address. */
            street: string;
            /** @description Number of the building, house or apartment in the shipping address. */
            number: string;
            /** @description Neighborhood of the shipping address. */
            neighborhood: string;
            /** @description Complement to the shipping address when it applies. */
            complement: string;
            /** @description Complement to help locate the shipping address, in case of delivery. */
            reference: string | null;
            /** @description Array with two numbers with geocoordinates, first longitude then latitude. */
            geoCoordinates: number[];
        };
        /**
         * LogisticsInfo
         * @example {
         *       "itemIndex": 0,
         *       "selectedSla": "Normal",
         *       "lockTTL": "10d",
         *       "price": 1160,
         *       "listPrice": 1160,
         *       "sellingPrice": 1160,
         *       "deliveryWindow": null,
         *       "deliveryCompany": "Todos os CEPS",
         *       "shippingEstimate": "5bd",
         *       "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
         *       "slas": [
         *         {
         *           "id": "Normal",
         *           "name": "Normal",
         *           "shippingEstimate": "5bd",
         *           "deliveryWindow": null,
         *           "price": 1160,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": "region196",
         *           "lockTTL": "12d",
         *           "pickupPointId": "1_VTEX-RJ",
         *           "transitTime": "3d",
         *           "pickupDistance": 0
         *         },
         *         {
         *           "id": "Expressa",
         *           "name": "Expressa",
         *           "shippingEstimate": "5bd",
         *           "deliveryWindow": null,
         *           "price": 1160,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": "region196",
         *           "lockTTL": "12d",
         *           "pickupPointId": "1_VTEX-RJ",
         *           "transitTime": "3d",
         *           "pickupDistance": 0
         *         },
         *         {
         *           "id": "Quebra Kit",
         *           "name": "Quebra Kit",
         *           "shippingEstimate": "2bd",
         *           "deliveryWindow": null,
         *           "price": 1392,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": "region196",
         *           "lockTTL": "12d",
         *           "pickupPointId": "1_VTEX-RJ",
         *           "transitTime": "3d",
         *           "pickupDistance": 0
         *         },
         *         {
         *           "id": "Sob Encomenda",
         *           "name": "Sob Encomenda",
         *           "shippingEstimate": "32bd",
         *           "deliveryWindow": null,
         *           "price": 1392,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": "region196",
         *           "lockTTL": "12d",
         *           "pickupPointId": "1_VTEX-RJ",
         *           "transitTime": "3d",
         *           "pickupDistance": 0
         *         }
         *       ],
         *       "shipsTo": [
         *         "BRA"
         *       ],
         *       "deliveryIds": [
         *         {
         *           "courierId": "197a56f",
         *           "courierName": "Todos os CEPS",
         *           "dockId": "1",
         *           "quantity": 1,
         *           "warehouseId": "1_1",
         *           "accountCarrierName": "recorrenciaqa",
         *           "kitItemDetails": []
         *         }
         *       ],
         *       "deliveryChannels": [
         *         {
         *           "id": "delivery",
         *           "stockBalance": 0
         *         }
         *       ],
         *       "deliveryChannel": "delivery",
         *       "pickupStoreInfo": {
         *         "additionalInfo": null,
         *         "address": null,
         *         "dockId": null,
         *         "friendlyName": null,
         *         "isPickupStore": false
         *       },
         *       "addressId": "-1425945657910",
         *       "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *       "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *       "polygonName": null,
         *       "pickupPointId": "1_VTEX-RJ",
         *       "transitTime": "3d"
         *     }
         */
        LogisticsInfo: {
            /** @description Index of the item starting from 0. */
            itemIndex: number;
            /** @description Selected shipping option. */
            selectedSla: string;
            /** @description Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time. */
            lockTTL: string;
            /** @description Shipping price for the item in cents. Does not account for the whole order's shipping price. */
            price: number;
            /** @description SKU's optional price for a specific trade policy. */
            listPrice: number;
            /** @description Item's selling price. */
            sellingPrice: number;
            /** @description [Scheduled delivery](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) window information, if it applies to the item. */
            deliveryWindow: string | null;
            /** @description [Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) company's name. */
            deliveryCompany: string;
            /** @description Total shipping estimate time in days. For instance, three business days is represented `3bd`. */
            shippingEstimate: string;
            /** @description Shipping estimate date. It is defined only after the confirmation of the order. */
            shippingEstimateDate: string;
            /** @description Information on Service Level Agreement (SLA), corresponding to [shipping policies](https://help.vtex.com/tutorial/shipping-policy--tutorials_140). */
            slas: components["schemas"]["Sla"][];
            /** @description Three letters ISO code of the country of the shipping address (ISO 3166 ALPHA-3). */
            shipsTo: string[];
            /** @description Information about delivery IDs. */
            deliveryIds: components["schemas"]["DeliveryId"][];
            /** @description List of delivery channels associated with the trade policy. */
            deliveryChannels: {
                /** @description Delivery channel's shipping type, which can be `delivery` or `pickup-in-point`. */
                id: string;
                /** @description Stock check for an SKU availability. */
                stockBalance: number;
            }[];
            /** @description If the delivery channel is `delivery` or `pickup-in-point`. */
            deliveryChannel: string;
            pickupStoreInfo: components["schemas"]["PickupStoreInfo"];
            /** @description Address ID. */
            addressId: string;
            /** @description Shipping address version ID. */
            versionId: string | null;
            /** @description Shipping address entity ID. */
            entityId: string;
            /** @description Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy. */
            polygonName: string | null;
            /** @description [Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R)'s ID. */
            pickupPointId: string;
            /** @description Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`. */
            transitTime: string;
        };
        /**
         * Sla
         * @example {
         *       "id": "Normal",
         *       "name": "Normal",
         *       "shippingEstimate": "5bd",
         *       "deliveryWindow": null,
         *       "price": 1160,
         *       "deliveryChannel": "delivery",
         *       "pickupStoreInfo": {
         *         "additionalInfo": null,
         *         "address": null,
         *         "dockId": null,
         *         "friendlyName": null,
         *         "isPickupStore": false
         *       },
         *       "polygonName": null,
         *       "lockTTL": "12d",
         *       "pickupPointId": "1_VTEX-RJ",
         *       "transitTime": "3d",
         *       "pickupDistance": 0
         *     }
         */
        Sla: {
            /** @description ID of the shipping method used in the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140). */
            id: string;
            /** @description Name of the shipping policy. */
            name: string;
            /** @description Total shipping estimate time in days. For instance, three business days is represented `3bd`. */
            shippingEstimate: string;
            /** @description [Scheduled delivery window](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, if it applies to the item. */
            deliveryWindow: string | null;
            /** @description Shipping price for the item in cents. Does not account for the whole order's shipping price. */
            price: number;
            /** @description If the delivery channel is `delivery` or `pickup-in-point`. */
            deliveryChannel: string;
            pickupStoreInfo: components["schemas"]["PickupStoreInfo"];
            /** @description Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy. */
            polygonName: string | null;
            /** @description Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA. */
            lockTTL: string;
            /** @description [Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) ID related to the SLA. */
            pickupPointId: string;
            /** @description Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`. */
            transitTime: string;
            /** @description Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line. */
            pickupDistance: number;
        };
        /**
         * PickupStoreInfo
         * @description Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
         * @example {
         *       "additionalInfo": null,
         *       "address": null,
         *       "dockId": null,
         *       "friendlyName": null,
         *       "isPickupStore": false
         *     }
         */
        PickupStoreInfo: {
            /** @description Additional information about the pickup point. */
            additionalInfo: string | null;
            /** @description Pickup point's address. */
            address: string | null;
            /** @description ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) related to the delivery or the pickup point. */
            dockId: string | null;
            /** @description Name of the pickup point displayed at checkout. */
            friendlyName: string | null;
            /** @description If this field is set `true`, it means the type of shipping is pickup, and if set as `false`, it is not. */
            isPickupStore: boolean;
        };
        /**
         * DeliveryId
         * @description Information about delivery IDs.
         * @example {
         *       "courierId": "197a56f",
         *       "courierName": "Todos os CEPS",
         *       "dockId": "1",
         *       "quantity": 1,
         *       "warehouseId": "1_1",
         *       "accountCarrierName": "recorrenciaqa",
         *       "kitItemDetails": []
         *     }
         */
        DeliveryId: {
            /** @description [Carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE)'s ID. */
            courierId: string;
            /** @description Carrier's name. */
            courierName: string;
            /** @description ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj). */
            dockId: string;
            /** @description Quantity of items. */
            quantity: number;
            /** @description ID of the [warehouse](https://help.vtex.com/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb). */
            warehouseId: string;
            /** @description Name of the account's [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE). */
            accountCarrierName: string;
            /** @description Information about [kits](https://help.vtex.com/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28), if there are any. */
            kitItemDetails: string[] | null;
        };
        /**
         * SelectedAddress
         * @example {
         *       "addressId": "-1425945657910",
         *       "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *       "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *       "addressType": "residential",
         *       "receiverName": "Rodrigo Cunha",
         *       "street": "Praia de Botafogo",
         *       "number": "518",
         *       "complement": "10",
         *       "neighborhood": "Botafogo",
         *       "postalCode": "22250-040",
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "country": "BRA",
         *       "reference": null,
         *       "geoCoordinates": []
         *     }
         */
        SelectedAddress: {
            /** @description Selected address ID. */
            addressId: string;
            /** @description Shipping address version ID of the selected address. */
            versionId: string | null;
            /** @description Shipping address entity ID  of the selected address. */
            entityId: string | null;
            /** @description Selected adress's shipping type, which can be `pickup`, `residential`, `invoice`, `search`, `inStore`, `commercial` or `giftRegistry`. */
            addressType: string;
            /** @description Name of the person who is going to receive the order in the selected address. */
            receiverName: string;
            /** @description Street of the selected address. */
            street: string;
            /** @description Number of the building, house or apartment of the selected address. */
            number: string;
            /** @description Complement to the selected address if it applies. */
            complement: string;
            /** @description Neighborhood of the selected address. */
            neighborhood: string;
            /** @description Postal code of the selected address. */
            postalCode: string;
            /** @description City of the selected address. */
            city: string;
            /** @description State of the selected address. */
            state: string;
            /** @description Three letters ISO code of the country of the selected address (ISO 3166 ALPHA-3). */
            country: string;
            /** @description Complement to help locate the selected address. */
            reference: string | null;
            /** @description Array with two numbers with the selected address's geocoordinates, first longitude then latitude. */
            geoCoordinates: number[];
        };
        /**
         * PaymentData
         * @description Object with information about the payment.
         * @example {
         *       "giftCards": [],
         *       "transactions": [
         *         {
         *           "isActive": true,
         *           "transactionId": "418213DE29634837A63DD693A937A696",
         *           "merchantName": "luxstore",
         *           "payments": [
         *             {
         *               "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *               "paymentSystem": "6",
         *               "paymentSystemName": "Boleto Bancário",
         *               "value": 4450,
         *               "installments": 1,
         *               "referenceValue": 4450,
         *               "cardHolder": null,
         *               "cardNumber": null,
         *               "firstDigits": null,
         *               "lastDigits": null,
         *               "cvv2": null,
         *               "expireMonth": null,
         *               "expireYear": null,
         *               "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *               "giftCardId": null,
         *               "giftCardName": null,
         *               "giftCardCaption": null,
         *               "redemptionCode": null,
         *               "group": "bankInvoice",
         *               "tid": null,
         *               "dueDate": "2019-02-02",
         *               "connectorResponses": {
         *                 "Tid": "94857956",
         *                 "ReturnCode": "200",
         *                 "Message": "logMessage",
         *                 "authId": "857956"
         *               },
         *               "giftCardProvider": "presentCard",
         *               "giftCardAsDiscount": false,
         *               "koinUrl": "koinURL",
         *               "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *               "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *               "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
         *               "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
         *               "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
         *               "bankIssuedInvoiceBarCodeType": "i25",
         *               "billingAddress": {}
         *             }
         *           ]
         *         }
         *       ]
         *     }
         */
        PaymentData: {
            /** @description Array with information about Gift Cards. */
            giftCards?: string[];
            /** @description Information about financial transactions. */
            transactions: components["schemas"]["Transaction"][];
        };
        /**
         * Transaction
         * @description Financial transaction details.
         * @example {
         *       "isActive": true,
         *       "transactionId": "418213DE29634837A63DD693A937A696",
         *       "merchantName": "luxstore",
         *       "payments": [
         *         {
         *           "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *           "paymentSystem": "6",
         *           "paymentSystemName": "Boleto Bancário",
         *           "value": 4450,
         *           "installments": 1,
         *           "referenceValue": 4450,
         *           "cardHolder": null,
         *           "cardNumber": null,
         *           "firstDigits": null,
         *           "lastDigits": null,
         *           "cvv2": null,
         *           "expireMonth": null,
         *           "expireYear": null,
         *           "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *           "giftCardId": null,
         *           "giftCardName": null,
         *           "giftCardCaption": null,
         *           "redemptionCode": null,
         *           "group": "bankInvoice",
         *           "tid": null,
         *           "dueDate": "2019-02-02",
         *           "connectorResponses": {
         *             "Tid": "94857956",
         *             "ReturnCode": "200",
         *             "Message": "logMessage",
         *             "authId": "857956"
         *           },
         *           "giftCardProvider": "presentCard",
         *           "giftCardAsDiscount": false,
         *           "koinUrl": "koinURL",
         *           "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *           "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *           "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
         *           "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
         *           "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
         *           "bankIssuedInvoiceBarCodeType": "i25",
         *           "billingAddress": {}
         *         }
         *       ]
         *     }
         */
        Transaction: {
            /** @description When this field is set as `true`, the payment is active, and when it is `false`, the payment is inactive. */
            isActive: boolean;
            /** @description ID of the transaction. */
            transactionId: string;
            /** @description Name of the merchant that will receive the payment. */
            merchantName: string;
            /** @description Detailed information about payment. */
            payments: components["schemas"]["Payment"][];
        };
        /**
         * Payment
         * @description Payment details.
         * @example {
         *       "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *       "paymentSystem": "6",
         *       "paymentSystemName": "Boleto Bancário",
         *       "value": 4450,
         *       "installments": 1,
         *       "referenceValue": 4450,
         *       "cardHolder": null,
         *       "cardNumber": null,
         *       "firstDigits": null,
         *       "lastDigits": null,
         *       "cvv2": null,
         *       "expireMonth": null,
         *       "expireYear": null,
         *       "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *       "giftCardId": null,
         *       "giftCardName": null,
         *       "giftCardCaption": null,
         *       "redemptionCode": null,
         *       "group": "bankInvoice",
         *       "tid": null,
         *       "dueDate": "2019-02-02",
         *       "connectorResponses": {
         *         "Tid": "94857956",
         *         "ReturnCode": "200",
         *         "Message": "logMessage",
         *         "authId": "857956"
         *       },
         *       "giftCardProvider": "presentCard",
         *       "giftCardAsDiscount": false,
         *       "koinUrl": "koinURL",
         *       "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *       "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *       "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
         *       "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
         *       "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
         *       "bankIssuedInvoiceBarCodeType": "i25",
         *       "billingAddress": {}
         *     }
         */
        Payment: {
            /** @description VTEX payment ID that can be used as unique identifier. */
            id: string;
            /** @description Payment system's ID. */
            paymentSystem: string;
            /** @description Payment system's name. */
            paymentSystemName: string;
            /** @description Payment's final amount in cents. */
            value: number;
            /** @description Number of payment installments. */
            installments: number;
            /** @description Payment's reference value in cents. */
            referenceValue: number;
            /** @description Name of the person who owns the card. */
            cardHolder: string | null;
            /** @description Numeric sequence of the card used in the transaction. */
            cardNumber: string | null;
            /** @description Fist digits of the card used in the transaction. */
            firstDigits: string | null;
            /** @description Last digits of the card used in the transaction. */
            lastDigits: string | null;
            /** @description Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions. */
            cvv2: string | null;
            /** @description Expire month of the card used in the transaction (2-digits). */
            expireMonth: string | null;
            /** @description Expire year of the card used in the transaction (4-digits). */
            expireYear: string | null;
            /** @description Payment's URL. */
            url: string;
            /** @description Gift Card's ID. */
            giftCardId: string | null;
            /** @description Gift Card's name. */
            giftCardName: string | null;
            /** @description Gift Card's caption. */
            giftCardCaption: string | null;
            /** @description Code for the customer to use the Gift Card. */
            redemptionCode: string | null;
            /** @description Name of the collection the Gift Card belongs to. */
            group: string;
            /** @description Provider's unique identifier for the transaction. */
            tid: string | null;
            /** @description Payment due date, with the format `yyyy-mm-dd`. */
            dueDate: string;
            /** @description Information about the connector responses. */
            connectorResponses: {
                /** @description Provider's unique identifier for the transaction. */
                Tid: string;
                /** @description Provider's operation/error code to be logged. */
                ReturnCode: string;
                /** @description Provider's operation/error message to be logged. */
                Message: string;
                /** @description Connector's authorization ID. */
                authId: string;
            };
            /** @description Gift Card provider's ID. */
            giftCardProvider: string;
            /** @description When this field is set as `true`, the Gift Card is a discount over the price, and when set as `false`, it is not a discount. */
            giftCardAsDiscount: boolean;
            /** @description Payment's account ID. */
            koinUrl: string;
            /** @description Payment's account ID. */
            accountId: string;
            /** @description This field retrieves the main account if the payment was made in a subaccount. */
            parentAccountId: string;
            /** @description Numeric sequence that identifies the bank issued invoice. */
            bankIssuedInvoiceIdentificationNumber: string;
            /** @description Bank issued invoice ID formatted. */
            bankIssuedInvoiceIdentificationNumberFormatted: string;
            /** @description Number of the bank issued invoice bar code. */
            bankIssuedInvoiceBarCodeNumber: string;
            /** @description Type of the bank issued invoice bar code. */
            bankIssuedInvoiceBarCodeType: string;
            /** @description Billing address information. */
            billingAddress: Record<string, never>;
        };
        /**
         * PackageAttachment
         * @description Package object populated after order invoiced.
         * @example {
         *       "packages": []
         *     }
         */
        PackageAttachment: {
            /** @description Packages details. */
            packages: string[];
        };
        /**
         * Seller
         * @description Information about the seller associated with the order.
         * @example {
         *       "id": "1",
         *       "name": "Loja do Suporte",
         *       "logo": "https://sellersLogo/images.png",
         *       "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName"
         *     }
         */
        Seller: {
            /** @description Seller ID that identifies the seller. */
            id: string;
            /** @description Seller's name. */
            name: string;
            /** @description URL of the seller's logo. */
            logo: string;
            /** @description URL of the endpoint for fulfillment of seller's orders. */
            fulfillmentEndpoint: string;
        };
        /**
         * ChangesAttachment
         * @description Information about changes in the order.
         * @example {
         *       "id": "changeAttachment",
         *       "changesData": [
         *         {
         *           "reason": "Blah",
         *           "discountValue": 3290,
         *           "incrementValue": 0,
         *           "itemsAdded": [],
         *           "itemsRemoved": [
         *             {
         *               "id": "1234568358",
         *               "name": "Bay Max L",
         *               "quantity": 1,
         *               "price": 3290,
         *               "unitMultiplier": null
         *             }
         *           ],
         *           "receipt": {
         *             "date": "2019-02-06T20:46:04.4003606+00:00",
         *             "orderId": "v5195004lux-01",
         *             "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *           }
         *         }
         *       ]
         *     }
         */
        ChangesAttachment: {
            /** @description Object ID, the expect value is `changeAttachment`. */
            id: string;
            /** @description Order change details. */
            changesData: components["schemas"]["ChangesDatum"][];
        };
        /**
         * ChangesDatum
         * @example {
         *       "reason": "Blah",
         *       "discountValue": 3290,
         *       "incrementValue": 0,
         *       "itemsAdded": [],
         *       "itemsRemoved": [
         *         {
         *           "id": "1234568358",
         *           "name": "Bay Max L",
         *           "quantity": 1,
         *           "price": 3290,
         *           "unitMultiplier": null
         *         }
         *       ],
         *       "receipt": {
         *         "date": "2019-02-06T20:46:04.4003606+00:00",
         *         "orderId": "v5195004lux-01",
         *         "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *       }
         *     }
         */
        ChangesDatum: {
            /** @description Text explaining why there was a change in the order. This information may be shown to the customer in the UI or transactional emails. */
            reason: string;
            /** @description Order change discount value. */
            discountValue: number;
            /** @description Order change increment value. */
            incrementValue: number;
            /** @description List of items added to the order. */
            itemsAdded: string[];
            /** @description List of items removed from the order. */
            itemsRemoved: components["schemas"]["ItemsRemoved"][];
            receipt: components["schemas"]["Receipt"];
        };
        /**
         * ItemsRemoved
         * @example {
         *       "id": "1234568358",
         *       "name": "Bay Max L",
         *       "quantity": 1,
         *       "price": 3290,
         *       "unitMultiplier": null
         *     }
         */
        ItemsRemoved: {
            /** @description SKU ID of the item removed from the order. */
            id: string;
            /** @description Name of the item removed from the order. */
            name: string;
            /** @description Quantity of items removed from the order. */
            quantity: number;
            /** @description Total amount of items removed from the order. */
            price: number;
            /** @description Unit multiplier of the item removed from the order. */
            unitMultiplier: string | null;
        };
        /**
         * Receipt
         * @description Information about the receipt for changed orders.
         * @example {
         *       "date": "2019-02-06T20:46:04.4003606+00:00",
         *       "orderId": "v5195004lux-01",
         *       "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *     }
         */
        Receipt: {
            /** @description Date when the receipt was created. */
            date: string;
            /** @description ID of the order. */
            orderId: string;
            /** @description Receipt's unique identifier code. */
            receipt: string;
        };
        /**
         * StorePreferencesData
         * @description Object with data from the store's configuration - stored in VTEX's License Manager.
         * @example {
         *       "countryCode": "BRA",
         *       "currencyCode": "BRL",
         *       "currencyFormatInfo": {
         *         "CurrencyDecimalDigits": 2,
         *         "CurrencyDecimalSeparator": ",",
         *         "CurrencyGroupSeparator": ".",
         *         "CurrencyGroupSize": 3,
         *         "StartsWithCurrencySymbol": true
         *       },
         *       "currencyLocale": 1046,
         *       "currencySymbol": "R$",
         *       "timeZone": "E. South America Standard Time"
         *     }
         */
        StorePreferencesData: {
            /** @description Three letters ISO code of the country (ISO 3166 ALPHA-3). */
            countryCode: string;
            /** @description Currency code in ISO 4217. For example, `BRL`. */
            currencyCode: string;
            currencyFormatInfo: components["schemas"]["CurrencyFormatInfo"];
            /** @description Currency Locale Code in LCID in decimal. */
            currencyLocale: number;
            /** @description Currency symbol. */
            currencySymbol: string;
            /** @description Time zone from where the order was made. */
            timeZone: string;
        };
        /**
         * CurrencyFormatInfo
         * @description Object with currency format details.
         * @example {
         *       "CurrencyDecimalDigits": 2,
         *       "CurrencyDecimalSeparator": ",",
         *       "CurrencyGroupSeparator": ".",
         *       "CurrencyGroupSize": 3,
         *       "StartsWithCurrencySymbol": true
         *     }
         */
        CurrencyFormatInfo: {
            /** @description Quantity of currency decimal digits. */
            CurrencyDecimalDigits: number;
            /** @description Defines what currency decimal separator will be applied. */
            CurrencyDecimalSeparator: string;
            /** @description Defines what currency group separator will be applied. */
            CurrencyGroupSeparator: string;
            /** @description Defines how many characters will be grouped. */
            CurrencyGroupSize: number;
            /** @description Defines if all prices will be initiated with the currency symbol (`true`) or not (`false`). */
            StartsWithCurrencySymbol: boolean;
        };
        /**
         * Marketplace
         * @description Details about the marketplace related to the order.
         * @example {
         *       "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
         *       "isCertified": null,
         *       "name": "luxstore"
         *     }
         */
        Marketplace: {
            /** @description Marketplace base URL. */
            baseURL: string;
            /** @description If is a certified marketplace. */
            isCertified: string | null;
            /** @description Name of the marketplace. */
            name: string;
        };
        /**
         * ListOrders
         * @example {
         *       "list": [
         *         {
         *           "orderId": "v502559llux-01",
         *           "creationDate": "2019-02-04T10:29:11+00:00",
         *           "clientName": "J C",
         *           "items": null,
         *           "totalValue": 7453,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "invoiced",
         *           "statusDescription": "Faturado",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502559",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-02-07T21:29:54+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502556llux-01",
         *           "creationDate": "2019-01-28T20:09:43+00:00",
         *           "clientName": "Rodrigo VTEX",
         *           "items": null,
         *           "totalValue": 1160,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "handling",
         *           "statusDescription": "Preparando Entrega",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502556",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
         *           "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-28T20:33:04+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502553llux-01",
         *           "creationDate": "2019-01-24T12:35:19+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 10150,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502554",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502553llux-01 Olá, test. Estamos empacotando seu produto para provide",
         *           "ShippingEstimatedDate": "2019-01-31T12:36:30+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-24T12:36:01+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502550llux-01",
         *           "creationDate": "2019-01-23T16:39:45+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 10150,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502551",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502550llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
         *           "ShippingEstimatedDate": "2019-01-30T16:40:55+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-23T16:40:27+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502547llux-01",
         *           "creationDate": "2019-01-23T16:34:20+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 10150,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502548",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502547llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
         *           "ShippingEstimatedDate": "2019-01-30T16:35:30+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-23T16:35:04+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502544llux-01",
         *           "creationDate": "2018-12-28T18:15:28+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 8990,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502544",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502544llux-01 Resumo Itens R$ 89,90 Total R$ 89,90 Produto Alavanca De M",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502541llux-01",
         *           "creationDate": "2018-12-18T18:48:17+00:00",
         *           "clientName": "Douglas Rodrigues",
         *           "items": null,
         *           "totalValue": 3290,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502541",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502541llux-01 Resumo Itens R$ 32,90 Total R$ 32,90 Produto Bay Max L 1 u",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502538llux-01",
         *           "creationDate": "2018-12-12T18:21:47+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 8990,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502538",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502538llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
         *           "ShippingEstimatedDate": "2018-12-19T18:22:26+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-12-12T18:22:22+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880102018018-01",
         *           "creationDate": "2018-11-30T17:34:01+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "880102018018-01",
         *           "sequence": "502537",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": "cancelamento teste shp ",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:34:42+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880091692043-01",
         *           "creationDate": "2018-11-30T17:28:35+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "invoiced",
         *           "statusDescription": "Faturado",
         *           "marketPlaceOrderId": "880091692043-01",
         *           "sequence": "502536",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:29:22+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880091058221-01",
         *           "creationDate": "2018-11-30T17:18:00+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "880091058221-01",
         *           "sequence": "502535",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": "Teste de cancelamento do ShopFácil ",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:18:44+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880090643370-01",
         *           "creationDate": "2018-11-30T17:10:59+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": "880090643370-01",
         *           "sequence": "502534",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2018-12-07T17:11:39+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:11:42+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880090622238-01",
         *           "creationDate": "2018-11-30T17:10:45+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "880090622238-01",
         *           "sequence": "502533",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "MNC-877730530419-01",
         *           "creationDate": "2018-11-20T21:09:01+00:00",
         *           "clientName": "Carlos VTEX",
         *           "items": null,
         *           "totalValue": 11150,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "877730530419-01",
         *           "sequence": "502532",
         *           "salesChannel": "1",
         *           "affiliateId": "MNC",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-20T21:13:06+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-876733475998-01",
         *           "creationDate": "2018-11-16T16:58:18+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": "876733475998-01",
         *           "sequence": "502531",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2018-11-23T16:58:48+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-16T16:58:53+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         }
         *       ],
         *       "facets": [],
         *       "paging": {
         *         "total": 84,
         *         "pages": 6,
         *         "currentPage": 1,
         *         "perPage": 15
         *       },
         *       "stats": {
         *         "stats": {
         *           "totalValue": {
         *             "Count": 84,
         *             "Max": 21526180,
         *             "Mean": 262672.75,
         *             "Min": 1160,
         *             "Missing": 0,
         *             "StdDev": 2348087.3869179883,
         *             "Sum": 22064511,
         *             "SumOfSquares": 463417439039853,
         *             "Facets": {
         *               "origin": {
         *                 "Fulfillment": {
         *                   "Count": 68,
         *                   "Max": 11150,
         *                   "Mean": 1395.5882352941176,
         *                   "Min": 1250,
         *                   "Missing": 0,
         *                   "StdDev": 1200.5513439298484,
         *                   "Sum": 94900,
         *                   "SumOfSquares": 229010000,
         *                   "Facets": null
         *                 },
         *                 "Marketplace": {
         *                   "Count": 16,
         *                   "Max": 21526180,
         *                   "Mean": 1373100.6875,
         *                   "Min": 1160,
         *                   "Missing": 0,
         *                   "StdDev": 5374326.141087491,
         *                   "Sum": 21969611,
         *                   "SumOfSquares": 463417210029853,
         *                   "Facets": null
         *                 }
         *               },
         *               "currencyCode": {
         *                 "BRL": {
         *                   "Count": 84,
         *                   "Max": 21526180,
         *                   "Mean": 262672.75,
         *                   "Min": 1160,
         *                   "Missing": 0,
         *                   "StdDev": 2348087.3869179883,
         *                   "Sum": 22064511,
         *                   "SumOfSquares": 463417439039853,
         *                   "Facets": null
         *                 }
         *               }
         *             }
         *           },
         *           "totalItems": {
         *             "Count": 84,
         *             "Max": 89,
         *             "Mean": 2.2261904761904763,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 9.660940100525016,
         *             "Sum": 187,
         *             "SumOfSquares": 8163,
         *             "Facets": {
         *               "origin": {
         *                 "Fulfillment": {
         *                   "Count": 68,
         *                   "Max": 1,
         *                   "Mean": 1,
         *                   "Min": 1,
         *                   "Missing": 0,
         *                   "StdDev": 0,
         *                   "Sum": 68,
         *                   "SumOfSquares": 68,
         *                   "Facets": null
         *                 },
         *                 "Marketplace": {
         *                   "Count": 16,
         *                   "Max": 89,
         *                   "Mean": 7.4375,
         *                   "Min": 1,
         *                   "Missing": 0,
         *                   "StdDev": 21.92401651157926,
         *                   "Sum": 119,
         *                   "SumOfSquares": 8095,
         *                   "Facets": null
         *                 }
         *               },
         *               "currencyCode": {
         *                 "BRL": {
         *                   "Count": 84,
         *                   "Max": 89,
         *                   "Mean": 2.2261904761904763,
         *                   "Min": 1,
         *                   "Missing": 0,
         *                   "StdDev": 9.660940100525016,
         *                   "Sum": 187,
         *                   "SumOfSquares": 8163,
         *                   "Facets": null
         *                 }
         *               }
         *             }
         *           }
         *         }
         *       }
         *     }
         */
        ListOrders: {
            /** @description Array containing list information. */
            list: components["schemas"]["List"][];
            /** @description Array containing facets information. */
            facets: string[];
            paging: components["schemas"]["Paging"];
            stats: components["schemas"]["Stats"];
        };
        /**
         * List
         * @example {
         *       "orderId": "v502559llux-01",
         *       "creationDate": "2019-02-04T10:29:11+00:00",
         *       "clientName": "J C",
         *       "items": null,
         *       "totalValue": 7453,
         *       "paymentNames": "Boleto Bancário",
         *       "status": "invoiced",
         *       "statusDescription": "Faturado",
         *       "marketPlaceOrderId": null,
         *       "sequence": "502559",
         *       "salesChannel": "1",
         *       "affiliateId": "",
         *       "origin": "Marketplace",
         *       "workflowInErrorState": false,
         *       "workflowInRetry": false,
         *       "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci",
         *       "ShippingEstimatedDate": null,
         *       "ShippingEstimatedDateMax": null,
         *       "ShippingEstimatedDateMin": null,
         *       "orderIsComplete": true,
         *       "listId": null,
         *       "listType": null,
         *       "authorizedDate": "2019-02-07T21:29:54+00:00",
         *       "callCenterOperatorName": null,
         *       "totalItems": 1,
         *       "currencyCode": "BRL"
         *     }
         */
        List: {
            orderId: string;
            creationDate: string;
            clientName: string;
            items: string | null;
            totalValue: number;
            paymentNames: string;
            status: string;
            /** @description `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value. */
            statusDescription: string;
            marketPlaceOrderId: string | null;
            sequence: string;
            salesChannel: string;
            affiliateId: string;
            origin: string;
            workflowInErrorState: boolean;
            workflowInRetry: boolean;
            lastMessageUnread: string | null;
            ShippingEstimatedDate: string | null;
            ShippingEstimatedDateMax: string | null;
            ShippingEstimatedDateMin: string | null;
            orderIsComplete: boolean;
            listId: string | null;
            listType: string | null;
            authorizedDate: string | null;
            callCenterOperatorName: string | null;
            totalItems: number;
            currencyCode: string;
        };
        /**
         * Paging
         * @example {
         *       "total": 84,
         *       "pages": 6,
         *       "currentPage": 1,
         *       "perPage": 15
         *     }
         */
        Paging: {
            total: number;
            pages: number;
            currentPage: number;
            perPage: number;
        };
        /**
         * Stats
         * @example {
         *       "stats": {
         *         "totalValue": {
         *           "Count": 84,
         *           "Max": 21526180,
         *           "Mean": 262672.75,
         *           "Min": 1160,
         *           "Missing": 0,
         *           "StdDev": 2348087.3869179883,
         *           "Sum": 22064511,
         *           "SumOfSquares": 463417439039853,
         *           "Facets": {
         *             "origin": {
         *               "Fulfillment": {
         *                 "Count": 68,
         *                 "Max": 11150,
         *                 "Mean": 1395.5882352941176,
         *                 "Min": 1250,
         *                 "Missing": 0,
         *                 "StdDev": 1200.5513439298484,
         *                 "Sum": 94900,
         *                 "SumOfSquares": 229010000,
         *                 "Facets": null
         *               },
         *               "Marketplace": {
         *                 "Count": 16,
         *                 "Max": 21526180,
         *                 "Mean": 1373100.6875,
         *                 "Min": 1160,
         *                 "Missing": 0,
         *                 "StdDev": 5374326.141087491,
         *                 "Sum": 21969611,
         *                 "SumOfSquares": 463417210029853,
         *                 "Facets": null
         *               }
         *             },
         *             "currencyCode": {
         *               "BRL": {
         *                 "Count": 84,
         *                 "Max": 21526180,
         *                 "Mean": 262672.75,
         *                 "Min": 1160,
         *                 "Missing": 0,
         *                 "StdDev": 2348087.3869179883,
         *                 "Sum": 22064511,
         *                 "SumOfSquares": 463417439039853,
         *                 "Facets": null
         *               }
         *             }
         *           }
         *         },
         *         "totalItems": {
         *           "Count": 84,
         *           "Max": 89,
         *           "Mean": 2.2261904761904763,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 9.660940100525016,
         *           "Sum": 187,
         *           "SumOfSquares": 8163,
         *           "Facets": {
         *             "origin": {
         *               "Fulfillment": {
         *                 "Count": 68,
         *                 "Max": 1,
         *                 "Mean": 1,
         *                 "Min": 1,
         *                 "Missing": 0,
         *                 "StdDev": 0,
         *                 "Sum": 68,
         *                 "SumOfSquares": 68,
         *                 "Facets": null
         *               },
         *               "Marketplace": {
         *                 "Count": 16,
         *                 "Max": 89,
         *                 "Mean": 7.4375,
         *                 "Min": 1,
         *                 "Missing": 0,
         *                 "StdDev": 21.92401651157926,
         *                 "Sum": 119,
         *                 "SumOfSquares": 8095,
         *                 "Facets": null
         *               }
         *             },
         *             "currencyCode": {
         *               "BRL": {
         *                 "Count": 84,
         *                 "Max": 89,
         *                 "Mean": 2.2261904761904763,
         *                 "Min": 1,
         *                 "Missing": 0,
         *                 "StdDev": 9.660940100525016,
         *                 "Sum": 187,
         *                 "SumOfSquares": 8163,
         *                 "Facets": null
         *               }
         *             }
         *           }
         *         }
         *       }
         *     }
         */
        Stats: {
            stats: components["schemas"]["Stats1"];
        };
        /**
         * Stats1
         * @example {
         *       "totalValue": {
         *         "Count": 84,
         *         "Max": 21526180,
         *         "Mean": 262672.75,
         *         "Min": 1160,
         *         "Missing": 0,
         *         "StdDev": 2348087.3869179883,
         *         "Sum": 22064511,
         *         "SumOfSquares": 463417439039853,
         *         "Facets": {
         *           "origin": {
         *             "Fulfillment": {
         *               "Count": 68,
         *               "Max": 11150,
         *               "Mean": 1395.5882352941176,
         *               "Min": 1250,
         *               "Missing": 0,
         *               "StdDev": 1200.5513439298484,
         *               "Sum": 94900,
         *               "SumOfSquares": 229010000,
         *               "Facets": null
         *             },
         *             "Marketplace": {
         *               "Count": 16,
         *               "Max": 21526180,
         *               "Mean": 1373100.6875,
         *               "Min": 1160,
         *               "Missing": 0,
         *               "StdDev": 5374326.141087491,
         *               "Sum": 21969611,
         *               "SumOfSquares": 463417210029853,
         *               "Facets": null
         *             }
         *           },
         *           "currencyCode": {
         *             "BRL": {
         *               "Count": 84,
         *               "Max": 21526180,
         *               "Mean": 262672.75,
         *               "Min": 1160,
         *               "Missing": 0,
         *               "StdDev": 2348087.3869179883,
         *               "Sum": 22064511,
         *               "SumOfSquares": 463417439039853,
         *               "Facets": null
         *             }
         *           }
         *         }
         *       },
         *       "totalItems": {
         *         "Count": 84,
         *         "Max": 89,
         *         "Mean": 2.2261904761904763,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 9.660940100525016,
         *         "Sum": 187,
         *         "SumOfSquares": 8163,
         *         "Facets": {
         *           "origin": {
         *             "Fulfillment": {
         *               "Count": 68,
         *               "Max": 1,
         *               "Mean": 1,
         *               "Min": 1,
         *               "Missing": 0,
         *               "StdDev": 0,
         *               "Sum": 68,
         *               "SumOfSquares": 68,
         *               "Facets": null
         *             },
         *             "Marketplace": {
         *               "Count": 16,
         *               "Max": 89,
         *               "Mean": 7.4375,
         *               "Min": 1,
         *               "Missing": 0,
         *               "StdDev": 21.92401651157926,
         *               "Sum": 119,
         *               "SumOfSquares": 8095,
         *               "Facets": null
         *             }
         *           },
         *           "currencyCode": {
         *             "BRL": {
         *               "Count": 84,
         *               "Max": 89,
         *               "Mean": 2.2261904761904763,
         *               "Min": 1,
         *               "Missing": 0,
         *               "StdDev": 9.660940100525016,
         *               "Sum": 187,
         *               "SumOfSquares": 8163,
         *               "Facets": null
         *             }
         *           }
         *         }
         *       }
         *     }
         */
        Stats1: {
            totalValue: components["schemas"]["TotalValue"];
            totalItems: components["schemas"]["TotalItems"];
        };
        /**
         * TotalValue
         * @example {
         *       "Count": 84,
         *       "Max": 21526180,
         *       "Mean": 262672.75,
         *       "Min": 1160,
         *       "Missing": 0,
         *       "StdDev": 2348087.3869179883,
         *       "Sum": 22064511,
         *       "SumOfSquares": 463417439039853,
         *       "Facets": {
         *         "origin": {
         *           "Fulfillment": {
         *             "Count": 68,
         *             "Max": 11150,
         *             "Mean": 1395.5882352941176,
         *             "Min": 1250,
         *             "Missing": 0,
         *             "StdDev": 1200.5513439298484,
         *             "Sum": 94900,
         *             "SumOfSquares": 229010000,
         *             "Facets": null
         *           },
         *           "Marketplace": {
         *             "Count": 16,
         *             "Max": 21526180,
         *             "Mean": 1373100.6875,
         *             "Min": 1160,
         *             "Missing": 0,
         *             "StdDev": 5374326.141087491,
         *             "Sum": 21969611,
         *             "SumOfSquares": 463417210029853,
         *             "Facets": null
         *           }
         *         },
         *         "currencyCode": {
         *           "BRL": {
         *             "Count": 84,
         *             "Max": 21526180,
         *             "Mean": 262672.75,
         *             "Min": 1160,
         *             "Missing": 0,
         *             "StdDev": 2348087.3869179883,
         *             "Sum": 22064511,
         *             "SumOfSquares": 463417439039853,
         *             "Facets": null
         *           }
         *         }
         *       }
         *     }
         */
        TotalValue: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: components["schemas"]["Facets"];
        };
        /**
         * Facets
         * @example {
         *       "origin": {
         *         "Fulfillment": {
         *           "Count": 68,
         *           "Max": 11150,
         *           "Mean": 1395.5882352941176,
         *           "Min": 1250,
         *           "Missing": 0,
         *           "StdDev": 1200.5513439298484,
         *           "Sum": 94900,
         *           "SumOfSquares": 229010000,
         *           "Facets": null
         *         },
         *         "Marketplace": {
         *           "Count": 16,
         *           "Max": 21526180,
         *           "Mean": 1373100.6875,
         *           "Min": 1160,
         *           "Missing": 0,
         *           "StdDev": 5374326.141087491,
         *           "Sum": 21969611,
         *           "SumOfSquares": 463417210029853,
         *           "Facets": null
         *         }
         *       },
         *       "currencyCode": {
         *         "BRL": {
         *           "Count": 84,
         *           "Max": 21526180,
         *           "Mean": 262672.75,
         *           "Min": 1160,
         *           "Missing": 0,
         *           "StdDev": 2348087.3869179883,
         *           "Sum": 22064511,
         *           "SumOfSquares": 463417439039853,
         *           "Facets": null
         *         }
         *       }
         *     }
         */
        Facets: {
            origin: components["schemas"]["Origin"];
            currencyCode: components["schemas"]["CurrencyCode"];
        };
        /**
         * Origin
         * @example {
         *       "Fulfillment": {
         *         "Count": 68,
         *         "Max": 11150,
         *         "Mean": 1395.5882352941176,
         *         "Min": 1250,
         *         "Missing": 0,
         *         "StdDev": 1200.5513439298484,
         *         "Sum": 94900,
         *         "SumOfSquares": 229010000,
         *         "Facets": null
         *       },
         *       "Marketplace": {
         *         "Count": 16,
         *         "Max": 21526180,
         *         "Mean": 1373100.6875,
         *         "Min": 1160,
         *         "Missing": 0,
         *         "StdDev": 5374326.141087491,
         *         "Sum": 21969611,
         *         "SumOfSquares": 463417210029853,
         *         "Facets": null
         *       }
         *     }
         */
        Origin: {
            Fulfillment: components["schemas"]["Fulfillment"];
            Marketplace: components["schemas"]["Marketplace1"];
        };
        /**
         * Fulfillment
         * @example {
         *       "Count": 68,
         *       "Max": 11150,
         *       "Mean": 1395.5882352941176,
         *       "Min": 1250,
         *       "Missing": 0,
         *       "StdDev": 1200.5513439298484,
         *       "Sum": 94900,
         *       "SumOfSquares": 229010000,
         *       "Facets": null
         *     }
         */
        Fulfillment: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: string | null;
        };
        /**
         * Marketplace1
         * @example {
         *       "Count": 16,
         *       "Max": 21526180,
         *       "Mean": 1373100.6875,
         *       "Min": 1160,
         *       "Missing": 0,
         *       "StdDev": 5374326.141087491,
         *       "Sum": 21969611,
         *       "SumOfSquares": 463417210029853,
         *       "Facets": null
         *     }
         */
        Marketplace1: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: string | null;
        };
        /**
         * CurrencyCode
         * @example {
         *       "BRL": {
         *         "Count": 84,
         *         "Max": 21526180,
         *         "Mean": 262672.75,
         *         "Min": 1160,
         *         "Missing": 0,
         *         "StdDev": 2348087.3869179883,
         *         "Sum": 22064511,
         *         "SumOfSquares": 463417439039853,
         *         "Facets": null
         *       }
         *     }
         */
        CurrencyCode: {
            BRL: components["schemas"]["BRL"];
        };
        /**
         * BRL
         * @example {
         *       "Count": 84,
         *       "Max": 21526180,
         *       "Mean": 262672.75,
         *       "Min": 1160,
         *       "Missing": 0,
         *       "StdDev": 2348087.3869179883,
         *       "Sum": 22064511,
         *       "SumOfSquares": 463417439039853,
         *       "Facets": null
         *     }
         */
        BRL: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: string | null;
        };
        /**
         * TotalItems
         * @example {
         *       "Count": 84,
         *       "Max": 89,
         *       "Mean": 2.2261904761904763,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 9.660940100525016,
         *       "Sum": 187,
         *       "SumOfSquares": 8163,
         *       "Facets": {
         *         "origin": {
         *           "Fulfillment": {
         *             "Count": 68,
         *             "Max": 1,
         *             "Mean": 1,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 0,
         *             "Sum": 68,
         *             "SumOfSquares": 68,
         *             "Facets": null
         *           },
         *           "Marketplace": {
         *             "Count": 16,
         *             "Max": 89,
         *             "Mean": 7.4375,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 21.92401651157926,
         *             "Sum": 119,
         *             "SumOfSquares": 8095,
         *             "Facets": null
         *           }
         *         },
         *         "currencyCode": {
         *           "BRL": {
         *             "Count": 84,
         *             "Max": 89,
         *             "Mean": 2.2261904761904763,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 9.660940100525016,
         *             "Sum": 187,
         *             "SumOfSquares": 8163,
         *             "Facets": null
         *           }
         *         }
         *       }
         *     }
         */
        TotalItems: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: components["schemas"]["Facets1"];
        };
        /**
         * Facets1
         * @example {
         *       "origin": {
         *         "Fulfillment": {
         *           "Count": 68,
         *           "Max": 1,
         *           "Mean": 1,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 0,
         *           "Sum": 68,
         *           "SumOfSquares": 68,
         *           "Facets": null
         *         },
         *         "Marketplace": {
         *           "Count": 16,
         *           "Max": 89,
         *           "Mean": 7.4375,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 21.92401651157926,
         *           "Sum": 119,
         *           "SumOfSquares": 8095,
         *           "Facets": null
         *         }
         *       },
         *       "currencyCode": {
         *         "BRL": {
         *           "Count": 84,
         *           "Max": 89,
         *           "Mean": 2.2261904761904763,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 9.660940100525016,
         *           "Sum": 187,
         *           "SumOfSquares": 8163,
         *           "Facets": null
         *         }
         *       }
         *     }
         */
        Facets1: {
            origin: components["schemas"]["Origin1"];
            currencyCode: components["schemas"]["CurrencyCode1"];
        };
        /**
         * Origin1
         * @example {
         *       "Fulfillment": {
         *         "Count": 68,
         *         "Max": 1,
         *         "Mean": 1,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 0,
         *         "Sum": 68,
         *         "SumOfSquares": 68,
         *         "Facets": null
         *       },
         *       "Marketplace": {
         *         "Count": 16,
         *         "Max": 89,
         *         "Mean": 7.4375,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 21.92401651157926,
         *         "Sum": 119,
         *         "SumOfSquares": 8095,
         *         "Facets": null
         *       }
         *     }
         */
        Origin1: {
            Fulfillment: components["schemas"]["Fulfillment1"];
            Marketplace: components["schemas"]["Marketplace2"];
        };
        /**
         * Fulfillment1
         * @example {
         *       "Count": 68,
         *       "Max": 1,
         *       "Mean": 1,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 0,
         *       "Sum": 68,
         *       "SumOfSquares": 68,
         *       "Facets": null
         *     }
         */
        Fulfillment1: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: string | null;
        };
        /**
         * Marketplace2
         * @example {
         *       "Count": 16,
         *       "Max": 89,
         *       "Mean": 7.4375,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 21.92401651157926,
         *       "Sum": 119,
         *       "SumOfSquares": 8095,
         *       "Facets": null
         *     }
         */
        Marketplace2: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: string | null;
        };
        /**
         * CurrencyCode1
         * @example {
         *       "BRL": {
         *         "Count": 84,
         *         "Max": 89,
         *         "Mean": 2.2261904761904763,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 9.660940100525016,
         *         "Sum": 187,
         *         "SumOfSquares": 8163,
         *         "Facets": null
         *       }
         *     }
         */
        CurrencyCode1: {
            BRL: components["schemas"]["BRL1"];
        };
        /**
         * BRL1
         * @example {
         *       "Count": 84,
         *       "Max": 89,
         *       "Mean": 2.2261904761904763,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 9.660940100525016,
         *       "Sum": 187,
         *       "SumOfSquares": 8163,
         *       "Facets": null
         *     }
         */
        BRL1: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: string | null;
        };
        RegisterChangeRequest: {
            /**
             * @description Request identification of the change. Only the first change made with each `requestId` will be effective on a given order. Use different IDs for different changes to the same order.
             * @example change-request-0123
             */
            requestId: string;
            /**
             * @description Reason for order change. This may be shown to the shopper in the UI or transactional emails.
             * @example Stock shortage
             */
            reason: string;
            /**
             * @description This field can be used to apply a discount to the total value of the order. Value in cents.
             * @example 100
             */
            discountValue: number;
            /**
             * @description This field can be used to increment the total value of the order. Value in cents.
             * @example 100
             */
            incrementValue: number;
            /** @description List of items that should be removed from the order. */
            itemsRemoved?: {
                /**
                 * @description Product ID of the item.
                 * @example 0
                 */
                id: string;
                /**
                 * @description Price of the item in cents.
                 * @example 2499
                 */
                price: number;
                /**
                 * @description Amount of items to be removed.
                 * @example 1
                 */
                quantity: number;
            }[];
            /** @description List of items that should be added to the order. */
            itemsAdded?: {
                /**
                 * @description Product ID of the item.
                 * @example 0
                 */
                id: string;
                /**
                 * @description Price of the item in cents.
                 * @example 2499
                 */
                price: number;
                /**
                 * @description Amount of items to be added.
                 * @example 1
                 */
                quantity: number;
            }[];
        };
        RegisterChange: {
            /** @description Date of order change. */
            date?: string;
            /** @description ID of the order. */
            orderId?: string;
            /** @description Receipt identification. */
            receipt?: string;
        };
        /**
         * AddLogRequest
         * @example {
         *       "source": "Postman",
         *       "message": "Teste add interactions"
         *     }
         */
        AddLogRequest: {
            source: string;
            message: string;
        };
        /**
         * InvoiceNotificationRequest
         * @example {
         *       "type": "Output",
         *       "issuanceDate": "2019-01-302019-01-31T18:25:43-05:00",
         *       "invoiceNumber": "9999",
         *       "invoiceValue": "10000",
         *       "invoiceKey": null,
         *       "invoiceUrl": null,
         *       "courier": null,
         *       "trackingNumber": null,
         *       "trackingUrl": null,
         *       "dispatchedDate": "2019-01-31T18:25:43-05:00",
         *       "items": [
         *         {
         *           "id": "1234",
         *           "price": 10000,
         *           "quantity": 1
         *         }
         *       ]
         *     }
         */
        InvoiceNotificationRequest: {
            /**
             * @description The type of invoice. There are two possible values: **Output** and **Input**. The Output type should be used when the invoice you are sending is a selling invoice. The Input type should be used when you send a return invoice.
             * @example Output
             */
            type: string;
            /**
             * @description The invoice date is when the order was [invoiced](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) in the VTEX platform, and the `IssuanceDate` is the date when the merchant registers the order's invoice in the store's system. The `IssuanceDate` can be different from the invoice date, because the merchant can register the invoice days or even months after order invoicing. You must add date and time in this field.
             * @example 2019-01-31T18:25:43-05:00
             */
            issuanceDate: string;
            /**
             * @description Unique code that identifies the invoice. When you call this endpoint using the same invoice number, you generate a new `receipt` code.
             * @example DFG-v7731485plzv-01
             */
            invoiceNumber: string | null;
            /**
             * @description Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
             * @example 2499
             */
            invoiceValue: string;
            /**
             * @description Information about invoice Key.
             * @example CFe35201100063960001504590006629690333214542150
             */
            invoiceKey?: string | null;
            /**
             * @description URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations.
             * @example https://luxstore.com/invoices/24382.pdf
             */
            invoiceUrl?: string | null;
            /**
             * @description XML text of the invoice, not the URL. This field is very important for external marketplace integrations such as Mercado Libre.
             * @example <NFe>
             *     <infNFe Id="NFe34687999999090910270550010000000015180000000000" versao="1.10">
             *     <ide>
             *     <cUF>37</cUF>
             *     <cNF>000005177</cNF>
             *     <natOp>Venda a vista</natOp>
             *     <indPag>0</indPag>
             *     <mod>55</mod>
             *     <serie>1</serie>
             *     <nNF>1</nNF>
             *     <dEmi>2018-07-06</dEmi>
             *     <dSaiEnt>2018-07-06</dSaiEnt>
             *     <tpNF>0</tpNF>
             *     <cMunFG>79950308</cMunFG>
             *     <tpImp>1</tpImp>
             *     <tpEmis>1</tpEmis>
             *     <cDV>3</cDV>
             *     <tpAmb>2</tpAmb>
             *     <finNFe>1</finNFe>
             *     <procEmi>0</procEmi>
             *     <verProc>NF-eletronica.com</verProc>
             *     </ide>
             *     <emit>
             *     <CNPJ>99999090998760</CNPJ>
             *     <xNome>NF-e Associacao NF-e</xNome>
             *     <xFant>NF-e</xFant>
             *     <enderEmit>
             *     <xLgr>Rua Central</xLgr>
             *     <nro>100</nro>
             *     <xCpl>Fundos</xCpl>
             *     <xBairro>Distrito Industrial</xBairro>
             *     <cMun>0000000</cMun>
             *     <xMun>Município</xMun>
             *     <UF>SP</UF>
             *     <CEP>0000000</CEP>
             *     <cPais>1058</cPais>
             *     <xPais>Brasil</xPais>
             *     <fone>1733021717</fone>
             *     </enderEmit>
             *     <IE>123456789012</IE>
             *     </emit>
             *     <dest>
             *     <CNPJ>00000000000000</CNPJ>
             *     <xNome>DISTRIBUIDORA DE AGUAS MINERAIS</xNome>
             *     <enderDest>
             *     <xLgr>AV DAS FONTES</xLgr>
             *     <nro>1777</nro>
             *     <xCpl>1001 ANDAR</xCpl>
             *     <xBairro>PARQUE</xBairro>
             *     <cMun>0000000</cMun>
             *     <xMun>Sao Paulo</xMun>
             *     <UF>SP</UF>
             *     <CEP>00000000</CEP>
             *     <cPais>1058</cPais>
             *     <xPais>BRASIL</xPais>
             *     <fone>3900000000</fone>
             *     </enderDest>
             *     <IE> </IE>
             *     </dest>
             *     <retirada>
             *     <CNPJ>000000000004</CNPJ>
             *     <xLgr>AV PAULISTA</xLgr>
             *     <nro>12345</nro>
             *     <xCpl>TERREO</xCpl>
             *     <xBairro>CERQUEIRA CESAR</xBairro>
             *     <cMun>0000000</cMun>
             *     <xMun>SAO PAULO</xMun>
             *     <UF>SP</UF>
             *     </retirada>
             *     <entrega>
             *     <CNPJ>00000000299000194</CNPJ>
             *     <xLgr>AV FARIA LIMA</xLgr>
             *     <nro>154400</nro>
             *     <xCpl>156 ANDAR</xCpl>
             *     <xBairro>PINHEIROS</xBairro>
             *     <cMun>0000308</cMun>
             *     <xMun>SAO PAULO</xMun>
             *     <UF>SP</UF>
             *     </entrega>
             *     <det nItem="1">
             *     <prod>
             *     <cProd>00001</cProd>
             *     <cEAN/>
             *     <xProd>Agua Mineral</xProd>
             *     <CFOP>5101</CFOP>
             *     <uCom>dz</uCom>
             *     <qCom>1000000.0000</qCom>
             *     <vUnCom>1</vUnCom>
             *     <vProd>10000000.00</vProd>
             *     <cEANTrib/>
             *     <uTrib>und</uTrib>
             *     <qTrib>12000000.0000</qTrib>
             *     <vUnTrib>1</vUnTrib>
             *     </prod>
             *     <imposto>
             *     <ICMS>
             *     <ICMS00>
             *     <orig>0</orig>
             *     <CST>00</CST>
             *     <modBC>0</modBC>
             *     <vBC>10000000.00</vBC>
             *     <pICMS>18.00</pICMS>
             *     <vICMS>1800000.00</vICMS>
             *     </ICMS00>
             *     </ICMS>
             *     <PIS>
             *     <PISAliq>
             *     <CST>01</CST>
             *     <vBC>10000000.00</vBC>
             *     <pPIS>0.65</pPIS>
             *     <vPIS>65000</vPIS>
             *     </PISAliq>
             *     </PIS>
             *     <COFINS>
             *     <COFINSAliq>
             *     <CST>01</CST>
             *     <vBC>10000000.00</vBC>
             *     <pCOFINS>2.00</pCOFINS>
             *     <vCOFINS>200000.00</vCOFINS>
             *     </COFINSAliq>
             *     </COFINS>
             *     </imposto>
             *     </det>
             *     <det nItem="2">
             *     <prod>
             *     <cProd>00002</cProd>
             *     <cEAN/>
             *     <xProd>Agua Mineral</xProd>
             *     <CFOP>5101</CFOP>
             *     <uCom>pack</uCom>
             *     <qCom>5000000.0000</qCom>
             *     <vUnCom>2</vUnCom>
             *     <vProd>10000000.00</vProd>
             *     <cEANTrib/>
             *     <uTrib>und</uTrib>
             *     <qTrib>3000000.0000</qTrib>
             *     <vUnTrib>0.3333</vUnTrib>
             *     </prod>
             *     <imposto>
             *     <ICMS>
             *     <ICMS00>
             *     <orig>0</orig>
             *     <CST>00</CST>
             *     <modBC>0</modBC>
             *     <vBC>10000000.00</vBC>
             *     <pICMS>18.00</pICMS>
             *     <vICMS>1800000.00</vICMS>
             *     </ICMS00>
             *     </ICMS>
             *     <PIS>
             *     <PISAliq>
             *     <CST>01</CST>
             *     <vBC>10000000.00</vBC>
             *     <pPIS>0.65</pPIS>
             *     <vPIS>65000</vPIS>
             *     </PISAliq>
             *     </PIS>
             *     <COFINS>
             *     <COFINSAliq>
             *     <CST>01</CST>
             *     <vBC>10000000.00</vBC>
             *     <pCOFINS>2.00</pCOFINS>
             *     <vCOFINS>200000.00</vCOFINS>
             *     </COFINSAliq>
             *     </COFINS>
             *     </imposto>
             *     </det>
             *     <total>
             *     <ICMSTot>
             *     <vBC>20000000.00</vBC>
             *     <vICMS>18.00</vICMS>
             *     <vBCST>0</vBCST>
             *     <vST>0</vST>
             *     <vProd>20000000.00</vProd>
             *     <vFrete>0</vFrete>
             *     <vSeg>0</vSeg>
             *     <vDesc>0</vDesc>
             *     <vII>0</vII>
             *     <vIPI>0</vIPI>
             *     <vPIS>130000.00</vPIS>
             *     <vCOFINS>400000.00</vCOFINS>
             *     <vOutro>0</vOutro>
             *     <vNF>20000000.00</vNF>
             *     </ICMSTot>
             *     </total>
             *     <transp>
             *     <modFrete>0</modFrete>
             *     <transporta>
             *     <CNPJ>00000000000000</CNPJ>
             *     <xNome>Distribuidora de Bebidas Fazenda de SP Ltda.</xNome>
             *     <IE>00000000999119</IE>
             *     <xEnder>Rua Central 100 - Fundos - Distrito Industrial</xEnder>
             *     <xMun>SAO PAULO</xMun>
             *     <UF>SP</UF>
             *     </transporta>
             *     <veicTransp>
             *     <placa>BXI1717</placa>
             *     <UF>SP</UF>
             *     <RNTC>123456789</RNTC>
             *     </veicTransp>
             *     <reboque>
             *     <placa>UUU0000</placa>
             *     <UF>SP</UF>
             *     <RNTC>123456789</RNTC>
             *     </reboque>
             *     <vol>
             *     <qVol>10000</qVol>
             *     <esp>CAIXA</esp>
             *     <marca>LINDOYA</marca>
             *     <nVol>500</nVol>
             *     <pesoL>1000000000.000</pesoL>
             *     <pesoB>1200000000.000</pesoB>
             *     <lacres>
             *     <nLacre>XYZ10231486</nLacre>
             *     </lacres>
             *     </vol>
             *     </transp>
             *     <infAdic>
             *     <infAdFisco>Nota Fiscal de exemplo NF-eletronica.com</infAdFisco>
             *     </infAdic>
             *     </infNFe>
             *     <Signature>
             *     <SignedInfo>
             *     <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-0321120010315"/>
             *     <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
             *     <Reference URI="#NFe3508059999977777777705500100000000000000000">
             *     <Transforms>
             *     <Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
             *     <Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-66666615"/>
             *     </Transforms>
             *     <DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
             *     <DigestValue>xFzhgdgnhjSD1e9uqe04lnoHT4ZzLSY=</DigestValue>
             *     </Reference>
             *     </SignedInfo>
             *     <SignatureValue>
             *     Iz5Z3PLQbzZt9jnBtr6xsmHZMOu/3plXG9xxfFjRCQYGnD1rjlhzBGrqt026Ca2VHHM/bHNepi6FuFkAi595GScKVuHREUotzifE2OIjgavvTOrMwbXG7+0LYgkwPFiPCao2S33UpZe7MneaxcmKQGKQZw1fP8fsWmaQ4cczZT8=
             *     </SignatureValue>
             *     <KeyInfo>
             *     <X509Data>
             *     <X509Certificate>
             *     MIIEuzCCA6OgAwIBAgIDMTMxMA0GasfFSDAGQUAMIGSMQswCQYDVQQGEwJCUjELMAkGA1UECBMCUlMxFTATBgNVBAcTDFBvcnRvIEFsZWdyZTEdMBsGA1UEChMUVGVzdGUgUHJvamV0byBORmUgUlMxHTAbBgNVBAsTFFRlc3RlIFByb2pldG8gTkZlIFJTMSEwHwYDVQQDExhORmUgLSBBQyBJbnRlcm1lZGlhcmlhIDEwHhcNMDgwNDI4MDkwMTAyWhcNMDkwNDMwMjM1OTU5WjCBnjELMAkGA1UECBMCUlMxHTAfvw4567DRhg76FByb2pldG8gTkZlIFJTMR0wGwYDVQQKExRUZXN0ZSBQcm9qZXRvIE5GZSBSUzEVMBMGA1UEBxMMUE9SVE8gQUxFR1JFMQswCQYDVQQGEwJCUjEtMCsGA1UEAxMkTkZlIC0gQXNzb2NpYWNhbyBORi1lOjk5OTk5MDkwOTEwMjcwMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDh6RRv0bj4RYX+tDQrZRb5opa77LBVVs+6LphIfSF3TSWPfnKh0+xLlBFdmnB5YGgbbW9Uon6pZQTfaC8jZhRhI5eFRRofY/Ugoeo0NGt6PcIQNZQd6lLQ/ASd1qWwjqJoEa7udriKjy3h351Mf1bng1VxS1urqC3Dn39ZWIEwQIDAQABo4IBjjCCAYowIgYDVR0jAQEABBgwFoAUPT5TqhNWAm+ZpcVsvB7malDBjEQwDwYDVR0TAQH/BAUwAwEBADAPBgNVHQ8BAf8EBQMDAOAAMAwGA1UdIAEBAAQCMAAwgbwGA1UdEQEBAASBsTCBrqA4BgVgTAEDBKAvBC0wNzA4MTk1MTE1MTk0NTMxMDg3MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDCgHQYFYEwBAwKgFAQSRmVybmFuZG8gQ2FudG8gQWx0oBkGBWBMAQMDoBAEDjk5OTk5MDkwOTEwMjcwoBcGBWBMAQMHoA4EDDAwMDAwMDAwMDAwMIEfZmVybmFuZG8tYWx0QHByb2NlcmdzLnJzLmdvdi5icjAgBgNVHSUBAf8EFjAUBggrBgEFBQcDAgYIKwYBBQUHAwQwUwYDVR0fAQEABEkwRzBFoEOgQYY/aHR0cDovL25mZWNlcnRpZmljYWRvLnNlZmF6LnJzLmdvdi5ici9MQ1IvQUNJbnRlcm1lZGlhcmlhMzguY3JsMA0GCSqGSIb3DQEBBQUAA4IBAQCNPpaZ3Byu3/70nObXE8NiM53j1ddIFXsb+v2ghCVd4ffExv3hYc+/a3lfgV8H/WfQsdSCTzS2cHrd4Aasr/eXfclVDmf2hcWz+R7iysOHuT6B6r+DvV3JcMdJJCDdynR5REa+zViMnVZo1G3KuceQ7/y5X3WFNVq4kwHvonJ9oExsWyw8rTwUK5bsjz0A2yEwXkmkJIngnF41sP31+9jCImiqkXcmsesFhxzX7iurAQAQCZOm7iwMWxQKcAjXCZrgSZWRQy6mU224sX3HTArHahmLJ9Iw+WYAua5qBJsiN6PC7v5tfhdsgGD46DHMnOecxvkkPolDUyBa7d7xwgm
             *     </X509Certificate>
             *     </X509Data>
             *     </KeyInfo>
             *     </Signature>
             *     </NFe>
             */
            embeddedInvoice?: string | null;
            /**
             * @description The name of the carrier responsible for delivering the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`)*.
             * @example carrierOne
             */
            courier?: string | null;
            /**
             * @description The number code that identifies the order tracking. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`)*.
             * @example 87658
             */
            trackingNumber?: string | null;
            /**
             * @description The URL used to track the order. *This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`)*.
             * @example https://www.tracking.com/url
             */
            trackingUrl?: string | null;
            /**
             * @description Order dispatch date. May be `null`.
             * @example 2019-02-08T13:16:13.4617653+00:00
             */
            dispatchedDate?: string | null;
            /** @description Array containing the SKUs that are being invoiced. */
            items: components["schemas"]["Item1"][];
        };
        /**
         * Item1
         * @example {
         *       "id": "1234",
         *       "price": 10000,
         *       "description": "335",
         *       "quantity": 1
         *     }
         */
        Item1: {
            /** @description ID of the SKU being invoiced. */
            id: string;
            /**
             * @description Price in cents of the SKU being invoiced. Do not use a decimal separator, for example, the price $24.99 corresponds to `2499`. You must insert the SKU unitary price because the VTEX system will multiply the price over the quantity.
             * @example 2499
             */
            price: number;
            /**
             * @description You can use this field for additional information about the SKU being invoiced.
             * @example 335
             */
            description?: string;
            /**
             * @description Quantity currently in inventory of the SKU being invoiced.
             * @example 2
             */
            quantity: number;
        };
        /**
         * Updatepartialinvoice.SendTrackingNumber.Request
         * @example {
         *       "trackingNumber": "87658",
         *       "trackingUrl": "https://www.tracking.com/url",
         *       "courier": "carrierOne",
         *       "dispatchedDate": "2022-02-08T13:16:13.4617653+00:00"
         *     }
         */
        "Updatepartialinvoice.SendTrackingNumber.Request": {
            /** @description The number code that identifies the order tracking. */
            trackingNumber: string;
            /** @description Package tracking URL. */
            trackingUrl: string | null;
            /** @description Date when the package was dispatched. For example, 2023-01-08T13:16:13.4617653+00:00. */
            dispatchedDate: string | null;
            /** @description The name of the carrier responsible for delivering the order. */
            courier: string | null;
        };
        /**
         * Updatepartialinvoice.SendTrackingNumber
         * @example {
         *       "date": "2019-02-08T13:16:13.4617653+00:00",
         *       "orderId": "00-v5195004lux-01",
         *       "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
         *     }
         */
        "Updatepartialinvoice.SendTrackingNumber": {
            date: string;
            orderId: string;
            receipt: string;
        };
        /**
         * UpdateTrackingStatusRequest
         * @example {
         *       "isDelivered": false,
         *       "deliveredDate": null,
         *       "events": [
         *         {
         *           "city": "Rio de Janeiro",
         *           "state": "RJ",
         *           "description": "Coletado pela transportadora",
         *           "date": "2015-06-23"
         *         },
         *         {
         *           "city": "Sao Paulo",
         *           "state": "SP",
         *           "description": "A caminho de Curitiba",
         *           "date": "2015-06-24"
         *         }
         *       ]
         *     }
         */
        UpdateTrackingStatusRequest: {
            /**
             * @description When set as `true`, it means the order got to its final shipping address, whether by delivery or pickup shipping type. When set as `false`, the order is still in transit to its shipping address.
             * @example false
             */
            isDelivered: boolean;
            /**
             * @description Date and time of when the package was delivered. Note that it is different from the tracking date parameter. The `deliveredDate` format is `yyyy-mm-dd hh:mm`.
             * @example 2022-10-01 21:15
             */
            deliveredDate: string | null;
            /** @description Array containing events information. */
            events: components["schemas"]["Event"][];
        };
        /**
         * Event
         * @example {
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "description": "Coletado pela transportadora",
         *       "date": "2015-06-23"
         *     }
         */
        Event: {
            city: string;
            state: string;
            description: string;
            date: string;
        };
        /**
         * UpdateTrackingStatus
         * @example {
         *       "date": "2017-03-29T18:04:31.0521233+00:00",
         *       "orderId": "v501245lspt-01",
         *       "receipt": "f67d33a8029c42ce9a8f07fc17f54449"
         *     }
         */
        UpdateTrackingStatus: {
            date: string;
            orderId: string;
            receipt: string;
        };
        /**
         * GetConversation
         * @example {
         *       "id": "2023-01-23t09-23-08_619a80a05aa34efb982b309c7a1910e3",
         *       "from": {
         *         "conversationRelatedTo": "1305371685465-01",
         *         "conversationSubject": "oms",
         *         "emailAlias": "noreply@vtexcommerce.com.br-9814872b.ct.store.com.br",
         *         "aliasMaskType": 0,
         *         "email": "noreply@store.com.br",
         *         "name": "no reply",
         *         "role": "null"
         *       },
         *       "to": [
         *         {
         *           "conversationRelatedTo": "1305371685465-01",
         *           "conversationSubject": "oms",
         *           "emailAlias": "64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br",
         *           "aliasMaskType": 0,
         *           "email": "customer.name@email.com",
         *           "name": "Mary John",
         *           "role": "Customer"
         *         }
         *       ],
         *       "subject": "Your payment has been aproved.",
         *       "firstWords": "Your payment has been aproved and we are waiting for...",
         *       "body": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional //EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"> <html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:v=\"urn:schemas-microsoft-com:vml\" style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important;\"> <head> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/> <title>recorrenciaqa</title> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style> a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style> <style> @media (max-width: 600px) { img { max-width: 100% !important; height: auto !important; } } </style> <style> @media screen and (min-width: 30em) { .ph4-ns { padding-left: 2rem !important; padding-right: 2rem !important; } .mv4-ns { margin-top: 2rem !important; margin-bottom: 2rem !important; } } </style> </head> <body style=\"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\"> <table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"box-sizing: border-box; margin: 0; padding: 0; background: #f1f1f1; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; line-height: 100% !important;\"> <tr style=\"box-sizing: border-box !important;\"> <td align=\"left\" valign=\"top\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\"> <table class=\"mv4-ns\" width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"box-sizing: border-box; max-width: 40rem; width: 100%; background-color: #fff; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" bgcolor=\"#fff\"> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; border-bottom-style: solid; border-bottom-width: 1px; border-color: #eee; width: 100%; padding-bottom: 2rem; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"center\"> <div style=\"box-sizing: border-box; width: 8rem; margin-bottom: 1rem; margin-top: 2rem; margin-right: auto; margin-left: auto !important;\"> <a href=\"http://.com.br\" style=\"box-sizing: border-box !important;\"> <img alt=\"\" border=\"0\" width=\"auto\" src=\"http://licensemanager.vtex.com.br/api/site/pub/accounts/9ddcfba5-3855-49ec-b61e-b2847b9314cc/logos/show\" style=\"vertical-align: top; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; border: none; max-height: 80px !important;\"> </img></a> </div> <h1 style=\"margin: 0; font-size: 50px; line-height: 58px; box-sizing: border-box !important;\">Seu pagamento foi aprovado.</h1> <div style=\"box-sizing: border-box; color: #777; margin-top: .5rem !important;\"> Referente ao Pedido <span style=\"font-weight: 700 !important;\">#1305371685465-01</span> </div> </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <div style=\"box-sizing: border-box; margin-top: 2rem !important;\"> <p style=\"box-sizing: border-box !important;\">    Olá, jose.     Estamos providenciando a emissão da Nota Fiscal do seu pedido e o envio do seu produto.  </p> </div> </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100%; padding-bottom: 2rem; padding-top: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <h3 style=\"font-size: 20px; line-height: 36px; text-transform: uppercase; letter-spacing: 1.2pt; font-weight: 300; margin-top: 16px; box-sizing: border-box; margin: 0 !important;\">Pagamento</h3>    <div style=\"box-sizing: border-box; line-height: 1.5; font-size: 1.25rem !important;\"> Visa  final 1111  <br/>R$ 3,99  à vista  </div>     </td> </tr> <tr style=\"box-sizing: border-box !important;\"> <td class=\"ph4-ns\" style=\"font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; border-top-style: solid; border-top-width: 1px; border-color: #eee; padding-top: 1rem; padding-bottom: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\" align=\"left\"> <p style=\"box-sizing: border-box !important;\"> Atenciosamente,<br/>Equipe recorrenciaqa </p> </td> </tr> </table> </td> </tr> </table> </body> </html>",
         *       "hasAttachment": false,
         *       "attachmentNames": [
         *         "attachments439505"
         *       ],
         *       "date": "2023-01-23T09:23:31.0000000+00:00"
         *     }
         */
        GetConversation: {
            /**
             * @description Conversation ID.
             * @example 2023-01-23t09-23-08_619a80a05aa34efb982b309c7a1910e3
             */
            id: string;
            from: components["schemas"]["From"];
            /** @description Conversation receiver. */
            to: components["schemas"]["To"][];
            /**
             * @description Conversation content subject.
             * @example Your payment has been aproved.
             */
            subject: string;
            /**
             * @description First words of Conversation content.
             * @example Your payment has been aproved and we are waiting for...
             */
            firstWords: string;
            /**
             * @description Conversation content body.
             * @example <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important;"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>recorrenciaqa</title> <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <style> a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } </style> <style> @media (max-width: 600px) { img { max-width: 100% !important; height: auto !important; } } </style> <style> @media screen and (min-width: 30em) { .ph4-ns { padding-left: 2rem !important; padding-right: 2rem !important; } .mv4-ns { margin-top: 2rem !important; margin-bottom: 2rem !important; } } </style> </head> <body style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-sizing: border-box; width: 100%; height: 100%; margin: 0; padding: 0; background: #f1f1f1 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;"> <table width="100%" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; margin: 0; padding: 0; background: #f1f1f1; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; width: 100%; height: 100%; line-height: 100% !important;"> <tr style="box-sizing: border-box !important;"> <td align="left" valign="top" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;"> <table class="mv4-ns" width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="box-sizing: border-box; max-width: 40rem; width: 100%; background-color: #fff; border-collapse: collapse; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" bgcolor="#fff"> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; border-bottom-style: solid; border-bottom-width: 1px; border-color: #eee; width: 100%; padding-bottom: 2rem; text-align: center !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" align="center"> <div style="box-sizing: border-box; width: 8rem; margin-bottom: 1rem; margin-top: 2rem; margin-right: auto; margin-left: auto !important;"> <a href="http://.com.br" style="box-sizing: border-box !important;"> <img alt="" border="0" width="auto" src="http://licensemanager.vtex.com.br/api/site/pub/accounts/9ddcfba5-3855-49ec-b61e-b2847b9314cc/logos/show" style="vertical-align: top; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; border: none; max-height: 80px !important;"> </img></a> </div> <h1 style="margin: 0; font-size: 50px; line-height: 58px; box-sizing: border-box !important;">Seu pagamento foi aprovado.</h1> <div style="box-sizing: border-box; color: #777; margin-top: .5rem !important;"> Referente ao Pedido <span style="font-weight: 700 !important;">#1305371685465-01</span> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" align="left"> <div style="box-sizing: border-box; margin-top: 2rem !important;"> <p style="box-sizing: border-box !important;">    Olá, jose.     Estamos providenciando a emissão da Nota Fiscal do seu pedido e o envio do seu produto.  </p> </div> </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; width: 100%; padding-bottom: 2rem; padding-top: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" align="left"> <h3 style="font-size: 20px; line-height: 36px; text-transform: uppercase; letter-spacing: 1.2pt; font-weight: 300; margin-top: 16px; box-sizing: border-box; margin: 0 !important;">Pagamento</h3>    <div style="box-sizing: border-box; line-height: 1.5; font-size: 1.25rem !important;"> Visa  final 1111  <br/>R$ 3,99  à vista  </div>     </td> </tr> <tr style="box-sizing: border-box !important;"> <td class="ph4-ns" style="font-size: 14px; line-height: 20px; box-sizing: border-box; border-collapse: collapse; text-align: left; border-top-style: solid; border-top-width: 1px; border-color: #eee; padding-top: 1rem; padding-bottom: 1rem !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" align="left"> <p style="box-sizing: border-box !important;"> Atenciosamente,<br/>Equipe recorrenciaqa </p> </td> </tr> </table> </td> </tr> </table> </body> </html>
             */
            body: string;
            /**
             * @description When set as `true`, it means there are attachments, when set as `false`, there are not.
             * @example false
             */
            hasAttachment: boolean;
            /** @description List with attachments' names, if there are any. */
            attachmentNames: string[];
            /**
             * @description Conversation date.
             * @example 2023-01-23T09:23:31.0000000+00:00
             */
            date: string;
        };
        /**
         * From
         * @description Conversation sender.
         * @example {
         *       "conversationRelatedTo": "1305371685465-01",
         *       "conversationSubject": "oms",
         *       "emailAlias": "noreply@vtexcommerce.com.br-9814872b.ct.store.com.br",
         *       "aliasMaskType": 0,
         *       "email": "noreply@store.com.br",
         *       "name": "no reply",
         *       "role": "null"
         *     }
         */
        From: {
            /**
             * @description Related order ID.
             * @example 1305371685465-01
             */
            conversationRelatedTo: string;
            /**
             * @description Conversation subject.
             * @example oms
             */
            conversationSubject: string;
            /**
             * @description Sender transactional tracker email.
             * @example 64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br
             */
            emailAlias: string;
            /**
             * @description Conversation tracker mask type.
             * @example 0
             */
            aliasMaskType: number;
            /**
             * @description Sender's email.
             * @example noreply@store.com.br
             */
            email: string;
            /**
             * @description Sender's name.
             * @example no reply
             */
            name: string;
            /**
             * @description If it is a client or null, for transactional emails.
             * @example null
             */
            role: string | null;
        };
        /**
         * To
         * @description Conversation receiver.
         * @example {
         *       "conversationRelatedTo": "1305371685465-01",
         *       "conversationSubject": "oms",
         *       "emailAlias": "64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br",
         *       "aliasMaskType": 0,
         *       "email": "customer.name@email.com",
         *       "name": "Mary John",
         *       "role": "Customer"
         *     }
         */
        To: {
            /**
             * @description Related order ID.
             * @example 1305371685465-01
             */
            conversationRelatedTo: string;
            /**
             * @description Conversation subject.
             * @example oms
             */
            conversationSubject: string;
            /**
             * @description Sender transactional tracker email.
             * @example 64d8bd8dbe5c4e7b93b8b3c237e50be1@ct.name.com.br
             */
            emailAlias: string;
            /**
             * @description Conversation tracker mask type.
             * @example 0
             */
            aliasMaskType: number;
            /**
             * @description Receiver's email.
             * @example customer.name@email.com
             */
            email: string;
            /**
             * @description Receiver's name.
             * @example Mary John
             */
            name: string;
            /**
             * @description If it is a customer or null, for transactional emails.
             * @example Customer
             */
            role: string;
        };
        /**
         * GetPaymenttransaction
         * @example {
         *       "status": "Finished",
         *       "isActive": true,
         *       "transactionId": "CB452D77E7D04099A4DB0479087B1D2C",
         *       "merchantName": "LUXSTORE",
         *       "payments": [
         *         {
         *           "id": "721CBE1090324D12ABE301FE33DE775A",
         *           "paymentSystem": "4",
         *           "paymentSystemName": "Mastercard",
         *           "value": 10150,
         *           "installments": 1,
         *           "referenceValue": 10150,
         *           "cardHolder": null,
         *           "cardNumber": null,
         *           "firstDigits": "412341",
         *           "lastDigits": "4123",
         *           "cvv2": null,
         *           "expireMonth": null,
         *           "expireYear": null,
         *           "url": null,
         *           "giftCardId": null,
         *           "giftCardName": null,
         *           "giftCardCaption": null,
         *           "redemptionCode": null,
         *           "group": "creditCard",
         *           "tid": "101770752",
         *           "dueDate": null,
         *           "connectorResponses": {
         *             "Tid": "101770752",
         *             "ReturnCode": "200",
         *             "Message": "logMessage",
         *             "authId": "170852"
         *           }
         *         }
         *       ]
         *     }
         */
        GetPaymenttransaction: {
            /** @description Transaction status. */
            status: string;
            /** @description If it is an active transaction (`true`) or not (`false`). */
            isActive: boolean;
            /** @description Transaction ID. */
            transactionId: string;
            /** @description Transaction merchant's name. */
            merchantName: string;
            /** @description Payments' details object. */
            payments: components["schemas"]["Payment1"][];
        };
        /**
         * Payment1
         * @example {
         *       "id": "721CBE1090324D12ABE301FE33DE775A",
         *       "paymentSystem": "4",
         *       "paymentSystemName": "Mastercard",
         *       "value": 10150,
         *       "installments": 1,
         *       "referenceValue": 10150,
         *       "cardHolder": null,
         *       "cardNumber": null,
         *       "firstDigits": "412341",
         *       "lastDigits": "4123",
         *       "cvv2": null,
         *       "expireMonth": null,
         *       "expireYear": null,
         *       "url": null,
         *       "giftCardId": null,
         *       "giftCardName": null,
         *       "giftCardCaption": null,
         *       "redemptionCode": null,
         *       "group": "creditCard",
         *       "tid": "101770752",
         *       "dueDate": null,
         *       "connectorResponses": {
         *         "Tid": "101770752",
         *         "ReturnCode": "200",
         *         "Message": "logMessage",
         *         "authId": "170852"
         *       }
         *     }
         */
        Payment1: {
            /** @description Payment ID. */
            id: string;
            /** @description Payment system ID. */
            paymentSystem: string;
            /** @description Payment system name. */
            paymentSystemName: string;
            /** @description Payment value. */
            value: number;
            /** @description Payment Installments quantity. */
            installments: number;
            /** @description Payment reference Value. */
            referenceValue: number;
            /** @description Payment card holder. */
            cardHolder: string | null;
            /** @description Payment card number. */
            cardNumber: string | null;
            /** @description Payment card first digits. */
            firstDigits: string;
            /** @description Payment card last digits. */
            lastDigits: string;
            /** @description Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions. */
            cvv2: string | null;
            /** @description Payment card expire month. */
            expireMonth: string | null;
            /** @description Payment card expire year. */
            expireYear: string | null;
            /** @description Payment URL. */
            url: string | null;
            /** @description Gift Card ID. */
            giftCardId: string | null;
            /** @description Gift Card name. */
            giftCardName: string | null;
            /** @description Gift Card caption. */
            giftCardCaption: string | null;
            /** @description Code for the customer to use the Gift Card. */
            redemptionCode: string | null;
            /** @description It represents the payment method. For each method, it can have the following values:
             *
             *     - **Credit card:** `creditCard`
             *
             *     - **Debid card:** `debitCard`
             *
             *     - **Bank invoice:** `bankInvoice`
             *
             *     - **Promissory:** `promissory`
             *
             *     - **Gift card:** `giftCard`
             *
             *     - **Pix:** `instantPayment`. */
            group: string;
            /** @description Payment transaction ID. */
            tid: string;
            /** @description Payment due date. */
            dueDate: string | null;
            connectorResponses: components["schemas"]["ConnectorResponses"];
        };
        /**
         * ConnectorResponses
         * @example {
         *       "Tid": "101770752",
         *       "ReturnCode": null,
         *       "Message": null,
         *       "authId": "170852"
         *     }
         */
        ConnectorResponses: {
            /** @description Connector transaction ID. */
            Tid: string;
            /** @description Connector return code. */
            ReturnCode: string | null;
            /** @description Information about the connector's responses. */
            Message: string | null;
            /** @description Connector authorization ID. */
            authId: string;
        };
        /**
         * ConfirmitemfeedorderstatusRequest
         * @example {
         *       "commitToken": "Marketplace##{\"Receipt\":\"+eXJYhj5rDqHa28+XUcfebDO4pve3TvMpPlW0ivc5STyE/40J6wxooXgBF8LZ9CdhZkFJnMYBVDwPwQtNEoZQrVtErDB2Yq2zs16QqsJuYxSrQtBfl9rMfmkO5orB9oDHSpvwL6DjDzcuJeQBBNxono/m4F6BloJEsk9BmuTmPaRI+7xsrN5Oeg8NPUoNSnsT983JPr1B+Y+TbbFjC1R8ZkvFHGVfti1QbhOwmYWTHPG08YMqla+Qwh7kUONLBXPqporF/CcqJo5YVTSu2uBcCuXkUo+OH9uUTn6hHkUROo=\",\"PublisheId\":\"C0111A50CEB244E59C95422870127A4F\",\"PublisheId_Item\":\"C0111A50CEB244E59C95422870127A4F\",\"EventId\":\"0dc05b6b-48a5-4f03-975a-a69fb6550aaa\",\"LastSendOverwrite\":null}"
         *     }
         */
        ConfirmitemfeedorderstatusRequest: {
            commitToken: string;
        };
        /**
         * Getfeedorderstatus
         * @example {
         *       "eventId": "ED423DDED4C1AE580CADAC1A4D02DA3F",
         *       "handle": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidnRleGFwcGtleS1wYXJ0bmVyc2xhdGFtLVJNQkpNUyIsIkFwcEtleSI6InZ0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMiLCJBY2NvdW50IjoicGFydG5lcnNsYXRhbSIsIkhhbmRsZSI6IkFRRUIzbmtWR0piOXhhNGRjYlpkOTFVVWMyL2JObHc0Qnp3ZlNLV201Rjg2QXgrSGlRM053bEJkb2NwM2wvVytLdjFNQTZ4d3ZLcFYwYjlSeUttNVRpb3hrSVFMSG1Uck9xenB2aFlwU29uMzRrVmlNaWZHY2lnZFFqalBJdk00eWU4amVuaS9QKytaTmVxOFZWeFNGay81Yzg3YS84MTRjTFg2WGZPR2x2WitlTnVjTzA3S3UxK0xXaU5vQmJEY0cycGxKekxkRks3Qld3b1NTV3BmSWhrOGhmSFNkSzlzZVpJeG01QXFLbHFrUHNDNGk5emVaYVpBUVVrSi9aZWo3UjRrRDVRaXFjNmpjcnFheEdHc1lsNHMzUWM0ZmtWdmhYblJVQ2l2ZGdpMEtUYS8zcXlWWU9QTktIV2huTlZxMEZHNDNjME4vaWh6dDc0d1laNVl6aDFJRitHU2t1YTkrN1pCdnQ2VGs1cFRhZmVVclk0ckNPL2Fobnl1eXFLOG53ZkorVWxUTmt2ZVNFS29FdTNiUWQzSmc5R1lYWHlXOVVxRGo5dHJIZ1N5M3ZZa0dBWjd0MDZNZWUwQnBsdFBxWExaIiwiT3JkZXJJZCI6Ijk1MzcxMjAwNDEyNi0wMSIsIk1lc3NhZ2VJZCI6ImI5YjI4NDkwLTNjNzAtNDdjNi1hMTE3LWNhN2FjMTk2MDY1OSIsIkRvbWFpbiI6IkZ1bGZpbGxtZW50IiwiU3RhdGUiOiJyZWFkeS1mb3ItaGFuZGxpbmciLCJMYXN0U3RhdGUiOiJ3aW5kb3ctdG8tY2FuY2VsIiwiTGFzdENoYW5nZSI6IjA4LzEyLzIwMTkgMjA6NTQ6MDEiLCJDdXJyZW50Q2hhbmdlIjoiMDgvMTIvMjAxOSAyMDo1NDoyMyIsIkNyZWF0ZWRBdCI6IjA4LzEyLzIwMTkgMjE6MDE6MzAiLCJpc3MiOiJicm9hZGNhc3QtYXBpLnZ0ZXhjb21tZXJjZS5jb20uYnIiLCJhdWQiOiJwYXJ0bmVyc2xhdGFtX3Z0ZXhhcHBrZXktcGFydG5lcnNsYXRhbS1STUJKTVMifQ.7RQBZQb6pHhFhA_jMKTiSoJbDck7awgD3Xx7sdJcW6w",
         *       "domain": "Fulfillment",
         *       "state": "ready-for-handling",
         *       "lastState": "window-to-cancel",
         *       "orderId": "953712004126-01",
         *       "lastChange": "2019-08-12T20:54:01.134057Z",
         *       "currentChange": "2019-08-12T20:54:23.7153839Z"
         *     }
         */
        Getfeedorderstatus: {
            eventId: string;
            handle: string;
            domain: string;
            state: string;
            lastState: string;
            orderId: string;
            lastChange: string;
            currentChange: string;
        };
        /**
         * CommititemfeedorderstatusRequest
         * @example {
         *       "handles": [
         *         "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
         *       ]
         *     }
         */
        CommititemfeedorderstatusRequest: {
            /** @description List of item handles to commit. */
            handles: string[];
        };
        /** FeedConfigurationRequest */
        FeedConfigurationRequest: {
            filter: components["schemas"]["FeedFilter"];
            queue: components["schemas"]["Queue"];
        };
        /**
         * Filter
         * @description Object with type and status that will filter feed orders.
         */
        FeedFilter: {
            /**
             * @description Determines what orders appear in the feed and how they are filtered. There are two possible values:
             *
             *
            -`FromWorkflow`: the feed will receive order updates only when order’s statuses change and orders can be filtered by status, using the `status` field described below.
             *
             *
            -`FromOrders`: the feed gets updates whenever any change is made to an order. in this case, orders can be filtered by any property, according to JSONata expressions passed in the `expression` field described below.
             * @example FromWorkflow
             */
            type: string;
            /** @description List of order statuses that should be included in the feed. This should only be used in case `type` is set to `FromWorkflow`. The status event will be removed, if it can't deliver a message more than 100 times, 4 days progressively.
             *
             *     **Status available to filter**
             *
             *     - order-created
             *
             *     - on-order-completed
             *
             *     - on-order-completed-ffm
             *
             *     - payment-pending
             *
             *     - waiting-for-order-authorization
             *
             *     - approve-payment
             *
             *     - payment-approved
             *
             *     - request-cancel
             *
             *     - waiting-for-seller-decision
             *
             *     - waiting-ffmt-authorization
             *
             *     - waiting-for-authorization
             *
             *     - waiting-for-manual-authorization
             *
             *     - authorize-fulfillment
             *
             *     - order-create-error
             *
             *     - order-creation-error
             *
             *     - window-to-cancel
             *
             *     - window-to-change-seller
             *
             *     - waiting-for-mkt-authorization
             *
             *     - waiting-seller-handling
             *
             *     - ready-for-handling
             *
             *     - start-handling
             *
             *     - handling
             *
             *     - invoice-after-cancellation-deny
             *
             *     - order-accepted
             *
             *     - invoice
             *
             *     - invoiced
             *
             *     - replaced
             *
             *     - cancellation-requested
             *
             *     - cancel
             *
             *     - canceled. */
            status?: string[];
            /** @description JSONata query expression that defines what conditions must be met for an order to be included in the feed. This should only be used in case `type` is set to `FromOrders`. */
            expression?: string;
            /**
             * @description Sets a limit to how many times a specific order shows on the feed, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the feed only once.
             * @example false
             */
            disableSingleFire?: boolean;
        };
        /** Filter */
        HookFilter: {
            /**
             * @description Determines what orders appear in the hook and how they are filtered. As shown in the examples above, there are two ways:
             *
             *      - `FromWorkflow`: the hook will receive order updates only when there is a change or update in the [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). You must send at least one value for the `status` field to determine by which status the orders will be filtered.
             *
             *      - `FromOrders`: the hook will receive order updates when there is a change in the order. In this case, orders can be filtered by any property, according to JSONata expressions passed in the `expression` field. You must send the request with values for the `expression` and `disableSingleFire` fields.
             * @example FromWorkflow
             */
            type: string;
            /** @description List of order statuses that should be included in the hook. This should only be used in case `type` is `FromWorkflow`. */
            status?: string[];
            /** @description JSONata query expression that defines what conditions must be met for an order to be included in the hook. This should only be used in case `type` is `FromOrders`. */
            expression?: string;
            /**
             * @description Sets a limit to how many times a specific order shows on the hook, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the hook only once. Send this field if you want to filter `FromOrders`.
             * @example false
             */
            disableSingleFire?: boolean;
        };
        /**
         * Queue
         * @description Object with information about timeout and message retention.
         */
        Queue: {
            /**
             * @description Period of time for which an item becomes invisible after it has been [retrieved](https://developers.vtex.com/vtex-rest-api/reference/feed-v3#getfeedorderstatus1). Measured in seconds.
             * @example 250
             */
            visibilityTimeoutInSeconds: number;
            /**
             * @description Maximum life span of an order update in the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds.
             * @example 3456000
             */
            MessageRetentionPeriodInSeconds: number;
        };
        /**
         * HookConfigurationRequest
         * @example {
         *       "filter": {
         *         "type": "FromWorkflow",
         *         "status": [
         *           "order-completed",
         *           "handling",
         *           "ready-for-handling",
         *           "waiting-ffmt-authorization",
         *           "cancel"
         *         ]
         *       },
         *       "hook": {
         *         "url": "https://endpoint.example/path",
         *         "headers": {
         *           "key": "value"
         *         }
         *       }
         *     }
         */
        HookConfigurationRequest: {
            filter: components["schemas"]["HookFilter"];
            hook: components["schemas"]["Hook"];
        };
        /**
         * Hook
         * @example {
         *       "url": "https://endpoint.example/path",
         *       "headers": {
         *         "key": "value"
         *       }
         *     }
         */
        Hook: {
            url: string;
            headers: components["schemas"]["Headers"];
        };
        /**
         * Headers
         * @example {
         *       "key": "value"
         *     }
         */
        Headers: {
            key: string;
        };
        /**
         * HookConfiguration
         * @example {
         *       "Domain": "Fulfillment",
         *       "OrderId": "v52277740atmc-01",
         *       "State": "ready-for-handling",
         *       "LastState": "window-to-cancel",
         *       "LastChange": "2019-08-14T17:11:39.2550122Z",
         *       "CurrentChange": "2019-08-14T17:12:48.0965893Z",
         *       "Origin": {
         *         "Account": "automacaoqa",
         *         "Key": "vtexappkey-appvtex"
         *       }
         *     }
         */
        HookConfiguration: {
            Domain: string;
            OrderId: string;
            State: string;
            LastState: string;
            LastChange: string;
            CurrentChange: string;
            Origin: components["schemas"]["Origin2"];
        };
        /**
         * Origin2
         * @example {
         *       "Account": "automacaoqa",
         *       "Key": "vtexappkey-appvtex"
         *     }
         */
        Origin2: {
            Account: string;
            Key: string;
        };
        /**
         * Userorderslist
         * @description Order list object.
         * @example {
         *       "list": [
         *         {
         *           "orderId": "v502556llux-01",
         *           "creationDate": "2019-01-28T20:09:43+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": null,
         *           "totalValue": 1160,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "handling",
         *           "statusDescription": "Preparando Entrega",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502556",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
         *           "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-28T20:33:04+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502449llux-02",
         *           "creationDate": "2018-08-28T17:42:40+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": null,
         *           "totalValue": 118588,
         *           "paymentNames": "Promissory",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502452",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502449llux-02 Resumo Itens R$ 1.178,98 Entrega R$ 6,90 Total R$ 1.185,88",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 12,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502449llux-01",
         *           "creationDate": "2018-08-28T17:42:28.9171556+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Mangueira Reservatório Ao Cavalete",
         *               "ean": null,
         *               "refId": "TE3121110",
         *               "id": "195",
         *               "productId": "134",
         *               "sellingPrice": 7390,
         *               "price": 7390
         *             },
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Mangueira Filtro",
         *               "ean": null,
         *               "refId": "XC459N610CA",
         *               "id": "238",
         *               "productId": "162",
         *               "sellingPrice": 5190,
         *               "price": 5190
         *             }
         *           ],
         *           "totalValue": 21526180,
         *           "paymentNames": null,
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "",
         *           "sequence": "502449",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         },
         *         {
         *           "orderId": "v502058llux-01",
         *           "creationDate": "2017-07-25T23:17:36.7963248+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Aquecedor Britania 1500 Branco",
         *               "ean": "1235567890143",
         *               "refId": "branquinho",
         *               "id": "1234568212",
         *               "productId": "1000200",
         *               "sellingPrice": 35599,
         *               "price": 35599
         *             }
         *           ],
         *           "totalValue": 35599,
         *           "paymentNames": null,
         *           "status": "invoiced",
         *           "statusDescription": "Faturado",
         *           "marketPlaceOrderId": "",
         *           "sequence": "502058",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2017-07-29T19:24:20.7444363+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         },
         *         {
         *           "orderId": "v501538llux-01",
         *           "creationDate": "2017-06-26T16:57:58.9986524+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Boneco do Mário",
         *               "ean": "bonecomario",
         *               "refId": "bonecomario",
         *               "id": "1234568183",
         *               "productId": "1000257",
         *               "sellingPrice": 150363,
         *               "price": 150363
         *             },
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Camiseta GG",
         *               "ean": null,
         *               "refId": "abc1234",
         *               "id": "1234567894",
         *               "productId": "1000187",
         *               "sellingPrice": 899,
         *               "price": 899
         *             }
         *           ],
         *           "totalValue": 151262,
         *           "paymentNames": null,
         *           "status": "invoiced",
         *           "statusDescription": "Faturado",
         *           "marketPlaceOrderId": "",
         *           "sequence": "501538",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2017-06-27T13:59:49.7705236+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         },
         *         {
         *           "orderId": "v501020llux-01",
         *           "creationDate": "2016-11-21T19:57:54.0415289+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 2,
         *               "description": "Camiseta GG",
         *               "ean": null,
         *               "refId": "abc1234",
         *               "id": "1234567894",
         *               "productId": "1000187",
         *               "sellingPrice": 899,
         *               "price": 899
         *             }
         *           ],
         *           "totalValue": 3190,
         *           "paymentNames": null,
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "",
         *           "sequence": "501020",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2016-12-02T08:00:00+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         },
         *         {
         *           "orderId": "v500973llux-01",
         *           "creationDate": "2016-10-10T17:19:30.8562035+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "SMARTPHONE SAMSUNG GALAXY S7 FLAT SM-G930FZDLZTO 32GB DOURADO TELA 5.1\" 4G CÂMERA 12 MP",
         *               "ean": null,
         *               "refId": "testefnac",
         *               "id": "1234568028",
         *               "productId": "1000203",
         *               "sellingPrice": 299000,
         *               "price": 299000
         *             }
         *           ],
         *           "totalValue": 299900,
         *           "paymentNames": null,
         *           "status": "handling",
         *           "statusDescription": "Preparando Entrega",
         *           "marketPlaceOrderId": "",
         *           "sequence": "500973",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2016-10-10T14:23:17.1897068+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         },
         *         {
         *           "orderId": "v500970llux-01",
         *           "creationDate": "2016-10-10T17:07:59.0889392+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Camiseta GG",
         *               "ean": null,
         *               "refId": "abc1234",
         *               "id": "1234567894",
         *               "productId": "1000187",
         *               "sellingPrice": 899,
         *               "price": 899
         *             }
         *           ],
         *           "totalValue": 1799,
         *           "paymentNames": null,
         *           "status": "invoiced",
         *           "statusDescription": "Faturado",
         *           "marketPlaceOrderId": "",
         *           "sequence": "500970",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2016-10-10T14:13:34.4927265+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         },
         *         {
         *           "orderId": "v500890llux-01",
         *           "creationDate": "2016-08-17T18:35:04.8659804+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Botin Futbol Adidas 11Questra Fg Cesped Hombre Absolut - M",
         *               "ean": "absolutm",
         *               "refId": null,
         *               "id": "549",
         *               "productId": "9",
         *               "sellingPrice": 1000,
         *               "price": 1000
         *             }
         *           ],
         *           "totalValue": 1000,
         *           "paymentNames": null,
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "",
         *           "sequence": "500890",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         },
         *         {
         *           "orderId": "v500838llux-01",
         *           "creationDate": "2016-07-29T00:20:47.7736718+00:00",
         *           "clientName": "Cunha VTEX",
         *           "items": [
         *             {
         *               "seller": "1",
         *               "quantity": 1,
         *               "description": "Rooibos Lavanda - Pouch - 50gr",
         *               "ean": "198",
         *               "refId": "10098",
         *               "id": "98",
         *               "productId": "1000025",
         *               "sellingPrice": 5200,
         *               "price": 5200
         *             }
         *           ],
         *           "totalValue": 6200,
         *           "paymentNames": null,
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "",
         *           "sequence": "500838",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 0,
         *           "currencyCode": null
         *         }
         *       ],
         *       "facets": [],
         *       "paging": {
         *         "total": 19,
         *         "pages": 10,
         *         "currentPage": 1,
         *         "perPage": 2
         *       },
         *       "stats": {
         *         "stats": {
         *           "totalValue": {
         *             "Count": 19,
         *             "Max": 0,
         *             "Mean": 0,
         *             "Min": 0,
         *             "Missing": 0,
         *             "StdDev": 0,
         *             "Sum": 0,
         *             "SumOfSquares": 0,
         *             "Facets": {}
         *           },
         *           "totalItems": {
         *             "Count": 19,
         *             "Max": 0,
         *             "Mean": 0,
         *             "Min": 0,
         *             "Missing": 0,
         *             "StdDev": 0,
         *             "Sum": 0,
         *             "SumOfSquares": 0,
         *             "Facets": {}
         *           }
         *         }
         *       }
         *     }
         */
        Userorderslist: {
            /** @description List with user's orders details. */
            list: components["schemas"]["List1"][];
            /** @description Array containing facets information. */
            facets: string[];
            paging: components["schemas"]["Paging"];
            stats: components["schemas"]["Stats2"];
        };
        /**
         * List1
         * @example {
         *       "orderId": "1172452900788-01",
         *       "creationDate": "2019-01-28T20:09:43+00:00",
         *       "clientName": "Cunha VTEX",
         *       "items": [
         *         {
         *           "seller": "1",
         *           "quantity": 1,
         *           "description": "Reservoir hose",
         *           "ean": null,
         *           "refId": "TE3121110",
         *           "id": "195",
         *           "productId": "134",
         *           "sellingPrice": 7390,
         *           "price": 7390
         *         },
         *         {
         *           "seller": "1",
         *           "quantity": 1,
         *           "description": "Reservoir filter",
         *           "ean": null,
         *           "refId": "XC459N610CA",
         *           "id": "238",
         *           "productId": "162",
         *           "sellingPrice": 5190,
         *           "price": 5190
         *         }
         *       ],
         *       "totalValue": 1160,
         *       "paymentNames": "Boleto Bancário",
         *       "status": "handling",
         *       "statusDescription": "Preparing for delivery",
         *       "marketPlaceOrderId": null,
         *       "sequence": "502556",
         *       "salesChannel": "1",
         *       "affiliateId": "GTB",
         *       "origin": "Marketplace",
         *       "workflowInErrorState": false,
         *       "workflowInRetry": false,
         *       "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
         *       "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
         *       "ShippingEstimatedDateMax": null,
         *       "ShippingEstimatedDateMin": null,
         *       "orderIsComplete": true,
         *       "listId": null,
         *       "listType": null,
         *       "authorizedDate": "2019-01-28T20:33:04+00:00",
         *       "callCenterOperatorName": null,
         *       "totalItems": 1,
         *       "currencyCode": "BRL"
         *     }
         */
        List1: {
            /** @description Order ID is a unique code that identifies an order. */
            orderId: string;
            /** @description Order's creation date. */
            creationDate: string;
            /** @description Order's customer name. */
            clientName: string;
            /**
             * @deprecated
             * @description Information about order's items.
             */
            items: components["schemas"]["Item2"][] | null;
            /** @description Total value amount. */
            totalValue: number;
            /** @description Payment system name. */
            paymentNames: string | null;
            /** @description Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). */
            status: string;
            /**
             * @deprecated
             * @description Status description which is displayed on the Admin panel. This field is deprecated and may not return any value.
             */
            statusDescription: string;
            /** @description Marketplace order ID. */
            marketPlaceOrderId: string | null;
            /** @description Six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`. */
            sequence: string;
            /** @description Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order. */
            salesChannel: string;
            /** @description Corresponds to the three-digits [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order. */
            affiliateId: string;
            /** @description Order's [origin in the order flow](https://developers.vtex.com/docs/guides/orders-overview#understanding-order-flow-types), which can be `Marketplace`, `Fulfillment` or `Chain`. */
            origin: string;
            /** @description If there is a work flow error (`true`) or not (`false`). */
            workflowInErrorState: boolean;
            /** @description If the order is in a work flow retry (`true`) or not (`false`). */
            workflowInRetry: boolean;
            /** @description Last sent transactional message. */
            lastMessageUnread: string | null;
            /** @description Estimate shipping date. */
            ShippingEstimatedDate: string | null;
            /** @description The most extended shipping estimation possible. */
            ShippingEstimatedDateMax: string | null;
            /** @description The least extended shipping estimation possible. */
            ShippingEstimatedDateMin: string | null;
            /** @description If it is a completed order (`true`) or not (`false`). For more information, see [Order flow and status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). */
            orderIsComplete: boolean;
            /** @description Related Gift List ID. */
            listId: string | null;
            /** @description Related Gift list type. */
            listType: string | null;
            /** @description Authorized order date. */
            authorizedDate: string | null;
            /** @description Call center operator responsible for the order. */
            callCenterOperatorName: string | null;
            /** @description Order's total amount of items. */
            totalItems: number;
            /** @description Currency code in ISO 4217. For example, `BRL`. */
            currencyCode: string | null;
        };
        /**
         * Item2
         * @example {
         *       "seller": "1",
         *       "quantity": 1,
         *       "description": "Mangueira Reservatório Ao Cavalete",
         *       "ean": null,
         *       "refId": "TE3121110",
         *       "id": "195",
         *       "productId": "134",
         *       "sellingPrice": 7390,
         *       "price": 7390
         *     }
         */
        Item2: {
            /** @description Seller related to the order. */
            seller: string;
            /** @description Quantity of SKUs. */
            quantity: number;
            /** @description Description of items. */
            description: string;
            /** @description EAN of the SKU. */
            ean: string | null;
            /** @description Item's reference ID. */
            refId: string | null;
            /** @description Item's SKU ID, which is a unique numerical identifier. */
            id: string;
            /** @description ID of the Product associated with the item. */
            productId: string;
            /** @description Details on item's selling price. */
            sellingPrice: number;
            /** @description Item's price. */
            price: number;
        };
        /**
         * Stats2
         * @example {
         *       "stats": {
         *         "totalValue": {
         *           "Count": 19,
         *           "Max": 0,
         *           "Mean": 0,
         *           "Min": 0,
         *           "Missing": 0,
         *           "StdDev": 0,
         *           "Sum": 0,
         *           "SumOfSquares": 0,
         *           "Facets": {}
         *         },
         *         "totalItems": {
         *           "Count": 19,
         *           "Max": 0,
         *           "Mean": 0,
         *           "Min": 0,
         *           "Missing": 0,
         *           "StdDev": 0,
         *           "Sum": 0,
         *           "SumOfSquares": 0,
         *           "Facets": {}
         *         }
         *       }
         *     }
         */
        Stats2: {
            stats: components["schemas"]["Stats3"];
        };
        /**
         * Stats3
         * @example {
         *       "totalValue": {
         *         "Count": 19,
         *         "Max": 0,
         *         "Mean": 0,
         *         "Min": 0,
         *         "Missing": 0,
         *         "StdDev": 0,
         *         "Sum": 0,
         *         "SumOfSquares": 0,
         *         "Facets": {}
         *       },
         *       "totalItems": {
         *         "Count": 19,
         *         "Max": 0,
         *         "Mean": 0,
         *         "Min": 0,
         *         "Missing": 0,
         *         "StdDev": 0,
         *         "Sum": 0,
         *         "SumOfSquares": 0,
         *         "Facets": {}
         *       }
         *     }
         */
        Stats3: {
            totalValue: components["schemas"]["TotalValue1"];
            totalItems: components["schemas"]["TotalItems1"];
        };
        /**
         * TotalValue1
         * @example {
         *       "Count": 19,
         *       "Max": 0,
         *       "Mean": 0,
         *       "Min": 0,
         *       "Missing": 0,
         *       "StdDev": 0,
         *       "Sum": 0,
         *       "SumOfSquares": 0,
         *       "Facets": {}
         *     }
         */
        TotalValue1: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: Record<string, never>;
        };
        /**
         * TotalItems1
         * @example {
         *       "Count": 19,
         *       "Max": 0,
         *       "Mean": 0,
         *       "Min": 0,
         *       "Missing": 0,
         *       "StdDev": 0,
         *       "Sum": 0,
         *       "SumOfSquares": 0,
         *       "Facets": {}
         *     }
         */
        TotalItems1: {
            Count: number;
            Max: number;
            Mean: number;
            Min: number;
            Missing: number;
            StdDev: number;
            Sum: number;
            SumOfSquares: number;
            Facets: Record<string, never>;
        };
        /**
         * Userorderdetails
         * @example {
         *       "orderId": "v502556llux-01",
         *       "sequence": "502556",
         *       "marketplaceOrderId": "",
         *       "marketplaceServicesEndpoint": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
         *       "sellerOrderId": "00-v502556llux-01",
         *       "origin": "Marketplace",
         *       "affiliateId": "",
         *       "salesChannel": "1",
         *       "merchantName": "luxstore",
         *       "status": "handling",
         *       "statusDescription": "Preparando Entrega",
         *       "value": 1160,
         *       "creationDate": "2019-01-28T20:09:43.899958+00:00",
         *       "lastChange": "2019-02-06T20:46:11.7010747+00:00",
         *       "orderGroup": "v502556lspt",
         *       "totals": [
         *         {
         *           "id": "Items",
         *           "name": "Total dos Itens",
         *           "value": 3290
         *         },
         *         {
         *           "id": "Discounts",
         *           "name": "Total dos Descontos",
         *           "value": 0
         *         },
         *         {
         *           "id": "Shipping",
         *           "name": "Total do Frete",
         *           "value": 1160
         *         },
         *         {
         *           "id": "Tax",
         *           "name": "Total da Taxa",
         *           "value": 0
         *         },
         *         {
         *           "id": "Change",
         *           "name": "Total das mudanças",
         *           "value": -3290
         *         }
         *       ],
         *       "items": [
         *         {
         *           "uniqueId": "87F0945396994B349158C7D9C9941442",
         *           "id": "1234568358",
         *           "productId": "9429485",
         *           "ean": null,
         *           "lockId": "00-v502556llux-01",
         *           "itemAttachment": {
         *             "content": {},
         *             "name": null
         *           },
         *           "attachments": [],
         *           "quantity": 1,
         *           "seller": "1",
         *           "name": "Bay Max L",
         *           "refId": "BIGHEROBML",
         *           "price": 3290,
         *           "listPrice": 3290,
         *           "manualPrice": null,
         *           "priceTags": [],
         *           "imageUrl": "http://luxstore.vteximg.com.br/arquivos/ids/159263-55-55/image-cc1aed75cbfa424a85a94900be3eacec.jpg?v=636795432619830000",
         *           "detailUrl": "/bay-max-9429485/p",
         *           "components": [],
         *           "bundleItems": [],
         *           "params": [],
         *           "offerings": [],
         *           "attachmentOfferings": [
         *             {
         *               "name": "vtex.subscription.weekly",
         *               "required": false,
         *               "schema": {
         *                 "vtex.subscription.key.frequency": {
         *                   "MaximumNumberOfCharacters": 7,
         *                   "Domain": [
         *                     " 1 week",
         *                     " 2 week",
         *                     " 3 week",
         *                     " 4 week"
         *                   ]
         *                 }
         *               }
         *             }
         *           ],
         *           "sellerSku": "1234568358",
         *           "priceValidUntil": null,
         *           "commission": 0,
         *           "tax": 0,
         *           "preSaleDate": null,
         *           "additionalInfo": {
         *             "brandName": "VTEX",
         *             "brandId": "2000023",
         *             "categoriesIds": "/1/",
         *             "productClusterId": "135,142",
         *             "commercialConditionId": "5",
         *             "dimension": {
         *               "cubicweight": 0.7031,
         *               "height": 15,
         *               "length": 15,
         *               "weight": 15,
         *               "width": 15
         *             },
         *             "offeringInfo": null,
         *             "offeringType": null,
         *             "offeringTypeId": null
         *           },
         *           "measurementUnit": "un",
         *           "unitMultiplier": 1,
         *           "sellingPrice": 3290,
         *           "isGift": false,
         *           "shippingPrice": null,
         *           "rewardValue": 0,
         *           "freightCommission": 0,
         *           "priceDefinitions": {
         *             "sellingPrices": [
         *               {
         *                 "value": 99,
         *                 "quantity": 1
         *               }
         *             ],
         *             "calculatedSellingPrice": 99,
         *             "total": 99
         *           },
         *           "taxCode": null,
         *           "parentItemIndex": null,
         *           "parentAssemblyBinding": null,
         *           "callCenterOperator": "callCenterOp5473869",
         *           "serialNumbers": "3",
         *           "assemblies": [],
         *           "costPrice": 52
         *         }
         *       ],
         *       "marketplaceItems": [],
         *       "clientProfileData": {
         *         "id": "clientProfileData",
         *         "email": "rodrigo.cunha@vtex.com.br",
         *         "firstName": "Rodrigo",
         *         "lastName": "Cunha",
         *         "documentType": "cpf",
         *         "document": "11047867702",
         *         "phone": "+5521972321094",
         *         "corporateName": null,
         *         "tradeName": null,
         *         "corporateDocument": null,
         *         "stateInscription": null,
         *         "corporatePhone": null,
         *         "isCorporate": false,
         *         "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93",
         *         "customerClass": null
         *       },
         *       "giftRegistryData": null,
         *       "marketingData": {
         *         "id": "marketingData",
         *         "utmSource": "fb",
         *         "utmPartner": "utm partner",
         *         "utmMedium": "utm medium",
         *         "utmCampaign": "christmas",
         *         "coupon": "sale",
         *         "utmiCampaign": " ",
         *         "utmipage": " ",
         *         "utmiPart": " ",
         *         "marketingTags": [
         *           "vtex-subscription"
         *         ]
         *       },
         *       "ratesAndBenefitsData": {
         *         "id": "ratesAndBenefitsData",
         *         "rateAndBenefitsIdentifiers": []
         *       },
         *       "shippingData": {
         *         "id": "shippingData",
         *         "address": {
         *           "addressType": "residential",
         *           "receiverName": "Rodrigo Cunha",
         *           "addressId": "-1425945657910",
         *           "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *           "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *           "postalCode": "22250-040",
         *           "city": "Rio de Janeiro",
         *           "state": "RJ",
         *           "country": "BRA",
         *           "street": "Praia de Botafogo",
         *           "number": "518",
         *           "neighborhood": "Botafogo",
         *           "complement": "10",
         *           "reference": null,
         *           "geoCoordinates": []
         *         },
         *         "logisticsInfo": [
         *           {
         *             "itemIndex": 0,
         *             "selectedSla": "Normal",
         *             "lockTTL": "10d",
         *             "price": 1160,
         *             "listPrice": 1160,
         *             "sellingPrice": 1160,
         *             "deliveryWindow": null,
         *             "deliveryCompany": "Todos os CEPS",
         *             "shippingEstimate": "5bd",
         *             "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
         *             "slas": [
         *               {
         *                 "id": "Normal",
         *                 "name": "Normal",
         *                 "shippingEstimate": "5bd",
         *                 "deliveryWindow": null,
         *                 "price": 1160,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region13",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "0d",
         *                 "pickupDistance": 29.861602783203125
         *               },
         *               {
         *                 "id": "Expressa",
         *                 "name": "Expressa",
         *                 "shippingEstimate": "5bd",
         *                 "deliveryWindow": null,
         *                 "price": 1160,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region13",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "0d",
         *                 "pickupDistance": 29.861602783203125
         *               },
         *               {
         *                 "id": "Quebra Kit",
         *                 "name": "Quebra Kit",
         *                 "shippingEstimate": "2bd",
         *                 "deliveryWindow": null,
         *                 "price": 1392,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region13",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "0d",
         *                 "pickupDistance": 29.861602783203125
         *               },
         *               {
         *                 "id": "Sob Encomenda",
         *                 "name": "Sob Encomenda",
         *                 "shippingEstimate": "32bd",
         *                 "deliveryWindow": null,
         *                 "price": 1392,
         *                 "deliveryChannel": "delivery",
         *                 "pickupStoreInfo": {
         *                   "additionalInfo": null,
         *                   "address": null,
         *                   "dockId": null,
         *                   "friendlyName": null,
         *                   "isPickupStore": false
         *                 },
         *                 "polygonName": "region13",
         *                 "lockTTL": "12d",
         *                 "pickupPointId": "1_VTEX-RJ",
         *                 "transitTime": "0d",
         *                 "pickupDistance": 29.861602783203125
         *               }
         *             ],
         *             "shipsTo": [
         *               "BRA"
         *             ],
         *             "deliveryIds": [
         *               {
         *                 "courierId": "197a56f",
         *                 "courierName": "Todos os CEPS",
         *                 "dockId": "1",
         *                 "quantity": 1,
         *                 "warehouseId": "1_1",
         *                 "accountCarrierName": "recorrenciaqa",
         *                 "kitItemDetails": []
         *               }
         *             ],
         *             "deliveryChannels": [
         *               {
         *                 "id": "delivery",
         *                 "stockBalance": 0
         *               }
         *             ],
         *             "deliveryChannel": "delivery",
         *             "pickupStoreInfo": {
         *               "additionalInfo": null,
         *               "address": null,
         *               "dockId": null,
         *               "friendlyName": null,
         *               "isPickupStore": false
         *             },
         *             "addressId": "-1425945657910",
         *             "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *             "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *             "polygonName": "region56",
         *             "pickupPointId": "1_VTEX-RJ",
         *             "transitTime": "3d"
         *           }
         *         ],
         *         "trackingHints": null,
         *         "selectedAddresses": [
         *           {
         *             "addressId": "-1425945657910",
         *             "versionId": "e9c3bec2-125d-4b96-a021-316c3aa9f14f",
         *             "entityId": "eabfb564-99d6-40d8-bd6c-bddbd4990aad",
         *             "addressType": "residential",
         *             "receiverName": "Rodrigo Cunha",
         *             "street": "Praia de Botafogo",
         *             "number": "518",
         *             "complement": "10",
         *             "neighborhood": "Botafogo",
         *             "postalCode": "22250-040",
         *             "city": "Rio de Janeiro",
         *             "state": "RJ",
         *             "country": "BRA",
         *             "reference": null,
         *             "geoCoordinates": []
         *           }
         *         ]
         *       },
         *       "paymentData": {
         *         "transactions": [
         *           {
         *             "isActive": true,
         *             "transactionId": "418213DE29634837A63DD693A937A696",
         *             "merchantName": "luxstore",
         *             "payments": [
         *               {
         *                 "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *                 "paymentSystem": "6",
         *                 "paymentSystemName": "Boleto Bancário",
         *                 "value": 4450,
         *                 "installments": 1,
         *                 "referenceValue": 4450,
         *                 "cardHolder": null,
         *                 "cardNumber": null,
         *                 "firstDigits": null,
         *                 "lastDigits": null,
         *                 "cvv2": null,
         *                 "expireMonth": null,
         *                 "expireYear": null,
         *                 "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *                 "giftCardId": null,
         *                 "giftCardName": null,
         *                 "giftCardCaption": null,
         *                 "redemptionCode": null,
         *                 "group": "bankInvoice",
         *                 "tid": null,
         *                 "dueDate": "2019-02-02",
         *                 "connectorResponses": {
         *                   "Tid": "94857956",
         *                   "ReturnCode": "200",
         *                   "Message": "logMessage",
         *                   "authId": "857956"
         *                 },
         *                 "giftCardProvider": "presentCard",
         *                 "giftCardAsDiscount": false,
         *                 "koinUrl": "koinURL",
         *                 "accountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *                 "parentAccountId": "5BC5C6B417FE432AB971B1D399F190C9",
         *                 "bankIssuedInvoiceIdentificationNumber": "23797770100000019003099260100022107500729050",
         *                 "bankIssuedInvoiceIdentificationNumberFormatted": "32534.95739 75945.24534 54395.734214 5",
         *                 "bankIssuedInvoiceBarCodeNumber": "325349573975945245345439573421443986734065",
         *                 "bankIssuedInvoiceBarCodeType": "i25",
         *                 "billingAddress": {}
         *               }
         *             ]
         *           }
         *         ]
         *       },
         *       "packageAttachment": {
         *         "packages": []
         *       },
         *       "sellers": [
         *         {
         *           "id": "1",
         *           "name": "Lux Store",
         *           "logo": "https://sellersLogo/images.png",
         *           "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=accountName"
         *         }
         *       ],
         *       "callCenterOperatorData": null,
         *       "followUpEmail": "7bf3a59bbc56402c810bda9521ba449e@ct.vtex.com.br",
         *       "lastMessage": null,
         *       "hostname": "luxstore",
         *       "invoiceData": null,
         *       "changesAttachment": {
         *         "id": "changeAttachment",
         *         "changesData": [
         *           {
         *             "reason": "Blah",
         *             "discountValue": 3290,
         *             "incrementValue": 0,
         *             "itemsAdded": [],
         *             "itemsRemoved": [
         *               {
         *                 "id": "1234568358",
         *                 "name": "Bay Max L",
         *                 "quantity": 1,
         *                 "price": 3290,
         *                 "unitMultiplier": null
         *               }
         *             ],
         *             "receipt": {
         *               "date": "2019-02-06T20:46:04.4003606+00:00",
         *               "orderId": "v502556llux-01",
         *               "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *             }
         *           }
         *         ]
         *       },
         *       "openTextField": null,
         *       "roundingError": 0,
         *       "orderFormId": "caae7471333e403f959fa5fd66951340",
         *       "commercialConditionData": null,
         *       "isCompleted": true,
         *       "customData": null,
         *       "storePreferencesData": {
         *         "countryCode": "BRA",
         *         "currencyCode": "BRL",
         *         "currencyFormatInfo": {
         *           "CurrencyDecimalDigits": 2,
         *           "CurrencyDecimalSeparator": ",",
         *           "CurrencyGroupSeparator": ".",
         *           "CurrencyGroupSize": 3,
         *           "StartsWithCurrencySymbol": true
         *         },
         *         "currencyLocale": 1046,
         *         "currencySymbol": "R$",
         *         "timeZone": "E. South America Standard Time"
         *       },
         *       "allowCancellation": true,
         *       "allowEdition": false,
         *       "isCheckedIn": false,
         *       "marketplace": {
         *         "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
         *         "isCertified": null,
         *         "name": "luxstore"
         *       },
         *       "authorizedDate": "2019-01-28T20:33:04+00:00",
         *       "invoicedDate": null,
         *       "cancelReason": "The size was too big.",
         *       "itemMetadata": {
         *         "Items": [
         *           {
         *             "Id": "18",
         *             "Seller": "1",
         *             "Name": "Cat food",
         *             "SkuName": "Cat food",
         *             "ProductId": "6",
         *             "RefId": "105",
         *             "Ean": "43673557",
         *             "ImageUrl": "http://store.vteximg.com.br/ids/155392-55-55/AlconKOI.jpg?v=635918402228600000",
         *             "DetailUrl": "/catfood/p",
         *             "AssemblyOptions": [
         *               {
         *                 "Id": "vtex.subscription.plan-ana",
         *                 "Name": "vtex.subscription.plan-ana",
         *                 "Required": false,
         *                 "InputValues": {
         *                   "vtex.subscription.key.frequency": {
         *                     "MaximumNumberOfCharacters": 8,
         *                     "Domain": [
         *                       "4 month",
         *                       "1 month"
         *                     ]
         *                   }
         *                 },
         *                 "Composition": {}
         *               }
         *             ]
         *           }
         *         ]
         *       },
         *       "subscriptionData": {
         *         "SubscriptionGroupId": "A64AC73C0FB8693A7ADB4AC69CA4FD5F",
         *         "Subscriptions": [
         *           {
         *             "ExecutionCount": 724,
         *             "PriceAtSubscriptionDate": 100,
         *             "ItemIndex": 0,
         *             "Plan": {
         *               "type": "RECURRING_PAYMENT",
         *               "frequency": {
         *                 "periodicity": "DAILY",
         *                 "interval": 1
         *               },
         *               "validity": {
         *                 "begin": "2022-01-10T00:00:00.0000000+00:00",
         *                 "end": "2024-02-03T00:00:00.0000000+00:00"
         *               }
         *             }
         *           }
         *         ]
         *       },
         *       "taxData": {
         *         "areTaxesDesignatedByMarketplace": true,
         *         "taxInfoCollection": [
         *           {
         *             "itemIndex": 0,
         *             "sku": "COLOCAR_O_SKUID",
         *             "priceTags": [
         *               {
         *                 "isPercentual": false,
         *                 "name": "Taxes (Magazine Luisa)",
         *                 "rawValue": "COLOCAR_O_VALOR_SEM_DECIMAL"
         *               }
         *             ]
         *           }
         *         ]
         *       },
         *       "checkedInPickupPointId": "storeNameExample_901",
         *       "cancellationData": {
         *         "RequestedByUser": true,
         *         "RequestedBySystem": false,
         *         "RequestedBySellerNotification": false,
         *         "RequestedByPaymentNotification": false,
         *         "Reason": "Item was too big in the client.",
         *         "CancellationDate": "2022-10--05T15:40:33"
         *       },
         *       "clientPreferencesData": {
         *         "locale": "en-US",
         *         "optinNewsLetter": false
         *       }
         *     }
         */
        Userorderdetails: {
            /** @description Order ID is a unique code that identifies an order. */
            orderId: string;
            /** @description Sequence is a six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`. */
            sequence: string;
            /** @description Marketplace order ID. */
            marketplaceOrderId: string;
            /** @description Marketplace services endpoint. */
            marketplaceServicesEndpoint: string;
            /** @description ID of the seller related to the order. It can be a VTEX seller or an external seller. */
            sellerOrderId: string;
            /** @description Order's [origin in the order flow](https://developers.vtex.com/docs/guides/orders-overview#understanding-order-flow-types), which can be `Marketplace`, `Fulfillment` or `Chain`. */
            origin: string;
            /** @description Corresponds to the three-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code of the seller responsible for the order. */
            affiliateId: string;
            /** @description Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order. */
            salesChannel: string;
            /** @description Name of the merchant. */
            merchantName: string;
            /** @description Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). */
            status: string;
            /**
             * @deprecated
             * @description `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.
             */
            statusDescription: string;
            /** @description Order's total amount. */
            value: number;
            /** @description Order's creation date. */
            creationDate: string;
            /** @description Order's last change date. */
            lastChange: string;
            /** @description Order's group ID. */
            orderGroup: string;
            /** @description List with details about orders' totals. */
            totals: components["schemas"]["Total"][];
            /** @description Information about order's items. */
            items: components["schemas"]["Item"][];
            /** @description Marketplace details object. */
            marketplaceItems: string[];
            clientProfileData: components["schemas"]["ClientProfileData"];
            /** @description Information about gift list, when it applies. */
            giftRegistryData: string | null;
            /** @description Information about promotions and marketing. For example, coupon tracking information and internal or external UTMs. */
            marketingData: {
                /** @description Object ID which expected value is `marketingData`. */
                id: string;
                /** @description Value of the `utm_source` parameter of the URL that led to the request. */
                utmSource: string;
                /** @description UTM Source Parameters. */
                utmPartner: string;
                /** @description Value of the `utm_medium` parameter of the URL that led to the request. */
                utmMedium: string;
                /** @description Value of the `utm_campaign` parameter of the URL that led to the request. */
                utmCampaign: string;
                /** @description Coupon's code information. */
                coupon: string;
                /** @description Internal UTM value `utmi_cp`. */
                utmiCampaign: string;
                /** @description Internal UTM value `utmi_p`. */
                utmipage: string;
                /** @description Internal UTM value `utmi_pc`. */
                utmiPart: string;
                /** @description Marketing tags information. This field can be used to register campaign data or informative tags regarding promotions. */
                marketingTags: string[];
            };
            ratesAndBenefitsData: components["schemas"]["RatesAndBenefitsData"];
            shippingData: components["schemas"]["ShippingData"];
            paymentData: components["schemas"]["PaymentData"];
            packageAttachment: components["schemas"]["PackageAttachment"];
            /** @description List of all sellers associated with the order. */
            sellers: components["schemas"]["Seller"][];
            /** @description Call center operator responsible for the order. */
            callCenterOperatorData: string | null;
            /** @description Email of the store's employee responsible for managing the order. */
            followUpEmail: string;
            /** @description Last sent transactional message. */
            lastMessage: string | null;
            /** @description Account Hostname registered in License Manager. */
            hostname: string;
            /** @description Information pertinent to the order's invoice. */
            invoiceData: Record<string, never>;
            changesAttachment: components["schemas"]["ChangesAttachment"];
            /** @description Optional field with order's additional information. This field must be filled in using the following format:
             *
            ```
             *
            {
             *         "fieldExample": "ValueExample"
             *       }
             *
            ```
             *
            . */
            openTextField: string | null;
            /** @description Rounding error total amount, if it applies. For example, in orders with a discount over non-integer multiplier items, the rounding price is performed per item, not after the sum of all items. That can cause a difference in the total discount amount, which is informed in this field. */
            roundingError: number;
            /** @description [Order form](https://developers.vtex.com/docs/guides/orderform-fields) ID. */
            orderFormId: string;
            /** @description Information about commercial conditions. */
            commercialConditionData: string | null;
            /** @description When set as `true`, the order's payment has been settled, and when set as `false`, it has not been settled yet. */
            isCompleted: boolean;
            /** @description Custom information in the order. This field is useful for storing data not included in other fields, for example, a message for a gift or a name to be printed in a shirt. */
            customData: string | null;
            storePreferencesData: components["schemas"]["StorePreferencesData"];
            /** @description When set as `true`, the order can be canceled, and when set as `false`, it is no longer possible to cancel the order. */
            allowCancellation: boolean;
            /** @description When set as `true`, the order can be edited, and when set as `false`, it is no longer possible to edit the order. */
            allowEdition: boolean;
            /** @description This field is set `true` when the order was made via inStore and `false` when it was not. */
            isCheckedIn: boolean;
            marketplace: components["schemas"]["Marketplace"];
            /** @description Authorized order date. */
            authorizedDate: string;
            /** @description Order's invoice date. */
            invoicedDate: string | null;
            /** @description Reason for order cancellation. */
            cancelReason: string | null;
            /** @description Metadata information about the order's items. */
            itemMetadata: {
                /** @description Metadata items. */
                Items: {
                    /** @description Item's SKU ID, which is a unique numerical identifier. */
                    Id: string;
                    /** @description Seller ID that identifies the seller the item belongs to. */
                    Seller: string;
                    /** @description Name of the item as displayed to customers in the storefront. */
                    Name: string;
                    /** @description Name of the SKU corresponding to the item. */
                    SkuName: string;
                    /** @description ID of the Product associated with the item. */
                    ProductId: string;
                    /** @description Item's reference ID. */
                    RefId: string;
                    /** @description EAN of the item. */
                    Ean: string;
                    /** @description Item's SKU image URL. */
                    ImageUrl: string;
                    /** @description URL slug of the item. */
                    DetailUrl: string;
                    /** @description Displays information about [assembly options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) related to the item, if there are any. */
                    AssemblyOptions: {
                        /** @description ID of the attachment related to the order. */
                        Id: string;
                        /** @description Name of the attachment related to the order. */
                        Name: string;
                        /** @description If this field is set as `true`, when the customer purchases the item sending the attachment is required, and when set as `false`, sending the attachment is optional. */
                        Required: boolean;
                        /** @description Displays the attachment's content. */
                        InputValues: Record<string, never>;
                        /** @description Displays the attachment's composition. */
                        Composition: Record<string, never>;
                    }[];
                }[];
            };
            /** @description Information about [subscriptions](https://help.vtex.com/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453). */
            subscriptionData: {
                /** @description ID of the subscription's group. If this field returns `null` and the `executionCount` is `0`, the order is the first one with subscriptions. */
                SubscriptionGroupId: string;
                /** @description List with subscriptions and their details. */
                Subscriptions: {
                    /** @description Position of the order in the subscription cycle. The first order will have the value `0`, the second will have the value `1`, and so on. */
                    ExecutionCount: number;
                    /**
                     * @deprecated
                     * @description Price of the order when the customer signed up for subscriptions. Subscriptions created from Admin UI or APIs do not have an original order, so the field returns `0.0`. This field was valid only for Subscriptions v2 and is deprecated in Subscriptions v3.
                     */
                    PriceAtSubscriptionDate: number;
                    /** @description Each item in the subscriptions' order is identified by an index. The position starts in`0`, followed by `1`, `2`, and so on. */
                    ItemIndex: number;
                    /** @description Information about the subscription's validility and frequency. */
                    Plan: {
                        /** @description Type of plan. */
                        type: string;
                        /** @description Information about subscriptions' recurrence. */
                        frequency: {
                            /** @description Defines the subscriptions recurrence period. The possible values are `DAILY`,`WEEKLY`, `MONTHLY` and `YEARLY`. */
                            periodicity: string;
                            /** @description Number of the time interval configured between subscription orders, which depends on the periodicity. For a `DAILY` periodicity, the field's value will correspond to days, for `MONTHLY` to months, and so on. */
                            interval: number;
                        };
                        /** @description Information about the period during which the subscription will be valid. */
                        validity: {
                            /** @description Subscriptions' beginning date with the format `yyyy-mm-ddThh:mm:ss`. */
                            begin: string;
                            /** @description Subscriptions' ending date with the format `yyyy-mm-ddThh:mm:ss`. */
                            end: string;
                        };
                    };
                }[] | null;
            } | null;
            /** @description Order's tax information. */
            taxData: {
                /** @description If the taxes were designated by the marketplace (`true`) or not (`false`). */
                areTaxesDesignatedByMarketplace: boolean;
                /** @description Array with taxes' details. */
                taxInfoCollection: {
                    /** @description Item's indexing number. */
                    itemIndex: number;
                    /** @description Alphanumeric sequence that identifies an SKU. */
                    sku: string;
                    /** @description Price tag information. */
                    priceTags: {
                        /** @description If the tax is a percentage (`true`) or note (`false`). */
                        isPercentual: boolean;
                        /** @description Name that identifies the tax. */
                        name: string;
                        /** @description The amount that corresponds to the tax. */
                        rawValue: string;
                    }[];
                }[];
            };
            /** @description If the field `isCheckedIn` is set as `true`, the `checkedInPickupPointId` will retrieve the ID of the physical store where the order was made. */
            checkedInPickupPointId: string;
            /** @description Information about order cancellation, when it applies. */
            cancellationData: {
                /** @description If the order cancellation was requested by the costumer (`true`) or not (`false`). */
                RequestedByUser: boolean;
                /** @description If the order cancellation was made by the system (`true`) or not (`false`). This type of order cancellation happens in [incomplete orders](https://help.vtex.com/en/tutorial/how-incomplete-orders-work--tutorials_294), for example. */
                RequestedBySystem: boolean;
                /** @description If the order cancellation was requested by the seller (`true`) or not (`false`). */
                RequestedBySellerNotification: boolean;
                /** @description If the order cancellation was requested by the payment gateway (`true`) or not (`false`). */
                RequestedByPaymentNotification: boolean;
                /** @description The reason why the order was cancelled. */
                Reason: string;
                /** @description The date when the order was cancelled. */
                CancellationDate: string;
            };
            /** @description Information about customer's preferences. */
            clientPreferencesData: {
                /** @description Customer's prefered language while accessing the store. */
                locale: string;
                /** @description When set as `true`, this field indicates customers opted to receive the newsletters, and when set as `false`, it means they did not. */
                optinNewsLetter: boolean;
            };
        };
        TestJSONataExpression: {
            /** @description JSONata expression to be tested. */
            Expression: string;
            /** @description JSON document to be evaluated by the expression. */
            Document: string;
        };
        /**
         * Createchange
         * @example {
         *       "reason": "The client wants to change a weighable product.",
         *       "replace": [
         *         {
         *           "from": {
         *             "items": [
         *               {
         *                 "id": "1",
         *                 "quantity": 1
         *               }
         *             ]
         *           },
         *           "to": {
         *             "items": [
         *               {
         *                 "id": "1",
         *                 "quantity": 1,
         *                 "measurementUnit": "kg",
         *                 "unitMultiplier": 1
         *               }
         *             ],
         *             "shippingData": {
         *               "logisticsInfo": [
         *                 {
         *                   "itemIndex": 0,
         *                   "slaId": "Normal",
         *                   "deliveryChannel": "delivery",
         *                   "addressId": "12334048475146857",
         *                   "price": 1000
         *                 }
         *               ]
         *             }
         *           }
         *         }
         *       ]
         *     }
         */
        Createchange: {
            /**
             * @description Reason why you wish to change order. Since you can make several changes to an order, filling this field with a clear explanation helps organize the change order history. The shopper can view this field value in [transactional emails](https://help.vtex.com/en/tutorial/order-transactional-email-templates--3g2S2kqBOoSGcCaqMYK2my) and [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
             * @example The client wants to change a weighable product.
             */
            reason: string;
            /** @description Array containing `replace` change information. Besides `replace`, you can `add` or `remove` items from an order.
             *
             *     - `add`: the schema will correspond to the object `to` inside the `replace` array.
             *
             *     - `remove`: the schema will correspond to the object `from` inside the `replace` array.
             *
             *     You will find request body examples of both cases in the endpoint description on the top of the page. The successful response `202 - Accepted` schema is the same for all three operations, whether they are used separately or combined in the same request. */
            replace?: components["schemas"]["Replace"][];
        };
        /**
         * Replace
         * @example {
         *       "from": {
         *         "items": [
         *           {
         *             "id": "1",
         *             "quantity": 1
         *           }
         *         ]
         *       },
         *       "to": {
         *         "items": [
         *           {
         *             "id": "1",
         *             "quantity": 1,
         *             "measurementUnit": "kg",
         *             "unitMultiplier": 1
         *           }
         *         ],
         *         "shippingData": {
         *           "logisticsInfo": [
         *             {
         *               "itemIndex": 0,
         *               "slaId": "Normal",
         *               "deliveryChannel": "delivery",
         *               "addressId": "12334048475146857",
         *               "price": 1000
         *             }
         *           ]
         *         }
         *       }
         *     }
         */
        Replace: {
            from: components["schemas"]["FromV2"];
            to: components["schemas"]["ToV2"];
        };
        /**
         * FromV2
         * @description Object with information about the items been replaced. If instead of an order `replace` you wish to `remove` items, you will use the same schema naming the object `remove` instead of `from`. For a complete example, see the description at the top of the page.
         * @example {
         *       "items": [
         *         {
         *           "id": "1",
         *           "quantity": 1
         *         }
         *       ]
         *     }
         */
        FromV2: {
            /** @description Array with information about the item to be replaced. */
            items: components["schemas"]["ItemV2"][];
        };
        /**
         * ItemV2
         * @example {
         *       "id": "1",
         *       "quantity": 1
         *     }
         */
        ItemV2: {
            /**
             * @description SKU ID of the item that will be changed.
             * @example 1
             */
            id: string;
            /**
             * @description Quantity of the item been changed.
             * @example 1
             */
            quantity: number;
        };
        /**
         * ToV2
         * @description Object with information about the new replacing items. If instead of an order `replace` you wish to `add` items, you will use the same schema naming the object `add` instead of `to`. For a complete example, see the description at the top of the page.
         * @example {
         *       "items": [
         *         {
         *           "id": "1",
         *           "quantity": 1,
         *           "measurementUnit": "kg",
         *           "unitMultiplier": 1
         *         }
         *       ],
         *       "shippingData": {
         *         "logisticsInfo": [
         *           {
         *             "itemIndex": 0,
         *             "slaId": "Normal",
         *             "deliveryChannel": "delivery",
         *             "addressId": "12334048475146857",
         *             "price": 1000
         *           }
         *         ]
         *       }
         *     }
         */
        ToV2: {
            /** @description Array with information about the replacing item. */
            items: components["schemas"]["Item1V2"][];
            shippingData?: components["schemas"]["ShippingDataV2"];
        };
        /**
         * Item1V2
         * @example {
         *       "id": "1",
         *       "quantity": 1,
         *       "measurementUnit": "kg",
         *       "unitMultiplier": 1
         *     }
         */
        Item1V2: {
            /**
             * @description SKU ID of the item that will replace the previous one. If you only wish to replace the product weight, you will repeat the SKU ID used in `from`.
             * @example 1
             */
            id: string;
            /**
             * @description Updated quantity of the item been changed.
             * @example 1
             */
            quantity: number;
            /**
             * @description Measurement unit of the new item. The values accepted are the measurement units registered in the store's catalog. For example, `kg` for kilograms or `un` for unitary items. When you don't specify a value, the request gets the information from the Catalog.
             * @example kg
             */
            measurementUnit: string;
            /**
             * @description Unit multiplier for item update. For example, if you wish to increase an order with three times more items than a single one, you would fill in with `3.0`.
             * @example 3
             */
            unitMultiplier: number;
        };
        /**
         * ShippingDataV2
         * @example {
         *       "logisticsInfo": [
         *         {
         *           "itemIndex": 0,
         *           "slaId": "Normal",
         *           "deliveryChannel": "delivery",
         *           "addressId": "12334048475146857",
         *           "price": 1000
         *         }
         *       ]
         *     }
         */
        ShippingDataV2: {
            /** @description Array containing information about the shipping address of the changed order. This field is optional, when you don't send it the request body, the system assumes there were no changes in shipping. */
            logisticsInfo: components["schemas"]["LogisticsInfoV2"][];
        };
        /**
         * LogisticsInfoV2
         * @example {
         *       "itemIndex": 0,
         *       "slaId": "Normal",
         *       "deliveryChannel": "delivery",
         *       "addressId": "12334048475146857",
         *       "price": 1000
         *     }
         */
        LogisticsInfoV2: {
            /**
             * @description Index that identifies the position of this item in the original array, starting from `0`.
             * @example 0
             */
            itemIndex: number;
            /**
             * @description Shipping method of the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) used in the order.
             * @example Normal
             */
            slaId: string;
            /**
             * @description Order shipping type, which can be `pickup-in-point` for [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R), and `delivery` for delivery.
             * @example delivery
             */
            deliveryChannel: string;
            /**
             * @description Shipping address ID.
             * @example 9ec276fd3a604eb1aa151b5333ca5db7
             */
            addressId: string;
            /**
             * @description Shipping price for the item in cents. Does not account for the whole order's shipping price.
             * @example 1000
             */
            price: number;
        };
        /** response202 */
        response202: {
            /**
             * @description Unique code that identifies a change order request.
             * @example e8532a32-7f7e-434a-88ec-29609f0ede46
             */
            requestId: string;
            /**
             * @description Code that identifies the transaction of changing the orders in the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
             * @example 74f40e7a-68c6-4699-b874-a8a297fb3f6a
             */
            workflowId: string;
            /**
             * @description Reason that motivated the order change.
             * @example The client wants to change the items weight.
             */
            reason: string;
            /**
             * @description This field shows if a manual price was applied to the total order amount. The value is in cents.
             * @example 0
             */
            manualDiscountValue: number;
            /**
             * @description This field shows if an increment value was applied to the total order amount. The value is in cents.
             * @example 0
             */
            manualIncrementValue: number;
            /**
             * @description This field shows how much the order total price is considering that price changes might have been made. The value is in cents.
             * @example 0
             */
            totalChangeValue: number;
            /**
             * @description Array containing information about change prices per item.
             * @example null
             */
            totals: string[];
            /**
             * @description Array with information about the `add` operation, when applicable. The schema will correspond to the object `to` inside the `replace` array.
             * @example null
             */
            add: string[];
            /**
             * @description Array with information about the `remove` operation, when applicable. The schema will correspond to the object `from` inside the `replace` array.
             * @example null
             */
            remove: string[];
            /** @description Array with information about the `replace` operation, when applicable. */
            replace: components["schemas"]["Replace1"][];
            /**
             * @description Date and time of the request. The value is in UTC ISO 8601 format `yyyy-mm-ddThh:mm:ss.sssZ`.
             * @example 2023-07-27T17:52:18.6483116Z
             */
            date: string;
            origin: components["schemas"]["OriginV2"];
            settings: components["schemas"]["Settings"];
        };
        /**
         * Replace1
         * @example {
         *       "from": {
         *         "paymentData": {
         *           "transactions": []
         *         },
         *         "items": [
         *           {
         *             "id": "31",
         *             "quantity": 1,
         *             "price": null,
         *             "measurementUnit": null,
         *             "unitMultiplier": 0,
         *             "sellingPrice": null,
         *             "name": null,
         *             "detailUrl": null,
         *             "imageUrl": null
         *           }
         *         ],
         *         "shippingData": {
         *           "logisticsInfo": []
         *         }
         *       },
         *       "to": {
         *         "items": [
         *           {
         *             "uniqueId": "40E763F4378E4F40AD1FE915FE1078E1",
         *             "id": "1",
         *             "productId": null,
         *             "productRefId": null,
         *             "refId": null,
         *             "ean": null,
         *             "name": null,
         *             "skuName": null,
         *             "modalType": null,
         *             "parentItemIndex": null,
         *             "parentAssemblyBinding": null,
         *             "assemblies": [],
         *             "priceValidUntil": null,
         *             "tax": 0,
         *             "price": null,
         *             "listPrice": null,
         *             "manualPrice": null,
         *             "manualPriceAppliedBy": null,
         *             "sellingPrice": null,
         *             "rewardValue": 0,
         *             "isGift": false,
         *             "additionalInfo": {
         *               "dimension": null,
         *               "brandName": null,
         *               "brandId": null,
         *               "offeringInfo": null,
         *               "offeringType": null,
         *               "offeringTypeId": null,
         *               "categoriesIds": null,
         *               "productClusterId": null,
         *               "commercialConditionId": null
         *             },
         *             "preSaleDate": null,
         *             "productCategoryIds": null,
         *             "productCategories": {},
         *             "quantity": 1,
         *             "seller": null,
         *             "sellerChain": [
         *               null
         *             ],
         *             "imageUrl": null,
         *             "detailUrl": null,
         *             "components": [],
         *             "bundleItems": [],
         *             "attachments": [],
         *             "attachmentOfferings": [],
         *             "offerings": [],
         *             "priceTags": [],
         *             "availability": null,
         *             "measurementUnit": "un",
         *             "unitMultiplier": 1,
         *             "manufacturerCode": null,
         *             "priceDefinition": null
         *           }
         *         ],
         *         "paymentData": {
         *           "transactions": []
         *         },
         *         "receiptData": null,
         *         "shippingData": {
         *           "logisticsInfo": [
         *             {
         *               "itemIndex": 0,
         *               "selectedSla": "Lenta",
         *               "selectedDeliveryChannel": "delivery",
         *               "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *               "slas": [
         *                 {
         *                   "id": "Lenta",
         *                   "deliveryChannel": "delivery",
         *                   "name": "Lenta",
         *                   "deliveryIds": [],
         *                   "shippingEstimate": null,
         *                   "shippingEstimateDate": null,
         *                   "lockTTL": null,
         *                   "availableDeliveryWindows": [],
         *                   "deliveryWindow": null,
         *                   "price": 600,
         *                   "listPrice": 600,
         *                   "tax": 0,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupPointId": null,
         *                   "pickupDistance": null,
         *                   "polygonName": null,
         *                   "transitTime": null
         *                 }
         *               ],
         *               "shipsTo": [],
         *               "itemId": "1",
         *               "deliveryChannels": [],
         *               "price": 600,
         *               "listPrice": 600,
         *               "shippingEstimate": null,
         *               "dockEstimate": null,
         *               "shippingEstimateDate": null,
         *               "lockTTL": null,
         *               "deliveryCompany": null,
         *               "polygonName": null,
         *               "transitTime": null,
         *               "sellingPrice": 600,
         *               "deliveryIds": [],
         *               "deliveryWindow": null,
         *               "pickupPointId": null,
         *               "pickupStoreInfo": {
         *                 "isPickupStore": false,
         *                 "friendlyName": null,
         *                 "address": null,
         *                 "additionalInfo": null,
         *                 "dockId": null
         *               },
         *               "pickupDistance": null
         *             }
         *           ]
         *         }
         *       }
         *     }
         */
        Replace1: {
            from: components["schemas"]["From1"];
            to: components["schemas"]["To1"];
        };
        /**
         * From1
         * @example {
         *       "paymentData": {
         *         "transactions": []
         *       },
         *       "items": [
         *         {
         *           "id": "31",
         *           "quantity": 1,
         *           "price": null,
         *           "measurementUnit": null,
         *           "unitMultiplier": 0,
         *           "sellingPrice": null,
         *           "name": null,
         *           "detailUrl": null,
         *           "imageUrl": null
         *         }
         *       ],
         *       "shippingData": {
         *         "logisticsInfo": []
         *       }
         *     }
         */
        From1: {
            paymentData: components["schemas"]["PaymentDataV2"];
            items: components["schemas"]["Item2V2"][];
            shippingData: components["schemas"]["ShippingData1"];
        };
        /**
         * PaymentDataV2
         * @example {
         *       "transactions": []
         *     }
         */
        PaymentDataV2: {
            /** @description Array containing financial information. This is an optional field. */
            transactions: string[];
        };
        /**
         * Item2V2
         * @example {
         *       "id": "31",
         *       "quantity": 1,
         *       "price": null,
         *       "measurementUnit": null,
         *       "unitMultiplier": 0,
         *       "sellingPrice": null,
         *       "name": null,
         *       "detailUrl": null,
         *       "imageUrl": null
         *     }
         */
        Item2V2: {
            /**
             * @description SKU ID of the item been replaced.
             * @example 1
             */
            id: string;
            /**
             * @description Quantity of items been replaced.
             * @example 1
             */
            quantity: number;
            /**
             * @description Shipping price for the item been replaced. It does not account for the whole order's shipping price and is presented in cents.
             * @example 1000
             */
            price: string | null;
            /**
             * @description Measurement unit of the item been replaced. For example, `kg` for kilograms or `un` for unitary items.
             * @example kg
             */
            measurementUnit: string | null;
            /**
             * @description Unit multiplier for item been update.
             * @example 3
             */
            unitMultiplier: number;
            /**
             * @description Selling price of the item been replaced.
             * @example 100
             */
            sellingPrice: string;
            /**
             * @description Name of the item been replaced.
             * @example T-shirt with logo
             */
            name: string | null;
            /**
             * @description URL slug of the item been replaced.
             * @example /tshirt-logo/p
             */
            detailUrl: string | null;
            /**
             * @description Image URL slug of the item been replaced.
             * @example http://store.com.br/ids/155419-55-55//tshirt-logo.png?v=6378858562367
             */
            imageUrl: string | null;
        };
        /**
         * ShippingData1
         * @example {
         *       "logisticsInfo": []
         *     }
         */
        ShippingData1: {
            /** @description Array with logistics information about the order been replaced. If not sent in the original request, it will be an empty array in the response. */
            logisticsInfo: string[];
        };
        /**
         * To1
         * @example {
         *       "items": [
         *         {
         *           "uniqueId": "40E763F4378E4F40AD1FE915FE1078E1",
         *           "id": "1",
         *           "productId": null,
         *           "productRefId": null,
         *           "refId": null,
         *           "ean": null,
         *           "name": null,
         *           "skuName": null,
         *           "modalType": null,
         *           "parentItemIndex": null,
         *           "parentAssemblyBinding": null,
         *           "assemblies": [],
         *           "priceValidUntil": null,
         *           "tax": 0,
         *           "price": null,
         *           "listPrice": null,
         *           "manualPrice": null,
         *           "manualPriceAppliedBy": null,
         *           "sellingPrice": null,
         *           "rewardValue": 0,
         *           "isGift": false,
         *           "additionalInfo": {
         *             "dimension": null,
         *             "brandName": null,
         *             "brandId": null,
         *             "offeringInfo": null,
         *             "offeringType": null,
         *             "offeringTypeId": null,
         *             "categoriesIds": null,
         *             "productClusterId": null,
         *             "commercialConditionId": null
         *           },
         *           "preSaleDate": null,
         *           "productCategoryIds": null,
         *           "productCategories": {},
         *           "quantity": 1,
         *           "seller": null,
         *           "sellerChain": [
         *             null
         *           ],
         *           "imageUrl": null,
         *           "detailUrl": null,
         *           "components": [],
         *           "bundleItems": [],
         *           "attachments": [],
         *           "attachmentOfferings": [],
         *           "offerings": [],
         *           "priceTags": [],
         *           "availability": null,
         *           "measurementUnit": "un",
         *           "unitMultiplier": 1,
         *           "manufacturerCode": null,
         *           "priceDefinition": null
         *         }
         *       ],
         *       "paymentData": {
         *         "transactions": []
         *       },
         *       "receiptData": null,
         *       "shippingData": {
         *         "logisticsInfo": [
         *           {
         *             "itemIndex": 0,
         *             "selectedSla": "Lenta",
         *             "selectedDeliveryChannel": "delivery",
         *             "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *             "slas": [
         *               {
         *                 "id": "Lenta",
         *                 "deliveryChannel": "delivery",
         *                 "name": "Lenta",
         *                 "deliveryIds": [],
         *                 "shippingEstimate": null,
         *                 "shippingEstimateDate": null,
         *                 "lockTTL": null,
         *                 "availableDeliveryWindows": [],
         *                 "deliveryWindow": null,
         *                 "price": 600,
         *                 "listPrice": 600,
         *                 "tax": 0,
         *                 "pickupStoreInfo": {
         *                   "isPickupStore": false,
         *                   "friendlyName": null,
         *                   "address": null,
         *                   "additionalInfo": null,
         *                   "dockId": null
         *                 },
         *                 "pickupPointId": null,
         *                 "pickupDistance": null,
         *                 "polygonName": null,
         *                 "transitTime": null
         *               }
         *             ],
         *             "shipsTo": [],
         *             "itemId": "1",
         *             "deliveryChannels": [],
         *             "price": 600,
         *             "listPrice": 600,
         *             "shippingEstimate": null,
         *             "dockEstimate": null,
         *             "shippingEstimateDate": null,
         *             "lockTTL": null,
         *             "deliveryCompany": null,
         *             "polygonName": null,
         *             "transitTime": null,
         *             "sellingPrice": 600,
         *             "deliveryIds": [],
         *             "deliveryWindow": null,
         *             "pickupPointId": null,
         *             "pickupStoreInfo": {
         *               "isPickupStore": false,
         *               "friendlyName": null,
         *               "address": null,
         *               "additionalInfo": null,
         *               "dockId": null
         *             },
         *             "pickupDistance": null
         *           }
         *         ]
         *       }
         *     }
         */
        To1: {
            /** @description Array containing information about the item replacing the previous one. */
            items: components["schemas"]["Item3"][];
            paymentData: components["schemas"]["PaymentDataV2"];
            /**
             * @description Information about the receipt after order change.
             * @example null
             */
            receiptData: Record<string, never>;
            shippingData: components["schemas"]["ShippingData2"];
        };
        /**
         * Item3
         * @example {
         *       "uniqueId": "40E763F4378E4F40AD1FE915FE1078E1",
         *       "id": "1",
         *       "productId": null,
         *       "productRefId": null,
         *       "refId": null,
         *       "ean": null,
         *       "name": null,
         *       "skuName": null,
         *       "modalType": null,
         *       "parentItemIndex": null,
         *       "parentAssemblyBinding": null,
         *       "assemblies": [],
         *       "priceValidUntil": null,
         *       "tax": 0,
         *       "price": null,
         *       "listPrice": null,
         *       "manualPrice": null,
         *       "manualPriceAppliedBy": null,
         *       "sellingPrice": null,
         *       "rewardValue": 0,
         *       "isGift": false,
         *       "additionalInfo": {
         *         "dimension": null,
         *         "brandName": null,
         *         "brandId": null,
         *         "offeringInfo": null,
         *         "offeringType": null,
         *         "offeringTypeId": null,
         *         "categoriesIds": null,
         *         "productClusterId": null,
         *         "commercialConditionId": null
         *       },
         *       "preSaleDate": null,
         *       "productCategoryIds": null,
         *       "productCategories": {},
         *       "quantity": 1,
         *       "seller": null,
         *       "sellerChain": [
         *         null
         *       ],
         *       "imageUrl": null,
         *       "detailUrl": null,
         *       "components": [],
         *       "bundleItems": [],
         *       "attachments": [],
         *       "attachmentOfferings": [],
         *       "offerings": [],
         *       "priceTags": [],
         *       "availability": null,
         *       "measurementUnit": "un",
         *       "unitMultiplier": 1,
         *       "manufacturerCode": null,
         *       "priceDefinition": null
         *     }
         */
        Item3: {
            /**
             * @description Item's unique ID in the change order request.
             * @example 40E763F4378E4F40AD1FE915FE1078E1
             */
            uniqueId: string;
            /**
             * @description SKU ID of the item replacing the previous one.
             * @example 3
             */
            id: string;
            /**
             * @description Product ID of the item replacing the previous one.
             * @example 7
             */
            productId: string | null;
            /**
             * @description Product Ref ID of the item replacing the previous one.
             * @example smallcup
             */
            productRefId: string | null;
            /**
             * @description Reference ID of the item replacing the previous one.
             * @example 356
             */
            refId: string | null;
            /**
             * @description European Article Number (EAN) of the item replacing the previous one.
             * @example 8745121641680
             */
            ean: string | null;
            /**
             * @description Name of the Product associated with the item replacing the previous one.
             * @example Small cup of coffee with pink logo
             */
            name: string | null;
            /**
             * @description Name of the SKU replacing the previous one.
             * @example Small blue cup
             */
            skuName: string | null;
            /**
             * @description A [modal](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) attaches an unusual product, such as meat or glass, to a carrier specialized in shipping it.
             * @example GLASS
             */
            modalType: string | null;
            /**
             * @description Parent item index of the item replacing the previous one.
             * @example 0
             */
            parentItemIndex: number | null;
            /**
             * @description Parent assembly binding of the item replacing the previous one.
             * @example null
             */
            parentAssemblyBinding: string | null;
            /** @description Array with information about services that may be offered for the item replacing the previous one. For example, the assembly of a piece of furniture or warranty. */
            assemblies: string[] | null;
            /**
             * @description Price expiration date of item replacing the previous one. The value is in the format `yyyy-mm-ddThh:mm:ss.sss`.
             * @example 2023-03-01T22:58:28.143
             */
            priceValidUntil: string | null;
            /**
             * @description Tax in cents of the item replacing the previous one, when applicable.
             * @example 0
             */
            tax: number;
            /**
             * @description Final price of the item replacing the previous one, calculated in cents.
             * @example 600
             */
            price: string | null;
            /**
             * @description Item's price list for the item replacing the previous one.
             * @example 600
             */
            listPrice: string | null;
            /**
             * @description Manual price of the item replacing the previous one. It is calculated in cents.
             * @example 6500
             */
            manualPrice: number | null;
            /**
             * @description User ID or appKey that made the manual price change of the item replacing the previous one.
             * @example 4cc81d44-e42e-464b-8199-1e883bf4ab6b
             */
            manualPriceAppliedBy: string | null;
            /**
             * @description Selling price of the item replacing the previous one. It is calculated in cents.
             * @example 600
             */
            sellingPrice: number | null;
            /**
             * @description Reward value of the item replacing the previous one. It is calculated in cents.
             * @example 50
             */
            rewardValue: number;
            /**
             * @description This field is `true` when the replacing item is a gift in the order context and `false` when it is not.
             * @example false
             */
            isGift: boolean;
            additionalInfo: components["schemas"]["AdditionalInfoV2"];
            /**
             * @description Pre sale date of the item replacing the previous one.
             * @example 2023-01-01T00:00:00.0000000+00:00
             */
            preSaleDate: string | null;
            /**
             * @description Replacing item's category path composed of category IDs separated by `/`. For example: `/3/15/`.
             * @example /2/
             */
            productCategoryIds: string | null;
            /**
             * @description Object containing product categories of the replacing item. Structure: `{CategoryID}: {CategoryName}`. Both the key and the value are strings.
             * @example {
             *       "2": "Clothes"
             *     }
             */
            productCategories: Record<string, never>;
            /**
             * @description Quantity of replacing items.
             * @example 1
             */
            quantity: number;
            /**
             * @description Seller ID that identifies the seller the replacing item belongs to.
             * @example 1
             */
            seller: string | null;
            /** @description Array containing information about sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://developers.vtex.com/docs/guides/multilevel-omnichannel-inventory) order. */
            sellerChain: (string | null)[];
            /**
             * @description Image URL slug of the replacing item.
             * @example http://store.com.br/ids/155419-55-55//cupcoffee.png?v=6368858582363
             */
            imageUrl: string | null;
            /**
             * @description URL slug of the replacing item.
             * @example /cup-coffee/p
             */
            detailUrl: string | null;
            /** @description Array with information about replacing item's components. */
            components: string[];
            /** @description Array with information about services sold along with the replacing item, such as a gift package. */
            bundleItems: string[];
            /** @description Array containing information on attachments. */
            attachments: string[];
            /** @description Array with the properties of the content declared in the field `attachments`. */
            attachmentOfferings: string[];
            /** @description Array with replacing items Item's offerings. */
            offerings: string[];
            /** @description Array containing objects with replacing item's price modifiers. */
            priceTags: string[];
            /**
             * @description Availability to fulfill the order with the item.
             * @example available
             */
            availability: string | null;
            /**
             * @description Replacing item's measurement unit.
             * @example un
             */
            measurementUnit: string;
            /**
             * @description Replacing item's unit multiplier.
             * @example 1
             */
            unitMultiplier: number;
            /**
             * @description Provided by the manufacturers to identify their product. This field should be completed if the replacing item has a manufacturer's code.
             * @example manf-00005
             */
            manufacturerCode: string | null;
            /**
             * @description replacing item's price information.
             * @example null
             */
            priceDefinition: string | null;
        };
        /**
         * AdditionalInfoV2
         * @example {
         *       "dimension": null,
         *       "brandName": null,
         *       "brandId": null,
         *       "offeringInfo": null,
         *       "offeringType": null,
         *       "offeringTypeId": null,
         *       "categoriesIds": null,
         *       "productClusterId": null,
         *       "commercialConditionId": null
         *     }
         */
        AdditionalInfoV2: {
            /**
             * @description Replacing tem's dimensions in the measure unit configured in the catalog.
             * @example null
             */
            dimension: string | null;
            /**
             * @description Replacing item's brand name.
             * @example Special coffee cup
             */
            brandName: string | null;
            /**
             * @description Replacing item's brand ID.
             * @example 2000001
             */
            brandId: string | null;
            /**
             * @description Offering information.
             * @example null
             */
            offeringInfo: string | null;
            /**
             * @description Offering type.
             * @example null
             */
            offeringType: string | null;
            /**
             * @description Offering type ID.
             * @example null
             */
            offeringTypeId: string | null;
            /**
             * @description ID of the replacing item product category.
             * @example null
             */
            categoriesIds: string | null;
            /**
             * @description All product clusters related to the replacing item.
             * @example 135,137,143,518,1272
             */
            productClusterId: string | null;
            /**
             * @description Replacing item commercial conditions ID.
             * @example 5
             */
            commercialConditionId: string | null;
        };
        /**
         * ShippingData2
         * @example {
         *       "logisticsInfo": [
         *         {
         *           "itemIndex": 0,
         *           "selectedSla": "Lenta",
         *           "selectedDeliveryChannel": "delivery",
         *           "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *           "slas": [
         *             {
         *               "id": "Lenta",
         *               "deliveryChannel": "delivery",
         *               "name": "Lenta",
         *               "deliveryIds": [],
         *               "shippingEstimate": null,
         *               "shippingEstimateDate": null,
         *               "lockTTL": null,
         *               "availableDeliveryWindows": [],
         *               "deliveryWindow": null,
         *               "price": 600,
         *               "listPrice": 600,
         *               "tax": 0,
         *               "pickupStoreInfo": {
         *                 "isPickupStore": false,
         *                 "friendlyName": null,
         *                 "address": null,
         *                 "additionalInfo": null,
         *                 "dockId": null
         *               },
         *               "pickupPointId": null,
         *               "pickupDistance": null,
         *               "polygonName": null,
         *               "transitTime": null
         *             }
         *           ],
         *           "shipsTo": [],
         *           "itemId": "1",
         *           "deliveryChannels": [],
         *           "price": 600,
         *           "listPrice": 600,
         *           "shippingEstimate": null,
         *           "dockEstimate": null,
         *           "shippingEstimateDate": null,
         *           "lockTTL": null,
         *           "deliveryCompany": null,
         *           "polygonName": null,
         *           "transitTime": null,
         *           "sellingPrice": 600,
         *           "deliveryIds": [],
         *           "deliveryWindow": null,
         *           "pickupPointId": null,
         *           "pickupStoreInfo": {
         *             "isPickupStore": false,
         *             "friendlyName": null,
         *             "address": null,
         *             "additionalInfo": null,
         *             "dockId": null
         *           },
         *           "pickupDistance": null
         *         }
         *       ]
         *     }
         */
        ShippingData2: {
            /** @description Array with shipping information. */
            logisticsInfo: components["schemas"]["LogisticsInfo1"][];
        };
        /**
         * LogisticsInfo1
         * @example {
         *       "itemIndex": 0,
         *       "selectedSla": "Lenta",
         *       "selectedDeliveryChannel": "delivery",
         *       "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *       "slas": [
         *         {
         *           "id": "Lenta",
         *           "deliveryChannel": "delivery",
         *           "name": "Lenta",
         *           "deliveryIds": [],
         *           "shippingEstimate": null,
         *           "shippingEstimateDate": null,
         *           "lockTTL": null,
         *           "availableDeliveryWindows": [],
         *           "deliveryWindow": null,
         *           "price": 600,
         *           "listPrice": 600,
         *           "tax": 0,
         *           "pickupStoreInfo": {
         *             "isPickupStore": false,
         *             "friendlyName": null,
         *             "address": null,
         *             "additionalInfo": null,
         *             "dockId": null
         *           },
         *           "pickupPointId": null,
         *           "pickupDistance": null,
         *           "polygonName": null,
         *           "transitTime": null
         *         }
         *       ],
         *       "shipsTo": [],
         *       "itemId": "1",
         *       "deliveryChannels": [],
         *       "price": 600,
         *       "listPrice": 600,
         *       "shippingEstimate": null,
         *       "dockEstimate": null,
         *       "shippingEstimateDate": null,
         *       "lockTTL": null,
         *       "deliveryCompany": null,
         *       "polygonName": null,
         *       "transitTime": null,
         *       "sellingPrice": 600,
         *       "deliveryIds": [],
         *       "deliveryWindow": null,
         *       "pickupPointId": null,
         *       "pickupStoreInfo": {
         *         "isPickupStore": false,
         *         "friendlyName": null,
         *         "address": null,
         *         "additionalInfo": null,
         *         "dockId": null
         *       },
         *       "pickupDistance": null
         *     }
         */
        LogisticsInfo1: {
            /**
             * @description Index that identifies the position of the replacing item in the array, starting from `0`.
             * @example 0
             */
            itemIndex: number;
            /**
             * @description Shipping method of the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) used in the replacing order.
             * @example Normal
             */
            selectedSla: string;
            /**
             * @description Delivery channel selected by the customer, like `delivery` or `pickup-in-point`. This field is being deprecated and the information it retrieves can be usually be found in `deliveryChannel`.
             * @example delivery
             */
            selectedDeliveryChannel: string;
            /**
             * @description Shipping address ID of the replacing item.
             * @example 9ec276fd3a604eb1aa151b5333ca5db7
             */
            addressId: string;
            /** @description Information on Service Level Agreement (SLA) of the change order shipping policy. */
            slas: components["schemas"]["SlaV2"][];
            /** @description List of countries of the change order shipping address. */
            shipsTo: string[];
            /**
             * @description Replacing item's SKU ID, which is a unique numerical identifier.
             * @example 3
             */
            itemId: string;
            /** @description Array with the delivery channels associated with the trade policy. */
            deliveryChannels: components["schemas"]["DeliveryChannel"][];
            /**
             * @description Replacing item's final price, calculated in cents.
             * @example 600
             */
            price: number;
            /**
             * @description Replacing item's price list, calculated in cents.
             * @example 600
             */
            listPrice: number;
            /**
             * @description Replacing item's shipping estimate date. The value is in UTC ISO 8601 format `yyyy-mm-ddThh:mm:ss.sssZ`.
             * @example 2023-07-29T17:52:18.6483116Z
             */
            shippingEstimate: string | null;
            /**
             * @description Replacing item's estimate duration of the [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) time. For instance, one business day is represented as `1bd`.
             * @example 1bd
             */
            dockEstimate: string | null;
            /**
             * @description Replacing item's total shipping duration estimated in days. For instance, three business days are represented as `3bd`.
             * @example 3bd
             */
            shippingEstimateDate: string | null;
            /**
             * @description Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA. For instance, one business day is represented as `1bd`.
             * @example 1bd
             */
            lockTTL: string | null;
            /**
             * @description [Carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) company's name.
             * @example Correios
             */
            deliveryCompany: string | null;
            /**
             * @description Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.
             * @example 114 - Polanco _ H-05
             */
            polygonName: string | null;
            /**
             * @description Duration in business days of the time the [carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) takes in transit to fulfill the order. For example, three business days are represented as `3bd`.
             * @example 3bd
             */
            transitTime: string | null;
            /**
             * @description Change item's selling price.
             * @example 600
             */
            sellingPrice: number;
            /** @description Array with delivery information. */
            deliveryIds: components["schemas"]["DeliveryIdV2"][];
            /**
             * @description Change order [scheduled delivery](https://help.vtex.com/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, when applicable.
             * @example null
             */
            deliveryWindow: string | null;
            /**
             * @description ID of the [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
             * @example pup215rkw
             */
            pickupPointId: string | null;
            pickupStoreInfo: components["schemas"]["PickupStoreInfoV2"];
            /**
             * @description Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line.
             * @example 1.0
             */
            pickupDistance: number | null;
        };
        /**
         * SlaV2
         * @example {
         *       "id": "Lenta",
         *       "deliveryChannel": "delivery",
         *       "name": "Lenta",
         *       "deliveryIds": [],
         *       "shippingEstimate": null,
         *       "shippingEstimateDate": null,
         *       "lockTTL": null,
         *       "availableDeliveryWindows": [],
         *       "deliveryWindow": null,
         *       "price": 600,
         *       "listPrice": 600,
         *       "tax": 0,
         *       "pickupStoreInfo": {
         *         "isPickupStore": false,
         *         "friendlyName": null,
         *         "address": null,
         *         "additionalInfo": null,
         *         "dockId": null
         *       },
         *       "pickupPointId": null,
         *       "pickupDistance": null,
         *       "polygonName": null,
         *       "transitTime": null
         *     }
         */
        SlaV2: {
            /**
             * @description Shipping method of the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) used in the order delivery or pickup.
             * @example Normal
             */
            id: string;
            /**
             * @description Order shipping type, which can be `pickup-in-point` for [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R), and `delivery` for delivery.
             * @example delivery
             */
            deliveryChannel: string;
            /**
             * @description Shipping method of the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) used in the order delivery or pickup. It corresponds to the `id` value.
             * @example Normal
             */
            name: string;
            /** @description Information about delivery IDs. */
            deliveryIds: components["schemas"]["DeliveryIdV2"][];
            /**
             * @description Total shipping duration estimated in days. For instance, three business days is represented as `3bd`.
             * @example 3bd
             */
            shippingEstimate: string | null;
            /**
             * @description Shipping estimate date. The value is in UTC ISO 8601 format `yyyy-mm-ddThh:mm:ss.sssZ`.
             * @example 2023-07-27T17:52:18.6483116Z
             */
            shippingEstimateDate: string | null;
            /**
             * @description Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA. For instance, one business day is represented as `1bd`.
             * @example 1bd
             */
            lockTTL: string | null;
            /** @description Available [scheduled delivery](https://help.vtex.com/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, for when the shipping policy has shipping windows configurations. */
            availableDeliveryWindows: string[];
            /**
             * @description [Scheduled delivery](https://help.vtex.com/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, when applicable.
             * @example null
             */
            deliveryWindow: Record<string, never>;
            /**
             * @description Shipping price for the item in cents. Does not account for the whole order's shipping price.
             * @example 600
             */
            price: number;
            /**
             * @description Item's price list for a specific trade policy.
             * @example 600
             */
            listPrice: number;
            /**
             * @description Tax in cents, when applicable.
             * @example 0
             */
            tax: number;
            pickupStoreInfo: components["schemas"]["PickupStoreInfoV2"];
            /**
             * @description Pickup point ID is the unique identifier of the [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) related to the SLA.
             * @example pup215rkw
             */
            pickupPointId: string | null;
            /**
             * @description Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line.
             * @example 1
             */
            pickupDistance: number | null;
            /**
             * @description Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.
             * @example 114 - Polanco _ H-05
             */
            polygonName: string | null;
            /**
             * @description Duration in business days of the time the [carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) takes in transit to fulfill the order. For example, three business days is represented as `3bd`.
             * @example 3bd
             */
            transitTime: string | null;
        };
        /**
         * PickupStoreInfoV2
         * @deprecated
         * @example {
         *       "isPickupStore": false,
         *       "friendlyName": null,
         *       "address": null,
         *       "additionalInfo": null,
         *       "dockId": "dockAjs28"
         *     }
         */
        PickupStoreInfoV2: {
            /**
             * @deprecated
             * @description This field is related to converting a loading dock into a pickup point. It should always correspond to `false` because it has been deprecated.
             * @example false
             */
            isPickupStore: boolean | null;
            /**
             * @deprecated
             * @description Name of the loading dock converted to pickup point to be displayed at checkout. This field has been deprecated.
             * @example null
             */
            friendlyName: string | null;
            /**
             * @deprecated
             * @description Address of the loading dock converted to pickup point. This field has been deprecated.
             * @example null
             */
            address: string | null;
            /**
             * @deprecated
             * @description Additional information about the loading dock converted to pickup point. This field has been deprecated.
             * @example null
             */
            additionalInfo: string | null;
            /**
             * @deprecated
             * @description ID of the loading dock converted to pickup point. This field has been deprecated.
             * @example null
             */
            dockId: string | null;
        };
        /**
         * OriginV2
         * @description Object containing information about the order origin.
         * @example {
         *       "account": "qastore",
         *       "orderId": "v12772213qst-02",
         *       "component": "MarketplaceComponent"
         *     }
         */
        OriginV2: {
            /**
             * @description Name of the account where the order was made.
             * @example qastore
             */
            account: string;
            /**
             * @description Order ID is a unique code that identifies an order.
             * @example v12772213qst-02
             */
            orderId: string;
            /**
             * @description Component information.
             * @example MarketplaceComponent
             */
            component: string;
        };
        /**
         * Settings
         * @example {
         *       "customPaymentSystemsAllowed": []
         *     }
         */
        Settings: {
            /**
             * @description Store's [custom payment](https://help.vtex.com/tutorial/how-to-configure-a-custom-payment--tutorials_451) information. Applicable only for stores that configured custom payment options.
             * @example []
             */
            customPaymentSystemsAllowed: string[];
        };
        /**
         * GetChangeHistory
         * @example {
         *       "requests": [
         *         {
         *           "requestId": "e8532a32-7f7e-434a-88ec-29609f0ede46",
         *           "workflowId": "74f40e7a-68c6-4699-b874-a8a297fb3f6a",
         *           "reason": "The client did not like the size.",
         *           "manualDiscountValue": 0,
         *           "manualIncrementValue": 0,
         *           "totalChangeValue": 0,
         *           "totals": [],
         *           "add": null,
         *           "remove": null,
         *           "replace": [
         *             {
         *               "from": {
         *                 "paymentData": {
         *                   "transactions": []
         *                 },
         *                 "items": [
         *                   {
         *                     "id": "31",
         *                     "quantity": 1,
         *                     "price": 5000,
         *                     "measurementUnit": "un",
         *                     "unitMultiplier": 1,
         *                     "sellingPrice": 5000,
         *                     "name": "Fusca miniatura Fusca preto",
         *                     "detailUrl": "/fusca-miniatura-24/p",
         *                     "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155431-55-55/image-bdab69af1e5c41cdbc498d02e370b376.jpg?v=636579391945870000"
         *                   }
         *                 ],
         *                 "shippingData": {
         *                   "logisticsInfo": [
         *                     {
         *                       "itemIndex": 0,
         *                       "selectedSla": "Lenta",
         *                       "selectedDeliveryChannel": "delivery",
         *                       "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *                       "slas": [
         *                         {
         *                           "id": "Lenta",
         *                           "deliveryChannel": "delivery",
         *                           "name": "Lenta",
         *                           "deliveryIds": [
         *                             {
         *                               "courierId": "1c083bf",
         *                               "warehouseId": "1_1",
         *                               "dockId": "1",
         *                               "courierName": "Donkey",
         *                               "quantity": 1,
         *                               "kitItemDetails": [],
         *                               "accountCarrierName": null
         *                             }
         *                           ],
         *                           "shippingEstimate": "25bd",
         *                           "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                           "lockTTL": "12d",
         *                           "availableDeliveryWindows": [],
         *                           "deliveryWindow": null,
         *                           "price": 180,
         *                           "listPrice": 180,
         *                           "tax": 0,
         *                           "pickupStoreInfo": {
         *                             "isPickupStore": false,
         *                             "friendlyName": null,
         *                             "address": null,
         *                             "additionalInfo": null,
         *                             "dockId": null
         *                           },
         *                           "pickupPointId": null,
         *                           "pickupDistance": null,
         *                           "polygonName": "",
         *                           "transitTime": "25bd"
         *                         },
         *                         {
         *                           "id": "Normal",
         *                           "deliveryChannel": "delivery",
         *                           "name": "Normal",
         *                           "deliveryIds": [
         *                             {
         *                               "courierId": "1",
         *                               "warehouseId": "1_1",
         *                               "dockId": "1",
         *                               "courierName": "Transportadora",
         *                               "quantity": 1,
         *                               "kitItemDetails": [],
         *                               "accountCarrierName": null
         *                             }
         *                           ],
         *                           "shippingEstimate": "3bd",
         *                           "shippingEstimateDate": null,
         *                           "lockTTL": "12d",
         *                           "availableDeliveryWindows": [],
         *                           "deliveryWindow": null,
         *                           "price": 500,
         *                           "listPrice": 500,
         *                           "tax": 0,
         *                           "pickupStoreInfo": {
         *                             "isPickupStore": false,
         *                             "friendlyName": null,
         *                             "address": null,
         *                             "additionalInfo": null,
         *                             "dockId": null
         *                           },
         *                           "pickupPointId": null,
         *                           "pickupDistance": null,
         *                           "polygonName": "",
         *                           "transitTime": "3bd"
         *                         },
         *                         {
         *                           "id": "Pickup",
         *                           "deliveryChannel": "delivery",
         *                           "name": "Pickup",
         *                           "deliveryIds": [
         *                             {
         *                               "courierId": "ech018654",
         *                               "warehouseId": "1_1",
         *                               "dockId": "1",
         *                               "courierName": "Retirada",
         *                               "quantity": 1,
         *                               "kitItemDetails": [],
         *                               "accountCarrierName": null
         *                             }
         *                           ],
         *                           "shippingEstimate": "25bd",
         *                           "shippingEstimateDate": null,
         *                           "lockTTL": "12d",
         *                           "availableDeliveryWindows": [],
         *                           "deliveryWindow": null,
         *                           "price": 700,
         *                           "listPrice": 700,
         *                           "tax": 0,
         *                           "pickupStoreInfo": {
         *                             "isPickupStore": false,
         *                             "friendlyName": null,
         *                             "address": null,
         *                             "additionalInfo": null,
         *                             "dockId": null
         *                           },
         *                           "pickupPointId": null,
         *                           "pickupDistance": null,
         *                           "polygonName": "",
         *                           "transitTime": "25bd"
         *                         }
         *                       ],
         *                       "shipsTo": [
         *                         "BRA"
         *                       ],
         *                       "itemId": "31",
         *                       "deliveryChannels": [
         *                         {
         *                           "id": "delivery"
         *                         }
         *                       ],
         *                       "price": 180,
         *                       "listPrice": 180,
         *                       "shippingEstimate": "25bd",
         *                       "dockEstimate": null,
         *                       "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                       "lockTTL": "12d",
         *                       "deliveryCompany": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd",
         *                       "sellingPrice": 180,
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1c083bf",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Donkey",
         *                           "quantity": 1,
         *                           "kitItemDetails": null,
         *                           "accountCarrierName": "qastoreecho"
         *                         }
         *                       ],
         *                       "deliveryWindow": null,
         *                       "pickupPointId": null,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupDistance": null
         *                     }
         *                   ]
         *                 }
         *               },
         *               "to": {
         *                 "items": [
         *                   {
         *                     "uniqueId": "40E763F4378E4F40AD1FE915FE1078E1",
         *                     "id": "1",
         *                     "productId": "1",
         *                     "productRefId": "",
         *                     "refId": "codrefxicaraazul",
         *                     "ean": "8745121641",
         *                     "name": "xícara azul",
         *                     "skuName": "azul",
         *                     "modalType": null,
         *                     "parentItemIndex": null,
         *                     "parentAssemblyBinding": null,
         *                     "assemblies": [],
         *                     "priceValidUntil": null,
         *                     "tax": 0,
         *                     "price": 5000,
         *                     "listPrice": null,
         *                     "manualPrice": null,
         *                     "manualPriceAppliedBy": null,
         *                     "sellingPrice": 5000,
         *                     "rewardValue": 0,
         *                     "isGift": false,
         *                     "additionalInfo": {
         *                       "dimension": null,
         *                       "brandName": null,
         *                       "brandId": null,
         *                       "offeringInfo": null,
         *                       "offeringType": null,
         *                       "offeringTypeId": null,
         *                       "categoriesIds": null,
         *                       "productClusterId": null,
         *                       "commercialConditionId": null
         *                     },
         *                     "preSaleDate": null,
         *                     "productCategoryIds": "/1/",
         *                     "productCategories": {
         *                       "1": "Category"
         *                     },
         *                     "quantity": 1,
         *                     "seller": "1",
         *                     "sellerChain": [
         *                       "1"
         *                     ],
         *                     "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155394-55-55/xicara.jpg?v=636565506415770000",
         *                     "detailUrl": "/xicara/p",
         *                     "components": [],
         *                     "bundleItems": [],
         *                     "attachments": [],
         *                     "attachmentOfferings": [],
         *                     "offerings": [],
         *                     "priceTags": [],
         *                     "availability": null,
         *                     "measurementUnit": "un",
         *                     "unitMultiplier": 1,
         *                     "manufacturerCode": null,
         *                     "priceDefinition": {
         *                       "calculatedSellingPrice": 5000,
         *                       "total": 5000,
         *                       "sellingPrices": [
         *                         {
         *                           "value": 5000,
         *                           "quantity": 1
         *                         }
         *                       ]
         *                     }
         *                   }
         *                 ],
         *                 "paymentData": {
         *                   "transactions": []
         *                 },
         *                 "receiptData": null,
         *                 "shippingData": {
         *                   "logisticsInfo": [
         *                     {
         *                       "itemIndex": 0,
         *                       "selectedSla": "Lenta",
         *                       "selectedDeliveryChannel": "delivery",
         *                       "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *                       "slas": [
         *                         {
         *                           "id": "Lenta",
         *                           "deliveryChannel": "delivery",
         *                           "name": "Lenta",
         *                           "deliveryIds": [
         *                             {
         *                               "courierId": "1c083bf",
         *                               "warehouseId": "1_1",
         *                               "dockId": "1",
         *                               "courierName": "Donkey",
         *                               "quantity": 1,
         *                               "kitItemDetails": [],
         *                               "accountCarrierName": null
         *                             }
         *                           ],
         *                           "shippingEstimate": "25bd",
         *                           "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                           "lockTTL": "12d",
         *                           "availableDeliveryWindows": [],
         *                           "deliveryWindow": null,
         *                           "price": 600,
         *                           "listPrice": 180,
         *                           "tax": 0,
         *                           "pickupStoreInfo": {
         *                             "isPickupStore": false,
         *                             "friendlyName": null,
         *                             "address": null,
         *                             "additionalInfo": null,
         *                             "dockId": null
         *                           },
         *                           "pickupPointId": null,
         *                           "pickupDistance": null,
         *                           "polygonName": "",
         *                           "transitTime": "25bd"
         *                         },
         *                         {
         *                           "id": "Normal",
         *                           "deliveryChannel": "delivery",
         *                           "name": "Normal",
         *                           "deliveryIds": [
         *                             {
         *                               "courierId": "1",
         *                               "warehouseId": "1_1",
         *                               "dockId": "1",
         *                               "courierName": "Transportadora",
         *                               "quantity": 1,
         *                               "kitItemDetails": [],
         *                               "accountCarrierName": null
         *                             }
         *                           ],
         *                           "shippingEstimate": "3bd",
         *                           "shippingEstimateDate": null,
         *                           "lockTTL": "12d",
         *                           "availableDeliveryWindows": [],
         *                           "deliveryWindow": null,
         *                           "price": 500,
         *                           "listPrice": 500,
         *                           "tax": 0,
         *                           "pickupStoreInfo": {
         *                             "isPickupStore": false,
         *                             "friendlyName": null,
         *                             "address": null,
         *                             "additionalInfo": null,
         *                             "dockId": null
         *                           },
         *                           "pickupPointId": null,
         *                           "pickupDistance": null,
         *                           "polygonName": "",
         *                           "transitTime": "3bd"
         *                         },
         *                         {
         *                           "id": "Pickup",
         *                           "deliveryChannel": "delivery",
         *                           "name": "Pickup",
         *                           "deliveryIds": [
         *                             {
         *                               "courierId": "ech018654",
         *                               "warehouseId": "1_1",
         *                               "dockId": "1",
         *                               "courierName": "Retirada",
         *                               "quantity": 1,
         *                               "kitItemDetails": [],
         *                               "accountCarrierName": null
         *                             }
         *                           ],
         *                           "shippingEstimate": "25bd",
         *                           "shippingEstimateDate": null,
         *                           "lockTTL": "12d",
         *                           "availableDeliveryWindows": [],
         *                           "deliveryWindow": null,
         *                           "price": 700,
         *                           "listPrice": 700,
         *                           "tax": 0,
         *                           "pickupStoreInfo": {
         *                             "isPickupStore": false,
         *                             "friendlyName": null,
         *                             "address": null,
         *                             "additionalInfo": null,
         *                             "dockId": null
         *                           },
         *                           "pickupPointId": null,
         *                           "pickupDistance": null,
         *                           "polygonName": "",
         *                           "transitTime": "25bd"
         *                         }
         *                       ],
         *                       "shipsTo": [
         *                         "BRA"
         *                       ],
         *                       "itemId": "1",
         *                       "deliveryChannels": [
         *                         {
         *                           "id": "delivery"
         *                         }
         *                       ],
         *                       "price": 600,
         *                       "listPrice": 180,
         *                       "shippingEstimate": "25bd",
         *                       "dockEstimate": null,
         *                       "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                       "lockTTL": "12d",
         *                       "deliveryCompany": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd",
         *                       "sellingPrice": 600,
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1c083bf",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Donkey",
         *                           "quantity": 1,
         *                           "kitItemDetails": null,
         *                           "accountCarrierName": "qastoreecho"
         *                         }
         *                       ],
         *                       "deliveryWindow": null,
         *                       "pickupPointId": null,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupDistance": null
         *                     }
         *                   ]
         *                 }
         *               }
         *             }
         *           ],
         *           "date": "2023-07-27T17:52:18.6483116Z",
         *           "origin": {
         *             "account": "qastore",
         *             "orderId": "v12772213qst-02",
         *             "component": "MarketplaceComponent"
         *           },
         *           "settings": {
         *             "customPaymentSystemsAllowed": []
         *           }
         *         }
         *       ],
         *       "actions": []
         *     }
         */
        GetChangeHistory: {
            /** @description Array with change order requests details. */
            requests: components["schemas"]["Request"][];
            /** @description Array containing actions information. */
            actions: string[];
        };
        /**
         * Request
         * @example {
         *       "requestId": "e8532a32-7f7e-434a-88ec-29609f0ede46",
         *       "workflowId": "74f40e7a-68c6-4699-b874-a8a297fb3f6a",
         *       "reason": "The client did not like the size.",
         *       "manualDiscountValue": 0,
         *       "manualIncrementValue": 0,
         *       "totalChangeValue": 0,
         *       "totals": [],
         *       "add": null,
         *       "remove": null,
         *       "replace": [
         *         {
         *           "from": {
         *             "paymentData": {
         *               "transactions": []
         *             },
         *             "items": [
         *               {
         *                 "id": "31",
         *                 "quantity": 1,
         *                 "price": 5000,
         *                 "measurementUnit": "un",
         *                 "unitMultiplier": 1,
         *                 "sellingPrice": 5000,
         *                 "name": "Fusca miniatura Fusca preto",
         *                 "detailUrl": "/fusca-miniatura-24/p",
         *                 "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155431-55-55/image-bdab69af1e5c41cdbc498d02e370b376.jpg?v=636579391945870000"
         *               }
         *             ],
         *             "shippingData": {
         *               "logisticsInfo": [
         *                 {
         *                   "itemIndex": 0,
         *                   "selectedSla": "Lenta",
         *                   "selectedDeliveryChannel": "delivery",
         *                   "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *                   "slas": [
         *                     {
         *                       "id": "Lenta",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Lenta",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1c083bf",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Donkey",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 180,
         *                       "listPrice": 180,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     },
         *                     {
         *                       "id": "Normal",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Normal",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Transportadora",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "3bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 500,
         *                       "listPrice": 500,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "3bd"
         *                     },
         *                     {
         *                       "id": "Pickup",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Pickup",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "ech018654",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Retirada",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 700,
         *                       "listPrice": 700,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     }
         *                   ],
         *                   "shipsTo": [
         *                     "BRA"
         *                   ],
         *                   "itemId": "31",
         *                   "deliveryChannels": [
         *                     {
         *                       "id": "delivery"
         *                     }
         *                   ],
         *                   "price": 180,
         *                   "listPrice": 180,
         *                   "shippingEstimate": "25bd",
         *                   "dockEstimate": null,
         *                   "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                   "lockTTL": "12d",
         *                   "deliveryCompany": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd",
         *                   "sellingPrice": 180,
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1c083bf",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Donkey",
         *                       "quantity": 1,
         *                       "kitItemDetails": null,
         *                       "accountCarrierName": "qastoreecho"
         *                     }
         *                   ],
         *                   "deliveryWindow": null,
         *                   "pickupPointId": null,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupDistance": null
         *                 }
         *               ]
         *             }
         *           },
         *           "to": {
         *             "items": [
         *               {
         *                 "uniqueId": "40E763F4378E4F40AD1FE915FE1078E1",
         *                 "id": "1",
         *                 "productId": "1",
         *                 "productRefId": "",
         *                 "refId": "codrefxicaraazul",
         *                 "ean": "8745121641",
         *                 "name": "xícara azul",
         *                 "skuName": "azul",
         *                 "modalType": null,
         *                 "parentItemIndex": null,
         *                 "parentAssemblyBinding": null,
         *                 "assemblies": [],
         *                 "priceValidUntil": null,
         *                 "tax": 0,
         *                 "price": 5000,
         *                 "listPrice": null,
         *                 "manualPrice": null,
         *                 "manualPriceAppliedBy": null,
         *                 "sellingPrice": 5000,
         *                 "rewardValue": 0,
         *                 "isGift": false,
         *                 "additionalInfo": {
         *                   "dimension": null,
         *                   "brandName": null,
         *                   "brandId": null,
         *                   "offeringInfo": null,
         *                   "offeringType": null,
         *                   "offeringTypeId": null,
         *                   "categoriesIds": null,
         *                   "productClusterId": null,
         *                   "commercialConditionId": null
         *                 },
         *                 "preSaleDate": null,
         *                 "productCategoryIds": "/1/",
         *                 "productCategories": {
         *                   "1": "Category"
         *                 },
         *                 "quantity": 1,
         *                 "seller": "1",
         *                 "sellerChain": [
         *                   "1"
         *                 ],
         *                 "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155394-55-55/xicara.jpg?v=636565506415770000",
         *                 "detailUrl": "/xicara/p",
         *                 "components": [],
         *                 "bundleItems": [],
         *                 "attachments": [],
         *                 "attachmentOfferings": [],
         *                 "offerings": [],
         *                 "priceTags": [],
         *                 "availability": null,
         *                 "measurementUnit": "un",
         *                 "unitMultiplier": 1,
         *                 "manufacturerCode": null,
         *                 "priceDefinition": {
         *                   "calculatedSellingPrice": 5000,
         *                   "total": 5000,
         *                   "sellingPrices": [
         *                     {
         *                       "value": 5000,
         *                       "quantity": 1
         *                     }
         *                   ]
         *                 }
         *               }
         *             ],
         *             "paymentData": {
         *               "transactions": []
         *             },
         *             "receiptData": null,
         *             "shippingData": {
         *               "logisticsInfo": [
         *                 {
         *                   "itemIndex": 0,
         *                   "selectedSla": "Lenta",
         *                   "selectedDeliveryChannel": "delivery",
         *                   "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *                   "slas": [
         *                     {
         *                       "id": "Lenta",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Lenta",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1c083bf",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Donkey",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 600,
         *                       "listPrice": 180,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     },
         *                     {
         *                       "id": "Normal",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Normal",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Transportadora",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "3bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 500,
         *                       "listPrice": 500,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "3bd"
         *                     },
         *                     {
         *                       "id": "Pickup",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Pickup",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "ech018654",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Retirada",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 700,
         *                       "listPrice": 700,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     }
         *                   ],
         *                   "shipsTo": [
         *                     "BRA"
         *                   ],
         *                   "itemId": "1",
         *                   "deliveryChannels": [
         *                     {
         *                       "id": "delivery"
         *                     }
         *                   ],
         *                   "price": 600,
         *                   "listPrice": 180,
         *                   "shippingEstimate": "25bd",
         *                   "dockEstimate": null,
         *                   "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                   "lockTTL": "12d",
         *                   "deliveryCompany": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd",
         *                   "sellingPrice": 600,
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1c083bf",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Donkey",
         *                       "quantity": 1,
         *                       "kitItemDetails": null,
         *                       "accountCarrierName": "qastoreecho"
         *                     }
         *                   ],
         *                   "deliveryWindow": null,
         *                   "pickupPointId": null,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupDistance": null
         *                 }
         *               ]
         *             }
         *           }
         *         }
         *       ],
         *       "date": "2023-07-27T17:52:18.6483116Z",
         *       "origin": {
         *         "account": "qastore",
         *         "orderId": "v12772213qst-02",
         *         "component": "MarketplaceComponent"
         *       },
         *       "settings": {
         *         "customPaymentSystemsAllowed": []
         *       }
         *     }
         */
        Request: {
            /**
             * @description Unique code that identifies an order change.
             * @example e8532a32-7f7e-434a-88ec-29609f0ede46
             */
            requestId: string;
            /**
             * @description Code that identifies the transaction of changing the orders in the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
             * @example 74f40e7a-68c6-4699-b874-a8a297fb3f6a
             */
            workflowId: string;
            /**
             * @description Reason that motivated the order change.
             * @example The client wants to change the items weight.
             */
            reason: string;
            /**
             * @description This field shows if it was applied a manual price for the total order amount. The value is in cents.
             * @example 0
             */
            manualDiscountValue: number;
            /**
             * @description This field shows if an increment value was applied to the total order amount. The value is in cents.
             * @example 0
             */
            manualIncrementValue: number;
            /**
             * @description This field shows how much the order total price is, considering that price changes might have been made. The value is in cents.
             * @example 0
             */
            totalChangeValue: number;
            /** @description Array containing information about change prices per item. */
            totals: string[];
            /**
             * @description Information about an `add` operation, when there was one. It will have the same schema of `request.replace.to`.
             * @example null
             */
            add: Record<string, never>;
            /**
             * @description Information about a `remove` operation, when there was one. It will have the same schema of `request.replace.from`.
             * @example null
             */
            remove: Record<string, never>;
            /** @description Array with information about the replacement operation performed. */
            replace: components["schemas"]["Replace2"][];
            /**
             * @description Date and time of the request. The value is in UTC ISO 8601 format `yyyy-mm-ddThh:mm:ss.sssZ`.
             * @example 2023-07-27T17:52:18.6483116Z
             */
            date: string;
            origin: components["schemas"]["OriginV2"];
            settings: components["schemas"]["Settings"];
        };
        /**
         * Replace2
         * @example {
         *       "from": {
         *         "paymentData": {
         *           "transactions": []
         *         },
         *         "items": [
         *           {
         *             "id": "31",
         *             "quantity": 1,
         *             "price": 5000,
         *             "measurementUnit": "un",
         *             "unitMultiplier": 1,
         *             "sellingPrice": 5000,
         *             "name": "Fusca miniatura Fusca preto",
         *             "detailUrl": "/fusca-miniatura-24/p",
         *             "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155431-55-55/image-bdab69af1e5c41cdbc498d02e370b376.jpg?v=636579391945870000"
         *           }
         *         ],
         *         "shippingData": {
         *           "logisticsInfo": [
         *             {
         *               "itemIndex": 0,
         *               "selectedSla": "Lenta",
         *               "selectedDeliveryChannel": "delivery",
         *               "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *               "slas": [
         *                 {
         *                   "id": "Lenta",
         *                   "deliveryChannel": "delivery",
         *                   "name": "Lenta",
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1c083bf",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Donkey",
         *                       "quantity": 1,
         *                       "kitItemDetails": [],
         *                       "accountCarrierName": null
         *                     }
         *                   ],
         *                   "shippingEstimate": "25bd",
         *                   "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                   "lockTTL": "12d",
         *                   "availableDeliveryWindows": [],
         *                   "deliveryWindow": null,
         *                   "price": 180,
         *                   "listPrice": 180,
         *                   "tax": 0,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupPointId": null,
         *                   "pickupDistance": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd"
         *                 },
         *                 {
         *                   "id": "Normal",
         *                   "deliveryChannel": "delivery",
         *                   "name": "Normal",
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Transportadora",
         *                       "quantity": 1,
         *                       "kitItemDetails": [],
         *                       "accountCarrierName": null
         *                     }
         *                   ],
         *                   "shippingEstimate": "3bd",
         *                   "shippingEstimateDate": null,
         *                   "lockTTL": "12d",
         *                   "availableDeliveryWindows": [],
         *                   "deliveryWindow": null,
         *                   "price": 500,
         *                   "listPrice": 500,
         *                   "tax": 0,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupPointId": null,
         *                   "pickupDistance": null,
         *                   "polygonName": "",
         *                   "transitTime": "3bd"
         *                 },
         *                 {
         *                   "id": "Pickup",
         *                   "deliveryChannel": "delivery",
         *                   "name": "Pickup",
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "ech018654",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Retirada",
         *                       "quantity": 1,
         *                       "kitItemDetails": [],
         *                       "accountCarrierName": null
         *                     }
         *                   ],
         *                   "shippingEstimate": "25bd",
         *                   "shippingEstimateDate": null,
         *                   "lockTTL": "12d",
         *                   "availableDeliveryWindows": [],
         *                   "deliveryWindow": null,
         *                   "price": 700,
         *                   "listPrice": 700,
         *                   "tax": 0,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupPointId": null,
         *                   "pickupDistance": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd"
         *                 }
         *               ],
         *               "shipsTo": [
         *                 "BRA"
         *               ],
         *               "itemId": "31",
         *               "deliveryChannels": [
         *                 {
         *                   "id": "delivery"
         *                 }
         *               ],
         *               "price": 180,
         *               "listPrice": 180,
         *               "shippingEstimate": "25bd",
         *               "dockEstimate": null,
         *               "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *               "lockTTL": "12d",
         *               "deliveryCompany": null,
         *               "polygonName": "",
         *               "transitTime": "25bd",
         *               "sellingPrice": 180,
         *               "deliveryIds": [
         *                 {
         *                   "courierId": "1c083bf",
         *                   "warehouseId": "1_1",
         *                   "dockId": "1",
         *                   "courierName": "Donkey",
         *                   "quantity": 1,
         *                   "kitItemDetails": null,
         *                   "accountCarrierName": "qastoreecho"
         *                 }
         *               ],
         *               "deliveryWindow": null,
         *               "pickupPointId": null,
         *               "pickupStoreInfo": {
         *                 "isPickupStore": false,
         *                 "friendlyName": null,
         *                 "address": null,
         *                 "additionalInfo": null,
         *                 "dockId": null
         *               },
         *               "pickupDistance": null
         *             }
         *           ]
         *         }
         *       },
         *       "to": {
         *         "items": [
         *           {
         *             "uniqueId": "40E763F4378E4F40AD1FE915FE1078E1",
         *             "id": "1",
         *             "productId": "1",
         *             "productRefId": "",
         *             "refId": "codrefxicaraazul",
         *             "ean": "8745121641",
         *             "name": "xícara azul",
         *             "skuName": "azul",
         *             "modalType": null,
         *             "parentItemIndex": null,
         *             "parentAssemblyBinding": null,
         *             "assemblies": [],
         *             "priceValidUntil": null,
         *             "tax": 0,
         *             "price": 5000,
         *             "listPrice": null,
         *             "manualPrice": null,
         *             "manualPriceAppliedBy": null,
         *             "sellingPrice": 5000,
         *             "rewardValue": 0,
         *             "isGift": false,
         *             "additionalInfo": {
         *               "dimension": null,
         *               "brandName": null,
         *               "brandId": null,
         *               "offeringInfo": null,
         *               "offeringType": null,
         *               "offeringTypeId": null,
         *               "categoriesIds": null,
         *               "productClusterId": null,
         *               "commercialConditionId": null
         *             },
         *             "preSaleDate": null,
         *             "productCategoryIds": "/1/",
         *             "productCategories": {
         *               "1": "Category"
         *             },
         *             "quantity": 1,
         *             "seller": "1",
         *             "sellerChain": [
         *               "1"
         *             ],
         *             "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155394-55-55/xicara.jpg?v=636565506415770000",
         *             "detailUrl": "/xicara/p",
         *             "components": [],
         *             "bundleItems": [],
         *             "attachments": [],
         *             "attachmentOfferings": [],
         *             "offerings": [],
         *             "priceTags": [],
         *             "availability": null,
         *             "measurementUnit": "un",
         *             "unitMultiplier": 1,
         *             "manufacturerCode": null,
         *             "priceDefinition": {
         *               "calculatedSellingPrice": 5000,
         *               "total": 5000,
         *               "sellingPrices": [
         *                 {
         *                   "value": 5000,
         *                   "quantity": 1
         *                 }
         *               ]
         *             }
         *           }
         *         ],
         *         "paymentData": {
         *           "transactions": []
         *         },
         *         "receiptData": null,
         *         "shippingData": {
         *           "logisticsInfo": [
         *             {
         *               "itemIndex": 0,
         *               "selectedSla": "Lenta",
         *               "selectedDeliveryChannel": "delivery",
         *               "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *               "slas": [
         *                 {
         *                   "id": "Lenta",
         *                   "deliveryChannel": "delivery",
         *                   "name": "Lenta",
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1c083bf",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Donkey",
         *                       "quantity": 1,
         *                       "kitItemDetails": [],
         *                       "accountCarrierName": null
         *                     }
         *                   ],
         *                   "shippingEstimate": "25bd",
         *                   "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                   "lockTTL": "12d",
         *                   "availableDeliveryWindows": [],
         *                   "deliveryWindow": null,
         *                   "price": 600,
         *                   "listPrice": 180,
         *                   "tax": 0,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupPointId": null,
         *                   "pickupDistance": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd"
         *                 },
         *                 {
         *                   "id": "Normal",
         *                   "deliveryChannel": "delivery",
         *                   "name": "Normal",
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Transportadora",
         *                       "quantity": 1,
         *                       "kitItemDetails": [],
         *                       "accountCarrierName": null
         *                     }
         *                   ],
         *                   "shippingEstimate": "3bd",
         *                   "shippingEstimateDate": null,
         *                   "lockTTL": "12d",
         *                   "availableDeliveryWindows": [],
         *                   "deliveryWindow": null,
         *                   "price": 500,
         *                   "listPrice": 500,
         *                   "tax": 0,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupPointId": null,
         *                   "pickupDistance": null,
         *                   "polygonName": "",
         *                   "transitTime": "3bd"
         *                 },
         *                 {
         *                   "id": "Pickup",
         *                   "deliveryChannel": "delivery",
         *                   "name": "Pickup",
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "ech018654",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Retirada",
         *                       "quantity": 1,
         *                       "kitItemDetails": [],
         *                       "accountCarrierName": null
         *                     }
         *                   ],
         *                   "shippingEstimate": "25bd",
         *                   "shippingEstimateDate": null,
         *                   "lockTTL": "12d",
         *                   "availableDeliveryWindows": [],
         *                   "deliveryWindow": null,
         *                   "price": 700,
         *                   "listPrice": 700,
         *                   "tax": 0,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupPointId": null,
         *                   "pickupDistance": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd"
         *                 }
         *               ],
         *               "shipsTo": [
         *                 "BRA"
         *               ],
         *               "itemId": "1",
         *               "deliveryChannels": [
         *                 {
         *                   "id": "delivery"
         *                 }
         *               ],
         *               "price": 600,
         *               "listPrice": 180,
         *               "shippingEstimate": "25bd",
         *               "dockEstimate": null,
         *               "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *               "lockTTL": "12d",
         *               "deliveryCompany": null,
         *               "polygonName": "",
         *               "transitTime": "25bd",
         *               "sellingPrice": 600,
         *               "deliveryIds": [
         *                 {
         *                   "courierId": "1c083bf",
         *                   "warehouseId": "1_1",
         *                   "dockId": "1",
         *                   "courierName": "Donkey",
         *                   "quantity": 1,
         *                   "kitItemDetails": null,
         *                   "accountCarrierName": "qastoreecho"
         *                 }
         *               ],
         *               "deliveryWindow": null,
         *               "pickupPointId": null,
         *               "pickupStoreInfo": {
         *                 "isPickupStore": false,
         *                 "friendlyName": null,
         *                 "address": null,
         *                 "additionalInfo": null,
         *                 "dockId": null
         *               },
         *               "pickupDistance": null
         *             }
         *           ]
         *         }
         *       }
         *     }
         */
        Replace2: {
            from: components["schemas"]["From2"];
            to: components["schemas"]["To2"];
        };
        /**
         * From2
         * @example {
         *       "paymentData": {
         *         "transactions": []
         *       },
         *       "items": [
         *         {
         *           "id": "31",
         *           "quantity": 1,
         *           "price": 5000,
         *           "measurementUnit": "un",
         *           "unitMultiplier": 1,
         *           "sellingPrice": 5000,
         *           "name": "Fusca miniatura Fusca preto",
         *           "detailUrl": "/fusca-miniatura-24/p",
         *           "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155431-55-55/image-bdab69af1e5c41cdbc498d02e370b376.jpg?v=636579391945870000"
         *         }
         *       ],
         *       "shippingData": {
         *         "logisticsInfo": [
         *           {
         *             "itemIndex": 0,
         *             "selectedSla": "Lenta",
         *             "selectedDeliveryChannel": "delivery",
         *             "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *             "slas": [
         *               {
         *                 "id": "Lenta",
         *                 "deliveryChannel": "delivery",
         *                 "name": "Lenta",
         *                 "deliveryIds": [
         *                   {
         *                     "courierId": "1c083bf",
         *                     "warehouseId": "1_1",
         *                     "dockId": "1",
         *                     "courierName": "Donkey",
         *                     "quantity": 1,
         *                     "kitItemDetails": [],
         *                     "accountCarrierName": null
         *                   }
         *                 ],
         *                 "shippingEstimate": "25bd",
         *                 "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                 "lockTTL": "12d",
         *                 "availableDeliveryWindows": [],
         *                 "deliveryWindow": null,
         *                 "price": 180,
         *                 "listPrice": 180,
         *                 "tax": 0,
         *                 "pickupStoreInfo": {
         *                   "isPickupStore": false,
         *                   "friendlyName": null,
         *                   "address": null,
         *                   "additionalInfo": null,
         *                   "dockId": null
         *                 },
         *                 "pickupPointId": null,
         *                 "pickupDistance": null,
         *                 "polygonName": "",
         *                 "transitTime": "25bd"
         *               },
         *               {
         *                 "id": "Normal",
         *                 "deliveryChannel": "delivery",
         *                 "name": "Normal",
         *                 "deliveryIds": [
         *                   {
         *                     "courierId": "1",
         *                     "warehouseId": "1_1",
         *                     "dockId": "1",
         *                     "courierName": "Transportadora",
         *                     "quantity": 1,
         *                     "kitItemDetails": [],
         *                     "accountCarrierName": null
         *                   }
         *                 ],
         *                 "shippingEstimate": "3bd",
         *                 "shippingEstimateDate": null,
         *                 "lockTTL": "12d",
         *                 "availableDeliveryWindows": [],
         *                 "deliveryWindow": null,
         *                 "price": 500,
         *                 "listPrice": 500,
         *                 "tax": 0,
         *                 "pickupStoreInfo": {
         *                   "isPickupStore": false,
         *                   "friendlyName": null,
         *                   "address": null,
         *                   "additionalInfo": null,
         *                   "dockId": null
         *                 },
         *                 "pickupPointId": null,
         *                 "pickupDistance": null,
         *                 "polygonName": "",
         *                 "transitTime": "3bd"
         *               },
         *               {
         *                 "id": "Pickup",
         *                 "deliveryChannel": "delivery",
         *                 "name": "Pickup",
         *                 "deliveryIds": [
         *                   {
         *                     "courierId": "ech018654",
         *                     "warehouseId": "1_1",
         *                     "dockId": "1",
         *                     "courierName": "Retirada",
         *                     "quantity": 1,
         *                     "kitItemDetails": [],
         *                     "accountCarrierName": null
         *                   }
         *                 ],
         *                 "shippingEstimate": "25bd",
         *                 "shippingEstimateDate": null,
         *                 "lockTTL": "12d",
         *                 "availableDeliveryWindows": [],
         *                 "deliveryWindow": null,
         *                 "price": 700,
         *                 "listPrice": 700,
         *                 "tax": 0,
         *                 "pickupStoreInfo": {
         *                   "isPickupStore": false,
         *                   "friendlyName": null,
         *                   "address": null,
         *                   "additionalInfo": null,
         *                   "dockId": null
         *                 },
         *                 "pickupPointId": null,
         *                 "pickupDistance": null,
         *                 "polygonName": "",
         *                 "transitTime": "25bd"
         *               }
         *             ],
         *             "shipsTo": [
         *               "BRA"
         *             ],
         *             "itemId": "31",
         *             "deliveryChannels": [
         *               {
         *                 "id": "delivery"
         *               }
         *             ],
         *             "price": 180,
         *             "listPrice": 180,
         *             "shippingEstimate": "25bd",
         *             "dockEstimate": null,
         *             "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *             "lockTTL": "12d",
         *             "deliveryCompany": null,
         *             "polygonName": "",
         *             "transitTime": "25bd",
         *             "sellingPrice": 180,
         *             "deliveryIds": [
         *               {
         *                 "courierId": "1c083bf",
         *                 "warehouseId": "1_1",
         *                 "dockId": "1",
         *                 "courierName": "Donkey",
         *                 "quantity": 1,
         *                 "kitItemDetails": null,
         *                 "accountCarrierName": "qastoreecho"
         *               }
         *             ],
         *             "deliveryWindow": null,
         *             "pickupPointId": null,
         *             "pickupStoreInfo": {
         *               "isPickupStore": false,
         *               "friendlyName": null,
         *               "address": null,
         *               "additionalInfo": null,
         *               "dockId": null
         *             },
         *             "pickupDistance": null
         *           }
         *         ]
         *       }
         *     }
         */
        From2: {
            paymentData: components["schemas"]["PaymentDataV2"];
            items: components["schemas"]["Item4"][];
            shippingData: components["schemas"]["ShippingData3"];
        };
        /**
         * Item4
         * @example {
         *       "id": "31",
         *       "quantity": 1,
         *       "price": 5000,
         *       "measurementUnit": "un",
         *       "unitMultiplier": 1,
         *       "sellingPrice": 5000,
         *       "name": "Fusca miniatura Fusca preto",
         *       "detailUrl": "/fusca-miniatura-24/p",
         *       "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155431-55-55/image-bdab69af1e5c41cdbc498d02e370b376.jpg?v=636579391945870000"
         *     }
         */
        Item4: {
            /**
             * @description SKU ID of the item.
             * @example 1
             */
            id: string;
            /**
             * @description Quantity of items been replaced.
             * @example 1
             */
            quantity: number;
            /**
             * @description Item's shipping price. It does not account for the whole order's shipping price and is presented in cents.
             * @example 1000
             */
            price: string | null;
            /**
             * @description Item's measurement unit. For example, `kg` for kilograms or `un` for unitary items.
             * @example kg
             */
            measurementUnit: string | null;
            /**
             * @description Item's unit multiplier.
             * @example 3
             */
            unitMultiplier: number;
            /**
             * @description Item's selling price.
             * @example 100
             */
            sellingPrice: string;
            /**
             * @description Item's name.
             * @example T-shirt with logo
             */
            name: string | null;
            /**
             * @description Item's URL slug.
             * @example /tshirt-logo/p
             */
            detailUrl: string | null;
            /**
             * @description Item's image URL slug.
             * @example http://store.com.br/ids/155419-55-55//tshirt-logo.png?v=6378858562367
             */
            imageUrl: string | null;
        };
        /**
         * ShippingData3
         * @example {
         *       "logisticsInfo": [
         *         {
         *           "itemIndex": 0,
         *           "selectedSla": "Lenta",
         *           "selectedDeliveryChannel": "delivery",
         *           "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *           "slas": [
         *             {
         *               "id": "Lenta",
         *               "deliveryChannel": "delivery",
         *               "name": "Lenta",
         *               "deliveryIds": [
         *                 {
         *                   "courierId": "1c083bf",
         *                   "warehouseId": "1_1",
         *                   "dockId": "1",
         *                   "courierName": "Donkey",
         *                   "quantity": 1,
         *                   "kitItemDetails": [],
         *                   "accountCarrierName": null
         *                 }
         *               ],
         *               "shippingEstimate": "25bd",
         *               "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *               "lockTTL": "12d",
         *               "availableDeliveryWindows": [],
         *               "deliveryWindow": null,
         *               "price": 180,
         *               "listPrice": 180,
         *               "tax": 0,
         *               "pickupStoreInfo": {
         *                 "isPickupStore": false,
         *                 "friendlyName": null,
         *                 "address": null,
         *                 "additionalInfo": null,
         *                 "dockId": null
         *               },
         *               "pickupPointId": null,
         *               "pickupDistance": null,
         *               "polygonName": "",
         *               "transitTime": "25bd"
         *             },
         *             {
         *               "id": "Normal",
         *               "deliveryChannel": "delivery",
         *               "name": "Normal",
         *               "deliveryIds": [
         *                 {
         *                   "courierId": "1",
         *                   "warehouseId": "1_1",
         *                   "dockId": "1",
         *                   "courierName": "Transportadora",
         *                   "quantity": 1,
         *                   "kitItemDetails": [],
         *                   "accountCarrierName": null
         *                 }
         *               ],
         *               "shippingEstimate": "3bd",
         *               "shippingEstimateDate": null,
         *               "lockTTL": "12d",
         *               "availableDeliveryWindows": [],
         *               "deliveryWindow": null,
         *               "price": 500,
         *               "listPrice": 500,
         *               "tax": 0,
         *               "pickupStoreInfo": {
         *                 "isPickupStore": false,
         *                 "friendlyName": null,
         *                 "address": null,
         *                 "additionalInfo": null,
         *                 "dockId": null
         *               },
         *               "pickupPointId": null,
         *               "pickupDistance": null,
         *               "polygonName": "",
         *               "transitTime": "3bd"
         *             },
         *             {
         *               "id": "Pickup",
         *               "deliveryChannel": "delivery",
         *               "name": "Pickup",
         *               "deliveryIds": [
         *                 {
         *                   "courierId": "ech018654",
         *                   "warehouseId": "1_1",
         *                   "dockId": "1",
         *                   "courierName": "Retirada",
         *                   "quantity": 1,
         *                   "kitItemDetails": [],
         *                   "accountCarrierName": null
         *                 }
         *               ],
         *               "shippingEstimate": "25bd",
         *               "shippingEstimateDate": null,
         *               "lockTTL": "12d",
         *               "availableDeliveryWindows": [],
         *               "deliveryWindow": null,
         *               "price": 700,
         *               "listPrice": 700,
         *               "tax": 0,
         *               "pickupStoreInfo": {
         *                 "isPickupStore": false,
         *                 "friendlyName": null,
         *                 "address": null,
         *                 "additionalInfo": null,
         *                 "dockId": null
         *               },
         *               "pickupPointId": null,
         *               "pickupDistance": null,
         *               "polygonName": "",
         *               "transitTime": "25bd"
         *             }
         *           ],
         *           "shipsTo": [
         *             "BRA"
         *           ],
         *           "itemId": "31",
         *           "deliveryChannels": [
         *             {
         *               "id": "delivery"
         *             }
         *           ],
         *           "price": 180,
         *           "listPrice": 180,
         *           "shippingEstimate": "25bd",
         *           "dockEstimate": null,
         *           "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *           "lockTTL": "12d",
         *           "deliveryCompany": null,
         *           "polygonName": "",
         *           "transitTime": "25bd",
         *           "sellingPrice": 180,
         *           "deliveryIds": [
         *             {
         *               "courierId": "1c083bf",
         *               "warehouseId": "1_1",
         *               "dockId": "1",
         *               "courierName": "Donkey",
         *               "quantity": 1,
         *               "kitItemDetails": null,
         *               "accountCarrierName": "qastoreecho"
         *             }
         *           ],
         *           "deliveryWindow": null,
         *           "pickupPointId": null,
         *           "pickupStoreInfo": {
         *             "isPickupStore": false,
         *             "friendlyName": null,
         *             "address": null,
         *             "additionalInfo": null,
         *             "dockId": null
         *           },
         *           "pickupDistance": null
         *         }
         *       ]
         *     }
         */
        ShippingData3: {
            /** @description Array with shipping information. */
            logisticsInfo: components["schemas"]["LogisticsInfo2"][];
        };
        /**
         * LogisticsInfo2
         * @example {
         *       "itemIndex": 0,
         *       "selectedSla": "Lenta",
         *       "selectedDeliveryChannel": "delivery",
         *       "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *       "slas": [
         *         {
         *           "id": "Lenta",
         *           "deliveryChannel": "delivery",
         *           "name": "Lenta",
         *           "deliveryIds": [
         *             {
         *               "courierId": "1c083bf",
         *               "warehouseId": "1_1",
         *               "dockId": "1",
         *               "courierName": "Donkey",
         *               "quantity": 1,
         *               "kitItemDetails": [],
         *               "accountCarrierName": null
         *             }
         *           ],
         *           "shippingEstimate": "25bd",
         *           "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *           "lockTTL": "12d",
         *           "availableDeliveryWindows": [],
         *           "deliveryWindow": null,
         *           "price": 180,
         *           "listPrice": 180,
         *           "tax": 0,
         *           "pickupStoreInfo": {
         *             "isPickupStore": false,
         *             "friendlyName": null,
         *             "address": null,
         *             "additionalInfo": null,
         *             "dockId": null
         *           },
         *           "pickupPointId": null,
         *           "pickupDistance": null,
         *           "polygonName": "",
         *           "transitTime": "25bd"
         *         },
         *         {
         *           "id": "Normal",
         *           "deliveryChannel": "delivery",
         *           "name": "Normal",
         *           "deliveryIds": [
         *             {
         *               "courierId": "1",
         *               "warehouseId": "1_1",
         *               "dockId": "1",
         *               "courierName": "Transportadora",
         *               "quantity": 1,
         *               "kitItemDetails": [],
         *               "accountCarrierName": null
         *             }
         *           ],
         *           "shippingEstimate": "3bd",
         *           "shippingEstimateDate": null,
         *           "lockTTL": "12d",
         *           "availableDeliveryWindows": [],
         *           "deliveryWindow": null,
         *           "price": 500,
         *           "listPrice": 500,
         *           "tax": 0,
         *           "pickupStoreInfo": {
         *             "isPickupStore": false,
         *             "friendlyName": null,
         *             "address": null,
         *             "additionalInfo": null,
         *             "dockId": null
         *           },
         *           "pickupPointId": null,
         *           "pickupDistance": null,
         *           "polygonName": "",
         *           "transitTime": "3bd"
         *         },
         *         {
         *           "id": "Pickup",
         *           "deliveryChannel": "delivery",
         *           "name": "Pickup",
         *           "deliveryIds": [
         *             {
         *               "courierId": "ech018654",
         *               "warehouseId": "1_1",
         *               "dockId": "1",
         *               "courierName": "Retirada",
         *               "quantity": 1,
         *               "kitItemDetails": [],
         *               "accountCarrierName": null
         *             }
         *           ],
         *           "shippingEstimate": "25bd",
         *           "shippingEstimateDate": null,
         *           "lockTTL": "12d",
         *           "availableDeliveryWindows": [],
         *           "deliveryWindow": null,
         *           "price": 700,
         *           "listPrice": 700,
         *           "tax": 0,
         *           "pickupStoreInfo": {
         *             "isPickupStore": false,
         *             "friendlyName": null,
         *             "address": null,
         *             "additionalInfo": null,
         *             "dockId": null
         *           },
         *           "pickupPointId": null,
         *           "pickupDistance": null,
         *           "polygonName": "",
         *           "transitTime": "25bd"
         *         }
         *       ],
         *       "shipsTo": [
         *         "BRA"
         *       ],
         *       "itemId": "31",
         *       "deliveryChannels": [
         *         {
         *           "id": "delivery"
         *         }
         *       ],
         *       "price": 180,
         *       "listPrice": 180,
         *       "shippingEstimate": "25bd",
         *       "dockEstimate": null,
         *       "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *       "lockTTL": "12d",
         *       "deliveryCompany": null,
         *       "polygonName": "",
         *       "transitTime": "25bd",
         *       "sellingPrice": 180,
         *       "deliveryIds": [
         *         {
         *           "courierId": "1c083bf",
         *           "warehouseId": "1_1",
         *           "dockId": "1",
         *           "courierName": "Donkey",
         *           "quantity": 1,
         *           "kitItemDetails": null,
         *           "accountCarrierName": "qastoreecho"
         *         }
         *       ],
         *       "deliveryWindow": null,
         *       "pickupPointId": null,
         *       "pickupStoreInfo": {
         *         "isPickupStore": false,
         *         "friendlyName": null,
         *         "address": null,
         *         "additionalInfo": null,
         *         "dockId": null
         *       },
         *       "pickupDistance": null
         *     }
         */
        LogisticsInfo2: {
            /**
             * @description Index that identifies the position of the replacing item in the array, starting from `0`.
             * @example 0
             */
            itemIndex: number;
            /**
             * @description Shipping method of the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) used in the replacing order.
             * @example Normal
             */
            selectedSla: string;
            /**
             * @description Delivery channel selected by the customer, like `delivery` or `pickup-in-point`. This field is being deprecated and the information it retrieves can be usually be found in `deliveryChannel`.
             * @example delivery
             */
            selectedDeliveryChannel: string;
            /**
             * @description Shipping address ID.
             * @example 9ec276fd3a604eb1aa151b5333ca5db7
             */
            addressId: string;
            /** @description Information on Service Level Agreement (SLA) of the change order. */
            slas: components["schemas"]["SlaV2"][];
            /** @description List of countries of the change order shipping address. */
            shipsTo: string[];
            /**
             * @description Replacing item's SKU ID, which is a unique numerical identifier.
             * @example 3
             */
            itemId: string;
            /** @description Array with the delivery channels associated with the trade policy. */
            deliveryChannels: components["schemas"]["DeliveryChannel"][];
            /**
             * @description Item's final price, calculated in cents.
             * @example 600
             */
            price: number;
            /**
             * @description Item's price list, calculated in cents.
             * @example 600
             */
            listPrice: number;
            /**
             * @description Item's shipping estimate date. The value is in UTC ISO 8601 format `yyyy-mm-ddThh:mm:ss.sssZ`.
             * @example 2023-07-29T17:52:18.6483116Z
             */
            shippingEstimate: string | null;
            /**
             * @description Item's estimate duration of the [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) time. For instance, one business day is represented as `1bd`.
             * @example 1bd
             */
            dockEstimate: string | null;
            /**
             * @description Replacing item's total shipping duration estimated in days. For instance, three business days are represented as `3bd`.
             * @example 3bd
             */
            shippingEstimateDate: string | null;
            /**
             * @description Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA. For instance, one business day is represented as `1bd`.
             * @example 1bd
             */
            lockTTL: string | null;
            /**
             * @description [Carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) company's name.
             * @example Correios
             */
            deliveryCompany: string | null;
            /**
             * @description Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy.
             * @example 114 - Polanco _ H-05
             */
            polygonName: string | null;
            /**
             * @description Duration in business days of the time the [carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) takes in transit to fulfill the order. For example, three business days are represented as `3bd`.
             * @example 3bd
             */
            transitTime: string | null;
            /**
             * @description Item's selling price.
             * @example 600
             */
            sellingPrice: number;
            /** @description Array with delivery information. */
            deliveryIds: components["schemas"]["DeliveryIdV2"][];
            /**
             * @description Change order [scheduled delivery](https://help.vtex.com/en/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, when applicable.
             * @example null
             */
            deliveryWindow: string | null;
            /**
             * @description ID of the [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R).
             * @example pup215rkw
             */
            pickupPointId: string | null;
            pickupStoreInfo: components["schemas"]["PickupStoreInfoV2"];
            /**
             * @description Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line.
             * @example 1.0
             */
            pickupDistance: number | null;
        };
        /**
         * DeliveryIdV2
         * @example {
         *       "courierId": "1c083bf",
         *       "warehouseId": "1_1",
         *       "dockId": "1",
         *       "courierName": "Donkey",
         *       "quantity": 1,
         *       "kitItemDetails": [],
         *       "accountCarrierName": null
         *     }
         */
        DeliveryIdV2: {
            /**
             * @description ID of the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140).
             * @example 136769c
             */
            courierId: string;
            /**
             * @description ID of the [warehouse](https://help.vtex.com/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb).
             * @example w_156
             */
            warehouseId: string;
            /**
             * @description ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj).
             * @example ld931
             */
            dockId: string;
            /**
             * @description Name of the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140).
             * @example Crossborder
             */
            courierName: string;
            /**
             * @description Quantity of items.
             * @example 1
             */
            quantity: number;
            kitItemDetails: (string | null)[];
            /**
             * @description Name of the account's [carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE).
             * @example vtexlog
             */
            accountCarrierName: string | null;
        };
        /**
         * DeliveryChannel
         * @example {
         *       "id": "delivery"
         *     }
         */
        DeliveryChannel: {
            /**
             * @description Change order shipping type, which can be `pickup-in-point` for [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R), and `delivery` for delivery.
             * @example delivery
             */
            id: string;
        };
        /**
         * To2
         * @example {
         *       "items": [
         *         {
         *           "uniqueId": "40E763F4378E4F40AD1FE915FE1078E1",
         *           "id": "1",
         *           "productId": "1",
         *           "productRefId": "",
         *           "refId": "codrefxicaraazul",
         *           "ean": "8745121641",
         *           "name": "xícara azul",
         *           "skuName": "azul",
         *           "modalType": null,
         *           "parentItemIndex": null,
         *           "parentAssemblyBinding": null,
         *           "assemblies": [],
         *           "priceValidUntil": null,
         *           "tax": 0,
         *           "price": 5000,
         *           "listPrice": null,
         *           "manualPrice": null,
         *           "manualPriceAppliedBy": null,
         *           "sellingPrice": 5000,
         *           "rewardValue": 0,
         *           "isGift": false,
         *           "additionalInfo": {
         *             "dimension": null,
         *             "brandName": null,
         *             "brandId": null,
         *             "offeringInfo": null,
         *             "offeringType": null,
         *             "offeringTypeId": null,
         *             "categoriesIds": null,
         *             "productClusterId": null,
         *             "commercialConditionId": null
         *           },
         *           "preSaleDate": null,
         *           "productCategoryIds": "/1/",
         *           "productCategories": {
         *             "1": "Category"
         *           },
         *           "quantity": 1,
         *           "seller": "1",
         *           "sellerChain": [
         *             "1"
         *           ],
         *           "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155394-55-55/xicara.jpg?v=636565506415770000",
         *           "detailUrl": "/xicara/p",
         *           "components": [],
         *           "bundleItems": [],
         *           "attachments": [],
         *           "attachmentOfferings": [],
         *           "offerings": [],
         *           "priceTags": [],
         *           "availability": null,
         *           "measurementUnit": "un",
         *           "unitMultiplier": 1,
         *           "manufacturerCode": null,
         *           "priceDefinition": {
         *             "calculatedSellingPrice": 5000,
         *             "total": 5000,
         *             "sellingPrices": [
         *               {
         *                 "value": 5000,
         *                 "quantity": 1
         *               }
         *             ]
         *           }
         *         }
         *       ],
         *       "paymentData": {
         *         "transactions": []
         *       },
         *       "receiptData": null,
         *       "shippingData": {
         *         "logisticsInfo": [
         *           {
         *             "itemIndex": 0,
         *             "selectedSla": "Lenta",
         *             "selectedDeliveryChannel": "delivery",
         *             "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *             "slas": [
         *               {
         *                 "id": "Lenta",
         *                 "deliveryChannel": "delivery",
         *                 "name": "Lenta",
         *                 "deliveryIds": [
         *                   {
         *                     "courierId": "1c083bf",
         *                     "warehouseId": "1_1",
         *                     "dockId": "1",
         *                     "courierName": "Donkey",
         *                     "quantity": 1,
         *                     "kitItemDetails": [],
         *                     "accountCarrierName": null
         *                   }
         *                 ],
         *                 "shippingEstimate": "25bd",
         *                 "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                 "lockTTL": "12d",
         *                 "availableDeliveryWindows": [],
         *                 "deliveryWindow": null,
         *                 "price": 600,
         *                 "listPrice": 180,
         *                 "tax": 0,
         *                 "pickupStoreInfo": {
         *                   "isPickupStore": false,
         *                   "friendlyName": null,
         *                   "address": null,
         *                   "additionalInfo": null,
         *                   "dockId": null
         *                 },
         *                 "pickupPointId": null,
         *                 "pickupDistance": null,
         *                 "polygonName": "",
         *                 "transitTime": "25bd"
         *               },
         *               {
         *                 "id": "Normal",
         *                 "deliveryChannel": "delivery",
         *                 "name": "Normal",
         *                 "deliveryIds": [
         *                   {
         *                     "courierId": "1",
         *                     "warehouseId": "1_1",
         *                     "dockId": "1",
         *                     "courierName": "Transportadora",
         *                     "quantity": 1,
         *                     "kitItemDetails": [],
         *                     "accountCarrierName": null
         *                   }
         *                 ],
         *                 "shippingEstimate": "3bd",
         *                 "shippingEstimateDate": null,
         *                 "lockTTL": "12d",
         *                 "availableDeliveryWindows": [],
         *                 "deliveryWindow": null,
         *                 "price": 500,
         *                 "listPrice": 500,
         *                 "tax": 0,
         *                 "pickupStoreInfo": {
         *                   "isPickupStore": false,
         *                   "friendlyName": null,
         *                   "address": null,
         *                   "additionalInfo": null,
         *                   "dockId": null
         *                 },
         *                 "pickupPointId": null,
         *                 "pickupDistance": null,
         *                 "polygonName": "",
         *                 "transitTime": "3bd"
         *               },
         *               {
         *                 "id": "Pickup",
         *                 "deliveryChannel": "delivery",
         *                 "name": "Pickup",
         *                 "deliveryIds": [
         *                   {
         *                     "courierId": "ech018654",
         *                     "warehouseId": "1_1",
         *                     "dockId": "1",
         *                     "courierName": "Retirada",
         *                     "quantity": 1,
         *                     "kitItemDetails": [],
         *                     "accountCarrierName": null
         *                   }
         *                 ],
         *                 "shippingEstimate": "25bd",
         *                 "shippingEstimateDate": null,
         *                 "lockTTL": "12d",
         *                 "availableDeliveryWindows": [],
         *                 "deliveryWindow": null,
         *                 "price": 700,
         *                 "listPrice": 700,
         *                 "tax": 0,
         *                 "pickupStoreInfo": {
         *                   "isPickupStore": false,
         *                   "friendlyName": null,
         *                   "address": null,
         *                   "additionalInfo": null,
         *                   "dockId": null
         *                 },
         *                 "pickupPointId": null,
         *                 "pickupDistance": null,
         *                 "polygonName": "",
         *                 "transitTime": "25bd"
         *               }
         *             ],
         *             "shipsTo": [
         *               "BRA"
         *             ],
         *             "itemId": "1",
         *             "deliveryChannels": [
         *               {
         *                 "id": "delivery"
         *               }
         *             ],
         *             "price": 600,
         *             "listPrice": 180,
         *             "shippingEstimate": "25bd",
         *             "dockEstimate": null,
         *             "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *             "lockTTL": "12d",
         *             "deliveryCompany": null,
         *             "polygonName": "",
         *             "transitTime": "25bd",
         *             "sellingPrice": 600,
         *             "deliveryIds": [
         *               {
         *                 "courierId": "1c083bf",
         *                 "warehouseId": "1_1",
         *                 "dockId": "1",
         *                 "courierName": "Donkey",
         *                 "quantity": 1,
         *                 "kitItemDetails": null,
         *                 "accountCarrierName": "qastoreecho"
         *               }
         *             ],
         *             "deliveryWindow": null,
         *             "pickupPointId": null,
         *             "pickupStoreInfo": {
         *               "isPickupStore": false,
         *               "friendlyName": null,
         *               "address": null,
         *               "additionalInfo": null,
         *               "dockId": null
         *             },
         *             "pickupDistance": null
         *           }
         *         ]
         *       }
         *     }
         */
        To2: {
            /** @description Array containing information about the item replacing the previous one. */
            items: components["schemas"]["Item3"][];
            paymentData: components["schemas"]["PaymentDataV2"];
            /**
             * @description Information about the receipt after order change.
             * @example null
             */
            receiptData: Record<string, never>;
            shippingData: components["schemas"]["ShippingData3"];
        };
        /**
         * PriceDefinition
         * @example {
         *       "calculatedSellingPrice": 5000,
         *       "total": 5000,
         *       "sellingPrices": [
         *         {
         *           "value": 5000,
         *           "quantity": 1
         *         }
         *       ]
         *     }
         */
        PriceDefinition: {
            calculatedSellingPrice: number;
            total: number;
            /** @description Array containing selling price information. */
            sellingPrices: components["schemas"]["SellingPrice"][];
        };
        /**
         * SellingPrice
         * @example {
         *       "value": 5000,
         *       "quantity": 1
         *     }
         */
        SellingPrice: {
            value: number;
            quantity: number;
        };
        /** GetChangeDetail */
        GetChangeDetail: {
            /**
             * @description Unique code that identifies a change order request.
             * @example e8532a32-7f7e-434a-88ec-29609f0ede46
             */
            requestId: string;
            /**
             * @description Code that identifies the transaction of changing the orders in the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
             * @example 74f40e7a-68c6-4699-b874-a8a297fb3f6a
             */
            workflowId: string;
            /**
             * @description Order status in the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
             * @example handling
             */
            status: string;
            /**
             * @description When set as `true`, the order is still progressing in the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196), when set as `false`, it is complete, whether by cancellation or because the shopper received it.
             * @example true
             */
            inProgress: boolean;
            /**
             * @description Reason that motivated the order change.
             * @example The client wants to change the items weight.
             */
            reason: string;
            /**
             * @description This field shows if a manual price was applied to the total order amount. The value is in cents.
             * @example 0
             */
            manualDiscountValue: number;
            /**
             * @description This field shows if an increment value was applied to the total order amount. The value is in cents.
             * @example 0
             */
            manualIncrementValue: number;
            /**
             * @description This field shows how much is the order total price considering that price changes might have been made. The value is in cents.
             * @example 0
             */
            totalChangeValue: number;
            /**
             * @description Array containing information about change prices per item.
             * @example null
             */
            totals: string[];
            /**
             * @description Array with information about the `add` operation, when applicable. The schema will correspond to the object `to` inside the `replace` array.
             * @example null
             */
            add: string[];
            /**
             * @description Array with information about the `remove` operation, when applicable. The schema will correspond to the object `from` inside the `replace` array.
             * @example null
             */
            remove: string[];
            /** @description Array with information about the `replace` operation, when applicable. */
            replace: components["schemas"]["Replace1"][];
            /**
             * @description Date and time of the request. The value is in UTC ISO 8601 format `yyyy-mm-ddThh:mm:ss.sssZ`.
             * @example 2023-07-27T17:52:18.6483116Z
             */
            date: string;
            origin: components["schemas"]["OriginV2"];
            settings: components["schemas"]["Settings"];
        };
        /**
         * PreviewChange
         * @example {
         *       "reason": "The client wants to change a weighable product.",
         *       "replace": [
         *         {
         *           "from": {
         *             "items": [
         *               {
         *                 "id": "1",
         *                 "quantity": 1
         *               }
         *             ]
         *           },
         *           "to": {
         *             "items": [
         *               {
         *                 "id": "1",
         *                 "quantity": 1,
         *                 "measurementUnit": "kg",
         *                 "unitMultiplier": 1
         *               }
         *             ],
         *             "shippingData": {
         *               "logisticsInfo": [
         *                 {
         *                   "itemIndex": 0,
         *                   "slaId": "Normal",
         *                   "deliveryChannel": "delivery",
         *                   "addressId": "12334048475146857",
         *                   "price": 1000
         *                 }
         *               ]
         *             }
         *           }
         *         }
         *       ]
         *     }
         */
        PreviewChange: {
            /**
             * @description Reason why you wish to change order. Since you can make several changes to an order, filling this field with a clear explanation helps organize the change order history. The shopper can view this field value in [transactional emails](https://help.vtex.com/en/tutorial/order-transactional-email-templates--3g2S2kqBOoSGcCaqMYK2my) and [My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh).
             * @example The client wants to change a weighable product.
             */
            reason: string;
            /** @description Name of the change operation you are performing, which can be `replace`, `add` or `remove`. If you want, you can combine all change operations in a single request. */
            replace: components["schemas"]["Replace"][];
        };
        /**
         * PreviewChange1
         * @example {
         *       "reason": "I would like to receive a preview.",
         *       "manualDiscountValue": 0,
         *       "manualIncrementValue": 0,
         *       "totalChangeValue": 420,
         *       "totals": [
         *         {
         *           "id": "ManualValues",
         *           "name": "Manual Values Total",
         *           "value": 0
         *         },
         *         {
         *           "id": "Shipping",
         *           "name": "Shipping Total",
         *           "value": 420
         *         }
         *       ],
         *       "add": null,
         *       "remove": null,
         *       "replace": [
         *         {
         *           "from": {
         *             "paymentData": {
         *               "transactions": []
         *             },
         *             "items": [
         *               {
         *                 "id": "31",
         *                 "quantity": 1,
         *                 "price": 5000,
         *                 "measurementUnit": "un",
         *                 "unitMultiplier": 1,
         *                 "sellingPrice": 5000,
         *                 "name": "Fusca miniatura Fusca preto",
         *                 "detailUrl": "/fusca-miniatura-24/p",
         *                 "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155431-55-55/image-bdab69af1e5c41cdbc498d02e370b376.jpg?v=636579391945870000"
         *               }
         *             ],
         *             "shippingData": {
         *               "logisticsInfo": [
         *                 {
         *                   "itemIndex": 0,
         *                   "selectedSla": "Lenta",
         *                   "selectedDeliveryChannel": "delivery",
         *                   "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *                   "slas": [
         *                     {
         *                       "id": "Lenta",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Lenta",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1c083bf",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Donkey",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 180,
         *                       "listPrice": 180,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     },
         *                     {
         *                       "id": "Normal",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Normal",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Transportadora",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "3bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 500,
         *                       "listPrice": 500,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "3bd"
         *                     },
         *                     {
         *                       "id": "Pickup",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Pickup",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "ech018654",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Retirada",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 700,
         *                       "listPrice": 700,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     }
         *                   ],
         *                   "shipsTo": [
         *                     "BRA"
         *                   ],
         *                   "itemId": "31",
         *                   "deliveryChannels": [
         *                     {
         *                       "id": "delivery"
         *                     }
         *                   ],
         *                   "price": 180,
         *                   "listPrice": 180,
         *                   "shippingEstimate": "25bd",
         *                   "dockEstimate": null,
         *                   "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                   "lockTTL": "12d",
         *                   "deliveryCompany": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd",
         *                   "sellingPrice": 180,
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1c083bf",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Donkey",
         *                       "quantity": 1,
         *                       "kitItemDetails": null,
         *                       "accountCarrierName": "qastoreecho"
         *                     }
         *                   ],
         *                   "deliveryWindow": null,
         *                   "pickupPointId": null,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupDistance": null
         *                 }
         *               ]
         *             }
         *           },
         *           "to": {
         *             "items": [
         *               {
         *                 "uniqueId": "303A1E4534984FF295BA571BF08C8297",
         *                 "id": "1",
         *                 "productId": "1",
         *                 "productRefId": "",
         *                 "refId": "codrefxicaraazul",
         *                 "ean": "8745121641",
         *                 "name": "xícara azul",
         *                 "skuName": "azul",
         *                 "modalType": null,
         *                 "parentItemIndex": null,
         *                 "parentAssemblyBinding": null,
         *                 "assemblies": [],
         *                 "priceValidUntil": null,
         *                 "tax": 0,
         *                 "price": 5000,
         *                 "listPrice": null,
         *                 "manualPrice": null,
         *                 "manualPriceAppliedBy": null,
         *                 "sellingPrice": 5000,
         *                 "rewardValue": 0,
         *                 "isGift": false,
         *                 "additionalInfo": {
         *                   "dimension": null,
         *                   "brandName": null,
         *                   "brandId": null,
         *                   "offeringInfo": null,
         *                   "offeringType": null,
         *                   "offeringTypeId": null,
         *                   "categoriesIds": null,
         *                   "productClusterId": null,
         *                   "commercialConditionId": null
         *                 },
         *                 "preSaleDate": null,
         *                 "productCategoryIds": "/1/",
         *                 "productCategories": {
         *                   "1": "Category"
         *                 },
         *                 "quantity": 1,
         *                 "seller": "1",
         *                 "sellerChain": [
         *                   "1"
         *                 ],
         *                 "imageUrl": "http://qastore.vteximg.com.br/arquivos/ids/155394-55-55/xicara.jpg?v=636565506415770000",
         *                 "detailUrl": "/xicara/p",
         *                 "components": [],
         *                 "bundleItems": [],
         *                 "attachments": [],
         *                 "attachmentOfferings": [],
         *                 "offerings": [],
         *                 "priceTags": [],
         *                 "availability": null,
         *                 "measurementUnit": "un",
         *                 "unitMultiplier": 1,
         *                 "manufacturerCode": null,
         *                 "priceDefinition": {
         *                   "calculatedSellingPrice": 5000,
         *                   "total": 5000,
         *                   "sellingPrices": [
         *                     {
         *                       "value": 5000,
         *                       "quantity": 1
         *                     }
         *                   ]
         *                 }
         *               }
         *             ],
         *             "paymentData": {
         *               "transactions": []
         *             },
         *             "receiptData": null,
         *             "shippingData": {
         *               "logisticsInfo": [
         *                 {
         *                   "itemIndex": 0,
         *                   "selectedSla": "Lenta",
         *                   "selectedDeliveryChannel": "delivery",
         *                   "addressId": "9ec276fd3a604eb1aa151b5333ca5db6",
         *                   "slas": [
         *                     {
         *                       "id": "Lenta",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Lenta",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1c083bf",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Donkey",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 600,
         *                       "listPrice": 180,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     },
         *                     {
         *                       "id": "Normal",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Normal",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "1",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Transportadora",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "3bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 500,
         *                       "listPrice": 500,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "3bd"
         *                     },
         *                     {
         *                       "id": "Pickup",
         *                       "deliveryChannel": "delivery",
         *                       "name": "Pickup",
         *                       "deliveryIds": [
         *                         {
         *                           "courierId": "ech018654",
         *                           "warehouseId": "1_1",
         *                           "dockId": "1",
         *                           "courierName": "Retirada",
         *                           "quantity": 1,
         *                           "kitItemDetails": [],
         *                           "accountCarrierName": null
         *                         }
         *                       ],
         *                       "shippingEstimate": "25bd",
         *                       "shippingEstimateDate": null,
         *                       "lockTTL": "12d",
         *                       "availableDeliveryWindows": [],
         *                       "deliveryWindow": null,
         *                       "price": 700,
         *                       "listPrice": 700,
         *                       "tax": 0,
         *                       "pickupStoreInfo": {
         *                         "isPickupStore": false,
         *                         "friendlyName": null,
         *                         "address": null,
         *                         "additionalInfo": null,
         *                         "dockId": null
         *                       },
         *                       "pickupPointId": null,
         *                       "pickupDistance": null,
         *                       "polygonName": "",
         *                       "transitTime": "25bd"
         *                     }
         *                   ],
         *                   "shipsTo": [
         *                     "BRA"
         *                   ],
         *                   "itemId": "1",
         *                   "deliveryChannels": [
         *                     {
         *                       "id": "delivery"
         *                     }
         *                   ],
         *                   "price": 600,
         *                   "listPrice": 180,
         *                   "shippingEstimate": "25bd",
         *                   "dockEstimate": null,
         *                   "shippingEstimateDate": "2023-08-30T10:17:24.6436519Z",
         *                   "lockTTL": "12d",
         *                   "deliveryCompany": null,
         *                   "polygonName": "",
         *                   "transitTime": "25bd",
         *                   "sellingPrice": 600,
         *                   "deliveryIds": [
         *                     {
         *                       "courierId": "1c083bf",
         *                       "warehouseId": "1_1",
         *                       "dockId": "1",
         *                       "courierName": "Donkey",
         *                       "quantity": 1,
         *                       "kitItemDetails": null,
         *                       "accountCarrierName": "qastoreecho"
         *                     }
         *                   ],
         *                   "deliveryWindow": null,
         *                   "pickupPointId": null,
         *                   "pickupStoreInfo": {
         *                     "isPickupStore": false,
         *                     "friendlyName": null,
         *                     "address": null,
         *                     "additionalInfo": null,
         *                     "dockId": null
         *                   },
         *                   "pickupDistance": null
         *                 }
         *               ]
         *             }
         *           }
         *         }
         *       ],
         *       "date": "2023-07-27T18:01:26.4743309Z",
         *       "origin": {
         *         "account": "qastore",
         *         "orderId": "v12772213qst-02",
         *         "component": "MarketplaceComponent"
         *       },
         *       "settings": {
         *         "customPaymentSystemsAllowed": []
         *       }
         *     }
         */
        PreviewChange1: {
            reason: string;
            manualDiscountValue: number;
            manualIncrementValue: number;
            totalChangeValue: number;
            /** @description Array containing totals information. */
            totals: components["schemas"]["TotalV2"][];
            add: string | null;
            remove: string | null;
            /** @description Array containing replace information. */
            replace: components["schemas"]["Replace2"][];
            date: string;
            origin: components["schemas"]["OriginV2"];
            settings: components["schemas"]["Settings"];
        };
        /**
         * TotalV2
         * @example {
         *       "id": "ManualValues",
         *       "name": "Manual Values Total",
         *       "value": 0
         *     }
         */
        TotalV2: {
            id: string;
            name: string;
            value: number;
        };
        /**
         * CancelChangeStoppedonError
         * @example {
         *       "reason": "I want to cancel this change order request because it's stopped on a blocking error."
         *     }
         */
        CancelChangeStoppedonError: {
            /**
             * @description Reason why you wish to cancel the order change. The customer will not view the value inserted in this field.
             * @example I want to cancel this change order request because it's stopped on a blocking error.
             */
            reason: string;
        };
        /**
         * Error
         * @example {
         *       "code": "001",
         *       "message": "An error with Workflow System has occurred"
         *     }
         */
        Error: {
            code: string;
            message: string;
        };
    };
    responses: never;
    parameters: {
        /** @description You can use this parameter to filter [incomplete orders](https://help.vtex.com/en/tutorial/understanding-incomplete-orders) by their situations, whether permanent (`perm`) or temporary (`temp`). When the situation is temporary, the order is still opened and has not being cancelled. To filter the total number of incomplete orders, use the value `all`. */
        UNUSED_incompleteOrders: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetOrder: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /**
                 * @description Order ID is a unique code that identifies an order. Instead of using `orderId`, you can also make the request using the sequence, a six-digit string that follows the order ID. For example, in order 1268540501456-01 (501456), the sequence is 501456. To use this parameter, replace the value between `{ }` keys in `seq{sequence-number}` with the sequence. For example: `seq501456`.
                 * @example 1172452900788-01 or seq501456
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Unique code that identifies an order. */
                        orderId?: string;
                        /** @description Six-digit string that follows the order ID. For example, in order `1268540501456-01 (501456)`, the sequence is `501456`. */
                        sequence?: string;
                        /** @description Marketplace order ID. */
                        marketplaceOrderId?: string;
                        /** @description Endpoint provided by the marketplace for post purchase communication. */
                        marketplaceServicesEndpoint?: string;
                        /** @description ID of the seller related to the order. It can be a VTEX seller or an external seller. */
                        sellerOrderId?: string;
                        /** @description Order's [origin in the order flow](https://developers.vtex.com/docs/guides/orders-overview#understanding-order-flow-types), which can be `Marketplace`, `Fulfillment` or `Chain`. */
                        origin?: string;
                        /** @description Three-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) code that identifies the marketplace where the order originates. This ID is configured in the seller's VTEX account. */
                        affiliateId?: string;
                        /** @description Sales channel (or [trade policy](https://help.vtex.com/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID related to the order. */
                        salesChannel?: string;
                        /** @description For a VTEX store, the merchant's name will be the same as the account name. An external seller can have a `merchantName`, and in this case the field will not correspond to an account name. */
                        merchantName?: string;
                        /** @description Order [status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). */
                        status?: string;
                        /** @description Indicates if the order workflow presents an error that cannot be solved by automatic retry (`true`), or if there are no processing errors (`false`). */
                        workflowIsInError?: boolean;
                        /**
                         * @deprecated
                         * @description `Deprecated`. Status description which is displayed on the Admin panel. This field is obsolete and may not return any value.
                         */
                        statusDescription?: string;
                        /** @description Order's total value in cents. */
                        value?: number;
                        /** @description Order's creation date in [ISO 8601 time zone offset format](https://learn.microsoft.com/pt-br/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                        creationDate?: string;
                        /** @description Order's last change date in [ISO 8601 time zone offset format](https://learn.microsoft.com/pt-br/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                        lastChange?: string;
                        /** @description Order's group ID. */
                        orderGroup?: string;
                        /** @description Email of the store's employee responsible for managing the order. */
                        followUpEmail?: string;
                        /** @description Transactional message sent most recently. */
                        lastMessage?: string | null;
                        /** @description Account host name, which is the [domain](https://help.vtex.com/en/tutorial/configuring-the-store-domain--tutorials_2450#store-address-structure) registered in **Account Settings**. */
                        hostname?: string;
                        /** @description When set as `true`, the order's payment has been settled, and when set as `false`, it has not been settled yet. */
                        isCompleted?: boolean;
                        /** @description Rounding error total amount, if it applies. For example, in orders with a discount over non-integer multiplier items, the rounding price is performed per item, not after the sum of all items. That can cause a difference in the total discount amount, which is informed in this field. */
                        roundingError?: number;
                        /** @description Unique identifier of the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields). */
                        orderFormId?: string;
                        /** @description When set as `true`, the order can be canceled, and when set as `false`, it is no longer possible to cancel the order. */
                        allowCancellation?: boolean;
                        /** @description When set as `true`, the order can be edited, and when set as `false`, it is no longer possible to edit the order. */
                        allowEdition?: boolean;
                        /** @description This field is set as `true` when the order was placed via [VTEX Sales App](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc) and `false` when it was not. */
                        isCheckedIn?: boolean;
                        /** @description Authorized order date in [ISO 8601 time zone offset format](https://learn.microsoft.com/pt-br/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                        authorizedDate?: string;
                        /** @description Order's invoice date in [ISO 8601 time zone offset format](https://learn.microsoft.com/pt-br/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                        invoicedDate?: string | null;
                        /** @description Reason for order cancellation. */
                        cancelReason?: string | null;
                        /** @description If the field `isCheckedIn` is set as `true`, the `checkedInPickupPointId` will retrieve the ID of the physical store where the order was made. */
                        checkedInPickupPointId?: string;
                        /** @description List with details about orders' totals. */
                        totals?: {
                            /** @description Code that identifies if the information is about `Items`, `Discounts`, `Shipping`, `Tax` or `Change`. */
                            id?: string;
                            /** @description Name of the total count. */
                            name?: string;
                            /** @description Total value in cents of `Items`, `Discounts`, `Shipping`, `Tax` or `Change`. */
                            value?: number;
                        }[];
                        /** @description List of all the sellers associated with the order. */
                        sellers?: {
                            /** @description Unique identifier of the seller. */
                            id?: string;
                            /** @description Seller's name. */
                            name?: string;
                            /** @description URL of the seller's logo. */
                            logo?: string;
                            /** @description URL of the endpoint for fulfillment of seller's orders. */
                            fulfillmentEndpoint?: string;
                        }[];
                        /** @description Information about customer's preferences. */
                        clientPreferencesData?: {
                            /** @description Language code of the customer's preferred language while accessing the store. */
                            locale?: string;
                            /** @description When set as `true`, this field indicates that the customer opted to receive the newsletter, and when set as `false`, it means they did not. */
                            optinNewsLetter?: boolean;
                        };
                        /** @description Information about order cancellation, when applicable. */
                        cancellationData?: {
                            /** @description Indicates if the order cancellation was requested by the customer (`true`) or not (`false`). */
                            RequestedByUser?: boolean | null;
                            /** @description Indicates if the order cancellation was made by the system (`true`) or not (`false`). This type of order cancellation happens in [incomplete orders](https://help.vtex.com/en/tutorial/how-incomplete-orders-work--tutorials_294), for example. */
                            RequestedBySystem?: boolean | null;
                            /** @description Indicates if the order cancellation was requested by the seller (`true`) or not (`false`). */
                            RequestedBySellerNotification?: boolean | null;
                            /** @description Indicates if the order cancellation was requested by the payment gateway (`true`) or not (`false`). */
                            RequestedByPaymentNotification?: boolean | null;
                            /** @description Reason why the order was cancelled. */
                            Reason?: string | null;
                            /** @description Order cancellation date in [UTC time format](https://learn.microsoft.com/pt-br/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DDThh:mm:ssZ`. */
                            CancellationDate?: string | null;
                        } | null;
                        /** @description Order's tax information. */
                        taxData?: {
                            /** @description Indicates if the taxes were designated by the marketplace (`true`) or not (`false`). */
                            areTaxesDesignatedByMarketplace?: boolean;
                            /** @description Array with taxes' details. */
                            taxInfoCollection?: {
                                /** @description Item's index number. */
                                itemIndex?: number;
                                /** @description Alphanumeric sequence that identifies an SKU. */
                                sku?: string;
                                /** @description Items' price tag information with original taxes calculated at order placement. */
                                priceTags?: {
                                    /** @description Price tag identifier code. */
                                    identifier?: string;
                                    /** @description Defines if the price tag is a percentage (`true`) or not (`false`). */
                                    isPercentual?: boolean;
                                    /** @description Price tag name. */
                                    name?: string;
                                    /** @description Price tag value in cents. */
                                    value?: number;
                                    /** @description Price tag raw value that can contain up to five decimals, separated by a period. */
                                    rawValue?: number;
                                }[];
                            }[];
                        } | null;
                        /** @description Information about [subscriptions](https://help.vtex.com/tutorial/how-subscriptions-work--frequentlyAskedQuestions_4453), when applicable. */
                        subscriptionData?: {
                            /** @description ID of the subscription's group. If this field returns `null` and the `executionCount` is `0`, the order is the first one with subscriptions. */
                            SubscriptionGroupId?: string | null;
                            /** @description List with subscriptions details. */
                            Subscriptions?: {
                                /** @description Position of the order in the subscription cycle. The first order will have the value `0`, the second will have the value `1`, and so on. */
                                ExecutionCount?: number;
                                /**
                                 * @deprecated
                                 * @description Value of the order when the customer signed up for subscriptions. Subscriptions created via Admin or APIs do not have an original order, so the field returns `0.0`. This field was valid only for Subscriptions v2 and is deprecated in Subscriptions v3.
                                 */
                                PriceAtSubscriptionDate?: number;
                                /** @description Each item in the subscription order is identified by an index. The position starts in`0`, followed by `1`, `2`, and so on. */
                                ItemIndex?: number;
                                /** @description Information about the subscription's validility and frequency. */
                                Plan?: {
                                    /** @description Type of plan. */
                                    type?: string;
                                    /** @description Information about subscriptions' recurrence. */
                                    frequency?: {
                                        /** @description Defines the subscriptions recurrence period. The possible values are `DAILY`,`WEEKLY`, `MONTHLY` and `YEARLY`. */
                                        periodicity?: string;
                                        /** @description Number of the time interval configured between subscription orders, which depends on the periodicity. For a `DAILY` periodicity, the field's value will correspond to days, for `MONTHLY` to months, and so on. */
                                        interval?: number;
                                    };
                                    /** @description Information about the period during which the subscription will be valid. */
                                    validity?: {
                                        /** @description Subscriptions' beginning date in [UTC time format](https://learn.microsoft.com/pt-br/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DDThh:mm:ssZ`. */
                                        begin?: string;
                                        /** @description Subscriptions' ending date with the format `yyyy-mm-ddThh:mm:ss`. */
                                        end?: string | null;
                                    };
                                };
                            }[] | null;
                        } | null;
                        /** @description Metadata information about the order's items. */
                        itemMetadata?: {
                            /** @description List of order items' metadata. */
                            Items?: {
                                /** @description Unique numerical identifier of the SKU. */
                                Id?: string;
                                /** @description Unique identifier of the SKU seller. */
                                Seller?: string;
                                /** @description Name of the item as displayed to customers in the storefront. */
                                Name?: string;
                                /** @description Name of the SKU corresponding to the item. */
                                SkuName?: string;
                                /** @description ID of the product associated with the item. */
                                ProductId?: string;
                                /** @description SKU reference ID. */
                                RefId?: string;
                                /** @description SKU EAN. */
                                Ean?: string;
                                /** @description SKU image URL. */
                                ImageUrl?: string;
                                /** @description SKU slug. */
                                DetailUrl?: string;
                                /** @description [Assembly options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH) information related to the item, if there are any. */
                                AssemblyOptions?: {
                                    /** @description Assembly option ID. */
                                    Id?: string;
                                    /** @description Assembly option name. */
                                    Name?: string;
                                    /** @description If this field is set as `true`, when the customer purchases the item sending the attachment is required, and when set as `false`, sending the attachment is optional. */
                                    Required?: boolean;
                                    /** @description Assembly option content. */
                                    InputValues?: {
                                        [key: string]: unknown;
                                    } | null;
                                    /** @description Assembly option composition. */
                                    Composition?: {
                                        [key: string]: unknown;
                                    } | null;
                                }[] | null;
                            }[];
                        };
                        /** @description Details about the marketplace related to the order. */
                        marketplace?: {
                            /** @description Marketplace base URL. */
                            baseURL?: string;
                            /** @description Defines if it is a [VTEX certified marketplace](https://help.vtex.com/en/tutorial/marketplace-strategies-at-vtex--tutorials_402#integrating-with-a-certified-marketplace) (`true`) or not (`false`). */
                            isCertified?: boolean | null;
                            /** @description Marketplace name. */
                            name?: string;
                        };
                        /** @description Store's configuration data, stored in [Account settings](https://help.vtex.com/en/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq). */
                        storePreferencesData?: {
                            /** @description Three-digit country code, in [ISO 3166 ALPHA-3](https://www.iban.com/country-codes) format. */
                            countryCode?: string;
                            /** @description Currency code in [ISO 4217](https://www.iban.com/currency-codes) format. */
                            currencyCode?: string;
                            /** @description Object with currency format details. */
                            currencyFormatInfo?: {
                                /** @description Quantity of currency decimal digits. */
                                CurrencyDecimalDigits?: number;
                                /** @description Defines what currency decimal separator will be applied. */
                                CurrencyDecimalSeparator?: string;
                                /** @description Defines what currency group separator will be applied. */
                                CurrencyGroupSeparator?: string;
                                /** @description Defines how many characters will be grouped. */
                                CurrencyGroupSize?: number;
                                /** @description Defines if all prices will be initiated with the currency symbol (`true`) or not (`false`). */
                                StartsWithCurrencySymbol?: boolean;
                            };
                            /** @description Currency Locale Code in [LCID](https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a) format. */
                            currencyLocale?: number;
                            /** @description Currency symbol. */
                            currencySymbol?: string;
                            /** @description Time zone from where the order was made. */
                            timeZone?: string;
                        };
                        /** @description Custom information in the order. This field is useful for storing data not included in other fields, for example, a message for a gift or a name to be printed in a shirt. */
                        customData?: string | null;
                        /** @description Information about commercial conditions. */
                        commercialConditionData?: string | null;
                        /** @description Optional field with additional information about the order. This field must be filled in using the following format:
                         *
                        ```
                         *
                        {
                         *         "fieldExample": "ValueExample"
                         *       }
                         *
                        ```
                         *
                        . */
                        openTextField?: string | null;
                        /** @description Order's invoice information. */
                        invoiceData?: {
                            /** @description Invoice information. */
                            address?: {
                                /** @description Postal code of the order's invoice address. */
                                postalCode?: string;
                                /** @description City of the order's invoice address. */
                                city?: string;
                                /** @description State of the order's invoice address. */
                                state?: string;
                                /** @description Three-digit country code of the order's invoice address in [ISO 3166 ALPHA-3](https://www.iban.com/country-codes) format. */
                                country?: string;
                                /** @description Street of the order's invoice address. */
                                street?: string;
                                /** @description Number of the building of the order's invoice address. */
                                number?: string;
                                /** @description Neighborhood of the order's invoice address. */
                                neighborhood?: string;
                                /** @description Complement to the order's invoice address, such as apartment number. */
                                complement?: string | null;
                                /** @description Additional information to help locate the order's invoice address. */
                                reference?: string | null;
                            };
                            /** @description Number of settled invoice. */
                            settleInvoices?: string[];
                        } | null;
                        /** @description Information about changes in the order. */
                        changesAttachment?: {
                            /** @description Object ID, the expected value is `changeAttachment`. */
                            id?: string;
                            /** @description Order change information. */
                            changesData?: {
                                /** @description Text explaining why there was a change in the order. This information may be shown to the customer in the UI or transactional emails. */
                                reason?: string;
                                /** @description Order change discount value. */
                                discountValue?: number;
                                /** @description Order change increment value. */
                                incrementValue?: number;
                                /** @description Information about items added to the order. */
                                itemsAdded?: {
                                    /** @description SKU ID of the item added. */
                                    id?: string;
                                    /** @description Name of the item added. */
                                    name?: string;
                                    /** @description Number of units added. */
                                    quantity?: number;
                                    /** @description Total value increased to the order. */
                                    price?: number;
                                    /** @description Unit multiplier of the item added. */
                                    unitMultiplier?: string | null;
                                }[] | null;
                                /** @description Information about items removed from the order. */
                                itemsRemoved?: {
                                    /** @description SKU ID of the item removed. */
                                    id?: string;
                                    /** @description Name of the item removed. */
                                    name?: string;
                                    /** @description Number of units removed. */
                                    quantity?: number;
                                    /** @description Total value decreased from the order. */
                                    price?: number;
                                    /** @description Unit multiplier of the item removed from the order. */
                                    unitMultiplier?: string | null;
                                }[] | null;
                                /** @description Information about the receipt for changed orders. */
                                receipt?: {
                                    /** @description Date when the receipt was created. */
                                    date?: string;
                                    /** @description Order ID. */
                                    orderId?: string;
                                    /** @description Receipt's unique identifier code. */
                                    receipt?: string;
                                };
                            }[] | null;
                        };
                        /** @description Information about the call center operator responsible for the order. */
                        callCenterOperatorData?: {
                            /** @description Call center operator identification code. */
                            id?: string;
                            /** @description Call center operator email. */
                            email?: string;
                            /** @description Call center operator user name. */
                            userName?: string;
                        } | null;
                        /** @description Information about shipping packages, created after order invoicing. */
                        packageAttachment?: {
                            /** @description List with packages' information. */
                            packages?: {
                                /** @description Information about package items. */
                                items?: {
                                    /** @description Package item index nunmber. */
                                    itemIndex?: number;
                                    /** @description Package item quantity. */
                                    quantity?: number;
                                    /** @description Package item price in cents. */
                                    price?: number;
                                    /** @description Package item description. */
                                    description?: string | null;
                                    /** @description Package item unit multiplier. */
                                    unitMultiplier?: number | null;
                                }[];
                                /** @description Name of the [carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) responsible for the package shipping. */
                                courier?: string | null;
                                /** @description Unique identification code of the package invoice. */
                                invoiceNumber?: string;
                                /** @description Package invoice value in cents. */
                                invoiceValue?: number;
                                /** @description Package invoice URL. */
                                invoiceUrl?: string | null;
                                /** @description Package invoice issuance date in [ISO 8601 time zone offset format](https://learn.microsoft.com/pt-br/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                                issuanceDate?: string;
                                /** @description Package [tracking number](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-). */
                                trackingNumber?: string | null;
                                /** @description Package invoice key. */
                                invoiceKey?: string | null;
                                /** @description Package tracking URL. */
                                trackingUrl?: string | null;
                                /** @description Package invoice text in [xml format](https://help.vtex.com/en/tutorial/configuring-xml--tutorials_242). This field is important for stores integrated with [external marketplaces](https://developers.vtex.com/docs/guides/external-marketplace-integration-guide). */
                                embeddedInvoice?: string;
                                /** @description Package invoice type, which can be:
                                 *     - `Output`: selling order invoice.
                                 *     - `Input`: returning items invoice. */
                                type?: string;
                                /** @description [Carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) package shipping information. */
                                courierStatus?: {
                                    /** @description Defines if a carrier was assigned for order shipping (`ok`) or not (`null`). */
                                    status?: string | null;
                                    /** @description Defines if the carrier has already delivered the package (`true`) or not (`false`). */
                                    finished?: boolean;
                                    /** @description Package delivery date in [ISO 8601 time zone offset format](https://learn.microsoft.com/en-us/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                                    deliveredDate?: string;
                                    /** @description Package tracking information. */
                                    data?: {
                                        /** @description Package tracking date since last update in [ISO 8601 time zone offset format](https://learn.microsoft.com/en-us/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                                        lastChange?: string;
                                        /** @description Package current tracking city. */
                                        city?: string;
                                        /** @description Package current tracking state in two-digit code format. */
                                        state?: string;
                                        /** @description Package tracking description. */
                                        description?: string;
                                        /** @description Package tracking creation date in [ISO 8601 time zone offset format](https://learn.microsoft.com/en-us/rest/api/storageservices/formatting-datetime-values), as in `YYYY-MM-DD hh:mm:ss[.nnnnnnn]+hh:mm`. */
                                        createDate?: string;
                                    }[];
                                } | null;
                                /** @description [CFOP](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/facilitacao/anexo-ecf-cfop) (_Código Fiscal de Operação e Prestação_) is a Brazilian fiscal code of operations and services that classifies business transactions types. */
                                cfop?: string | null;
                                /** @description Information about a value being returned to the customer. This field applies only to invoices with the `Input` type because it relates to returning items. */
                                restitutions?: {
                                    /** @description Customer refund details. */
                                    Refund?: {
                                        /** @description Refund value in cents. */
                                        value?: number;
                                        /** @description Refund involving [Gift Card](https://developers.vtex.com/docs/guides/gift-card-integration-guide). */
                                        giftCardData?: string | null;
                                        /** @description Information about the items being returned. */
                                        items?: {
                                            /** @description Defines if the refund includes freight values (`true`) or not (`false`). */
                                            useFreight?: boolean | null;
                                            /** @description Defines if there are compensated unit tags in the package (`true`) or not (`false`). */
                                            isCompensation?: boolean;
                                            /** @description Compensational refund value in cents. */
                                            compensationValue?: number;
                                            /** @description SKU unique identification code of the returned item. */
                                            id?: string;
                                            /** @description Number of items being returned. */
                                            quantity?: number;
                                            /** @description Returned item price in cents. */
                                            price?: number;
                                            /** @description Customer reason for returning the item. */
                                            description?: string;
                                        }[] | null;
                                    };
                                };
                                /** @description Indicates the number of boxes (volumes) needed to contain the package items. For example, two refrigerators do not fit in a single volume, so this field would have value `2`. */
                                volumes?: number;
                                /** @description Defines if the package items' value should be inferred by the invoice value (`true`) or not (`false`). */
                                EnableInferItems?: boolean | null;
                            }[];
                        } | null;
                        /** @description Detailed information about payments. */
                        paymentData?: {
                            /** @description Transactions details. */
                            transactions?: {
                                /** @description When this field is set as `true`, the payment is active, and when it is `false`, the payment is inactive. */
                                isActive?: boolean;
                                /** @description ID of the transaction. */
                                transactionId?: string;
                                /** @description Account name of the merchant that will receive the payment. */
                                merchantName?: string;
                                /** @description Detailed information about payments. */
                                payments?: {
                                    /** @description VTEX payment unique identifier. */
                                    id?: string;
                                    /** @description Payment system ID. */
                                    paymentSystem?: string;
                                    /** @description Payment system name. */
                                    paymentSystemName?: string;
                                    /** @description Payment value in cents. */
                                    value?: number;
                                    /** @description Number of payment installments. */
                                    installments?: number;
                                    /** @description Payment reference value in cents. */
                                    referenceValue?: number;
                                    /** @description Name of the card owner. */
                                    cardHolder?: string | null;
                                    /** @description Card number. */
                                    cardNumber?: string | null;
                                    /** @description Card first digits. */
                                    firstDigits?: string | null;
                                    /** @description Card last digits. */
                                    lastDigits?: string | null;
                                    /** @description Card Verification Value (CVV2) is a security code used by payment processors to reduce fraudulent credit and debit card transactions. */
                                    cvv2?: string | null;
                                    /** @description Card expiration month, in 2-digit format. */
                                    expireMonth?: string | null;
                                    /** @description Card expiration year, in 4-digit format. */
                                    expireYear?: string | null;
                                    /** @description Payment URL. */
                                    url?: string | null;
                                    /** @description Gift Card ID. */
                                    giftCardId?: string | null;
                                    /** @description Gift Card name. */
                                    giftCardName?: string | null;
                                    /** @description Gift Card caption. */
                                    giftCardCaption?: string | null;
                                    /** @description Code for the customer to use the Gift Card. */
                                    redemptionCode?: string | null;
                                    /** @description Transaction payment method, which can have one of the following values:
                                     *
                                     *     - **Credit card:** `creditCard`
                                     *
                                     *     - **Debid card:** `debitCard`
                                     *
                                     *     - **Bank invoice:** `bankInvoice`
                                     *
                                     *     - **Promissory:** `promissory`
                                     *
                                     *     - **Gift card:** `giftCard`
                                     *
                                     *     - **Pix:** `instantPayment`. */
                                    group?: string;
                                    /** @description Provider's unique identifier for the transaction. */
                                    tid?: string | null;
                                    /** @description Payment due date, in `MM/YY` format. */
                                    dueDate?: string | null;
                                    /** @description Information about the connector responses. */
                                    connectorResponses?: {
                                        /** @description Connector's authorization ID. */
                                        authId?: string;
                                        /** @description Provider's unique identifier for the transaction. */
                                        Tid?: string;
                                        /** @description Provider's operation/error code to be logged. */
                                        ReturnCode?: string | null;
                                        /** @description Provider's operation/error message to be logged. */
                                        Message?: string | null;
                                    };
                                    /** @description Gift Card provider ID. */
                                    giftCardProvider?: string;
                                    /** @description Defines if the Gift Card is a discount over the price (`true`) or not (`false`). */
                                    giftCardAsDiscount?: boolean;
                                    /** @description Koin connector URL. */
                                    koinUrl?: string | null;
                                    /** @description Payment account ID. */
                                    accountId?: string;
                                    /** @description Retrieves the main account ID if the payment was made in a subaccount. */
                                    parentAccountId?: string | null;
                                    /** @description Bank issued invoice numeric sequence. */
                                    bankIssuedInvoiceIdentificationNumber?: string | null;
                                    /** @description Bank issued invoice numeric sequence formatted as customers see. */
                                    bankIssuedInvoiceIdentificationNumberFormatted?: string | null;
                                    /** @description Bank issued invoice bar code number. */
                                    bankIssuedInvoiceBarCodeNumber?: string | null;
                                    /** @description Bank issued invoice bar code type. */
                                    bankIssuedInvoiceBarCodeType?: string | null;
                                    /** @description Billing address information. */
                                    billingAddress?: {
                                        /** @description Billing address three-digit country code, in [ISO 3166 ALPHA-3](https://www.iban.com/country-codes) format. */
                                        country?: string;
                                        /** @description Billing address street. */
                                        street?: string;
                                        /** @description Billing address number. */
                                        number?: string;
                                        /** @description Billing address complement. */
                                        complement?: string;
                                        /** @description Billing address neighborhood. */
                                        neighborhood?: string;
                                        /** @description Billing address postal code. */
                                        postalCode?: string;
                                        /** @description Billing address city. */
                                        city?: string;
                                        /** @description Billing address state/province. */
                                        state?: string;
                                    } | null;
                                }[];
                            }[];
                            /** @description Array with information about Gift Cards. */
                            giftCards?: string[];
                        };
                        /** @description Shipping information. */
                        shippingData?: {
                            /** @description Object ID, the expected value is `shippingData`. */
                            id?: string;
                            /** @description Shipping address details. */
                            address?: {
                                /** @description Type of address. For example, `residential` or `pickup`. */
                                addressType?: string;
                                /** @description Full name of the order receiver. */
                                receiverName?: string;
                                /** @description Shipping address ID. */
                                addressId?: string;
                                /** @description Shipping address version ID. */
                                versionId?: string | null;
                                /** @description Shipping address entity ID. */
                                entityId?: string | null;
                                /** @description Shipping address postal code. */
                                postalCode?: string;
                                /** @description Shipping address city. */
                                city?: string;
                                /** @description Shipping address state/province. */
                                state?: string;
                                /** @description Shipping address three-digit country code in [ISO 3166 ALPHA-3](https://www.iban.com/country-codes) format. */
                                country?: string;
                                /** @description Shipping address street. */
                                street?: string;
                                /** @description Shipping address number. */
                                number?: string;
                                /** @description Shipping address neighborhood. */
                                neighborhood?: string;
                                /** @description Shipping address complement. */
                                complement?: string;
                                /** @description Shipping address additional information. */
                                reference?: string | null;
                                /** @description Pair of geocoordinates, first longitude then latitude. */
                                geoCoordinates?: number[];
                            };
                            /** @description Array of objects containing item's logistics information. */
                            logisticsInfo?: {
                                /** @description Index of the item starting from 0. */
                                itemIndex?: number;
                                /** @description Selected shipping option. */
                                selectedSla?: string;
                                /** @description Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time. */
                                lockTTL?: string;
                                /** @description Shipping price for the item in cents. Does not account for the whole order's shipping price. */
                                price?: number;
                                /** @description SKU [list price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#list-price). */
                                listPrice?: number;
                                /** @description Item's selling price. */
                                sellingPrice?: number;
                                /** @description [Scheduled delivery](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) window information, if it applies to the item. */
                                deliveryWindow?: string | null;
                                /** @description [Carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) company's name. */
                                deliveryCompany?: string;
                                /** @description Total shipping estimate time in days. For instance, three business days is represented `3bd`. */
                                shippingEstimate?: string;
                                /** @description Shipping estimate date, defined after the confirmation of the order. */
                                shippingEstimateDate?: string;
                                /** @description Service Level Agreement (SLA) corresponding to [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140). */
                                slas?: {
                                    /** @description ID of the shipping method used in the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140). */
                                    id?: string;
                                    /** @description Name of the shipping policy. */
                                    name?: string;
                                    /** @description Total shipping estimate time in days. For instance, three business days is represented `3bd`. */
                                    shippingEstimate?: string;
                                    /** @description [Scheduled delivery window](https://help.vtex.com/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi) information, if it applies to the item. */
                                    deliveryWindow?: string | null;
                                    /** @description Shipping price for the item in cents. Does not account for the whole order's shipping price. */
                                    price?: number;
                                    /** @description Defines if the delivery channel is `delivery` or `pickup-in-point`. */
                                    deliveryChannel?: string;
                                    /** @description Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R). */
                                    pickupStoreInfo?: {
                                        /** @description Additional information about the pickup point. */
                                        additionalInfo?: string | null;
                                        /** @description Pickup point address details. */
                                        address?: {
                                            /** @description Type of address. For example, `residential` or `pickup`. */
                                            addressType?: string | null;
                                            /** @description Full name of the order receiver. */
                                            receiverName?: string | null;
                                            /** @description Pickup point address ID. */
                                            addressId?: string | null;
                                            /** @description Pickup point address version ID. */
                                            versionId?: string | null;
                                            /** @description Pickup point address entity ID. */
                                            entityId?: string | null;
                                            /** @description  Pickup point postal code. */
                                            postalCode?: string | null;
                                            /** @description Pickup point address city. */
                                            city?: string | null;
                                            /** @description Pickup point address state/province. */
                                            state?: string | null;
                                            /** @description Pickup point address three-digit country code in [ISO 3166 ALPHA-3](https://www.iban.com/country-codes) format. */
                                            country?: string | null;
                                            /** @description Pickup point address street. */
                                            street?: string | null;
                                            /** @description Pickup point address number. */
                                            number?: string | null;
                                            /** @description Pickup point address neighborhood. */
                                            neighborhood?: string | null;
                                            /** @description Pickup point address complement. */
                                            complement?: string | null;
                                            /** @description Pickup point address additional information. */
                                            reference?: string | null;
                                            /** @description Pair of geocoordinates, first longitude then latitude. */
                                            geoCoordinates?: (number | null)[] | null;
                                        } | null;
                                        /** @description [Loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) ID related to the delivery or the pickup point. */
                                        dockId?: string | null;
                                        /** @description Name of the pickup point displayed at checkout. */
                                        friendlyName?: string | null;
                                        /** @description Defines if the type of shipping is pickup (`true`) or not (`false`). */
                                        isPickupStore?: boolean;
                                    };
                                    /** @description Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy. */
                                    polygonName?: string | null;
                                    /** @description Logistics [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) waiting time of the SLA. */
                                    lockTTL?: string;
                                    /** @description [Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) ID related to the SLA. */
                                    pickupPointId?: string;
                                    /** @description Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`. */
                                    transitTime?: string;
                                    /** @description Distance in kilometers between the pickup point and the customer's address. The distance is measured as a straight line. */
                                    pickupDistance?: number;
                                }[];
                                /** @description List of countries of the shipping address. */
                                shipsTo?: string[];
                                /** @description Information about delivery IDs. */
                                deliveryIds?: {
                                    /** @description [Carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE)'s ID. */
                                    courierId?: string;
                                    /** @description Carrier's name. */
                                    courierName?: string;
                                    /** @description ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj). */
                                    dockId?: string;
                                    /** @description Quantity of items. */
                                    quantity?: number;
                                    /** @description ID of the [warehouse](https://help.vtex.com/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb). */
                                    warehouseId?: string;
                                    /** @description Name of the account's [carrier](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE). */
                                    accountCarrierName?: string;
                                    /** @description Information about [kits](https://help.vtex.com/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28), if there are any. */
                                    kitItemDetails?: string[] | null;
                                }[];
                                /** @description List of delivery channels associated with the trade policy. */
                                deliveryChannels?: {
                                    /** @description Delivery channel's shipping type, which can be `delivery` or `pickup-in-point`. */
                                    id?: string;
                                    /** @description Stock check for an SKU availability. */
                                    stockBalance?: number;
                                }[];
                                /** @description Defines if the delivery channel is `delivery` or `pickup-in-point`. */
                                deliveryChannel?: string;
                                /** @description Detailed information about a [pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R). */
                                pickupStoreInfo?: {
                                    /** @description Additional information about the pickup point. */
                                    additionalInfo?: string | null;
                                    /** @description Pickup point's address. */
                                    address?: string | null;
                                    /** @description ID of the [loading dock](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) related to the delivery or the pickup point. */
                                    dockId?: string | null;
                                    /** @description Name of the pickup point displayed at checkout. */
                                    friendlyName?: string | null;
                                    /** @description Defines if the type of shipping is pickup (`true`) or not (`false`). */
                                    isPickupStore?: boolean;
                                } | null;
                                /** @description Address ID. */
                                addressId?: string | null;
                                /** @description Shipping address version ID. */
                                versionId?: string | null;
                                /** @description Shipping address entity ID. */
                                entityId?: string | null;
                                /** @description Name of the [polygon](https://help.vtex.com/en/tutorial/registering-geolocation/) associated with the shipping policy. */
                                polygonName?: string | null;
                                /** @description [Pickup point](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R)'s ID. */
                                pickupPointId?: string | null;
                                /** @description Duration in business days of the time the carrier takes in transit to fulfill the order. For example, three business days is represented `3bd`. */
                                transitTime?: string | null;
                            }[];
                            /** @description List containing order shipping label information. */
                            trackingHints?: {
                                /** @description Tracking ID. */
                                trackingId?: string;
                                /** @description [Carrier](https://help.vtex.com/en/tutorial/carriers-on-vtex--7u9duMD5UQa2QQwukAWMcE) name. */
                                courierName?: string;
                                /** @description Tracking URL. */
                                trackingUrl?: string;
                                /** @description Tracking label. */
                                trackingLabel?: string;
                            }[] | null;
                            /** @description Information about selected adresses. */
                            selectedAddresses?: {
                                /** @description Selected address ID. */
                                addressId?: string;
                                /** @description Shipping address version ID of the selected address. */
                                versionId?: string | null;
                                /** @description Shipping address entity ID of the selected address. */
                                entityId?: string | null;
                                /** @description Selected adress's shipping type, which can be `pickup`, `residential`, `invoice`, `search`, `inStore`, `commercial` or `giftRegistry`. */
                                addressType?: string;
                                /** @description Full name of the person who is going to receive the order in the selected address. */
                                receiverName?: string;
                                /** @description Street of the selected address. */
                                street?: string;
                                /** @description Number of the building, house or apartment of the selected address. */
                                number?: string;
                                /** @description Complement to the selected address if it applies. */
                                complement?: string;
                                /** @description Neighborhood of the selected address. */
                                neighborhood?: string;
                                /** @description Postal code of the selected address. */
                                postalCode?: string;
                                /** @description City of the selected address. */
                                city?: string;
                                /** @description State of the selected address. */
                                state?: string;
                                /** @description Three-digit country code of the selected address, in [ISO 3166 ALPHA-3](https://www.iban.com/country-codes) format. */
                                country?: string;
                                /** @description Complement to help locate the selected address. */
                                reference?: string | null;
                                /** @description List with the selected address's geocoordinates, first longitude then latitude. */
                                geoCoordinates?: number[];
                            }[];
                            /** @description Array with customer contact information. */
                            contactInformation?: {
                                /** @description Customer contact ID. */
                                id?: string;
                                /** @description Customer contact email. */
                                email?: string;
                                /** @description Customer contact first name. */
                                firstName?: string;
                                /** @description Customer contact last name. */
                                lastName?: string;
                                /** @description Customer contact phone number. */
                                phone?: string;
                                /** @description Customer contact document ID. */
                                document?: string;
                                /** @description Customer contact document type. */
                                documentType?: string;
                                /** @description Entity identification code. */
                                entityId?: string;
                                /** @description Version identification code. */
                                versionId?: string;
                            }[];
                        };
                        /** @description Information on promotions and taxes that apply to the order. */
                        ratesAndBenefitsData?: {
                            /** @description ID of the rate or benefit. */
                            id?: string;
                            /** @description Information about order's promotions and taxes identifiers. */
                            rateAndBenefitsIdentifiers?: {
                                /** @description Promotion or tax description. */
                                description?: string | null;
                                /** @description Defines if the promotion or tax is cumulative (`true`) or not (`false`). */
                                featured?: boolean;
                                /** @description Promotion or tax ID. */
                                id?: string;
                                /** @description Promotion or tax name. */
                                name?: string;
                                /** @description Informs the criteria and conditions fulfilled so the promotion became valid. */
                                matchedParameters?: {
                                    [key: string]: unknown;
                                };
                                /** @description Object containing promotion or tax additional information. For example { Free shipping: 100,00 }. */
                                additionalInfo?: Record<string, never>;
                            }[];
                        };
                        /** @description Information about promotions and marketing. For example, coupon tracking information and internal or external UTMs. */
                        marketingData?: {
                            /** @description Object ID. The expected value is `marketingData`. */
                            id?: string;
                            /** @description Value of the `utm_source` parameter of the URL that led to the request. */
                            utmSource?: string;
                            /** @description UTM Source Parameters. */
                            utmPartner?: string;
                            /** @description Value of the `utm_medium` parameter of the URL that led to the request. */
                            utmMedium?: string;
                            /** @description Value of the `utm_campaign` parameter of the URL that led to the request. */
                            utmCampaign?: string;
                            /** @description Coupon code. */
                            coupon?: string;
                            /** @description Internal UTM value `utmi_cp`. */
                            utmiCampaign?: string;
                            /** @description Internal UTM value `utmi_p`. */
                            utmipage?: string;
                            /** @description Internal UTM value `utmi_pc`. */
                            utmiPart?: string;
                            /** @description Marketing tags information. This field can be used to register campaign data or informative tags regarding promotions. */
                            marketingTags?: string[];
                        } | null;
                        /** @description Information about [gift list](https://developers.vtex.com/docs/guides/creating-gift-lists). */
                        giftRegistryData?: {
                            /** @description Gift list ID. */
                            giftRegistryId?: string;
                            /** @description [Gift list type](https://help.vtex.com/en/tutorial/creating-a-type-of-list). */
                            giftRegistryType?: string;
                            /** @description Gift list type name. */
                            giftRegistryTypeName?: string;
                            /** @description Gift list shipping address ID. */
                            addressId?: string;
                            /** @description Gift list description. */
                            description?: string;
                        } | null;
                        /** @description Object with information on the client's profile. */
                        clientProfileData?: {
                            /** @description Object ID, the expected value is `clientProfileData`. */
                            id?: string;
                            /** @description Customer email. */
                            email?: string;
                            /** @description Customer first name. */
                            firstName?: string;
                            /** @description Customer last name. */
                            lastName?: string;
                            /** @description Type of the document informed by the customer. */
                            documentType?: string;
                            /** @description Document identification code informed by the customer. */
                            document?: string;
                            /** @description Customer phone number. */
                            phone?: string;
                            /** @description If the customer is a legal entity, this field includes the corporate name. */
                            corporateName?: string | null;
                            /** @description If the customer is a legal entity, this field includes the trade name. */
                            tradeName?: string | null;
                            /** @description If the customer is a legal entity, this field includes the corporate document. */
                            corporateDocument?: string | null;
                            /** @description If the customer is a legal entity, this field includes the state inscription. */
                            stateInscription?: string | null;
                            /** @description If the customer is a legal entity, this field includes the company's phone number. */
                            corporatePhone?: string | null;
                            /** @description Defines if the customer is a legal entity (`true`) or not (`false`). */
                            isCorporate?: boolean;
                            /** @description Customer user profile ID. */
                            userProfileId?: string;
                            /** @description Customer user profile version. */
                            userProfileVersion?: string | null;
                            /** @description Customer class identification. */
                            customerClass?: string | null;
                            /** @description Customer code. */
                            customerCode?: string | null;
                        };
                        /** @description Information about order's items. */
                        items?: {
                            /** @description Alphanumeric sequence that identifies an SKU in a given order. */
                            uniqueId?: string;
                            /** @description Unique SKU identifier. */
                            id?: string;
                            /** @description ID of the product associated with the item. */
                            productId?: string;
                            /** @description EAN of the SKU. */
                            ean?: string | null;
                            /** @description Reservation ID. */
                            lockId?: string;
                            /** @description Item attachment information. */
                            itemAttachment?: {
                                /** @description Item attachment custom field for content. */
                                content?: Record<string, never>;
                                /** @description Item attachment name. */
                                name?: string | null;
                            };
                            /** @description Array containing information on attachments. */
                            attachments?: string[];
                            /** @description Quantity of items. */
                            quantity?: number;
                            /** @description Seller related to the order. */
                            seller?: string;
                            /** @description Item's name. */
                            name?: string;
                            /** @description Product referencial code associated with the item. */
                            refId?: string;
                            /** @description Item's price. */
                            price?: number;
                            /** @description Item's [list price](https://help.vtex.com/en/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#list-price). */
                            listPrice?: number;
                            /** @description Item's [manual price](https://help.vtex.com/en/tutorial/change-the-price-of-an-item-in-the-shopping-cart--7Cd37aCAmtL1qmoZJJvjNf). */
                            manualPrice?: string | null;
                            /** @description List of objects with item's price modifiers. */
                            priceTags?: string[];
                            /** @description SKU image URL. */
                            imageUrl?: string;
                            /** @description SKU slug. */
                            detailUrl?: string;
                            /** @description Item's components. */
                            components?: string[];
                            /** @description This field groups offerings (services) related to the item and displays their ID and quantity. A gift package is an example of an offering. */
                            bundleItems?: {
                                /** @description Offering ID. */
                                id?: number;
                                /** @description Offering quantity. */
                                quantity?: number;
                            }[];
                            /** @description Array with information about params. */
                            params?: string[];
                            /** @description Item's offerings, which are services related to the item. For example, guarantee or installation. */
                            offerings?: string[];
                            /** @description Array containing attachments details. */
                            attachmentOfferings?: {
                                /** @description Name of the attachment. */
                                name?: string | null;
                                /** @description Defines if the attachment is required (`true`) or not (`false`). */
                                required?: boolean | null;
                                /** @description Schema of the content declared in the field `attachmentOfferings`. */
                                schema?: Record<string, never>;
                            }[] | null;
                            /** @description SKU ID from the seller perspective. */
                            sellerSku?: string;
                            /** @description Date until when the price is going to be valid if there is a promotion. */
                            priceValidUntil?: string | null;
                            /** @description Commission value registered for the seller. */
                            commission?: number;
                            /** @description Item's tax. */
                            tax?: number;
                            /** @description Item's pre sale date. */
                            preSaleDate?: string | null;
                            /** @description Additional information about the item. */
                            additionalInfo?: {
                                /** @description Item's brand name. */
                                brandName?: string;
                                /** @description Item's brand ID. */
                                brandId?: string;
                                /** @description Item's category ID. */
                                categoriesIds?: string;
                                /** @description Items categories information. */
                                categories?: {
                                    /** @description Category ID. */
                                    id?: number;
                                    /** @description Category name. */
                                    name?: string;
                                }[];
                                /** @description All product clusters related to the item. */
                                productClusterId?: string;
                                /** @description Commercial conditions ID. */
                                commercialConditionId?: string;
                                /** @description Item's dimensions. */
                                dimension?: {
                                    /** @description Item's cubic weight. */
                                    cubicweight?: number;
                                    /** @description Item's height. */
                                    height?: number;
                                    /** @description Item's length. */
                                    length?: number;
                                    /** @description Item's weight. */
                                    weight?: number;
                                    /** @description Item's width. */
                                    width?: number;
                                };
                                /** @description Information about services related to the item. For example: guarantee or installation. */
                                offeringInfo?: string | null;
                                /** @description Offering type. */
                                offeringType?: string | null;
                                /** @description Offering type ID. */
                                offeringTypeId?: string | null;
                            };
                            /** @description Item's measurement unit. */
                            measurementUnit?: string;
                            /** @description Item's unit multiplier. */
                            unitMultiplier?: number;
                            /** @description Item's selling price. */
                            sellingPrice?: number;
                            /** @description This field is `true` when the item is a gift in order context and `false` when it is not. */
                            isGift?: boolean;
                            /** @description Item's shipping price. */
                            shippingPrice?: string | null;
                            /** @description Item's reward value. */
                            rewardValue?: number;
                            /** @description Value of the freight commission. */
                            freightCommission?: number;
                            /** @description Item's price information. */
                            priceDefinitions?: {
                                /** @description Details on item's selling price. */
                                sellingPrices?: {
                                    /** @description Total value of items in cents. */
                                    value?: number;
                                    /** @description Quantity of items. */
                                    quantity?: number;
                                }[];
                                /** @description Item's calculated unitary selling price in cents. */
                                calculatedSellingPrice?: number;
                                /** @description Total value of all item's units in cents. */
                                total?: number;
                            };
                            /** @description Item's tax code. */
                            taxCode?: string | null;
                            /** @description Ranking number that shows how related items are indexed in between each other. It starts at `0` as the primary item reference and counts up to `1`, `2`, and so on. For example, a customer bought sunglasses and hired a warranty service. Since the sunglasses are index `0`, the warranty service (the [assembly option](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH)) is index `1` and has the `parentItemIndex` value `0`. This response is `null` for items that are not assembly options. */
                            parentItemIndex?: number | null;
                            /** @description When items are indexed in between each other, this field returns the assembly option ID. This response is `null` for items that are not [assembly options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH). */
                            parentAssemblyBinding?: string | null;
                            /** @description Identification code of the call center operator responsible for the order. */
                            callCenterOperator?: string | null;
                            /**
                             * @deprecated
                             * @description This field identifies the order in the `handling` status in the workflow, and it was used for VTEX internal control.
                             */
                            serialNumbers?: string | null;
                            /** @description Information about items customization. */
                            assemblies?: string[] | null;
                            /** @description Item's cost price. */
                            costPrice?: number;
                        }[];
                        /** @description Array with marketplace items information. */
                        marketplaceItems?: string[];
                    };
                };
            };
        };
    };
    ListOrders: {
        parameters: {
            query?: {
                /** @description You can retrieve orders lists filtering by an `OrderField` combined with an `OrderType`. To do so, you have to concatenate them: `orderBy={{OrderField}},{{OrderType}}`.
                 *     - `OrderField` values accepted: `creationDate`, `orderId`, `items`, `totalValue` and `origin`.
                 *     - `OrderType` values accepted: `asc` and `desc`. */
                orderBy?: string;
                /** @description Define the number of pages you wish to retrieve, restricted to the limit of 30 pages. */
                page?: number;
                /** @description Quantity of orders for each page, the default value is 15 and it goes up to 100 orders per page. Be aware that the limit of retrieval ofthis endpoint is 30 pages. */
                per_page?: number;
                /** @description Filters list to return only orders with non `null` values for the `invoiceInput` field. */
                f_hasInputInvoice?: boolean;
                /** @description This parameter filters using Fulltext and accepts the values below. Be aware that the `+` caracter is not allowed in Fulltext Search.
                 *     - Order Id
                 *     - Client email
                 *     - Client document
                 *     - Client name */
                q?: string;
                /** @description You can filter orders by shipping estimate time in days by concatenating the desired number of days with the sufix `.days`. For example:
                 *     - Next 7 days: `7.days`
                 *     - Tomorrow: `1.days`
                 *     - Today: `0.days`
                 *     - Late: `-1.days` */
                f_shippingEstimate?: string;
                /** @description You can filter orders by invoiced date by concatenating the sufix `invoicedDate:` with the range date in Timestamp format. For example:
                 *     - 1 Day: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`
                 *     - 1 Month: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]`
                 *     - 1 Year: `invoicedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]` */
                f_invoicedDate?: string;
                /** @description You can filter orders by creation date by concatenating the sufix `creationDate:` with the range date in Timestamp format. For example:
                 *     - 1 Day: `creationDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`
                 *     - 1 Month: `creationDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]`
                 *     - 1 Year: `creationDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]` */
                f_creationDate?: string;
                /** @description You can filter orders by creation date by concatenating the sufix `authorizedDate:` with the range date in Timestamp format. For example:
                 *     - 1 Day: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-02T01:59:59.999Z]`
                 *     - 1 Month: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-02-01T01:59:59.999Z]`
                 *     - 1 Year: `authorizedDate:[2022-01-01T02:00:00.000Z TO 2022-01-01T01:59:59.999Z]` */
                f_authorizedDate?: string;
                /** @description You can filter orders by Urchin Tracking Module (UTM) source. */
                f_UtmSource?: string;
                /** @description You can filter orders by using a seller's name. */
                f_sellerNames?: string;
                /** @description You can filter orders by using a Call Center Operator's identification. */
                f_callCenterOperatorName?: string;
                /** @description You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) name. */
                f_salesChannel?: string;
                /** @description You can filter orders by sales channel's ([or trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) ID. */
                salesChannelId?: string;
                /** @description You can filter orders by affiliate ID. */
                f_affiliateId?: string;
                /** @description You can filter orders by the following [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196):
                 *     - `waiting-for-sellers-confirmation`
                 *     - `payment-pending`
                 *     - `payment-approved`
                 *     - `ready-for-handling`
                 *     - `handling`
                 *     - `invoiced`
                 *     - `canceled` */
                f_status?: string;
                /** @description When set as `true`, you retrieve [incomplete orders](https://help.vtex.com/en/tutorial/understanding-incomplete-orders), when set as `false`, you retrieve orders that are not incomplete. */
                incompleteOrders?: boolean;
                /** @description You can filter orders by payment type. */
                f_paymentNames?: string;
                /** @description You can filter orders by rates and benefits (promotions). */
                f_RnB?: string;
                /** @description You can search orders by using one of the following criterias:
                 *     - SKU ID - `sku_Ids&sku_Ids`
                 *     - Gift List ID - `listId&listId`
                 *     - Transaction ID (TID) - `tid&tid`
                 *     - PCI Connector's Transaction ID (TID) - `pci_tid&pci_tid`
                 *     - Payment ID (PID) - `paymentId&paymentId`
                 *     - Connector's NSU - `nsu&nsu` */
                searchField?: string;
                /** @description When set as `true`, this parameter filters orders made via [inStore](https://help.vtex.com/en/tracks/what-is-instore--zav76TFEZlAjnyBVL5tRc), and when set as `false`, it filters orders that were not made via inStore. */
                f_isInstore?: boolean;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example close */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Mon, 13 Feb 2017 15:25:12 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    Vary?: {
                        /** @example Accept-Encoding */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.35.3 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example omsapi-v1.5.135 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": components["schemas"]["ListOrders"];
                };
            };
        };
    };
    StartHandling: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /**
                 * @description Order ID is a unique code that identifies an order.
                 * @example 1172452900788-01
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description [No content](https://httpstatuses.com/204) */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description [Unauthorized](https://httpstatuses.com/401) */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * error
                         * @description Object containing the error information.
                         */
                        error?: {
                            /**
                             * code
                             * @description Error code in the Order Management System.
                             * @example OMS003
                             */
                            code?: string;
                            /**
                             * message
                             * @description Error message.
                             * @example Acesso não autorizado
                             */
                            message?: string;
                            /**
                             * exception
                             * @description Exception.
                             * @example null
                             */
                            exception?: string | null;
                        };
                    };
                };
            };
            /** @description [Forbidden](https://httpstatuses.com/403) */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description [Not found](https://httpstatuses.com/404) */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description [Conflict](https://httpstatuses.com/409) */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * error
                         * @description Object containing the error information.
                         */
                        error?: {
                            /** @description Error code in the Order Management System. */
                            code?: string;
                            /** @description Error message. */
                            message?: string;
                            /** @description Exception. */
                            exception?: string | null;
                        };
                    };
                };
            };
            /** @description [Too many requests](https://httpstatuses.com/429) */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CancelOrder: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /**
                 * @description ID that identifies the order in the seller.
                 * @example 1172452900788-01
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Reason for cancelling the order.
                     * @example Unexpected stock shortage
                     */
                    reason?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Date and time when the notification was received. */
                        date?: string;
                        /** @description Identification of the order in the seller. */
                        orderId?: string;
                        /** @description Protocol code generated by the update. It may be `null`. */
                        receipt?: string;
                    };
                };
            };
            /** @description The credentials are not enabled to access the service. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Value not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many requests. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RegisterChange: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description ID that identifies the order in the seller.
                 * @example 1172452900788-01
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RegisterChangeRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RegisterChange"];
                };
            };
        };
    };
    AddLog: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Unique code that identifies an order.
                 * @example 1172452900788-01
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "source": "Postman",
                 *       "message": "Teste add interactions"
                 *     } */
                "application/json": components["schemas"]["AddLogRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    InvoiceNotification: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /**
                 * @description Unique code that identifies the order whose invoice is being sent.
                 * @example 1172452900788-01
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InvoiceNotificationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Date and time when the notification was received. */
                        date?: string;
                        /** @description Identification of the order in the seller. */
                        orderId?: string;
                        /** @description Protocol code generated by the update that identifies the receipt. Every time this endpoint is called using the same `invoiceNumber`, a new `receipt` code is generated, and it overrides the previous one. */
                        receipt?: string;
                    };
                };
            };
        };
    };
    "Updatepartialinvoice.SendTrackingNumber": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Unique code that identifies the order whose invoice is being sent.
                 * @example 1172452900788-01
                 */
                orderId: string;
                /**
                 * @description Number that identifies the invoice.
                 * @example 000030711
                 */
                invoiceNumber: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "trackingNumber": "87658",
                 *       "trackingUrl": "https://www.tracking.com/url",
                 *       "courier": "carrierOne",
                 *       "dispatchedDate": "2022-02-08T13:16:13.4617653+00:00"
                 *     } */
                "application/json": components["schemas"]["Updatepartialinvoice.SendTrackingNumber.Request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Updatepartialinvoice.SendTrackingNumber"];
                };
            };
        };
    };
    UpdateTrackingStatus: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Order ID is a unique code that identifies an order.
                 * @example 1172452900788-01
                 */
                orderId: string;
                /**
                 * @description Number that identifies the invoice.
                 * @example 000030711
                 */
                invoiceNumber: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "isDelivered": false,
                 *       "deliveredDate": "2022-10-01 21:15",
                 *       "events": [
                 *         {
                 *           "city": "Rio de Janeiro",
                 *           "state": "RJ",
                 *           "description": "Coletado pela transportadora",
                 *           "date": "2015-06-23"
                 *         },
                 *         {
                 *           "city": "Sao Paulo",
                 *           "state": "SP",
                 *           "description": "A caminho de Curitiba",
                 *           "date": "2015-06-24"
                 *         }
                 *       ]
                 *     } */
                "application/json": components["schemas"]["UpdateTrackingStatusRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 116 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Wed, 29 Mar 2017 18:05:00 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.35.3 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example omsapi-v1.5.143 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": components["schemas"]["UpdateTrackingStatus"];
                };
            };
        };
    };
    GetConversation: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /**
                 * @description Order ID is a unique code that identifies an order.
                 * @example 1172452900788-01
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example close */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Mon, 13 Feb 2017 15:25:24 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    Vary?: {
                        /** @example Accept-Encoding */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.35.3 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example omsapi-v1.5.135 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": components["schemas"]["GetConversation"][];
                };
            };
        };
    };
    GetPaymenttransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /**
                 * @description Order ID is a unique code that identifies an order.
                 * @example 1172452900788-01
                 */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetPaymenttransaction"];
                };
            };
        };
    };
    SendPaymentNotification: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /**
                 * @description Order ID is a unique code that identifies an order.
                 * @example 1172452900788-01
                 */
                orderId: string;
                /**
                 * @description VTEX payment identifier.
                 * @example F5C1A4E20D3B4E07B7E871F5B5BC9F91
                 */
                paymentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad request. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The credentials are not enabled to access the service. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Value not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many requests. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Getfeedorderstatus: {
        parameters: {
            query: {
                /** @description Maximum lot. */
                maxLot: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
                /** @description Type of the content being sent */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetFeedConfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Information on how orders are filtered to show on the feed. */
                        filter?: {
                            /** @description Determines what orders appear in the feed and how they are filtered. If a feed has the `FromWorkflow` type configuration, it will receive order updates only when order’s statuses change and orders can be filtered by status, using the `status` field. A feed with the `FromOrders` type configuration gets updates whenever any change is made to an order. in this case, orders can be filtered by any property, according to JSONata expressions set in the `expression` field. */
                            type?: string;
                            /** @description List of order statuses that should be included in the feed. This should only be used in case `type` is `FromWorkflow`. */
                            status?: string[];
                            /** @description JSONata query expression that defines what conditions must be met for an order to be included in the feed. This should only be used in case `type` is `FromOrders`. */
                            expression?: string;
                            /** @description Sets a limit to how many times a specific order shows on the feed, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the feed only once. */
                            disableSingleFire?: boolean;
                        };
                        /** @description Information that define the functioning of the queue. */
                        queue?: {
                            /** @description Period of time for which an item is not visible in the feed after it has been retrieved with the Get feed items request. Measured in seconds. */
                            visibilityTimeoutInSeconds?: number;
                            /** @description Maximum life span of an order update after it gets to the feed. When a feed item is on the feed for this period of time, it is removed from the feed. Measured in seconds. */
                            MessageRetentionPeriodInSeconds?: number;
                        };
                        /** @description Current number of messages in the feed, including messages that may not be visible due to time out after retrieval. */
                        quantity?: number;
                        /** @description Aproximate age of the oldest message in the feed, measured in seconds. */
                        approximateAgeOfOldestMessageInSeconds?: number;
                    };
                };
            };
        };
    };
    FeedConfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "filter": {
                 *         "type": "FromOrders",
                 *         "expression": "value > 100",
                 *         "disableSingleFire": false
                 *       },
                 *       "queue": {
                 *         "visibilityTimeoutInSeconds": 250,
                 *         "MessageRetentionPeriodInSeconds": 345600
                 *       }
                 *     } */
                "application/json": components["schemas"]["FeedConfigurationRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The credentials are not enabled to access the service */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Value not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    FeedConfigurationDelete: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad request - Unable to check address / Only https scheme is accepted */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The credentials are not enabled to access the service */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Value not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Getfeedorderstatus1: {
        parameters: {
            query: {
                /** @description Lot quantity to retrieve. Maximum accepted value is 10. */
                maxlot: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
                /** @description Type of the content being sent */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Getfeedorderstatus"][];
                };
            };
        };
    };
    Commititemfeedorderstatus: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "handles": [
                 *         "AQEBSM/bSqonHYtx+UrHdbuJ0i7M9yMbI2jtYwMIPdEc4BenuneaCTC9VEJ3dgAy1XtfQvHBvgwZTO8LvGObIKNqiKXDZiMKY25vK+pblZEqf1pWdLMugu5XoHA5ZAd4IcBcXrBcrlr1GU8uvPEBoVLOsVBP9IAxIZkkeEedIDg3K6GPyEXVuPlTEYb/0OCunEGxWF+AZ1frFdXh7ulORTcuqO5oDlBGbpD+QYzCmF4mUZtQ0VVWh9icM1QBVh6PlJ0D/lfwnJKWpBn3jf8c+DTm7sD7wb1Lcz9uWMLhDtPwvH9vue4MvKU9sCahEQe7K5jWuwwb54szGbFKdfcACsTSQ9WlyBfMdbV83c27k68G3cnaBFExkC1MLHHE9UzpQ6l4s43BT4k95ocgMXffnj/HMUYXn+OCvlvjytY59x1OCRE="
                 *       ]
                 *     } */
                "application/json": components["schemas"]["CommititemfeedorderstatusRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": Record<string, never>;
                };
            };
        };
    };
    GetHookConfiguration: {
        parameters: {
            query?: {
                /** @description Customer email. */
                clientEmail?: string;
                /** @description Page number for result pagination. */
                page?: string;
                /** @description Page quantity for result pagination. */
                per_page?: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    HookConfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "filter": {
                 *         "type": "FromOrders",
                 *         "expression": "value > 100",
                 *         "disableSingleFire": false
                 *       },
                 *       "hook": {
                 *         "url": "https://endpoint.example/path",
                 *         "headers": {
                 *           "key": "value"
                 *         }
                 *       }
                 *     } */
                "application/json": components["schemas"]["HookConfigurationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HookConfiguration"];
                };
            };
        };
    };
    DeleteHookConfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The credentials are not enabled to access the service */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Value not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Userorderslist: {
        parameters: {
            query: {
                /** @description Customer email. */
                clientEmail: string;
                /** @description Page number for result pagination. */
                page: string;
                /** @description Page quantity for result pagination. */
                per_page: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Userorderslist"];
                };
            };
        };
    };
    Userorderdetails: {
        parameters: {
            query: {
                /** @description Customer email. */
                clientEmail: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Order ID is a unique code that identifies an order. */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Userorderdetails"];
                };
            };
        };
    };
    TestJSONataExpression: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
                /** @description Type of the content being sent */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "Expression": "status = \\\"canceled\\\"",
                 *       "Document": "{\\\"status\\\":\\\"canceled\\\"}"
                 *     } */
                "application/json": components["schemas"]["TestJSONataExpression"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": unknown;
                };
            };
        };
    };
    GetWindowToChangeSeller: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": number;
                };
            };
        };
    };
    UpdateWindowToChangeSeller: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "waitingTime": 4
                 *     } */
                "application/json": {
                    /** @description Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order. */
                    waitingTime: number;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetChangeHistory: {
        parameters: {
            query: {
                /** @description Name of the VTEX account that created the order. */
                an: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Order ID of the order you wish to get the change history. */
                changeOrderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChangeHistory"] & unknown;
                };
            };
        };
    };
    Createchange: {
        parameters: {
            query: {
                /** @description Name of the VTEX account that created the order. */
                an: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Order ID of the order you wish to change. */
                changeOrderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "reason": "The client wants to change a weighable product.",
                 *       "replace": [
                 *         {
                 *           "from": {
                 *             "items": [
                 *               {
                 *                 "id": "1",
                 *                 "quantity": 1
                 *               }
                 *             ]
                 *           },
                 *           "to": {
                 *             "items": [
                 *               {
                 *                 "id": "1",
                 *                 "quantity": 1,
                 *                 "measurementUnit": "kg",
                 *                 "unitMultiplier": 1
                 *               }
                 *             ],
                 *             "shippingData": {
                 *               "logisticsInfo": [
                 *                 {
                 *                   "itemIndex": 0,
                 *                   "slaId": "Normal",
                 *                   "deliveryChannel": "delivery",
                 *                   "addressId": "12334048475146857",
                 *                   "price": 1000
                 *                 }
                 *               ]
                 *             }
                 *           }
                 *         }
                 *       ]
                 *     } */
                "application/json": components["schemas"]["Createchange"] & unknown;
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response202"];
                };
            };
        };
    };
    GetChangeDetail: {
        parameters: {
            query: {
                /** @description Name of the VTEX account that created the order. */
                an: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Order ID of the order you wish to get the change detail. */
                changeOrderId: string;
                /** @description Once you make an order change, you generate a `requestId` code that identifies the changes made to that order. This field should be filled with that code. There are no limits to changes you can perform using the same `changeRequestId`, and we recommend keeping all changes of a given order grouped by the same `changeRequestId`, so you will have a unified change history. */
                changeRequestId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GetChangeDetail"];
                };
            };
        };
    };
    PreviewChange: {
        parameters: {
            query: {
                /** @description Name of the VTEX account that created the order. */
                an: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Order ID of the order you wish to preview change. */
                changeOrderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "reason": "The client wants to change a weighable product.",
                 *       "replace": [
                 *         {
                 *           "from": {
                 *             "items": [
                 *               {
                 *                 "id": "1",
                 *                 "quantity": 1
                 *               }
                 *             ]
                 *           },
                 *           "to": {
                 *             "items": [
                 *               {
                 *                 "id": "1",
                 *                 "quantity": 1,
                 *                 "measurementUnit": "kg",
                 *                 "unitMultiplier": 1
                 *               }
                 *             ],
                 *             "shippingData": {
                 *               "logisticsInfo": [
                 *                 {
                 *                   "itemIndex": 0,
                 *                   "slaId": "Normal",
                 *                   "deliveryChannel": "delivery",
                 *                   "addressId": "12334048475146857",
                 *                   "price": 1000
                 *                 }
                 *               ]
                 *             }
                 *           }
                 *         }
                 *       ]
                 *     } */
                "application/json": components["schemas"]["PreviewChange"] & unknown;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PreviewChange1"] & unknown;
                };
            };
        };
    };
    RetryChange: {
        parameters: {
            query: {
                /** @description Name of the VTEX account that created the order. */
                an: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Order ID of the order you wish to retry change. */
                changeOrderId: string;
                /** @description Once you make an order change, you generate a `requestId` code that identifies the changes made to that order. This field should be filled with that code.
                 *
                 *     There are no limits to changes you can perform using the same `changeRequestId`, and we recommend keeping all changes of a given order grouped by the same `changeRequestId`, so you will have a unified change history. */
                changeRequestId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "reason": "The client wants to change a weighable product.",
                 *       "replace": [
                 *         {
                 *           "from": {
                 *             "items": [
                 *               {
                 *                 "id": "1",
                 *                 "quantity": 1
                 *               }
                 *             ]
                 *           },
                 *           "to": {
                 *             "items": [
                 *               {
                 *                 "id": "1",
                 *                 "quantity": 1,
                 *                 "measurementUnit": "kg",
                 *                 "unitMultiplier": 1
                 *               }
                 *             ],
                 *             "shippingData": {
                 *               "logisticsInfo": [
                 *                 {
                 *                   "itemIndex": 0,
                 *                   "slaId": "Normal",
                 *                   "deliveryChannel": "delivery",
                 *                   "addressId": "12334048475146857",
                 *                   "price": 1000
                 *                 }
                 *               ]
                 *             }
                 *           }
                 *         }
                 *       ]
                 *     } */
                "application/json": components["schemas"]["Createchange"] & unknown;
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CancelChangeStoppedonError: {
        parameters: {
            query: {
                /** @description Name of the VTEX account that created the order. */
                an: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Order ID of the order with the changes you wish to cancel. */
                changeOrderId: string;
                /** @description Once you make an order change, you generate a `requestId` code that identifies the changes made to that order. This field should be filled with that code. After cancelling an order change, the `changeRequestId` will no longer be valid. */
                changeRequestId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "reason": "I want to cancel this change order request because it's stopped on a blocking error."
                 *     } */
                "application/json": components["schemas"]["CancelChangeStoppedonError"] & unknown;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
