export interface paths {
    "/api/user-rights/createAndProcessDeleteUserData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Erase customer data
         * @description Deletes a given customer's data collected in your store by Checkout, Orders, VTEX ID and Profile System.
         *
         *     > Only orders with `invoiced` or `canceled` status are erased in this request.
         *
         *     >❗ This API is currently in closed alpha testing stage, which means that only specific customers can access it now. Do not share this documentation with people outside of your company. If you do not have access yet, please refer to the [Erasing customer data](https://help.vtex.com/en/tutorial/erasing-customer-data--1R9Fn7A06Ifj4R9YD4JTKU) guide instead.
         *
         *     >⚠️ This endpoint is only compatible with stores using the PII data architecture from [Data Protection Plus](https://developers.vtex.com/docs/guides/data-protection-plus), which is in closed beta phase, only available in select regions.
         *     >
         *     > This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/us-en/contact/).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | User Rights | user-rights-request | **Write user rights requests** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
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
                    "application/json": {
                        /**
                         * @description Email of the client whose data will be deleted.
                         * @example john@mail.com
                         */
                        email?: string;
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
                            /** @description User data rights request unique identifier in [UUID](https://www.uuidtools.com/what-is-uuid) format. */
                            uuid?: string;
                            /** @description Type of user data rights request. */
                            requestType?: string;
                            /** @description Client email. */
                            email?: string;
                            /** @description Status of the user data rights request. */
                            status?: string;
                            /** @description Escaped JSON containing information about the status of data deletion on each VTEX system that stores client data. */
                            dataResponse?: string;
                            /** @description Date of the user data rights request in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)format. */
                            requestTime?: string;
                            /** @description Array containing an object for each VTEX application that stores client data. */
                            applications?: {
                                /** @description Abbreviated name of the application, which can be `chk` (Checkout), `orders` (Order Management System), `profileSystemV2` (PII Profile System) or `vid` (VTEX ID). */
                                application?: string;
                                /** @description Status of client data in the given application. The possible values are:
                                 *
                                - `Completed` - Processing completed successfully.
                                 *
                                - `Error` - An unexpected error occurred during the process. You must make a new request.
                                 *
                                - `PendingCheck` - Pending validation. Unable to perform validation on one or more services.
                                 *
                                - `Blocked` - Pending validation. One or more services are unable to fulfill the deletion request. You need to wait and make a new request in the future.
                                 *
                                - `PendingDeletion` - It was not possible to delete data in one or more services. You must make a new request. */
                                status?: string;
                                /** @description In case of error, this field contains an explanatory error message. Otherwise, this field is an empty string. */
                                errorDetail?: string;
                                /** @description Date of the latest update in client data in the given application, in UTC format. */
                                updateAt?: string;
                            }[];
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
        /** @description Name of your VTEX account. */
        an: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
