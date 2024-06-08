export interface paths {
    "/api/b2b/import/buyer-orgs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload file
         * @description Uploads a file for bulk import of Buyer Organizations, Cost Centers and Members. The uploaded file should be in `XLSX` format and have less than 50MB. For more information on the file structure and how to fill it out, access the [Bulk Import Spreadsheet](https://developers.vtex.com/docs/guides/bulk-import-buyer-organizations-spreadsheet) guide.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | B2B | B2B General | **B2BBulkImport** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["UploadFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/b2b/import/buyer-orgs/{importId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check progress
         * @description Checks the progress of a started file validation or import process. After initiating validation using [Validate file](https://developers.vtex.com/docs/api-reference/buyer-organizations#post-/api/b2b/import/buyer-orgs/validate/-importId-) or import using [Start import](https://developers.vtex.com/docs/api-reference/buyer-organizations#post-/api/b2b/import/buyer-orgs/-importId-), you can track progress by sending a request to this endpoint.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | B2B | B2B General | **B2BBulkImport** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["CheckProgress"];
        put?: never;
        /**
         * Start import
         * @description Once the file is successfully uploaded and validated, you can call this endpoint to start the import. Provide the `importId` returned by the [Validate file](https://developers.vtex.com/docs/api-reference/buyer-organizations#post-/api/b2b/import/buyer-orgs/validate/-importId-) or [Upload file](https://developers.vtex.com/docs/api-reference/buyer-organizations#post-/api/b2b/import/buyer-orgs) endpoints.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | B2B | B2B General | **B2BBulkImport** |
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
                };
                path: {
                    /** @description Unique identifier of the import. */
                    importId: components["parameters"]["importId"];
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
    "/api/b2b/import/buyer-orgs/validate/{importId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Validate file
         * @description Starts the bulk import file content validation. Once the the file is successfully uploaded, you can start the validation using the `importId` returned by the [Upload file](https://developers.vtex.com/docs/api-reference/buyer-organizations#post-/api/b2b/import/buyer-orgs) endpoint.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | B2B | B2B General | **B2BBulkImport** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["ValidateFile"];
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
        /** @description Object containing information about bulk import state. */
        "file-data": {
            /** @description Name of your VTEX account. */
            accountName: string;
            /** @description Unique identifier of the import. */
            importId: string;
            /** @description Current state of the import. The possible values are:
             *     - `Uploaded`: The file was successfully uploaded.
             *     - `InValidation`: File validation is in progress.
             *     - `ReadyToImport`: File validation completed, ready for import.
             *     - `Completed`: File successfully imported.
             *     - `ValidationFailed`: File validation failed.
             *     - `CompletedWithError`: File import failed. */
            importState: string;
            /** @description Completion percentage of the import. */
            percentage: string;
            /** @description Date and time of the last update of the import, in `yyyy-mm-ddTHH:MM:SS+00:00` format. */
            lastUpdateDate: string;
            /** @description Name of the file being imported. */
            fileName: string;
        };
        /** @description Object containing information about bulk import state. */
        importResult: {
            /** @description Name of your VTEX account. */
            accountName: string;
            /** @description Unique identifier of the import. */
            importId: string;
            /** @description Current state of the import. The possible values are:
             *     - `Uploaded`: The file was successfully uploaded.
             *     - `InValidation`: File validation is in progress.
             *     - `ReadyToImport`: File validation completed, ready for import.
             *     - `Completed`: File successfully imported.
             *     - `ValidationFailed`: File validation failed.
             *     - `CompletedWithError`: File import failed. */
            importState: string;
            /** @description Completion percentage of the import. */
            percentage: string;
            /** @description Date and time of the last update of the import, in `yyyy-mm-ddTHH:MM:SS+00:00` format. */
            lastUpdateDate: string;
            /** @description Name of the file being imported. */
            fileName: string;
            /** @description Date and time when the import was completed, in `yyyy-mm-ddTHH:MM:SS+00:00` format. */
            importedAt: string;
            /** @description Email address of the user who performed the import. */
            importedUserEmail: string;
            /** @description Name of the user who performed the import. */
            importedUserName: string;
            /** @description Information about the outcome of the bulk import operation. */
            importResult: {
                /** @description A link to download a detailed report on the outcome of the bulk import. */
                reportDownloadLink?: string;
                /** @description Detailed information about the imported items. */
                imports?: {
                    /** @description Unique identifier associated with the imported item. */
                    name?: string;
                    /** @description Total number of lines successfully imported. */
                    importedRows?: number;
                    /** @description Total number of lines that encountered errors during import. */
                    rowsWithError?: number;
                }[];
            };
        };
        /** @description Object containing information about bulk import state. */
        validationResult: {
            /** @description Name of your VTEX account. */
            accountName: string;
            /** @description Unique identifier of the import. */
            importId: string;
            /** @description Current state of the import. The possible values are:
             *     - `Uploaded`: The file was successfully uploaded.
             *     - `InValidation`: File validation is in progress.
             *     - `ReadyToImport`: File validation completed, ready for import.
             *     - `Completed`: File successfully imported.
             *     - `ValidationFailed`: File validation failed.
             *     - `CompletedWithError`: File import failed. */
            importState: string;
            /** @description Completion percentage of the import. */
            percentage: string;
            /** @description Date and time of the last update of the import, in `yyyy-mm-ddTHH:MM:SS+00:00` format. */
            lastUpdateDate: string;
            /** @description Name of the file being imported. */
            fileName: string;
            /** @description Information about the result of bulk imported data validation. */
            validationResult: {
                /** @description Indicates whether the bulk import operation was successful. */
                isValid?: boolean;
                /** @description Detailed information about the validation results. */
                validationResult?: {
                    /** @description Unique identifier associated with the imported item. */
                    name?: string;
                    /** @description Total number of lines successfully validated. */
                    validRows?: number;
                    /** @description Number of imported lines that failed validation. */
                    invalidRows?: number;
                }[];
            };
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description Type of the content being sent. */
        "Content-Type-Multipart": string;
        /** @description Name of your VTEX account. */
        an: string;
        /** @description Name of your VTEX account. */
        accountName: string;
        /** @description Environment to be used in the request. */
        environment: string;
        /** @description Unique identifier of the import. */
        importId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    UploadFile: {
        parameters: {
            query?: {
                /** @description Name of your VTEX account. */
                an?: components["parameters"]["an"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type-Multipart"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /**
                     * Format: binary
                     * @description File to be uploaded.
                     * @example file.xlsx
                     */
                    file: string;
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
                    "application/json": components["schemas"]["file-data"];
                };
            };
        };
    };
    CheckProgress: {
        parameters: {
            query?: {
                /** @description Name of your VTEX account. */
                an?: components["parameters"]["an"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description Unique identifier of the import. */
                importId: components["parameters"]["importId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Response containing the details of the file validation or import. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["file-data"] | components["schemas"]["importResult"] | components["schemas"]["validationResult"];
                };
            };
        };
    };
    ValidateFile: {
        parameters: {
            query?: {
                /** @description Name of your VTEX account. */
                an?: components["parameters"]["an"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description Unique identifier of the import. */
                importId: components["parameters"]["importId"];
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
}
