export interface paths {
    "/api/pricing-hub/prices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Retrieve prices
         * @description This route retrieves and applies prices for the items that are passed in the request. Pricing Hub will select the pricing method that will be used for each item and will fetch their respective price from the selected pricing method.
         *
         *     >ℹ️ This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests).
         */
        post: {
            parameters: {
                query: {
                    /** @description Name of the VTEX account. Used as part of the URL. */
                    an: string;
                };
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Describes the type of the content being sent. */
                    "Content-Type": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    /** @example {
                     *       "items": [
                     *         {
                     *           "index": 0,
                     *           "skuId": "13",
                     *           "quantity": 1,
                     *           "brandId": "2000000",
                     *           "sellerId": "1",
                     *           "priceTableIds": [],
                     *           "categoriesIds": [
                     *             "1"
                     *           ]
                     *         }
                     *       ],
                     *       "UtmSource": "facebook",
                     *       "UtmMedium": "social",
                     *       "UtmCampaign": "summer",
                     *       "UtmInternalCampaign": "sale",
                     *       "salesChannel": "1",
                     *       "email": "customer@email.com"
                     *     } */
                    "application/json": components["schemas"]["GetPricesRequestObject"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["response2"];
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
    "/api/pricing-hub/prices/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Configure external price source
         * @description This route facilitates setting up an external price source in Pricing Hub. It also allows you to activate or deactivate that source in a given account.
         *
         *     >ℹ️ This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests).
         */
        put: operations["ConfigExternalPriceSource"];
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
        GetPricesRequestObject: {
            items: components["schemas"]["items"];
            /**
             * @description Traffic source, which indicates where the traffic originated from according to the `utm_source` value in the URL that led to the order. If there is no value, use `null`.
             * @example facebook
             */
            UtmSource?: string | null;
            /**
             * @description Medium that indicates what type of traffic the customer originated from, represented by the `utm_medium` value in the URL that led to the order. If there is no value, use `null`.
             * @example social
             */
            UtmMedium?: string | null;
            /**
             * @description Campaign name, represented by the `utm_campaign` value in the URL that led to the order. If there is no value, use `null`.
             * @example summer
             */
            UtmCampaign?: string;
            /**
             * @description Internal campaign name, represented by the `utmi_cp` value in the URL that led to the order. If there is no value, use `null`.
             * @example sale
             */
            UtmInternalCampaign?: string | null;
            /**
             * @description Represents Checkout's sales channel.
             * @example 1
             */
            salesChannel: string;
            /**
             * @description Customer's email address. If there is no value, use an empty string.
             * @example customer@email.com
             */
            email: string;
        };
        /** @description List of items to be priced by Pricing Hub. */
        items: {
            /**
             * @description Index of the item at Checkout's cart. It has to be unique in the items array.
             * @example 0
             */
            index: number;
            /**
             * @description ID of the SKU that will be priced.
             * @example 13
             */
            skuId: string;
            /**
             * @description This is the amount of items that will be priced. It is possible to have a volume discount for many repeated items. Hence, the price may not be the quantity of the item multiplied by the unitary price.
             * @example 1
             */
            quantity: number;
            /**
             * @description Brand ID for the item.
             * @example 2000000
             */
            brandId: string;
            /**
             * @description Seller ID for the item.
             * @example 1
             */
            sellerId: string;
            /**
             * @description IDs of the price tables that will be used to compute the price. More than one price table might be passed to the array. The final price rule might be more complex than the lowest or the highest price.
             * @default [
             *       "1"
             *     ]
             */
            priceTableIds: string[];
            /**
             * @description ID of the categories that will be used to compute the price.
             * @default [
             *       "1"
             *     ]
             */
            categoriesIds: string[];
        }[];
        response2: {
            /** @description List of items and their respective prices applied by Pricing Hub. */
            items: components["schemas"]["Item1"][];
        };
        /** @description Each price item. */
        Item1: {
            /** @description The same index referring to Checkout's cart that was passed to the API. */
            index: number;
            /** @description The same skuId that was passed to the API. */
            skuId: string;
            /** @description The price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency. */
            price: number;
            /** @description The cost price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency. */
            costPrice: number;
            /** @description The list price returned by the pricing API that was used by Pricing Hub. It is measured in cents, so 5000 means 50,00 in local currency. */
            listPrice: number;
            /** @description The price table that was used to price the item. */
            priceTable: string;
            /** @description The moment up until the price is valid. After that moment, it will be necessary to call the pricing API again. The format of the string is in RFC3339. */
            priceValidUntil: string;
        };
        ConfigExternalPriceSourceRequest: {
            /**
             * @description Defines if the external price source is active (`true`) or not (`false`). If not set, the default value will be `false`.
             * @example false
             */
            active?: boolean;
            /**
             * @description Name of the app that communicates with the external pricing source.
             * @example apiexamples_app_name
             */
            appName: string;
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
    ConfigExternalPriceSource: {
        parameters: {
            query?: {
                /** @description Name of the VTEX account. */
                an?: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "active": true,
                 *       "appName": "apiexamples_app_name"
                 *     } */
                "application/json": components["schemas"]["ConfigExternalPriceSourceRequest"];
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
}
