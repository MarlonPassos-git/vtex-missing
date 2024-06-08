export interface paths {
    "/api/policy-engine/policies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get policy list
         * @description Retrieves a list of all policies in the account and general information of each policy.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Promotions Policy Engine | Policies | **List Policies** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Policy_List"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/policy-engine/evaluate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Evaluate policies
         * @description This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Promotions Policy Engine | Policies | **Evaluate Policy** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Policy_Evaluate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/policy-engine/policies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get policy by ID
         * @description Retrieves general information of a policy by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Promotions Policy Engine | Policies | **Get Policy** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Policy_Get"];
        /**
         * Update policy
         * @description Updates an existing policy at your account.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Promotions Policy Engine | Policies | **Create or Update Policy** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
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
                    /** @description Policy ID. */
                    id: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["PolicySaveRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/octet-stream": components["schemas"]["PolicyGetResponse"][];
                    };
                };
            };
        };
        /**
         * Create policy
         * @description Creates a new policy from scratch.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Promotions Policy Engine | Policies | **Create or Update Policy** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Policy_CreateOrUpdate"];
        /**
         * Delete policy by ID
         * @description Deletes a specific policy of the account by its ID.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Promotions Policy Engine | Policies | **Delete Policy** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["Policy_Delete"];
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
         * PolicyActionGetResponse
         * @description Object with policy conditions.
         */
        PolicyActionGetResponse: {
            /**
             * id
             * @description Action ID.
             */
            id?: string;
            /**
             * metadata
             * @description Metadata object from the current action.
             */
            metadata?: {
                [key: string]: unknown;
            };
        };
        /** @description Object with policy conditions. */
        EvaluatePolicyRequest: {
            /**
             * resource
             * @description Scope on which this policy must be evaluated.
             * @example vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert
             */
            resource: string;
            /**
             * context
             * @description Conditions that the policy needs to satisfy.
             * @example {
             *       "brandId": "2000001",
             *       "discountPercentage": "91.00"
             *     }
             */
            context: {
                [key: string]: unknown;
            };
        };
        PolicySaveRequest: {
            /**
             * name
             * @description Policy name.
             * @example id
             */
            name: string;
            /**
             * description
             * @description Policy description, only for internal use.
             * @example TesteMarcosPromotionsAlert
             */
            description: string;
            /**
             * statements
             * @description Requirements for the the policy to be applied.
             */
            statements: components["schemas"]["StatementGetResponse"][];
        };
        /**
         * PolicyGetResponse
         * @description Object with policy information.
         */
        PolicyGetResponse: {
            /**
             * id
             * @description Policy ID.
             */
            id?: string;
            /**
             * name
             * @description Policy name.
             * @example id
             */
            name?: string;
            /**
             * description
             * @description Policy description, only for internal use.
             */
            description?: string;
            /**
             * statements
             * @description Requirements for the policy to be applied.
             */
            statements?: components["schemas"]["StatementGetResponse"][];
        };
        /** @description Object with policy conditions. */
        StatementGetResponse: {
            /**
             * effect
             * @deprecated
             * @description This field is not functional at the moment. To create a correct request, fill the field with `Allow`.
             * @example Allow
             */
            effect: string;
            /**
             * actions
             * @description Actions that the policy will execute.
             */
            actions?: {
                /**
                 * id
                 * @description Action ID.
                 * @example SendSlackMessage
                 * @enum {string}
                 */
                id?: "SendSlackMessage" | "SendEmail" | "DeactivatePromotions";
                /**
                 * metadata
                 * @description Data inside of the actions.
                 */
                metadata?: {
                    [key: string]: unknown;
                };
            }[];
            /**
             * resource
             * @description Scope on which this policy must be evaluated.
             * @example vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert
             */
            resource?: string;
            /**
             * condition
             * @description Condition to activate this policy. This object can have a maximum of ten recursive conditions.
             */
            condition?: {
                /** @description List of conditions that will activate the policy. */
                conditions?: {
                    /**
                     * conditions
                     * @description List of conditions the actions can have. It can be an empty array `[]`.
                     * @enum {array}
                     */
                    conditions?: never[] | [
                        "stringEquals"
                    ] | [
                        "numericGreaterThan"
                    ];
                    /**
                     * operation
                     * @description The action of the condition.
                     * @example None
                     * @enum {string}
                     */
                    operation?: "None" | "stringEquals" | "stringEqualsIgnoreCase" | "numericEquals" | "numericLessThan" | "numericLessThanEquals" | "numericGreaterThan" | "numericGreaterThanEquals" | "bool" | "not" | "or" | "and" | "dateTimeUtcGreaterThan" | "dateTimeUtcLessThan" | "between";
                    /**
                     * key
                     * @description The element that will define what the policy will influence.
                     * @example skuId
                     * @enum {string}
                     */
                    key?: "skuId" | "brandId" | "discountPercentage";
                    /**
                     * values
                     * @description Array with values of the key.
                     */
                    values?: string[];
                }[];
            };
            /**
             * operation
             * @description This operation will determine if all the conditions need to be valid or at least one of them, if the conditions array is not empty.
             * @example None
             * @enum {string}
             */
            operation?: "None" | "stringEquals" | "stringEqualsIgnoreCase" | "numericEquals" | "numericLessThan" | "numericLessThanEquals" | "numericGreaterThan" | "numericGreaterThanEquals" | "bool" | "not" | "or" | "and" | "dateTimeUtcGreaterThan" | "dateTimeUtcLessThan" | "between";
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
    Policy_List: {
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
                    "application/json": components["schemas"]["PolicyGetResponse"][];
                };
            };
        };
    };
    Policy_Evaluate: {
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
                 *       "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert",
                 *       "context": {
                 *         "brandId": "2000001",
                 *         "discountPercentage": "91.00"
                 *       }
                 *     } */
                "application/json": components["schemas"]["EvaluatePolicyRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PolicyActionGetResponse"][];
                };
            };
        };
    };
    Policy_Get: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Policy ID. */
                id: string;
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
                    "application/json": components["schemas"]["PolicyGetResponse"][];
                };
            };
        };
    };
    Policy_CreateOrUpdate: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Policy ID. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PolicySaveRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": components["schemas"]["PolicyGetResponse"][];
                };
            };
        };
    };
    Policy_Delete: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Policy ID. */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description 200 OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
