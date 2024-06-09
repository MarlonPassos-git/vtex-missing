export interface paths {
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
         * @description Creates a gift card for a specific user.
         *
         *     >⚠️ The `redemptionCode` field is auto-generated during gift card creation and cannot be set to an arbitrary value.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateGiftCard"];
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
         * @description Returns information for a specific gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
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
         * @description Returns a list of all gift cards available for a specific customer's cart.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["SearchGiftCardsfromcartdata"];
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
         * @description Returns the IDs of all transactions performed on a gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetGiftCardTransactions"];
        put?: never;
        /**
         * Create a gift card transaction
         * @description Creates a transaction (credit or debit) to a gift card and authorize the item reservation.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
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
         * @description Returns a specific transaction for a gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
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
         * @description Returns information about a gift card transaction authorization.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetTransactionAuthorizations"];
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
         * @description Returns all transactions cancelled for a specific gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetTransactionCancellations"];
        put?: never;
        /**
         * Cancel a gift card transaction
         * @description This request can be used to:
         *
         *     1. Cancel a transaction for a specific gift card.
         *
         *     2. Cancel an item's reservation or create a refund.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CancelGiftCardTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/giftcards/{giftCardId}/transactions/{transactionId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all gift card transactions settlements
         * @description Returns all transactions settlements for a specific gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetTransactionSettlements"];
        put?: never;
        /**
         * Settle a gift card transaction
         * @description Creates a transaction settlement for a specific gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Gift card full access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["SettleGiftCardTransaction"];
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
        CreateGiftCardRequest: {
            /**
             * @description Represents the relationship between the client and the store.
             * @example loyalty-program
             */
            relationName: string;
            /**
             * @description It must be in the format `YYYY-MM-DDThh:mm:ss.fff` (ISO 8601 format).
             * @example 2020-09-01T13:15:30Z
             */
            expiringDate: string;
            /**
             * @description Field to be filled in if a loyalty program must be created for the gift card.
             * @example rewards program
             */
            caption: string;
            /**
             * @description Client ID. You can use the customer's registered email or the `userId` parameter which can be found in the [Master Data](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw).
             * @example 92de2449-0e02-4ca9-a4aa-a09cc9d8f7ff
             */
            profileId: string;
            /**
             * @description Currency code in ISO 4217.
             * @example USD
             */
            currencyCode?: string;
            /**
             * @description The gift card can only be used for a specified client's ID.
             * @example false
             */
            restrictedToOwner?: boolean;
            /**
             * @description The gift card balance can be changed.
             * @example false
             */
            multipleCredits?: boolean;
            /**
             * @description The gift card can be used to make new purchases until its value is completely used.
             * @example false
             */
            multipleRedemptions?: boolean;
        };
        response: {
            /**
             * @description Gift card identification.
             * @example 954
             */
            id: string;
            /**
             * @description Gift card redemption token.
             * @example 32ScL57220Vapb8pc50HJ3mWH1cl1L8x
             */
            redemptionToken: string;
            /**
             * @description Gift card identification code used at checkout. Minimum of 6 characters.
             * @example ***********ASDQ
             */
            redemptionCode: string;
            /**
             * @description Gift card current balance. For newly created gift cards, the balance will be 0.0.
             * @example 0
             */
            balance: number;
            /**
             * @description Field to be filled in when it is not necessary to use a loyalty program for the gift card. Note that a new `relationNamevalue` is required for each new gift card to be created.
             * @example cardName
             */
            relationName: string;
            /**
             * @description Gift card creation date.
             * @example 2014-04-24T20:22:58.163
             */
            emissionDate: string;
            /**
             * @description Gift card expiration date.
             * @example 2016-01-01T00:00:00
             */
            expiringDate: string;
            /**
             * @description Field to be filled in if a loyalty program must be created for the Gift Card.
             * @example VTEX Loyalty Program
             */
            caption: string;
            /**
             * @description Currency code in ISO 4217.
             * @example USD
             */
            currencyCode?: string;
            transactions: components["schemas"]["Transactions"];
        };
        /** @description Transactions information. */
        Transactions: {
            /**
             * @description Gift card resource URL. The number described in the URL refers to the gift card identification.
             * @example cards/954/transactions
             */
            href: string;
        };
        GetGiftCardusingJSONRequest: {
            cart: components["schemas"]["Cart"];
            client: components["schemas"]["Client"];
        };
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
        response2: {
            /** @description Items information. */
            items: components["schemas"]["Item1"][];
            paging: components["schemas"]["Paging"];
        };
        Item1: {
            /**
             * @description Item identification.
             * @example 589
             */
            id: string;
            _self: components["schemas"]["Self"];
        };
        /** @description Object that carries an auto reference of the transaction (on its API). */
        Self: {
            /**
             * @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification.
             * @example cards/890/transactions/268
             */
            href: string;
        };
        Paging: {
            /**
             * @description Page number of the gift card list.
             * @example 0
             */
            page: number;
            /**
             * @description Quantity of gift cards per page.
             * @example 10
             */
            perPage: number;
            /**
             * @description Total of gift cards in the store.
             * @example 4
             */
            total: number;
            /**
             * @description Total number of pages.
             * @example 1
             */
            pages: number;
        };
        response3: {
            /**
             * @description Transaction identification.
             * @example 268
             */
            id: string;
            _self: components["schemas"]["Self"];
        };
        CreateGiftCardTransactionRequest: {
            /**
             * @description Type of operation. Possible values are: `Debit` or `Credit`.
             * @example Debit
             */
            operation: string;
            /**
             * Format: decimal
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
            orderInfo?: components["schemas"]["OrderInfo"];
        };
        OrderInfo: {
            /**
             * @description Order ID.
             * @example v5006128str
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
        /** @description Client Profile information. */
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
        response5: {
            /**
             * @description Transaction value.
             * @example 140
             */
            value?: number;
            /**
             * @description Transaction description.
             * @example GiftCardHub
             */
            description?: string;
            /**
             * @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`).
             * @example 2023-06-02T18:24:49.252855Z
             */
            date?: string;
            /**
             * @description VTEX request identifier.
             * @example 3
             */
            requestId?: string;
            /** @description Settlement transaction information. */
            settlement?: {
                /**
                 * @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification.
                 * @example /cosmetics2/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_70/transactions/faa6831230634c4b8fb897e02ba9c5a1/settlements
                 */
                href?: string;
            };
            /** @description Cancellation transaction information. */
            cancellation?: {
                /**
                 * @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification.
                 * @example /cosmetics2/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_70/transactions/faa6831230634c4b8fb897e02ba9c5a1/cancellations
                 */
                href?: string;
            };
            /** @description Authorization transaction information. */
            authorization?: {
                /**
                 * @description Gift card resource URL. The first number described in the URL refers to the gift card identification. The second number, refers to the transaction identification.
                 * @example /cosmetics2/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_70/transactions/faa6831230634c4b8fb897e02ba9c5a1/authorization
                 */
                href?: string;
            };
            /**
             * @description Operation information (`credit` or `debit`).
             * @example Credit
             */
            operation?: string;
        };
        response6: {
            /**
             * @description Operation identification.
             * @example 7cf8d7970e1c81d05620e46cceb6819f
             */
            oid: string;
            /**
             * @description Value information.
             * @example 123.4
             */
            value: number;
            /**
             * @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`).
             * @example 2016-01-01T00:00:00
             */
            date: string;
        };
        response7: {
            /**
             * @description Operation identification.
             * @example 239d35b430fc75379db966c1d3670c6f
             */
            oid: string;
            /**
             * @description Value information.
             * @example 13.4
             */
            value: number;
            /**
             * @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`).
             * @example 2016-04-06T00:00:00
             */
            date: string;
        };
        GiftCardTransactionRequest: {
            /**
             * @description Value information.
             * @example 17.4
             */
            value: number;
            /**
             * @description VTEX request identifier.
             * @example 6360f98eb0cf6fd5afa77e39bba8c20fe5807d8c
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
                "application/vnd.vtex.giftcard.v1+json": components["schemas"]["CreateGiftCardRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response"];
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
                        /** @description Currency code in ISO 4217. */
                        currencyCode?: string;
                        transactions: components["schemas"]["Transactions"];
                    };
                };
            };
        };
    };
    SearchGiftCardsfromcartdata: {
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
                "application/json": components["schemas"]["GetGiftCardusingJSONRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response2"];
                };
            };
        };
    };
    GetGiftCardTransactions: {
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
                    "application/json": components["schemas"]["response3"][];
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateGiftCardTransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response3"];
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
                    "application/json": components["schemas"]["response5"];
                };
            };
        };
    };
    GetTransactionAuthorizations: {
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
                    "application/json": components["schemas"]["response6"];
                };
            };
        };
    };
    GetTransactionCancellations: {
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
                    "application/json": components["schemas"]["response7"][];
                };
            };
        };
    };
    CancelGiftCardTransaction: {
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
                "application/json": components["schemas"]["GiftCardTransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response6"];
                };
            };
        };
    };
    GetTransactionSettlements: {
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
                    "application/json": components["schemas"]["response6"][];
                };
            };
        };
    };
    SettleGiftCardTransaction: {
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
                /** @example {
                 *       "value": 17.4,
                 *       "requestId": "6360f98eb0cf6fd5afa77e39bba8c20fe5807d8c"
                 *     } */
                "application/json": components["schemas"]["GiftCardTransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["response6"];
                };
            };
        };
    };
}
