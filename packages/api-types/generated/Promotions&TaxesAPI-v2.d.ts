export interface paths {
    "/api/rnb/v2/pvt/coupon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get coupons
         * @description Retrieves the list of all active coupons.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getgroupedcoupons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/group/archived": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get archived coupons
         * @description Retrieves the list of all archived coupons.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getgroupedarchivedcoupons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/group/{groupingKey}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get coupon batch information
         * @description Retrieves information from a specific coupon batch based on its `groupingKey`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getcoupongroupinformation"];
        /**
         * Edit coupon batch configuration
         * @description Changes information from a specific coupon batch configuration based on its `groupingKey`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Editcoupongroupconfiguration"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/group/{groupingKey}/codes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get coupon batch codes
         * @description Retrieves a specific coupon batch's list of codes.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getcoupongroupcodes."];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/group/{groupingKey}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Archive a coupon batch
         * @description Archives a coupon batch and its respective codes.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Archivedcoupongroup"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/group": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create coupon batches
         * @description Creates one or more coupon batches.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Creategroupsofcoupons"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/group/{groupingKey}/unarchive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Unarchive a coupon batch
         * @description Unarchives a coupon batch and its respective codes.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Unarchivedcoupongroup"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/usage-count/{couponCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get usage count for a single coupon
         * @description Returns the number of times a specific single coupon was used, based on its `couponCode`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getnumberofusagesofasinglecoupon"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/v2/pvt/coupon/usage-count/group/{groupingKey}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get usage count for a coupon batch
         * @description Returns the number of times a coupon batch was used, based on its `groupingKey`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getnumberofusagesofacouponbatch"];
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
        /** @description List of coupons. */
        getcoupons: {
            /**
             * items
             * @description Array of objects.
             */
            items?: {
                /**
                 * grouping
                 * @description Coupon batch.
                 */
                grouping?: {
                    /**
                     * key
                     * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                     */
                    key?: string;
                    /**
                     * amount
                     * @description Amount of codes in the coupon batch.
                     */
                    amount?: number;
                };
                /**
                 * configuration
                 * @description Object containing the coupon's properties.
                 */
                configuration?: {
                    /**
                     * lastModifiedUtc
                     * @description Date when the coupon was modified for the last time, in the UTC format.
                     */
                    lastModifiedUtc?: string;
                    /**
                     * utmSource
                     * @description UTM source related to the coupon, which indicates the source of the traffic, that is, from which site, advertiser, or publication the user came from.
                     */
                    utmSource?: string;
                    /**
                     * utmCampaign
                     * @description UTM campaign related to the coupon, which indicates the campaign that defines a particular marketing context.
                     */
                    utmCampaign?: string;
                    /**
                     * couponCode
                     * @description Single coupon code.
                     */
                    couponCode?: string;
                    /**
                     * isArchived
                     * @description Determines whether the coupon is archived (`true`) or not (`false`).
                     */
                    isArchived?: boolean;
                    /**
                     * maxItemsPerClient
                     * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of Coupons. When enabled, it determines the maximum amount of products to which the coupon can be applied. The defined quantity is valid for one or more purchases by the same customer.
                     */
                    maxItemsPerClient?: number;
                    /**
                     * expirationIntervalPerUse
                     * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of the Coupons module. When enabled, it determines how many days after purchase the coupon will be available for use again.
                     */
                    expirationIntervalPerUse?: string;
                    /**
                     * maxUsage
                     * @description The maximum number of times the coupon can be used, if the coupon has limited usage.
                     */
                    maxUsage?: number;
                    /**
                     * groupingKey
                     * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                     */
                    groupingKey?: string;
                };
            }[];
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
    Getgroupedcoupons: {
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
                    "application/json": components["schemas"]["getcoupons"];
                };
            };
        };
    };
    Getgroupedarchivedcoupons: {
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
                    "application/json": components["schemas"]["getcoupons"];
                };
            };
        };
    };
    Getcoupongroupinformation: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                 * @example promo
                 */
                groupingKey: string;
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
                        /**
                         * configuration
                         * @description Object containing the coupon's properties.
                         */
                        configuration?: {
                            /**
                             * lastModifiedUtc
                             * @description Date when the coupon was modified for the last time, in the UTC format.
                             */
                            lastModifiedUtc?: string;
                            /**
                             * utmSource
                             * @description UTM source related to the coupon, which indicates the source of the traffic, that is, from which site, advertiser, or publication the user came from.
                             */
                            utmSource?: string;
                            /**
                             * utmCampaign
                             * @description UTM campaign related to the coupon, which indicates the campaign that defines a particular marketing context.
                             */
                            utmCampaign?: string;
                            /**
                             * isArchived
                             * @description Determines whether the coupon is archived (`true`) or not (`false`).
                             */
                            isArchived?: boolean;
                            /**
                             * maxItemsPerClient
                             * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of Coupons. When enabled, it determines the maximum amount of products to which the coupon can be applied. The defined quantity is valid for one or more purchases by the same customer.
                             */
                            maxItemsPerClient?: number;
                            /**
                             * expirationIntervalPerUse
                             * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of the Coupons module. When enabled, it determines how many days after purchase the coupon will be available for use again.
                             */
                            expirationIntervalPerUse?: string;
                            /**
                             * maxUsage
                             * @description The maximum number of times the coupon can be used, if the coupon has limited usage.
                             */
                            maxUsage?: number;
                            /**
                             * groupingKey
                             * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                             */
                            groupingKey?: string;
                        };
                        /**
                         * grouping
                         * @description Coupon batch.
                         */
                        grouping?: {
                            /**
                             * key
                             * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                             */
                            key?: string;
                            /**
                             * amount
                             * @description Amount of codes in the coupon batch.
                             */
                            amount?: number;
                        };
                    };
                };
            };
        };
    };
    Editcoupongroupconfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                 * @example promo
                 */
                groupingKey: string;
            };
            cookie?: never;
        };
        /** @description Request body to edit coupon batch configuration information. */
        requestBody: {
            content: {
                /** @example {
                 *       "utmSource": "source",
                 *       "isArchived": false,
                 *       "maxItemsPerClient": 0,
                 *       "expirationIntervalPerUse": "00:00:00",
                 *       "maxUsage": 4
                 *     } */
                "application/json": {
                    /**
                     * utmSource
                     * @description UTM source related to the coupon, which indicates the source of the traffic, that is, from which site, advertiser, or publication the user came from. It is mandatory to provide either `utmSource` or `utmCampaign`.
                     * @example fb
                     */
                    utmSource?: string;
                    /**
                     * utmCampaign
                     * @description UTM campaign related to the coupon, which indicates the campaign that defines a particular marketing context. It is mandatory to provide either `utmSource` or `utmCampaign`.
                     * @example blackfriday
                     */
                    utmCampaign?: string;
                    /**
                     * isArchived
                     * @description Determines whether the coupon is archived (`true`) or not (`false`).
                     * @example false
                     */
                    isArchived: boolean;
                    /**
                     * maxItemsPerClient
                     * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of Coupons. When enabled, it determines the maximum amount of products to which the coupon can be applied. The defined quantity is valid for one or more purchases by the same customer.
                     * @example 0
                     */
                    maxItemsPerClient?: number;
                    /**
                     * expirationIntervalPerUse
                     * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of the Coupons module. When enabled, it determines how many days after purchase the coupon will be available for use again.
                     * @example 14.00:00:00
                     */
                    expirationIntervalPerUse?: string;
                    /**
                     * maxUsage
                     * @description The maximum number of times the coupon can be used, if the coupon has limited usage.
                     * @example 3
                     */
                    maxUsage: number;
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
                    "application/json": string[];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    "Getcoupongroupcodes.": {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                 * @example promo
                 */
                groupingKey: string;
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
                    "application/json": string[];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    Archivedcoupongroup: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                 * @example promo
                 */
                groupingKey: string;
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
                    "application/json": number;
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    Creategroupsofcoupons: {
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
        /** @description Request body create coupon batches. */
        requestBody: {
            content: {
                /** @example [
                 *       {
                 *         "couponConfiguration": {
                 *           "utmSource": "fb",
                 *           "utmCampaign": "blackfriday",
                 *           "couponCode": "bf22",
                 *           "expirationIntervalPerUse": "00:00:00",
                 *           "maxItemsPerClient": 5,
                 *           "maxUsage": 5
                 *         },
                 *         "quantity": "5"
                 *       }
                 *     ] */
                "application/json": {
                    /**
                     * CouponConfiguration
                     * @description Object containing the coupon's properties.
                     */
                    couponConfiguration: {
                        /**
                         * utmSource
                         * @description UTM source related to the coupon, which indicates the source of the traffic, that is, from which site, advertiser, or publication the user came from. It is mandatory to provide either `utmSource` or `utmCampaign`.
                         * @example fb
                         */
                        utmSource?: string;
                        /**
                         * utmCampaign
                         * @description UTM campaign related to the coupon, which indicates the campaign that defines a particular marketing context. It is mandatory to provide either `utmSource` or `utmCampaign`.
                         * @example blackfriday
                         */
                        utmCampaign?: string;
                        /**
                         * couponCode
                         * @description Coupon batch prefix.
                         * @example rewards10
                         */
                        couponCode: string;
                        /**
                         * expirationIntervalPerUse
                         * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of the Coupons module. When enabled, it determines how many days after purchase the coupon will be available for use again.
                         * @example 14.00:00:00
                         */
                        expirationIntervalPerUse?: string;
                        /**
                         * maxItemsPerClient
                         * @description This option is non-editable and visible only for existing coupons configured with this limitation in previous versions of Coupons. When enabled, it determines the maximum amount of products to which the coupon can be applied. The defined quantity is valid for one or more purchases by the same customer.
                         * @example 0
                         */
                        maxItemsPerClient?: number;
                        /**
                         * maxUsage
                         * @description The maximum number of times the coupon can be used, if the coupon has limited usage.
                         * @example 3
                         */
                        maxUsage: number;
                    };
                    /**
                     * @description Number of codes to be generated for the coupon batch.
                     * @example 5
                     */
                    quantity: string;
                }[];
            };
        };
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
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
            };
        };
    };
    Unarchivedcoupongroup: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                 * @example promo
                 */
                groupingKey: string;
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
                    "application/json": number;
                };
            };
        };
    };
    Getnumberofusagesofasinglecoupon: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Single coupon code.
                 * @example blackfriday10
                 */
                couponCode: string;
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
                    "application/json": number;
                };
            };
        };
    };
    Getnumberofusagesofacouponbatch: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /**
                 * @description Coupon grouping key, which is the prefix for the coupon batch's generated codes.
                 * @example rewardsprogram
                 */
                groupingKey: string;
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
                    "application/json": number;
                };
            };
        };
    };
}
