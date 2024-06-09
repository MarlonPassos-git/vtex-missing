export interface paths {
    "/pvt/orders/{marketplaceOrderId}/invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send invoice
         * @description This request is sent by the external seller to the VTEX marketplace to send invoice information.
         *
         *     This can be necessary in a regular order or in the case of a return. The `type` field is used to indicate which of these is the case.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["send-invoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send tracking information
         * @description This request is sent by the external seller to the VTEX marketplace to add tracking information to a given order's invoice, in case it is necessary to do so after the invoice has been sent.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise, they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **Notify invoice** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Allows you to report invoices (NF) and tracking data | Notify invoice |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["send-tracking-information"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}/tracking": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update tracking status
         * @description This request is sent by the external seller to the VTEX marketplace to update a given order's tracking status.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | OMS | OMS access | **Notify invoice** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Allows you to report invoices (NF) and tracking data | Notify invoice |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["update-tracking-status"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pvt/orders/{marketplaceOrderId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel order in marketplace
         * @description This request is sent by the external seller to the VTEX marketplace to cancel an order.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise, they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Order Cancellation** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Cancel Orders | Order Cancellation |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["cancel-order-in-marketplace"];
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
        /** @description Object used to send invoice information related to an order. */
        requestSendInvoice: {
            /**
             * @description Indicates the type of the invoice. Use `"Output"` for regular orders and `"Input"` for returns.
             * @example Output
             */
            type: string;
            /**
             * @description Invoice number.
             * @example NFe-00002
             */
            invoiceNumber: string;
            /**
             * @description Courier, if available on invoice.
             * @example courier-example
             */
            courier?: string;
            /**
             * @description Tracking number.
             * @example 12345678abc
             */
            trackingNumber?: string;
            /**
             * @description Tracking URL.
             * @example https://courier-example.com/tracking
             */
            trackingUrl?: string;
            /** @description Array containing the order items. */
            items: {
                /**
                 * @description SKU ID.
                 * @example 6
                 */
                id: string;
                /**
                 * @description Quantity of items of the SKU in the cart.
                 * @example 1
                 */
                quantity: number;
                /**
                 * @description Price of the item.
                 * @example 5500
                 */
                price: number;
            }[];
            /**
             * @description Issuance date.
             * @example 2021-05-21T10:00:00
             */
            issuanceDate?: string;
            /**
             * @description Invoice value.
             * @example 6000
             */
            invoiceValue?: number;
        };
        /** @example {
         *       "date": "2021-06-09T15:22:56.7612218-02:00",
         *       "orderId": "1138342255777-01",
         *       "receipt": "527b1ae251264ef1b7a9b597cd8f16b9"
         *     } */
        responseFulfill: {
            /** @description Request processing date and time. */
            date?: string;
            /** @description Order ID referring to the Invoice number sent. */
            orderId?: string;
            /** @description Requisition receipt code. */
            receipt?: string;
        };
        requestSendTracking: {
            /**
             * @description Courier.
             * @example courier-example
             */
            courier: string;
            /**
             * @description Tracking number.
             * @example 12345678abc
             */
            trackingNumber: string;
            /**
             * @description Tracking URL.
             * @example https://courier-example.com/tracking
             */
            trackingUrl: string;
            /**
             * @description Date of order dispatch.
             * @example 2021-06-09
             */
            dispatchedDate: string;
        };
        /** @description Request body object used to update the tracking status of an order. */
        requestUpdateTrackingStatus: {
            /**
             * @description Indicates if order has been delivered. `false` if it is in transit.
             * @example true
             */
            isDelivered: boolean;
            /** @description Array containing information on each tracking event received. */
            events?: {
                /**
                 * @description City where the event ocurred.
                 * @example Rio de Janeiro
                 */
                city?: string;
                /**
                 * @description State where the event ocurred.
                 * @example Rio de Janeiro
                 */
                state?: string;
                /**
                 * @description Description of the event.
                 * @example Order delivered.
                 */
                description?: string;
                /**
                 * @description Date when event ocurred.
                 * @example 2021-03-16
                 */
                date?: string;
            }[];
        };
        /** @description Object used to request the cancellation of an order on the marketplace. */
        requestCancelOrderMarketplace: {
            /**
             * @description Insert here the reason for the order's cancellation.
             * @example Product is unavailable.
             */
            reason: string;
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement). */
        marketplaceServicesEndpoint: string;
        /** @description Identifies the order in the marketplace. */
        marketplaceOrderId: string;
        /** @description Invoice number. */
        invoiceNumber: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "send-invoice": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description Identifies the order in the marketplace. */
                marketplaceOrderId: components["parameters"]["marketplaceOrderId"];
                /** @description This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement). */
                marketplaceServicesEndpoint: components["parameters"]["marketplaceServicesEndpoint"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["requestSendInvoice"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseFulfill"];
                };
            };
        };
    };
    "send-tracking-information": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement). */
                marketplaceServicesEndpoint: components["parameters"]["marketplaceServicesEndpoint"];
                /** @description Identifies the order in the marketplace. */
                marketplaceOrderId: components["parameters"]["marketplaceOrderId"];
                /** @description Invoice number. */
                invoiceNumber: components["parameters"]["invoiceNumber"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "courier": "courier-example",
                 *       "trackingNumber": "12345678abc",
                 *       "trackingUrl": "https://courier-example.com/tracking",
                 *       "dispatchedDate": "2021-06-09"
                 *     } */
                "application/json": components["schemas"]["requestSendTracking"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseFulfill"];
                };
            };
        };
    };
    "update-tracking-status": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement). */
                marketplaceServicesEndpoint: components["parameters"]["marketplaceServicesEndpoint"];
                /** @description Identifies the order in the marketplace. */
                marketplaceOrderId: components["parameters"]["marketplaceOrderId"];
                /** @description Invoice number. */
                invoiceNumber: components["parameters"]["invoiceNumber"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["requestUpdateTrackingStatus"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseFulfill"];
                };
            };
        };
    };
    "cancel-order-in-marketplace": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement). */
                marketplaceServicesEndpoint: components["parameters"]["marketplaceServicesEndpoint"];
                /** @description Identifies the order in the marketplace. */
                marketplaceOrderId: components["parameters"]["marketplaceOrderId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["requestCancelOrderMarketplace"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseFulfill"];
                };
            };
        };
    };
}
