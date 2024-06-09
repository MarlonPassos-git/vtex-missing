export interface paths {
    "/auth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Asynchronous Login
         * @description This endpoint permits the user to acquire the mandatory authentication to access the VTEX Tracking endpoints.
         *     > There is a single version of VTEX Tracking API, so it is no longer necessary to specify the version on the URL, as explained in this [release note](https://developers.vtex.com/updates/release-notes/vtex-tracking-api-changes-in-all-paths). The previous routes were not deprecated and can still be used, and if there is a breaking change, it will be informed.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                    Accept: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * @description Add client's username
                         * @default username
                         */
                        username: string;
                        /**
                         * @description Add client's password
                         * @default password
                         */
                        password: string;
                    };
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TokenResponse"];
                    };
                };
                /** @description Unauthorized */
                401: {
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
    "/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Delivery Services List
         * @description Retrieves a list of services with pagination and URLs. You can consult the list using the following filters: the service's registration date, status, page size, and desired number of pages. Check the parameters documented below to see each filter's description.
         *     > We strongly recommend that a call to a VTEX Tracking GET endpoint is made only once every 6 hours. Retrieving data from the same endpoint more than once during a 6-hour window represents a load to our API that will slow down the overall usage of systems.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Current status of the delivery service. The status parameters are not case sensitive, you can write them with upper or lower case. This field includes the following statuses as possible values: Ativo, Roteirizado, Realizado, EmAndamento, NaoRealizado */
                    status?: string;
                    /** @description Initial date of registration of the requested service. The date format is `yyyy-mm-dd`. */
                    dateInit?: string;
                    /** @description End date of registration of the requested service. The date format is `yyyy-mm-dd`.
                     *
                     *
                    Make sure that the period of time between `dateInit` and `dateEnd` is not greater than 30 days. */
                    dateEnd?: string;
                    /** @description Number of items shown per consultation page. The default is 25 */
                    pageSize?: number;
                    /** @description The consultation's desired page */
                    page?: number;
                };
                header: {
                    /** @description Type of the content being sent */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                    Accept: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PaginationResultDeliveryServiceResponsev11"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /**
         * Remove Packing List
         * @description Removes Packing List on your VTEX Tracking configuration. Your request body must contain the invoice and serie fields.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                    Accept: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["InvoiceFilter"][];
                };
            };
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /**
         * Post Delivery Service
         * @description Creates a delivery service in your Tracking system. It allows the user to configure the Route Scheduling services, without defining the Delivery Person or Route Date.
         *
         *     ### Request body example
         *
         *     ```json
         *     [
         *         {
         *             "deliveryServiceType": "Entrega",
         *             "shipperCustomer": {
         *                 "legalType": "PJ",
         *                 "companyName": "COMP. BRAS. DE TECN. PARA E-COMMERCE",
         *                 "cnpj": "05314972000174",
         *                 "addressStreet": "Rua Praia de Botafogo",
         *                 "addressNumber": "300",
         *                 "addressComplement": "SL",
         *                 "addressNeighborhood": "Botafogo",
         *                 "addressCity": "Rio de Janeiro",
         *                 "postalCode": "22250040",
         *                 "state": "RJ",
         *                 "phoneAreaCode": "21",
         *                 "phoneNumber": "999999999"
         *                 },
         *             "invoiceOrderOfService": "123456",
         *             "invoiceOrderOfServiceSerie": "2",
         *             "orderNumber": "987654321"
         *         },
         *         {
         *             "deliveryServiceType": "Entrega",
         *             "shipperCustomer": {
         *                 "legalType": "PF",
         *                 "firstName": "Pedro",
         *                 "lastName": "Silva",
         *                 "cpf": "90498365778",
         *                 "addressStreet": "Rua Praia de Botafogo",
         *                 "addressNumber": "300",
         *                 "addressComplement": "SL",
         *                 "addressNeighborhood": "Botafogo",
         *                 "addressCity": "Rio de Janeiro",
         *                 "postalCode": "22250040",
         *                 "state": "RJ",
         *                 "phoneAreaCode": "21",
         *                 "phoneNumber": "999999999"
         *                 },
         *             "invoiceOrderOfService": "123457",
         *             "invoiceOrderOfServiceSerie": "2",
         *             "orderNumber": "987654322"
         *         }
         *     ]
         *     ```
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand */
                    Accept: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["DeliveryService"];
                };
            };
            responses: {
                /** @description Success */
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
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/{idDeliveryService}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Delivery Service by ID
         * @description Retrieves a specific Service's general information by searching through its ID.
         *     > We strongly recommend that a call to a VTEX Tracking GET endpoint is made only once every 6 hours. Retrieving data from the same endpoint more than once during a 6-hour window represents a load to our API that will slow down the overall usage of systems.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand */
                    Accept: string;
                };
                path: {
                    /** @description The delivery service's unique identifier */
                    idDeliveryService: number;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DeliveryServiceResponse_v1_1"];
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
    "/services/routes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Delivery Services List by Route
         * @description This endpoint retrieves a list of Delivery Services by Route Item Date Async.
         *     > We strongly recommend that a call to a VTEX Tracking GET endpoint is made only once every 6 hours. Retrieving data from the same endpoint more than once during a 6-hour window represents a load to our API that will slow down the overall usage of systems.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Current status of the delivery service. Includes the following statuses as possible values: Ativo, Roteirizado, Realizado, EmAndamento, NaoRealizado */
                    status?: string;
                    /** @description Initial date of registration of the requested service. The date format is `yyyy-mm-dd`. */
                    dateInit?: string;
                    /** @description End date of registration of the requested service. The date format is `yyyy-mm-dd`.
                     *
                     *
                    Make sure that the period of time between `dateInit` and `dateEnd` is not greater than 30 days. */
                    dateEnd?: string;
                    /** @description Number of items shown per consultation page. The default is 25 */
                    pageSize?: number;
                    /** @description The desired page for the consultation */
                    page?: number;
                };
                header: {
                    /** @description Type of the content being sent */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                    Accept: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PaginationResultDeliveryServiceResponsev11"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        /**
         * Post Delivery Service With Route Scheduling
         * @description This endpoint creates a delivery service in your Tracking system. It allows the user to configure the Route Scheduling services with the Delivery Person and Route date already defined.
         *
         *      ### Request body example
         *
         *     ```json
         *     [
         *     	{
         *     		"deliveryServiceRoute": {
         *     			"deliveryServiceDate": "2020-09-28",
         *     			"displacementType": "Caminhão",
         *     			"carrier": {
         *     				"username": "empresa-joao.silva"
         *     			},
         *     			"vehicle": {
         *     				"registrationPlate": "XPT-0123"
         *     			},
         *     			"addressStart": {
         *     				"addressStreet": "Avenida das Américas",
         *     				"addressNumber": "5000",
         *     				"addressCity": "Rio de Janeiro",
         *     				"postalCode": "22640102",
         *     				"state": "RJ"
         *     			}
         *     		},
         *     		"deliveryService": [
         *     			{
         *     				"deliveryServiceType": "Entrega",
         *     				"shipperCustomer": {
         *     					"legalType": "PJ",
         *     					"companyName": "COMP. BRAS. DE TECN. PARA E-COMMERCE",
         *     					"cnpj": "05314972000174",
         *     					"addressStreet": "Rua Praia de Botafogo",
         *     					"addressNumber": "300",
         *     					"addressComplement": "SL",
         *     					"addressNeighborhood": "Botafogo",
         *     					"addressCity": "Rio de Janeiro",
         *     					"postalCode": "22250040",
         *     					"state": "RJ",
         *     					"phoneAreaCode": "21",
         *     					"phoneNumber": "999999999"
         *     				},
         *     				"invoiceOrderOfService": "123456",
         *     				"invoiceOrderOfServiceSerie": "2",
         *     				"orderNumber": "987654321"
         *     			},
         *     			{
         *     				"deliveryServiceType": "Entrega",
         *     				"shipperCustomer": {
         *     					"legalType": "PF",
         *     					"firstName": "Pedro",
         *     					"lastName": "Silva",
         *     					"cpf": "90498365778",
         *     					"addressStreet": "Rua Praia de Botafogo",
         *     					"addressNumber": "300",
         *     					"addressComplement": "SL",
         *     					"addressNeighborhood": "Botafogo",
         *     					"addressCity": "Rio de Janeiro",
         *     					"postalCode": "22250040",
         *     					"state": "RJ",
         *     					"phoneAreaCode": "21",
         *     					"phoneNumber": "999999999"
         *     				},
         *     				"invoiceOrderOfService": "123457",
         *     				"invoiceOrderOfServiceSerie": "2",
         *     				"orderNumber": "987654322"
         *     			}
         *     		]
         *     	}
         *     ]
         *     ```
         */
        post: operations["PostDeliveryServiceWithRouteAsync"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/services/invoice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Delivery Service by Invoice
         * @description This endpoint retrieves a given Service's information by filtering through the chosen invoice number.
         *     > We strongly recommend that a call to a VTEX Tracking GET endpoint is made only once every 6 hours. Retrieving data from the same endpoint more than once during a 6-hour window represents a load to our API that will slow down the overall usage of systems.
         */
        get: {
            parameters: {
                query?: {
                    /** @description Invoice code */
                    invoice?: string;
                };
                header: {
                    /** @description Type of the content being sent */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                    Accept: string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Success */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PaginationResultDeliveryServiceResponsev11"];
                    };
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not Found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
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
        /** TokenResponse */
        TokenResponse: {
            authenticated?: boolean;
            created?: string;
            expiration?: string;
            accessToken?: string;
            message?: string;
        };
        /** Pagination Result[Delivery Service Response _v1_1] */
        PaginationResultDeliveryServiceResponsev11: {
            /** Format: int32 */
            page?: number;
            /** Format: int32 */
            pageSize?: number;
            /** Format: int32 */
            totalCount?: number;
            data?: components["schemas"]["DeliveryServiceResponse_v1_1"][];
        };
        /** PostWithRoute */
        PostWithRoute: {
            deliveryService?: components["schemas"]["DeliveryService"][];
            deliveryServiceRoute?: components["schemas"]["DeliveryServiceRoute"];
        };
        /** DeliveryServiceRoute */
        DeliveryServiceRoute: {
            carrier: components["schemas"]["Carrier"];
            displacementType: string;
            vehicle?: components["schemas"]["Vehicle"];
            deliveryServiceRouteTimeOfDay?: string;
            /** Format: date-time */
            deliveryServiceDate: string;
            idExternalRoute?: string;
            /** Format: date-time */
            itinerantDate?: string;
            addressStart?: components["schemas"]["AddressStart"];
        };
        /** Carrier */
        Carrier: {
            username: string;
            firstName?: string;
            lastName?: string;
            cpf?: string;
            email?: string;
            mobileAreaCode?: string;
            mobile?: string;
            phoneAreaCode?: string;
            phone?: string;
            idExternalCarrier?: string;
            rg?: string;
            /** Format: int32 */
            idShipperBranch?: number;
            /** Format: int32 */
            idShippingCompany?: number;
        };
        /** Vehicle */
        Vehicle: {
            registrationPlate?: string;
        };
        /** AddressStart */
        AddressStart: {
            addressStreet?: string;
            addressNumber?: string;
            postalCode?: string;
            addressCity?: string;
            state?: string;
        };
        /** DeliveryService */
        DeliveryService: components["schemas"]["DeliveryServiceObject"][];
        /** Delivery Service Object */
        DeliveryServiceObject: {
            deliveryServiceType: string;
            idExternalShipperCustomer?: string;
            shipperCustomer: components["schemas"]["ShipperCustomer"];
            invoiceOrderOfService?: string;
            invoiceOrderOfServiceSerie?: string;
            description?: string;
            sender?: string;
            cnpjShipperPartner?: string;
            orderNumber?: string;
            deliveryServiceHighLighter?: string;
            latitude?: number;
            longitude?: number;
            deliveryServiceScheduling?: components["schemas"]["Scheduling"];
            cnpjcarrier?: string;
            cnpjbranch?: string;
            idExternal?: string;
            /** Format: int32 */
            idShippingCompany?: number;
            packingList?: string;
            /** Format: date-time */
            packingListDateTime?: string;
            /** Format: date-time */
            integrationDateTime?: string;
        };
        /** ShipperCustomer */
        ShipperCustomer: {
            legalType: string;
            email?: string;
            firstName?: string;
            lastName?: string;
            cpf?: string;
            addressStreet: string;
            addressNumber?: string;
            addressComplement?: string;
            addressNeighborhood?: string;
            addressCity?: string;
            postalCode: string;
            state?: string;
            companyName?: string;
            cnpj?: string;
            idExternalShipperCustomer?: string;
            phoneAreaCode?: string;
            phoneNumber?: string;
        };
        /** Scheduling */
        Scheduling: {
            /** Format: date-time */
            shipperCustomerSchedulingDateTime?: string;
            /** Format: date-time */
            shipperSchedulingDateTime?: string;
            morningPeriod?: boolean;
            afternoonPeriod?: boolean;
            nightPeriod?: boolean;
            /** Format: int32 */
            origin?: number;
        };
        /** Delivery Service Response body _v1_1 */
        DeliveryServiceResponse_v1_1: {
            pictures?: string[];
            /** Format: int32 */
            idDeliveryService?: number;
            deliveryServiceType?: components["schemas"]["DeliveryServiceTypeResponse"];
            deliveryServiceStatus?: components["schemas"]["DeliveryServiceStatusResponse"];
            shipper?: components["schemas"]["ShipperResponse"];
            shipperCustomer?: components["schemas"]["ShipperCustomerResponse"];
            carrier?: components["schemas"]["CarrierResponse"];
            displacementType?: components["schemas"]["DisplacementTypeResponse"];
            state?: components["schemas"]["StateResponse"];
            country?: components["schemas"]["CountryResponse"];
            nonDeliveryReason?: components["schemas"]["NonDeliveryReasonResponse"];
            shipperPartner?: components["schemas"]["ShipperPartnerResponse"];
            shipperBranch?: components["schemas"]["ShipperBranchResponse"];
            freightPrice?: components["schemas"]["FreightPriceResponse"];
            shippingCompany?: components["schemas"]["ShippingCompanyResponse"];
            invoiceOrderOfService?: string;
            description?: string;
            addressStreet?: string;
            addressNumber?: string;
            addressComplement?: string;
            addressNeighborhood?: string;
            addressCity?: string;
            postalCode?: string;
            /** Format: date-time */
            estimateDeliveryHour?: string;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            initialEstimateDeliveryHour?: string;
            /** Format: date-time */
            deliveryDateTime?: string;
            /** Format: int32 */
            estimateDeliveryDistance?: number;
            /** Format: int32 */
            travelledDeliveryDistance?: number;
            orderNumber?: string;
            cteNumber?: string;
            /** Format: date-time */
            cteDate?: string;
            sender?: string;
            senderCity?: string;
            /** Format: int32 */
            senderState?: number;
            weight?: number;
            cubicMeter?: number;
            cubicMeterWeight?: number;
            value?: number;
            freightPriceReceived?: number;
            /** Format: int32 */
            deliveryAttempts?: number;
            /** Format: int32 */
            serviceTime?: number;
            invoiceOrderOfServiceSerie?: string;
            /** Format: date-time */
            leadTime?: string;
            cnpjcarrier?: string;
            cnpjbranch?: string;
            idExternal?: string;
            billingInfo?: components["schemas"]["BillingInfoResponse"][];
            deliveryServiceRouteItem?: components["schemas"]["DeliveryServiceRouteItemResponse"][];
        };
        /** DeliveryServiceTypeResponse */
        DeliveryServiceTypeResponse: {
            description?: string;
        };
        /** DeliveryServiceStatusResponse */
        DeliveryServiceStatusResponse: {
            description?: string;
        };
        /** ShipperResponse */
        ShipperResponse: {
            companyName?: string;
        };
        /** ShipperCustomerResponse */
        ShipperCustomerResponse: {
            /** Format: int32 */
            idShipperCustomer?: number;
            email?: string;
            firstName?: string;
            lastName?: string;
            cpf?: string;
            addressStreet?: string;
            addressNumber?: string;
            addressComplement?: string;
            addressNeighborhood?: string;
            addressCity?: string;
            postalCode?: string;
            state?: components["schemas"]["StateResponse"];
            country?: components["schemas"]["CountryResponse"];
            /** Format: date-time */
            created?: string;
            companyName?: string;
            cnpj?: string;
            legalType?: components["schemas"]["LegalTypeResponse"];
            idExternalShipperCustomer?: string;
            phoneAreaCode?: string;
            phoneNumber?: string;
        };
        /** CarrierResponse */
        CarrierResponse: {
            username?: string;
            firstName?: string;
            lastName?: string;
            cpf?: string;
            email?: string;
            cnpjtransportCompany?: string;
            mobileAreaCode?: string;
            mobile?: string;
            phoneAreaCode?: string;
            phone?: string;
            /** Format: date-time */
            created?: string;
            idExternalCarrier?: string;
            isCarrierAppOnline?: boolean;
            shippingCompany?: components["schemas"]["ShippingCompanyResponse"];
            rg?: string;
        };
        /** DisplacementTypeResponse */
        DisplacementTypeResponse: {
            description?: string;
            vehicleType?: components["schemas"]["VehicleTypeResponse"];
        };
        /** StateResponse */
        StateResponse: {
            name?: string;
            code?: string;
        };
        /** CountryResponse */
        CountryResponse: {
            name?: string;
            code?: string;
        };
        /** NonDeliveryReasonResponse */
        NonDeliveryReasonResponse: {
            description?: string;
        };
        /** ShipperPartnerResponse */
        ShipperPartnerResponse: {
            cnpj?: string;
            name?: string;
        };
        /** ShipperBranchResponse */
        ShipperBranchResponse: {
            shipperType?: components["schemas"]["ShipperTypeResponse"];
            companyName?: string;
            trade?: string;
            cnpj?: string;
            companyContact?: string;
            telephoneArea?: string;
            telephone?: string;
            mobileArea?: string;
            mobile?: string;
            email?: string;
        };
        /** FreightPriceResponse */
        FreightPriceResponse: {
            description?: string;
            firstPostalCodeInterval?: string;
            secondPostalCodeInterval?: string;
            price?: number;
            /** Format: date-time */
            created?: string;
        };
        /** ShippingCompanyResponse */
        ShippingCompanyResponse: {
            companyName?: string;
            trade?: string;
            cnpj?: string;
            companyContact?: string;
            telephoneArea?: string;
            telephone?: string;
            mobileArea?: string;
            mobile?: string;
            email?: string;
        };
        /** BillingInfoResponse */
        BillingInfoResponse: {
            receivableAmount?: number;
            money?: number;
            cheque?: number;
            creditCard?: number;
            webComment?: string;
            carrierComment?: string;
            /** Format: date-time */
            billingConfirmDate?: string;
            /** Format: date-time */
            created?: string;
        };
        /** DeliveryServiceRouteItemResponse */
        DeliveryServiceRouteItemResponse: {
            /** Format: int32 */
            idDeliveryServiceRouteItem?: number;
            deliveryServiceRoute?: components["schemas"]["DeliveryServiceRouteResponse"];
            deliveryServiceRouteItemStatus?: components["schemas"]["DeliveryServiceRouteItemStatusResponse"];
            nonDeliveryDescription?: string;
            /** Format: int32 */
            index?: number;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            startDisplacementDateTime?: string;
            startDisplacementLatitude?: number;
            startDisplacementLongitude?: number;
            finishedDisplacementLatitude?: number;
            finishedDisplacementLongitude?: number;
            receiverName?: string;
            receiverDocument?: string;
            description?: string;
            /** Format: date-time */
            deliveryArrived?: string;
            comment?: string;
            /** Format: int32 */
            rating?: number;
            /** Format: date-time */
            pauseDisplacementDateTime?: string;
            /** Format: date-time */
            deliveryLeft?: string;
            deliveryReason?: components["schemas"]["DeliveryReasonResponse"];
        };
        /** LegalTypeResponse */
        LegalTypeResponse: {
            description?: string;
        };
        /** VehicleTypeResponse */
        VehicleTypeResponse: {
            description?: string;
        };
        /** ShipperTypeResponse */
        ShipperTypeResponse: {
            description?: string;
        };
        /** DeliveryServiceRouteResponse */
        DeliveryServiceRouteResponse: {
            /** Format: int32 */
            idDeliveryServiceRoute?: number;
            deliveryServiceRouteStatus?: components["schemas"]["DeliveryServiceRouteStatusResponse"];
            /** Format: date-time */
            deliveryServiceDate?: string;
            /** Format: date-time */
            created?: string;
            /** Format: date-time */
            startWorkDayDateTime?: string;
            /** Format: date-time */
            finishWorkDayDateTime?: string;
            /** Format: date-time */
            itinerantDate?: string;
        };
        /** DeliveryServiceRouteItemStatusResponse */
        DeliveryServiceRouteItemStatusResponse: {
            description?: string;
        };
        /** Request body */
        InvoiceFilter: {
            /**
             * @description Chosen invoice filter
             * @default string
             */
            invoice: string;
            /**
             * @description Serie's number on the invoice
             * @default string
             */
            serie: string;
        };
        /** DeliveryReasonResponse */
        DeliveryReasonResponse: {
            description?: string;
        };
        /** DeliveryServiceRouteStatusResponse */
        DeliveryServiceRouteStatusResponse: {
            description?: string;
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
    PostDeliveryServiceWithRouteAsync: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostWithRoute"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
