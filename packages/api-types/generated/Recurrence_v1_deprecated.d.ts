export interface paths {
    "/subscriptions/{recurrenceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscription by recurrenceId
         * @description Retrieves a given Subscription (formerly recurrence) by recurrenceId.
         */
        get: operations["GetRecurrencebyrecurrenceId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update partial Subscription
         * @description Updates partial information of a given subscription (formerly Recurrence).
         */
        patch: operations["Updatepartialrecurrence"];
        trace?: never;
    };
    "/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscriptions
         * @description Retrieves a given Subscription (formerly recurrence). There are three options of filtering your Subscruptions v1. It's possible to get a list of all Subscriptions v1, by not adding any query params to your request, and simply executing a call to the url. It is also possible to list the Subscriptions by email, filtering by the email query param. And finnally, it is possible to list recurrences with failures on the last execution cycle, filtering by the cycleStatus query param.
         */
        get: operations["GetRecurrencebyemail"];
        /**
         * Update Subscription
         * @description Updates details of a given Subscription (formerly recurrence).
         */
        put: operations["Updaterecurrence"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/{recurrenceId}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Subscription item
         * @description Adds an item to a Subscription (formerly Recurrence).
         */
        post: operations["Addrecurrenceitem"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/{recurrenceId}/reindex": {
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
         * Reindex Subscription
         * @description Alters the frequency of a given Subscription (formerly Recurrence) by changing period and interval.
         */
        patch: operations["Reindexrecurrence"];
        trace?: never;
    };
    "/subscriptions/{recurrenceId}/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscription addresses
         * @description Retrieves the addresses attached to a given subscription (formerly recurrence) by recurrenceId.
         */
        get: operations["Getrecurrenceaddresses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/{recurrenceid}/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get payment accounts
         * @description Lists payment accounts of a given Subscription (formerly Recurrence) by recurrenceId.
         */
        get: operations["Getpaymentaccounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscription settings
         * @description Retrieves your store's Subscriptions' (formerly recurrence) settings.
         */
        get: operations["Getrecurrencesettings"];
        /**
         * Update Subscription settings
         * @description Updates the Subscriptions' (formerly Recurrence) settings of your store by salesChannel and defaultSLA.
         */
        put: operations["Updaterecurrencesettings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get self Subscription
         * @description Lists details of your self Subscription (formerly Recurrence).
         */
        get: operations["Getselfrecurrence"];
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
         * AddrecurrenceitemRequest
         * @example {
         *       "sku": "20",
         *       "seller": "1",
         *       "quantity": 2,
         *       "frequency": {
         *         "periodicity": "monthly",
         *         "interval": 1
         *       },
         *       "shippingAddressId": "-1461618656161"
         *     }
         */
        AddrecurrenceitemRequest: {
            sku: string;
            seller: string;
            /** Format: int32 */
            quantity: number;
            frequency: components["schemas"]["Frequency"];
            shippingAddressId: string;
        };
        /**
         * Frequency
         * @example {
         *       "periodicity": "monthly",
         *       "interval": 1
         *     }
         */
        Frequency: {
            periodicity: string;
            /** Format: int32 */
            interval: number;
        };
        /**
         * UpdaterecurrenceRequest
         * @example {
         *       "email": "user@vtex.com.br",
         *       "deliveryDay": 26,
         *       "deliveryWeekday": "Friday",
         *       "items": [
         *         {
         *           "sku": "18",
         *           "seller": "1",
         *           "quantity": 2,
         *           "frequency": {
         *             "periodicity": "weekly",
         *             "interval": 1
         *           },
         *           "shippingAddressId": "-1461618656161"
         *         }
         *       ],
         *       "paymentAccountId": "87FE21B06C0D42908D31A5B11E6FC043"
         *     }
         */
        UpdaterecurrenceRequest: {
            email: string;
            /** Format: int32 */
            deliveryDay: number;
            deliveryWeekday: string;
            items: components["schemas"]["Item"][];
            paymentAccountId: string;
        };
        /**
         * Item
         * @example {
         *       "sku": "18",
         *       "seller": "1",
         *       "quantity": 2,
         *       "frequency": {
         *         "periodicity": "weekly",
         *         "interval": 1
         *       },
         *       "shippingAddressId": "-1461618656161"
         *     }
         */
        Item: {
            sku: string;
            seller: string;
            /** Format: int32 */
            quantity: number;
            frequency: components["schemas"]["Frequency"];
            shippingAddressId: string;
        };
        /**
         * UpdatepartialrecurrenceRequest
         * @example {
         *       "deliveryDay": 18,
         *       "deliveryWeekday": "Monday",
         *       "status": "inactive"
         *     }
         */
        UpdatepartialrecurrenceRequest: {
            /** Format: int32 */
            deliveryDay: number;
            deliveryWeekday: string;
            status: string;
        };
        /**
         * ReindexrecurrenceRequest
         * @example {
         *       "frequency": {
         *         "periodicity": "yearly",
         *         "interval": 1
         *       }
         *     }
         */
        ReindexrecurrenceRequest: {
            frequency: components["schemas"]["Frequency"];
        };
        /**
         * UpdaterecurrencesettingsRequest
         * @example {
         *       "salesChannel": "1",
         *       "defaultSLA": "Normal"
         *     }
         */
        UpdaterecurrencesettingsRequest: {
            salesChannel: string;
            defaultSLA: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetRecurrencebyrecurrenceId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path: {
                recurrenceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Updatepartialrecurrence: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path: {
                recurrenceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "deliveryDay": 18,
                 *       "deliveryWeekday": "Monday",
                 *       "status": "inactive"
                 *     } */
                "application/json": components["schemas"]["UpdatepartialrecurrenceRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetRecurrencebyemail: {
        parameters: {
            query?: {
                /** @description If you wish to list tasks by email, insert the desired user's email. */
                email?: string;
                /** @description If you wish to list tasks by Subscriptions with failures on the last execution cycle, insert the desired cycleStatus. */
                cycleStatus?: string;
            };
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Updaterecurrence: {
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
        requestBody: {
            content: {
                /** @example {
                 *       "email": "user@vtex.com.br",
                 *       "deliveryDay": 26,
                 *       "deliveryWeekday": "Friday",
                 *       "items": [
                 *         {
                 *           "sku": "18",
                 *           "seller": "1",
                 *           "quantity": 2,
                 *           "frequency": {
                 *             "periodicity": "weekly",
                 *             "interval": 1
                 *           },
                 *           "shippingAddressId": "-1461618656161"
                 *         }
                 *       ],
                 *       "paymentAccountId": "87FE21B06C0D42908D31A5B11E6FC043"
                 *     } */
                "application/json": components["schemas"]["UpdaterecurrenceRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Addrecurrenceitem: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path: {
                recurrenceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example [
                 *       {
                 *         "sku": "20",
                 *         "seller": "1",
                 *         "quantity": 2,
                 *         "frequency": {
                 *           "periodicity": "monthly",
                 *           "interval": 1
                 *         },
                 *         "shippingAddressId": "-1461618656161"
                 *       }
                 *     ] */
                "application/json": components["schemas"]["AddrecurrenceitemRequest"][];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Reindexrecurrence: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path: {
                recurrenceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example [
                 *       {
                 *         "frequency": {
                 *           "periodicity": "yearly",
                 *           "interval": 1
                 *         }
                 *       }
                 *     ] */
                "application/json": components["schemas"]["ReindexrecurrenceRequest"][];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Getrecurrenceaddresses: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path: {
                recurrenceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Getpaymentaccounts: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path: {
                recurrenceid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Getrecurrencesettings: {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Updaterecurrencesettings: {
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
        requestBody: {
            content: {
                /** @example {
                 *       "salesChannel": "1",
                 *       "defaultSLA": "Normal"
                 *     } */
                "application/json": components["schemas"]["UpdaterecurrencesettingsRequest"];
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Getselfrecurrence: {
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
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
