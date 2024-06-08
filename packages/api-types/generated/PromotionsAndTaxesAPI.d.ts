export interface paths {
    "/api/rnb/pvt/multiple-coupons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create multiple coupons
         * @description Creates multiple coupons with different coupon codes. This endpoint has a throttling of 60 requests per minute.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateMultipleCoupons"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/coupon": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all coupons
         * @description Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.
         *
         *      Retrieves all coupons from an account.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getall"];
        put?: never;
        /**
         * Create or update coupon
         * @description Creates a new single coupon or updates an existing coupon.
         *
         *     To update an existing coupon, first make a [Get coupon by coupon code](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#get-/api/rnb/pvt/coupon/-couponCode-) request, copy the response body and apply the desired changes. Then, use the complete edited body as a request body in this update call.
         *
         *     >⚠️ When updating a coupon, don't change the original `couponCode`, or a new coupon will be created instead of the existing coupon being updated.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateOrUpdateCoupon"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/coupon/{couponCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get coupon by coupon code
         * @description Retrieves a specific coupon by its coupon code.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getbycouponcode"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/archive/coupon/{couponCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get archived coupon by coupon code
         * @description Retrieves a specific archived coupon by its coupon code.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getarchivedbycouponcode"];
        put?: never;
        /**
         * Archive coupon by coupon code
         * @description Archives a specific coupon by its coupon code.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Archivebycouponcode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/coupons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate coupons in bulk
         * @description Generates a massive amount of coupons.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["MassiveGeneration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/coupon/usage/{couponCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get coupon usage
         * @description Retrieves information about the coupon usage.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getusage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/unarchive/coupon/{couponCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unarchive coupon by coupon code
         * @description Unarchives a specifc coupon by its coupon code.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Unarchivebycouponcode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/benefits/calculatorconfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all promotions
         * @description Retrieves all promotions from an account.
         *
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.
         *
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetAllBenefits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/benefits/calculatorconfiguration/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search promotion by name
         * @description Retrieves all promotions whose name contains the searched term.
         *
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.
         *
         *
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SearchPromotion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/taxes/calculatorconfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all taxes
         * @description Retrieves all taxes from an account.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetAllTaxes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/calculatorconfiguration/{idCalculatorConfiguration}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get promotion or tax by ID
         * @description Retrieves a specific promotion by its Promotion ID or a specific tax by its tax ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetCalculatorConfigurationById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/calculatorconfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create or Update promotion or tax
         * @description Creates or updates a specific Promotion by its Promotion ID or a specific tax by its tax ID.
         *
         *     >⚠️ You should always include both the `id` and `name` when registering objects in the request body.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateOrUpdateCalculatorConfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/import/calculatorConfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Multiple SKU promotion
         * @description Creates a Multiple SKU promotion. This scenario allows the creation of a single promotion for multiples SKUs with the Percentage Effect.
         *     >⚠️ The limit of SKUs on a Multiple Effects promotion is 400.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateMultipleSkuPromotion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/import/calculatorConfiguration/{promotionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Multiple SKU promotion
         * @description Updates information from a Multiple SKU promotion. This scenario allows the creation of a single promotion for multiple SKUs with the Percentage Effect.
         *     >⚠️ The limit of SKUs on a Multiple Effects promotion is 400.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["UpdateMultipleSkuPromotion"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/archive/calculatorConfiguration/{idCalculatorConfiguration}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive promotion or tax
         * @description Archives a promotion or tax by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["ArchivePromotion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/unarchive/calculatorConfiguration/{idCalculatorConfiguration}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unarchive promotion or tax
         * @description Unarchives a promotion or tax by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["UnarchivePromotion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/archive/benefits/calculatorConfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List archived promotions
         * @description Lists all archived promotions.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetArchivedPromotions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/archive/taxes/calculatorConfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List archived taxes
         * @description Lists all archived taxes.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetArchivedTaxes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/price-sheet/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get price by SKU ID
         * @description Retrieve price given an SKU ID.
         *     > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://developers.vtex.com/docs/api-reference/pricing-api)
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["PricebyskuId"];
        put?: never;
        post?: never;
        /**
         * Delete price by SKU ID
         * @description Delete all prices from an SKU.
         *     > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
         *
         *     > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeletebyskuId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/price-sheet/all/{page}/{pageSize}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all paged prices
         * @description Get all paged prices.
         *     > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
         *
         *     > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getallpaged"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/price-sheet/context": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get price by context
         * @description Get price by context.
         *     > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
         *
         *     > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Pricebycontext"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/price-sheet/{skuId}/{tradePolicy}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get price by SKU ID and trade policy
         * @description Retrieve price by SKU ID and trade policy.
         *     > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
         *
         *     > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["PricebyskuIdandtradePolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/price-sheet": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Save price
         * @description Save price.
         *     > If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT)
         *
         *     > If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Promotions | **Manage benefits and rates** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Saveprice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pub/bundles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Calculate discounts and taxes (Bundles)
         * @description Calculate discounts and taxes
         */
        post: operations["Calculatediscountsandtaxes(Bundles)"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/campaignConfiguration/{campaignId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get campaign audience configuration
         * @description Retrieves a specific campaign audience configuration by its ID. This API uses the campaign ID, not the campaign name.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getcampaignconfiguration"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pvt/campaignConfiguration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all campaign audiences
         * @description Retrieves a list of all campaign audiences and their respective configurations.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getcampaignaudiences"];
        put?: never;
        /**
         * Create campaign audience
         * @description Creates a new campaign audience.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Setcampaignconfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/rnb/pub/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Usage notification
         * @description Usage notification.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Rates and Benefits | Manage benefits and rates | **GerenciarPromocoesETarifas** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Usagenotification"];
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
        GetPromotions: unknown;
        /** @description Array with taxes. */
        GetTaxes: {
            /** @description Tax ID. */
            idCalculatorConfiguration?: string;
            /** @description Date and time when the tax was last modified (UTC). */
            lastModifiedUtc?: string;
            /** @description Tax name. */
            name?: string;
            /** @description Tax start date (UTC). */
            beginDate?: string;
            /** @description Tax end date (UTC). */
            endDate?: string;
            /** @description If set as `true` the tax is activated. If set as `false` the tax is deactivated. */
            isActive?: boolean;
            /** @description Tax internal description. */
            description?: string;
            /** @description Defines the type of tax. */
            type?: string;
            /** @description utmSource code. */
            utmSource?: string;
            /** @description utmCampaign code. */
            utmCampain?: string;
            /** @description utmiCampaign code. */
            utmiCampaign?: string;
            /** @description Status of the tax. */
            status?: string;
            /** @description Percentual tax applied. */
            percentualTax?: number;
            /** @description If set as `true` the tax is archived. If set as `false` the tax is not archived. */
            isArchived?: boolean;
            /** @description Defines if there is a maximum price per item. */
            hasMaxPricePerItem?: boolean;
            /** @description Defines if it is a tax. */
            isTax?: boolean;
            /** @description Campaign Audiences that activate this promotion. */
            campaigns?: string[];
            /** @description If set as `true`, it activates gifts Multiplier. */
            activateGiftsMultiplier?: boolean;
            /** @description Scope of the tax. */
            scope?: {
                /** @description Determines if the tax applies to all products in the Catalog (`true`) or not (`false`). */
                allCatalog?: boolean;
                /** @description Quantity of SKUs which activate or deactivate the tax. */
                skus?: number;
                /** @description If set to `true`, this tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this tax not to be applied. */
                skusAreInclusive?: boolean;
                /** @description Quantity of products which activate or deactivate the tax. */
                products?: number;
                /** @description If set to `true`, this tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this tax not to be applied. */
                productsAreInclusive?: boolean;
                /** @description Quantity of collections which activate or deactivate the tax. */
                collections?: number;
                /** @description If set to `true`, this tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this tax not to be applied. */
                collectionsAreInclusive?: boolean;
                /** @description Quantity of categories which activate or deactivate the tax. */
                categories?: number;
                /** @description If set to `true`, this tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this tax not to be applied. */
                categoriesAreInclusive?: boolean;
                /** @description Quantity of brands which activate or deactivate the tax. */
                brands?: number;
                /** @description If set to `true`, this tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this tax not to be applied. */
                brandsAreInclusive?: boolean;
                /** @description Quantity of sellers which activate or deactivate the tax. */
                sellers?: number;
                /** @description If set to `true`, this tax will be applied to any seller present on the `sellers` field. If set to `false`, sellers present on that field will make this tax not to be applied. */
                sellersAreInclusive?: boolean;
            };
            /** @description Defines how many times the tax can be used. */
            maxUsage?: number;
            /** @description List of Trade Policies that activate this tax. */
            idsSalesChannel?: string[];
            /** @description If set to `false`, this tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this tax not to be applied. */
            areSalesChannelIdsExclusive?: boolean;
        }[];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    CreateMultipleCoupons: {
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
                /** @example [
                 *       {
                 *         "quantity": 1,
                 *         "couponConfiguration": {
                 *           "utmSource": "fb",
                 *           "utmCampaign": "bf",
                 *           "couponCode": "promobf4",
                 *           "isArchived": false,
                 *           "maxItemsPerClient": 10,
                 *           "expirationIntervalPerUse": "00:00:00",
                 *           "maxUsage": 1
                 *         }
                 *       }
                 *     ] */
                "application/json": {
                    /**
                     * @description Quantity of coupons created. The value must be a minimum of `1` and at maximum `1000`. If the amount is `1`, the coupon code will be the value of the `couponCode` parameter. If the value is greater than `1`, the coupon code will receive a random suffix.
                     * @example 1
                     */
                    quantity: number;
                    /** @description Object that contains all coupon configuration. */
                    couponConfiguration: {
                        /**
                         * @description utmSource code.
                         * @example coupon3
                         */
                        utmSource: string;
                        /**
                         * @description utmCampaign code.
                         * @example xfbf1
                         */
                        utmCampaign: string;
                        /**
                         * @description Coupon code.
                         * @example test
                         */
                        couponCode: string;
                        /**
                         * @description Defines if the coupon is archived (`true`) or not (`false`).
                         * @example false
                         */
                        isArchived?: boolean;
                        /**
                         * @description Maximum items per client that the coupon can be applied.
                         * @example 10
                         */
                        maxItemsPerClient: number;
                        /**
                         * @description Coupon expiration interval per use.
                         * @example 00:00:00
                         */
                        expirationIntervalPerUse: string;
                        /**
                         * @description Amount of times the coupon can be used.
                         * @example 1
                         */
                        maxUsage?: number;
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
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    Getall: {
        parameters: {
            query?: never;
            header: {
                /** @description Indicate the media type of the resource. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
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
                        /** @description Date and time of the last update of the coupon in UTC format. */
                        lastModifiedUtc?: string;
                        /** @description UTM source code. */
                        utmSource?: string;
                        /** @description UTM campaign code. */
                        utmCampaign?: string;
                        /** @description Coupon code. */
                        couponCode?: string;
                        /** @description Defines if the coupon is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Maximum items per client that the coupon can be applied. */
                        maxItemsPerClient?: number;
                        /** @description Coupon expiration interval per use. */
                        expirationIntervalPerUse?: string;
                        /** @description Amount of times the coupon can be used. */
                        maxUsage?: number;
                        /** @description If the coupon was created as a [multiple coupon](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api/#post-/api/rnb/pvt/multiple-coupons) or using [Generate coupons in bulk](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api/#post-/api/rnb/pvt/coupons), this field returns the original `couponCode` informed. */
                        groupingKey?: string;
                    }[];
                };
            };
        };
    };
    CreateOrUpdateCoupon: {
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
                "application/json": {
                    /**
                     * @description UTM source code.
                     * @example email
                     */
                    utmSource: string;
                    /**
                     * @description UTM campaign code.
                     * @example summer
                     */
                    utmCampaign?: string;
                    /**
                     * @description Coupon code.
                     * @example summersale10
                     */
                    couponCode: string;
                    /**
                     * @description Defines if the coupon is archived (`true`) or not (`false`).
                     * @example false
                     */
                    isArchived?: boolean;
                    /**
                     * @description Maximum items per client that the coupon can be applied.
                     * @example 10
                     */
                    maxItemsPerClient: number;
                    /**
                     * @description Coupon expiration interval per use.
                     * @example 00:00:00
                     */
                    expirationIntervalPerUse: string;
                    /**
                     * @description Amount of times the coupon can be used.
                     * @example 1
                     */
                    maxUsage?: number;
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
                        /** @description Date and time of the last update of the coupon in UTC format. */
                        lastModifiedUtc?: string;
                        /** @description UTM source code. */
                        utmSource?: string;
                        /** @description UTM campaign code. */
                        utmCampaign?: string;
                        /** @description Coupon code. */
                        couponCode?: string;
                        /** @description Defines if the coupon is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Maximum items per client that the coupon can be applied. */
                        maxItemsPerClient?: number;
                        /** @description Coupon expiration interval per use. */
                        expirationIntervalPerUse?: string;
                        /** @description Amount of times the coupon can be used. */
                        maxUsage?: number;
                    };
                };
            };
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Date and time of the last update of the coupon in UTC format. */
                        lastModifiedUtc?: string;
                        /** @description UTM source code. */
                        utmSource?: string;
                        /** @description UTM campaign code. */
                        utmCampaign?: string;
                        /** @description Coupon code. */
                        couponCode?: string;
                        /** @description Defines if the coupon is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Maximum items per client that the coupon can be applied. */
                        maxItemsPerClient?: number;
                        /** @description Coupon expiration interval per use. */
                        expirationIntervalPerUse?: string;
                        /** @description Amount of times the coupon can be used. */
                        maxUsage?: number;
                    };
                };
            };
        };
    };
    Getbycouponcode: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Coupon Code */
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
                    "application/json": {
                        /** @description Date and time of the last update of the coupon in UTC format. */
                        lastModifiedUtc?: string;
                        /** @description UTM source code. */
                        utmSource?: string;
                        /** @description UTM campaign code. */
                        utmCampaign?: string;
                        /** @description Coupon code. */
                        couponCode?: string;
                        /** @description Defines if the coupon is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Maximum items per client that the coupon can be applied. */
                        maxItemsPerClient?: number;
                        /** @description Coupon expiration interval per use. */
                        expirationIntervalPerUse?: string;
                        /** @description Amount of times the coupon can be used. */
                        maxUsage?: number;
                        /** @description If the coupon was created as a [multiple coupon](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api/#post-/api/rnb/pvt/multiple-coupons) or using [Generate coupons in bulk](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api/#post-/api/rnb/pvt/coupons), this field returns the original `couponCode` informed. */
                        groupingKey?: string;
                    };
                };
            };
        };
    };
    Getarchivedbycouponcode: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Coupon Code */
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
                    "application/json": {
                        /** @description Date and time of the last update of the coupon in UTC format. */
                        lastModifiedUtc?: string;
                        /** @description UTM source code. */
                        utmSource?: string;
                        /** @description UTM campaign code. */
                        utmCampaign?: string;
                        /** @description Coupon code. */
                        couponCode?: string;
                        /** @description Defines if the coupon is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Maximum items per client that the coupon can be applied. */
                        maxItemsPerClient?: number;
                        /** @description Coupon expiration interval per use. */
                        expirationIntervalPerUse?: string;
                        /** @description Amount of times the coupon can be used. */
                        maxUsage?: number;
                        /** @description If the coupon was created as a [multiple coupon](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api/#post-/api/rnb/pvt/multiple-coupons) or using [Generate coupons in bulk](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api/#post-/api/rnb/pvt/coupons), this field returns the original `couponCode` informed. */
                        groupingKey?: string;
                    };
                };
            };
        };
    };
    Archivebycouponcode: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Coupon Code */
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
                    "application/json": string;
                };
            };
        };
    };
    MassiveGeneration: {
        parameters: {
            query: {
                /** @description Quantity of coupons to generate */
                quantity: number;
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
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description UTM source code.
                     * @example cupom3
                     */
                    utmSource: string;
                    /**
                     * @description UTM campaign code.
                     * @example cupom3
                     */
                    utmCampaign: string;
                    /**
                     * @description Coupon code.
                     * @example ctest
                     */
                    couponCode: string;
                    /**
                     * @description Defines if the coupon is archived (`true`) or not (`false`).
                     * @example 1
                     */
                    maxItemsPerClient: number;
                    /**
                     * @description Coupon expiration interval per use.
                     * @example 00:00:00
                     */
                    expirationIntervalPerUse: string;
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
        };
    };
    Getusage: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Coupon Code */
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
                    "application/json": {
                        /** @description Name of the store. */
                        hostName?: string;
                        /** @description Coupon code. */
                        couponCode?: string;
                        /** @description Object with information where and when the coupon was used. */
                        profileUsages?: {
                            /** @description Profile ID. */
                            profileId?: {
                                /** @description Array with all the orders that the coupon was used. */
                                orderUsage?: {
                                    /** @description Order ID. */
                                    orderId?: string;
                                    /** @description Date and time when the coupon was used in the order in UTC format. */
                                    usageDateUtc?: string;
                                }[];
                            };
                        };
                    };
                };
            };
        };
    };
    Unarchivebycouponcode: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Coupon Code */
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
                    "application/json": string;
                };
            };
        };
    };
    GetAllBenefits: {
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
                    "application/json": {
                        /** @description Limit configuration max price. */
                        limitConfigurationMaxPrice?: {
                            /** @description Actives count. */
                            activesCount?: number;
                            /** @description Limit. */
                            limit?: number;
                        };
                        /** @description Limit configuration. */
                        limitConfiguration?: {
                            /** @description Actives count. */
                            activesCount?: number;
                            /** @description Limit. */
                            limit?: number;
                        };
                        items?: components["schemas"]["GetPromotions"];
                        /** @description Disabled items. */
                        disabledItems?: string[];
                        /** @description Archived items. */
                        archivedItems?: string[];
                        /** @description Controls the behavior of the `NominalDiscount` effect. This field only accepts two string values:
                         *
                         *      -`item`: applies the intended nominal discount on every item present on the cart.
                         *
                         *      -`cart`: keeps the behavior as it currently is: the whole order/cart receives a nominal discount that is distributed among the items. */
                        nominalDiscountType?: string;
                    };
                };
            };
        };
    };
    SearchPromotion: {
        parameters: {
            query: {
                /** @description Search term used to find a promotion by name. */
                byName: string;
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
                    "application/json": {
                        /** @description Promotion ID. */
                        idCalculatorConfiguration?: string;
                        /** @description Promotion Name. */
                        name?: string;
                        /** @description Promotion internal description. */
                        description?: string;
                        /** @description Promotion Begin Date (UTC). */
                        beginDateUtc?: string;
                        /** @description Promotion End Date (UTC). */
                        endDateUtc?: string;
                        /** @description When the Promotion was last modified. */
                        lastModified?: string;
                        /** @description Number of days that are considered to add the purchase history. */
                        daysAgoOfPurchases?: number;
                        /** @description If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated. */
                        isActive?: boolean;
                        /** @description If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived. */
                        isArchived?: boolean;
                        /** @description Insert a flag with the promotion name used in the product's window display and page. */
                        isFeatured?: boolean;
                        /**
                         * @deprecated
                         * @description Indicates whether a deal is disabled (`true`) or not (`false`).
                         */
                        disableDeal?: boolean;
                        /** @description Defines which days of the week the promotion will applied. */
                        activeDaysOfWeek?: string[];
                        /** @description Time offset from UTC in seconds. */
                        offset?: number;
                        /** @description If set as `true`, it activates gifts Multiplier. */
                        activateGiftsMultiplier?: boolean;
                        /** @description New time offset from UTC in seconds. */
                        newOffset?: number;
                        /**
                         * @deprecated
                         * @description List of prices per items.
                         */
                        maxPricesPerItems?: string[];
                        /** @description Defines if a promotion can accumulate with another one. (`true`) or not (`false`). */
                        cumulative?: boolean;
                        /** @description The type of effect that will apply to the promotion. */
                        effectType?: string;
                        /** @description The type of discount that will apply to the promotion. */
                        discountType?: string;
                        /** @description Exact discount to be applied for the shipping value. */
                        nominalShippingDiscountValue?: number;
                        /** @description Maximum value for the shipping. */
                        absoluteShippingDiscountValue?: number;
                        /** @description Exact discount to be applied for the total purchase value. */
                        nominalDiscountValue?: number;
                        /** @description Controls the behavior of the `NominalDiscount` effect. This field only accepts two string values:
                         *     -`item`: applies the intended nominal discount on every item present on the cart.
                         *     -`cart`: keeps the behavior as it currently is: the whole order/cart receives a nominal discount that is distributed among the items. */
                        nominalDiscountType?: string;
                        /** @description The maximum price for each item of the purchase will be the price set up. */
                        maximumUnitPriceDiscount?: number;
                        /** @description Percentage discount to be applied for total purchase value. */
                        percentualDiscountValue?: number;
                        /** @description Percentual Shipping Discount Value. */
                        rebatePercentualDiscountValue?: number;
                        /** @description Percentage discount to be applied for shipping value. */
                        percentualShippingDiscountValue?: number;
                        /** @description Percentual tax over purchase total value. */
                        percentualTax?: number;
                        /** @description Shipping Percentual tax over purchase total value. */
                        shippingPercentualTax?: number;
                        /** @description Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions. */
                        percentualDiscountValueList1?: number;
                        /** @description Equivalent to `percentualDiscountValueList1`. */
                        percentualDiscountValueList2?: number;
                        /** @description SKU Gift Object. Total discount on the product value set as a gift. */
                        skusGift?: {
                            /** @description Quantity of SKU Gifts. */
                            quantitySelectable?: number;
                            /** @description Array with SKU Gifts IDs. */
                            gifts?: number;
                        };
                        /** @description Nominal value for rewards program. */
                        nominalRewardValue?: number;
                        /** @description Percentage value for rewards program. */
                        percentualRewardValue?: number;
                        /** @description Order status reward value. */
                        orderStatusRewardValue?: string;
                        /** @description The maximum number of affected items for a promotion. */
                        maxNumberOfAffectedItems?: number;
                        /** @description The maximum number of affected items by group key for a promotion. */
                        maxNumberOfAffectedItemsGroupKey?: string;
                        /** @description Promotion will be applied to all kind of shipping. */
                        applyToAllShippings?: boolean;
                        /** @description Nominal tax. */
                        nominalTax?: number;
                        /** @description Origin of the promotion, `marketplace` or `Fulfillment`. Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information. */
                        origin?: string;
                        /** @description Seller Name. */
                        idSeller?: string;
                        /** @description If set to `true`, this promotion will be applied to any seller present on the idSeller field. If set to `false`, sellers present on that field will make this promotion not to be applied. */
                        idSellerIsInclusive?: boolean;
                        /** @description List of Trade Policies that activate this promotion. */
                        idsSalesChannel?: string[];
                        /** @description If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied. */
                        areSalesChannelIdsExclusive?: boolean;
                        /** @description Promotion Marketing tags. */
                        marketingTags?: string[];
                        /** @description If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied. */
                        marketingTagsAreNotInclusive?: boolean;
                        /** @description Array composed by all the Payments Methods. */
                        paymentsMethods?: {
                            /** @description Payment Method ID. */
                            id?: string;
                            /** @description Payment Method Name. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of stores.
                         */
                        stores?: string[];
                        /** @description Campaign Audiences that activate this promotion. */
                        campaigns?: string[];
                        /** @description Array with conditions IDs. */
                        conditionsIds?: string[];
                        /**
                         * @deprecated
                         * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                         */
                        storesAreInclusive?: boolean;
                        /** @description Object composed by the categories that will activate or deactivate the promotion. */
                        categories?: {
                            /** @description Category ID. */
                            id?: string;
                            /** @description Category Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied. */
                        categoriesAreInclusive?: boolean;
                        /** @description Object composed by the brands that will activate or deactivate the promotion. */
                        brands?: {
                            /** @description Brand ID. */
                            id?: string;
                            /** @description Brand Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied. */
                        brandsAreInclusive?: boolean;
                        /** @description Object composed by the products that will activate or deactivate the promotion. */
                        products?: {
                            /** @description Product ID. */
                            id?: string;
                            /** @description Product Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied. */
                        productsAreInclusive?: boolean;
                        /** @description Object composed by the SKUs that will activate or deactivate the promotion. */
                        skus?: {
                            /** @description SKU ID. */
                            id?: string;
                            /** @description SKU Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied. */
                        skusAreInclusive?: boolean;
                        /** @description Coupon utmSource code. */
                        utmSource?: string;
                        /** @description Coupon utmCampaign code. */
                        utmCampaign?: string;
                        /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**. */
                        collections1BuyTogether?: {
                            /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount** or **Buy One Get One**.
                         */
                        collections2BuyTogether?: {
                            /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /** @description Minimum quantity for **Buy Together** promotion. */
                        minimumQuantityBuyTogether?: number;
                        /** @description Quantity to affect **Buy Together** promotion. */
                        quantityToAffectBuyTogether?: number;
                        /** @description Enable **Buy Together** per SKU. */
                        enableBuyTogetherPerSku?: boolean;
                        /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku1BuyTogether?: {
                            /** @description ID of the SKU to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the SKU to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku2BuyTogether?: {
                            /** @description ID of the SKU to be added to the second list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the SKU to be added to the second list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of coupons.
                         */
                        coupon?: string[];
                        /** @description Minimum chart value to activate the promotion. */
                        totalValueFloor?: number;
                        /** @description Maximum chart value to activate the promotion. */
                        totalValueCeling?: number;
                        /**
                         * @deprecated
                         * @description Total value including all items.
                         */
                        totalValueIncludeAllItems?: boolean;
                        /** @description If products that already are receiving a promotion, will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`. */
                        totalValueMode?: string;
                        /** @description Array composed by the collections that will be activated or deactivated the promotion. */
                        collections?: {
                            /** @description Collection ID. */
                            id?: string;
                            /** @description Collection Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied. */
                        collectionsIsInclusive?: boolean;
                        /** @description The discount will be granted if the card's BIN is given. */
                        restrictionsBins?: string[];
                        /**
                         * @deprecated
                         * @description List of card issuers.
                         */
                        cardIssuers?: string[];
                        /** @description Total value a client must have in past orders to active the promotion. */
                        totalValuePurchase?: number;
                        /** @description The discount will be granted if the shipping method is the same as the one given. */
                        slasIds?: string[];
                        /** @description Applies selected discount only when one of the defined shipping method is selected by the customer. */
                        isSlaSelected?: boolean;
                        /** @description Applies the discount only if it's a first buy. */
                        isFirstBuy?: boolean;
                        /** @description Applies the discount even if the user is not logged. */
                        firstBuyIsProfileOptimistic?: boolean;
                        /** @description If the **List Price** and **Price** are the same. */
                        compareListPriceAndPrice?: boolean;
                        /** @description Applies the promotion only if the list price and price is different. */
                        isDifferentListPriceAndPrice?: boolean;
                        /** @description Range of the zip code that applies the promotion. */
                        zipCodeRanges?: {
                            /** @description Initial Zip Code. */
                            zipCodeFrom?: string;
                            /** @description Final Zip Code. */
                            zipCodeTo?: string;
                            /** @description Defines if the zip code range is included in the promotion. */
                            inclusive?: boolean;
                        }[];
                        /** @description Maximum price of the item. */
                        itemMaxPrice?: number;
                        /** @description Minimum price of the item. */
                        itemMinPrice?: number;
                        /**
                         * @deprecated
                         * @description Installment.
                         */
                        installment?: number;
                        /** @description Set if the promotion will be applied considering a minimum and maximum values for installments. */
                        isMinMaxInstallments?: boolean;
                        /** @description Minimum value for installment. */
                        minInstallment?: number;
                        /** @description Maximum value for installment. */
                        maxInstallment?: number;
                        /**
                         * @deprecated
                         * @description List of merchants.
                         */
                        merchants?: string[];
                        /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                        clusterExpressions?: string[];
                        /**
                         * @deprecated
                         * @description Cluster operator.
                         */
                        clusterOperator?: string;
                        /**
                         * @deprecated
                         * @description List of payment rules.
                         */
                        paymentsRules?: string[];
                        /** @description Gifts List Type. */
                        giftListTypes?: string[];
                        /**
                         * @deprecated
                         * @description List of product specifications.
                         */
                        productsSpecifications?: string[];
                        /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                        affiliates?: {
                            /** @description Affiliate ID. */
                            id?: string;
                            /** @description Affiliate Name. */
                            name?: string;
                        }[];
                        /** @description Defines how many times the promotion can be used. */
                        maxUsage?: number;
                        /** @description Defines if the promotion can be used multiple times per client. */
                        maxUsagePerClient?: number;
                        /** @description Should distribute discount among matched items. */
                        shouldDistributeDiscountAmongMatchedItems?: boolean;
                        /** @description Defines if the promotion can be used multiple times per client. */
                        multipleUsePerClient?: boolean;
                        /** @description Allows the promotion to apply to products whose prices have been manually added by a call center operator. */
                        accumulateWithManualPrice?: boolean;
                        /** @description Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects). */
                        type?: string;
                        /** @description Use new progressive algorithm. */
                        useNewProgressiveAlgorithm?: boolean;
                        /** @description Percentual discount value list. */
                        percentualDiscountValueList?: number[];
                    }[];
                };
            };
        };
    };
    GetAllTaxes: {
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
                    "application/json": {
                        /** @description Limit configuration. */
                        limitConfiguration?: {
                            /** @description Actives count. */
                            activesCount?: number;
                            /** @description Limit. */
                            limit?: number;
                        };
                        items?: components["schemas"]["GetTaxes"];
                        /** @description Disabled items. */
                        disabledItems?: string[];
                        /** @description Archived items. */
                        archivedItems?: string[];
                    };
                };
            };
        };
    };
    GetCalculatorConfigurationById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Promotion ID or tax ID. */
                idCalculatorConfiguration: string;
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
                        /** @description Promotion ID. */
                        idCalculatorConfiguration?: string;
                        /** @description Promotion Name. */
                        name?: string;
                        /** @description Promotion internal description. */
                        description?: string;
                        /** @description Promotion Begin Date (UTC). */
                        beginDateUtc?: string;
                        /** @description Promotion End Date (UTC). */
                        endDateUtc?: string;
                        /** @description When the Promotion was last modified. */
                        lastModified?: string;
                        /** @description Number of days that are considered to add the purchase history. */
                        daysAgoOfPurchases?: number;
                        /** @description If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated. */
                        isActive?: boolean;
                        /** @description If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived. */
                        isArchived?: boolean;
                        /** @description Insert a flag with the promotion name used in the product's window display and page. */
                        isFeatured?: boolean;
                        /**
                         * @deprecated
                         * @description Indicates whether a deal is disabled (`true`) or not (`false`).
                         */
                        disableDeal?: boolean;
                        /** @description Defines which days of the week the promotion will applied. */
                        activeDaysOfWeek?: string[];
                        /** @description Time offset from UTC in seconds. */
                        offset?: number;
                        /** @description If set as `true`, it activates gifts Multiplier. */
                        activateGiftsMultiplier?: boolean;
                        /** @description New time offset from UTC in seconds. */
                        newOffset?: number;
                        /**
                         * @deprecated
                         * @description List of max price per items.
                         */
                        maxPricesPerItems?: string[];
                        /** @description Defines if a promotion can accumulate with another one. (`true`) or not (`false`). */
                        cumulative?: boolean;
                        /** @description The type of discount that will apply to the promotion. */
                        discountType?: string;
                        /** @description Exact discount to be applied for the shipping value. */
                        nominalShippingDiscountValue?: number;
                        /** @description Maximum value for the shipping. */
                        absoluteShippingDiscountValue?: number;
                        /** @description Exact discount to be applied for the total purchase value. */
                        nominalDiscountValue?: number;
                        /** @description Controls the behavior of the `NominalDiscount` effect. This field only accepts two string values:
                         *
                         *      -`item`: applies the intended nominal discount on every item present on the cart.
                         *
                         *      -`cart`: keeps the behavior as it currently is: the whole order/cart receives a nominal discount that is distributed among the items. */
                        nominalDiscountType?: string;
                        /** @description The maximum price for each item of the purchase will be the price set up. */
                        maximumUnitPriceDiscount?: number;
                        /** @description Percentage discount to be applied for total purchase value. */
                        percentualDiscountValue?: number;
                        /** @description Percentual Shipping Discount Value. */
                        rebatePercentualDiscountValue?: number;
                        /** @description Percentage discount to be applied for shipping value. */
                        percentualShippingDiscountValue?: number;
                        /** @description Percentual tax over purchase total value. */
                        percentualTax?: number;
                        /** @description Shipping Percentual tax over purchase total value. */
                        shippingPercentualTax?: number;
                        /** @description Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions. */
                        percentualDiscountValueList1?: number;
                        /** @description Equivalent to `percentualDiscountValueList1`. */
                        percentualDiscountValueList2?: number;
                        /** @description SKU Gift Object. Total discount on the product value set as a gift. */
                        skusGift?: {
                            /** @description Quantity of SKU Gifts. */
                            quantitySelectable?: number;
                            /** @description Array with SKU Gifts IDs. */
                            gifts?: number;
                        };
                        /** @description Nominal value for rewards program. */
                        nominalRewardValue?: number;
                        /** @description Percentage value for rewards program. */
                        percentualRewardValue?: number;
                        /** @description Order status reward value. */
                        orderStatusRewardValue?: string;
                        /** @description The maximum number of affected items for a promotion. */
                        maxNumberOfAffectedItems?: number;
                        /** @description The maximum number of affected items by group key for a promotion. */
                        maxNumberOfAffectedItemsGroupKey?: string;
                        /** @description Promotion will be applied to all kind of shipping. */
                        applyToAllShippings?: boolean;
                        /** @description Nominal tax. */
                        nominalTax?: number;
                        /** @description Origin of the promotion, `marketplace` or `Fulfillment`. Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information. */
                        origin?: string;
                        /** @description Seller Name. */
                        idSeller?: string;
                        /** @description If set to `true`, this promotion will be applied to any seller present on the idSeller field. If set to `false`, sellers present on that field will make this promotion not to be applied. */
                        idSellerIsInclusive?: boolean;
                        /** @description List of Trade Policies that activate this promotion. */
                        idsSalesChannel?: string[];
                        /** @description If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied. */
                        areSalesChannelIdsExclusive?: boolean;
                        /** @description Promotion Marketing tags. */
                        marketingTags?: string[];
                        /** @description If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied. */
                        marketingTagsAreNotInclusive?: boolean;
                        /** @description Array composed by all the Payments Methods. */
                        paymentsMethods?: {
                            /** @description Payment Method ID. */
                            id?: string;
                            /** @description Payment Method Name. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of stores.
                         */
                        stores?: string[];
                        /** @description Campaign Audiences that activate this promotion. */
                        campaigns?: string[];
                        /** @description Array with conditions IDs. */
                        conditionsIds?: string[];
                        /**
                         * @deprecated
                         * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                         */
                        storesAreInclusive?: boolean;
                        /** @description Object composed by the categories that will activate or deactivate the promotion. */
                        categories?: {
                            /** @description Category ID. */
                            id?: string;
                            /** @description Category Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied. */
                        categoriesAreInclusive?: boolean;
                        /** @description Object composed by the brands that will activate or deactivate the promotion. */
                        brands?: {
                            /** @description Brand ID. */
                            id?: string;
                            /** @description Brand Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied. */
                        brandsAreInclusive?: boolean;
                        /** @description Object composed by the products that will activate or deactivate the promotion. */
                        products?: {
                            /** @description Product ID. */
                            id?: string;
                            /** @description Product Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied. */
                        productsAreInclusive?: boolean;
                        /** @description Object composed by the SKUs that will activate or deactivate the promotion. */
                        skus?: {
                            /** @description SKU ID. */
                            id?: string;
                            /** @description SKU Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied. */
                        skusAreInclusive?: boolean;
                        /** @description Coupon utmSource code. */
                        utmSource?: string;
                        /** @description Coupon utmCampaign code. */
                        utmCampaign?: string;
                        /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**. */
                        collections1BuyTogether?: {
                            /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount** or **Buy One Get One**.
                         */
                        collections2BuyTogether?: {
                            /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /** @description Minimum quantity for **Buy Together** promotion. */
                        minimumQuantityBuyTogether?: number;
                        /** @description Quantity to affect **Buy Together** promotion. */
                        quantityToAffectBuyTogether?: number;
                        /** @description Enable **Buy Together** per SKU. */
                        enableBuyTogetherPerSku?: boolean;
                        /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku1BuyTogether?: {
                            /** @description ID of the SKU to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the SKU to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku2BuyTogether?: {
                            /** @description ID of the SKU to be added to the second list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the SKU to be added to the second list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of coupons.
                         */
                        coupon?: string[];
                        /** @description Minimum chart value to activate the promotion. */
                        totalValueFloor?: number;
                        /** @description Maximum chart value to activate the promotion. */
                        totalValueCeling?: number;
                        /**
                         * @deprecated
                         * @description Total value including all items.
                         */
                        totalValueIncludeAllItems?: boolean;
                        /** @description If products that already are receiving a promotion, will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`. */
                        totalValueMode?: string;
                        /** @description Array composed by the collections that will be activated or deactivated the promotion. */
                        collections?: {
                            /** @description Collection ID. */
                            id?: string;
                            /** @description Collection Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied. */
                        collectionsIsInclusive?: boolean;
                        /** @description The discount will be granted if the card's BIN is given. */
                        restrictionsBins?: string[];
                        /**
                         * @deprecated
                         * @description List of card issuers.
                         */
                        cardIssuers?: string[];
                        /** @description Total value a client must have in past orders to active the promotion. */
                        totalValuePurchase?: number;
                        /** @description The discount will be granted if the shipping method is the same as the one given. */
                        slasIds?: string[];
                        /** @description Applies selected discount only when one of the defined shipping method is selected by the customer. */
                        isSlaSelected?: boolean;
                        /** @description Applies the discount only if it's a first buy. */
                        isFirstBuy?: boolean;
                        /** @description Applies the discount even if the user is not logged. */
                        firstBuyIsProfileOptimistic?: boolean;
                        /** @description If the **List Price** and **Price** are the same. */
                        compareListPriceAndPrice?: boolean;
                        /** @description Applies the promotion only if the list price and price is different. */
                        isDifferentListPriceAndPrice?: boolean;
                        /** @description Range of the zip code that applies the promotion. */
                        zipCodeRanges?: {
                            /** @description Initial Zip Code. */
                            zipCodeFrom?: string;
                            /** @description Final Zip Code. */
                            zipCodeTo?: string;
                            /** @description Defines if the zip code range is included in the promotion. */
                            inclusive?: boolean;
                        }[];
                        /** @description Maximum price of the item. */
                        itemMaxPrice?: number;
                        /** @description Minimum price of the item. */
                        itemMinPrice?: number;
                        /**
                         * @deprecated
                         * @description Installment.
                         */
                        installment?: number;
                        /** @description Set if the promotion will be applied considering a minimum and maximum values for installments. */
                        isMinMaxInstallments?: boolean;
                        /** @description Minimum value for installment. */
                        minInstallment?: number;
                        /** @description Maximum value for installment. */
                        maxInstallment?: number;
                        /**
                         * @deprecated
                         * @description List of merchants.
                         */
                        merchants?: string[];
                        /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                        clusterExpressions?: string[];
                        /** @description Object composed by a list of SKUs on a Multiple Effects promotion. Structure: `"{SkuId}": {PercentageDiscount}`. There is a limit of 400 SKUs for this type of promotion. */
                        multipleSkusCause?: {
                            [key: string]: string | undefined;
                        };
                        /**
                         * @deprecated
                         * @description List of payment rules.
                         */
                        paymentsRules?: string[];
                        /** @description Gifts List Type. */
                        giftListTypes?: string[];
                        /**
                         * @deprecated
                         * @description List of product specifications.
                         */
                        productsSpecifications?: string[];
                        /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                        affiliates?: {
                            /** @description Affiliate ID. */
                            id?: string;
                            /** @description Affiliate Name. */
                            name?: string;
                        }[];
                        /** @description Defines how many times the promotion can be used. */
                        maxUsage?: number;
                        /** @description Defines if the promotion can be used multiple times per client. */
                        maxUsagePerClient?: number;
                        /** @description Should distribute discount among matched items. */
                        shouldDistributeDiscountAmongMatchedItems?: boolean;
                        /** @description Defines if the promotion can be used multiple times per client. */
                        multipleUsePerClient?: boolean;
                        /** @description Allows the promotion to apply to products whose prices have been manually added by a call center operator. */
                        accumulateWithManualPrice?: boolean;
                        /** @description Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects). */
                        type?: string;
                        /** @description Use new progressive algorithm. */
                        useNewProgressiveAlgorithm?: boolean;
                        /** @description Percentual discount value list. */
                        percentualDiscountValueList?: number[];
                    };
                };
            };
        };
    };
    CreateOrUpdateCalculatorConfiguration: {
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
        requestBody: {
            content: {
                /** @example {
                 *       "idCalculatorConfiguration": "d8a1cd2e-b667-4054-b3ae-b79124c7218e",
                 *       "name": "Promotion Social Seller",
                 *       "description": "Promotion for Social Seller",
                 *       "beginDateUtc": "2020-05-01T18:47:15.89Z",
                 *       "lastModified": "2021-09-17T18:13:16.2896414Z",
                 *       "daysAgoOfPurchases": 0,
                 *       "isActive": true,
                 *       "isArchived": false,
                 *       "isFeatured": false,
                 *       "disableDeal": false,
                 *       "activeDaysOfWeek": [],
                 *       "offset": -3,
                 *       "activateGiftsMultiplier": false,
                 *       "newOffset": -3,
                 *       "maxPricesPerItems": [],
                 *       "cumulative": false,
                 *       "discountType": "percentual",
                 *       "nominalShippingDiscountValue": 0,
                 *       "absoluteShippingDiscountValue": 0,
                 *       "nominalDiscountValue": 10,
                 *       "nominalDiscountType": "item",
                 *       "maximumUnitPriceDiscount": 0,
                 *       "percentualDiscountValue": 10,
                 *       "rebatePercentualDiscountValue": 0,
                 *       "percentualShippingDiscountValue": 0,
                 *       "percentualTax": 0,
                 *       "shippingPercentualTax": 0,
                 *       "percentualDiscountValueList1": 0,
                 *       "percentualDiscountValueList2": 0,
                 *       "skusGift": {
                 *         "quantitySelectable": 0
                 *       },
                 *       "nominalRewardValue": 0,
                 *       "percentualRewardValue": 0,
                 *       "orderStatusRewardValue": "invoiced",
                 *       "maxNumberOfAffectedItems": 0,
                 *       "maxNumberOfAffectedItemsGroupKey": "perCart",
                 *       "applyToAllShippings": false,
                 *       "nominalTax": 0,
                 *       "origin": "marketplace",
                 *       "idSellerIsInclusive": false,
                 *       "idsSalesChannel": [],
                 *       "areSalesChannelIdsExclusive": false,
                 *       "marketingTags": [],
                 *       "marketingTagsAreNotInclusive": false,
                 *       "paymentsMethods": [],
                 *       "stores": [],
                 *       "campaigns": [],
                 *       "conditionsIds": [
                 *         "372e1868-2c0e-4437-be45-1ef8c9cab735"
                 *       ],
                 *       "storesAreInclusive": false,
                 *       "categories": [],
                 *       "categoriesAreInclusive": false,
                 *       "brands": [],
                 *       "brandsAreInclusive": false,
                 *       "products": [],
                 *       "productsAreInclusive": false,
                 *       "skus": [],
                 *       "skusAreInclusive": true,
                 *       "utmSource": "georgeSource",
                 *       "utmCampaign": "georgeTest",
                 *       "collections1BuyTogether": [],
                 *       "collections2BuyTogether": [],
                 *       "minimumQuantityBuyTogether": 0,
                 *       "quantityToAffectBuyTogether": 0,
                 *       "enableBuyTogetherPerSku": false,
                 *       "listSku1BuyTogether": [],
                 *       "listSku2BuyTogether": [],
                 *       "coupon": [],
                 *       "totalValueFloor": 0,
                 *       "totalValueCeling": 0,
                 *       "totalValueIncludeAllItems": false,
                 *       "totalValueMode": "IncludeMatchedItems",
                 *       "collections": [],
                 *       "collectionsIsInclusive": false,
                 *       "restrictionsBins": [],
                 *       "cardIssuers": [],
                 *       "totalValuePurchase": 0,
                 *       "slasIds": [],
                 *       "isSlaSelected": false,
                 *       "isFirstBuy": false,
                 *       "firstBuyIsProfileOptimistic": false,
                 *       "compareListPriceAndPrice": false,
                 *       "isDifferentListPriceAndPrice": false,
                 *       "zipCodeRanges": [
                 *         {
                 *           "zipCodeFrom": "20000-000",
                 *           "zipCodeTo": "20000-100",
                 *           "inclusive": true
                 *         }
                 *       ],
                 *       "itemMaxPrice": 0,
                 *       "itemMinPrice": 0,
                 *       "installment": 0,
                 *       "isMinMaxInstallments": false,
                 *       "minInstallment": 0,
                 *       "maxInstallment": 0,
                 *       "merchants": [],
                 *       "clusterExpressions": [],
                 *       "paymentsRules": [],
                 *       "giftListTypes": [],
                 *       "productsSpecifications": [],
                 *       "affiliates": [],
                 *       "maxUsage": 0,
                 *       "maxUsagePerClient": 0,
                 *       "shouldDistributeDiscountAmongMatchedItems": false,
                 *       "multipleUsePerClient": false,
                 *       "accumulateWithManualPrice": false,
                 *       "type": "regular",
                 *       "useNewProgressiveAlgorithm": false,
                 *       "percentualDiscountValueList": []
                 *     } */
                "application/json": {
                    /**
                     * @description Promotion ID or tax ID.
                     * @example ba087fa9-8587-44b3-8ef1-ade8d053e9e9
                     */
                    idCalculatorConfiguration?: string;
                    /**
                     * @description Promotion name or tax name.
                     * @example Promoção Social Seller
                     */
                    name?: string;
                    /**
                     * @description Internal description of the promotion or tax.
                     * @example Description of the promotion.
                     */
                    description?: string;
                    /**
                     * @description Promotion or tax Begin Date (UTC).
                     * @example 2020-05-01T18:47:15.89Z
                     */
                    beginDateUtc?: string;
                    /**
                     * @description Promotion or tax End Date (UTC).
                     * @example 2020-05-01T18:47:15.89Z
                     */
                    endDateUtc?: string;
                    /**
                     * @description Date when the promotion or tax was last modified.
                     * @example 2021-02-23T20:58:38.7963862Z
                     */
                    lastModified?: string;
                    /**
                     * @description Number of days that are considered to add the purchase history.
                     * @example 0
                     */
                    daysAgoOfPurchases?: number;
                    /**
                     * @description If set as `true` the promotion or tax is activated. If set as `false` the promotion or tax is deactivated.
                     * @example true
                     */
                    isActive?: boolean;
                    /**
                     * @description If set as `true` the promotion or tax is archived. If set as `false` the promotion or tax is not archived.
                     * @example false
                     */
                    isArchived?: boolean;
                    /**
                     * @description Insert a flag with the promotion name used in the product's window display and page.
                     * @example true
                     */
                    isFeatured?: boolean;
                    /**
                     * @deprecated
                     * @description Indicates whether a deal is disabled (`true`) or not (`false`).
                     * @example false
                     */
                    disableDeal?: boolean;
                    /** @description Defines which days of the week the promotion or tax will applied. */
                    activeDaysOfWeek?: string[];
                    /**
                     * @description Time offset from UTC in seconds.
                     * @example -3
                     */
                    offset?: number;
                    /**
                     * @description If set as `true`, it activates gifts Multiplier.
                     * @example false
                     */
                    activateGiftsMultiplier?: boolean;
                    /**
                     * @description New time offset from UTC in seconds.
                     * @example -3
                     */
                    newOffset?: number;
                    /**
                     * @deprecated
                     * @description List of max price per items.
                     */
                    maxPricesPerItems?: string[];
                    /**
                     * @description Defines if a promotion or tax can accumulate with another one. (`true`) or not (`false`).
                     * @example false
                     */
                    cumulative?: boolean;
                    /**
                     * @description The type of discount that will apply to the promotion.
                     * @example percentual
                     */
                    discountType?: string;
                    /**
                     * @description Exact discount to be applied for the shipping value.
                     * @example 0
                     */
                    nominalShippingDiscountValue?: number;
                    /**
                     * @description Maximum shipping value.
                     * @example 0
                     */
                    absoluteShippingDiscountValue?: number;
                    /**
                     * @description Exact discount to be applied for the total purchase value.
                     * @example 10
                     */
                    nominalDiscountValue?: number;
                    /**
                     * @description Controls the behavior of the `NominalDiscount` effect. This field only accepts two string values:
                     *
                     *      -`item`: applies the intended nominal discount on every item present on the cart.
                     *
                     *      -`cart`: keeps the behavior as it currently is: the whole order/cart receives a nominal discount that is distributed among the items.
                     * @example item
                     */
                    nominalDiscountType?: string;
                    /**
                     * @description The maximum price for each item of the purchase will be the price set up.
                     * @example 0
                     */
                    maximumUnitPriceDiscount?: number;
                    /**
                     * @description Percentage discount to be applied for total purchase value.
                     * @example 10
                     */
                    percentualDiscountValue?: number;
                    /**
                     * @description Percentual Shipping Discount Value.
                     * @example 0
                     */
                    rebatePercentualDiscountValue?: number;
                    /**
                     * @description Percentage discount to be applied for shipping value.
                     * @example 0
                     */
                    percentualShippingDiscountValue?: number;
                    /**
                     * @description Percentual tax over purchase total value.
                     * @example 0
                     */
                    percentualTax?: number;
                    /**
                     * @description Shipping Percentual tax over purchase total value.
                     * @example 0
                     */
                    shippingPercentualTax?: number;
                    /**
                     * @description Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.
                     * @example 0
                     */
                    percentualDiscountValueList1?: number;
                    /**
                     * @description Equivalent to `percentualDiscountValueList1`.
                     * @example 0
                     */
                    percentualDiscountValueList2?: number;
                    /** @description SKU Gift Object. Total discount on the product value set as a gift. */
                    skusGift?: {
                        /**
                         * @description Quantity of SKU Gifts.
                         * @example 0
                         */
                        quantitySelectable?: number;
                        /** @description Array with SKU Gifts IDs. */
                        gifts?: string[];
                    };
                    /**
                     * @description Nominal value for rewards program.
                     * @example 0
                     */
                    nominalRewardValue?: number;
                    /**
                     * @description Percentage value for rewards program.
                     * @example 0
                     */
                    percentualRewardValue?: number;
                    /**
                     * @description Order status reward value.
                     * @example invoiced
                     */
                    orderStatusRewardValue?: string;
                    /**
                     * @description The maximum number of affected items for a promotion.
                     * @example 0
                     */
                    maxNumberOfAffectedItems?: number;
                    /**
                     * @description The maximum number of affected items by group key for a promotion.
                     * @example perCart
                     */
                    maxNumberOfAffectedItemsGroupKey?: string;
                    /**
                     * @description Promotion or tax will be applied to all kind of shipping.
                     * @example false
                     */
                    applyToAllShippings?: boolean;
                    /**
                     * @description Nominal tax.
                     * @example 0
                     */
                    nominalTax?: number;
                    /**
                     * @description Origin of the promotion or tax, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.
                     * @example marketplace
                     */
                    origin?: string;
                    /**
                     * @description Seller Name.
                     * @example 1
                     */
                    idSeller?: string;
                    /**
                     * @description If set to `true`, this promotion or tax will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this promotion or tax not to be applied.
                     * @example false
                     */
                    idSellerIsInclusive?: boolean;
                    /** @description List of Trade Policies that activate this promotion or tax. */
                    idsSalesChannel?: string[];
                    /**
                     * @description If set to `false`, this promotion or tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion or tax not to be applied.
                     * @example false
                     */
                    areSalesChannelIdsExclusive?: boolean;
                    /** @description Promotion or tax Marketing tags. */
                    marketingTags?: string[];
                    /**
                     * @description If set to `false`, this promotion or tax will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion or tax not to be applied.
                     * @example false
                     */
                    marketingTagsAreNotInclusive?: boolean;
                    /** @description Array composed by all the Payments Methods that activate this promotion or tax. */
                    paymentsMethods?: {
                        /**
                         * @description Payment Method ID.
                         * @example 2
                         */
                        id?: string;
                        /**
                         * @description Payment Method Name.
                         * @example Visa (2)
                         */
                        name?: string;
                    }[];
                    /**
                     * @deprecated
                     * @description List of stores.
                     */
                    stores?: string[];
                    /** @description Campaign Audiences that activate this promotion. */
                    campaigns?: string[];
                    /** @description Array with conditions IDs. */
                    conditionsIds?: string[];
                    /**
                     * @deprecated
                     * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                     * @example false
                     */
                    storesAreInclusive?: boolean;
                    /** @description Object composed by the categories that will activate or deactivate the promotion or tax. */
                    categories?: {
                        /**
                         * @description Category ID.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description Category Name.
                         * @example Vinhos Tintos (1)
                         */
                        name?: string;
                    }[];
                    /**
                     * @description If set to `true`, this promotion or tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion or tax not to be applied.
                     * @example true
                     */
                    categoriesAreInclusive?: boolean;
                    /** @description Object composed by the brands that will activate or deactivate the promotion or tax. */
                    brands?: {
                        /**
                         * @description Brand ID.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description Brand Name.
                         * @example Brand (1)
                         */
                        name?: string;
                    }[];
                    /**
                     * @description If set to `true`, this promotion or tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion or tax not to be applied.
                     * @example true
                     */
                    brandsAreInclusive?: boolean;
                    /** @description Object composed by the products that will activate or deactivate the promotion or tax. */
                    products?: {
                        /**
                         * @description Product ID.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description Product Name.
                         * @example Vinho (1)
                         */
                        name?: string;
                    }[];
                    /**
                     * @description If set to `true`, this promotion or tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion or tax not to be applied.
                     * @example true
                     */
                    productsAreInclusive?: boolean;
                    /** @description Object composed by the SKUs that will activate or deactivate the promotion or tax. */
                    skus?: {
                        /**
                         * @description SKU ID.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description SKU Name.
                         * @example Vinho tinto (1)
                         */
                        name?: string;
                    }[];
                    /**
                     * @description If set to `true`, this promotion or tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion or tax not to be applied.
                     * @example true
                     */
                    skusAreInclusive?: boolean;
                    /**
                     * @description Coupon utmSource code.
                     * @example testSource
                     */
                    utmSource?: string;
                    /**
                     * @description Coupon utmCampaign code.
                     * @example testSource
                     */
                    utmCampaign?: string;
                    /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount** or **Buy One Get One**. */
                    collections1BuyTogether?: {
                        /**
                         * @description ID of the collection to be added to the first list of the **Buy Together** promotion.
                         * @example 157
                         */
                        id?: string;
                        /**
                         * @description Name of the collection to be added to the first list of the **Buy Together** promotion.
                         * @example Inverno (157)
                         */
                        name?: string;
                    }[];
                    /**
                     * @deprecated
                     * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
                     */
                    collections2BuyTogether?: {
                        /**
                         * @description ID of the collection to be added to the first list of the **Buy Together** promotion.
                         * @example 157
                         */
                        id?: string;
                        /**
                         * @description Name of the collection to be added to the first list of the **Buy Together** promotion.
                         * @example Inverno (157)
                         */
                        name?: string;
                    }[];
                    /**
                     * @description Minimum quantity for **Buy Together** promotion.
                     * @example 0
                     */
                    minimumQuantityBuyTogether?: number;
                    /**
                     * @description Quantity to affect **Buy Together** promotion.
                     * @example 0
                     */
                    quantityToAffectBuyTogether?: number;
                    /**
                     * @description Enable **Buy Together** per SKU.
                     * @example false
                     */
                    enableBuyTogetherPerSku?: boolean;
                    /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                    listSku1BuyTogether?: {
                        /**
                         * @description ID of the SKU to be added to the first list of the **Buy Together** promotion.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description Name of the SKU to be added to the first list of the **Buy Together** promotion.
                         * @example White Shirt
                         */
                        name?: string;
                    }[];
                    /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                    listSku2BuyTogether?: {
                        /**
                         * @description ID of the SKU to be added to the second list of the **Buy Together** promotion.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description Name of the SKU to be added to the second list of the **Buy Together** promotion.
                         * @example White Shirt
                         */
                        name?: string;
                    }[];
                    /**
                     * @deprecated
                     * @description List of coupons.
                     */
                    coupon?: string[];
                    /**
                     * @description Minimum chart value to activate the promotion or tax.
                     * @example 0
                     */
                    totalValueFloor?: number;
                    /**
                     * @description Maximum chart value to activate the promotion or tax.
                     * @example 0
                     */
                    totalValueCeling?: number;
                    /**
                     * @deprecated
                     * @description Total vale including all items.
                     * @example false
                     */
                    totalValueIncludeAllItems?: boolean;
                    /**
                     * @description Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.
                     * @example IncludeMatchedItems
                     */
                    totalValueMode?: string;
                    /** @description Object composed by the collections that will activate or deactivate the promotion or tax. */
                    collections?: {
                        /**
                         * @description Collection ID.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description Collection Name.
                         * @example Collection (1)
                         */
                        name?: string;
                    }[];
                    /**
                     * @description If set to `true`, this promotion or tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion or tax not to be applied.
                     * @example false
                     */
                    collectionsIsInclusive?: boolean;
                    /** @description The discount will be granted if the card's BIN is given. */
                    restrictionsBins?: string[];
                    /**
                     * @deprecated
                     * @description List of card issuers.
                     */
                    cardIssuers?: string[];
                    /**
                     * @description Total value a client must have in past orders to activate the promotion or tax.
                     * @example 0
                     */
                    totalValuePurchase?: number;
                    /** @description The discount will be granted if the shipping method is the same as the one given. */
                    slasIds?: string[];
                    /**
                     * @description Applies selected discount only when one of the defined shipping method is selected by the customer.
                     * @example false
                     */
                    isSlaSelected?: boolean;
                    /**
                     * @description Applies the discount only if it's a first buy.
                     * @example false
                     */
                    isFirstBuy?: boolean;
                    /**
                     * @description Applies the discount even if the user is not logged.
                     * @example false
                     */
                    firstBuyIsProfileOptimistic?: boolean;
                    /**
                     * @description If the **List Price** and **Price** are the same.
                     * @example false
                     */
                    compareListPriceAndPrice?: boolean;
                    /**
                     * @description Applies the promotion or tax only if the list price and price is different.
                     * @example false
                     */
                    isDifferentListPriceAndPrice?: boolean;
                    /** @description Range of the zip code that applies the promotion. */
                    zipCodeRanges?: {
                        /**
                         * @description Initial Zip Code.
                         * @example 20000-000
                         */
                        zipCodeFrom?: string;
                        /**
                         * @description Final Zip Code.
                         * @example 20000-100
                         */
                        zipCodeTo?: string;
                        /**
                         * @description Defines if the zip code range is included in the promotion.
                         * @example true
                         */
                        inclusive?: boolean;
                    }[];
                    /**
                     * @description Maximum price of the item.
                     * @example 0
                     */
                    itemMaxPrice?: number;
                    /**
                     * @description Minimum price of the item.
                     * @example 0
                     */
                    itemMinPrice?: number;
                    /**
                     * @deprecated
                     * @description Installment.
                     * @example 1
                     */
                    installment?: number;
                    /**
                     * @description Set if the promotion or tax will be applied considering a minimum and maximum values for installments.
                     * @example false
                     */
                    isMinMaxInstallments?: boolean;
                    /**
                     * @description Minimum value for installment.
                     * @example 0
                     */
                    minInstallment?: number;
                    /**
                     * @description Maximum value for installment.
                     * @example 0
                     */
                    maxInstallment?: number;
                    /**
                     * @deprecated
                     * @description List of merchants.
                     */
                    merchants?: string[];
                    /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                    clusterExpressions?: string[];
                    /**
                     * @deprecated
                     * @description List of payment rules.
                     */
                    paymentsRules?: string[];
                    /** @description Gifts List Type. */
                    giftListTypes?: string[];
                    /**
                     * @deprecated
                     * @description List of product specifications.
                     */
                    productsSpecifications?: string[];
                    /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                    affiliates?: {
                        /**
                         * @description Affiliate ID.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * @description Affiliate Name.
                         * @example Amazon
                         */
                        name?: string;
                    }[];
                    /**
                     * @description Defines how many times the promotion or tax can be used.
                     * @example 0
                     */
                    maxUsage?: number;
                    /**
                     * @description Defines if the promotion can be used multiple times per client.
                     * @example 0
                     */
                    maxUsagePerClient?: number;
                    /**
                     * @description Should distribute discount among matched items.
                     * @example false
                     */
                    shouldDistributeDiscountAmongMatchedItems?: boolean;
                    /**
                     * @description Defines if the promotion can be used multiple times per client.
                     * @example false
                     */
                    multipleUsePerClient?: boolean;
                    /**
                     * @description Allows the promotion to apply to products whose prices have been manually added by a call-center operator.
                     * @example false
                     */
                    accumulateWithManualPrice?: boolean;
                    /**
                     * @description Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).
                     * @example regular
                     */
                    type?: string;
                    /**
                     * @description Use new progressive algorithm.
                     * @example false
                     */
                    useNewProgressiveAlgorithm?: boolean;
                    /** @description Percentual discount value list. */
                    percentualDiscountValueList?: number[];
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
                        /** @description Promotion ID. */
                        idCalculatorConfiguration?: string;
                        /** @description Promotion Name. */
                        name?: string;
                        /** @description Promotion internal description. */
                        description?: string;
                        /** @description Promotion Begin Date (UTC). */
                        beginDateUtc?: string;
                        /** @description Promotion End Date (UTC). */
                        endDateUtc?: string;
                        /** @description When the Promotion was last modified. */
                        lastModified?: string;
                        /** @description Number of days that are considered to add the purchase history. */
                        daysAgoOfPurchases?: number;
                        /** @description If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated. */
                        isActive?: boolean;
                        /** @description If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived. */
                        isArchived?: boolean;
                        /** @description Insert a flag with the promotion name used in the product's window display and page. */
                        isFeatured?: boolean;
                        /**
                         * @deprecated
                         * @description Indicates whether a deal is disabled (`true`) or not (`false`).
                         */
                        disableDeal?: boolean;
                        /** @description Defines which days of the week the promotion will applied. */
                        activeDaysOfWeek?: string[];
                        /** @description Time offset from UTC in seconds. */
                        offset?: number;
                        /** @description If set as `true`, it activates gifts Multiplier. */
                        activateGiftsMultiplier?: boolean;
                        /** @description New time offset from UTC in seconds. */
                        newOffset?: number;
                        /**
                         * @deprecated
                         * @description List of max price per items.
                         */
                        maxPricesPerItems?: string[];
                        /** @description Defines if a promotion can accumulate with another one. (`true`) or not (`false`). */
                        cumulative?: boolean;
                        /** @description The type of discount that will apply to the promotion. */
                        discountType?: string;
                        /** @description Exact discount to be applied for the shipping value. */
                        nominalShippingDiscountValue?: number;
                        /** @description Maximum shipping value. */
                        absoluteShippingDiscountValue?: number;
                        /** @description Exact discount to be applied for the total purchase value. */
                        nominalDiscountValue?: number;
                        /** @description The maximum price for each item of the purchase will be the price set up. */
                        maximumUnitPriceDiscount?: number;
                        /** @description Percentage discount to be applied for total purchase value. */
                        percentualDiscountValue?: number;
                        /** @description Percentual Shipping Discount Value. */
                        rebatePercentualDiscountValue?: number;
                        /** @description Percentage discount to be applied for shipping value. */
                        percentualShippingDiscountValue?: number;
                        /** @description Percentual tax over purchase total value. */
                        percentualTax?: number;
                        /** @description Shipping Percentual tax over purchase total value. */
                        shippingPercentualTax?: number;
                        /** @description Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions. */
                        percentualDiscountValueList1?: number;
                        /** @description Equivalent to `percentualDiscountValueList1`. */
                        percentualDiscountValueList2?: number;
                        /** @description SKU Gift Object. Total discount on the product value set as a gift. */
                        skusGift?: {
                            /** @description Quantity of SKU Gifts. */
                            quantitySelectable?: number;
                            /** @description Array with SKU Gifts IDs. */
                            gifts?: number;
                        };
                        /** @description Nominal value for rewards program. */
                        nominalRewardValue?: number;
                        /** @description Percentage value for rewards program. */
                        percentualRewardValue?: number;
                        /** @description Order status reward value. */
                        orderStatusRewardValue?: string;
                        /** @description The maximum number of affected items for a promotion. */
                        maxNumberOfAffectedItems?: number;
                        /** @description The maximum number of affected items by group key for a promotion. */
                        maxNumberOfAffectedItemsGroupKey?: string;
                        /** @description Promotion will be applied to all kind of shipping. */
                        applyToAllShippings?: boolean;
                        /** @description Nominal tax. */
                        nominalTax?: number;
                        /** @description Origin of the promotion, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information. */
                        origin?: string;
                        /** @description Seller Name. */
                        idSeller?: string;
                        /** @description If set to `true`, this promotion will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this promotion not to be applied. */
                        idSellerIsInclusive?: boolean;
                        /** @description List of Trade Policies that activate this promotion. */
                        idsSalesChannel?: string[];
                        /** @description If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied. */
                        areSalesChannelIdsExclusive?: boolean;
                        /** @description Promotion Marketing tags. */
                        marketingTags?: string[];
                        /** @description If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied. */
                        marketingTagsAreNotInclusive?: boolean;
                        /** @description Array composed by all the Payments Methods. */
                        paymentsMethods?: {
                            /** @description Payment Method ID. */
                            id?: string;
                            /** @description Payment Method Name. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of stores.
                         */
                        stores?: string[];
                        /** @description Campaign Audiences that activate this promotion. */
                        campaigns?: string[];
                        /** @description Array with conditions IDs. */
                        conditionsIds?: string[];
                        /**
                         * @deprecated
                         * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                         */
                        storesAreInclusive?: boolean;
                        /** @description Object composed by the categories that will activate or deactivate the promotion. */
                        categories?: {
                            /** @description Category ID. */
                            id?: string;
                            /** @description Category Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied. */
                        categoriesAreInclusive?: boolean;
                        /** @description Object composed by the brands that will activate or deactivate the promotion. */
                        brands?: {
                            /** @description Brand ID. */
                            id?: string;
                            /** @description Brand Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied. */
                        brandsAreInclusive?: boolean;
                        /** @description Object composed by the products that will activate or deactivate the promotion. */
                        products?: {
                            /** @description Product ID. */
                            id?: string;
                            /** @description Product Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied. */
                        productsAreInclusive?: boolean;
                        /** @description Object composed by the SKUs that will activate or deactivate the promotion. */
                        skus?: {
                            /** @description SKU ID. */
                            id?: string;
                            /** @description SKU Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied. */
                        skusAreInclusive?: boolean;
                        /** @description Coupon utmSource code. */
                        utmSource?: string;
                        /** @description Coupon utmCampaign code. */
                        utmCampaign?: string;
                        /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**. */
                        collections1BuyTogether?: {
                            /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
                         */
                        collections2BuyTogether?: {
                            /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /** @description Minimum quantity for **Buy Together** promotion. */
                        minimumQuantityBuyTogether?: number;
                        /** @description Quantity to affect **Buy Together** promotion. */
                        quantityToAffectBuyTogether?: number;
                        /** @description Enable **Buy Together** per SKU. */
                        enableBuyTogetherPerSku?: boolean;
                        /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku1BuyTogether?: {
                            /** @description ID of the SKU to be added to the first list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the SKU to be added to the first list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku2BuyTogether?: {
                            /** @description ID of the SKU to be added to the second list of the **Buy Together** promotion. */
                            id?: string;
                            /** @description Name of the SKU to be added to the second list of the **Buy Together** promotion. */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of coupons.
                         */
                        coupon?: string[];
                        /** @description Minimum chart value to activate the promotion. */
                        totalValueFloor?: number;
                        /** @description Maximum chart value to activate the promotion. */
                        totalValueCeling?: number;
                        /**
                         * @deprecated
                         * @description Total value including all items.
                         */
                        totalValueIncludeAllItems?: boolean;
                        /** @description Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`. */
                        totalValueMode?: string;
                        /** @description Object composed by the collections that will activate or deactivate the promotion. */
                        collections?: {
                            /** @description Collection ID. */
                            id?: string;
                            /** @description Collection Name. */
                            name?: string;
                        }[];
                        /** @description If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied. */
                        collectionsIsInclusive?: boolean;
                        /** @description The discount will be granted if the card's BIN is given. */
                        restrictionsBins?: string[];
                        /**
                         * @deprecated
                         * @description List of card issuers.
                         */
                        cardIssuers?: string[];
                        /** @description Total value a client must have in past orders to active the promotion. */
                        totalValuePurchase?: number;
                        /** @description The discount will be granted if the shipping method is the same as the one given. */
                        slasIds?: string[];
                        /** @description Applies selected discount only when one of the defined shipping method is selected by the customer. */
                        isSlaSelected?: boolean;
                        /** @description Applies the discount only if it's a first buy. */
                        isFirstBuy?: boolean;
                        /** @description Applies the discount even if the user is not logged. */
                        firstBuyIsProfileOptimistic?: boolean;
                        /** @description If the **List Price** and **Price** are the same. */
                        compareListPriceAndPrice?: boolean;
                        /** @description Applies the promotion only if the list price and price is different. */
                        isDifferentListPriceAndPrice?: boolean;
                        /** @description Range of the zip code that applies the promotion. */
                        zipCodeRanges?: {
                            /** @description Initial Zip Code. */
                            zipCodeFrom?: string;
                            /** @description Final Zip Code. */
                            zipCodeTo?: string;
                            /** @description Defines if the zip code range is included in the promotion. */
                            inclusive?: boolean;
                        }[];
                        /** @description Maximum price of the item. */
                        itemMaxPrice?: number;
                        /** @description Minimum price of the item. */
                        itemMinPrice?: number;
                        /**
                         * @deprecated
                         * @description Installment.
                         */
                        installment?: number;
                        /** @description Set if the promotion will be applied considering a minimum and maximum values for installments. */
                        isMinMaxInstallments?: boolean;
                        /** @description Minimum value for installment. */
                        minInstallment?: number;
                        /** @description Maximum value for installment. */
                        maxInstallment?: number;
                        /**
                         * @deprecated
                         * @description List of merchants.
                         */
                        merchants?: string[];
                        /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                        clusterExpressions?: string[];
                        /**
                         * @deprecated
                         * @description List of payment rules.
                         */
                        paymentsRules?: string[];
                        /** @description Gifts List Type. */
                        giftListTypes?: string[];
                        /**
                         * @deprecated
                         * @description List of product specifications.
                         */
                        productsSpecifications?: string[];
                        /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                        affiliates?: {
                            /** @description Affiliate ID. */
                            id?: string;
                            /** @description Affiliate Name. */
                            name?: string;
                        }[];
                        /** @description Defines how many times the promotion can be used. */
                        maxUsage?: number;
                        /** @description Defines if the promotion can be used multiple times per client. */
                        maxUsagePerClient?: number;
                        /** @description Should distribute discount among matched items. */
                        shouldDistributeDiscountAmongMatchedItems?: boolean;
                        /** @description Defines if the promotion can be used multiple times per client. */
                        multipleUsePerClient?: boolean;
                        /** @description Allows the promotion to apply to products whose prices have been manually added by a call-center operator. */
                        accumulateWithManualPrice?: boolean;
                        /** @description Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects). */
                        type?: string;
                        /** @description Use new progressive algorithm. */
                        useNewProgressiveAlgorithm?: boolean;
                        /** @description Percentual discount value list. */
                        percentualDiscountValueList?: number[];
                    };
                };
            };
            /** @description Bad request. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Object with errors. */
                        errors?: {
                            [key: string]: string[] | undefined;
                        };
                        /** @description Status code. */
                        status?: number;
                        /** @description Error title. */
                        title?: string;
                        /** @description Error detail. */
                        type?: string;
                    };
                };
            };
        };
    };
    CreateMultipleSkuPromotion: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Promotion Name. */
                "X-VTEX-calculator-name": string;
                /** @description Defines if the Promotion is cumulative with other promotions. */
                "X-VTEX-cumulative"?: boolean;
                /** @description This header allows implementing the Promotion in multiples client clusters. You can set the value as `all` - the Promotion will be valid to all the clusters - or `any` - the Promotion will be valid to any of the clusters. */
                "X-VTEX-cluster-operator"?: string;
                /** @description Cluster that will be included in the Promotion. To add multiple clusters, create a header for each one of them. */
                "X-VTEX-cluster-expression"?: string;
                /** @description Promotion start date. */
                "X-VTEX-start-date": string;
                /** @description Promotion end date. */
                "X-VTEX-end-date": string;
                /** @description Condition that will accumulate the Promotion with manual prices or not. */
                "X-VTEX-accumulate-with-manual-prices": boolean;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "text/csv": string;
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
    UpdateMultipleSkuPromotion: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Promotion Name. */
                "X-VTEX-calculator-name": string;
                /** @description Defines if the Promotion is cumulative with other promotions. */
                "X-VTEX-cumulative"?: boolean;
                /** @description This header allows implementing the Promotion in multiples client clusters. You can set the value as `all` - the Promotion will be valid to all the clusters - or `any` - the Promotion will be valid to any of the clusters. */
                "X-VTEX-cluster-operator"?: string;
                /** @description Cluster that will be included in the Promotion. To add multiple clusters, create a header for each one of them. */
                "X-VTEX-cluster-expression"?: string;
                /** @description Promotion start date. */
                "X-VTEX-start-date": string;
                /** @description Promotion end date. */
                "X-VTEX-end-date": string;
                /** @description Condition that will accumulate the Promotion with manual prices or not. */
                "X-VTEX-accumulate-with-manual-prices": boolean;
            };
            path: {
                /** @description Promotion unique identifier. */
                promotionId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "text/csv": string;
            };
        };
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ArchivePromotion: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Promotion ID or tax ID. */
                idCalculatorConfiguration: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UnarchivePromotion: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Promotion ID or tax ID. */
                idCalculatorConfiguration: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetArchivedPromotions: {
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
                    "application/json": {
                        items?: components["schemas"]["GetPromotions"];
                        /** @description Controls the behavior of the `NominalDiscount` effect. This field only accepts two string values:
                         *
                         *      -`item`: applies the intended nominal discount on every item present on the cart.
                         *
                         *      -`cart`: keeps the behavior as it currently is: the whole order/cart receives a nominal discount that is distributed among the items. */
                        nominalDiscountType?: string;
                    };
                };
            };
        };
    };
    GetArchivedTaxes: {
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
                    "application/json": {
                        items?: components["schemas"]["GetTaxes"];
                    };
                };
            };
        };
    };
    PricebyskuId: {
        parameters: {
            query: {
                /** @description VTEX account name. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                skuId: string;
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
                        /** @description Product ID. */
                        id?: number;
                        /** @description Item ID. */
                        itemId?: number;
                        /** @description Sales channel. */
                        salesChannel?: number;
                        /** @description Seller ID. */
                        sellerId?: string;
                        /** @description Item price. */
                        price?: number;
                        /** @description Item list price. */
                        listPrice?: number;
                        /** @description Indicates the date and time when the fixed price will start to be valid. */
                        ValidFrom?: string;
                        /** @description Indicates the date and time from whic the fixed price will no longer be valid. */
                        ValidTo?: string;
                        /** @description Indicates the date and time on wich the price was last updated. */
                        lastUpdate?: string;
                        /** @description hash. */
                        hash?: string;
                    }[];
                };
            };
        };
    };
    DeletebyskuId: {
        parameters: {
            query: {
                /** @description VTEX account name. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU ID. */
                skuId: string;
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
    Getallpaged: {
        parameters: {
            query: {
                /** @description VTEX account name. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Page number for pagination. */
                page: string;
                /** @description Size of each page for pagination. */
                pageSize: string;
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
    Pricebycontext: {
        parameters: {
            query: {
                /** @description VTEX account name. */
                an: string;
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
        requestBody: {
            content: {
                /** @example {
                 *       "id": 6324,
                 *       "itemId": 2390148,
                 *       "salesChannel": 1,
                 *       "sellerId": "1",
                 *       "validFrom": "2000-01-01T00:00:00",
                 *       "validTo": "2000-02-01T00:00:00"
                 *     } */
                "application/json": {
                    /**
                     * Format: int32
                     * @description Price ID.
                     * @example 6324
                     */
                    id: number;
                    /**
                     * Format: int32
                     * @description Item ID.
                     * @example 2390148
                     */
                    itemId: number;
                    /**
                     * Format: int32
                     * @description Sales channel.
                     * @example 1
                     */
                    salesChannel: number;
                    /**
                     * @description Seller ID.
                     * @example 1
                     */
                    sellerId: string;
                    /**
                     * @description Valid from.
                     * @example 2000-01-01T00:00:00
                     */
                    validFrom: string;
                    /**
                     * @description Valid to.
                     * @example 2000-02-01T00:00:00
                     */
                    validTo: string;
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
    PricebyskuIdandtradePolicy: {
        parameters: {
            query: {
                /** @description Account name. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description SKU ID. */
                skuId: string;
                /** @description Trade policy name. */
                tradePolicy: string;
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
                        /** @description Product ID. */
                        id?: number;
                        /** @description Item ID. */
                        itemId?: number;
                        /** @description Sales channel. */
                        salesChannel?: number;
                        /** @description Seller ID. */
                        sellerId?: string;
                        /** @description Item price. */
                        price?: number;
                        /** @description Item list price. */
                        listPrice?: number;
                        /** @description Indicates the date and time when the fixed price will start to be valid. */
                        ValidFrom?: string;
                        /** @description Indicates the date and time from whic the fixed price will no longer be valid. */
                        ValidTo?: string;
                        /** @description Indicates the date and time on wich the price was last updated. */
                        lastUpdate?: string;
                        /** @description hash. */
                        hash?: string;
                    }[];
                };
            };
        };
    };
    Saveprice: {
        parameters: {
            query: {
                /** @description VTEX account name. */
                an: string;
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
        requestBody: {
            content: {
                /** @example [
                 *       {
                 *         "itemId": 2390148,
                 *         "salesChannel": 1,
                 *         "sellerId": 1,
                 *         "price": 1,
                 *         "listPrice": 1,
                 *         "validFrom": "2016-01-01T02:00:00Z",
                 *         "validTo": "2017-01-01T02:00:00Z"
                 *       }
                 *     ] */
                "application/json": {
                    /**
                     * Format: int32
                     * @description Item ID.
                     * @example 2390148
                     */
                    itemId: number;
                    /**
                     * Format: int32
                     * @description Sales channel.
                     * @example 1
                     */
                    salesChannel: number;
                    /**
                     * Format: int32
                     * @description Seller ID.
                     * @example 1
                     */
                    sellerId: number;
                    /**
                     * Format: int32
                     * @description Price.
                     * @example 1
                     */
                    price: number;
                    /**
                     * Format: int32
                     * @description List price.
                     * @example 1
                     */
                    listPrice: number;
                    /**
                     * @description Valid from.
                     * @example 2016-01-01T02:00:00Z
                     */
                    validFrom: string;
                    /**
                     * @description Valid to.
                     * @example 2016-01-01T02:00:00Z
                     */
                    validTo: string;
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
    "Calculatediscountsandtaxes(Bundles)": {
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
        requestBody: {
            content: {
                /** @example {
                 *       "isShoppingCart": true,
                 *       "origin": "Marketplace",
                 *       "salesChannel": "1",
                 *       "profileId": "aa",
                 *       "items": [
                 *         {
                 *           "index": 0,
                 *           "id": "160",
                 *           "quantity": 3,
                 *           "isGift": false,
                 *           "measurementUnit": "un",
                 *           "unitMultiplier": 1,
                 *           "priceTags": [],
                 *           "params": [
                 *             {
                 *               "name": "Seller@CatalogSystem",
                 *               "value": "1"
                 *             },
                 *             {
                 *               "name": "product@CatalogSystem",
                 *               "value": "94"
                 *             }
                 *           ],
                 *           "priceSheet": [],
                 *           "logisticsInfos": [],
                 *           "sellerId": "1",
                 *           "productSpecifications": []
                 *         }
                 *       ],
                 *       "params": [
                 *         {
                 *           "name": "product@CatalogSystem",
                 *           "value": "2662"
                 *         },
                 *         {
                 *           "name": "couponCode@Marketing",
                 *           "value": "coupon"
                 *         }
                 *       ]
                 *     } */
                "application/json": {
                    /**
                     * @description Indicates whether the item is a shopping cart.
                     * @example false
                     */
                    isShoppingCart: boolean;
                    /**
                     * @description Origin.
                     * @example origin
                     */
                    origin: string;
                    /**
                     * @description Sales channel.
                     * @example channel
                     */
                    salesChannel: string;
                    /**
                     * @description Profile ID.
                     * @example 1
                     */
                    profileId: string;
                    /** @description List of items. */
                    items: {
                        /**
                         * Format: int32
                         * @description Index.
                         * @example 1
                         */
                        index: number;
                        /**
                         * @description Item ID.
                         * @example 1
                         */
                        id: string;
                        /**
                         * Format: int32
                         * @description The quantity of the item.
                         * @example 1
                         */
                        quantity: number;
                        /**
                         * @description Indicates whether the item is a gift.
                         * @example true
                         */
                        isGift: boolean;
                        /**
                         * @description Measurement unit.
                         * @example un
                         */
                        measurementUnit: string;
                        /**
                         * Format: int32
                         * @description Unit multiplier.
                         * @example 1
                         */
                        unitMultiplier: number;
                        /** @description List of price tags. */
                        priceTags: string[];
                        /** @description List of parameters. */
                        params: {
                            /**
                             * @description Name of the item.
                             * @example Seller@CatalogSystem
                             */
                            name: string;
                            /**
                             * @description Value.
                             * @example 1
                             */
                            value: string;
                        }[];
                        /** @description List of price sheet. */
                        priceSheet: string[];
                        /** @description List of logistics information. */
                        logisticsInfos: string[];
                        /**
                         * @description Seller ID.
                         * @example 1
                         */
                        sellerId: string;
                        /** @description List of product specifications. */
                        productSpecifications: string[];
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
    Getcampaignconfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Campaign audience unique identifier. */
                campaignId: string;
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
                        /** @description Start date of the campaign audience in UTC format. */
                        beginDateUtc?: string;
                        /** @description End date of the campaign audience in UTC format. */
                        endDateUtc?: string;
                        /** @description Campaign audience ID. */
                        id?: string;
                        /** @description Campaign audience name. */
                        name?: string;
                        /** @description Defines if the campaign audience is active (`true`) or not (`false`). */
                        isActive?: boolean;
                        /** @description When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active. */
                        isAndOperator?: boolean;
                        /** @description Defines if the campaign audience is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Object with information about the most recent update of the campaign audience. */
                        lastModified?: {
                            /** @description Date of the most recent update in UTC format. */
                            dateUtc?: string;
                            /** @description Email of the user who updated the campaign audience for the latest time. */
                            user?: string;
                        };
                        /** @description Array that contains all target audience that the campaign audience will be valid. */
                        targetConfigurations?: {
                            /** @description Defines if the target audience is featured (`true`) or not (`false`). */
                            featured?: boolean;
                            /** @description Target audience ID. */
                            id?: string;
                            /** @description Target audience name. */
                            name?: string;
                            /** @description Number of days that are considered to add the purchase history. */
                            daysAgoOfPurchases?: number;
                            /** @description Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information. */
                            origin?: string;
                            /** @description Defines if at least one of the sellers must be valid to active the campaign audience. */
                            idSellerIsInclusive?: boolean;
                            /** @description Array with all the trade policies that activate the campaign audience. */
                            idsSalesChannel?: string[];
                            /** @description Defines if the trade policy IDs are exclusive. */
                            areSalesChannelIdsExclusive?: boolean;
                            /** @description Array with all the campaign audience's marketing tags. */
                            marketingTags?: string[];
                            /** @description Defines if marketing tags are not inclusive. */
                            marketingTagsAreNotInclusive?: boolean;
                            /** @description Array composed by all the Payments Methods. */
                            paymentsMethods?: {
                                /** @description Payment Method ID. */
                                id?: string;
                                /** @description Payment Method Name. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description List of stores.
                             */
                            stores?: string[];
                            /** @description Campaign Audiences that activate this promotion. */
                            campaigns?: string[];
                            /**
                             * @deprecated
                             * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                             */
                            storesAreInclusive?: boolean;
                            /** @description Object composed by the categories that will activate or deactivate the campaign audience. */
                            categories?: {
                                /** @description Category ID. */
                                id?: string;
                                /** @description Category Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied. */
                            categoriesAreInclusive?: boolean;
                            /** @description Object composed by the brands that will activate or deactivate the campaign audience. */
                            brands?: {
                                /** @description Brand ID. */
                                id?: string;
                                /** @description Brand Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied. */
                            brandsAreInclusive?: boolean;
                            /** @description Object composed by the products that will activate or deactivate the campaign audience. */
                            products?: {
                                /** @description Product ID. */
                                id?: string;
                                /** @description Product Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied. */
                            productsAreInclusive?: boolean;
                            /** @description Object composed by the SKUs that will activate or deactivate the campaign audience. */
                            skus?: {
                                /** @description SKU ID. */
                                id?: string;
                                /** @description SKU Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied. */
                            skusAreInclusive?: boolean;
                            /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**. */
                            collections1BuyTogether?: {
                                /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
                             */
                            collections2BuyTogether?: {
                                /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Minimum quantity for **Buy Together** promotion. */
                            minimumQuantityBuyTogether?: number;
                            /** @description Quantity to affect **Buy Together** promotion. */
                            quantityToAffectBuyTogether?: number;
                            /** @description Enable **Buy Together** per SKU. */
                            enableBuyTogetherPerSku?: boolean;
                            /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                            listSku1BuyTogether?: {
                                /** @description ID of the SKU to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the SKU to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                            listSku2BuyTogether?: {
                                /** @description ID of the SKU to be added to the second list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the SKU to be added to the second list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of a brand to be added in the first list of the **Buy Together** promotion. */
                            listBrand1BuyTogether?: {
                                /** @description ID of the brand to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the brand to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of a category to be added in the first list of the **Buy Together** promotion. */
                            listCategory1BuyTogether?: {
                                /** @description ID of the category to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the category to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description List of coupons.
                             */
                            coupon?: string[];
                            /** @description Minimum chart value to active the campaign audience. */
                            totalValueFloor?: number;
                            /** @description Maximum chart value to active the campaign audience. */
                            totalValueCeling?: number;
                            /**
                             * @deprecated
                             * @description Total value including all items.
                             */
                            totalValueIncludeAllItems?: boolean;
                            /** @description Total chart value to active the campaign audience. */
                            totalValueMode?: string;
                            /** @description Object composed by the collections that will activate or deactivate the campaign audience. */
                            collections?: {
                                /** @description Collection ID. */
                                id?: string;
                                /** @description Collection Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied. */
                            collectionsIsInclusive?: boolean;
                            /** @description The discount will be granted if the card's BIN is given. */
                            restrictionsBins?: string[];
                            /**
                             * @deprecated
                             * @description List of card issuers.
                             */
                            cardIssuers?: string[];
                            /** @description Total value a client must have in past orders to active the campaign audience. */
                            totalValuePurchase?: number;
                            /** @description The discount will be granted if the shipping method is the same as the one given. */
                            slasIds?: string[];
                            /** @description Applies selected discount only when one of the defined shipping method is selected by the customer. */
                            isSlaSelected?: boolean;
                            /** @description Applies the discount only if it's a first buy. */
                            isFirstBuy?: boolean;
                            /** @description Applies the discount even if the user is not logged. */
                            firstBuyIsProfileOptimistic?: boolean;
                            /** @description If the **List Price** and **Price** are the same. */
                            compareListPriceAndPrice?: boolean;
                            /** @description Applies the campaign audience only if the list price and price is different. */
                            isDifferentListPriceAndPrice?: boolean;
                            /** @description Range of zip codes that applies the promotion. */
                            zipCodeRanges?: {
                                /** @description Initial Zip Code. */
                                zipCodeFrom?: string;
                                /** @description Final Zip Code. */
                                zipCodeTo?: string;
                                /** @description Defines if the zip code range is included in the promotion. */
                                inclusive?: boolean;
                            }[];
                            /** @description Maximum price of the item. */
                            itemMaxPrice?: number;
                            /** @description Minimum price of the item. */
                            itemMinPrice?: number;
                            /**
                             * @deprecated
                             * @description Installment.
                             */
                            installment?: number;
                            /** @description Set if the campaign audience will be applied considering a minimum and maximum values for installments. */
                            isMinMaxInstallments?: boolean;
                            /** @description Minimum value for installment. */
                            minInstallment?: number;
                            /** @description Maximum value for installment. */
                            maxInstallment?: number;
                            /**
                             * @deprecated
                             * @description List of merchants.
                             */
                            merchants?: string[];
                            /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                            clusterExpressions?: string[];
                            /**
                             * @deprecated
                             * @description List of payment rules.
                             */
                            paymentsRules?: string[];
                            /** @description Gifts List Type. */
                            giftListTypes?: string[];
                            /**
                             * @deprecated
                             * @description List of product specifications.
                             */
                            productsSpecifications?: string[];
                            /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                            affiliates?: {
                                /** @description Affiliate ID. */
                                id?: string;
                                /** @description Affiliate Name. */
                                name?: string;
                            }[];
                            /** @description Defines how many times the campaign audience can be used. */
                            maxUsage?: number;
                            /** @description Defines if the campaign audience can be used multiple times per client. */
                            maxUsagePerClient?: number;
                            /** @description Should distribute discount among matched items. */
                            shouldDistributeDiscountAmongMatchedItems?: boolean;
                            /** @description Defines if the campaign audience can be used multiple times per client. */
                            multipleUsePerClient?: boolean;
                            /** @description Use new progressive algorithm. */
                            useNewProgressiveAlgorithm?: boolean;
                            /** @description Percentual discount value list. */
                            percentualDiscountValueList?: number[];
                        }[];
                    };
                };
            };
        };
    };
    Getcampaignaudiences: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
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
                    "application/json": {
                        /** @description Start date of the campaign audience in UTC format. */
                        beginDateUtc?: string;
                        /** @description End date of the campaign audience in UTC format. */
                        endDateUtc?: string;
                        /** @description Campaign audience ID. */
                        id?: string;
                        /** @description Campaign audience name. */
                        name?: string;
                        /** @description Defines if the campaign audience is active (`true`) or not (`false`). */
                        isActive?: boolean;
                        /** @description When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active. */
                        isAndOperator?: boolean;
                        /** @description Defines if the campaign audience is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Object with information about the most recent update of the campaign audience. */
                        lastModified?: {
                            /** @description Date of the most recent update in UTC format. */
                            dateUtc?: string;
                            /** @description Email of the user who updated the campaign audience for the latest time. */
                            user?: string;
                        };
                        /** @description Array that contains all target audience that the campaign audience will be valid. */
                        targetConfigurations?: {
                            /** @description Defines if the target audience is featured (`true`) or not (`false`). */
                            featured?: boolean;
                            /** @description Target audience ID. */
                            id?: string;
                            /** @description Target audience name. */
                            name?: string;
                            /** @description Number of days that are considered to add the purchase history. */
                            daysAgoOfPurchases?: number;
                            /** @description Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information. */
                            origin?: string;
                            /** @description Defines if at least one of the sellers must be valid to active the campaign audience. */
                            idSellerIsInclusive?: boolean;
                            /** @description Array with all the trade policies that activate the campaign audience. */
                            idsSalesChannel?: string[];
                            /** @description Defines if the trade policy IDs are exclusive. */
                            areSalesChannelIdsExclusive?: boolean;
                            /** @description Array with all the campaign audience's marketing tags. */
                            marketingTags?: string[];
                            /** @description Defines if marketing tags are not inclusive. */
                            marketingTagsAreNotInclusive?: boolean;
                            /** @description Array composed by all the Payments Methods. */
                            paymentsMethods?: {
                                /** @description Payment Method ID. */
                                id?: string;
                                /** @description Payment Method Name. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description List of stores.
                             */
                            stores?: string[];
                            /** @description Campaign Audiences that activate this promotion. */
                            campaigns?: string[];
                            /**
                             * @deprecated
                             * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                             */
                            storesAreInclusive?: boolean;
                            /** @description Object composed by the categories that will activate or deactivate the campaign audience. */
                            categories?: {
                                /** @description Category ID. */
                                id?: string;
                                /** @description Category Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied. */
                            categoriesAreInclusive?: boolean;
                            /** @description Object composed by the brands that will activate or deactivate the campaign audience. */
                            brands?: {
                                /** @description Brand ID. */
                                id?: string;
                                /** @description Brand Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied. */
                            brandsAreInclusive?: boolean;
                            /** @description Object composed by the products that will activate or deactivate the campaign audience. */
                            products?: {
                                /** @description Product ID. */
                                id?: string;
                                /** @description Product Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied. */
                            productsAreInclusive?: boolean;
                            /** @description Object composed by the SKUs that will activate or deactivate the campaign audience. */
                            skus?: {
                                /** @description SKU ID. */
                                id?: string;
                                /** @description SKU Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied. */
                            skusAreInclusive?: boolean;
                            /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**. */
                            collections1BuyTogether?: {
                                /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
                             */
                            collections2BuyTogether?: {
                                /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Minimum quantity for **Buy Together** promotion. */
                            minimumQuantityBuyTogether?: number;
                            /** @description Quantity to affect **Buy Together** promotion. */
                            quantityToAffectBuyTogether?: number;
                            /** @description Enable **Buy Together** per SKU. */
                            enableBuyTogetherPerSku?: boolean;
                            /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                            listSku1BuyTogether?: {
                                /** @description ID of the SKU to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the SKU to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                            listSku2BuyTogether?: {
                                /** @description ID of the SKU to be added to the second list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the SKU to be added to the second list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of a brand to be added in the first list of the **Buy Together** promotion. */
                            listBrand1BuyTogether?: {
                                /** @description ID of the brand to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the brand to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of a category to be added in the first list of the **Buy Together** promotion. */
                            listCategory1BuyTogether?: {
                                /** @description ID of the category to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the category to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description List of coupons.
                             */
                            coupon?: string[];
                            /** @description Minimum chart value to active the campaign audience. */
                            totalValueFloor?: number;
                            /** @description Maximum chart value to active the campaign audience. */
                            totalValueCeling?: number;
                            /**
                             * @deprecated
                             * @description Total value including all items.
                             */
                            totalValueIncludeAllItems?: boolean;
                            /** @description Total chart value to active the campaign audience. */
                            totalValueMode?: string;
                            /** @description Object composed by the collections that will activate or deactivate the campaign audience. */
                            collections?: {
                                /** @description Collection ID. */
                                id?: string;
                                /** @description Collection Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied. */
                            collectionsIsInclusive?: boolean;
                            /** @description The discount will be granted if the card's BIN is given. */
                            restrictionsBins?: string[];
                            /**
                             * @deprecated
                             * @description List of card issuers.
                             */
                            cardIssuers?: string[];
                            /** @description Total value a client must have in past orders to active the campaign audience. */
                            totalValuePurchase?: number;
                            /** @description The discount will be granted if the shipping method is the same as the one given. */
                            slasIds?: string[];
                            /** @description Applies selected discount only when one of the defined shipping method is selected by the customer. */
                            isSlaSelected?: boolean;
                            /** @description Applies the discount only if it's a first buy. */
                            isFirstBuy?: boolean;
                            /** @description Applies the discount even if the user is not logged. */
                            firstBuyIsProfileOptimistic?: boolean;
                            /** @description If the **List Price** and **Price** are the same. */
                            compareListPriceAndPrice?: boolean;
                            /** @description Applies the campaign audience only if the list price and price is different. */
                            isDifferentListPriceAndPrice?: boolean;
                            /** @description Range of zip codes that applies the promotion. */
                            zipCodeRanges?: {
                                /** @description Initial Zip Code. */
                                zipCodeFrom?: string;
                                /** @description Final Zip Code. */
                                zipCodeTo?: string;
                                /** @description Defines if the zip code range is included in the promotion. */
                                inclusive?: boolean;
                            }[];
                            /** @description Maximum price of the item. */
                            itemMaxPrice?: number;
                            /** @description Minimum price of the item. */
                            itemMinPrice?: number;
                            /**
                             * @deprecated
                             * @description Installment.
                             */
                            installment?: number;
                            /** @description Set if the campaign audience will be applied considering a minimum and maximum values for installments. */
                            isMinMaxInstallments?: boolean;
                            /** @description Minimum value for installment. */
                            minInstallment?: number;
                            /** @description Maximum value for installment. */
                            maxInstallment?: number;
                            /**
                             * @deprecated
                             * @description List of merchants.
                             */
                            merchants?: string[];
                            /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                            clusterExpressions?: string[];
                            /**
                             * @deprecated
                             * @description Cluster operator.
                             */
                            clusterOperator?: string;
                            /**
                             * @deprecated
                             * @description List of payment rules.
                             */
                            paymentsRules?: string[];
                            /** @description Gifts List Type. */
                            giftListTypes?: string[];
                            /**
                             * @deprecated
                             * @description List of product specifications.
                             */
                            productsSpecifications?: string[];
                            /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                            affiliates?: {
                                /** @description Affiliate ID. */
                                id?: string;
                                /** @description Affiliate Name. */
                                name?: string;
                            }[];
                            /** @description Defines how many times the campaign audience can be used. */
                            maxUsage?: number;
                            /** @description Defines if the campaign audience can be used multiple times per client. */
                            maxUsagePerClient?: number;
                            /** @description Should distribute discount among matched items. */
                            shouldDistributeDiscountAmongMatchedItems?: boolean;
                            /** @description Defines if the campaign audience can be used multiple times per client. */
                            multipleUsePerClient?: boolean;
                            /** @description Use new progressive algorithm. */
                            useNewProgressiveAlgorithm?: boolean;
                            /** @description Percentual discount value list. */
                            percentualDiscountValueList?: number[];
                        }[];
                    }[];
                };
            };
        };
    };
    Setcampaignconfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Start date of the campaign audience in UTC format.
                     * @example 2020-05-01T21:30:00Z
                     */
                    beginDateUtc?: string;
                    /**
                     * @description End date of the campaign audience in UTC format.
                     * @example 2020-05-02T01:30:00Z
                     */
                    endDateUtc?: string;
                    /**
                     * @description Campaign audience ID.
                     * @example dd270d06-1ed1-47fc-b04e-a2431121b5a4
                     */
                    id?: string;
                    /**
                     * @description Campaign audience name.
                     * @example Interna
                     */
                    name?: string;
                    /**
                     * @description Defines if the campaign audience is active (`true`) or not (`false`).
                     * @example true
                     */
                    isActive?: boolean;
                    /**
                     * @description When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.
                     * @example true
                     */
                    isAndOperator?: boolean;
                    /**
                     * @description Defines if the campaign audience is archived (`true`) or not (`false`).
                     * @example false
                     */
                    isArchived?: boolean;
                    /** @description Object with information about the last update of the campaign audience. */
                    lastModified?: {
                        /**
                         * @description Date of the last update in UTC format.
                         * @example 2020-05-01T21:22:01.807398Z
                         */
                        dateUtc?: string;
                        /**
                         * @description Email of the user who made the last update.
                         * @example email@email.com
                         */
                        user?: string;
                    };
                    /** @description Array that contains all target audience that the campaign audience will be valid. */
                    targetConfigurations?: {
                        /**
                         * @description Defines if the target audience is featured (`true`) or not (`false`).
                         * @example false
                         */
                        featured?: boolean;
                        /**
                         * @description Target audience ID.
                         * @example 77ae1e4c-a216-4b15-a4a3-ae64ec298988
                         */
                        id?: string;
                        /**
                         * @description Target audience name.
                         * @example Social Sellers
                         */
                        name?: string;
                        /**
                         * @description Number of days that are considered to add the purchase history.
                         * @example 0
                         */
                        daysAgoOfPurchases?: number;
                        /**
                         * @description Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.
                         * @example Marketplace
                         */
                        origin?: string;
                        /**
                         * @description Shows if at least one of the sellers must be valid to active the campaign audience.
                         * @example false
                         */
                        idSellerIsInclusive?: boolean;
                        /** @description Shows the trade policies that active the campaign audience. */
                        idsSalesChannel?: string[];
                        /**
                         * @description Shows if the trade policy IDs are exclusive.
                         * @example false
                         */
                        areSalesChannelIdsExclusive?: boolean;
                        /** @description Array with all campaign audience's marketing tags. */
                        marketingTags?: string[];
                        /**
                         * @description Shows if marketing tags are not inclusive.
                         * @example false
                         */
                        marketingTagsAreNotInclusive?: boolean;
                        /** @description Array composed by all the Payments Methods. */
                        paymentsMethods?: {
                            /**
                             * @description Payment Method ID.
                             * @example 2
                             */
                            id?: string;
                            /**
                             * @description Payment Method Name.
                             * @example Visa (2)
                             */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of stores.
                         */
                        stores?: string[];
                        /** @description Campaign Audiences that activate this promotion. */
                        campaigns?: string[];
                        /**
                         * @deprecated
                         * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                         * @example false
                         */
                        storesAreInclusive?: boolean;
                        /** @description Object composed by the categories that will activate or deactivate the campaign audience. */
                        categories?: {
                            /**
                             * @description Category ID.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Category Name.
                             * @example Vinhos Tintos (1)
                             */
                            name?: string;
                        }[];
                        /**
                         * @description If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.
                         * @example true
                         */
                        categoriesAreInclusive?: boolean;
                        /** @description Object composed by the brands that will activate or deactivate the campaign audience. */
                        brands?: {
                            /**
                             * @description Brand ID.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Brand Name.
                             * @example Brand (1)
                             */
                            name?: string;
                        }[];
                        /**
                         * @description If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.
                         * @example true
                         */
                        brandsAreInclusive?: boolean;
                        /** @description Object composed by the products that will activate or deactivate the campaign audience. */
                        products?: {
                            /**
                             * @description Product ID.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Product Name.
                             * @example Vinho (1)
                             */
                            name?: string;
                        }[];
                        /**
                         * @description If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.
                         * @example true
                         */
                        productsAreInclusive?: boolean;
                        /** @description Object composed by the SKUs that will activate or deactivate the campaign audience. */
                        skus?: {
                            /**
                             * @description SKU ID.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description SKU Name.
                             * @example Vinho tinto (1)
                             */
                            name?: string;
                        }[];
                        /**
                         * @description If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.
                         * @example true
                         */
                        skusAreInclusive?: boolean;
                        /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**. */
                        collections1BuyTogether?: {
                            /**
                             * @description ID of the collection to be added to the first list of the **Buy Together** promotion.
                             * @example 157
                             */
                            id?: string;
                            /**
                             * @description Name of the collection to be added to the first list of the **Buy Together** promotion.
                             * @example Inverno (157)
                             */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
                         */
                        collections2BuyTogether?: {
                            /**
                             * @description ID of the collection to be added to the first list of the **Buy Together** promotion.
                             * @example 157
                             */
                            id?: string;
                            /**
                             * @description Name of the collection to be added to the first list of the **Buy Together** promotion.
                             * @example Inverno (157)
                             */
                            name?: string;
                        }[];
                        /**
                         * @description Minimum quantity for **Buy Together** promotion.
                         * @example 1
                         */
                        minimumQuantityBuyTogether?: number;
                        /**
                         * @description Quantity to affect **Buy Together** promotion.
                         * @example 0
                         */
                        quantityToAffectBuyTogether?: number;
                        /**
                         * @description Enable **Buy Together** per SKU.
                         * @example false
                         */
                        enableBuyTogetherPerSku?: boolean;
                        /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku1BuyTogether?: {
                            /**
                             * @description ID of the SKU to be added to the first list of the **Buy Together** promotion.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Name of the SKU to be added to the first list of the **Buy Together** promotion.
                             * @example Vinho
                             */
                            name?: string;
                        }[];
                        /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                        listSku2BuyTogether?: {
                            /**
                             * @description ID of the SKU to be added to the second list of the **Buy Together** promotion.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Name of the SKU to be added to the second list of the **Buy Together** promotion.
                             * @example Vinho
                             */
                            name?: string;
                        }[];
                        /** @description Array of objects, each containing ID and Name of a brand to be added in the first list of the **Buy Together** promotion. */
                        listBrand1BuyTogether?: {
                            /**
                             * @description ID of the brand to be added to the first list of the **Buy Together** promotion.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Name of the brand to be added to the first list of the **Buy Together** promotion.
                             * @example Malbec
                             */
                            name?: string;
                        }[];
                        /** @description Array of objects, each containing ID and Name of a category to be added in the first list of the **Buy Together** promotion. */
                        listCategory1BuyTogether?: {
                            /**
                             * @description ID of the category to be added to the first list of the **Buy Together** promotion.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Name of the category to be added to the first list of the **Buy Together** promotion.
                             * @example Vinhos Tintos
                             */
                            name?: string;
                        }[];
                        /**
                         * @deprecated
                         * @description List of coupons.
                         */
                        coupon?: string[];
                        /**
                         * @description Minimum chart value to active the campaign audience.
                         * @example 40
                         */
                        totalValueFloor?: number;
                        /**
                         * @description Maximum chart value to active the campaign audience.
                         * @example 0
                         */
                        totalValueCeling?: number;
                        /**
                         * @deprecated
                         * @description Total value including all items.
                         * @example false
                         */
                        totalValueIncludeAllItems?: boolean;
                        /**
                         * @description Total chart value to active the campaign audience.
                         * @example IncludeMatchedItems
                         */
                        totalValueMode?: string;
                        /** @description Object composed by the collections that will activate or deactivate the campaign audience. */
                        collections?: {
                            /**
                             * @description Collection ID.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Collection Name.
                             * @example Collection (1)
                             */
                            name?: string;
                        }[];
                        /**
                         * @description If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.
                         * @example true
                         */
                        collectionsIsInclusive?: boolean;
                        /** @description The discount will be granted if the card's BIN is given. */
                        restrictionsBins?: string[];
                        /**
                         * @deprecated
                         * @description List of card issuers.
                         */
                        cardIssuers?: string[];
                        /**
                         * @description Total value a client must have in past orders to active the campaign audience.
                         * @example 0
                         */
                        totalValuePurchase?: number;
                        /** @description The discount will be granted if the shipping method is the same as the one given. */
                        slasIds?: string[];
                        /**
                         * @description Applies selected discount only when one of the defined shipping method is selected by the customer.
                         * @example false
                         */
                        isSlaSelected?: boolean;
                        /**
                         * @description Applies the discount only if it's a first buy.
                         * @example false
                         */
                        isFirstBuy?: boolean;
                        /**
                         * @description Applies the discount even if the user is not logged.
                         * @example false
                         */
                        firstBuyIsProfileOptimistic?: boolean;
                        /**
                         * @description If the **List Price** and **Price** are the same.
                         * @example false
                         */
                        compareListPriceAndPrice?: boolean;
                        /**
                         * @description Applies the campaign audience only if the list price and price is different.
                         * @example false
                         */
                        isDifferentListPriceAndPrice?: boolean;
                        /** @description Range of the zip code that applies the promotion. */
                        zipCodeRanges?: {
                            /**
                             * @description Initial Zip Code.
                             * @example 20000-000
                             */
                            zipCodeFrom?: string;
                            /**
                             * @description Final Zip Code.
                             * @example 20000-100
                             */
                            zipCodeTo?: string;
                            /**
                             * @description Defines if the zip code range is included in the promotion.
                             * @example true
                             */
                            inclusive?: boolean;
                        }[];
                        /**
                         * @description Maximum price of the item.
                         * @example 0
                         */
                        itemMaxPrice?: number;
                        /**
                         * @description Minimum price of the item.
                         * @example 0
                         */
                        itemMinPrice?: number;
                        /**
                         * @deprecated
                         * @description Installment.
                         * @example 1
                         */
                        installment?: number;
                        /**
                         * @description Set if the campaign audience will be applied considering a minimum and maximum values for installments.
                         * @example false
                         */
                        isMinMaxInstallments?: boolean;
                        /**
                         * @description Minimum value for installment.
                         * @example 0
                         */
                        minInstallment?: number;
                        /**
                         * @description Maximum value for installment.
                         * @example 0
                         */
                        maxInstallment?: number;
                        /**
                         * @deprecated
                         * @description List of merchants.
                         */
                        merchants?: string[];
                        /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                        clusterExpressions?: string[];
                        /**
                         * @deprecated
                         * @description Cluster operator.
                         * @example operator
                         */
                        clusterOperator?: string;
                        /**
                         * @deprecated
                         * @description List of payment rules.
                         */
                        paymentsRules?: string[];
                        /** @description Gifts List Type. */
                        giftListTypes?: string[];
                        /**
                         * @deprecated
                         * @description List of product specifications.
                         */
                        productsSpecifications?: string[];
                        /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                        affiliates?: {
                            /**
                             * @description Affiliate ID.
                             * @example 1
                             */
                            id?: string;
                            /**
                             * @description Affiliate Name.
                             * @example Amazon
                             */
                            name?: string;
                        }[];
                        /**
                         * @description Defines how many times the campaign audience can be used.
                         * @example 0
                         */
                        maxUsage?: number;
                        /**
                         * @description Defines if the campaign audience can be used multiple times per client.
                         * @example 0
                         */
                        maxUsagePerClient?: number;
                        /**
                         * @description Should distribute discount among matched items.
                         * @example false
                         */
                        shouldDistributeDiscountAmongMatchedItems?: boolean;
                        /**
                         * @description Defines if the campaign audience can be used multiple times per client.
                         * @example false
                         */
                        multipleUsePerClient?: boolean;
                        /**
                         * @description Use new progressive algorithm.
                         * @example false
                         */
                        useNewProgressiveAlgorithm?: boolean;
                        /** @description Percentual discount value list. */
                        percentualDiscountValueList?: number[];
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
                content: {
                    "application/json": {
                        /** @description Start date of the campaign audience in UTC format. */
                        beginDateUtc?: string;
                        /** @description End date of the campaign audience in UTC format. */
                        endDateUtc?: string;
                        /** @description Campaign audience ID. */
                        id?: string;
                        /** @description Campaign audience name. */
                        name?: string;
                        /** @description Defines if the campaign audience is active (`true`) or not (`false`). */
                        isActive?: boolean;
                        /** @description When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active. */
                        isAndOperator?: boolean;
                        /** @description Defines if the campaign audience is archived (`true`) or not (`false`). */
                        isArchived?: boolean;
                        /** @description Object with information about the most recent update of the campaign audience. */
                        lastModified?: {
                            /** @description Date of the most recent update in UTC format. */
                            dateUtc?: string;
                            /** @description Email of the user who updated the campaign audience for the latest time. */
                            user?: string;
                        };
                        /** @description Array that contains all target audience that the campaign audience will be valid. */
                        targetConfigurations?: {
                            /** @description Defines if the target audience is feature (`true`) or not (`false`). */
                            featured?: boolean;
                            /** @description Target audience ID. */
                            id?: string;
                            /** @description Target audience name. */
                            name?: string;
                            /** @description Number of days that are considered to add the purchase history. */
                            daysAgoOfPurchases?: number;
                            /** @description Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information. */
                            origin?: string;
                            /** @description Defines if at least one of the sellers must be valid to active the campaign audience. */
                            idSellerIsInclusive?: boolean;
                            /** @description Array with all the trade policies that activate the campaign audience. */
                            idsSalesChannel?: string[];
                            /** @description Defines if the trade policy IDs are exclusive. */
                            areSalesChannelIdsExclusive?: boolean;
                            /** @description Array with all the campaign audience's marketing tags. */
                            marketingTags?: string[];
                            /** @description Defines if marketing tags are not inclusive. */
                            marketingTagsAreNotInclusive?: boolean;
                            /** @description Array composed by all the Payments Methods. */
                            paymentsMethods?: {
                                /** @description Payment Method ID. */
                                id?: string;
                                /** @description Payment Method Name. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description List of stores.
                             */
                            stores?: string[];
                            /** @description Campaign Audiences that activate this promotion. */
                            campaigns?: string[];
                            /**
                             * @deprecated
                             * @description If set to `true`, this promotion will be applied to any store present on the `stores` field. If set to `false`, stores present on that field will make this promotion not to be applied.
                             */
                            storesAreInclusive?: boolean;
                            /** @description Object composed by the categories that will activate or deactivate the campaign audience. */
                            categories?: {
                                /** @description Category ID. */
                                id?: string;
                                /** @description Category Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied. */
                            categoriesAreInclusive?: boolean;
                            /** @description Object composed by the brands that will activate or deactivate the campaign audience. */
                            brands?: {
                                /** @description Brand ID. */
                                id?: string;
                                /** @description Brand Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied. */
                            brandsAreInclusive?: boolean;
                            /** @description Object composed by the products that will activate or deactivate the campaign audience. */
                            products?: {
                                /** @description Product ID. */
                                id?: string;
                                /** @description Product Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied. */
                            productsAreInclusive?: boolean;
                            /** @description Object composed by the SKUs that will activate or deactivate the campaign audience. */
                            skus?: {
                                /** @description SKU ID. */
                                id?: string;
                                /** @description SKU Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied. */
                            skusAreInclusive?: boolean;
                            /** @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**. */
                            collections1BuyTogether?: {
                                /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.
                             */
                            collections2BuyTogether?: {
                                /** @description ID of the collection to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the collection to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Minimum quantity for **Buy Together** promotion. */
                            minimumQuantityBuyTogether?: number;
                            /** @description Quantity to affect **Buy Together** promotion. */
                            quantityToAffectBuyTogether?: number;
                            /** @description Enable **Buy Together** per SKU. */
                            enableBuyTogetherPerSku?: boolean;
                            /** @description Array of objects, each containing ID and Name of an SKU to be added in the first list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                            listSku1BuyTogether?: {
                                /** @description ID of the SKU to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the SKU to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of an SKU to be added to the second list of the **Buy Together** promotion. Learn more about this type of promotion in the [Creating a Buy Together promotion](https://help.vtex.com/en/tutorial/buy-together--tutorials_323) documentation. */
                            listSku2BuyTogether?: {
                                /** @description ID of the SKU to be added to the second list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the SKU to be added to the second list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of a brand to be added in the first list of the **Buy Together** promotion. */
                            listBrand1BuyTogether?: {
                                /** @description ID of the brand to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the brand to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /** @description Array of objects, each containing ID and Name of a category to be added in the first list of the **Buy Together** promotion. */
                            listCategory1BuyTogether?: {
                                /** @description ID of the category to be added to the first list of the **Buy Together** promotion. */
                                id?: string;
                                /** @description Name of the category to be added to the first list of the **Buy Together** promotion. */
                                name?: string;
                            }[];
                            /**
                             * @deprecated
                             * @description List of coupons.
                             */
                            coupon?: string[];
                            /** @description Minimum chart value to active the campaign audience. */
                            totalValueFloor?: number;
                            /** @description Maximum chart value to active the campaign audience. */
                            totalValueCeling?: number;
                            /**
                             * @deprecated
                             * @description Total value including all items.
                             */
                            totalValueIncludeAllItems?: boolean;
                            /** @description Total chart value to active the campaign audience. */
                            totalValueMode?: string;
                            /** @description Object composed by the collections that will activate or deactivate the campaign audience. */
                            collections?: {
                                /** @description Collection ID. */
                                id?: string;
                                /** @description Collection Name. */
                                name?: string;
                            }[];
                            /** @description If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied. */
                            collectionsIsInclusive?: boolean;
                            /** @description The discount will be granted if the card's BIN is given. */
                            restrictionsBins?: string[];
                            /**
                             * @deprecated
                             * @description List of card issuers.
                             */
                            cardIssuers?: string[];
                            /** @description Total value a client must have in past orders to active the campaign audience. */
                            totalValuePurchase?: number;
                            /** @description The discount will be granted if the shipping method is the same as the one given. */
                            slasIds?: string[];
                            /** @description Applies selected discount only when one of the defined shipping method is selected by the customer. */
                            isSlaSelected?: boolean;
                            /** @description Applies the discount only if it's a first buy. */
                            isFirstBuy?: boolean;
                            /** @description Applies the discount even if the user is not logged. */
                            firstBuyIsProfileOptimistic?: boolean;
                            /** @description If the **List Price** and **Price** are the same. */
                            compareListPriceAndPrice?: boolean;
                            /** @description Applies the campaign audience only if the list price and price is different. */
                            isDifferentListPriceAndPrice?: boolean;
                            /** @description Range of the zip code that applies the promotion. */
                            zipCodeRanges?: {
                                /** @description Initial Zip Code. */
                                zipCodeFrom?: string;
                                /** @description Final Zip Code. */
                                zipCodeTo?: string;
                                /** @description Defines if the zip code range is included in the promotion. */
                                inclusive?: boolean;
                            }[];
                            /** @description Maximum price of the item. */
                            itemMaxPrice?: number;
                            /** @description Minimum price of the item. */
                            itemMinPrice?: number;
                            /**
                             * @deprecated
                             * @description Installment.
                             */
                            installment?: number;
                            /** @description Set if the campaign audience will be applied considering a minimum and maximum values for installments. */
                            isMinMaxInstallments?: boolean;
                            /** @description Minimum value for installment. */
                            minInstallment?: number;
                            /** @description Maximum value for installment. */
                            maxInstallment?: number;
                            /**
                             * @deprecated
                             * @description List of merchants.
                             */
                            merchants?: string[];
                            /** @description Criteria to select a customer cluster. Each item in this array should follow the format of an equality function (`{propertyname}={value}`) or the format of a contains function (`{propertyname} contains {value}`). In both options, `{propertyname}` must be replaced with the name of the field in the data entity, and `{value}` must be replaced with the value determined in Master Data. Find more information about these criteria in [Filling in the Customer cluster field](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). */
                            clusterExpressions?: string[];
                            /**
                             * @deprecated
                             * @description Cluster operator.
                             */
                            clusterOperator?: string;
                            /**
                             * @deprecated
                             * @description List of payment rules.
                             */
                            paymentsRules?: string[];
                            /** @description Gifts List Type. */
                            giftListTypes?: string[];
                            /**
                             * @deprecated
                             * @description List of product specifications.
                             */
                            productsSpecifications?: string[];
                            /** @description Marketplace order identifier. The discount will apply to selected affiliates. */
                            affiliates?: {
                                /** @description Affiliate ID. */
                                id?: string;
                                /** @description Affiliate Name. */
                                name?: string;
                            }[];
                            /** @description Defines how many times the campaign audience can be used. */
                            maxUsage?: number;
                            /** @description Defines if the campaign audience can be used multiple times per client. */
                            maxUsagePerClient?: number;
                            /** @description Should distribute discount among matched items. */
                            shouldDistributeDiscountAmongMatchedItems?: boolean;
                            /** @description Defines if the campaign audience can be used multiple times per client. */
                            multipleUsePerClient?: boolean;
                            /** @description Use new progressive algorithm. */
                            useNewProgressiveAlgorithm?: boolean;
                            /** @description Percentual discount value list. */
                            percentualDiscountValueList?: number[];
                        }[];
                    };
                };
            };
        };
    };
    Usagenotification: {
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
        requestBody: {
            content: {
                /** @example {
                 *       "orderId": "1",
                 *       "profileId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
                 *       "accountId": "ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj",
                 *       "calculatorIds": [
                 *         "discount_basetestqa_1"
                 *       ],
                 *       "used": true,
                 *       "coupon": "cupom",
                 *       "itemsCount": 4
                 *     } */
                "application/json": {
                    /**
                     * @description Order ID.
                     * @example 1
                     */
                    orderId: string;
                    /**
                     * @description Profile ID.
                     * @example aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
                     */
                    profileId: string;
                    /**
                     * @description Account ID.
                     * @example ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj
                     */
                    accountId: string;
                    /** @description List of calculator IDs. */
                    calculatorIds: string[];
                    /**
                     * @description Indicates whether the item has been used or not.
                     * @example false
                     */
                    used: boolean;
                    /**
                     * @description Indicates whether a coupon is applicable to the item.
                     * @example cupom
                     */
                    coupon: string;
                    /**
                     * Format: int32
                     * @description Items count.
                     * @example 1
                     */
                    itemsCount: number;
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
}
