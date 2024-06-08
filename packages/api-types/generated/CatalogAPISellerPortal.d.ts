export interface paths {
    "/api/catalog-seller-portal/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product by ID
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about a product by its ID. The response also has information about the product's SKUs.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProduct"];
        /**
         * Update Product
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Updates an existing product and its SKUs.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["PutProduct"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/products/{productId}/description": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Description by Product ID
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center.](https://support.vtex.com/hc/en-us/requests)
         *
         *      Retrieves the description of a product given a product ID.
         *
         *      ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProductDescription"];
        /**
         * Update Product Description by Product ID
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Updates the description of a product given a product ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["PutProductDescription"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/products/{param}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product by external ID,  SKU ID, SKU external ID or slug
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about a product by its external ID, SKU ID, SKU external ID or product slug. The response also has information about the product's SKUs.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProductQuery"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Product
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Creates a new product and its SKUs.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["PostProduct"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/skus/_search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search for SKU
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about an SKU taking into consideration the defined search criteria. It is mandatory to use at least one query parameter.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SearchSKU"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/skus/ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get List of SKUs
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about all SKUs.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Product Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ListSKU"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/brands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get List of Brands
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about all brands of the store. It is mandatory to use at least one query parameter.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Brand Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["ListBrand"];
        put?: never;
        /**
         * Create Brand
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Creates a new brand.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Brand Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["PostBrand"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/brands/{brandId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Brand by ID
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about a brand by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Brand Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetBrand"];
        /**
         * Update Brand
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Updates an existing brand.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Brand Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["PutBrand"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/category-tree": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Category Tree
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about the category tree from the store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Category Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetCategoryTree"];
        /**
         * Update Category Tree
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Updates the existing categories in the category tree.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Category Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["UpdateCategoryTree"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/category-tree/categories/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Category by ID
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Retrieves general information about a category by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Category Read** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getbyid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog-seller-portal/category-tree/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Category
         * @description  >📘 This API is part of the [Seller Portal Catalog](https://help.vtex.com/en/tutorial/how-the-seller-portal-catalog-works--7pMB6YOt6YQDQQbzFB4Pxp). This functionality is in the Beta stage and can be discontinued at any moment at VTEX's discretion. VTEX will not be responsible for any instabilities caused by its use or discontinuity. If you have any questions, please contact [our Support Center](https://support.vtex.com/hc/en-us/requests).
         *
         *      Creates a new category.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CatalogV2 | Management | **Category Write** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateCategory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
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
    GetProduct: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product unique identifier number. */
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
                        /** @description Product's unique identifier number. */
                        id?: string;
                        /** @description Product reference unique identifier number in the store. */
                        externalId?: string;
                        /** @description Status of the product. Its values can be `active` or `inactive`. */
                        status: string;
                        /** @description Product name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
                        name: string;
                        /** @description Product's brand unique identifier number. */
                        brandId: string;
                        /** @description Description data for product. */
                        description?: string;
                        /** @description Name of the brand associated with the product. */
                        brandName: string;
                        /** @description Product's categories unique identifier numbers. It can have multiples IDs for each category and subcategories. */
                        categoryIds: string[];
                        /** @description Names of the product's categories, displayed in a path format. */
                        categoryNames: string[];
                        /** @description Specifications that will differentiate the possible product SKUs. */
                        specs: {
                            /** @description Specification name. */
                            name: string;
                            /** @description Specification values. */
                            values: string[];
                        }[];
                        /** @description Attributes of the product. Attributes are additional properties used to create site browsing filters. */
                        attributes: {
                            /** @description Attribute name. */
                            name: string;
                            /** @description Attribute value. */
                            value: string;
                        }[];
                        /** @description Reference of the product in the URL of the store. */
                        slug: string;
                        /** @description Information of the images of the product. */
                        images: {
                            /** @description Image ID. */
                            id: string;
                            /** @description Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images). */
                            url: string;
                            /** @description Image alternative description. */
                            alt?: string;
                        }[];
                        /** @description SKUs of the product. */
                        skus: {
                            /** @description SKU unique identifier number. */
                            id: string;
                            /** @description Unique reference code created to improve the store's organization. */
                            externalId?: string;
                            /** @description Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
                            ean?: string;
                            /** @description SKU reference code in the store. */
                            manufacturerCode?: string;
                            /** @description If the SKU is active (`true`) or inactive (`false`). */
                            isActive: boolean;
                            /** @description SKU weight. It can be lighter than 1000 g. */
                            weight: number;
                            /** @description SKU dimensions. */
                            dimensions: {
                                /** @description SKU width. */
                                width: number;
                                /** @description SKU height. */
                                height: number;
                                /** @description SKU length. */
                                length: number;
                            };
                            /** @description The product's real weight. */
                            RealWeight?: number;
                            /** @description The product's real dimensions. */
                            RealDimensions?: {
                                /** @description The product's real width. */
                                width: number;
                                /** @description The product's real height. */
                                height: number;
                                /** @description The product's real length. */
                                length: number;
                            };
                            /** @description SKU specifications. This field is mandatory, but nullable if there is only one SKU. */
                            specs: {
                                /** @description SKU's specification name. */
                                name: string;
                                /** @description SKU's specification values. */
                                value: string;
                            }[] | null;
                            /** @description SKU's images IDs. */
                            images: string[];
                        }[];
                        /** @description Transport modal of the product. */
                        transportModal?: string | null;
                        /** @description Product tax code. */
                        taxCode?: string | null;
                        /** @description Origin account of the product. It is not possible to alter products where the origin is `marketplace`. */
                        origin: string;
                        /** @description Date when the product was created. */
                        createdAt: string;
                        /** @description Last date when the product was updated. */
                        updatedAt: string;
                    };
                };
            };
        };
    };
    PutProduct: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product unique identifier number. */
                productId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Product's unique identifier number.
                     * @example 189371
                     */
                    id?: string;
                    /**
                     * @description Product reference unique identifier number in the store.
                     * @example sandboxintegracao-310117347
                     */
                    externalId?: string;
                    /**
                     * @description Status of the product. Its values can be `active` or `inactive`.
                     * @example active
                     */
                    status: string;
                    /**
                     * @description Product name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
                     * @example Camiseta VTEX 10
                     */
                    name: string;
                    /**
                     * @description Product's brand unique identifier number.
                     * @example 1
                     */
                    brandId: string;
                    /**
                     * @description New description data for SKU/product.
                     * @example VTEX Shirt Black Size S Long Sleeze.
                     */
                    description?: string;
                    /**
                     * @description Product's categories unique identifier numbers. It can have multiples IDs for each category and subcategories.
                     * @example [
                     *       "732",
                     *       "412"
                     *     ]
                     */
                    categoryIds: string[];
                    /**
                     * @description Specifications that will differentiate the possible product SKUs.
                     * @example [
                     *       {
                     *         "name": "Color",
                     *         "values": [
                     *           "Black",
                     *           "White"
                     *         ]
                     *       },
                     *       {
                     *         "name": "Size",
                     *         "values": [
                     *           "S",
                     *           "M",
                     *           "L"
                     *         ]
                     *       }
                     *     ]
                     */
                    specs: {
                        /**
                         * @description Specification name.
                         * @example Color
                         */
                        name: string;
                        /**
                         * @description Specification values.
                         * @example [
                         *       "Black",
                         *       "White"
                         *     ]
                         */
                        values: string[];
                    }[];
                    /**
                     * @description Attributes of the product. Attributes are additional properties used to create site browsing filters.
                     * @example [
                     *       {
                     *         "name": "Fabric",
                     *         "value": "Cotton"
                     *       },
                     *       {
                     *         "name": "Gender",
                     *         "value": "Feminine"
                     *       }
                     *     ]
                     */
                    attributes: {
                        /**
                         * @description Attribute name.
                         * @example Fabric
                         */
                        name: string;
                        /**
                         * @description Attribute value.
                         * @example Cotton
                         */
                        value: string;
                    }[];
                    /**
                     * @description Reference of the product in the URL of the store.
                     * @example /vtex-shirt
                     */
                    slug: string;
                    /**
                     * @description Transport modal of the product.
                     * @example 1
                     */
                    transportModal?: string | null;
                    /**
                     * @description Product tax code.
                     * @example 123
                     */
                    taxCode?: string | null;
                    /**
                     * @description Information of the images of the product.
                     * @example [
                     *       {
                     *         "id": "vtex_logo.jpg",
                     *         "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
                     *         "alt": "imagem"
                     *       }
                     *     ]
                     */
                    images: {
                        /**
                         * @description Image ID.
                         * @example vtex_logo.jpg
                         */
                        id: string;
                        /**
                         * @description Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
                         * @example https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg
                         */
                        url: string;
                        /**
                         * @description Image alternative description.
                         * @example imagem
                         */
                        alt?: string;
                    }[];
                    /**
                     * @description SKUs of the product.
                     * @example [
                     *       {
                     *         "id": "182907",
                     *         "name": "VTEX Shirt Black Size S",
                     *         "externalId": "1909621862",
                     *         "ean": "978-1909621862",
                     *         "manufacturerCode": "1234567",
                     *         "isActive": true,
                     *         "weight": 12,
                     *         "dimensions": {
                     *           "width": 1.5,
                     *           "height": 2.1,
                     *           "length": 1.6
                     *         },
                     *         "RealWeight": 1.6,
                     *         "RealDimensions": {
                     *           "width": 1.5,
                     *           "height": 2.1,
                     *           "length": 1.6
                     *         },
                     *         "specs": [
                     *           {
                     *             "name": "Color",
                     *             "value": "Black"
                     *           },
                     *           {
                     *             "name": "Size",
                     *             "value": "S"
                     *           }
                     *         ],
                     *         "images": [
                     *           "vtex_logo.jpg"
                     *         ]
                     *       },
                     *       {
                     *         "id": "182908",
                     *         "name": "VTEX Shirt White Size L",
                     *         "externalId": "1909621862",
                     *         "ean": "978-1909621862",
                     *         "manufacturerCode": "1234568",
                     *         "isActive": true,
                     *         "weight": 300,
                     *         "dimensions": {
                     *           "width": 1.5,
                     *           "height": 2.1,
                     *           "length": 1.6
                     *         },
                     *         "specs": [
                     *           {
                     *             "name": "Color",
                     *             "value": "White"
                     *           },
                     *           {
                     *             "name": "Size",
                     *             "value": "L"
                     *           }
                     *         ],
                     *         "images": [
                     *           "vtex_logo.jpg"
                     *         ]
                     *       }
                     *     ]
                     */
                    skus: {
                        /**
                         * @description SKU unique identifier number. Do not include this field when adding a new SKU, only when editing existing SKUs.
                         * @example 182907
                         */
                        id?: string;
                        /**
                         * @description SKU name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
                         * @example VTEX Shirt Black Size S
                         */
                        name?: string;
                        /**
                         * @description Unique reference code created to improve the store's organization.
                         * @example 1909621862
                         */
                        externalId?: string;
                        /** @description New description data for SKU or product. */
                        description?: string;
                        /**
                         * @description Unique SKU identification code (barcode), composed of up to 13 numeric characters.
                         * @example 978-1909621862
                         */
                        ean?: string;
                        /**
                         * @description SKU reference code in the store.
                         * @example 1234567
                         */
                        manufacturerCode?: string;
                        /**
                         * @description Defines if the SKU is active (`true`) or inactive (`false`).
                         * @example false
                         */
                        isActive: boolean;
                        /**
                         * @description SKU weight. It can be lighter than 1000 g.
                         * @example 300
                         */
                        weight: number;
                        /**
                         * @description SKU dimensions.
                         * @example {
                         *       "width": 1.5,
                         *       "height": 2.1,
                         *       "length": 1.6
                         *     }
                         */
                        dimensions: {
                            /**
                             * @description SKU width.
                             * @example 1.5
                             */
                            width: number;
                            /**
                             * @description SKU height.
                             * @example 2.1
                             */
                            height: number;
                            /**
                             * @description SKU length.
                             * @example 1.6
                             */
                            length: number;
                        };
                        /**
                         * @description The product's real weight.
                         * @example 1.6
                         */
                        RealWeight?: number;
                        /** @description The product's real dimensions. */
                        RealDimensions?: {
                            /**
                             * @description The product's real width.
                             * @example 1.5
                             */
                            width: number;
                            /**
                             * @description The product's real height.
                             * @example 2.1
                             */
                            height: number;
                            /**
                             * @description The product's real length.
                             * @example 1.6
                             */
                            length: number;
                        };
                        /**
                         * @description SKU specifications. This field is mandatory, but nullable if there is only one SKU.
                         * @example [
                         *       {
                         *         "name": "Color",
                         *         "value": "Black"
                         *       },
                         *       {
                         *         "name": "Size",
                         *         "value": "S"
                         *       }
                         *     ]
                         */
                        specs: {
                            /**
                             * @description SKU's specification name.
                             * @example Color
                             */
                            name: string;
                            /**
                             * @description SKU's specification values.
                             * @example Black
                             */
                            value: string;
                        }[] | null;
                        /**
                         * @description Array of SKU's images IDs.
                         * @example [
                         *       "vtex_logo.jpg"
                         *     ]
                         */
                        images: string[];
                    }[];
                    /**
                     * @description Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
                     * @example vtxleo7778
                     */
                    origin: string;
                };
            };
        };
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
    GetProductDescription: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product unique identifier number. */
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
                        /** @description Product's unique identifier number. */
                        productId: string;
                        /** @description Date when the brand was created. */
                        createdAt: string;
                        /** @description Last date when the brand was updated. */
                        updatedAt: string;
                    };
                };
            };
        };
    };
    PutProductDescription: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Product unique identifier number. */
                productId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Product's unique identifier number.
                     * @example 71
                     */
                    productId: string;
                    /**
                     * @description Product description.
                     * @example White shirt.
                     */
                    description: string;
                };
            };
        };
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
    GetProductQuery: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description This part of the path must follow this format: `{param}={value}`. Replace `{param}` with the name of the parameter used to fetch a product, which can be one of the following: `external-id` (product reference unique identifier number in the store), `sku-id` (SKU unique identifier number), `sku-external-id` (SKU reference unique identifier number in the store) or `slug` (reference of the product in the URL of the store). Replace `{value}` with the value of the selected param. Make sure there is a `=` between them. */
                param: string;
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
                        /** @description Product's unique identifier number. */
                        id?: string;
                        /** @description Product reference unique identifier number in the store. */
                        externalId?: string;
                        /** @description Description data for product. */
                        description?: string;
                        /** @description Status of the product. Its values can be `active` or `inactive`. */
                        status: string;
                        /** @description Product name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
                        name: string;
                        /** @description Product's brand unique identifier number. */
                        brandId: string;
                        /** @description Name of the brand associated with the product. */
                        brandName: string;
                        /** @description Product's categories unique identifier numbers. It can have multiples IDs for each category and subcategories. */
                        categoryIds: string[];
                        /** @description Names of the product's categories, displayed in a path format. */
                        categoryNames: string[];
                        /** @description Specifications that will differentiate the possible product SKUs. */
                        specs: {
                            /** @description Specification name. */
                            name: string;
                            /** @description Specification values. */
                            values: string[];
                        }[];
                        /** @description Attributes of the product. Attributes are additional properties used to create site browsing filters. */
                        attributes: {
                            /** @description Attribute name. */
                            name: string;
                            /** @description Attribute value. */
                            value: string;
                        }[];
                        /** @description Reference of the product in the URL of the store. */
                        slug: string;
                        /** @description Information of the images of the product. */
                        images: {
                            /** @description Image ID. */
                            id: string;
                            /**
                             * @description Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
                             * @example https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg
                             */
                            url: string;
                            /** @description Image alternative description. */
                            alt?: string;
                        }[];
                        /** @description SKUs of the product. */
                        skus: {
                            /** @description SKU unique identifier number. */
                            id: string;
                            /** @description Unique reference code created to improve the store's organization. */
                            externalId?: string;
                            /** @description Description data for product. */
                            description?: string;
                            /** @description Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
                            ean?: string;
                            /** @description SKU reference code in the store. */
                            manufacturerCode?: string;
                            /** @description If the SKU is active (`true`) or inactive (`false`). */
                            isActive: boolean;
                            /** @description SKU weight. It can be lighter than 1000 g. */
                            weight: number;
                            /** @description SKU dimensions. */
                            dimensions: {
                                /** @description SKU width. */
                                width: number;
                                /** @description SKU height. */
                                height: number;
                                /** @description SKU length. */
                                length: number;
                            };
                            /** @description The product's real weight. */
                            RealWeight?: number;
                            /** @description The product's real dimensions. */
                            RealDimensions?: {
                                /** @description The product's real width. */
                                width: number;
                                /** @description The product's real height. */
                                height: number;
                                /** @description The product's real length. */
                                length: number;
                            };
                            /** @description SKU specifications. This field is mandatory, but nullable if there is only one SKU. */
                            specs: {
                                /** @description SKU's specification name. */
                                name: string;
                                /** @description SKU's specification values. */
                                value: string;
                            }[] | null;
                            /** @description SKU's images IDs. */
                            images: string[];
                        }[];
                        /** @description Transport modal of the product. */
                        transportModal?: string;
                        /** @description Product tax code. */
                        taxCode?: string;
                        /** @description Origin account of the product. It is not possible to alter products where the origin is `marketplace`. */
                        origin: string;
                        /** @description Date when the product was created. */
                        createdAt: string;
                        /** @description Last date when the product was updated. */
                        updatedAt: string;
                    };
                };
            };
        };
    };
    PostProduct: {
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
                     * @description Product reference unique identifier number in the store.
                     * @example sandboxintegracao-310117347
                     */
                    externalId?: string;
                    /**
                     * @description Status of the product. Its values can be `active` or `inactive`.
                     * @example active
                     */
                    status: string;
                    /**
                     * @description Product name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
                     * @example VTEX Shirt
                     */
                    name: string;
                    /**
                     * @description Product's brand unique identifier number.
                     * @example 1
                     */
                    brandId: string;
                    /**
                     * @description Product's data description.
                     * @example VTEX Shirt Black Size S.
                     */
                    description?: string;
                    /**
                     * @description Product's categories unique identifier numbers. It can have multiples IDs for each category and subcategories.
                     * @example [
                     *       "732",
                     *       "421"
                     *     ]
                     */
                    categoryIds: string[];
                    /**
                     * @description Specifications that will differentiate the possible product SKUs.
                     * @example [
                     *       {
                     *         "name": "Color",
                     *         "values": [
                     *           "Black",
                     *           "White"
                     *         ]
                     *       },
                     *       {
                     *         "name": "Size",
                     *         "values": [
                     *           "S",
                     *           "M",
                     *           "L"
                     *         ]
                     *       }
                     *     ]
                     */
                    specs: {
                        /**
                         * @description Specification name.
                         * @example Color
                         */
                        name: string;
                        /**
                         * @description Specification values.
                         * @example [
                         *       "Black",
                         *       "White"
                         *     ]
                         */
                        values: string[];
                    }[];
                    /**
                     * @description Attributes of the product. Attributes are additional properties used to create site browsing filters.
                     * @example [
                     *       {
                     *         "name": "Fabric",
                     *         "value": "Cotton"
                     *       },
                     *       {
                     *         "name": "Gender",
                     *         "value": "Feminine"
                     *       }
                     *     ]
                     */
                    attributes: {
                        /**
                         * @description Attribute name.
                         * @example Fabric
                         */
                        name: string;
                        /**
                         * @description Attribute value.
                         * @example Cotton
                         */
                        value: string;
                    }[];
                    /**
                     * @description Reference of the product in the URL of the store.
                     * @example /vtex-shirt
                     */
                    slug: string;
                    /**
                     * @description Information of the images of the product.
                     * @example [
                     *       {
                     *         "id": "vtex_logo.jpg",
                     *         "url": "https://vtxleo7778.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg",
                     *         "alt": "imagem"
                     *       }
                     *     ]
                     */
                    images: {
                        /**
                         * @description Image ID.
                         * @example vtex_logo.jpg
                         */
                        id: string;
                        /**
                         * @description Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images).
                         * @example https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg
                         */
                        url: string;
                        /**
                         * @description Image alternative description.
                         * @example imagem
                         */
                        alt?: string;
                    }[];
                    /**
                     * @description SKUs of the product.
                     * @example [
                     *       {
                     *         "name": "VTEX Shirt Black Size S",
                     *         "externalId": "1909621862",
                     *         "ean": "978-1909621862",
                     *         "manufacturerCode": "1234567",
                     *         "isActive": true,
                     *         "weight": 12,
                     *         "dimensions": {
                     *           "width": 1.5,
                     *           "height": 2.1,
                     *           "length": 1.6
                     *         },
                     *         "RealWeight": 1.6,
                     *         "RealDimensions": {
                     *           "width": 1.5,
                     *           "height": 2.1,
                     *           "length": 1.6
                     *         },
                     *         "specs": [
                     *           {
                     *             "name": "Color",
                     *             "value": "Black"
                     *           },
                     *           {
                     *             "name": "Size",
                     *             "value": "S"
                     *           }
                     *         ],
                     *         "images": [
                     *           "https://mystore.vtexassets.com/assets/vtex.catalog-images/products/vtex_logo.jpg"
                     *         ]
                     *       },
                     *       {
                     *         "name": "VTEX Shirt White Size L",
                     *         "externalId": "1909621862",
                     *         "ean": "978-1909621862",
                     *         "manufacturerCode": "1234568",
                     *         "isActive": true,
                     *         "weight": 300,
                     *         "dimensions": {
                     *           "width": 1.5,
                     *           "height": 2.1,
                     *           "length": 1.6
                     *         },
                     *         "specs": [
                     *           {
                     *             "name": "Color",
                     *             "value": "White"
                     *           },
                     *           {
                     *             "name": "Size",
                     *             "value": "L"
                     *           }
                     *         ],
                     *         "images": [
                     *           "vtex_logo.jpg"
                     *         ]
                     *       }
                     *     ]
                     */
                    skus: {
                        /**
                         * @description SKU name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit.
                         * @example VTEX Shirt Black Size S.
                         */
                        name: string;
                        /**
                         * @description Unique reference code created to improve the store's organization.
                         * @example 1909621862
                         */
                        externalId?: string;
                        /**
                         * @description SKU description.
                         * @example VTEX Shirt Black Size S Long Sleeze.
                         */
                        description?: string;
                        /**
                         * @description Unique SKU identification code (barcode), composed of up to 13 numeric characters.
                         * @example 978-1909621862
                         */
                        ean?: string;
                        /**
                         * @description SKU reference code in the store.
                         * @example 1234567
                         */
                        manufacturerCode?: string;
                        /**
                         * @description If the SKU is active (`true`) or inactive (`false`).
                         * @example false
                         */
                        isActive: boolean;
                        /**
                         * @description SKU weight. It can be lighter than 1000 g.
                         * @example 300
                         */
                        weight: number;
                        /**
                         * @description SKU dimensions.
                         * @example {
                         *       "width": 1.5,
                         *       "height": 2.1,
                         *       "length": 1.6
                         *     }
                         */
                        dimensions: {
                            /**
                             * @description SKU width.
                             * @example 1.5
                             */
                            width: number;
                            /**
                             * @description SKU height.
                             * @example 2.1
                             */
                            height: number;
                            /**
                             * @description SKU length.
                             * @example 1.6
                             */
                            length: number;
                        };
                        /**
                         * @description The product's real weight.
                         * @example 1.6
                         */
                        RealWeight?: number;
                        /** @description The product's real dimensions. */
                        RealDimensions?: {
                            /**
                             * @description The product's real width.
                             * @example 1.5
                             */
                            width: number;
                            /**
                             * @description The product's real height.
                             * @example 2.1
                             */
                            height: number;
                            /**
                             * @description The product's real length.
                             * @example 1.6
                             */
                            length: number;
                        };
                        /**
                         * @description SKU specifications. This field is mandatory, but nullable if there is only one SKU.
                         * @example [
                         *       {
                         *         "name": "Color",
                         *         "value": "Black"
                         *       },
                         *       {
                         *         "name": "Size",
                         *         "value": "S"
                         *       }
                         *     ]
                         */
                        specs: {
                            /**
                             * @description SKU's specification name.
                             * @example Color
                             */
                            name: string;
                            /**
                             * @description SKU's specification values.
                             * @example Black
                             */
                            value: string;
                        }[] | null;
                        /**
                         * @description SKU's images IDs.
                         * @example [
                         *       "vtex_logo.jpg"
                         *     ]
                         */
                        images: string[];
                    }[];
                    /**
                     * @description Origin account of the product. It is not possible to alter products where the origin is `marketplace`.
                     * @example vtxleo7778
                     */
                    origin: string;
                    /**
                     * @description Transport modal of the product.
                     * @example 1
                     */
                    transportModal?: string | null;
                    /**
                     * @description Product tax code.
                     * @example 123
                     */
                    taxCode?: string | null;
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
                        /** @description Product's unique identifier number. */
                        id?: string;
                        /** @description Product reference unique identifier number in the store. */
                        externalId?: string;
                        /** @description Status of the product. Its values can be `active` or `inactive`. */
                        status: string;
                        /** @description Product name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
                        name: string;
                        /** @description Product's brand unique identifier number. */
                        brandId: string;
                        /** @description Name of the brand associated with the product. */
                        brandName: string;
                        /** @description Description data for product. */
                        description?: string;
                        /** @description Product's categories unique identifier numbers. It can have multiples IDs for each category and subcategories. */
                        categoryIds: string[];
                        /** @description Names of the product's categories, displayed in a path format. */
                        categoryNames: string[];
                        /** @description Specifications that will differentiate the possible product SKUs. */
                        specs: {
                            /** @description Specification name. */
                            name: string;
                            /** @description Specification values. */
                            values: string[];
                        }[];
                        /** @description Attributes of the product. Attributes are additional properties used to create site browsing filters. */
                        attributes: {
                            /** @description Attribute name. */
                            name: string;
                            /** @description Attribute value. */
                            value: string;
                        }[];
                        /** @description Reference of the product in the URL of the store. */
                        slug: string;
                        /** @description Information of the images of the product. */
                        images: {
                            /** @description Image ID. */
                            id: string;
                            /** @description Image URL, which must be in the following format: `https://{accountName}.vtexassets.com/assets/{path}`, saved using the [Catalog Images app](https://developers.vtex.com/vtex-developer-docs/docs/vtex-catalog-images). */
                            url: string;
                            /** @description Image alternative description. */
                            alt?: string;
                        }[];
                        /** @description SKUs of the product. */
                        skus: {
                            /** @description SKU unique identifier number. */
                            id: string;
                            /** @description SKU name. Use simple words and avoid other languages or complex writing. This field is essential for SEO and must respect the 150 character limit. */
                            name?: string;
                            /** @description Unique reference code created to improve the store's organization. */
                            externalId?: string;
                            /** @description Unique SKU identification code (barcode), composed of up to 13 numeric characters. */
                            ean?: string;
                            /** @description SKU reference code in the store. */
                            manufacturerCode?: string;
                            /** @description If the SKU is active (`true`) or inactive (`false`). */
                            isActive: boolean;
                            /** @description SKU weight. It can be lighter than 1000 g. */
                            weight: number;
                            /** @description SKU dimensions. */
                            dimensions: {
                                /** @description SKU width. */
                                width: number;
                                /** @description SKU height. */
                                height: number;
                                /** @description SKU length. */
                                length: number;
                            };
                            /**
                             * @description The product's real weight.
                             * @example 1.6
                             */
                            RealWeight?: number;
                            /** @description The product's real dimensions. */
                            RealDimensions?: {
                                /** @description The product's real width. */
                                width: number;
                                /** @description The product's real height. */
                                height: number;
                                /** @description The product's real length. */
                                length: number;
                            };
                            /** @description SKU specifications. This field is mandatory, but nullable if there is only one SKU. */
                            specs: {
                                /** @description SKU's specification name. */
                                name: string;
                                /** @description SKU's specification values. */
                                value: string;
                            }[] | null;
                            /** @description SKU's images IDs. */
                            images: string[];
                        }[];
                        /** @description Origin account of the product. It is not possible to alter products where the origin is `marketplace`. */
                        origin: string;
                        /** @description Transport modal of the product. */
                        transportModal?: string | null;
                        /** @description Product tax code. */
                        taxCode?: string | null;
                        /** @description Date when the product was created. */
                        createdAt: string;
                        /** @description Last date when the product was updated. */
                        updatedAt: string;
                    };
                };
            };
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    SearchSKU: {
        parameters: {
            query?: {
                /** @description The first page of the interval of the product list. */
                from?: string;
                /** @description The last page of the interval of the product list. */
                to?: string;
                /** @description SKU unique idenfier number. */
                id?: number;
                /** @description SKU reference unique identifier number in the store. */
                externalid?: number;
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
                        /** @description List with information about the SKU. */
                        data?: {
                            /** @description SKU unique identifier number. */
                            id?: string;
                            /** @description Product unique identifier number. */
                            productId?: string;
                            /** @description Unique identifier number of the association of the SKU with a Franchise Account. */
                            externalId?: string;
                        }[];
                        /** @description Information about the organization and exhibition of the SKU list. */
                        _metadata?: {
                            /** @description Total of SKUs on the list. */
                            total?: number;
                            /** @description The first page of the interval of the SKU list. */
                            from?: number;
                            /** @description The last page of the interval of the SKU list. */
                            to?: number;
                        };
                    };
                };
            };
        };
    };
    ListSKU: {
        parameters: {
            query?: {
                /** @description The first page of the interval of the product list. */
                from?: string;
                /** @description The last page of the interval of the product list. */
                to?: string;
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
                        /** @description List with information about the SKU. */
                        data?: string[];
                        /** @description Information about the organization and exhibition of the SKU list. */
                        _metadata?: {
                            /** @description Total of SKUs on the list. */
                            total?: number;
                            /** @description The first page of the interval of the SKU list. */
                            from?: number;
                            /** @description The last page of the interval of the SKU list. */
                            to?: number;
                        };
                    };
                };
            };
        };
    };
    ListBrand: {
        parameters: {
            query?: {
                /** @description Search word. */
                q?: string;
                /** @description The first page of the interval of the brand list. */
                from?: string;
                /** @description The last page of the interval of the brand list. */
                to?: string;
                /** @description The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order. */
                orderBy?: string;
                /** @description Brand name. */
                name?: string;
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
                        /** @description List with information about the store's brands. */
                        data: {
                            /** @description Brand unique identifier number. */
                            id: string;
                            /** @description Brand name. */
                            name: string;
                            /** @description The condition defines if the brand is active (`true`) or inactive (`false`). */
                            isActive: boolean;
                            /** @description Date when the brand was created. */
                            createdAt: string;
                            /** @description Last date when the brand was updated. */
                            updatedAt: string;
                        }[];
                        /** @description Information about the organization and exhibition of the brand list. */
                        _metadata: {
                            /** @description Total of brands on the list. */
                            total: number;
                            /** @description The first page of the interval of the brand list. */
                            from: number;
                            /** @description The last page of the interval of the brand list. */
                            to: number;
                            /** @description The order that the list is displayed. You can select `name`, or `updated_at` to select the order criteria. Then you can add `,` , `asc` or `desc` to define the brands order. */
                            orderBy: string;
                        };
                    };
                };
            };
        };
    };
    PostBrand: {
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
                     * @description Brand name.
                     * @example Zwilling
                     */
                    name: string;
                    /**
                     * @description The condition defines if the brand is active (`true`) or inactive (`false`).
                     * @example true
                     */
                    isActive: boolean;
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
                        /** @description Brand unique identifier number. */
                        id?: string;
                        /** @description Brand name. */
                        name?: string;
                        /** @description The condition defines if the brand is active (`true`) or inactive (`false`). */
                        isActive?: boolean;
                        /** @description Date when the brand was created. */
                        createdAt?: string;
                        /** @description Last date when the brand was updated. */
                        updatedAt?: string;
                    };
                };
            };
        };
    };
    GetBrand: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Brand unique identifier number. */
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
                    "application/json": {
                        /** @description Brand unique identifier number. */
                        id?: string;
                        /** @description Brand name. */
                        name?: string;
                        /** @description The condition defines if the brand is active (`true`) or inactive (`false`). */
                        isActive?: boolean;
                        /** @description Date when the brand was created. */
                        createdAt?: string;
                        /** @description Last date when the brand was updated. */
                        updatedAt?: string;
                    };
                };
            };
        };
    };
    PutBrand: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Brand unique identifier number. */
                brandId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "id": "20",
                 *       "name": "Zwilling",
                 *       "isActive": true
                 *     } */
                "application/json": {
                    /**
                     * @description Brand unique identifier number.
                     * @example 20
                     */
                    id: string;
                    /**
                     * @description Brand name.
                     * @example Zwilling
                     */
                    name: string;
                    /**
                     * @description The condition defines if the brand is active (`true`) or inactive (`false`).
                     * @example true
                     */
                    isActive: boolean;
                };
            };
        };
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
    GetCategoryTree: {
        parameters: {
            query?: {
                /** @description Category tree level. */
                depth?: number;
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
                        /** @description List of all categories of the store. */
                        roots: {
                            /** @description Object with values of a category. */
                            value: {
                                /** @description Category unique identifier number. */
                                id: string;
                                /** @description Category name. */
                                name: string;
                                /** @description The condition defines if the category is active (`true`) or inactive (`false`). */
                                isActive: boolean;
                            };
                            /** @description List of all children categories of the parent category. */
                            children: {
                                /**
                                 * @description Object with values of a child category.
                                 * @example {
                                 *       "id": "2",
                                 *       "name": "Perfumes",
                                 *       "isActive": false
                                 *     }
                                 */
                                value: {
                                    /** @description Child category unique identifier number. */
                                    id: string;
                                    /** @description Child category name. */
                                    name: string;
                                    /** @description The condition defines if the child category is active (`true`) or inactive (`false`). */
                                    isActive: boolean;
                                };
                            }[];
                        }[];
                        /** @description Date when the category tree was created. */
                        createdAt?: string;
                        /** @description Last date when the category tree was updated. */
                        updatedAt?: string;
                    };
                };
            };
        };
    };
    UpdateCategoryTree: {
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
                     * @description List of all categories of the store.
                     * @example [
                     *       {
                     *         "value": {
                     *           "id": "1",
                     *           "name": "sandboxintegracao",
                     *           "isActive": false
                     *         },
                     *         "children": [
                     *           {
                     *             "value": {
                     *               "id": "2",
                     *               "name": "Perfumes",
                     *               "isActive": false
                     *             }
                     *           }
                     *         ]
                     *       }
                     *     ]
                     */
                    roots: {
                        /**
                         * @description Object with values of a category.
                         * @example {
                         *       "id": "1",
                         *       "name": "sandboxintegracao",
                         *       "isActive": false
                         *     }
                         */
                        value: {
                            /**
                             * @description Category unique identifier number.
                             * @example 1
                             */
                            id: string;
                            /**
                             * @description Category name.
                             * @example sandboxintegracao
                             */
                            name: string;
                            /**
                             * @description The condition defines if the category is active (`true`) or inactive (`false`).
                             * @example false
                             */
                            isActive: boolean;
                        };
                        /**
                         * @description List of all children categories of the parent category.
                         * @example [
                         *       {
                         *         "value": {
                         *           "id": "2",
                         *           "name": "Perfumes",
                         *           "isActive": false
                         *         }
                         *       }
                         *     ]
                         */
                        children: {
                            /**
                             * @description Object with values of a child category.
                             * @example {
                             *       "id": "2",
                             *       "name": "Perfumes",
                             *       "isActive": false
                             *     }
                             */
                            value: {
                                /** @description Child category unique identifier number. */
                                id: string;
                                /**
                                 * @description Child category name.
                                 * @example Perfumes
                                 */
                                name: string;
                                /**
                                 * @description The condition defines if the child category is active (`true`) or inactive (`false`).
                                 * @example false
                                 */
                                isActive: boolean;
                            };
                        }[];
                    }[];
                };
            };
        };
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
    Getbyid: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Category unique identifier number. */
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
                    "application/json": {
                        /** @description Object with values of a category. */
                        value: {
                            /** @description Category unique identifier number. */
                            id: string;
                            /** @description Category name. */
                            name: string;
                            /** @description The condition defines if the category is active (`true`) or inactive (`false`). */
                            isActive: boolean;
                        };
                        /** @description List of all children categories of the parent category. */
                        children: {
                            /** @description Object with values of a child category. */
                            value: {
                                /** @description Child category unique identifier number. */
                                id: string;
                                /** @description Child category name. */
                                name: string;
                                /** @description The condition defines if the child category is active (`true`) or inactive (`false`). */
                                isActive: boolean;
                            };
                        }[];
                    };
                };
            };
        };
    };
    CreateCategory: {
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
                 *       "parentId": "567",
                 *       "Name": "Beauty"
                 *     } */
                "application/json": {
                    /**
                     * @description Parent category unique identifier number.
                     * @example 567
                     */
                    parentId: string;
                    /**
                     * @description Category name.
                     * @example Beauty
                     */
                    Name: string;
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
                        /** @description Object with values of a category. */
                        value: {
                            /** @description Category unique identifier number. */
                            id: string;
                            /** @description Category name. */
                            name: string;
                            /** @description The condition defines if the category is active (`true`) or inactive (`false`). */
                            isActive: boolean;
                        };
                        /** @description List of all children categories of the parent category. */
                        children: {
                            /** @description Object with values of a child category. */
                            value: {
                                /** @description Child category unique identifier number. */
                                id: string;
                                /**
                                 * @description Child category name.
                                 * @example Perfumes
                                 */
                                name: string;
                                /**
                                 * @description The condition defines if the child category is active (`true`) or inactive (`false`).
                                 * @example false
                                 */
                                isActive: boolean;
                            };
                        }[];
                    };
                };
            };
        };
    };
}
