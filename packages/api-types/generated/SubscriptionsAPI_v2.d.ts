export interface paths {
    "/subscriptions/{subscriptionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve subscription by ID
         * @description Lists Subscription's details, searching by `subscriptionId`.
         */
        get: operations["GetsubscriptionbyId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update Subscriptions by SubscriptionId
         * @description Update, add or alter information of a given Subscription, filtering by `subscriptionId`.
         */
        patch: operations["UpdateSubscriptionsbySubscriptionId"];
        trace?: never;
    };
    "/subscriptions/{subscriptionId}/cancel": {
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
         * Cancel Subscriptions by SubscriptionId
         * @description Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once canceled, it cannot be reactivated.
         */
        patch: operations["CancelSubscriptionsbySubscriptionId"];
        trace?: never;
    };
    "/subscriptions/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscription List
         * @description Retrieves a list of Subscriptions linked to your store.
         */
        get: operations["GetSubscriptionList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
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
         * Retrieve customer's subscriptions
         * @description Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.
         */
        get: operations["Getsubscriptionstocustomer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/{subscriptionId}/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Insert Addresses for Subscription
         * @description Inserts address's information to complement the Subscription details.
         */
        post: operations["InsertAddressesforSubscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions/{subscriptionId}/frequency-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get frequency options by subscriptionId
         * @description Lists frequency options for the Subscription, filtering by `subscriptionId`.
         */
        get: operations["GetfrequencyoptionsbysubscriptionId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscription by groupId
         * @description Lists Subscription details, filtering by `groupId`.
         */
        get: operations["GetSubscriptionbygroupId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update Subscription by groupId
         * @description Updates a Subscription by `groupId`.
         */
        patch: operations["UpdateSubscriptionbygroupId"];
        trace?: never;
    };
    "/subscriptions-group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List All subscription groups
         * @description Retrieves all subscription groups in your store.
         */
        get: operations["GetAllsubscriptiongroup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subscription group list
         * @description Retrieves a list of Subscription groups in your store.
         */
        get: operations["Getsubscriptiongrouplist"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/simulate/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Simulation by subscription-group
         * @description Retrieves Subscription simulations, filtering by groupId.
         */
        get: operations["GetSimulatebysubscription-group"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}/cancel": {
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
         * Cancel Subscription by groupId
         * @description Cancels Subscription by `groupId`
         */
        patch: operations["CancelSubscriptionbygroupId"];
        trace?: never;
    };
    "/subscriptions-group/{groupId}/additem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Subscription item by groupId
         * @description Adds an SKU to a given Subscription, filtering by groupId.
         */
        post: operations["Additemsubscription-groupId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get addresses by groupId
         * @description Lists addresses linked to a given Subscription group, filtering by groupId.
         */
        get: operations["GetaddressesbygroupId"];
        put?: never;
        /**
         * Insert Addresses by groupId
         * @description Insert address information of a given Subscription group, filtering by groupId.
         */
        post: operations["InsertAddressesbygroupId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}/payment-systems": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get payment System by groupId
         * @description Retrieves payment system's information of a given Subscription group, filtering by groupId.
         */
        get: operations["GetpaymentSystembygroupId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}/frequency-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get frequency options by groupId
         * @description Lists frequency options of a given Subscription group, filtering by groupId.
         */
        get: operations["GetfrequencyoptionsbygroupId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupid}/instances/{instanceId}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Retry subscription by groupId
         * @description Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.
         */
        post: operations["RetrysubscriptionbygroupId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}/conversation-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Conversation Message by groupId
         * @description Retrieves the conversation of a given Subscription group, filtering by groupId.
         */
        get: operations["GetConversationMessagebygroupId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}/will-create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List 'Will create' by groupId
         * @description Retrieves Subscription groups listed as 'will create', filtering by groupId.
         */
        get: operations["GetwillcreatebygroupId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/{groupId}/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Subscription group's Configuration
         * @description Retrieves details about a given subscription group's configuration, filtering by groupId.
         */
        get: operations["GetConfigsubscriptionsgroup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subscriptions-group/nextPurchase/{dateStr}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Next purchase
         * @description Lists details of a given subscription group's next purchase, filtering by dateStr.
         */
        get: operations["GetNextpurchase"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/subscriptionsByStatus": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve Subscription report by Status
         * @description Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.
         */
        get: operations["RequestreportbyStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/subscriptionsByDate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve Subscription report by date
         * @description Retrieves a report with the subscriptions created at the date interval requested
         */
        get: operations["Requestreportbydate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/subscriptionsScheduled": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve Subscription report by schedule
         * @description Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested
         */
        get: operations["Requestreportbyschedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/subscriptionsOrderByDate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve Subscription report by order date
         * @description Retrieves a report regarding the Subscriptions created during the date interval of orders.
         */
        get: operations["Requestreportbyorderdate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/subscriptionsUpdated": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Request report by update
         * @description Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.
         */
        get: operations["Requestreportbyupdate"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/report/reportStatus/{reportId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get report status by ID
         * @description Retrieves the Subscription's report status, filtering by its reportId.
         */
        get: operations["GetreportstatusbyID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscriptions Settings
         * @description Lists the current Subscriptions settings in your store.
         */
        get: operations["GetSettings"];
        put?: never;
        /**
         * Edit Subscriptions settings
         * @description Edits Subscriptions settings in your store.
         */
        post: operations["EditSettings"];
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
         * UpdateSubscriptionsbySubscriptionIdRequest
         * @example {
         *       "item": {
         *         "sku": {
         *           "id": "string",
         *           "name": "string",
         *           "productName": "string",
         *           "imageUrl": "string",
         *           "detailUrl": "string",
         *           "nameComplete": "string"
         *         },
         *         "quantity": 0,
         *         "priceAtSubscriptionDate": 0,
         *         "sellingPrice": 0,
         *         "endpoint": "string"
         *       },
         *       "plan": {
         *         "frequency": {
         *           "periodicity": "string",
         *           "interval": 0
         *         },
         *         "validity": {
         *           "begin": "2019-07-04T14:40:30.819Z",
         *           "end": "2019-07-04T14:40:30.819Z"
         *         },
         *         "type": "string"
         *       },
         *       "purchaseSettings": {
         *         "purchaseDay": "string",
         *         "paymentMethod": {
         *           "paymentSystem": "string",
         *           "paymentAccountId": "string"
         *         },
         *         "seller": "string",
         *         "salesChannel": "string",
         *         "selectedSla": "string",
         *         "currencyCode": "string"
         *       },
         *       "shippingAddress": {
         *         "addressId": "string",
         *         "street": "string",
         *         "number": "string",
         *         "complement": "string",
         *         "neighborhood": "string",
         *         "city": "string",
         *         "state": "string",
         *         "country": "string",
         *         "postalCode": "string",
         *         "reference": "string",
         *         "formattedAddress": "string",
         *         "additionalComponents": [
         *           {
         *             "longName": "string",
         *             "shortName": "string",
         *             "types": [
         *               "string"
         *             ]
         *           }
         *         ],
         *         "geoCoordinate": [
         *           0
         *         ],
         *         "receiverName": "string",
         *         "addressType": "string",
         *         "addressName": "string"
         *       },
         *       "status": "string",
         *       "isSkipped": true,
         *       "metadata": [
         *         {
         *           "name": "string",
         *           "properties": {
         *             "additionalProp1": "string",
         *             "additionalProp2": "string",
         *             "additionalProp3": "string"
         *           }
         *         }
         *       ]
         *     }
         */
        UpdateSubscriptionsbySubscriptionIdRequest: {
            item: components["schemas"]["Item"];
            plan: components["schemas"]["Plan"];
            purchaseSettings: components["schemas"]["PurchaseSettings"];
            shippingAddress: components["schemas"]["ShippingAddress"];
            status: string;
            isSkipped: boolean;
            metadata: components["schemas"]["Metadatum"][];
        };
        /**
         * Item
         * @example {
         *       "sku": {
         *         "id": "string",
         *         "name": "string",
         *         "productName": "string",
         *         "imageUrl": "string",
         *         "detailUrl": "string",
         *         "nameComplete": "string"
         *       },
         *       "quantity": 0,
         *       "priceAtSubscriptionDate": 0,
         *       "sellingPrice": 0,
         *       "endpoint": "string"
         *     }
         */
        Item: {
            sku: components["schemas"]["Sku"];
            /** Format: int32 */
            quantity: number;
            /** Format: int32 */
            priceAtSubscriptionDate: number;
            /** Format: int32 */
            sellingPrice: number;
            endpoint: string;
        };
        /**
         * Sku
         * @example {
         *       "id": "string",
         *       "name": "string",
         *       "productName": "string",
         *       "imageUrl": "string",
         *       "detailUrl": "string",
         *       "nameComplete": "string"
         *     }
         */
        Sku: {
            id: string;
            name: string;
            productName: string;
            imageUrl: string;
            detailUrl: string;
            nameComplete: string;
        };
        /**
         * Plan
         * @example {
         *       "frequency": {
         *         "periodicity": "string",
         *         "interval": 0
         *       },
         *       "validity": {
         *         "begin": "2019-07-04T14:40:30.819Z",
         *         "end": "2019-07-04T14:40:30.819Z"
         *       },
         *       "type": "string"
         *     }
         */
        Plan: {
            frequency: components["schemas"]["Frequency"];
            validity: components["schemas"]["Validity"];
            type: string;
        };
        /**
         * Frequency
         * @example {
         *       "periodicity": "string",
         *       "interval": 0
         *     }
         */
        Frequency: {
            periodicity: string;
            /** Format: int32 */
            interval: number;
        };
        /**
         * Validity
         * @example {
         *       "begin": "2019-07-04T14:40:30.819Z",
         *       "end": "2019-07-04T14:40:30.819Z"
         *     }
         */
        Validity: {
            begin: string;
            end: string;
        };
        /**
         * PurchaseSettings
         * @example {
         *       "purchaseDay": "string",
         *       "paymentMethod": {
         *         "paymentSystem": "string",
         *         "paymentAccountId": "string"
         *       },
         *       "seller": "string",
         *       "salesChannel": "string",
         *       "selectedSla": "string",
         *       "currencyCode": "string"
         *     }
         */
        PurchaseSettings: {
            purchaseDay: string;
            paymentMethod: components["schemas"]["PaymentMethod"];
            seller: string;
            salesChannel: string;
            selectedSla: string;
            currencyCode: string;
        };
        /**
         * PaymentMethod
         * @example {
         *       "paymentSystem": "string",
         *       "paymentAccountId": "string"
         *     }
         */
        PaymentMethod: {
            paymentSystem: string;
            paymentAccountId: string;
        };
        /**
         * ShippingAddress
         * @example {
         *       "addressId": "string",
         *       "street": "string",
         *       "number": "string",
         *       "complement": "string",
         *       "neighborhood": "string",
         *       "city": "string",
         *       "state": "string",
         *       "country": "string",
         *       "postalCode": "string",
         *       "reference": "string",
         *       "formattedAddress": "string",
         *       "additionalComponents": [
         *         {
         *           "longName": "string",
         *           "shortName": "string",
         *           "types": [
         *             "string"
         *           ]
         *         }
         *       ],
         *       "geoCoordinate": [
         *         0
         *       ],
         *       "receiverName": "string",
         *       "addressType": "string",
         *       "addressName": "string"
         *     }
         */
        ShippingAddress: {
            addressId: string;
            street: string;
            number: string;
            complement: string;
            neighborhood: string;
            city: string;
            state: string;
            country: string;
            postalCode: string;
            reference: string;
            formattedAddress: string;
            additionalComponents: components["schemas"]["AdditionalComponent"][];
            geoCoordinate: number[];
            receiverName: string;
            addressType: string;
            addressName: string;
        };
        /**
         * AdditionalComponent
         * @example {
         *       "longName": "string",
         *       "shortName": "string",
         *       "types": [
         *         "string"
         *       ]
         *     }
         */
        AdditionalComponent: {
            longName: string;
            shortName: string;
            types: string[];
        };
        /**
         * Metadatum
         * @example {
         *       "name": "string",
         *       "properties": {
         *         "additionalProp1": "string",
         *         "additionalProp2": "string",
         *         "additionalProp3": "string"
         *       }
         *     }
         */
        Metadatum: {
            name: string;
            properties: components["schemas"]["Properties"];
        };
        /**
         * Properties
         * @example {
         *       "additionalProp1": "string",
         *       "additionalProp2": "string",
         *       "additionalProp3": "string"
         *     }
         */
        Properties: {
            additionalProp1: string;
            additionalProp2: string;
            additionalProp3: string;
        };
        /**
         * InsertAddressesforSubscriptionRequest
         * @example {
         *       "addressId": "1234567890",
         *       "street": "Avenida do Estado",
         *       "number": "1",
         *       "complement": null,
         *       "neighborhood": "Barra da Tijuca",
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "country": "BRA",
         *       "postalCode": "22204-004",
         *       "reference": null,
         *       "formattedAddress": null,
         *       "additionalComponents": null,
         *       "geoCoordinate": null,
         *       "receiverName": "Fulano",
         *       "addressType": "residential",
         *       "addressName": "xt5353818181nhshs"
         *     }
         */
        InsertAddressesforSubscriptionRequest: {
            addressId: string;
            street: string;
            number: string;
            complement: string | null;
            neighborhood: string;
            city: string;
            state: string;
            country: string;
            postalCode: string;
            reference: string | null;
            formattedAddress: string | null;
            additionalComponents: string | null;
            geoCoordinate: string | null;
            receiverName: string;
            addressType: string;
            addressName: string;
        };
        /**
         * UpdateSubscriptionbygroupIdRequest
         * @example {
         *       "item": [
         *         {
         *           "sku": {
         *             "id": "string",
         *             "name": "string",
         *             "productName": "string",
         *             "imageUrl": "string",
         *             "detailUrl": "string",
         *             "nameComplete": "string"
         *           },
         *           "quantity": 0,
         *           "endpoint": "string",
         *           "priceAtSubscriptionDate": 0,
         *           "sellingPrice": 0,
         *           "SubscriptionId": "string",
         *           "cycleCount": 0,
         *           "status": "ACTIVE",
         *           "createdAt": "2019-06-20T18:27:41.23Z",
         *           "lastUpdate": "2019-06-20T18:27:41.23Z",
         *           "originalOrderId": "string",
         *           "originalItemIndex": 0,
         *           "metadata": [
         *             {
         *               "name": "string",
         *               "properties": {
         *                 "additionalProp1": "string",
         *                 "additionalProp2": "string",
         *                 "additionalProp3": "string"
         *               }
         *             }
         *           ],
         *           "isSkipped": true
         *         }
         *       ],
         *       "plan": {
         *         "frequency": {
         *           "periodicity": "string",
         *           "interval": 0
         *         },
         *         "validity": {
         *           "begin": "2019-06-20T18:27:41.23Z",
         *           "end": "2019-06-20T18:27:41.23Z"
         *         },
         *         "type": "string"
         *       },
         *       "purchaseSettings": {
         *         "purchaseDay": "string",
         *         "paymentMethod": {
         *           "paymentSystem": "string",
         *           "paymentAccountId": "string"
         *         },
         *         "seller": "string",
         *         "salesChannel": "string",
         *         "selectedSla": "string",
         *         "currencyCode": "string"
         *       },
         *       "shippingAddress": {
         *         "addressId": "string",
         *         "street": "string",
         *         "number": "string",
         *         "complement": "string",
         *         "neighborhood": "string",
         *         "city": "string",
         *         "state": "string",
         *         "country": "string",
         *         "postalCode": "string",
         *         "reference": "string",
         *         "formattedAddress": "string",
         *         "additionalComponents": [
         *           {
         *             "longName": "string",
         *             "shortName": "string",
         *             "types": [
         *               "string"
         *             ]
         *           }
         *         ],
         *         "geoCoordinate": [
         *           0
         *         ],
         *         "receiverName": "string",
         *         "addressType": "string",
         *         "addressName": "string"
         *       },
         *       "status": "string",
         *       "isSkipped": true,
         *       "metadata": [
         *         {
         *           "name": "string",
         *           "properties": {
         *             "additionalProp1": "string",
         *             "additionalProp2": "string",
         *             "additionalProp3": "string"
         *           }
         *         }
         *       ]
         *     }
         */
        UpdateSubscriptionbygroupIdRequest: {
            item: components["schemas"]["Item1"][];
            plan: components["schemas"]["Plan"];
            purchaseSettings: components["schemas"]["PurchaseSettings"];
            shippingAddress: components["schemas"]["ShippingAddress"];
            status: string;
            isSkipped: boolean;
            metadata: components["schemas"]["Metadatum"][];
        };
        /**
         * Item1
         * @example {
         *       "sku": {
         *         "id": "string",
         *         "name": "string",
         *         "productName": "string",
         *         "imageUrl": "string",
         *         "detailUrl": "string",
         *         "nameComplete": "string"
         *       },
         *       "quantity": 0,
         *       "endpoint": "string",
         *       "priceAtSubscriptionDate": 0,
         *       "sellingPrice": 0,
         *       "SubscriptionId": "string",
         *       "cycleCount": 0,
         *       "status": "ACTIVE",
         *       "createdAt": "2019-06-20T18:27:41.23Z",
         *       "lastUpdate": "2019-06-20T18:27:41.23Z",
         *       "originalOrderId": "string",
         *       "originalItemIndex": 0,
         *       "metadata": [
         *         {
         *           "name": "string",
         *           "properties": {
         *             "additionalProp1": "string",
         *             "additionalProp2": "string",
         *             "additionalProp3": "string"
         *           }
         *         }
         *       ],
         *       "isSkipped": true
         *     }
         */
        Item1: {
            sku: components["schemas"]["Sku"];
            /** Format: int32 */
            quantity: number;
            endpoint: string;
            /** Format: int32 */
            priceAtSubscriptionDate: number;
            /** Format: int32 */
            sellingPrice: number;
            SubscriptionId: string;
            /** Format: int32 */
            cycleCount: number;
            status: string;
            createdAt: string;
            lastUpdate: string;
            originalOrderId: string;
            /** Format: int32 */
            originalItemIndex: number;
            metadata: components["schemas"]["Metadatum"][];
            isSkipped: boolean;
        };
        /**
         * Additemsubscription-groupIdRequest
         * @example {
         *       "sku": {
         *         "id": "string",
         *         "name": "string",
         *         "productName": "string",
         *         "imageUrl": "string",
         *         "detailUrl": "string",
         *         "nameComplete": "string"
         *       },
         *       "quantity": 0,
         *       "priceAtSubscriptionDate": 0,
         *       "sellingPrice": 0,
         *       "endpoint": "string"
         *     }
         */
        "Additemsubscription-groupIdRequest": {
            sku: components["schemas"]["Sku"];
            /** Format: int32 */
            quantity: number;
            /** Format: int32 */
            priceAtSubscriptionDate: number;
            /** Format: int32 */
            sellingPrice: number;
            endpoint: string;
        };
        /**
         * InsertAddressesbygroupIdRequest
         * @example {
         *       "addressId": "string",
         *       "street": "string",
         *       "number": "string",
         *       "complement": "string",
         *       "neighborhood": "string",
         *       "city": "string",
         *       "state": "string",
         *       "country": "string",
         *       "postalCode": "string",
         *       "reference": "string",
         *       "formattedAddress": "string",
         *       "additionalComponents": [
         *         {
         *           "longName": "string",
         *           "shortName": "string",
         *           "types": [
         *             "string"
         *           ]
         *         }
         *       ],
         *       "geoCoordinate": [
         *         0
         *       ],
         *       "receiverName": "string",
         *       "addressType": "string",
         *       "addressName": "string"
         *     }
         */
        InsertAddressesbygroupIdRequest: {
            addressId: string;
            street: string;
            number: string;
            complement: string;
            neighborhood: string;
            city: string;
            state: string;
            country: string;
            postalCode: string;
            reference: string;
            formattedAddress: string;
            additionalComponents: components["schemas"]["AdditionalComponent"][];
            geoCoordinate: number[];
            receiverName: string;
            addressType: string;
            addressName: string;
        };
        /**
         * @description Subscriptions settings
         * @example {
         *       "slaOption": "NONE",
         *       "defaultSla": null,
         *       "isUsingV3": true,
         *       "onMigrationProcess": false,
         *       "executionHourInUtc": 9,
         *       "workflowVersion": "1.1",
         *       "deliveryChannels": [
         *         "delivery"
         *       ],
         *       "randomIdGeneration": false,
         *       "isMultipleInstallmentsEnabledOnCreation": false,
         *       "isMultipleInstallmentsEnabledOnUpdate": false,
         *       "orderCustomDataAppId": null,
         *       "postponeExpiration": false,
         *       "manualPriceAllowed": false,
         *       "useItemPriceFromOriginalOrder": false
         *     }
         */
        settings: {
            /**
             * slaOption
             * @description Delivery method.
             * @default
             * @example NONE
             */
            slaOption: string;
            /**
             * defaultSla
             * @description Default delivery method.
             * @default null
             * @example null
             */
            defaultSla: string | null;
            /**
             * isUsingV3
             * @description Indicates whether or not Subscriptions V3 is enabled.
             * @default false
             * @example true
             */
            isUsingV3: boolean;
            /**
             * onMigrationProcess
             * @description Indicates whether or not the account is in the migration process to Subscriptions V3.
             * @default false
             * @example false
             */
            onMigrationProcess: boolean;
            /**
             * executionHourInUtc
             * @description Indicates the time future subscription orders will be generated.
             * @default 0
             * @example 9
             */
            executionHourInUtc: number;
            /**
             * workflowVersion
             * @description Workflow version.
             * @default
             * @example 1.1
             */
            workflowVersion: string;
            /**
             * deliveryChannels
             * @description Array containing delivery channels.
             * @default []
             * @example delivery
             */
            deliveryChannels: string[];
            /**
             * randomIdGeneration
             * @description Defines whether or not the subscription order IDs will be randomly generated.
             * @default false
             * @example false
             */
            randomIdGeneration: boolean;
            /**
             * isMultipleInstallmentsEnabledOnCreation
             * @description Defines whether or not multiple installments are enabled when a subscription is created.
             * @default false
             * @example false
             */
            isMultipleInstallmentsEnabledOnCreation: boolean;
            /**
             * isMultipleInstallmentsEnabledOnUpdate
             * @description Defines whether or not multiple installments are enabled when a subscription is updated.
             * @default false
             * @example false
             */
            isMultipleInstallmentsEnabledOnUpdate: boolean;
            /**
             * orderCustomDataAppId
             * @description When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.
             * @default null
             * @example null
             */
            orderCustomDataAppId: string;
            /**
             * postponeExpiration
             * @description Defines whether or not the expiration of subscriptions can be postponed.
             * @default false
             * @example false
             */
            postponeExpiration: boolean;
            /**
             * manualPriceAllowed
             * @description When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.
             * @default false
             * @example false
             */
            manualPriceAllowed: boolean;
            /**
             * useItemPriceFromOriginalOrder
             * @description When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.
             * @default false
             * @example false
             */
            useItemPriceFromOriginalOrder: boolean;
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
    GetsubscriptionbyId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Subscription ID. */
                subscriptionId: string;
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
        };
    };
    UpdateSubscriptionsbySubscriptionId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Subscription ID. */
                subscriptionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "item": {
                 *         "sku": {
                 *           "id": "string",
                 *           "name": "string",
                 *           "productName": "string",
                 *           "imageUrl": "string",
                 *           "detailUrl": "string",
                 *           "nameComplete": "string"
                 *         },
                 *         "quantity": 0,
                 *         "priceAtSubscriptionDate": 0,
                 *         "sellingPrice": 0,
                 *         "endpoint": "string"
                 *       },
                 *       "plan": {
                 *         "frequency": {
                 *           "periodicity": "string",
                 *           "interval": 0
                 *         },
                 *         "validity": {
                 *           "begin": "2019-07-04T14:40:30.819Z",
                 *           "end": "2019-07-04T14:40:30.819Z"
                 *         },
                 *         "type": "string"
                 *       },
                 *       "purchaseSettings": {
                 *         "purchaseDay": "string",
                 *         "paymentMethod": {
                 *           "paymentSystem": "string",
                 *           "paymentAccountId": "string"
                 *         },
                 *         "seller": "string",
                 *         "salesChannel": "string",
                 *         "selectedSla": "string",
                 *         "currencyCode": "string"
                 *       },
                 *       "shippingAddress": {
                 *         "addressId": "string",
                 *         "street": "string",
                 *         "number": "string",
                 *         "complement": "string",
                 *         "neighborhood": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "country": "string",
                 *         "postalCode": "string",
                 *         "reference": "string",
                 *         "formattedAddress": "string",
                 *         "additionalComponents": [
                 *           {
                 *             "longName": "string",
                 *             "shortName": "string",
                 *             "types": [
                 *               "string"
                 *             ]
                 *           }
                 *         ],
                 *         "geoCoordinate": [
                 *           0
                 *         ],
                 *         "receiverName": "string",
                 *         "addressType": "string",
                 *         "addressName": "string"
                 *       },
                 *       "status": "string",
                 *       "isSkipped": true,
                 *       "metadata": [
                 *         {
                 *           "name": "string",
                 *           "properties": {
                 *             "additionalProp1": "string",
                 *             "additionalProp2": "string",
                 *             "additionalProp3": "string"
                 *           }
                 *         }
                 *       ]
                 *     } */
                "application/json": components["schemas"]["UpdateSubscriptionsbySubscriptionIdRequest"];
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
    CancelSubscriptionsbySubscriptionId: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Subscription ID. */
                subscriptionId: string;
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
        };
    };
    GetSubscriptionList: {
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
    Getsubscriptionstocustomer: {
        parameters: {
            query: {
                /** @description Customer ID. */
                customerId: string;
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
    InsertAddressesforSubscription: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Subscription ID. */
                subscriptionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example [
                 *       {
                 *         "addressId": "1234567890",
                 *         "street": "Avenida do Estado",
                 *         "number": "1",
                 *         "complement": null,
                 *         "neighborhood": "Barra da Tijuca",
                 *         "city": "Rio de Janeiro",
                 *         "state": "RJ",
                 *         "country": "BRA",
                 *         "postalCode": "22204-004",
                 *         "reference": null,
                 *         "formattedAddress": null,
                 *         "additionalComponents": null,
                 *         "geoCoordinate": null,
                 *         "receiverName": "Fulano",
                 *         "addressType": "residential",
                 *         "addressName": "xt5353818181nhshs"
                 *       }
                 *     ] */
                "application/json": components["schemas"]["InsertAddressesforSubscriptionRequest"][];
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
    GetfrequencyoptionsbysubscriptionId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Subscription ID. */
                subscriptionId: string;
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
        };
    };
    GetSubscriptionbygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    UpdateSubscriptionbygroupId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Group ID. */
                groupId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "item": [
                 *         {
                 *           "sku": {
                 *             "id": "string",
                 *             "name": "string",
                 *             "productName": "string",
                 *             "imageUrl": "string",
                 *             "detailUrl": "string",
                 *             "nameComplete": "string"
                 *           },
                 *           "quantity": 0,
                 *           "endpoint": "string",
                 *           "priceAtSubscriptionDate": 0,
                 *           "sellingPrice": 0,
                 *           "SubscriptionId": "string",
                 *           "cycleCount": 0,
                 *           "status": "ACTIVE",
                 *           "createdAt": "2019-06-20T18:27:41.23Z",
                 *           "lastUpdate": "2019-06-20T18:27:41.23Z",
                 *           "originalOrderId": "string",
                 *           "originalItemIndex": 0,
                 *           "metadata": [
                 *             {
                 *               "name": "string",
                 *               "properties": {
                 *                 "additionalProp1": "string",
                 *                 "additionalProp2": "string",
                 *                 "additionalProp3": "string"
                 *               }
                 *             }
                 *           ],
                 *           "isSkipped": true
                 *         }
                 *       ],
                 *       "plan": {
                 *         "frequency": {
                 *           "periodicity": "string",
                 *           "interval": 0
                 *         },
                 *         "validity": {
                 *           "begin": "2019-06-20T18:27:41.23Z",
                 *           "end": "2019-06-20T18:27:41.23Z"
                 *         },
                 *         "type": "string"
                 *       },
                 *       "purchaseSettings": {
                 *         "purchaseDay": "string",
                 *         "paymentMethod": {
                 *           "paymentSystem": "string",
                 *           "paymentAccountId": "string"
                 *         },
                 *         "seller": "string",
                 *         "salesChannel": "string",
                 *         "selectedSla": "string",
                 *         "currencyCode": "string"
                 *       },
                 *       "shippingAddress": {
                 *         "addressId": "string",
                 *         "street": "string",
                 *         "number": "string",
                 *         "complement": "string",
                 *         "neighborhood": "string",
                 *         "city": "string",
                 *         "state": "string",
                 *         "country": "string",
                 *         "postalCode": "string",
                 *         "reference": "string",
                 *         "formattedAddress": "string",
                 *         "additionalComponents": [
                 *           {
                 *             "longName": "string",
                 *             "shortName": "string",
                 *             "types": [
                 *               "string"
                 *             ]
                 *           }
                 *         ],
                 *         "geoCoordinate": [
                 *           0
                 *         ],
                 *         "receiverName": "string",
                 *         "addressType": "string",
                 *         "addressName": "string"
                 *       },
                 *       "status": "string",
                 *       "isSkipped": true,
                 *       "metadata": [
                 *         {
                 *           "name": "string",
                 *           "properties": {
                 *             "additionalProp1": "string",
                 *             "additionalProp2": "string",
                 *             "additionalProp3": "string"
                 *           }
                 *         }
                 *       ]
                 *     } */
                "application/json": components["schemas"]["UpdateSubscriptionbygroupIdRequest"];
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
    GetAllsubscriptiongroup: {
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
    Getsubscriptiongrouplist: {
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
    "GetSimulatebysubscription-group": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    CancelSubscriptionbygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    "Additemsubscription-groupId": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "sku": {
                 *         "id": "string",
                 *         "name": "string",
                 *         "productName": "string",
                 *         "imageUrl": "string",
                 *         "detailUrl": "string",
                 *         "nameComplete": "string"
                 *       },
                 *       "quantity": 0,
                 *       "priceAtSubscriptionDate": 0,
                 *       "sellingPrice": 0,
                 *       "endpoint": "string"
                 *     } */
                "application/json": components["schemas"]["Additemsubscription-groupIdRequest"];
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
    GetaddressesbygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                groupId: string;
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
    InsertAddressesbygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "addressId": "string",
                 *       "street": "string",
                 *       "number": "string",
                 *       "complement": "string",
                 *       "neighborhood": "string",
                 *       "city": "string",
                 *       "state": "string",
                 *       "country": "string",
                 *       "postalCode": "string",
                 *       "reference": "string",
                 *       "formattedAddress": "string",
                 *       "additionalComponents": [
                 *         {
                 *           "longName": "string",
                 *           "shortName": "string",
                 *           "types": [
                 *             "string"
                 *           ]
                 *         }
                 *       ],
                 *       "geoCoordinate": [
                 *         0
                 *       ],
                 *       "receiverName": "string",
                 *       "addressType": "string",
                 *       "addressName": "string"
                 *     } */
                "application/json": components["schemas"]["InsertAddressesbygroupIdRequest"];
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
    GetpaymentSystembygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    GetfrequencyoptionsbygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    RetrysubscriptionbygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Group ID. */
                groupid: string;
                /** @description Instance ID. */
                instanceId: string;
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
        };
    };
    GetConversationMessagebygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    GetwillcreatebygroupId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    GetConfigsubscriptionsgroup: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Group ID. */
                groupId: string;
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
        };
    };
    GetNextpurchase: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Reference date that retrieves all next purchases, starting from the dateStr inserted. Must be in the format of {{yyyyMMdd}} */
                dateStr: string;
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
        };
    };
    RequestreportbyStatus: {
        parameters: {
            query: {
                /** @description Email that the report will be sent to */
                requesterEmail: string;
                /** @description Binary OR of the following status: 1 - ACTIVE; 2 - PAUSED; 4 - CANCELED; 8 - EXPIRED */
                status: number;
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
    Requestreportbydate: {
        parameters: {
            query: {
                /** @description Email that the report will be sent to */
                requesterEmail: string;
                /** @description begin date of report interval, use format yyyyMMdd */
                beginDate: number;
                /** @description end date of report interval, use format yyyyMMdd */
                endDate: number;
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
    Requestreportbyschedule: {
        parameters: {
            query: {
                /** @description Email that the report will be sent to */
                requesterEmail: string;
                /** @description begin date of report interval, use format yyyyMMdd */
                beginDate: number;
                /** @description end date of report interval, use format yyyyMMdd */
                endDate: number;
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
    Requestreportbyorderdate: {
        parameters: {
            query: {
                /** @description Email that the report will be sent to */
                requesterEmail: string;
                /** @description begin date of report interval, use format yyyyMMdd */
                beginDate: number;
                /** @description end date of report interval, use format yyyyMMdd */
                endDate: number;
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
    Requestreportbyupdate: {
        parameters: {
            query: {
                /** @description Email that the report will be sent to */
                requesterEmail: string;
                /** @description begin date of report interval, use format yyyyMMdd */
                beginDate: number;
                /** @description end date of report interval, use format yyyyMMdd */
                endDate: number;
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
    GetreportstatusbyID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Report ID. */
                reportId: string;
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
        };
    };
    GetSettings: {
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
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["settings"];
                };
            };
        };
    };
    EditSettings: {
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
        /** @description Request body */
        requestBody: {
            content: {
                "application/json": components["schemas"]["settings"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["settings"];
                };
            };
        };
    };
}
