export interface paths {
    "/api/channel-manager/channel/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all channels
         * @description This request returns a list of channels available channels with their respective IDs for partners external to VTEX.
         */
        get: operations["list-all-channels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/channel-manager/channel/:channelId": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve channel
         * @description Retrieves a specific channel that already exists in Channel Manager.
         */
        get: operations["retrieve-channel"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/mkp-category-mapper/connector/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * VTEX Mapper Registration
         * @description Mappes categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree.
         *
         *     To perform this association, VTEX made VTEX Mapper available. It is a tool integrated into the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace.
         *
         *     This endpoint allows connectors to register the external marketplace integration in VTEX Mapper.
         *
         *     In case VTEX Mapper detects an error and the call fails, the connector should check if mandatory information was sent correctly. Ex. Are URLs correctly registered in the properties `categoryTreeEndPoint` and `mappingEndPoint`?
         *
         *     For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
         */
        post: operations["vtex-mapper-registration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/mkp-category-mapper/categories/marketplace/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Category Mapping to VTEX Mapper
         * @description Mappes categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree.
         *
         *     To perform this association, VTEX made VTEX Mapper available. It is a tool integrated into the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace.
         *
         *     This endpoint allows connectors to send the marketplace's category tree mapped in the integration.
         *
         *     Connectors should send the payload compacted in `.gzip` format.
         *
         *     For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
         */
        post: operations["send-category-mapping-vtex-mapper"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/channel-manager/connector": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register connector
         * @description Registers a new connector in our platform. The account name informed in the request should be the one owned by the partner since it is the only account that will have permission to update or delete the connector.
         *
         *     Possible values for field `type`:
         *
         *     - `APP`, if using our App Template.
         *     - `EXTERNAL`, if not using App Template.
         *
         *     Possible values for field `segment`:
         *
         *     - `ADS`
         *     - `APPAREL_ACCESSORIES`
         *     - `BEAUTY_HEALTH`
         *     - `BOOKS_EDUCATION`
         *     - `CARS_AUTOPARTS`
         *     - `DEPARTMENT_STORES`
         *     - `ELETRONICS`
         *     - `FINANCIAL_INSURANCES`
         *     - `FOOD_BEVERAGES`
         *     - `GROCERY`
         *     - `HOME_APPLIANCES`
         *     - `HOME_FURNITURE_DECOR`
         *     - `JEWELRY`
         *     - `PET_SHOP`
         *     - `SPORTS_FITNESS`
         *     - `TOURISM`
         *     - `TOYS_HOBBIES`
         *     - `OTHERS`
         */
        post: operations["register-connector"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/channel-manager/connector/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all connectors
         * @description Returns a paginated list of all connectors' registered in Channel Manager, taking into consideration the filters informed in the query string of the request.
         */
        get: operations["list-all-connectors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/channel-manager/connector/:connectorId": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve connector
         * @description Retrieve a specific connector registered in VTEX platform.
         */
        get: operations["retrieve-connector"];
        /**
         * Full update connector
         * @description Fully updates the connector's information. All required fields must be sent in the body of the request./n/nThis action can only be executed by the account name that owns the connector's registration.
         */
        put: operations["full-update-connector"];
        /**
         * Upsert merchant connection
         * @description Receives an event describing a connection update between the connector with the specified ID and the merchant specified in the query string. /n/r This information is used in the list all connectors route: the account name will be used to return the `isConnectionActive` and `affiliateId` fields.
         */
        post: operations["upsert-merchant-connection"];
        /**
         * Remove connector
         * @description Removes a connector from VTEX platform. This action can only be executed by the account name that owns the connector's registration.
         */
        delete: operations["remove-connector"];
        options?: never;
        head?: never;
        /**
         * Partial update connector
         * @description Partially updates the connector's information. The payload follows the format defined by RFC 6902, where a list of operations is informed, including the path of the field inside the object and its value./n/nThis action can only be executed by the account name that owns the connector's registration.
         */
        patch: operations["partial-update-connector"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        VtexMapperRegistration: {
            /**
             * @description Marketplace Name, that will be displayed in VTEX Mapper.
             * @example Marketplace A
             */
            displayName: string;
            /**
             * @description Endpoint that returns categories and attributes according to VTEX  Mapper specifications.
             * @example http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/categories
             */
            categoryTreeEndPoint: string;
            /**
             * @description Secure endpoint that will receive the category mapping sent by VTEX Mapper.
             * @example http://api.vtexinternal.com.br/api/{{marketplaceName}}/mapper/mapping
             */
            mappingEndPoint: string;
            /** @description Refers to the `allowsRemap` property. */
            properties: Record<string, never>;
            /**
             * @description The `CategoryTreeProcessingNotificationEndpoint` is optional, and should be an endpoint from the external marketplace, that will be notified after the marketplace's category tree is successfully processed or not.
             * @example https://CategoryTreeProcessingNotificationEndpoint.com/api
             */
            CategoryTreeProcessingNotificationEndpoint?: string;
        };
        sendCategoryMappingToVtexMapper: {
            /**
             * @description Array with Marketplace parent categories and their information.
             * @default []
             */
            categories: {
                /**
                 * id
                 * @description ID of the parent category in the marketplace.
                 * @default 1
                 */
                id: string;
                /**
                 * name
                 * @description Name of the parent category in the marketplace.
                 * @default Appliances
                 */
                name: string;
                /**
                 * chidren
                 * @description Array with children categories in the marketplace, and their information.
                 * @default []
                 */
                children: {
                    /**
                     * id
                     * @description ID of the child  category in the marketplace.
                     * @default 1a
                     */
                    id: string;
                    /**
                     * name
                     * @description Name of the child  category in the marketplace.
                     * @default Kitchen
                     */
                    name: string;
                    /**
                     * children
                     * @description Grandchildren categories in the marketplace. Send as array of `ID`, `name` and `specifications`.
                     * @default []
                     */
                    children: unknown[];
                    /**
                     * specifications
                     * @description Specifications for the Product or SKU
                     * @default [
                     *       {
                     *         "attributeName": "Color",
                     *         "required": true,
                     *         "attributeValues": [
                     *           {
                     *             "valueName": "Red"
                     *           }
                     *         ]
                     *       }
                     *     ]
                     */
                    specifications: {
                        /**
                         * attributeName
                         * @description Name of the attribute sent as a specification.
                         * @default Color
                         */
                        attributeName: string;
                        /**
                         * required
                         * @description If the specification is required, mark this flag as `true`. If not, mark it as `false`.
                         * @default false
                         */
                        required: boolean;
                        /**
                         * attributeValues
                         * @description Values of the atttribute specified.
                         * @default [
                         *       {
                         *         "valueName": "Red"
                         *       }
                         *     ]
                         */
                        attributeValues: {
                            /**
                             * valueName
                             * @description Name of the value
                             * @default Red
                             */
                            valueName: string;
                        }[];
                    }[];
                }[];
            }[];
        };
        /** Upsert merchant connection */
        upsertMerchantConnection: {
            /** @default false */
            isActive: boolean;
            /** @default  */
            affiliateId: string;
        };
        /** @example {
         *       "name": "Mercado Livre Classic",
         *       "website": "mercadolivre.com.br",
         *       "logo": "https://g.foolcdn.com/art/companylogos/square/meli.png",
         *       "description": "MercadoLibre operates online commerce platforms in Latin America. It operates Mercado Libre Marketplace, an automated online commerce platform that enables businesses, merchants, and individuals to list merchandise and conduct sales and purchases online.",
         *       "segment": "OTHERS",
         *       "availableCountries": [
         *         "BRA",
         *         "ARG"
         *       ],
         *       "connectorVtexAdminPath": "/bridge/#/settings?openConfig=mercadolivre",
         *       "connectorApiEndpoint": "portal.vtexcommercestable.com/api/meliintegration/notifications"
         *     } */
        fullUpdateConnector: {
            /**
             * @description Connector's name.
             * @default
             */
            name: string;
            /**
             * @description Connector's website.
             * @default
             */
            website: string;
            /**
             * @description Connector's logo.
             * @default
             */
            logo: string;
            /**
             * @description Marketplace presentation description.
             * @default
             */
            description: string;
            /**
             * @description Marketplace segment.
             * @default
             */
            segment: string;
            /**
             * @description Countries where integration is available.
             * @default []
             */
            availableCountries: string[];
            /**
             * Link to Admin VTEX page where the merchant can configure integration with connector.
             * @default
             */
            connectorVtexAdminPath: string;
            /**
             * Connector's API Base URL
             * @default
             */
            connectorApiEndpoint: string;
        };
        /**
         * Partial update connector
         * @example {
         *       "path": "/segment",
         *       "op": "replace",
         *       "value": "DEPARTMENT_STORES"
         *     }
         */
        partialUpdateConnector: {
            /**
             * @description What part of the configuration do you want to change.
             * @default
             */
            path: string;
            /**
             * @description Type of operation to be performed.
             * @default
             */
            op: string;
            /**
             * @description New value which will appear in the changed field.
             * @default
             */
            value: string;
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
    "list-all-channels": {
        parameters: {
            query: {
                /** @description VTEX's account name owned by the connector/partner. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-type": string;
            };
            path: {
                /** @description Environment used as part of the URL. */
                enviroment: string;
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
                         * Id
                         * @description The channel id.
                         * @example 1
                         */
                        id: number;
                        /**
                         * Name
                         * @description The channel name.
                         * @example Mercado Livre
                         */
                        name: string;
                    };
                };
            };
        };
    };
    "retrieve-channel": {
        parameters: {
            query: {
                /** @description VTEX's account name owned by the connector/partner. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-type": string;
            };
            path: {
                /** @description Environment used as part of the URL. */
                enviroment: string;
                /** @description Channel's ID in Channel Manager, available through the List All Channels endpoint. */
                channelId: number;
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
                         * Id
                         * @description The channel id.
                         * @example 1
                         */
                        id: number;
                        /**
                         * Name
                         * @description The channel name.
                         * @example Mercado Livre
                         */
                        name: string;
                    };
                };
            };
        };
    };
    "vtex-mapper-registration": {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as part of the URL. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VtexMapperRegistration"];
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
    "send-category-mapping-vtex-mapper": {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Code identifying returned in the *VTEX Mapper Registration* endpoint. */
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["sendCategoryMappingToVtexMapper"];
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
    "register-connector": {
        parameters: {
            query: {
                /** @description VTEX's account name owned by the connector/partner, ex. `apiexemple` */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Environment used as part of URL. */
                environment: string;
            };
            cookie?: never;
        };
        /** @description Body of the request to execute the Resgister connector. */
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * name
                     * @example Mercado Livre Classic
                     */
                    name: string;
                    /**
                     * website
                     * @example mercadolivre.com.br
                     */
                    website: string;
                    /**
                     * logo
                     * @example https://g.foolcdn.com/art/companylogos/square/meli.png
                     */
                    logo: string;
                    /**
                     * description
                     * @example MercadoLibre operates online commerce platforms in Latin America. It operates Mercado Libre Marketplace, an automated online commerce platform that enables businesses, merchants, and individuals to list merchandise and conduct sales and purchases online.
                     */
                    description: string;
                    /**
                     * segment
                     * @example OTHERS
                     */
                    segment: string;
                    /**
                     * availableCountries
                     * @example [
                     *       "BRA",
                     *       "ARG"
                     *     ]
                     */
                    availableCountries: string[];
                    /**
                     * type
                     * @example EXTERNAL
                     */
                    type: string;
                    /**
                     * isActive
                     * @example true
                     */
                    isActive: boolean;
                    /**
                     * helpUrl
                     * @example https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq
                     */
                    helpUrl: string;
                    /**
                     * connectorVtexAdminPath
                     * @example /bridge/#/settings?openConfig=mercadolivre
                     */
                    connectorVtexAdminPath: string;
                    /**
                     * connectorPageUrl
                     * @example https://apps.vtex.com/vtexbr-tiktok-tbp/p
                     */
                    connectorPageUrl: string;
                    /**
                     * connectorApiEndpoint
                     * @example portal.vtexcommercestable.com/api/meliintegration/notifications
                     */
                    connectorApiEndpoint: string;
                    /**
                     * channelId
                     * @example 1
                     */
                    channelId: number;
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
                        /**
                         * id
                         * @example 584
                         */
                        id: number;
                        /**
                         * name
                         * @example Mercado Livre Classic
                         */
                        name: string;
                        /**
                         * website
                         * @example mercadolivre.com.br
                         */
                        website: string;
                        /**
                         * logo
                         * @example https://g.foolcdn.com/art/companylogos/square/meli.png
                         */
                        logo: string;
                        /**
                         * description
                         * @example MercadoLibre operates online commerce platforms in Latin America. It operates Mercado Libre Marketplace, an automated online commerce platform that enables businesses, merchants, and individuals to list merchandise and conduct sales and purchases online.
                         */
                        description: string;
                        /**
                         * helpUrl
                         * @example https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq
                         */
                        helpUrl: string;
                        /**
                         * segment
                         * @example OTHERS
                         */
                        segment: string;
                        /**
                         * availableCountries
                         * @example [
                         *       "BRA",
                         *       "ARG"
                         *     ]
                         */
                        availableCountries: string[];
                        /**
                         * availableStates
                         * @example [
                         *       []
                         *     ]
                         */
                        availableStates: unknown[];
                        /**
                         * type
                         * @example EXTERNAL
                         */
                        type: string;
                        /**
                         * connectorPageUrl
                         * @example https://apps.vtex.com/vtexbr-tiktok-tbp/p
                         */
                        connectorPageUrl: string;
                        /**
                         * connectorVtexAdminPath
                         * @example /bridge/#/settings?openConfig=mercadolivre
                         */
                        connectorVtexAdminPath: string;
                        /**
                         * connectorApiEndpoint
                         * @example portal.vtexcommercestable.com/api/meliintegration/notifications
                         */
                        connectorApiEndpoint: string;
                        /**
                         * channelId
                         * @example 1
                         */
                        channelId: number;
                        /**
                         * isGloballyAvailable
                         * @example false
                         */
                        isGloballyAvailable: boolean;
                        /**
                         * ownerVtexAccount
                         * @example vtex
                         */
                        ownerVtexAccount: string;
                        /**
                         * isActive
                         * @example true
                         */
                        isActive: boolean;
                        /**
                         * isCertified
                         * @example false
                         */
                        isCertified: boolean;
                        /**
                         * contactInfo
                         * @example {
                         *       "name": "Jhon",
                         *       "email": "jhon@marketplace.com",
                         *       "phone": "(77) 7777-7777",
                         *       "defaultMessage": ""
                         *     }
                         */
                        contactInfo: {
                            /**
                             * name
                             * @example Jhon
                             */
                            name: string;
                            /**
                             * email
                             * @example jhon@marketplace.com
                             */
                            email: string;
                            /**
                             * phone
                             * @example (77) 7777-7777
                             */
                            phone: string;
                            /**
                             * defaultMessage
                             * @example
                             */
                            defaultMessage: string;
                        };
                        /**
                         * isConnectionActive
                         * @example false
                         */
                        isConnectionActive: boolean;
                        /**
                         * affiliateId
                         * @example 1234
                         */
                        affiliateId: string;
                    };
                };
            };
        };
    };
    "list-all-connectors": {
        parameters: {
            query: {
                /** @description Merchant's account name in VTEX, ex. `apiexemple`. */
                an: string;
                /** @description Filter data by connector's segment. */
                segment?: string;
                /** @description Order data using a custom logic by connector's' type, and not alphabetically. */
                orderByConnectorType?: string;
                /** @description Filter data by the connector's status. */
                active?: string;
                /** @description Filter data by the connector's name. */
                name?: string;
                /** @description Current page to load data from. */
                page?: number;
                /** @description Page size to define number of results returned. */
                pageSize: number;
                /** @description Filter by connector's country. */
                country?: string;
                /** @description Filter by connector's type. */
                type?: string;
                /** @description Filter by connector's owner account. */
                account?: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                accept: string;
                /** @description Describes the type of the content being sent. */
                "content-type": string;
            };
            path: {
                /** @description Environment used as part of URL. */
                environment: string;
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
                         * metadata
                         * @description Summary of data returned by the query.
                         * @example {
                         *       "totalCount": 493,
                         *       "currentPage": 1,
                         *       "pageSize": 5,
                         *       "totalPages": 99
                         *     }
                         */
                        metadata: {
                            /**
                             * totalCount
                             * @description Total data returned.
                             * @example 493
                             */
                            totalCount: number;
                            /**
                             * currentPage
                             * @description Current result page.
                             * @example 1
                             */
                            currentPage: number;
                            /**
                             * pageSize
                             * @description How many results will be displayed per page.
                             * @example 5
                             */
                            pageSize: number;
                            /**
                             * totalPages
                             * @description Total pages the query returned.
                             * @example 99
                             */
                            totalPages: number;
                        };
                        /**
                         * results
                         * @description Query result with information for each connector.
                         * @example [
                         *       {
                         *         "id": 59,
                         *         "name": "4R Comercial Sao Paulo",
                         *         "website": "www.comercialsaopaulo.com",
                         *         "logo": "https://comercialsaopaulo.vtexassets.com/assets/vtex.file-manager-graphql/logo/619f6f7f-bf67-4ed1-a15a-282b51f81e06___cd0426736f2550559c8688de3378681f.jpg",
                         *         "description": "Somo uma empresa sedeada em Barreiras - BA, decidimos entrar no mundo do E Commerce e marketplace há alguns anos, pois já estávamos estabelecidos e sólidos com a nossa loja física em nossa cidade.\nHoje trabalhamos com um portfólio bem diversificado de produtos, que são eles:\n- Linha à bateria\n- Lazer e esporte\n- Camping\n- Ferramentas elétricas\n- Maquinários leves e pesados\n- Ferramentas manuais\n- E muitos outros segmentos\nSua ",
                         *         "helpUrl": "help.vtex.com/helpurl",
                         *         "segment": "DEPARTMENT_STORES",
                         *         "availableCountries": [
                         *           "BRA"
                         *         ],
                         *         "availableStates": [],
                         *         "type": "VTEX",
                         *         "connectorPageUrl": "connector.com/connectorPageUrl",
                         *         "connectorVtexAdminPath": "connector.com/connectorVtexAdminPath",
                         *         "connectorApiEndpoint": "connector.com/connectorApiEndpoint",
                         *         "channelId": "1234",
                         *         "isGloballyAvailable": false,
                         *         "ownerVtexAccount": "comercialsaopaulo",
                         *         "isActive": false,
                         *         "isCertified": true,
                         *         "contactInfo": {
                         *           "name": "Jhon",
                         *           "email": "contato@comercial.com",
                         *           "phone": "(77) 7777-7777",
                         *           "defaultMessage": "Olá, aqui é (...) da (...). Adoraríamos incluir sua loja em nossa vitrine, pois acreditamos que (...). Seguem algumas informações importantes para darmos seguimento à nossa parceria:\n\n1) Nosso marketplace conta as categorias\n- A\n- B\n- C\n\n2) Nossa política de cobrança inclui uma taxa de (...) para cada compra, mais assinatura fixa de (...) por mês. \n\n3) Saiba mais sobre nossa política de devoluções e envio neste link (...)."
                         *         },
                         *         "isConnectionActive": false,
                         *         "affiliateId": "1234"
                         *       }
                         *     ]
                         */
                        results: {
                            /**
                             * id
                             * @description Connector Id.
                             * @example 59
                             */
                            id: number;
                            /**
                             * name
                             * @description Connecto's name.
                             * @example 4R Comercial Sao Paulo
                             */
                            name: string;
                            /**
                             * website
                             * @description Connector's Website.
                             * @example www.comercialsaopaulo.com
                             */
                            website: string;
                            /**
                             * logo
                             * @description Logo used by the connector.
                             * @example https://comercialsaopaulo.vtexassets.com/assets/vtex.file-manager-graphql/logo/619f6f7f-bf67-4ed1-a15a-282b51f81e06___cd0426736f2550559c8688de3378681f.jpg
                             */
                            logo: string;
                            /**
                             * description
                             * @description Connector presentation.
                             * @example Somo uma empresa sedeada em Barreiras - BA, decidimos entrar no mundo do E Commerce e marketplace há alguns anos, pois já estávamos estabelecidos e sólidos com a nossa loja física em nossa cidade.
                             *     Hoje trabalhamos com um portfólio bem diversificado de produtos, que são eles:
                             *     - Linha à bateria
                             *     - Lazer e esporte
                             *     - Camping
                             *     - Ferramentas elétricas
                             *     - Maquinários leves e pesados
                             *     - Ferramentas manuais
                             *     - E muitos outros segmentos
                             *     Sua
                             */
                            description: string;
                            /**
                             * helpUrl
                             * @description URL to connector integration page.
                             * @example help.vtex.com
                             */
                            helpUrl: string;
                            /**
                             * segment
                             * @description Market segment.
                             * @example DEPARTMENT_STORES
                             */
                            segment: string;
                            /**
                             * availableCountries
                             * @description Countries in which connector is available for integration.
                             * @example [
                             *       "BRA"
                             *     ]
                             */
                            availableCountries: string[];
                            /**
                             * availableStates
                             * @description Connector actuation states, valid only for connectors that have range restriction.
                             * @example [
                             *       []
                             *     ]
                             */
                            availableStates: unknown[];
                            /**
                             * type
                             * @description What type of connector, if it is native, VTEX or partner.
                             * @example VTEX
                             */
                            type: string;
                            /**
                             * connectorPageUrl
                             * @description URL where the merchant will be redirected to start the onboarding process.
                             * @example https://connector.com/connector
                             */
                            connectorPageUrl: string;
                            /**
                             * connectorVtexAdminPath
                             * @description Admin VTEX URL, where the merchant will be redirected to manage and view his connections after integration.
                             * @example https://connector.com/connector
                             */
                            connectorVtexAdminPath: string;
                            /**
                             * connectorApiEndpoint
                             * @description Partner Connector API base URL.
                             * @example https://connector.com/connector
                             */
                            connectorApiEndpoint: string;
                            /**
                             * channelId
                             * @description ID of the channel that a connector joins to.
                             * @example 1234
                             */
                            channelId: string;
                            /**
                             * isGloballyAvailable
                             * @description In which version the connector is available.
                             * @example false
                             */
                            isGloballyAvailable: boolean;
                            /**
                             * ownerVtexAccount
                             * @description Connector account name in VTEX.
                             * @example comercialsaopaulo
                             */
                            ownerVtexAccount: string;
                            /**
                             * isActive
                             * @description Demonstrates the status of integration with the connector.
                             * @example false
                             */
                            isActive: boolean;
                            /**
                             * isCertified
                             * @description Demonstrates Demonstrates if the connector is certified.
                             * @example true
                             */
                            isCertified: boolean;
                            /**
                             * contactInfo
                             * @description Seller contact information.
                             * @example {
                             *       "name": "Jhon Jones",
                             *       "email": "comercialsp@comercialsaopaulo.com",
                             *       "phone": "(77) 7777-7777",
                             *       "defaultMessage": "Olá, aqui é (...) da (...). Adoraríamos incluir sua loja em nossa vitrine, pois acreditamos que (...). Seguem algumas informações importantes para darmos seguimento à nossa parceria:\n\n1) Nosso marketplace conta as categorias\n- A\n- B\n- C\n\n2) Nossa política de cobrança inclui uma taxa de (...) para cada compra, mais assinatura fixa de (...) por mês. \n\n3) Saiba mais sobre nossa política de devoluções e envio neste link (...)."
                             *     }
                             */
                            contactInfo: {
                                /**
                                 * name
                                 * @description Name of the person responsible for the marketplace account interested in connecting to the merchant.
                                 * @example Jhon Jones
                                 */
                                name: string;
                                /**
                                 * email
                                 * @description Email of the person responsible for the marketplace account interested in connecting to the merchant.
                                 * @example comersialsp@comercialsaopaulo.com
                                 */
                                email: string;
                                /**
                                 * phone
                                 * @description Phone of the person responsible for the marketplace account interested in connecting to the merchant.
                                 * @example (77) 7777-7777
                                 */
                                phone: string;
                                /**
                                 * defaultMessage
                                 * @description Introduction message and information of interest in the partnership with the merchant.
                                 * @example Olá, aqui é (...) da (...). Adoraríamos incluir sua loja em nossa vitrine, pois acreditamos que (...). Seguem algumas informações importantes para darmos seguimento à nossa parceria:
                                 *
                                 *     1) Nosso marketplace conta com as categorias
                                 *     - A
                                 *     - B
                                 *     - C
                                 *
                                 *     2) Nossa política de cobrança inclui uma taxa de (...) para cada compra, mais assinatura fixa de (...) por mês.
                                 *
                                 *     3) Saiba mais sobre nossa política de devoluções e envio neste link (...).
                                 */
                                defaultMessage: string;
                            };
                            /**
                             * isConnectionActive
                             * @example false
                             */
                            isConnectionActive: boolean;
                            /**
                             * affiliateId
                             * @description affiliate Id connector.
                             * @example 1234
                             */
                            affiliateId: string;
                        }[];
                    };
                };
            };
        };
    };
    "retrieve-connector": {
        parameters: {
            query: {
                /** @description VTEX's account name owned by the connector/partner. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                accept: string;
                /** @description Describes the type of the content being sent. */
                "content-type": string;
            };
            path: {
                /** @description Environment used as part of URL. */
                environment: string;
                /** @description Connector's ID in Channel Manager, available through the List all connectors, or in the response of the registration. */
                connectorId: number;
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
                         * Id
                         * @description The connector Id.
                         * @example 46
                         */
                        id: number;
                        /**
                         * Connector name
                         * @description Connector name to retrieve.
                         * @example B2W
                         */
                        name: string;
                        /**
                         * Website
                         * @description Website connector.
                         * @example https://venda.americanasmarketplace.com.br/cadastre-sua-loja/
                         */
                        website: string;
                        /**
                         * Logo
                         * @example https://s3.amazonaws.com/Marketplace-Integration/Bridge/logos/skyhub.png
                         */
                        logo: string;
                        /**
                         * Description
                         * @description Description about the connector.
                         * @example A B2W e as Lojas Americanas fizeram uma fusão, dando origem ao Americanas Marketplace. Através do conector nativo da VTEX, é possível integrar com a B2W e aumentar seus canais de venda.
                         */
                        description: string;
                        /**
                         * helpUrl
                         * @description Link to User Documentation on Connector Setup.
                         * @example https://help.vtex.com/pt/tracks/configurar-integracao-da-b2w--6w07SJBVqE020KIOOS8ygk
                         */
                        helpUrl: string;
                        /**
                         * segment
                         * @description Connector segment.
                         * @example DEPARTMENT_STORES
                         */
                        segment: string;
                        /**
                         * availableCountries
                         * @description Countries where the marketplace is available.
                         * @example [
                         *       "BRA"
                         *     ]
                         */
                        availableCountries: string[];
                        /**
                         * availableStates
                         * @example [
                         *       []
                         *     ]
                         */
                        availableStates: unknown[];
                        /**
                         * type
                         * @description Connector integration type.
                         * @example NATIVE
                         */
                        type: string;
                        /**
                         * connectorPageUrl
                         * @description In the `connectorPageUrl` field, the partner fills in a complete URL where the merchant will be redirected to start the integration process.
                         * @example
                         */
                        connectorPageUrl: string;
                        /**
                         * connectorVtexAdminPath
                         * @description It's the URL path inside our admin where the merchant can be redirected to manage and view his connection after it's already integrated.
                         * @example /admin/marketplace-network/configuration/skyhub/
                         */
                        connectorVtexAdminPath: string;
                        /**
                         * connectorApiEndpoint
                         * @description The field refers to the base URL of the partner connector's API.
                         * @example https://portal.vtexcommercestable.com.br/api/skyhubintegration
                         */
                        connectorApiEndpoint: string;
                        /**
                         * channelId
                         * @description Channel Id that can be queried through the List all channels.
                         * @example 7
                         */
                        channelId: number;
                        /**
                         * isGloballyAvailable
                         * @description In which version the connector is available.
                         * @example false
                         */
                        isGloballyAvailable: boolean;
                        /**
                         * ownerVtexAccount
                         * @description  Owner account VTEX.
                         * @example vtex
                         */
                        ownerVtexAccount: string;
                        /**
                         * isActive
                         * @description Demonstrates the status of integration with the connector.
                         * @example true
                         */
                        isActive: boolean;
                        /**
                         * isCertified
                         * @description Demonstrates Demonstrates if the connector is certified.
                         * @example false
                         */
                        isCertified: boolean;
                        /**
                         * contactInfo
                         * @description Seller contact information.
                         * @example {
                         *       "name": "Jhon",
                         *       "email": "jhon@marketplace.com",
                         *       "phone": "(77) 7777-7777",
                         *       "defaultMessage": "Olá, aqui é (...) da (...). Adoraríamos incluir sua loja em nossa vitrine, pois acreditamos que (...). Seguem algumas informações importantes para darmos seguimento à nossa parceria:\n\n1) Nosso marketplace conta as categorias\n- A\n- B\n- C\n\n2) Nossa política de cobrança inclui uma taxa de (...) para cada compra, mais assinatura fixa de (...) por mês. \n\n3) Saiba mais sobre nossa política de devoluções e envio neste link (...)."
                         *     }
                         */
                        contactInfo: {
                            /**
                             * name
                             * @description Name of the person responsible for the marketplace account interested in connecting to the merchant.
                             * @example Jhon
                             */
                            name: string;
                            /**
                             * email
                             * @description Email of the person responsible for the marketplace account interested in connecting to the merchant.
                             * @example jhon@marketplace.com
                             */
                            email: string;
                            /**
                             * phone
                             * @description Phone of the person responsible for the marketplace account interested in connecting to the merchant.
                             * @example (77) 7777-7777
                             */
                            phone: string;
                            /**
                             * defaultMessage
                             * @description Introduction message and information of interest in the partnership with the merchant.
                             * @example Olá, aqui é (...) da (...). Adoraríamos incluir sua loja em nossa vitrine, pois acreditamos que (...). Seguem algumas informações importantes para darmos seguimento à nossa parceria:
                             *
                             *     1) Nosso marketplace conta as categorias
                             *     - A
                             *     - B
                             *     - C
                             *
                             *     2) Nossa política de cobrança inclui uma taxa de (...) para cada compra, mais assinatura fixa de (...) por mês.
                             *
                             *     3) Saiba mais sobre nossa política de devoluções e envio neste link (...).
                             */
                            defaultMessage: string;
                        };
                        /**
                         * isConnectionActive
                         * @example true
                         */
                        isConnectionActive: boolean;
                        /**
                         * affiliateId
                         * @description affiliate Id connector.
                         * @example BTW
                         */
                        affiliateId: string;
                    };
                };
            };
        };
    };
    "full-update-connector": {
        parameters: {
            query: {
                /** @description VTEX's account name owned by the connector or partner, ex. `apiexemple`. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Environment used as part of URL. */
                environment: string;
                /** @description Connector's ID in Channel Manager, available through the list all connectors route, or in the response of the registration. */
                connectorId: number;
            };
            cookie?: never;
        };
        /** @description Body of the request to execute the Full update connector. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["fullUpdateConnector"];
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
    "upsert-merchant-connection": {
        parameters: {
            query: {
                /** @description Merchant's account name in VTEX, ex. `apiexemple`. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Environment used as part of URL. */
                environment: string;
                /** @description Connector's ID in Channel Manager, available through the list all connectors route, or in the response of the registration. */
                connectorId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "isActive": true,
                 *       "affiliateId": "B2W"
                 *     } */
                "application/json": components["schemas"]["upsertMerchantConnection"];
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
    "remove-connector": {
        parameters: {
            query: {
                /** @description Merchant's account name in VTEX, ex. `apiexemple`. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Environment used as part of URL. */
                environment: string;
                /** @description Connector's ID in Channel Manager, available through the List all connectors route, or in the response of the registration. */
                connectorId: number;
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
    "partial-update-connector": {
        parameters: {
            query: {
                /** @description VTEX's account name owned by the connector/partner, ex. `apiexemple`. */
                an: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Required header to indicate the request is a PATCH. */
                "Content-type": string;
            };
            path: {
                /** @description Environment used as part of URL. */
                environment: string;
                /** @description Connector's ID in Channel Manager, available through the list all connectors route, or in the response of the registration. */
                connectorId: number;
            };
            cookie?: never;
        };
        /** @description Body of the request to execute the Partial update connector call. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["partialUpdateConnector"];
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
