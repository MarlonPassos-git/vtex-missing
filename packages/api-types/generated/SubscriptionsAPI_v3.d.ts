export interface paths {
    "/api/rns/pub/cycles/{cycleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cycle details
         * @description Retrieve a specific cycle by its ID.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description ID from the desired cycle. */
                    cycleId: string | null;
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
                        "text/plain": components["schemas"]["SubscriptionCycleResponse"];
                        "application/json": components["schemas"]["SubscriptionCycleResponse"];
                        "text/json": components["schemas"]["SubscriptionCycleResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pub/cycles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List cycles
         * @description List cycles filtering by some arguments.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Lower limit for the date of creation of the cycle */
                    beginDate?: string | null;
                    /** @description Upper limit for the date of creation of the cycle */
                    endDate?: string | null;
                    /** @description Id from the subscription that generated the cycle */
                    subscriptionId?: string | null;
                    /** @description Customer that owns the subscription. Defaults to the current logged user */
                    customerEmail?: string | null;
                    /** @description Current cycle status */
                    status?: string | null;
                    /** @description Page used for pagination */
                    page?: number;
                    /** @description Page size used for pagination */
                    size?: number;
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
                        "text/plain": components["schemas"]["SubscriptionCycleResponse"][];
                        "application/json": components["schemas"]["SubscriptionCycleResponse"][];
                        "text/json": components["schemas"]["SubscriptionCycleResponse"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pub/cycles/{cycleId}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Retry cycle
         * @description Every subscription order has an execution count called cycle, which determines the position of an order counting from when the shopper subscribed. This endpoint reruns a cycle that is currently in error state.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Id from the cycle that will be retried */
                    cycleId: string | null;
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pvt/plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List plans
         * @description List plans filtering by some arguments.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Filter plans by available periodicity */
                    periodicity?: string | null;
                    /** @description Filter plans by available interval */
                    interval?: string | null;
                    /** @description Page used for pagination */
                    page?: number;
                    /** @description Page size used for pagination */
                    size?: number;
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
                /** @description Requested plans */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["StorePlan"][];
                        "application/json": components["schemas"]["StorePlan"][];
                        "text/json": components["schemas"]["StorePlan"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pvt/plans/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get plan details
         * @description This endpoint retrieves a specific plan by its ID.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Id from the desired plan */
                    id: string | null;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Requested plan */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["StorePlan"];
                        "application/json": components["schemas"]["StorePlan"];
                        "text/json": components["schemas"]["StorePlan"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pvt/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List report templates
         * @description List all report templates available.
         */
        get: {
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
                /** @description Requested report templates */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SubscriptionReport"][];
                        "application/json": components["schemas"]["SubscriptionReport"][];
                        "text/json": components["schemas"]["SubscriptionReport"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pvt/reports/{reportName}/documents/{documentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get report document details
         * @description Retrieve a specific report document by its Id.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Name of the report */
                    reportName: string | null;
                    /** @description Id from the desired report document */
                    documentId: string | null;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Requested report document */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ReportResponse"];
                        "application/json": components["schemas"]["ReportResponse"];
                        "text/json": components["schemas"]["ReportResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pvt/reports/{reportName}/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate report
         * @description This endpoint creates a new report in the format of a CSV file and sends it via email. You can generate one of the following reports:
         *
         *      - subscriptionsWithStatus
         *
         *      - subscriptionsScheduledBetweenDate
         *
         *      - subscriptionsUpdatedBetweenDate
         *
         *      - subscriptionsCreatedBetweenDate
         *
         *      - executionsBetweenDate
         */
        post: {
            parameters: {
                query?: {
                    /** @description The report is sent to the email in this field. */
                    email?: string;
                    /** @description Start date of the report with the format `yyyy-mm-dd`. This field is required for any type of report. */
                    beginDate?: string;
                    /** @description End date of the report with the format `yyyy-mm-dd`. This field is required for any type of report. */
                    endDate?: string;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Name of the type of report in wish to generate. The following values are accepted:
                     *
                     *      - `subscriptionsWithStatus`
                     *
                     *      - `subscriptionsScheduledBetweenDate`
                     *
                     *      - `subscriptionsUpdatedBetweenDate`
                     *
                     *      - `subscriptionsCreatedBetweenDate`
                     *
                     *      - `executionsBetweenDate` */
                    reportName: string | null;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Requested report */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ReportResponse"];
                        "application/json": components["schemas"]["ReportResponse"];
                        "text/json": components["schemas"]["ReportResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pub/subscriptions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subscription details
         * @description Retrieve a specific subscription by its ID.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description ID from the target subscription. */
                    id: string | null;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Requested subscription */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SubscriptionGroupResponse"];
                        "application/json": components["schemas"]["SubscriptionGroupResponse"];
                        "text/json": components["schemas"]["SubscriptionGroupResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update subscription
         * @description Update a specific subscription.
         */
        patch: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description ID from the given subscription. */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["SubscriptionUpdateRequestV3"];
                    "application/json": components["schemas"]["SubscriptionUpdateRequestV3"];
                    "text/json": components["schemas"]["SubscriptionUpdateRequestV3"];
                    "application/*+json": components["schemas"]["SubscriptionUpdateRequestV3"];
                };
            };
            responses: {
                /** @description Subscription successfully updated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SubscriptionGroupResponse"];
                        "application/json": components["schemas"]["SubscriptionGroupResponse"];
                        "text/json": components["schemas"]["SubscriptionGroupResponse"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/api/rns/pub/subscriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List subscriptions
         * @description List subscriptions filtering by some arguments.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Customer that owns the subscription. Defaults to the current logged user. */
                    customerEmail?: string | null;
                    /** @description Current subscription status */
                    status?: string | null;
                    /** @description Id from the address used as shipping address */
                    addressId?: string | null;
                    /** @description Id from the payment used as payment method */
                    paymentId?: string | null;
                    /** @description Id from the plan that the subscription belongs to */
                    planId?: string | null;
                    /** @description Date for the next cycle */
                    nextPurchaseDate?: string | null;
                    /** @description Id from the order that generated the subscription */
                    originalOrderId?: string | null;
                    /** @description Page used for pagination */
                    page?: number;
                    /** @description Page size used for pagination */
                    size?: number;
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
                /** @description Requested subscriptions */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SubscriptionGroupResponse"][];
                        "application/json": components["schemas"]["SubscriptionGroupResponse"][];
                        "text/json": components["schemas"]["SubscriptionGroupResponse"][];
                    };
                };
            };
        };
        put?: never;
        /**
         * Create subscription
         * @description Create a new subscription.
         */
        post: {
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
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["SubscriptionGroupRequest"];
                    "application/json": components["schemas"]["SubscriptionGroupRequest"];
                    "text/json": components["schemas"]["SubscriptionGroupRequest"];
                    "application/*+json": components["schemas"]["SubscriptionGroupRequest"];
                };
            };
            responses: {
                /** @description Subscription created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SubscriptionGroupResponse"];
                        "application/json": components["schemas"]["SubscriptionGroupResponse"];
                        "text/json": components["schemas"]["SubscriptionGroupResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pub/subscriptions/{id}/items/{itemId}": {
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
         * Remove items from a subscription.
         * @description Removes a specific item from a given subscription
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Id from the target subscription */
                    id: string | null;
                    /** @description Id from the subscription item that will be removed */
                    itemId: string | null;
                };
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
            };
        };
        options?: never;
        head?: never;
        /**
         * Edit items on a subscription.
         * @description Edit a given item on a specific subscription
         */
        patch: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Id from the target subscription */
                    id: string | null;
                    /** @description Id from the target item */
                    itemId: string | null;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["UpdateItemInput"];
                    "application/json": components["schemas"]["UpdateItemInput"];
                    "text/json": components["schemas"]["UpdateItemInput"];
                    "application/*+json": components["schemas"]["UpdateItemInput"];
                };
            };
            responses: {
                /** @description Subscription updated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SubscriptionGroupResponse"];
                        "application/json": components["schemas"]["SubscriptionGroupResponse"];
                        "text/json": components["schemas"]["SubscriptionGroupResponse"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/api/rns/pub/subscriptions/{id}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add item to subscription
         * @description Add a new item to a given subscription.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description ID from the target subscription */
                    id: string | null;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["SubscriptionThinItemRequest"];
                    "application/json": components["schemas"]["SubscriptionThinItemRequest"];
                    "text/json": components["schemas"]["SubscriptionThinItemRequest"];
                    "application/*+json": components["schemas"]["SubscriptionThinItemRequest"];
                };
            };
            responses: {
                /** @description Subscription successfully updated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SubscriptionGroupResponse"];
                        "application/json": components["schemas"]["SubscriptionGroupResponse"];
                        "text/json": components["schemas"]["SubscriptionGroupResponse"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pub/subscriptions/{id}/simulate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Calculate the current prices for a specific subscription
         * @description Simulates an order made by the specific subscription on checkout and retrieves the current price for items and shipping.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Id from the target subscription */
                    id: string | null;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Simulation result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SimulateResponseVO"];
                        "application/json": components["schemas"]["SimulateResponseVO"];
                        "text/json": components["schemas"]["SimulateResponseVO"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pub/subscriptions/simulate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Calculate the current prices for the provided subscription template
         * @description Simulates an order made by subscriptions on checkout and retrieves the current price for items and shipping.
         */
        post: {
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
            requestBody?: {
                content: {
                    "application/json-patch+json": components["schemas"]["SubscriptionGroupRequest"];
                    "application/json": components["schemas"]["SubscriptionGroupRequest"];
                    "text/json": components["schemas"]["SubscriptionGroupRequest"];
                    "application/*+json": components["schemas"]["SubscriptionGroupRequest"];
                };
            };
            responses: {
                /** @description Simulation result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SimulateResponseVO"];
                        "application/json": components["schemas"]["SimulateResponseVO"];
                        "text/json": components["schemas"]["SimulateResponseVO"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/pub/subscriptions/{subscriptionId}/conversation-message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get conversation messages
         * @description Retrieve all conversation messages sent to a customer regarding a given subscription.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description ID of the subscription. */
                    subscriptionId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description Message ID */
                            id?: string;
                            /** @description Information regarding the message sender. */
                            from?: {
                                /** @description ID of the subscription related to the message. */
                                conversationRelatedTo?: string;
                                /** @description Subject of conversation. */
                                conversationSubject?: string;
                                /** @description Email alias. */
                                emailAlias?: string;
                                /** @description Alias mask type. */
                                aliasMaskType?: string;
                                /** @description Email address. */
                                email?: string;
                                /** @description Name. */
                                name?: string;
                                /** @description Role. */
                                role?: string;
                            };
                            /** @description Information regarding the message receivers. */
                            to?: {
                                /** @description ID of the subscription related to the message. */
                                conversationRelatedTo?: string;
                                /** @description Subject of conversation. */
                                conversationSubject?: string;
                                /** @description Email alias. */
                                emailAlias?: string;
                                /** @description Alias mask type. */
                                aliasMaskType?: string;
                                /** @description Email address. */
                                email?: string;
                                /** @description Name. */
                                name?: string;
                                /** @description Role. */
                                role?: string;
                            }[];
                            /** @description Message subject. */
                            subject?: string;
                            /** @description First words of the message text. */
                            firstWords?: string;
                            /** @description HTML content of the message's body. */
                            body?: string;
                            /** @description Indicates whether the message has at least one attachment. */
                            hasAttachment?: boolean;
                            /** @description Attachment names. */
                            attachmentNames?: string[];
                            /** @description Date of message. */
                            date?: string;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rns/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Subscription Settings
         * @description List the details of the settings of a given subscription.
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
        SubscriptionCycleOrderInfo: {
            orderId?: string | null;
            orderGroup?: string | null;
            paymentURL?: string | null;
            /** Format: int64 */
            value?: number;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        Status: 0 | 1 | 2 | 3;
        SubscriptionCycleItemContext: {
            subscriptionItemId?: string | null;
            /**
             * skuId
             * @description SKU ID.
             * @example 12
             */
            skuId?: string | null;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity?: number;
            status?: components["schemas"]["Status"];
            isSkipped?: boolean;
            /** Format: int32 */
            cycleCount?: number;
        };
        SubscriptionCycleContext: {
            items?: components["schemas"]["SubscriptionCycleItemContext"][] | null;
            paymentSystem?: string | null;
            paymentSystemName?: string | null;
            paymentSystemGroup?: string | null;
            paymentAccountId?: string | null;
            addressId?: string | null;
            addressType?: string | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ItemSimulationStatus: 0 | 1 | 2 | 3 | 4;
        SimulationItemResult: {
            id?: string | null;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity?: number;
            /** Format: int64 */
            unitPrice?: number | null;
            status?: components["schemas"]["ItemSimulationStatus"];
            statusName?: string | null;
        };
        SubscriptionCycleResponse: {
            id?: string | null;
            subscriptionId?: string | null;
            status?: string | null;
            customerEmail?: string | null;
            /** Format: date-time */
            date?: string;
            /** Format: date-time */
            lastUpdate?: string;
            /** Format: int32 */
            cycleCount?: number;
            isInRetry?: boolean;
            message?: string | null;
            orderInfo?: components["schemas"]["SubscriptionCycleOrderInfo"];
            context?: components["schemas"]["SubscriptionCycleContext"];
            simulationItems?: components["schemas"]["SimulationItemResult"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        Periodicity: 0 | 1 | 2 | 3 | 4;
        Frequency: {
            periodicityAsString?: string | null;
            periodicity?: components["schemas"]["Periodicity"];
            /** Format: int32 */
            interval?: number;
        };
        StorePlan: {
            id?: string | null;
            frequencies?: components["schemas"]["Frequency"][] | null;
        };
        SubscriptionReportParam: {
            name?: string | null;
            type?: string | null;
            value?: unknown;
        };
        SubscriptionReport: {
            account?: string | null;
            key?: string | null;
            name?: string | null;
            description?: string | null;
            requesterEmail?: string | null;
            entity?: string | null;
            schema?: string | null;
            query?: string | null;
            params?: components["schemas"]["SubscriptionReportParam"][] | null;
        };
        ReportResponse: {
            id?: string | null;
            finished?: boolean;
            /** Format: int64 */
            readonly recordsProcessed?: number;
            /** Format: int64 */
            recordsSum?: number | null;
            /** Format: date-time */
            startDate?: string | null;
            /** Format: date-time */
            lastUpdateTime?: string | null;
            /** Format: date-time */
            completedDate?: string | null;
            /** Format: int64 */
            errorCount?: number | null;
            /** Format: int64 */
            percentageProcessed?: number;
            /** Format: date-time */
            enqueueDate?: string | null;
            email?: string | null;
            canceled?: boolean;
            outputType?: string | null;
            zipped?: boolean;
            linkToDownload?: string | null;
            lastErrorMessage?: string | null;
            readonly statusMessage?: string | null;
        };
        /** Frequency */
        FrequencyResponse: {
            periodicity: string | null;
            /** Format: int32 */
            interval: number;
        };
        /** Validity */
        ValidityResponse: {
            /** Format: date-time */
            begin: string;
            /** Format: date-time */
            end?: string | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        PurchaseDay: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 999 | -6 | -5 | -4 | -3 | -2 | -1;
        /** Plan */
        PlanResponse: {
            id: string | null;
            frequency: components["schemas"]["FrequencyResponse"];
            validity: components["schemas"]["ValidityResponse"];
            purchaseDay: components["schemas"]["PurchaseDay"];
        };
        /** Address */
        ShippingAddressResponse: {
            addressId: string | null;
            addressType: string | null;
        };
        /** PaymentMethod */
        PaymentMethodResponse: {
            paymentAccountId?: string | null;
            paymentSystem: string | null;
            /** Format: int32 */
            installments?: number | null;
        };
        /** PurchaseSettings */
        PurchaseSettingsResponse: {
            paymentMethod: components["schemas"]["PaymentMethodResponse"];
            currencyCode: string | null;
        };
        /** SubscriptionItem */
        SubscriptionItemResponse: {
            id: string | null;
            /**
             * skuId
             * @description SKU ID.
             * @example 12
             */
            skuId: string | null;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity: number;
            isSkipped: boolean;
            status: string | null;
            /**
             * manualPrice
             * Format: int32
             * @description Manual price.
             * @default null
             * @example 40
             */
            manualPrice: number | null;
            originalOrderId?: string | null;
        };
        /** Subscription */
        SubscriptionGroupResponse: {
            id: string | null;
            customerId: string | null;
            customerEmail: string | null;
            title?: string | null;
            status: string | null;
            isSkipped: boolean;
            /** Format: date-time */
            nextPurchaseDate: string;
            /** Format: date-time */
            lastPurchaseDate?: string | null;
            plan: components["schemas"]["PlanResponse"];
            shippingAddress: components["schemas"]["ShippingAddressResponse"];
            purchaseSettings: components["schemas"]["PurchaseSettingsResponse"];
            /** Format: int32 */
            cycleCount: number;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            lastUpdate: string;
            items: components["schemas"]["SubscriptionItemResponse"][] | null;
        };
        /** @description Information about subscriptions' recurrence. */
        FrequencyRequest: {
            /**
             * @description Defines the subscriptions recurrence period. The possible values are:
             *     - `DAILY`
             *     - `WEEKLY`
             *     - `MONTHLY`
             *     - `YEARLY`
             * @example MONTHLY
             */
            periodicity: string | null;
            /**
             * Format: int32
             * @description Time interval configured between subscription orders, which depends on the periodicity. For a `DAILY` periodicity, the value will be days, for `MONTHLY` it will be months, and so on.
             * @example 3
             */
            interval: number;
        };
        /** @description Information about the period during which the subscription will be valid. */
        ValidityRequest: {
            /**
             * @description Subscription's beginning date with the format `yyyy-mm-ddThh:mm:ss`.
             * @example 2022-06-10T00:00:00
             */
            begin?: string | null;
            /**
             * @description Subscription's ending date with the format `yyyy-mm-ddThh:mm:ss`.
             * @example 2023-06-10T00:00:00
             */
            end?: string | null;
        };
        /**
         * PlanRequest
         * @description Information about the plan.
         */
        PlanThinRequest: {
            /**
             * @description ID of the plan.
             * @example store.subscription
             */
            id: string | null;
            frequency: components["schemas"]["FrequencyRequest"];
            validity?: components["schemas"]["ValidityRequest"];
            /**
             * @description Day in which recurrent orders will be created.
             * @example 15
             */
            purchaseDay: string | null;
        };
        /** shippingAddress */
        shippingAddress: {
            /**
             * @description Shipping address ID.
             * @example 8109266555005
             */
            addressId: string | null;
            /**
             * @description Type of the address. Possible values are `residential` or `pickup`.
             * @example residential
             */
            addressType: string | null;
        };
        /**
         * PaymentMethodRequest
         * @description Object containing information about the payment method.
         */
        PaymentMethodThinRequest: {
            /**
             * @description Data about shoppers' profiles and documents. For example, their credit card number. To obtain that information, use the endpoint [Get client profile by email](https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pub/profiles).
             * @example 340357032569595
             */
            paymentAccountId?: string | null;
            /**
             * @description Payment system's ID.
             * @example 4
             */
            paymentSystem: string | null;
            /**
             * Format: int32
             * @description Number of payment installments.
             * @example 3
             */
            installments?: number | null;
        };
        /**
         * PurchaseSettingsRequest
         * @description Object containing purchase settings information.
         */
        PurchaseSettingsThinRequest: {
            paymentMethod: components["schemas"]["PaymentMethodThinRequest"];
            /**
             * @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) applied to the subscription being created. You can associate only one sales channel to each subscription. The default value is the main sales channel, which corresponds to `1`.
             * @default 1
             */
            salesChannel: string;
        };
        /** SubscriptionUpdateRequest */
        SubscriptionUpdateRequestV3: {
            /**
             * @description Name of the subscription.
             * @example catFood
             */
            title?: string | null;
            /**
             * @description Status to which you wish to update the subscription. The accepted values are:
             *     - `ACTIVE`
             *     - `PAUSED`
             *     - `CANCELED`
             *     - `EXPIRED`
             *     - `MISSING`
             * @example ACTIVE
             */
            status?: string | null;
            /**
             * @description When set as `true`, it means the shopper asked to skip the next subscription order, and when set as `false`, no subscription order is going to be skipped.
             * @example false
             */
            isSkipped?: boolean | null;
            plan?: components["schemas"]["PlanThinRequest"];
            shippingAddress?: components["schemas"]["shippingAddress"];
            purchaseSettings?: components["schemas"]["PurchaseSettingsThinRequest"];
        };
        SubscriptionThinItemRequest: {
            /**
             * skuId
             * @description SKU ID.
             * @example 12
             */
            skuId?: string | null;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity?: number;
            /**
             * manualPrice
             * Format: int32
             * @description Manual price.
             * @default null
             * @example 40
             */
            manualPrice: number | null;
        };
        /** SubscriptionRequest */
        SubscriptionGroupRequest: {
            customerEmail: string | null;
            title?: string | null;
            status?: string | null;
            /** Format: date-time */
            nextPurchaseDate?: string | null;
            catalogAttachment?: string | null;
            plan: components["schemas"]["PlanThinRequest"];
            shippingAddress: components["schemas"]["shippingAddress"];
            purchaseSettings: components["schemas"]["PurchaseSettingsThinRequest"];
            items: components["schemas"]["SubscriptionThinItemRequest"][] | null;
        };
        UpdateItemInput: {
            status?: string | null;
            isSkipped?: boolean | null;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity?: number;
            /**
             * manualPrice
             * Format: int32
             * @description Manual price.
             * @default null
             * @example 40
             */
            manualPrice: number | null;
        };
        ItemAttachment: {
            name?: string | null;
            content?: {
                [key: string]: string | undefined;
            } | null;
        };
        PriceTag: {
            name?: string | null;
            /** Format: int64 */
            valueAsInt?: number;
            /** Format: double */
            rawValue?: number;
            isPercentual?: boolean;
            identifier?: string | null;
        };
        OrderItem: {
            id?: string | null;
            seller?: string | null;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity?: number;
            /** Format: int64 */
            price?: number | null;
            /** Format: int64 */
            sellingPrice?: number | null;
            /** Format: double */
            unitMultiplier?: number | null;
            attachments?: components["schemas"]["ItemAttachment"][] | null;
            name?: string | null;
            isGift?: boolean;
            priceTags?: components["schemas"]["PriceTag"][] | null;
        };
        LogisticsInfoDeliveryWindow: {
            /** Format: date-time */
            startDateUtc?: string;
            /** Format: date-time */
            endDateUtc?: string;
            /** Format: int64 */
            price?: number;
        };
        LogisticsInfoSLA: {
            id?: string | null;
            pickupPointId?: string | null;
            deliveryChannel?: string | null;
            /** Format: int32 */
            price?: number;
            shippingEstimate?: string | null;
            lockTtl?: string | null;
            deliveryWindows?: components["schemas"]["LogisticsInfoDeliveryWindow"][] | null;
            availableDeliveryWindows?: components["schemas"]["LogisticsInfoDeliveryWindow"][] | null;
        };
        LogisticsInfo: {
            /** Format: int32 */
            itemIndex?: number;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity?: number;
            selectedSla?: string | null;
            selectedDeliveryChannel?: string | null;
            lockTtl?: string | null;
            shippingEstimate?: string | null;
            addressId?: string | null;
            pickupId?: string | null;
            /** Format: int32 */
            price?: number;
            deliveryWindow?: components["schemas"]["LogisticsInfoDeliveryWindow"];
            slAs?: components["schemas"]["LogisticsInfoSLA"][] | null;
        };
        PaymentField: {
            name?: string | null;
            value?: string | null;
        };
        Payment: {
            id?: string | null;
            paymentSystem?: string | null;
            group?: string | null;
            bin?: string | null;
            accountId?: string | null;
            parentAccountId?: string | null;
            /** Format: int64 */
            referenceValue?: number;
            /** Format: int64 */
            value?: number;
            /** Format: int32 */
            installments?: number;
            url?: string | null;
            cardNumber?: string | null;
            fields?: components["schemas"]["PaymentField"][] | null;
        };
        Transaction: {
            isActive?: boolean;
            payments?: components["schemas"]["Payment"][] | null;
        };
        PaymentData: {
            payments?: components["schemas"]["Payment"][] | null;
            transactions?: components["schemas"]["Transaction"][] | null;
        };
        SimulateMessageResponse: {
            code?: string | null;
            status?: string | null;
            text?: string | null;
        };
        PurchaseContextAvailableGiftResponse: {
            id?: string | null;
            seller?: string | null;
            /**
             * quantity
             * Format: int32
             * @description Amount of units in the cart.
             * @example 5
             */
            quantity?: number;
            /** Format: int64 */
            price?: number | null;
            /** Format: int64 */
            sellingPrice?: number | null;
            /** Format: double */
            unitMultiplier?: number | null;
            attachments?: components["schemas"]["ItemAttachment"][] | null;
            name?: string | null;
            isGift?: boolean;
            priceTags?: components["schemas"]["PriceTag"][] | null;
            isSelected?: boolean;
        };
        PurchaseContextSelectableGiftsResponse: {
            id?: string | null;
            /** Format: int32 */
            availableQuantity?: number;
            availableGifts?: components["schemas"]["PurchaseContextAvailableGiftResponse"][] | null;
        };
        TotalizationResponse: {
            id?: string | null;
            name?: string | null;
            /** Format: int64 */
            valueAsInt?: number;
        };
        SimulateResponse: {
            items?: components["schemas"]["OrderItem"][] | null;
            logisticsInfo?: components["schemas"]["LogisticsInfo"][] | null;
            paymentData?: components["schemas"]["PaymentData"];
            country?: string | null;
            postalCode?: string | null;
            messages?: components["schemas"]["SimulateMessageResponse"][] | null;
            selectableGiftsResponse?: components["schemas"]["PurchaseContextSelectableGiftsResponse"][] | null;
            totals?: components["schemas"]["TotalizationResponse"][] | null;
            simulationItems?: components["schemas"]["SimulationItemResult"][] | null;
        };
        ShippingEstimate: {
            name?: string | null;
            estimate?: string | null;
            /** Format: date-time */
            estimateDeliveryDate?: string | null;
            /** Format: date-time */
            nextPurchaseDate?: string;
            allItemsMatched?: boolean;
        };
        Totalization: {
            id?: string | null;
            /** Format: double */
            value?: number;
        };
        SimulateResponseVO: {
            simulateResponse?: components["schemas"]["SimulateResponse"];
            shippingEstimate?: components["schemas"]["ShippingEstimate"];
            simulationItems?: components["schemas"]["SimulationItemResult"][] | null;
            totals?: components["schemas"]["Totalization"][] | null;
        };
        /**
         * @description Subscriptions settings
         * @example [
         *       {
         *         "slaOption": "NONE",
         *         "defaultSla": null,
         *         "isUsingV3": true,
         *         "onMigrationProcess": false,
         *         "executionHourInUtc": 9,
         *         "workflowVersion": "1.1",
         *         "deliveryChannels": [
         *           "delivery"
         *         ],
         *         "randomIdGeneration": false,
         *         "isMultipleInstallmentsEnabledOnCreation": false,
         *         "isMultipleInstallmentsEnabledOnUpdate": false,
         *         "orderCustomDataAppId": null,
         *         "postponeExpiration": false,
         *         "manualPriceAllowed": false,
         *         "useItemPriceFromOriginalOrder": false
         *       }
         *     ]
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
