export interface paths {
    "/api/license-manager/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get user
         * @description Allows you to get a user from the database, using the `userId` as the identifier.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Remove user** |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["GetUser"];
        put?: never;
        post?: never;
        /**
         * Delete user
         * @description Allows you to delete a user from the database, using the `userId` as the identifier.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *     | License Manager | Services access control | **Remove user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
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
                    /** @description ID from queried user. */
                    userId: string;
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
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description Error message. */
                            Message?: string;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/license-manager/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create user
         * @description Allows you to create a user by providing an email (mandatory) and name (optional). The email must be in a valid format. The success response will contain the generated `userId` for that user.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["CreateUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/license-manager/site/pvt/logins/list/paged": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of users
         * @description Returns a list of registered users. The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Get paged users** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetListUsers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/license-manager/users/{userId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get roles by user or appKey
         * @description Retrieves License Manager [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) of a particular user or application key.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["GetRolesbyUser"];
        /**
         * Add roles to user or appKey
         * @description Allows you to add License Manager [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) to a particular user or application key by specifying the list of role IDs on the request body.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        put: operations["PutRolesinUser"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/license-manager/users/{userId}/roles/{roleId}": {
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
         * Remove role from user or appKey
         * @description Allows you to remove a License Manager [role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) from a specific user or application key. This method only allows the removal of one role per request. The role's ID must be specified on the request path, not on the request body.
         *
         *
        > Note that a successful response returns a `204` response with an empty body. A deletion on a role or user that does not exist will also return a `204`. Thus, this method should not be used to verify the existence of a specific user or role.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        delete: operations["RemoveRolefromUser"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/license-manager/site/pvt/roles/list/paged": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of roles
         * @description Returns a list of License Manager [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). The response is divided in pages. The query parameter `numItems` defines the number of items in each page, and consequently the amount of pages for the whole list.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Get paged roles** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetListRoles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vlm/appkeys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get appKeys from account
         * @description Retrieves all application keys from an account.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["Getappkeysfromaccount"];
        put?: never;
        /**
         * Create new appKey
         * @description Creates a new pair of `appKey` and `appToken`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["Createnewappkey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vlm/appkeys/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update appKey
         * @description Activates or deactivates an `appKey` by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save user** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | User Administrator - RESTRICTED | Save user |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        put: operations["Updateappkey"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vlm/account/stores": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get stores
         * @description Retrieves the stores of the account and their respective hosts.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save account** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Finance - Full access | Save account |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["GetByAccount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/vlm/account": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get information about account
         * @description Retrieves information from an account, such as company and sponsor user details, stores, and appTokens.
         *
         *
        This endpoint only accepts requests from the host list designated for that store. If you want to try this request from this portal, be sure to add it to the list. Learn how to add hosts to the list in [How to manage accounts](https://help.vtex.com/en/tutorial/how-to-manage-accounts--tutorials_6285#).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | License Manager | Services access control | **Save account** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Finance - Full access | Save account |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *      To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["GetAccount"];
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
        /** @description Successful response for `/api/vlm/account`. */
        AccountResponse: {
            /** @description Defines if the account is active (`true`) or not (`false`). */
            isActive?: boolean;
            /** @description ID of the account. */
            id?: string;
            /** @description Trading name. */
            name?: string;
            /** @description Account name. */
            accountName?: string;
            /**
             * @deprecated
             * @description Level.
             */
            lv?: string | null;
            /** @description Defines if the account is in production (`true`) or not (`false`). */
            isOperating?: boolean;
            /**
             * @deprecated
             * @description Default URL.
             */
            defaultUrl?: string | null;
            /** @description Neighborhood of the person assigned as main contact of the store. */
            district?: string | null;
            /** @description Country of the person assigned as main contact of the store. */
            country?: string | null;
            /** @description Additional address of the person assigned as main contact of the store. */
            complement?: string | null;
            /** @description Company name. */
            companyName?: string;
            /** @description CNPJ (Corporate Tax ID) of account. */
            cnpj?: string | null;
            /** @description Defines if the account has a parent account (`true`) or not (`false`). */
            haveParentAccount?: boolean;
            /** @description ID of the parent account. */
            parentAccountId?: string | null;
            /** @description Name of the parent account. */
            parentAccountName?: string | null;
            /** @description City of the person assigned as main contact of the store. */
            city?: string | null;
            /** @description Address of the person assigned as main contact of the store. */
            address?: string | null;
            /** @description Filename of the account's logotype. */
            logo?: string | null;
            /** @description Defines if the store's logotype has been uploaded (`true`) or not (`false`). */
            hasLogo?: boolean;
            /** @description Number of the address of the person assigned as main contact of the store. */
            number?: string | null;
            /** @description Zip code of the person assigned as main contact of the store. */
            postalCode?: string | null;
            /** @description State or province of the person assigned as main contact of the store. */
            state?: string | null;
            /** @description Telephone number of the person assigned as main contact of the store. */
            telephone?: string;
            /** @description Trading name. */
            tradingName?: string;
            /** @description Licenses of the account. */
            licenses?: components["schemas"]["LicenseItems"][];
            /** @description Object with information about the sponsor user. */
            sponsor?: {
                /** @description Name of the sponsor user. */
                name?: string;
                /** @description Email of the sponsor user. */
                email?: string;
                /** @description Phone of the sponsor user. */
                phone?: string;
            };
            /** @description Information about the person assigned as main contact of the store. */
            contact?: {
                /** @description Name of the person assigned as main contact of the store. */
                name?: string;
                /** @description Email of the person assigned as main contact of the store. */
                email?: string;
                /** @description Telephone number of the person assigned as main contact of the store. */
                phone?: string;
            };
            /**
             * Format: date-time
             * @description Date when the account went into production.
             */
            operationDate?: string | null;
            /**
             * Format: date-time
             * @description Date when the account was deactivated.
             */
            inactivationDate?: string | null;
            /**
             * Format: date-time
             * @description Date when the account was created.
             */
            creationDate?: string;
            /** @description Hosts of all stores. */
            hosts?: string[];
            /** @description Array of objects representing each store. */
            sites?: components["schemas"]["SiteItems"][];
            /**
             * @deprecated
             * @description Deprecated. Check the `appKeys` object for all appKeys.
             */
            appKey?: {
                /**
                 * @deprecated
                 * @description Token.
                 */
                token?: string | null;
                /**
                 * @deprecated
                 * @description Token name.
                 */
                name?: string | null;
            };
            /** @description Array of application keys. */
            appKeys?: components["schemas"]["AppKeyItems"][];
        };
        /** @description Object representing licenses. */
        LicenseItems: {
            /**
             * Format: date-time
             * @deprecated
             * @description Expiration date.
             */
            expiration?: string | null;
            /** @description ID of the category of the license. */
            id?: number;
            /** @description Defines if the license is purchased (`true`) or not (`false`). */
            isPurchased?: boolean;
            /** @description Array of products. */
            products?: {
                /** @description ID of the product. */
                id?: number;
                /** @description Name of the product. */
                name?: string;
                /**
                 * @deprecated
                 * @description List of domains of the product.
                 */
                domains?: string[];
                /**
                 * @deprecated
                 * @description Endpoints.
                 */
                endpoints?: {
                    /**
                     * @deprecated
                     * @description Web API URL.
                     */
                    webApiUrl?: string | null;
                    /**
                     * @deprecated
                     * @description Console URL.
                     */
                    consoleUrl?: string | null;
                };
            }[];
            /** @description Name of the category of the license. */
            name?: string;
        };
        /** @description Object containing complete information from a store. */
        SiteItems: {
            /** @description ID of the store. */
            id?: number;
            /** @description Store name. */
            name?: string;
            /** @description Trading name of the store. */
            tradingName?: string;
            /**
             * @deprecated
             * @description Level.
             */
            LV?: string | null;
            /**
             * @deprecated
             * @description Logo.
             */
            logo?: string | null;
            /**
             * @deprecated
             * @description Monetary unit ID.
             */
            monetaryUnitId?: number;
            /**
             * @deprecated
             * @description List of domains.
             */
            domains?: string[] | null;
            /** @description Hosts associated to the store. */
            hosts?: string[];
            /**
             * @deprecated
             * @description Aliases.
             */
            aliases?: string[];
        };
        /** @description Object representing application keys. */
        AppKeyItems: {
            /** @description ID of the application key. */
            id?: string;
            /** @description AppKey. */
            appKey?: string;
            /** @description AppToken. For security reasons, it should always be null. */
            appToken?: string | null;
            /** @description Label of the application key. */
            label?: string;
            /**
             * Format: date-time
             * @description Creation date of the application key.
             */
            createdIn?: string;
            /** @description Defines if the application key is active (`true`) or not (`false`). */
            isActive?: boolean;
            /** @description Defines if the application key is blocked (`true`) or not (`false`). */
            isBlocked?: boolean;
        };
        /** @description Request body for creating users. */
        CreateUserRequest: {
            /**
             * @description Name of the user.
             * @example John
             */
            name?: string;
            /**
             * @description Email of the user.
             * @example john@mail.com
             */
            email: string;
        };
        /** @description Request body for creating new application key (/api/vlm/appkeys) */
        CreatenewappkeyRequest: {
            /**
             * @description Label of the application key.
             * @example appkey-test
             */
            label: string;
        };
        /** @description Response body of sucessful call to /api/vlm/appkeys. */
        CreatenewappkeyResponse: {
            /** @description ID of the application key. */
            id: string;
            /** @description AppKey. */
            appKey: string;
            /** @description AppToken. For security reasons, it should always be null. */
            appToken: string | null;
            /** @description Label of the application key. */
            label: string;
            /**
             * Format: date-time
             * @description Creation date of the application key.
             */
            createdIn: string;
            /** @description Defines if the application key is active (`true`) or not (`false`). */
            isActive: boolean;
        };
        /** @description Request body for activating or deactivating application keys. */
        UpdateappkeyRequest: {
            /**
             * @description Defines if the application key is active (`true`) or not (`false`).
             * @example true
             */
            isActive: boolean;
        };
        /** @description Response body for getting all application keys from the account. */
        Getappkeysfromaccount: {
            /** @description ID of the application key. */
            id: string;
            /** @description AppKey. */
            appKey: string;
            /** @description Label of the application key. */
            label: string;
            /**
             * Format: date-time
             * @description Creation date of the application key.
             */
            createdIn: string;
            /** @description Defines if the application key is active (`true`) or not (`false`). */
            isActive: boolean;
        };
        /** @description Response body for listing all users. */
        ListUsersResponse: {
            /** @description Array of user objects. */
            items?: components["schemas"]["UserItems"][];
            paging?: components["schemas"]["Paging"];
        };
        /** @description Response body for listing all roles. */
        ListRolesResponse: {
            /** @description Array of role objects. */
            items?: components["schemas"]["RoleItems"][];
            paging?: components["schemas"]["Paging"];
        };
        /** @description Paging object. */
        Paging: {
            /** @description Current page number. */
            page: number;
            /** @description Items per page. */
            perPage: number;
            /** @description Total of items. */
            total: number;
            /** @description Total of pages. */
            pages: number;
        };
        /** @description Object with information about an user. */
        UserItems: {
            /** @description ID of the user. */
            id?: string;
            /** @description Email of the user. */
            email?: string;
            /** @description Defines if the user has administrative access (`true`) or not (`false`). */
            isAdmin?: boolean;
            /** @description For internal use only. */
            isReliable?: boolean;
            /** @description Defines if the user is blocked (`true`) or not (`false`). */
            isBlocked?: boolean;
            /** @description Array of user roles. */
            roles?: string[];
            /** @description Array of account names. */
            accountNames?: string[];
            /** @description Name of the user. */
            name?: string;
        };
        /** @description Object with information about a role. */
        RoleItems: {
            /** @description ID of the role. */
            id?: number;
            /** @description Defines if the role has administrative access (`true`) or not (`false`). */
            isAdmin?: boolean;
            /** @description Returns `1` for custom roles, and `0` for predefined roles. */
            roleType?: number;
            /** @description Array of License Manager product objects. */
            products?: components["schemas"]["ProductItems"][];
            /**
             * @deprecated
             * @description Resources.
             */
            resources?: string | null;
            /**
             * @deprecated
             * @description Logins.
             */
            logins?: string | null;
            /** @description Name of the role. */
            name?: string;
        };
        /** @description Object representing License Manager products. */
        ProductItems: {
            /**
             * @deprecated
             * @description License Manager product ID.
             */
            id?: string | null;
            /**
             * @deprecated
             * @description Category ID.
             */
            categoryId?: string | null;
            /**
             * @deprecated
             * @description Category name.
             */
            categoryName?: string | null;
            /**
             * @deprecated
             * @description Description.
             */
            description?: string | null;
            /**
             * @deprecated
             * @description Console URL mask.
             */
            consoleUrlMask?: string | null;
            /**
             * @deprecated
             * @description URL configuration.
             */
            urlConfiguration?: string | null;
            /**
             * @deprecated
             * @description Web API mask.
             */
            webApiUrlMask?: string | null;
            /**
             * @deprecated
             * @description URL.
             */
            url?: string | null;
            /**
             * @deprecated
             * @description Product resources.
             */
            productResources?: string | null;
            /** @description Name of the License Manager product. */
            name?: string;
        };
        /** @description Object containing summarized information from a store. */
        StoreItems: {
            /** @description ID of the store. */
            id?: number;
            /** @description Name of the store. */
            name?: string;
            /** @description Array of hosts corresponding to the store. */
            hosts?: string[];
        };
        /** @description Object representing VLMError. */
        VLMError: {
            /** @description Details of error. */
            Details?: string | null;
            /** @description Status code of HTTP response. */
            HttpStatusCode?: number;
            /** @description Error code for License Manager. */
            VLMErrorCode?: number;
            /** @description Error message. */
            Message?: string;
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
    GetUser: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID from queried user. */
                userId: string;
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
                content: {
                    "application/json": {
                        /** @description ID of the user. */
                        id?: string;
                        /** @description Name of the user. */
                        name?: string;
                        /** @description Email of the user. */
                        email?: string;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error message. */
                        Message?: string;
                    };
                };
            };
            /** @description Method Not Allowed - A null `userId` sends the request to a path that is not allowed. */
            405: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CreateUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Jane",
                 *       "email": "jane@mail.com"
                 *     } */
                "application/json": components["schemas"]["CreateUserRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description ID of the user. */
                        id?: string;
                        /** @description Email of the user. */
                        email?: string;
                        /** @description Name of the user. */
                        name?: string;
                    };
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error message. */
                        Message?: string;
                    };
                };
            };
        };
    };
    GetListUsers: {
        parameters: {
            query?: {
                /** @description Number of items in the returned page. */
                numItems?: number;
                /** @description Which page from the whole list will be returned. */
                pageNumber?: number;
                /** @description Chooses the field that the list will be sorted by. */
                sort?: string;
                /** @description Defines the sorting order. `ASC` is used for ascendant order. `DSC` is used for descendant order. */
                sortType?: string;
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListUsersResponse"];
                };
            };
        };
    };
    GetRolesbyUser: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the user. */
                userId: string;
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
                content: {
                    "application/json": {
                        /**
                         * Format: int32
                         * @description ID of role.
                         */
                        id?: number;
                        /** @description Name of the role. */
                        name?: string;
                    }[];
                };
            };
        };
    };
    PutRolesinUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the user. */
                userId: string;
            };
            cookie?: never;
        };
        /** @description List of role IDs to add to the user or application key. */
        requestBody: {
            content: {
                /** @example [
                 *       9000,
                 *       9111,
                 *       9333,
                 *       9444
                 *     ] */
                "application/json": number[];
            };
        };
        responses: {
            /** @description Success - A no-content response, but the roles were added successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error message. */
                        Message?: string;
                    };
                };
            };
            /** @description Unexpected error - One possible reason is that the userId is not present on the database. */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error message. */
                        Message?: string;
                    };
                };
            };
        };
    };
    RemoveRolefromUser: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the user. */
                userId: string;
                /** @description ID of the role which will be removed from the user. */
                roleId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success - A no-content response, but the role deletion was performed successfully. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request - A userId or role list with invalid format. The message on the body of the response will contain further information. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error message. */
                        Message?: string;
                    };
                };
            };
            /** @description Method Not Allowed */
            405: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetListRoles: {
        parameters: {
            query?: {
                /** @description Number of items in the returned page. */
                numItems?: number;
                /** @description Which page from the whole list will be returned. */
                pageNumber?: number;
                /** @description Chooses the field that the list will be sorted by. */
                sort?: string;
                /** @description Defines the sorting order. `ASC` is used for ascendant order. `DSC` is used for descendant order. */
                sortType?: string;
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListRolesResponse"];
                };
            };
        };
    };
    Getappkeysfromaccount: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Getappkeysfromaccount"][];
                };
            };
        };
    };
    Createnewappkey: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "label": "my new appkey"
                 *     } */
                "application/json": components["schemas"]["CreatenewappkeyRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatenewappkeyResponse"];
                };
            };
        };
    };
    Updateappkey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID from the appKey which will be updated */
                id: string;
            };
            cookie?: never;
        };
        /** @description Request body for updating AppKeys */
        requestBody: {
            content: {
                /** @example {
                 *       "isActive": false
                 *     } */
                "application/json": components["schemas"]["UpdateappkeyRequest"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VLMError"];
                };
            };
        };
    };
    GetByAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StoreItems"][];
                };
            };
        };
    };
    GetAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AccountResponse"];
                };
            };
        };
    };
}
