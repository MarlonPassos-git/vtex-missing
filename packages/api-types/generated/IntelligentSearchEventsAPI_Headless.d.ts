export interface paths {
    "/event": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Save events
         * @description Creates search events to integrate with VTEX Intelligent Search using a headless implementation.
         *
         *      >⚠️ **This API applies only to Headless scenarios**. It doesn't apply to stores using VTEX's storefront solution, natively integrated with Intelligent Search.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    /** @description Name of the VTEX account. Used as part of the URL. */
                    accountName: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SessionPing"] | components["schemas"]["PageCart"] | components["schemas"]["PageEmptyCart"] | components["schemas"]["PageConfirmation"] | components["schemas"]["Click"] | components["schemas"]["Query"];
                };
            };
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
        UserIdentification: {
            /**
             * anonymous
             * @description Identifier related to related to the user, according to the [nanoid](https://github.com/ai/nanoid) pattern. This information is kept in storage for one year.
             * @example Om1TNluGvgmSgU5OOTvkkd
             */
            anonymous: string;
            /**
             * session
             * @description Identifier related to the current navigation, according to the [nanoid](https://github.com/ai/nanoid) pattern. It is a cookie that lasts for 30 minutes, changing if the user opens another tab in private navigation mode.
             * @example zZlNhqz1vFJP6iPG5Oqtt
             */
            session: string;
        };
        /**
         * SessionPing
         * @description Sends an ACK to the API to renew the session server-side. It should be sent every 1 minute.
         */
        SessionPing: {
            session: components["schemas"]["UserIdentification"]["properties"]["session"];
            anonymous: components["schemas"]["UserIdentification"]["properties"]["anonymous"];
            /**
             * type
             * @description Type of event, which can be one of the following: `page.cart`, `page.empty_cart`, `search.query`, `page.confirmation`, `session.ping`, `search.click`.
             * @example session.ping
             */
            type: string;
            /**
             * agent
             * @description Identifies whether the request came from a mobile or desktop application. It's used as a filter in the search report.
             * @default desktop
             * @example Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0
             */
            agent: string;
        };
        /**
         * PageCart
         * @description Sends an event every time the shopper enters the cart page. Each interaction should include all products inside the shopping cart at that time. In case a product is removed, sent the updated card.
         */
        PageCart: {
            session: components["schemas"]["UserIdentification"]["properties"]["session"];
            anonymous: components["schemas"]["UserIdentification"]["properties"]["anonymous"];
            /**
             * products
             * @description Array of objects containing products. If the event type is `page.cart`, the array contains all the products in the cart, with their ID and quantity.  Each interaction should include all products inside the shopping cart at that time. In case a product is removed, sent the updated card. If there are no products in the cart (page.`empty_cart`), the array is empty. If the event type is `page.confirmation`, the array contains all the products that were purchased, with their ID, price and quantity.
             */
            products: components["schemas"]["CartProduct"][];
            /**
             * type
             * @description Type of event, which can be one of the following: `page.cart`, `page.empty_cart`, `search.query`, `page.confirmation`, `session.ping`, `search.click`.
             * @example page.cart
             */
            type: string;
        };
        /**
         * Empty Cart
         * @description Sends an event if there are no products in the shopping cart at that time.
         */
        PageEmptyCart: {
            session: components["schemas"]["UserIdentification"]["properties"]["session"];
            anonymous: components["schemas"]["UserIdentification"]["properties"]["anonymous"];
            /**
             * products
             * @description Array of objects containing products. If the event type is `page.cart`, the array contains all the products in the cart, with their ID and quantity.  Each interaction should include all products inside the shopping cart at that time. In case a product is removed, sent the updated card. If there are no products in the cart (page.`empty_cart`), the array is empty. If the event type is `page.confirmation`, the array contains all the products that were purchased, with their ID, price and quantity.
             */
            products: components["schemas"]["CartProduct"][];
            /**
             * type
             * @description Type of event, which can be one of the following: `page.cart`, `page.empty_cart`, `search.query`, `page.confirmation`, `session.ping`, `search.click`.
             * @example page.empty_cart
             */
            type: string;
        };
        /**
         * Page Confirmation
         * @description Sends a confirmation informing the products that were bought.
         */
        PageConfirmation: {
            session: components["schemas"]["UserIdentification"]["properties"]["session"];
            anonymous: components["schemas"]["UserIdentification"]["properties"]["anonymous"];
            /**
             * products
             * @description Array of objects containing products. If the event type is `page.cart`, the array contains all the products in the cart, with their ID and quantity.  Each interaction should include all products inside the shopping cart at that time. In case a product is removed, sent the updated card. If there are no products in the cart (page.`empty_cart`), the array is empty. If the event type is `page.confirmation`, the array contains all the products that were purchased, with their ID, price and quantity.
             */
            products: components["schemas"]["OrderProduct"][];
            /**
             * order
             * @description Order ID.
             * @example 123ABC
             */
            order: string;
            /**
             * type
             * @description Type of event, which can be one of the following: `page.cart`, `page.empty_cart`, `search.query`, `page.confirmation`, `session.ping`, `search.click`.
             * @example page.confirmation
             */
            type: string;
        };
        /**
         * Search Click
         * @description Sends an event every time a shopper clicks on a product from a search page.
         */
        Click: {
            /**
             * type
             * @description Type of event, which can be one of the following: `page.cart`, `page.empty_cart`, `search.query`, `page.confirmation`, `session.ping`, `search.click`.
             * @example search.click
             */
            type: string;
            /**
             * @description Unique identifier of the clicked product.
             * @example 12345
             */
            productId: string;
            /**
             * @description Position of the clicked product on the search results page.
             * @example 1
             */
            position: number;
            /**
             * url
             * @description URL that identifies from which page the event occurred.
             * @example https://example.com/s?q=pneu&sort=score_desc&page=0
             */
            url?: string;
            /**
             * text
             * @description Query used in the search.
             * @example tv
             */
            text: string;
            /**
             * agent
             * @description Identifies whether the request came from a mobile or desktop application. It's used as a filter in the search report.
             * @default desktop
             * @example Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0
             */
            agent: string;
            anonymous: components["schemas"]["UserIdentification"]["properties"]["anonymous"];
            session: components["schemas"]["UserIdentification"]["properties"]["session"];
        };
        /**
         * Search Query
         * @description Sends a query event every time the shopper makes a full-text search.
         */
        Query: {
            session: components["schemas"]["UserIdentification"]["properties"]["session"];
            anonymous: components["schemas"]["UserIdentification"]["properties"]["anonymous"];
            /**
             * url
             * @description URL that identifies from which page the event occurred.
             * @example https://example.com/search/?query=zapatilha
             */
            url?: string;
            /**
             * agent
             * @description Identifies whether the request came from a mobile or desktop application. It's used as a filter in the search report.
             * @default desktop
             * @example Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:83.0) Gecko/20100101 Firefox/83.0
             */
            agent: string;
            /**
             * type
             * @description Type of event, which can be one of the following: `page.cart`, `page.empty_cart`, `search.query`, `page.confirmation`, `session.ping`, `search.click`.
             * @example search.query
             */
            type: string;
            /**
             * text
             * @description Query used in the search.
             * @example tv
             */
            text: string;
            /**
             * misspelled
             * @description Indicates whether the query has a typo (`true`) or not (`false`).
             * @example true
             */
            misspelled: boolean;
            /**
             * match
             * @description Amount of products retrieved by the search.
             * @example 396
             */
            match: number;
            /**
             * operator
             * @description Identifies the type of operator used on the search. The possible values are: `and`, `or`. Find more details in [this Elastic Search guide](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html).
             * @example and
             */
            operator: string;
        };
        /** @description Product information. */
        CartProduct: {
            /**
             * @description Unique identifier of the product.
             * @example ABC123
             */
            productId: string;
            /**
             * @description Quantity of the product.
             * @example 2
             */
            quantity: number;
        };
        /** @description Product information. */
        OrderProduct: {
            /**
             * @description Unique identifier of the product.
             * @example ABC123
             */
            productId: string;
            /**
             * @description Price of the product.
             * @example 9.99
             */
            price: number;
            /**
             * @description Quantity of the product.
             * @example 3
             */
            quantity: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
