export interface paths {
    "/api/mail-service/pvt/providers/{EmailProvider}/dkim": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate DKIM keys
         * @description Create DKIM keys for sender that was setup in VTEX mail servers
         */
        post: operations["createDKIM"];
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
        "200_OK": {
            /** @enum {string} */
            status: "emailNotFound" | "emailNotVerified" | "created";
            dkimKeys?: unknown[] | null;
            [key: string]: unknown;
        };
        "401_Unauthorized": {
            /** @enum {string} */
            type: "https://tools.ietf.org/html/rfc7235#section-3.1";
            /** @enum {string} */
            title: "Unauthorized";
            /** @enum {integer} */
            status: 401;
            traceId: string;
            [key: string]: unknown;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    createDKIM: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description E-mail address for sender that was setup in VTEX mail servers */
                EmailProvider: string;
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
                    "application/json": components["schemas"]["200_OK"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["401_Unauthorized"];
                };
            };
        };
    };
}
