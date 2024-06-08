export interface paths {
    "/suggestions/configuration/autoapproval/toggle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get autoApprove Status in Account Settings
         * @description This endpoint can be used to check whether the autoapprove setting is active or not, for a specific seller.
         *
         *     If the response is `true`, the autoapprove setting is active. If the response is `false`, it is inactive.
         */
        get: operations["GetautoApprovevaluefromconfig"];
        /**
         * Activate autoApprove in Marketplace's Account
         * @description This endpoint enables the autoapprove rule to a marketplace's whole Received SKUs module. Once enabling the rule, received SKUs will be automatically approved on your store, regardless of the seller.
         *
         *      For the autoapprove rule to work as expected, the approval [Matcher score](https://help.vtex.com/en/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) should be set up as 80 (default value), but you can configure a different number through the field `Score` in [Save Account's Approval Settings](https://developers.vtex.com/vtex-rest-api/reference/saveaccountconfig).
         */
        put: operations["Saveautoapproveforaccount"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/configuration": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Account's Approval Settings
         * @description This endpoint retrieves the current approval settings of a marketplace's Received SKUs module. Its response includes:
         *
         *     - `Score`: Matcher scores for approving and rejecting SKUs received from sellers.
         *
         *     - `Matchers`: All Matchers configured on the marketplace, and their respective details.
         *
         *     - `SpecificationsMapping`: Mapping of product and SKU specifications, per seller.
         *
         *     - `MatchFlux`: This field determines the type of approval configuration applied to SKUs received from a seller.
         *
         *     The possible values include:
         *
         *     -`default`, where the Matcher reviews the SKU, and approves it based on its score.
         *
         *     -`manual`, for manual approvals through the Received SKU UI, or Match API.
         *
         *     -`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of their Matcher Score.
         */
        get: operations["Getaccountconfig"];
        /**
         * Save Account's Approval Settings
         * @description Marketplaces use this endpoint to create or update approval settings on their Received SKUs module.
         *
         *     The request includes all the details necessary to implement the chosen approval settings.
         */
        put: operations["Saveaccountconfig"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/configuration/account/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Account's Matcher Settings
         * @description This endpoint will be used by the marketplace to query the matcher's current approval settings on their incoming SKUs module. If the account has no matcher configured, the response will be `404 Not Found`.
         *
         *     For account approval configuration information, with response including specification information, see [Get Account Approval Settings](https://developers.vtex.com/docs/api-reference/marketplace-apis- suggestions#get-/suggestions /configuration) terminal.
         *
         *     The [VTEX matcher](https://help.vtex.com/pt/tutorial/entendendo-a-punctuacao-do-vtex-matcher--tutorials_424) is a tool used by marketplaces to evaluate SKUs corresponding to information from an advertisement of the seller, with those of items already present in the marketplace catalog.
         */
        get: operations["Getmatchconfig"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/configuration/seller/{sellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Seller's Approval Settings
         * @description This endpoint retrieves the current Received SKUs approval settings applied to a specific seller. Its response includes:
         *
         *     - `sellerId`: A string that identifies the seller in the marketplace.
         *
         *     - `accountId`: Marketplace’s account ID.
         *
         *     - `accountName`: Marketplace’s account name.
         *
         *     - `mapping`: Mapping of SKU and product Specifications.
         *
         *     - `matchFlux`: This field determines the type of approval configuration applied to SKUs received  from a seller.
         *
         *     The possible values include:
         *
         *     -`default`, where the Matcher reviews the SKU, and approves it based on its score.
         *
         *     -`manual`, for manual approvals through the Received SKU UI and Match API.
         *
         *     -`autoApprove`, for every SKU received from a given seller to be approved automatically                                                   , regardless of the Matcher Score.
         */
        get: operations["Getselleraccountconfig"];
        /**
         * Save Seller's Approval Settings
         * @description Marketplaces use this endpoint to create or update approval settings to a specific seller, on the Received SKUs module.
         *
         *     The request includes all the details necessary to implement the chosen approval settings.
         */
        put: operations["Putselleraccountconfig"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/configuration/autoapproval/toggle/seller/{sellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Activate autoApprove Setting for a Seller
         * @description This endpoint enables the auto approve setting to received SKUs from a specific seller. Be aware that once enabling the rule through this request, all received SKUs from that seller will be automatically approved on your store, regardless of the Matcher Score.
         */
        put: operations["Saveautoapproveforaccountseller"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all SKU suggestions
         * @description This endpoint retrieves a list of all SKUs sent by the seller for the Marketplace's approval. Marketplace operators should use this endpoint whenever they want to check the full list of received SKUs and their  information.
         *
         *     Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher.
         *
         *     Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been:
         *
         *     `Approved`: score equal to or greater than 80 points.
         *
         *     `Pending`: from 31 to 79 points.
         *
         *     `Denied`: from 0 to 30 points.
         *
         *     Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
         */
        get: operations["Getsuggestions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/{sellerId}/{sellerSkuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get SKU Suggestion by ID
         * @description This endpoint retrieves the data of a specific SKU sent by the seller, to the marketplace. Marketplaces or external matchers can call this endpoint when they want to check the information about a single SKU.
         *
         *     Note that all the information sent by the seller will be in the [content] object. All remaining information in this endpoint's response is given by the Matcher.
         *
         *     Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been:
         *
         *     `Approved`: score equal to or greater than 80 points.
         *
         *     `Pending`: from 31 to 79 points.
         *
         *     `Denied`: from 0 to 30 points.
         *
         *     Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
         */
        get: operations["GetSuggestion"];
        /**
         * Send SKU Suggestion
         * @description This request is used by the seller when it wants to suggest that one of their SKUs is sold in the marketplace.
         *
         *     Before using this request, the seller should always use the [Change Notification](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-seller-sku-notification) request in order to check if the SKU already exists in the marketplace. If it doesn't, then this is the next call in the SKU integration flow.
         *
         *     In the Send Suggestion request, the seller must send information about the SKU, such as the product and SKU name, the seller ID, and the image URL. All parameters are explained below.
         */
        put: operations["SaveSuggestion"];
        post?: never;
        /**
         * Delete SKU Suggestion
         * @description This endpoint deletes a chosen SKU suggestion. Only one SKU should be deleted per request. This request cannot be undone. A workaround to revert its action, is to send the suggestion again, through the Send Suggestion API.
         */
        delete: operations["DeleteSuggestion"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/{sellerId}/{sellerskuid}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all Versions
         * @description Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions.
         *
         *     This endpoint retrieves the data of *all* previous and latest versions of a specific SKU suggestion, sent by the seller. Whenever an SKU is updated, it is important to map previous versions, to compare and identify changes.
         *
         *     The response's object [latestversion] provides the information of the most recent version of that SKU suggestion.
         */
        get: operations["GetVersions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/{sellerId}/{sellerskuid}/versions/{version}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Version by ID
         * @description Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions.
         *
         *     This endpoint retrieves a specific *version* of a chosen SKU sent by the seller. Add the Seller's ID, Seller's SKU ID, and version ID in the path to detail your search.
         */
        get: operations["GetSuggestionbyversion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/{sellerId}/{sellerskuid}/versions/{version}/matches/{matchid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Match Received SKUs individually
         * @description All SKUs sent from a seller to a marketplace must be reviewed and matched. Actions in the matching process are added in the request body through the [matchType] object. Match type actions include:
         *
         *     1. `newproduct`: match the SKU as a new product.
         *
         *     2. `itemMatch`: associate the received SKU to an existing SKU.
         *
         *     3. `productMatch`: associate the received SKU to an existing product.
         *
         *     4. `deny`: deny the received SKU.
         *
         *     5. `pending`: the received SKU requires attention.
         *
         *     6. `incomplete`: the received SKU is lacking information to be matched.
         *
         *     7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched.
         *
         *     Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
         */
        put: operations["Match"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/suggestions/matches/action/{actionName}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Match Multiple Received SKUs
         * @description Allows a marketplace to bulk approve, deny, or associate up to 25 received SKUs from sellers.
         *
         *     Through the `actionName` attribute, you can select the operation you want to apply to the received SKU. Actions include:
         *
         *     * `newproduct`: match the SKU as a new product.
         *
         *     * `skuassociation`: associate the received SKU to an existing SKU.
         *
         *     * `productassociation`: associate the received SKU to an existing product.
         *
         *     * `deny`: deny the received SKU.
         */
        put: operations["MatchMultiple"];
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
        /** SaveautoapproveforaccountRequest */
        SaveautoapproveforaccountRequest: {
            /**
             * @description Insert `true` if you wish to activate the autoapprove rule for an entire marketplace account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all received SKUs will be automatically approved on your store, regardless of the seller, or the Matcher Score.
             * @default true
             */
            Enabled: boolean;
        };
        /**
         * SaveaccountconfigRequest
         * @example {
         *       "Score": {
         *         "Approve": 80,
         *         "Reject": 30
         *       },
         *       "Matchers": [
         *         {
         *           "MatcherId": "vtex-matcher",
         *           "hook-base-address": "http://simple-suggestion-matcher.vtex.com.br",
         *           "IsActive": true,
         *           "UpdatesNotificationEndpoint": null,
         *           "Description": null
         *         }
         *       ],
         *       "SpecificationsMapping": [],
         *       "MatchFlux": "AutoApprove"
         *     }
         */
        SaveaccountconfigRequest: {
            Score: components["schemas"]["Score"];
            /** @description Matchers for approving and rejecting SKUs received from sellers. */
            Matchers: components["schemas"]["Matcher"][];
            /** @description This attribute maps product and SKU specifications. */
            SpecificationsMapping: string[];
            /**
             * @description This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include:
             *
             *     - `default` where the Matcher reviews the SKU, and approves it based on its score
             *
             *     - `manual` for manual approvals through the Received SKU UI or Match API
             *
             *     - `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.
             * @default autoApprove
             */
            MatchFlux: string;
        };
        /**
         * Score
         * @description Matcher rates received SKUs by comparing the data sent by sellers to existing fields in the marketplace. The calculation of these scores determines whether the product has been: `Approved` or `Denied`.
         */
        Score: {
            /**
             * Format: int32
             * @description Insert in this field the desired minimum score to approve SKUs. If this field is set as 99, it means all approvals will be made manually.
             * @default 80
             */
            Approve: number;
            /**
             * Format: int32
             * @description Insert in this field the desired maximum score to reject SKUs.
             * @default 30
             */
            Reject: number;
        };
        /** Matcher */
        Matcher: {
            /**
             * @description Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
             * @default vtex-matcher
             */
            MatcherId: string;
            /**
             * @description The chosen Matcher's url. It is the endpoint that the Received SKUs module calls, to send new suggestions for the Matcher's review.
             * @default http://simple-suggestion-matcher.vtex.com.br
             */
            "hook-base-address": string;
            /**
             * @description Whether the matcher is active in the account (`true`), or not (`false`).
             * @default true
             */
            IsActive: boolean;
            /**
             * @description The Received SKUs module uses this endpoint to send updates about a suggestion, to the chosen Matcher.
             * @default null
             */
            UpdatesNotificationEndpoint: string | null;
            /**
             * @description Insert in this field any notes about the approval. This field is optional.
             * @default null
             */
            Description: string | null;
        };
        /**
         * GetAccountsMatcherSettings
         * @description Response from Get Account's Matcher Settings endpoint with information about current matcher score setting, rules, spec mapping, and matchFlux.
         */
        responseGetAccountsMatcherSettings: {
            /** @description [Matcher](https://help.vtex.com/pt/tutorial/entendendo-a-pontuacao-do-vtex-matcher--tutorials_424) rates received SKUs by comparing the data sent by sellers to existing fields in the marketplace. The calculation of these scores determines whether the product has been: `Approved`, `Pending` or `Denied`. */
            score?: {
                /**
                 * @description Minimum approval score set by the marketplace.
                 * @default 80
                 */
                approve: number;
                /**
                 * @description Minimum value for the ad to be pending.
                 * @default 31
                 */
                pending: number;
                /**
                 * @description Bounce score set by marketplace.
                 * @default 30
                 */
                reject: number;
            };
            /** @description Array of objects that presents a list of matchers configured in the marketplace. If the marketplace has more than one matcher configured in the account, an array will be displayed for each matcher.
             *
             *      By default, the VTEX Matcher is set up automatically in VTEX account. */
            matchers?: {
                /** @description The Matcher Id. */
                matcherId?: string;
                /** @description The base address of the Matcher hook. */
                "hook-base-address"?: string;
                /**
                 * @description Indicates if Matcher is active or not. `TRUE` = Matcher is active or `FALSE` = Matcher is inactive.
                 * @default true
                 */
                isActive: boolean;
            }[];
            /** @description Arrays object that contains the rules defined for product approval. */
            rules?: {
                /** @description A list of rules for items. */
                item?: unknown[];
                /** @description A list of rules for products. */
                product?: unknown[];
            };
            /** @description This field will show a list of which product specs and SKU are configured to be mapped. */
            specificationsMapping?: unknown[];
            /** @description This field shows what type of approval setting is being applied to SKUs received from a seller.
             *
             *     Possible values include:
             *
             *     -`default`: where Matcher reviews the SKU and approves it based on its score.
             *
             *     -`manual`: for manual approvals via incoming SKU UI or mailing API.
             *
             *     -`autoApprove`: so that every SKU received from a given seller is automatically approved, regardless of its Matcher Score. */
            matchFlux?: string;
        };
        /** SaveautoapproveforaccountsellerRequest */
        SaveautoapproveforaccountsellerRequest: {
            /**
             * @description Insert `true` if you wish to activate the autoapprove rule for that specific seller account. Insert `false` if you wish to deactivate it. Be aware that once enabling the setting through this request, all SKUs received from this seller will be automatically approved on your store regardless of the Matcher Score.
             * @default true
             */
            Enabled: boolean;
        };
        /** PutselleraccountconfigRequest */
        PutselleraccountconfigRequest: {
            /**
             * @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
             * @default seller123
             */
            sellerId: string;
            /**
             * @description Mapping of SKU and product Specifications. This object should be sent in the following format for all fields you wish to map:
             *
             *     {specificationName}:{specificationValue},
             *
             *     Example:
             *
             *     Choose voltage: Voltage,
             *
             *     Choose size: Size
             * @default {
             *       "Choose voltage": "Voltage",
             *       "Choose size": "Size",
             *       "Choose volume": "Volume",
             *       "Choose type": "Type"
             *     }
             */
            mapping: Record<string, never>;
            /**
             * @description This field determines the type of approval configuration applied to SKUs received  from a seller. The possible values include:
             *
             *     - `default` where the Matcher reviews the SKU, and approves it based on its score
             *
             *     - `manual` for manual approvals through the Received SKU UI or Match API
             *
             *     - `autoApprove` for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.
             * @default autoApprove
             */
            matchFlux: string;
        };
        /**
         * SaveSuggestionRequest
         * @default {
         *       "ProductId": "321",
         *       "ProductName": "Product sample",
         *       "NameComplete": "My complete product name?",
         *       "ProductDescription": "sample",
         *       "BrandName": "Brand 1",
         *       "SkuName": "Sku sample",
         *       "SellerId": "123",
         *       "Height": 1,
         *       "Width": 1,
         *       "Length": 1,
         *       "Weight": 1,
         *       "Updated": null,
         *       "RefId": "REFID123",
         *       "SellerStockKeepingUnitId": 567,
         *       "CategoryFullPath": "Category 1",
         *       "Images": [
         *         {
         *           "imageName": "Principal",
         *           "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
         *         }
         *       ],
         *       "ProductSpecifications": [
         *         {
         *           "fieldName": "prodspec1",
         *           "fieldValues": [
         *             "value1",
         *             "value2"
         *           ]
         *         }
         *       ],
         *       "SkuSpecifications": [
         *         {
         *           "fieldName": "skuspec1",
         *           "fieldValues": [
         *             "value1",
         *             "value2"
         *           ]
         *         }
         *       ],
         *       "EAN": "EAN123",
         *       "MeasurementUnit": "un",
         *       "UnitMultiplier": 1,
         *       "AvailableQuantity": 111,
         *       "Pricing": {
         *         "Currency": "BRL",
         *         "SalePrice": 399,
         *         "CurrencySymbol": "R$"
         *       }
         *     }
         */
        SaveSuggestionRequest: {
            /**
             * @description Name of the suggested product. This field has a limit of 150 characters.
             * @default
             */
            ProductName: string;
            /**
             * @description Product ID in seller's account.
             * @default 1234
             */
            ProductId: string;
            /** @description Product Description containing the main information about the product (not the SKU). */
            ProductDescription: string;
            /** @description Name of the brand to which this SKU belongs. It must match the brand created in the marketplace. */
            BrandName: string;
            /** @description Name of the suggested SKU. */
            SkuName: string;
            /**
             * @description ID of the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
             * @default 1
             */
            SellerId: string;
            /**
             * Format: decimal
             * @description Height of the SKU.
             * @default 10
             */
            Height: number;
            /**
             * Format: decimal
             * @description Width of the SKU.
             * @default 10
             */
            Width: number;
            /**
             * Format: decimal
             * @description Length of the SKU.
             * @default 10
             */
            Length: number;
            /**
             * Format: decimal
             * @description Weight of the SKU in grams.
             * @default 100
             */
            Weight: number;
            /**
             * @description SKU reference code. Mandotory if the EAN is not informed.
             * @default REF10
             */
            RefId: string;
            /**
             * @description SKU reference code. Mandatory if the RefId is not informed.
             * @default EAN10
             */
            EAN: string;
            /**
             * Format: int32
             * @description ID of the SKU registered in the seller.
             */
            SellerStockKeepingUnitId?: number;
            /** @description Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'. */
            CategoryFullPath: string;
            /** @description Array containing the names and values of the SKU specifications. */
            SkuSpecifications?: components["schemas"]["SkuSpecification"][];
            /** @description Array containing the names and values of the product specifications. */
            ProductSpecifications?: components["schemas"]["ProductSpecification"][];
            /** @description Array containing the URLs and names the SKU images. */
            Images: components["schemas"]["Image"][];
            /** @description Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value `un`. */
            MeasurementUnit?: string;
            /**
             * Format: int32
             * @description Unit multiplier for this SKU. If this information doesn't apply, you should use the default value `1`.
             */
            UnitMultiplier?: number;
            /** Format: int32 */
            AvailableQuantity: number;
            Pricing: {
                Currency?: string;
                /** Format: int32 */
                SalePrice?: number;
                CurrencySymbol?: string;
            };
        };
        /**
         * skuSpecification
         * @default {
         *       "fieldName": "Color",
         *       "fieldValues": [
         *         "Red",
         *         "Green"
         *       ]
         *     }
         */
        SkuSpecification: {
            /**
             * @description Name of the SKU specification field. Example: 'Color'.
             * @default color
             */
            fieldName: string;
            /**
             * @description Array with values of the SKU specification field. Example: 'Red'.
             * @default [
             *       "Red"
             *     ]
             */
            fieldValues: string[];
        };
        /**
         * Product Specification
         * @example {
         *       "fieldName": "Color",
         *       "fieldValues": [
         *         "Red",
         *         "Green"
         *       ]
         *     }
         */
        ProductSpecification: {
            /**
             * @description Name of the product specification field. Example: 'Fabric'.
             * @default Fabric type
             */
            fieldName: string;
            /** @description Value of the product specification field. Example: 'Cotton'. */
            fieldValues?: string[];
        };
        /**
         * Image
         * @example {
         *       "imageName": "Principal",
         *       "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
         *     }
         */
        Image: {
            /** @description Name of the SKU image. */
            imageName: string;
            /**
             * @description URL of the SKU image. The image must be sent through `https` protocol, otherwise it will not be rendered in VTEX Admin.
             * @default https://imageurl.example
             */
            imageUrl: string;
        };
        /** @example {
         *       "matcherId": "{{matcherid}}",
         *       "score": "{{score}} (must be decimal)",
         *       "matchType": "itemMatch",
         *       "skuRef": "{{skuid}}(should be specifed when match is a sku match)",
         *       "productRef": "{{productRef}}(should be specified when match is a product match)",
         *       "product": {
         *         "name": "Produto exemplo",
         *         "description": "Descricao exemplo",
         *         "categoryId": 12,
         *         "brandId": 1234567,
         *         "specifications": null
         *       },
         *       "sku": {
         *         "name": "Sku exemplo",
         *         "eans": [
         *           "12345678901213"
         *         ],
         *         "refId": null,
         *         "height": 1,
         *         "width": 1,
         *         "length": 1,
         *         "weight": 1,
         *         "images": [
         *           {
         *             "imagem1.jpg": "imageurl.example"
         *           }
         *         ],
         *         "unitMultiplier": 1,
         *         "measurementUnit": "un",
         *         "specifications": {
         *           "Embalagem": "3 kg"
         *         }
         *       }
         *     } */
        MatchRequest: {
            /**
             * @description Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
             * @default vtex-matcher
             */
            matcherId: string;
            /**
             * Match Type
             * @description Define the action you want to apply to each SKU. Values include:
             *
             *     1. `newproduct`: match the SKU as a new product.
             *
             *     2. `itemMatch`: associate the received SKU to an existing SKU.
             *
             *     3. `productMatch`: associate the received SKU to an existing product.
             *
             *     4. `deny`: deny the received SKU.
             *
             *     5. `pending`: the received SKU requires attention.
             *
             *     6. `incomplete`: the received SKU is lacking information to be matched.
             *
             *     7. `insufficientScore`: the score given by the Matcher to this received SKU doesn't qualify it to be matched.
             *
             *     Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
             * @default itemMatch
             */
            matchType: string;
            /**
             * @description Matcher rates received SKUs by correlating the data sent by sellers, to existing fields in the marketplace. The calculation of these scores determines whether the product has been:
             *
             *     `Approved`: score equal to or greater than 80 points.
             *
             *     `Pending`: from 31 to 79 points.
             *
             *     `Denied`: from 0 to 30 points.
             *
             *     Note that  if the autoApprove setting is enabled, the SKUs will be approved, regardless of the Score.
             * @default 80
             */
            score: string;
            /**
             * @description In `itemMatch` actions, fill in this field on your request to match the item to an existing SKU in the marketplace.
             * @default
             */
            skuRef: string | null;
            /**
             * @description In `productMatch` actions, fill in this field on your request to match the item to an existing product in the marketplace.
             * @default
             */
            productRef: string | null;
            product?: components["schemas"]["Product"];
            sku?: components["schemas"]["Sku"];
        };
        /** Product */
        Product: {
            /**
             * @description Name of the product that will be matched.
             * @default Book
             */
            name: string;
            /**
             * @description Product's description.
             * @default Description of the product, how it will appear on the marketplace.
             */
            description: string;
            /**
             * Format: int32
             * @description Marketplace's Category ID that the product belongs to, configured in the Catalog. It should be the category chosen for the received SKU to be matched with. The `categoryId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). You can choose to keep the same suggested `categoryID`, or overwrite it with another value in this request. This field is nulled when the inserted value is 0.
             * @default 12
             */
            categoryId: number;
            /**
             * Format: int32
             * @description Marketplace's Brand ID that the product belongs to, configured in the Catalog. It should be the brand chosen for the received SKU to be matched with. The brandId is already mapped through the Get Suggestions API. This field is nulled when the inserted value is 0.
             * @default 1234567
             */
            brandId: number;
            /**
             * @description This field is optional. Add here any product specifications or details.
             * @default
             */
            specifications: string | null;
        };
        /**
         * SKU
         * @example {
         *       "name": "Sku exemplo",
         *       "eans": [
         *         "12345678901213"
         *       ],
         *       "refId": null,
         *       "height": 1,
         *       "width": 1,
         *       "length": 1,
         *       "weight": 1,
         *       "images": [
         *         {
         *           "imagem1.jpg": "imageurl.example"
         *         }
         *       ],
         *       "unitMultiplier": 1,
         *       "measurementUnit": "un",
         *       "specifications": {
         *         "Embalagem": "3 kg"
         *       }
         *     }
         */
        Sku: {
            /** @default  */
            name: string;
            /**
             * @description SKU reference code.
             * @default [
             *       "12345678901213"
             *     ]
             */
            eans: string[];
            /**
             * @description SKU reference code.
             * @default 1234
             */
            refId: string;
            /**
             * Format: int32
             * @description Height of the SKU.
             * @default 10
             */
            height: number;
            /**
             * Format: int32
             * @description Width of the SKU.
             * @default 20
             */
            width: number;
            /**
             * Format: int32
             * @description Length of the SKU.
             * @default 10
             */
            length: number;
            /**
             * Format: int32
             * @description Weight of the SKU.
             * @default 100
             */
            weight: number;
            images: components["schemas"]["Images"];
            /**
             * Format: int32
             * @description Unit multiplier for this SKU. If this information doesn't apply, you should use the default value 1.
             * @default 1
             */
            unitMultiplier: number;
            /**
             * @description Measurement unit that should be used for this SKU. If this information doesn't apply, you should use the default value un.
             * @default un
             */
            measurementUnit: string;
            specifications: components["schemas"]["Specifications"];
        };
        /**
         * Images
         * @example [
         *       {
         *         "imagem1.jpg": "imageurl.example"
         *       }
         *     ]
         */
        Images: unknown[];
        /**
         * Specifications
         * @example {
         *       "Embalagem": "3 kg"
         *     }
         */
        Specifications: {
            /** @description Packaging specifications. Should include package's weight. */
            Embalagem: string;
        };
        /** MatchMultiple */
        MatchMultiple: {
            /**
             * @description This field can be used to link any string that identifies that SKU. Its most common use is the seller's SKU ID.
             * @example 1234567
             */
            itemId: string;
            /**
             * @description Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the `versionId` associated to the version you choose to search for. You can get this field's value through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.
             * @example v.2
             */
            versionId: string;
            /**
             * @description Whenever an SKU suggestion is matched, it is associated to a unique ID. Fill in this field with the `matchId` you wish to filter by. The `matchId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
             * @default vtex-matcher
             */
            matchId: string;
            /**
             * @description Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
             * @default vtex-matcher
             */
            matcherId: string;
            /**
             * Format: int32
             * @description Marketplace's Category ID that the product belongs to, configured in the Catalog. It should be the category chosen for the received SKU to be matched with. The `categoryId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). You can choose to keep the same suggested `categoryID`, or overwrite it with another value in this request. This field is nulled when the inserted value is 0.
             * @example 12
             */
            categoryId: number | null;
            /**
             * Format: int32
             * @description Marketplace's Brand ID that the product belongs to, configured in the Catalog. It should be the brand chosen for the received SKU to be matched with. The `brandId` is already mapped through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). This field is nulled when the inserted value is 0, and is mandatory for the `newproduct` action.
             * @example 1234567
             */
            brandId?: number | null;
            /**
             * @description Fill in this field on your request when the matched item is an SKU. This field is mandatory for the `skuassociation` action.
             * @example 123 sku ref
             */
            skuRef?: string | null;
            /**
             * @description Fill in this field on your request when the matched item is a product. This field is mandatory for the `productassociation` action.
             * @example 123 product ref
             */
            productRef?: string | null;
            /**
             * @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
             * @example seller123
             */
            sellerId: string;
        }[];
        /** responseMatchMultiple */
        responseMatchMultiple: {
            /** @example 06272023010821403 */
            matchId?: string;
            /** @example vtex-matcher */
            matcherId?: string;
            /** @example melissatestbug858 */
            sellerId?: string;
            /** @example 81 */
            itemId?: string;
            /** @example false */
            isSuccess?: boolean;
        }[];
        /** GetSellersApprovalSettings */
        responseGetSellersApprovalSettings: {
            /**
             * @description A string that identifies the seller in the marketplace.
             * @example sellerexample
             */
            sellerId?: string;
            /**
             * @description Marketplace’s account ID.
             * @example d74daf1f-355a-4463-bdc7-ae8b045311c
             */
            accountId?: string;
            /**
             * @description Marketplace’s account name.
             * @example marketplaceexample
             */
            accountName?: string;
            /**
             * @description SKU Mapping Information and Product [Specifications](https://developers.vtex.com/docs/guides/catalog-overview#configuring-initial-settings-mandatory).
             *
             *      The properties included within `mapping` can change according to the product type, the `color` specification and its variations described in this example are just one of the possibilities. The values received in this call's payload for those properties depend on the seller's catalog architecture, and are not default.
             *
             *     See some examples of specifications:
             *
             *     - Voltage
             *
             *     - Power
             *
             *     - Size
             *
             *     - Height
             *
             *     - Width
             * @default {}
             */
            mapping: {
                /**
                 * @description The field will indicate the default color predefined by the seller in cases where specific product colors are not defined. This field is neither mandatory nor default, it will depend on the architecture of the seller's catalog.
                 * @example white /black
                 */
                defaultColor?: string;
                /**
                 * @description Field that provides the available colors to filter searches. This field is neither mandatory nor default, it will depend on the architecture of the seller's catalog.
                 * @example color1, color2
                 */
                searchColor?: string;
                /**
                 * @description `color1` available for search filter. This field is neither mandatory nor default, it will depend on the architecture of the seller's catalog.
                 * @example black
                 */
                color1?: string;
                /**
                 * @description `color2` available for search filter. This field is neither mandatory nor default, it will depend on the architecture of the seller's catalog.
                 * @example white
                 */
                color2?: string;
                /**
                 * @description Indicates the predominant or main color of the product. This field is neither mandatory nor default, it will depend on the architecture of the seller's catalog.
                 * @example black
                 */
                color?: string;
                /**
                 * @description Indicates the size of the product.This field is neither mandatory nor default, it will depend on the architecture of the seller's catalog.
                 * @example EUR44
                 */
                size?: string;
            };
            /**
             * @description This field determines the type of [approval configuration applied to SKUs received from a seller](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/seller/-sellerId-).
             *
             *     The possible values include:
             *
             *     -`default`, where the Matcher reviews the SKU, and approves it based on its score.
             *
             *     -`manual`, for manual approvals through the Received SKU UI and Match API.
             *
             *     -`autoApprove`, for every SKU received from a given seller to be approved automatically, regardless of the Matcher Score.
             * @example default
             */
            matchFlux?: string;
        };
        securitySchemes: unknown;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetautoApprovevaluefromconfig: {
        parameters: {
            query: {
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace. */
                sellerId: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
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
                        /** @description If the auto-approve setting is active for a given seller (`true`) or not (`false`). */
                        Enabled?: boolean;
                    };
                };
            };
        };
    };
    Saveautoapproveforaccount: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "Enabled": true
                 *     } */
                "application/json": components["schemas"]["SaveautoapproveforaccountRequest"];
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
                        /** @description If the auto-approve setting is active (`true`) or not (`false`). */
                        Enabled?: boolean;
                    };
                };
            };
        };
    };
    Getaccountconfig: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
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
                        /** @description Matcher scores for approving and rejecting SKUs received from sellers. */
                        Score?: Record<string, never>;
                        /** @description All Matchers configured on the marketplace, and their respective details. */
                        Matchers?: unknown[];
                        /** @description Items and products. */
                        Rules?: Record<string, never>;
                        /** @description Mapping of product and SKU specifications, per seller. */
                        SpecificationsMapping?: unknown[];
                        /** @description This field determines the type of approval configuration applied to SKUs received from a seller. */
                        MatchFlux?: string;
                    };
                };
            };
        };
    };
    Saveaccountconfig: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SaveaccountconfigRequest"];
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
                        /**
                         * @description [Matcher's rates](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) to approve or reject [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers.
                         * @example {
                         *       "Approve": 80,
                         *       "Reject": 30
                         *     }
                         */
                        Score?: {
                            /** @description Score to approve SKUs sent by sellers. */
                            Approve?: number;
                            /** @description Score to reject SKUs sent by sellers. */
                            Reject?: number;
                        };
                        /** @description [Matchers](https://help.vtex.com/en/tutorial/understanding-vtex-matcher-scoring) configurations for approving and rejecting [received SKUs](https://help.vtex.com/en/tutorial/cataloging-received-skus--tutorials_396) sent by sellers. */
                        Matchers?: unknown[];
                        /** @description Items and products that belong to sellers. */
                        Rules?: {
                            /** @description SKUs' ID. */
                            Item?: number[];
                            /** @description Product's name. */
                            Product?: string[];
                        };
                        /** @description This attribute maps product and SKU's specifications between the marketplace and the seller. */
                        SpecificationsMapping?: unknown[];
                        /** @description Type of approval configuration that apply to received SKUs sent by sellers. The possible values are:
                         *
                         *     `default`: the matcher approves the SKU.
                         *
                         *     `manual`: manual SKU's approvals.
                         *
                         *     `AutoApprove`: automatic SKU's approvals. */
                        MatchFlux?: string;
                    };
                };
            };
        };
    };
    Getmatchconfig: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
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
                    "application/json": components["schemas"]["responseGetAccountsMatcherSettings"];
                };
            };
        };
    };
    Getselleraccountconfig: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace. */
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
                    "application/json": components["schemas"]["responseGetSellersApprovalSettings"];
                };
            };
        };
    };
    Putselleraccountconfig: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace. */
                sellerId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "sellerId": "1a",
                 *       "mapping": null,
                 *       "matchFlux": "Default"
                 *     } */
                "application/json": components["schemas"]["PutselleraccountconfigRequest"];
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
    Saveautoapproveforaccountseller: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account. */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace. */
                sellerId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "Enabled": true
                 *     } */
                "application/json": components["schemas"]["SaveautoapproveforaccountsellerRequest"];
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
    Getsuggestions: {
        parameters: {
            query?: {
                /** @description This field allows you to customize your search. You can fill in this query param if you want to narrow down your search using the available filters on Received SKU modules. */
                q?: string;
                /** @description This field allows users to filter SKU suggestions, by searching only the new suggestions that were just sent, and suggestions that have already been sent, but were updated. Possible values for this field include `new` and `update`. */
                type?: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller so it can call this endpoint. */
                seller?: string;
                /** @description Narrow down you search, filtering by status. Values allowed on this field include: `accepted`, `pending` and `denied.` */
                status?: string;
                /** @description This field allows you to filter SKUs that have mapping or not. Insert `true` to filter SKUs that have mapping, or `false` to retrieve SKUs that aren't mapped. */
                hasmapping?: string;
                /** @description Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint. */
                matcherid?: string;
                /** @description Define your pagination range, by adding the pagination starting value. Values should be bigger than 0, with a maximum of 50 records per page. */
                _from?: number;
                /** @description Define your pagination range, by adding the pagination ending value. Values should be bigger than 0, with a maximum of 50 records per page. */
                _to?: number;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL */
                accountName: string;
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
    GetSuggestion: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: string;
                /** @description A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications. */
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
    SaveSuggestion: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account to which the seller wants to suggest a new SKU. It is used as part of the request URL. */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: string;
                /** @description A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications. */
                sellerSkuId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "ProductId": "321",
                 *       "ProductName": "Product sample",
                 *       "NameComplete": "Complete product name",
                 *       "ProductDescription": "sample",
                 *       "BrandName": "Brand 1",
                 *       "SkuName": "Sku sample",
                 *       "SellerId": "string",
                 *       "Height": 1,
                 *       "Width": 1,
                 *       "Length": 1,
                 *       "Weight": 1,
                 *       "Updated": null,
                 *       "RefId": "REFID123",
                 *       "SellerStockKeepingUnitId": 567,
                 *       "CategoryFullPath": "Category 1",
                 *       "Images": [
                 *         {
                 *           "imageName": "Principal",
                 *           "imageUrl": "https://i.pinimg.com/originals/2d/96/4a/2d964a6bf37d9224d0615dc85fccdd62.jpg"
                 *         }
                 *       ],
                 *       "ProductSpecifications": [
                 *         {
                 *           "fieldName": "Fabric",
                 *           "fieldValues": [
                 *             "Cotton",
                 *             "Velvet"
                 *           ]
                 *         }
                 *       ],
                 *       "SkuSpecifications": [
                 *         {
                 *           "fieldName": "Color",
                 *           "fieldValues": [
                 *             "Red",
                 *             "Blue"
                 *           ]
                 *         }
                 *       ],
                 *       "EAN": "EAN123",
                 *       "MeasurementUnit": "un",
                 *       "UnitMultiplier": 1,
                 *       "AvailableQuantity": 111,
                 *       "Pricing": {
                 *         "Currency": "BRL",
                 *         "SalePrice": 399,
                 *         "CurrencySymbol": "R$"
                 *       }
                 *     } */
                "application/json": components["schemas"]["SaveSuggestionRequest"];
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
    DeleteSuggestion: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL. */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: string;
                /** @description A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications. */
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
    GetVersions: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: string;
                /** @description A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications. */
                sellerskuid: string;
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
    GetSuggestionbyversion: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: string;
                /** @description A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications. */
                sellerskuid: string;
                /** @description Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the `versionId` associated to the version you choose to search for. You can get this field's value through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field. */
                version: string;
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
    Match: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL */
                accountName: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: string;
                /** @description A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications. */
                sellerskuid: string;
                /** @description Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the versionId associated to the version you choose to search for. You can get this field's value through the[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field. */
                version: string;
                /** @description Whenever an SKU suggestion is matched, it is associated to a unique ID. Fill in this field with the matchId you wish to filter by. The `matchId`'s value can be obtained through the *[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint. */
                matchid: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "matcherId": "{{matcherid}}",
                 *       "matchType": "itemMatch",
                 *       "score": "{{score}} (must be decimal)",
                 *       "skuRef": "{{skuid}}(should be specifed when match is a sku match)",
                 *       "productRef": "{{productRef}}(should be specified when match is a product match)",
                 *       "product": {
                 *         "name": "Book A",
                 *         "description": "Book description",
                 *         "categoryId": 12,
                 *         "brandId": 1234567,
                 *         "matchType": "itemMatch",
                 *         "specifications": null
                 *       },
                 *       "sku": {
                 *         "name": "Sku exemplo",
                 *         "eans": [
                 *           "12345678901213"
                 *         ],
                 *         "refId": null,
                 *         "height": 1,
                 *         "width": 1,
                 *         "length": 1,
                 *         "weight": 1,
                 *         "images": [
                 *           {
                 *             "imagem1.jpg": {
                 *               "imagem1.jpg": "https://imageurl.example"
                 *             }
                 *           }
                 *         ],
                 *         "unitMultiplier": 1,
                 *         "measurementUnit": "un",
                 *         "specifications": {
                 *           "Embalagem": "3 k   g"
                 *         }
                 *       }
                 *     } */
                "application/json": components["schemas"]["MatchRequest"];
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
    MatchMultiple: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL */
                accountName: string;
                /** @description Operation to apply to received SKUs. Possible values include:
                 *
                 *     * `newproduct`: match the SKU as a new product.
                 *
                 *     * `skuassociation`: associate the received SKU to an existing SKU.
                 *
                 *     * `productassociation`: associate the received SKU to an existing product.
                 *
                 *     * `deny`: deny the received SKU. */
                actionName: "newproduct" | "skuassociation" | "productassociation" | "deny";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": unknown;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseMatchMultiple"];
                };
            };
        };
    };
}
