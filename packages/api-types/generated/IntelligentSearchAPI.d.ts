export interface paths {
    "/top_searches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of the 10 most searched terms
         * @description Lists the 10 most searched terms in the past 14 days.
         *
         *     For more information, check the Intelligent Search [Autocomplete](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4gXFsEWjF7QF7UtI2GAvhL) guide.
         *
         *     This endpoint does not require authentication.
         */
        get: {
            parameters: {
                query?: {
                    /**
                     * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
                     * @example en-US
                     */
                    locale?: components["parameters"]["locale"];
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
                        "application/json": components["schemas"]["TopSearches"];
                    };
                };
                /** @description Server error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/autocomplete_suggestions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of suggested terms and attributes similar to the search term
         * @description Lists the suggested terms and attributes similar to the search term.
         *
         *     For more information, check the Intelligent Search [Autocomplete](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4gXFsEWjF7QF7UtI2GAvhL) guide.
         *
         *     This endpoint does not require authentication.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Search term. It can contain any character. */
                    query?: components["parameters"]["query"];
                    /**
                     * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
                     * @example en-US
                     */
                    locale?: components["parameters"]["locale"];
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
                        "application/json": components["schemas"]["AutocompleteSearchSuggestions"];
                    };
                };
                /** @description Server error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/correction_search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get attempt of correction of a misspelled term
         * @description Tries to correct a misspelled term from the search.
         *
         *     This endpoint does not require authentication.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Search term. It can contain any character. */
                    query?: components["parameters"]["query"];
                    /**
                     * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
                     * @example en-US
                     */
                    locale?: components["parameters"]["locale"];
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
                        "application/json": components["schemas"]["Correction"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/banners/{facets}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of banners registered for query
         * @description Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.
         *
         *     This endpoint does not require authentication.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Search term. It can contain any character. */
                    query?: components["parameters"]["query"];
                    /**
                     * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
                     * @example en-US
                     */
                    locale?: components["parameters"]["locale"];
                };
                header?: never;
                path: {
                    /**
                     * @description ## Format
                     *
                     *     The `facets` parameter follows the format: `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
                     *
                     *     The order in which the terms appear is not relevant to the search.
                     *
                     *     You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`.
                     *
                     *     ## General filters
                     *
                     *     The `facets` parameter also allows the following general filters:
                     *
                     *     | `facetKey` | Description | Example |
                     *     | - | - | - |
                     *     | `price` | Filter the search by a price range, following the format `${minPrice}:${maxPrice}`. | `/color/blue/price/100:500?query=shirt` |
                     *     | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on). | `category-1/clothing/category-2/shirts` |
                     *     | `productClusterIds` | Filter the search by collection, following the format `productClusterIds/{collectionId}`. | `productClusterIds/262` |
                     *     | `trade-policy` |  Filter the search by trade policy (also known as sales channel), following the format `trade-policy/{tradePolicyId}`. | `trade-policy/2`|
                     *
                     * @example category-1/clothing/category-2/shirt/category-3/man
                     */
                    facets: components["parameters"]["facetsPath"];
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
                        "application/json": components["schemas"]["Banners"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search_suggestions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of suggested terms similar to the search term
         * @description Lists suggested terms similar to the search term.
         *
         *     For more information, check the Intelligent Search [Autocomplete](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4gXFsEWjF7QF7UtI2GAvhL) guide.
         *
         *     This endpoint does not require authentication.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Search term. It can contain any character. */
                    query?: components["parameters"]["query"];
                    /**
                     * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
                     * @example en-US
                     */
                    locale?: components["parameters"]["locale"];
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
                        "application/json": components["schemas"]["SearchSuggestions"];
                    };
                };
                /** @description Server error. */
                "5XX": {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/product_search/{facets}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of products for a query
         * @description Lists the active products for a given query.
         *
         *     This endpoint does not require authentication.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Search term. It can contain any character. */
                    query?: components["parameters"]["query"];
                    /** @description Defines the simulation behavior.
                     *
                     *      * `default` - Calls the simulation for every single seller.
                     *      * `skip` - Never calls the simulation.
                     *      * `only1P` - Only calls the simulation for first party sellers. */
                    simulationBehavior?: "default" | "skip" | "only1P";
                    /** @description Number of products per page. */
                    count?: number;
                    /** @description Current search page. */
                    page?: number;
                    /** @description Defines the sort type. The possible values are:
                     *     - `price:desc`: The results will be sorted by price in descending order, from highest to lowest.
                     *     - `price:asc`: The results will be sorted by price in ascending order, from lowest to highest.
                     *     - `orders:desc`: The results will be sorted by the amount of orders in the past 90 days, in descending order.
                     *     - `name:desc`: The results will be sorted by name in descending alphabetical order.
                     *     - `name:asc`: The results will be sorted by name in ascending alphabetical order.
                     *     - `release:desc`: The results will be sorted by release date in descending order, from most recent to least recent.
                     *     - `discount:desc`: The results will be sorted by discount percentage in descending order, from highest to lowest.
                     *
                     *     If `null`, the products will be sorted by relevance. */
                    sort?: "price:desc" | "price:asc" | "orders:desc" | "name:desc" | "name:asc" | "release:desc" | "discount:desc" | null;
                    /**
                     * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
                     * @example en-US
                     */
                    locale?: components["parameters"]["locale"];
                    /** @description Defines whether the result should hide unavailable items (`true`), or not (`false`). */
                    hideUnavailableItems?: components["parameters"]["hideUnavailableItems"];
                };
                header?: never;
                path: {
                    /**
                     * @description ## Format
                     *
                     *     The `facets` parameter follows the format: `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
                     *
                     *     The order in which the terms appear is not relevant to the search.
                     *
                     *     You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`.
                     *
                     *     ## General filters
                     *
                     *     The `facets` parameter also allows the following general filters:
                     *
                     *     | `facetKey` | Description | Example |
                     *     | - | - | - |
                     *     | `price` | Filter the search by a price range, following the format `${minPrice}:${maxPrice}`. | `/color/blue/price/100:500?query=shirt` |
                     *     | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on). | `category-1/clothing/category-2/shirts` |
                     *     | `productClusterIds` | Filter the search by collection, following the format `productClusterIds/{collectionId}`. | `productClusterIds/262` |
                     *     | `trade-policy` |  Filter the search by trade policy (also known as sales channel), following the format `trade-policy/{tradePolicyId}`. | `trade-policy/2`|
                     *
                     * @example category-1/clothing/category-2/shirt/category-3/man
                     */
                    facets: components["parameters"]["facetsPath"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of products for the given query. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ProductSearch"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/facets/{facets}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get list of the possible facets for a given query
         * @description Lists the possible facets for a given query.
         *
         *     This endpoint does not require authentication.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Search term. It can contain any character. */
                    query?: components["parameters"]["query"];
                    /**
                     * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
                     * @example en-US
                     */
                    locale?: components["parameters"]["locale"];
                    /** @description Defines whether the result should hide unavailable items (`true`), or not (`false`). */
                    hideUnavailableItems?: components["parameters"]["hideUnavailableItems"];
                };
                header?: never;
                path: {
                    /**
                     * @description ## Format
                     *
                     *     The `facets` parameter follows the format: `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
                     *
                     *     The order in which the terms appear is not relevant to the search.
                     *
                     *     You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`.
                     *
                     *     ## General filters
                     *
                     *     The `facets` parameter also allows the following general filters:
                     *
                     *     | `facetKey` | Description | Example |
                     *     | - | - | - |
                     *     | `price` | Filter the search by a price range, following the format `${minPrice}:${maxPrice}`. | `/color/blue/price/100:500?query=shirt` |
                     *     | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on). | `category-1/clothing/category-2/shirts` |
                     *     | `productClusterIds` | Filter the search by collection, following the format `productClusterIds/{collectionId}`. | `productClusterIds/262` |
                     *     | `trade-policy` |  Filter the search by trade policy (also known as sales channel), following the format `trade-policy/{tradePolicyId}`. | `trade-policy/2`|
                     *
                     * @example category-1/clothing/category-2/shirt/category-3/man
                     */
                    facets: components["parameters"]["facetsPath"];
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of facets for the given query. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Facets"];
                    };
                };
            };
        };
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
        /** @description Response body object. */
        AutocompleteSearchSuggestions: {
            /** @description List of suggested facets and terms. */
            searches?: {
                /** @description Search term. */
                term?: string;
                /** @description Number of times the term was searched. */
                count?: number;
                /** @description List of facets in which the term can be searched. */
                attributes?: {
                    /** @description Facet key. */
                    key?: string;
                    /** @description Facet value. */
                    value?: string;
                    /** @description Human-readable format of the facet key. */
                    labelKey?: string;
                    /** @description Human-readable format of the facet value. */
                    labelValue?: string;
                }[] | null;
            }[];
        };
        /** @description Response body object. */
        TopSearches: {
            /** @description List of the 10 most searched terms in the past 14 days. */
            searches?: {
                /** @description Search term. */
                term?: string;
                /** @description Number of times the term was searched. */
                count?: number;
            }[];
        };
        /** @description Response body object. */
        Correction: {
            /** @description Object that indicates if the term was misspelled and suggests a possible correction. */
            correction?: {
                /** @description Defines whether the term was misspelled (`true`) or not (`false`). */
                misspelled?: boolean;
                /** @description Defines whether the API was able to suggest a correction (`true`) or not (`false`). */
                correction?: boolean;
                /** @description The corrected term. If the API was not able to correct the term, it will show the original search term. */
                text?: string;
                /** @description The same as `text`, but it highlights the corrected word. Useful when there is more than one word. */
                highlighted?: string;
            };
        };
        /** @description Response body object. */
        Banners: {
            /** @description List of banners. */
            banners?: {
                /** @description Banner ID. */
                id?: string;
                /** @description Banner name. */
                name?: string;
                /** @description Banner area, which can be a number between 1 and 4, to be used in the store's [Banner](https://developers.vtex.com/docs/guides/vtex-search-banner) block. */
                area?: string;
                /** @description Banner HTML, which can be an image or text. */
                html?: string;
            }[];
        };
        /** @description Response body object. */
        SearchSuggestions: {
            /** @description List of suggested terms. */
            searches?: {
                /** @description Search term. */
                term?: string;
                /** @description Number of times the term was searched. */
                count?: number;
            }[];
        };
        /** @description Response body object. */
        ProductSearch: {
            /** @description List of active products. */
            products?: {
                /** @description Cache ID. */
                cacheId?: string;
                /** @description Product unique identifier. */
                productId?: string;
                /** @description Product description. */
                description?: string;
                /** @description Product name. */
                productName?: string;
                /** @description Product reference code. */
                productReference?: string;
                /** @description Product text link. */
                linkText?: string;
                /** @description Brand name. */
                brand?: string;
                /** @description Brand unique identifier. */
                brandId?: number;
                /** @description Product slug in the store. */
                link?: string;
                /** @description Category path. */
                categories?: string[];
                /** @description Category unique identifier. */
                categoryId?: string;
                /** @description List of category IDs in the corresponding category path. */
                categoriesIds?: string[];
                /** @description Price range information. */
                priceRange?: {
                    /** @description Selling price. */
                    sellingPrice?: {
                        /** @description Highest selling price. */
                        highPrice?: number;
                        /** @description Lowest selling price. */
                        lowPrice?: number;
                    };
                    /** @description List price information. */
                    listPrice?: {
                        /** @description Highest list price. */
                        highPrice?: number;
                        /** @description Lowest list price. */
                        lowPrice?: number;
                    };
                };
                /** @description Specification groups information. */
                specificationGroups?: {
                    /** @description Speficiation group original name. */
                    originalName?: string;
                    /** @description Specification group name. */
                    name?: string;
                    /** @description List of specifications. */
                    specifications?: {
                        /** @description Specification original name. */
                        originalName?: string;
                        /** @description Specification name. */
                        name?: string;
                        /** @description Specification values. */
                        values?: string[];
                    }[];
                }[];
                /** @description SKU specifications. */
                skuSpecifications?: {
                    /** @description SKU specification field information. */
                    field?: {
                        /** @description SKU specification field name. */
                        name?: string;
                        /** @description SKU specification field original name. */
                        originalName?: string;
                    };
                    /** @description SKU specification field values. */
                    values?: {
                        /** @description SKU specification value name. */
                        name?: string;
                        /** @description SKU specification value original name. */
                        originalName?: string;
                    }[];
                }[];
                /** @description Product clusters information. */
                productClusters?: {
                    /** @description Product cluster unique identifier. */
                    id?: string;
                    /** @description Product cluster name. */
                    name?: string;
                }[];
                /** @description Cluster highlights information. */
                clusterHighlights?: {
                    /** @description Product cluster unique identifier. */
                    id?: string;
                    /** @description Product cluster name. */
                    name?: string;
                }[];
                /** @description Product properties. */
                properties?: {
                    /** @description Property name. */
                    name?: string;
                    /** @description Property original name. */
                    originalName?: string;
                    /** @description Property values. */
                    values?: string[];
                }[];
                /** @description Information about the related SKUs. */
                items?: {
                    /** @description List of sellers. */
                    sellers?: {
                        /** @description Seller unique identifier. */
                        sellerId?: string;
                        /** @description Seller name. */
                        sellerName?: string;
                        /** @description Add to cart link. */
                        addToCartLink?: string;
                        /** @description Default seller. */
                        sellerDefault?: boolean;
                        /** @description Commercial offer information. */
                        commertialOffer?: {
                            /** @description Delivery SLA samples per region. */
                            DeliverySlaSamplesPerRegion?: {
                                [key: string]: unknown;
                            };
                            /** @description Delivery SLA samples. */
                            DeliverySlaSamples?: {
                                /** @description Delivery SLA per types. */
                                DeliverySlaPerTypes?: unknown[];
                                /** @description Region. */
                                Region?: string | null;
                            }[];
                            /** @description Available quantity of the item. */
                            AvailableQuantity?: number;
                            /** @description Discount highlights. */
                            discountHighlights?: {
                                /** @description Discount highlight name. */
                                name?: string;
                            }[];
                            /** @description Installments information. */
                            Installments?: {
                                /** @description Payment system name. */
                                PaymentSystemName?: string;
                                /** @description Total value. */
                                Value?: number;
                                /** @description Interest rate. */
                                InterestRate?: number;
                                /** @description Total value plus interest rate. */
                                TotalValuePlusInterestRate?: number;
                                /** @description Number of installments. */
                                NumberOfInstallments?: number;
                                /** @description Payment condition name. */
                                Name?: string;
                                /** @description Payment system group. */
                                PaymentSystemGroupName?: string;
                            }[];
                            /** @description Price of the item. */
                            Price?: number;
                            /** @description List price of the item. */
                            ListPrice?: number;
                            /** @description Spot price. */
                            spotPrice?: number;
                            /** @description Tax percentage. */
                            taxPercentage?: number;
                            /** @description Price with discount. */
                            PriceWithoutDiscount?: number;
                            /** @description Tax value. */
                            Tax?: number;
                            /** @description List of SKU gifts IDs. */
                            GiftSkuIds?: string[];
                            /** @description Array of other items that can be bought together with the item in question. */
                            BuyTogether?: string[];
                            /** @description Item metadata attachment. */
                            ItemMetadataAttachment?: {
                                /** @description SKU name. */
                                Name?: string;
                                /** @description Complete name of the product combined with the SKU name. */
                                NameComplete?: string;
                                /** @description Main image URL. */
                                MainImage?: string;
                                /** @description Brand name. */
                                BrandName?: string;
                                /** @description Category unique identifier. */
                                CategoryId?: number;
                                /** @description Product unique identifier. */
                                ProductId?: number;
                                /** @description SKU unique identifier. */
                                id?: string;
                                /** @description Seller unique identifier. */
                                seller?: string;
                                /** @description Assembly options attachment. */
                                assemblyOptions?: {
                                    /** @description Attachment unique identifier. */
                                    id?: string;
                                    /** @description Attachment name. */
                                    name?: string;
                                    /** @description Defines whether the attachment is required (`true`) or not (`false`). */
                                    required?: boolean;
                                    /** @description Input values information. */
                                    inputValues?: {
                                        [key: string]: unknown;
                                    };
                                }[];
                            }[];
                            /** @description Credit that the customer receives when finalizing an order that includes the SKU. By filling this field out with `1`, the customer receives credit on the site in the selected currency, e.g. U$ 1. */
                            RewardValue?: number;
                            /** @description Date until the price is valid, in ISO 8601 format. */
                            PriceValidUntil?: string;
                            /** @description Get info error message. */
                            GetInfoErrorMessage?: string | null;
                            /** @description Cache version used to call Checkout. */
                            CacheVersionUsedToCallCheckout?: string;
                            /** @description Teasers information. */
                            teasers?: {
                                /** @description Promotion name. */
                                name?: string;
                                /** @description Conditions for the promotion the be valid. */
                                conditions?: {
                                    /** @description Minimum quantity of the item for the promotion to be valid. */
                                    minimumQuantity?: number;
                                    /** @description Condition parameters. */
                                    parameters?: {
                                        /** @description Condition name. */
                                        name?: string;
                                        /** @description Condition value. */
                                        value?: string;
                                    }[];
                                };
                                /** @description Promotion effects. */
                                effects?: {
                                    /** @description Effects parameters. */
                                    parameters?: {
                                        /** @description Effect name. */
                                        name?: string;
                                        /** @description Effect value. */
                                        value?: string;
                                    }[];
                                };
                            }[];
                        };
                    }[];
                    /** @description SKU images information. */
                    images?: {
                        /** @description Image unique identifier. */
                        imageId?: string;
                        /** @description Cache ID. */
                        cacheId?: string;
                        /** @description HTML tag for the selected image. */
                        imageTag?: string;
                        /** @description Image label. */
                        imageLabel?: string;
                        /** @description Image text. */
                        imageText?: string;
                        /** @description Image URL. */
                        imageUrl?: string;
                    }[];
                    /** @description SKU unique identifier. */
                    itemId?: string;
                    /** @description SKU name. */
                    name?: string;
                    /** @description Combination of the product name with the SKU name. */
                    nameComplete?: string;
                    /** @description Complement name. */
                    complementName?: string;
                    /** @description SKU alternate IDs. */
                    referenceId?: {
                        /** @description Alternate ID key. */
                        Key?: string;
                        /** @description Alternate ID value. */
                        Value?: string;
                    }[];
                    /** @description Measurement unit. This field should only be used when it is necessary to convert the unit of measure for sale. For example, if a product is sold in boxes, but customers want to buy per square meter (m²). In common cases, use `'un'`. */
                    measurementUnit?: string;
                    /** @description Multiple number of SKU. If the multiplier is 5.0000, the product can be added in multiple quantities of 5, 10, 15, 20, onward. */
                    unitMultiplier?: number;
                    /** @description Variations. */
                    variations?: {
                        /** @description Variation name. */
                        name?: string;
                        /** @description Variation values. */
                        values?: string[];
                    }[];
                    /** @description EAN value. */
                    ean?: string;
                    /** @description Links an unusual type of SKU that needs special transportation, such as meat, glass, or a mattress, to a carrier specialized in delivering it. This field should be filled in with the name of the modal (e.g. "Chemicals" or "Refrigerated products"). To learn more about this feature, read our articles [How the modal works](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125) and [Setting up modal for carriers](https://help.vtex.com/en/tutorial/configure-modal--3jhLqxuPhuiq24UoykCcqy). */
                    modalType?: string;
                    /** @description SKU videos. */
                    videos?: string[];
                    /** @description Array with information about the attachments that are related to the SKU. */
                    attachments?: {
                        /** @description Attachment unique identifier. */
                        id?: string;
                        /** @description Attachment name. */
                        name?: string;
                        /** @description Defines if the attachment is required (`true`) or not (`false`). */
                        required?: boolean;
                        /** @description Attachment domain values. */
                        domainValues?: {
                            /** @description Attachment name. */
                            FieldName?: string;
                            /** @description Attachment value. */
                            DomainValues?: string;
                        }[];
                    }[];
                    /** @description Defines whether the SKU is made up of one or more SKUs (part of a kit) (`true`) or not (`false`). Must be enabled if you are adding a kit. Once activated, this definition cannot be reverted. */
                    isKit?: boolean;
                    [key: string]: unknown;
                }[];
                /** @description Release date. */
                releaseDate?: number;
                /** @description Origin of products in the trade policy. */
                origin?: string;
            }[];
            /** @description Total number of filtered active products. */
            recordsFiltered?: number;
            /** @description Object with information of misspelled terms. */
            correction?: {
                /** @description Defines whether the term is misspelled (`true`) or not (`false`). */
                misspelled?: boolean;
            };
            /** @description Indicates how the search engine corrected the misspelled word by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself. */
            fuzzy?: string;
            /**
             * @description Indicates how the search-engine dealt with the fullText when there is more than one word.
             *      * `and` - It means that the products contains all the words in the query.
             *      * `or` - It means that the results will contain at least one word from the original search query. If `and` was not possible, `or` will be the fallback.
             * @enum {string}
             */
            operator?: "and" | "or";
            /** @description Defines whether the list of products was translated by Intelligent Search (`true`) or not (`false`). */
            translated?: boolean;
            /** @description Pagination information. */
            pagination?: {
                /** @description Page count. */
                count?: number;
                /** @description Information about the current page. */
                current?: {
                    /** @description Page index. */
                    index?: number;
                    /** @description Proxy URL. */
                    proxyUrl?: string;
                };
                /** @description Information about the previous pages. */
                before?: {
                    /** @description Page index. */
                    index?: number;
                    /** @description Proxy URL. */
                    proxyUrl?: string;
                }[];
                /** @description Information about the following pages. */
                after?: {
                    /** @description Page index. */
                    index?: number;
                    /** @description Proxy URL. */
                    proxyUrl?: string;
                }[];
                /** @description Amount of results per page. */
                perPage?: number;
                /** @description Information about the next page. */
                next?: {
                    /** @description Page index. */
                    index?: number;
                    /** @description Proxy URL. */
                    proxyUrl?: string;
                };
                /** @description Information about the previous page. */
                previous?: {
                    /** @description Page index. */
                    index?: number;
                };
                /** @description Information about the first page. */
                first?: {
                    /** @description Page index. */
                    index?: number;
                };
                /** @description Information about the last page. */
                last?: {
                    /** @description Page index. */
                    index?: number;
                };
            };
        };
        /** @description Response body object. */
        Facets: {
            /** @description List of facets. */
            facets?: {
                /** @description Possible values. */
                values?: {
                    /** @description Value ID. */
                    id?: string;
                    /** @description Number of resulting products. */
                    quantity?: number;
                    /** @description Human-readable format of the facet value. */
                    name?: string;
                    /** @description Facet key. */
                    key?: string;
                    /** @description Facet value. */
                    value?: string;
                    /** @description Defines whether the value is selected (`true`) or not (`false`). */
                    selected?: boolean;
                    /** @description Query URL. */
                    href?: string;
                }[];
                /**
                 * @description Facet type
                 *      - `TEXT` - The value is a simple text.
                 *      - `PRICERANGE` - The value contains the property `range` representing the minimum and the maximum price for the query.
                 * @enum {string}
                 */
                type?: "TEXT" | "PRICERANGE";
                /** @description Human-readable format of the facet key. */
                name?: string;
                /** @description Defines whether the client-side should hide the facet (`true`) or not (`false`). */
                hidden?: boolean;
                /** @description Facet key. */
                key?: string;
                /** @description Number of possible values. */
                quantity?: number;
            }[];
            /** @description Indicates whether there was sampling in the aggregation of facets or not. In search results that have many products, only the first 30000 will be aggregated to avoid performance issues. */
            sampling?: boolean;
            /** @description Generated breadcrumb for the given query. */
            breadcrumb?: {
                /** @description Human-readable format of the facet key. */
                name?: string;
                /** @description Query link. */
                href?: string;
            }[];
            /** @description Term and facets used in the query. */
            queryArgs?: {
                /** @description Search term used in the query. */
                query?: string;
                /** @description Facets used in the query. */
                selectedFacets?: {
                    /** @description facet key. */
                    key?: string;
                    /** @description facet value. */
                    value?: string;
                }[];
            };
            /** @description Defines whether the facets were translated by Intelligent Search (`true`) or not (`false`). */
            translated?: boolean;
        };
        /** @description Response body object. */
        Error: {
            /** @description Error message. */
            message: string;
            /** @description Error stack trace. */
            stack: string;
        };
    };
    responses: never;
    parameters: {
        /** @description Search term. It can contain any character. */
        query: string;
        /**
         * @description ## Format
         *
         *     The `facets` parameter follows the format: `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
         *
         *     The order in which the terms appear is not relevant to the search.
         *
         *     You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`.
         *
         *     ## General filters
         *
         *     The `facets` parameter also allows the following general filters:
         *
         *     | `facetKey` | Description | Example |
         *     | - | - | - |
         *     | `price` | Filter the search by a price range, following the format `${minPrice}:${maxPrice}`. | `/color/blue/price/100:500?query=shirt` |
         *     | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on). | `category-1/clothing/category-2/shirts` |
         *     | `productClusterIds` | Filter the search by collection, following the format `productClusterIds/{collectionId}`. | `productClusterIds/262` |
         *     | `trade-policy` |  Filter the search by trade policy (also known as sales channel), following the format `trade-policy/{tradePolicyId}`. | `trade-policy/2`|
         *
         * @example category-1/clothing/category-2/shirt/category-3/man
         */
        facetsPath: string;
        /**
         * @description Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
         * @example en-US
         */
        locale: string | null;
        /** @description Defines whether the result should hide unavailable items (`true`), or not (`false`). */
        hideUnavailableItems: boolean;
        /** @description Indicates how the search engine will correct misspelled words by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself. */
        fuzzy: string;
        /** @description Indicates how the search-engine will deal with the fullText if there is more than one word. Set `and` if the returned products must have all the words in its metadata or `or` otherwise. */
        operator: "and" | "or";
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
