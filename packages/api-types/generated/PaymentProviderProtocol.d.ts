export interface paths {
    "/manifest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Payment Provider Manifest
         * @description Exposes the provider manifest, including metadata settings such as payment methods, split configuration, and custom fields.
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Available payment methods
         *
         *     <table>
         *         <tr>
         *             <th>Payment Method</th>
         *             <th>Type</th>
         *             <th>Country</th>
         *         </tr>
         *         <tr>
         *             <td><code>Visa</code></td>
         *             <td>Credit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Mastercard</code></td>
         *             <td>Credit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>American Express</code></td>
         *             <td>Credit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Discover</code></td>
         *             <td>Credit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>JCB</code></td>
         *             <td>Credit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Diners</code></td>
         *             <td>Credit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Elo</code></td>
         *             <td>Credit Card</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Hipercard</code></td>
         *             <td>Credit Card</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Aura</code></td>
         *             <td>Credit Card</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Banricompras</code></td>
         *             <td>Credit Card</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Credz</code></td>
         *             <td>Credit Card</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Cabal</code></td>
         *             <td>Credit Card</td>
         *             <td>Argentina, Brazil, Uruguay, Paraguay</td>
         *         </tr>
         *             <td><code>Cartes Bancaires (CB)</code></td>
         *             <td>Credit Card</td>
         *             <td>France</td>
         *         </tr>
         *         <tr>
         *             <td><code>VirtualDebitElo</code></td>
         *             <td>Debit Card</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Visa Electron</code></td>
         *             <td>Debit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Maestro</code></td>
         *             <td>Debit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Mastercard Debit</code></td>
         *             <td>Debit Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Débito Online</code></td>
         *             <td>Debit Card</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Cobranded</code></td>
         *             <td>Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Privatelabels</code></td>
         *             <td>Card</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Promissories</code></td>
         *             <td>Generic</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Cash</code></td>
         *             <td>Generic</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Pix</code></td>
         *             <td>Online Transfer</td>
         *             <td>Brazil</td>
         *         </tr>
         *         <tr>
         *             <td><code>Safetypay</code></td>
         *             <td>Online Transfer</td>
         *             <td>Americas and Europe</td>
         *         </tr>
         *         <tr>
         *             <td><code>BankInvoice</code></td>
         *             <td>Offline/Voucher</td>
         *             <td>Brazil (Boleto Bancário)</td>
         *         </tr>
         *         <tr>
         *             <td><code>FichaDeposito</code></td>
         *             <td>Offline/Voucher</td>
         *             <td>Mexico</td>
         *         </tr>
         *         <tr>
         *             <td><code>Rapipago</code></td>
         *             <td>Offline/Voucher</td>
         *             <td>Argentina</td>
         *         </tr>
         *         <tr>
         *             <td><code>OXXO</code></td>
         *             <td>Offline/Voucher</td>
         *             <td>Mexico</td>
         *         </tr>
         *         <tr>
         *             <td><code>Voucher</code></td>
         *             <td>Offline/Voucher</td>
         *             <td>Mexico</td>
         *         </tr>
         *         <tr>
         *             <td><code>Bitcoin</code></td>
         *             <td>Cryptocurrency</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Venda Direta Credito</code></td>
         *             <td>Credit Card (Physical)</td>
         *             <td>Global</td>
         *         </tr>
         *         <tr>
         *             <td><code>Venda Direta Debito</code></td>
         *             <td>Debit Card (Physical)</td>
         *             <td>Global</td>
         *         </tr>
         *     </table>
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["Manifest"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create payment
         * @description Creates a new payment and initiates the payment flow.
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     Payment providers must:
         *
         *     - Execute authorization on payments made through credit/debit card or any synchronized payments;
         *
         *     - Return the required information to the customer on payments made through bank-issued invoice, redirect, or any async payments.
         *
         *      >ℹ️ This endpoint has to meet the principle of [idempotence](https://en.wikipedia.org/wiki/Idempotence). When calling this endpoint for the first time of a payment, without a `paymentId`, it should create a new payment. When calling this endpoint for an existing `paymentId`, it should not create another payment, but return the updated status of the existing payment instead.
         *
         *     ## Callbacks (asynchronous flow)
         *
         *     Callbacks are used for asynchronous payments, which do not receive the final status immediately. At first, an `undefined` status is returned, and the final status will be received from a callback request in the future as `authorized` or `denied`. There are two types of callbacks:
         *
         *     - **Notification:** If a payment returns with `undefined` status, you are expected to send us a callback/notification to update it later, sending a POST with an updated version of your response (same structure as above) to the `callbackUrl` we have provided.
         *
         *     - **Retry:** If a payment returns with `undefined` status, you are expected to call the retry endpoint provided by the `callbackUrl` when the processing of the payment is completed, so we make another Create Payment request to update the status with the new value (`authorized` or `denied`).
         *
         *     Callback requests should be authenticated using a Key and Token which you can [generate from your VTEX partner account License Manager](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet#generating-app-keys-in-your-account). To do so, `POST` your request passing the `X-VTEX-API-AppKey` and `X-VTEX-API-AppToken` headers with your credentials. **Note:** do not mix up these credentials with the ones we send on behalf of the merchant when sending our requests.
         *
         *     >⚠ For integrations not using VTEX IO, use the **Notification** callback. For integrations developed using VTEX IO infrastructure, use the **Retry** callback.
         *
         *     ### Callback URL
         *
         *     The `callbackUrl` field contains an URL that the payment provider uses to make a callback and inform our gateway of the final payment status: `approved` or `denied`.
         *
         *     This URL has some query parameters, including the `X-VTEX-signature`. This parameter is mandatory and contains a signature token to identify that the request has been generated from VTEX as a security measure. The signature token has at most 32 characters. You can check an example of callback URL with the signature token below:
         *
         *     ```
         *     https://gatewayqa.vtexpayments.com.br/api/pvt/payment-provider/transactions/8FB0F111111122222333344449984ACB/payments/A2A9A25B11111111222222333327883C/callback?accountName=teampaymentsintegrations&X-VTEX-signature=R******tk
         *     ```
         *
         *     In the [Transactions page of the Admin](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details--tutorials_452), the signature token appears masked for security reasons, as in this example: `X-VTEX-signature=Rj******tk`.
         *
         *     When making the callback request, we recommend that payment providers use the callback URL exactly as received, which guarantees that all the parameters are included.
         *
         *     See below an example of a payload forwarded along with the callback URL:
         *
         *     ```json
         *     {
         *         "paymentId": "8B3BA2F4352545A8B1C5A215F356A01C",
         *         "status": "approved",
         *         "authorizationId": "184520",
         *         "nsu": "21705348",
         *         "tid": "21705348",
         *         "acquirer": "pagmm",
         *         "code": "0000",
         *         "message": "Successfully approved transaction",
         *         "delayToAutoSettle": 1200,
         *         "delayToAutoSettleAfterAntifraud": 1200,
         *         "delayToCancel": 86400,
         *         "cardBrand": "Mastercard",
         *         "firstDigits": "534696",
         *         "lastDigits": "6921",
         *         "maxValue": 16.6
         *     }
         *     ```
         *
         *     >ℹ️ The parameter values sent in the callback payload replace the original values informed in the **Create Payment** request.
         *
         *     >⚠️ If the waiting parameters (`delayToAutoSettle` and `delayToAutoSettleAfterAntifraud`) are not sent with the callback URL, the values for these parameters will be automatically set to 24 hours.
         *
         *     ## Beta features
         *
         *     The beta features available for payment providers are:
         *
         *     - `inboundRequestsUrl`: Allows to forward external requests back to your payment provider implementation, including the configured credentials (`X-VTEX-API-*` headers), and settings.
         *
         *     >ℹ You can reach out to our team by [opening a ticket](https://help.vtex.com/en/tutorial/opening-tickets-to-vtex-support--16yOEqpO32UQYygSmMSSAM) to know more about any beta features.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["CreatePayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payments/{paymentId}/cancellations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel payment
         * @description Cancels a payment that was not yet approved or settled.
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["CancelPayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payments/{paymentId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Settle payment
         * @description Settles a payment that was previously approved.
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["SettlePayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payments/{paymentId}/refunds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refund payment
         * @description Refunds a payment (in full or in part) that was previously settled.
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["RefundPayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/payments/{paymentId}/inbound/{action}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Inbound request (BETA)
         * @description The Inbound request (BETA) implements an URL that facilitates a direct connection between VTEX Gateway service and the Payment Provider. This functionality allows the payment provider to create other types of specific routes, in addition to those described in the other PPP endpoints, according to their type of operation (e.g. hook or enrollment routes, among others).
         *
         *     This endpoint forwards a request back to your endpoint using the `inboundRequestsUrl` provided in the [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments?endpoint=post-/payments) endpoint payload.
         *
         *     The `{action}` part of the path will be the same you have used to call the `inboundRequestsUrl` (e.g. hook, enrollment, among others).
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["InboundRequest(BETA)"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authorization/token": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create authorization token
         * @description Creates the authorization token that will be used for VTEX to redirect the merchant to the provider's authentication application. For more information about the Payment Provider Protocol (PPP) merchant authentication procedure, visit [Configuration Flow](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider#configuration-flow).
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["CreateAuthorizationToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authorization/redirect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Provider authentication
         * @description Use the application of provider for merchant's authentication.
         *
         *     VTEX will redirect the merchant to your application using the `token` we retrieved earlier.
         *
         *     You're expected to have a signup/signin process on your side in order to authenticate the merchant, either as a new or as an existent user.
         *
         *     At this point, you can present your terms an conditions, a contract, and ask for merchant's final agreement to use your services.
         *
         *     Finally, you need to generate an `authorizationCode` that you must concatenate to the `returnUrl` we send earlier.
         *
         *     Example:
         *
         *     `returnUrl` = `https://admin.mystore.example.com/provider-return?authorizationCode=`
         *
         *     `authorizationCode` = `7940597D-A63B`
         *
         *     Redirect the merchant to:
         *
         *     `https://admin.mystore.example.com/provider-return?authorizationCode=7940597D-A63B`
         *
         *      For more information about the Payment Provider Protocol (PPP) merchant authentication procedure, visit [Configuration Flow](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider#configuration-flow).
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["ProviderAuthentication"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authorization/credentials": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get credentials
         * @description Retrieves the merchant credentials (applicationId, appKey and appToken) registered with the payment provider. These credentials will be saved in the VTEX system and activated when the retailer decides to enable the connector.
         *
         *      For more information about the Payment Provider Protocol (PPP) merchant authentication procedure, visit [Configuration Flow](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider#configuration-flow).
         *
         *     > ℹ️ This request is made from VTEX to the payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["GetCredentials"];
        put?: never;
        post?: never;
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
         * @description Payment methods information.
         * @example {
         *       "paymentMethods": [
         *         "Visa",
         *         "Mastercard",
         *         "Pix",
         *         "American Express",
         *         "BankInvoice",
         *         "Privatelabels",
         *         "Promissories"
         *       ]
         *     }
         */
        Success: {
            /** @description List of each payment method implemented. */
            paymentMethods: string[];
        };
        /** @description Payment provider manifest response body information. */
        "Success-Manifest": {
            /** @description Describes each payment method supported by payment provider and exposed its respective metadata. */
            paymentMethods: {
                /** @description Payment method name. */
                name: string;
                /**
                 * @description Describes which transaction flow stage the connector should receive payment split data. Check more details on the [Split Payouts on the Payment Provider Protocol](https://developers.vtex.com/vtex-rest-api/docs/split-payouts-on-payment-provider-protocol) article.
                 * @enum {string}
                 */
                allowsSplit: "onAuthorize" | "onCapture" | "disabled";
            }[];
            /** @description Describes the customized fields supported by the connector. Except for `appKey` or `appToken` values, which must be defined in homonymous fields, any other security data should be sent or stored as `password` type fields. */
            customFields?: {
                /** @description Custom field name. */
                name?: string;
                /**
                 * @description Custom field type.
                 * @enum {string}
                 */
                type?: "text" | "password" | "select";
                /** @description In case of `select` type, the possible params are `text` and `value`. */
                options?: {
                    /** @description Custom field description. */
                    text?: string;
                    /** @description Custom field value. */
                    value?: string;
                }[];
            }[];
            /** @description Describes the allowed delay value for the auto settle capture. Accepted values: `minimum` and `maximum` in whole hours (decimals are not allowed). Check more details on the [Custom Auto Capture Feature](https://developers.vtex.com/vtex-rest-api/docs/custom-auto-capture-feature) article. */
            autoSettleDelay?: {
                /** @description Minimum amount of time to auto settle in hours. */
                minimum: string;
                /** @description Maximum amount of time to auto settle in hours. */
                maximum: string;
            };
            /** @description Array containing the names of the metadata fields sent from the provider to the payment gateway. Limitations: the array must contain a maximum of 3 strings, and each of them, a maximum of 20 characters. */
            metadataFields?: string[];
        };
        /** @description Create payment response body information. */
        "Success-Approved": {
            /** @description VTEX identifier for this payment. The same sent in the request. */
            paymentId: string;
            /** @description The Provider's status for this payment. Must be one of three values:
             *
             *     - `approved`
             *     - `denied`
             *     - `undefined`. */
            status: string;
            /** @description Provider's unique identifier for the authorization. Should be sent when the payment is authorized. In other statuses, it should be absent or `null`. */
            authorizationId: string;
            /** @description This field is deprecated, please use `paymentUrl` instead. The bank invoice URL to be presented to the end user. */
            bankIssueInvoiceId?: string;
            /** @description When the payment is via bank invoice, this should be the invoice URL to be presented to the user. If the payment requires the redirection of the user, this should be the URL to redirect the user. If neither is the case, then this should be absent. */
            paymentUrl?: string | null;
            /** @description Object which indicates that a [Payment App](https://developers.vtex.com/docs/guides/payments-integration-payment-app) is needed to finish the payment. This object contains the data to be used by the Payment App. */
            paymentAppData?: {
                /** @description Indicates which VTEX IO app that will handle the payment flow at Checkout. */
                appName: string;
                /** @description The payload that will be sent to your app, like a serialized JSON, for example. */
                payload: string;
            };
            /** @description The bank invoice unformatted identification number. Should only be present when the payment is made via bank invoice. */
            identificationNumber?: string;
            /** @description The bank invoice formatted identification number that will be presented to the end user. */
            identificationNumberFormatted?: string;
            /** @description The bank invoice barcode image type. For instance, "i25" for Brazilian *Boleto Bancário*. Should only be present when the payment is made via bank invoice. */
            barCodeImageType?: string;
            /** @description The bank invoice number to generate a barcode (must follow any regulations/specifications for targeted countries). Should only be present when the payment is made via bank invoice. */
            barCodeImageNumber?: string;
            /** @description Provider's unique identifier for the transaction. */
            tid: string;
            /** @description Provider's unique sequential number for the transaction. */
            nsu: string | null;
            /** @description Acquirer name (mostly used for card payments). */
            acquirer: string | null;
            /** @description This field is deprecated, please use `paymentUrl` instead. The URL the end user needs to be redirected to (external authentication, 3DS, etc). */
            redirectUrl?: string;
            /** @description Provider's operation/error code to be logged. */
            code?: string | null;
            /** @description Provider's operation/error message to be logged. */
            message?: string | null;
            /** @description Total time (in seconds) before we make an automatic call to `/settlements`, regardless of whether the payment was approved by the merchant's anti-fraud provider or not. The maximum time allowed to wait for an auto capture is 604800 seconds (7 days). */
            delayToAutoSettle: number;
            /** @description Total time (in seconds) before we make an automatic call to `/settlements` after merchant's antifraud approval. */
            delayToAutoSettleAfterAntifraud: number;
            /** @description Total time (in seconds) to wait for an authorization and make an automatic call to `/cancellations` to cancel the payment. The minimum value is 10 minutes (600 seconds). **NOTE 1**: If you set this field to a time period less than 24 hours (86399 seconds or less), the gateway will retry processing the payment every 1 hour. If you use a value of 24 hours (86400 seconds) or more in this field, the gateway will retry processing the payment every 4 hours. **NOTE 2**:  For `delayToCancel` values between 5 minutes and 1 hour (300 and 3600 seconds), or when payment is made by [PIX](https://developers.vtex.com/docs/guides/payments-integration-pix-instant-payments-in-brazil) (Brazilian instant payment method), retry calls will occur every 5 minutes. */
            delayToCancel: number;
            /** @description The maximum value for this payment. This field allows changes to be made to transactions to settle larger amounts as a result of order changes. */
            maxValue?: number;
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /** @description The name of the metadata to be stored in the gateway (limited to 20 characters). */
                name: string;
                /** @description The value of the metadata stored (limited to 200 characters). */
                value: string;
            }[];
        };
        /** @description Bad request information. */
        "Fail-BadRequest": {
            /** @description The Provider's status for this payment. */
            status: string;
            /** @description Provider's operation/error code to be logged. */
            code: string;
            /** @description Provider's operation/error message to be logged. */
            message: string;
        };
        /** @description Cancel payment request body information. */
        CancelPaymentRequest: {
            /**
             * @description VTEX payment identifier.
             * @example F5C1A4E20D3B4E07B7E871F5B5BC9F91
             */
            paymentId: string;
            /**
             * @description VTEX request identifier.
             * @example D12D9B80972C462980F5067A3A126837
             */
            requestId: string;
            /**
             * @description Payment authorization identifier (in case it was authorized previous to the cancellation request).
             * @example 5784589
             */
            authorizationId: string;
            /**
             * @description Provider's unique identifier for the transaction.
             * @example 10022005181543584603
             */
            tid?: string;
            /**
             * @description VTEX transaction ID related to this payment.
             * @example D3AA1FC8372E430E8236649DB5EBD08E
             */
            transactionId?: string;
            /**
             * @description Provider's unique sequential number for the transaction.
             * @example NSU987432
             */
            nsu?: string;
            /**
             * @description Indicates whether or not this request is being sent from a sandbox environment.
             * @example false
             */
            sandboxMode?: boolean;
            /** @description Custom fields (for the given provider) which the merchant must fill. Each element of this array is a key-value pair. */
            merchantSettings?: {
                /**
                 * @description The custom field name.
                 * @example Public Merchant ID Test.
                 */
                name: string;
                /**
                 * @description The custom field value.
                 * @example 1
                 */
                value: string;
            }[];
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /**
                 * @description The name of the metadata to be stored in the gateway (limited to 20 characters).
                 * @example MetadataName
                 */
                name: string;
                /**
                 * @description The value of the metadata stored (limited to 200 characters).
                 * @example MetadataValue
                 */
                value: string;
            }[];
        };
        /** @description Cancel payment response body information. */
        Success1: {
            /** @description The same `paymentId` sent in the request. */
            paymentId: string;
            /** @description Provider's cancellation identifier. If the operation has failed you **MUST** return `null`. */
            cancellationId: string;
            /** @description Provider's operation/error code to be logged. Return `cancel-manually` if you do not support this operation, so we can send a notification to the merchant. */
            code: string | null;
            /** @description Provider's operation/error message to be logged. */
            message: string;
            /** @description The same `requestId` sent in the request. */
            requestId: string;
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /** @description The name of the metadata to be stored in the gateway (limited to 20 characters). */
                name: string;
                /** @description The value of the metadata stored (limited to 200 characters). */
                value: string;
            }[];
        };
        /** @description Cancellation failure information. */
        "Fail-GenericError1": {
            /** @description The same `paymentId` sent in the request. */
            paymentId: string;
            /** @description Provider's cancellation identifier. If the operation has failed you **MUST** return `null`. */
            cancellationId: string | null;
            /** @description Provider's operation/error code to be logged. Return `cancel-manually` if you do not support this operation, so we can send a notification to the merchant. */
            code: string;
            /** @description Provider's operation/error message to be logged. */
            message: string;
            /** @description The same `requestId` sent in the request. */
            requestId: string;
        };
        /** @description Settle payment response body information. */
        Success2: {
            /** @description The same `paymentId` sent in the request. */
            paymentId: string;
            /** @description VTEX identifier for this settlement. */
            settleId: string;
            /** @description The amount to be settled. */
            value: number;
            /** @description Provider's operation/error code to be logged. */
            code: string | null;
            /** @description Provider's operation/error message to be logged. */
            message: string;
            /** @description The same `requestId` sent in the request. */
            requestId: string;
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /** @description The name of the metadata to be stored in the gateway (limited to 20 characters). */
                name: string;
                /** @description The value of the metadata stored (limited to 200 characters). */
                value: string;
            }[];
        };
        /** @description Internal server error information. */
        "Fail-GenericError2": {
            /** @description The same `paymentId` sent in the request. */
            paymentId: string;
            /** @description VTEX identifier for this settlement. */
            settleId: string | null;
            /** @description The amount to be settled. */
            value: number;
            /** @description Provider's operation/error code to be logged. */
            code: string;
            /** @description Provider's operation/error message to be logged. */
            message: string;
            /** @description The same `requestId` sent in the request. */
            requestId: string;
        };
        /** @description Refund payment response body information. */
        Success3: {
            /** @description The same `paymentId` sent in the request. */
            paymentId: string;
            /** @description Provider's refund identifier. If the operation has failed you **MUST** return `null`. */
            refundId: string;
            /** @description The amount that was refunded. If the operation has failed you **MUST** return `0`. */
            value: number;
            /** @description Provider's operation/error code to be logged. Return `refund-manually` if you do not support this operation, so we can send a notification to the merchant. */
            code: string | null;
            /** @description Provider's operation/error message to be logged. */
            message: string;
            /** @description The same `requestId` sent in the request. */
            requestId: string;
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /** @description The name of the metadata to be stored in the gateway (limited to 20 characters). */
                name: string;
                /** @description The value of the metadata stored (limited to 200 characters). */
                value: string;
            }[];
        };
        /** @description Internal server error information. */
        "Fail-GenericError3": {
            /** @description The same `paymentId` sent in the request. */
            paymentId: string;
            /** @description Provider's refund identifier. If the operation has failed you **MUST** return `null`. */
            refundId: string | null;
            /** @description The amount to be settled. */
            value: number;
            /** @description Provider's operation/error code to be logged. Return `refund-manually` if you do not support this operation, so we can send a notification to the merchant. */
            code: string;
            /** @description Provider's operation/error message to be logged. */
            message: string;
            /** @description The same `requestId` sent in the request. */
            requestId: string;
        };
        /**
         * @description Settle payment request body information.
         * @example {
         *       "transactionId": "D3AA1FC8372E430E8236649DB5EBD08E",
         *       "requestId": "2019-02-04T22:53:42-40000",
         *       "paymentId": "F5C1A4E20D3B4E07B7E871F5B5BC9F91",
         *       "value": 45,
         *       "authorizationId": "5784589",
         *       "tid": "5784589",
         *       "nsu": "NSU987432",
         *       "recipients": [
         *         {
         *           "id": "mystore",
         *           "name": "Company XPTO",
         *           "documentType": "CNPJ",
         *           "document": "05314972000174",
         *           "role": "marketplace",
         *           "chargeProcessingFee": true,
         *           "chargebackLiable": true,
         *           "amount": 7.2
         *         },
         *         {
         *           "id": "sellerA",
         *           "name": "Company ABC",
         *           "documentType": "CNPJ",
         *           "document": "24830098000172",
         *           "role": "seller",
         *           "chargeProcessingFee": false,
         *           "chargebackLiable": false,
         *           "amount": 37.8,
         *           "commissionAmount": 7.2
         *         }
         *       ],
         *       "sandboxMode": false,
         *       "merchantSettings": [
         *         {
         *           "name": "Public Merchant ID Test.",
         *           "value": "1"
         *         }
         *       ],
         *       "connectorMetadata": [
         *         {
         *           "name": "MetadataName",
         *           "value": "MetadataValue"
         *         }
         *       ]
         *     }
         */
        SettlePayment: {
            /** @description VTEX identifier for the transaction related to this payment. */
            transactionId: string;
            /** @description The unique identifier for this request to ensure its idempotency. */
            requestId: string;
            /** @description VTEX identifier for this payment. */
            paymentId: string;
            /** @description The amount to be settled. */
            value: number;
            /** @description The authorization identifier for this payment. */
            authorizationId: string;
            /** @description Provider's unique identifier for the transaction. */
            tid?: string;
            /** @description Provider's unique sequential number for the transaction. */
            nsu?: string;
            /** @description Array containing the information for the recipients of this payment in case the Payment Provider is configured to allow the split of payments. */
            recipients?: {
                /** @description Recipient identifier. */
                id: string;
                /** @description Recipient name. */
                name: string;
                /** @description Recipient document type. */
                documentType: string;
                /** @description Recipient document number. */
                document: string;
                /** @description Indicates if the recipient is the seller or the marketplace. */
                role: string;
                /** @description Indicates whether or not this recipient is charged for processing fees. */
                chargeProcessingFee?: boolean;
                /** @description Indicates whether or not this recipient is liable to chargebacks. */
                chargebackLiable?: boolean;
                /** @description Amount due to this recipient. */
                amount: number;
                /** @description Amount of commission due to the marketplace. */
                commissionAmount?: number;
            }[];
            /** @description Indicates whether or not this request is being sent from a sandbox environment. */
            sandboxMode?: boolean;
            /** @description Custom fields (for the given provider) which the merchant must fill. Each element of this array is a key-value pair. */
            merchantSettings?: {
                /** @description The custom field name. */
                name: string;
                /** @description The custom field value. */
                value: string;
            }[];
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /** @description The name of the metadata to be stored in the gateway (limited to 20 characters). */
                name: string;
                /** @description The value of the metadata stored (limited to 200 characters). */
                value: string;
            }[];
        };
        /**
         * @description Refund payment request body information.
         * @example {
         *       "requestId": "LA4E20D3B4E07B7E871F5B5BC9F91",
         *       "settleId": "Q5C1A4E20D3B4E07B7E871F5B5BC9F91",
         *       "paymentId": "F5C1A4E20D3B4E07B7E871F5B5BC9F91",
         *       "tid": "10022005181543584603",
         *       "authorizationId": "AUT123567",
         *       "nsu": "NSU987432",
         *       "value": 20,
         *       "transactionId": "D3AA1FC8372E430E8236649DB5EBD08E",
         *       "recipients": [
         *         {
         *           "id": "mystore",
         *           "name": "Company XPTO",
         *           "documentType": "CNPJ",
         *           "document": "05314972000174",
         *           "role": "marketplace",
         *           "chargeProcessingFee": true,
         *           "chargebackLiable": true,
         *           "amount": 3.2
         *         },
         *         {
         *           "id": "sellerA",
         *           "name": "Company ABC",
         *           "documentType": "CNPJ",
         *           "document": "24830098000172",
         *           "role": "seller",
         *           "amount": 16.8,
         *           "comissionAmount": 3
         *         }
         *       ],
         *       "sandboxMode": false,
         *       "merchantSettings": [
         *         {
         *           "name": "Public Merchant ID Test.",
         *           "value": "1"
         *         }
         *       ],
         *       "connectorMetadata": [
         *         {
         *           "name": "MetadataName",
         *           "value": "MetadataValue"
         *         }
         *       ]
         *     }
         */
        RefundPayment: {
            /** @description The unique identifier for this request to ensure its idempotency. */
            requestId: string;
            /** @description Provider's settlement identifier. */
            settleId: string;
            /** @description VTEX identifier for this payment. */
            paymentId: string;
            /** @description Provider's unique identifier for the transaction. */
            tid: string;
            /** @description The amount to be refunded. */
            value: number;
            /** @description VTEX identifier for this transaction. */
            transactionId: string;
            /** @description The authorization identifier for this payment. */
            authorizationId?: string;
            /** @description Provider's unique sequential number for the transaction. */
            nsu?: string;
            /** @description Array containing the information for the recipients of this payment in case the Payment Provider is configured to allow the split of payments. */
            recipients?: {
                /** @description Recipient identifier. */
                id: string;
                /** @description Recipient name. */
                name: string;
                /** @description Recipient document type. */
                documentType: string;
                /** @description Recipient document number. */
                document: string;
                /** @description Indicates if the recipient is the seller or the marketplace. */
                role: string;
                /** @description Indicates whether or not this recipient is charged for processing fees. */
                chargeProcessingFee?: boolean;
                /** @description Indicates whether or not this recipient is liable to chargebacks. */
                chargebackLiable?: boolean;
                /** @description Amount due to this recipient. */
                amount: number;
                /** @description Amount received by the Marketplace. */
                comissionAmount?: number;
            }[];
            /** @description Indicates whether or not this request is being sent from a sandbox environment. */
            sandboxMode?: boolean;
            /** @description Custom fields (for the given provider) which the merchant must fill. Each element of this array is a key-value pair. */
            merchantSettings?: {
                /** @description The custom field name. */
                name: string;
                /** @description The custom field value. */
                value: string;
            }[];
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /** @description The name of the metadata to be stored in the gateway (limited to 20 characters). */
                name: string;
                /** @description The value of the metadata stored (limited to 200 characters). */
                value: string;
            }[];
        };
        /** @description Inbound request information. */
        InboundRequest_BETA_Request: {
            /**
             * @description The unique identifier for this request to ensure its idempotency.
             * @example LA4E20D3B4E07B7E871F5B5BC9F91
             */
            requestId: string;
            /**
             * @description VTEX transaction ID related to this payment.
             * @example D3AA1FC8372E430E8236649DB5EBD08E
             */
            transactionId: string;
            /**
             * @description VTEX payment ID from this payment.
             * @example F5C1A4E20D3B4E07B7E871F5B5BC9F91
             */
            paymentId: string;
            /**
             * @description Provider's unique identifier for the authorization.
             * @example AUT123567
             */
            authorizationId: string;
            /**
             * @description Provider's unique sequential number for the transaction.
             * @example NSU987432
             */
            nsu: string;
            /**
             * @description Provider's unique identifier for the transaction.
             * @example 10022005181543584603
             */
            tid: string;
            requestData: components["schemas"]["RequestData"];
            /** @description Custom fields (for the given provider) which the merchant must fill. Each element of this array is a key-value pair. */
            merchantSettings?: {
                /**
                 * @description The custom field name.
                 * @example Public Merchant ID Test.
                 */
                name: string;
                /**
                 * @description The custom field value.
                 * @example 1
                 */
                value: string;
            }[];
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /**
                 * @description The name of the metadata to be stored in the gateway (limited to 20 characters).
                 * @example MetadataName
                 */
                name: string;
                /**
                 * @description The value of the metadata stored (limited to 200 characters).
                 * @example MetadataValue
                 */
                value: string;
            }[];
        };
        /** @description Request data information. */
        RequestData: {
            /**
             * @description Original request body information.
             * @example {{originalRequestBody}}
             */
            body: string;
        };
        /** @description Inbound Request response body information. */
        Success4: {
            /** @description The same `requestId` sent in the request. */
            requestId: string;
            /** @description The same `paymentId` sent in the request. */
            paymentId: string;
            /** @description Provider's operation/error code to be logged. */
            code?: string;
            /** @description Provider's operation/error message to be logged. */
            message?: string;
            responseData: components["schemas"]["ResponseData"];
            /** @description Array containing metadata fields sent from the provider to the payment gateway. */
            connectorMetadata?: {
                /**
                 * @description The name of the metadata to be stored in the gateway (limited to 20 characters).
                 * @example MetadataName
                 */
                name: string;
                /**
                 * @description The value of the metadata stored (limited to 200 characters).
                 * @example MetadataValue
                 */
                value: string;
            }[];
        };
        /** @description Response data information. */
        ResponseData: {
            /** @description Your desired status code. */
            statusCode: number;
            /** @description Your desired content-type. */
            contentType: string;
            /** @description Your desired content body. */
            content: string;
        };
        /** @description Create authorization token request body information. */
        CreateAuthorizationTokenRequest: {
            /**
             * @description VTEX application identifier.
             * @example vtex
             */
            applicationId: string;
            /**
             * @description The base URL you need to use to form the final URL when redirecting the merchant back to VTEX.
             * @example https://admin.mystore.example.com/provider-return?authorizationCode=
             */
            returnUrl: string;
        };
        /** @description Create authorization token response body information. */
        Success5: {
            /** @description The same `applicationId` sent in the request. */
            applicationId: string;
            /** @description You must generate a token that will be used to identify the same context when we redirect the merchant to your application. */
            token: string;
        };
        /** @description Get credentials response body information. */
        Success6: {
            /** @description The same `applicationId` sent in the request. */
            applicationId: string;
            /** @description The value we will send in the header `X-VTEX-API-AppKey` for the payment flow. */
            appKey: string;
            /** @description The value we will send in the header `X-VTEX-API-AppToken` for the payment flow. */
            appToken: string;
        };
    };
    responses: never;
    parameters: {
        /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
        "X-PROVIDER-API-AppKey": string;
        /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
        "X-PROVIDER-API-AppToken": string;
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description VTEX payment identifier. */
        paymentId: string;
        /** @description VTEX application identifier. */
        applicationId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Manifest: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                    "application/json": components["schemas"]["Success-Manifest"];
                };
            };
        };
    };
    CreatePayment: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Merchant's order reference provided by VTEX Checkout.
                     * @example 618272
                     */
                    reference: string;
                    /**
                     * @description Merchant's order identifier provided by VTEX Checkout (also called order group).
                     * @example 1072430428324
                     */
                    orderId: string;
                    /**
                     * @description Indicates which system the buyer interacted with (examples: ecommerce, instore, subscription).
                     * @example ecommerce
                     */
                    shopperInteraction: string;
                    /**
                     * @description Indicates whether this payment is just to validate the buyer's payment method information (for instance, validate the credit card information).
                     * @example false
                     */
                    verificationOnly?: boolean;
                    /**
                     * @description VTEX transaction ID related to this payment.
                     * @example 2F023FD5A72A49D48A8633252B7CCBD6
                     */
                    transactionId: string;
                    /**
                     * @description VTEX payment ID that can be used as unique identifier.
                     * @example 01693EB95BE443AC85874E395CD91565
                     */
                    paymentId: string;
                    /**
                     * @description The payment method chosen for this payment. It must be one of the available payment methods offered by the provider, which can be obtained from the [List Payment Provider Manifest endpoint](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#get-/manifest).
                     * @example Diners
                     */
                    paymentMethod: string;
                    /**
                     * @description Configurable for Cobranded and Privatelabels payment methods.
                     * @example null
                     */
                    paymentMethodCustomCode: string | null;
                    /**
                     * @description VTEX merchant name that will receive the payment.
                     * @example mystore
                     */
                    merchantName: string;
                    /**
                     * @description Value amount of the payment.
                     * @example 31.9
                     */
                    value: number;
                    /**
                     * @description Value amount of the payment without interest applied. This value is the same as the "value" field when "installmentsInterestRate" is 0.0.
                     * @example 31.9
                     */
                    referenceValue?: number;
                    /**
                     * @description Currency code (ISO 4217 alpha-3).
                     * @example BRL
                     */
                    currency: string;
                    /**
                     * @description Number of installments.
                     * @example 1
                     */
                    installments: number;
                    /**
                     * @description The interest rate.
                     * @example 0
                     */
                    installmentsInterestRate?: number;
                    /**
                     * @description The value of each installment.
                     * @example 31.9
                     */
                    installmentsValue?: number;
                    /**
                     * @description A hash that represents the device used to initiate the payment.
                     * @example 75076388
                     */
                    deviceFingerprint: string;
                    /**
                     * @description The IP Address of the buyer.
                     * @example 187.105.111.65
                     */
                    ipAddress?: string;
                    /** @description Card information used for payment. This parameter is required only with card payment methods (credit, debit or co-branded). */
                    card?: {
                        /**
                         * @description Card holder name.
                         * @example John Doe
                         */
                        holder: string | null;
                        /**
                         * @description A token representing the card holder (this field is absent in case the provider does not use the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy)).
                         * @example #vtex#token#d799bae#csc#
                         */
                        holderToken?: string;
                        /**
                         * @description Card number.
                         * @example 364901****2661
                         */
                        number: string | null;
                        /**
                         * @description Card security code.
                         * @example ***
                         */
                        csc: string | null;
                        /**
                         * @description First six digits of the card number (this field is absent in case the provider does not use the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy)).
                         * @example 364901
                         */
                        bin?: string;
                        /**
                         * @description A token representing the card number (this field is absent in case the provider does not use the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy)).
                         * @example #vtex#token#d799bae#number#
                         */
                        numberToken?: string;
                        /**
                         * @description The number of characters in the card number (this field is absent in case the provider does not use the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy)).
                         * @example 16
                         */
                        numberLength?: number;
                        /**
                         * @description A token representing the card security code (this field is absent in case the provider does not use the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy)).
                         * @example #vtex#token#d799bae#csc#
                         */
                        cscToken?: string;
                        /**
                         * @description The number of characters in the Card Security Code (this field is absent in case the provider does not use the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy)).
                         * @example 3
                         */
                        cscLength?: number;
                        /** @description Information about card expiration. */
                        expiration: {
                            /**
                             * @description Card expiration month (2-digits).
                             * @example 12
                             */
                            month: string | null;
                            /**
                             * @description Card expiration year (4-digits).
                             * @example 2020
                             */
                            year: string | null;
                        };
                        /**
                         * @description Card holder's document.
                         * @example 39295416023
                         */
                        document?: string;
                        /**
                         * @description Identifies the type of wallet used in the payment. Please contact our [VTEX Support](https://help.vtex.com/support) to enable this field in your account.
                         * @example Google Pay
                         */
                        paymentOrigin?: string;
                        /**
                         * @description 3DS cryptogram information (available only for payments transactions with DPAN cards). Please contact our [VTEX Support](https://help.vtex.com/support) to enable this field in your account.
                         * @example /gAAAAAAAbQHWutaqaYsQLsAAAA=
                         */
                        cryptogram?: string;
                        /**
                         * @description [Electronic Commerce Indicator](https://support.midtrans.com/hc/en-us/articles/204161150-What-is-ECI-on-3DS-protocol-). This value indicates the result of the authentication attempt on transactions enforced by the 3DS (available only for payments transactions with DPAN cards). Please contact our [VTEX Support](https://help.vtex.com/support) to enable this field in your account.
                         * @example 05
                         */
                        eci?: string;
                    };
                    /** @description Minicart information. */
                    miniCart: {
                        /**
                         * @description Total shipping value.
                         * @example 2
                         */
                        shippingValue: number;
                        /**
                         * @description Total tax value.
                         * @example 1
                         */
                        taxValue: number;
                        /** @description Buyer information. */
                        buyer: {
                            /**
                             * @description Buyer's unique identifier.
                             * @example c1245228-1c68-11e6-94ac-0afa86a846a5
                             */
                            id?: string;
                            /**
                             * @description Buyer's first name.
                             * @example John
                             */
                            firstName: string;
                            /**
                             * @description Buyer's last name.
                             * @example Doe
                             */
                            lastName: string;
                            /**
                             * @description Buyer's document number.
                             * @example 01234567890
                             */
                            document: string;
                            /**
                             * @description Buyer's document type.
                             * @example cpf
                             */
                            documentType: string;
                            /**
                             * @description Buyer's email.
                             * @example john.doe@example.com
                             */
                            email: string;
                            /**
                             * @description Buyer's phone number.
                             * @example +5521999999999
                             */
                            phone: string;
                            /**
                             * @description Indicates whether or not the buyer is corporate. If `true`, the fields `corporateName`, `tradeName` and `corporateDocument` are required.
                             * @example false
                             */
                            isCorporate?: boolean;
                            /**
                             * @description Buyer's corporate name. This field is required if `isCorporate` is `true`.
                             * @example VTEX
                             */
                            corporateName?: string | null;
                            /**
                             * @description Buyer's trade name. This field is required if `isCorporate` is `true`.
                             * @example VTEX
                             */
                            tradeName?: string | null;
                            /**
                             * @description Buyer's corporate document number. This field is required if `isCorporate` is `true`.
                             * @example 123456789
                             */
                            corporateDocument?: string | null;
                            /**
                             * @description Date when the buyer's profile was created in yyyy-MM-ddTHH:mm:ss format.
                             * @example 2020-02-18T18:17:45
                             */
                            createdDate?: string;
                        };
                        /** @description Information about the address where the purchase will be delivered. */
                        shippingAddress: {
                            /**
                             * @description Shipping address country code (ISO 3166 alpha-3).
                             * @example BRA
                             */
                            country: string;
                            /**
                             * @description Shipping address street.
                             * @example Praia de Botafogo St.
                             */
                            street: string;
                            /**
                             * @description Shipping address number.
                             * @example 300
                             */
                            number: string;
                            /**
                             * @description Shipping address complement.
                             * @example 3rd Floor
                             */
                            complement?: string;
                            /**
                             * @description Shipping address neighborhood.
                             * @example Botafogo
                             */
                            neighborhood: string;
                            /**
                             * @description Shipping address postal code.
                             * @example 22250040
                             */
                            postalCode: string;
                            /**
                             * @description Shipping address city.
                             * @example Rio de Janeiro
                             */
                            city: string;
                            /**
                             * @description Shipping address state/province.
                             * @example RJ
                             */
                            state: string;
                        };
                        /** @description Buyer's billing address information. */
                        billingAddress: {
                            /**
                             * @description Billing address country code (ISO 3166 alpha-3).
                             * @example BRA
                             */
                            country: string;
                            /**
                             * @description Billing address street.
                             * @example Brigadeiro Faria Lima Avenue
                             */
                            street: string;
                            /**
                             * @description Billing address number.
                             * @example 4440
                             */
                            number: string;
                            /**
                             * @description Billing address complement.
                             * @example 10th Floor
                             */
                            complement?: string;
                            /**
                             * @description Billing address neighborhood.
                             * @example Itaim Bibi
                             */
                            neighborhood: string;
                            /**
                             * @description Billing address postal code.
                             * @example 04538132
                             */
                            postalCode: string;
                            /**
                             * @description Billing address city.
                             * @example São Paulo
                             */
                            city: string;
                            /**
                             * @description Billing address state/province.
                             * @example SP
                             */
                            state: string;
                        };
                        /** @description Items of the cart of the purchase. */
                        items: {
                            /**
                             * @description Item identifier.
                             * @example 8
                             */
                            id: string;
                            /**
                             * @description Item name.
                             * @example Tenis Preto I
                             */
                            name: string;
                            /**
                             * @description Item price per unity.
                             * @example 30.9
                             */
                            price: number;
                            /**
                             * @description Item quantity.
                             * @example 1
                             */
                            quantity: number;
                            /**
                             * @description Discount received for the item.
                             * @example 0
                             */
                            discount: number;
                            /**
                             * @description The delivery SLA selected for this item. Possible values in Brazil, for instance, are PAC, SEDEX.
                             * @example Normal
                             */
                            deliveryType?: string;
                            /**
                             * @description The item category Id.
                             * @example 5
                             */
                            categoryId?: string;
                            /**
                             * @description In case of a marketplace transaction, this is the Id of the seller for this specific item. Otherwise, this is filled with a '1'.
                             * @example 1
                             */
                            sellerId?: string;
                            /**
                             * @description Value of the sum of all Taxes applied to each item. Rates are in percentage, so 5% is represented as 0.05.
                             * @example 0.05
                             */
                            taxRate?: number;
                            /**
                             * @description Total Tax value of the item (taxRate times value).
                             * @example 1.54
                             */
                            taxValue?: number;
                        }[];
                    };
                    /** @description Array containing the information for the recipients of this payment in case the Payment Provider is configured to allow the split of payments. */
                    recipients?: {
                        /**
                         * @description Recipient identifier.
                         * @example mystore
                         */
                        id: string;
                        /**
                         * @description Recipient name.
                         * @example Company ABC
                         */
                        name: string;
                        /**
                         * @description Recipient document type.
                         * @example CNPJ
                         */
                        documentType: string;
                        /**
                         * @description Recipient document number.
                         * @example 24830098000172
                         */
                        document: string;
                        /**
                         * @description Indicates if the recipient is the seller or the marketplace.
                         * @example seller
                         */
                        role: string;
                        /**
                         * @description Indicates whether or not this recipient is charged for processing fees.
                         * @example true
                         */
                        chargeProcessingFee?: boolean;
                        /**
                         * @description Indicates whether or not this recipient is liable to chargebacks.
                         * @example true
                         */
                        chargebackLiable?: boolean;
                        /**
                         * @description Amount due to this recipient.
                         * @example 13.8
                         */
                        amount: number;
                        /**
                         * @description Amount received by the Marketplace.
                         * @example 3
                         */
                        comissionAmount?: number;
                    }[];
                    /** @description Custom fields (for the given Provider) which the merchant must fill. Each element of this array is a key-value pair. */
                    merchantSettings?: {
                        /**
                         * @description Custom field name.
                         * @example Public Merchant ID Test.
                         */
                        name: string;
                        /**
                         * @description Custom field value.
                         * @example 1
                         */
                        value: string;
                    }[];
                    /**
                     * @description The order URL from merchant's backoffice.
                     * @example https://admin.mystore.example.com/orders?q=1072430428324
                     */
                    url: string;
                    /**
                     * @description The URL to call for the Inbound Request (BETA).
                     * @example https://api.mystore.example.com/checkout/order/1072430428324/inbound-request/:action
                     */
                    inboundRequestUrl?: string;
                    /**
                     * @description The URL for the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) to authorize the Payment (this field is absent in case the provider does not use the Secure Proxy).
                     * @example https://account.vtexpayments.com.br/.../proxy
                     */
                    secureProxyUrl?: string;
                    /**
                     * @description Indicates whether or not this request is being sent from a sandbox environment.
                     * @example false
                     */
                    sandBoxMode?: boolean;
                    /**
                     * @description Total amount of the shopping cart that this payment is part of. It can be used together with the value to calculate the percentage that this payment represents of the total.
                     * @example 31.9
                     */
                    totalCartValue?: number;
                    /**
                     * @description The URL you need to call to send the callbacks (notification or retry) of payment status changes.
                     * @example https://coinshop.vtexpayments.com.br/payment-provider/transactions/900BA26FEAC84332A53AE1007E740DE3/payments/E713830E32764BF99028A0A275841BFC/notification
                     */
                    callbackUrl: string;
                    /**
                     * @description The URL you need to redirect the end user back to merchant's store when using the redirect flow.
                     * @example https://mystore.example.com/checkout/order/1072430428324
                     */
                    returnUrl: string;
                    /** @description Array containing metadata fields sent from the provider to the payment gateway. */
                    connectorMetadata?: {
                        /**
                         * @description The name of the metadata to be stored in the gateway (limited to 20 characters).
                         * @example MetadataName
                         */
                        name: string;
                        /**
                         * @description The value of the metadata stored (limited to 200 characters).
                         * @example MetadataValue
                         */
                        value: string;
                    }[];
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
                    "application/json": components["schemas"]["Success-Approved"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Fail-BadRequest"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Fail-BadRequest"];
                };
            };
        };
    };
    CancelPayment: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description VTEX payment identifier. */
                paymentId: components["parameters"]["paymentId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CancelPaymentRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success1"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Fail-GenericError1"];
                };
            };
            /** @description Not Implemented */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Fail-GenericError1"];
                };
            };
        };
    };
    SettlePayment: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description VTEX payment identifier. */
                paymentId: components["parameters"]["paymentId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SettlePayment"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success2"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Fail-GenericError2"];
                };
            };
        };
    };
    RefundPayment: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description VTEX payment identifier. */
                paymentId: components["parameters"]["paymentId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RefundPayment"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success3"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Fail-GenericError3"];
                };
            };
            /** @description Not Implemented */
            501: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Fail-GenericError3"];
                };
            };
        };
    };
    "InboundRequest(BETA)": {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description VTEX payment identifier. */
                paymentId: components["parameters"]["paymentId"];
                /** @description Describes the type of action that will be performed on the route (e.g. hook, enrollment, among others). It is the same `:action` information used in the `inboundRequestsUrl` provided in the [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments?endpoint=post-/payments) endpoint payload. */
                action: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InboundRequest_BETA_Request"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success4"];
                };
            };
        };
    };
    CreateAuthorizationToken: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAuthorizationTokenRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success5"];
                };
            };
        };
    };
    ProviderAuthentication: {
        parameters: {
            query: {
                /** @description VTEX application identifier. */
                applicationId: components["parameters"]["applicationId"];
                /** @description You must generate a token that will be used to identify the same context when we redirect the merchant to your application. */
                token: string;
            };
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK. This endpoint does not return any data in the response body. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetCredentials: {
        parameters: {
            query: {
                /** @description VTEX application identifier. */
                applicationId: components["parameters"]["applicationId"];
                /** @description Code generate by affiliation that will be used to identify the merchant authorization. */
                authorizationCode: string;
            };
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json. */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). To use this header as authorization, check that the `usesProviderHeadersName` field is set to `true` in the payment provider's `configuration.json`. To check the `configuration.json` file, access the route {{connector}}/paymentProvider/configuration.json */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                    "application/json": components["schemas"]["Success6"];
                };
            };
        };
    };
}
