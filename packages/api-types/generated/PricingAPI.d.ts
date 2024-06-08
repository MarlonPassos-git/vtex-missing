export interface paths {
    "/pricing/prices/{itemId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get price by SKU ID
         * @description Retrieves price data given a specific SKU ID. Within the `fixedPrices` object, there might be a list of prices for specific Trade Policies and Minimium Quantities of the SKU. Fixed Prices may also be scheduled.
         *
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetPrice"];
        /**
         * Create or update base price or fixed prices
         * @description Creates or updates an SKU Base Price or Fixed Prices. The **base price** is the basic selling price of a product, it comprises the cost price and the markup wanted in the sale of the product. The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated.
         *
         *     You may optionally set a list price. Additionally, you may set either a cost price or a markup value. By defining either one of them, the other will be calculated to conform to the formula`costPrice * (1 + markup) = basePrice`.
         *
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Modify prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["CreateUpdatePriceOrFixedPrice"];
        post?: never;
        /**
         * Delete price all base and fixed prices of an SKU
         * @description Deletes the Base Price and all available Fixed Prices for an SKU in all trade policies.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Delete all prices from account** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeletePrice"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/prices/{itemId}/fixed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get fixed prices
         * @description The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated. This method retrieves an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities.
         *
         *     The default value for a Minimum Quantity is `1`. This means a Fixed Price will be valid for a SKU in a Trade Policy for orders containing the specified number of Minimum Quantity or above, unless a higher Minimum Quantity is specified.
         *
         *     Fixed prices may, optionally, be scheduled. If so, these objects will contain the `dateRange` object with `from` and `to` properties, indicating the start and end time of the scheduled fixed price in the RFC3339 timestamp format (`YYYY-MM-DDT23:59:60Z`).
         *
         *      Note that the 'Z', at the end, represents the UTC time (GMT+00:00). If it was in GMT-03:00, for example, it would be (`YYYY-MM-DDT23:59:60-03:00`).
         *
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetFixedPrices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/prices/{itemId}/fixed/{priceTableId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get fixed prices on a price table or trade policy
         * @description Retrieves all Fixed Prices on a price table or trade policy.
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetFixedPricesonapricetable"];
        put?: never;
        /**
         * Create or update fixed prices on a price table or trade policy
         * @description Creates or updates the fixed prices of an SKU for a specific price table or trade policy. You can add one or multiple fixed prices per SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Modify prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     > ❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["createorupdatefixedpricesonpricetableortradepolicy"];
        /**
         * Delete fixed prices on a price table or trade policy
         * @description Deletes all Fixed Prices of an SKU in a specific Price Table or Trade Policy.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Delete all prices from account** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["Deletefixedpricesonapricetableortradepolicy"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/prices/{itemId}/computed/{priceTableId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get computed price by price table or trade policy
         * @description Gets the Computed Price, which is the price after all the steps in the Pricing pipeline, for an SKU in a specific price table or trade policy.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >u2757 To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetComputedPricebypricetable"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get pricing configuration
         * @description Retrieves Pricing configuration.
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetPricingConfig"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/migration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get pricing v2 status
         * @description Retrieves Pricing v2 status.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetPricingv2Status"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/pipeline/catalog/{priceTableId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get rules for a price table
         * @description Retrieves the rules of a specific price table.
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getrulesforapricetable"];
        /**
         * Update rules for a price table
         * @description Updates the rules of a specific price table, by deleting all the rules from the requested price table and creating new rules based on the content of the request.
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Modify prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Describes the type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description Price Table Name. */
                    priceTableId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** @description Array of rules for the price table. */
                        rules: {
                            /**
                             * @description Rule ID.
                             * @example 0
                             */
                            id: number;
                            /** @description Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item. */
                            context: {
                                /** @description Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`. */
                                categories: {
                                    [key: string]: string | undefined;
                                };
                                /** @description Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`. */
                                brands: {
                                    [key: string]: string | undefined;
                                };
                                /**
                                 * @description Stock statuses.
                                 * @example null
                                 */
                                stockStatuses?: Record<string, never>;
                                /**
                                 * @description Internal Categories.
                                 * @example null
                                 */
                                internalCategories?: Record<string, never>;
                                /**
                                 * @description For an item to be eligible to the rule, it's markup should be in this Markup Range.
                                 * @example null
                                 */
                                markupRange: {
                                    /**
                                     * @description Item markup should be greater than or equal to this value.
                                     * @example 0
                                     */
                                    from: number;
                                    /**
                                     * @description Item markup should be less than or equal to this value.
                                     * @example 200
                                     */
                                    to: number;
                                } | null;
                                /** @description The rule will be active during this time range. */
                                dateRange: {
                                    /**
                                     * @description Date when rule will be activated. Date format: `RFC3339`.
                                     * @example 2019-10-23T19:00:00.000Z
                                     */
                                    from: string;
                                    /**
                                     * @description Date when the rule will be deactivated. Date format: `RFC3339`.
                                     * @example 2019-10-26T00:00:00.000Z
                                     */
                                    to: string;
                                };
                            };
                            /**
                             * @description Percentual modifier.
                             * @example 0
                             */
                            percentualModifier: number;
                        }[];
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
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/pipeline/catalog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all price tables and their rules
         * @description Retrieves a list of all price tables and their rules.
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["getallpricetablesandrules"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricing/tables": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List price tables
         * @description Retrieves a list of all price tables.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Pricing | Price List | **Read prices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Listpricetables"];
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
        /** @description Fixed price request body information. */
        FixedPrice: {
            /** @description Trade Policy ID. */
            tradePolicyId: string;
            /** @description Trade Policy Fixed Price Value. */
            value: number;
            /** @description Trade Policy List Price Value. */
            listPrice: number | null;
            /**
             * Format: int32
             * @description Trade Policy Fixed Price Minimum Item Quantity.
             */
            minQuantity: number;
            dateRange?: components["schemas"]["DateRange"];
        };
        /** @description Trade Policy Fixed Price Validity Period Object. */
        DateRange: {
            /** @description Indicates the date and time when the fixed price will start to be valid. */
            from: string;
            /** @description Indicates the date and time from which the fixed price will no longer be valid. */
            to: string;
        };
        /** @description Price request body information. */
        Getprice: {
            /** @description SKU ID. */
            itemId: string;
            /**
             * Format: int32
             * @description Suggested retail price for the SKU.
             */
            listPrice: number;
            /**
             * Format: int32
             * @description SKU's cost price.
             */
            costPrice: number;
            /**
             * Format: int32
             * @description Desired profit margin with the SKU's sale.
             */
            markup: number;
            /**
             * Format: int32
             * @description SKU's reference price.
             */
            basePrice: number;
            /** @description The fixed price is a price that overlaps all other existing price configurations of a price table. */
            fixedPrices: components["schemas"]["FixedPrice"][];
        };
        /** @description Computed price request body information. */
        Getcomputedprice: {
            /** @description Trade Policy ID ou `priceTableId`. */
            tradePolicyId: string;
            /**
             * Format: int32
             * @description Trade Policy List Price, also known as "from" price.
             */
            listPrice: number;
            /** @description Cost price. */
            costPrice?: number;
            /** @description Computed Price before applying coupons, promotions and taxes. This price may change before reaching the shelf. */
            sellingPrice: number;
            /** @description Date until when the computed price will be valid, due to price scheduling. If no price scheduling applies, this will be set a year from the current time. */
            priceValidUntil: string;
        };
        /** @description Pricing configuration request body information. */
        PricingConfiguration: {
            /** @description Defines if the account has migrated to Pricing V2. */
            hasMigrated: boolean;
            /** @description Pricing V2 migration status. */
            migrationStatus?: string;
            /**
             * Format: int32
             * @description Account default markup.
             */
            defaultMarkup: number;
            /** @description Price Variation object. */
            priceVariation?: {
                /** @description Upper variation limit. */
                upperLimit?: number | null;
                /** @description Lower variation limit. */
                lowerLimit?: number | null;
            };
            /** @description Account minimum markup. */
            minimumMarkups: {
                [key: string]: number | undefined;
            };
            /** @description Trade Policy Configurations array. */
            tradePolicyConfigs?: {
                /** @description Trade Policy ID. */
                tradePolicyId?: string;
                /** @description Trade Policy Minimum Markup. */
                minimumMarkup?: number;
                /** @description Defines if the Price Rule should affect the list price too. */
                rulesShouldAffectListPrice?: boolean;
            }[];
            /** @description Overrides prices from sellers. */
            sellersToOverride?: string[] | null;
            /**
             * @deprecated
             * @description Deprecated. Use the `priceInheritance` field instead.
             */
            hasPriceInheritance?: boolean;
            /** @description Condition of price inheritance from its parent account. This field can have three possible values: `never` if the store should never inherit prices, `nonexistent` if the store should only inherit prices in case of nonexistent prices for a given product, or `always` if the store should always inherit prices, regardless of its own prices. */
            priceInheritance?: string;
            /** @description Defines if optional base price is allowed. */
            hasOptionalBasePrice?: boolean;
            /** @description Defines if access to the Pricing APIs is blocked for external requests. */
            blockAccount?: boolean;
            /** @description Array with all blocked routes. */
            blockedRoutes?: string[] | null;
            /**
             * @description The strategy used to get prices when there is more than one option. Possible values: `first`, `highest`, `lowest`. Default: `first`.
             * @default first
             */
            priceTableSelectionStrategy: string;
            /** @description Price Table Limit. */
            priceTableLimit?: number | null;
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
    GetPrice: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                itemId: number;
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
                    "application/json": components["schemas"]["Getprice"];
                };
            };
        };
    };
    CreateUpdatePriceOrFixedPrice: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description SKU unique identifier number. */
                itemId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "markup": 30,
                 *       "listPrice": 50,
                 *       "basePrice": 100,
                 *       "costPrice": 35,
                 *       "fixedPrices": [
                 *         {
                 *           "tradePolicyId": "1",
                 *           "value": 50.5,
                 *           "listPrice": 50.5,
                 *           "minQuantity": 2,
                 *           "dateRange": {
                 *             "from": "2021-12-30T22:00:00-03:00",
                 *             "to": "2021-12-30T22:00:00-03:00"
                 *           }
                 *         }
                 *       ]
                 *     } */
                "application/json": {
                    /**
                     * @description The profit percentage that is to be obtained from the sale of that SKU. If you decide to fill the `markup` item, you must also fill the `costPrice`. The `basePrice` will be automatically generated based on both values.
                     * @example 30
                     */
                    markup: number;
                    /**
                     * @description SKU's suggested selling price.
                     * @example 50
                     */
                    listPrice: number;
                    /**
                     * @description SKU selling base price. If you decide to fill only the `basePrice` item, the `markup` and `costPrice` will be automatically generated to adapt to the number inserted in `basePrice`.
                     * @example 100
                     */
                    basePrice: number;
                    /**
                     * @description SKU selling cost price. If you decide to fill the `costPrice` item, you must also fill the `markup` and `basePrice` will be automatically generated based on both values.
                     * @example 35
                     */
                    costPrice?: number;
                    /** @description Information  about the SKU's fixed prices. */
                    fixedPrices?: {
                        /**
                         * @description Trade policy name or ID that will have the fixed price configured.
                         * @example 1
                         */
                        tradePolicyId: string;
                        /**
                         * @description Fixed price value.
                         * @example 50.5
                         */
                        value: number;
                        /**
                         * @description SKU List Fixed Price.
                         * @example 50.5
                         */
                        listPrice?: number;
                        /**
                         * @description Minimum quantity of the SKU for the fixed price to be applied.
                         * @example 2
                         */
                        minQuantity: number;
                        /** @description Period of time when the fixed price will be applied to the SKU. */
                        dateRange?: {
                            /**
                             * @description Start date of the price.
                             * @example 2021-12-30T22:00:00-03:00
                             */
                            from: string;
                            /**
                             * @description End date of the price.
                             * @example 2021-12-30T22:00:00-03:00
                             */
                            to: string;
                        };
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
                content?: never;
            };
        };
    };
    DeletePrice: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                itemId: number;
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
    GetFixedPrices: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description SKU ID. */
                itemId: number;
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
                    "application/json; charset=utf-8": components["schemas"]["FixedPrice"][];
                };
            };
        };
    };
    GetFixedPricesonapricetable: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                itemId: number;
                /** @description Price Table Name */
                priceTableId: string;
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
                    "application/json; charset=utf-8": components["schemas"]["FixedPrice"][];
                };
            };
        };
    };
    createorupdatefixedpricesonpricetableortradepolicy: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                itemId: number;
                /** @description SKU **price table** name or **trade policy** ID. */
                priceTableId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Fixed price value.
                     * @example 50.5
                     */
                    value: number;
                    /**
                     * @description SKU List Fixed Price.
                     * @example 50.5
                     */
                    listPrice?: number;
                    /**
                     * @description The minimum SKU quantity for the fixed price to be applied.
                     * @example 2
                     */
                    minQuantity: number;
                    /** @description Period of time when the fixed price will be applied to the SKU. */
                    dateRange?: {
                        /**
                         * @description Start date of the price.
                         * @example 2021-12-30T22:00:00-03:00
                         */
                        from: string;
                        /**
                         * @description End date of the price.
                         * @example 2021-12-30T22:00:00-04:00
                         */
                        to: string;
                    };
                }[];
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
    Deletefixedpricesonapricetableortradepolicy: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                itemId: number;
                /** @description Price Table or Trade Policy Name. */
                priceTableId: string;
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
    GetComputedPricebypricetable: {
        parameters: {
            query: {
                /** @description Category ID. */
                categoryIds: number;
                /** @description Brand ID. */
                brandId: number;
                /** @description SKU quantity. */
                quantity: number;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                itemId: number;
                /** @description SKU Price Table Name. */
                priceTableId: string;
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
                    "application/json; charset=utf-8": components["schemas"]["Getcomputedprice"];
                };
            };
        };
    };
    GetPricingConfig: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
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
                    "Access-Control-Allow-Credentials"?: {
                        /** @example true */
                        "text/plain": string;
                    };
                    "Access-Control-Allow-Origin"?: {
                        /** @example * */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 118 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Tue, 21 Feb 2017 16:11:39 GMT */
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
                        /** @example pricing-v3.21.12 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": components["schemas"]["PricingConfiguration"];
                };
            };
        };
    };
    GetPricingv2Status: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
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
                    "Access-Control-Allow-Credentials"?: {
                        /** @example true */
                        "text/plain": string;
                    };
                    "Access-Control-Allow-Origin"?: {
                        /** @example * */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 52 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Tue, 21 Feb 2017 16:13:39 GMT */
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
                        /** @example pricing-v3.21.12 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        /** @description Defines if the account is active. */
                        isActive?: boolean;
                        /** @description Defines if the account has migrated to Pricing V2. */
                        hasMigrated?: boolean;
                    };
                };
            };
        };
    };
    Getrulesforapricetable: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Price Table Name. */
                priceTableId: string;
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
                        /** @description Trade Policy ID (Price Table ID). */
                        tradePolicyId?: string;
                        /** @description Array of rules for the price table. */
                        rules?: {
                            /** @description Rule ID. */
                            id?: number;
                            /** @description Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item. */
                            context?: {
                                /** @description Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`. */
                                categories?: {
                                    [key: string]: string | undefined;
                                };
                                /** @description Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`. */
                                brands?: {
                                    [key: string]: string | undefined;
                                };
                                /** @description Stock statuses. */
                                stockStatuses?: Record<string, never>;
                                /** @description Internal Categories. */
                                internalCategories?: Record<string, never>;
                                /** @description For an item to be eligible to the rule, it's markup should be in this Markup Range. */
                                markupRange?: {
                                    /** @description Item markup should be greater than or equal to this value. */
                                    from?: number;
                                    /** @description Item markup should be less than or equal to this value. */
                                    to?: number;
                                } | null;
                                /** @description The rule will be active during this time range. */
                                dateRange?: {
                                    /** @description Date when rule will be activated. Date format: `RFC3339`. */
                                    from?: string;
                                    /** @description Date when the rule will be deactivated. Date format: `RFC3339`. */
                                    to?: string;
                                } | null;
                            };
                        }[];
                        /** @description Percentual modifier. */
                        percentualModifier?: number;
                    };
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
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
    getallpricetablesandrules: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
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
                    "application/json": {
                        /** @description Trade Policy ID (Price Table ID). */
                        tradePolicyId?: string;
                        /** @description Array of rules for the price table. */
                        rules?: {
                            /** @description Rule ID. */
                            id?: number;
                            /** @description Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item. */
                            context?: {
                                /** @description Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`. */
                                categories?: {
                                    [key: string]: string | undefined;
                                };
                                /** @description Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`. */
                                brands?: {
                                    [key: string]: string | undefined;
                                };
                                /** @description Stock statuses. */
                                stockStatuses?: Record<string, never>;
                                /** @description Internal Categories. */
                                internalCategories?: Record<string, never>;
                                /** @description For an item to be eligible to the rule, it's markup should be in this Markup Range. */
                                markupRange?: {
                                    /** @description Item markup should be greater than or equal to this value. */
                                    from?: number;
                                    /** @description Item markup should be less than or equal to this value. */
                                    to?: number;
                                } | null;
                                /** @description The rule will be active during this time range. */
                                dateRange?: {
                                    /** @description Date when rule will be activated. Date format: `RFC3339`. */
                                    from?: string;
                                    /** @description Date when the rule will be deactivated. Date format: `RFC3339`. */
                                    to?: string;
                                } | null;
                            };
                        }[];
                        /** @description Percentual modifier. */
                        percentualModifier?: number;
                    }[];
                };
            };
        };
    };
    Listpricetables: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
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
                    "application/json": string[];
                };
            };
        };
    };
}
