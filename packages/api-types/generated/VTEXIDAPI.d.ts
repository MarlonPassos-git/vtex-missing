export interface paths {
    "/api/vtexid/apptoken/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate authentication token
         * @description Generate a [token](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication#user-token) from a given [app key and app token](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) pair. You can use this token to authenticate requests to VTEX APIs by sending it as a header named `VtexIdclientAutCookie`. The token's permissions are the same as [defined to the credential pair](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet#managing-app-key-permissions).
         *
         *
        > Since you are sending the credentials on the request body, there is no need to send authentication headers.
         *
         *
        > It is also possible to make this request using the `https://api.vtexcommercestable.com.br/api/vtexid/apptoken/login?an={accountName}` route, replacing `{accountName}` with your VTEX account name. This is the only case where you need to use the `an` query parameter.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        post: {
            parameters: {
                query?: {
                    /** @description Name of your VTEX account. */
                    an?: components["parameters"]["an"];
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
                    "application/json": components["schemas"]["credentials"];
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
                            /** @description Authentication status. */
                            authStatus?: string;
                            /** @description Authentication token. */
                            token?: string;
                            /** @description Token expiration time in seconds. */
                            expires?: number;
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
    "/api/vtexid/audience/webstore/provider/oauth/exchange": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Exchange OAuth access token for VTEX credential
         * @description If your store uses a headless frontend, you can authenticate users via OAuth and use this endpoint to exchange the OAuth access token for a VTEX authentication token. This VTEX token can be used to authenticate your frontend requests to VTEX APIs.
         *
         *
        Learn more about how to implement [headless authentication](https://developers.vtex.com/docs/guides/headless-authentication) in your store.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
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
                    /** @description Name of your VTEX account. */
                    accountName: components["parameters"]["accountName"];
                    /** @description Environment to be used in the request. */
                    environment: components["parameters"]["environment"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Name of the [OAuth provider](https://developers.vtex.com/docs/guides/login-integration-guide-webstore-oauth2) set up in your Admin panel.
                         * @example GoogleID
                         */
                        providerId: string;
                        /**
                         * @description Access token obtained from your frontend via OAuth integration corresponding with the indicated `providerId`.
                         * @example dsfDShdgfhDFI1NiIsIrtyZCI6IjFBRjI5MUUwRDY0MERENTlEQTkzRTg0REMxNjQyNjA3ODZEQjY3ODAiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJ2dGV4YXBwa2V5LXZ0ZXhoZWxwLVdWQ0FCVCIsImFjY291bdg465DATU4GVscCIsImF1MBllbmNlIjoiYWRtaW4iLCJleHAiOjE2Njk3NzA3MzcsInVzZXJJZCI6IjM5MjNhMmUy5khmMTctNGNiYy04YzU3LWQ3OGFkNmUxYTU2NiIsImlhdCI6MTY2OTc0OTEzNywiaXNzIjoidG9rZW4tZW1HgoRlciIsImp0aSI6IjNiNjAxODA2LTExMzEtNDcwYS05MWJjLTVhM2JhOThiYWQyNiJ9.Q7N8MFa1FMJsQUpxBY29oije4aa-654fgjLFLl6LUY3Wei3MRUVUMRQWkey6Kug8iFPonZ1L-PaFmwfzSz3TCQ
                         */
                        accessToken: string;
                        /**
                         * @description Duration of the token that will be returned, in minutes.
                         * @default 60
                         * @example 90
                         */
                        duration: number;
                    };
                };
            };
            responses: {
                /** @description 200 - OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description Authentication token. Use this token to authenticate your requests to VTEX APIs. */
                            authToken?: string;
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
    "/api/vtexid/credential/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Check authenticated user
         * @description Retrieves information about the user who is currently authenticated in your store, given an user token. If the user is not authenticated, the response for this API will be `401 (Unauthorized)`.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        post: {
            parameters: {
                query?: {
                    /** @description Name of your VTEX account. */
                    an?: components["parameters"]["an"];
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Environment to be used in the request. */
                    environment: components["parameters"]["environment"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Value of the `VtexIdclientAutCookie`, [user token](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens), valid for 24 hours.
                         * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
                         */
                        token: string;
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
                            /** @description Authentication status. */
                            authStatus?: string;
                            /** @description Unique identifier of the user within VTEX services. */
                            id?: string;
                            /** @description User email. */
                            user?: string;
                            /** @description VTEX account name. */
                            account?: string;
                            /** @description Type of user. */
                            audience?: string;
                            /** @description Type of token. */
                            tokenType?: string;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @description Authentication status. */
                            authStatus?: string;
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
    "/api/vtexid/pub/providers/setup/password/webstore/password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Enable or disable repeated passwords
         * @description Defines if user passwords can be repeated in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | VTEX ID | Identity Providers | **Write Identity Providers** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
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
                    /** @description Name of your VTEX account. */
                    accountName: components["parameters"]["accountName"];
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Defines if password access is active (`true`) or not (`false`).
                         * @example true
                         */
                        isActive?: boolean;
                        /**
                         * @description Defines if passwords can be repeated (`true`) or not (`false`).
                         * @example false
                         */
                        allowRepeated?: boolean;
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
    "/api/vtexid/password/expire": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Expire user password
         * @description Expires an user's password in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | VTEX ID | User Management | **Expire User Password** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: {
            parameters: {
                query: {
                    /** @description User email. */
                    email: string;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": components["parameters"]["Content-Type"];
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: components["parameters"]["Accept"];
                };
                path: {
                    /** @description Name of your VTEX account. */
                    accountName: components["parameters"]["accountName"];
                    /** @description Environment to be used in the request. */
                    environment: components["parameters"]["environment"];
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
        /** @description Credentials object, composed of application key and application token. */
        credentials: {
            /**
             * @description Application key.
             * @example vtexappkey-example-YSWQFZ
             */
            appkey: string;
            /**
             * @description Application token corresponding to the application key sent with it.
             * @example eyJhbGciOiJFUzI1NiIsImtpZCI6IjA1MTZFN0IwMDNFODMxRTg0QkFDOTg2NzBCNUM2QTRERTlBN0RFNkUiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJwZWRyby5jb3N0YUB2dGV4LmNvbS5iciIsImFjY291bnQiOiJhcHBsaWFuY2V0aGVtZSIsImF1ZGllbmNlIjoiYWRtaW4iLCJzZXNzIjoiZjU3YjMyMGItMWE3YS00YzlkLWJkNDMtZTE4NDdhYmE1MTE1IiwiZXhwIjoxNjE2NzY3Mjc4LCJ1c2VySWQiOiJmYjU0MmU1MS01NDg4LTRjMzQtOGQxNy1lZDhmY2Y1OTdhOTQiLCJpYXQiOjE2MwerY2ODA4NzgsImlzcyI6InRva2VuLWVtaXR0ZXIiLCJqdGkiOiJmYTI0YWJiOC03Y2E5LTQ3NjUtYmYzNC1kMmvU5YTgzYjYxZmUifQ.23rn-2dEdAAYXJX2exrxDEdbieyKWsVKABeSUNeFWyhz7xRd7d5EcxwiMLjM3bRaBOKrAA9Op7ocn89c45qQ
             */
            apptoken: string;
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description Name of your VTEX account. */
        an: string;
        /** @description Name of your VTEX account. */
        accountName: string;
        /** @description Environment to be used in the request. */
        environment: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
