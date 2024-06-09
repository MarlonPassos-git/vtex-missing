export interface paths {
    "/api/storage/profile-system/profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create client profile
         * @description Creates new client profile.
         *
         *
        You can send custom fields in the request body and they will be saved as part of your document. Therefore, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
         *
         *
        The `id` field returned by this request is the `profileId` used to retrieve information on a specific profile later.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateClientProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get profile
         * @description Retrieves the information of a specific client, by its `profileId`.
         *
         *
        > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
         *
         *
        > For security and privacy reasons, this request returns masked profile data. For unmasked information, see [Get unmasked profile](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/profiles/-profileId-/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProfile"];
        put?: never;
        post?: never;
        /**
         * Delete client profile
         * @description Deletes a client profile by `profileId`.
         *
         *
        >❗ This endpoint is not suitable for granting a shopper's [right to erasure](https://help.vtex.com/en/tutorial/data-subject-rights--6imchxTx09icupKMbzHVIM#erasure). For that purpose, open a [support](https://help.vtex.com/en/support) ticket, according to the instructions in the section [Request erasure via support](https://help.vtex.com/en/tutorial/erasing-customer-data--1R9Fn7A06Ifj4R9YD4JTKU#request-erasure-via-support) of the shopper data erasure guide.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeleteClientProfile"];
        options?: never;
        head?: never;
        /**
         * Update client profile
         * @description Updates one or more fields of an existing client profile.
         *
         *
        > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        patch: operations["UpdateClientProfile"];
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked profile
         * @description Retrieves unmasked information of a specific client, by its `profileId`.
         *
         *
        > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get profile by version
         * @description Retrieves the information of a specific version of a client profile.
         *
         *
        > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
         *
         *
        > For security and privacy reasons, this request returns masked profile data. For unmasked information, see [Get unmasked profile by version](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/profiles/-profileId-/versions/-profileVersionId-/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProfileByVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/versions/{profileVersionId}/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked profile by version
         * @description Retrieves unmasked information of a specific version of a client profile.
         *
         *
        > Since your store's profile schema is customizable, the schema and examples presented below may differ from yours. Your integration must be adapted accordingly.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedProfileByVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get client addresses
         * @description Retrieves information of all addresses of a given client, by its `profileId`.
         *
         *
        > For security and privacy reasons, this request returns masked address data. For unmasked information, see [Get unmasked client addresses](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/profiles/-profileId-/addresses/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetClientAddresses"];
        put?: never;
        /**
         * Create client address
         * @description Creates new address for a given client profile.
         *
         *
        > The `id` field returned by this request is the `addressId` used to retrieve or update information of a specific address later.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateClientAddress"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/addresses/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked client addresses
         * @description Retrieves unmasked information of all addresses of a given client, by its `profileId`.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedClientAddresses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get address
         * @description Retrieves information of a specific address of a given client, by its respectives `adderssId` and `profileId`.
         *
         *
        > For security and privacy reasons, this request returns masked address data. For unmasked information, see [Get unmasked address](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/profiles/-profileId-/addresses/-addressId-/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetAddress"];
        put?: never;
        post?: never;
        /**
         * Delete address
         * @description Deletes a client's address by `profileId` and `addressId`.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeleteAddress"];
        options?: never;
        head?: never;
        /**
         * Update client address
         * @description Updates one or more fields of an existing address for a given client profile.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        patch: operations["UpdateClientAddress"];
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked address
         * @description Retrieves unmasked information of a specific address of a given client, by its respectives `adderssId` and `profileId`.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedAddress"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get address by version
         * @description Retrieves information of a specific version address of a given client.
         *
         *
        > For security and privacy reasons, this request returns masked address data by version. For unmasked information, see [Get unmasked address by version](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/profiles/-profileId-/addresses/-addressId-/versions/-addressVersionId-/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetAddressByVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/addresses/{addressId}/versions/{addressVersionId}/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked address by version
         * @description Retrieves unmasked information of a specific address version of a given client.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedAddressByVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/prospects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get prospects
         * @description Retrieves information of all prospects.
         *
         *
        > For security and privacy reasons, this request returns masked prospect data. For unmasked information, see [Get unmasked prospects](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/prospects/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProspects"];
        put?: never;
        /**
         * Create prospect
         * @description Creates new prospect.
         *
         *
        > The `id` field returned by this request is the `prospectId` used to retrieve information on a specific prospect later.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateProspect"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/prospects/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked prospects
         * @description Retrieves unmasked information of all prospects.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedProspects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/prospects/{prospectId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get prospect
         * @description Retrieves the information of a specific prospect, by its `prospectId`.
         *
         *
        > For security and privacy reasons, this request returns masked prospect data. For unmasked information, see [Get unmasked prospect](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/prospects/-prospectId-/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProspect"];
        put?: never;
        post?: never;
        /**
         * Delete prospect
         * @description Deletes a prospect by `prospectId`.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeleteProspect"];
        options?: never;
        head?: never;
        /**
         * Update prospect
         * @description Updates one or more fields of an existing prospect.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        patch: operations["UpdateProspect"];
        trace?: never;
    };
    "/api/storage/profile-system/prospects/{prospectId}/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked prospect
         * @description Retrieves unmasked information of a specific prospect, by its `prospectId`.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedProspect"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/purchase-info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get purchase information
         * @description Retrieves purchase information of a given client, by its `profileId`.
         *
         *
        > For security and privacy reasons, this request returns masked data. For unmasked information, see [Get unmasked purchase information](https://developers.vtex.com/docs/api-reference/profile-system#get-/api/storage/profile-system/profiles/-profileId-/purchase-info/unmask).
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetPurchaseInformation"];
        put?: never;
        /**
         * Create purchase information
         * @description Creates purchase information for a given client profile.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreatePurchaseInformation"];
        /**
         * Delete purchase information
         * @description Deletes purchase informaiton by `profileId`.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["DeletePurchaseInformation"];
        options?: never;
        head?: never;
        /**
         * Update purchase information
         * @description Updates one or more fields of existing purchase information for a given client profile.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        patch: operations["UpdatePurchaseInformation"];
        trace?: never;
    };
    "/api/storage/profile-system/profiles/{profileId}/purchase-info/unmask": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get unmasked purchase information
         * @description Retrieves unmasked purchase information of a given client, by its `profileId`.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetUnmaskedPurchaseInformation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/storage/profile-system/schemas/profileSystem": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get full schema
         * @description Retrieves the full profile schema, including custom fields.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
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
                        "application/json": components["schemas"]["schema"];
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
    "/api/storage/profile-system/schemas/profileSystem/custom": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get custom fields
         * @description Retrieves all custom fields in the profile schema.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
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
                        "application/json": components["schemas"]["schema"];
                    };
                };
            };
        };
        /**
         * Create or delete custom fields
         * @description Creates or deletes custom fields in the profile schema. To create custom fields, include a request body. To delete all custom fields, pass an empty JSON.
         *
         *
        > Each account has one profile schema. Updating it with this request will substitute the previous version.
         *
         *
        Learn more about the [Profile System](https://developers.vtex.com/vtex-rest-api/docs/profile-system) and its other API endpoints.
         *
         *     >⚠️ The Profile System is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Profile System | Documents | **Get Item** |
         *     | Profile System | Documents | **Save and Update Item** |
         *     | Profile System | Documents | **Delete Item** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["CreateOrUpdateProfileSchema"];
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
        /**
         * Profile
         * @description Profile schema.
         */
        Profile: {
            /**
             * @description Client's first name.
             * @example John
             */
            firstName: string;
            /**
             * @description Client's last name.
             * @example Doe
             */
            lastName: string;
            /**
             * @description Client's email address.
             * @example john.doe@example.com
             */
            email: string;
            /**
             * @description Client's birth date in ISO 8601 format.
             * @example 1925-11-17
             */
            birthDate?: string;
            /**
             * @description Client's document.
             * @example 12345678900
             */
            document: string;
            /**
             * @description Type of document informed in `document`.
             * @example CPF
             */
            documentType: string;
            /**
             * @description Name of custom field defined in [Create or delete custom fields](https://developers.vtex.com/docs/api-reference/profile-system#put-/api/storage/profile-system/schemas/profileSystem/custom). Can be of any type: string, number, boolean, array or object.
             * @example {value}
             */
            "{customField}"?: string;
        };
        /**
         * Profile metadata
         * @description Profile metadata.
         */
        ProfileMeta: {
            /**
             * @description Unique identifier of the profile version.
             * @example 27112371-a71b-45d6-b3bc-93436a3a0b4f
             */
            version: string;
            /**
             * @description Unique identifier of the user who created the profile.
             * @example 82a2b53d-39be-4f49-bb7c-8971b58cb7dc
             */
            author: string;
            /**
             * @description Date when the profile was created in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            creationDate: string;
            /**
             * @description Date when the profile was last updated in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            lastUpdate: string;
        };
        /**
         * id
         * @description ID of the client's profile.
         * @example c2cbebba-214e-40b2-b68f-98f862e755d5
         */
        ProfileId: string;
        /**
         * Masked profile response
         * @description Array containing masked profile information.
         */
        MaskedProfileResponse: {
            id?: components["schemas"]["ProfileId"];
            meta?: components["schemas"]["ProfileMeta"];
            document?: components["schemas"]["Profile"];
        }[];
        /**
         * Masked profile response
         * @description Array containing masked profile information.
         */
        MaskedProfileResponseByVersion: {
            id?: components["schemas"]["ProfileId"];
            document?: components["schemas"]["Profile"];
            meta?: components["schemas"]["ProfileMeta"];
        }[];
        /**
         * Unmasked profile response
         * @description Unmasked profile response.
         */
        UnmaskedProfileResponse: {
            id?: components["schemas"]["ProfileId"];
            document?: components["schemas"]["Profile"];
            meta?: components["schemas"]["ProfileMeta"];
        };
        /**
         * Address request body
         * @description Address request body.
         * @example {
         *       "postalCode": "20200-000",
         *       "countryName": "Brasil",
         *       "countryCode": "BR",
         *       "administrativeAreaLevel1": "RJ",
         *       "locality": "Locality",
         *       "localityAreaLevel1": "locality area",
         *       "route": "51",
         *       "streetNumber": "999",
         *       "contactId": "1"
         *     }
         */
        CreateAddress: {
            /**
             * @description Address postal code.
             * @example 20200-000
             */
            postalCode: string;
            /**
             * @description Name of the address country.
             * @example Brasil
             */
            countryName: string;
            /**
             * @description Two letter country code.
             * @example BR
             */
            countryCode?: string;
            /**
             * @description Name of administrative area, such as the state or province.
             * @example RJ
             */
            administrativeAreaLevel1: string;
            /**
             * @description Name of address locality, such as the city.
             * @example Locality
             */
            locality: string;
            /**
             * @description Name of the address locality area, such as the neighborhood or district.
             * @example Locality area
             */
            localityAreaLevel1: string;
            /**
             * @description Address route or street name.
             * @example 51
             */
            route: string;
            /**
             * @description Address street number.
             * @example 999
             */
            streetNumber: string;
            /**
             * @description Contact unique identifier.
             * @example 1
             */
            contactId?: string;
        };
        /**
         * Address
         * @description Address information.
         * @example {
         *       "postalCode": "20200-000",
         *       "countryName": "Brasil",
         *       "countryCode": "BR",
         *       "administrativeAreaLevel1": "RJ",
         *       "locality": "Locality",
         *       "localityAreaLevel1": "locality area",
         *       "route": "51",
         *       "streetNumber": "999",
         *       "profileId": "70caf394-8534-447e-a0ca-1803c669c771",
         *       "contactId": "1"
         *     }
         */
        Address: {
            /**
             * @description Address postal code.
             * @example 20200-000
             */
            postalCode: string;
            /**
             * @description Name of the address country.
             * @example Brasil
             */
            countryName: string;
            /**
             * @description Two letter country code.
             * @example BR
             */
            countryCode?: string;
            /**
             * @description Name of administrative area, such as the state or province.
             * @example RJ
             */
            administrativeAreaLevel1: string;
            /**
             * @description Name of address locality, such as the city.
             * @example Locality
             */
            locality: string;
            /**
             * @description Name of the address locality area, such as the neighborhood or district.
             * @example Locality area
             */
            localityAreaLevel1: string;
            /**
             * @description Address route or street name.
             * @example 51
             */
            route: string;
            /**
             * @description Address street number.
             * @example 999
             */
            streetNumber: string;
            profileId: components["schemas"]["ProfileId"];
            /**
             * @description Contact unique identifier.
             * @example 1
             */
            contactId?: string;
        };
        /**
         * id
         * @description ID of a client's address.
         * @example c2cbebba-214e-40b2-b68f-98f862e755d5
         */
        AddressId: string;
        /**
         * Address metadata
         * @description Address metadata.
         */
        AddressMeta: {
            /**
             * @description Unique identifier of the address version.
             * @example 27112371-a71b-45d6-b3bc-93436a3a0b4f
             */
            version: string;
            /**
             * @description Unique identifier of the user who created the address.
             * @example 82a2b53d-39be-4f49-bb7c-8971b58cb7dc
             */
            author: string;
            /**
             * @description Date when the address was created in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            creationDate: string;
            /**
             * @description Date when the address was last updated in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            lastUpdateDate: string;
        };
        /**
         * Unmasked address response
         * @description Unmasked address information.
         */
        UnmaskedAddressResponse: {
            id?: components["schemas"]["AddressId"];
            document?: components["schemas"]["Address"];
            meta?: components["schemas"]["AddressMeta"];
        };
        /** Masked address response */
        MaskedAddressResponse: {
            id?: components["schemas"]["AddressId"];
            document?: components["schemas"]["Address"];
            meta?: components["schemas"]["AddressMeta"];
        };
        /**
         * Masked purchase information response.
         * @description Masked purchase information.
         */
        MaskedPurchaseInfoResponse: {
            id?: components["schemas"]["PurchaseInfoId"];
            document?: components["schemas"]["PurchaseInfo"];
            meta?: components["schemas"]["PurchaseInfoMeta"];
        };
        /**
         * id
         * @description ID of purchase information.
         * @example c2cbebba-214e-40b2-b68f-98f862e755d5
         */
        PurchaseInfoId: string;
        /**
         * Purchase information.
         * @description Purchase information object.
         */
        PurchaseInfo: {
            paymentData?: components["schemas"]["PaymentData"];
            /** @description Client preferences. */
            clientPreferences?: Record<string, never>;
            /** @description Defines if personal data will be saved (`true`) or not (`false`). */
            isToSavePersonalData?: boolean;
            /** @description Array with latest purchases from the client. */
            lastUserPurchases?: {
                /** @description Purchase date in the ISO 8601 format. */
                creationDate?: string;
                /** @description Unique identifier of the order. */
                orderId?: string;
                /** @description Unique identifier of the order group. */
                orderGroup?: string;
                /** @description Purchase value. */
                value?: number;
            }[];
            /** @description Unique identifier of the client address. */
            lastPurchasesAddressId?: string;
        };
        /**
         * Purchase information metadata.
         * @description Purchase information metadata.
         */
        PurchaseInfoMeta: {
            /**
             * @description Unique identifier of the purchase information version.
             * @example 27112371-a71b-45d6-b3bc-93436a3a0b4f
             */
            version: string;
            /**
             * @description Unique identifier of the user who created the purchase information.
             * @example 82a2b53d-39be-4f49-bb7c-8971b58cb7dc
             */
            author: string;
            /**
             * @description Date when the purchase information was created in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            creationDate: string;
            /**
             * @description Date when the purchase information was last updated in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            lastUpdateDate: string;
            /**
             * @description Date when the purchase information expires in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            expirationDate?: string | null;
        };
        /**
         * paymentData
         * @description Payment data.
         */
        PaymentData: {
            /** @description List of available payment accounts. */
            availableAccounts?: {
                /**
                 * @description Payment account ID.
                 * @example D09F5E3F01054C959CFC4CB357961ADE
                 */
                accountId?: string;
                /**
                 * @description Payment system code.
                 * @example 2
                 */
                paymentSystem?: string;
                /**
                 * @description Payment system name.
                 * @example Visa
                 */
                paymentSystemName?: string;
                /**
                 * @description Masked card number.
                 * @example ************1111
                 */
                cardNumber?: string;
                /**
                 * @description Card bin.
                 * @example 44443334
                 */
                bin?: string;
                /** @description List of available addresses. */
                availableAddresses?: string[];
                /**
                 * @description Card expiration date, in `MM/YYYY` format.
                 * @example 01/2032
                 */
                expirationDate?: string;
                /**
                 * @description Defines if the card is expired (`true`) or not (`false`).
                 * @example false
                 */
                isExpired?: boolean;
                /**
                 * @description Account status.
                 * @example null
                 */
                accountStatus?: string | null;
            }[];
            /** @description Available tokens. */
            availableTokens?: string[];
            /** @description List of transactions. */
            transactions?: {
                /**
                 * @description Indicates whether the transaction is active (`true`) or not (`false`).
                 * @example true
                 */
                isActive: boolean;
                /**
                 * @description Transaction ID.
                 * @example 418213DE29634837A63DD693A937A696
                 */
                transactionId: string;
                /**
                 * @description Merchant name.
                 * @example luxstore
                 */
                merchantName: string;
                /** @description List of payments information. */
                payments: components["schemas"]["Payment"][];
            }[] | null;
            /** @description Gift card IDs. */
            giftCards?: string[];
            /** @description Gift card messages. */
            giftCardMessages?: string[];
            /**
             * @description Amount of payment errors.
             * @example 0
             */
            numberOfPaymentErrors?: number;
            /**
             * @description Amount of denied transactions.
             * @example 0
             */
            numberOfDeniedTransactions?: number;
            /**
             * @description Last denied transaction.
             * @example null
             */
            lastDeniedTransaction?: string | null;
        };
        /**
         * Payment
         * @description Payment information.
         * @example {
         *       "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *       "paymentSystem": "6",
         *       "paymentSystemName": "Boleto Bancário",
         *       "value": 4450,
         *       "installments": 1,
         *       "referenceValue": 4450,
         *       "cardHolder": null,
         *       "cardNumber": null,
         *       "firstDigits": null,
         *       "lastDigits": null,
         *       "cvv2": null,
         *       "expireMonth": null,
         *       "expireYear": null,
         *       "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *       "giftCardId": null,
         *       "giftCardName": null,
         *       "giftCardCaption": null,
         *       "redemptionCode": null,
         *       "group": "bankInvoice",
         *       "tid": null,
         *       "dueDate": "2019-02-02",
         *       "connectorResponses": {}
         *     }
         */
        Payment: {
            /** @description Payment ID. */
            id: string;
            /** @description Payment system. */
            paymentSystem: string;
            /** @description Payment system name. */
            paymentSystemName: string;
            /**
             * Format: int32
             * @description Payment value in cents.
             */
            value: number;
            /**
             * Format: int32
             * @description Payment installments.
             */
            installments: number;
            /**
             * Format: int32
             * @description Reference value for interest calculation in cents.
             */
            referenceValue: number;
            /** @description Card holder. */
            cardHolder: string | null;
            /** @description Card number. */
            cardNumber: string | null;
            /** @description Card first digits. */
            firstDigits: string | null;
            /** @description Card last digits. */
            lastDigits: string | null;
            /** @description Card verification code. */
            cvv2: string | null;
            /** @description Card expiration month. */
            expireMonth: string | null;
            /** @description Card expiration year. */
            expireYear: string | null;
            /** @description Payment URL. */
            url: string;
            /** @description Gift card ID. */
            giftCardId: string | null;
            /** @description Gift card name. */
            giftCardName: string | null;
            /** @description Gift card caption. */
            giftCardCaption: string | null;
            /** @description Redemption code. */
            redemptionCode: string | null;
            /** @description Payment group. */
            group: string;
            /** @description Payment TID. */
            tid: string | null;
            /** @description Due date. */
            dueDate: string;
            /** @description Connector responses. */
            connectorResponses: Record<string, never>;
        };
        /**
         * Prospect information.
         * @description Prospect information.
         */
        Prospect: {
            /** @description Available addresses. */
            availableAddresses?: {
                /**
                 * @description Defines whether the address is deleted after use (`true`) or not (`false`).
                 * @example true
                 */
                disposable?: boolean;
                /**
                 * @description User unique identifier.
                 * @example 98478f6b-d025-4f35-a560-dd1ee7a6f26e
                 */
                userId?: string;
                /**
                 * @description Address name.
                 * @example Home
                 */
                addressName?: string;
                /**
                 * @description Address type.
                 * @example residential
                 */
                addressType?: string;
                /**
                 * @description Postal code.
                 * @example 32137
                 */
                postalCode?: string;
                /**
                 * @description City.
                 * @example Palm Coast
                 */
                city?: string;
                /**
                 * @description Country code.
                 * @example USA
                 */
                country?: string;
                /**
                 * @description Street name.
                 * @example Fifth St.
                 */
                street?: string;
                /**
                 * @description Street number.
                 * @example 9538
                 */
                number?: string;
                /**
                 * @description Complement information.
                 * @example Apartment 2B
                 */
                complement?: string;
                /** @description Array with two strings that represent geocoordinates: first latitude, then longitude. */
                geoCoordinate?: string[];
            }[];
            paymentData?: components["schemas"]["PaymentData"];
            /** @description List of contacts. */
            contacts?: {
                /**
                 * @description Contact's unique identifier.
                 * @example 0
                 */
                contactId?: string;
                /**
                 * @description Contact's email address.
                 * @example jane@mail.com
                 */
                email?: string;
                /**
                 * @description Contact's first name.
                 * @example Jane
                 */
                firstName?: string;
                /**
                 * @description Contact's last name.
                 * @example Doe
                 */
                lastName?: string;
                /**
                 * @description Contact's phone number.
                 * @example 12345678910
                 */
                phone?: string;
                /**
                 * @description Contact's document.
                 * @example 12345678910
                 */
                document?: string;
            }[];
            /** @description Information about the invoice subject. */
            invoiceSubject?: {
                /**
                 * @description Invoice subject ID.
                 * @example 0
                 */
                invoiceSubjectId?: string;
                /**
                 * @description Invoice subject's email address.
                 * @example jane@mail.com
                 */
                email?: string;
                /**
                 * @description Invoice subject's first name.
                 * @example Jane
                 */
                firstName?: string;
                /**
                 * @description Invoice subject's last name.
                 * @example Doe
                 */
                lastName?: string;
                /**
                 * @description Invoice subject's phone number.
                 * @example 12345678910
                 */
                phone?: string;
            };
            /**
             * @description Prospect's email address.
             * @example jane@mail.com
             */
            email?: string;
            /**
             * @description Prospect's first name.
             * @example Jane
             */
            firstName?: string;
            /**
             * @description Prospect's last name.
             * @example Doe
             */
            lastName?: string;
            /**
             * @description Prospect's document.
             * @example 5397eefef23741d4976ebdf772cc42e0
             */
            document?: string;
            /**
             * @description Prospect's cellphone number.
             * @example 12345678910
             */
            cellPhone?: string;
            /**
             * @description Defines if a prospect is corporate (`true`) or not (`false`).
             * @example false
             */
            isPJ?: boolean;
            /**
             * @description Prospect's customer code.
             * @example 5397eefe-f237-41d4-976e-bdf772cc42e0
             */
            customerCode?: string;
        };
        /**
         * id
         * @description ID of the prospect.
         * @example c2cbebba-214e-40b2-b68f-98f862e755d5
         */
        ProspectId: string;
        /**
         * Prospect information metadata.
         * @description Prospect information metadata.
         */
        ProspectMeta: {
            /**
             * @description Unique identifier of the prospect version.
             * @example 27112371-a71b-45d6-b3bc-93436a3a0b4f
             */
            version: string;
            /**
             * @description Unique identifier of the user who created the prospect.
             * @example 82a2b53d-39be-4f49-bb7c-8971b58cb7dc
             */
            author: string;
            /**
             * @description Date when the prospect information was created in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            creationDate: string;
            /**
             * @description Date when the prospect information was last updated in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            lastUpdateDate: string;
            /**
             * @description Date when the prospect information expires in ISO 8601 format.
             * @example 2022-01-05T15:41:37.5009471+00:00
             */
            expirationDate?: string | null;
        };
        /**
         * Unmasked prospect information.
         * @description Unmasked prospect information.
         */
        UnmaskedProspectResponse: {
            id?: components["schemas"]["ProspectId"];
            document?: components["schemas"]["Prospect"];
            meta?: components["schemas"]["ProspectMeta"];
        };
        /**
         * Masked prospect information.
         * @description Masked prospect information.
         */
        MaskedProspectResponse: {
            id?: components["schemas"]["ProspectId"];
            document?: components["schemas"]["Prospect"];
            meta?: components["schemas"]["ProspectMeta"];
        };
        /**
         * Schema
         * @description Schema information.
         */
        schema: {
            /**
             * @description Schema title.
             * @example Client profile schema.
             */
            title: string;
            /**
             * @description Schema type.
             * @example object
             */
            type: string;
            /**
             * @description Schema's human readable description.
             * @example This schema describes a b2c customer profile.
             */
            description: string;
            /**
             * @description Schema required fields.
             * @example [
             *       "firstName",
             *       "lastName",
             *       "email",
             *       "document",
             *       "documentType"
             *     ]
             */
            required: string[];
            /** @description Object describing each field in your desired schema. In this object, each property is a new object, describing the field according to: `type` (string); `sensitive` (boolean); `pii` (boolean) and `items.type` (if field is array). */
            properties: {
                /** @description Schema of any given field described in the `properties` field. */
                additionalProperties?: {
                    /**
                     * @description Schema property type.
                     * @example string
                     */
                    type: string;
                    /**
                     * @description Indicates whether the property is sensitive data. Set to `true` if `pii` is `true` and set to `false` if `pii` is `false`.
                     * @example true
                     */
                    sensitive: boolean;
                    /**
                     * @description Indicates whether the property is Personal Identifiable Information (PII).
                     * @example true
                     */
                    pii: boolean;
                    /**
                     * @description Object containing the type of the items if the field is an array. Typically, arrays will contain strings and will be used for fields such as `email`.
                     * @example {
                     *       "type": "string"
                     *     }
                     */
                    items?: {
                        /**
                         * @description Field type.
                         * @example string
                         */
                        type?: string;
                    };
                };
            };
            /**
             * @description Document time to live, in days. After this many days from its creation or update, any document cerated from this schema will be deleted.
             * @example 1825
             */
            documentTTL?: number;
            /**
             * @description Schema version.
             * @example 1
             */
            version?: number;
            /**
             * @description List of fields to be indexed.
             * @example [
             *       "email",
             *       "document"
             *     ]
             */
            "v-indexed"?: string[];
            /**
             * @description List of fields that must be unique.
             * @example [
             *       "email",
             *       "document"
             *     ]
             */
            "v-unique"?: string[];
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
        profileId: string;
        /** @description ID of a client's specific address as returned in the [Create client address](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles/-profileId-/addresses) endpoint's response, in the `id` field. */
        addressId: string;
        /** @description ID of the prospect as returned by the [Create prospect](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/prospects) endpoint's response, in the `id` field. */
        prospectId: string;
        /** @description ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field. */
        profileVersionId: string;
        /** @description ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field. */
        addressVersionId: string;
        /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
         *
         *
        > Currently, there are two possible values for this parameter: `email` and `document`. */
        alternativeKey: string;
        /** @description This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.
         *
         *
        > Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating. */
        ttl: number;
        /** @description Reason for requesting unmasked data. */
        reason: string;
        /** @description Identification of the unmasked information requester. */
        onBehalfOf: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    CreateClientProfile: {
        parameters: {
            query?: {
                /** @description This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.
                 *
                 *
                > Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating. */
                ttl?: components["parameters"]["ttl"];
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Profile"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id?: components["schemas"]["ProfileId"];
                        meta?: components["schemas"]["ProfileMeta"];
                        document?: components["schemas"]["Profile"];
                    };
                };
            };
        };
    };
    GetProfile: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
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
                    "application/json": components["schemas"]["MaskedProfileResponse"];
                };
            };
        };
    };
    DeleteClientProfile: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UpdateClientProfile: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
                /** @description This parameter sets the the Time To Live (TTL), in days, of the specific document being created or updated with this request. After this period of time from the moment of the request, the document is deleted. By sending this parameter you override the TTL set for the schema.
                 *
                 *
                > Currently, the available default document schemas have no TTL. This means that documents are stored indefinitely, unless a TTL is sent when creating or updating. */
                ttl?: components["parameters"]["ttl"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Profile"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnmaskedProfileResponse"];
                };
            };
        };
    };
    GetUnmaskedProfile: {
        parameters: {
            query: {
                /** @description Reason for requesting unmasked data. */
                reason: components["parameters"]["reason"];
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
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
                    "application/json": components["schemas"]["UnmaskedProfileResponse"][];
                };
            };
        };
    };
    GetProfileByVersion: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field. */
                profileVersionId: components["parameters"]["profileVersionId"];
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
                    "application/json": components["schemas"]["MaskedProfileResponseByVersion"];
                };
            };
        };
    };
    GetUnmaskedProfileByVersion: {
        parameters: {
            query: {
                /** @description Reason for requesting unmasked data. */
                reason: components["parameters"]["reason"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of the version of the client's profile as returned by endpoints that create or update profile information in the `version` field. */
                profileVersionId: components["parameters"]["profileVersionId"];
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
                    "application/json": components["schemas"]["UnmaskedProfileResponse"][];
                };
            };
        };
    };
    GetClientAddresses: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
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
                    "application/json": components["schemas"]["MaskedAddressResponse"][];
                };
            };
        };
    };
    CreateClientAddress: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateAddress"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnmaskedAddressResponse"];
                };
            };
        };
    };
    GetUnmaskedClientAddresses: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
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
                    "application/json": components["schemas"]["UnmaskedAddressResponse"][];
                };
            };
        };
    };
    GetAddress: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of a client's specific address as returned in the [Create client address](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles/-profileId-/addresses) endpoint's response, in the `id` field. */
                addressId: components["parameters"]["addressId"];
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
                    "application/json": components["schemas"]["MaskedAddressResponse"];
                };
            };
        };
    };
    DeleteAddress: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of a client's specific address as returned in the [Create client address](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles/-profileId-/addresses) endpoint's response, in the `id` field. */
                addressId: components["parameters"]["addressId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UpdateClientAddress: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of a client's specific address as returned in the [Create client address](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles/-profileId-/addresses) endpoint's response, in the `id` field. */
                addressId: components["parameters"]["addressId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateAddress"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnmaskedAddressResponse"];
                };
            };
        };
    };
    GetUnmaskedAddress: {
        parameters: {
            query: {
                /** @description Reason for requesting unmasked data. */
                reason: components["parameters"]["reason"];
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of a client's specific address as returned in the [Create client address](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles/-profileId-/addresses) endpoint's response, in the `id` field. */
                addressId: components["parameters"]["addressId"];
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
                    "application/json": components["schemas"]["UnmaskedAddressResponse"];
                };
            };
        };
    };
    GetAddressByVersion: {
        parameters: {
            query: {
                /** @description Reason for requesting unmasked data. */
                reason: components["parameters"]["reason"];
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of a client's specific address as returned in the [Create client address](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles/-profileId-/addresses) endpoint's response, in the `id` field. */
                addressId: components["parameters"]["addressId"];
                /** @description ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field. */
                addressVersionId: components["parameters"]["addressVersionId"];
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
                    "application/json": components["schemas"]["MaskedAddressResponse"];
                };
            };
        };
    };
    GetUnmaskedAddressByVersion: {
        parameters: {
            query: {
                /** @description Reason for requesting unmasked data. */
                reason: components["parameters"]["reason"];
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
                /** @description ID of a client's specific address as returned in the [Create client address](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles/-profileId-/addresses) endpoint's response, in the `id` field. */
                addressId: components["parameters"]["addressId"];
                /** @description ID of the version of a given client's address as returned by endpoints that create or update address information in the `version` field. */
                addressVersionId: components["parameters"]["addressVersionId"];
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
                    "application/json": components["schemas"]["UnmaskedAddressResponse"];
                };
            };
        };
    };
    GetProspects: {
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
                    "application/json": components["schemas"]["MaskedProspectResponse"][];
                };
            };
        };
    };
    CreateProspect: {
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
                "application/json": components["schemas"]["Prospect"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnmaskedProspectResponse"];
                };
            };
        };
    };
    GetUnmaskedProspects: {
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
                    "application/json": components["schemas"]["UnmaskedProspectResponse"][];
                };
            };
        };
    };
    GetProspect: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the prospect as returned by the [Create prospect](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/prospects) endpoint's response, in the `id` field. */
                prospectId: components["parameters"]["prospectId"];
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
                    "application/json": components["schemas"]["MaskedProspectResponse"];
                };
            };
        };
    };
    DeleteProspect: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the prospect as returned by the [Create prospect](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/prospects) endpoint's response, in the `id` field. */
                prospectId: components["parameters"]["prospectId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UpdateProspect: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the prospect as returned by the [Create prospect](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/prospects) endpoint's response, in the `id` field. */
                prospectId: components["parameters"]["prospectId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Prospect"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnmaskedProspectResponse"];
                };
            };
        };
    };
    GetUnmaskedProspect: {
        parameters: {
            query: {
                /** @description Reason for requesting unmasked data. */
                reason: components["parameters"]["reason"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the prospect as returned by the [Create prospect](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/prospects) endpoint's response, in the `id` field. */
                prospectId: components["parameters"]["prospectId"];
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
                    "application/json": components["schemas"]["UnmaskedProspectResponse"];
                };
            };
        };
    };
    GetPurchaseInformation: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
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
                    "application/json": components["schemas"]["MaskedPurchaseInfoResponse"][];
                };
            };
        };
    };
    CreatePurchaseInformation: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "paymentData": {
                 *         "availableAccounts": [
                 *           {
                 *             "accountId": "D09F5E3F01054C959CFC4CB357961ADE",
                 *             "paymentSystem": "2",
                 *             "paymentSystemName": "Visa",
                 *             "cardNumber": "************1111",
                 *             "bin": "44443334",
                 *             "availableAddresses": [
                 *               "db267dcc53c14fb2b9a985532dd287bc"
                 *             ],
                 *             "expirationDate": "01/2032",
                 *             "isExpired": false,
                 *             "accountStatus": null
                 *           }
                 *         ],
                 *         "availableTokens": [],
                 *         "transactions": null,
                 *         "giftCards": [],
                 *         "giftCardMessages": [],
                 *         "numberOfPaymentErrors": 0,
                 *         "numberOfDeniedTransactions": 0,
                 *         "lastDeniedTransaction": null
                 *       },
                 *       "clientPreferences": {
                 *         "userId": "d9b946b8-9524-4b2d-96ec-b35d0625c0a7",
                 *         "localeDefault": "pt-BR",
                 *         "isNewsletterOptIn": true
                 *       },
                 *       "isToSavePersonalData": true,
                 *       "lastUserPurchases": [
                 *         {
                 *           "creationDate": "2023-10-23T19:22:12.8989883Z",
                 *           "orderId": "1370990595750-01",
                 *           "orderGroup": "1370990595750",
                 *           "value": 3498
                 *         }
                 *       ],
                 *       "lastPurchasesAddressId": "db267dcc53c14fb2b9a985532dd287bc"
                 *     } */
                "application/json": components["schemas"]["PurchaseInfo"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MaskedPurchaseInfoResponse"];
                };
            };
        };
    };
    DeletePurchaseInformation: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UpdatePurchaseInformation: {
        parameters: {
            query?: {
                /** @description The `profileId` path parameter may be substituted by other profile fields in this request. When making this request, send the `alternativeKey` parameter with a value equal to the key of the field you wish to use as `profileId`.
                 *
                 *
                > Currently, there are two possible values for this parameter: `email` and `document`. */
                alternativeKey?: components["parameters"]["alternativeKey"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "paymentData": {
                 *         "availableAccounts": [
                 *           {
                 *             "accountId": "D09F5E3F01054C959CFC4CB357961ADE",
                 *             "paymentSystem": "2",
                 *             "paymentSystemName": "Visa",
                 *             "cardNumber": "************1111",
                 *             "bin": "44443334",
                 *             "availableAddresses": [
                 *               "db267dcc53c14fb2b9a985532dd287bc"
                 *             ],
                 *             "expirationDate": "01/2032",
                 *             "isExpired": false,
                 *             "accountStatus": null
                 *           }
                 *         ],
                 *         "availableTokens": [],
                 *         "transactions": null,
                 *         "giftCards": [],
                 *         "giftCardMessages": [],
                 *         "numberOfPaymentErrors": 0,
                 *         "numberOfDeniedTransactions": 0,
                 *         "lastDeniedTransaction": null
                 *       },
                 *       "clientPreferences": {
                 *         "userId": "d9b946b8-9524-4b2d-96ec-b35d0625c0a7",
                 *         "localeDefault": "pt-BR",
                 *         "isNewsletterOptIn": true
                 *       },
                 *       "isToSavePersonalData": true,
                 *       "lastUserPurchases": [
                 *         {
                 *           "creationDate": "2023-10-23T19:22:12.8989883Z",
                 *           "orderId": "1370990595750-01",
                 *           "orderGroup": "1370990595750",
                 *           "value": 3498
                 *         }
                 *       ],
                 *       "lastPurchasesAddressId": "db267dcc53c14fb2b9a985532dd287bc"
                 *     } */
                "application/json": components["schemas"]["PurchaseInfo"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MaskedPurchaseInfoResponse"];
                };
            };
        };
    };
    GetUnmaskedPurchaseInformation: {
        parameters: {
            query: {
                /** @description Reason for requesting unmasked data. */
                reason: components["parameters"]["reason"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the client's profile as returned by the [Create profile](https://developers.vtex.com/docs/api-reference/profile-system#post-/api/storage/profile-system/profiles) endpoint's response, in the `id` field. It can also be an `alternativeKey` according to your custom profile schema. In this case, this request should also send the `alternativeKey` parameter. */
                profileId: components["parameters"]["profileId"];
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
                    "application/json": components["schemas"]["MaskedPurchaseInfoResponse"][];
                };
            };
        };
    };
    CreateOrUpdateProfileSchema: {
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
                 *       "customField1": {
                 *         "type": [
                 *           "string",
                 *           "null"
                 *         ],
                 *         "sensitive": true,
                 *         "pii": true
                 *       },
                 *       "customField2": {
                 *         "type": [
                 *           "string",
                 *           "null"
                 *         ],
                 *         "sensitive": false,
                 *         "pii": false
                 *       }
                 *     } */
                "application/json": {
                    [key: string]: {
                        /** @description Array with information about the type of the custom property. */
                        type: string[];
                        /**
                         * @description Indicates whether the property is sensitive data. Set to `true` if `pii` is `true` and set to `false` if `pii` is `false`.
                         * @example true
                         */
                        sensitive: boolean;
                        /**
                         * @description Indicates whether the property is Personal Identifiable Information (PII).
                         * @example true
                         */
                        pii: boolean;
                    } | undefined;
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
}
