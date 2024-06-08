export interface paths {
    "/api/catalog_system/pvt/products/GetProductAndSkuIds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product and SKU IDs
         * @description Retrieves the IDs of products and SKUs.
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ProductAndSkuIds"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/product/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product by ID
         * @description Retrieves a specific product by its ID. The response body fields are exactly the inforamtion  needed to create a new product.
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProductbyid"];
        /**
         * Update product
         * @description Updates an existing product.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Product's name. Limited to 150 characters.
                         * @example Zoom Stefan Janoski Canvas RM SB Varsity Red
                         */
                        Name: string;
                        /**
                         * @description Department ID according to the product's category.
                         * @example 2000089
                         */
                        DepartmentId?: number;
                        /**
                         * @description Category ID associated with this product.
                         * @example 2000090
                         */
                        CategoryId: number;
                        /**
                         * @description Brand ID associated with this product.
                         * @example 12121219
                         */
                        BrandId: number;
                        /**
                         * @description Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).
                         * @example stefan-janoski-canvas-varsity-red
                         */
                        LinkId?: string;
                        /**
                         * @description Product Reference Code.
                         * @example sr_1_90
                         */
                        RefId?: string;
                        /**
                         * @description Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.
                         * @example true
                         */
                        IsVisible?: boolean;
                        /**
                         * @description Product description.
                         * @example The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.
                         */
                        Description?: string;
                        /**
                         * @description Short product description. This information can be displayed on both the product page and the shelf, using the following controls:
                         *      Store Framework: `$product.DescriptionShort`.
                         *      Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.
                         * @example The Nike Zoom Stefan Janoski is made with a premium leather.
                         */
                        DescriptionShort?: string;
                        /**
                         * @description Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.
                         * @example 2019-01-01T00:00:00
                         */
                        ReleaseDate?: string;
                        /**
                         * @description Store Framework: Deprecated.
                         *     Legacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.
                         * @example Zoom,Stefan,Janoski
                         */
                        KeyWords?: string;
                        /**
                         * @description Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Zoom Stefan Janoski Canvas RM SB Varsity Red
                         */
                        Title?: string;
                        /**
                         * @description Activate (`true`) or inactivate (`false`) product.
                         * @example true
                         */
                        IsActive?: boolean;
                        /**
                         * @description Product tax code, used for tax calculation.
                         * @example 12345
                         */
                        TaxCode?: string;
                        /**
                         * @description Brief description of the product for SEO. It is recommended not to exceed 150 characters.
                         * @example The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.
                         */
                        MetaTagDescription?: string;
                        /**
                         * @deprecated
                         * @description Deprecated field.
                         * @example null
                         */
                        SupplierId?: number | null;
                        /**
                         * @description If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.
                         * @example true
                         */
                        ShowWithoutStock?: boolean;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         * @example null
                         */
                        AdWordsRemarketingCode?: string | null;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         * @example null
                         */
                        LomadeeCampaignCode?: string | null;
                        /**
                         * @description Value used to set the priority on the search result page.
                         * @example 1
                         */
                        Score?: number;
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
                            /** @description Product's unique numerical identifier. */
                            Id?: number;
                            /** @description Product's name. Limited to 150 characters. */
                            Name?: string;
                            /** @description Department ID according to the product's category. */
                            DepartmentId?: number;
                            /** @description Category ID associated with this product. */
                            CategoryId?: number;
                            /** @description Brand ID associated with this product. */
                            BrandId?: number;
                            /** @description Slug that will be used to build the product page URL. If not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`). */
                            LinkId?: string;
                            /** @description Product reference code. */
                            RefId?: string;
                            /** @description Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts. */
                            IsVisible?: boolean;
                            /** @description Product description. */
                            Description?: string;
                            /** @description Short product description. This information can be displayed on both the product page and the shelf, using the following controls:
                             *      Store Framework: `$product.DescriptionShort`.
                             *      Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`. */
                            DescriptionShort?: string;
                            /** @description Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections. */
                            ReleaseDate?: string;
                            /** @description Store Framework: Deprecated.
                             *     Legacy CMS Portal:  Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive. */
                            KeyWords?: string;
                            /** @description Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO. */
                            Title?: string;
                            /** @description Activate (`true`) or inactivate (`false`) product. */
                            IsActive?: boolean;
                            /** @description Product tax code, used for tax calculation. */
                            TaxCode?: string;
                            /** @description Brief description of the product for SEO. It's recommended that you don't exceed 150 characters. */
                            MetaTagDescription?: string;
                            /**
                             * @deprecated
                             * @description Deprecated field.
                             */
                            SupplierId?: number | null;
                            /** @description If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock. */
                            ShowWithoutStock?: boolean;
                            /**
                             * @deprecated
                             * @description This is a legacy field. Do not take this information into consideration.
                             */
                            AdWordsRemarketingCode?: string;
                            /**
                             * @deprecated
                             * @description This is a legacy field. Do not take this information into consideration.
                             */
                            LomadeeCampaignCode?: string;
                            /** @description Value used to set the priority on the search result page. */
                            Score?: number;
                        };
                    };
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
    "/api/catalog_system/pvt/products/productget/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product and its general context
         * @description Retrieves a specific product's general information as name, description and the trade policies where it is included.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product Form** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ProductandTradePolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/products/productgetbyrefid/{refId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product by reference ID
         * @description Retrieves a specific product by its Reference ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ProductbyRefId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/variations/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product's SKUs by product ID
         * @description Retrieves data about a product and all SKUs related to it given the product's ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ProductVariations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/addon/pvt/review/GetProductRate/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product review rate by product ID
         * @description Retrieves the review rate of a product given the product's ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Reviews list** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
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
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/product": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create product with category and brand
         * @description This endpoint allows two types of request:
         *
         *     **Type 1:** Creating a new product as well as a new category path (including subcategories) and a new brand by using `CategoryPath` and `BrandName` parameters.
         *
         *     **Type 2:** Creating a new product given an existing `BrandId` and an existing `CategoryId`.
         *
         *     When creating a product, regardless of the type of request, if there is a need to create a new product with a specific custom product ID, specify the `Id` (integer) in the request body. Otherwise, VTEX will generate the ID automatically.
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Product's unique numerical identifier. If not informed, it will be automatically generated by VTEX.
                         * @example 42
                         */
                        Id?: number;
                        /**
                         * @description Product's name. Limited to 150 characters.
                         * @example Zoom Stefan Janoski Canvas RM SB Varsity Red
                         */
                        Name: string;
                        /**
                         * @description Path of categories associated with this product, from the highest level of category to the lowest level, separated by `/`. It is mandatory to use either this field or the `CategoryId` field.
                         * @example Mens/Clothing/T-Shirts
                         */
                        CategoryPath?: string;
                        /**
                         * @description Department ID according to the product's category.
                         * @example 1
                         */
                        DepartmentId?: number;
                        /**
                         * @description Name of the brand that will be associated with this product. It is mandatory to use either this field or the `BrandId` field. If you wish to create a new brand, that is, in case the brand does not exist yet, use this field instead of `BrandId`.
                         * @example Sample brand
                         */
                        BrandName?: string;
                        /**
                         * @description Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).
                         * @example stefan-janoski-canvas-varsity-red
                         */
                        LinkId?: string;
                        /**
                         * @description Product Reference Code.
                         * @example sr_1_90
                         */
                        RefId?: string;
                        /**
                         * @description Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.
                         * @example true
                         */
                        IsVisible?: boolean;
                        /**
                         * @description Product description.
                         * @example The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.
                         */
                        Description?: string;
                        /**
                         * @description Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.
                         * @example 2019-01-01T00:00:00
                         */
                        ReleaseDate?: string;
                        /**
                         * @description Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Zoom Stefan Janoski Canvas RM SB Varsity Red
                         */
                        Title?: string;
                        /**
                         * @description Activate (`true`) or inactivate (`false`) product.
                         * @example true
                         */
                        IsActive?: boolean;
                        /**
                         * @description Product tax code, used for tax calculation. This field is important for SEO. Limited to 150 characters.
                         * @example 12345
                         */
                        TaxCode?: string;
                        /**
                         * @description Brief description of the product for SEO. It is recommended not to exceed 150 characters.
                         * @example The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.
                         */
                        MetaTagDescription?: string;
                        /**
                         * @description If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.
                         * @example true
                         */
                        ShowWithoutStock?: boolean;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         * @example null
                         */
                        LomadeeCampaignCode?: string | null;
                        /**
                         * @description Value used to set the priority on the search result page.
                         * @example 1
                         */
                        Score?: number;
                    } | {
                        /**
                         * @description Product's unique numerical identifier. If not informed, it will be automatically generated by VTEX.
                         * @example 42
                         */
                        Id?: number;
                        /**
                         * @description Product's name. Limited to 150 characters.
                         * @example Zoom Stefan Janoski Canvas RM SB Varsity Red
                         */
                        Name: string;
                        /**
                         * @description Department ID according to the product's category.
                         * @example 1
                         */
                        DepartmentId?: number;
                        /**
                         * @description ID of an existing category that will be associated with this product. It is mandatory to use either this field or the `CategoryPath` field.
                         * @example 2000090
                         */
                        CategoryId?: number;
                        /**
                         * @description ID of an existing brand that will be associated with this product. It is mandatory to use either this field or the `BrandName` field.
                         * @example 12121219
                         */
                        BrandId?: number;
                        /**
                         * @description Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`).
                         * @example stefan-janoski-canvas-varsity-red
                         */
                        LinkId?: string;
                        /**
                         * @description Product Reference Code.
                         * @example sr_1_90
                         */
                        RefId?: string;
                        /**
                         * @description Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts.
                         * @example true
                         */
                        IsVisible?: boolean;
                        /**
                         * @description Product description.
                         * @example The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.
                         */
                        Description?: string;
                        /**
                         * @description Short product description. This information can be displayed on both the product page and the shelf, using the following controls:
                         *      Store Framework: `$product.DescriptionShort`.
                         *      Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`.
                         * @example The Nike Zoom Stefan Janoski is made with a premium leather.
                         */
                        DescriptionShort?: string;
                        /**
                         * @description Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections.
                         * @example 2019-01-01T00:00:00
                         */
                        ReleaseDate?: string;
                        /**
                         * @description Store Framework: Deprecated.
                         *     Legacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive.
                         * @example Zoom,Stefan,Janoski
                         */
                        KeyWords?: string;
                        /**
                         * @description Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Zoom Stefan Janoski Canvas RM SB Varsity Red
                         */
                        Title?: string;
                        /**
                         * @description Activate (`true`) or inactivate (`false`) product.
                         * @example true
                         */
                        IsActive?: boolean;
                        /**
                         * @description Product tax code, used for tax calculation. This field is important for SEO. Limited to 150 characters.
                         * @example 12345
                         */
                        TaxCode?: string;
                        /**
                         * @description Brief description of the product for SEO. It is recommended not to exceed 150 characters.
                         * @example The Nike Zoom Stefan Janoski Men's Shoe is made with a premium leather upper for superior durability and a flexible midsole for all-day comfort. A tacky gum rubber outsole delivers outstanding traction.
                         */
                        MetaTagDescription?: string;
                        /**
                         * @deprecated
                         * @description Deprecated field.
                         * @example null
                         */
                        SupplierId?: number | null;
                        /**
                         * @description If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock.
                         * @example true
                         */
                        ShowWithoutStock?: boolean;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         * @example null
                         */
                        AdWordsRemarketingCode?: string | null;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         * @example null
                         */
                        LomadeeCampaignCode?: string | null;
                        /**
                         * @description Value used to set the priority on the search result page.
                         * @example 1
                         */
                        Score?: number;
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
                            /** @description Product's unique numerical identifier. */
                            Id?: number;
                            /** @description Product's name. Limited to 150 characters. */
                            Name?: string;
                            /** @description Department ID according to the product's category. */
                            DepartmentId?: number;
                            /** @description Category ID associated with this product. */
                            CategoryId?: number;
                            /** @description Brand ID associated with this product. */
                            BrandId?: number;
                            /** @description Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`). */
                            LinkId?: string;
                            /** @description Product Reference Code. */
                            RefId?: string;
                            /** @description Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts. */
                            IsVisible?: boolean;
                            /** @description Product description. */
                            Description?: string;
                            /** @description Short product description. This information can be displayed on both the product page and the shelf, using the following controls:
                             *      Store Framework: `$product.DescriptionShort`.
                             *      Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`. */
                            DescriptionShort?: string;
                            /** @description Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections. */
                            ReleaseDate?: string;
                            /** @description Store Framework: Deprecated.
                             *     Legacy CMS Portal:  Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive. */
                            KeyWords?: string;
                            /** @description Product's title tag, which corresponds to the title of the product page, presented in the browser tab. This field is important for SEO. Limited to 150 characters. */
                            Title?: string;
                            /** @description Activate (`true`) or inactivate (`false`) product. */
                            IsActive?: boolean;
                            /** @description Product tax code, used for tax calculation. */
                            TaxCode?: string;
                            /** @description Brief description of the product for SEO. It's recommended that you don't exceed 150 characters. */
                            MetaTagDescription?: string;
                            /** @deprecated */
                            SupplierId?: number | null;
                            /** @description If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock. */
                            ShowWithoutStock?: boolean;
                            /**
                             * @deprecated
                             * @description This is a legacy field. Do not take this information into consideration.
                             */
                            AdWordsRemarketingCode?: string;
                            /**
                             * @deprecated
                             * @description This is a legacy field. Do not take this information into consideration.
                             */
                            LomadeeCampaignCode?: string;
                            /** @description Value used to set the priority on the search result page. */
                            Score?: number;
                        };
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
    "/api/catalog_system/pvt/products/{productId}/specification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product specifications by product ID
         * @description Retrieves all specifications of a product by the product's ID.
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProductSpecification"];
        put?: never;
        /**
         * Update product specification by product ID
         * @description Updates the value of a product specification by the product's ID. The specification's ID or name can be used to identify what product specification will be updated. specification fields must be previously created in your Catalog.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["UpdateProductSpecification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/product/{productId}/specification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product specifications and their information by product ID
         * @description Retrieves information of all specifications of a product by the product's ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProductSpecificationbyProductID"];
        put?: never;
        /**
         * Associate product specification
         * @description Associates a previously defined specification to a product.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Specification field ID.
                         * @example 19
                         */
                        FieldId: number;
                        /**
                         * @description Specification value ID. Mandatory for `FieldTypeId` `5`, `6` and `7`. Must not be used for any other Field types.
                         * @example 12
                         */
                        FieldValueId?: number;
                        /**
                         * @description Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`.
                         * @example Metal
                         */
                        Text?: string;
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
                            /** @description ID of the association of the specification and the product. This ID is used to update or delete the specification. */
                            Id?: number;
                            /** @description Product ID. */
                            ProductId?: number;
                            /** @description Specification field ID. */
                            FieldId?: number;
                            /** @description Specification value ID. Mandatory for `FieldTypeId` `5`, `6` and `7`. Must not be used for any other field types. */
                            FieldValueId?: number;
                            /** @description Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`. */
                            Text?: string;
                        };
                    };
                };
            };
        };
        /**
         * Delete all product specifications by product ID
         * @description Deletes all product specifications given a specific product ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeleteAllProductSpecifications"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/product/{productId}/specification/{specificationId}": {
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
         * Delete a product specification
         * @description Deletes a product specification given a product ID and a specification ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeleteaProductSpecification"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/product/{productId}/specificationvalue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Associate product specification using specification name and group name
         * @description Associates a specification to a product using specification name and group name. Automatically creates the informed group, specification and values if they had not been created before.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Product and SKU Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    /** @example {
                     *       "FieldName": "Material",
                     *       "GroupName": "Composition",
                     *       "RootLevelSpecification": true,
                     *       "FieldValues": [
                     *         "Cotton",
                     *         "Polyester"
                     *       ]
                     *     } */
                    "application/json": {
                        /**
                         * @description Specification name. Limited to 100 characters.
                         * @example Material
                         */
                        FieldName: string;
                        /**
                         * @description Group name.
                         * @example Composition
                         */
                        GroupName: string;
                        /**
                         * @description Root level specification.
                         * @example true
                         */
                        RootLevelSpecification: boolean;
                        /**
                         * @description Array of specification values.
                         * @example [
                         *       "Cotton",
                         *       "Polyester"
                         *     ]
                         */
                        FieldValues: string[];
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
                            /** @description ID of the association of the product and the specification. */
                            Id?: number;
                            /** @description Product ID. */
                            ProductId?: number;
                            /** @description Specification field ID. */
                            FieldId?: number;
                            /** @description Current specification value ID. */
                            FieldValueId?: number;
                            /** @description Current specification value text. */
                            Text?: string;
                        }[];
                    };
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
    "/api/catalog_system/pvt/sku/stockkeepingunitids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all SKU IDs
         * @description Retrieves the IDs of all SKUs in your store. Presents the results with page size and pagination.
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ListallSKUIDs"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sku/stockkeepingunitbyid/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU and context
         * @description Retrieves context of an SKU.
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SkuContext"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU by RefId
         * @description Retrieves information about a specific SKU by its `RefId`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query: {
                    /** @description SKU reference ID. */
                    RefId: string;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
                            /** @description SKU unique identifier. */
                            Id?: number;
                            /** @description ID of the product associated with this SKU. */
                            ProductId?: number;
                            /** @description Defines if the SKU is active (`true`) or not (`false`). */
                            IsActive?: boolean;
                            /** @description When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component. */
                            ActivateIfPossible?: boolean;
                            /** @description SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_. */
                            Name?: string;
                            /** @description Reference code used internally for organizational purposes. Must be unique. Required only if `Ean` is not informed, but can be used alongside `Ean` as well. */
                            RefId?: string;
                            /** @description EAN code. Required only if `RefId` is not informed, but can be used alongside `RefId` as well. */
                            Ean?: string;
                            /** @description Height used for shipping calculation. */
                            PackagedHeight?: number;
                            /** @description Length used for shipping calculation. */
                            PackagedLength?: number;
                            /** @description Width used for shipping calculation. */
                            PackagedWidth?: number;
                            /** @description Weight used for shipping calculation, in the measurement unit [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                            PackagedWeightKg?: number;
                            /** @description SKU real height. */
                            Height?: number;
                            /** @description SKU real length. */
                            Length?: number;
                            /** @description SKU real width. */
                            Width?: number;
                            /** @description Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                            WeightKg?: number;
                            /** @description [Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128). */
                            CubicWeight?: number;
                            /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
                            IsKit?: boolean;
                            /** @description Date and time of the SKU's creation. */
                            CreationDate?: string;
                            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
                            RewardValue?: number;
                            /** @description SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date. */
                            EstimatedDateArrival?: string | null;
                            /** @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code. */
                            ManufacturerCode?: string;
                            /**
                             * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
                             * @default 1
                             */
                            CommercialConditionId: number;
                            /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`. */
                            MeasurementUnit?: string;
                            /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
                            UnitMultiplier?: number;
                            /** @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
                            ModalType?: string | null;
                            /** @description Defines if kit components can be sold apart. */
                            KitItensSellApart?: boolean;
                            /** @description Videos URLs. */
                            Videos?: string[];
                        };
                    };
                };
            };
        };
        put?: never;
        /**
         * Create SKU
         * @description Creates a new SKU.
         *
         *     If there is a need to create a new SKU with a specific custom ID, specify the `Id` (integer) in the request. Otherwise, VTEX will generate the ID automatically.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description SKU unique identifier. If not informed, it will be automatically generated by VTEX.
                         * @example 1
                         */
                        Id?: number;
                        /**
                         * @description ID of the product associated with this SKU.
                         * @example 42
                         */
                        ProductId: number;
                        /**
                         * @description Defines if the SKU is active (`true`) or not (`false`). During SKU creation, do not set this field as `true` or you will receive a `400 Bad Request` error. You should activate the SKU afterwards, as explained in [Activating an SKU](https://developers.vtex.com/docs/guides/skus#activating-an-sku).
                         * @example false
                         */
                        IsActive?: boolean;
                        /**
                         * @description When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component. We recommend setting it to `true`, unless you plan to have an internal workflow to manually activate SKUs.
                         * @example true
                         */
                        ActivateIfPossible?: boolean;
                        /**
                         * @description SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_. Limited to 200 characters.
                         * @example Size 10
                         */
                        Name: string;
                        /**
                         * @description Reference code used internally for organizational purposes. Must be unique. Required only if `Ean` is not informed, but can be used alongside `Ean` as well.
                         * @example B096QW8Y8Z
                         */
                        RefId?: string;
                        /**
                         * @description EAN code. Required only if `RefId` is not informed, but can be used alongside `RefId` as well.
                         * @example 8949461894984
                         */
                        Ean?: string;
                        /**
                         * @description Height used for shipping calculation.
                         * @example 10
                         */
                        PackagedHeight: number;
                        /**
                         * @description Length used for shipping calculation.
                         * @example 10
                         */
                        PackagedLength: number;
                        /**
                         * @description Width used for shipping calculation.
                         * @example 10
                         */
                        PackagedWidth: number;
                        /**
                         * @description Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. Do not fill in this field with `0` or `null`, because this might result in shipping issues.
                         * @example 10
                         */
                        PackagedWeightKg: number;
                        /**
                         * @description SKU real height.
                         * @example 1
                         */
                        Height?: number;
                        /**
                         * @description SKU real length.
                         * @example 1
                         */
                        Length?: number;
                        /**
                         * @description SKU real width.
                         * @example 1
                         */
                        Width?: number;
                        /**
                         * @description Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.
                         * @example 1
                         */
                        WeightKg?: number;
                        /**
                         * @description [Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).
                         * @example 0.1667
                         */
                        CubicWeight?: number;
                        /**
                         * @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted.
                         * @example false
                         */
                        IsKit?: boolean;
                        /**
                         * @description Date and time of the SKU's creation.
                         * @example 2020-01-25T15:51:29.2614605
                         */
                        CreationDate?: string;
                        /**
                         * @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1.
                         * @example 1
                         */
                        RewardValue?: number;
                        /**
                         * @description To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.
                         * @example null
                         */
                        EstimatedDateArrival?: string | null;
                        /**
                         * @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code.
                         * @example 123
                         */
                        ManufacturerCode?: string;
                        /**
                         * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
                         * @default 1
                         */
                        CommercialConditionId: number;
                        /**
                         * @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`.
                         * @example un
                         */
                        MeasurementUnit?: string;
                        /**
                         * @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.
                         * @example 2
                         */
                        UnitMultiplier?: number;
                        /**
                         * @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).
                         * @example null
                         */
                        ModalType?: string | null;
                        /**
                         * @description Defines if kit components can be sold apart.
                         * @example false
                         */
                        KitItensSellApart?: boolean;
                        /**
                         * @description Videos URLs.
                         * @example [
                         *       "https://www.youtube.com/"
                         *     ]
                         */
                        Videos?: string[];
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
                            /** @description SKU unique identifier. */
                            Id?: number;
                            /** @description ID of the product associated with this SKU. */
                            ProductId?: number;
                            /** @description Defines if the SKU is active (`true`) or not (`false`). */
                            IsActive?: boolean;
                            /** @description When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component. */
                            ActivateIfPossible?: boolean;
                            /** @description SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_. */
                            Name?: string;
                            /** @description Reference code used internally for organizational purposes. Must be unique. Required only if `Ean` is not informed, but can be used alongside `Ean` as well. */
                            RefId?: string;
                            /** @description EAN code. Required only if `RefId` is not informed, but can be used alongside `RefId` as well. */
                            Ean?: string;
                            /** @description Height used for shipping calculation. */
                            PackagedHeight?: number;
                            /** @description Length used for shipping calculation. */
                            PackagedLength?: number;
                            /** @description Width used for shipping calculation. */
                            PackagedWidth?: number;
                            /** @description Weight used for shipping calculation, in the measurement unit [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                            PackagedWeightKg?: number;
                            /** @description SKU real height. */
                            Height?: number;
                            /** @description SKU real length. */
                            Length?: number;
                            /** @description SKU real width. */
                            Width?: number;
                            /** @description Weight of the SKU in the measurement unit [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                            WeightKg?: number;
                            /** @description [Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128). */
                            CubicWeight?: number;
                            /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
                            IsKit?: boolean;
                            /** @description Date and time of the SKU's creation. */
                            CreationDate?: string;
                            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
                            RewardValue?: number;
                            /** @description SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date. */
                            EstimatedDateArrival?: string | null;
                            /** @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code. */
                            ManufacturerCode?: string;
                            /**
                             * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
                             * @default 1
                             */
                            CommercialConditionId: number;
                            /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `'un'`. */
                            MeasurementUnit?: string;
                            /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
                            UnitMultiplier?: number;
                            /** @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
                            ModalType?: string | null;
                            /** @description Defines if kit components can be sold apart. */
                            KitItensSellApart?: boolean;
                            /** @description Videos URLs. */
                            Videos?: string[];
                        };
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
    "/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/{refId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU ID by reference ID
         * @description Retrieves an SKU ID by the SKU's reference ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SkuIdbyRefId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/{alternateId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU by alternate ID
         * @description Retrieves an SKU by its alternate ID, which can be the EAN or the reference ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SkubyAlternateId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sku/stockkeepingunitByProductId/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU list by product ID
         * @description Retrieves a list with the SKUs related to a product by the product's ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SkulistbyProductId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/sku/stockkeepingunitidsbyrefids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Retrieve SKU ID list by reference ID list
         * @description Given a list of reference IDs, this endpoint returns a list with the corresponding SKU IDs.
         *
         *     >⚠️ The list of reference IDs in the request body cannot have repeated reference IDs, or the API will return an error 500.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["SkuIdlistbyRefIdlist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU
         * @description Retrieves a specific SKU by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Sku"];
        /**
         * Update SKU
         * @description Updates an existing SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description ID of the product associated with this SKU.
                         * @example 42
                         */
                        ProductId: number;
                        /**
                         * @description Although the inclusion of the IsActive field is optional, not including it will result in the field's value being interpreted as null, leading to the deactivation of the SKU. When updating the integration with the Catalog, send (`true`) If you wish to make sure the SKU is active. Otherwise send (`false`).
                         * @example false
                         */
                        IsActive: boolean;
                        /**
                         * @description When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component.
                         * @example false
                         */
                        ActivateIfPossible?: boolean;
                        /**
                         * @description SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_.
                         * @example Size 10
                         */
                        Name: string;
                        /**
                         * @description Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided.
                         * @example B096QW8Y8Z
                         */
                        RefId?: string;
                        /**
                         * @description Height used for shipping calculation.
                         * @example 10
                         */
                        PackagedHeight: number;
                        /**
                         * @description Length used for shipping calculation.
                         * @example 10
                         */
                        PackagedLength: number;
                        /**
                         * @description Width used for shipping calculation.
                         * @example 10
                         */
                        PackagedWidth: number;
                        /**
                         * @description Weight used for shipping calculation, in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. Do not fill in this field with `0` or `null`, because this might result in shipping issues.
                         * @example 10
                         */
                        PackagedWeightKg: number;
                        /**
                         * @description SKU real height.
                         * @example 1
                         */
                        Height?: number;
                        /**
                         * @description SKU real length.
                         * @example 1
                         */
                        Length?: number;
                        /**
                         * @description SKU real width.
                         * @example 1
                         */
                        Width?: number;
                        /**
                         * @description Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams.
                         * @example 1
                         */
                        WeightKg?: number;
                        /**
                         * @description [Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).
                         * @example 0.1667
                         */
                        CubicWeight?: number;
                        /**
                         * @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted.
                         * @example false
                         */
                        IsKit?: boolean;
                        /**
                         * @description Date and time of the SKU's creation.
                         * @example 2020-01-25T15:51:00
                         */
                        CreationDate?: string;
                        /**
                         * @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1.
                         * @example 1
                         */
                        RewardValue?: number;
                        /**
                         * @description To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date.
                         * @example null
                         */
                        EstimatedDateArrival?: string | null;
                        /**
                         * @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code.
                         * @example 123
                         */
                        ManufacturerCode?: string;
                        /**
                         * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
                         * @example 1
                         */
                        CommercialConditionId?: number;
                        /**
                         * @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`.
                         * @example un
                         */
                        MeasurementUnit?: string;
                        /**
                         * @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward.
                         * @example 2
                         */
                        UnitMultiplier?: number;
                        /**
                         * @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy).
                         * @example null
                         */
                        ModalType?: string | null;
                        /**
                         * @description Defines if kit components can be sold apart.
                         * @example false
                         */
                        KitItensSellApart?: boolean;
                        /**
                         * @description Videos URLs.
                         * @example [
                         *       "https://www.youtube.com/"
                         *     ]
                         */
                        Videos?: string[];
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
                            /** @description SKU unique identifier. */
                            Id?: number;
                            /** @description ID of the product associated with this SKU. */
                            ProductId?: number;
                            /** @description Defines if the SKU is active (`true`) or not (`false`). */
                            IsActive?: boolean;
                            /** @description When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component. */
                            ActivateIfPossible?: boolean;
                            /** @description SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_. */
                            Name?: string;
                            /** @description Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided. */
                            RefId?: string;
                            /** @description Height used for shipping calculation. */
                            PackagedHeight?: number;
                            /** @description Length used for shipping calculation. */
                            PackagedLength?: number;
                            /** @description Width used for shipping calculation. */
                            PackagedWidth?: number;
                            /** @description Weight used for shipping calculation, in the measurement unit [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                            PackagedWeightKg?: number;
                            /** @description SKU real height. */
                            Height?: number;
                            /** @description SKU real length. */
                            Length?: number;
                            /** @description SKU real width. */
                            Width?: number;
                            /** @description Weight of the SKU in the measurement unit [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                            WeightKg?: number;
                            /** @description [Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128). */
                            CubicWeight?: number;
                            /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
                            IsKit?: boolean;
                            /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
                            CreationDate?: string;
                            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
                            RewardValue?: number;
                            /** @description SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date. */
                            EstimatedDateArrival?: string | null;
                            /** @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code. */
                            ManufacturerCode?: string;
                            /**
                             * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
                             * @default 1
                             */
                            CommercialConditionId: number;
                            /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`. */
                            MeasurementUnit?: string;
                            /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
                            UnitMultiplier?: number;
                            /** @description Links an unusual type of SKU that need special transportation, suach as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
                            ModalType?: string | null;
                            /** @description Defines if kit components can be sold apart. */
                            KitItensSellApart?: boolean;
                            /** @description Videos URLs. */
                            Videos?: string[];
                        };
                    };
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
    "/api/catalog/pvt/stockkeepingunit/{skuId}/complement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU complement by SKU ID
         * @description Retrieves an existing SKU complement by its SKU ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetSKUComplementbySKUID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/complement/{complementTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU complements by complement type ID
         * @description Retrieves all the existing SKU complements with the same complement type ID of a specific SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetSKUComplementsbyComplementTypeID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sku/complements/{parentSkuId}/{type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU complements by type
         * @description Retrieves all the existing SKU complements with the same complement type ID of a specific SKU and parent SKU ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetSKUcomplementsbytype"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skucomplement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create SKU complement
         * @description Creates a new SKU complement on a parent SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateSKUComplement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skucomplement/{skuComplementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU complement by SKU complement ID
         * @description Retrieves an existing SKU complement by its SKU complement ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetSKUComplementbySKUComplementID"];
        put?: never;
        post?: never;
        /**
         * Delete SKU complement by SKU complement ID
         * @description Deletes a previously existing SKU complement by SKU complement ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeleteSKUComplementbySKUComplementID"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sku/stockkeepingunitbyean/{ean}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU by EAN
         * @description Retrieves an SKU by its EAN ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SkubyEAN"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/ean": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get EAN by SKU ID
         * @description Retrieves the EAN of the SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
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
            };
        };
        put?: never;
        post?: never;
        /**
         * Delete all SKU EAN values
         * @description Deletes all EAN values of an SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/ean/{ean}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create SKU EAN
         * @description Creates or updates the EAN value of an SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                    /** @description EAN. */
                    ean: string;
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
        /**
         * Delete SKU EAN
         * @description Deletes the EAN value of an SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                    /** @description EAN number. */
                    ean: string;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skuattachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associate SKU attachment
         * @description Associates an existing SKU to an existing attachment.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Attachment ID.
                         * @example 1
                         */
                        AttachmentId: number;
                        /**
                         * @description Unique identifier of an SKU.
                         * @example 1
                         */
                        SkuId: number;
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
                            /** @description Identifier of the SKU's association to the attachment. */
                            Id?: number;
                            /** @description Attachment ID. */
                            AttachmentId?: number;
                            /** @description Unique identifier of the SKU. */
                            SkuId?: number;
                        };
                    };
                };
            };
        };
        /**
         * Dissociate attachments and SKUs
         * @description Dissociates attachments and SKUs based on an SKU ID or an attachment ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: {
                    /** @description SKU ID. By using this query param, you can dissociate all the attachments from an SKU based on its SKU ID. */
                    skuId?: number;
                    /** @description Attachment ID. By using this query param, you can dissociate the given attachment from all previously associated SKUs. */
                    attachmentId?: number;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/attachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU attachments by SKU ID
         * @description Retrieves existing SKU attachments by SKU ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU unique identifier. */
                    skuId: number;
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
                            /** @description Identifier of the SKU's association to the attachment. */
                            Id?: number;
                            /** @description Attachment ID. */
                            AttachmentId?: number;
                            /** @description Unique identifier of the SKU. */
                            SkuId?: number;
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
    "/api/catalog/pvt/skuattachment/{skuAttachmentAssociationId}": {
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
         * Delete SKU attachment by attachment association ID
         * @description Deletes the association of an SKU to an attachment.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description ID of the association between the attachment and the SKU, which corresponds to the `Id` in the response body of the [Associate SKU attachment](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-post-sku-attachment) and the [Get SKU attachment by SKU ID](https://developers.vtex.com/vtex-rest-api/reference/get_api-catalog-pvt-stockkeepingunit-skuid-attachment) endpoints. */
                    skuAttachmentAssociationId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sku/associateattachments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associate attachments to an SKU
         * @description Associates attachments to an SKU based on a given SKU ID and attachment names.
         *
        This request removes existing SKU attachment associations and recreates the associations with the attachments being sent.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AssociateattachmentstoSKU"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU files
         * @description Retrieves general information about all files in the SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
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
                            /** @description Unique identifier of the association of the image to the SKU. */
                            Id?: number;
                            /** @description Unique identifier of the image. */
                            ArchiveId?: number;
                            /** @description Unique identifier of the SKU. */
                            SkuId?: number;
                            /** @description Image name. */
                            Name?: string;
                            /** @description Defines if the image is the main image of the SKU. */
                            IsMain?: boolean;
                            /** @description Image label. */
                            Label?: string | null;
                        }[];
                    };
                };
            };
        };
        put?: never;
        /**
         * Create SKU file
         * @description Creates a new image for an SKU based on its URL or on a form-data request body.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SKUFileURL"];
                    "form-data": components["schemas"]["SKUFile"];
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
                            /** @description ID of the association of the SKU and the image (`SkuFileId`). This is the ID that is used to update or delete it. */
                            Id?: number;
                            /** @description Unique identifier of the image file. */
                            ArchiveId?: number;
                            /** @description SKU ID. */
                            SkuId?: number;
                            /** @description Set the image as the main image for the product. */
                            IsMain?: boolean;
                            /** @description Image label. */
                            Label?: string;
                        };
                    };
                };
            };
        };
        /**
         * Delete all SKU files
         * @description Deletes all SKU image files.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/file/{skuFileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update SKU file
         * @description Updates a new image on an SKU based on its URL or on a form-data request body.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                    /** @description ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU file](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field. */
                    skuFileId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SKUFileURL"];
                    "form-data": components["schemas"]["SKUFile"];
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
                            /** @description ID of the association of the SKU and the image (`SkuFileId`). This is the ID that is used to update or delete it. */
                            Id?: number;
                            /** @description Unique identifier of the image file. */
                            ArchiveId?: number;
                            /** @description SKU ID. */
                            SkuId?: number;
                            /** @description Set the image as the main image for the product. */
                            IsMain?: boolean;
                            /** @description Image label. */
                            Label?: string;
                        };
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete SKU image file
         * @description Deletes a specific SKU image file.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                    /** @description ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU file](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field. */
                    skuFileId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/copy/{skuIdfrom}/{skuIdto}/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Copy files from an SKU to another SKU
         * @description Copy all existing files from an SKU to another SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description __Origin__ SKU's unique numerical identifier. */
                    skuIdfrom: number;
                    /** @description __Target__ SKU's unique numerical identifier. */
                    skuIdto: number;
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
                            /** @description Unique identifier of the association of the image to the SKU. */
                            Id?: number;
                            /** @description Unique identifier of the image file. */
                            ArchiveId?: number;
                            /** @description Unique identifier of the SKU. */
                            SkuId?: number;
                            /** @description Defines if the image is the main image of the SKU. */
                            IsMain?: boolean;
                            /** @description Image label. */
                            Label?: string | null;
                        }[];
                    };
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
    "/api/catalog/pvt/stockkeepingunit/disassociate/{skuId}/file/{skuFileId}": {
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
         * Disassociate SKU file
         * @description Disassociates an SKU file from an SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                    /** @description ID of the association of the SKU and the image, which can be obtained by placing a request to the [Get SKU file](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file) endpoint and copying the `Id` field. */
                    skuFileId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunitkit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU kit by SKU ID or Parent SKU ID
         * @description Retrieves general information about the components of an SKU kit by SKU ID or Parent SKU ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Miscellaneous | **SKU Bundles** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: {
                    /** @description SKU's unique numerical identifier. */
                    skuId?: number;
                    /** @description Parent SKU's unique numerical identifier. */
                    parentSkuId?: number;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
                        "application/json": components["schemas"]["SkuKit"];
                    };
                };
            };
        };
        put?: never;
        /**
         * Create SKU kit
         * @description Adds a component to a specific kit.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Miscellaneous | **SKU Bundles** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description SKU ID of the SKU kit.
                         * @example 31018373
                         */
                        StockKeepingUnitParent: number;
                        /**
                         * @description Component SKU ID.
                         * @example 31018374
                         */
                        StockKeepingUnitId: number;
                        /**
                         * @description Component quantity.
                         * @example 3
                         */
                        Quantity: number;
                        /**
                         * @description Component price per unit.
                         * @example 15.5
                         */
                        UnitPrice: number;
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
                        "application/json": components["schemas"]["SkuKit"];
                    };
                };
            };
        };
        /**
         * Delete SKU kit by SKU ID or parent SKU ID
         * @description Deletes all kit's components based on the parent SKU ID or deletes a specific kit's component based on the SKU ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Miscellaneous | **SKU Bundles** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: {
                    /** @description SKU's unique numerical identifier. */
                    skuId?: number;
                    /** @description Parent SKU's unique numerical identifier. */
                    parentSkuId?: number;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunitkit/{kitId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU kit
         * @description Retrieves general information about a component of a kit.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Miscellaneous | **SKU Bundles** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Kit's unique numerical identifier */
                    kitId: number;
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
                        "application/json": components["schemas"]["SkuKit"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Delete SKU kit by kit ID
         * @description Deletes a specific kit's component based on its kit ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Miscellaneous | **SKU Bundles** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Kit's unique numerical identifier. */
                    kitId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get details of a seller's SKU
         * @description  > ⚠️ Check out the updated version of this endpoint in our [SKU Bindings API documentation](https://developers.vtex.com/docs/api-reference/sku-bindings-api#get-/sku-binding/pvt/skuseller/-sellerId-/-sellerSkuId-). If you are doing this integration for the first time, we recommend that you follow the updated documentation.
         *
         *     Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Marketplace | **Seller SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetSKUseller"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove a seller's SKU binding
         * @description  > ⚠️ Check out the updated version of this endpoint in our [SKU Bindings API documentation](https://developers.vtex.com/docs/api-reference/sku-bindings-api#post-/sku-binding/pvt/skuseller/remove/-sellerId-/-sellerSkuId-). If you are doing this integration for the first time, we recommend that you follow the updated documentation.
         *
         *     Remove a seller's SKU binding, given the seller ID and the SKU ID in the seller's store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Marketplace | **Seller SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["DeleteSKUsellerassociation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change notification with seller ID and seller SKU ID
         * @description  > ⚠️ Check out the updated version of this endpoint in our [SKU Bindings API documentation](https://developers.vtex.com/docs/api-reference/sku-bindings-api#post-/sku-binding/pvt/skuseller/changenotification/-sellerId-/-sellerSkuId-). If you are doing this integration for the first time, we recommend that you follow the updated documentation.
         *
         *     The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
         *
         *     With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.
         *
         *     There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.
         *
         *     Both information are passed through the request URL. The body of the request should be empty.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Marketplace | **Seller SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                    sellerId: string;
                    /** @description ID of the binding of the seller with the SKU. */
                    sellerSkuId: string;
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/skuseller/changenotification/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change notification with SKU ID
         * @description  > ⚠️ Check out the updated version of this endpoint in our [SKU Bindings API documentation](https://developers.vtex.com/docs/api-reference/sku-bindings-api#post-/sku-binding/pvt/skuseller/changenotification/-skuId-). If you are doing this integration for the first time, we recommend that you follow the updated documentation.
         *
         *     The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
         *
         *     With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like its name or description, or that this is a new SKU that the seller would like to offer to the marketplace. The body of the request should be empty.
         *
         *      > ⚠️ Do not use this endpoint for price and inventory changes, because these types of updates should be notified using Marketplace API. For price changes, we recommend using the [Notify marketplace of price update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price) endpoint. For inventory changes, use [Notify marketplace of inventory update](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory).
         *
         *     ## Example
         *
         *     Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.
         *
         *     In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.
         *
         *     ```
         *     https://{{accountName}}.vtexcommercestable.com.br/api/catalog_system/pvt/skuseller/changenotification/123/700
         *     ```
         *
         *     ## Response codes
         *
         *     The following response codes are possible for this request.
         *
         *     * **404:** the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`". This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
         *     * **200:** the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
         *     * **429:** Failure due to too many requests.
         *     * **403:** Failure in the authentication.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Marketplace | **Seller SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["ChangeNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skuservice/{skuServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU service
         * @description Retrieves an SKU service.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service unique identifier. */
                    skuServiceId: number;
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
                        "application/json": components["schemas"]["SKUService"];
                    };
                };
            };
        };
        /**
         * Update SKU service
         * @description Updates an SKU service.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service unique identifier. */
                    skuServiceId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description SKU service type ID.
                         * @example 2
                         */
                        SkuServiceTypeId: number;
                        /**
                         * @description SKU service value ID.
                         * @example 1
                         */
                        SkuServiceValueId: number;
                        /**
                         * @description SKU ID.
                         * @example 1
                         */
                        SkuId: number;
                        /**
                         * @description SKU service name. Maximum of 50 characters.
                         * @example Test name
                         */
                        Name: string;
                        /**
                         * @description Internal description for the SKU service. Maximum of 100 characters.
                         * @example Text
                         */
                        Text: string;
                        /**
                         * @description Defines if the SKU service is active or not.
                         * @example true
                         */
                        IsActive: boolean;
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
                        "application/json": components["schemas"]["SKUService"];
                    };
                };
            };
        };
        post?: never;
        /**
         * Dissociate SKU service
         * @description Dissociates an SKU service from an SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service unique identifier. */
                    skuServiceId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skuservice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associate SKU service
         * @description Associates an SKU service to an SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description SKU service type ID.
                         * @example 1
                         */
                        SkuServiceTypeId: number;
                        /**
                         * @description SKU service value ID.
                         * @example 1
                         */
                        SkuServiceValueId: number;
                        /**
                         * @description SKU ID.
                         * @example 1
                         */
                        SkuId: number;
                        /**
                         * @description SKU service name. Maximum of 50 characters.
                         * @example Engraving
                         */
                        Name: string;
                        /**
                         * @description Internal description of the SKU service. Maximum of 100 characters.
                         * @example Name engraving additional service.
                         */
                        Text: string;
                        /**
                         * @description Defines if the SKU service is active or not.
                         * @example true
                         */
                        IsActive: boolean;
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
                        "application/json": components["schemas"]["SKUService"];
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
    "/api/catalog/pvt/skuservicetypeattachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associate SKU service attachment
         * @description Associates an Attachment for an existing SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Attachment ID.
                         * @example 1
                         */
                        AttachmentId: number;
                        /**
                         * @description SKU service type ID.
                         * @example 1
                         */
                        SkuServiceTypeId: number;
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
                            /** @description SKU service type attachment association ID. */
                            Id?: number;
                            /** @description Attachment ID. */
                            AttachmentId?: number;
                            /** @description SKU service type ID. */
                            SkuServiceTypeId?: number;
                        };
                    };
                };
            };
        };
        /**
         * Dissociate attachment by attachment ID or SKU service type ID
         * @description Dissociates an attachment by its attachment ID or SKU service type ID from an SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: {
                    /** @description SKU service attachment unique identifier. */
                    attachmentId?: number;
                    /** @description SKU service type unique identifier. */
                    skuServiceTypeId?: number;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skuservicetypeattachment/{skuServiceTypeAttachmentId}": {
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
         * Dissociate Attachment from SKU service type
         * @description Dissociates an Attachment from an SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service attachment unique identifier. */
                    skuServiceTypeAttachmentId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skuservicetype": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create SKU service type
         * @description Creates a new SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU type management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SKUServiceTypeRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SKUServiceTypeResponse"];
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
    "/api/catalog/pvt/skuservicetype/{skuServiceTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU service type
         * @description Retrieves information about an existing SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU type management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service type unique identifier. */
                    skuServiceTypeId: number;
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
                        "application/json": components["schemas"]["SKUServiceTypeResponse"];
                    };
                };
            };
        };
        /**
         * Update SKU service type
         * @description Updates an existing SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU type management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service type unique identifier. */
                    skuServiceTypeId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SKUServiceTypeRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SKUServiceTypeResponse"];
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete SKU service type
         * @description Deletes an existing SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU type management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service type unique identifier. */
                    skuServiceTypeId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/skuservicevalue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create SKU service value
         * @description Creates an SKU service value for an existing SKU service type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SKUServiceValueRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SKUServiceValueResponse"];
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
    "/api/catalog/pvt/skuservicevalue/{skuServiceValueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU service value
         * @description Retrieves an existing SKU service value.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service value unique identifier. */
                    skuServiceValueId: number;
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
                        "application/json": components["schemas"]["SKUServiceValueResponse"];
                    };
                };
            };
        };
        /**
         * Update SKU service value
         * @description Updates an existing SKU service value.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service value unique identifier. */
                    skuServiceValueId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SKUServiceValueRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SKUServiceValueResponse"];
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete SKU service value
         * @description Deletes an existing SKU service value.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU Services** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU service value unique identifier. */
                    skuServiceValueId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/specification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU specifications
         * @description Retrieves information about an SKU's specifications.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
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
                        "application/json": components["schemas"]["SKUSpecificationResponse"][];
                    };
                };
            };
        };
        /**
         * Update SKU specification
         * @description Updates an existing specification on an existing SKU. This endpoint only updates the `FieldValueId`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Specification and SKU association unique identifier. This field cannot be updated.
                         * @example 65
                         */
                        Id: number;
                        /**
                         * @description SKU unique identifier. This field cannot be updated.
                         * @example 21
                         */
                        SkuId?: number;
                        /**
                         * @description Specification field unique identifier. This field cannot be updated.
                         * @example 32
                         */
                        FieldId: number;
                        /**
                         * @description Specification value unique identifier. This field can only be updated with other values of the same `FieldId`.
                         * @example 131
                         */
                        FieldValueId: number;
                        /**
                         * @description Specification value name. This field is automatically updated if the `FieldValue` is updated. Otherwise, the value cannot be modified.
                         * @example Red
                         */
                        Text?: string;
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
                        "application/json": components["schemas"]["SKUSpecificationResponse"][];
                    };
                };
            };
        };
        /**
         * Associate SKU specification
         * @description Associates a previously created specification to an SKU.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Specification field ID.
                         * @example 13
                         */
                        FieldId: number;
                        /**
                         * @description Specification value ID. Required only for `FieldTypeId` as `5`, `6` and `7`.
                         * @example 101
                         */
                        FieldValueId?: number;
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
                        "application/json": components["schemas"]["SKUSpecificationResponse"];
                    };
                };
            };
        };
        /**
         * Delete all SKU specifications
         * @description Deletes all SKU specifications.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/specification/{specificationId}": {
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
         * Delete SKU specification
         * @description Deletes a specific SKU specification.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                    /** @description Specification's unique numerical identifier. */
                    specificationId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/stockkeepingunit/{skuId}/specificationvalue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Associate SKU specification using specification name and group name
         * @description Associates a specification to an SKU using specification name and group name. Automatically creates the informed group, specification and values if they had not been created before.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **SKUs** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Specification name. Limited to 100 characters.
                         * @example Material
                         */
                        FieldName: string;
                        /**
                         * @description Group name.
                         * @example Composition
                         */
                        GroupName: string;
                        /**
                         * @description Root level specification.
                         * @example true
                         */
                        RootLevelSpecification: boolean;
                        /**
                         * @description Array of specification values. SKU specifications must contain only one value.
                         * @example [
                         *       "M"
                         *     ]
                         */
                        FieldValues: string[];
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
                            /** @description ID of the association of the SKU and the specification. */
                            Id?: number;
                            /** @description SKU ID. */
                            SkuId?: number;
                            /** @description Specification field ID. */
                            FieldId?: number;
                            /** @description Current specification value ID. */
                            FieldValueId?: number;
                            /** @description Current specification value text. */
                            Text?: string;
                        }[];
                    };
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
    "/api/catalog/pvt/subcollection/{subCollectionId}/stockkeepingunit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add SKU to subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Associates a single SKU to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection'''s unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Unique identifier of an SKU.
                         * @example 1
                         */
                        SkuId: number;
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
                            /**
                             * @description Subcollection's unique numerical identifier.
                             * @example 17
                             */
                            SubCollectionId?: number;
                            /**
                             * @description Unique identifier of the SKU.
                             * @example 1
                             */
                            SkuId?: number;
                        };
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
    "/api/catalog/pvt/subcollection/{subCollectionId}/stockkeepingunit/{skuId}": {
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
         * Delete SKU from subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Deletes an SKU from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection'''s unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/category/tree/{categoryLevels}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get category tree
         * @description Retrieves the category tree of your store. Get all the category levels registered in the Catalog or define the level up to which you want to get.
         *     > 📘 Onboarding guide
         *     >
         *     > Check the new [Catalog onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/catalog-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Catalog and is organized by focusing on the developer's journey.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Category** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["CategoryTree"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/category/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get category by ID
         * @description Retrieves general information about a category.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Categories Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Category's unique numerical identifier. */
                    categoryId: number;
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
                        "application/json": components["schemas"]["Category"];
                    };
                };
            };
        };
        /**
         * Update category
         * @description Updates a previously existing category.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Categories Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Category's unique numerical identifier. */
                    categoryId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Category name.
                         * @example Home Appliances
                         */
                        Name: string;
                        /**
                         * @description Substitute words for the category.
                         * @example Kitchen, Laundry, Appliances
                         */
                        Keywords: string;
                        /**
                         * @description Text used in title tag for category page.
                         * @example Home Appliances
                         */
                        Title: string;
                        /**
                         * @description Text used in meta description tag for category page.
                         * @example Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.
                         */
                        Description: string;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         * @example Sale
                         */
                        AdWordsRemarketingCode: string | null;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         * @example Sale
                         */
                        LomadeeCampaignCode: string | null;
                        /**
                         * @description ID of the parent category, apply in case of category and subcategory.
                         * @example 2
                         */
                        FatherCategoryId: number | null;
                        /**
                         * @description Google global category ID.
                         * @example 222
                         */
                        GlobalCategoryId: number;
                        /**
                         * @description If true, the category is shown in the top and side menu.
                         * @example true
                         */
                        ShowInStoreFront: boolean;
                        /**
                         * @description If true, the category page becomes available in store.
                         * @example true
                         */
                        IsActive: boolean;
                        /**
                         * @description If true, the category link becomes active in store.
                         * @example true
                         */
                        ActiveStoreFrontLink: boolean;
                        /**
                         * @description If true, the category page displays a brand filter.
                         * @example true
                         */
                        ShowBrandFilter: boolean;
                        /**
                         * @description Score for search sorting order.
                         * @example 3
                         */
                        Score: number;
                        /**
                         * @description Defines how the SKU will be exhibited
                         * @example SPECIFICATION
                         */
                        StockKeepingUnitSelectionMode: string;
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
                        "application/json": components["schemas"]["Category"];
                    };
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
    "/api/catalog/pvt/category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create category
         * @description Creates a new category.
         *
         *     If there is a need to create a new category with a specific custom ID, specify the `Id` (integer) in the request. Otherwise, VTEX will generate the ID automatically.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Categories Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateCategoryRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Category"];
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
    "/api/catalog/pvt/product/{productId}/similarcategory/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get similar categories
         * @description Retrieves similar categories from a product.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Similar Category** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
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
                             * @description Product ID.
                             * @example 1
                             */
                            ProductId?: number;
                            /**
                             * @description Similar category ID.
                             * @example 20
                             */
                            CategoryId?: number;
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
    "/api/catalog/pvt/product/{productId}/similarcategory/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add similar category
         * @description Adds a similar category to a product.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Similar Categories Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
                    /** @description Similar category's unique numerical identifier. */
                    categoryId: number;
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
                             * @description Product ID.
                             * @example 1
                             */
                            ProductId?: number;
                            /**
                             * @description Trade policy ID.
                             * @example 1
                             */
                            StoreId?: number;
                        };
                    };
                };
            };
        };
        /**
         * Delete similar category
         * @description Deletes a similar category from a product.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Similar Categories Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
                    /** @description Similar category's unique numerical identifier. */
                    categoryId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/specification/field/listByCategoryId/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specifications by category ID
         * @description Retrieves all specifications from a category by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Groups** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SpecificationsByCategoryId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/specification/field/listTreeByCategoryId/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specifications tree by category ID
         * @description Lists all specifications including the current category and the level zero specifications from a category by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Groups** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SpecificationsTreeByCategoryId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/subcollection/{subCollectionId}/category": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associate category to subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Associates a single category to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection's unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Unique identifier of a category.
                         * @example 0
                         */
                        CategoryId: number;
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
                            /**
                             * @description Subcollection's unique numerical identifier.
                             * @example 17
                             */
                            SubCollectionId?: number;
                            /**
                             * @description Unique identifier of the category.
                             * @example 1
                             */
                            CategoryId?: number;
                        };
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
    "/api/catalog/pvt/subcollection/{subCollectionId}/brand/{categoryId}": {
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
         * Delete category from Subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Deletes a category from a subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection's unique numerical identifier, which can be obtained by placing a request to [Get subcollection by dollection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
                    /** @description Category's unique numerical identifier. */
                    categoryId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/brand/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get brand list
         * @description Retrieves all brands registered in the store's Catalog.
         *     >⚠️ This route's response is limited to 20k results. If you need to obtain more results, please use the [Get paginated brand list](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-brand-list) endpoint instead to get a paginated response.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Brands** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["BrandList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/brand/pagedlist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get paginated brand list
         * @description Retrieves all brands registered in the store's Catalog by page number.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Brands** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["BrandListPerPage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/brand/{brandId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get brand by ID
         * @description Retrieves a specific brand by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Brands** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Brand"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/brand": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create brand
         * @description Creates a new brand.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Brands Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["BrandCreateUpdate"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BrandCreateUpdate"];
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
    "/api/catalog/pvt/brand/{brandId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get brand and context
         * @description Retrieves information about a specific brand and its context.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Brand Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Brand ID. */
                    brandId: string;
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
                        "application/json": components["schemas"]["BrandCreateUpdate"];
                    };
                };
            };
        };
        /**
         * Update brand
         * @description Updates a previously existing brand.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Brand Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Brand's unique numerical identifier. */
                    brandId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["BrandCreateUpdate"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BrandCreateUpdate"];
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete brand
         * @description Deletes an existing brand.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Brand Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Brand's unique numerical identifier. */
                    brandId: string;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/subcollection/{subCollectionId}/brand": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associate brand to subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Associates a single brand to a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a  Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection's unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Unique identifier of a brand.
                         * @example 2000000
                         */
                        BrandId: number;
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
                            /**
                             * @description Subcollection's unique numerical identifier.
                             * @example 17
                             */
                            SubCollectionId?: number;
                            /**
                             * @description Unique identifier of the brand.
                             * @example 2000000
                             */
                            BrandId?: number;
                        };
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
    "/api/catalog/pvt/subcollection/{subCollectionId}/brand/{brandId}": {
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
         * Delete brand from subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Deletes a brand from a Subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection's unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
                    /** @description Brand's unique numerical identifier. */
                    brandId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/attachment/{attachmentid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get attachment by ID
         * @description Gets information about a registered attachment.
         *      >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Attachment ID. */
                    attachmentid: string;
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
                        "application/json": components["schemas"]["AttachmentResponse"];
                    };
                };
            };
        };
        /**
         * Update attachment
         * @description Updates a previously existing SKU attachment with new information.
         *      >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Attachment ID. */
                    attachmentid: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["AttachmentRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AttachmentResponse"];
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete attachment
         * @description Deletes a previously existing SKU attachment.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Attachment ID. */
                    attachmentid: string;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/attachment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create attachment
         * @description Creates a new SKU attachment.
         *      >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["AttachmentRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AttachmentResponse"];
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
    "/api/catalog/pvt/attachments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all attachments
         * @description Retrieves information about all registered attachments.
         *      >⚠️ To understand the specific syntax for Assembly Options attachments, read the [Assembly Options](https://help.vtex.com/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH#assembly-options-syntax) documentation.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Configuration | **CMS Management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
                            /**
                             * @description Current page of results.
                             * @example 1
                             */
                            Page?: number;
                            /**
                             * @description Total number of results in the current page.
                             * @example 11
                             */
                            Size?: number;
                            /**
                             * @description Total number of rows with results.
                             * @example 11
                             */
                            TotalRows?: number;
                            /**
                             * @description Total number of pages with results.
                             * @example 1
                             */
                            TotalPage?: number;
                            /** @description Array containing attachments data. */
                            Data?: components["schemas"]["AttachmentResponse"][];
                        };
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
    "/api/catalog_system/pvt/collection/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all collections
         * @description Retrieves a list of all collections matching a filter.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GET-AllCollections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection/inactive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all inactive collections
         * @description Retrieves a list of Collection IDs of the inactive collections.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GET-AllInactiveCollections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Collection
         * @description Creates a new collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["POST-CreateCollection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/collection/search/{searchTerms}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Collections by search terms
         * @description Retrieves a list of collections matching a filter.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GET-Collectionsbyseachterms"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection/stockkeepingunit/importfileexample": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Import collection file example
         * @description Imports a sample of the imported XLS file. You need to save the response file to your device.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GET-Importfileexample"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection/{collectionId}/stockkeepingunit/importinsert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add products to collection by imported file
         * @description Adds products to a collection from the request body file. The file must be an imported template.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Marketing | **Product Collections XML** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["POST-Addproductsbyimportfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection/{collectionId}/stockkeepingunit/importexclude": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove products from collection by imported file
         * @description Removes products from a collection from the request body file. The file must be an imported template.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["POST-Removeproductsbyimportfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection/{collectionId}/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get products from a collection
         * @description Retrieves information about the products from a collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GET-Productsfromacollection"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection/{collectionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get collection by ID
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Retrieves general information of a Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Collection's unique numerical identifier. */
                    collectionId: number;
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
                            /** @description Collection ID. */
                            Id?: number;
                            /** @description Collection name. */
                            Name?: string;
                            /** @description Collection description. */
                            Description?: string | null;
                            /** @description Defines if the collection is searchable or not. */
                            Searchable?: boolean;
                            /** @description Defines if the collection is highlighted or not. */
                            Highlight?: boolean;
                            /** @description Initial value date for the collection. */
                            DateFrom?: string;
                            /** @description Final value date for the collection. */
                            DateTo?: string;
                            /** @description Total quantity of products in the collection. */
                            TotalProducts?: number;
                            /** @description [Type of the collection](https://help.vtex.com/en/tutorial/collection-types--5tKnhh8tMGIrVL7Fqirq7n). */
                            Type?: string;
                        };
                    };
                };
            };
        };
        /**
         * Update Collection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Updates a previously created Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Collection's unique numerical identifier. */
                    collectionId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Collection name.
                         * @example Test
                         */
                        Name: string;
                        /**
                         * @description Defines if the collection is searchable or not.
                         * @example true
                         */
                        Searchable: boolean;
                        /**
                         * @description Defines if the collection is highlighted or not.
                         * @example false
                         */
                        Highlight: boolean;
                        /**
                         * @description Initial value date for the collection.
                         * @example 2017-09-27T10:47:00
                         */
                        DateFrom: string;
                        /**
                         * @description Final value date for the collection.
                         * @example 2017-09-27T10:47:00
                         */
                        DateTo: string;
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
                            /** @description Collection ID. */
                            Id?: number;
                            /** @description Collection name. */
                            Name?: string;
                            /** @description Collection description. */
                            Description?: string | null;
                            /** @description Defines if the collection is searchable or not. */
                            Searchable?: boolean;
                            /** @description Defines if the collection is highlighted or not. */
                            Highlight?: boolean;
                            /** @description Initial value date for the collection. */
                            DateFrom?: string;
                            /** @description Final value date for the collection. */
                            DateTo?: string;
                            /** @description Total quantity of products in the collection. */
                            TotalProducts?: number;
                            /** @description [Type of the collection](https://help.vtex.com/en/tutorial/collection-types--5tKnhh8tMGIrVL7Fqirq7n). */
                            Type?: string;
                        };
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete Collection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Deletes a previously existing Collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Collection's unique numerical identifier. */
                    collectionId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/collection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create collection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Creates a new collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Collection name.
                         * @example Test
                         */
                        Name: string;
                        /**
                         * @description Defines if the collection is searchable or not.
                         * @example true
                         */
                        Searchable: boolean;
                        /**
                         * @description Defines if the collection is highlighted or not.
                         * @example false
                         */
                        Highlight: boolean;
                        /**
                         * @description Initial value date for the collection.
                         * @example 2017-09-27T10:47:00
                         */
                        DateFrom: string;
                        /**
                         * @description Final value date for the collection.
                         * @example 2017-09-27T10:47:00
                         */
                        DateTo: string;
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
                            /** @description Collection ID. */
                            Id?: number;
                            /** @description Collection name. */
                            Name?: string;
                            /** @description Collection description. */
                            Description?: string | null;
                            /** @description Defines if the collection is searchable or not. */
                            Searchable?: boolean;
                            /** @description Defines if the collection is highlighted or not. */
                            Highlight?: boolean;
                            /** @description Initial value date for the collection. */
                            DateFrom?: string;
                            /** @description Final value date for the collection. */
                            DateTo?: string;
                            /** @description Total quantity of products in the collection. */
                            TotalProducts?: number;
                            /** @description [Type of the collection](https://help.vtex.com/en/tutorial/collection-types--5tKnhh8tMGIrVL7Fqirq7n). */
                            Type?: string;
                        };
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
    "/api/catalog/pvt/collection/{collectionId}/subcollection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subcollection by collection ID
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Retrieves all subcollections given a collection ID. A subcollection is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Collection's unique numerical identifier. */
                    collectionId: number;
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
                            /** @description Subcollection ID. */
                            Id?: number;
                            /** @description Collection ID. */
                            CollectionId?: number;
                            /** @description SubCollection name. */
                            Name?: string;
                            /** @description Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used). */
                            Type?: string;
                            /** @description Defines if the collection is on PreSale. */
                            PreSale?: boolean;
                            /** @description Defines if the collection is a new released one. */
                            Release?: boolean;
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
    "/api/catalog/pvt/subcollection/{subCollectionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get subcollection by subcollection ID
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Retrieves information about a subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Read Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection's unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
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
                            /** @description Subcollection ID. */
                            Id?: number;
                            /** @description Collection ID. */
                            CollectionId?: number;
                            /** @description Subcollection name. */
                            Name?: string;
                            /** @description Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used). */
                            Type?: string;
                            /** @description Defines if the collection is on PreSale. */
                            PreSale?: boolean;
                            /** @description Defines if the collection is a new released one. */
                            Release?: boolean;
                        };
                    };
                };
            };
        };
        /**
         * Update subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Updates a previously created subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection's unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Collection ID.
                         * @example 17
                         */
                        CollectionId: number;
                        /**
                         * @description SubCollection name.
                         * @example group 1
                         */
                        Name: string;
                        /**
                         * @description Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).
                         * @example Inclusive
                         */
                        Type: string;
                        /**
                         * @description Defines PreSale date.
                         * @example false
                         */
                        PreSale: boolean;
                        /**
                         * @description Defines Release date.
                         * @example false
                         */
                        Release: boolean;
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
                            /** @description Subcollection ID. */
                            Id?: number;
                            /** @description Collection ID. */
                            CollectionId?: number;
                            /** @description Subcollection name. */
                            Name?: string;
                            /** @description Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used). */
                            Type?: string;
                            /** @description Defines if the collection is on PreSale. */
                            PreSale?: boolean;
                            /** @description Defines if the collection is a new released one. */
                            Release?: boolean;
                        };
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Deletes a previously created subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Subcollection's unique numerical identifier, which can be obtained by placing a request to [Get subcollection by collection ID](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-subcollection-collectionid). */
                    subCollectionId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/subcollection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Creates a new subcollection, which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a collection. A subcollection can be either “Exclusive” (all the products contained in it will not be used) or “Inclusive” (all the products contained in it will be used).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Subcollection ID.
                         * @example 17
                         */
                        CollectionId: number;
                        /**
                         * @description Subcollection name.
                         * @example group 1
                         */
                        Name: string;
                        /**
                         * @description Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used).
                         * @example Inclusive
                         */
                        Type: string;
                        /**
                         * @description Defines PreSale date.
                         * @example false
                         */
                        PreSale: boolean;
                        /**
                         * @description Defines Release date.
                         * @example false
                         */
                        Release: boolean;
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
                            /** @description Subcollection ID. */
                            Id?: number;
                            /** @description Collection ID. */
                            CollectionId?: number;
                            /** @description Subcollection name. */
                            Name?: string;
                            /** @description Either `“Exclusive”` (all the products contained in it will not be used) or `“Inclusive”` (all the products contained in it will be used). */
                            Type?: string;
                            /** @description Defines if the collection is on PreSale. */
                            PreSale?: boolean;
                            /** @description Defines if the collection is a new released one. */
                            Release?: boolean;
                        };
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
    "/api/catalog/pvt/collection/{collectionId}/position": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reposition SKU on the subcollection
         * @description  >⚠️ There are two ways to configure collections, through Legacy CMS Portal or using the Beta Collection module. This endpoint is compatible with [collections configured through the Legacy CMS Portal](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L).
         *
         *     Edits the position of an SKU that already exists in the subcollection,  which is a [Group](https://help.vtex.com/en/tutorial/adding-collections-cms--2YBy6P6X0NFRpkD2ZBxF6L#group-types) within a collection.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Collection | **Write Collections** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Collection's unique numerical identifier. */
                    collectionId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description SKU ID.
                         * @example 1
                         */
                        skuId: number;
                        /**
                         * @description SKU position.
                         * @example 1
                         */
                        position: number;
                        /**
                         * @description Subcollection ID.
                         * @example 17
                         */
                        subCollectionId: number;
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/specification/{specificationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specification by specification ID
         * @description Retrieves information of a product or SKU specification.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Specification's unique numerical identifier. */
                    specificationId: number;
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
                            /** @description Created specification's ID. */
                            Id: number;
                            /**
                             * @description Field type can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.
                             * @enum {integer}
                             */
                            FieldTypeId: 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9;
                            /** @description Specification category ID. */
                            CategoryId: number;
                            /** @description Numerical ID of the specification group that contains the new specification. */
                            FieldGroupId: number;
                            /** @description Specification name.  Limited to 100 characters. */
                            Name: string;
                            /** @description Specification description. */
                            Description: string;
                            /** @description The current specification's position in comparison to the other specifications. */
                            Position: number;
                            /** @description Defines if the specification can be used as a filter. */
                            IsFilter: boolean;
                            /** @description Defines if the specification is required or not. */
                            IsRequired: boolean;
                            /** @description Defines if the specification will be shown on the product screen in the specification area. */
                            IsOnProductDetails: boolean;
                            /** @description Defines if the specification is applied to a specific SKU. */
                            IsStockKeepingUnit: boolean;
                            /**
                             * @deprecated
                             * @description Deprecated field.
                             */
                            IsWizard: boolean;
                            /** @description Defines if the specification is active or not. */
                            IsActive: boolean;
                            /** @description Defines if the specification is shown in the main menu of the site. */
                            IsTopMenuLinkActive: boolean;
                            /** @description Defines if the specification is shown in the side menu. */
                            IsSideMenuLinkActive: boolean;
                            /** @description Specification default value. */
                            DefaultValue: string | null;
                        };
                    };
                };
            };
        };
        /**
         * Update specification
         * @description Updates a product specification or SKU specification.
         *
         *     >⚠️ It is not possible to edit `FieldTypeId`, `CategoryId`, `FieldGroupId` or `IsStockKeepingUnit` in this API call.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Specification's unique numerical identifier. */
                    specificationId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Field type can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`. This information is not editable.
                         * @example 1
                         * @enum {integer}
                         */
                        FieldTypeId: 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9;
                        /**
                         * @description Specification category ID. This information is not editable.
                         * @example 0
                         */
                        CategoryId: number;
                        /**
                         * @description Numerical ID of the specification group that contains the new specification. This information is not editable.
                         * @example 0
                         */
                        FieldGroupId: number;
                        /**
                         * @description Specification name. Limited to 100 characters.
                         * @example Material
                         */
                        Name: string;
                        /**
                         * @description Specification description.
                         * @example Composition of the product.
                         */
                        Description: string;
                        /**
                         * @description The current specification's position in comparison to the other specifications.
                         * @example 1
                         */
                        Position: number;
                        /**
                         * @description Defines if the specification can be used as a filter.
                         * @example false
                         */
                        IsFilter: boolean;
                        /**
                         * @description Defines if the specification is required or not.
                         * @example false
                         */
                        IsRequired: boolean;
                        /**
                         * @description Defines if the specification will be  shown on the product screen in the specification area.
                         * @example false
                         */
                        IsOnProductDetails: boolean;
                        /**
                         * @description Defines if the specification is applied to a specific SKU. This information is not editable.
                         * @example false
                         */
                        IsStockKeepingUnit: boolean;
                        /**
                         * @deprecated
                         * @description Deprecated field.
                         * @example false
                         */
                        IsWizard: boolean;
                        /**
                         * @description Defines if the specification is active or not.
                         * @example false
                         */
                        IsActive: boolean;
                        /**
                         * @description Defines if the specification is shown in the main menu of the site.
                         * @example false
                         */
                        IsTopMenuLinkActive: boolean;
                        /**
                         * @description Defines if the specification is shown in the side menu.
                         * @example false
                         */
                        IsSideMenuLinkActive: boolean;
                        /**
                         * @description Specification default value.
                         * @example Leather
                         */
                        DefaultValue: string;
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
                            /** @description Specification ID. */
                            Id?: number;
                            /** @description Field type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`. */
                            FieldTypeId?: number;
                            /** @description Category ID associated with this specification. */
                            CategoryId?: number;
                            /** @description ID of the group of specifications that contains the new specification. */
                            FieldGroupId?: number;
                            /** @description Specification name. Limited to 100 characters. */
                            Name?: string;
                            /** @deprecated */
                            Description?: string | null;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page. */
                            Position?: number;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar. */
                            IsFilter?: boolean;
                            /** @description Makes the specification mandatory (`true`) or optional (`false`). */
                            IsRequired?: boolean;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal -If specification is visible on the product page. */
                            IsOnProductDetails?: boolean;
                            /** @description If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field. */
                            IsStockKeepingUnit?: boolean;
                            /**
                             * @deprecated
                             * @description Deprecated field.
                             */
                            IsWizard?: boolean | null;
                            /** @description Enable (`true`) or disable (`false`) specification. */
                            IsActive?: boolean;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - To make the specification visible in the store's upper menu. */
                            IsTopMenuLinkActive?: boolean;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - To make the specification field clickable in the search navigation bar. */
                            IsSideMenuLinkActive?: boolean;
                            /** @description Specification default value. */
                            DefaultValue?: string;
                        };
                    };
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
    "/api/catalog/pvt/specification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create specification
         * @description Creates a new product or SKU specification.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Field type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`.
                         * @example 1
                         * @enum {integer}
                         */
                        FieldTypeId: 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9;
                        /**
                         * @description Category ID associated with this specification.
                         * @example 1
                         */
                        CategoryId?: number;
                        /**
                         * @description ID of the group of specifications that contains the new specification.
                         * @example 22
                         */
                        FieldGroupId: number;
                        /**
                         * @description Specification name. Limited to 100 characters.
                         * @example Material
                         */
                        Name: string;
                        /**
                         * @deprecated
                         * @example Composition of the product.
                         */
                        Description?: string | null;
                        /**
                         * @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page.
                         * @example 1
                         */
                        Position?: number;
                        /**
                         * @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar.
                         * @example false
                         */
                        IsFilter?: boolean;
                        /**
                         * @description Makes the specification mandatory (`true`) or optional (`false`).
                         * @example false
                         */
                        IsRequired?: boolean;
                        /**
                         * @description Store Framework - Deprecated.
                         *     Legacy CMS Portal -If specification is visible on the product page.
                         * @example true
                         */
                        IsOnProductDetails?: boolean;
                        /**
                         * @description If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field.
                         * @example false
                         */
                        IsStockKeepingUnit?: boolean;
                        /**
                         * @deprecated
                         * @description Deprecated field.
                         * @example null
                         */
                        IsWizard?: boolean | null;
                        /**
                         * @description Enable (`true`) or disable (`false`) specification.
                         * @example true
                         */
                        IsActive?: boolean;
                        /**
                         * @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - To make the specification visible in the store's upper menu.
                         * @example false
                         */
                        IsTopMenuLinkActive?: boolean;
                        /**
                         * @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - To make the specification field clickable in the search navigation bar.
                         * @example false
                         */
                        IsSideMenuLinkActive?: boolean;
                        /**
                         * @description Specification default value.
                         * @example Cotton
                         */
                        DefaultValue?: string;
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
                            /** @description Specification ID. */
                            Id?: number;
                            /** @description Field type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`. */
                            FieldTypeId?: number;
                            /** @description Category ID associated with this specification. */
                            CategoryId?: number;
                            /** @description ID of the group of specifications that contains the new specification. */
                            FieldGroupId?: number;
                            /** @description Specification name. Limited to 100 characters. */
                            Name?: string;
                            /** @deprecated */
                            Description?: string | null;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page. */
                            Position?: number;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar. */
                            IsFilter?: boolean;
                            /** @description Makes the specification mandatory (`true`) or optional (`false`). */
                            IsRequired?: boolean;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal -If specification is visible on the product page. */
                            IsOnProductDetails?: boolean;
                            /** @description If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field. */
                            IsStockKeepingUnit?: boolean;
                            /** @deprecated */
                            IsWizard?: boolean | null;
                            /** @description Enable (`true`) or disable (`false`) specification. */
                            IsActive?: boolean;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - To make the specification visible in the store's upper menu. */
                            IsTopMenuLinkActive?: boolean;
                            /** @description Store Framework - Deprecated.
                             *     Legacy CMS Portal - To make the specification field clickable in the search navigation bar. */
                            IsSideMenuLinkActive?: boolean;
                            /** @description Specification default value. */
                            DefaultValue?: string;
                        };
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
    "/api/catalog_system/pub/specification/fieldGet/{fieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specification field
         * @description Retrieves details from a specification field by this field's ID.
         *     >⚠️ This is a legacy endpoint. We recommend using [Get specification](https://developers.vtex.com/vtex-rest-api/reference/get_api-catalog-pvt-specification-specificationid) instead.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SpecificationsField"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/specification/field": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update specification field
         * @description Updates a specification field in a category.
         *     >⚠️ This is a legacy endpoint. We recommend using [Update specification](https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/stockkeepingunit/-skuId-/specification?endpoint=put-/api/catalog/pvt/stockkeepingunit/-skuId-/specification) instead.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["SpecificationsInsertFieldUpdate"];
        /**
         * Create specification field
         * @description Creates a specification field in a category.
         *     >⚠️ This is a legacy endpoint. We recommend using [Create specification](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specification?endpoint=post-/api/catalog/pvt/specification) instead.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["SpecificationsInsertField"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/specification/fieldValue/{fieldValueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specification field value
         * @description Retrieves details from a specification field's value by this value's ID.
         *     >⚠️ This is a legacy endpoint. We recommend using [Get specification value](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog/pvt/specificationvalue/-specificationValueId-?endpoint=get-/api/catalog/pvt/specificationvalue/-specificationValueId-) instead.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SpecificationsGetFieldValue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/specification/fieldvalue/{fieldId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specification values by specification field ID
         * @description Gets a list of all specification values from a specification field by this field's ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SpecificationsValuesByFieldId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/specification/fieldValue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update specification field value
         * @description Updates a specification field value by the specification field's ID.
         *     >⚠️ This is a legacy endpoint. We recommend using [Update specification field value](https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog/pvt/stockkeepingunit/-skuId-/specification?endpoint=put-/api/catalog/pvt/stockkeepingunit/-skuId-/specification-value-id) instead.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["SpecificationsUpdateFieldValue"];
        /**
         * Create specification field value
         * @description Creates a specification field value by the specification field's ID.
         *     >⚠️ This is a legacy endpoint. We recommend using [Create specification value](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/specificationvalue) instead.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["SpecificationsInsertFieldValue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/specificationvalue/{specificationValueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specification value
         * @description Retrieves general information about a specification value.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Specification value's unique numerical identifier. */
                    specificationValueId: number;
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
                             * Format: int32
                             * @description Specification field value ID.
                             */
                            FieldValueId?: number;
                            /** @description Specification field ID. */
                            FieldId?: number;
                            /** @description Specification field value name. */
                            Name?: string;
                            /** @description Specification field value description. */
                            Text?: string;
                            /** @description Defines if the specification field value is active (`true`) or inactive (`false`). */
                            IsActive?: boolean;
                            /**
                             * Format: int32
                             * @description Specification field value position.
                             */
                            Position?: number;
                        };
                    };
                };
            };
        };
        /**
         * Update specification value
         * @description Updates a new specification value for a category.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description  specification value's unique numerical identifier. */
                    specificationValueId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Specification ID associated with this specification value.
                         * @example 193
                         */
                        FieldId: number;
                        /**
                         * @description Specification value name.
                         * @example Metal
                         */
                        Name: string;
                        /**
                         * @deprecated
                         * @description Specification value text.
                         */
                        Text?: string | null;
                        /**
                         * @description Enable (`true`) or disable (`false`) specification value.
                         * @example true
                         */
                        IsActive?: boolean;
                        /**
                         * @description The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).
                         * @example 1
                         */
                        Position?: number;
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
                            /** @description Specification value ID. */
                            FieldValueId?: number;
                            /** @description Specification field ID associated with this specification value. */
                            FieldId?: number;
                            /** @description Specification value name. */
                            Name?: string;
                            /**
                             * @deprecated
                             * @description Specification value text.
                             */
                            Text?: string | null;
                            /** @description Enable (`true`) or disable (`false`) specification value. */
                            IsActive?: boolean;
                            /** @description The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`). */
                            Position?: number;
                        };
                    };
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
    "/api/catalog/pvt/specificationvalue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create specification value
         * @description Creates a new specification value for a category.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Specification field ID associated with this specification value.
                         * @example 193
                         */
                        FieldId: number;
                        /**
                         * @description Specification value name.
                         * @example Metal
                         */
                        Name: string;
                        /**
                         * @deprecated
                         * @description Specification value text.
                         */
                        Text?: string | null;
                        /**
                         * @description Enable (`true`) or disable (`false`) specification value.
                         * @example true
                         */
                        IsActive?: boolean;
                        /**
                         * @description The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`).
                         * @example 1
                         */
                        Position?: number;
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
                            /** @description Specification value ID. */
                            FieldValueId?: number;
                            /** @description Specification field ID associated with this specification value. */
                            FieldId?: number;
                            /** @description Specification value name. */
                            Name?: string;
                            /**
                             * @deprecated
                             * @description Specification value text.
                             */
                            Text?: string | null;
                            /** @description Enable (`true`) or disable (`false`) specification value. */
                            IsActive?: boolean;
                            /** @description The position of the value to be shown on product registration page (`/admin/Site/Produto.aspx`). */
                            Position?: number;
                        };
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
    "/api/catalog_system/pvt/specification/groupbycategory/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List specification group by category
         * @description Retrieves a list of specification groups by the category ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Groups** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SpecificationsGroupListbyCategory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/specification/groupGet/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get specification group
         * @description Retrieves details from a specification group by the ID of the group.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Groups** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SpecificationsGroupGet"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/specificationgroup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create specification group
         * @description Create a specification group.
         *     >⚠️ It is also possible to create a specification Group by using an alternative legacy route: `/api/catalog_system/pvt/specification/group`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Groups** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["SpecificationGroupInsert2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/specificationgroup/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update specification group
         * @description Update a specification group.
         *     >⚠️ It is also possible to update a specification Group by using an alternative legacy route: `/api/catalog_system/pvt/specification/group`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Content | **Groups** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Group's unique numerical identifier. */
                    groupId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Category ID where the specification group is contained.
                         * @example 1
                         */
                        CategoryId: number;
                        /**
                         * Format: int32
                         * @description Specification group ID.
                         * @example 24
                         */
                        Id: number;
                        /**
                         * @description Specification group name.
                         * @example Sizes
                         */
                        Name: string;
                        /**
                         * @description Specification group position.
                         * @example 1
                         */
                        Position: number;
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
                            /**
                             * @description Category ID where the specification Group is contained.
                             * @example 1
                             */
                            CategoryId?: number;
                            /**
                             * Format: int32
                             * @description Specification group ID.
                             * @example 24
                             */
                            Id?: number;
                            /**
                             * @description Specification group Name.
                             * @example Sizes
                             */
                            Name?: string;
                            /**
                             * @description Specification group Position.
                             * @example 1
                             */
                            Position?: number;
                        };
                    };
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
    "/api/catalog/pvt/specification/nonstructured/{Id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get non-structured specification by ID
         * @description Retrieves general information about unmapped specifications of a seller's SKU in a Marketplace.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Non-structured specification's unique numerical identifier. */
                    Id: number;
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
                            /** @description Non-structured specification's unique numerical identifier. */
                            Id?: number;
                            /** @description SKU's unique numerical identifier. */
                            SkuId?: number;
                            /** @description Name of the non-structured specification. */
                            SpecificationName?: string;
                            /** @description Value of the non-structured specification. */
                            SpecificationValue?: string;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Delete non-structured specification
         * @description Deletes unmapped specifications of a seller'S SKU in a marketplace by its unique ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Non-structured specification's unique numerical identifier. */
                    Id: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/specification/nonstructured": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get non-structured specification by SKU ID
         * @description Gets general information about unmapped specifications of a seller's SKU in a marketplace by SKU ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: {
            parameters: {
                query: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
                            /** @description Non-structured specification's unique numerical identifier. */
                            Id?: number;
                            /** @description SKU's unique numerical identifier. */
                            SkuId?: number;
                            /** @description Name of the non-structured specification. */
                            SpecificationName?: string;
                            /** @description Value of the non-structured specification. */
                            SpecificationValue?: string;
                        }[];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Delete non-structured specification by SKU ID
         * @description Deletes unmapped specifications of a seller'S SKU in a marketplace by SKU ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Catalog | Commercial | **SKU management** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: {
            parameters: {
                query: {
                    /** @description SKU's unique numerical identifier. */
                    skuId: number;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/saleschannel/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Sales channel list
         * @description Retrieves a list with details about the store's sales channels.
         *     ## Response body example
         *
         *     ```json
         *     [
         *         {
         *             "Id": 1,
         *             "Name": "Loja Principal",
         *             "IsActive": true,
         *             "ProductClusterId": null,
         *             "CountryCode": "BRA",
         *             "CultureInfo": "pt-BR",
         *             "TimeZone": "E. South America Standard Time",
         *             "CurrencyCode": "BRL",
         *             "CurrencySymbol": "R$",
         *             "CurrencyLocale": 1046,
         *             "CurrencyFormatInfo": {
         *                 "CurrencyDecimalDigits": 1,
         *                 "CurrencyDecimalSeparator": ",",
         *                 "CurrencyGroupSeparator": ".",
         *                 "CurrencyGroupSize": 3,
         *                 "StartsWithCurrencySymbol": true
         *             },
         *             "Origin": null,
         *             "Position": 2,
         *             "ConditionRule": null,
         *             "CurrencyDecimalDigits": 1
         *         }
         *     ]
         *     ```
         */
        get: operations["SalesChannelList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/saleschannel/{salesChannelId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Sales channel by ID
         * @description Retrieves a specific sales channel by its ID.
         *
         *     ## Response body example
         *
         *     ```json
         *     {
         *         "Id": 1,
         *         "Name": "Loja Principal",
         *         "IsActive": true,
         *         "ProductClusterId": null,
         *         "CountryCode": "BRA",
         *         "CultureInfo": "pt-BR",
         *         "TimeZone": "E. South America Standard Time",
         *         "CurrencyCode": "BRL",
         *         "CurrencySymbol": "R$",
         *         "CurrencyLocale": 1046,
         *         "CurrencyFormatInfo": {
         *             "CurrencyDecimalDigits": 1,
         *             "CurrencyDecimalSeparator": ",",
         *             "CurrencyGroupSeparator": ".",
         *             "CurrencyGroupSize": 3,
         *             "StartsWithCurrencySymbol": true
         *         },
         *         "Origin": null,
         *         "Position": 2,
         *         "ConditionRule": null,
         *         "CurrencyDecimalDigits": 1
         *     }
         *     ```
         */
        get: operations["SalesChannelbyId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/seller/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Seller list
         * @description Retrieves the seller's details by its ID.
         */
        get: operations["SellerList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/seller/{sellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Seller by ID
         * @description Retrieves the seller's details by its ID.
         */
        get: operations["GetSellerbyId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/seller": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Seller
         * @description Updates a seller.
         */
        put: operations["UpdateSeller"];
        /**
         * Create Seller
         * @description Creates a new seller.
         */
        post: operations["CreateSeller"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sellers/{sellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Seller by ID
         * @description Retrieves the seller's details by its ID.
         */
        get: operations["GetSellersbyId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/supplier": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Supplier
         * @description Creates a new Supplier.
         *     ## Request body example
         *
         *     ```json
         *     {
         *         "Name": "Supplier",
         *         "CorporateName": "TopStore",
         *         "StateInscription": "",
         *         "Cnpj": "33304981001272",
         *         "Phone": "3333333333",
         *         "CellPhone": "4444444444",
         *         "CorportePhone": "5555555555",
         *         "Email": "email@email.com",
         *         "IsActive": true
         *     }
         *     ```
         *
         *     ## Response body example
         *
         *     ```json
         *     {
         *         "Id": 1,
         *         "Name": "Supplier",
         *         "CorporateName": "TopStore",
         *         "StateInscription": "",
         *         "Cnpj": "33304981001272",
         *         "Phone": "3333333333",
         *         "CellPhone": "4444444444",
         *         "CorportePhone": "5555555555",
         *         "Email": "email@email.com",
         *         "IsActive": true
         *     }
         *     ```
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SupplierRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SupplierResponse"];
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
    "/api/catalog/pvt/supplier/{supplierId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Supplier
         * @description Updates general information of an existing Supplier.
         *     ## Request body example
         *
         *     ```json
         *     {
         *         "Name": "Supplier",
         *         "CorporateName": "TopStore",
         *         "StateInscription": "",
         *         "Cnpj": "33304981001272",
         *         "Phone": "3333333333",
         *         "CellPhone": "4444444444",
         *         "CorportePhone": "5555555555",
         *         "Email": "email@email.com",
         *         "IsActive": true
         *     }
         *     ```
         *
         *     ## Response body example
         *
         *     ```json
         *     {
         *         "Id": 1,
         *         "Name": "Supplier",
         *         "CorporateName": "TopStore",
         *         "StateInscription": "",
         *         "Cnpj": "33304981001272",
         *         "Phone": "3333333333",
         *         "CellPhone": "4444444444",
         *         "CorportePhone": "5555555555",
         *         "Email": "email@email.com",
         *         "IsActive": true
         *     }
         *     ```
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Supplier's unique numerical identifier. */
                    supplierId: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SupplierRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SupplierResponse"];
                    };
                };
            };
        };
        post?: never;
        /**
         * Delete Supplier
         * @description Deletes an existing Supplier.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Supplier's unique numerical identifier. */
                    supplierId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog/pvt/product/{productId}/salespolicy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Trade Policies by product ID
         * @description Retrieves a list of Trade Policies associated to a product based on the product's ID.
         *     ## Response body example
         *
         *     ```json
         *     [
         *         {
         *             "ProductId": 1,
         *             "StoreId": 1
         *         },
         *         {
         *             "ProductId": 1,
         *             "StoreId": 2
         *         },
         *         {
         *             "ProductId": 1,
         *             "StoreId": 3
         *         },
         *         {
         *             "ProductId": 1,
         *             "StoreId": 4
         *         }
         *     ]
         *     ```
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
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
                             * @description Product's unique numerical identifier.
                             * @example 1
                             */
                            ProductId?: number;
                            /**
                             * @description Trade policy's unique numerical identifier.
                             * @example 1
                             */
                            StoreId?: number;
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
    "/api/catalog/pvt/product/{productId}/salespolicy/{tradepolicyId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Associate product with trade policy
         * @description Associates an existing trade policy with a product.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
                    /** @description Trade policy's unique numerical identifier. */
                    tradepolicyId: number;
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
        /**
         * Remove product from trade policy
         * @description Disassociates a trade policy of a product.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Product's unique numerical identifier. */
                    productId: number;
                    /** @description Trade policy's unique numerical identifier. */
                    tradepolicyId: number;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all SKUs of a trade policy
         * @description Retrieves a list of SKU IDs of a trade policy.
         */
        get: {
            parameters: {
                query: {
                    /** @description Trade policy's unique numerical identifier. */
                    sc: number;
                    /** @description Page number. */
                    page?: number;
                    /** @description Number of items in the page. */
                    pageSize?: number;
                    /** @description If set as `false`, it allows the user to decide if the SKUs that are not assigned to a specific trade policy should be also returned. */
                    onlyAssigned?: boolean;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
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
                        "application/json": number[];
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
    "/api/catalog_system/pvt/products/GetIndexedInfo/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product Indexed Information
         * @description Retrieve details of a product's Indexed Information in XML format.
         *     ## Response body example
         *
         *     ```xml
         *     "
         *     <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n
         *     <response>\n
         *         <lst name=\"responseHeader\">
         *             <bool name=\"zkConnected\">true</bool>
         *             <int name=\"status\">0</int>
         *             <int name=\"QTime\">2</int>
         *             <lst name=\"params\">
         *                 <str name=\"fl\">*</str>
         *                 <arr name=\"fq\">
         *                     <str>instanceId:394dbdc8-b1f4-4dea-adfa-1ec104f3bfe1</str>
         *                     <str>productId:1</str>
         *                 </arr>
         *             </lst>
         *         </lst>
         *         <result name=\"response\" numFound=\"0\" start=\"0\" maxScore=\"0.0\"></result>
         *         <lst name=\"facet_counts\">
         *             <lst name=\"facet_queries\"/>
         *             <lst name=\"facet_fields\"/>
         *             <lst name=\"facet_ranges\"/>
         *             <lst name=\"facet_intervals\"/>
         *             <lst name=\"facet_heatmaps\"/></lst>\n
         *     </response>\n"
         *     ```
         */
        get: operations["IndexedInfo"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/commercialcondition/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all commercial conditions
         * @description Lists all commercial conditions on the store.
         *     ## Response body example
         *
         *     ```json
         *     [
         *         {
         *             "Id": 1,
         *             "Name": "Padrão",
         *             "IsDefault": true
         *         },
         *         {
         *             "Id": 2,
         *             "Name": "Teste Fast",
         *             "IsDefault": false
         *         }
         *     ]
         *     ```
         */
        get: operations["GetAllCommercialConditions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pvt/commercialcondition/{commercialConditionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get commercial condition
         * @description Retrieves information of a commercial condition by its ID.
         *     ## Response body example
         *
         *     ```json
         *     {
         *         "Id": 1,
         *         "Name": "Padrão",
         *         "IsDefault": true
         *     }
         *     ```
         */
        get: operations["GetCommercialConditions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/addon/pvt/giftlist/get/{listId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Gift list
         * @description Retrieves information about a Gift list by its ID.
         */
        get: operations["GetGiftList"];
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
        SKUFileURL: {
            /**
             * @description Defines if the image is the main image of the SKU.
             * @example true
             */
            IsMain?: boolean;
            /**
             * @description SKU image label.
             * @example Main
             */
            Label?: string;
            /**
             * @description SKU image name.
             * @example Nike-Red-Janoski-1
             */
            Name: string;
            /**
             * @description General text of the image.
             * @example Nike-Red-Janoski
             */
            Text?: string | null;
            /**
             * @description External image's URL.  The URL must start with the protocol identifier (`http://` or `https://`) and end with the file extension (`.jpg`, `.png` or `.gif`).
             * @example https://m.media-amazon.com/images/I/610G2-sJx5L._AC_UX695_.jpg
             */
            Url: string;
        };
        /**
         * Format: binary
         * @description The image file has a size limit of 3200 x 3200 pixels.
         */
        SKUFile: string;
        /** @example {
         *       "id": 1,
         *       "name": "Alimentação",
         *       "hasChildren": true,
         *       "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao",
         *       "children": [
         *         {
         *           "id": 6,
         *           "name": "Bebedouro",
         *           "hasChildren": false,
         *           "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/bebedouro",
         *           "children": [],
         *           "Title": "Bebedouro para Gatos",
         *           "MetaTagDescription": ""
         *         },
         *         {
         *           "id": 7,
         *           "name": "Comedouro",
         *           "hasChildren": false,
         *           "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/comedouro",
         *           "children": [],
         *           "Title": "Comedouro para Gatos",
         *           "MetaTagDescription": ""
         *         },
         *         {
         *           "id": 8,
         *           "name": "Biscoitos",
         *           "hasChildren": false,
         *           "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/biscoitos",
         *           "children": [],
         *           "Title": "Biscoitos para Gatos",
         *           "MetaTagDescription": ""
         *         },
         *         {
         *           "id": 9,
         *           "name": "Petiscos",
         *           "hasChildren": false,
         *           "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/petiscos",
         *           "children": [],
         *           "Title": "Petiscos para Gatos",
         *           "MetaTagDescription": ""
         *         },
         *         {
         *           "id": 10,
         *           "name": "Ração Seca",
         *           "hasChildren": false,
         *           "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-seca",
         *           "children": [],
         *           "Title": "Ração Seca para Gatos",
         *           "MetaTagDescription": ""
         *         },
         *         {
         *           "id": 11,
         *           "name": "Ração Úmida",
         *           "hasChildren": false,
         *           "url": "https://lojadobreno.vtexcommercestable.com.br/alimentacao/racao-umida",
         *           "children": [],
         *           "Title": "Ração Úmida para Gatos",
         *           "MetaTagDescription": ""
         *         }
         *       ],
         *       "Title": "Alimentação para Gatos",
         *       "MetaTagDescription": ""
         *     } */
        GetCategoryTree: {
            /**
             * Format: int32
             * @description Category ID.
             * @example 1
             */
            id: number;
            /**
             * @description Category name.
             * @example Toys
             */
            name: string;
            /**
             * @description If the category has a category child (`true`) or not (`false`).
             * @example true
             */
            hasChildren: boolean;
            /**
             * @description Category URL.
             * @example https://lojadobreno.vtexcommercestable.com.br/toys
             */
            url: string;
            /** @description Array with information about the category's children. */
            children: components["schemas"]["GetCategoryTreeChild"][];
            /**
             * @description Category page title.
             * @example Toys
             */
            Title: string;
            /**
             * @description Category page Meta tag description.
             * @example New and used toys for sale.
             */
            MetaTagDescription: string;
        };
        /** @example {
         *       "id": 78,
         *       "name": "Xbox 360",
         *       "hasChildren": false,
         *       "url": "https://ambienteqa.vtexcommercestable.com.br/games/xbox-360",
         *       "children": [
         *         {
         *           "id": 79,
         *           "name": "Consoles",
         *           "hasChildren": false,
         *           "url": "https://ambienteqa.vtexcommercestable.com.br/games/xbox-360/consoles",
         *           "children": []
         *         },
         *         {
         *           "id": 126,
         *           "name": "Acessorio",
         *           "hasChildren": false,
         *           "url": "https://ambienteqa.vtexcommercestable.com.br/games/xbox-360/acessorio",
         *           "children": []
         *         }
         *       ],
         *       "Title": "Games",
         *       "MetaTagDescription": "Video games."
         *     } */
        GetCategoryTreeChild: {
            /**
             * Format: int32
             * @description Category ID.
             * @example 1
             */
            id: number;
            /**
             * @description Category name.
             * @example Dolls
             */
            name: string;
            /**
             * @description If the category has a category child (`true`) or not (`false`).
             * @example true
             */
            hasChildren: boolean;
            /**
             * @description Category URL.
             * @example https://lojadobreno.vtexcommercestable.com.br/dolls
             */
            url: string;
            /** @description Array with information about the category's children. */
            children: unknown[];
            /**
             * @description Category page title.
             * @example Dolls
             */
            Title: string;
            /**
             * @description Category page Meta tag description.
             * @example New and used dolls for sale.
             */
            MetaTagDescription: string;
        };
        /** @example {
         *       "Id": 1,
         *       "Name": "Home Appliances",
         *       "FatherCategoryId": null,
         *       "Title": "Home Appliances",
         *       "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
         *       "Keywords": "Kitchen, Laundry, Appliances",
         *       "IsActive": true,
         *       "LomadeeCampaignCode": "",
         *       "AdWordsRemarketingCode": "",
         *       "ShowInStoreFront": true,
         *       "ShowBrandFilter": true,
         *       "ActiveStoreFrontLink": true,
         *       "GlobalCategoryId": 3367,
         *       "StockKeepingUnitSelectionMode": "LIST",
         *       "Score": null,
         *       "LinkId": "Alimentacao",
         *       "HasChildren": true
         *     } */
        Category: {
            /** @description Category ID. */
            Id: number;
            /** @description Category name. */
            Name: string;
            /** @description ID of the father category, apply in case of category and subcategory. */
            FatherCategoryId: number | null;
            /** @description Category page title. */
            Title: string;
            /** @description Describes details about the category. */
            Description: string;
            /** @description Substitutes words for the category. */
            Keywords: string;
            /** @description Shows if the category is active (`true`) or not (`false`). */
            IsActive: boolean;
            /**
             * @deprecated
             * @description This is a legacy field. Do not take this information into consideration.
             */
            LomadeeCampaignCode: string;
            /**
             * @deprecated
             * @description This is a legacy field. Do not take this information into consideration.
             */
            AdWordsRemarketingCode: string;
            /** @description Defines if the category is shown on side and upper menu (`true`) or not (`false`). */
            ShowInStoreFront: boolean;
            /** @description Defines if the category has brand filter (`true`) or not (`false`). */
            ShowBrandFilter: boolean;
            /** @description Defines if the category has an active link on the website (`true`) or not (`false`). */
            ActiveStoreFrontLink: boolean;
            /** @description Google global category ID. */
            GlobalCategoryId: number;
            /** @description Defines how the SKU will be exhibited. */
            StockKeepingUnitSelectionMode: string;
            /** @description Score for search ordination. */
            Score: number | null;
            /** @description Text link. */
            LinkId: string | null;
            /** @description Defines if the category has child categories (`true`) or not (`false`). */
            HasChildren: boolean;
        };
        /** @example {
         *       "Name": "Home Appliances",
         *       "FatherCategoryId": null,
         *       "Title": "Home Appliances",
         *       "Description": "Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.",
         *       "Keywords": "Kitchen, Laundry, Appliances",
         *       "IsActive": true,
         *       "LomadeeCampaignCode": null,
         *       "AdWordsRemarketingCode": null,
         *       "ShowInStoreFront": true,
         *       "ShowBrandFilter": true,
         *       "ActiveStoreFrontLink": true,
         *       "GlobalCategoryId": 800,
         *       "StockKeepingUnitSelectionMode": "SPECIFICATION",
         *       "Score": null
         *     } */
        CreateCategoryRequest: {
            /**
             * @description Category unique identifier. If not informed, it will be automatically generated by VTEX.
             * @example 1
             */
            Id?: number;
            /**
             * @description Category name.
             * @example Home Appliances
             */
            Name: string;
            /**
             * @description Substitute words for the category.
             * @example Kitchen, Laundry, Appliances
             */
            Keywords: string;
            /**
             * @description Text used in title tag for category page.
             * @example Home Appliances
             */
            Title: string;
            /**
             * @description Text used in meta description tag for category page.
             * @example Discover our range of home appliances. Find smart vacuums, kitchen and laundry appliances to suit your needs. Order online now.
             */
            Description: string;
            /**
             * @deprecated
             * @description This is a legacy field. Do not take this information into consideration.
             * @example Sale
             */
            AdWordsRemarketingCode: string | null;
            /**
             * @deprecated
             * @description This is a legacy field. Do not take this information into consideration.
             * @example Sale
             */
            LomadeeCampaignCode: string | null;
            /**
             * @description ID of the parent category, apply in case of category and subcategory.
             * @example 2
             */
            FatherCategoryId: number | null;
            /**
             * @description Google global category ID.
             * @example 222
             */
            GlobalCategoryId: number;
            /**
             * @description If `true`, the category is shown in the top and side menu.
             * @example true
             */
            ShowInStoreFront: boolean;
            /**
             * @description If `true`, the category page becomes available in store.
             * @example true
             */
            IsActive: boolean;
            /**
             * @description If `true`, the category link becomes active in store.
             * @example true
             */
            ActiveStoreFrontLink: boolean;
            /**
             * @description If `true`, the category page displays a brand filter.
             * @example true
             */
            ShowBrandFilter: boolean;
            /**
             * @description Score for search sorting order.
             * @example 3
             */
            Score: number | null;
            /**
             * @description Defines how the SKU will be exhibited
             * @example SPECIFICATION
             */
            StockKeepingUnitSelectionMode: string;
        };
        /** @example {
         *       "Value": [
         *         "Iron",
         *         "Plastic"
         *       ],
         *       "Id": 30,
         *       "Name": "Material"
         *     } */
        GetorUpdateProductSpecification: {
            /** @description Array with specification values. */
            Value: string[];
            /**
             * Format: int32
             * @description Specification field ID, which is the same as `FieldId` in other specification endpoints.
             * @example 7
             */
            Id?: number;
            /**
             * @description Name of the specification.
             * @example Fabric
             */
            Name?: string;
        };
        /** @example {
         *       "Id": 310118450,
         *       "ProductId": 2,
         *       "NameComplete": "Caixa de Areia Azul Petmate sku test",
         *       "ComplementName": "",
         *       "ProductName": "Caixa de Areia Azul Petmate",
         *       "ProductDescription": "",
         *       "ProductRefId": "",
         *       "TaxCode": "",
         *       "SkuName": "sku test",
         *       "IsActive": true,
         *       "IsTransported": true,
         *       "IsInventoried": true,
         *       "IsGiftCardRecharge": false,
         *       "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000",
         *       "DetailUrl": "/caixa-de-areia-azul-petmate/p",
         *       "CSCIdentification": null,
         *       "BrandId": "2000005",
         *       "BrandName": "Petmate",
         *       "IsBrandActive": true,
         *       "Dimension": {
         *         "cubicweight": 0.2083,
         *         "height": 10,
         *         "length": 10,
         *         "weight": 10,
         *         "width": 10
         *       },
         *       "RealDimension": {
         *         "realCubicWeight": 0,
         *         "realHeight": 0,
         *         "realLength": 0,
         *         "realWeight": 0,
         *         "realWidth": 0
         *       },
         *       "ManufacturerCode": "123",
         *       "IsKit": false,
         *       "KitItems": [],
         *       "Services": [],
         *       "Categories": [],
         *       "CategoriesFullPath": [
         *         "/3/15/",
         *         "/3/",
         *         "/1/"
         *       ],
         *       "Attachments": [],
         *       "Collections": [],
         *       "SkuSellers": [
         *         {
         *           "SellerId": "1",
         *           "StockKeepingUnitId": 310118450,
         *           "SellerStockKeepingUnitId": "310118450",
         *           "IsActive": true,
         *           "FreightCommissionPercentage": 0,
         *           "ProductCommissionPercentage": 0
         *         }
         *       ],
         *       "SalesChannels": [
         *         1,
         *         3
         *       ],
         *       "Images": [
         *         {
         *           "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000",
         *           "ImageName": null,
         *           "FileId": 155451
         *         }
         *       ],
         *       "Videos": [],
         *       "SkuSpecifications": [],
         *       "ProductSpecifications": [],
         *       "ProductClustersIds": "151,158",
         *       "PositionsInClusters": {
         *         "151": 1,
         *         "158": 2
         *       },
         *       "ProductClusterNames": {
         *         "151": "asdfghj",
         *         "158": "Coleção halloween"
         *       },
         *       "ProductClusterHighlights": {
         *         "151": "asdfghj"
         *       },
         *       "ProductCategoryIds": "/3/15/",
         *       "IsDirectCategoryActive": true,
         *       "ProductGlobalCategoryId": 5000,
         *       "ProductCategories": {
         *         "1": "Alimentação",
         *         "3": "Higiene",
         *         "15": "Caixa de Areia"
         *       },
         *       "CommercialConditionId": 1,
         *       "RewardValue": 0,
         *       "AlternateIds": {
         *         "RefId": "1"
         *       },
         *       "AlternateIdValues": [
         *         "1"
         *       ],
         *       "EstimatedDateArrival": null,
         *       "MeasurementUnit": "un",
         *       "UnitMultiplier": 1,
         *       "InformationSource": null,
         *       "ModalType": null,
         *       "KeyWords": "",
         *       "ReleaseDate": "2020-01-06T00:00:00Z",
         *       "ProductIsVisible": true,
         *       "ShowIfNotAvailable": true,
         *       "IsProductActive": true,
         *       "ProductFinalScore": 0
         *     } */
        GetSKUandContext: {
            /**
             * Format: int32
             * @description SKU ID.
             */
            Id: number;
            /**
             * Format: int32
             * @description ID of the related product.
             */
            ProductId: number;
            /** @description Product Name and SKU Name concatenated. */
            NameComplete: string;
            /** @description Product Complement Name. */
            ComplementName?: string;
            /** @description Product Name. */
            ProductName: string;
            /** @description Product Description. HTML is allowed. */
            ProductDescription: string;
            /** @description Reference ID of the related product. */
            ProductRefId?: string;
            /** @description SKU Tax Code. */
            TaxCode?: string;
            /** @description SKU Name. */
            SkuName: string;
            /** @description Defines if the SKU is active or not. */
            IsActive: boolean;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsTransported: boolean | null;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsInventoried: boolean | null;
            /** @description Defines if the purchase will generate a reward. */
            IsGiftCardRecharge: boolean;
            /** @description SKU image URL. */
            ImageUrl: string;
            /** @description Product URL. */
            DetailUrl: string;
            /** @description SKU seller identification. */
            CSCIdentification: string | null;
            /** @description Product brand ID. */
            BrandId: string;
            /** @description Product brand Name. */
            BrandName: string;
            Dimension: components["schemas"]["Dimension"];
            RealDimension: components["schemas"]["RealDimension"];
            /** @description Product Supplier ID. */
            ManufacturerCode: string;
            /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
            IsKit: boolean;
            /** @description Array with SKU IDs of bundle components. */
            KitItems: string[];
            /** @description Array with Service IDs that are related to the SKU. */
            Services: string[];
            /** @description Array with Categories from the related product. */
            Categories: string[];
            /** @description Array with Attachments ID that are related to the SKU. */
            Attachments: components["schemas"]["Attachment"][];
            /** @description Array with Collection IDs that are related to the product. */
            Collections: string[];
            /** @description Array with SKU sellers data. */
            SkuSellers: components["schemas"]["SkuSeller"][];
            /** @description Array with the ID of all the trade policies that are related to the product. */
            SalesChannels: number[];
            /** @description Array with SKU images. */
            Images: components["schemas"]["Image"][];
            /** @description Array with related SKU specifications. */
            SkuSpecifications: components["schemas"]["SkuSpecification"][];
            /** @description Array with related product specifications. */
            ProductSpecifications: components["schemas"]["ProductSpecification"][];
            /** @description Product clusters IDs. */
            ProductClustersIds: string;
            /** @description Category hierarchy with category IDs. */
            ProductCategoryIds: string;
            /** @description Global category ID. */
            ProductGlobalCategoryId: number | null;
            /** @description Object containing product categories. Structure: "{CategoryID}": "{CategoryName}". */
            ProductCategories: {
                [key: string]: string | undefined;
            };
            /**
             * Format: int32
             * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
             * @default 1
             */
            CommercialConditionId: number;
            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
            RewardValue: number;
            AlternateIds: components["schemas"]["AlternateIds"];
            /** @description Array with values of alternative SKU IDs. */
            AlternateIdValues: string[];
            /** @description To add the product as pre-sale, enter the product estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. You must take into consideration both the launch date and the freight calculation for the arrival date. */
            EstimatedDateArrival: string | null;
            /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`. */
            MeasurementUnit: string;
            /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
            UnitMultiplier: number;
            /** @description Information source. */
            InformationSource: string | null;
            /** @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
            ModalType: string | null;
            /** @description Keywords related to the product. */
            KeyWords?: string | null;
            /** @description Release date of the product. */
            ReleaseDate?: string | null;
            /** @description Defines if the product is visible or not. */
            ProductIsVisible?: boolean;
            /** @description Defines if the product will be shown if it is not available. */
            ShowIfNotAvailable?: boolean;
            /** @description Defines if the product is active or not. */
            IsProductActive?: boolean;
            /** @description Product final score. */
            ProductFinalScore?: number;
        };
        /**
         * @description Object containing the SKU dimensions to be used on the shipping calculation.
         * @example {
         *       "cubicweight": 81.6833,
         *       "height": 65,
         *       "length": 58,
         *       "weight": 10000,
         *       "width": 130
         *     }
         */
        Dimension: {
            /** @description SKU [cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128). */
            cubicweight: number;
            /** @description SKU height. */
            height: number;
            /** @description SKU length. */
            length: number;
            /** @description SKU weight. */
            weight: number;
            /** @description SKU width. */
            width: number;
        };
        /**
         * @description Object containing the real SKU dimensions, which appear in the product page.
         * @example {
         *       "realCubicWeight": 274.1375,
         *       "realHeight": 241,
         *       "realLength": 65,
         *       "realWeight": 9800,
         *       "realWidth": 105
         *     }
         */
        RealDimension: {
            /** @description Real SKU [cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128). */
            realCubicWeight: number;
            /** @description Real SKU height. */
            realHeight: number;
            /** @description Real SKU length. */
            realLength: number;
            /** @description Real SKU weight. */
            realWeight: number;
            /** @description Real SKU width. */
            realWidth: number;
        };
        /**
         * @description Object containing information about SKU attachments.
         * @example {
         *       "Id": 3,
         *       "Name": "Mensagem",
         *       "Keys": [
         *         "nome;20",
         *         "foto;40"
         *       ],
         *       "Fields": [
         *         {
         *           "FieldName": "nome",
         *           "MaxCaracters": "20",
         *           "DomainValues": "Adalberto,Pedro,João"
         *         },
         *         {
         *           "FieldName": "foto",
         *           "MaxCaracters": "40",
         *           "DomainValues": null
         *         }
         *       ],
         *       "IsActive": true,
         *       "IsRequired": false
         *     }
         */
        Attachment: {
            /**
             * Format: int32
             * @description Attachment ID.
             */
            Id: number;
            /** @description Attachment Name. */
            Name: string;
            /** @description Attachment Keys. */
            Keys: string[];
            /** @description Array containing Attachment fields. */
            Fields: components["schemas"]["Field"][];
            /** @description Defines if the Attachment is active or not. */
            IsActive: boolean;
            /** @description Defines if the Attachment is required or not. */
            IsRequired: boolean;
        };
        /** @example {
         *       "FieldName": "nome",
         *       "MaxCaracters": "20",
         *       "DomainValues": "Adalberto,Pedro,João"
         *     } */
        Field: {
            /** @description Attachment field name. */
            FieldName: string;
            /** @description Maximum number of characters accepted in the attachment field. */
            MaxCaracters: string;
            /** @description Allowed key values. */
            DomainValues: string | null;
        };
        /**
         * @description Object containing related SKU sellers data.
         * @example {
         *       "SellerId": "1",
         *       "StockKeepingUnitId": 2001773,
         *       "SellerStockKeepingUnitId": "2001773",
         *       "IsActive": true,
         *       "FreightCommissionPercentage": 0,
         *       "ProductCommissionPercentage": 0
         *     }
         */
        SkuSeller: {
            /** @description SKU seller ID. This is the ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
            SellerId: string;
            /**
             * Format: int32
             * @description SKU ID.
             */
            StockKeepingUnitId: number;
            /** @description SKU ID for the SKU seller. */
            SellerStockKeepingUnitId: string;
            /** @description Defines if the SKU is active. */
            IsActive: boolean;
            /** @description Registered value for Seller Freight Commission. */
            FreightCommissionPercentage: number;
            /** @description Registered value for Seller product Commission. */
            ProductCommissionPercentage: number;
        };
        /**
         * @description Object containing SKU images details.
         * @example {
         *       "ImageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168952/7508800GG.jpg",
         *       "ImageName": "",
         *       "FileId": 168952
         *     }
         */
        Image: {
            /** @description Image URL. */
            ImageUrl: string;
            /** @description Image label. */
            ImageName: string | null;
            /**
             * Format: int32
             * @description SKU image ID.
             */
            FileId: number;
        };
        /**
         * @description Object containing related SKU specifications.
         * @example {
         *       "FieldId": 102,
         *       "FieldName": "Cor",
         *       "FieldValueIds": [
         *         266
         *       ],
         *       "FieldValues": [
         *         "Padrão"
         *       ]
         *     }
         */
        SkuSpecification: {
            /**
             * Format: int32
             * @description Specification field ID.
             */
            FieldId: number;
            /** @description Specification field Name. */
            FieldName: string;
            /** @description Array with related specification values IDs. */
            FieldValueIds: number[];
            /** @description Array with related specification values. */
            FieldValues: string[];
        };
        /** @example {
         *       "FieldId": 7,
         *       "FieldName": "Faixa Etária",
         *       "FieldValueIds": [
         *         58,
         *         56,
         *         55,
         *         52
         *       ],
         *       "FieldValues": [
         *         "5 a 6 anos",
         *         "7 a 8 anos",
         *         "9 a 10 anos",
         *         "Acima de 10 anos"
         *       ]
         *     } */
        ProductSpecification: {
            /**
             * Format: int32
             * @description Specification field ID.
             */
            FieldId: number;
            /** @description Specification name. Limited to 100 characters. */
            FieldName: string;
            /** @description Array with related specification values IDs. */
            FieldValueIds: number[];
            /** @description Array with related specification values. */
            FieldValues: string[];
        };
        /**
         * @description Array with alternate SKU IDs, such as EAN and `RefId`.
         * @example {
         *       "Ean": "8781",
         *       "RefId": "878181"
         *     }
         */
        AlternateIds: {
            /** @description SKU EAN. */
            Ean?: string;
            /** @description SKU reference ID. */
            RefId?: string;
        };
        /** @example {
         *       "Id": 310118450,
         *       "ProductId": 2,
         *       "NameComplete": "Caixa de Areia Azul Petmate sku test",
         *       "ComplementName": "",
         *       "ProductName": "Caixa de Areia Azul Petmate",
         *       "ProductDescription": "",
         *       "ProductRefId": "",
         *       "TaxCode": "",
         *       "SkuName": "sku test",
         *       "IsActive": true,
         *       "IsTransported": true,
         *       "IsInventoried": true,
         *       "IsGiftCardRecharge": false,
         *       "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451-55-55/caixa-areia-azul-petmate.jpg?v=637139451191670000",
         *       "DetailUrl": "/caixa-de-areia-azul-petmate/p",
         *       "CSCIdentification": null,
         *       "BrandId": "2000005",
         *       "BrandName": "Petmate",
         *       "IsBrandActive": true,
         *       "Dimension": {
         *         "cubicweight": 0.2083,
         *         "height": 10,
         *         "length": 10,
         *         "weight": 10,
         *         "width": 10
         *       },
         *       "RealDimension": {
         *         "realCubicWeight": 0,
         *         "realHeight": 0,
         *         "realLength": 0,
         *         "realWeight": 0,
         *         "realWidth": 0
         *       },
         *       "ManufacturerCode": "123",
         *       "IsKit": false,
         *       "KitItems": [],
         *       "Services": [],
         *       "Categories": [],
         *       "CategoriesFullPath": [
         *         "/3/15/",
         *         "/3/",
         *         "/1/"
         *       ],
         *       "Attachments": [],
         *       "Collections": [],
         *       "SkuSellers": [
         *         {
         *           "SellerId": "1",
         *           "StockKeepingUnitId": 310118450,
         *           "SellerStockKeepingUnitId": "310118450",
         *           "IsActive": true,
         *           "FreightCommissionPercentage": 0,
         *           "ProductCommissionPercentage": 0
         *         }
         *       ],
         *       "SalesChannels": [
         *         1,
         *         3
         *       ],
         *       "Images": [
         *         {
         *           "ImageUrl": "https://lojadobreno.vteximg.com.br/arquivos/ids/155451/caixa-areia-azul-petmate.jpg?v=637139451191670000",
         *           "ImageName": null,
         *           "FileId": 155451
         *         }
         *       ],
         *       "Videos": [],
         *       "SkuSpecifications": [],
         *       "ProductSpecifications": [],
         *       "ProductClustersIds": "151,158",
         *       "PositionsInClusters": {
         *         "151": 1,
         *         "158": 2
         *       },
         *       "ProductClusterNames": {
         *         "151": "asdfghj",
         *         "158": "Coleção halloween"
         *       },
         *       "ProductClusterHighlights": {
         *         "151": "asdfghj"
         *       },
         *       "ProductCategoryIds": "/3/15/",
         *       "IsDirectCategoryActive": true,
         *       "ProductGlobalCategoryId": 5000,
         *       "ProductCategories": {
         *         "1": "Alimentação",
         *         "3": "Higiene",
         *         "15": "Caixa de Areia"
         *       },
         *       "CommercialConditionId": 1,
         *       "RewardValue": 0,
         *       "AlternateIds": {
         *         "RefId": "1"
         *       },
         *       "AlternateIdValues": [
         *         "1"
         *       ],
         *       "EstimatedDateArrival": null,
         *       "MeasurementUnit": "un",
         *       "UnitMultiplier": 1,
         *       "InformationSource": null,
         *       "ModalType": null,
         *       "KeyWords": "",
         *       "ReleaseDate": "2020-01-06T00:00:00Z",
         *       "ProductIsVisible": true,
         *       "ShowIfNotAvailable": true,
         *       "IsProductActive": true,
         *       "ProductFinalScore": 0
         *     } */
        GetSKUAltID: {
            /**
             * Format: int32
             * @description SKU ID.
             */
            Id: number;
            /**
             * Format: int32
             * @description Product ID.
             */
            ProductId: number;
            /** @description Product name and SKU name combined. */
            NameComplete: string;
            /** @description Product complement name. */
            ComplementName?: string;
            /** @description Product name. */
            ProductName: string;
            /** @description Product description. HTML is allowed. */
            ProductDescription: string;
            /** @description Product reference ID. */
            ProductRefId?: string;
            /** @description SKU tax code. */
            TaxCode?: string;
            /** @description SKU name. */
            SkuName: string;
            /** @description Defines if the SKU is active or not. */
            IsActive: boolean;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsTransported: boolean;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsInventoried: boolean;
            /** @description Defines if the purchase of the SKU will generate reward value for the customer. */
            IsGiftCardRecharge: boolean;
            /** @description SKU image URL. */
            ImageUrl: string;
            /** @description Product slug. */
            DetailUrl: string;
            /** @description SKU seller identification. */
            CSCIdentification: string | null;
            /** @description Brand ID. */
            BrandId: string;
            /** @description Brand name. */
            BrandName: string;
            Dimension: components["schemas"]["Dimension"];
            RealDimension: components["schemas"]["RealDimension"];
            /** @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code. */
            ManufacturerCode: string;
            /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
            IsKit: boolean;
            /** @description Array with SKU IDs of bundle components. */
            KitItems: string[];
            /** @description Array with service IDs that are related to the SKU. */
            Services: string[];
            /** @description Categories of the related product. */
            Categories: string[];
            /** @description Path of categories of the related product. */
            CategoriesFullPath?: string[];
            /** @description Array with attachment IDs that are related to the product. */
            Attachments: components["schemas"]["Attachment"][];
            /** @description Array with collections IDs that are related to the product. */
            Collections: string[];
            /** @description Array with related sellers data. */
            SkuSellers: components["schemas"]["SkuSeller"][];
            /** @description Array of trade policy IDs. */
            SalesChannels: number[];
            /** @description Array of objects with SKU image details. */
            Images: components["schemas"]["Image"][];
            /** @description Array with related SKU specifications. */
            SkuSpecifications: components["schemas"]["SkuSpecification"][];
            /** @description Array with related product specifications. */
            ProductSpecifications: components["schemas"]["ProductSpecification"][];
            /** @description Product cluster IDs separated by comma (`,`). */
            ProductClustersIds: string;
            /** @description Product clusters position in each cluster. Structure: "{Product cluster ID}": {Position}.
             *
             *     `{Product cluster ID}` is a string, while `{Position}` is an integer. */
            PositionsInClusters?: {
                [key: string]: number | undefined;
            };
            /** @description Product clusters names. Structure: "{Product cluster ID}": "{Product cluster name}". Both the key and the value are strings. */
            ProductClusterNames?: {
                [key: string]: string | undefined;
            };
            /** @description Product clusters highlights. Structure: "{Product cluster ID}": "{Product cluster name}". Both the key and the value are strings. */
            ProductClusterHighlights?: {
                [key: string]: string | undefined;
            };
            /** @description Category path composed by category IDs separated by `/`. */
            ProductCategoryIds: string;
            /** @description Indicates if the direct product category is active or not. */
            IsDirectCategoryActive?: boolean;
            /** @description Product global category ID. */
            ProductGlobalCategoryId: number | null;
            /** @description Object containing product categories. Structure: "{CategoryID}": "{CategoryName}". Both the key and the value are strings. */
            ProductCategories: {
                [key: string]: string | undefined;
            };
            /**
             * Format: int32
             * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
             * @default 1
             */
            CommercialConditionId: number;
            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
            RewardValue: number;
            AlternateIds: components["schemas"]["AlternateIds"];
            /** @description Array with values of alternative SKU IDs. */
            AlternateIdValues: string[];
            /** @description SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date. */
            EstimatedDateArrival: string | null;
            /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`. */
            MeasurementUnit: string;
            /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
            UnitMultiplier: number;
            /** @description Information source. */
            InformationSource: string | null;
            /** @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
            ModalType: string | null;
            /** @description Keywords related to the product. */
            KeyWords?: string | null;
            /** @description Release date of the product. */
            ReleaseDate?: string | null;
            /** @description Defines if the product is visible or not. */
            ProductIsVisible?: boolean;
            /** @description Defines if the product will be shown if it is not available. */
            ShowIfNotAvailable?: boolean;
            /** @description Defines if the product is active or not. */
            IsProductActive?: boolean;
            /** @description Product final score. */
            ProductFinalScore?: number;
        };
        /** @example {
         *       "IsPersisted": true,
         *       "Id": 1,
         *       "ProductId": 1,
         *       "IsActive": true,
         *       "Name": "Ração Royal Canin Feline Urinary 500g",
         *       "Height": 6.5,
         *       "RealHeight": 2.2,
         *       "Width": 14,
         *       "RealWidth": 3.3,
         *       "Length": 24,
         *       "RealLength": 4.4,
         *       "WeightKg": 550,
         *       "RealWeightKg": 1.1,
         *       "ModalId": 1,
         *       "RefId": "0001",
         *       "CubicWeight": 1,
         *       "IsKit": false,
         *       "InternalNote": null,
         *       "DateUpdated": "2021-10-29T18:25:00",
         *       "RewardValue": null,
         *       "CommercialConditionId": 1,
         *       "EstimatedDateArrival": null,
         *       "FlagKitItensSellApart": false,
         *       "ManufacturerCode": "",
         *       "ReferenceStockKeepingUnitId": null,
         *       "Position": 1,
         *       "ActivateIfPossible": true,
         *       "MeasurementUnit": "un",
         *       "UnitMultiplier": 300,
         *       "IsInventoried": true,
         *       "IsTransported": true,
         *       "IsGiftCardRecharge": false,
         *       "ModalType": null,
         *       "isKitOptimized": false
         *     } */
        SkulistbyProductId: {
            /** @description Defines if the SKU is persisted. */
            IsPersisted?: boolean;
            /**
             * @deprecated
             * @description Defines if the SKU is removed.
             */
            IsRemoved?: boolean;
            /**
             * Format: int32
             * @description SKU ID.
             */
            Id?: number;
            /**
             * Format: int32
             * @description Product ID.
             */
            ProductId?: number;
            /** @description Defines if the SKU is active or not. */
            IsActive?: boolean;
            /** @description SKU name. */
            Name?: string;
            /** @description SKU height. */
            Height?: number;
            /** @description Real SKU height. */
            RealHeight?: number | null;
            /** @description SKU width. */
            Width?: number;
            /** @description Real SKU width. */
            RealWidth?: number | null;
            /** @description SKU length. */
            Length?: number;
            /** @description Real SKU length. */
            RealLength?: number | null;
            /** @description Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
            WeightKg?: number | null;
            /** @description Real weight of the SKU in the measurement unit [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
            RealWeightKg?: number | null;
            /**
             * Format: int32
             * @description Delivery method (modal type) ID.
             */
            ModalId?: number;
            /** @description Product reference ID. */
            RefId?: string;
            /** @description [Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128). */
            CubicWeight?: number;
            /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
            IsKit?: boolean;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsDynamicKit?: string | null;
            /** @description Internal note. */
            InternalNote?: string | null;
            /** @description Date when the product was updated for the most recent time. */
            DateUpdated?: string;
            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
            RewardValue?: number | null;
            /**
             * Format: int32
             * @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445).
             * @default 1
             */
            CommercialConditionId: number;
            /** @description SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date. */
            EstimatedDateArrival?: string | null;
            /** @description Defines if the SKU bundle items can be sold separately. */
            FlagKitItensSellApart?: boolean;
            /** @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code. */
            ManufacturerCode?: string;
            /** @description SKU reference ID. */
            ReferenceStockKeepingUnitId?: string | null;
            /**
             * Format: int32
             * @description SKU position.
             */
            Position?: number;
            /** @description When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component. */
            ActivateIfPossible?: boolean;
            /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`. */
            MeasurementUnit?: string;
            /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
            UnitMultiplier?: number;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsInventoried?: boolean | null;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsTransported?: boolean | null;
            /** @description Defines if the purchase of the SKU will generate reward value for the customer. */
            IsGiftCardRecharge?: boolean | null;
            /** @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
            ModalType?: string | null;
            /** @description Defines if the SKU is an optimized bundle. */
            isKitOptimized?: boolean;
        };
        CreateSellerRequest: {
            /**
             * @description Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name.
             * @example pedrostore
             */
            SellerId: string;
            /**
             * @description Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.
             * @example My pedrostore
             */
            Name: string;
            /**
             * @description Email of the admin responsible for the seller.
             * @example breno@breno.com
             */
            Email: string;
            /**
             * @description Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).
             * @example Brief description
             */
            Description: string;
            /**
             * @description Text describing the exchange and return policy previously agreed between the marketplace and the seller.
             * @example Exchange return policy text
             */
            ExchangeReturnPolicy: string;
            /**
             * @description Text describing the delivery policy previously agreed between the marketplace and the seller.
             * @example Delivery policy text
             */
            DeliveryPolicy: string;
            /**
             * @description Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.
             * @example false
             */
            UseHybridPaymentOptions: boolean;
            /**
             * @description Seller username.
             * @example myseller
             */
            UserName: string;
            /**
             * @description Seller password.
             * @example passoword
             */
            Password: string;
            /**
             * @description Text describing the security policy previously agreed between the marketplace and the seller.
             * @example Secutity privacy policy text
             */
            SecutityPrivacyPolicy: string;
            /**
             * @description Company registration number.
             * @example 12035072751
             */
            CNPJ: string;
            /**
             * @description CSC identification.
             * @example pedrostore
             */
            CSCIdentification: string;
            /**
             * @description Seller archive ID.
             * @example 1
             */
            ArchiveId: number;
            /**
             * @description Seller URL logo.
             * @example /myseller
             */
            UrlLogo: string;
            /**
             * @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
             * @example 0
             */
            ProductCommissionPercentage: number;
            /**
             * @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
             * @example 0
             */
            FreightCommissionPercentage: number;
            /**
             * @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
             * @example [{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]
             */
            CategoryCommissionPercentage?: string;
            /**
             * @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don't need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.
             * @example http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1
             */
            FulfillmentEndpoint: string;
            /**
             * @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.
             * @example http://pedrostore.vtexcommercestable.com.br/api/catalog_system/
             */
            CatalogSystemEndpoint: string;
            /**
             * @description If the selle is active (`true`) or not (`false`).
             * @example true
             */
            IsActive: boolean;
            /**
             * @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.
             * @example pedrostore
             */
            MerchantName?: string;
            /**
             * @description Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.
             * @example 1
             */
            FulfillmentSellerId: number;
            /**
             * @description Seller type.
             * @example 1
             */
            SellerType: number;
            /**
             * @description Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).
             * @example false
             */
            IsBetterScope: boolean;
            /**
             * @description Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.
             * @example Default
             */
            TrustPolicy?: string;
        };
        UpdateSellerRequest: {
            /**
             * @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
             * @example pedrostore
             */
            SellerId: string;
            /**
             * @description Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method.
             * @example My pedrostore
             */
            Name: string;
            /**
             * @description Email of the admin responsible for the seller.
             * @example breno@breno.com
             */
            Email: string;
            /**
             * @description Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563).
             * @example Brief description
             */
            Description: string;
            /**
             * @description Text describing the exchange and return policy previously agreed between the marketplace and the seller.
             * @example Exchange return policy text
             */
            ExchangeReturnPolicy: string;
            /**
             * @description Text describing the delivery policy previously agreed between the marketplace and the seller.
             * @example Delivery policy text
             */
            DeliveryPolicy: string;
            /**
             * @description Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.
             * @example false
             */
            UseHybridPaymentOptions: boolean;
            /**
             * @description Seller username.
             * @example myseller
             */
            UserName: string;
            /**
             * @description Seller password.
             * @example passoword
             */
            Password: string;
            /**
             * @description Text describing the security policy previously agreed between the marketplace and the seller.
             * @example Secutity privacy policy text
             */
            SecutityPrivacyPolicy: string;
            /**
             * @description Company registration number.
             * @example 12035072751
             */
            CNPJ: string;
            /**
             * @description CSC identification.
             * @example pedrostore
             */
            CSCIdentification: string;
            /**
             * @description Seller archive ID.
             * @example 1
             */
            ArchiveId: number;
            /**
             * @description Seller URL logo.
             * @example /myseller
             */
            UrlLogo: string;
            /**
             * @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
             * @example 0
             */
            ProductCommissionPercentage: number;
            /**
             * @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
             * @example 0
             */
            FreightCommissionPercentage: number;
            /**
             * @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
             * @example [{"CategoryId":14,"ProductCommission":15.0,"FreightCommission":0.0}]
             */
            CategoryCommissionPercentage?: string;
            /**
             * @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don't need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added.
             * @example http://pedrostore.vtexcommercestable.com.br/api/fulfillment?affiliateid=LDB&sc=1
             */
            FulfillmentEndpoint: string;
            /**
             * @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`.
             * @example http://pedrostore.vtexcommercestable.com.br/api/catalog_system/
             */
            CatalogSystemEndpoint: string;
            /**
             * @description If the selle is active (`true`) or not (`false`).
             * @example true
             */
            IsActive: boolean;
            /**
             * @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-payment--6k5JidhYRUxileNolY2VLx) article to know more.
             * @example pedrostore
             */
            MerchantName?: string;
            /**
             * @description Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank.
             * @example 1
             */
            FulfillmentSellerId: number;
            /**
             * @description Seller type.
             * @example 1
             */
            SellerType: number;
            /**
             * @description Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI).
             * @example false
             */
            IsBetterScope: boolean;
            /**
             * @description Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`.
             * @example Default
             */
            TrustPolicy?: string;
        };
        /**
         * @description Array of objects.
         * @example [
         *       {
         *         "Name": "Specification A",
         *         "CategoryId": 1,
         *         "FieldId": 33,
         *         "IsActive": true,
         *         "IsStockKeepingUnit": false
         *       },
         *       {
         *         "Name": "Specification B",
         *         "CategoryId": 1,
         *         "FieldId": 34,
         *         "IsActive": true,
         *         "IsStockKeepingUnit": false
         *       },
         *       {
         *         "Name": "Specification C",
         *         "CategoryId": 1,
         *         "FieldId": 35,
         *         "IsActive": false,
         *         "IsStockKeepingUnit": false
         *       }
         *     ]
         */
        CategorySpecification: {
            /**
             * @description Specification name. Limited to 100 characters.
             * @example Composition
             */
            Name?: string;
            /**
             * @description Category ID.
             * @example 1
             */
            CategoryId?: number;
            /**
             * @description Specification field ID.
             * @example 1
             */
            FieldId?: number;
            /**
             * @description Defines if the specification is active.
             * @example true
             */
            IsActive?: boolean;
            /**
             * @description Defines if it is an SKU specification.
             * @example true
             */
            IsStockKeepingUnit?: boolean;
        }[];
        /** @example {
         *       "FieldValueId": 52,
         *       "Value": "0 a 6 meses",
         *       "IsActive": true,
         *       "Position": 1
         *     } */
        GetSpecFieldValue: {
            /**
             * Format: int32
             * @description Specification field value ID.
             */
            FieldValueId: number;
            /** @description Specification field value. */
            Value: string;
            /** @description Defines if the specification field is active (`true`) or inactive (`false`). */
            IsActive: boolean;
            /**
             * Format: int32
             * @description Specification field value position.
             */
            Position: number;
        };
        /** @example {
         *       "Name": "Material",
         *       "CategoryId": 4,
         *       "FieldId": 88,
         *       "IsActive": true,
         *       "IsRequired": true,
         *       "FieldTypeId": 1,
         *       "FieldValueId": 1,
         *       "IsStockKeepingUnit": false,
         *       "Description": "Composition of the product.",
         *       "IsFilter": true,
         *       "IsOnProductDetails": false,
         *       "Position": 1,
         *       "IsWizard": false,
         *       "IsTopMenuLinkActive": true,
         *       "IsSideMenuLinkActive": true,
         *       "DefaultValue": null,
         *       "FieldGroupId": 20,
         *       "FieldGroupName": "Clothes specifications"
         *     } */
        SpecificationsInsertFieldRequest: {
            /** @description Specification field name. Limited to 100 characters. */
            Name: string;
            /** @description Category ID. */
            CategoryId: number | null;
            /** @description Specification field ID. */
            FieldId: number | null;
            /** @description Defines if the specification field is active. The default value is `true`. */
            IsActive: boolean;
            /** @description Makes the specification field mandatory (`true`) or optional (`false`). */
            IsRequired: boolean;
            /**
             * Format: int32
             * @description Specification field type ID.
             */
            FieldTypeId: number;
            /** @description Specification field value ID. */
            FieldValueId: number | null;
            /** @description Specification field description. */
            Description: string | null;
            /** @description If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field. */
            IsStockKeepingUnit: boolean;
            /** @description Store Framework - Deprecated.
             *     Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar. */
            IsFilter: boolean;
            /** @description Store Framework - Deprecated.
             *     Legacy CMS Portal -If specification is visible on the product page. */
            IsOnProductDetails: boolean;
            /**
             * Format: int32
             * @description Specification field position.
             */
            Position: number;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsWizard: boolean;
            /** @description Store Framework - Deprecated.
             *     Legacy CMS Portal - To make the specification visible in the store's upper menu. */
            IsTopMenuLinkActive: boolean;
            /** @description Store Framework - Deprecated.
             *     Legacy CMS Portal - To make the specification field clickable in the search navigation bar. */
            IsSideMenuLinkActive: boolean;
            /** @description Specification field default value. */
            DefaultValue: string | null;
            /**
             * Format: int32
             * @description Specification field group ID.
             */
            FieldGroupId: number;
            /** @description Specification field group name. */
            FieldGroupName: string;
        };
        SpecificationsInsertFieldUpdateRequest: {
            /** @description Specification field ID. */
            Name: string;
            /** @description Category ID. */
            CategoryId: number | null;
            /** @description Specification field ID. */
            FieldId: number | null;
            /**
             * @description Enables(`true`) or disables (`false`) the specification field.
             * @example true
             */
            IsActive: boolean;
            /** @description Makes the specification field mandatory (`true`) or optional (`false`). */
            IsRequired: boolean;
            /**
             * Format: int32
             * @description Specification field type ID.
             */
            FieldTypeId: number;
            /** @description Specification field value ID. */
            FieldValueId?: number | null;
            /** @description Specification field description. */
            Description: string | null;
            /** @description If `true`, it will be added as a SKU specification field. If `false`, it will be added as a product specification field. */
            IsStockKeepingUnit: boolean;
            /** @description Store Framework - Deprecated.
             *     Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar. */
            IsFilter: boolean;
            /** @description Store Framework - Deprecated.
             *     Legacy CMS Portal -If specification is visible on the product page. */
            IsOnProductDetails: boolean;
            /**
             * Format: int32
             * @description Specification field position.
             */
            Position: number;
            /**
             * @deprecated
             * @description Deprecated field.
             */
            IsWizard: boolean;
            /** @description Store Framework - Deprecated.
             *     Legacy CMS Portal - To make the specification visible in the store's upper menu. */
            IsTopMenuLinkActive: boolean;
            /**
             * @description Store Framework - Deprecated.
             *     Legacy CMS Portal - To make the specification field clickable in the search navigation bar.
             * @example false
             */
            IsSideMenuLinkActive: boolean;
            /**
             * @description Specification field default value.
             * @example null
             */
            DefaultValue: string | null;
            /**
             * Format: int32
             * @description Specification field group ID.
             * @example 1
             */
            FieldGroupId: number;
            /**
             * @description Specification field group name.
             * @example Name
             */
            FieldGroupName: string;
        };
        /** @example {
         *       "FieldValueId": 143,
         *       "FieldId": 34,
         *       "Name": "Cotton",
         *       "Text": "Cotton fibers",
         *       "IsActive": true,
         *       "Position": 100
         *     } */
        SpecificationsInsertFieldValueRequest: {
            /**
             * Format: int32
             * @description Specification field ID.
             */
            FieldId: number;
            /** @description Specification field value name. */
            Name: string;
            /** @description Specification field value description. */
            Text: string;
            /** @description Defines if the specification field value is active (`true`) or inactive (`false`). */
            IsActive: boolean;
            /**
             * Format: int32
             * @description Specification field value position.
             */
            Position: number;
        };
        /** @example {
         *       "FieldId": 1,
         *       "FieldValueId": 143,
         *       "Name": "Cotton",
         *       "Text": "Cotton fibers",
         *       "IsActive": true,
         *       "Position": 100
         *     } */
        SpecificationsUpdateFieldValueRequest: {
            /** @description Specification field ID. */
            FieldId: number | null;
            /** @description Specification field value name. */
            Name: string;
            /** @description Specification field value description. */
            Text: string | null;
            /** @description Defines if the specification field value is active (`true`) or inactive (`false`). */
            IsActive: boolean;
            /**
             * Format: int32
             * @description Specification field position.
             */
            Position: number;
        };
        /** @example {
         *       "CategoryId": 1,
         *       "Id": 4,
         *       "Name": "Sizes",
         *       "Position": 1
         *     } */
        SpecificationsGroup: {
            /** @description Category ID. */
            CategoryId: number | null;
            /**
             * Format: int32
             * @description Specification group ID.
             */
            Id: number;
            /** @description Specification group name. */
            Name: string;
            /**
             * Format: int32
             * @description Specification group position.
             */
            Position: number | null;
        };
        /** @example {
         *       "CategoryId": 1,
         *       "Name": "GroupName1"
         *     } */
        SpecificationGroupInsertRequest: {
            /**
             * Format: int32
             * @description Category ID.
             */
            CategoryId: number;
            /** @description Specification group name. */
            Name: string;
        };
        /** @example [
         *       {
         *         "Id": 61,
         *         "SkuId": 7,
         *         "ParentSkuId": 1,
         *         "ComplementTypeId": 1
         *       }
         *     ] */
        SkuComplement: {
            /** @description SKU complement's unique numerical identifier. */
            Id?: number;
            /** @description ID of the SKU which will be inserted as a complement in the parent SKU. */
            SkuId?: number;
            /** @description ID of the parent SKU, where the complement will be inserted. */
            ParentSkuId?: number;
            /**
             * @description Complement type ID. This represents the type of the complement. The possible values are: `1` for **Accessory**; `2` for  **Suggestion**; `3` for **Similar product**; `5` for **Show together**.
             * @enum {integer}
             */
            ComplementTypeId?: 1 | 2 | 3 | 4 | 5;
        }[];
        /** @example {
         *       "Id": 7,
         *       "StockKeepingUnitParent": 7,
         *       "StockKeepingUnitId": 1,
         *       "Quantity": 1,
         *       "UnitPrice": 50
         *     } */
        SkuKit: {
            /** @description SKU kit ID, same as `StockKeepingUnitParent`. */
            Id?: number;
            /** @description Parent SKU ID. */
            StockKeepingUnitParent?: number;
            /** @description SKU ID of the kit component. */
            StockKeepingUnitId?: number;
            /** @description Component quantity. */
            Quantity?: number;
            /** @description Component price per unit. */
            UnitPrice?: number;
        };
        /** @example {
         *       "Id": 1505,
         *       "SkuId": 1234568387,
         *       "FieldId": 193,
         *       "FieldValueId": 360,
         *       "Text": "Size 10"
         *     } */
        SKUSpecificationResponse: {
            /** @description ID of the association of the specification and the SKU. This ID is used to update or delete the specification. */
            Id?: number;
            /** @description SKU ID. */
            SkuId?: number;
            /** @description Specification field ID. */
            FieldId?: number;
            /** @description Specification value ID. Required only for `FieldTypeId` as `5`, `6` and `7`. */
            FieldValueId?: number;
            /** @description Value of specification. Only for `FieldTypeId` different from `5`, `6` and `7`. */
            Text?: string;
        };
        /** @example {
         *       "Id": 1,
         *       "SkuServiceTypeId": 1,
         *       "SkuServiceValueId": 1,
         *       "SkuId": 1,
         *       "Name": "name",
         *       "Text": "text",
         *       "IsActive": false
         *     } */
        SKUService: {
            /**
             * @description SKU service ID.
             * @example 1
             */
            Id?: number;
            /**
             * @description SKU service type ID.
             * @example 1
             */
            SkuServiceTypeId?: number;
            /**
             * @description SKU service value ID.
             * @example 1
             */
            SkuServiceValueId?: number;
            /**
             * @description SKU ID.
             * @example 1
             */
            SkuId?: number;
            /**
             * @description SKU service name. Maximum of 50 characters.
             * @example Engraving
             */
            Name?: string;
            /**
             * @description Internal description of the SKU service. Maximum of 100 characters.
             * @example Name engraving additional service.
             */
            Text?: string;
            /**
             * @description Defines if the SKU service is active or not.
             * @example true
             */
            IsActive?: boolean;
        };
        SKUServiceTypeRequest: {
            /**
             * @description SKU service type name. Maximum of 100 characters.
             * @default Test API Sku Services
             */
            Name: string;
            /**
             * @description Defines if the SKU service type is active or not.
             * @default true
             */
            IsActive: boolean;
            /**
             * @deprecated
             * @description Deprecated field.
             * @example false
             */
            ShowOnProductFront: boolean;
            /**
             * @description Defines if the SKU service type is displayed on the cart screen.
             * @example false
             */
            ShowOnCartFront: boolean;
            /**
             * @description Defines if the SKU service type has an attachment.
             * @example false
             */
            ShowOnAttachmentFront: boolean;
            /**
             * @description Defines if the SKU service type can be associated with an attachment or not.
             * @example false
             */
            ShowOnFileUpload: boolean;
            /**
             * @description Defines if the SKU service type is displayed as a Gift Card.
             * @example false
             */
            IsGiftCard: boolean;
            /**
             * @description Defines if the SKU service type is mandatory.
             * @example false
             */
            IsRequired: boolean;
        };
        /** @example {
         *       "Id": 2,
         *       "Name": "Test API SKU services",
         *       "IsActive": true,
         *       "ShowOnProductFront": true,
         *       "ShowOnCartFront": true,
         *       "ShowOnAttachmentFront": true,
         *       "ShowOnFileUpload": true,
         *       "IsGiftCard": true,
         *       "IsRequired": true
         *     } */
        SKUServiceTypeResponse: {
            /**
             * @description SKU service type ID.
             * @example 2
             */
            Id?: number;
            /**
             * @description SKU service type name. Maximum of 100 characters.
             * @example Test API Sku Services
             */
            Name?: string;
            /**
             * @description Defines if the SKU service type is active or not.
             * @example true
             */
            IsActive?: boolean;
            /**
             * @deprecated
             * @description Deprecated field.
             * @example false
             */
            ShowOnProductFront?: boolean;
            /**
             * @description Defines if the SKU service type is displayed on the cart screen.
             * @example false
             */
            ShowOnCartFront?: boolean;
            /**
             * @description Defines if the SKU service type has an attachment.
             * @default false
             */
            ShowOnAttachmentFront: boolean;
            /**
             * @description Defines if the SKU service type can be associated with an attachment or not.
             * @default false
             */
            ShowOnFileUpload: boolean;
            /**
             * @description Defines if the SKU service type is displayed as a Gift Card.
             * @default false
             */
            IsGiftCard: boolean;
            /**
             * @description Defines if the SKU service type is mandatory.
             * @default false
             */
            IsRequired: boolean;
        };
        /** @example {
         *       "SkuServiceTypeId": 2,
         *       "Name": "Test ServiceValue API",
         *       "Value": 10.5,
         *       "Cost": 10.5
         *     } */
        SKUServiceValueRequest: {
            /**
             * @description SKU service type ID.
             * @example 2
             */
            SkuServiceTypeId: number;
            /**
             * @description SKU service value name. Maximum of 100 characters.
             * @example Test ServiceValue API
             */
            Name: string;
            /**
             * @description SKU service value value.
             * @example 10.5
             */
            Value: number;
            /**
             * @description SKU service value cost.
             * @example 10.5
             */
            Cost: number;
        };
        /** @example {
         *       "Id": 2,
         *       "SkuServiceTypeId": 2,
         *       "Name": "Test ServiceValue API",
         *       "Value": 10.5,
         *       "Cost": 10.5
         *     } */
        SKUServiceValueResponse: {
            /**
             * @description SKU service value ID.
             * @example 2
             */
            Id?: number;
            /**
             * @description SKU service type ID.
             * @example 2
             */
            SkuServiceTypeId: number;
            /**
             * @description SKU service value name. Maximum of 100 characters.
             * @example Test ServiceValue API
             */
            Name: string;
            /**
             * @description SKU service value value.
             * @example 10.5
             */
            Value: number;
            /**
             * @description SKU service value cost.
             * @example 10.5
             */
            Cost: number;
        };
        /**
         * @description Object containing brand information.
         * @example {
         *       "Id": 2000013,
         *       "Name": "Orma Carbono2",
         *       "Text": "Orma Carbon2",
         *       "Keywords": "orma",
         *       "SiteTitle": "Orma Carbon2",
         *       "Active": true,
         *       "MenuHome": true,
         *       "AdWordsRemarketingCode": "",
         *       "LomadeeCampaignCode": "",
         *       "Score": null,
         *       "LinkId": null
         *     }
         */
        BrandCreateUpdate: {
            /**
             * @description Brand's unique numerical identifier.
             * @example 2000003
             */
            Id: number;
            /**
             * @description Brand name.
             * @example Adidas
             */
            Name: string;
            /**
             * @description Meta description for the brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description.
             * @example Adidas
             */
            Text?: string;
            /**
             * @description Store Framework - Deprecated.
             *     Legacy CMS Portal - Alternative search terms that will lead to the specific brand. The user can find the desired brand even when misspelling it. Used especially when words are of foreign origin and have a distinct spelling that is transcribed into a generic one, or when small spelling mistakes occur.
             * @example adidas
             */
            Keywords?: string;
            /**
             * @description Meta title for the brand page.
             * @example Adidas
             */
            SiteTitle?: string;
            /**
             * @deprecated
             * @description This is a legacy field. Do not take this information into consideration.
             */
            AdWordsRemarketingCode?: string;
            /**
             * @deprecated
             * @description This is a legacy field. Do not take this information into consideration.
             */
            LomadeeCampaignCode?: string;
            /**
             * @description Store Framework - Deprecated
             *     Legacy CMS Portal - Value used to set the priority on the search result page.
             * @example 10
             */
            Score?: number | null;
            /**
             * @description Store Framework - Deprecated.
             *     Legacy CMS Portal - Defines if the brand appears in the Department Menu control (`<vtex.cmc:departmentNavigator/>`).
             * @example true
             */
            MenuHome?: boolean;
            /**
             * @description Defines if the brand is active (`true`) or not (`false`).
             * @example true
             */
            Active?: boolean;
            /**
             * @description Brand page slug. Only lowercase letters and hyphens (`-`) are allowed.
             * @example adidas-sports
             */
            LinkId?: string | null;
        };
        /** @description Object containing brand information. */
        BrandGet: {
            /** @description Brand's unique numerical identifier. */
            id: number;
            /** @description Brand name. */
            name: string;
            /** @description Defines if the brand is active (`true`) or not (`false`). */
            isActive: boolean;
            /** @description Meta title for the brand page. */
            title: string;
            /** @description Meta Description for the brand page. A brief description of the brand, displayed by search engines. Since search engines can only display less than 150 characters, we recommend not exceeding this character limit when creating the description. */
            metaTagDescription: string;
            /** @description URL of the brand's image. */
            imageUrl: string | null;
        };
        /** @example {
         *       "Id": 8,
         *       "Name": "Ingredients",
         *       "IsRequired": true,
         *       "IsActive": true,
         *       "Domains": [
         *         {
         *           "FieldName": "Sauce",
         *           "MaxCaracters": "",
         *           "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
         *         },
         *         {
         *           "FieldName": "Toppings",
         *           "MaxCaracters": "",
         *           "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
         *         }
         *       ]
         *     } */
        AttachmentResponse: {
            /**
             * @description Attachment ID.
             * @example 8
             */
            Id: number;
            /**
             * @description Attachment name.
             * @example Shirt customization
             */
            Name: string;
            /**
             * @description Defines if the attachment is required or not.
             * @example false
             */
            IsRequired: boolean;
            /**
             * @description Defines if the attachment is active or not.
             * @example false
             */
            IsActive: boolean;
            /** @description List of characteristics related to the attachment. */
            Domains: {
                /**
                 * @description Attachment key name.
                 * @example Number
                 */
                FieldName?: string;
                /**
                 * @description Maximum number of characters in the attachment key.
                 * @example 1
                 */
                MaxCaracters?: string;
                /**
                 * @description Allowed key values.
                 * @example 7,9,10
                 */
                DomainValues?: string;
            }[];
        };
        /** @example {
         *       "Name": "Ingredients",
         *       "IsRequired": true,
         *       "IsActive": true,
         *       "Domains": [
         *         {
         *           "FieldName": "Sauce",
         *           "MaxCaracters": "",
         *           "DomainValues": "[1-2]#9[1-1][1]basic;#11[0-1][1]basic"
         *         },
         *         {
         *           "FieldName": "Toppings",
         *           "MaxCaracters": "",
         *           "DomainValues": "[0-10]#8[0-3][0]medium;#9[0-3][0]medium;#10[0-3][0]medium;#11[0-3][0]medium;#36[0-3][0]medium;#37[0-3][0]medium;#38[0-3][0]medium"
         *         }
         *       ]
         *     } */
        AttachmentRequest: {
            /**
             * @description Attachment name.
             * @example Shirt customization
             */
            Name: string;
            /**
             * @description Defines if the attachment is required or not.
             * @example false
             */
            IsRequired: boolean;
            /**
             * @description Defines if the attachment is active or not.
             * @example false
             */
            IsActive: boolean;
            /** @description List of characteristics related to the attachment. */
            Domains: {
                /**
                 * @description Attachment key name.
                 * @example Number
                 */
                FieldName?: string;
                /**
                 * @description Maximum number of characters in the attachment key.
                 * @example 1
                 */
                MaxCaracters?: string;
                /**
                 * @description Allowed key values.
                 * @example 7,9,10
                 */
                DomainValues?: string;
            }[];
        };
        SupplierRequest: {
            /**
             * @description Supplier Name.
             * @example Supplier
             */
            Name: string;
            /**
             * @description Supplier Corporate Name.
             * @example TopStore
             */
            CorporateName: string;
            /**
             * @description State Inscription.
             * @example 123456
             */
            StateInscription: string;
            /**
             * @description Corporate legal ID.
             * @example 33304981001272
             */
            Cnpj: string;
            /**
             * @description Supplier Phone.
             * @example 3333333333
             */
            Phone: string;
            /**
             * @description Supplier Cellphone.
             * @example 4444444444
             */
            CellPhone: string;
            /**
             * @description Supplier Corporate Phone.
             * @example 5555555555
             */
            CorportePhone: string;
            /**
             * @description Supplier email.
             * @example email@email.com
             */
            Email: string;
            /**
             * @description Defines if the Supplier is active (`true`) or not (`false`).
             * @example false
             */
            IsActive: boolean;
        };
        SupplierResponse: {
            /**
             * @description Supplier unique identifier code.
             * @example 123
             */
            Id?: number;
            /**
             * @description Supplier Name.
             * @example Supplier
             */
            Name?: string;
            /**
             * @description Supplier Corporate Name.
             * @example TopStore
             */
            CorporateName?: string;
            /**
             * @description State Inscription.
             * @example 123456
             */
            StateInscription?: string;
            /**
             * @description Corporate legal ID.
             * @example 33304981001272
             */
            Cnpj?: string;
            /**
             * @description Supplier Phone.
             * @example 3333333333
             */
            Phone?: string;
            /**
             * @description Supplier Cellphone.
             * @example 4444444444
             */
            CellPhone?: string;
            /**
             * @description Supplier Corporate Phone.
             * @example 5555555555
             */
            CorportePhone?: string;
            /**
             * @description Supplier email.
             * @example email@email.com
             */
            Email?: string;
            /**
             * @description Defines if the Supplier is active (`true`) or not (`false`).
             * @example false
             */
            IsActive?: boolean;
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    ProductAndSkuIds: {
        parameters: {
            query?: {
                /** @description ID of the category from which you need to retrieve products and SKUs. */
                categoryId?: number;
                /** @description Insert the ID that will start the request result. */
                _from?: number;
                /** @description Insert the ID that will end the request result. */
                _to?: number;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                        /** @description Object composed of product IDs and SKU IDs, where the parent ID is from products and the children IDs are from SKUs. */
                        data?: {
                            /** @description Array with SKU IDs of a certain product. */
                            "Product ID"?: number[];
                        };
                        /** @description Object with information about the product and SKUs list. */
                        range?: {
                            /** @description Total quantity of SKUs. */
                            total?: number;
                            /** @description Initial product ID. */
                            from?: number;
                            /** @description Final product ID. */
                            to?: number;
                        };
                    };
                };
            };
        };
    };
    GetProductbyid: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: string;
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
                        /** @description Product's unique numerical identifier. */
                        Id?: number;
                        /** @description Product's name. Limited to 150 characters. */
                        Name?: string;
                        /** @description Department ID according to the product's category. */
                        DepartmentId?: number;
                        /** @description Category ID associated with this product. */
                        CategoryId?: number;
                        /** @description Brand ID associated with this product. */
                        BrandId?: number;
                        /** @description Slug that will be used to build the product page URL. If it not informed, it will be generated according to the product's name replacing spaces and special characters by hyphens (`-`). */
                        LinkId?: string;
                        /** @description Product Reference Code. */
                        RefId?: string;
                        /** @description Shows (`true`) or hides (`false`) the product in search result and product pages, but the product can still be added to the shopping cart. Usually applicable for gifts. */
                        IsVisible?: boolean;
                        /** @description Product description. */
                        Description?: string;
                        /** @description Short product description. This information can be displayed on both the product page and the shelf, using the following controls:
                         *      Store Framework: `$product.DescriptionShort`.
                         *      Legacy CMS Portal: `<vtex.cmc:productDescriptionShort/>`. */
                        DescriptionShort?: string;
                        /** @description Used to assist in the ordering of the search result of the site. Using the `O=OrderByReleaseDateDESC` query string, you can pull this value and show the display order by release date. This attribute is also used as a condition for dynamic collections. */
                        ReleaseDate?: string;
                        /** @description Store Framework: Deprecated.
                         *     Legacy CMS Portal: Keywords or synonyms related to the product, separated by comma (`,`). "Television", for example, can have a substitute word like "TV". This field is important to make your searches more comprehensive. */
                        KeyWords?: string;
                        /** @description Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO. */
                        Title?: string;
                        /** @description Activate (`true`) or inactivate (`false`) product. */
                        IsActive?: boolean;
                        /** @description Product tax code, used for tax calculation. */
                        TaxCode?: string;
                        /** @description Brief description of the product for SEO. It is recommended not to exceed 150 characters. */
                        MetaTagDescription?: string;
                        /**
                         * @deprecated
                         * @description Deprecated field.
                         */
                        SupplierId?: number | null;
                        /** @description If `true`, activates the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) option when the product is out of stock. */
                        ShowWithoutStock?: boolean;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         */
                        AdWordsRemarketingCode?: string;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         */
                        LomadeeCampaignCode?: string;
                        /** @description Value used to set the priority on the search result page. */
                        Score?: number;
                    };
                };
            };
        };
    };
    ProductandTradePolicy: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: number;
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
                        Id?: number;
                        /** @description Product's name. Limited to 150 characters. */
                        Name?: string;
                        /** @description Product department ID. */
                        DepartmentId?: number;
                        /** @description Product category ID. */
                        CategoryId?: number;
                        /** @description Product brand ID. */
                        BrandId?: number;
                        /** @description Product text link. */
                        LinkId?: string;
                        /** @description Product reference code. */
                        RefId?: string;
                        /** @description If the product is visible on the store. */
                        IsVisible?: boolean;
                        /** @description Product description. */
                        Description?: string;
                        /** @description Product complement name. */
                        DescriptionShort?: string;
                        /** @description Product release date. */
                        ReleaseDate?: string;
                        /** @description Substitutes words for the product. */
                        KeyWords?: string;
                        /** @description Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO. */
                        Title?: string;
                        /** @description If the product is active (`true`) or not (`false`) at the store. */
                        IsActive?: boolean;
                        /** @description Product fiscal code. */
                        TaxCode?: string;
                        /** @description Product meta tag description. */
                        MetaTagDescription?: string;
                        /** @description Product supplier ID. */
                        SupplierId?: number;
                        /** @description Defines if the product will be shown in the store even if it's out of stock (`true`) or not (`false`). */
                        ShowWithoutStock?: boolean;
                        /** @description List with the IDs of trade policies where the product is included. */
                        ListStoreId?: number[];
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         */
                        AdWordsRemarketingCode?: string;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         */
                        LomadeeCampaignCode?: string;
                    };
                };
            };
        };
    };
    ProductbyRefId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product reference code. */
                refId: string;
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
                        /** @description ID of the product. */
                        Id?: number;
                        /** @description Name of the product. */
                        Name?: string;
                        /** @description ID of product department. */
                        DepartmentId?: number;
                        /** @description ID of product category. */
                        CategoryId?: number;
                        /** @description ID of the product brand. */
                        BrandId?: number;
                        /** @description Category URL. */
                        LinkId?: string;
                        /** @description Product Reference ID. */
                        RefId?: string;
                        /** @description If the product are visible in search and list pages. */
                        IsVisible?: boolean;
                        /** @description Product Description, HTML is allowed. */
                        Description?: string;
                        /** @description Product Short Description. */
                        DescriptionShort?: string;
                        /** @description Product Release Date, for list ordering and product cluster highlight. */
                        ReleaseDate?: string;
                        /** @description Alternatives Keywords to improve the product findability. */
                        KeyWords?: string;
                        /** @description Product's Title tag. Limited to 150 characters. It is presented in the browser tab and corresponds to the title of the product page. This field is important for SEO. */
                        Title?: string;
                        /** @description If the product is Active. */
                        IsActive?: boolean;
                        /** @description SKU Tax Code. */
                        TaxCode?: string;
                        /** @description Meta Description for the product page. */
                        MetaTagDescription?: string;
                        /** @description Product Supplier ID. */
                        SupplierId?: number;
                        /** @description If the product can be visible without stock. */
                        ShowWithoutStock?: boolean;
                        /** @description Array with the ID of all the trade policies that are related to the product. */
                        ListStoreId?: number[];
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         */
                        AdWordsRemarketingCode?: string;
                        /**
                         * @deprecated
                         * @description This is a legacy field. Do not take this information into consideration.
                         */
                        LomadeeCampaignCode?: string;
                    };
                };
            };
        };
    };
    ProductVariations: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: number;
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
                        /** @description Product's unique numerical identifier. */
                        productId?: number;
                        /** @description Product name. */
                        name?: string;
                        /** @description Trade policy ID. */
                        salesChannel?: string;
                        /** @description Defines if the product is available (`true`) or not (`false`). */
                        available?: boolean;
                        /** @description Defines the mannner SKUs are displayed. */
                        displayMode?: string;
                        /** @description Lists SKU specifications. */
                        dimensions?: string[];
                        /** @description Lists SKU specifications and their Field type, in the following format: `"{specificationName}":"{fieldType}"`. */
                        dimensionsInputType?: Record<string, never>;
                        /** @description Lists SKU specifications and their possible values inside arrays. */
                        dimensionsMap?: Record<string, never>;
                        /** @description Array containing information about the product's SKUs. */
                        skus?: {
                            /** @description SKU ID. */
                            sku?: number;
                            /** @description SKU Name. */
                            skuname?: string;
                            /** @description Lists SKU specifications and their respective values. */
                            dimensions?: Record<string, never>;
                            /** @description Defines if the SKU is available (`true`) or not (`false`). */
                            available?: boolean;
                            /** @description Available quantity of the SKU in stock. */
                            availablequantity?: number;
                            /** @description Cache version used to call Checkout. */
                            cacheVersionUsedToCallCheckout?: string | null;
                            /** @description List price formatted according to the valid currency. */
                            listPriceFormated?: string;
                            /** @description List price. */
                            listPrice?: number;
                            /** @description Tax value formatted according to the valid currency. */
                            taxFormated?: string;
                            /** @description Tax value. */
                            taxAsInt?: number;
                            /** @description Best price formatted according to the valid currency. */
                            bestPriceFormated?: string;
                            /** @description Best price. */
                            bestPrice?: number;
                            /** @description Spot price. */
                            spotPrice?: number;
                            /** @description Number of installments. */
                            installments?: number;
                            /** @description Value of installments. */
                            installmentsValue?: number;
                            /** @description Interest rate of installments. */
                            installmentsInsterestRate?: number | null;
                            /** @description SKU image URL. */
                            image?: string;
                            /** @description Seller ID. */
                            sellerId?: string;
                            /** @description SKU measures. */
                            measures?: {
                                /** @description Cubic weight. */
                                cubicweight?: number;
                                /** @description Height. */
                                height?: number;
                                /** @description Length. */
                                length?: number;
                                /** @description Weight. */
                                weight?: number;
                                /** @description Width. */
                                width?: number;
                            };
                            /** @description SKU Unit Multiplier. */
                            unitMultiplier?: number;
                            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
                            rewardValue?: number;
                        }[];
                    };
                };
            };
        };
    };
    GetProductSpecification: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: number;
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
                    "application/json": components["schemas"]["GetorUpdateProductSpecification"][];
                };
            };
        };
    };
    UpdateProductSpecification: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique identifier. */
                productId: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GetorUpdateProductSpecification"][];
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
    GetProductSpecificationbyProductID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: number;
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
                        /** @description ID of the association of the specification and the product. This ID is used to update or delete the specification. */
                        Id?: number;
                        /** @description Product ID. */
                        ProductId?: number;
                        /** @description Specification field ID. */
                        FieldId?: number;
                        /** @description Current specification value ID. */
                        FieldValueId?: number;
                        /** @description Current specification value text. */
                        Text?: string;
                    }[];
                };
            };
        };
    };
    DeleteAllProductSpecifications: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: number;
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
    DeleteaProductSpecification: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: number;
                /** @description Product specification's unique numerical identifier. */
                specificationId: number;
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
    ListallSKUIDs: {
        parameters: {
            query: {
                /** @description Number of the page from where you need to retrieve SKU IDs. */
                page: number;
                /** @description Size of the page from where you need retrieve SKU IDs. The maximum value is `1000`. */
                pagesize: number;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                    "application/json": number[];
                };
            };
        };
    };
    SkuContext: {
        parameters: {
            query?: {
                /** @description Trade policy's unique identifier number. */
                sc?: number;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description SKU's unique identifier number. */
                skuId: number;
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
                    "application/json": components["schemas"]["GetSKUandContext"];
                };
            };
        };
    };
    SkuIdbyRefId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description SKU reference ID. */
                RefId: string;
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
    SkubyAlternateId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product EAN or `RefId`. */
                alternateId: number;
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
                    "application/json": components["schemas"]["GetSKUAltID"];
                };
            };
        };
    };
    SkulistbyProductId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: number;
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
                    "application/json": components["schemas"]["SkulistbyProductId"][];
                };
            };
        };
    };
    SkuIdlistbyRefIdlist: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": string[];
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
                        [key: string]: string | undefined;
                    };
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Sku: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description SKU unique identifier number. */
                skuId: number;
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
                        /** @description SKU unique identifier. */
                        Id?: number;
                        /** @description ID of the product associated with this SKU. */
                        ProductId?: number;
                        /** @description Shows if the SKU is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /** @description When set to `true`, this attribute will automatically update the SKU as active once associated with an image or an active component. */
                        ActivateIfPossible?: boolean;
                        /** @description SKU name, meaning the variation of the previously added product. For example: **Product** - _Fridge_, **SKU** - _110V_. */
                        Name?: string;
                        /** @description Reference code used internally for organizational purposes. Must be unique. It is not required only if EAN code already exists. If not, this field must be provided. */
                        RefId?: string;
                        /** @description Height used for shipping calculation. */
                        PackagedHeight?: number;
                        /** @description Length used for shipping calculation. */
                        PackagedLength?: number;
                        /** @description Width used for shipping calculation. */
                        PackagedWidth?: number;
                        /** @description Weight used for shipping calculation, in the measurement unit [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                        PackagedWeightKg?: number;
                        /** @description SKU real height. */
                        Height?: number;
                        /** @description SKU real length. */
                        Length?: number;
                        /** @description SKU real width. */
                        Width?: number;
                        /** @description Weight of the SKU in the measurement [configured in the store](https://help.vtex.com/en/tutorial/filling-in-system-settings--tutorials_269), which by default is in grams. */
                        WeightKg?: number;
                        /** @description [Cubic weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128). */
                        CubicWeight?: number;
                        /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
                        IsKit?: boolean;
                        /** @description Date and time of the SKU's creation. */
                        CreationDate?: string;
                        /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
                        RewardValue?: number;
                        /** @description SKU estimated arrival date in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format, when the product is on pre-sale. You must take into consideration both the launch date and the freight calculation for the arrival date. */
                        EstimatedDateArrival?: string | null;
                        /** @description Identifier provided by the manufacturers to identify their product. This field should be filled in if the product has a specific manufacturer's code. */
                        ManufacturerCode?: string;
                        /** @description Commercial condition ID, used to define SKU specific promotions or installment rules. In case of no specific condition, use `1` (default value). This field does not accept `0`. Learn more at [Registering a commercial condition](https://help.vtex.com/tutorial/registering-a-commercial-condition--tutorials_445). */
                        CommercialConditionId?: number;
                        /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `"un"`. */
                        MeasurementUnit?: string;
                        /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
                        UnitMultiplier?: number;
                        /** @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
                        ModalType?: string | null;
                        /** @description Defines if kit components can be sold apart. */
                        KitItensSellApart?: boolean;
                        /** @description Videos URLs. */
                        Videos?: string[];
                    };
                };
            };
        };
    };
    GetSKUComplementbySKUID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description SKU's unique numerical identifier. */
                skuId: number;
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
                    "application/json": components["schemas"]["SkuComplement"];
                };
            };
        };
    };
    GetSKUComplementsbyComplementTypeID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the SKU which will be inserted as a complement in the parent SKU. */
                skuId: number;
                /** @description Complement type ID. This represents the type of the complement. The possible values are: `1` for **Accessory**; `2` for **Suggestion**; `3` for **Similar product**; `5` for **Show together**. */
                complementTypeId: number;
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
                    "application/json": components["schemas"]["SkuComplement"];
                };
            };
        };
    };
    GetSKUcomplementsbytype: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the parent SKU, where the complement is inserted. */
                parentSkuId: number;
                /** @description Complement type ID. This represents the type of the complement. The possible values are: `1` for **Accessory**; `2` for **Suggestion**; `3` for **Similar product**; `5` for **Show together**. */
                type: number;
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
                        /** @description ID of the parent SKU, where the complement is inserted. */
                        ParentSkuId: number;
                        /** @description Array with SKU complements IDs. */
                        ComplementSkuIds: number[];
                        /**
                         * @description Complement type ID. This represents the type of the complement. The possible values are: `1` for **Accessory**; `2` for **Suggestion**; `3` for **Similar product**; `5` for **Show together**.
                         * @enum {string}
                         */
                        Type: "1" | "2" | "3" | "4" | "5";
                    };
                };
            };
        };
    };
    CreateSKUComplement: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "ParentSkuId": 1,
                 *       "SkuId": 2,
                 *       "ComplementTypeId": 2
                 *     } */
                "application/json": {
                    /**
                     * @description ID of the parent SKU, where the complement is inserted.
                     * @example 1
                     */
                    ParentSkuId: number;
                    /**
                     * @description ID of the SKU which will be inserted as a complement in the parent SKU.
                     * @example 1
                     */
                    SkuId: number;
                    /**
                     * @description Complement type ID. This represents the type of the complement. The possible values are: `1` for **Accessory**; `2` for **Suggestion**; `3` for **Similar product**; `5` for **Show together**.
                     * @example 1
                     * @enum {integer}
                     */
                    ComplementTypeId: 1 | 2 | 3 | 4 | 5;
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
                    "application/json": components["schemas"]["SkuComplement"];
                };
            };
        };
    };
    GetSKUComplementbySKUComplementID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description SKU complement's unique numerical identifier. */
                skuComplementId: number;
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
                    "application/json": components["schemas"]["SkuComplement"];
                };
            };
        };
    };
    DeleteSKUComplementbySKUComplementID: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description SKU complement's unique numerical identifier. */
                skuComplementId: number;
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
    SkubyEAN: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description EAN of the SKU which you need to retrieve details from. */
                ean: string;
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
                    "application/json": components["schemas"]["GetSKUAltID"];
                };
            };
        };
    };
    AssociateattachmentstoSKU: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "SkuId": 1,
                 *       "AttachmentNames": [
                 *         "T-Shirt Customization"
                 *       ]
                 *     } */
                "application/json": {
                    /**
                     * @description Unique identifier of the SKU.
                     * @example 1
                     */
                    SkuId: number;
                    /** @description Array with all the names of the attachments that you need to associate to the SKU. */
                    AttachmentNames: string[];
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
    GetSKUseller: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
                /** @description SKU ID in the seller's store. */
                sellerSkuId: string;
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
                        /** @description Defines if the seller is persisted. */
                        IsPersisted: boolean;
                        /** @description Defines if the seller is removed. */
                        IsRemoved: boolean;
                        /**
                         * Format: int32
                         * @description SKU ID in the seller's store.
                         */
                        SkuSellerId: number;
                        /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                        SellerId: string;
                        /**
                         * Format: int32
                         * @description SKU ID in the VTEX marketplace.
                         */
                        StockKeepingUnitId: number;
                        /** @description SKU seller ID. */
                        SellerStockKeepingUnitId: string;
                        /** @description Defines if the SKU binding is active. */
                        IsActive: boolean;
                        /** @description Date when the SKU binding was updated for the last time, in UTC format. */
                        UpdateDate: string;
                        /** @description Date when an SKU binding update was requested for the last time, in UTC format. */
                        RequestedUpdateDate: string | null;
                    };
                };
            };
        };
    };
    DeleteSKUsellerassociation: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
                /** @description SKU ID in the seller's store. */
                sellerSkuId: string;
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
    ChangeNotification: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use to look for the SKU whose change the seller wants to inform. If the marketplace finds this ID, it responds with status code 200. Otherwise, it responds with status code 404. */
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
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                };
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
    CategoryTree: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Value of the category level you need to retrieve. */
                categoryLevels: string;
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
                    "application/json": components["schemas"]["GetCategoryTree"][];
                };
            };
        };
    };
    SpecificationsByCategoryId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Category ID. */
                categoryId: number;
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
                    "application/json": components["schemas"]["CategorySpecification"];
                };
            };
        };
    };
    SpecificationsTreeByCategoryId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Category ID. */
                categoryId: number;
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
                    "application/json": components["schemas"]["CategorySpecification"];
                };
            };
        };
    };
    BrandList: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                    "application/json": components["schemas"]["BrandGet"][];
                };
            };
        };
    };
    BrandListPerPage: {
        parameters: {
            query: {
                /** @description Quantity of brands per page. */
                pageSize: number;
                /** @description Page number of the brand list. */
                page: number;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                        /** @description Array of objects with information of the store's brands. */
                        items: components["schemas"]["BrandGet"][];
                        /**
                         * @description Object with pagination information.
                         * @example {
                         *       "page": 1,
                         *       "perPage": 3,
                         *       "total": 6,
                         *       "pages": 2
                         *     }
                         */
                        paging: {
                            /**
                             * @description Page number of the brand list.
                             * @example 1
                             */
                            page: number;
                            /**
                             * @description Quantity of brands per page.
                             * @example 3
                             */
                            perPage: number;
                            /**
                             * @description Total of brands in the store.
                             * @example 6
                             */
                            total: number;
                            /**
                             * @description Total number of pages.
                             * @example 2
                             */
                            pages: number;
                        };
                    };
                };
            };
        };
    };
    Brand: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Brand ID. */
                brandId: string;
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
                    "application/json": components["schemas"]["BrandGet"];
                };
            };
        };
    };
    "GET-AllCollections": {
        parameters: {
            query: {
                /** @description Page number. */
                page: number;
                /** @description Number of the items of the page. */
                pageSize: number;
                /** @description Defines if the items of the page are in ascending order. */
                orderByAsc: boolean;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                        /** @description Object with information of the pagination. */
                        paging?: {
                            /** @description Page number. */
                            page?: number;
                            /** @description Items per page. */
                            perPage?: number;
                            /** @description Total of items. */
                            total?: number;
                            /** @description Total pages. */
                            pages?: number;
                            /** @description Limit of items displayed on each page. */
                            limit?: number;
                        };
                        /** @description Array with information the collections. */
                        items?: {
                            /** @description Collection ID. */
                            id?: number;
                            /** @description Collection name. */
                            name?: string;
                            /** @description If the collection is searchable by using the search bar. */
                            searchable?: boolean;
                            /** @description If the collection is highlighted. */
                            highlight?: boolean;
                            /** @description Initial date of the collection. */
                            dateFrom?: string;
                            /** @description Final date of the collection. */
                            dateTo?: string;
                            /** @description Total of SKUs contained in the collection. */
                            totalSku?: number;
                            /** @description Total of products contained in the collection. */
                            totalProducts?: number;
                            /** @description [Type of the collection](https://help.vtex.com/en/tutorial/collection-types--5tKnhh8tMGIrVL7Fqirq7n), * *Manual**, **Automatic** and **Hybrid**. */
                            type?: string;
                            /** @description Last date that the collection was updated. */
                            lastModifiedBy?: string;
                        }[];
                    };
                };
            };
        };
    };
    "GET-AllInactiveCollections": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                    "application/json": number[];
                };
            };
        };
    };
    "POST-CreateCollection": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Collection's name.
                     * @example Halloween costumes
                     */
                    Name: string;
                    /**
                     * @description Collection's description for internal use, with the collection's details. It will not be used for search engines.
                     * @example HomeHalloween
                     */
                    Description: string;
                    /**
                     * @description Option making the collection searchable in the store.
                     * @example false
                     */
                    Searchable: boolean;
                    /**
                     * @description Option if you want the collection to highlight specific products using a tag.
                     * @example false
                     */
                    Highlight: boolean;
                    /**
                     * @description Collection start date and time. If a future date and time are set, the collection will have a scheduled status.
                     * @example 2020-11-26T15:23:00
                     */
                    DateFrom: string;
                    /**
                     * @description Collection end date and time.
                     * @example 2069-11-26T15:23:00
                     */
                    DateTo: string;
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
                        /** @description Collection's ID. */
                        Id?: number;
                        /** @description Collection's name. */
                        Name?: string;
                        /** @description Collection's description for internal use, with the collection's details. It will not be used for search engines. */
                        Description?: string;
                        /** @description Option making the collection searchable in the store. */
                        Searchable?: boolean;
                        /** @description Option if you want the collection to highlight specific products using a tag. */
                        Highlight?: boolean;
                        /** @description Collection start date and time. If a future date and time are set, the collection will have a scheduled status. */
                        DateFrom?: string;
                        /** @description Collection end date and time. */
                        DateTo?: string;
                        /** @description Number of products contained in the collection. */
                        TotalProducts?: number;
                        /** @description [Type of the collection](https://help.vtex.com/en/tutorial/collection-types--5tKnhh8tMGIrVL7Fqirq7n). */
                        Type?: string;
                    };
                };
            };
        };
    };
    "GET-Collectionsbyseachterms": {
        parameters: {
            query?: {
                /** @description Page number. */
                page?: number;
                /** @description Number of the items of the page. */
                pageSize?: number;
                /** @description Defines if the items of the page are in ascending order. */
                orderByAsc?: boolean;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description String that will search for a collection related to it. */
                searchTerms: string;
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
                        /** @description Object with information of the pagination. */
                        paging?: {
                            /** @description Page number. */
                            page?: number;
                            /** @description Items per page. */
                            perPage?: number;
                            /** @description Total of items. */
                            total?: number;
                            /** @description Total pages. */
                            pages?: number;
                            /** @description Limit of items displayed on each page. */
                            limit?: number;
                        };
                        /** @description Array with information the collections. */
                        items?: {
                            /** @description Collection ID. */
                            id?: number;
                            /** @description Collection name. */
                            name?: string;
                            /** @description If the collection is searchable by using the search bar. */
                            searchable?: boolean;
                            /** @description If the collection is highlighted. */
                            highlight?: boolean;
                            /** @description Initial date of the collection. */
                            dateFrom?: string;
                            /** @description Final date of the collection. */
                            dateTo?: string;
                            /** @description Total of SKUs contained in the collection. */
                            totalSku?: number;
                            /** @description Total of products contained in the collection. */
                            totalProducts?: number;
                            /** @description [Type of the collection](https://help.vtex.com/en/tutorial/collection-types--5tKnhh8tMGIrVL7Fqirq7n), * *Manual**, **Automatic** and **Hybrid**. */
                            type?: string;
                            /** @description Last date that the collection was updated. */
                            lastModifiedBy?: string;
                        }[];
                    };
                };
            };
        };
    };
    "GET-Importfileexample": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                    "application/xml": unknown;
                };
            };
        };
    };
    "POST-Addproductsbyimportfile": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Collection's unique identifier. */
                collectionId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description XML file with information about products to be added to a collection. The file must be an imported template from [Import collection file example](https://developers.vtex.com/vtex-developer-docs/reference/get-importfileexample) endpoint.
                     */
                    file?: unknown;
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
    "POST-Removeproductsbyimportfile": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Collection's unique identifier. */
                collectionId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description XML file with information about products to be added to a collection. The file must be an imported template from [Import collection file example](https://developers.vtex.com/vtex-developer-docs/reference/get-importfileexample) endpoint.
                     */
                    file?: unknown;
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
    "GET-Productsfromacollection": {
        parameters: {
            query?: {
                /** @description Page number. */
                page?: number;
                /** @description Number of the items of the page. */
                pageSize?: number;
                /** @description Filter used to refine the collection's products. */
                Filter?: string;
                /** @description Defines if the status of the product is active or not. */
                Active?: boolean;
                /** @description Defines if the product is visible on the store or not. */
                Visible?: boolean;
                /** @description Product's category unique identifier. */
                CategoryId?: number;
                /** @description Product's brand unique identifier. */
                BrandId?: number;
                /** @description Product's supplier unique identifier. */
                SupplierId?: number;
                /** @description Product's trade policy unique identifier. */
                SalesChannelId?: number;
                /** @description Product past release date. */
                ReleaseFrom?: string;
                /** @description Product future release date. */
                ReleaseTo?: string;
                /** @description Product specification field Value. You must also fill in `SpecificationFieldId` to use this parameter. */
                SpecificationProduct?: string;
                /** @description Product specification field unique identifier. */
                SpecificationFieldId?: number;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Collection's unique identifier. */
                collectionId: number;
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
                        /** @description Page number. */
                        Page?: number;
                        /** @description Page list size. */
                        Size?: number;
                        /** @description Total rows. */
                        TotalRows?: number;
                        /** @description Total pages. */
                        TotalPage?: number;
                        /** @description Array of object with information about the products of the collection. */
                        Data?: {
                            /** @description Product ID. */
                            ProductId?: number;
                            /** @description SKU ID. */
                            SkuId?: number;
                            /** @description Subcollection ID. */
                            SubCollectionId?: number;
                            /** @description Position of the product in the collection. */
                            Position?: number;
                            /** @description Product name. */
                            ProductName?: string;
                            /** @description SKU image URL. */
                            SkuImageUrl?: string;
                        }[];
                    };
                };
            };
        };
    };
    SpecificationsField: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Specification field ID. */
                fieldId: number;
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
                        /** @description Specification field name. */
                        Name?: string;
                        /** @description Specification field ID. */
                        FieldId?: number;
                        /** @description Enable (`true`) or disable (`false`) specification. */
                        IsActive?: boolean;
                        /** @description Makes the specification mandatory (`true`) or optional (`false`). */
                        IsRequired?: boolean;
                        /** @description Field type ID can be `1 - Text`, `2 - Multi-Line Text`, `4 - Number`, `5 - Combo`, `6 - Radio`, `7 - Checkbox`, `8 - Indexed Text`, `9 - Indexed Multi-Line Text`. */
                        FieldTypeId?: number;
                        /** @description Field type name, which can be `Text`, `Multi-Line Text`, `Number`, `Combo`, `Radio`, `Checkbox`, `Indexed Text` or `Indexed Multi-Line Text`. */
                        FieldTypeName?: string;
                        /** @description Specification value ID. */
                        FieldValueId?: number | null;
                        /** @deprecated */
                        Description?: string | null;
                        /** @description If `true`, it will be added as a SKU specification. If `false`, it will be added as a product specification field. */
                        IsStockKeepingUnit?: boolean;
                        /** @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - To allow the specification to be used as a facet (filter) on the search navigation bar. */
                        IsFilter?: boolean;
                        /** @description Store Framework - Deprecated.
                         *     Legacy CMS Portal -If specification is visible on the product page. */
                        IsOnProductDetails?: boolean;
                        /** @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - This position number is used in ordering the specifications both in the navigation menu and in the specification listing on the product page. */
                        Position?: number;
                        /**
                         * @deprecated
                         * @description Deprecated field.
                         */
                        IsWizard?: boolean | null;
                        /** @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - To make the specification visible in the store's upper menu. */
                        IsTopMenuLinkActive?: boolean;
                        /** @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - To make the specification field clickable in the search navigation bar. */
                        IsSideMenuLinkActive?: boolean;
                        /** @description Specification default value. */
                        DefaultValue?: string | null;
                        /** @description ID of the group of specifications that contains the new specification. */
                        FieldGroupId?: number;
                        /** @description Specification field group name. */
                        FieldGroupName?: string;
                    };
                };
            };
        };
    };
    SpecificationsInsertFieldUpdate: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "FieldId": 89,
                 *       "Name": "Material",
                 *       "CategoryId": 4,
                 *       "IsActive": true,
                 *       "IsRequired": true,
                 *       "FieldTypeId": 1,
                 *       "Description": "Composition of the product.",
                 *       "IsStockKeepingUnit": false,
                 *       "IsFilter": true,
                 *       "IsOnProductDetails": true,
                 *       "Position": 1,
                 *       "IsWizard": false,
                 *       "IsTopMenuLinkActive": false,
                 *       "IsSideMenuLinkActive": false,
                 *       "DefaultValue": "Cotton",
                 *       "FieldGroupId": 20,
                 *       "FieldGroupName": "Clothes specifications"
                 *     } */
                "application/json": components["schemas"]["SpecificationsInsertFieldUpdateRequest"];
            };
        };
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
    SpecificationsInsertField: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "Name": "Material",
                 *       "CategoryId": 4,
                 *       "FieldId": 88,
                 *       "IsActive": true,
                 *       "IsRequired": true,
                 *       "FieldTypeId": 1,
                 *       "FieldValueId": 1,
                 *       "IsStockKeepingUnit": false,
                 *       "Description": "Composition of the product.",
                 *       "IsFilter": true,
                 *       "IsOnProductDetails": false,
                 *       "Position": 1,
                 *       "IsWizard": false,
                 *       "IsTopMenuLinkActive": true,
                 *       "IsSideMenuLinkActive": true,
                 *       "DefaultValue": null,
                 *       "FieldGroupId": 20,
                 *       "FieldGroupName": "Clothes specifications"
                 *     } */
                "application/json": components["schemas"]["SpecificationsInsertFieldRequest"];
            };
        };
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
    SpecificationsGetFieldValue: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Specification value ID. */
                fieldValueId: string;
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
                         * Format: int32
                         * @description Specification field value ID.
                         */
                        FieldValueId?: number;
                        /** @description Specification field ID. */
                        FieldId?: number;
                        /** @description Specification field value name. */
                        Name?: string;
                        /** @description Specification field value Description. */
                        Text?: string;
                        /** @description Defines if the specification field Value is active (`true`) or inactive (`false`). */
                        IsActive?: boolean;
                        /**
                         * Format: int32
                         * @description Specification field value position.
                         */
                        Position?: number;
                    };
                };
            };
        };
    };
    SpecificationsValuesByFieldId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Specification field ID. */
                fieldId: number;
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
                    "application/json": components["schemas"]["GetSpecFieldValue"][];
                };
            };
        };
    };
    SpecificationsUpdateFieldValue: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "FieldId": 1,
                 *       "FieldValueId": 143,
                 *       "Name": "Cotton",
                 *       "Text": "Cotton fibers",
                 *       "IsActive": true,
                 *       "Position": 100
                 *     } */
                "application/json": components["schemas"]["SpecificationsUpdateFieldValueRequest"];
            };
        };
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
    SpecificationsInsertFieldValue: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "FieldId": 34,
                 *       "Name": "Cotton",
                 *       "Text": "Cotton fibers",
                 *       "IsActive": true,
                 *       "Position": 100
                 *     } */
                "application/json": components["schemas"]["SpecificationsInsertFieldValueRequest"];
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
                        /**
                         * Format: int32
                         * @description Specification field value ID.
                         */
                        FieldValueId?: number;
                        /** @description Specification field ID. */
                        FieldId?: number;
                        /** @description Specification field value name. */
                        Name?: string;
                        /** @description Specification field value description. */
                        Text?: string;
                        /** @description Defines if the specification field value is active (`true`) or inactive (`false`). */
                        IsActive?: boolean;
                        /**
                         * Format: int32
                         * @description Specification field value position.
                         */
                        Position?: number;
                    };
                };
            };
        };
    };
    SpecificationsGroupListbyCategory: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Category ID. */
                categoryId: string;
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
                    "application/json": components["schemas"]["SpecificationsGroup"][];
                };
            };
        };
    };
    SpecificationsGroupGet: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Specification group ID. */
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
                content: {
                    "application/json": components["schemas"]["SpecificationsGroup"];
                };
            };
        };
    };
    SpecificationGroupInsert2: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "CategoryId": 1,
                 *       "Name": "Sizes"
                 *     } */
                "application/json": components["schemas"]["SpecificationGroupInsertRequest"];
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
                        /**
                         * Format: int32
                         * @description Specification group ID.
                         */
                        Id?: number;
                        /**
                         * Format: int32
                         * @description Category ID.
                         */
                        CategoryId?: number;
                        /** @description Specification group name. */
                        Name?: string;
                        /**
                         * Format: int32
                         * @description Store Framework - Deprecated.
                         *     Legacy CMS Portal - specification Group Position.
                         */
                        Position?: number;
                    };
                };
            };
        };
    };
    SalesChannelList: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                        /**
                         * @description Sales channel unique identifier.
                         * @example 1
                         */
                        Id?: number;
                        /**
                         * @description Sales channel name.
                         * @example Loja Principal
                         */
                        Name?: string;
                        /** @description Defines if the Sales channel is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /**
                         * @description Product Cluster ID, if the Sales channel has releated product Cluster.
                         * @example null
                         */
                        ProductClusterId?: number | null;
                        /**
                         * @description Country Code in ISO 3166-1 alfa-3 Standard.
                         * @example BRA
                         */
                        CountryCode?: string;
                        /**
                         * @description Language Country code in LCIDstring Standard.
                         * @example pt-BR
                         */
                        CultureInfo?: string;
                        /**
                         * @description Name of Time Zone.
                         * @example E. South America Standard Time
                         */
                        TimeZone?: string;
                        /**
                         * @description Currency Code in ISO 4217 standard.
                         * @example BRL
                         */
                        CurrencyCode?: string;
                        /**
                         * @description Currency symbol.
                         * @example R$
                         */
                        CurrencySymbol?: string;
                        /**
                         * @description Currency Locale Code in LCID standard.
                         * @example 1046
                         */
                        CurrencyLocale?: number;
                        /** @description Object with currency format. */
                        CurrencyFormatInfo?: {
                            /**
                             * @description Quantity of Currency Decimal Digits.
                             * @example 1
                             */
                            CurrencyDecimalDigits?: number;
                            /**
                             * @description Defines which Currency Decimal Separator will be applied.
                             * @example ,
                             */
                            CurrencyDecimalSeparator?: string;
                            /**
                             * @description Defines which Currency Group Separator will be applied.
                             * @example .
                             */
                            CurrencyGroupSeparator?: string;
                            /**
                             * @description Define how many characters will be grouped.
                             * @example 3
                             */
                            CurrencyGroupSize?: number;
                            /**
                             * @description Defines if all prices will be initiated with Currency Symbol (`true`) or not (`false`).
                             * @example true
                             */
                            StartsWithCurrencySymbol?: boolean;
                        };
                        /**
                         * @description Origin of products in the Sales channel.
                         * @example null
                         */
                        Origin?: string | null;
                        /**
                         * @description Defines the position on index.
                         * @example 1
                         */
                        Position?: number | null;
                        /**
                         * @description Defines what is the conditional rule to activate de Sales channel.
                         * @example approved=true
                         */
                        ConditionRule?: string | null;
                        /**
                         * @description Quantity of Currency Decimal Digits.
                         * @example 1
                         */
                        CurrencyDecimalDigits?: number;
                    }[];
                };
            };
        };
    };
    SalesChannelbyId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                salesChannelId: string;
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
                         * @description Sales channel unique identifier.
                         * @example 1
                         */
                        Id?: number;
                        /**
                         * @description Sales channel name.
                         * @example Loja Principal
                         */
                        Name?: string;
                        /** @description Defines if the Sales channel is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /**
                         * @description Product Cluster ID, if the Sales channel has releated product Cluster.
                         * @example null
                         */
                        ProductClusterId?: number | null;
                        /**
                         * @description Country Code in ISO 3166-1 alfa-3 Standard.
                         * @example BRA
                         */
                        CountryCode?: string;
                        /**
                         * @description Language Country code in LCIDstring Standard.
                         * @example pt-BR
                         */
                        CultureInfo?: string;
                        /**
                         * @description Name of Time Zone.
                         * @example E. South America Standard Time
                         */
                        TimeZone?: string;
                        /**
                         * @description Currency Code in ISO 4217 standard.
                         * @example BRL
                         */
                        CurrencyCode?: string;
                        /**
                         * @description Currency symbol.
                         * @example R$
                         */
                        CurrencySymbol?: string;
                        /**
                         * @description Currency Locale Code in LCID standard.
                         * @example 1046
                         */
                        CurrencyLocale?: number;
                        /** @description Object with currency format. */
                        CurrencyFormatInfo?: {
                            /**
                             * @description Quantity of Currency Decimal Digits.
                             * @example 1
                             */
                            CurrencyDecimalDigits?: number;
                            /**
                             * @description Defines which Currency Decimal Separator will be applied.
                             * @example ,
                             */
                            CurrencyDecimalSeparator?: string;
                            /**
                             * @description Defines which Currency Group Separator will be applied.
                             * @example .
                             */
                            CurrencyGroupSeparator?: string;
                            /**
                             * @description Define how many characters will be grouped.
                             * @example 3
                             */
                            CurrencyGroupSize?: number;
                            /**
                             * @description Defines if all prices will be initiated with Currency Symbol (`true`) or not (`false`).
                             * @example true
                             */
                            StartsWithCurrencySymbol?: boolean;
                        };
                        /**
                         * @description Origin of products in the Sales channel.
                         * @example null
                         */
                        Origin?: string | null;
                        /**
                         * @description Defines the position on index.
                         * @example 1
                         */
                        Position?: number | null;
                        /**
                         * @description Defines what is the conditional rule to activate de Sales channel.
                         * @example approved=true
                         */
                        ConditionRule?: string | null;
                        /**
                         * @description Quantity of Currency Decimal Digits.
                         * @example 1
                         */
                        CurrencyDecimalDigits?: number;
                    };
                };
            };
        };
    };
    SellerList: {
        parameters: {
            query?: {
                /** @description Trade policy ID. */
                sc?: number;
                /** @description Seller type. */
                sellerType?: number;
                /** @description If the seller is better scope. */
                isBetterScope?: boolean;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                        /** @description Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name. */
                        SellerId?: string;
                        /** @description Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method. */
                        Name?: string;
                        /** @description Email of the admin responsible for the seller. */
                        Email?: string;
                        /** @description Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563). */
                        Description?: string;
                        /** @description Text describing the exchange and return policy previously agreed between the marketplace and the seller. */
                        ExchangeReturnPolicy?: string;
                        /** @description Text describing the delivery policy previously agreed between the marketplace and the seller. */
                        DeliveryPolicy?: string;
                        /** @description Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. */
                        UseHybridPaymentOptions?: boolean;
                        /** @description Seller username. */
                        UserName?: string | null;
                        /** @description Seller password. */
                        Password?: string | null;
                        /** @description Text describing the security policy previously agreed between the marketplace and the seller. */
                        SecutityPrivacyPolicy?: string;
                        /** @description Company registration number. */
                        CNPJ?: string;
                        /** @description CSC identification. */
                        CSCIdentification?: string;
                        /** @description Seller archive ID. */
                        ArchiveId?: number | null;
                        /** @description Seller URL logo. */
                        UrlLogo?: string | null;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        ProductCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        FreightCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        CategoryCommissionPercentage?: string;
                        /** @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don't need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added. */
                        FulfillmentEndpoint?: string | null;
                        /** @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`. */
                        CatalogSystemEndpoint?: string;
                        /** @description If the selle is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /** @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more. */
                        MerchantName?: string;
                        /** @description Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank. */
                        FulfillmentSellerId?: number | null;
                        /** @description Seller type. */
                        SellerType?: number;
                        /** @description Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI). */
                        IsBetterScope?: boolean;
                        /** @description Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`. */
                        TrustPolicy?: string;
                    };
                };
            };
        };
    };
    GetSellerbyId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
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
                        /** @description Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name. */
                        SellerId?: string;
                        /** @description Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method. */
                        Name?: string;
                        /** @description Email of the admin responsible for the seller. */
                        Email?: string;
                        /** @description Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563). */
                        Description?: string;
                        /** @description Text describing the exchange and return policy previously agreed between the marketplace and the seller. */
                        ExchangeReturnPolicy?: string;
                        /** @description Text describing the delivery policy previously agreed between the marketplace and the seller. */
                        DeliveryPolicy?: string;
                        /** @description Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.  */
                        UseHybridPaymentOptions?: boolean;
                        /** @description Seller username. */
                        UserName?: string | null;
                        /** @description Seller password. */
                        Password?: string | null;
                        /** @description Text describing the security policy previously agreed between the marketplace and the seller. */
                        SecutityPrivacyPolicy?: string;
                        /** @description Company registration number. */
                        CNPJ?: string;
                        /** @description CSC identification. */
                        CSCIdentification?: string;
                        /** @description Seller archive ID. */
                        ArchiveId?: number | null;
                        /** @description Seller URL logo. */
                        UrlLogo?: string;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        ProductCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        FreightCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        CategoryCommissionPercentage?: string;
                        /** @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don't need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added. */
                        FulfillmentEndpoint?: string | null;
                        /** @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`. */
                        CatalogSystemEndpoint?: string;
                        /** @description If the selle is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /** @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more. */
                        MerchantName?: string;
                        /** @description Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank. */
                        FulfillmentSellerId?: number | null;
                        /** @description Seller type. */
                        SellerType?: number;
                        /** @description Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI). */
                        IsBetterScope?: boolean;
                        /** @description Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`. */
                        TrustPolicy?: string;
                    };
                };
            };
        };
    };
    UpdateSeller: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateSellerRequest"];
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
                        /** @description Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name. */
                        SellerId?: string;
                        /** @description Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method. */
                        Name?: string;
                        /** @description Email of the admin responsible for the seller. */
                        Email?: string;
                        /** @description Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563). */
                        Description?: string;
                        /** @description Text describing the exchange and return policy previously agreed between the marketplace and the seller. */
                        ExchangeReturnPolicy?: string;
                        /** @description Text describing the delivery policy previously agreed between the marketplace and the seller. */
                        DeliveryPolicy?: string;
                        /** @description Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller. */
                        UseHybridPaymentOptions?: boolean;
                        /** @description Seller username. */
                        UserName?: string | null;
                        /** @description Seller password. */
                        Password?: string | null;
                        /** @description Text describing the security policy previously agreed between the marketplace and the seller. */
                        SecutityPrivacyPolicy?: string;
                        /** @description Company registration number. */
                        CNPJ?: string;
                        /** @description CSC identification. */
                        CSCIdentification?: string;
                        /** @description Seller archive ID. */
                        ArchiveId?: number | null;
                        /** @description Seller URL logo. */
                        UrlLogo?: string | null;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        ProductCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        FreightCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        CategoryCommissionPercentage?: string;
                        /** @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don't need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added. */
                        FulfillmentEndpoint?: string | null;
                        /** @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`. */
                        CatalogSystemEndpoint?: string;
                        /** @description If the selle is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /** @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more. */
                        MerchantName?: string;
                        /** @description Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank. */
                        FulfillmentSellerId?: number | null;
                        /** @description Seller type. */
                        SellerType?: number;
                        /** @description Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI). */
                        IsBetterScope?: boolean;
                        /** @description Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`. */
                        TrustPolicy?: string;
                    };
                };
            };
        };
    };
    CreateSeller: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "SellerId": "myseller",
                 *       "Name": "My Seller",
                 *       "Email": "myseller@vtex.com",
                 *       "Description": "",
                 *       "ExchangeReturnPolicy": "",
                 *       "DeliveryPolicy": "",
                 *       "UseHybridPaymentOptions": false,
                 *       "UserName": "",
                 *       "Password": "",
                 *       "SecutityPrivacyPolicy": "",
                 *       "CNPJ": "12345678912345",
                 *       "CSCIdentification": "myseller",
                 *       "ArchiveId": 1,
                 *       "UrlLogo": "",
                 *       "ProductCommissionPercentage": 1.5,
                 *       "FreightCommissionPercentage": 0,
                 *       "FulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?affiliateid=VTX&sc=1&an=myseller",
                 *       "CatalogSystemEndpoint": "http://myseller.vtexcommercestable.com.br/api/catalog_system/",
                 *       "IsActive": true,
                 *       "FulfillmentSellerId": 2,
                 *       "SellerType": 1,
                 *       "IsBetterScope": false
                 *     } */
                "application/json": components["schemas"]["CreateSellerRequest"];
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
                        /** @description Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name. */
                        SellerId?: string;
                        /** @description Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method. */
                        Name?: string;
                        /** @description Email of the admin responsible for the seller.  */
                        Email?: string;
                        /** @description Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563). */
                        Description?: string;
                        /** @description Text describing the exchange and return policy previously agreed between the marketplace and the seller. */
                        ExchangeReturnPolicy?: string;
                        /** @description Text describing the delivery policy previously agreed between the marketplace and the seller. */
                        DeliveryPolicy?: string;
                        /** @description Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.  */
                        UseHybridPaymentOptions?: boolean;
                        /** @description Seller username. */
                        UserName?: string | null;
                        /** @description Seller password. */
                        Password?: string | null;
                        /** @description Text describing the security policy previously agreed between the marketplace and the seller. */
                        SecutityPrivacyPolicy?: string;
                        /** @description Company registration number. */
                        CNPJ?: string;
                        /** @description CSC identification. */
                        CSCIdentification?: string;
                        /** @description Seller archive ID. */
                        ArchiveId?: number | null;
                        /** @description Seller URL logo. */
                        UrlLogo?: string | null;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        ProductCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        FreightCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        CategoryCommissionPercentage?: string;
                        /** @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don't need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added. */
                        FulfillmentEndpoint?: string | null;
                        /** @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`. */
                        CatalogSystemEndpoint?: string;
                        /** @description If the selle is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /** @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more. */
                        MerchantName?: string;
                        /** @description Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank. */
                        FulfillmentSellerId?: number | null;
                        /** @description Seller type. */
                        SellerType?: number;
                        /** @description Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI). */
                        IsBetterScope?: boolean;
                        /** @description Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`. */
                        TrustPolicy?: string;
                    };
                };
            };
        };
    };
    GetSellersbyId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
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
                        /** @description Code used to identify the seller. It is assigned by the marketplace. We recommend filling it in with the seller's account name. */
                        SellerId?: string;
                        /** @description Name of the account in the seller's environment. You can find it on **Account settings > Account > Account Name**). Applicable only if the seller uses their own payment method. */
                        Name?: string | null;
                        /** @description Email of the admin responsible for the seller.  */
                        Email?: string | null;
                        /** @description Text describing the seller with a marketing tone. You can display this text in the marketplace window display by [customizing the CMS](https://help.vtex.com/en/tutorial/list-of-controls-for-templates--tutorials_563). */
                        Description?: string;
                        /** @description Text describing the exchange and return policy previously agreed between the marketplace and the seller. */
                        ExchangeReturnPolicy?: string;
                        /** @description Text describing the delivery policy previously agreed between the marketplace and the seller. */
                        DeliveryPolicy?: string;
                        /** @description Allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.  */
                        UseHybridPaymentOptions?: boolean;
                        /** @description Seller username. */
                        UserName?: string | null;
                        /** @description Seller password. */
                        Password?: string | null;
                        /** @description Text describing the security policy previously agreed between the marketplace and the seller. */
                        SecutityPrivacyPolicy?: string;
                        /** @description Company registration number. */
                        CNPJ?: string;
                        /** @description CSC identification. */
                        CSCIdentification?: string;
                        /** @description Seller archive ID. */
                        ArchiveId?: number | null;
                        /** @description Seller URL logo. */
                        UrlLogo?: string;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        ProductCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        FreightCommissionPercentage?: number;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        CategoryCommissionPercentage?: string;
                        /** @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller. This field applies to all sellers, regardless of their type. However, for `VTEX Stores`, you don't need to fill it in because the system will do that automatically. You can edit this field once the seller has been successfully added. */
                        FulfillmentEndpoint?: string | null;
                        /** @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `http://{sellerName}.vtexcommercestable.com.br/api/catalog_system/`. */
                        CatalogSystemEndpoint?: string;
                        /** @description If the selle is active (`true`) or not (`false`). */
                        IsActive?: boolean;
                        /** @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) article to know more. */
                        MerchantName?: string;
                        /** @description Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be left blank. */
                        FulfillmentSellerId?: number | null;
                        /** @description Seller type. */
                        SellerType?: number;
                        /** @description Indicates whether it is a [comprehensive seller](https://help.vtex.com/en/tutorial/comprehensive-seller--5Qn4O2GpjUIzWTPpvLUfkI). */
                        IsBetterScope?: boolean;
                        /** @description Seller trust policy. The default value is `'Default'`, but if your store is a B2B marketplace and you want to share the customers'emails with the sellers you need to set this field as `'AllowEmailSharing'`. */
                        TrustPolicy?: string;
                    };
                };
            };
        };
    };
    IndexedInfo: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product's unique numerical identifier. */
                productId: string;
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
                    xml: unknown;
                };
            };
        };
    };
    GetAllCommercialConditions: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                        /**
                         * @description Commercial condition ID.
                         * @example 1
                         */
                        Id?: number;
                        /**
                         * @description Commercial condition name.
                         * @example Padrão
                         */
                        Name?: string;
                        /**
                         * @description Defines if the commercial condition is default (`true`) or not (`false`).
                         * @example true
                         */
                        IsDefault?: boolean;
                    }[];
                };
            };
        };
    };
    GetCommercialConditions: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Commercial condition unique numerical identifier. */
                commercialConditionId: number;
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
                         * @description Commercial condition ID.
                         * @example 1
                         */
                        Id?: number;
                        /**
                         * @description Commercial condition name.
                         * @example Padrão
                         */
                        Name?: string;
                        /**
                         * @description If the commercial condition is default (`true`) or not (`false`).
                         * @example true
                         */
                        IsDefault?: boolean;
                    };
                };
            };
        };
    };
    GetGiftList: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Gift list unique numerical identifier. */
                listId: number;
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
                         * @description Gift list ID.
                         * @example 1
                         */
                        giftListId?: number;
                        /**
                         * @description Gift list name.
                         * @example My list
                         */
                        name?: string;
                        /**
                         * @description User ID.
                         * @example a6e7d995-e884-409d-911f-36b25c40169a
                         */
                        userId?: string;
                        /**
                         * @description File ID.
                         * @example 155233
                         */
                        fileId?: number | null;
                        /**
                         * @description Gift list Type ID.
                         * @example 1
                         */
                        giftListTypeId?: number;
                        /**
                         * @description Gift list Type name.
                         * @example Wedding list
                         */
                        giftListTypeName?: string;
                        /**
                         * @description Gift Card ID.
                         * @example 2
                         */
                        giftCardId?: number;
                        /**
                         * @description Gift list message.
                         * @example This is a gift list for my wedding.
                         */
                        message?: string;
                        /**
                         * @description Slug of the gift list that will be part of its URL.
                         * @example myweddinglist
                         */
                        urlFolder?: string;
                        /**
                         * @description Date when the gift list was created.
                         * @example 2013-10-31T19:03:00
                         */
                        dateCreated?: string;
                        /**
                         * @description Name of the user's address.
                         * @example CASA
                         */
                        profileSystemUserAddressName?: string;
                        /**
                         * @description User ID on Profile System.
                         * @example a6e7d995-e884-409d-911f-36b25c40169a
                         */
                        profileSystemUserId?: string;
                        /**
                         * @description Date of the event associated with the Gift list.
                         * @example 2014-07-20T00:00:00
                         */
                        eventDate?: string;
                        /**
                         * @description Location of the event associated with the Gift list.
                         * @example Botafogo
                         */
                        eventLocation?: string;
                        /**
                         * @description City of the event associated with the Gift list.
                         * @example Rio de Janeiro
                         */
                        eventCity?: string;
                        /**
                         * @description State of the event associated with the Gift list.
                         * @example RJ
                         */
                        eventState?: string;
                        /**
                         * @description Telemarketing ID.
                         * @example 1
                         */
                        telemarketingId?: number | null;
                        /**
                         * @description Telemarketing observation.
                         * @example
                         */
                        telemarketingObservation?: string;
                        /**
                         * @description Defines if the gift list is public.
                         * @example true
                         */
                        IsPublic?: boolean;
                        /**
                         * @description Defines if the gift list is active.
                         * @example true
                         */
                        isActive?: boolean;
                        /**
                         * @description Defines if items purchased from the gift list will be shipped to the owner of the gift list.
                         * @example false
                         */
                        shipsToOwner?: boolean;
                        /**
                         * @description Validates the address of the gift list.
                         * @example false
                         */
                        isAddressOk?: boolean;
                        /**
                         * @description Version of the gift list.
                         * @example 1
                         */
                        version?: number;
                        /**
                         * @description ID of the SKU that recharges the gift card.
                         * @example 1
                         */
                        giftCardRechargeSkuId?: number | null;
                        /**
                         * @description Name of the members of the gift list.
                         * @example Rafael Villa-Verde
                         */
                        memberNames?: string;
                        /** @description Array of members of the gift list. */
                        giftListMembers?: {
                            /** @description Gift list member ID. */
                            giftListMemberId?: number;
                            /** @description Gift list ID. */
                            giftListId?: number;
                            /** @description User ID. */
                            userId?: string;
                            /** @description Client ID. */
                            clientId?: string | null;
                            /** @description Title of the Gift list member. */
                            title?: string | null;
                            /** @description Name of the Gift list member. */
                            name?: string;
                            /** @description Surname of the Gift list member. */
                            surname?: string;
                            /** @description Defines if the Gift list member is an administrator of the Gift list or not. */
                            isAdmin?: boolean;
                            /** @description Defines if the Gift list user is active or not. */
                            isActive?: boolean;
                            /** @description Complementary text. */
                            text1?: string | null;
                            /** @description Complementary text. */
                            text2?: string | null;
                        }[];
                        /** @description Array with the IDs of SKUs that are part of the gift list. */
                        giftListSkuIds?: string[];
                        /**
                         * @description Address of the gift list.
                         * @example Botafogo
                         */
                        address?: string | null;
                        /**
                         * @description File URL.
                         * @example /arquivos/ids/155233-800-800/gl-0_635266293044683588.jpg
                         */
                        fileUrl?: string | null;
                    };
                };
            };
        };
    };
}
