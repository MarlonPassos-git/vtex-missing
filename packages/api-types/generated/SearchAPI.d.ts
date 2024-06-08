export interface paths {
    "/api/catalog_system/pub/products/crossselling/whosawalsosaw/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Search of Who Saw Also Saw
         * @description Retrieves general information about other related products that the users also saw.
         */
        get: operations["ProductSearchWhoSawAlsoSaw"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/crossselling/whosawalsobought/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Search of Who Saw Also Bought
         * @description Retrieves general information about other related products that the users saw and also bought.
         */
        get: operations["ProductSearchWhoSawAlsoBought"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/crossselling/whoboughtalsobought/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Search of Who Bought Also Bought
         * @description Retrieves general information about other related products that the user also bought.
         */
        get: operations["ProductSearchWhoBoughtAlsoBought"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/crossselling/showtogether/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Search of Show Together
         * @description Retrieves general information about the products that are show together with the product in question.
         */
        get: operations["ProductSearchShowTogether"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/crossselling/accessories/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Search of Accessories
         * @description Retrieves general information about the product's accessories.
         */
        get: operations["ProductSearchAccessories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/crossselling/similars/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Search of Similars
         * @description Retrieves general information about related product searches.
         */
        get: operations["ProductSearchSimilars"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/crossselling/suggestions/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Product Search of Suggestions
         * @description Retrieves general information about other product suggestions related to the product.
         */
        get: operations["ProductSearchSuggestions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/search/{search}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search for Products
         * @description Retrieves general information about the products related to the term searched.
         *     This is the main search used by the store. The user can type anything to be searched.
         *
         *     For example, if they search for a "decanter", this is the URL: `https://{{accountName}}.{{environment}}.com.br/api/catalog_system/pub/products/search/decanter`.
         *
         *     Note that maybe the response can be HTTP 200 or 206, 206 means that it's a partial content response.
         *
         *     If it is a 206 take a look at the Headers, will be an entry called resources. E.g.: resources → 0-9/19. This means that the response is showing items from 0 to 9, 10 items, but there were 19 items found. See more information at the paging route example.
         */
        get: operations["ProductSearch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search for Products with Filter, Order and Pagination
         * @description Retrieves general information about the store's products. This information can be filtered and ordered by a number of options. It also can be paginated, filtered and ordered.
         *
         *     ## Filters
         *
         *     - **Filter by full text** - `ft={searchWord}`
         *     E.g.: `ft=television`
         *
         *     - **Filter by category** - `fq=C:/{a}/{b}`
         *     `{a}` and `{b}` are Category IDs
         *     E.g.: `fq=C:/1000041/1000049/`
         *
         *     - **Filter by brand** - `fq=B:/{a}/{b}`
         *     `{a}` and `{b}` are Brand IDs
         *     E.g.: `fq=B:/189385/189387/`
         *
         *     - **Filter by specification** - `fq=specificationFilter_{a}:{b}`
         *     `{a}` is the specification ID
         *     `{b}` is the specification value
         *     E.g.: To filter products where the color is Blue, find the specification ID for color. Suppose it is 123, then the query will be: `fq=specificationFilter_123:Blue`
         *
         *     - **Filter by price range** - `fq=P:[{a} TO {b}]`
         *     `{a}`  is the minimum price "from"
         *     `{b}` is the highest price "to"
         *     E.g.: `fq=P:[0 TO 20]` will search products between 0.00 and 20.00.
         *
         *     - **Filter by collection** - `fq=productClusterIds:{{productClusterId}}`
         *     `productClusterId` is the same as `collectionId`
         *     For more information about collections, read [Creating a product collection](https://help.vtex.com/en/tutorial/creating-a-product-collection).
         *
         *     - **Filter by product ID** - `fq=productId:{{productId}}`
         *
         *     - **Filter by SKU ID** - `fq=skuId:{{skuId}}`
         *
         *     - **Filter by referenceId** - `fq=alternateIds_RefId:{{referenceId}}`
         *
         *     - **Filter by EAN13** - `fq=alternateIds_Ean:{{ean13}}`
         *
         *     - **Filter by availability at a specific sales channel** - `fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`
         *     `{{sc}}` is the desired sales channel
         *     `{{bool}}` is true ou false, 1 or 0.
         *     E.g.: seaching available products for the sales channel 4 would be `fq=isAvailablePerSalesChannel_4:1`
         *
         *     - **Filter by available at a specific seller** - `fq=sellerId:{{sellerId}}`
         *     The search does not include White Label Sellers.
         *
         *     ## Pagination
         *
         *     - **Initial item number** - `_from={{first}}`
         *     - **Final item number** - `_to={{last}}`
         *
         *     >⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.
         *
         *     ## Sorting
         *
         *     - **Price**
         *     `O=OrderByPriceDESC`
         *     `O=OrderByPriceASC`
         *
         *     - **Top Selling Products**
         *     `O=OrderByTopSaleDESC`
         *
         *     - **Best Reviews**
         *     `O=OrderByReviewRateDESC`
         *
         *     - **Name**
         *     `O=OrderByNameASC`
         *     `O=OrderByNameDESC`
         *
         *     - **Release Date**
         *     `O=OrderByReleaseDateDESC`
         *
         *     - **Best Discounts**
         *     `O=OrderByBestDiscountDESC`
         *
         *     - **Score**
         *     `O=OrderByScoreDESC`
         */
        get: operations["ProductSearchFilteredandOrdered"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/search/{product-text-link}/p": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Product by Product URL
         * @description Retrieves general information about the product of the URL you searched for.
         */
        get: operations["Searchbyproducturl"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/catalog_system/pub/products/offers/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Product offers
         * @description Retrieves existing offers of a specific product.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Describes the type of the content being sent. */
                    "Content-Type": string;
                };
                path: {
                    /** @description Product unique number identifier. */
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
                            /**
                             * @description SKU ID.
                             * @example 5
                             */
                            SkuId: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 272727
                             */
                            EanId: string;
                            /**
                             * @description Unique reference code used internally for organizational purposes.
                             * @example BIGHEROBML
                             */
                            RefId: string;
                            /**
                             * @description SKU name.
                             * @example Llf
                             */
                            Name: string;
                            /**
                             * @description SKU complete name.
                             * @example Cacilds Llf
                             */
                            NameComplete: string;
                            /**
                             * @description If the SKU is active or not.
                             * @example true
                             */
                            IsActive: boolean;
                            /**
                             * @description General information of the main image of the SKU.
                             * @example {
                             *       "ImageId": "172754",
                             *       "ImageLabel": null,
                             *       "ImageTag": "<img src=\"~/arquivos/ids/172754-#width#-#height#/Diablo.jpg\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
                             *       "ImagePath": "~/arquivos/ids/172754-#width#-#height#/Diablo.jpg",
                             *       "IsMain": true,
                             *       "IsZoomSize": false,
                             *       "ImageText": null,
                             *       "LastModified": "2021-03-24T15:37:24.877"
                             *     }
                             */
                            MainImage: {
                                /**
                                 * @description Unique identifier of the association of the Image to the SKU.
                                 * @example 172754
                                 */
                                ImageId: string;
                                /**
                                 * @description Image Label.
                                 * @example
                                 */
                                ImageLabel: string | null;
                                /**
                                 * @description Image HTML tag.
                                 * @example <img src="~/arquivos/ids/172754-#width#-#height#/Diablo.jpg" width="#width#" height="#height#" alt="" id="" />
                                 */
                                ImageTag: string;
                                /**
                                 * @description Image file path.
                                 * @example ~/arquivos/ids/172754-#width#-#height#/Diablo.jpg
                                 */
                                ImagePath: string;
                                /**
                                 * @description If the image is the main image of the SKU or not.
                                 * @example true
                                 */
                                IsMain: boolean;
                                /**
                                 * @description If the image has zoom applied.
                                 * @example false
                                 */
                                IsZoomSize: boolean;
                                /**
                                 * @description General text of the image.
                                 * @example
                                 */
                                ImageText: string | null;
                                /**
                                 * @description Time that the image was last modified.
                                 * @example 2021-03-24T15:37:24.877
                                 */
                                LastModified: string;
                            };
                            /**
                             * @description AKA Commertial Condition.
                             * @example [
                             *       {
                             *         "SellerId": "1",
                             *         "SellerSkuId": "5",
                             *         "OffersPerSalesChannel": [
                             *           {
                             *             "AvailableQuantity": 0,
                             *             "SaleChannel": 1,
                             *             "Price": 200,
                             *             "ListPrice": 200,
                             *             "PriceWithoutDiscount": 200,
                             *             "IsAvailable": false
                             *           },
                             *           {
                             *             "AvailableQuantity": 0,
                             *             "SaleChannel": 2,
                             *             "Price": 200,
                             *             "ListPrice": 200,
                             *             "PriceWithoutDiscount": 200,
                             *             "IsAvailable": false
                             *           }
                             *         ],
                             *         "AvailableSalesChannels": null
                             *       }
                             *     ]
                             */
                            Offers: {
                                /**
                                 * @description Seller ID.
                                 * @example 1
                                 */
                                SellerId: string;
                                /**
                                 * @description ID of the association of the SKU with the seller.
                                 * @example 5
                                 */
                                SellerSkuId: string;
                                /**
                                 * @description Offers per trade policy.
                                 * @example [
                                 *       {
                                 *         "AvailableQuantity": 0,
                                 *         "SaleChannel": 1,
                                 *         "Price": 200,
                                 *         "ListPrice": 200,
                                 *         "PriceWithoutDiscount": 200,
                                 *         "IsAvailable": false
                                 *       },
                                 *       {
                                 *         "AvailableQuantity": 0,
                                 *         "SaleChannel": 2,
                                 *         "Price": 200,
                                 *         "ListPrice": 200,
                                 *         "PriceWithoutDiscount": 200,
                                 *         "IsAvailable": false
                                 *       }
                                 *     ]
                                 */
                                OffersPerSalesChannel: {
                                    /**
                                     * @description SKU available quantity.
                                     * @example 50
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description SKU trade policy.
                                     * @example 1
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description SKU price.
                                     * @example 200
                                     */
                                    Price: number;
                                    /**
                                     * @description SKU list price.
                                     * @example 200
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description SKU precie without discount.
                                     * @example 200
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description If the SKU is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                }[];
                                /**
                                 * @description Trade policy that the SKU in contained.
                                 * @example
                                 */
                                AvailableSalesChannels: string | null;
                            }[];
                            /**
                             * @description Time that the offer was last modified.
                             * @example 2021-07-06T19:13:45.831483
                             */
                            LastModified: string;
                            /**
                             * @description Product ID.
                             * @example 3
                             */
                            ProductId: string;
                        }[];
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
    "/api/catalog_system/pub/products/offers/{productId}/sku/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search SKU offers
         * @description Retrieves existing offers of a specific SKU.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Describes the type of the content being sent. */
                    "Content-Type": string;
                };
                path: {
                    /** @description Product unique number identifier. */
                    productId: string;
                    /** @description Product unique number identifier. */
                    skuId: string;
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
                            /**
                             * @description SKU ID.
                             * @example 5
                             */
                            SkuId: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 272727
                             */
                            EanId: string;
                            /**
                             * @description Unique reference code used internally for organizational purposes.
                             * @example BIGHEROBML
                             */
                            RefId: string;
                            /**
                             * @description SKU name.
                             * @example Llf
                             */
                            Name: string;
                            /**
                             * @description SKU complete name.
                             * @example Cacilds Llf
                             */
                            NameComplete: string;
                            /**
                             * @description If the SKU is active or not.
                             * @example true
                             */
                            IsActive: boolean;
                            /**
                             * @description General information of the main image of the SKU.
                             * @example {
                             *       "ImageId": "172754",
                             *       "ImageLabel": null,
                             *       "ImageTag": "<img src=\"~/arquivos/ids/172754-#width#-#height#/Diablo.jpg\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
                             *       "ImagePath": "~/arquivos/ids/172754-#width#-#height#/Diablo.jpg",
                             *       "IsMain": true,
                             *       "IsZoomSize": false,
                             *       "ImageText": null,
                             *       "LastModified": "2021-03-24T15:37:24.877"
                             *     }
                             */
                            MainImage: {
                                /**
                                 * @description Unique identifier of the association of the Image to the SKU.
                                 * @example 172754
                                 */
                                ImageId: string;
                                /**
                                 * @description Image Label.
                                 * @example
                                 */
                                ImageLabel: string | null;
                                /**
                                 * @description Image HTML tag.
                                 * @example <img src="~/arquivos/ids/172754-#width#-#height#/Diablo.jpg" width="#width#" height="#height#" alt="" id="" />
                                 */
                                ImageTag: string;
                                /**
                                 * @description Image file path.
                                 * @example ~/arquivos/ids/172754-#width#-#height#/Diablo.jpg
                                 */
                                ImagePath: string;
                                /**
                                 * @description If the image is the main image of the SKU or not.
                                 * @example true
                                 */
                                IsMain: boolean;
                                /**
                                 * @description If the image has zoom applied.
                                 * @example false
                                 */
                                IsZoomSize: boolean;
                                /**
                                 * @description General text of the image.
                                 * @example
                                 */
                                ImageText: string | null;
                                /**
                                 * @description Time that the image was last modified.
                                 * @example 2021-03-24T15:37:24.877
                                 */
                                LastModified: string;
                            };
                            /**
                             * @description AKA Commertial Condition.
                             * @example [
                             *       {
                             *         "SellerId": "1",
                             *         "SellerSkuId": "5",
                             *         "OffersPerSalesChannel": [
                             *           {
                             *             "AvailableQuantity": 0,
                             *             "SaleChannel": 1,
                             *             "Price": 200,
                             *             "ListPrice": 200,
                             *             "PriceWithoutDiscount": 200,
                             *             "IsAvailable": false
                             *           },
                             *           {
                             *             "AvailableQuantity": 0,
                             *             "SaleChannel": 2,
                             *             "Price": 200,
                             *             "ListPrice": 200,
                             *             "PriceWithoutDiscount": 200,
                             *             "IsAvailable": false
                             *           }
                             *         ],
                             *         "AvailableSalesChannels": null
                             *       }
                             *     ]
                             */
                            Offers: {
                                /**
                                 * @description Seller ID.
                                 * @example 1
                                 */
                                SellerId: string;
                                /**
                                 * @description ID of the association of the SKU with the seller.
                                 * @example 5
                                 */
                                SellerSkuId: string;
                                /**
                                 * @description Offers per trade policy.
                                 * @example [
                                 *       {
                                 *         "AvailableQuantity": 0,
                                 *         "SaleChannel": 1,
                                 *         "Price": 200,
                                 *         "ListPrice": 200,
                                 *         "PriceWithoutDiscount": 200,
                                 *         "IsAvailable": false
                                 *       },
                                 *       {
                                 *         "AvailableQuantity": 0,
                                 *         "SaleChannel": 2,
                                 *         "Price": 200,
                                 *         "ListPrice": 200,
                                 *         "PriceWithoutDiscount": 200,
                                 *         "IsAvailable": false
                                 *       }
                                 *     ]
                                 */
                                OffersPerSalesChannel: {
                                    /**
                                     * @description SKU available quantity.
                                     * @example 50
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description SKU trade policy.
                                     * @example 1
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description SKU price.
                                     * @example 200
                                     */
                                    Price: number;
                                    /**
                                     * @description SKU list price.
                                     * @example 200
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description SKU precie without discount.
                                     * @example 200
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description If the SKU is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                }[];
                                /**
                                 * @description Trade policy that the SKU in contained.
                                 * @example
                                 */
                                AvailableSalesChannels: string | null;
                            }[];
                            /**
                             * @description Time that the offer was last modified.
                             * @example 2021-07-06T19:13:45.831483
                             */
                            LastModified: string;
                            /**
                             * @description Product ID.
                             * @example 3
                             */
                            ProductId: string;
                        }[];
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
    "/api/catalog_system/pub/facets/category/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Category Facets
         * @description Retrieves the names and IDs of the categories facets.
         *     >⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.
         *
         *     ## Response body example:
         *
         *     ```json
         *     [
         *     	[
         *         {
         *           "Name":"Tamanho Global",
         *           "Id":45
         *     		},
         *     		{
         *           "Name":"Percentuals",
         *           "Id":25
         *     		}
         *     	]
         *     ]
         *     ```
         */
        get: {
            parameters: {
                query?: {
                    /** @description Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page. */
                    _from?: string;
                    /** @description Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page. */
                    _to?: string;
                };
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Describes the type of the content being sent. */
                    "Content-Type": string;
                };
                path: {
                    /** @description Category unique number identifier. */
                    categoryId: string;
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
                            /**
                             * @description Category's facet name.
                             * @example Tamanho Global
                             */
                            Name: string;
                            /**
                             * @description Category's facet ID.
                             * @example 45
                             */
                            Id: number;
                        }[];
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
    "/api/catalog_system/pub/facets/search/{term}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search by Store Facets
         * @description Retrieves products by store facets. The result order is descending, from the highest product ID to the lowest.
         */
        get: operations["Facetscategory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/buscaautocomplete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Product Search Autocomplete
         * @description Retrieves product's information related to the searched string.
         *     `{{searchString}} is the part of string the user is looking for.
         *     E.g.: `ref` | `refrig` | `refrigerator`
         */
        get: operations["AutoComplete"];
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
        Example: {
            productId: string;
            productName: string;
            brand: string;
            linkText: string;
            productReference: string;
            categories: string[];
            link: string;
            description: string | null;
            items: components["schemas"]["Item"][];
        };
        Item: {
            itemId: string;
            name: string;
            nameComplete: string;
            complementName: string;
            ean: string;
            referenceId?: components["schemas"]["ReferenceId"][];
            measurementUnit: string;
            unitMultiplier: number;
            images: components["schemas"]["Image"][];
            sellers: components["schemas"]["Seller"][];
            COR?: string[];
            TAMANHO?: string[];
            variations?: string[];
        };
        /** @example {
         *       "Key": "RefId",
         *       "Value": "969697"
         *     } */
        ReferenceId: {
            Key: string;
            Value: string;
        };
        /** @example {
         *       "imageId": "168969",
         *       "imageLabel": "",
         *       "imageTag": "<img src=\"~/arquivos/ids/168969-#width#-#height#/geladeira.jpg\" width=\"#width#\" height=\"#height#\" alt=\"geladeira\" id=\"\" />",
         *       "imageUrl": "http://ambienteqa.vteximg.com.br/arquivos/ids/168969/geladeira.jpg",
         *       "imageText": "geladeira"
         *     } */
        Image: {
            imageId: string;
            imageLabel: string;
            imageTag: string;
            imageUrl: string;
            imageText: string | null;
        };
        Seller: {
            sellerId: string;
            sellerName: string;
            addToCartLink: string;
            sellerDefault: boolean;
            commertialOffer: components["schemas"]["CommertialOffer"];
        };
        CommertialOffer: {
            DeliverySlaSamplesPerRegion: {
                [key: string]: components["schemas"]["generatedObject"] | undefined;
            };
            Installments: components["schemas"]["Installment"][];
            DiscountHighLight: string[];
            GiftSkuIds: string[];
            /**
             * @description List with promotions teasers.
             * @example [
             *       {
             *         "<Name>k__BackingField": "TesteInfoAdicional",
             *         "<GeneralValues>k__BackingField": {
             *           "Time": "Flamengo",
             *           "Nome": "Pedro",
             *           "Camisa": "9"
             *         },
             *         "<Conditions>k__BackingField": {
             *           "<MinimumQuantity>k__BackingField": 0,
             *           "<Parameters>k__BackingField": [
             *             {
             *               "<Name>k__BackingField": "PaymentMethodId",
             *               "<Value>k__BackingField": "4"
             *             }
             *           ]
             *         },
             *         "<Effects>k__BackingField": {
             *           "<Parameters>k__BackingField": [
             *             {
             *               "<Name>k__BackingField": "PercentualDiscount",
             *               "<Value>k__BackingField": "1"
             *             }
             *           ]
             *         }
             *       }
             *     ]
             */
            Teasers: {
                /** @description Name. */
                "<Name>k__BackingField"?: string;
                /** @description General values. Each property follows the format: `{field}:{value}. */
                "<GeneralValues>k__BackingField"?: {
                    /** @example {value} */
                    "{field}"?: string;
                };
                /** @description Conditions. */
                "<Conditions>k__BackingField"?: {
                    /** @description Minimum quantity. */
                    "<MinimumQuantity>k__BackingField"?: number;
                    /** @description Parameters. */
                    "<Parameters>k__BackingField"?: {
                        /** @description Name. */
                        "<Name>k__BackingField"?: string;
                        /** @description Value. */
                        "<Value>k__BackingField"?: string;
                    }[];
                };
                /** @description Effects. */
                "<Effects>k__BackingField"?: {
                    /** @description Parameters. */
                    "<Parameters>k__BackingField"?: {
                        /** @description Name. */
                        "<Name>k__BackingField"?: string;
                        /** @description Value. */
                        "<Value>k__BackingField"?: string;
                    }[];
                };
            }[];
            /**
             * @description List with promotions teasers.
             * @example [
             *       {
             *         "Name": "TesteInfoAdicional",
             *         "GeneralValues": {
             *           "Time": "Flamengo",
             *           "Nome": "Pedro",
             *           "Camisa": "9"
             *         },
             *         "Conditions": {
             *           "MinimumQuantity": 0,
             *           "Parameters": [
             *             {
             *               "Name": "PaymentMethodId",
             *               "Value": "4"
             *             }
             *           ]
             *         },
             *         "Effects": {
             *           "Parameters": [
             *             {
             *               "Name": "PercentualDiscount",
             *               "Value": "1"
             *             }
             *           ]
             *         }
             *       }
             *     ]
             */
            PromotionTeasers?: {
                /** @description Name. */
                Name?: string;
                /** @description General values. Each property follows the format: `{field}:{value}. */
                GeneralValues?: {
                    /** @example {value} */
                    "{field}"?: string;
                };
                /** @description Conditions. */
                Conditions?: {
                    /** @description Minimum quantity. */
                    MinimumQuantity?: number;
                    /** @description Parameters. */
                    Parameters?: {
                        /** @description Name. */
                        Name?: string;
                        /** @description Value. */
                        Value?: string;
                    }[];
                };
                /** @description Effects. */
                Effects?: {
                    /** @description Parameters. */
                    Parameters?: {
                        /** @description Name. */
                        Name?: string;
                        /** @description Value. */
                        Value?: string;
                    }[];
                };
            }[];
            BuyTogether: string[];
            Price: number;
            ListPrice: number;
            PriceValidUntil: string;
            /** Format: int32 */
            AvailableQuantity: number;
            Tax: number;
            DeliverySlaSamples: components["schemas"]["DeliverySlaSample"][];
            GetInfoErrorMessage: string | null;
            CacheVersionUsedToCallCheckout: string;
        };
        /** @example {
         *       "DeliverySlaPerTypes": [
         *         {
         *           "TypeName": "Econômica",
         *           "Price": 4.11,
         *           "EstimatedTimeSpanToDelivery": "00:00:00"
         *         },
         *         {
         *           "TypeName": "n2_2",
         *           "Price": 6.5,
         *           "EstimatedTimeSpanToDelivery": "00:00:00"
         *         },
         *         {
         *           "TypeName": "Normal",
         *           "Price": 6.5,
         *           "EstimatedTimeSpanToDelivery": "00:00:00"
         *         },
         *         {
         *           "TypeName": "P_T",
         *           "Price": 156.5,
         *           "EstimatedTimeSpanToDelivery": "00:00:00"
         *         }
         *       ],
         *       "Region": {
         *         "IsPersisted": true,
         *         "IsRemoved": false,
         *         "Id": 1,
         *         "Name": "Rio",
         *         "CountryCode": "BRA",
         *         "ZipCode": "22011050",
         *         "CultureInfoName": "pt-BR"
         *       }
         *     } */
        generatedObject: {
            DeliverySlaPerTypes: components["schemas"]["DeliverySlaPerType"][];
            Region: components["schemas"]["Region"];
        };
        /** @example {
         *       "TypeName": "Econômica",
         *       "Price": 4.11,
         *       "EstimatedTimeSpanToDelivery": "00:00:00"
         *     } */
        DeliverySlaPerType: {
            TypeName: string;
            Price: number;
            EstimatedTimeSpanToDelivery: string;
        };
        /** @example {
         *       "IsPersisted": true,
         *       "IsRemoved": false,
         *       "Id": 1,
         *       "Name": "Rio",
         *       "CountryCode": "BRA",
         *       "ZipCode": "22011050",
         *       "CultureInfoName": "pt-BR"
         *     } */
        Region: {
            IsPersisted: boolean;
            IsRemoved: boolean;
            /** Format: int32 */
            Id: number;
            Name: string;
            CountryCode: string;
            ZipCode: string;
            CultureInfoName: string;
        } | null;
        /** @example {
         *       "Value": 1000,
         *       "InterestRate": 0,
         *       "TotalValuePlusInterestRate": 1000,
         *       "NumberOfInstallments": 1,
         *       "PaymentSystemName": "American Express",
         *       "PaymentSystemGroupName": "creditCardPaymentGroup",
         *       "Name": "American Express à vista"
         *     } */
        Installment: {
            Value: number;
            InterestRate: number;
            TotalValuePlusInterestRate: number;
            /** Format: int32 */
            NumberOfInstallments: number;
            PaymentSystemName: string;
            PaymentSystemGroupName: string;
            Name: string;
        };
        /** @example {
         *       "DeliverySlaPerTypes": [],
         *       "Region": null
         *     } */
        DeliverySlaSample: {
            DeliverySlaPerTypes: components["schemas"]["DeliverySlaPerType2"][];
            Region: components["schemas"]["Region2"];
        };
        DeliverySlaPerType2: {
            TypeName?: string;
            Price?: number;
            EstimatedTimeSpanToDelivery?: string;
        };
        Region2: {
            IsPersisted?: boolean;
            IsRemoved?: boolean;
            /** Format: int32 */
            Id?: number;
            Name?: string;
            CountryCode?: string;
            ZipCode?: string;
            CultureInfoName?: string;
        } | null;
        /** @example {
         *       "Departments": [
         *         {
         *           "Quantity": 20,
         *           "Name": "Eletro-Eletronicos",
         *           "Link": "/Eletro-Eletronicos"
         *         }
         *       ],
         *       "Brands": [
         *         {
         *           "Quantity": 1,
         *           "Name": "Philips",
         *           "Link": "/eletronicos/tv/Philips"
         *         },
         *         {
         *           "Quantity": 5,
         *           "Name": "Samsung",
         *           "Link": "/eletronicos/tv/Samsung"
         *         },
         *         {
         *           "Quantity": 6,
         *           "Name": "Philco",
         *           "Link": "/eletronicos/tv/Philco"
         *         },
         *         {
         *           "Quantity": 2,
         *           "Name": "AOC",
         *           "Link": "/eletronicos/tv/AOC"
         *         },
         *         {
         *           "Quantity": 1,
         *           "Name": "Semp",
         *           "Link": "/eletronicos/tv/Semp"
         *         },
         *         {
         *           "Quantity": 2,
         *           "Name": "Toshiba",
         *           "Link": "/eletronicos/tv/Toshiba"
         *         },
         *         {
         *           "Quantity": 3,
         *           "Name": "TCL",
         *           "Link": "/eletronicos/tv/TCL"
         *         }
         *       ],
         *       "SpecificationFilters": {
         *         "Resolução": [
         *           {
         *             "Quantity": 10,
         *             "Name": "Full-HD",
         *             "Link": "/eletronicos/tv/Full-HD?map=c,c,specificationFilter_73"
         *           },
         *           {
         *             "Quantity": 7,
         *             "Name": "HD-Ready",
         *             "Link": "/eletronicos/tv/HD-Ready?map=c,c,specificationFilter_73"
         *           },
         *           {
         *             "Quantity": 2,
         *             "Name": "Ultra-HD",
         *             "Link": "/eletronicos/tv/Ultra-HD?map=c,c,specificationFilter_73"
         *           }
         *         ],
         *         "Tamanho da Tela": [
         *           {
         *             "Quantity": 3,
         *             "Name": "Acima de 51 pol.",
         *             "Link": "/eletronicos/tv/Acima de 51 pol.?map=c,c,specificationFilter_74"
         *           },
         *           {
         *             "Quantity": 1,
         *             "Name": "Até 19 pol.",
         *             "Link": "/eletronicos/tv/Até 19 pol.?map=c,c,specificationFilter_74"
         *           },
         *           {
         *             "Quantity": 2,
         *             "Name": "De 20 a 29 pol.",
         *             "Link": "/eletronicos/tv/De 20 a 29 pol.?map=c,c,specificationFilter_74"
         *           },
         *           {
         *             "Quantity": 5,
         *             "Name": "De 30 a 39 pol.",
         *             "Link": "/eletronicos/tv/De 30 a 39 pol.?map=c,c,specificationFilter_74"
         *           },
         *           {
         *             "Quantity": 8,
         *             "Name": "De 40 a 51 pol.",
         *             "Link": "/eletronicos/tv/De 40 a 51 pol.?map=c,c,specificationFilter_74"
         *           }
         *         ],
         *         "Aplicativos de TV": [
         *           {
         *             "Quantity": 4,
         *             "Name": "Crackle",
         *             "Link": "/eletronicos/tv/Crackle?map=c,c,specificationFilter_1517"
         *           },
         *           {
         *             "Quantity": 12,
         *             "Name": "NetFlix",
         *             "Link": "/eletronicos/tv/NetFlix?map=c,c,specificationFilter_1517"
         *           },
         *           {
         *             "Quantity": 4,
         *             "Name": "NetMovies",
         *             "Link": "/eletronicos/tv/NetMovies?map=c,c,specificationFilter_1517"
         *           },
         *           {
         *             "Quantity": 4,
         *             "Name": "Vimeo",
         *             "Link": "/eletronicos/tv/Vimeo?map=c,c,specificationFilter_1517"
         *           },
         *           {
         *             "Quantity": 13,
         *             "Name": "YouTube",
         *             "Link": "/eletronicos/tv/YouTube?map=c,c,specificationFilter_1517"
         *           }
         *         ]
         *       },
         *       "CategoriesTrees": [
         *         {
         *           "Quantity": 20,
         *           "Name": "Eletrônicos",
         *           "Link": "/Eletronicos",
         *           "Children": [
         *             {
         *               "Quantity": 20,
         *               "Name": "TV",
         *               "Link": "/Eletronicos/TV",
         *               "Children": [
         *                 {
         *                   "Quantity": 6,
         *                   "Name": "TV LED",
         *                   "Link": "/Eletronicos/TV/TV-LED",
         *                   "Children": []
         *                 },
         *                 {
         *                   "Quantity": 14,
         *                   "Name": "Smart TV",
         *                   "Link": "/Eletronicos/TV/Smart-TV",
         *                   "Children": []
         *                 }
         *               ]
         *             }
         *           ]
         *         }
         *       ]
         *     } */
        Example2: {
            Departments: components["schemas"]["Department"][];
            Brands: components["schemas"]["Brand"][];
            SpecificationFilters: components["schemas"]["SpecificationFilters"];
            CategoriesTrees: components["schemas"]["CategoriesTree"][];
        };
        /** @example {
         *       "Quantity": 20,
         *       "Name": "Eletro-Eletronicos",
         *       "Link": "/Eletro-Eletronicos"
         *     } */
        Department: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
        };
        /** @example {
         *       "Quantity": 1,
         *       "Name": "Philips",
         *       "Link": "/eletronicos/tv/Philips"
         *     } */
        Brand: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
        };
        /** @example {
         *       "Resolução": [
         *         {
         *           "Quantity": 10,
         *           "Name": "Full-HD",
         *           "Link": "/eletronicos/tv/Full-HD?map=c,c,specificationFilter_73"
         *         },
         *         {
         *           "Quantity": 7,
         *           "Name": "HD-Ready",
         *           "Link": "/eletronicos/tv/HD-Ready?map=c,c,specificationFilter_73"
         *         },
         *         {
         *           "Quantity": 2,
         *           "Name": "Ultra-HD",
         *           "Link": "/eletronicos/tv/Ultra-HD?map=c,c,specificationFilter_73"
         *         }
         *       ],
         *       "Tamanho da Tela": [
         *         {
         *           "Quantity": 3,
         *           "Name": "Acima de 51 pol.",
         *           "Link": "/eletronicos/tv/Acima de 51 pol.?map=c,c,specificationFilter_74"
         *         },
         *         {
         *           "Quantity": 1,
         *           "Name": "Até 19 pol.",
         *           "Link": "/eletronicos/tv/Até 19 pol.?map=c,c,specificationFilter_74"
         *         },
         *         {
         *           "Quantity": 2,
         *           "Name": "De 20 a 29 pol.",
         *           "Link": "/eletronicos/tv/De 20 a 29 pol.?map=c,c,specificationFilter_74"
         *         },
         *         {
         *           "Quantity": 5,
         *           "Name": "De 30 a 39 pol.",
         *           "Link": "/eletronicos/tv/De 30 a 39 pol.?map=c,c,specificationFilter_74"
         *         },
         *         {
         *           "Quantity": 8,
         *           "Name": "De 40 a 51 pol.",
         *           "Link": "/eletronicos/tv/De 40 a 51 pol.?map=c,c,specificationFilter_74"
         *         }
         *       ],
         *       "Aplicativos de TV": [
         *         {
         *           "Quantity": 4,
         *           "Name": "Crackle",
         *           "Link": "/eletronicos/tv/Crackle?map=c,c,specificationFilter_1517"
         *         },
         *         {
         *           "Quantity": 12,
         *           "Name": "NetFlix",
         *           "Link": "/eletronicos/tv/NetFlix?map=c,c,specificationFilter_1517"
         *         },
         *         {
         *           "Quantity": 4,
         *           "Name": "NetMovies",
         *           "Link": "/eletronicos/tv/NetMovies?map=c,c,specificationFilter_1517"
         *         },
         *         {
         *           "Quantity": 4,
         *           "Name": "Vimeo",
         *           "Link": "/eletronicos/tv/Vimeo?map=c,c,specificationFilter_1517"
         *         },
         *         {
         *           "Quantity": 13,
         *           "Name": "YouTube",
         *           "Link": "/eletronicos/tv/YouTube?map=c,c,specificationFilter_1517"
         *         }
         *       ]
         *     } */
        SpecificationFilters: {
            "Resolu\u00E7\u00E3o": components["schemas"]["ResoluO"][];
            "Tamanho da Tela": components["schemas"]["TamanhoDaTela"][];
            "Aplicativos de TV": components["schemas"]["AplicativosDeTV"][];
        };
        /** @example {
         *       "Quantity": 10,
         *       "Name": "Full-HD",
         *       "Link": "/eletronicos/tv/Full-HD?map=c,c,specificationFilter_73"
         *     } */
        ResoluO: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
        };
        /** @example {
         *       "Quantity": 3,
         *       "Name": "Acima de 51 pol.",
         *       "Link": "/eletronicos/tv/Acima de 51 pol.?map=c,c,specificationFilter_74"
         *     } */
        TamanhoDaTela: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
        };
        /** @example {
         *       "Quantity": 4,
         *       "Name": "Crackle",
         *       "Link": "/eletronicos/tv/Crackle?map=c,c,specificationFilter_1517"
         *     } */
        AplicativosDeTV: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
        };
        /** @example {
         *       "Quantity": 20,
         *       "Name": "Eletrônicos",
         *       "Link": "/Eletronicos",
         *       "Children": [
         *         {
         *           "Quantity": 20,
         *           "Name": "TV",
         *           "Link": "/Eletronicos/TV",
         *           "Children": [
         *             {
         *               "Quantity": 6,
         *               "Name": "TV LED",
         *               "Link": "/Eletronicos/TV/TV-LED",
         *               "Children": []
         *             },
         *             {
         *               "Quantity": 14,
         *               "Name": "Smart TV",
         *               "Link": "/Eletronicos/TV/Smart-TV",
         *               "Children": []
         *             }
         *           ]
         *         }
         *       ]
         *     } */
        CategoriesTree: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
            Children: components["schemas"]["Child"][];
        };
        /** @example {
         *       "Quantity": 20,
         *       "Name": "TV",
         *       "Link": "/Eletronicos/TV",
         *       "Children": [
         *         {
         *           "Quantity": 6,
         *           "Name": "TV LED",
         *           "Link": "/Eletronicos/TV/TV-LED",
         *           "Children": []
         *         },
         *         {
         *           "Quantity": 14,
         *           "Name": "Smart TV",
         *           "Link": "/Eletronicos/TV/Smart-TV",
         *           "Children": []
         *         }
         *       ]
         *     } */
        Child: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
            Children: components["schemas"]["Child1"][];
        };
        /** @example {
         *       "Quantity": 6,
         *       "Name": "TV LED",
         *       "Link": "/Eletronicos/TV/TV-LED",
         *       "Children": []
         *     } */
        Child1: {
            /** Format: int32 */
            Quantity: number;
            Name: string;
            Link: string;
            Children: string[];
        };
        /** @example {
         *       "itemsReturned": [
         *         {
         *           "thumb": "",
         *           "name": "geladeira em Departamento 8",
         *           "href": "https://ambienteqa.vtexcommercestable.com.br/departamento-8/geladeira",
         *           "criteria": "£geladeira em Departamento 8¢/departamento-8/geladeira"
         *         },
         *         {
         *           "thumb": "",
         *           "name": "geladeira em Eletrodoméstico",
         *           "href": "https://ambienteqa.vtexcommercestable.com.br/eletrodomestico/geladeira",
         *           "criteria": "£geladeira em Eletrodoméstico¢/eletrodomestico/geladeira"
         *         },
         *         {
         *           "thumb": "<img src=\"https://ambienteqa.vteximg.com.br/arquivos/ids/168969-25-25/geladeira.jpg\" width=\"25\" height=\"25\" alt=\"geladeira\" id=\"\" />",
         *           "name": "geladeira eli",
         *           "href": "https://ambienteqa.vtexcommercestable.com.br/geladeiraeli/p",
         *           "criteria": null
         *         },
         *         {
         *           "thumb": "<img src=\"https://ambienteqa.vteximg.com.br/arquivos/ids/168964-25-25/gela.jpg\" width=\"25\" height=\"25\" alt=\"gela\" id=\"\" />",
         *           "name": "pre venda geladeira",
         *           "href": "https://ambienteqa.vtexcommercestable.com.br/prevendageladeira/p",
         *           "criteria": null
         *         },
         *         {
         *           "thumb": "<img src=\"https://ambienteqa.vteximg.com.br/arquivos/ids/168951-25-25/geladeira.jpg\" width=\"25\" height=\"25\" alt=\"geladeira\" id=\"\" />",
         *           "name": "geladeira",
         *           "href": "https://ambienteqa.vtexcommercestable.com.br/geladeira/p",
         *           "criteria": null
         *         }
         *       ]
         *     } */
        Example3: {
            itemsReturned: components["schemas"]["ItemsReturned"][];
        };
        /** @example {
         *       "thumb": "",
         *       "name": "geladeira em Departamento 8",
         *       "href": "https://ambienteqa.vtexcommercestable.com.br/departamento-8/geladeira",
         *       "criteria": "£geladeira em Departamento 8¢/departamento-8/geladeira"
         *     } */
        ItemsReturned: {
            thumb: string;
            name: string;
            href: string;
            criteria: string | null;
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
    ProductSearchWhoSawAlsoSaw: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product unique identifier. */
                productId: number;
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
                        /**
                         * @description Product unique identifier.
                         * @example 35
                         */
                        productId: string;
                        /**
                         * @description Product name.
                         * @example Kit de Hoegaarden
                         */
                        productName: string;
                        /**
                         * @description Brand name.
                         * @example Hoegaarden
                         */
                        brand: string;
                        /**
                         * @description Product brand ID.
                         * @example 2000004
                         */
                        brandId: number;
                        /**
                         * @description Product's brand image URL.
                         * @example https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg
                         */
                        brandImageUrl: string;
                        /**
                         * @description Product URL.
                         * @example kit-6-cerveja-hoegaarden
                         */
                        linkText: string;
                        /**
                         * @description Product reference.
                         * @example 000806
                         */
                        productReference: string;
                        /**
                         * @description Product reference ID.
                         * @example 1234
                         */
                        productReferenceCode: number | null;
                        /**
                         * @description Product category ID.
                         * @example 1
                         */
                        categoryId: string;
                        /**
                         * @description Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Kit 6 cerveja Hoegaarden
                         */
                        productTitle: string;
                        /**
                         * @description Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
                         * @example Category for Beers
                         */
                        metaTagDescription: string;
                        /**
                         * @description Product release date.
                         * @example 2020-10-07T00:00:00
                         */
                        releaseDate: string;
                        /**
                         * @description Cluster highlight ID and name.
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        clusterHighlights: Record<string, never>;
                        /**
                         * @description Product clusters' IDs and names.
                         * @example {
                         *       "138": "teste2",
                         *       "143": "NaoPesquisavel",
                         *       "146": "colecaotestesubcategoria",
                         *       "161": "merch_import_test1"
                         *     }
                         */
                        productClusters: Record<string, never>;
                        /**
                         * @description Searchable clusters IDs and names
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        searchableClusters: Record<string, never>;
                        /**
                         * @description Array of the product's categories URLs.
                         * @example [
                         *       "/Beers Beers Mesmo/"
                         *     ]
                         */
                        categories: unknown[];
                        /**
                         * @description Array of the product's categories IDs.
                         * @example [
                         *       "/1/"
                         *     ]
                         */
                        categoriesIds: unknown[];
                        /**
                         * @description Product URL.
                         * @example https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p
                         */
                        link: string;
                        /**
                         * @description Array of the product's specifications.
                         * @example [
                         *       "Percentuals",
                         *       "Percentual"
                         *     ]
                         */
                        allSpecifications: string[];
                        /**
                         * @description Array of the product's specifications groups.
                         * @example [
                         *       "Total",
                         *       "Teste da Api2"
                         *     ]
                         */
                        allSpecificationsGroups: string[];
                        /**
                         * @description Description of the main information related to the product. A simple and easy to understand summary for the customer.
                         * @example Description example
                         */
                        description: string | null;
                        /**
                         * @description Array containing the product SKU general information.
                         * @example [
                         *       {
                         *         "itemId": "310118469",
                         *         "name": "Kit com 6",
                         *         "nameComplete": "Kit de Hoegaarden Kit com 6",
                         *         "complementName": "",
                         *         "ean": "",
                         *         "referenceId": [
                         *           {
                         *             "Key": "RefId",
                         *             "Value": "000806"
                         *           }
                         *         ],
                         *         "measurementUnit": "un",
                         *         "unitMultiplier": 1,
                         *         "modalType": null,
                         *         "isKit": true,
                         *         "kitItems": [
                         *           {
                         *             "itemId": "310118466",
                         *             "amount": 6
                         *           }
                         *         ],
                         *         "images": [
                         *           {
                         *             "imageId": "155489",
                         *             "imageLabel": "",
                         *             "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                         *             "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                         *             "imageText": "hoegaarden-kit",
                         *             "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                         *           }
                         *         ],
                         *         "sellers": [
                         *           {
                         *             "sellerId": "1",
                         *             "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                         *             "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                         *             "sellerDefault": true,
                         *             "commertialOffer": {
                         *               "DeliverySlaSamplesPerRegion": {
                         *                 "0": {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               },
                         *               "Installments": [
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa à vista"
                         *                 },
                         *                 {
                         *                   "Value": 21,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 2,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 2 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 14,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 3,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 3 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 10.5,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 4,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 4 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Promissory",
                         *                   "PaymentSystemGroupName": "promissoryPaymentGroup",
                         *                   "Name": "Promissory à vista"
                         *                 }
                         *               ],
                         *               "DiscountHighLight": [],
                         *               "GiftSkuIds": [],
                         *               "Teasers": [
                         *                 {
                         *                   "<Name>k__BackingField": "TesteInfoAdicional",
                         *                   "<GeneralValues>k__BackingField": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "<Conditions>k__BackingField": {
                         *                     "<MinimumQuantity>k__BackingField": 0,
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PaymentMethodId",
                         *                         "<Value>k__BackingField": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "<Effects>k__BackingField": {
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PercentualDiscount",
                         *                         "<Value>k__BackingField": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "PromotionTeasers": [
                         *                 {
                         *                   "Name": "TesteInfoAdicional",
                         *                   "GeneralValues": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "Conditions": {
                         *                     "MinimumQuantity": 0,
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PaymentMethodId",
                         *                         "Value": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "Effects": {
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PercentualDiscount",
                         *                         "Value": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "BuyTogether": [],
                         *               "ItemMetadataAttachment": [],
                         *               "Price": 42,
                         *               "ListPrice": 42,
                         *               "PriceWithoutDiscount": 42,
                         *               "RewardValue": 0,
                         *               "PriceValidUntil": "4000-01-01T03:00:00Z",
                         *               "AvailableQuantity": 16,
                         *               "IsAvailable": true,
                         *               "Tax": 0,
                         *               "SaleChannel": 0,
                         *               "DeliverySlaSamples": [
                         *                 {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               ],
                         *               "GetInfoErrorMessage": null,
                         *               "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                         *               "PaymentOptions": {
                         *                 "installmentOptions": [
                         *                   {
                         *                     "paymentSystem": "2",
                         *                     "bin": null,
                         *                     "paymentName": "Visa",
                         *                     "paymentGroupName": "creditCardPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 2,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 2100,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 2,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 2100,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 3,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1400,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 3,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1400,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 4,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1050,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 4,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1050,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   },
                         *                   {
                         *                     "paymentSystem": "17",
                         *                     "bin": null,
                         *                     "paymentName": "Promissory",
                         *                     "paymentGroupName": "promissoryPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   }
                         *                 ],
                         *                 "paymentSystems": [
                         *                   {
                         *                     "id": 17,
                         *                     "name": "Promissory",
                         *                     "groupName": "promissoryPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "17",
                         *                     "template": "promissoryPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   },
                         *                   {
                         *                     "id": 2,
                         *                     "name": "Visa",
                         *                     "groupName": "creditCardPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "2",
                         *                     "template": "creditCardPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   }
                         *                 ],
                         *                 "payments": [],
                         *                 "giftCards": [],
                         *                 "giftCardMessages": [],
                         *                 "availableAccounts": [],
                         *                 "availableTokens": []
                         *               }
                         *             }
                         *           }
                         *         ],
                         *         "Videos": [],
                         *         "estimatedDateArrival": null
                         *       }
                         *     ]
                         */
                        items: {
                            /**
                             * @description SKU ID.
                             * @example 310118469
                             */
                            itemId: string;
                            /**
                             * @description SKU name.
                             * @example Kit com 6
                             */
                            name: string;
                            /**
                             * @description SKU complete name.
                             * @example Kit de Hoegaarden Kit com 6
                             */
                            nameComplete: string;
                            /**
                             * @description SKU complement name.
                             * @example Complement name
                             */
                            complementName: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 12345567
                             */
                            ean: string;
                            /**
                             * @description Reference code ID.
                             * @example [
                             *       {
                             *         "Key": "RefId",
                             *         "Value": "000806"
                             *       }
                             *     ]
                             */
                            referenceId: {
                                /**
                                 * @description Reference Code.
                                 * @example RefId
                                 */
                                Key: string;
                                /**
                                 * @description Unique reference code used internally for organizational purposes.
                                 * @example 000806
                                 */
                                Value: string;
                            }[];
                            /**
                             * @description Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
                             * @example un
                             */
                            measurementUnit: string;
                            /**
                             * @description numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
                             * @example 1
                             */
                            unitMultiplier: number;
                            /**
                             * @description Modal Type.
                             * @example Modal Type test
                             */
                            modalType: string | null;
                            /**
                             * @description If the SKU is part of a kit.
                             * @example true
                             */
                            isKit: boolean;
                            /**
                             * @description Array with information of SKUs components from a Kit.
                             * @example [
                             *       {
                             *         "itemId": "310118466",
                             *         "amount": 6
                             *       }
                             *     ]
                             */
                            kitItems: {
                                /**
                                 * @description SKU kit component ID.
                                 * @example 310118466
                                 */
                                itemId: string;
                                /**
                                 * @description Amount of the SKU component in the kit.
                                 * @example 6
                                 */
                                amount: number;
                            }[];
                            /**
                             * @description Array of information about the SKU image.
                             * @example [
                             *       {
                             *         "imageId": "155489",
                             *         "imageLabel": "",
                             *         "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                             *         "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                             *         "imageText": "hoegaarden-kit",
                             *         "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                             *       }
                             *     ]
                             */
                            images: {
                                /**
                                 * @description Image ID.
                                 * @example 155489
                                 */
                                imageId: string;
                                /**
                                 * @description Image label.
                                 * @example Label test
                                 */
                                imageLabel: string;
                                /**
                                 * @description Image tag.
                                 * @example <img src="~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000" width="#width#" height="#height#" alt="hoegaarden-kit" id="" />
                                 */
                                imageTag: string;
                                /**
                                 * @description Image URL.
                                 * @example https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000
                                 */
                                imageUrl: string;
                                /**
                                 * @description Image text.
                                 * @example hoegaarden-kit
                                 */
                                imageText: string | null;
                                /**
                                 * @description Date and time of the last update of the image.
                                 * @example 2020-10-07T12:49:27.5800000Z
                                 */
                                imageLastModified: string;
                            }[];
                            /**
                             * @description Array of SKU sellers.
                             * @example [
                             *       {
                             *         "sellerId": "1",
                             *         "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                             *         "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                             *         "sellerDefault": true,
                             *         "commertialOffer": {
                             *           "DeliverySlaSamplesPerRegion": {
                             *             "0": {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           },
                             *           "Installments": [
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa à vista"
                             *             },
                             *             {
                             *               "Value": 21,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 2,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 2 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 14,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 3,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 3 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 10.5,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 4,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 4 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Promissory",
                             *               "PaymentSystemGroupName": "promissoryPaymentGroup",
                             *               "Name": "Promissory à vista"
                             *             }
                             *           ],
                             *           "DiscountHighLight": [],
                             *           "GiftSkuIds": [],
                             *           "Teasers": [
                             *             {
                             *               "<Name>k__BackingField": "TesteInfoAdicional",
                             *               "<GeneralValues>k__BackingField": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "<Conditions>k__BackingField": {
                             *                 "<MinimumQuantity>k__BackingField": 0,
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PaymentMethodId",
                             *                     "<Value>k__BackingField": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "<Effects>k__BackingField": {
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PercentualDiscount",
                             *                     "<Value>k__BackingField": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "PromotionTeasers": [
                             *             {
                             *               "Name": "TesteInfoAdicional",
                             *               "GeneralValues": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "Conditions": {
                             *                 "MinimumQuantity": 0,
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PaymentMethodId",
                             *                     "Value": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "Effects": {
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PercentualDiscount",
                             *                     "Value": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "BuyTogether": [],
                             *           "ItemMetadataAttachment": [],
                             *           "Price": 42,
                             *           "ListPrice": 42,
                             *           "PriceWithoutDiscount": 42,
                             *           "RewardValue": 0,
                             *           "PriceValidUntil": "4000-01-01T03:00:00Z",
                             *           "AvailableQuantity": 16,
                             *           "IsAvailable": true,
                             *           "Tax": 0,
                             *           "SaleChannel": 0,
                             *           "DeliverySlaSamples": [
                             *             {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           ],
                             *           "GetInfoErrorMessage": null,
                             *           "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                             *           "PaymentOptions": {
                             *             "installmentOptions": [
                             *               {
                             *                 "paymentSystem": "2",
                             *                 "bin": null,
                             *                 "paymentName": "Visa",
                             *                 "paymentGroupName": "creditCardPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 2,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 2100,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 2,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 2100,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 3,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1400,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 3,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1400,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 4,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1050,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 4,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1050,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               },
                             *               {
                             *                 "paymentSystem": "17",
                             *                 "bin": null,
                             *                 "paymentName": "Promissory",
                             *                 "paymentGroupName": "promissoryPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               }
                             *             ],
                             *             "paymentSystems": [
                             *               {
                             *                 "id": 17,
                             *                 "name": "Promissory",
                             *                 "groupName": "promissoryPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "17",
                             *                 "template": "promissoryPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               },
                             *               {
                             *                 "id": 2,
                             *                 "name": "Visa",
                             *                 "groupName": "creditCardPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "2",
                             *                 "template": "creditCardPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               }
                             *             ],
                             *             "payments": [],
                             *             "giftCards": [],
                             *             "giftCardMessages": [],
                             *             "availableAccounts": [],
                             *             "availableTokens": []
                             *           }
                             *         }
                             *       }
                             *     ]
                             */
                            sellers: {
                                /**
                                 * @description SKU seller ID.
                                 * @example 1
                                 */
                                sellerId: string;
                                /**
                                 * @description SKU seller name.
                                 * @example COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE
                                 */
                                sellerName: string;
                                /**
                                 * @description URL to add the product to the cart.
                                 * @example https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1
                                 */
                                addToCartLink: string;
                                /**
                                 * @description If the seller is default or not.
                                 * @example true
                                 */
                                sellerDefault: boolean;
                                /**
                                 * @description AKA Commertial Condition.
                                 * @example {
                                 *       "DeliverySlaSamplesPerRegion": {
                                 *         "0": {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       },
                                 *       "Installments": [
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa à vista"
                                 *         },
                                 *         {
                                 *           "Value": 21,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 2,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 2 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 14,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 3,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 3 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 10.5,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 4,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 4 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Promissory",
                                 *           "PaymentSystemGroupName": "promissoryPaymentGroup",
                                 *           "Name": "Promissory à vista"
                                 *         }
                                 *       ],
                                 *       "DiscountHighLight": [],
                                 *       "GiftSkuIds": [],
                                 *       "Teasers": [
                                 *         {
                                 *           "<Name>k__BackingField": "TesteInfoAdicional",
                                 *           "<GeneralValues>k__BackingField": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "<Conditions>k__BackingField": {
                                 *             "<MinimumQuantity>k__BackingField": 0,
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PaymentMethodId",
                                 *                 "<Value>k__BackingField": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "<Effects>k__BackingField": {
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PercentualDiscount",
                                 *                 "<Value>k__BackingField": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "PromotionTeasers": [
                                 *         {
                                 *           "Name": "TesteInfoAdicional",
                                 *           "GeneralValues": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "Conditions": {
                                 *             "MinimumQuantity": 0,
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PaymentMethodId",
                                 *                 "Value": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "Effects": {
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PercentualDiscount",
                                 *                 "Value": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "BuyTogether": [],
                                 *       "ItemMetadataAttachment": [],
                                 *       "Price": 42,
                                 *       "ListPrice": 42,
                                 *       "PriceWithoutDiscount": 42,
                                 *       "RewardValue": 0,
                                 *       "PriceValidUntil": "4000-01-01T03:00:00Z",
                                 *       "AvailableQuantity": 16,
                                 *       "IsAvailable": true,
                                 *       "Tax": 0,
                                 *       "SaleChannel": 0,
                                 *       "DeliverySlaSamples": [
                                 *         {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       ],
                                 *       "GetInfoErrorMessage": null,
                                 *       "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                                 *       "PaymentOptions": {
                                 *         "installmentOptions": [
                                 *           {
                                 *             "paymentSystem": "2",
                                 *             "bin": null,
                                 *             "paymentName": "Visa",
                                 *             "paymentGroupName": "creditCardPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 2,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 2100,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 2,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 2100,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 3,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1400,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 3,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1400,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 4,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1050,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 4,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1050,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           },
                                 *           {
                                 *             "paymentSystem": "17",
                                 *             "bin": null,
                                 *             "paymentName": "Promissory",
                                 *             "paymentGroupName": "promissoryPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           }
                                 *         ],
                                 *         "paymentSystems": [
                                 *           {
                                 *             "id": 17,
                                 *             "name": "Promissory",
                                 *             "groupName": "promissoryPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "17",
                                 *             "template": "promissoryPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           },
                                 *           {
                                 *             "id": 2,
                                 *             "name": "Visa",
                                 *             "groupName": "creditCardPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "2",
                                 *             "template": "creditCardPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           }
                                 *         ],
                                 *         "payments": [],
                                 *         "giftCards": [],
                                 *         "giftCardMessages": [],
                                 *         "availableAccounts": [],
                                 *         "availableTokens": []
                                 *       }
                                 *     }
                                 */
                                commertialOffer: {
                                    /**
                                     * @description Delivery SLA samples per region.
                                     * @example {
                                     *       "0": {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": "null"
                                     *       }
                                     *     }
                                     */
                                    DeliverySlaSamplesPerRegion: {
                                        /**
                                         * @description Delivery SLA ID.
                                         * @example {
                                         *       "DeliverySlaPerTypes": [],
                                         *       "Region": null
                                         *     }
                                         */
                                        0?: {
                                            /**
                                             * @description Delivery SLA per types.
                                             * @example []
                                             */
                                            DeliverySlaPerTypes: unknown[];
                                            /**
                                             * @description Region.
                                             * @example
                                             */
                                            Region: string | null;
                                        };
                                    };
                                    /**
                                     * @description Installments options.
                                     * @example [
                                     *       {
                                     *         "Value": 42,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 1,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa à vista"
                                     *       },
                                     *       {
                                     *         "Value": 21,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 2,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa 2 vezes sem juros"
                                     *       }
                                     *     ]
                                     */
                                    Installments: {
                                        /**
                                         * @description Value of the installment.
                                         * @example 42
                                         */
                                        Value: number;
                                        /**
                                         * @description Interest rate of the installment.
                                         * @example 0
                                         */
                                        InterestRate: number;
                                        /**
                                         * @description Total value plus interest rate of the installment.
                                         * @example 42
                                         */
                                        TotalValuePlusInterestRate: number;
                                        /**
                                         * @description Number of the installment.
                                         * @example 1
                                         */
                                        NumberOfInstallments: number;
                                        /**
                                         * @description Payment system name of the installment.
                                         * @example Visa
                                         */
                                        PaymentSystemName: string;
                                        /**
                                         * @description Payment system group name of the installment.
                                         * @example creditCardPaymentGroup
                                         */
                                        PaymentSystemGroupName: string;
                                        /**
                                         * @description Name of the installment.
                                         * @example Visa à vista
                                         */
                                        Name: string;
                                    }[];
                                    /**
                                     * @description Discount hightlight.
                                     * @example []
                                     */
                                    DiscountHighLight: unknown[];
                                    /**
                                     * @description Array of SKU gifts IDs.
                                     * @example []
                                     */
                                    GiftSkuIds: unknown[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "<Name>k__BackingField": "TesteInfoAdicional",
                                     *         "<GeneralValues>k__BackingField": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "<Conditions>k__BackingField": {
                                     *           "<MinimumQuantity>k__BackingField": 0,
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PaymentMethodId",
                                     *               "<Value>k__BackingField": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "<Effects>k__BackingField": {
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PercentualDiscount",
                                     *               "<Value>k__BackingField": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    Teasers: {
                                        /** @description Name. */
                                        "<Name>k__BackingField"?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        "<GeneralValues>k__BackingField"?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        "<Conditions>k__BackingField"?: {
                                            /** @description Minimum quantity. */
                                            "<MinimumQuantity>k__BackingField"?: number;
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        "<Effects>k__BackingField"?: {
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "Name": "TesteInfoAdicional",
                                     *         "GeneralValues": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "Conditions": {
                                     *           "MinimumQuantity": 0,
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PaymentMethodId",
                                     *               "Value": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "Effects": {
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PercentualDiscount",
                                     *               "Value": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    PromotionTeasers?: {
                                        /** @description Name. */
                                        Name?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        GeneralValues?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        Conditions?: {
                                            /** @description Minimum quantity. */
                                            MinimumQuantity?: number;
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        Effects?: {
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description Array of other products that can be bought together with the product in question.
                                     * @example []
                                     */
                                    BuyTogether: unknown[];
                                    /**
                                     * @description Item metadata attachment.
                                     * @example []
                                     */
                                    ItemMetadataAttachment: unknown[];
                                    /**
                                     * @description Price of the product.
                                     * @example 42
                                     */
                                    Price: number;
                                    /**
                                     * @description List price of the product.
                                     * @example 42
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description Price of the product without discount.
                                     * @example 42
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description Reward value of the product.
                                     * @example 0
                                     */
                                    RewardValue: number;
                                    /**
                                     * @description Price of the product valid until a certain date.
                                     * @example 4000-01-01T03:00:00Z
                                     */
                                    PriceValidUntil: string;
                                    /**
                                     * @description Use the `IsAvailable` field instead.
                                     * @example 16
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description If the product is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                    /**
                                     * @description Tax of the product.
                                     * @example 0
                                     */
                                    Tax: number;
                                    /**
                                     * @description Trade policy which the product is contained.
                                     * @example 0
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description Delivery SLA samples.
                                     * @example [
                                     *       {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": null
                                     *       }
                                     *     ]
                                     */
                                    DeliverySlaSamples: {
                                        /**
                                         * @description Delivery SLA per types.
                                         * @example []
                                         */
                                        DeliverySlaPerTypes: unknown[];
                                        /**
                                         * @description Region.
                                         * @example null
                                         */
                                        Region: string | null;
                                    }[];
                                    /**
                                     * @description Get info error message.
                                     * @example null
                                     */
                                    GetInfoErrorMessage: string | null;
                                    /**
                                     * @description Cache version used to call checkout.
                                     * @example 95EF7E5476DF276E679167A399FE3103_
                                     */
                                    CacheVersionUsedToCallCheckout: string;
                                    /**
                                     * @description Payment options.
                                     * @example {
                                     *       "installmentOptions": [
                                     *         {
                                     *           "paymentSystem": "2",
                                     *           "bin": null,
                                     *           "paymentName": "Visa",
                                     *           "paymentGroupName": "creditCardPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 2,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 2100,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 2,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 2100,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 3,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1400,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 3,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1400,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 4,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1050,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 4,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1050,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         },
                                     *         {
                                     *           "paymentSystem": "17",
                                     *           "bin": null,
                                     *           "paymentName": "Promissory",
                                     *           "paymentGroupName": "promissoryPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         }
                                     *       ],
                                     *       "paymentSystems": [
                                     *         {
                                     *           "id": 17,
                                     *           "name": "Promissory",
                                     *           "groupName": "promissoryPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "17",
                                     *           "template": "promissoryPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         },
                                     *         {
                                     *           "id": 2,
                                     *           "name": "Visa",
                                     *           "groupName": "creditCardPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "2",
                                     *           "template": "creditCardPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         }
                                     *       ],
                                     *       "payments": [],
                                     *       "giftCards": [],
                                     *       "giftCardMessages": [],
                                     *       "availableAccounts": [],
                                     *       "availableTokens": []
                                     *     }
                                     */
                                    PaymentOptions: {
                                        /**
                                         * @description installment options.
                                         * @example [
                                         *       {
                                         *         "paymentSystem": "2",
                                         *         "bin": null,
                                         *         "paymentName": "Visa",
                                         *         "paymentGroupName": "creditCardPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 2,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 2100,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 2,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 2100,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 3,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1400,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 3,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1400,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 4,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1050,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 4,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1050,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       },
                                         *       {
                                         *         "paymentSystem": "17",
                                         *         "bin": null,
                                         *         "paymentName": "Promissory",
                                         *         "paymentGroupName": "promissoryPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       }
                                         *     ]
                                         */
                                        installmentOptions: {
                                            /**
                                             * @description Payment system.
                                             * @example 2
                                             */
                                            paymentSystem: string;
                                            /**
                                             * @description Bin.
                                             * @example null
                                             */
                                            bin: string | null;
                                            /**
                                             * @description Payment name.
                                             * @example Visa
                                             */
                                            paymentName: string;
                                            /**
                                             * @description Payment group name.
                                             * @example creditCardPaymentGroup
                                             */
                                            paymentGroupName: string;
                                            /**
                                             * @description Value.
                                             * @example 4200
                                             */
                                            value: number;
                                            /**
                                             * @description Installments.
                                             * @example [
                                             *       {
                                             *         "count": 1,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 4200,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 1,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 4200,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       },
                                             *       {
                                             *         "count": 2,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 2100,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 2,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 2100,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       }
                                             *     ]
                                             */
                                            installments: {
                                                /**
                                                 * @description Count.
                                                 * @example 1
                                                 */
                                                count: number;
                                                /**
                                                 * @description Has interest rate.
                                                 * @example false
                                                 */
                                                hasInterestRate: boolean;
                                                /**
                                                 * @description Interest rate.
                                                 * @example 0
                                                 */
                                                interestRate: number;
                                                /**
                                                 * @description Value.
                                                 * @example 4200
                                                 */
                                                value: number;
                                                /**
                                                 * @description Total.
                                                 * @example 4200
                                                 */
                                                total: number;
                                                /**
                                                 * @description Seller merchant installments.
                                                 * @example [
                                                 *       {
                                                 *         "id": "MERCH",
                                                 *         "count": 1,
                                                 *         "hasInterestRate": false,
                                                 *         "interestRate": 0,
                                                 *         "value": 4200,
                                                 *         "total": 4200
                                                 *       }
                                                 *     ]
                                                 */
                                                sellerMerchantInstallments: {
                                                    /**
                                                     * @description ID.
                                                     * @example MERCH
                                                     */
                                                    id: string;
                                                    /**
                                                     * @description Count.
                                                     * @example 1
                                                     */
                                                    count: number;
                                                    /**
                                                     * @description Has interest rate.
                                                     * @example false
                                                     */
                                                    hasInterestRate: boolean;
                                                    /**
                                                     * @description Interest rate.
                                                     * @example 0
                                                     */
                                                    interestRate: number;
                                                    /**
                                                     * @description Value.
                                                     * @example 4200
                                                     */
                                                    value: number;
                                                    /**
                                                     * @description Total.
                                                     * @example 4200
                                                     */
                                                    total: number;
                                                }[];
                                            }[];
                                        }[];
                                        /**
                                         * @description Payment systems.
                                         * @example [
                                         *       {
                                         *         "id": 17,
                                         *         "name": "Promissory",
                                         *         "groupName": "promissoryPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "17",
                                         *         "template": "promissoryPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       },
                                         *       {
                                         *         "id": 2,
                                         *         "name": "Visa",
                                         *         "groupName": "creditCardPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "2",
                                         *         "template": "creditCardPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       }
                                         *     ]
                                         */
                                        paymentSystems: {
                                            /**
                                             * @description ID.
                                             * @example 17
                                             */
                                            id: number;
                                            /**
                                             * @description Name.
                                             * @example Promissory
                                             */
                                            name: string;
                                            /**
                                             * @description Group name.
                                             * @example promissoryPaymentGroup
                                             */
                                            groupName: string;
                                            /**
                                             * @description Validator.
                                             * @example
                                             */
                                            validator: string | null;
                                            /**
                                             * @description String ID.
                                             * @example 17
                                             */
                                            stringId: string;
                                            /**
                                             * @description Template.
                                             * @example promissoryPaymentGroup-template
                                             */
                                            template: string;
                                            /**
                                             * @description If requires document or not.
                                             * @example false
                                             */
                                            requiresDocument: boolean;
                                            /**
                                             * @description If is custom or not.
                                             * @example false
                                             */
                                            isCustom: boolean;
                                            /**
                                             * @description Description.
                                             * @example
                                             */
                                            description: string | null;
                                            /**
                                             * @description If requires authentication.
                                             * @example false
                                             */
                                            requiresAuthentication: boolean;
                                            /**
                                             * @description Due date.
                                             * @example 2021-07-01T18:43:00.0264384Z
                                             */
                                            dueDate: string;
                                            /**
                                             * @description Available payments.
                                             * @example
                                             */
                                            availablePayments: string | null;
                                        }[];
                                        /**
                                         * @description Payments.
                                         * @example []
                                         */
                                        payments: unknown[];
                                        /**
                                         * @description GiftCards.
                                         * @example []
                                         */
                                        giftCards: unknown[];
                                        /**
                                         * @description GiftCardMessages.
                                         * @example []
                                         */
                                        giftCardMessages: unknown[];
                                        /**
                                         * @description Available accounts.
                                         * @example []
                                         */
                                        availableAccounts: unknown[];
                                        /**
                                         * @description Available tokens.
                                         * @example []
                                         */
                                        availableTokens: unknown[];
                                    };
                                };
                            }[];
                            /**
                             * @description Videos.
                             * @example []
                             */
                            Videos: unknown[];
                            /**
                             * @description Estimated date arrival.
                             * @example
                             */
                            estimatedDateArrival: string | null;
                        }[];
                    }[];
                };
            };
        };
    };
    ProductSearchWhoSawAlsoBought: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product unique identifier. */
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
                        /**
                         * @description Product unique identifier.
                         * @example 35
                         */
                        productId: string;
                        /**
                         * @description Product name.
                         * @example Kit de Hoegaarden
                         */
                        productName: string;
                        /**
                         * @description Brand name.
                         * @example Hoegaarden
                         */
                        brand: string;
                        /**
                         * @description Product brand ID.
                         * @example 2000004
                         */
                        brandId: number;
                        /**
                         * @description Product's brand image URL.
                         * @example https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg
                         */
                        brandImageUrl: string;
                        /**
                         * @description Product URL.
                         * @example kit-6-cerveja-hoegaarden
                         */
                        linkText: string;
                        /**
                         * @description Product reference.
                         * @example 000806
                         */
                        productReference: string;
                        /**
                         * @description Product reference ID.
                         * @example 1234
                         */
                        productReferenceCode: number | null;
                        /**
                         * @description Product category ID.
                         * @example 1
                         */
                        categoryId: string;
                        /**
                         * @description Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Kit 6 cerveja Hoegaarden
                         */
                        productTitle: string;
                        /**
                         * @description Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
                         * @example Category for Beers
                         */
                        metaTagDescription: string;
                        /**
                         * @description Product release date.
                         * @example 2020-10-07T00:00:00
                         */
                        releaseDate: string;
                        /**
                         * @description Cluster highlight ID and name.
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        clusterHighlights: Record<string, never>;
                        /**
                         * @description Product clusters' IDs and names.
                         * @example {
                         *       "138": "teste2",
                         *       "143": "NaoPesquisavel",
                         *       "146": "colecaotestesubcategoria",
                         *       "161": "merch_import_test1"
                         *     }
                         */
                        productClusters: Record<string, never>;
                        /**
                         * @description Searchable clusters IDs and names
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        searchableClusters: Record<string, never>;
                        /**
                         * @description Array of the product's categories URLs.
                         * @example [
                         *       "/Beers Beers Mesmo/"
                         *     ]
                         */
                        categories: unknown[];
                        /**
                         * @description Array of the product's categories IDs.
                         * @example [
                         *       "/1/"
                         *     ]
                         */
                        categoriesIds: unknown[];
                        /**
                         * @description Product URL.
                         * @example https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p
                         */
                        link: string;
                        /**
                         * @description Array of the product's specifications.
                         * @example [
                         *       "Percentuals",
                         *       "Percentual"
                         *     ]
                         */
                        allSpecifications: string[];
                        /**
                         * @description Array of the product's specifications groups.
                         * @example [
                         *       "Total",
                         *       "Teste da Api2"
                         *     ]
                         */
                        allSpecificationsGroups: string[];
                        /**
                         * @description Description of the main information related to the product. A simple and easy to understand summary for the customer.
                         * @example Description example
                         */
                        description: string | null;
                        /**
                         * @description Array containing the product SKU general information.
                         * @example [
                         *       {
                         *         "itemId": "310118469",
                         *         "name": "Kit com 6",
                         *         "nameComplete": "Kit de Hoegaarden Kit com 6",
                         *         "complementName": "",
                         *         "ean": "",
                         *         "referenceId": [
                         *           {
                         *             "Key": "RefId",
                         *             "Value": "000806"
                         *           }
                         *         ],
                         *         "measurementUnit": "un",
                         *         "unitMultiplier": 1,
                         *         "modalType": null,
                         *         "isKit": true,
                         *         "kitItems": [
                         *           {
                         *             "itemId": "310118466",
                         *             "amount": 6
                         *           }
                         *         ],
                         *         "images": [
                         *           {
                         *             "imageId": "155489",
                         *             "imageLabel": "",
                         *             "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                         *             "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                         *             "imageText": "hoegaarden-kit",
                         *             "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                         *           }
                         *         ],
                         *         "sellers": [
                         *           {
                         *             "sellerId": "1",
                         *             "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                         *             "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                         *             "sellerDefault": true,
                         *             "commertialOffer": {
                         *               "DeliverySlaSamplesPerRegion": {
                         *                 "0": {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               },
                         *               "Installments": [
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa à vista"
                         *                 },
                         *                 {
                         *                   "Value": 21,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 2,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 2 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 14,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 3,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 3 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 10.5,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 4,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 4 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Promissory",
                         *                   "PaymentSystemGroupName": "promissoryPaymentGroup",
                         *                   "Name": "Promissory à vista"
                         *                 }
                         *               ],
                         *               "DiscountHighLight": [],
                         *               "GiftSkuIds": [],
                         *               "Teasers": [
                         *                 {
                         *                   "<Name>k__BackingField": "TesteInfoAdicional",
                         *                   "<GeneralValues>k__BackingField": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "<Conditions>k__BackingField": {
                         *                     "<MinimumQuantity>k__BackingField": 0,
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PaymentMethodId",
                         *                         "<Value>k__BackingField": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "<Effects>k__BackingField": {
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PercentualDiscount",
                         *                         "<Value>k__BackingField": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "PromotionTeasers": [
                         *                 {
                         *                   "Name": "TesteInfoAdicional",
                         *                   "GeneralValues": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "Conditions": {
                         *                     "MinimumQuantity": 0,
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PaymentMethodId",
                         *                         "Value": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "Effects": {
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PercentualDiscount",
                         *                         "Value": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "BuyTogether": [],
                         *               "ItemMetadataAttachment": [],
                         *               "Price": 42,
                         *               "ListPrice": 42,
                         *               "PriceWithoutDiscount": 42,
                         *               "RewardValue": 0,
                         *               "PriceValidUntil": "4000-01-01T03:00:00Z",
                         *               "AvailableQuantity": 16,
                         *               "IsAvailable": true,
                         *               "Tax": 0,
                         *               "SaleChannel": 0,
                         *               "DeliverySlaSamples": [
                         *                 {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               ],
                         *               "GetInfoErrorMessage": null,
                         *               "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                         *               "PaymentOptions": {
                         *                 "installmentOptions": [
                         *                   {
                         *                     "paymentSystem": "2",
                         *                     "bin": null,
                         *                     "paymentName": "Visa",
                         *                     "paymentGroupName": "creditCardPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 2,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 2100,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 2,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 2100,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 3,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1400,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 3,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1400,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 4,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1050,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 4,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1050,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   },
                         *                   {
                         *                     "paymentSystem": "17",
                         *                     "bin": null,
                         *                     "paymentName": "Promissory",
                         *                     "paymentGroupName": "promissoryPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   }
                         *                 ],
                         *                 "paymentSystems": [
                         *                   {
                         *                     "id": 17,
                         *                     "name": "Promissory",
                         *                     "groupName": "promissoryPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "17",
                         *                     "template": "promissoryPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   },
                         *                   {
                         *                     "id": 2,
                         *                     "name": "Visa",
                         *                     "groupName": "creditCardPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "2",
                         *                     "template": "creditCardPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   }
                         *                 ],
                         *                 "payments": [],
                         *                 "giftCards": [],
                         *                 "giftCardMessages": [],
                         *                 "availableAccounts": [],
                         *                 "availableTokens": []
                         *               }
                         *             }
                         *           }
                         *         ],
                         *         "Videos": [],
                         *         "estimatedDateArrival": null
                         *       }
                         *     ]
                         */
                        items: {
                            /**
                             * @description SKU ID.
                             * @example 310118469
                             */
                            itemId: string;
                            /**
                             * @description SKU name.
                             * @example Kit com 6
                             */
                            name: string;
                            /**
                             * @description SKU complete name.
                             * @example Kit de Hoegaarden Kit com 6
                             */
                            nameComplete: string;
                            /**
                             * @description SKU complement name.
                             * @example Complement name
                             */
                            complementName: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 12345567
                             */
                            ean: string;
                            /**
                             * @description Reference code ID.
                             * @example [
                             *       {
                             *         "Key": "RefId",
                             *         "Value": "000806"
                             *       }
                             *     ]
                             */
                            referenceId: {
                                /**
                                 * @description Reference Code.
                                 * @example RefId
                                 */
                                Key: string;
                                /**
                                 * @description Unique reference code used internally for organizational purposes.
                                 * @example 000806
                                 */
                                Value: string;
                            }[];
                            /**
                             * @description Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
                             * @example un
                             */
                            measurementUnit: string;
                            /**
                             * @description numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
                             * @example 1
                             */
                            unitMultiplier: number;
                            /**
                             * @description Modal Type.
                             * @example Modal Type test
                             */
                            modalType: string | null;
                            /**
                             * @description If the SKU is part of a kit.
                             * @example true
                             */
                            isKit: boolean;
                            /**
                             * @description Array with information of SKUs components from a Kit.
                             * @example [
                             *       {
                             *         "itemId": "310118466",
                             *         "amount": 6
                             *       }
                             *     ]
                             */
                            kitItems: {
                                /**
                                 * @description SKU kit component ID.
                                 * @example 310118466
                                 */
                                itemId: string;
                                /**
                                 * @description Amount of the SKU component in the kit.
                                 * @example 6
                                 */
                                amount: number;
                            }[];
                            /**
                             * @description Array of information about the SKU image.
                             * @example [
                             *       {
                             *         "imageId": "155489",
                             *         "imageLabel": "",
                             *         "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                             *         "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                             *         "imageText": "hoegaarden-kit",
                             *         "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                             *       }
                             *     ]
                             */
                            images: {
                                /**
                                 * @description Image ID.
                                 * @example 155489
                                 */
                                imageId: string;
                                /**
                                 * @description Image label.
                                 * @example Label test
                                 */
                                imageLabel: string;
                                /**
                                 * @description Image tag.
                                 * @example <img src="~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000" width="#width#" height="#height#" alt="hoegaarden-kit" id="" />
                                 */
                                imageTag: string;
                                /**
                                 * @description Image URL.
                                 * @example https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000
                                 */
                                imageUrl: string;
                                /**
                                 * @description Image text.
                                 * @example hoegaarden-kit
                                 */
                                imageText: string | null;
                                /**
                                 * @description Date and time of the last update of the image.
                                 * @example 2020-10-07T12:49:27.5800000Z
                                 */
                                imageLastModified: string;
                            }[];
                            /**
                             * @description Array of SKU sellers.
                             * @example [
                             *       {
                             *         "sellerId": "1",
                             *         "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                             *         "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                             *         "sellerDefault": true,
                             *         "commertialOffer": {
                             *           "DeliverySlaSamplesPerRegion": {
                             *             "0": {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           },
                             *           "Installments": [
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa à vista"
                             *             },
                             *             {
                             *               "Value": 21,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 2,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 2 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 14,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 3,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 3 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 10.5,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 4,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 4 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Promissory",
                             *               "PaymentSystemGroupName": "promissoryPaymentGroup",
                             *               "Name": "Promissory à vista"
                             *             }
                             *           ],
                             *           "DiscountHighLight": [],
                             *           "GiftSkuIds": [],
                             *           "Teasers": [
                             *             {
                             *               "<Name>k__BackingField": "TesteInfoAdicional",
                             *               "<GeneralValues>k__BackingField": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "<Conditions>k__BackingField": {
                             *                 "<MinimumQuantity>k__BackingField": 0,
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PaymentMethodId",
                             *                     "<Value>k__BackingField": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "<Effects>k__BackingField": {
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PercentualDiscount",
                             *                     "<Value>k__BackingField": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "PromotionTeasers": [
                             *             {
                             *               "Name": "TesteInfoAdicional",
                             *               "GeneralValues": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "Conditions": {
                             *                 "MinimumQuantity": 0,
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PaymentMethodId",
                             *                     "Value": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "Effects": {
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PercentualDiscount",
                             *                     "Value": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "BuyTogether": [],
                             *           "ItemMetadataAttachment": [],
                             *           "Price": 42,
                             *           "ListPrice": 42,
                             *           "PriceWithoutDiscount": 42,
                             *           "RewardValue": 0,
                             *           "PriceValidUntil": "4000-01-01T03:00:00Z",
                             *           "AvailableQuantity": 16,
                             *           "IsAvailable": true,
                             *           "Tax": 0,
                             *           "SaleChannel": 0,
                             *           "DeliverySlaSamples": [
                             *             {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           ],
                             *           "GetInfoErrorMessage": null,
                             *           "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                             *           "PaymentOptions": {
                             *             "installmentOptions": [
                             *               {
                             *                 "paymentSystem": "2",
                             *                 "bin": null,
                             *                 "paymentName": "Visa",
                             *                 "paymentGroupName": "creditCardPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 2,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 2100,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 2,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 2100,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 3,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1400,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 3,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1400,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 4,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1050,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 4,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1050,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               },
                             *               {
                             *                 "paymentSystem": "17",
                             *                 "bin": null,
                             *                 "paymentName": "Promissory",
                             *                 "paymentGroupName": "promissoryPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               }
                             *             ],
                             *             "paymentSystems": [
                             *               {
                             *                 "id": 17,
                             *                 "name": "Promissory",
                             *                 "groupName": "promissoryPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "17",
                             *                 "template": "promissoryPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               },
                             *               {
                             *                 "id": 2,
                             *                 "name": "Visa",
                             *                 "groupName": "creditCardPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "2",
                             *                 "template": "creditCardPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               }
                             *             ],
                             *             "payments": [],
                             *             "giftCards": [],
                             *             "giftCardMessages": [],
                             *             "availableAccounts": [],
                             *             "availableTokens": []
                             *           }
                             *         }
                             *       }
                             *     ]
                             */
                            sellers: {
                                /**
                                 * @description SKU seller ID.
                                 * @example 1
                                 */
                                sellerId: string;
                                /**
                                 * @description SKU seller name.
                                 * @example COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE
                                 */
                                sellerName: string;
                                /**
                                 * @description URL to add the product to the cart.
                                 * @example https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1
                                 */
                                addToCartLink: string;
                                /**
                                 * @description If the seller is default or not.
                                 * @example true
                                 */
                                sellerDefault: boolean;
                                /**
                                 * @description AKA Commertial Condition.
                                 * @example {
                                 *       "DeliverySlaSamplesPerRegion": {
                                 *         "0": {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       },
                                 *       "Installments": [
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa à vista"
                                 *         },
                                 *         {
                                 *           "Value": 21,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 2,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 2 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 14,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 3,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 3 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 10.5,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 4,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 4 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Promissory",
                                 *           "PaymentSystemGroupName": "promissoryPaymentGroup",
                                 *           "Name": "Promissory à vista"
                                 *         }
                                 *       ],
                                 *       "DiscountHighLight": [],
                                 *       "GiftSkuIds": [],
                                 *       "Teasers": [
                                 *         {
                                 *           "<Name>k__BackingField": "TesteInfoAdicional",
                                 *           "<GeneralValues>k__BackingField": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "<Conditions>k__BackingField": {
                                 *             "<MinimumQuantity>k__BackingField": 0,
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PaymentMethodId",
                                 *                 "<Value>k__BackingField": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "<Effects>k__BackingField": {
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PercentualDiscount",
                                 *                 "<Value>k__BackingField": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "PromotionTeasers": [
                                 *         {
                                 *           "Name": "TesteInfoAdicional",
                                 *           "GeneralValues": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "Conditions": {
                                 *             "MinimumQuantity": 0,
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PaymentMethodId",
                                 *                 "Value": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "Effects": {
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PercentualDiscount",
                                 *                 "Value": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "BuyTogether": [],
                                 *       "ItemMetadataAttachment": [],
                                 *       "Price": 42,
                                 *       "ListPrice": 42,
                                 *       "PriceWithoutDiscount": 42,
                                 *       "RewardValue": 0,
                                 *       "PriceValidUntil": "4000-01-01T03:00:00Z",
                                 *       "AvailableQuantity": 16,
                                 *       "IsAvailable": true,
                                 *       "Tax": 0,
                                 *       "SaleChannel": 0,
                                 *       "DeliverySlaSamples": [
                                 *         {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       ],
                                 *       "GetInfoErrorMessage": null,
                                 *       "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                                 *       "PaymentOptions": {
                                 *         "installmentOptions": [
                                 *           {
                                 *             "paymentSystem": "2",
                                 *             "bin": null,
                                 *             "paymentName": "Visa",
                                 *             "paymentGroupName": "creditCardPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 2,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 2100,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 2,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 2100,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 3,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1400,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 3,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1400,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 4,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1050,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 4,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1050,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           },
                                 *           {
                                 *             "paymentSystem": "17",
                                 *             "bin": null,
                                 *             "paymentName": "Promissory",
                                 *             "paymentGroupName": "promissoryPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           }
                                 *         ],
                                 *         "paymentSystems": [
                                 *           {
                                 *             "id": 17,
                                 *             "name": "Promissory",
                                 *             "groupName": "promissoryPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "17",
                                 *             "template": "promissoryPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           },
                                 *           {
                                 *             "id": 2,
                                 *             "name": "Visa",
                                 *             "groupName": "creditCardPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "2",
                                 *             "template": "creditCardPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           }
                                 *         ],
                                 *         "payments": [],
                                 *         "giftCards": [],
                                 *         "giftCardMessages": [],
                                 *         "availableAccounts": [],
                                 *         "availableTokens": []
                                 *       }
                                 *     }
                                 */
                                commertialOffer: {
                                    /**
                                     * @description Delivery SLA samples per region.
                                     * @example {
                                     *       "0": {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": "null"
                                     *       }
                                     *     }
                                     */
                                    DeliverySlaSamplesPerRegion: {
                                        /**
                                         * @description Delivery SLA ID.
                                         * @example {
                                         *       "DeliverySlaPerTypes": [],
                                         *       "Region": null
                                         *     }
                                         */
                                        0?: {
                                            /**
                                             * @description Delivery SLA per types.
                                             * @example []
                                             */
                                            DeliverySlaPerTypes: unknown[];
                                            /**
                                             * @description Region.
                                             * @example
                                             */
                                            Region: string | null;
                                        };
                                    };
                                    /**
                                     * @description Installments options.
                                     * @example [
                                     *       {
                                     *         "Value": 42,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 1,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa à vista"
                                     *       },
                                     *       {
                                     *         "Value": 21,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 2,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa 2 vezes sem juros"
                                     *       }
                                     *     ]
                                     */
                                    Installments: {
                                        /**
                                         * @description Value of the installment.
                                         * @example 42
                                         */
                                        Value: number;
                                        /**
                                         * @description Interest rate of the installment.
                                         * @example 0
                                         */
                                        InterestRate: number;
                                        /**
                                         * @description Total value plus interest rate of the installment.
                                         * @example 42
                                         */
                                        TotalValuePlusInterestRate: number;
                                        /**
                                         * @description Number of the installment.
                                         * @example 1
                                         */
                                        NumberOfInstallments: number;
                                        /**
                                         * @description Payment system name of the installment.
                                         * @example Visa
                                         */
                                        PaymentSystemName: string;
                                        /**
                                         * @description Payment system group name of the installment.
                                         * @example creditCardPaymentGroup
                                         */
                                        PaymentSystemGroupName: string;
                                        /**
                                         * @description Name of the installment.
                                         * @example Visa à vista
                                         */
                                        Name: string;
                                    }[];
                                    /**
                                     * @description Discount hightlight.
                                     * @example []
                                     */
                                    DiscountHighLight: unknown[];
                                    /**
                                     * @description Array of SKU gifts IDs.
                                     * @example []
                                     */
                                    GiftSkuIds: unknown[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "<Name>k__BackingField": "TesteInfoAdicional",
                                     *         "<GeneralValues>k__BackingField": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "<Conditions>k__BackingField": {
                                     *           "<MinimumQuantity>k__BackingField": 0,
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PaymentMethodId",
                                     *               "<Value>k__BackingField": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "<Effects>k__BackingField": {
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PercentualDiscount",
                                     *               "<Value>k__BackingField": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    Teasers: {
                                        /** @description Name. */
                                        "<Name>k__BackingField"?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        "<GeneralValues>k__BackingField"?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        "<Conditions>k__BackingField"?: {
                                            /** @description Minimum quantity. */
                                            "<MinimumQuantity>k__BackingField"?: number;
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        "<Effects>k__BackingField"?: {
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "Name": "TesteInfoAdicional",
                                     *         "GeneralValues": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "Conditions": {
                                     *           "MinimumQuantity": 0,
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PaymentMethodId",
                                     *               "Value": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "Effects": {
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PercentualDiscount",
                                     *               "Value": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    PromotionTeasers?: {
                                        /** @description Name. */
                                        Name?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        GeneralValues?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        Conditions?: {
                                            /** @description Minimum quantity. */
                                            MinimumQuantity?: number;
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        Effects?: {
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description Array of other products that can be bought together with the product in question.
                                     * @example []
                                     */
                                    BuyTogether: unknown[];
                                    /**
                                     * @description Item metadata attachment.
                                     * @example []
                                     */
                                    ItemMetadataAttachment: unknown[];
                                    /**
                                     * @description Price of the product.
                                     * @example 42
                                     */
                                    Price: number;
                                    /**
                                     * @description List price of the product.
                                     * @example 42
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description Price of the product without discount.
                                     * @example 42
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description Reward value of the product.
                                     * @example 0
                                     */
                                    RewardValue: number;
                                    /**
                                     * @description Price of the product valid until a certain date.
                                     * @example 4000-01-01T03:00:00Z
                                     */
                                    PriceValidUntil: string;
                                    /**
                                     * @description Use the `IsAvailable` field instead.
                                     * @example 16
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description If the product is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                    /**
                                     * @description Tax of the product.
                                     * @example 0
                                     */
                                    Tax: number;
                                    /**
                                     * @description Trade policy which the product is contained.
                                     * @example 0
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description Delivery SLA samples.
                                     * @example [
                                     *       {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": null
                                     *       }
                                     *     ]
                                     */
                                    DeliverySlaSamples: {
                                        /**
                                         * @description Delivery SLA per types.
                                         * @example []
                                         */
                                        DeliverySlaPerTypes: unknown[];
                                        /**
                                         * @description Region.
                                         * @example null
                                         */
                                        Region: string | null;
                                    }[];
                                    /**
                                     * @description Get info error message.
                                     * @example null
                                     */
                                    GetInfoErrorMessage: string | null;
                                    /**
                                     * @description Cache version used to call checkout.
                                     * @example 95EF7E5476DF276E679167A399FE3103_
                                     */
                                    CacheVersionUsedToCallCheckout: string;
                                    /**
                                     * @description Payment options.
                                     * @example {
                                     *       "installmentOptions": [
                                     *         {
                                     *           "paymentSystem": "2",
                                     *           "bin": null,
                                     *           "paymentName": "Visa",
                                     *           "paymentGroupName": "creditCardPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 2,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 2100,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 2,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 2100,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 3,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1400,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 3,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1400,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 4,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1050,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 4,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1050,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         },
                                     *         {
                                     *           "paymentSystem": "17",
                                     *           "bin": null,
                                     *           "paymentName": "Promissory",
                                     *           "paymentGroupName": "promissoryPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         }
                                     *       ],
                                     *       "paymentSystems": [
                                     *         {
                                     *           "id": 17,
                                     *           "name": "Promissory",
                                     *           "groupName": "promissoryPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "17",
                                     *           "template": "promissoryPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         },
                                     *         {
                                     *           "id": 2,
                                     *           "name": "Visa",
                                     *           "groupName": "creditCardPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "2",
                                     *           "template": "creditCardPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         }
                                     *       ],
                                     *       "payments": [],
                                     *       "giftCards": [],
                                     *       "giftCardMessages": [],
                                     *       "availableAccounts": [],
                                     *       "availableTokens": []
                                     *     }
                                     */
                                    PaymentOptions: {
                                        /**
                                         * @description installment options.
                                         * @example [
                                         *       {
                                         *         "paymentSystem": "2",
                                         *         "bin": null,
                                         *         "paymentName": "Visa",
                                         *         "paymentGroupName": "creditCardPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 2,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 2100,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 2,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 2100,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 3,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1400,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 3,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1400,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 4,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1050,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 4,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1050,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       },
                                         *       {
                                         *         "paymentSystem": "17",
                                         *         "bin": null,
                                         *         "paymentName": "Promissory",
                                         *         "paymentGroupName": "promissoryPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       }
                                         *     ]
                                         */
                                        installmentOptions: {
                                            /**
                                             * @description Payment system.
                                             * @example 2
                                             */
                                            paymentSystem: string;
                                            /**
                                             * @description Bin.
                                             * @example null
                                             */
                                            bin: string | null;
                                            /**
                                             * @description Payment name.
                                             * @example Visa
                                             */
                                            paymentName: string;
                                            /**
                                             * @description Payment group name.
                                             * @example creditCardPaymentGroup
                                             */
                                            paymentGroupName: string;
                                            /**
                                             * @description Value.
                                             * @example 4200
                                             */
                                            value: number;
                                            /**
                                             * @description Installments.
                                             * @example [
                                             *       {
                                             *         "count": 1,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 4200,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 1,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 4200,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       },
                                             *       {
                                             *         "count": 2,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 2100,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 2,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 2100,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       }
                                             *     ]
                                             */
                                            installments: {
                                                /**
                                                 * @description Count.
                                                 * @example 1
                                                 */
                                                count: number;
                                                /**
                                                 * @description Has interest rate.
                                                 * @example false
                                                 */
                                                hasInterestRate: boolean;
                                                /**
                                                 * @description Interest rate.
                                                 * @example 0
                                                 */
                                                interestRate: number;
                                                /**
                                                 * @description Value.
                                                 * @example 4200
                                                 */
                                                value: number;
                                                /**
                                                 * @description Total.
                                                 * @example 4200
                                                 */
                                                total: number;
                                                /**
                                                 * @description Seller merchant installments.
                                                 * @example [
                                                 *       {
                                                 *         "id": "MERCH",
                                                 *         "count": 1,
                                                 *         "hasInterestRate": false,
                                                 *         "interestRate": 0,
                                                 *         "value": 4200,
                                                 *         "total": 4200
                                                 *       }
                                                 *     ]
                                                 */
                                                sellerMerchantInstallments: {
                                                    /**
                                                     * @description ID.
                                                     * @example MERCH
                                                     */
                                                    id: string;
                                                    /**
                                                     * @description Count.
                                                     * @example 1
                                                     */
                                                    count: number;
                                                    /**
                                                     * @description Has interest rate.
                                                     * @example false
                                                     */
                                                    hasInterestRate: boolean;
                                                    /**
                                                     * @description Interest rate.
                                                     * @example 0
                                                     */
                                                    interestRate: number;
                                                    /**
                                                     * @description Value.
                                                     * @example 4200
                                                     */
                                                    value: number;
                                                    /**
                                                     * @description Total.
                                                     * @example 4200
                                                     */
                                                    total: number;
                                                }[];
                                            }[];
                                        }[];
                                        /**
                                         * @description Payment systems.
                                         * @example [
                                         *       {
                                         *         "id": 17,
                                         *         "name": "Promissory",
                                         *         "groupName": "promissoryPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "17",
                                         *         "template": "promissoryPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       },
                                         *       {
                                         *         "id": 2,
                                         *         "name": "Visa",
                                         *         "groupName": "creditCardPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "2",
                                         *         "template": "creditCardPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       }
                                         *     ]
                                         */
                                        paymentSystems: {
                                            /**
                                             * @description ID.
                                             * @example 17
                                             */
                                            id: number;
                                            /**
                                             * @description Name.
                                             * @example Promissory
                                             */
                                            name: string;
                                            /**
                                             * @description Group name.
                                             * @example promissoryPaymentGroup
                                             */
                                            groupName: string;
                                            /**
                                             * @description Validator.
                                             * @example
                                             */
                                            validator: string | null;
                                            /**
                                             * @description String ID.
                                             * @example 17
                                             */
                                            stringId: string;
                                            /**
                                             * @description Template.
                                             * @example promissoryPaymentGroup-template
                                             */
                                            template: string;
                                            /**
                                             * @description If requires document or not.
                                             * @example false
                                             */
                                            requiresDocument: boolean;
                                            /**
                                             * @description If is custom or not.
                                             * @example false
                                             */
                                            isCustom: boolean;
                                            /**
                                             * @description Description.
                                             * @example
                                             */
                                            description: string | null;
                                            /**
                                             * @description If requires authentication.
                                             * @example false
                                             */
                                            requiresAuthentication: boolean;
                                            /**
                                             * @description Due date.
                                             * @example 2021-07-01T18:43:00.0264384Z
                                             */
                                            dueDate: string;
                                            /**
                                             * @description Available payments.
                                             * @example
                                             */
                                            availablePayments: string | null;
                                        }[];
                                        /**
                                         * @description Payments.
                                         * @example []
                                         */
                                        payments: unknown[];
                                        /**
                                         * @description GiftCards.
                                         * @example []
                                         */
                                        giftCards: unknown[];
                                        /**
                                         * @description GiftCardMessages.
                                         * @example []
                                         */
                                        giftCardMessages: unknown[];
                                        /**
                                         * @description Available accounts.
                                         * @example []
                                         */
                                        availableAccounts: unknown[];
                                        /**
                                         * @description Available tokens.
                                         * @example []
                                         */
                                        availableTokens: unknown[];
                                    };
                                };
                            }[];
                            /**
                             * @description Videos.
                             * @example []
                             */
                            Videos: unknown[];
                            /**
                             * @description Estimated date arrival.
                             * @example
                             */
                            estimatedDateArrival: string | null;
                        }[];
                    }[];
                };
            };
        };
    };
    ProductSearchWhoBoughtAlsoBought: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product unique identifier. */
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
                        /**
                         * @description Product unique identifier.
                         * @example 35
                         */
                        productId: string;
                        /**
                         * @description Product name.
                         * @example Kit de Hoegaarden
                         */
                        productName: string;
                        /**
                         * @description Brand name.
                         * @example Hoegaarden
                         */
                        brand: string;
                        /**
                         * @description Product brand ID.
                         * @example 2000004
                         */
                        brandId: number;
                        /**
                         * @description Product's brand image URL.
                         * @example https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg
                         */
                        brandImageUrl: string;
                        /**
                         * @description Product URL.
                         * @example kit-6-cerveja-hoegaarden
                         */
                        linkText: string;
                        /**
                         * @description Product reference.
                         * @example 000806
                         */
                        productReference: string;
                        /**
                         * @description Product reference ID.
                         * @example 1234
                         */
                        productReferenceCode: number | null;
                        /**
                         * @description Product category ID.
                         * @example 1
                         */
                        categoryId: string;
                        /**
                         * @description Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Kit 6 cerveja Hoegaarden
                         */
                        productTitle: string;
                        /**
                         * @description Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
                         * @example Category for Beers
                         */
                        metaTagDescription: string;
                        /**
                         * @description Product release date.
                         * @example 2020-10-07T00:00:00
                         */
                        releaseDate: string;
                        /**
                         * @description Cluster highlight ID and name.
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        clusterHighlights: Record<string, never>;
                        /**
                         * @description Product clusters' IDs and names.
                         * @example {
                         *       "138": "teste2",
                         *       "143": "NaoPesquisavel",
                         *       "146": "colecaotestesubcategoria",
                         *       "161": "merch_import_test1"
                         *     }
                         */
                        productClusters: Record<string, never>;
                        /**
                         * @description Searchable clusters IDs and names
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        searchableClusters: Record<string, never>;
                        /**
                         * @description Array of the product's categories URLs.
                         * @example [
                         *       "/Beers Beers Mesmo/"
                         *     ]
                         */
                        categories: unknown[];
                        /**
                         * @description Array of the product's categories IDs.
                         * @example [
                         *       "/1/"
                         *     ]
                         */
                        categoriesIds: unknown[];
                        /**
                         * @description Product URL.
                         * @example https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p
                         */
                        link: string;
                        /**
                         * @description Array of the product's specifications.
                         * @example [
                         *       "Percentuals",
                         *       "Percentual"
                         *     ]
                         */
                        allSpecifications: string[];
                        /**
                         * @description Array of the product's specifications groups.
                         * @example [
                         *       "Total",
                         *       "Teste da Api2"
                         *     ]
                         */
                        allSpecificationsGroups: string[];
                        /**
                         * @description Description of the main information related to the product. A simple and easy to understand summary for the customer.
                         * @example Description example
                         */
                        description: string | null;
                        /**
                         * @description Array containing the product SKU general information.
                         * @example [
                         *       {
                         *         "itemId": "310118469",
                         *         "name": "Kit com 6",
                         *         "nameComplete": "Kit de Hoegaarden Kit com 6",
                         *         "complementName": "",
                         *         "ean": "",
                         *         "referenceId": [
                         *           {
                         *             "Key": "RefId",
                         *             "Value": "000806"
                         *           }
                         *         ],
                         *         "measurementUnit": "un",
                         *         "unitMultiplier": 1,
                         *         "modalType": null,
                         *         "isKit": true,
                         *         "kitItems": [
                         *           {
                         *             "itemId": "310118466",
                         *             "amount": 6
                         *           }
                         *         ],
                         *         "images": [
                         *           {
                         *             "imageId": "155489",
                         *             "imageLabel": "",
                         *             "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                         *             "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                         *             "imageText": "hoegaarden-kit",
                         *             "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                         *           }
                         *         ],
                         *         "sellers": [
                         *           {
                         *             "sellerId": "1",
                         *             "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                         *             "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                         *             "sellerDefault": true,
                         *             "commertialOffer": {
                         *               "DeliverySlaSamplesPerRegion": {
                         *                 "0": {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               },
                         *               "Installments": [
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa à vista"
                         *                 },
                         *                 {
                         *                   "Value": 21,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 2,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 2 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 14,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 3,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 3 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 10.5,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 4,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 4 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Promissory",
                         *                   "PaymentSystemGroupName": "promissoryPaymentGroup",
                         *                   "Name": "Promissory à vista"
                         *                 }
                         *               ],
                         *               "DiscountHighLight": [],
                         *               "GiftSkuIds": [],
                         *               "Teasers": [
                         *                 {
                         *                   "<Name>k__BackingField": "TesteInfoAdicional",
                         *                   "<GeneralValues>k__BackingField": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "<Conditions>k__BackingField": {
                         *                     "<MinimumQuantity>k__BackingField": 0,
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PaymentMethodId",
                         *                         "<Value>k__BackingField": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "<Effects>k__BackingField": {
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PercentualDiscount",
                         *                         "<Value>k__BackingField": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "PromotionTeasers": [
                         *                 {
                         *                   "Name": "TesteInfoAdicional",
                         *                   "GeneralValues": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "Conditions": {
                         *                     "MinimumQuantity": 0,
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PaymentMethodId",
                         *                         "Value": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "Effects": {
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PercentualDiscount",
                         *                         "Value": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "BuyTogether": [],
                         *               "ItemMetadataAttachment": [],
                         *               "Price": 42,
                         *               "ListPrice": 42,
                         *               "PriceWithoutDiscount": 42,
                         *               "RewardValue": 0,
                         *               "PriceValidUntil": "4000-01-01T03:00:00Z",
                         *               "AvailableQuantity": 16,
                         *               "IsAvailable": true,
                         *               "Tax": 0,
                         *               "SaleChannel": 0,
                         *               "DeliverySlaSamples": [
                         *                 {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               ],
                         *               "GetInfoErrorMessage": null,
                         *               "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                         *               "PaymentOptions": {
                         *                 "installmentOptions": [
                         *                   {
                         *                     "paymentSystem": "2",
                         *                     "bin": null,
                         *                     "paymentName": "Visa",
                         *                     "paymentGroupName": "creditCardPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 2,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 2100,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 2,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 2100,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 3,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1400,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 3,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1400,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 4,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1050,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 4,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1050,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   },
                         *                   {
                         *                     "paymentSystem": "17",
                         *                     "bin": null,
                         *                     "paymentName": "Promissory",
                         *                     "paymentGroupName": "promissoryPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   }
                         *                 ],
                         *                 "paymentSystems": [
                         *                   {
                         *                     "id": 17,
                         *                     "name": "Promissory",
                         *                     "groupName": "promissoryPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "17",
                         *                     "template": "promissoryPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   },
                         *                   {
                         *                     "id": 2,
                         *                     "name": "Visa",
                         *                     "groupName": "creditCardPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "2",
                         *                     "template": "creditCardPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   }
                         *                 ],
                         *                 "payments": [],
                         *                 "giftCards": [],
                         *                 "giftCardMessages": [],
                         *                 "availableAccounts": [],
                         *                 "availableTokens": []
                         *               }
                         *             }
                         *           }
                         *         ],
                         *         "Videos": [],
                         *         "estimatedDateArrival": null
                         *       }
                         *     ]
                         */
                        items: {
                            /**
                             * @description SKU ID.
                             * @example 310118469
                             */
                            itemId: string;
                            /**
                             * @description SKU name.
                             * @example Kit com 6
                             */
                            name: string;
                            /**
                             * @description SKU complete name.
                             * @example Kit de Hoegaarden Kit com 6
                             */
                            nameComplete: string;
                            /**
                             * @description SKU complement name.
                             * @example Complement name
                             */
                            complementName: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 12345567
                             */
                            ean: string;
                            /**
                             * @description Reference code ID.
                             * @example [
                             *       {
                             *         "Key": "RefId",
                             *         "Value": "000806"
                             *       }
                             *     ]
                             */
                            referenceId: {
                                /**
                                 * @description Reference Code.
                                 * @example RefId
                                 */
                                Key: string;
                                /**
                                 * @description Unique reference code used internally for organizational purposes.
                                 * @example 000806
                                 */
                                Value: string;
                            }[];
                            /**
                             * @description Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
                             * @example un
                             */
                            measurementUnit: string;
                            /**
                             * @description numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
                             * @example 1
                             */
                            unitMultiplier: number;
                            /**
                             * @description Modal Type.
                             * @example Modal Type test
                             */
                            modalType: string | null;
                            /**
                             * @description If the SKU is part of a kit.
                             * @example true
                             */
                            isKit: boolean;
                            /**
                             * @description Array with information of SKUs components from a Kit.
                             * @example [
                             *       {
                             *         "itemId": "310118466",
                             *         "amount": 6
                             *       }
                             *     ]
                             */
                            kitItems: {
                                /**
                                 * @description SKU kit component ID.
                                 * @example 310118466
                                 */
                                itemId: string;
                                /**
                                 * @description Amount of the SKU component in the kit.
                                 * @example 6
                                 */
                                amount: number;
                            }[];
                            /**
                             * @description Array of information about the SKU image.
                             * @example [
                             *       {
                             *         "imageId": "155489",
                             *         "imageLabel": "",
                             *         "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                             *         "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                             *         "imageText": "hoegaarden-kit",
                             *         "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                             *       }
                             *     ]
                             */
                            images: {
                                /**
                                 * @description Image ID.
                                 * @example 155489
                                 */
                                imageId: string;
                                /**
                                 * @description Image label.
                                 * @example Label test
                                 */
                                imageLabel: string;
                                /**
                                 * @description Image tag.
                                 * @example <img src="~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000" width="#width#" height="#height#" alt="hoegaarden-kit" id="" />
                                 */
                                imageTag: string;
                                /**
                                 * @description Image URL.
                                 * @example https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000
                                 */
                                imageUrl: string;
                                /**
                                 * @description Image text.
                                 * @example hoegaarden-kit
                                 */
                                imageText: string | null;
                                /**
                                 * @description Date and time of the last update of the image.
                                 * @example 2020-10-07T12:49:27.5800000Z
                                 */
                                imageLastModified: string;
                            }[];
                            /**
                             * @description Array of SKU sellers.
                             * @example [
                             *       {
                             *         "sellerId": "1",
                             *         "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                             *         "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                             *         "sellerDefault": true,
                             *         "commertialOffer": {
                             *           "DeliverySlaSamplesPerRegion": {
                             *             "0": {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           },
                             *           "Installments": [
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa à vista"
                             *             },
                             *             {
                             *               "Value": 21,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 2,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 2 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 14,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 3,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 3 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 10.5,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 4,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 4 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Promissory",
                             *               "PaymentSystemGroupName": "promissoryPaymentGroup",
                             *               "Name": "Promissory à vista"
                             *             }
                             *           ],
                             *           "DiscountHighLight": [],
                             *           "GiftSkuIds": [],
                             *           "Teasers": [
                             *             {
                             *               "<Name>k__BackingField": "TesteInfoAdicional",
                             *               "<GeneralValues>k__BackingField": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "<Conditions>k__BackingField": {
                             *                 "<MinimumQuantity>k__BackingField": 0,
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PaymentMethodId",
                             *                     "<Value>k__BackingField": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "<Effects>k__BackingField": {
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PercentualDiscount",
                             *                     "<Value>k__BackingField": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "PromotionTeasers": [
                             *             {
                             *               "Name": "TesteInfoAdicional",
                             *               "GeneralValues": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "Conditions": {
                             *                 "MinimumQuantity": 0,
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PaymentMethodId",
                             *                     "Value": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "Effects": {
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PercentualDiscount",
                             *                     "Value": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "BuyTogether": [],
                             *           "ItemMetadataAttachment": [],
                             *           "Price": 42,
                             *           "ListPrice": 42,
                             *           "PriceWithoutDiscount": 42,
                             *           "RewardValue": 0,
                             *           "PriceValidUntil": "4000-01-01T03:00:00Z",
                             *           "AvailableQuantity": 16,
                             *           "IsAvailable": true,
                             *           "Tax": 0,
                             *           "SaleChannel": 0,
                             *           "DeliverySlaSamples": [
                             *             {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           ],
                             *           "GetInfoErrorMessage": null,
                             *           "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                             *           "PaymentOptions": {
                             *             "installmentOptions": [
                             *               {
                             *                 "paymentSystem": "2",
                             *                 "bin": null,
                             *                 "paymentName": "Visa",
                             *                 "paymentGroupName": "creditCardPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 2,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 2100,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 2,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 2100,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 3,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1400,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 3,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1400,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 4,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1050,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 4,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1050,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               },
                             *               {
                             *                 "paymentSystem": "17",
                             *                 "bin": null,
                             *                 "paymentName": "Promissory",
                             *                 "paymentGroupName": "promissoryPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               }
                             *             ],
                             *             "paymentSystems": [
                             *               {
                             *                 "id": 17,
                             *                 "name": "Promissory",
                             *                 "groupName": "promissoryPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "17",
                             *                 "template": "promissoryPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               },
                             *               {
                             *                 "id": 2,
                             *                 "name": "Visa",
                             *                 "groupName": "creditCardPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "2",
                             *                 "template": "creditCardPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               }
                             *             ],
                             *             "payments": [],
                             *             "giftCards": [],
                             *             "giftCardMessages": [],
                             *             "availableAccounts": [],
                             *             "availableTokens": []
                             *           }
                             *         }
                             *       }
                             *     ]
                             */
                            sellers: {
                                /**
                                 * @description SKU seller ID.
                                 * @example 1
                                 */
                                sellerId: string;
                                /**
                                 * @description SKU seller name.
                                 * @example COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE
                                 */
                                sellerName: string;
                                /**
                                 * @description URL to add the product to the cart.
                                 * @example https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1
                                 */
                                addToCartLink: string;
                                /**
                                 * @description If the seller is default or not.
                                 * @example true
                                 */
                                sellerDefault: boolean;
                                /**
                                 * @description AKA Commertial Condition.
                                 * @example {
                                 *       "DeliverySlaSamplesPerRegion": {
                                 *         "0": {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       },
                                 *       "Installments": [
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa à vista"
                                 *         },
                                 *         {
                                 *           "Value": 21,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 2,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 2 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 14,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 3,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 3 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 10.5,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 4,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 4 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Promissory",
                                 *           "PaymentSystemGroupName": "promissoryPaymentGroup",
                                 *           "Name": "Promissory à vista"
                                 *         }
                                 *       ],
                                 *       "DiscountHighLight": [],
                                 *       "GiftSkuIds": [],
                                 *       "Teasers": [
                                 *         {
                                 *           "<Name>k__BackingField": "TesteInfoAdicional",
                                 *           "<GeneralValues>k__BackingField": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "<Conditions>k__BackingField": {
                                 *             "<MinimumQuantity>k__BackingField": 0,
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PaymentMethodId",
                                 *                 "<Value>k__BackingField": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "<Effects>k__BackingField": {
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PercentualDiscount",
                                 *                 "<Value>k__BackingField": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "PromotionTeasers": [
                                 *         {
                                 *           "Name": "TesteInfoAdicional",
                                 *           "GeneralValues": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "Conditions": {
                                 *             "MinimumQuantity": 0,
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PaymentMethodId",
                                 *                 "Value": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "Effects": {
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PercentualDiscount",
                                 *                 "Value": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "BuyTogether": [],
                                 *       "ItemMetadataAttachment": [],
                                 *       "Price": 42,
                                 *       "ListPrice": 42,
                                 *       "PriceWithoutDiscount": 42,
                                 *       "RewardValue": 0,
                                 *       "PriceValidUntil": "4000-01-01T03:00:00Z",
                                 *       "AvailableQuantity": 16,
                                 *       "IsAvailable": true,
                                 *       "Tax": 0,
                                 *       "SaleChannel": 0,
                                 *       "DeliverySlaSamples": [
                                 *         {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       ],
                                 *       "GetInfoErrorMessage": null,
                                 *       "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                                 *       "PaymentOptions": {
                                 *         "installmentOptions": [
                                 *           {
                                 *             "paymentSystem": "2",
                                 *             "bin": null,
                                 *             "paymentName": "Visa",
                                 *             "paymentGroupName": "creditCardPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 2,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 2100,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 2,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 2100,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 3,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1400,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 3,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1400,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 4,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1050,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 4,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1050,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           },
                                 *           {
                                 *             "paymentSystem": "17",
                                 *             "bin": null,
                                 *             "paymentName": "Promissory",
                                 *             "paymentGroupName": "promissoryPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           }
                                 *         ],
                                 *         "paymentSystems": [
                                 *           {
                                 *             "id": 17,
                                 *             "name": "Promissory",
                                 *             "groupName": "promissoryPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "17",
                                 *             "template": "promissoryPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           },
                                 *           {
                                 *             "id": 2,
                                 *             "name": "Visa",
                                 *             "groupName": "creditCardPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "2",
                                 *             "template": "creditCardPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           }
                                 *         ],
                                 *         "payments": [],
                                 *         "giftCards": [],
                                 *         "giftCardMessages": [],
                                 *         "availableAccounts": [],
                                 *         "availableTokens": []
                                 *       }
                                 *     }
                                 */
                                commertialOffer: {
                                    /**
                                     * @description Delivery SLA samples per region.
                                     * @example {
                                     *       "0": {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": "null"
                                     *       }
                                     *     }
                                     */
                                    DeliverySlaSamplesPerRegion: {
                                        /**
                                         * @description Delivery SLA ID.
                                         * @example {
                                         *       "DeliverySlaPerTypes": [],
                                         *       "Region": null
                                         *     }
                                         */
                                        0?: {
                                            /**
                                             * @description Delivery SLA per types.
                                             * @example []
                                             */
                                            DeliverySlaPerTypes: unknown[];
                                            /**
                                             * @description Region.
                                             * @example
                                             */
                                            Region: string | null;
                                        };
                                    };
                                    /**
                                     * @description Installments options.
                                     * @example [
                                     *       {
                                     *         "Value": 42,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 1,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa à vista"
                                     *       },
                                     *       {
                                     *         "Value": 21,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 2,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa 2 vezes sem juros"
                                     *       }
                                     *     ]
                                     */
                                    Installments: {
                                        /**
                                         * @description Value of the installment.
                                         * @example 42
                                         */
                                        Value: number;
                                        /**
                                         * @description Interest rate of the installment.
                                         * @example 0
                                         */
                                        InterestRate: number;
                                        /**
                                         * @description Total value plus interest rate of the installment.
                                         * @example 42
                                         */
                                        TotalValuePlusInterestRate: number;
                                        /**
                                         * @description Number of the installment.
                                         * @example 1
                                         */
                                        NumberOfInstallments: number;
                                        /**
                                         * @description Payment system name of the installment.
                                         * @example Visa
                                         */
                                        PaymentSystemName: string;
                                        /**
                                         * @description Payment system group name of the installment.
                                         * @example creditCardPaymentGroup
                                         */
                                        PaymentSystemGroupName: string;
                                        /**
                                         * @description Name of the installment.
                                         * @example Visa à vista
                                         */
                                        Name: string;
                                    }[];
                                    /**
                                     * @description Discount hightlight.
                                     * @example []
                                     */
                                    DiscountHighLight: unknown[];
                                    /**
                                     * @description Array of SKU gifts IDs.
                                     * @example []
                                     */
                                    GiftSkuIds: unknown[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "<Name>k__BackingField": "TesteInfoAdicional",
                                     *         "<GeneralValues>k__BackingField": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "<Conditions>k__BackingField": {
                                     *           "<MinimumQuantity>k__BackingField": 0,
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PaymentMethodId",
                                     *               "<Value>k__BackingField": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "<Effects>k__BackingField": {
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PercentualDiscount",
                                     *               "<Value>k__BackingField": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    Teasers: {
                                        /** @description Name. */
                                        "<Name>k__BackingField"?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        "<GeneralValues>k__BackingField"?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        "<Conditions>k__BackingField"?: {
                                            /** @description Minimum quantity. */
                                            "<MinimumQuantity>k__BackingField"?: number;
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        "<Effects>k__BackingField"?: {
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "Name": "TesteInfoAdicional",
                                     *         "GeneralValues": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "Conditions": {
                                     *           "MinimumQuantity": 0,
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PaymentMethodId",
                                     *               "Value": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "Effects": {
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PercentualDiscount",
                                     *               "Value": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    PromotionTeasers?: {
                                        /** @description Name. */
                                        Name?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        GeneralValues?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        Conditions?: {
                                            /** @description Minimum quantity. */
                                            MinimumQuantity?: number;
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        Effects?: {
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description Array of other products that can be bought together with the product in question.
                                     * @example []
                                     */
                                    BuyTogether: unknown[];
                                    /**
                                     * @description Item metadata attachment.
                                     * @example []
                                     */
                                    ItemMetadataAttachment: unknown[];
                                    /**
                                     * @description Price of the product.
                                     * @example 42
                                     */
                                    Price: number;
                                    /**
                                     * @description List price of the product.
                                     * @example 42
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description Price of the product without discount.
                                     * @example 42
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description Reward value of the product.
                                     * @example 0
                                     */
                                    RewardValue: number;
                                    /**
                                     * @description Price of the product valid until a certain date.
                                     * @example 4000-01-01T03:00:00Z
                                     */
                                    PriceValidUntil: string;
                                    /**
                                     * @description Use the `IsAvailable` field instead.
                                     * @example 16
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description If the product is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                    /**
                                     * @description Tax of the product.
                                     * @example 0
                                     */
                                    Tax: number;
                                    /**
                                     * @description Trade policy which the product is contained.
                                     * @example 0
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description Delivery SLA samples.
                                     * @example [
                                     *       {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": null
                                     *       }
                                     *     ]
                                     */
                                    DeliverySlaSamples: {
                                        /**
                                         * @description Delivery SLA per types.
                                         * @example []
                                         */
                                        DeliverySlaPerTypes: unknown[];
                                        /**
                                         * @description Region.
                                         * @example null
                                         */
                                        Region: string | null;
                                    }[];
                                    /**
                                     * @description Get info error message.
                                     * @example null
                                     */
                                    GetInfoErrorMessage: string | null;
                                    /**
                                     * @description Cache version used to call checkout.
                                     * @example 95EF7E5476DF276E679167A399FE3103_
                                     */
                                    CacheVersionUsedToCallCheckout: string;
                                    /**
                                     * @description Payment options.
                                     * @example {
                                     *       "installmentOptions": [
                                     *         {
                                     *           "paymentSystem": "2",
                                     *           "bin": null,
                                     *           "paymentName": "Visa",
                                     *           "paymentGroupName": "creditCardPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 2,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 2100,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 2,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 2100,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 3,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1400,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 3,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1400,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 4,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1050,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 4,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1050,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         },
                                     *         {
                                     *           "paymentSystem": "17",
                                     *           "bin": null,
                                     *           "paymentName": "Promissory",
                                     *           "paymentGroupName": "promissoryPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         }
                                     *       ],
                                     *       "paymentSystems": [
                                     *         {
                                     *           "id": 17,
                                     *           "name": "Promissory",
                                     *           "groupName": "promissoryPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "17",
                                     *           "template": "promissoryPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         },
                                     *         {
                                     *           "id": 2,
                                     *           "name": "Visa",
                                     *           "groupName": "creditCardPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "2",
                                     *           "template": "creditCardPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         }
                                     *       ],
                                     *       "payments": [],
                                     *       "giftCards": [],
                                     *       "giftCardMessages": [],
                                     *       "availableAccounts": [],
                                     *       "availableTokens": []
                                     *     }
                                     */
                                    PaymentOptions: {
                                        /**
                                         * @description installment options.
                                         * @example [
                                         *       {
                                         *         "paymentSystem": "2",
                                         *         "bin": null,
                                         *         "paymentName": "Visa",
                                         *         "paymentGroupName": "creditCardPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 2,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 2100,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 2,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 2100,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 3,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1400,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 3,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1400,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 4,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1050,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 4,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1050,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       },
                                         *       {
                                         *         "paymentSystem": "17",
                                         *         "bin": null,
                                         *         "paymentName": "Promissory",
                                         *         "paymentGroupName": "promissoryPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       }
                                         *     ]
                                         */
                                        installmentOptions: {
                                            /**
                                             * @description Payment system.
                                             * @example 2
                                             */
                                            paymentSystem: string;
                                            /**
                                             * @description Bin.
                                             * @example null
                                             */
                                            bin: string | null;
                                            /**
                                             * @description Payment name.
                                             * @example Visa
                                             */
                                            paymentName: string;
                                            /**
                                             * @description Payment group name.
                                             * @example creditCardPaymentGroup
                                             */
                                            paymentGroupName: string;
                                            /**
                                             * @description Value.
                                             * @example 4200
                                             */
                                            value: number;
                                            /**
                                             * @description Installments.
                                             * @example [
                                             *       {
                                             *         "count": 1,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 4200,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 1,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 4200,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       },
                                             *       {
                                             *         "count": 2,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 2100,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 2,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 2100,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       }
                                             *     ]
                                             */
                                            installments: {
                                                /**
                                                 * @description Count.
                                                 * @example 1
                                                 */
                                                count: number;
                                                /**
                                                 * @description Has interest rate.
                                                 * @example false
                                                 */
                                                hasInterestRate: boolean;
                                                /**
                                                 * @description Interest rate.
                                                 * @example 0
                                                 */
                                                interestRate: number;
                                                /**
                                                 * @description Value.
                                                 * @example 4200
                                                 */
                                                value: number;
                                                /**
                                                 * @description Total.
                                                 * @example 4200
                                                 */
                                                total: number;
                                                /**
                                                 * @description Seller merchant installments.
                                                 * @example [
                                                 *       {
                                                 *         "id": "MERCH",
                                                 *         "count": 1,
                                                 *         "hasInterestRate": false,
                                                 *         "interestRate": 0,
                                                 *         "value": 4200,
                                                 *         "total": 4200
                                                 *       }
                                                 *     ]
                                                 */
                                                sellerMerchantInstallments: {
                                                    /**
                                                     * @description ID.
                                                     * @example MERCH
                                                     */
                                                    id: string;
                                                    /**
                                                     * @description Count.
                                                     * @example 1
                                                     */
                                                    count: number;
                                                    /**
                                                     * @description Has interest rate.
                                                     * @example false
                                                     */
                                                    hasInterestRate: boolean;
                                                    /**
                                                     * @description Interest rate.
                                                     * @example 0
                                                     */
                                                    interestRate: number;
                                                    /**
                                                     * @description Value.
                                                     * @example 4200
                                                     */
                                                    value: number;
                                                    /**
                                                     * @description Total.
                                                     * @example 4200
                                                     */
                                                    total: number;
                                                }[];
                                            }[];
                                        }[];
                                        /**
                                         * @description Payment systems.
                                         * @example [
                                         *       {
                                         *         "id": 17,
                                         *         "name": "Promissory",
                                         *         "groupName": "promissoryPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "17",
                                         *         "template": "promissoryPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       },
                                         *       {
                                         *         "id": 2,
                                         *         "name": "Visa",
                                         *         "groupName": "creditCardPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "2",
                                         *         "template": "creditCardPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       }
                                         *     ]
                                         */
                                        paymentSystems: {
                                            /**
                                             * @description ID.
                                             * @example 17
                                             */
                                            id: number;
                                            /**
                                             * @description Name.
                                             * @example Promissory
                                             */
                                            name: string;
                                            /**
                                             * @description Group name.
                                             * @example promissoryPaymentGroup
                                             */
                                            groupName: string;
                                            /**
                                             * @description Validator.
                                             * @example
                                             */
                                            validator: string | null;
                                            /**
                                             * @description String ID.
                                             * @example 17
                                             */
                                            stringId: string;
                                            /**
                                             * @description Template.
                                             * @example promissoryPaymentGroup-template
                                             */
                                            template: string;
                                            /**
                                             * @description If requires document or not.
                                             * @example false
                                             */
                                            requiresDocument: boolean;
                                            /**
                                             * @description If is custom or not.
                                             * @example false
                                             */
                                            isCustom: boolean;
                                            /**
                                             * @description Description.
                                             * @example
                                             */
                                            description: string | null;
                                            /**
                                             * @description If requires authentication.
                                             * @example false
                                             */
                                            requiresAuthentication: boolean;
                                            /**
                                             * @description Due date.
                                             * @example 2021-07-01T18:43:00.0264384Z
                                             */
                                            dueDate: string;
                                            /**
                                             * @description Available payments.
                                             * @example
                                             */
                                            availablePayments: string | null;
                                        }[];
                                        /**
                                         * @description Payments.
                                         * @example []
                                         */
                                        payments: unknown[];
                                        /**
                                         * @description GiftCards.
                                         * @example []
                                         */
                                        giftCards: unknown[];
                                        /**
                                         * @description GiftCardMessages.
                                         * @example []
                                         */
                                        giftCardMessages: unknown[];
                                        /**
                                         * @description Available accounts.
                                         * @example []
                                         */
                                        availableAccounts: unknown[];
                                        /**
                                         * @description Available tokens.
                                         * @example []
                                         */
                                        availableTokens: unknown[];
                                    };
                                };
                            }[];
                            /**
                             * @description Videos.
                             * @example []
                             */
                            Videos: unknown[];
                            /**
                             * @description Estimated date arrival.
                             * @example
                             */
                            estimatedDateArrival: string | null;
                        }[];
                    }[];
                };
            };
        };
    };
    ProductSearchShowTogether: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product's unique identifier */
                productId: number;
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
                content?: never;
            };
        };
    };
    ProductSearchAccessories: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product's unique identifier */
                productId: number;
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
                content?: never;
            };
        };
    };
    ProductSearchSimilars: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product's unique identifier */
                productId: number;
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
                content?: never;
            };
        };
    };
    ProductSearchSuggestions: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product's unique identifier */
                productId: number;
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
                content?: never;
            };
        };
    };
    ProductSearch: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Term used to search products */
                search: string;
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
                        /**
                         * @description Product unique identifier.
                         * @example 35
                         */
                        productId: string;
                        /**
                         * @description Product name.
                         * @example Kit de Hoegaarden
                         */
                        productName: string;
                        /**
                         * @description Brand name.
                         * @example Hoegaarden
                         */
                        brand: string;
                        /**
                         * @description Product brand ID.
                         * @example 2000004
                         */
                        brandId: number;
                        /**
                         * @description Product's brand image URL.
                         * @example https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg
                         */
                        brandImageUrl: string;
                        /**
                         * @description Product URL.
                         * @example kit-6-cerveja-hoegaarden
                         */
                        linkText: string;
                        /**
                         * @description Product reference.
                         * @example 000806
                         */
                        productReference: string;
                        /**
                         * @description Product reference ID.
                         * @example 1234
                         */
                        productReferenceCode: number | null;
                        /**
                         * @description Product category ID.
                         * @example 1
                         */
                        categoryId: string;
                        /**
                         * @description Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Kit 6 cerveja Hoegaarden
                         */
                        productTitle: string;
                        /**
                         * @description Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
                         * @example Category for Beers
                         */
                        metaTagDescription: string;
                        /**
                         * @description Product release date.
                         * @example 2020-10-07T00:00:00
                         */
                        releaseDate: string;
                        /**
                         * @description Cluster highlight ID and name.
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        clusterHighlights: Record<string, never>;
                        /**
                         * @description Product clusters' IDs and names.
                         * @example {
                         *       "138": "teste2",
                         *       "143": "NaoPesquisavel",
                         *       "146": "colecaotestesubcategoria",
                         *       "161": "merch_import_test1"
                         *     }
                         */
                        productClusters: Record<string, never>;
                        /**
                         * @description Searchable clusters IDs and names
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        searchableClusters: Record<string, never>;
                        /**
                         * @description Array of the product's categories URLs.
                         * @example [
                         *       "/Beers Beers Mesmo/"
                         *     ]
                         */
                        categories: unknown[];
                        /**
                         * @description Array of the product's categories IDs.
                         * @example [
                         *       "/1/"
                         *     ]
                         */
                        categoriesIds: unknown[];
                        /**
                         * @description Product URL.
                         * @example https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p
                         */
                        link: string;
                        /**
                         * @description Array of the product's specifications.
                         * @example [
                         *       "Percentuals",
                         *       "Percentual"
                         *     ]
                         */
                        allSpecifications: string[];
                        /**
                         * @description Array of the product's specifications groups.
                         * @example [
                         *       "Total",
                         *       "Teste da Api2"
                         *     ]
                         */
                        allSpecificationsGroups: string[];
                        /**
                         * @description Description of the main information related to the product. A simple and easy to understand summary for the customer.
                         * @example Description example
                         */
                        description: string | null;
                        /**
                         * @description Array containing the product SKU general information.
                         * @example [
                         *       {
                         *         "itemId": "310118469",
                         *         "name": "Kit com 6",
                         *         "nameComplete": "Kit de Hoegaarden Kit com 6",
                         *         "complementName": "",
                         *         "ean": "",
                         *         "referenceId": [
                         *           {
                         *             "Key": "RefId",
                         *             "Value": "000806"
                         *           }
                         *         ],
                         *         "measurementUnit": "un",
                         *         "unitMultiplier": 1,
                         *         "modalType": null,
                         *         "isKit": true,
                         *         "kitItems": [
                         *           {
                         *             "itemId": "310118466",
                         *             "amount": 6
                         *           }
                         *         ],
                         *         "images": [
                         *           {
                         *             "imageId": "155489",
                         *             "imageLabel": "",
                         *             "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                         *             "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                         *             "imageText": "hoegaarden-kit",
                         *             "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                         *           }
                         *         ],
                         *         "sellers": [
                         *           {
                         *             "sellerId": "1",
                         *             "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                         *             "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                         *             "sellerDefault": true,
                         *             "commertialOffer": {
                         *               "DeliverySlaSamplesPerRegion": {
                         *                 "0": {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               },
                         *               "Installments": [
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa à vista"
                         *                 },
                         *                 {
                         *                   "Value": 21,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 2,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 2 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 14,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 3,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 3 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 10.5,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 4,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 4 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Promissory",
                         *                   "PaymentSystemGroupName": "promissoryPaymentGroup",
                         *                   "Name": "Promissory à vista"
                         *                 }
                         *               ],
                         *               "DiscountHighLight": [],
                         *               "GiftSkuIds": [],
                         *               "Teasers": [
                         *                 {
                         *                   "<Name>k__BackingField": "TesteInfoAdicional",
                         *                   "<GeneralValues>k__BackingField": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "<Conditions>k__BackingField": {
                         *                     "<MinimumQuantity>k__BackingField": 0,
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PaymentMethodId",
                         *                         "<Value>k__BackingField": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "<Effects>k__BackingField": {
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PercentualDiscount",
                         *                         "<Value>k__BackingField": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "PromotionTeasers": [
                         *                 {
                         *                   "Name": "TesteInfoAdicional",
                         *                   "GeneralValues": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "Conditions": {
                         *                     "MinimumQuantity": 0,
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PaymentMethodId",
                         *                         "Value": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "Effects": {
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PercentualDiscount",
                         *                         "Value": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "BuyTogether": [],
                         *               "ItemMetadataAttachment": [],
                         *               "Price": 42,
                         *               "ListPrice": 42,
                         *               "PriceWithoutDiscount": 42,
                         *               "RewardValue": 0,
                         *               "PriceValidUntil": "4000-01-01T03:00:00Z",
                         *               "AvailableQuantity": 16,
                         *               "IsAvailable": true,
                         *               "Tax": 0,
                         *               "SaleChannel": 0,
                         *               "DeliverySlaSamples": [
                         *                 {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               ],
                         *               "GetInfoErrorMessage": null,
                         *               "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                         *               "PaymentOptions": {
                         *                 "installmentOptions": [
                         *                   {
                         *                     "paymentSystem": "2",
                         *                     "bin": null,
                         *                     "paymentName": "Visa",
                         *                     "paymentGroupName": "creditCardPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 2,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 2100,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 2,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 2100,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 3,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1400,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 3,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1400,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 4,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1050,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 4,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1050,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   },
                         *                   {
                         *                     "paymentSystem": "17",
                         *                     "bin": null,
                         *                     "paymentName": "Promissory",
                         *                     "paymentGroupName": "promissoryPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   }
                         *                 ],
                         *                 "paymentSystems": [
                         *                   {
                         *                     "id": 17,
                         *                     "name": "Promissory",
                         *                     "groupName": "promissoryPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "17",
                         *                     "template": "promissoryPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   },
                         *                   {
                         *                     "id": 2,
                         *                     "name": "Visa",
                         *                     "groupName": "creditCardPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "2",
                         *                     "template": "creditCardPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   }
                         *                 ],
                         *                 "payments": [],
                         *                 "giftCards": [],
                         *                 "giftCardMessages": [],
                         *                 "availableAccounts": [],
                         *                 "availableTokens": []
                         *               }
                         *             }
                         *           }
                         *         ],
                         *         "Videos": [],
                         *         "estimatedDateArrival": null
                         *       }
                         *     ]
                         */
                        items: {
                            /**
                             * @description SKU ID.
                             * @example 310118469
                             */
                            itemId: string;
                            /**
                             * @description SKU name.
                             * @example Kit com 6
                             */
                            name: string;
                            /**
                             * @description SKU complete name.
                             * @example Kit de Hoegaarden Kit com 6
                             */
                            nameComplete: string;
                            /**
                             * @description SKU complement name.
                             * @example Complement name
                             */
                            complementName: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 12345567
                             */
                            ean: string;
                            /**
                             * @description Reference code ID.
                             * @example [
                             *       {
                             *         "Key": "RefId",
                             *         "Value": "000806"
                             *       }
                             *     ]
                             */
                            referenceId: {
                                /**
                                 * @description Reference Code.
                                 * @example RefId
                                 */
                                Key: string;
                                /**
                                 * @description Unique reference code used internally for organizational purposes.
                                 * @example 000806
                                 */
                                Value: string;
                            }[];
                            /**
                             * @description Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
                             * @example un
                             */
                            measurementUnit: string;
                            /**
                             * @description numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
                             * @example 1
                             */
                            unitMultiplier: number;
                            /**
                             * @description Modal Type.
                             * @example Modal Type test
                             */
                            modalType: string | null;
                            /**
                             * @description If the SKU is part of a kit.
                             * @example true
                             */
                            isKit: boolean;
                            /**
                             * @description Array with information of SKUs components from a Kit.
                             * @example [
                             *       {
                             *         "itemId": "310118466",
                             *         "amount": 6
                             *       }
                             *     ]
                             */
                            kitItems: {
                                /**
                                 * @description SKU kit component ID.
                                 * @example 310118466
                                 */
                                itemId: string;
                                /**
                                 * @description Amount of the SKU component in the kit.
                                 * @example 6
                                 */
                                amount: number;
                            }[];
                            /**
                             * @description Array of information about the SKU image.
                             * @example [
                             *       {
                             *         "imageId": "155489",
                             *         "imageLabel": "",
                             *         "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                             *         "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                             *         "imageText": "hoegaarden-kit",
                             *         "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                             *       }
                             *     ]
                             */
                            images: {
                                /**
                                 * @description Image ID.
                                 * @example 155489
                                 */
                                imageId: string;
                                /**
                                 * @description Image label.
                                 * @example Label test
                                 */
                                imageLabel: string;
                                /**
                                 * @description Image tag.
                                 * @example <img src="~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000" width="#width#" height="#height#" alt="hoegaarden-kit" id="" />
                                 */
                                imageTag: string;
                                /**
                                 * @description Image URL.
                                 * @example https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000
                                 */
                                imageUrl: string;
                                /**
                                 * @description Image text.
                                 * @example hoegaarden-kit
                                 */
                                imageText: string | null;
                                /**
                                 * @description Date and time of the last update of the image.
                                 * @example 2020-10-07T12:49:27.5800000Z
                                 */
                                imageLastModified: string;
                            }[];
                            /**
                             * @description Array of SKU sellers.
                             * @example [
                             *       {
                             *         "sellerId": "1",
                             *         "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                             *         "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                             *         "sellerDefault": true,
                             *         "commertialOffer": {
                             *           "DeliverySlaSamplesPerRegion": {
                             *             "0": {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           },
                             *           "Installments": [
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa à vista"
                             *             },
                             *             {
                             *               "Value": 21,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 2,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 2 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 14,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 3,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 3 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 10.5,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 4,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 4 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Promissory",
                             *               "PaymentSystemGroupName": "promissoryPaymentGroup",
                             *               "Name": "Promissory à vista"
                             *             }
                             *           ],
                             *           "DiscountHighLight": [],
                             *           "GiftSkuIds": [],
                             *           "Teasers": [
                             *             {
                             *               "<Name>k__BackingField": "TesteInfoAdicional",
                             *               "<GeneralValues>k__BackingField": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "<Conditions>k__BackingField": {
                             *                 "<MinimumQuantity>k__BackingField": 0,
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PaymentMethodId",
                             *                     "<Value>k__BackingField": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "<Effects>k__BackingField": {
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PercentualDiscount",
                             *                     "<Value>k__BackingField": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "PromotionTeasers": [
                             *             {
                             *               "Name": "TesteInfoAdicional",
                             *               "GeneralValues": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "Conditions": {
                             *                 "MinimumQuantity": 0,
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PaymentMethodId",
                             *                     "Value": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "Effects": {
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PercentualDiscount",
                             *                     "Value": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "BuyTogether": [],
                             *           "ItemMetadataAttachment": [],
                             *           "Price": 42,
                             *           "ListPrice": 42,
                             *           "PriceWithoutDiscount": 42,
                             *           "RewardValue": 0,
                             *           "PriceValidUntil": "4000-01-01T03:00:00Z",
                             *           "AvailableQuantity": 16,
                             *           "IsAvailable": true,
                             *           "Tax": 0,
                             *           "SaleChannel": 0,
                             *           "DeliverySlaSamples": [
                             *             {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           ],
                             *           "GetInfoErrorMessage": null,
                             *           "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                             *           "PaymentOptions": {
                             *             "installmentOptions": [
                             *               {
                             *                 "paymentSystem": "2",
                             *                 "bin": null,
                             *                 "paymentName": "Visa",
                             *                 "paymentGroupName": "creditCardPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 2,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 2100,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 2,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 2100,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 3,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1400,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 3,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1400,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 4,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1050,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 4,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1050,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               },
                             *               {
                             *                 "paymentSystem": "17",
                             *                 "bin": null,
                             *                 "paymentName": "Promissory",
                             *                 "paymentGroupName": "promissoryPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               }
                             *             ],
                             *             "paymentSystems": [
                             *               {
                             *                 "id": 17,
                             *                 "name": "Promissory",
                             *                 "groupName": "promissoryPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "17",
                             *                 "template": "promissoryPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               },
                             *               {
                             *                 "id": 2,
                             *                 "name": "Visa",
                             *                 "groupName": "creditCardPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "2",
                             *                 "template": "creditCardPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               }
                             *             ],
                             *             "payments": [],
                             *             "giftCards": [],
                             *             "giftCardMessages": [],
                             *             "availableAccounts": [],
                             *             "availableTokens": []
                             *           }
                             *         }
                             *       }
                             *     ]
                             */
                            sellers: {
                                /**
                                 * @description SKU seller ID.
                                 * @example 1
                                 */
                                sellerId: string;
                                /**
                                 * @description SKU seller name.
                                 * @example COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE
                                 */
                                sellerName: string;
                                /**
                                 * @description URL to add the product to the cart.
                                 * @example https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1
                                 */
                                addToCartLink: string;
                                /**
                                 * @description If the seller is default or not.
                                 * @example true
                                 */
                                sellerDefault: boolean;
                                /**
                                 * @description AKA Commertial Condition.
                                 * @example {
                                 *       "DeliverySlaSamplesPerRegion": {
                                 *         "0": {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       },
                                 *       "Installments": [
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa à vista"
                                 *         },
                                 *         {
                                 *           "Value": 21,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 2,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 2 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 14,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 3,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 3 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 10.5,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 4,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 4 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Promissory",
                                 *           "PaymentSystemGroupName": "promissoryPaymentGroup",
                                 *           "Name": "Promissory à vista"
                                 *         }
                                 *       ],
                                 *       "DiscountHighLight": [],
                                 *       "GiftSkuIds": [],
                                 *       "Teasers": [
                                 *         {
                                 *           "<Name>k__BackingField": "TesteInfoAdicional",
                                 *           "<GeneralValues>k__BackingField": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "<Conditions>k__BackingField": {
                                 *             "<MinimumQuantity>k__BackingField": 0,
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PaymentMethodId",
                                 *                 "<Value>k__BackingField": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "<Effects>k__BackingField": {
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PercentualDiscount",
                                 *                 "<Value>k__BackingField": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "PromotionTeasers": [
                                 *         {
                                 *           "Name": "TesteInfoAdicional",
                                 *           "GeneralValues": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "Conditions": {
                                 *             "MinimumQuantity": 0,
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PaymentMethodId",
                                 *                 "Value": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "Effects": {
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PercentualDiscount",
                                 *                 "Value": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "BuyTogether": [],
                                 *       "ItemMetadataAttachment": [],
                                 *       "Price": 42,
                                 *       "ListPrice": 42,
                                 *       "PriceWithoutDiscount": 42,
                                 *       "RewardValue": 0,
                                 *       "PriceValidUntil": "4000-01-01T03:00:00Z",
                                 *       "AvailableQuantity": 16,
                                 *       "IsAvailable": true,
                                 *       "Tax": 0,
                                 *       "SaleChannel": 0,
                                 *       "DeliverySlaSamples": [
                                 *         {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       ],
                                 *       "GetInfoErrorMessage": null,
                                 *       "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                                 *       "PaymentOptions": {
                                 *         "installmentOptions": [
                                 *           {
                                 *             "paymentSystem": "2",
                                 *             "bin": null,
                                 *             "paymentName": "Visa",
                                 *             "paymentGroupName": "creditCardPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 2,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 2100,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 2,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 2100,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 3,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1400,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 3,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1400,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 4,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1050,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 4,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1050,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           },
                                 *           {
                                 *             "paymentSystem": "17",
                                 *             "bin": null,
                                 *             "paymentName": "Promissory",
                                 *             "paymentGroupName": "promissoryPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           }
                                 *         ],
                                 *         "paymentSystems": [
                                 *           {
                                 *             "id": 17,
                                 *             "name": "Promissory",
                                 *             "groupName": "promissoryPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "17",
                                 *             "template": "promissoryPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           },
                                 *           {
                                 *             "id": 2,
                                 *             "name": "Visa",
                                 *             "groupName": "creditCardPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "2",
                                 *             "template": "creditCardPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           }
                                 *         ],
                                 *         "payments": [],
                                 *         "giftCards": [],
                                 *         "giftCardMessages": [],
                                 *         "availableAccounts": [],
                                 *         "availableTokens": []
                                 *       }
                                 *     }
                                 */
                                commertialOffer: {
                                    /**
                                     * @description Delivery SLA samples per region.
                                     * @example {
                                     *       "0": {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": "null"
                                     *       }
                                     *     }
                                     */
                                    DeliverySlaSamplesPerRegion: {
                                        /**
                                         * @description Delivery SLA ID.
                                         * @example {
                                         *       "DeliverySlaPerTypes": [],
                                         *       "Region": null
                                         *     }
                                         */
                                        0?: {
                                            /**
                                             * @description Delivery SLA per types.
                                             * @example []
                                             */
                                            DeliverySlaPerTypes: unknown[];
                                            /**
                                             * @description Region.
                                             * @example
                                             */
                                            Region: string | null;
                                        };
                                    };
                                    /**
                                     * @description Installments options.
                                     * @example [
                                     *       {
                                     *         "Value": 42,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 1,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa à vista"
                                     *       },
                                     *       {
                                     *         "Value": 21,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 2,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa 2 vezes sem juros"
                                     *       }
                                     *     ]
                                     */
                                    Installments: {
                                        /**
                                         * @description Value of the installment.
                                         * @example 42
                                         */
                                        Value: number;
                                        /**
                                         * @description Interest rate of the installment.
                                         * @example 0
                                         */
                                        InterestRate: number;
                                        /**
                                         * @description Total value plus interest rate of the installment.
                                         * @example 42
                                         */
                                        TotalValuePlusInterestRate: number;
                                        /**
                                         * @description Number of the installment.
                                         * @example 1
                                         */
                                        NumberOfInstallments: number;
                                        /**
                                         * @description Payment system name of the installment.
                                         * @example Visa
                                         */
                                        PaymentSystemName: string;
                                        /**
                                         * @description Payment system group name of the installment.
                                         * @example creditCardPaymentGroup
                                         */
                                        PaymentSystemGroupName: string;
                                        /**
                                         * @description Name of the installment.
                                         * @example Visa à vista
                                         */
                                        Name: string;
                                    }[];
                                    /**
                                     * @description Discount hightlight.
                                     * @example []
                                     */
                                    DiscountHighLight: unknown[];
                                    /**
                                     * @description Array of SKU gifts IDs.
                                     * @example []
                                     */
                                    GiftSkuIds: unknown[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "<Name>k__BackingField": "TesteInfoAdicional",
                                     *         "<GeneralValues>k__BackingField": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "<Conditions>k__BackingField": {
                                     *           "<MinimumQuantity>k__BackingField": 0,
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PaymentMethodId",
                                     *               "<Value>k__BackingField": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "<Effects>k__BackingField": {
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PercentualDiscount",
                                     *               "<Value>k__BackingField": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    Teasers: {
                                        /** @description Name. */
                                        "<Name>k__BackingField"?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        "<GeneralValues>k__BackingField"?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        "<Conditions>k__BackingField"?: {
                                            /** @description Minimum quantity. */
                                            "<MinimumQuantity>k__BackingField"?: number;
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        "<Effects>k__BackingField"?: {
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "Name": "TesteInfoAdicional",
                                     *         "GeneralValues": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "Conditions": {
                                     *           "MinimumQuantity": 0,
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PaymentMethodId",
                                     *               "Value": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "Effects": {
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PercentualDiscount",
                                     *               "Value": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    PromotionTeasers?: {
                                        /** @description Name. */
                                        Name?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        GeneralValues?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        Conditions?: {
                                            /** @description Minimum quantity. */
                                            MinimumQuantity?: number;
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        Effects?: {
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description Array of other products that can be bought together with the product in question.
                                     * @example []
                                     */
                                    BuyTogether: unknown[];
                                    /**
                                     * @description Item metadata attachment.
                                     * @example []
                                     */
                                    ItemMetadataAttachment: unknown[];
                                    /**
                                     * @description Price of the product.
                                     * @example 42
                                     */
                                    Price: number;
                                    /**
                                     * @description List price of the product.
                                     * @example 42
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description Price of the product without discount.
                                     * @example 42
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description Reward value of the product.
                                     * @example 0
                                     */
                                    RewardValue: number;
                                    /**
                                     * @description Price of the product valid until a certain date.
                                     * @example 4000-01-01T03:00:00Z
                                     */
                                    PriceValidUntil: string;
                                    /**
                                     * @description Use the `IsAvailable` field instead.
                                     * @example 16
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description If the product is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                    /**
                                     * @description Tax of the product.
                                     * @example 0
                                     */
                                    Tax: number;
                                    /**
                                     * @description Trade policy which the product is contained.
                                     * @example 0
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description Delivery SLA samples.
                                     * @example [
                                     *       {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": null
                                     *       }
                                     *     ]
                                     */
                                    DeliverySlaSamples: {
                                        /**
                                         * @description Delivery SLA per types.
                                         * @example []
                                         */
                                        DeliverySlaPerTypes: unknown[];
                                        /**
                                         * @description Region.
                                         * @example null
                                         */
                                        Region: string | null;
                                    }[];
                                    /**
                                     * @description Get info error message.
                                     * @example null
                                     */
                                    GetInfoErrorMessage: string | null;
                                    /**
                                     * @description Cache version used to call checkout.
                                     * @example 95EF7E5476DF276E679167A399FE3103_
                                     */
                                    CacheVersionUsedToCallCheckout: string;
                                    /**
                                     * @description Payment options.
                                     * @example {
                                     *       "installmentOptions": [
                                     *         {
                                     *           "paymentSystem": "2",
                                     *           "bin": null,
                                     *           "paymentName": "Visa",
                                     *           "paymentGroupName": "creditCardPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 2,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 2100,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 2,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 2100,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 3,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1400,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 3,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1400,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 4,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1050,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 4,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1050,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         },
                                     *         {
                                     *           "paymentSystem": "17",
                                     *           "bin": null,
                                     *           "paymentName": "Promissory",
                                     *           "paymentGroupName": "promissoryPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         }
                                     *       ],
                                     *       "paymentSystems": [
                                     *         {
                                     *           "id": 17,
                                     *           "name": "Promissory",
                                     *           "groupName": "promissoryPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "17",
                                     *           "template": "promissoryPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         },
                                     *         {
                                     *           "id": 2,
                                     *           "name": "Visa",
                                     *           "groupName": "creditCardPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "2",
                                     *           "template": "creditCardPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         }
                                     *       ],
                                     *       "payments": [],
                                     *       "giftCards": [],
                                     *       "giftCardMessages": [],
                                     *       "availableAccounts": [],
                                     *       "availableTokens": []
                                     *     }
                                     */
                                    PaymentOptions: {
                                        /**
                                         * @description installment options.
                                         * @example [
                                         *       {
                                         *         "paymentSystem": "2",
                                         *         "bin": null,
                                         *         "paymentName": "Visa",
                                         *         "paymentGroupName": "creditCardPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 2,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 2100,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 2,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 2100,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 3,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1400,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 3,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1400,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 4,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1050,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 4,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1050,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       },
                                         *       {
                                         *         "paymentSystem": "17",
                                         *         "bin": null,
                                         *         "paymentName": "Promissory",
                                         *         "paymentGroupName": "promissoryPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       }
                                         *     ]
                                         */
                                        installmentOptions: {
                                            /**
                                             * @description Payment system.
                                             * @example 2
                                             */
                                            paymentSystem: string;
                                            /**
                                             * @description Bin.
                                             * @example null
                                             */
                                            bin: string | null;
                                            /**
                                             * @description Payment name.
                                             * @example Visa
                                             */
                                            paymentName: string;
                                            /**
                                             * @description Payment group name.
                                             * @example creditCardPaymentGroup
                                             */
                                            paymentGroupName: string;
                                            /**
                                             * @description Value.
                                             * @example 4200
                                             */
                                            value: number;
                                            /**
                                             * @description Installments.
                                             * @example [
                                             *       {
                                             *         "count": 1,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 4200,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 1,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 4200,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       },
                                             *       {
                                             *         "count": 2,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 2100,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 2,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 2100,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       }
                                             *     ]
                                             */
                                            installments: {
                                                /**
                                                 * @description Count.
                                                 * @example 1
                                                 */
                                                count: number;
                                                /**
                                                 * @description Has interest rate.
                                                 * @example false
                                                 */
                                                hasInterestRate: boolean;
                                                /**
                                                 * @description Interest rate.
                                                 * @example 0
                                                 */
                                                interestRate: number;
                                                /**
                                                 * @description Value.
                                                 * @example 4200
                                                 */
                                                value: number;
                                                /**
                                                 * @description Total.
                                                 * @example 4200
                                                 */
                                                total: number;
                                                /**
                                                 * @description Seller merchant installments.
                                                 * @example [
                                                 *       {
                                                 *         "id": "MERCH",
                                                 *         "count": 1,
                                                 *         "hasInterestRate": false,
                                                 *         "interestRate": 0,
                                                 *         "value": 4200,
                                                 *         "total": 4200
                                                 *       }
                                                 *     ]
                                                 */
                                                sellerMerchantInstallments: {
                                                    /**
                                                     * @description ID.
                                                     * @example MERCH
                                                     */
                                                    id: string;
                                                    /**
                                                     * @description Count.
                                                     * @example 1
                                                     */
                                                    count: number;
                                                    /**
                                                     * @description Has interest rate.
                                                     * @example false
                                                     */
                                                    hasInterestRate: boolean;
                                                    /**
                                                     * @description Interest rate.
                                                     * @example 0
                                                     */
                                                    interestRate: number;
                                                    /**
                                                     * @description Value.
                                                     * @example 4200
                                                     */
                                                    value: number;
                                                    /**
                                                     * @description Total.
                                                     * @example 4200
                                                     */
                                                    total: number;
                                                }[];
                                            }[];
                                        }[];
                                        /**
                                         * @description Payment systems.
                                         * @example [
                                         *       {
                                         *         "id": 17,
                                         *         "name": "Promissory",
                                         *         "groupName": "promissoryPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "17",
                                         *         "template": "promissoryPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       },
                                         *       {
                                         *         "id": 2,
                                         *         "name": "Visa",
                                         *         "groupName": "creditCardPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "2",
                                         *         "template": "creditCardPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       }
                                         *     ]
                                         */
                                        paymentSystems: {
                                            /**
                                             * @description ID.
                                             * @example 17
                                             */
                                            id: number;
                                            /**
                                             * @description Name.
                                             * @example Promissory
                                             */
                                            name: string;
                                            /**
                                             * @description Group name.
                                             * @example promissoryPaymentGroup
                                             */
                                            groupName: string;
                                            /**
                                             * @description Validator.
                                             * @example
                                             */
                                            validator: string | null;
                                            /**
                                             * @description String ID.
                                             * @example 17
                                             */
                                            stringId: string;
                                            /**
                                             * @description Template.
                                             * @example promissoryPaymentGroup-template
                                             */
                                            template: string;
                                            /**
                                             * @description If requires document or not.
                                             * @example false
                                             */
                                            requiresDocument: boolean;
                                            /**
                                             * @description If is custom or not.
                                             * @example false
                                             */
                                            isCustom: boolean;
                                            /**
                                             * @description Description.
                                             * @example
                                             */
                                            description: string | null;
                                            /**
                                             * @description If requires authentication.
                                             * @example false
                                             */
                                            requiresAuthentication: boolean;
                                            /**
                                             * @description Due date.
                                             * @example 2021-07-01T18:43:00.0264384Z
                                             */
                                            dueDate: string;
                                            /**
                                             * @description Available payments.
                                             * @example
                                             */
                                            availablePayments: string | null;
                                        }[];
                                        /**
                                         * @description Payments.
                                         * @example []
                                         */
                                        payments: unknown[];
                                        /**
                                         * @description GiftCards.
                                         * @example []
                                         */
                                        giftCards: unknown[];
                                        /**
                                         * @description GiftCardMessages.
                                         * @example []
                                         */
                                        giftCardMessages: unknown[];
                                        /**
                                         * @description Available accounts.
                                         * @example []
                                         */
                                        availableAccounts: unknown[];
                                        /**
                                         * @description Available tokens.
                                         * @example []
                                         */
                                        availableTokens: unknown[];
                                    };
                                };
                            }[];
                            /**
                             * @description Videos.
                             * @example []
                             */
                            Videos: unknown[];
                            /**
                             * @description Estimated date arrival.
                             * @example
                             */
                            estimatedDateArrival: string | null;
                        }[];
                    }[];
                };
            };
        };
    };
    ProductSearchFilteredandOrdered: {
        parameters: {
            query?: {
                /** @description Starting page of the pagination range. This number must be below or equal to 2500 for the query to work. Note that the difference between the initial and final pages cannot exceed 50 pages. Therefore, each page will display a maximum of 50 items. */
                _from?: string;
                /** @description Final page of the pagination range. Note that the difference between the initial and final pages cannot exceed 50 pages. Therefore, each page will display a maximum of 50 items. */
                _to?: string;
                /** @description Filter by full text. The form is`ft={searchWord}`. */
                ft?: string;
                /** @description General filter. It can be by category (`fq=C:/{a}/{b}`), by specification (`fq=specificationFilter_{a}:{b}`),  by price range (`fq=P:[{a} TO {b}]`), by collection (`fq=productClusterIds:{{productClusterId}}`), by product ID (`fq=productId:{{productId}}`),  by SKU ID (`fq=skuId:{{skuId}}`), by Reference ID (`fq=alternateIds_RefId:{{referenceId}}`), by EAN13 (`fq=alternateIds_Ean:{{ean13}}`), by availability at a specific sales channel (`fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`), by available at a specific seller (`fq=sellerId:{{sellerId}}`). */
                fq?: string;
                /** @description Sorting method. It can be by Price (`O=OrderByPriceDESC` or `O=OrderByPriceASC`), by Top Selling Products (`O=OrderByTopSaleDESC`), by Best Reviews (`O=OrderByReviewRateDESC`), by Name (`O=OrderByNameASC` or `O=OrderByNameDESC`), by Release Date (`O=OrderByReleaseDateDESC`), by Best Discounts (`O=OrderByBestDiscountDESC`), by Score (`O=OrderByScoreDESC`). */
                O?: string;
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
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Product unique identifier.
                         * @example 35
                         */
                        productId: string;
                        /**
                         * @description Product name.
                         * @example Kit de Hoegaarden
                         */
                        productName: string;
                        /**
                         * @description Brand name.
                         * @example Hoegaarden
                         */
                        brand: string;
                        /**
                         * @description Product brand ID.
                         * @example 2000004
                         */
                        brandId: number;
                        /**
                         * @description Product's brand image URL.
                         * @example https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg
                         */
                        brandImageUrl: string;
                        /**
                         * @description Product URL.
                         * @example kit-6-cerveja-hoegaarden
                         */
                        linkText: string;
                        /**
                         * @description Product reference.
                         * @example 000806
                         */
                        productReference: string;
                        /**
                         * @description Product reference ID.
                         * @example 1234
                         */
                        productReferenceCode: number | null;
                        /**
                         * @description Product category ID.
                         * @example 1
                         */
                        categoryId: string;
                        /**
                         * @description Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Kit 6 cerveja Hoegaarden
                         */
                        productTitle: string;
                        /**
                         * @description Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
                         * @example Category for Beers
                         */
                        metaTagDescription: string;
                        /**
                         * @description Product release date.
                         * @example 2020-10-07T00:00:00
                         */
                        releaseDate: string;
                        /**
                         * @description Cluster highlight ID and name.
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        clusterHighlights: Record<string, never>;
                        /**
                         * @description Product clusters' IDs and names.
                         * @example {
                         *       "138": "teste2",
                         *       "143": "NaoPesquisavel",
                         *       "146": "colecaotestesubcategoria",
                         *       "161": "merch_import_test1"
                         *     }
                         */
                        productClusters: Record<string, never>;
                        /**
                         * @description Searchable clusters IDs and names
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        searchableClusters: Record<string, never>;
                        /**
                         * @description Array of the product's categories URLs.
                         * @example [
                         *       "/Beers Beers Mesmo/"
                         *     ]
                         */
                        categories: unknown[];
                        /**
                         * @description Array of the product's categories IDs.
                         * @example [
                         *       "/1/"
                         *     ]
                         */
                        categoriesIds: unknown[];
                        /**
                         * @description Product URL.
                         * @example https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p
                         */
                        link: string;
                        /**
                         * @description Array of the product's specifications.
                         * @example [
                         *       "Percentuals",
                         *       "Percentual"
                         *     ]
                         */
                        allSpecifications: string[];
                        /**
                         * @description Array of the product's specifications groups.
                         * @example [
                         *       "Total",
                         *       "Teste da Api2"
                         *     ]
                         */
                        allSpecificationsGroups: string[];
                        /**
                         * @description Description of the main information related to the product. A simple and easy to understand summary for the customer.
                         * @example Description example
                         */
                        description: string | null;
                        /**
                         * @description Array containing the product SKU general information.
                         * @example [
                         *       {
                         *         "itemId": "310118469",
                         *         "name": "Kit com 6",
                         *         "nameComplete": "Kit de Hoegaarden Kit com 6",
                         *         "complementName": "",
                         *         "ean": "",
                         *         "referenceId": [
                         *           {
                         *             "Key": "RefId",
                         *             "Value": "000806"
                         *           }
                         *         ],
                         *         "measurementUnit": "un",
                         *         "unitMultiplier": 1,
                         *         "modalType": null,
                         *         "isKit": true,
                         *         "kitItems": [
                         *           {
                         *             "itemId": "310118466",
                         *             "amount": 6
                         *           }
                         *         ],
                         *         "images": [
                         *           {
                         *             "imageId": "155489",
                         *             "imageLabel": "",
                         *             "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                         *             "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                         *             "imageText": "hoegaarden-kit",
                         *             "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                         *           }
                         *         ],
                         *         "sellers": [
                         *           {
                         *             "sellerId": "1",
                         *             "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                         *             "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                         *             "sellerDefault": true,
                         *             "commertialOffer": {
                         *               "DeliverySlaSamplesPerRegion": {
                         *                 "0": {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               },
                         *               "Installments": [
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa à vista"
                         *                 },
                         *                 {
                         *                   "Value": 21,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 2,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 2 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 14,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 3,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 3 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 10.5,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 4,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 4 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Promissory",
                         *                   "PaymentSystemGroupName": "promissoryPaymentGroup",
                         *                   "Name": "Promissory à vista"
                         *                 }
                         *               ],
                         *               "DiscountHighLight": [],
                         *               "GiftSkuIds": [],
                         *               "Teasers": [
                         *                 {
                         *                   "<Name>k__BackingField": "TesteInfoAdicional",
                         *                   "<GeneralValues>k__BackingField": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "<Conditions>k__BackingField": {
                         *                     "<MinimumQuantity>k__BackingField": 0,
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PaymentMethodId",
                         *                         "<Value>k__BackingField": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "<Effects>k__BackingField": {
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PercentualDiscount",
                         *                         "<Value>k__BackingField": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "PromotionTeasers": [
                         *                 {
                         *                   "Name": "TesteInfoAdicional",
                         *                   "GeneralValues": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "Conditions": {
                         *                     "MinimumQuantity": 0,
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PaymentMethodId",
                         *                         "Value": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "Effects": {
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PercentualDiscount",
                         *                         "Value": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "BuyTogether": [],
                         *               "ItemMetadataAttachment": [],
                         *               "Price": 42,
                         *               "ListPrice": 42,
                         *               "PriceWithoutDiscount": 42,
                         *               "RewardValue": 0,
                         *               "PriceValidUntil": "4000-01-01T03:00:00Z",
                         *               "AvailableQuantity": 16,
                         *               "IsAvailable": true,
                         *               "Tax": 0,
                         *               "SaleChannel": 0,
                         *               "DeliverySlaSamples": [
                         *                 {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               ],
                         *               "GetInfoErrorMessage": null,
                         *               "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                         *               "PaymentOptions": {
                         *                 "installmentOptions": [
                         *                   {
                         *                     "paymentSystem": "2",
                         *                     "bin": null,
                         *                     "paymentName": "Visa",
                         *                     "paymentGroupName": "creditCardPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 2,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 2100,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 2,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 2100,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 3,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1400,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 3,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1400,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 4,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1050,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 4,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1050,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   },
                         *                   {
                         *                     "paymentSystem": "17",
                         *                     "bin": null,
                         *                     "paymentName": "Promissory",
                         *                     "paymentGroupName": "promissoryPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   }
                         *                 ],
                         *                 "paymentSystems": [
                         *                   {
                         *                     "id": 17,
                         *                     "name": "Promissory",
                         *                     "groupName": "promissoryPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "17",
                         *                     "template": "promissoryPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   },
                         *                   {
                         *                     "id": 2,
                         *                     "name": "Visa",
                         *                     "groupName": "creditCardPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "2",
                         *                     "template": "creditCardPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   }
                         *                 ],
                         *                 "payments": [],
                         *                 "giftCards": [],
                         *                 "giftCardMessages": [],
                         *                 "availableAccounts": [],
                         *                 "availableTokens": []
                         *               }
                         *             }
                         *           }
                         *         ],
                         *         "Videos": [],
                         *         "estimatedDateArrival": null
                         *       }
                         *     ]
                         */
                        items: {
                            /**
                             * @description SKU ID.
                             * @example 310118469
                             */
                            itemId: string;
                            /**
                             * @description SKU name.
                             * @example Kit com 6
                             */
                            name: string;
                            /**
                             * @description SKU complete name.
                             * @example Kit de Hoegaarden Kit com 6
                             */
                            nameComplete: string;
                            /**
                             * @description SKU complement name.
                             * @example Complement name
                             */
                            complementName: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 12345567
                             */
                            ean: string;
                            /**
                             * @description Reference code ID.
                             * @example [
                             *       {
                             *         "Key": "RefId",
                             *         "Value": "000806"
                             *       }
                             *     ]
                             */
                            referenceId: {
                                /**
                                 * @description Reference Code.
                                 * @example RefId
                                 */
                                Key: string;
                                /**
                                 * @description Unique reference code used internally for organizational purposes.
                                 * @example 000806
                                 */
                                Value: string;
                            }[];
                            /**
                             * @description Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
                             * @example un
                             */
                            measurementUnit: string;
                            /**
                             * @description numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
                             * @example 1
                             */
                            unitMultiplier: number;
                            /**
                             * @description Modal Type.
                             * @example Modal Type test
                             */
                            modalType: string | null;
                            /**
                             * @description If the SKU is part of a kit.
                             * @example true
                             */
                            isKit: boolean;
                            /**
                             * @description Array with information of SKUs components from a Kit.
                             * @example [
                             *       {
                             *         "itemId": "310118466",
                             *         "amount": 6
                             *       }
                             *     ]
                             */
                            kitItems: {
                                /**
                                 * @description SKU kit component ID.
                                 * @example 310118466
                                 */
                                itemId: string;
                                /**
                                 * @description Amount of the SKU component in the kit.
                                 * @example 6
                                 */
                                amount: number;
                            }[];
                            /**
                             * @description Array of information about the SKU image.
                             * @example [
                             *       {
                             *         "imageId": "155489",
                             *         "imageLabel": "",
                             *         "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                             *         "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                             *         "imageText": "hoegaarden-kit",
                             *         "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                             *       }
                             *     ]
                             */
                            images: {
                                /**
                                 * @description Image ID.
                                 * @example 155489
                                 */
                                imageId: string;
                                /**
                                 * @description Image label.
                                 * @example Label test
                                 */
                                imageLabel: string;
                                /**
                                 * @description Image tag.
                                 * @example <img src="~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000" width="#width#" height="#height#" alt="hoegaarden-kit" id="" />
                                 */
                                imageTag: string;
                                /**
                                 * @description Image URL.
                                 * @example https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000
                                 */
                                imageUrl: string;
                                /**
                                 * @description Image text.
                                 * @example hoegaarden-kit
                                 */
                                imageText: string | null;
                                /**
                                 * @description Date and time of the last update of the image.
                                 * @example 2020-10-07T12:49:27.5800000Z
                                 */
                                imageLastModified: string;
                            }[];
                            /**
                             * @description Array of SKU sellers.
                             * @example [
                             *       {
                             *         "sellerId": "1",
                             *         "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                             *         "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                             *         "sellerDefault": true,
                             *         "commertialOffer": {
                             *           "DeliverySlaSamplesPerRegion": {
                             *             "0": {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           },
                             *           "Installments": [
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa à vista"
                             *             },
                             *             {
                             *               "Value": 21,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 2,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 2 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 14,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 3,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 3 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 10.5,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 4,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 4 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Promissory",
                             *               "PaymentSystemGroupName": "promissoryPaymentGroup",
                             *               "Name": "Promissory à vista"
                             *             }
                             *           ],
                             *           "DiscountHighLight": [],
                             *           "GiftSkuIds": [],
                             *           "Teasers": [
                             *             {
                             *               "<Name>k__BackingField": "TesteInfoAdicional",
                             *               "<GeneralValues>k__BackingField": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "<Conditions>k__BackingField": {
                             *                 "<MinimumQuantity>k__BackingField": 0,
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PaymentMethodId",
                             *                     "<Value>k__BackingField": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "<Effects>k__BackingField": {
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PercentualDiscount",
                             *                     "<Value>k__BackingField": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "PromotionTeasers": [
                             *             {
                             *               "Name": "TesteInfoAdicional",
                             *               "GeneralValues": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "Conditions": {
                             *                 "MinimumQuantity": 0,
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PaymentMethodId",
                             *                     "Value": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "Effects": {
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PercentualDiscount",
                             *                     "Value": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "BuyTogether": [],
                             *           "ItemMetadataAttachment": [],
                             *           "Price": 42,
                             *           "ListPrice": 42,
                             *           "PriceWithoutDiscount": 42,
                             *           "RewardValue": 0,
                             *           "PriceValidUntil": "4000-01-01T03:00:00Z",
                             *           "AvailableQuantity": 16,
                             *           "IsAvailable": true,
                             *           "Tax": 0,
                             *           "SaleChannel": 0,
                             *           "DeliverySlaSamples": [
                             *             {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           ],
                             *           "GetInfoErrorMessage": null,
                             *           "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                             *           "PaymentOptions": {
                             *             "installmentOptions": [
                             *               {
                             *                 "paymentSystem": "2",
                             *                 "bin": null,
                             *                 "paymentName": "Visa",
                             *                 "paymentGroupName": "creditCardPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 2,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 2100,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 2,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 2100,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 3,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1400,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 3,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1400,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 4,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1050,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 4,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1050,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               },
                             *               {
                             *                 "paymentSystem": "17",
                             *                 "bin": null,
                             *                 "paymentName": "Promissory",
                             *                 "paymentGroupName": "promissoryPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               }
                             *             ],
                             *             "paymentSystems": [
                             *               {
                             *                 "id": 17,
                             *                 "name": "Promissory",
                             *                 "groupName": "promissoryPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "17",
                             *                 "template": "promissoryPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               },
                             *               {
                             *                 "id": 2,
                             *                 "name": "Visa",
                             *                 "groupName": "creditCardPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "2",
                             *                 "template": "creditCardPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               }
                             *             ],
                             *             "payments": [],
                             *             "giftCards": [],
                             *             "giftCardMessages": [],
                             *             "availableAccounts": [],
                             *             "availableTokens": []
                             *           }
                             *         }
                             *       }
                             *     ]
                             */
                            sellers: {
                                /**
                                 * @description SKU seller ID.
                                 * @example 1
                                 */
                                sellerId: string;
                                /**
                                 * @description SKU seller name.
                                 * @example COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE
                                 */
                                sellerName: string;
                                /**
                                 * @description URL to add the product to the cart.
                                 * @example https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1
                                 */
                                addToCartLink: string;
                                /**
                                 * @description If the seller is default or not.
                                 * @example true
                                 */
                                sellerDefault: boolean;
                                /**
                                 * @description AKA Commertial Condition.
                                 * @example {
                                 *       "DeliverySlaSamplesPerRegion": {
                                 *         "0": {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       },
                                 *       "Installments": [
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa à vista"
                                 *         },
                                 *         {
                                 *           "Value": 21,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 2,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 2 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 14,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 3,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 3 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 10.5,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 4,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 4 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Promissory",
                                 *           "PaymentSystemGroupName": "promissoryPaymentGroup",
                                 *           "Name": "Promissory à vista"
                                 *         }
                                 *       ],
                                 *       "DiscountHighLight": [],
                                 *       "GiftSkuIds": [],
                                 *       "Teasers": [
                                 *         {
                                 *           "<Name>k__BackingField": "TesteInfoAdicional",
                                 *           "<GeneralValues>k__BackingField": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "<Conditions>k__BackingField": {
                                 *             "<MinimumQuantity>k__BackingField": 0,
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PaymentMethodId",
                                 *                 "<Value>k__BackingField": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "<Effects>k__BackingField": {
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PercentualDiscount",
                                 *                 "<Value>k__BackingField": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "PromotionTeasers": [
                                 *         {
                                 *           "Name": "TesteInfoAdicional",
                                 *           "GeneralValues": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "Conditions": {
                                 *             "MinimumQuantity": 0,
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PaymentMethodId",
                                 *                 "Value": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "Effects": {
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PercentualDiscount",
                                 *                 "Value": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "BuyTogether": [],
                                 *       "ItemMetadataAttachment": [],
                                 *       "Price": 42,
                                 *       "ListPrice": 42,
                                 *       "PriceWithoutDiscount": 42,
                                 *       "RewardValue": 0,
                                 *       "PriceValidUntil": "4000-01-01T03:00:00Z",
                                 *       "AvailableQuantity": 16,
                                 *       "IsAvailable": true,
                                 *       "Tax": 0,
                                 *       "SaleChannel": 0,
                                 *       "DeliverySlaSamples": [
                                 *         {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       ],
                                 *       "GetInfoErrorMessage": null,
                                 *       "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                                 *       "PaymentOptions": {
                                 *         "installmentOptions": [
                                 *           {
                                 *             "paymentSystem": "2",
                                 *             "bin": null,
                                 *             "paymentName": "Visa",
                                 *             "paymentGroupName": "creditCardPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 2,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 2100,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 2,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 2100,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 3,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1400,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 3,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1400,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 4,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1050,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 4,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1050,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           },
                                 *           {
                                 *             "paymentSystem": "17",
                                 *             "bin": null,
                                 *             "paymentName": "Promissory",
                                 *             "paymentGroupName": "promissoryPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           }
                                 *         ],
                                 *         "paymentSystems": [
                                 *           {
                                 *             "id": 17,
                                 *             "name": "Promissory",
                                 *             "groupName": "promissoryPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "17",
                                 *             "template": "promissoryPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           },
                                 *           {
                                 *             "id": 2,
                                 *             "name": "Visa",
                                 *             "groupName": "creditCardPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "2",
                                 *             "template": "creditCardPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           }
                                 *         ],
                                 *         "payments": [],
                                 *         "giftCards": [],
                                 *         "giftCardMessages": [],
                                 *         "availableAccounts": [],
                                 *         "availableTokens": []
                                 *       }
                                 *     }
                                 */
                                commertialOffer: {
                                    /**
                                     * @description Delivery SLA samples per region.
                                     * @example {
                                     *       "0": {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": "null"
                                     *       }
                                     *     }
                                     */
                                    DeliverySlaSamplesPerRegion: {
                                        /**
                                         * @description Delivery SLA ID.
                                         * @example {
                                         *       "DeliverySlaPerTypes": [],
                                         *       "Region": null
                                         *     }
                                         */
                                        0?: {
                                            /**
                                             * @description Delivery SLA per types.
                                             * @example []
                                             */
                                            DeliverySlaPerTypes: unknown[];
                                            /**
                                             * @description Region.
                                             * @example
                                             */
                                            Region: string | null;
                                        };
                                    };
                                    /**
                                     * @description Installments options.
                                     * @example [
                                     *       {
                                     *         "Value": 42,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 1,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa à vista"
                                     *       },
                                     *       {
                                     *         "Value": 21,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 2,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa 2 vezes sem juros"
                                     *       }
                                     *     ]
                                     */
                                    Installments: {
                                        /**
                                         * @description Value of the installment.
                                         * @example 42
                                         */
                                        Value: number;
                                        /**
                                         * @description Interest rate of the installment.
                                         * @example 0
                                         */
                                        InterestRate: number;
                                        /**
                                         * @description Total value plus interest rate of the installment.
                                         * @example 42
                                         */
                                        TotalValuePlusInterestRate: number;
                                        /**
                                         * @description Number of the installment.
                                         * @example 1
                                         */
                                        NumberOfInstallments: number;
                                        /**
                                         * @description Payment system name of the installment.
                                         * @example Visa
                                         */
                                        PaymentSystemName: string;
                                        /**
                                         * @description Payment system group name of the installment.
                                         * @example creditCardPaymentGroup
                                         */
                                        PaymentSystemGroupName: string;
                                        /**
                                         * @description Name of the installment.
                                         * @example Visa à vista
                                         */
                                        Name: string;
                                    }[];
                                    /**
                                     * @description Discount hightlight.
                                     * @example []
                                     */
                                    DiscountHighLight: unknown[];
                                    /**
                                     * @description Array of SKU gifts IDs.
                                     * @example []
                                     */
                                    GiftSkuIds: unknown[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "<Name>k__BackingField": "TesteInfoAdicional",
                                     *         "<GeneralValues>k__BackingField": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "<Conditions>k__BackingField": {
                                     *           "<MinimumQuantity>k__BackingField": 0,
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PaymentMethodId",
                                     *               "<Value>k__BackingField": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "<Effects>k__BackingField": {
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PercentualDiscount",
                                     *               "<Value>k__BackingField": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    Teasers: {
                                        /** @description Name. */
                                        "<Name>k__BackingField"?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        "<GeneralValues>k__BackingField"?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        "<Conditions>k__BackingField"?: {
                                            /** @description Minimum quantity. */
                                            "<MinimumQuantity>k__BackingField"?: number;
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        "<Effects>k__BackingField"?: {
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "Name": "TesteInfoAdicional",
                                     *         "GeneralValues": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "Conditions": {
                                     *           "MinimumQuantity": 0,
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PaymentMethodId",
                                     *               "Value": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "Effects": {
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PercentualDiscount",
                                     *               "Value": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    PromotionTeasers?: {
                                        /** @description Name. */
                                        Name?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        GeneralValues?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        Conditions?: {
                                            /** @description Minimum quantity. */
                                            MinimumQuantity?: number;
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        Effects?: {
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description Array of other products that can be bought together with the product in question.
                                     * @example []
                                     */
                                    BuyTogether: unknown[];
                                    /**
                                     * @description Item metadata attachment.
                                     * @example []
                                     */
                                    ItemMetadataAttachment: unknown[];
                                    /**
                                     * @description Price of the product.
                                     * @example 42
                                     */
                                    Price: number;
                                    /**
                                     * @description List price of the product.
                                     * @example 42
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description Price of the product without discount.
                                     * @example 42
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description Reward value of the product.
                                     * @example 0
                                     */
                                    RewardValue: number;
                                    /**
                                     * @description Price of the product valid until a certain date.
                                     * @example 4000-01-01T03:00:00Z
                                     */
                                    PriceValidUntil: string;
                                    /**
                                     * @description Use the `IsAvailable` field instead.
                                     * @example 16
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description If the product is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                    /**
                                     * @description Tax of the product.
                                     * @example 0
                                     */
                                    Tax: number;
                                    /**
                                     * @description Trade policy which the product is contained.
                                     * @example 0
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description Delivery SLA samples.
                                     * @example [
                                     *       {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": null
                                     *       }
                                     *     ]
                                     */
                                    DeliverySlaSamples: {
                                        /**
                                         * @description Delivery SLA per types.
                                         * @example []
                                         */
                                        DeliverySlaPerTypes: unknown[];
                                        /**
                                         * @description Region.
                                         * @example null
                                         */
                                        Region: string | null;
                                    }[];
                                    /**
                                     * @description Get info error message.
                                     * @example null
                                     */
                                    GetInfoErrorMessage: string | null;
                                    /**
                                     * @description Cache version used to call checkout.
                                     * @example 95EF7E5476DF276E679167A399FE3103_
                                     */
                                    CacheVersionUsedToCallCheckout: string;
                                    /**
                                     * @description Payment options.
                                     * @example {
                                     *       "installmentOptions": [
                                     *         {
                                     *           "paymentSystem": "2",
                                     *           "bin": null,
                                     *           "paymentName": "Visa",
                                     *           "paymentGroupName": "creditCardPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 2,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 2100,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 2,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 2100,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 3,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1400,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 3,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1400,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 4,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1050,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 4,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1050,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         },
                                     *         {
                                     *           "paymentSystem": "17",
                                     *           "bin": null,
                                     *           "paymentName": "Promissory",
                                     *           "paymentGroupName": "promissoryPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         }
                                     *       ],
                                     *       "paymentSystems": [
                                     *         {
                                     *           "id": 17,
                                     *           "name": "Promissory",
                                     *           "groupName": "promissoryPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "17",
                                     *           "template": "promissoryPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         },
                                     *         {
                                     *           "id": 2,
                                     *           "name": "Visa",
                                     *           "groupName": "creditCardPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "2",
                                     *           "template": "creditCardPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         }
                                     *       ],
                                     *       "payments": [],
                                     *       "giftCards": [],
                                     *       "giftCardMessages": [],
                                     *       "availableAccounts": [],
                                     *       "availableTokens": []
                                     *     }
                                     */
                                    PaymentOptions: {
                                        /**
                                         * @description installment options.
                                         * @example [
                                         *       {
                                         *         "paymentSystem": "2",
                                         *         "bin": null,
                                         *         "paymentName": "Visa",
                                         *         "paymentGroupName": "creditCardPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 2,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 2100,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 2,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 2100,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 3,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1400,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 3,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1400,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 4,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1050,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 4,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1050,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       },
                                         *       {
                                         *         "paymentSystem": "17",
                                         *         "bin": null,
                                         *         "paymentName": "Promissory",
                                         *         "paymentGroupName": "promissoryPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       }
                                         *     ]
                                         */
                                        installmentOptions: {
                                            /**
                                             * @description Payment system.
                                             * @example 2
                                             */
                                            paymentSystem: string;
                                            /**
                                             * @description Bin.
                                             * @example null
                                             */
                                            bin: string | null;
                                            /**
                                             * @description Payment name.
                                             * @example Visa
                                             */
                                            paymentName: string;
                                            /**
                                             * @description Payment group name.
                                             * @example creditCardPaymentGroup
                                             */
                                            paymentGroupName: string;
                                            /**
                                             * @description Value.
                                             * @example 4200
                                             */
                                            value: number;
                                            /**
                                             * @description Installments.
                                             * @example [
                                             *       {
                                             *         "count": 1,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 4200,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 1,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 4200,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       },
                                             *       {
                                             *         "count": 2,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 2100,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 2,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 2100,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       }
                                             *     ]
                                             */
                                            installments: {
                                                /**
                                                 * @description Count.
                                                 * @example 1
                                                 */
                                                count: number;
                                                /**
                                                 * @description Has interest rate.
                                                 * @example false
                                                 */
                                                hasInterestRate: boolean;
                                                /**
                                                 * @description Interest rate.
                                                 * @example 0
                                                 */
                                                interestRate: number;
                                                /**
                                                 * @description Value.
                                                 * @example 4200
                                                 */
                                                value: number;
                                                /**
                                                 * @description Total.
                                                 * @example 4200
                                                 */
                                                total: number;
                                                /**
                                                 * @description Seller merchant installments.
                                                 * @example [
                                                 *       {
                                                 *         "id": "MERCH",
                                                 *         "count": 1,
                                                 *         "hasInterestRate": false,
                                                 *         "interestRate": 0,
                                                 *         "value": 4200,
                                                 *         "total": 4200
                                                 *       }
                                                 *     ]
                                                 */
                                                sellerMerchantInstallments: {
                                                    /**
                                                     * @description ID.
                                                     * @example MERCH
                                                     */
                                                    id: string;
                                                    /**
                                                     * @description Count.
                                                     * @example 1
                                                     */
                                                    count: number;
                                                    /**
                                                     * @description Has interest rate.
                                                     * @example false
                                                     */
                                                    hasInterestRate: boolean;
                                                    /**
                                                     * @description Interest rate.
                                                     * @example 0
                                                     */
                                                    interestRate: number;
                                                    /**
                                                     * @description Value.
                                                     * @example 4200
                                                     */
                                                    value: number;
                                                    /**
                                                     * @description Total.
                                                     * @example 4200
                                                     */
                                                    total: number;
                                                }[];
                                            }[];
                                        }[];
                                        /**
                                         * @description Payment systems.
                                         * @example [
                                         *       {
                                         *         "id": 17,
                                         *         "name": "Promissory",
                                         *         "groupName": "promissoryPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "17",
                                         *         "template": "promissoryPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       },
                                         *       {
                                         *         "id": 2,
                                         *         "name": "Visa",
                                         *         "groupName": "creditCardPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "2",
                                         *         "template": "creditCardPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       }
                                         *     ]
                                         */
                                        paymentSystems: {
                                            /**
                                             * @description ID.
                                             * @example 17
                                             */
                                            id: number;
                                            /**
                                             * @description Name.
                                             * @example Promissory
                                             */
                                            name: string;
                                            /**
                                             * @description Group name.
                                             * @example promissoryPaymentGroup
                                             */
                                            groupName: string;
                                            /**
                                             * @description Validator.
                                             * @example
                                             */
                                            validator: string | null;
                                            /**
                                             * @description String ID.
                                             * @example 17
                                             */
                                            stringId: string;
                                            /**
                                             * @description Template.
                                             * @example promissoryPaymentGroup-template
                                             */
                                            template: string;
                                            /**
                                             * @description If requires document or not.
                                             * @example false
                                             */
                                            requiresDocument: boolean;
                                            /**
                                             * @description If is custom or not.
                                             * @example false
                                             */
                                            isCustom: boolean;
                                            /**
                                             * @description Description.
                                             * @example
                                             */
                                            description: string | null;
                                            /**
                                             * @description If requires authentication.
                                             * @example false
                                             */
                                            requiresAuthentication: boolean;
                                            /**
                                             * @description Due date.
                                             * @example 2021-07-01T18:43:00.0264384Z
                                             */
                                            dueDate: string;
                                            /**
                                             * @description Available payments.
                                             * @example
                                             */
                                            availablePayments: string | null;
                                        }[];
                                        /**
                                         * @description Payments.
                                         * @example []
                                         */
                                        payments: unknown[];
                                        /**
                                         * @description GiftCards.
                                         * @example []
                                         */
                                        giftCards: unknown[];
                                        /**
                                         * @description GiftCardMessages.
                                         * @example []
                                         */
                                        giftCardMessages: unknown[];
                                        /**
                                         * @description Available accounts.
                                         * @example []
                                         */
                                        availableAccounts: unknown[];
                                        /**
                                         * @description Available tokens.
                                         * @example []
                                         */
                                        availableTokens: unknown[];
                                    };
                                };
                            }[];
                            /**
                             * @description Videos.
                             * @example []
                             */
                            Videos: unknown[];
                            /**
                             * @description Estimated date arrival.
                             * @example
                             */
                            estimatedDateArrival: string | null;
                        }[];
                    }[];
                };
            };
        };
    };
    Searchbyproducturl: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Product URL */
                "product-text-link": string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Product unique identifier.
                         * @example 35
                         */
                        productId: string;
                        /**
                         * @description Product name.
                         * @example Kit de Hoegaarden
                         */
                        productName: string;
                        /**
                         * @description Brand name.
                         * @example Hoegaarden
                         */
                        brand: string;
                        /**
                         * @description Product brand ID.
                         * @example 2000004
                         */
                        brandId: number;
                        /**
                         * @description Product's brand image URL.
                         * @example https://merch.vteximg.com.br/arquivos/ids/155532/hoegardden-logo.jpg
                         */
                        brandImageUrl: string;
                        /**
                         * @description Product URL.
                         * @example kit-6-cerveja-hoegaarden
                         */
                        linkText: string;
                        /**
                         * @description Product reference.
                         * @example 000806
                         */
                        productReference: string;
                        /**
                         * @description Product reference ID.
                         * @example 1234
                         */
                        productReferenceCode: number | null;
                        /**
                         * @description Product category ID.
                         * @example 1
                         */
                        categoryId: string;
                        /**
                         * @description Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
                         * @example Kit 6 cerveja Hoegaarden
                         */
                        productTitle: string;
                        /**
                         * @description Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
                         * @example Category for Beers
                         */
                        metaTagDescription: string;
                        /**
                         * @description Product release date.
                         * @example 2020-10-07T00:00:00
                         */
                        releaseDate: string;
                        /**
                         * @description Cluster highlight ID and name.
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        clusterHighlights: Record<string, never>;
                        /**
                         * @description Product clusters' IDs and names.
                         * @example {
                         *       "138": "teste2",
                         *       "143": "NaoPesquisavel",
                         *       "146": "colecaotestesubcategoria",
                         *       "161": "merch_import_test1"
                         *     }
                         */
                        productClusters: Record<string, never>;
                        /**
                         * @description Searchable clusters IDs and names
                         * @example {
                         *       "138": "teste2"
                         *     }
                         */
                        searchableClusters: Record<string, never>;
                        /**
                         * @description Array of the product's categories URLs.
                         * @example [
                         *       "/Beers Beers Mesmo/"
                         *     ]
                         */
                        categories: unknown[];
                        /**
                         * @description Array of the product's categories IDs.
                         * @example [
                         *       "/1/"
                         *     ]
                         */
                        categoriesIds: unknown[];
                        /**
                         * @description Product URL.
                         * @example https://merch.vtexcommercestable.com.br/kit-6-cerveja-hoegaarden/p
                         */
                        link: string;
                        /**
                         * @description Array of the product's specifications.
                         * @example [
                         *       "Percentuals",
                         *       "Percentual"
                         *     ]
                         */
                        allSpecifications: string[];
                        /**
                         * @description Array of the product's specifications groups.
                         * @example [
                         *       "Total",
                         *       "Teste da Api2"
                         *     ]
                         */
                        allSpecificationsGroups: string[];
                        /**
                         * @description Description of the main information related to the product. A simple and easy to understand summary for the customer.
                         * @example Description example
                         */
                        description: string | null;
                        /**
                         * @description Array containing the product SKU general information.
                         * @example [
                         *       {
                         *         "itemId": "310118469",
                         *         "name": "Kit com 6",
                         *         "nameComplete": "Kit de Hoegaarden Kit com 6",
                         *         "complementName": "",
                         *         "ean": "",
                         *         "referenceId": [
                         *           {
                         *             "Key": "RefId",
                         *             "Value": "000806"
                         *           }
                         *         ],
                         *         "measurementUnit": "un",
                         *         "unitMultiplier": 1,
                         *         "modalType": null,
                         *         "isKit": true,
                         *         "kitItems": [
                         *           {
                         *             "itemId": "310118466",
                         *             "amount": 6
                         *           }
                         *         ],
                         *         "images": [
                         *           {
                         *             "imageId": "155489",
                         *             "imageLabel": "",
                         *             "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                         *             "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                         *             "imageText": "hoegaarden-kit",
                         *             "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                         *           }
                         *         ],
                         *         "sellers": [
                         *           {
                         *             "sellerId": "1",
                         *             "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                         *             "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                         *             "sellerDefault": true,
                         *             "commertialOffer": {
                         *               "DeliverySlaSamplesPerRegion": {
                         *                 "0": {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               },
                         *               "Installments": [
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa à vista"
                         *                 },
                         *                 {
                         *                   "Value": 21,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 2,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 2 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 14,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 3,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 3 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 10.5,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 4,
                         *                   "PaymentSystemName": "Visa",
                         *                   "PaymentSystemGroupName": "creditCardPaymentGroup",
                         *                   "Name": "Visa 4 vezes sem juros"
                         *                 },
                         *                 {
                         *                   "Value": 42,
                         *                   "InterestRate": 0,
                         *                   "TotalValuePlusInterestRate": 42,
                         *                   "NumberOfInstallments": 1,
                         *                   "PaymentSystemName": "Promissory",
                         *                   "PaymentSystemGroupName": "promissoryPaymentGroup",
                         *                   "Name": "Promissory à vista"
                         *                 }
                         *               ],
                         *               "DiscountHighLight": [],
                         *               "GiftSkuIds": [],
                         *               "Teasers": [
                         *                 {
                         *                   "<Name>k__BackingField": "TesteInfoAdicional",
                         *                   "<GeneralValues>k__BackingField": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "<Conditions>k__BackingField": {
                         *                     "<MinimumQuantity>k__BackingField": 0,
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PaymentMethodId",
                         *                         "<Value>k__BackingField": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "<Effects>k__BackingField": {
                         *                     "<Parameters>k__BackingField": [
                         *                       {
                         *                         "<Name>k__BackingField": "PercentualDiscount",
                         *                         "<Value>k__BackingField": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "PromotionTeasers": [
                         *                 {
                         *                   "Name": "TesteInfoAdicional",
                         *                   "GeneralValues": {
                         *                     "Time": "Flamengo",
                         *                     "Nome": "Pedro",
                         *                     "Camisa": "9"
                         *                   },
                         *                   "Conditions": {
                         *                     "MinimumQuantity": 0,
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PaymentMethodId",
                         *                         "Value": "4"
                         *                       }
                         *                     ]
                         *                   },
                         *                   "Effects": {
                         *                     "Parameters": [
                         *                       {
                         *                         "Name": "PercentualDiscount",
                         *                         "Value": "1"
                         *                       }
                         *                     ]
                         *                   }
                         *                 }
                         *               ],
                         *               "BuyTogether": [],
                         *               "ItemMetadataAttachment": [],
                         *               "Price": 42,
                         *               "ListPrice": 42,
                         *               "PriceWithoutDiscount": 42,
                         *               "RewardValue": 0,
                         *               "PriceValidUntil": "4000-01-01T03:00:00Z",
                         *               "AvailableQuantity": 16,
                         *               "IsAvailable": true,
                         *               "Tax": 0,
                         *               "SaleChannel": 0,
                         *               "DeliverySlaSamples": [
                         *                 {
                         *                   "DeliverySlaPerTypes": [],
                         *                   "Region": null
                         *                 }
                         *               ],
                         *               "GetInfoErrorMessage": null,
                         *               "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                         *               "PaymentOptions": {
                         *                 "installmentOptions": [
                         *                   {
                         *                     "paymentSystem": "2",
                         *                     "bin": null,
                         *                     "paymentName": "Visa",
                         *                     "paymentGroupName": "creditCardPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 2,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 2100,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 2,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 2100,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 3,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1400,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 3,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1400,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       },
                         *                       {
                         *                         "count": 4,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 1050,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 4,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 1050,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   },
                         *                   {
                         *                     "paymentSystem": "17",
                         *                     "bin": null,
                         *                     "paymentName": "Promissory",
                         *                     "paymentGroupName": "promissoryPaymentGroup",
                         *                     "value": 4200,
                         *                     "installments": [
                         *                       {
                         *                         "count": 1,
                         *                         "hasInterestRate": false,
                         *                         "interestRate": 0,
                         *                         "value": 4200,
                         *                         "total": 4200,
                         *                         "sellerMerchantInstallments": [
                         *                           {
                         *                             "id": "MERCH",
                         *                             "count": 1,
                         *                             "hasInterestRate": false,
                         *                             "interestRate": 0,
                         *                             "value": 4200,
                         *                             "total": 4200
                         *                           }
                         *                         ]
                         *                       }
                         *                     ]
                         *                   }
                         *                 ],
                         *                 "paymentSystems": [
                         *                   {
                         *                     "id": 17,
                         *                     "name": "Promissory",
                         *                     "groupName": "promissoryPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "17",
                         *                     "template": "promissoryPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   },
                         *                   {
                         *                     "id": 2,
                         *                     "name": "Visa",
                         *                     "groupName": "creditCardPaymentGroup",
                         *                     "validator": null,
                         *                     "stringId": "2",
                         *                     "template": "creditCardPaymentGroup-template",
                         *                     "requiresDocument": false,
                         *                     "isCustom": false,
                         *                     "description": null,
                         *                     "requiresAuthentication": false,
                         *                     "dueDate": "2021-07-01T18:43:00.0264384Z",
                         *                     "availablePayments": null
                         *                   }
                         *                 ],
                         *                 "payments": [],
                         *                 "giftCards": [],
                         *                 "giftCardMessages": [],
                         *                 "availableAccounts": [],
                         *                 "availableTokens": []
                         *               }
                         *             }
                         *           }
                         *         ],
                         *         "Videos": [],
                         *         "estimatedDateArrival": null
                         *       }
                         *     ]
                         */
                        items: {
                            /**
                             * @description SKU ID.
                             * @example 310118469
                             */
                            itemId: string;
                            /**
                             * @description SKU name.
                             * @example Kit com 6
                             */
                            name: string;
                            /**
                             * @description SKU complete name.
                             * @example Kit de Hoegaarden Kit com 6
                             */
                            nameComplete: string;
                            /**
                             * @description SKU complement name.
                             * @example Complement name
                             */
                            complementName: string;
                            /**
                             * @description SKU unique identification code (barcode), accepts up to 13 numerical characters.
                             * @example 12345567
                             */
                            ean: string;
                            /**
                             * @description Reference code ID.
                             * @example [
                             *       {
                             *         "Key": "RefId",
                             *         "Value": "000806"
                             *       }
                             *     ]
                             */
                            referenceId: {
                                /**
                                 * @description Reference Code.
                                 * @example RefId
                                 */
                                Key: string;
                                /**
                                 * @description Unique reference code used internally for organizational purposes.
                                 * @example 000806
                                 */
                                Value: string;
                            }[];
                            /**
                             * @description Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
                             * @example un
                             */
                            measurementUnit: string;
                            /**
                             * @description numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
                             * @example 1
                             */
                            unitMultiplier: number;
                            /**
                             * @description Modal Type.
                             * @example Modal Type test
                             */
                            modalType: string | null;
                            /**
                             * @description If the SKU is part of a kit.
                             * @example true
                             */
                            isKit: boolean;
                            /**
                             * @description Array with information of SKUs components from a Kit.
                             * @example [
                             *       {
                             *         "itemId": "310118466",
                             *         "amount": 6
                             *       }
                             *     ]
                             */
                            kitItems: {
                                /**
                                 * @description SKU kit component ID.
                                 * @example 310118466
                                 */
                                itemId: string;
                                /**
                                 * @description Amount of the SKU component in the kit.
                                 * @example 6
                                 */
                                amount: number;
                            }[];
                            /**
                             * @description Array of information about the SKU image.
                             * @example [
                             *       {
                             *         "imageId": "155489",
                             *         "imageLabel": "",
                             *         "imageTag": "<img src=\"~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000\" width=\"#width#\" height=\"#height#\" alt=\"hoegaarden-kit\" id=\"\" />",
                             *         "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000",
                             *         "imageText": "hoegaarden-kit",
                             *         "imageLastModified": "2020-10-07T12:49:27.5800000Z"
                             *       }
                             *     ]
                             */
                            images: {
                                /**
                                 * @description Image ID.
                                 * @example 155489
                                 */
                                imageId: string;
                                /**
                                 * @description Image label.
                                 * @example Label test
                                 */
                                imageLabel: string;
                                /**
                                 * @description Image tag.
                                 * @example <img src="~/arquivos/ids/155489-#width#-#height#/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000" width="#width#" height="#height#" alt="hoegaarden-kit" id="" />
                                 */
                                imageTag: string;
                                /**
                                 * @description Image URL.
                                 * @example https://merch.vteximg.com.br/arquivos/ids/155489/99B14097-BFEA-4C0E-899E-35C95A2E1509_4_5005_c.jpg?v=637376717675800000
                                 */
                                imageUrl: string;
                                /**
                                 * @description Image text.
                                 * @example hoegaarden-kit
                                 */
                                imageText: string | null;
                                /**
                                 * @description Date and time of the last update of the image.
                                 * @example 2020-10-07T12:49:27.5800000Z
                                 */
                                imageLastModified: string;
                            }[];
                            /**
                             * @description Array of SKU sellers.
                             * @example [
                             *       {
                             *         "sellerId": "1",
                             *         "sellerName": "COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE",
                             *         "addToCartLink": "https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1",
                             *         "sellerDefault": true,
                             *         "commertialOffer": {
                             *           "DeliverySlaSamplesPerRegion": {
                             *             "0": {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           },
                             *           "Installments": [
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa à vista"
                             *             },
                             *             {
                             *               "Value": 21,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 2,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 2 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 14,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 3,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 3 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 10.5,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 4,
                             *               "PaymentSystemName": "Visa",
                             *               "PaymentSystemGroupName": "creditCardPaymentGroup",
                             *               "Name": "Visa 4 vezes sem juros"
                             *             },
                             *             {
                             *               "Value": 42,
                             *               "InterestRate": 0,
                             *               "TotalValuePlusInterestRate": 42,
                             *               "NumberOfInstallments": 1,
                             *               "PaymentSystemName": "Promissory",
                             *               "PaymentSystemGroupName": "promissoryPaymentGroup",
                             *               "Name": "Promissory à vista"
                             *             }
                             *           ],
                             *           "DiscountHighLight": [],
                             *           "GiftSkuIds": [],
                             *           "Teasers": [
                             *             {
                             *               "<Name>k__BackingField": "TesteInfoAdicional",
                             *               "<GeneralValues>k__BackingField": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "<Conditions>k__BackingField": {
                             *                 "<MinimumQuantity>k__BackingField": 0,
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PaymentMethodId",
                             *                     "<Value>k__BackingField": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "<Effects>k__BackingField": {
                             *                 "<Parameters>k__BackingField": [
                             *                   {
                             *                     "<Name>k__BackingField": "PercentualDiscount",
                             *                     "<Value>k__BackingField": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "PromotionTeasers": [
                             *             {
                             *               "Name": "TesteInfoAdicional",
                             *               "GeneralValues": {
                             *                 "Time": "Flamengo",
                             *                 "Nome": "Pedro",
                             *                 "Camisa": "9"
                             *               },
                             *               "Conditions": {
                             *                 "MinimumQuantity": 0,
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PaymentMethodId",
                             *                     "Value": "4"
                             *                   }
                             *                 ]
                             *               },
                             *               "Effects": {
                             *                 "Parameters": [
                             *                   {
                             *                     "Name": "PercentualDiscount",
                             *                     "Value": "1"
                             *                   }
                             *                 ]
                             *               }
                             *             }
                             *           ],
                             *           "BuyTogether": [],
                             *           "ItemMetadataAttachment": [],
                             *           "Price": 42,
                             *           "ListPrice": 42,
                             *           "PriceWithoutDiscount": 42,
                             *           "RewardValue": 0,
                             *           "PriceValidUntil": "4000-01-01T03:00:00Z",
                             *           "AvailableQuantity": 16,
                             *           "IsAvailable": true,
                             *           "Tax": 0,
                             *           "SaleChannel": 0,
                             *           "DeliverySlaSamples": [
                             *             {
                             *               "DeliverySlaPerTypes": [],
                             *               "Region": null
                             *             }
                             *           ],
                             *           "GetInfoErrorMessage": null,
                             *           "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                             *           "PaymentOptions": {
                             *             "installmentOptions": [
                             *               {
                             *                 "paymentSystem": "2",
                             *                 "bin": null,
                             *                 "paymentName": "Visa",
                             *                 "paymentGroupName": "creditCardPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 2,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 2100,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 2,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 2100,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 3,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1400,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 3,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1400,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   },
                             *                   {
                             *                     "count": 4,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 1050,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 4,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 1050,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               },
                             *               {
                             *                 "paymentSystem": "17",
                             *                 "bin": null,
                             *                 "paymentName": "Promissory",
                             *                 "paymentGroupName": "promissoryPaymentGroup",
                             *                 "value": 4200,
                             *                 "installments": [
                             *                   {
                             *                     "count": 1,
                             *                     "hasInterestRate": false,
                             *                     "interestRate": 0,
                             *                     "value": 4200,
                             *                     "total": 4200,
                             *                     "sellerMerchantInstallments": [
                             *                       {
                             *                         "id": "MERCH",
                             *                         "count": 1,
                             *                         "hasInterestRate": false,
                             *                         "interestRate": 0,
                             *                         "value": 4200,
                             *                         "total": 4200
                             *                       }
                             *                     ]
                             *                   }
                             *                 ]
                             *               }
                             *             ],
                             *             "paymentSystems": [
                             *               {
                             *                 "id": 17,
                             *                 "name": "Promissory",
                             *                 "groupName": "promissoryPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "17",
                             *                 "template": "promissoryPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               },
                             *               {
                             *                 "id": 2,
                             *                 "name": "Visa",
                             *                 "groupName": "creditCardPaymentGroup",
                             *                 "validator": null,
                             *                 "stringId": "2",
                             *                 "template": "creditCardPaymentGroup-template",
                             *                 "requiresDocument": false,
                             *                 "isCustom": false,
                             *                 "description": null,
                             *                 "requiresAuthentication": false,
                             *                 "dueDate": "2021-07-01T18:43:00.0264384Z",
                             *                 "availablePayments": null
                             *               }
                             *             ],
                             *             "payments": [],
                             *             "giftCards": [],
                             *             "giftCardMessages": [],
                             *             "availableAccounts": [],
                             *             "availableTokens": []
                             *           }
                             *         }
                             *       }
                             *     ]
                             */
                            sellers: {
                                /**
                                 * @description SKU seller ID.
                                 * @example 1
                                 */
                                sellerId: string;
                                /**
                                 * @description SKU seller name.
                                 * @example COMPANHIA BRASILEIRA DE TECNOLOGIA PARA E-COMMERCE
                                 */
                                sellerName: string;
                                /**
                                 * @description URL to add the product to the cart.
                                 * @example https://merch.vtexcommercestable.com.br/checkout/cart/add?sku=310118469&qty=1&seller=1&sc=1&price=4200&cv=95EF7E5476DF276E679167A399FE3103_&sc=1
                                 */
                                addToCartLink: string;
                                /**
                                 * @description If the seller is default or not.
                                 * @example true
                                 */
                                sellerDefault: boolean;
                                /**
                                 * @description AKA Commertial Condition.
                                 * @example {
                                 *       "DeliverySlaSamplesPerRegion": {
                                 *         "0": {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       },
                                 *       "Installments": [
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa à vista"
                                 *         },
                                 *         {
                                 *           "Value": 21,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 2,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 2 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 14,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 3,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 3 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 10.5,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 4,
                                 *           "PaymentSystemName": "Visa",
                                 *           "PaymentSystemGroupName": "creditCardPaymentGroup",
                                 *           "Name": "Visa 4 vezes sem juros"
                                 *         },
                                 *         {
                                 *           "Value": 42,
                                 *           "InterestRate": 0,
                                 *           "TotalValuePlusInterestRate": 42,
                                 *           "NumberOfInstallments": 1,
                                 *           "PaymentSystemName": "Promissory",
                                 *           "PaymentSystemGroupName": "promissoryPaymentGroup",
                                 *           "Name": "Promissory à vista"
                                 *         }
                                 *       ],
                                 *       "DiscountHighLight": [],
                                 *       "GiftSkuIds": [],
                                 *       "Teasers": [
                                 *         {
                                 *           "<Name>k__BackingField": "TesteInfoAdicional",
                                 *           "<GeneralValues>k__BackingField": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "<Conditions>k__BackingField": {
                                 *             "<MinimumQuantity>k__BackingField": 0,
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PaymentMethodId",
                                 *                 "<Value>k__BackingField": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "<Effects>k__BackingField": {
                                 *             "<Parameters>k__BackingField": [
                                 *               {
                                 *                 "<Name>k__BackingField": "PercentualDiscount",
                                 *                 "<Value>k__BackingField": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "PromotionTeasers": [
                                 *         {
                                 *           "Name": "TesteInfoAdicional",
                                 *           "GeneralValues": {
                                 *             "Time": "Flamengo",
                                 *             "Nome": "Pedro",
                                 *             "Camisa": "9"
                                 *           },
                                 *           "Conditions": {
                                 *             "MinimumQuantity": 0,
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PaymentMethodId",
                                 *                 "Value": "4"
                                 *               }
                                 *             ]
                                 *           },
                                 *           "Effects": {
                                 *             "Parameters": [
                                 *               {
                                 *                 "Name": "PercentualDiscount",
                                 *                 "Value": "1"
                                 *               }
                                 *             ]
                                 *           }
                                 *         }
                                 *       ],
                                 *       "BuyTogether": [],
                                 *       "ItemMetadataAttachment": [],
                                 *       "Price": 42,
                                 *       "ListPrice": 42,
                                 *       "PriceWithoutDiscount": 42,
                                 *       "RewardValue": 0,
                                 *       "PriceValidUntil": "4000-01-01T03:00:00Z",
                                 *       "AvailableQuantity": 16,
                                 *       "IsAvailable": true,
                                 *       "Tax": 0,
                                 *       "SaleChannel": 0,
                                 *       "DeliverySlaSamples": [
                                 *         {
                                 *           "DeliverySlaPerTypes": [],
                                 *           "Region": null
                                 *         }
                                 *       ],
                                 *       "GetInfoErrorMessage": null,
                                 *       "CacheVersionUsedToCallCheckout": "95EF7E5476DF276E679167A399FE3103_",
                                 *       "PaymentOptions": {
                                 *         "installmentOptions": [
                                 *           {
                                 *             "paymentSystem": "2",
                                 *             "bin": null,
                                 *             "paymentName": "Visa",
                                 *             "paymentGroupName": "creditCardPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 2,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 2100,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 2,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 2100,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 3,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1400,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 3,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1400,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               },
                                 *               {
                                 *                 "count": 4,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 1050,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 4,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 1050,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           },
                                 *           {
                                 *             "paymentSystem": "17",
                                 *             "bin": null,
                                 *             "paymentName": "Promissory",
                                 *             "paymentGroupName": "promissoryPaymentGroup",
                                 *             "value": 4200,
                                 *             "installments": [
                                 *               {
                                 *                 "count": 1,
                                 *                 "hasInterestRate": false,
                                 *                 "interestRate": 0,
                                 *                 "value": 4200,
                                 *                 "total": 4200,
                                 *                 "sellerMerchantInstallments": [
                                 *                   {
                                 *                     "id": "MERCH",
                                 *                     "count": 1,
                                 *                     "hasInterestRate": false,
                                 *                     "interestRate": 0,
                                 *                     "value": 4200,
                                 *                     "total": 4200
                                 *                   }
                                 *                 ]
                                 *               }
                                 *             ]
                                 *           }
                                 *         ],
                                 *         "paymentSystems": [
                                 *           {
                                 *             "id": 17,
                                 *             "name": "Promissory",
                                 *             "groupName": "promissoryPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "17",
                                 *             "template": "promissoryPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           },
                                 *           {
                                 *             "id": 2,
                                 *             "name": "Visa",
                                 *             "groupName": "creditCardPaymentGroup",
                                 *             "validator": null,
                                 *             "stringId": "2",
                                 *             "template": "creditCardPaymentGroup-template",
                                 *             "requiresDocument": false,
                                 *             "isCustom": false,
                                 *             "description": null,
                                 *             "requiresAuthentication": false,
                                 *             "dueDate": "2021-07-01T18:43:00.0264384Z",
                                 *             "availablePayments": null
                                 *           }
                                 *         ],
                                 *         "payments": [],
                                 *         "giftCards": [],
                                 *         "giftCardMessages": [],
                                 *         "availableAccounts": [],
                                 *         "availableTokens": []
                                 *       }
                                 *     }
                                 */
                                commertialOffer: {
                                    /**
                                     * @description Delivery SLA samples per region.
                                     * @example {
                                     *       "0": {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": "null"
                                     *       }
                                     *     }
                                     */
                                    DeliverySlaSamplesPerRegion: {
                                        /**
                                         * @description Delivery SLA ID.
                                         * @example {
                                         *       "DeliverySlaPerTypes": [],
                                         *       "Region": null
                                         *     }
                                         */
                                        0?: {
                                            /**
                                             * @description Delivery SLA per types.
                                             * @example []
                                             */
                                            DeliverySlaPerTypes: unknown[];
                                            /**
                                             * @description Region.
                                             * @example
                                             */
                                            Region: string | null;
                                        };
                                    };
                                    /**
                                     * @description Installments options.
                                     * @example [
                                     *       {
                                     *         "Value": 42,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 1,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa à vista"
                                     *       },
                                     *       {
                                     *         "Value": 21,
                                     *         "InterestRate": 0,
                                     *         "TotalValuePlusInterestRate": 42,
                                     *         "NumberOfInstallments": 2,
                                     *         "PaymentSystemName": "Visa",
                                     *         "PaymentSystemGroupName": "creditCardPaymentGroup",
                                     *         "Name": "Visa 2 vezes sem juros"
                                     *       }
                                     *     ]
                                     */
                                    Installments: {
                                        /**
                                         * @description Value of the installment.
                                         * @example 42
                                         */
                                        Value: number;
                                        /**
                                         * @description Interest rate of the installment.
                                         * @example 0
                                         */
                                        InterestRate: number;
                                        /**
                                         * @description Total value plus interest rate of the installment.
                                         * @example 42
                                         */
                                        TotalValuePlusInterestRate: number;
                                        /**
                                         * @description Number of the installment.
                                         * @example 1
                                         */
                                        NumberOfInstallments: number;
                                        /**
                                         * @description Payment system name of the installment.
                                         * @example Visa
                                         */
                                        PaymentSystemName: string;
                                        /**
                                         * @description Payment system group name of the installment.
                                         * @example creditCardPaymentGroup
                                         */
                                        PaymentSystemGroupName: string;
                                        /**
                                         * @description Name of the installment.
                                         * @example Visa à vista
                                         */
                                        Name: string;
                                    }[];
                                    /**
                                     * @description Discount hightlight.
                                     * @example []
                                     */
                                    DiscountHighLight: unknown[];
                                    /**
                                     * @description Array of SKU gifts IDs.
                                     * @example []
                                     */
                                    GiftSkuIds: unknown[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "<Name>k__BackingField": "TesteInfoAdicional",
                                     *         "<GeneralValues>k__BackingField": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "<Conditions>k__BackingField": {
                                     *           "<MinimumQuantity>k__BackingField": 0,
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PaymentMethodId",
                                     *               "<Value>k__BackingField": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "<Effects>k__BackingField": {
                                     *           "<Parameters>k__BackingField": [
                                     *             {
                                     *               "<Name>k__BackingField": "PercentualDiscount",
                                     *               "<Value>k__BackingField": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    Teasers: {
                                        /** @description Name. */
                                        "<Name>k__BackingField"?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        "<GeneralValues>k__BackingField"?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        "<Conditions>k__BackingField"?: {
                                            /** @description Minimum quantity. */
                                            "<MinimumQuantity>k__BackingField"?: number;
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        "<Effects>k__BackingField"?: {
                                            /** @description Parameters. */
                                            "<Parameters>k__BackingField"?: {
                                                /** @description Name. */
                                                "<Name>k__BackingField"?: string;
                                                /** @description Value. */
                                                "<Value>k__BackingField"?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description List with promotions teasers.
                                     * @example [
                                     *       {
                                     *         "Name": "TesteInfoAdicional",
                                     *         "GeneralValues": {
                                     *           "Time": "Flamengo",
                                     *           "Nome": "Pedro",
                                     *           "Camisa": "9"
                                     *         },
                                     *         "Conditions": {
                                     *           "MinimumQuantity": 0,
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PaymentMethodId",
                                     *               "Value": "4"
                                     *             }
                                     *           ]
                                     *         },
                                     *         "Effects": {
                                     *           "Parameters": [
                                     *             {
                                     *               "Name": "PercentualDiscount",
                                     *               "Value": "1"
                                     *             }
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    PromotionTeasers?: {
                                        /** @description Name. */
                                        Name?: string;
                                        /** @description General values. Each property follows the format: `{field}:{value}. */
                                        GeneralValues?: {
                                            /** @example {value} */
                                            "{field}"?: string;
                                        };
                                        /** @description Conditions. */
                                        Conditions?: {
                                            /** @description Minimum quantity. */
                                            MinimumQuantity?: number;
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                        /** @description Effects. */
                                        Effects?: {
                                            /** @description Parameters. */
                                            Parameters?: {
                                                /** @description Name. */
                                                Name?: string;
                                                /** @description Value. */
                                                Value?: string;
                                            }[];
                                        };
                                    }[];
                                    /**
                                     * @description Array of other products that can be bought together with the product in question.
                                     * @example []
                                     */
                                    BuyTogether: unknown[];
                                    /**
                                     * @description Item metadata attachment.
                                     * @example []
                                     */
                                    ItemMetadataAttachment: unknown[];
                                    /**
                                     * @description Price of the product.
                                     * @example 42
                                     */
                                    Price: number;
                                    /**
                                     * @description List price of the product.
                                     * @example 42
                                     */
                                    ListPrice: number;
                                    /**
                                     * @description Price of the product without discount.
                                     * @example 42
                                     */
                                    PriceWithoutDiscount: number;
                                    /**
                                     * @description Reward value of the product.
                                     * @example 0
                                     */
                                    RewardValue: number;
                                    /**
                                     * @description Price of the product valid until a certain date.
                                     * @example 4000-01-01T03:00:00Z
                                     */
                                    PriceValidUntil: string;
                                    /**
                                     * @description Use the `IsAvailable` field instead.
                                     * @example 16
                                     */
                                    AvailableQuantity: number;
                                    /**
                                     * @description If the product is available or not.
                                     * @example true
                                     */
                                    IsAvailable: boolean;
                                    /**
                                     * @description Tax of the product.
                                     * @example 0
                                     */
                                    Tax: number;
                                    /**
                                     * @description Trade policy which the product is contained.
                                     * @example 0
                                     */
                                    SaleChannel: number;
                                    /**
                                     * @description Delivery SLA samples.
                                     * @example [
                                     *       {
                                     *         "DeliverySlaPerTypes": [],
                                     *         "Region": null
                                     *       }
                                     *     ]
                                     */
                                    DeliverySlaSamples: {
                                        /**
                                         * @description Delivery SLA per types.
                                         * @example []
                                         */
                                        DeliverySlaPerTypes: unknown[];
                                        /**
                                         * @description Region.
                                         * @example null
                                         */
                                        Region: string | null;
                                    }[];
                                    /**
                                     * @description Get info error message.
                                     * @example null
                                     */
                                    GetInfoErrorMessage: string | null;
                                    /**
                                     * @description Cache version used to call checkout.
                                     * @example 95EF7E5476DF276E679167A399FE3103_
                                     */
                                    CacheVersionUsedToCallCheckout: string;
                                    /**
                                     * @description Payment options.
                                     * @example {
                                     *       "installmentOptions": [
                                     *         {
                                     *           "paymentSystem": "2",
                                     *           "bin": null,
                                     *           "paymentName": "Visa",
                                     *           "paymentGroupName": "creditCardPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 2,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 2100,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 2,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 2100,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 3,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1400,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 3,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1400,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             },
                                     *             {
                                     *               "count": 4,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 1050,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 4,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 1050,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         },
                                     *         {
                                     *           "paymentSystem": "17",
                                     *           "bin": null,
                                     *           "paymentName": "Promissory",
                                     *           "paymentGroupName": "promissoryPaymentGroup",
                                     *           "value": 4200,
                                     *           "installments": [
                                     *             {
                                     *               "count": 1,
                                     *               "hasInterestRate": false,
                                     *               "interestRate": 0,
                                     *               "value": 4200,
                                     *               "total": 4200,
                                     *               "sellerMerchantInstallments": [
                                     *                 {
                                     *                   "id": "MERCH",
                                     *                   "count": 1,
                                     *                   "hasInterestRate": false,
                                     *                   "interestRate": 0,
                                     *                   "value": 4200,
                                     *                   "total": 4200
                                     *                 }
                                     *               ]
                                     *             }
                                     *           ]
                                     *         }
                                     *       ],
                                     *       "paymentSystems": [
                                     *         {
                                     *           "id": 17,
                                     *           "name": "Promissory",
                                     *           "groupName": "promissoryPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "17",
                                     *           "template": "promissoryPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         },
                                     *         {
                                     *           "id": 2,
                                     *           "name": "Visa",
                                     *           "groupName": "creditCardPaymentGroup",
                                     *           "validator": null,
                                     *           "stringId": "2",
                                     *           "template": "creditCardPaymentGroup-template",
                                     *           "requiresDocument": false,
                                     *           "isCustom": false,
                                     *           "description": null,
                                     *           "requiresAuthentication": false,
                                     *           "dueDate": "2021-07-01T18:43:00.0264384Z",
                                     *           "availablePayments": null
                                     *         }
                                     *       ],
                                     *       "payments": [],
                                     *       "giftCards": [],
                                     *       "giftCardMessages": [],
                                     *       "availableAccounts": [],
                                     *       "availableTokens": []
                                     *     }
                                     */
                                    PaymentOptions: {
                                        /**
                                         * @description installment options.
                                         * @example [
                                         *       {
                                         *         "paymentSystem": "2",
                                         *         "bin": null,
                                         *         "paymentName": "Visa",
                                         *         "paymentGroupName": "creditCardPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 2,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 2100,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 2,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 2100,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 3,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1400,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 3,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1400,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           },
                                         *           {
                                         *             "count": 4,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 1050,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 4,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 1050,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       },
                                         *       {
                                         *         "paymentSystem": "17",
                                         *         "bin": null,
                                         *         "paymentName": "Promissory",
                                         *         "paymentGroupName": "promissoryPaymentGroup",
                                         *         "value": 4200,
                                         *         "installments": [
                                         *           {
                                         *             "count": 1,
                                         *             "hasInterestRate": false,
                                         *             "interestRate": 0,
                                         *             "value": 4200,
                                         *             "total": 4200,
                                         *             "sellerMerchantInstallments": [
                                         *               {
                                         *                 "id": "MERCH",
                                         *                 "count": 1,
                                         *                 "hasInterestRate": false,
                                         *                 "interestRate": 0,
                                         *                 "value": 4200,
                                         *                 "total": 4200
                                         *               }
                                         *             ]
                                         *           }
                                         *         ]
                                         *       }
                                         *     ]
                                         */
                                        installmentOptions: {
                                            /**
                                             * @description Payment system.
                                             * @example 2
                                             */
                                            paymentSystem: string;
                                            /**
                                             * @description Bin.
                                             * @example null
                                             */
                                            bin: string | null;
                                            /**
                                             * @description Payment name.
                                             * @example Visa
                                             */
                                            paymentName: string;
                                            /**
                                             * @description Payment group name.
                                             * @example creditCardPaymentGroup
                                             */
                                            paymentGroupName: string;
                                            /**
                                             * @description Value.
                                             * @example 4200
                                             */
                                            value: number;
                                            /**
                                             * @description Installments.
                                             * @example [
                                             *       {
                                             *         "count": 1,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 4200,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 1,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 4200,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       },
                                             *       {
                                             *         "count": 2,
                                             *         "hasInterestRate": false,
                                             *         "interestRate": 0,
                                             *         "value": 2100,
                                             *         "total": 4200,
                                             *         "sellerMerchantInstallments": [
                                             *           {
                                             *             "id": "MERCH",
                                             *             "count": 2,
                                             *             "hasInterestRate": false,
                                             *             "interestRate": 0,
                                             *             "value": 2100,
                                             *             "total": 4200
                                             *           }
                                             *         ]
                                             *       }
                                             *     ]
                                             */
                                            installments: {
                                                /**
                                                 * @description Count.
                                                 * @example 1
                                                 */
                                                count: number;
                                                /**
                                                 * @description Has interest rate.
                                                 * @example false
                                                 */
                                                hasInterestRate: boolean;
                                                /**
                                                 * @description Interest rate.
                                                 * @example 0
                                                 */
                                                interestRate: number;
                                                /**
                                                 * @description Value.
                                                 * @example 4200
                                                 */
                                                value: number;
                                                /**
                                                 * @description Total.
                                                 * @example 4200
                                                 */
                                                total: number;
                                                /**
                                                 * @description Seller merchant installments.
                                                 * @example [
                                                 *       {
                                                 *         "id": "MERCH",
                                                 *         "count": 1,
                                                 *         "hasInterestRate": false,
                                                 *         "interestRate": 0,
                                                 *         "value": 4200,
                                                 *         "total": 4200
                                                 *       }
                                                 *     ]
                                                 */
                                                sellerMerchantInstallments: {
                                                    /**
                                                     * @description ID.
                                                     * @example MERCH
                                                     */
                                                    id: string;
                                                    /**
                                                     * @description Count.
                                                     * @example 1
                                                     */
                                                    count: number;
                                                    /**
                                                     * @description Has interest rate.
                                                     * @example false
                                                     */
                                                    hasInterestRate: boolean;
                                                    /**
                                                     * @description Interest rate.
                                                     * @example 0
                                                     */
                                                    interestRate: number;
                                                    /**
                                                     * @description Value.
                                                     * @example 4200
                                                     */
                                                    value: number;
                                                    /**
                                                     * @description Total.
                                                     * @example 4200
                                                     */
                                                    total: number;
                                                }[];
                                            }[];
                                        }[];
                                        /**
                                         * @description Payment systems.
                                         * @example [
                                         *       {
                                         *         "id": 17,
                                         *         "name": "Promissory",
                                         *         "groupName": "promissoryPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "17",
                                         *         "template": "promissoryPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       },
                                         *       {
                                         *         "id": 2,
                                         *         "name": "Visa",
                                         *         "groupName": "creditCardPaymentGroup",
                                         *         "validator": null,
                                         *         "stringId": "2",
                                         *         "template": "creditCardPaymentGroup-template",
                                         *         "requiresDocument": false,
                                         *         "isCustom": false,
                                         *         "description": null,
                                         *         "requiresAuthentication": false,
                                         *         "dueDate": "2021-07-01T18:43:00.0264384Z",
                                         *         "availablePayments": null
                                         *       }
                                         *     ]
                                         */
                                        paymentSystems: {
                                            /**
                                             * @description ID.
                                             * @example 17
                                             */
                                            id: number;
                                            /**
                                             * @description Name.
                                             * @example Promissory
                                             */
                                            name: string;
                                            /**
                                             * @description Group name.
                                             * @example promissoryPaymentGroup
                                             */
                                            groupName: string;
                                            /**
                                             * @description Validator.
                                             * @example
                                             */
                                            validator: string | null;
                                            /**
                                             * @description String ID.
                                             * @example 17
                                             */
                                            stringId: string;
                                            /**
                                             * @description Template.
                                             * @example promissoryPaymentGroup-template
                                             */
                                            template: string;
                                            /**
                                             * @description If requires document or not.
                                             * @example false
                                             */
                                            requiresDocument: boolean;
                                            /**
                                             * @description If is custom or not.
                                             * @example false
                                             */
                                            isCustom: boolean;
                                            /**
                                             * @description Description.
                                             * @example
                                             */
                                            description: string | null;
                                            /**
                                             * @description If requires authentication.
                                             * @example false
                                             */
                                            requiresAuthentication: boolean;
                                            /**
                                             * @description Due date.
                                             * @example 2021-07-01T18:43:00.0264384Z
                                             */
                                            dueDate: string;
                                            /**
                                             * @description Available payments.
                                             * @example
                                             */
                                            availablePayments: string | null;
                                        }[];
                                        /**
                                         * @description Payments.
                                         * @example []
                                         */
                                        payments: unknown[];
                                        /**
                                         * @description GiftCards.
                                         * @example []
                                         */
                                        giftCards: unknown[];
                                        /**
                                         * @description GiftCardMessages.
                                         * @example []
                                         */
                                        giftCardMessages: unknown[];
                                        /**
                                         * @description Available accounts.
                                         * @example []
                                         */
                                        availableAccounts: unknown[];
                                        /**
                                         * @description Available tokens.
                                         * @example []
                                         */
                                        availableTokens: unknown[];
                                    };
                                };
                            }[];
                            /**
                             * @description Videos.
                             * @example []
                             */
                            Videos: unknown[];
                            /**
                             * @description Estimated date arrival.
                             * @example
                             */
                            estimatedDateArrival: string | null;
                        }[];
                    }[];
                };
            };
        };
    };
    Facetscategory: {
        parameters: {
            query: {
                /** @description Mapping of the term. It can be `c` for a category, `b` for a brand, or `specificationFilter_{specificationId}` for a specification. You need to include a map for each term you are searching for in the same term's order. */
                map: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Term used for the facet's search. You can search for as much term as you want. The term can be: `categoryId`, `brandId`, `specificationId`. */
                term: string;
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
                        /**
                         * @description Array of general information about the categories.
                         * @example [
                         *       {
                         *         "Quantity": 2,
                         *         "Position": null,
                         *         "Name": "Beers Beers Mesmo",
                         *         "Link": "/Beers-Beers-Mesmo/1?map=c,b",
                         *         "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
                         *         "Map": "c",
                         *         "Value": "Beers-Beers-Mesmo"
                         *       },
                         *       {
                         *         "Quantity": 2,
                         *         "Position": null,
                         *         "Name": "Merch Integration Category ||",
                         *         "Link": "/Merch-Integration-Category-||/1?map=c,b",
                         *         "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
                         *         "Map": "c",
                         *         "Value": "Merch-Integration-Category-||"
                         *       }
                         *     ]
                         */
                        Departments: {
                            /**
                             * @description Quantity of facets.
                             * @example 2
                             */
                            Quantity: number;
                            /**
                             * @description Position of the facets.
                             * @example 1
                             */
                            Position: number | null;
                            /**
                             * @description Category name.
                             * @example Beers Beers Mesmo
                             */
                            Name: string;
                            /**
                             * @description Link of the facet.
                             * @example /Beers-Beers-Mesmo/1?map=c,b
                             */
                            Link: string;
                            /**
                             * @description Encoded link of the facet.
                             * @example /Beers-Beers-Mesmo/1?map=c,b
                             */
                            LinkEncoded: string;
                            /**
                             * @description Mapping of the facet.
                             * @example c
                             */
                            Map: string;
                            /**
                             * @description Value of the facet.
                             * @example Beers-Beers-Mesmo
                             */
                            Value: string;
                        }[];
                        /**
                         * @description Array of general information about the brands.
                         * @example [
                         *       {
                         *         "Quantity": 2,
                         *         "Position": null,
                         *         "Name": "Merch XP",
                         *         "Link": "/1/1234600/1/Merch-XP?map=c,c,b,b",
                         *         "LinkEncoded": "/1/1234600/1/Merch-XP?map=c,c,b,b",
                         *         "Map": "b",
                         *         "Value": "Merch-XP"
                         *       },
                         *       {
                         *         "Quantity": 2,
                         *         "Position": null,
                         *         "Name": "Zé",
                         *         "Link": "/1/1234600/1/Ze?map=c,c,b,b",
                         *         "LinkEncoded": "/1/1234600/1/Ze?map=c,c,b,b",
                         *         "Map": "b",
                         *         "Value": "Ze"
                         *       }
                         *     ]
                         */
                        Brands: {
                            /**
                             * @description Quantity of facets.
                             * @example 2
                             */
                            Quantity: number;
                            /**
                             * @description Position of the facet.
                             * @example 1
                             */
                            Position: number | null;
                            /**
                             * @description Brand name.
                             * @example Merch XP
                             */
                            Name: string;
                            /**
                             * @description Link of the facet.
                             * @example /1/1234600/1/Merch-XP?map=c,c,b,b
                             */
                            Link: string;
                            /**
                             * @description Enconded link of the facet.
                             * @example /1/1234600/1/Merch-XP?map=c,c,b,b
                             */
                            LinkEncoded: string;
                            /**
                             * @description Mapping of the facet.
                             * @example b
                             */
                            Map: string;
                            /**
                             * @description Value of the facet.
                             * @example Merch-XP
                             */
                            Value: string;
                        }[];
                        /**
                         * @description Object with general information of specifications.
                         * @example {}
                         */
                        SpecificationFilters: Record<string, never>;
                        /**
                         * @description Array of the category tree.
                         * @example [
                         *       {
                         *         "Id": 1,
                         *         "Quantity": 4,
                         *         "Position": null,
                         *         "Name": "Beers Beers Mesmo",
                         *         "Link": "/Beers-Beers-Mesmo/1?map=c,b",
                         *         "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
                         *         "Map": "c",
                         *         "Value": "Beers-Beers-Mesmo",
                         *         "Children": [
                         *           {
                         *             "Id": 2,
                         *             "Quantity": 1,
                         *             "Position": null,
                         *             "Name": "Lager Beers",
                         *             "Link": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                         *             "LinkEncoded": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                         *             "Map": "c",
                         *             "Value": "Lager-Beers",
                         *             "Children": []
                         *           }
                         *         ]
                         *       },
                         *       {
                         *         "Id": 1234571,
                         *         "Quantity": 2,
                         *         "Position": null,
                         *         "Name": "Jogos",
                         *         "Link": "/Jogos/1?map=c,b",
                         *         "LinkEncoded": "/Jogos/1?map=c,b",
                         *         "Map": "c",
                         *         "Value": "Jogos",
                         *         "Children": []
                         *       }
                         *     ]
                         */
                        CategoriesTrees: {
                            /**
                             * @description Category ID.
                             * @example 1
                             */
                            Id: number;
                            /**
                             * @description Quantity of the facets.
                             * @example 4
                             */
                            Quantity: number;
                            /**
                             * @description Position of the facet.
                             * @example 1
                             */
                            Position: number | null;
                            /**
                             * @description Category name.
                             * @example Beers Beers Mesmo
                             */
                            Name: string;
                            /**
                             * @description Link of the facet.
                             * @example /Beers-Beers-Mesmo/1?map=c,b
                             */
                            Link: string;
                            /**
                             * @description Encoded link of the facet.
                             * @example /Beers-Beers-Mesmo/1?map=c,b
                             */
                            LinkEncoded: string;
                            /**
                             * @description Mapping of the facet.
                             * @example c
                             */
                            Map: string;
                            /**
                             * @description Value of the facet.
                             * @example Beers-Beers-Mesmo
                             */
                            Value: string;
                            /**
                             * @description Category children.
                             * @example [
                             *       {
                             *         "Id": 2,
                             *         "Quantity": 1,
                             *         "Position": null,
                             *         "Name": "Lager Beers",
                             *         "Link": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                             *         "LinkEncoded": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
                             *         "Map": "c",
                             *         "Value": "Lager-Beers",
                             *         "Children": []
                             *       }
                             *     ]
                             */
                            Children: {
                                /**
                                 * @description Category ID.
                                 * @example 1
                                 */
                                Id: number;
                                /**
                                 * @description Quantity of the facets.
                                 * @example 4
                                 */
                                Quantity: number;
                                /**
                                 * @description Position of the facet.
                                 * @example 1
                                 */
                                Position: number | null;
                                /**
                                 * @description Category name.
                                 * @example Beers Beers Mesmo
                                 */
                                Name: string;
                                /**
                                 * @description Link of the facet.
                                 * @example /Beers-Beers-Mesmo/1?map=c,b
                                 */
                                Link: string;
                                /**
                                 * @description Encoded link of the facet.
                                 * @example /Beers-Beers-Mesmo/1?map=c,b
                                 */
                                LinkEncoded: string;
                                /**
                                 * @description Mapping of the facet.
                                 * @example c
                                 */
                                Map: string;
                                /**
                                 * @description Value of the facet.
                                 * @example Beers-Beers-Mesmo
                                 */
                                Value: string;
                                /**
                                 * @description Category children.
                                 * @example []
                                 */
                                Children: unknown[];
                            }[];
                        }[];
                        /**
                         * @description Array with general information of the price ranges.
                         * @example []
                         */
                        PriceRanges: unknown[];
                        /**
                         * @description Summary of the facets.
                         * @example {
                         *       "Departments": {
                         *         "DisplayedItems": 8,
                         *         "TotalItems": 8
                         *       },
                         *       "CategoriesTrees": {
                         *         "DisplayedItems": 13,
                         *         "TotalItems": 13
                         *       },
                         *       "Brands": {
                         *         "DisplayedItems": 10,
                         *         "TotalItems": 10
                         *       },
                         *       "PriceRanges": {
                         *         "DisplayedItems": 0,
                         *         "TotalItems": 0
                         *       },
                         *       "SpecificationFilters": {}
                         *     }
                         */
                        Summary: {
                            /**
                             * @description Departments' quantity of displayed and total items.
                             * @example {
                             *       "DisplayedItems": 8,
                             *       "TotalItems": 8
                             *     }
                             */
                            Departments: {
                                /**
                                 * @description Quantity of displayed items.
                                 * @example 8
                                 */
                                DisplayedItems: number;
                                /**
                                 * @description Quantity of total items.
                                 * @example 8
                                 */
                                TotalItems: number;
                            };
                            /**
                             * @description Category tree's quantity of displayed and total items.
                             * @example {
                             *       "DisplayedItems": 13,
                             *       "TotalItems": 13
                             *     }
                             */
                            CategoriesTrees: {
                                /**
                                 * @description Quantity of displayed items.
                                 * @example 13
                                 */
                                DisplayedItems: number;
                                /**
                                 * @description Quantity of total items.
                                 * @example 13
                                 */
                                TotalItems: number;
                            };
                            /**
                             * @description Brands' quantity of displayed and total items.
                             * @example {
                             *       "DisplayedItems": 10,
                             *       "TotalItems": 10
                             *     }
                             */
                            Brands: {
                                /**
                                 * @description Quantity of displayed items.
                                 * @example 10
                                 */
                                DisplayedItems: number;
                                /**
                                 * @description Quantity of total items.
                                 * @example 10
                                 */
                                TotalItems: number;
                            };
                            /**
                             * @description Price ranges' quantity of displayed and total items.
                             * @example {
                             *       "DisplayedItems": 0,
                             *       "TotalItems": 0
                             *     }
                             */
                            PriceRanges: {
                                /**
                                 * @description Quantity of displayed items.
                                 * @example 0
                                 */
                                DisplayedItems: number;
                                /**
                                 * @description Quantity of total items.
                                 * @example 0
                                 */
                                TotalItems: number;
                            };
                            /**
                             * @description Specification filters' quantity of displayed and total items.
                             * @example {}
                             */
                            SpecificationFilters: Record<string, never>;
                        };
                    };
                };
            };
        };
    };
    AutoComplete: {
        parameters: {
            query: {
                /** @description Part of the string that will be searched. */
                productNameContains: string;
            };
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand  */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description Autocomplete returned items.
                         * @example [
                         *       {
                         *         "items": [],
                         *         "thumb": "",
                         *         "thumbUrl": null,
                         *         "name": "Cacilds in Coronas",
                         *         "href": "https://merch.vtexcommercestable.com.br/coronas/Cacilds",
                         *         "criteria": "£Cacilds in Coronas¢/coronas/Cacilds"
                         *       },
                         *       {
                         *         "items": [
                         *           {
                         *             "productId": "3",
                         *             "itemId": "5",
                         *             "name": "Llf",
                         *             "nameComplete": "Cacilds Llf",
                         *             "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/172754-25-25/Diablo.jpg?v=637521970448770000"
                         *           }
                         *         ],
                         *         "thumb": "<img src=\"https://merch.vteximg.com.br/arquivos/ids/155400-25-25/image-433ec3e72d7e4b94964481e843c9dd88.jpg?v=637172099619830000\" width=\"25\" height=\"25\" alt=\"image-433ec3e72d7e4b94964481e843c9dd88\" id=\"\" />",
                         *         "thumbUrl": "https://merch.vteximg.com.br/arquivos/ids/172754-25-25/Diablo.jpg?v=637521970448770000",
                         *         "name": "cacilds - llf",
                         *         "href": "https://merch.vtexcommercestable.com.br/bay-max-3/p",
                         *         "criteria": null
                         *       }
                         *     ]
                         */
                        itemsReturned: {
                            /**
                             * @description Array of products.
                             * @example [
                             *       {
                             *         "productId": "3",
                             *         "itemId": "5",
                             *         "name": "Llf",
                             *         "nameComplete": "Cacilds Llf",
                             *         "imageUrl": "https://merch.vteximg.com.br/arquivos/ids/172754-25-25/Diablo.jpg?v=637521970448770000"
                             *       }
                             *     ]
                             */
                            items: unknown[];
                            /**
                             * @description Item thumbnail.
                             * @example <img src="https://merch.vteximg.com.br/arquivos/ids/155400-25-25/image-433ec3e72d7e4b94964481e843c9dd88.jpg?v=637172099619830000" width="25" height="25" alt="image-433ec3e72d7e4b94964481e843c9dd88" id="" />
                             */
                            thumb: string;
                            /**
                             * @description Item thumbnail URL.
                             * @example https://merch.vteximg.com.br/arquivos/ids/172754-25-25/Diablo.jpg?v=637521970448770000
                             */
                            thumbUrl: string | null;
                            /**
                             * @description Item name.
                             * @example cacilds - llf
                             */
                            name: string;
                            /**
                             * @description Item URL.
                             * @example https://merch.vtexcommercestable.com.br/bay-max-3/p
                             */
                            href: string;
                            /**
                             * @description Item criteria.
                             * @example £Cacilds in Coronas¢/coronas/Cacilds
                             */
                            criteria: string | null;
                        }[];
                    };
                };
            };
        };
    };
}
