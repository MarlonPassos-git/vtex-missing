export interface paths {
    "/reviews-and-ratings/api/rating/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product rating
         * @description Retrieves the rating of a product.
         *      ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["GetProductRating"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reviews-and-ratings/api/review/{reviewId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get product review by review ID
         * @description Retrieves information of a product review based on the review's ID.
         *
         *      ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["GetReviewbyReviewId"];
        put?: never;
        post?: never;
        /**
         * Delete review
         * @description Deletes an existing review.
         *
         *      ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        delete: operations["DeleteReview"];
        options?: never;
        head?: never;
        /**
         * Update a review
         * @description Updates the information of a review.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        patch: operations["EditReview"];
        trace?: never;
    };
    "/reviews-and-ratings/api/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of reviews
         * @description Retrieves a list of reviews related to a product.
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["GetalistofReviews"];
        put?: never;
        /**
         * Create multiple reviews
         * @description Creates multiple reviews for more than one product in a single operation.
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         *      For authentication, you must generate and use only the Application Key and the Application Token to work with this endpoint. Refer to the [API authentication using application keys](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) and [Generating internal application keys](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet#generating-internal-application-keys) guide for more information.
         */
        post: operations["SaveMultipleReviews"];
        /**
         * Delete multiple reviews
         * @description Deletes multiple reviews at once.
         *
         *      ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        delete: operations["DeleteMultipleReviews"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reviews-and-ratings/api/review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a review
         * @description Creates a single review.
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         *      For authentication, you must generate and use only your `VtexidClientAutCookie` to work with this endpoint. Refer to the [Generating user tokens](https://developers.vtex.com/docs/guides/api-authentication-using-user-tokens#generating-a-user-token-with-the-vtex-io-cli) guide for more information.
         */
        post: operations["SaveReview"];
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
         * SaveReviewRequest
         * @description Request body.
         */
        SaveReviewRequest: {
            /**
             * @description Product ID.
             * @example 65444
             */
            productId: string;
            /**
             * Format: int32
             * @description Customer rating.
             * @example 5
             */
            rating: number;
            /**
             * @description Review's title.
             * @example Good Product
             */
            title: string;
            /**
             * @description Review's text.
             * @example It is the best product that I have seen
             */
            text: string;
            /**
             * @description Reviewer name.
             * @example Arturo
             */
            reviewerName: string;
            /**
             * @description Indicates if the review was approved (`true`) or not (`false`).
             * @example true
             */
            approved: boolean;
        };
        /**
         * SaveMultipleReviewsRequest
         * @description Request body.
         */
        SaveMultipleReviewsRequest: {
            /**
             * @description Review ID.
             * @example 1
             */
            id?: string;
            /**
             * @description Product ID.
             * @example 65444
             */
            productId: string;
            /**
             * @description Customer rating.
             * @example 4
             */
            rating: number;
            /**
             * @description Review's title.
             * @example Great product
             */
            title: string;
            /**
             * @description Review's text.
             * @example Great product!
             */
            text: string;
            /**
             * @description Reviewer name.
             * @example Arturo
             */
            reviewerName: string;
            /**
             * @description Defines if the review was approved (`true`) or not (`false`).
             * @example true
             */
            approved: boolean;
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
    GetProductRating: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Product ID. */
                productId: string;
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
                        /** @description Average rating of the product. */
                        average?: number;
                        /** @description Total amount of ranting of the product. */
                        totalCount?: number;
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
        };
    };
    GetReviewbyReviewId: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Review ID. */
                reviewId: string;
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
                        /** @description Review ID. */
                        id?: string;
                        /** @description Product ID. */
                        productId?: string;
                        /** @description Customer rating. */
                        rating?: number;
                        /** @description Review's title. */
                        title?: string;
                        /** @description Review's text. */
                        text?: string;
                        /** @description Reviewer name. */
                        reviewerName?: string;
                        /** @description Shopper email. */
                        shopperId?: string;
                        /** @description Review's date and time. */
                        reviewDateTime?: string;
                        /** @description Review's search date. */
                        searchDate?: string;
                        /** @description Indicates if the reviewer is a verified purchaser (`true`) or not (`false`). */
                        verifiedPurchaser?: boolean;
                        /** @description SKU ID. */
                        sku?: string | null;
                        /** @description Indicates if the review was approved (`true`) or not (`false`). */
                        approved?: boolean;
                        /** @description Review's origin location. */
                        location?: string | null;
                        /** @description Review's locale. */
                        locale?: string | null;
                        /** @description Past reviews of the same product. */
                        pastReviews?: string | null;
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
    DeleteReview: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Review ID. */
                reviewId: string;
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
                    "application/json": boolean;
                };
            };
        };
    };
    EditReview: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Review ID. */
                reviewId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Product ID.
                     * @example 1
                     */
                    productId: string;
                    /**
                     * @description Customer rating.
                     * @example 5
                     */
                    rating: number;
                    /**
                     * @description Review's title.
                     * @example Great product
                     */
                    title: string;
                    /**
                     * @description Review's text.
                     * @example Great product.
                     */
                    text: string;
                    /**
                     * @description Reviewer name.
                     * @example Arturo
                     */
                    reviewerName: string;
                    /**
                     * @description Shopper email.
                     * @example user@email.com
                     */
                    shopperId?: string;
                    /**
                     * @description Indicates if the reviewer is a verified purchaser (`true`) or not (`false`).
                     * @example false
                     */
                    verifiedPurchaser?: boolean;
                    /**
                     * @description Review's locale.
                     * @example en-US
                     */
                    locale?: string | null;
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
                        /** @description Review ID. */
                        id?: string;
                        /** @description Product ID. */
                        productId?: string;
                        /** @description Customer rating. */
                        rating?: number;
                        /** @description Review's title. */
                        title?: string;
                        /** @description Review's text. */
                        text?: string;
                        /** @description Reviewer name. */
                        reviewerName?: string;
                        /** @description Shopper email. */
                        shopperId?: string;
                        /** @description Review's date and time. */
                        reviewDateTime?: string;
                        /** @description Review's search date. */
                        searchDate?: string;
                        /** @description Indicates if the reviewer is a verified purchaser (`true`) or not (`false`). */
                        verifiedPurchaser?: boolean;
                        /** @description SKU ID. */
                        sku?: string | null;
                        /** @description Indicates if the review was approved (`true`) or not (`false`). */
                        approved?: boolean;
                        /** @description Review's origin location. */
                        location?: string | null;
                        /** @description Review's locale. */
                        locale?: string | null;
                        /** @description Past reviews of the same product. */
                        pastReviews?: string | null;
                    };
                };
            };
        };
    };
    GetalistofReviews: {
        parameters: {
            query: {
                /** @description Returns Reviews that contain the search term in `productId`, `sku`, `shopperId`, or `reviewerName`. */
                search_term: string;
                /** @description Zero base starting record number, `0` is the default value. */
                from: string;
                /** @description Zero base ending record number, `3` is the default value. */
                to: string;
                /** @description Case-sensitive fieldName to order records (optionally add `:asc` or `:desc`). */
                order_by: string;
                /** @description Status of the review, approved (`true`) or not (`false`). */
                status: boolean;
                /** @description Filter the reviews by product ID. */
                product_id: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
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
                    "application/json": {
                        /** @description Array of reviews. */
                        data?: {
                            /** @description Review ID. */
                            id?: string;
                            /** @description Product ID. */
                            productId?: string;
                            /** @description Customer rating. */
                            rating?: number;
                            /** @description Review's title. */
                            title?: string;
                            /** @description Review's text. */
                            text?: string;
                            /** @description Reviewer name. */
                            reviewerName?: string;
                            /** @description Shopper email. */
                            shopperId?: string;
                            /** @description Review's date and time. */
                            reviewDateTime?: string;
                            /** @description Review's search date. */
                            searchDate?: string;
                            /** @description Indicates if the reviewer is a verified purchaser (`true`) or not (`false`). */
                            verifiedPurchaser?: boolean;
                            /** @description SKU ID. */
                            sku?: string | null;
                            /** @description Indicates if the review was approved (`true`) or not (`false`). */
                            approved?: boolean;
                            /** @description Review's origin location. */
                            location?: string | null;
                            /** @description Review's locale. */
                            locale?: string | null;
                            /** @description Past reviews of the same product. */
                            pastReviews?: string | null;
                        }[];
                        /** @description Range of the reviews list. */
                        range?: {
                            /** @description Total number of reviews on the list. */
                            total?: number;
                            /** @description Zero base starting record number. */
                            from?: number;
                            /** @description Zero base ending record number. */
                            to?: number;
                        };
                    };
                };
            };
        };
    };
    SaveMultipleReviews: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SaveMultipleReviewsRequest"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    DeleteMultipleReviews: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": string[];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    SaveReview: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "productId": "65444",
                 *       "rating": 5,
                 *       "title": "Good Product",
                 *       "text": "It is the best product that I have seen",
                 *       "reviewerName": "Arturo",
                 *       "approved": true
                 *     } */
                "application/json": components["schemas"]["SaveReviewRequest"];
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
                        /** @description Review ID. */
                        id?: string;
                        /** @description Product ID. */
                        productId?: string;
                        /** @description Customer rating. */
                        rating?: number;
                        /** @description Review's title. */
                        title?: string;
                        /** @description Review's text. */
                        text?: string;
                        /** @description Reviewer name. */
                        reviewerName?: string;
                        /** @description Shopper email. */
                        shopperId?: string;
                        /** @description Review's date and time. */
                        reviewDateTime?: string;
                        /** @description Review's search date. */
                        searchDate?: string;
                        /** @description Indicates if the reviewer is a verified purchaser (`true`) or not (`false`). */
                        verifiedPurchaser?: boolean;
                        /** @description SKU ID. */
                        sku?: string | null;
                        /** @description Indicates if the review was approved (`true`) or not (`false`). */
                        approved?: boolean;
                        /** @description Review's origin location. */
                        location?: string | null;
                        /** @description Review's locale. */
                        locale?: string | null;
                        /** @description Past reviews of the same product. */
                        pastReviews?: string | null;
                    };
                };
            };
        };
    };
}
