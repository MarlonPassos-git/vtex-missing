export interface paths {
    "/api/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get session
         * @description Retrieves information from a previously created sesssion.
         *
         *
        >⚠️ The Session Manager API uses the `vtex_session` and `vtex_segment` cookies to store the data required to identify the user and the session. These cookies are stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that by sending these cookies as headers to Session Manager API in order for it to work outside of a browser environment.
         */
        get: operations["GetSession"];
        put?: never;
        /**
         * Create new session
         * @description Creates a new session and returns a session token and a segment token. Also stores `vtex_session` and `vtex_segment` cookies, with the same values returned in the response.
         *
         *
        All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace.
         *
         *
        No authentication is required.
         *
         *
        >⚠️ The Session Manager API uses the `vtex_session` and `vtex_segment` cookies to store the data required to identify the user and the session. These cookies are stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that by sending these cookies as headers in other requests to Session Manager API in order for it to work outside of a browser environment.
         */
        post: operations["Createnewsession"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Edit session
         * @description Edits information from a previously created sesssion.
         *
         *
        This endpoint works the same way as the [Create new session](https://developers.vtex.com/docs/api-reference/session-manager-api#post-/api/sessions) endpoint, but when the request is sent with a `vtex_session` and the `vtex_segment` cookies in the header, it retrieves the session first and then applies the changes instead of generating a new one.
         *
         *
        Only keys inside the `public` namespace in the request body are considered, and query parameters are automatically added to the public namespace.
         *
         *
        >⚠️ The Session Manager API uses the `vtex_session` and `vtex_segment` cookies to store the data required to identify the user and the session. These cookies are stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that by sending these cookies as headers to Session Manager API in order for it to work outside of a browser environment.
         */
        patch: operations["Editsession"];
        trace?: never;
    };
    "/api/segments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get segment
         * @description Retrieves information about the segment, which contains additional data related to the session's context.
         *
         *
        You can add certain public fields as the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.
         *
         *
        If you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the [Edit session](https://developers.vtex.com/docs/api-reference/session-manager-api#patch-/api/sessions) endpoint. ## Permissions
         *
         *     This endpoint does not require [authentication](https://developers.vtex.com/docs/guides/authentication) or [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["GetSegment"];
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
        /**
         * CreateEditSessionRequest
         * @example {
         *       "public": {
         *         "variable2": {
         *           "value": "value2"
         *         },
         *         "variable3": {
         *           "value": "value3"
         *         }
         *       }
         *     }
         */
        CreateEditSessionRequest: {
            /**
             * Public
             * @example {
             *       "variable2": {
             *         "value": "value2"
             *       },
             *       "variable3": {
             *         "value": "value3"
             *       }
             *     }
             */
            public: {
                /** @description Custom property. */
                additionalProperties?: {
                    /** @description Value of the custom property. */
                    value?: string;
                };
            };
        };
        /**
         * @description Object containing session token and segment token.
         * @example {
         *       "sessionToken": "eyJhbGciOiJFUzI1NiIsImtpZCI6IjM5MEI4MTM1RDUzQ0MwMUY0RjA4N0YwMzA2RjhDODMzNzBDMjY4M0UiLCJ0eXAiOiJqd3QifQ.eyJhY2NvdW50LmlkIjoiYThiMjdmYjQtNjUxNi00Y2MwLTgyYjYtYTVmMmIwMTFlNmUyIiwiaWQiOiIyNmQyY2I2Yy0yMTNlLTQ5MzYtOWUyYS0xZDFlMjk5ZWMzM2IiLCJ2ZXJzaW9uIjoyLCJzdWIiOiJzZXNzaW9uIiwiYWNjb3VudCI6InNlc3Npb24iLCJleHAiOjE2OTM1Nzg5NzYsImlhdCI6MTY5Mjg4Nzc3NiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6IjhiYWU2NzdmLWE0NTAtNGI0OC05YTBkLTViMzAwYjNiY2NkOCJ9.Ak1bn2xEA1A5dVN4qR6RI8vnZpSpLXyVxFCthMoVjmWn0HlP5BqMHEMYApDj8TPPhyxT0hGT0vkmvMQa2Mprrw",
         *       "segmentToken": "eyJjYW1wYWlnbnMiOm51bGwsImNoYW5uZWwiOiIxIiwicHJpY2VUYWJsZXMiOm51bGwsInJlZ2lvbklkIjpudWxsLCJ1dG1fY2FtcGFpZ24iOm51bGwsInV0bV9zb3VyY2UiOm51bGwsInV0bWlfY2FtcGFpZ24iOm51bGwsImN1cnJlbmN5Q29kZSI6IkJSTCIsImN1cnJlbmN5U3ltYm9sIjoiUiQiLCJjb3VudHJ5Q29kZSI6IkJSQSIsImN1bHR1cmVJbmZvIjoiZW4tVVMiLCJjaGFubmVsUHJpdmFjeSI6InB1YmxpYyJ9"
         *     }
         */
        CreateEditSessionResponse: {
            /** @description Token that identifies the user's individual session. */
            sessionToken?: string;
            /** @description Token that identifies the user's segment, shared with other users with similar navigation parameters. */
            segmentToken?: string;
        };
        /** @example {
         *       "id": "26d2cb6c-213e-4936-9e2a-1d1e299ec33b",
         *       "namespaces": {
         *         "account": {
         *           "id": {
         *             "value": "a8b27fb4-6516-4cc0-82b6-a5f2b011e6e2",
         *             "keepAlive": true
         *           },
         *           "accountName": {
         *             "value": "apiexamples"
         *           }
         *         },
         *         "store": {
         *           "channel": {
         *             "value": "1"
         *           },
         *           "countryCode": {
         *             "value": "BRA"
         *           },
         *           "cultureInfo": {
         *             "value": "en-US"
         *           },
         *           "currencyCode": {
         *             "value": "BRL"
         *           },
         *           "currencySymbol": {
         *             "value": "R$"
         *           },
         *           "channelPrivacy": {
         *             "value": "public"
         *           }
         *         },
         *         "public": {
         *           "variable1": {
         *             "value": "value1"
         *           },
         *           "variable2": {
         *             "value": "value2"
         *           }
         *         },
         *         "checkout": {
         *           "regionId": {
         *             "value": "v2.1BB18CE648B5111D0933734ED83EC783"
         *           }
         *         }
         *       }
         *     } */
        GetSessionResponse: {
            /** @description Session ID. */
            id?: string;
            /** @description Object with namespaces, each containing a set of information about the session. */
            namespaces?: {
                /** @description Account information related to the session. */
                account?: {
                    /** @description VTEX account ID. */
                    id?: {
                        /** @description Value of the VTEX account ID. */
                        value?: string;
                        /** @description Determines whether or not the connection should be kept alive. */
                        keepAlive?: boolean;
                    };
                    /** @description VTEX account name. */
                    accountName?: {
                        /** @description Value of the VTEX account name. */
                        value?: string;
                    };
                };
                /** @description Store information related to the session. */
                store?: {
                    /** @description [Trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) ID. */
                    channel?: {
                        /** @description Value of the [Trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) ID. */
                        value?: string;
                    };
                    /** @description Country code. */
                    countryCode?: {
                        /** @description Value of the country code. */
                        value?: string;
                    };
                    /** @description Locale that provides culture-specific information, such as the language, sublanguage, country/region, calendar, and conventions associated with a particular culture. Read [this documentation](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo?view=net-7.0#culture-names-and-identifiers) for more details. */
                    cultureInfo?: {
                        /** @description Value of the `cultureInfo` property. */
                        value?: string;
                    };
                    /** @description Currency code. */
                    currencyCode?: {
                        /** @description Value of the currency code. */
                        value?: string;
                    };
                    /** @description Currency symbol. */
                    currencySymbol?: {
                        /** @description Value of the currency symbol. */
                        value?: string;
                    };
                    /** @description Defines whether or not the channel is private. */
                    channelPrivacy?: {
                        /** @description Value containing the channel's privacy option. */
                        value?: string;
                    };
                };
                /** @description Public and editable information related to the session. */
                public?: {
                    [key: string]: {
                        /** @description Value of the custom property. */
                        value?: string;
                    } | undefined;
                };
                /** @description Checkout information related to the session. */
                checkout?: {
                    /** @description ID of the session's region. */
                    regionId?: {
                        /** @description Value of the Region ID. */
                        value?: string;
                    };
                };
            };
        };
        /**
         * @description Object containing information about the segment.
         * @example {
         *       "campaigns": null,
         *       "channel": "1",
         *       "priceTables": null,
         *       "regionId": "v2.1BB18CE648B5111D0933734ED83EC783",
         *       "utm_campaign": null,
         *       "utm_source": null,
         *       "utmi_campaign": null,
         *       "currencyCode": "BRL",
         *       "currencySymbol": "R$",
         *       "countryCode": "BRA",
         *       "cultureInfo": "pt-BR",
         *       "channelPrivacy": "public"
         *     }
         */
        Segment: {
            /** @description Campaigns associated with the session. */
            campaigns?: string;
            /** @description [Trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV) ID. */
            channel?: string;
            /** @description Price tables associated with the session. */
            priceTables?: string;
            /** @description ID of the session's region. */
            regionId?: string;
            /** @description UTM campaign code. */
            utm_campaign?: string;
            /** @description UTM source code. */
            utm_source?: string;
            /** @description UTMI campaign code. */
            utmi_campaign?: string;
            /** @description Currency code. */
            currencyCode?: string;
            /** @description Currency symbol. */
            currencySymbol?: string;
            /** @description Country code. */
            countryCode?: string;
            /** @description Locale that provides culture-specific information, such as the language, sublanguage, country/region, calendar, and conventions associated with a particular culture. Read [this documentation](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo?view=net-7.0#culture-names-and-identifiers) for more details. */
            cultureInfo?: string;
            /** @description Defines whether or not the channel is private. */
            channelPrivacy?: string;
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
    GetSession: {
        parameters: {
            query: {
                /** @description Items are the keys of the values you wish to get. They follow the format `namespace1.key1,namespace2.key2`.
                 *
                 *
                If you wish to recover the data sent on [Create new session](https://developers.vtex.com/docs/api-reference/session-manager-api#post-/api/sessions), it should be `public.{key}`, replacing `{key}` with the name of the custom property you created. Following the example request presented in [Create new session](https://developers.vtex.com/docs/api-reference/session-manager-api#post-/api/sessions), it would be `public.variable1,public.variable2`.
                 *
                 *
                If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) as a value for this query parameter. */
                items: string;
            };
            header?: never;
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
                    "application/json": components["schemas"]["GetSessionResponse"];
                };
            };
        };
    };
    Createnewsession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "public": {
                 *         "variable1": {
                 *           "value": "value1"
                 *         },
                 *         "variable2": {
                 *           "value": "value2"
                 *         }
                 *       }
                 *     } */
                "application/json": components["schemas"]["CreateEditSessionRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateEditSessionResponse"];
                };
            };
        };
    };
    Editsession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "public": {
                 *         "variable2": {
                 *           "value": "value2_patched"
                 *         },
                 *         "variable3": {
                 *           "value": "value3"
                 *         }
                 *       }
                 *     } */
                "application/json": components["schemas"]["CreateEditSessionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateEditSessionResponse"];
                };
            };
        };
    };
    GetSegment: {
        parameters: {
            query?: never;
            header?: never;
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
                    "application/json": components["schemas"]["Segment"];
                };
            };
        };
    };
}
