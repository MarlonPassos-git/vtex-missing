export interface paths {
    "/pre-analysis": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Anti-fraud Pre-Analysis Data (optional)
         * @description Receives a new transaction anti-fraud data for (synchronous) pre-analysis. This step is performed before payments authorization.
         *
         *     >⚠️ This endpoint can only be used if your anti-fraud provider already has the pre-analysis function configured within VTEX. To check if it is already configured, in the VTEX Admin, go to **Store Settings > Payments > Settings> Gateway affiliations tab > {your anti-fraud provider option}** and verify if the **Enable risk Pre-Analysis** field is available to be selected. If the **Enable risk Pre-Analysis** field is not available, check with your anti-fraud provider if this feature is available in their integration and open a ticket in our VTEX support to update the connector.
         *
         *     >⚠️ The pre-analysis does not exclude the need for full analysis after payments authorization.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        post: operations["SendAntifraudPreAnalysisData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Anti-fraud Data
         * @description Receives a new transaction anti-fraud data. This step is performed only if all payments are authorized.
         *
         *     VTEX expects that your anti-fraud provider process this request and retrieves the process result. After that, the VTEX order flow will check the response status to cancel or approve the transaction.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        post: operations["SendAntifraudData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transactions/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Anti-fraud Transactions (optional)
         * @description Receives a new transaction anti-fraud data. This step is performed only if all payments are authorized.
         *
         *     VTEX expects that your anti-fraud provider process this request and retrieves the process result. After that, the VTEX order flow will check the response status to cancel or approve the transaction.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        put: operations["UpdateAntifraudTransactions(optional)"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manifest": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Anti-fraud Provider Manifest
         * @description Returns the custom fields of the anti-fraud provider manifest.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [authentication](https://developers.vtex.com/docs/guides/authentication) or [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
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
    "/transactions/{transactions.id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Anti-fraud Status
         * @description Retrieves the anti-fraud analysis status. This request is performed every two hours up to 5 days. After 5 days in `undefined` status, the order will expire and be cancelled.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["GetAntifraudStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/transactions/{transactions.Id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Stop Anti-fraud Analysis (optional)
         * @description Notifies whether the order has been canceled by the store or the buyer before completing the anti-fraud analysis status.
         *
         *      This endpoint is not mandatory for the antifraud flow to work. Check this [developer guide](https://developers.vtex.com/docs/guides/how-the-integration-protocol-between-vtex-and-antifraud-companies-works) for more details.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        delete: operations["StopAntifraudAnalysis(optional)"];
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
         * 1. Retrieve Token
         * @description This endpoint is used to retrieve a payment provider token.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        post: operations["1.RetrieveToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/redirect": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 2. Redirect
         * @description Through this endpoint, VTEX will redirect the store administrator to the Payment provider website using the `token` retrieved in the [previous request](https://developers.vtex.com/docs/api-reference/antifraud-provider-protocol#post-/authorization/token).
         *
         *     At this point in the flow, the provider shows the login site to the store admin and authorizes VTEX to use its integration as a valid Payment Provider Processor. After that, your server generates an `authorizationCode`.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["2.Redirect"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/authorizationCode": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * 3. Return to VTEX
         * @description Through this endpoint, the provider will redirect the store administrator to the VTEX website using the `returnUrl` passed from VTEX to create token.
         *
         *     The `returnUrl` must be filled with your query string **authorizationCode**.
         *
         *     Example:
         *
         *     If you receive the following URL:
         *
         *     `https://store.vtex.com/return?authorizationCode=&otherparams...`
         *
         *     and your **authorizationCode** is `pro2018`. Then, you redirect the store administrator to: `https://store.vtex.com/return?authorizationCode=pro2018&otherparams...`.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["3.ReturntoVTEX"];
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
         * 4. Get Credentials
         * @description Retrieves merchant credentials.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["4.GetCredentials"];
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
         * Success
         * @example {
         *       "customFields": [
         *         {
         *           "name": "ApiKey",
         *           "type": "text"
         *         },
         *         {
         *           "name": "AnalysisLocation",
         *           "type": "select",
         *           "options": [
         *             {
         *               "text": "MEX",
         *               "value": "Latin America"
         *             },
         *             {
         *               "text": "USA",
         *               "value": "United States"
         *             }
         *           ]
         *         }
         *       ]
         *     }
         */
        Success: {
            /** @description Indicates the requirement of cardholder document in card transactions. The field has three possible values: `required`, `optional`, or `unused`. */
            cardholderDocument?: string;
            /** @description Custom fields information. */
            customFields: {
                [key: string]: unknown;
            }[];
        };
        SendAntifraudDataRequest: {
            /**
             * @description VTEX transaction ID. The ID of the transaction related with this payment.
             * @example D3AA1FC8372E430E8236649DB5EBD08E
             */
            id: string;
            /**
             * @description VTEX order reference key. The key of the order (from VTEX Orders system) related with this payment.
             * @example vtexargentina
             */
            reference: string;
            /**
             * @description VTEX transaction order value.
             * @example 10
             */
            value: number;
            /**
             * @description Original IP address from browser.
             * @example 10.0.0.1
             */
            ip: string;
            /**
             * @description Store name. This is the same name used to access the store Admin via URL.
             * @example serasa
             */
            store: string;
            /**
             * @description Device fingerprint generated by the provider. This is generated by using Google Tag Manager that the provider implements. This field is optional, is sent only if received.
             * @example Generated_using_GTM_Store_Is_Responsible_To_Configure
             */
            deviceFingerprint: string;
            miniCart: components["schemas"]["MiniCart"];
            payments: components["schemas"]["Payment"];
            /**
             * @description URL to be called when the payment status changes. For more information, see [Authorization and Callback URL](https://developers.vtex.com/docs/guides/payments-integration-purchase-flows#authorization).
             * @example https://hook.vtex.com/notifyIfChangeStatus
             */
            hook: string;
            /**
             * @description Date and time when the transaction started, in ISO 8601 format.
             * @example 2020-10-30T18:08:23Z
             */
            transactionStartDate: string;
            /** @description Custom fields (for the given Provider) which the Merchant must fill. Each element of this array is a key-value pair. */
            merchantSettings?: {
                /**
                 * @description Custom field name.
                 * @example Country
                 */
                name: string;
                /**
                 * @description Custom field name.
                 * @example BRL
                 */
                value: string;
            }[];
        };
        /** @description Minicart information. */
        MiniCart: {
            buyer: components["schemas"]["Buyer"];
            shipping: components["schemas"]["Shipping"];
            /** @description Items information. */
            items: components["schemas"]["Item"][];
            /**
             * @description Total tax value.
             * @example 5.58
             */
            taxValue: number;
            listRegistry: components["schemas"]["ListRegistry"];
        };
        /** @description Buyer information. */
        Buyer: {
            /**
             * @description VTEX buyer ID. The unique identifier of the buyer.
             * @example c1245228-1c68-11e6-94ac-0afa86a846a5
             */
            id: string;
            /**
             * @description First name of the buyer.
             * @example John
             */
            firstName: string;
            /**
             * @description Last name of the buyer.
             * @example Doe
             */
            lastName: string;
            /**
             * @description Document number of the buyer.
             * @example 012.345.678-90
             */
            document: string;
            /**
             * @description Type of document of the buyer, which depends on their country.
             * @example CPF
             */
            documentType: string;
            /**
             * @description Email of the buyer.
             * @example john@doe.com
             */
            email: string;
            /**
             * @description Phone number of the buyer.
             * @example +5521987654321
             */
            phone: string;
            address: components["schemas"]["Address"];
        };
        /** @description Address information. */
        Address: {
            /**
             * @description Buyer address country.
             * @example BRA
             */
            country: string;
            /**
             * @description Buyer address street.
             * @example Rua Praia de Botafogo
             */
            street: string;
            /**
             * @description Buyer address number.
             * @example 518
             */
            number: string;
            /**
             * @description Buyer address complement.
             * @example 2o. andar
             */
            complement: string;
            /**
             * @description Buyer address neighborhood.
             * @example Botafogo
             */
            neighborhood: string;
            /**
             * @description Buyer address postal code.
             * @example 22250-040
             */
            postalCode: string;
            /**
             * @description Buyer address city.
             * @example Rio de Janeiro
             */
            city: string;
            /**
             * @description Buyer address state.
             * @example RJ
             */
            state: string;
        };
        /** @description Shipping information. */
        Shipping: {
            /**
             * @description Shipping value with two decimal places.
             * @example 8.41
             */
            value: number;
            /**
             * @description Estimated shipping date ISO 8601.
             * @example 2017-08-02T14:46:47
             */
            estimatedDate: string;
            address: components["schemas"]["Address"];
        };
        /** @description Item information. */
        Item: {
            /**
             * @description SKU ID.
             * @example 132981
             */
            id: string;
            /**
             * @description Product name.
             * @example Shirt
             */
            name: string;
            /**
             * @description Item price.
             * @example 20.51
             */
            price: number;
            /**
             * @description Quantity of this item in the cart.
             * @example 2
             */
            quantity: number;
            /**
             * @description Type of delivery configured by the store.
             * @example Normal
             */
            deliveryType: string;
            /**
             * @description Each item can have a separate shipping SLA in minutes.
             * @example 4320
             */
            deliverySlaInMinutes: number;
            /**
             * @description Category ID for the item. Configured by each store.
             * @example 111
             */
            categoryId: string;
            /**
             * @description Category name for the Item. Configured by each store.
             * @example Electronica
             */
            categoryName: string;
            /**
             * @description Discount applied on item(s) two decimal places.
             * @example 1.99
             */
            discount: number;
            /**
             * @description Discount applied on item(s), with two decimal places separated by `.`.
             * @example vtexargentina
             */
            sellerId: string;
        };
        /** @description ListRegistry information. */
        ListRegistry: {
            /**
             * @description List name defined by the store.
             * @example My gift list.
             */
            name: string;
            /**
             * @description Defines if the order will be delivered to list creator (`true`) or not (`false`).
             * @example false
             */
            deliveryToOwner: boolean;
        };
        /** @description Payment information. */
        Payment: {
            /**
             * @description Payment ID unique identifier in VTEX.
             * @example 2D00FEBB
             */
            id: string;
            /**
             * @description Payment method used for the buyer.
             * @example CreditCard
             */
            method: string;
            /**
             * @description Payment name used for the buyer. This name could be the brand card or the VTEX payment method.
             * @example Visa
             */
            name?: string;
            /**
             * @description Payment value, with two decimal places separated by `.`.
             * @example 63.98
             */
            value: number;
            /**
             * @description Currency used in each payment in the transaction, in ISO 4217 format.
             * @example BRL
             */
            currencyIso4217: string;
            /**
             * @description Number of installments.
             * @example 3
             */
            installments: number;
            details?: components["schemas"]["Details"];
        };
        /** @description Details information. */
        Details: {
            /**
             * @description Abbreviation for 'Bank Identification Number', which is a code that identifies the institution responsible for issuing the credit card.
             * @example 507860
             */
            bin: string;
            /**
             * @description Credit card identifier number last digits.
             * @example 2798
             */
            lastDigits: string;
            /**
             * @description Credit card owner.
             * @example John Doe
             */
            holder: string;
            address: components["schemas"]["Address"];
        };
        SendAntifraudData: {
            /**
             * @description VTEX transaction ID. The ID of this transaction must be in the response.
             * @example D3AA1F
             */
            id: string;
            /**
             * @description Provider transaction ID. The ID of this transaction must be in the response. The anti-fraud provider must generate a unique transaction ID.
             * @example 4692c1
             */
            tid: string;
            /**
             * @description Error code returned from provider. It will be logged in transaction interactions log.
             * @example customCode
             */
            code: string;
            /**
             * @description Error message returned from provider. It will be logged in transaction interactions log.
             * @example customMessage
             */
            message: string;
            /**
             * @description Pre-analysis status from provider. Must be `approved` or `denied`.
             * @example approved
             * @enum {unknown}
             */
            status: "approved" | "denied";
            /**
             * @description Value of the risk score. The maximum value is `100.00`, which means total fraud.
             * @example 5.01
             */
            score: number;
            /**
             * @description Pre-analysis type. Must be `automatic`.
             * @example automatic
             */
            analysisType: string;
            responses: components["schemas"]["Responses"];
        };
        /** @description Responses information. */
        Responses: {
            /**
             * @description Any foo information.
             * @example anyFoo
             */
            foo: string;
            /**
             * @description Any custom value.
             * @example customAnyValue
             */
            custom: string;
        };
        UpdateAntifraudTransactionsoptionalRequest: {
            /**
             * @description VTEX transaction ID. The ID of the transaction related with this payment.
             * @example D3AA1FC8372E430E8236649DB5EBD08E
             */
            id: string;
            /**
             * @description VTEX order reference key. The key of the order (from VTEX Orders system) related with this payment.
             * @example v32478982vtx-01
             */
            reference: string;
            /**
             * @description VTEX transaction order value.
             * @example 10
             */
            value: number;
            /**
             * @description The original IP address from the browser.
             * @example 10.0.0.1
             */
            ip: string;
            /**
             * @description VTEX has a main name for the store. This unique name is often used in URL to access VTEX configurations.
             * @example serasa
             */
            store: string;
            /**
             * @description Device fingerprint generated by the provider. This is generated by using Google Tag Manager that the provider implements.
             * @example Generated_using_GTM_Store_Is_Responsible_To_Configure
             */
            deviceFingerprint: string;
            miniCart: components["schemas"]["MiniCart"];
            /** @description Payments information. */
            payments: components["schemas"]["Payment"][];
            hook: string;
        };
        ApproveAntifraudAnalysisResponse: {
            /** @description VTEX transaction ID. The ID of this transaction must be in the response. */
            id: string;
            /** @description Transaction status from provider. Must be one of the values: `approved`, `denied` or `undefined`. */
            status: string;
            /** @description Fraud risk percentage. */
            fraudRiskPercentage: number;
            /** @description Analysis type. Valid values are `automatic` or `manual`. */
            analysisType: string;
            /** @description Value dictionary to add custom responses from analysis. */
            responses: string | null;
        };
        GetAntifraudStatus: {
            /** @description VTEX transaction ID. The ID of this transaction must be in the response. */
            id: string;
            /** @description Provider transaction ID. The ID of this transaction must be in the response. The anti-fraud provider must generate a unique transaction ID. */
            tid: string;
            /** @description Transaction status from provider. Must be one of the values: `approved`, `denied` or `undefined`. */
            status: string;
            /** @description Fraud risk percentage. */
            fraudRiskPercentage: number;
            /** @description Analysis type. Valid values are `automatic` or `manual`. */
            analysisType: string;
            responses: components["schemas"]["Responses"];
        };
        GetPaymentMethodsSupported: {
            /** @description Payment method name. */
            name: string;
        };
        /** @example {
         *       "applicationId": "vtex",
         *       "returnUrl": "https://storevtex.vtexpayments.com/?authorizationCode="
         *     } */
        "1.RetrieveTokenRequest": {
            /** @description This value is always identified as `vtex`. */
            applicationId: string;
            /** @description VTEX website URL. You will redirect the user after they complete login on the payment provider's website. The URL should contain a query string parameter called `authorizationCode` which will be passed empty and which you must fill in before returning the user. */
            returnUrl: string;
        };
        /** @example {
         *       "applicationId": "vtex",
         *       "token": "358a5bea-07d0-4122-888a-54ab70b5f02f"
         *     } */
        "1.RetrieveToken": {
            /** @description This value is always identified as `vtex`. */
            applicationId: string;
            /** @description Payment Provider Token. Used to identify the context after you receive the redirected user to your site. */
            token: string;
        };
        /** @example {
         *       "applicationId": "vtex",
         *       "appKey": "c5a5e3f1-4a77-4a00-8b53-0d1adb3e9628",
         *       "appToken": "57ea254d-f3d3-488d-88d7-129766037ed1"
         *     } */
        "3.GetCredentials": {
            /** @description This value is always identified as `vtex`. */
            applicationId: string;
            /** @description It will be used in all API requests as X-VTEX-API-AppKey. */
            appKey: string;
            /** @description It will be used in all API requests as X-VTEX-API-AppToken. */
            appToken: string;
        };
    };
    responses: never;
    parameters: {
        /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
        "X-PROVIDER-API-AppKey": string;
        /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
        "X-PROVIDER-API-AppToken": string;
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description VTEX transaction ID. This parameter is the same `id` sent in the request body of the [Send Anti-fraud Data endpoint](https://developers.vtex.com/docs/api-reference/antifraud-provider-protocol#post-/transactions). */
        "transactions.Id": string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    SendAntifraudPreAnalysisData: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
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
                "application/json": components["schemas"]["SendAntifraudDataRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendAntifraudData"];
                };
            };
        };
    };
    SendAntifraudData: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
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
                "application/json": components["schemas"]["SendAntifraudDataRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendAntifraudData"];
                };
            };
        };
    };
    "UpdateAntifraudTransactions(optional)": {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description VTEX transaction ID. This parameter is the same `id` sent in the request body of the [Send Anti-fraud Data endpoint](https://developers.vtex.com/docs/api-reference/antifraud-provider-protocol#post-/transactions). */
                "transactions.Id": components["parameters"]["transactions.Id"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "id": "D3AA1FC8372E430E8236649DB5EBD08E",
                 *       "reference": "v32478982vtx-01",
                 *       "value": 10,
                 *       "ip": "10.0.0.1",
                 *       "store": "serasa",
                 *       "deviceFingerprint": "Generated_using_GTM_Store_Is_Responsible_To_Configure",
                 *       "miniCart": {
                 *         "buyer": {
                 *           "id": "c1245228-1c68-11e6-94ac-0afa86a846a5",
                 *           "firstName": "John",
                 *           "lastName": "Doe",
                 *           "document": "012.345.678-90",
                 *           "documentType": "CPF",
                 *           "email": "john@doe.com",
                 *           "phone": "+5521987654321",
                 *           "address": {
                 *             "country": "BRA",
                 *             "street": "Rua Praia de Botafogo",
                 *             "number": "518",
                 *             "complement": "2o. andar",
                 *             "neighborhood": "Botafogo",
                 *             "postalCode": "22250-040",
                 *             "city": "Rio de Janeiro",
                 *             "state": "RJ"
                 *           }
                 *         },
                 *         "shipping": {
                 *           "value": 8.41,
                 *           "estimatedDate": "2017-08-02T14:46:47",
                 *           "address": {
                 *             "country": "BRA",
                 *             "street": "Rua Praia de Botafogo",
                 *             "number": "518",
                 *             "complement": "2o. andar",
                 *             "neighborhood": "Botafogo",
                 *             "postalCode": "22250-040",
                 *             "city": "Rio de Janeiro",
                 *             "state": "RJ"
                 *           }
                 *         },
                 *         "items": [
                 *           {
                 *             "id": "132981",
                 *             "name": "Some useful product",
                 *             "price": 20.51,
                 *             "quantity": 2,
                 *             "deliveryType": "Normal",
                 *             "deliverySlaInMinutes": 4320,
                 *             "categoryId": "111",
                 *             "categoryName": "Electronica",
                 *             "discount": 1.99,
                 *             "sellerId": "vtexargentina"
                 *           },
                 *           {
                 *             "id": "123242",
                 *             "name": "Some useless product",
                 *             "price": 21.98,
                 *             "quantity": 1,
                 *             "deliveryType": "Normal",
                 *             "deliverySlaInMinutes": 4320,
                 *             "categoryId": "123",
                 *             "categoryName": "Lar",
                 *             "discount": 1.01,
                 *             "sellerId": "vtexargentina"
                 *           }
                 *         ],
                 *         "taxValue": 5.58,
                 *         "listRegistry": {
                 *           "name": "Minha lista Presente",
                 *           "deliveryToOwner": false
                 *         }
                 *       },
                 *       "payments": [
                 *         {
                 *           "id": "2D00FE",
                 *           "method": "CreditCard",
                 *           "name": "Visa",
                 *           "value": 63.98,
                 *           "currencyIso4217": "BRL",
                 *           "installments": 3,
                 *           "details": {
                 *             "bin": "507860",
                 *             "lastDigits": "2798",
                 *             "holder": "John Doe",
                 *             "address": {
                 *               "country": "BRA",
                 *               "street": "Rua Praia de Botafogo",
                 *               "number": "518",
                 *               "complement": "2o. andar",
                 *               "neighborhood": "Botafogo",
                 *               "postalCode": "22250-040",
                 *               "city": "Rio de Janeiro",
                 *               "state": "RJ"
                 *             }
                 *           }
                 *         },
                 *         {
                 *           "id": "04D430E517B2494FBC3DF7721CCDACC7",
                 *           "method": "GiftCard",
                 *           "value": 10.01,
                 *           "currencyIso4217": "BRL",
                 *           "installments": 1
                 *         }
                 *       ],
                 *       "hook": "https://hook.vtex.com/notifyIfChangeStatus"
                 *     } */
                "application/json": components["schemas"]["UpdateAntifraudTransactionsoptionalRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApproveAntifraudAnalysisResponse"];
                };
            };
        };
    };
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
                    "application/json": components["schemas"]["Success"];
                };
            };
        };
    };
    GetAntifraudStatus: {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description VTEX transaction ID. This parameter is the same `id` sent in the request body of the [Send Anti-fraud Data endpoint](https://developers.vtex.com/docs/api-reference/antifraud-provider-protocol#post-/transactions). */
                "transactions.Id": components["parameters"]["transactions.Id"];
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
                    "application/json": components["schemas"]["GetAntifraudStatus"];
                };
            };
        };
    };
    "StopAntifraudAnalysis(optional)": {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description VTEX transaction ID. This parameter is the same `id` sent in the request body of the [Send Anti-fraud Data endpoint](https://developers.vtex.com/docs/api-reference/antifraud-provider-protocol#post-/transactions). */
                "transactions.Id": components["parameters"]["transactions.Id"];
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
                    "application/json": components["schemas"]["GetPaymentMethodsSupported"][];
                };
            };
        };
    };
    "1.RetrieveToken": {
        parameters: {
            query?: never;
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
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
                "application/json": components["schemas"]["1.RetrieveTokenRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["1.RetrieveToken"];
                };
            };
        };
    };
    "2.Redirect": {
        parameters: {
            query: {
                /** @description Token information. */
                token: string;
                /** @description VTEX application identifier. */
                applicationId: string;
            };
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
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
    "3.ReturntoVTEX": {
        parameters: {
            query: {
                /** @description Provider authorization code information. */
                providerAuthorizationCode: string;
            };
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
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
    "4.GetCredentials": {
        parameters: {
            query: {
                /** @description Code generate by affiliation that will be used to identify the merchant authorization. */
                authorizationCode: string;
                /** @description VTEX application identifier. */
                applicationId: string;
            };
            header: {
                /** @description Unique identifier created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppKey": components["parameters"]["X-PROVIDER-API-AppKey"];
                /** @description Unique token created by the provider and configured on the provider configuration page (Admin VTEX). */
                "X-PROVIDER-API-AppToken": components["parameters"]["X-PROVIDER-API-AppToken"];
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
                    "application/json": components["schemas"]["3.GetCredentials"];
                };
            };
        };
    };
}
