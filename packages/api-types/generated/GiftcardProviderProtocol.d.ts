export interface paths {
    "/giftcards/_search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List all gift cards
         * @description Returns a list of all gift cards available from a gift card provider for a specific customer's cart.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["ListAllGiftCards"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards/{giftCardId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a gift card by ID
         * @description Returns information for a specific gift card from a gift card provider.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["GetGiftCardbyID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a gift card
         * @description Creates a gift card for a specific user in a gift card provider.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["CreateGiftCard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards/{giftCardId}/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all gift card transactions
         * @description Returns the IDs of all transactions performed in a gift card provider for a specific gift card.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["ListAllGiftCardTransactions"];
        put?: never;
        /**
         * Create a gift card transaction
         * @description Creates a transaction (credit or debit) for a gift card in a gift card provider and authorizes the item reservation.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["CreateGiftCardTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards/{giftCardId}/transactions/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a gift card transaction by ID
         * @description Returns a specific transaction for a gift card from a gift card provider.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["GetGiftCardTransactionbyID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards/{giftCardId}/transactions/{transactionId}/authorization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a gift card transaction authorization
         * @description Returns information about a gift card transaction authorization from a gift card provider.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["GetGiftCardTransactionAuthorization"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards/{giftCardId}/transactions/{transactionId}/cancellations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all gift card transactions cancellations
         * @description Returns all transactions cancelled for a specific gift card from a gift card provider.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["ListAllGiftCardTransactionsCancellations"];
        put?: never;
        /**
         * Cancel a gift card transaction
         * @description This request can be used to:
         *
         *     1. Cancel a transaction for a specific gift card in a gift card provider.
         *
         *     2. Cancel an item's reservation or create a refund.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["CreateGiftCardTransactionCancellation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards/{giftCardId}/transactions/{tId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all gift card transactions settlements
         * @description Returns all transactions settlements for a specific gift card from a gift card provider.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        get: operations["ListAllGiftCardTransactionsSettlements"];
        put?: never;
        /**
         * Settle a gift card transaction
         * @description Creates a transaction settlement for a specific gift card from a gift card provider.
         *
         *     > ℹ️ This request is made from VTEX to the gift card payment provider.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["CreateGiftCardTransactionSettlement"];
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
        /** @description Gift cards information. */
        ListAllGiftCardsRequest: {
            client: components["schemas"]["Client"];
            cart: components["schemas"]["Cart"];
        };
        /** @description Customer information. */
        Client: {
            /**
             * @description Customer's identification.
             * @example 3b1abc17
             */
            id: string;
            /**
             * @description Customer's email address.
             * @example email@domain.com
             */
            email: string;
            /**
             * @description Document number informed by the customer.
             * @example 234235
             */
            document: string;
        };
        /** @description Cart information. */
        Cart: {
            /**
             * @description Total payment value.
             * @example 182
             */
            grandTotal: number;
            /**
             * @description Represents the relationship between the client and the store.
             * @example null
             */
            relationName: string | null;
            /**
             * @description Gift card identification code used at checkout. Minimum of 6 characters.
             * @example BAHD-ASDB-ADQW-ASDQ
             */
            redemptionCode: string;
            /**
             * @description Discounts value.
             * @example 20
             */
            discounts: number;
            /**
             * @description Shipping value.
             * @example 2
             */
            shipping: number;
            /**
             * @description Taxes value.
             * @example 0
             */
            taxes: number;
            /** @description Items information. */
            items: components["schemas"]["Item"][];
            /**
             * @description Total items value.
             * @example 200
             */
            itemsTotal: number;
        };
        /** @description Items information. */
        Item: {
            /**
             * @description Product ID.
             * @example 2000000
             */
            productId: string;
            /**
             * @description The ID of the SKU in VTEX platform.
             * @example 2000002
             */
            id: string;
            /**
             * @description Product Reference ID.
             * @example MEV41
             */
            refId: string;
            /**
             * @description Product name.
             * @example Shoes
             */
            name: string;
            /**
             * @description Product price.
             * @example 200
             */
            price: number;
            /**
             * @description Product quantity.
             * @example 1
             */
            quantity: number;
        };
        /** @description Response information. */
        response: {
            /** @description Gift card identification. */
            id: string;
            /** @description Provider's name. */
            provider: string;
            /** @description Gift card current balance. */
            balance: number;
            _self: components["schemas"]["Self"];
        };
        /** @description It is an object that carries an auto reference from the provider at the Hub (on its API). */
        Self: {
            /** @description This is one of the fields inside the `_self`. It is exactly the route that identifies this provider on the Hub's API, but it is not the same thing as the `serviceURL`. */
            href: string;
        };
        /**
         * @description Items information.
         * @example {
         *       "id": "3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24",
         *       "redemptionToken": "XTYB-IOBW-WLJE-SEYG",
         *       "redemptionCode": "XTYB-IOBW-WLJE-SEYG",
         *       "balance": 5.9,
         *       "emissionDate": "2018-03-20T09:37:13.797",
         *       "expiringDate": "2020-03-18T11:42:55.183",
         *       "discount": false,
         *       "transaction": {
         *         "href": "/gatewayqa/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24/transactions"
         *       }
         *     }
         */
        response1: {
            /** @description Gift card identification. */
            id: string;
            /** @description Gift card redemption token. */
            redemptionToken: string;
            /** @description Gift card identification code used at checkout. Minimum of 6 characters. */
            redemptionCode: string;
            /** @description Gift card current balance. For newly created gift cards, the balance will be 0.0. */
            balance: number;
            /** @description Gift card creation date. */
            emissionDate: string;
            /** @description Gift card expiration date. */
            expiringDate: string;
            /** @description Discount applied on item. */
            discount: boolean;
            transaction: components["schemas"]["Transaction"];
        };
        /**
         * @description Transaction information.
         * @example {
         *       "href": "/gatewayqa/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24/transactions"
         *     }
         */
        Transaction: {
            /** @description Gift card resource URL. The number described in the URL refers to the gift card identification. */
            href: string;
        };
        /** @description Create a gift card request body information. */
        CreateGiftCardRequest: {
            /**
             * @description Field to be filled in when it is not necessary to use a loyalty program for the gift card. Note that a new `relationNamevalue` is required for each new gift card to be created.
             * @example loyalty-program
             */
            relationName: string;
            /**
             * @description Gift card creation date.
             * @example 2020-08-01T13:15:30Z
             */
            emissionDate?: string;
            /**
             * @description Gift card expiration date.
             * @example 2020-09-01T13:15:30Z
             */
            expiringDate?: string;
            /**
             * @description Field to be filled in if a loyalty program must be created for the gift card.
             * @example Loyalty program
             */
            caption: string;
            /**
             * @description The gift card can only be used for a specified client's ID.
             * @example true
             */
            restrictedToOwner?: boolean;
            /**
             * @description The gift card can be used to make new purchases until its value is completely used.
             * @example true
             */
            multipleRedemptions?: boolean;
            /**
             * @description The gift card balance can be changed.
             * @example true
             */
            multipleCredits?: boolean;
            /**
             * @description Client ID. You can use the customer's registered email or the `userId` parameter which can be found in the [Master Data](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw).
             * @example 92de2249-0e02-4ca9-a4aa-a09cc9d8f7ff
             */
            profileId: string;
            /**
             * @description Currency code in ISO 4217.
             * @example USD
             */
            currencyCode?: string;
        };
        /** @description Create a gift card transaction request body information. */
        CreateGiftCardTransactionRequest: {
            /**
             * @description Type of operation. Possible values are: `Debit` or `Credit`.
             * @example Debit
             */
            operation: string;
            /**
             * @description Operation value.
             * @example 3
             */
            value: number;
            /**
             * @description Description information.
             * @example GiftCardHub
             */
            description: string;
            /**
             * @description Gift card redemption token.
             * @example b2dac6f2-f365-48cd-82a9-0b376a55557a
             */
            redemptionToken: string;
            /**
             * @description Gift card identification code used at checkout. Minimum of 6 characters.
             * @example ***********ASDQ
             */
            redemptionCode: string;
            /**
             * @description Request identification of the transaction. You need to send a different `requestId` value every time you make a new transaction. If you send the same `requestId`two or more times with a specific `redemptionCode`or `redemptionToken`, the gift card balance will not be updated.
             * @example B56CBE231DEE4E1A859183C1030CE926
             */
            requestId: string;
            orderInfo: components["schemas"]["OrderInfo"];
        };
        /** @description Order Information. */
        OrderInfo: {
            /**
             * @description Order ID.
             * @example v500
             */
            orderId?: string;
            /**
             * @description Sequence number.
             * @example 5006128
             */
            sequence?: number;
            cart?: components["schemas"]["Cart1"];
            clientProfile?: components["schemas"]["ClientProfile"];
            shipping?: components["schemas"]["Shipping"];
        };
        /** @description Cart information. */
        Cart1: {
            /** @description Items information. */
            items: components["schemas"]["Item2"][];
            /**
             * @description Total payment value.
             * @example 0
             */
            grandTotal: number;
            /**
             * @description Discounts value.
             * @example -7.5
             */
            discounts: number;
            /**
             * @description Shipping value.
             * @example 7.27
             */
            shipping: number;
            /**
             * @description Taxes value.
             * @example 0
             */
            taxes: number;
            /**
             * @description Total items value.
             * @example 14.99
             */
            itemsTotal: number;
        };
        /** @description Item information. */
        Item1: {
            /**
             * @description SKU ID.
             * @example 2001023
             */
            id: string;
            /**
             * @description Product ID.
             * @example 2000492
             */
            productId: string;
            /**
             * @description Product Reference ID.
             * @example 35994
             */
            refId: string;
            /**
             * @description Product name.
             * @example Vaporizador Des. ColC4nia Branco
             */
            name: string;
            /**
             * @description Product value.
             * @example 14.99
             */
            value: number;
            /**
             * @description Product price.
             * @example 14.99
             */
            price: number;
            /**
             * @description Product quantity.
             * @example 1
             */
            quantity: number;
            /**
             * @description Discount to be applied for the shipping value.
             * @example 0
             */
            shippingDiscount: number;
            /**
             * @description Discount applied on item.
             * @example -7.5
             */
            discount: number;
            /** @description Array of price tags, each of which modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
            priceTags: string[];
        };
        /** @description Client profile information. */
        ClientProfile: {
            /**
             * @description Customer's email address.
             * @example michael.scott96@mail.com
             */
            email: string;
            /**
             * @description Customer's first name.
             * @example Michael
             */
            firstName: string;
            /**
             * @description Customer's last name.
             * @example Scott
             */
            lastName: string;
            /**
             * @description Document number informed by the customer.
             * @example 02906792063
             */
            document: string;
            /**
             * @description Customer's phone number.
             * @example +551111111111
             */
            phone: string;
            /**
             * @description Customer's birth date.
             * @example 0001-01-01T00:00:00
             */
            birthDate: string;
            /**
             * @description Defines if the customer is a company (`true`) or not (`false`).
             * @example false
             */
            isCorporate: boolean;
        };
        /** @description Shipping information. */
        Shipping: {
            /**
             * @description Name of the person who is going to receive the order.
             * @example Michael Scott
             */
            receiverName: string;
            /**
             * @description Postal code.
             * @example 22250040
             */
            postalCode: string;
            /**
             * @description City of the shipping address.
             * @example Rio de Janeiro
             */
            city: string;
            /**
             * @description State of the shipping address.
             * @example RJ
             */
            state: string;
            /**
             * @description Country of the shipping address.
             * @example BRA
             */
            country: string;
            /**
             * @description Street of the shipping address.
             * @example Praia de Botafogo
             */
            street: string;
            /**
             * @description Number of the building, house or apartment in the shipping address.
             * @example 111
             */
            number: string;
            /**
             * @description Neighborhood of the address.
             * @example Botafogo
             */
            neighborhood: string;
            /**
             * @description Complement to the shipping address in case it applies.
             * @example House
             */
            complement: string | null;
            /**
             * @description Complement that might help locate the shipping address more precisely in case of delivery.
             * @example Subway
             */
            reference: string | null;
        };
        /** @description Gift card transaction response information. */
        GiftCardTransactionResponse: {
            /** @description Gift card identification. */
            cardId: string;
            /** @description Transaction identification. */
            id: string;
            _self: components["schemas"]["Self"];
        };
        /** @description Cart information. */
        Cart2: {
            /** @description Items information. */
            items: components["schemas"]["Item2"][];
            /**
             * @description Total payment value.
             * @example 0
             */
            grandTotal: number;
            /**
             * @description Discounts value.
             * @example -7.5
             */
            discounts: number;
            /**
             * @description Shipping value.
             * @example 7.27
             */
            shipping: number;
            /**
             * @description Taxes value.
             * @example 0
             */
            taxes: number;
            /**
             * @description Total items value.
             * @example 14.99
             */
            itemsTotal: number;
        };
        /** @description Items information. */
        Item2: {
            /**
             * @description SKU ID.
             * @example 2001023
             */
            id: string;
            /**
             * @description Product ID.
             * @example 2000492
             */
            productId: string;
            /**
             * @description Product Reference ID.
             * @example 35994
             */
            refId: string;
            /**
             * @description Product name.
             * @example Vaporizador Des. ColC4nia Branco
             */
            name: string;
            /**
             * @description Product value.
             * @example 14.99
             */
            value: number;
            /**
             * @description Product price.
             * @example 14.99
             */
            price: number;
            /**
             * @description Product quantity.
             * @example 1
             */
            quantity: number;
            /**
             * @description Discount to be applied for the shipping value.
             * @example 0
             */
            shippingDiscount: number;
            /**
             * @description Discount applied on item.
             * @example -7.5
             */
            discount: number;
            /** @description Array of price tags, each of which modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
            priceTags: components["schemas"]["PriceTag"][];
        };
        /** @description Price tag information. */
        PriceTag: {
            /**
             * @description Price tag name.
             * @example discount@price-discount_store_183#4911bf6f-22a2-4af1-a365-cce895c3df2c
             */
            name: string;
            /**
             * @description Price tag value.
             * @example 0
             */
            value: number;
        };
        /** @description Settlement transaction information. */
        Settlement: {
            /**
             * @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification.
             * @example /gatewayqa/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24/transactions/e122ebd4501a4b3b93640b7444ac425d/settlements
             */
            href: string;
        };
        /** @description Cancellation transaction information. */
        Cancellation: {
            /**
             * @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification.
             * @example /gatewayqa/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24/transactions/e122ebd4501a4b3b93640b7444ac425d/cancellations
             */
            href: string;
        };
        /** @description Authorization transaction information. */
        Authorization: {
            /**
             * @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification.
             * @example /gatewayqa/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24/transactions/e122ebd4501a4b3b93640b7444ac425d/authorization
             */
            href: string;
        };
        /** @description Transaction response information. */
        TransactionResponse: {
            /** @description Operation identification. */
            oid: string;
            /** @description Value information. */
            value: number;
            /** @description Date information. */
            date: string;
        };
        /** @description Cancel a gift card transaction request information. */
        CreateGiftCardTransactionCancellationRequest: {
            /**
             * @description Transaction value.
             * @example 4.1
             */
            value: number;
            /**
             * @description Request identification of the transaction.
             * @example 12093812masoidj120398
             */
            requestId: string;
        };
        /** @description Settle a gift card transaction request information. */
        CreateGiftCardTransactionSettlementRequest: {
            /**
             * @description Transaction value.
             * @example 1.8
             */
            value: number;
            /**
             * @description Request identification of the transaction.
             * @example 12093812masoidj120398
             */
            requestId: string;
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
    ListAllGiftCards: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Pagination control. This query variable must follow the format _resources={from}-{to}_. */
                "REST-Range"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["ListAllGiftCardsRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response"][];
                };
            };
        };
    };
    GetGiftCardbyID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
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
                        /** @description Gift card identification. */
                        id?: string;
                        /** @description Gift card redemption token. */
                        redemptionToken?: string;
                        /** @description Gift card identification code used at checkout. Minimum of 6 characters. */
                        redemptionCode?: string;
                        /** @description Gift card current balance. For newly created gift cards, the balance will be 0.0. */
                        balance?: number;
                        /** @description Gift card creation date. */
                        emissionDate?: string;
                        /** @description Gift card expiration date. */
                        expiringDate?: string;
                        /** @description Currency code in ISO 4217. */
                        currencyCode?: string;
                        /**
                         * @deprecated
                         * @description Discount information.
                         */
                        discount?: boolean;
                        /** @description Transactions information. */
                        transactions?: {
                            /** @description Gift card resource URL. The number described in the URL refers to the gift card identification. */
                            href?: string;
                        };
                    };
                };
            };
        };
    };
    CreateGiftCard: {
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
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["CreateGiftCardRequest"];
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
                        /** @description Gift card identification. */
                        id?: string;
                        /** @description Field to be filled in when it is not necessary to use a loyalty program for the gift card. Note that a new `relationNamevalue` is required for each new gift card to be created. */
                        relationName?: string;
                        /** @description Gift card creation date. */
                        emissionDate?: string;
                        /** @description Gift card expiration date. */
                        expiringDate?: string;
                        /** @description Field to be filled in if a loyalty program must be created for the Gift Card. */
                        caption?: string;
                        /** @description The gift card can only be used for a specified client's ID. */
                        restrictedToOwner?: boolean;
                        /** @description The gift card can be used to make new purchases until its value is completely used. */
                        multipleRedemptions?: boolean;
                        /** @description The gift card balance can be changed. */
                        multipleCredits?: boolean;
                        /** @description Client ID. You can use the customer's registered email or the `userId` parameter which can be found in the [Master Data](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw). */
                        profileId?: string;
                        /** @description Currency code in ISO 4217. */
                        currencyCode?: string;
                    };
                };
            };
        };
    };
    ListAllGiftCardTransactions: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
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
                    "application/json": components["schemas"]["GiftCardTransactionResponse"][];
                };
            };
        };
    };
    CreateGiftCardTransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["CreateGiftCardTransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GiftCardTransactionResponse"];
                };
            };
        };
    };
    GetGiftCardTransactionbyID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction identification. */
                transactionId: string;
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
                        /** @description Transaction value. */
                        value?: number;
                        /** @description Transaction description. */
                        description?: string;
                        /** @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`). */
                        date?: string;
                        /** @description VTEX request identifier. */
                        requestId?: string;
                        /** @description Settlement transaction information. */
                        settlement?: {
                            /** @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification. */
                            href?: string;
                        };
                        /** @description Cancellation transaction information. */
                        cancellation?: {
                            /** @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification. */
                            href?: string;
                        };
                        /** @description Authorization transaction information. */
                        authorization?: {
                            /** @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification. */
                            href?: string;
                        };
                        /** @description Operation information (`Credit` or `Debit`). */
                        operation?: string;
                    };
                };
            };
        };
    };
    GetGiftCardTransactionAuthorization: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction identification. */
                transactionId: string;
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
                    "application/json": components["schemas"]["TransactionResponse"];
                };
            };
        };
    };
    ListAllGiftCardTransactionsCancellations: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction identification. */
                transactionId: string;
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
                    "application/json": components["schemas"]["TransactionResponse"][];
                };
            };
        };
    };
    CreateGiftCardTransactionCancellation: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction identification. */
                transactionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["CreateGiftCardTransactionCancellationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransactionResponse"];
                };
            };
        };
    };
    ListAllGiftCardTransactionsSettlements: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction ID generated by the provider. It is different from the `transactionId` generated by VTEX. */
                tId: string;
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
                        /** @description Operation identification. */
                        oid?: string;
                        /** @description Value information. */
                        value?: number;
                        /** @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`). */
                        date?: string;
                    }[];
                };
            };
        };
    };
    CreateGiftCardTransactionSettlement: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction ID generated by the provider. It is different from the `transactionId` generated by VTEX. */
                tId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["CreateGiftCardTransactionSettlementRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransactionResponse"];
                };
            };
        };
    };
}
