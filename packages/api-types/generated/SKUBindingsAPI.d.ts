export interface paths {
    "/catalog/pvt/skusellers/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU Bindings by SKU ID
         * @description Retrieves SKU Bindings details by SKU ID.
         *
         *     ## Response body example
         *
         *     ```json
         *     [
         *         {
         *             "Id": 48,
         *             "SellerId": "cosmetics1",
         *             "StockKeepingUnitId": 1,
         *             "SellerSkuId": "42",
         *             "IsActive": true,
         *             "LastUpdateDate": "2020-10-21T19:13:00.657",
         *             "SalesPolicy": 0
         *         }
         *     ]
         *     ```
         */
        get: operations["GetbySkuId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/admin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU Bindings information
         * @description Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.
         *
         *     ## Response body example
         *
         *     ```json
         *     [
         *         {
         *             "IsPersisted": true,
         *             "IsRemoved": false,
         *             "SkuSellerId": 1,
         *             "UpdateDate": "2019-12-04T01:56:00.673Z",
         *             "RequestedUpdateDate": null,
         *             "SellerStockKeepingUnitId": "12",
         *             "SellerId": "cosmetics1",
         *             "StockKeepingUnitId": 25,
         *             "IsActive": true
         *         }
         *     ]
         *     ```
         */
        get: operations["Getpagedadmin"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/{sellerId}/{sellerSkuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get details of a seller's SKU
         * @description Retrieves the details of a seller's SKU given a seller ID and the SKU ID in the seller's store.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.
         *
         *     ## Response body example
         *
         *     ```json
         *     {
         *         "IsPersisted": true,
         *         "IsRemoved": false,
         *         "SkuSellerId": 102,
         *         "UpdateDate": "2021-04-12T20:06:59.413Z",
         *         "RequestedUpdateDate": null,
         *         "SellerStockKeepingUnitId": "71",
         *         "SellerId": "vtxkfj7352",
         *         "StockKeepingUnitId": 1,
         *         "IsActive": true
         *     }
         *     ```
         */
        get: operations["GetSKUseller"];
        /**
         * Bind a seller's SKU to another SKU
         * @description Associates a seller's SKU to another marketplace SKU.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.
         *
         *     ## Request body example
         *
         *     ```json
         *     {
         *         "StockKeepingUnitId": 1
         *     }
         *     ```
         */
        put: operations["Bindtoanothersku"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/list/bysellerId/{sellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all SKU Bindings by Seller ID
         * @description Retrieves a list of SKU Bindings given a specific Seller ID.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.
         *
         *     ## Response body example
         *
         *     ```json
         *     [
         *         {
         *             "SellerStockKeepingUnitId": "24",
         *             "FreightCommissionPercentage": null,
         *             "ProductCommissionPercentage": null,
         *             "SellerId": "vtxkfj7352",
         *             "StockKeepingUnitId": 121,
         *             "IsActive": true
         *         }
         *     ]
         *     ```
         */
        get: operations["GetallbySellerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/paged/sellerid/{sellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get paged SKU Bindings by Seller ID
         * @description Retrieves a paged list of SKU Bindings given a specific Seller ID.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.
         *
         *     ## Response body example
         *
         *     ```json
         *     [
         *         {
         *             "SellerId": "vtxkfj7352",
         *             "StockKeepingUnitId": 121,
         *             "SellerStockKeepingUnitId": "24",
         *             "IsActive": true,
         *             "FreightCommissionPercentage": null,
         *             "ProductCommissionPercentage": null
         *         },
         *         {
         *             "SellerId": "vtxkfj7352",
         *             "StockKeepingUnitId": 14,
         *             "SellerStockKeepingUnitId": "60",
         *             "IsActive": true,
         *             "FreightCommissionPercentage": null,
         *             "ProductCommissionPercentage": null
         *         }
         *     ]
         *     ```
         */
        get: operations["GetpagedbySellerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/changenotification/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change Notification with SKU ID
         * @description The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
         *
         *     With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.
         *
         *     The body of the request should be empty.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.
         */
        post: operations["ChangeNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change Notification with Seller ID and Seller SKU ID
         * @description The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.
         *
         *     With this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.
         *
         *     There are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.
         *
         *     Both information are passed through the request URL. The body of the request should be empty.
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.
         *
         *     ## Example
         *
         *     Let's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.
         *
         *     In this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.
         *
         *     ```
         *     https://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700
         *     ```
         *
         *     ## Response codes
         *
         *     The following response codes are possible for this request.
         *     * 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.
         *     * 403: Failure in the authentication.
         *     * 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: "Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.
         *     * 429: Failure due to too many requests.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Describes the type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                    sellerId: string;
                    /** @description ID of the binding of the seller with the SKU. */
                    sellerSkuId: string;
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
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Too many requests */
                429: {
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
    "/sku-binding/pvt/skuseller/insertion": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Insert SKU Binding
         * @description Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.
         */
        post: operations["InsertSKUBinding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/activate/{sellerId}/{skuSellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Activate SKU Binding
         * @description Changes the status of an SKU Binding to active, setting `isActive` to `true`.
         *
         *      > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.
         */
        post: operations["ActivateSKUBinding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Deactivate SKU Binding
         * @description Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.
         *
         *       > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.
         */
        post: operations["DeactivateSKUBinding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sku-binding/pvt/skuseller/remove/{sellerId}/{sellerSkuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove a seller's SKU Binding
         * @description Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.
         *
         *       > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.
         */
        post: operations["DeleteSKUsellerassociation"];
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
    GetbySkuId: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU's unique identifier in the marketplace. */
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
                         * Format: int32
                         * @description SKU Binding ID.
                         */
                        Id?: number;
                        /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                        SellerId?: string;
                        /**
                         * Format: int32
                         * @description SKU ID in the VTEX marketplace.
                         */
                        StockKeepingUnitId?: number;
                        /** @description SKU seller ID. */
                        SellerSkuId?: string;
                        /** @description Defines if the SKU binding is active. */
                        IsActive?: boolean;
                        /** @description Date when the SKU binding was updated for the last time, in UTC format. */
                        LastUpdateDate?: string;
                        /**
                         * Format: int32
                         * @description Sales policy ID.
                         */
                        SalesPolicy?: number;
                    }[];
                };
            };
        };
    };
    Getpagedadmin: {
        parameters: {
            query?: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId?: string;
                /** @description SKU's unique identifier in the marketplace. */
                skuId?: string;
                /** @description SKU ID in the seller's store. */
                sellerSkuId?: string;
                /** @description Defines if the SKU binding is active. */
                isActive?: boolean;
                /** @description Amount of results. */
                size?: string;
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
                        /** @description Defines if the seller is persisted. */
                        IsPersisted?: boolean;
                        /** @description Defines if the seller is removed. */
                        IsRemoved?: boolean;
                        /**
                         * Format: int32
                         * @description SKU Binding ID.
                         */
                        SkuSellerId?: number;
                        /** @description Date when the SKU binding was updated for the last time, in UTC format. */
                        UpdateDate?: string;
                        /** @description Date when an SKU binding update was requested for the last time, in UTC format. */
                        RequestedUpdateDate?: string | null;
                        /** @description SKU ID in the seller's store. */
                        SellerStockKeepingUnitId?: string;
                        /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                        SellerId?: string;
                        /**
                         * Format: int32
                         * @description SKU ID in the VTEX marketplace.
                         */
                        StockKeepingUnitId?: number;
                        /** @description Defines if the SKU binding is active. */
                        IsActive?: boolean;
                    };
                };
            };
        };
    };
    GetSKUseller: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
                /** @description SKU ID in the seller's store. */
                sellerSkuId: string;
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
                        /** @description Defines if the seller is persisted. */
                        IsPersisted: boolean;
                        /** @description Defines if the seller is removed. */
                        IsRemoved: boolean;
                        /**
                         * Format: int32
                         * @description SKU ID in the seller's store.
                         */
                        SkuSellerId: number;
                        /** @description Date when the SKU binding was updated for the last time, in UTC format. */
                        UpdateDate: string;
                        /** @description Date when an SKU binding update was requested for the last time, in UTC format. */
                        RequestedUpdateDate: string | null;
                        /** @description SKU seller ID. */
                        SellerStockKeepingUnitId: string;
                        /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                        SellerId: string;
                        /**
                         * Format: int32
                         * @description SKU ID in the VTEX marketplace.
                         */
                        StockKeepingUnitId: number;
                        /** @description Defines if the SKU binding is active. */
                        IsActive: boolean;
                    };
                };
            };
        };
    };
    Bindtoanothersku: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
                /** @description SKU ID in the seller's store. */
                sellerSkuId: string;
            };
            cookie?: never;
        };
        /** @description Request body */
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: int32
                     * @description SKU ID in the marketplace.
                     * @example 1
                     */
                    StockKeepingUnitId: number;
                };
            };
        };
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
    GetallbySellerId: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
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
                        /** @description SKU ID in the seller's store. */
                        SellerStockKeepingUnitId?: string;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. */
                        FreightCommissionPercentage?: number | null;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        ProductCommissionPercentage?: number | null;
                        /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                        SellerId?: string;
                        /**
                         * Format: int32
                         * @description SKU ID in the marketplace.
                         */
                        StockKeepingUnitId?: number;
                        /** @description Defines if the SKU binding is active. */
                        IsActive?: boolean;
                    }[];
                };
            };
        };
    };
    GetpagedbySellerId: {
        parameters: {
            query: {
                /** @description Page number. */
                page: string;
                /** @description Amount of results per page. */
                size: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
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
                        /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                        SellerId?: string;
                        /**
                         * Format: int32
                         * @description SKU ID in the marketplace.
                         */
                        StockKeepingUnitId?: number;
                        /** @description SKU ID in the seller's store. */
                        SellerStockKeepingUnitId?: string;
                        /** @description Defines if the SKU binding is active. */
                        IsActive?: boolean;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. */
                        FreightCommissionPercentage?: number | null;
                        /** @description The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`. */
                        ProductCommissionPercentage?: number | null;
                    }[];
                };
            };
        };
    };
    ChangeNotification: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use to look for the SKU whose change the seller wants to inform. If the marketplace finds this ID, it responds with status code `200`. Otherwise, it responds with status code `404`. */
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
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    InsertSKUBinding: {
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
        /** @description Request body */
        requestBody: {
            content: {
                /** @example {
                 *       "StockKeepingUnitId": 1,
                 *       "IsActive": true,
                 *       "SellerId": "vtxkfj7352",
                 *       "SellerStockKeepingUnitId": "71"
                 *     } */
                "application/json": {
                    /**
                     * Format: int32
                     * @description SKU ID in the marketplace.
                     */
                    StockKeepingUnitId: number;
                    /** @description Defines if the SKU binding is active. */
                    IsActive: boolean;
                    /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                    SellerId: string;
                    /** @description SKU seller ID. */
                    SellerStockKeepingUnitId: string;
                };
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
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ActivateSKUBinding: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
                /** @description SKU ID in the seller's store. */
                skuSellerId: string;
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
    DeactivateSKUBinding: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
                /** @description SKU ID in the seller's store. */
                skuSellerId: string;
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
    DeleteSKUsellerassociation: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID. */
                sellerId: string;
                /** @description SKU ID in the seller's store. */
                sellerSkuId: string;
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
}
