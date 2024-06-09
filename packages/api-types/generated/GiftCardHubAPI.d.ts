export interface paths {
    "/api/giftcardproviders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List All GiftCard Providers
         * @description Returns a collection of gift card providers from a store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ListAllGiftCardProviders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/giftcardproviders/{giftCardProviderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get GiftCard Provider by ID
         * @description Returns a gift card provider from a store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetGiftCardProviderbyID"];
        /**
         * Create/Update GiftCard Provider by ID
         * @description Create or update a gift card provider from a store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Edit Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Create/UpdateGiftCardProviderbyID"];
        post?: never;
        /**
         * Delete GiftCard Provider by ID
         * @description Delete a gift card provider from a store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Edit Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeleteGiftCardProviderbyID"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/giftcardproviders/{giftCardProviderId}/giftcards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create GiftCard in GiftCard Provider
         * @description Creates a gift card in a gift card provider.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Edit Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateGiftCardinGiftCardProvider"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/giftcardproviders/{giftCardProviderId}/giftcards/_search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get GiftCard from GiftCard Provider
         * @description Returns all gift cards from a gift card provider according to the filters.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["GetGiftCardfromGiftCardProvider"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/giftcardproviders/{giftCardProviderId}/giftcards/{giftCardId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get GiftCard from GiftCard Provider by ID
         * @description Returns a specific gift card from a gift card provider.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetGiftCardfromGiftCardProviderbyID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/giftcardproviders/{giftCardProviderId}/giftcards/{giftCardId}/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List All GiftCard Transactions
         * @description Returns the IDs of all transactions performed on a gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ListAllGiftCardTransactions"];
        put?: never;
        /**
         * Create GiftCard Transaction
         * @description Creates a transaction (credit or debit) to a gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Edit Gift Card providers** |
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
    "/api/giftcardproviders/{giftCardProviderId}/giftcards/{giftCardId}/transactions/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get GiftCard Transaction by ID
         * @description Returns a specific transaction from a gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
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
    "/api/giftcardproviders/{giftCardProviderId}/giftcards/{giftCardId}/transactions/{tId}/authorization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get GiftCard Transaction Authorization
         * @description Returns information about a gift card transaction authorization.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetGiftCardAuthorizationTransaction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/giftcardproviders/{giftCardProviderId}/giftcards/{giftCardId}/transactions/{tId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List All GiftCard Transactions Settlements
         * @description Returns all transactions settlements for a specific gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ListAllGiftCardSettlementTransactions"];
        put?: never;
        /**
         * Settle GiftCard Transaction
         * @description Creates a transaction settlement for a specific gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Edit Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateGiftCardSettlementTransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/giftcardproviders/{giftCardProviderId}/giftcards/{giftCardId}/transactions/{tId}/cancellations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List All GiftCard Transactions Cancellations
         * @description Returns all transactions cancelled for a specific gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **View Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ListAllGiftCardCancellationTransactions"];
        put?: never;
        /**
         * Cancel GiftCard Transaction
         * @description Creates a cancellation transaction to a gift card.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | GiftCard | GiftCard | **Edit Gift Card providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateGiftCardCancellationTransaction"];
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
        CreateUpdateGiftCardProviderbyIDRequest: {
            /**
             * @description URL from the provider.
             * @example https://api.vtex.com.br/example
             */
            serviceUrl: string;
            /**
             * @description Provider's authentication.
             * @example vtex
             */
            oauthProvider: string;
            /**
             * @description Related to the pre-authorization that can happen on the transaction generated through the provider.
             * @example true
             */
            preAuthEnabled: boolean;
            /**
             * @description Indicates whether it is possible to cancel the transaction, generated through the provider.
             * @example true
             */
            cancelEnabled: boolean;
            /**
             * @description Credential provided by the merchant that VTEX will use for identification.
             * @example key
             */
            appKey?: string;
            /**
             * @description Credential provided by the merchant that VTEX will use for identification.
             * @example token
             */
            appToken?: string;
        };
        CreateGiftCardinGiftCardProviderRequest: {
            /**
             * @description Represents the relationship between the client and the store.
             * @example loyalty-program
             */
            relationName: string;
            /**
             * @description Gift card emission date. It must be in the format `YYYY-MM-DDThh:mm:ss.fff` (ISO 8601 format).
             * @example 2020-09-01T13:15:30Z
             */
            emissionDate: string;
            /**
             * @description Gift card expiration date. It must be in the format `YYYY-MM-DDThh:mm:ss.fff` (ISO 8601 format).
             * @example 2020-09-10T13:15:30Z
             */
            expiringDate: string;
            /**
             * @description Field to be filled in if a loyalty program must be created for the gift card.
             * @example Loyalty Program
             */
            caption: string;
            /**
             * @description The gift card can only be used for a specified client's ID.
             * @example false
             */
            restrictedToOwner: boolean;
            /**
             * @description The gift card can be used to make new purchases until its value is completely used.
             * @example false
             */
            multipleRedemptions: boolean;
            /**
             * @description The gift card balance can be changed.
             * @example false
             */
            multipleCredits: boolean;
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
        };
        GetGiftCardfromGiftCardProviderRequest: {
            client: components["schemas"]["Client"];
            cart: components["schemas"]["Cart"];
        };
        /** @description Client information. */
        Client: {
            /**
             * @description Customer's identification.
             * @example 3b1abc17-988e-4a14-8b7f-31fc6a5b955c
             */
            id?: string;
            /**
             * @description Customer's email address.
             * @example email@domain.com
             */
            email?: string;
            /**
             * @description Document number informed by the customer.
             * @example 42151783120
             */
            document?: string;
        };
        /** @description Cart information. */
        Cart: {
            /**
             * @description Total payment value.
             * @example 0
             */
            grandTotal?: number;
            /**
             * @description Represents the relationship between the client and the store.
             * @example loyalty-program
             */
            relationName?: string;
            /**
             * @description Gift card identification code used at checkout. Minimum of 6 characters.
             * @example ***********ASDQ
             */
            redemptionCode?: string;
            /**
             * @description Discounts value.
             * @example 20
             */
            discounts?: number;
            /**
             * @description Shipping value.
             * @example 2
             */
            shipping?: number;
            /**
             * @description Taxes value.
             * @example 0
             */
            taxes?: number;
            /** @description Items information. */
            items?: components["schemas"]["Item"][];
            /**
             * @description Total items value.
             * @example 200
             */
            itemsTotal?: number;
        };
        /** @description Items information. */
        Item: {
            /**
             * @description Product ID.
             * @example 2000000
             */
            productId?: string;
            /**
             * @description The ID of the SKU in VTEX platform.
             * @example 2000002
             */
            id?: string;
            /**
             * @description Product Reference ID.
             * @example MEV41
             */
            refId?: string;
            /**
             * @description Product name.
             * @example Shoes
             */
            name?: string;
            /**
             * @description Product price.
             * @example 200
             */
            price?: number;
            /**
             * @description Product quantity.
             * @example 1
             */
            quantity?: number;
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
            orderInfo: components["schemas"]["OrderInfo"];
        };
        /** @description Order information. */
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
        /** @description Cart information. */
        Cart1: {
            items: components["schemas"]["Item1"][];
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
            priceTags: {
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
        CreateGiftCardSettlementTransactionRequest: {
            client: components["schemas"]["Client"];
            cart: components["schemas"]["Cart2"];
        };
        /** @description Cart information. */
        Cart2: {
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
             * @example FASD-ASDS-ASDA-ASDA
             */
            redemptionCode: string;
            /**
             * @description Discounts value.
             * @example -20
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
            items: components["schemas"]["Item"][];
            /**
             * @description Total items value.
             * @example 200
             */
            itemsTotal: number;
        };
        CreateGiftCardCancellationTransactionRequest: {
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
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    ListAllGiftCardProviders: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Pagination control. This query variable must follow the format `_resources={from}-{to}_`. */
                "REST-Range"?: string;
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
                        /** @description Gift card provider identification. */
                        id?: string;
                        /** @description URL from the provider. */
                        serviceUrl?: string;
                        /** @description Provider's authentication. */
                        oauthProvider?: string;
                        /** @description Related to the pre-authorization that can happen on the transaction generated through the provider. */
                        preAuthEnabled?: boolean;
                        /** @description Indicates whether it is possible to cancel the transaction, generated through the provider. */
                        cancelEnabled?: boolean;
                        /** @description Object that carries an auto reference from the provider at the Hub (on its API). */
                        _self?: {
                            /** @description This is one of the fields inside the `_self`. It is exactly the route that identifies this provider on the Hub's API, but it is not the same thing as the `serviceURL`. */
                            href?: string;
                        };
                    }[];
                };
            };
        };
    };
    GetGiftCardProviderbyID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                        /** @description Gift card provider identification. */
                        id?: string;
                        /** @description URL from the provider. */
                        serviceUrl?: string;
                        /** @description Provider's authentication. */
                        oauthProvider?: string;
                        /** @description Description about the provider. */
                        caption?: string;
                        /** @description Related to the pre-authorization that can happen on the transaction generated through the provider. */
                        preAuthEnabled?: boolean;
                        /** @description Indicates whether it is possible to cancel the transaction, generated through the provider. */
                        cancelEnabled?: boolean;
                        /** @description Object that carries an auto reference from the provider at the Hub (on its API). */
                        _self?: Record<string, never>;
                    };
                };
            };
            /** @description Object reference not set to an instance of an object (The gift card provider described does not exist). */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "Create/UpdateGiftCardProviderbyID": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["CreateUpdateGiftCardProviderbyIDRequest"];
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
                        /** @description Gift card provider identification. */
                        id?: string;
                        /** @description URL from the provider. */
                        serviceUrl?: string;
                        /** @description Provider's authentication. */
                        oauthProvider?: string;
                        /** @description Related to the pre-authorization that can happen on the transaction generated through the provider. */
                        preAuthEnabled?: boolean;
                        /** @description Indicates whether it is possible to cancel the transaction, generated through the provider. */
                        cancelEnabled?: boolean;
                        /** @description Object that carries an auto reference from the provider at the Hub (on its API). */
                        _self?: Record<string, never>;
                    };
                };
            };
        };
    };
    DeleteGiftCardProviderbyID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                    "application/json": Record<string, never>;
                };
            };
            /** @description The gift card provider described does not exist.
             *      */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CreateGiftCardinGiftCardProvider: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["CreateGiftCardinGiftCardProviderRequest"];
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
                        /** @description Gift card emission date. */
                        emissionDate?: string;
                        /** @description Gift card expiration date. */
                        expiringDate?: string;
                        /** @description Field to be filled in if a loyalty program must be created for the gift card. */
                        caption?: string;
                        /** @description Provider name. */
                        provider?: string;
                        /** @deprecated */
                        discount?: boolean;
                        /** @description Currency code in ISO 4217. */
                        currencyCode?: string;
                        /** @description Transaction information. */
                        transaction?: {
                            /** @description Gift card resource URL. The number described in the URL refers to the gift card identification. */
                            href?: string;
                        };
                    };
                };
            };
        };
    };
    GetGiftCardfromGiftCardProvider: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Pagination control. This query variable must follow the format `_resources={from}-{to}_`. */
                "REST-Range"?: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["GetGiftCardfromGiftCardProviderRequest"];
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
                        /** @description Gift card provider name. */
                        provider?: string;
                        /** @description Gift card current balance. */
                        balance?: number;
                        /** @description Object that carries an auto reference from the provider at the Hub (on its API). */
                        _self?: {
                            /** @description This is one of the fields inside the `_self`. It is exactly the route that identifies this provider on the Hub's API, but it is not the same thing as the `serviceURL`. */
                            href?: string;
                        };
                    }[];
                };
            };
        };
    };
    GetGiftCardfromGiftCardProviderbyID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                        /** @description Gift card emission date. */
                        emissionDate?: string;
                        /** @description Gift card expiration date. */
                        expiringDate?: string;
                        /** @description Currency code in ISO 4217. */
                        currencyCode?: string;
                        /** @deprecated */
                        discount?: boolean;
                        /** @description Transactions information. */
                        transactions?: {
                            /** @description This is one of the fields inside the `_self`. It is exactly the route that identifies this provider on the Hub's API, but it is not the same thing as the `serviceURL`. */
                            href?: string;
                        };
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
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                        cardId?: string;
                        /** @description Transaction identification. */
                        id?: string;
                        /** @description Object that carries an auto reference from the provider at the Hub (on its API). */
                        _self?: {
                            /** @description This is one of the fields inside the `_self`. It is exactly the route that identifies this provider on the Hub's API, but it is not the same thing as the `serviceURL`. */
                            href?: string;
                        };
                    };
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
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                    "application/json": {
                        /** @description Gift card identification. */
                        cardId?: string;
                        /** @description Transaction identification. */
                        id?: string;
                        /** @description Object that carries an auto reference from the provider at the Hub (on its API). */
                        _self?: {
                            /** @description This is one of the fields inside the `_self`. It is exactly the route that identifies this provider on the Hub's API, but it is not the same thing as the `serviceURL`. */
                            href?: string;
                        };
                    };
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
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                        /** @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`) */
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
    GetGiftCardAuthorizationTransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                        oid: string;
                        /** @description Value information. */
                        value: number;
                        /** @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`). */
                        date: string;
                    };
                };
            };
        };
    };
    ListAllGiftCardSettlementTransactions: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                        oid: string;
                        /** @description Value information. */
                        value: number;
                        /** @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`). */
                        date: string;
                    };
                };
            };
        };
    };
    CreateGiftCardSettlementTransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction ID generated by the provider. It is different from the `transactionId` generated by VTEX. */
                tId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
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
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Operation identification. */
                        oid: string;
                        /** @description Value information. */
                        value: number;
                        /** @description Date information. */
                        date: string;
                    }[];
                };
            };
        };
    };
    ListAllGiftCardCancellationTransactions: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
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
                        oid: string;
                        /** @description Value information. */
                        value: number;
                        /** @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`). */
                        date: string;
                    };
                };
            };
        };
    };
    CreateGiftCardCancellationTransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Gift card provider identification. */
                giftCardProviderId: string;
                /** @description Gift card identification. */
                giftCardId: string;
                /** @description Transaction ID generated by the provider. It is different from the `transactionId` generated by VTEX. */
                tId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/vnd.vtex.giftcardproviders.v1+json": components["schemas"]["CreateGiftCardCancellationTransactionRequest"];
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
                        /** @description Operation identification. */
                        oid: string;
                        /** @description Value information. */
                        value: number;
                        /** @description Date of the transaction in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`). */
                        date: string;
                    };
                };
            };
        };
    };
}
