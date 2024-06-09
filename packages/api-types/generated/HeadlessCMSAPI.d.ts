export interface paths {
    "/_v/cms/api/{projectId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all content types
         * @description Retrieves data from all Content Types.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise, they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CMS | cms | **See CMS menu on the top-bar** |
         *     | CMS | cms | **Settings** |
         *     | CMS | GraphQL | **CMS GraphQL API** |
         *
         *      There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add the resources above to use this endpoint.
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetAllContentTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/_v/cms/api/{projectId}/{content-type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all CMS pages by content type
         * @description Gets data from all pages of a given content type.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise, they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CMS | cms | **See CMS menu on the top-bar** |
         *     | CMS | cms | **Settings** |
         *     | CMS | GraphQL | **CMS GraphQL API** |
         *
         *      There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add the resources above to use this endpoint.
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetPagesbyContentType"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/_v/cms/api/{projectId}/{content-type}/{document-id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get CMS page
         * @description Gets all data from a given page.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/authentication-overview#application-keys) must have the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise, they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | CMS | cms | **See CMS menu on the top-bar** |
         *     | CMS | cms | **Settings** |
         *     | CMS | GraphQL | **CMS GraphQL API** |
         *
         *      There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add the resources above to use this endpoint.
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetCMSpage"];
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
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetAllContentTypes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Project ID specified in the settings of the CMS (alpha) app. */
                projectId: string;
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
                        /** @description Array with data of each content type. */
                        contentTypes?: {
                            /** @description Content type identifier specified in the FastStore project. */
                            id?: string;
                            /** @description Content type name specified in the FastStore project. */
                            name?: string;
                            /** @description Array with data of the `configurationSchemaSets` tabs specified in the FastStore project. */
                            configurationSchemaSets?: {
                                /** @description Name of the content type tab. */
                                name?: string;
                                /** @description Custom configurations of the content type tab, which may vary based on the content type schema defined in the FastStore project. */
                                configurations?: {
                                    /** @description Section of a form. */
                                    name?: string;
                                    /** @description Customizable [JSON schema](https://json-schema.org/learn/getting-started-step-by-step). */
                                    schema?: {
                                        /** @description Section title. */
                                        title: string;
                                        /** @description Section description. */
                                        description: string;
                                        /** @description [Widget](https://v1.faststore.dev/tutorials/cms-storecomponents/3#using-widgets) to be used in the UI. Should be filled with [`uiSchema`](https://react-jsonschema-form.readthedocs.io/en/docs/api-reference/uiSchema/) along with [`widgets`](https://react-jsonschema-form.readthedocs.io/en/docs/usage/widgets/) to specify which UI widget should be used to render a given field of your schema. The format should be `"{uiSchema}": "{widgetName}"`. */
                                        widget?: {
                                            [key: string]: unknown;
                                        };
                                        [key: string]: unknown;
                                    };
                                }[];
                            }[];
                        }[];
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error type code. */
                        code?: string;
                        /** @description Error message. */
                        message?: string;
                        /** @description Error source. */
                        source?: string;
                        /** @description VTEX request identifier. */
                        requestId?: string;
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
    GetPagesbyContentType: {
        parameters: {
            query?: {
                /** @description Version ID presented in the URL path of a CMS preview. */
                versionId?: string;
                /** @description Release ID presented in the URL path of a CMS preview. */
                releaseId?: string;
                /** @description Filter results by a property of the page (e.g., `filters[status]`) or by a nested custom field of the `parameters` object (e.g., `filters[parameters.collection.sort]`).
                 *     *Replace {field} with the desired property.* */
                "filters[{field}]"?: string;
            };
            header?: never;
            path: {
                /** @description Project ID specified in the settings of the CMS (alpha) app. */
                projectId: string;
                /** @description Content type identifier defined in the FastStore project. */
                "content-type": string;
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
                        /** @description Indicates if there are more items to fetch. */
                        hasNextPage?: boolean;
                        /** @description Total number of results. */
                        totalItems?: number;
                        /** @description Array with data from all pages of the given content type. */
                        data?: {
                            /** @description Document ID presented in the URL path of a CMS preview. */
                            id?: string;
                            /** @description Name of the page created via the CMS interface. */
                            name?: string;
                            /** @description Name of the content type defined in the FastStore project. */
                            type?: string;
                            /** @description Current status of the page. */
                            status?: string;
                            /** @description Version ID. */
                            versionId?: string;
                            /** @description Version status. */
                            versionStatus?: string;
                            /** @description Sections that compose the page. */
                            sections?: {
                                /** @description Section ID. */
                                id?: string;
                                /** @description Section name. */
                                name?: string;
                                /** @description Custom field values of the Section. Varies depending on the Section schema defined in the FastStore project. */
                                data?: Record<string, never>;
                            }[];
                            /** @description Object with the configuration values of a `configurationSchemaSets` tab. Varies depending on the content type schema defined in the FastStore project. */
                            parameters?: Record<string, never>;
                        }[];
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error type code. */
                        code?: string;
                        /** @description Error message. */
                        message?: string;
                        /** @description Error source. */
                        source?: string;
                        /** @description VTEX request identifier. */
                        requestId?: string;
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
    GetCMSpage: {
        parameters: {
            query?: {
                /** @description Version ID presented in the URL path of a CMS preview. */
                versionId?: string;
                /** @description Release ID presented in the URL path of a CMS preview. */
                releaseId?: string;
            };
            header?: never;
            path: {
                /** @description Project ID specified in the settings of the CMS (alpha) app. */
                projectId: string;
                /** @description Content type ID defined in the FastStore project. */
                "content-type": string;
                /** @description Document ID presented in the URL path of a CMS preview. */
                "document-id": string;
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
                        /** @description Document ID. */
                        id: string;
                        /** @description Name of the page created in the CMS app. */
                        name: string;
                        /** @description Name of the content type defined in the FastStore project. */
                        type: string;
                        /** @description Current status of the page. */
                        status: string;
                        /** @description Version ID. */
                        versionId?: string;
                        /** @description Version status. */
                        versionStatus?: string;
                        /** @description Sections that compose the page. */
                        sections?: {
                            /** @description Section ID. */
                            id: string;
                            /** @description Section name. */
                            name: string;
                            /** @description Content of the Section. Varies depending on the Section schema defined in the FastStore project. */
                            data: Record<string, never>;
                        }[];
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Error type code. */
                        code?: string;
                        /** @description Error message. */
                        message?: string;
                        /** @description Error source. */
                        source?: string;
                        /** @description VTEX request identifier. */
                        requestId?: string;
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
}
