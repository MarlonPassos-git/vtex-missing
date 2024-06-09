export interface paths {
    "/api/logistics/pvt/shipping-policies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve shipping policy by ID
         * @description This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                };
                path: {
                    /** @description ID of the shipping policy. */
                    id: string;
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
        /**
         * Update shipping policy
         * @description This endpoint updates information on existing Shipping Policies from carriers.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
         */
        put: {
            parameters: {
                query?: never;
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                };
                path: {
                    /** @description Shipping policy's ID */
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * name
                         * @description Name of the shipping policy.
                         * @example Correios PAC
                         */
                        name: string;
                        /**
                         * shippingMethod
                         * @description Type of shipping available for this shipping policy (carrier). Options shown on freight simulation.
                         * @example Normal
                         */
                        shippingMethod: string;
                        /**
                         * deliveryOnWeekends
                         * @description If the shipping policy (carrier) delivers on weekends.
                         * @example false
                         */
                        deliveryOnWeekends: boolean;
                        /**
                         * maxDimension
                         * @description Object containing attributes of maximum dimension permitted by the shipping policy (carrier).
                         * @example {
                         *       "largestMeasure": 10,
                         *       "maxMeasureSum": 30
                         *     }
                         */
                        maxDimension: {
                            /**
                             * largestMeasure
                             * @description Largest measure of the package.
                             * @example 0
                             */
                            largestMeasure: number;
                            /**
                             * maxMeasureSum
                             * @description Sum of all maximum measures of the package.
                             * @example 0
                             */
                            maxMeasureSum: number;
                        };
                        /**
                         * isActive
                         * @description If the shipping policy is active or not.
                         * @example true
                         */
                        isActive: boolean;
                        /** @description Settings for the Scheduled Delivery feature. */
                        deliveryScheduleSettings?: {
                            /**
                             * @description Select the Scheduled Delivery configuration.
                             * @example true
                             */
                            useDeliverySchedule: boolean;
                            /**
                             * @description Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.
                             * @example 0
                             */
                            maxRangeDelivery: number;
                            /** @description Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example. */
                            dayOfWeekForDelivery: {
                                /**
                                 * @description Day of the week, from `0` (sunday) to `6` (saturday).
                                 * @example 2
                                 */
                                dayOfWeek: number;
                                /** @description Reservation windows for scheduled delivery. */
                                deliveryRanges: {
                                    /**
                                     * startTime
                                     * @description Start time for day of the week.
                                     * @example 11:00:00
                                     */
                                    startTime: string;
                                    /**
                                     * @description End time for day of the week.
                                     * @example 12:30:00
                                     */
                                    endTime: string;
                                    /**
                                     * @description List price for day of the week.
                                     * @example 0
                                     */
                                    listPrice: number;
                                    /** @description Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
                                    deliveryCapacity?: {
                                        /**
                                         * @description Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
                                         * @example ORDERS_QUANTITY
                                         */
                                        capacityType: string;
                                        /**
                                         * @description Maximum number of orders or SKUs that the store is capable of fulfilling.
                                         * @example 0
                                         */
                                        maxValue: number;
                                    }[];
                                }[];
                            }[];
                        };
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
            };
        };
        post?: never;
        /**
         * Delete shipping policies by ID
         * @description This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.
         */
        delete: {
            parameters: {
                query?: never;
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                };
                path: {
                    /** @description ID of the shipping policy. */
                    id: string;
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/shipping-policies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List shipping policies
         * @description This endpoint lists existing shipping policies from carriers in your store.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
         */
        get: {
            parameters: {
                query: {
                    /** @description Desired number of pages to retrieve information from your Shipping Policies. */
                    page: string;
                    /** @description Desired number of items per page, to retrieve information from your Shipping Policies. */
                    perPage: string;
                };
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Type of the content being sent. */
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
                    content?: never;
                };
            };
        };
        put?: never;
        /**
         * Create shipping policy
         * @description This endpoint creates new shipping policies from carriers in your store.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
         */
        post: {
            parameters: {
                query?: never;
                header: {
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                };
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /**
                         * id schema
                         * @description ID of the shipping policy.
                         * @example 123
                         */
                        id: string;
                        /**
                         * name
                         * @description Name of the shipping policy.
                         * @example Normal
                         */
                        name: string;
                        /**
                         * shippingMethod
                         * @description Type of shipping available for this shipping policy (carrier). Options shown on freight simulation.
                         * @example Normal
                         */
                        shippingMethod: string;
                        /**
                         * weekendAndHolidays
                         * @description If the shipping policy includes deliveries on weekends and holidays.
                         * @example {
                         *       "saturday": false,
                         *       "sunday": false,
                         *       "holiday": false
                         *     }
                         */
                        weekendAndHolidays: {
                            /**
                             * saturday
                             * @description If the shipping policy allows deliveries on Saturdays (`true`), or not (`false`).
                             * @example false
                             */
                            saturday: boolean;
                            /**
                             * sunday
                             * @description If the shipping policy allows deliveries on Sundays (`true`), or not (`false`).
                             * @example false
                             */
                            sunday: boolean;
                            /**
                             * holiday
                             * @description If the shipping policy allows deliveries on holidays (`true`), or not (`false`).
                             * @example false
                             */
                            holiday: boolean;
                        };
                        /**
                         * maxDimension
                         * @description Object containing attributes of maximum dimension permitted by the shipping policy (carrier).
                         * @example {
                         *       "largestMeasure": 15,
                         *       "maxMeasureSum": 25
                         *     }
                         */
                        maxDimension: {
                            /**
                             * largestMeasure
                             * @description Largest measure of the package.
                             * @example 0
                             */
                            largestMeasure: number;
                            /**
                             * maxMeasureSum
                             * @description Sum of all maximum measures of the package.
                             * @example 0
                             */
                            maxMeasureSum: number;
                        };
                        /**
                         * numberOfItemsPerShipment
                         * @description Capacity of your store's logistics of shipment, determines number of items permitted per shipment.
                         * @example 5
                         */
                        numberOfItemsPerShipment: number;
                        /**
                         * minimumValueAceptable
                         * @description Minimum value accepted by the carrier, to realize the shipping.
                         * @example 0
                         */
                        minimumValueAceptable: number;
                        /**
                         * maximumValueAceptable
                         * @description Maximum value accepted by the carrier, to realize the shipping.
                         * @example 0
                         */
                        maximumValueAceptable: number;
                        /**
                         * deliveryScheduleSettings
                         * @description Settings for the Scheduled Delivery feature.
                         * @example {
                         *       "useDeliverySchedule": true,
                         *       "dayOfWeekForDelivery": [
                         *         {
                         *           "dayOfWeek": 2,
                         *           "deliveryRanges": [
                         *             {
                         *               "startTime": "08:00:00",
                         *               "endTime": "12:00:00",
                         *               "listPrice": 5
                         *             },
                         *             {
                         *               "startTime": "12:01:00",
                         *               "endTime": "18:00:00",
                         *               "listPrice": 10
                         *             }
                         *           ]
                         *         }
                         *       ],
                         *       "maxRangeDelivery": 5
                         *     }
                         */
                        deliveryScheduleSettings: {
                            /**
                             * useDeliverySchedule
                             * @description Select the Scheduled Delivery configuration.
                             * @example true
                             */
                            useDeliverySchedule: boolean;
                            /**
                             * maxRangeDelivery
                             * @description Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.
                             * @example 0
                             */
                            maxRangeDelivery: number;
                            /**
                             * dayOfWeekForDelivery
                             * @description Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
                             * @example [
                             *       {
                             *         "dayOfWeek": 2,
                             *         "deliveryRanges": [
                             *           {
                             *             "startTime": "08:00:00",
                             *             "endTime": "12:00:00",
                             *             "listPrice": 10
                             *           },
                             *           {
                             *             "startTime": "12:01:00",
                             *             "endTime": "18:00:00",
                             *             "listPrice": 10
                             *           }
                             *         ],
                             *         "maxRangeDelivery": 5
                             *       }
                             *     ]
                             */
                            dayOfWeekForDelivery: {
                                /**
                                 * @description Day of the week, from `0` (sunday) to `6` (saturday).
                                 * @example 2
                                 */
                                dayOfWeek: number;
                                /** @description Reservation windows for scheduled delivery. */
                                deliveryRanges: {
                                    /**
                                     * startTime
                                     * @description Start time for day of the week.
                                     * @example 11:00:00
                                     */
                                    startTime: string;
                                    /**
                                     * @description End time for day of the week.
                                     * @example 12:30:00
                                     */
                                    endTime: string;
                                    /**
                                     * @description List price for day of the week.
                                     * @example 0
                                     */
                                    listPrice: number;
                                    /** @description Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
                                    deliveryCapacity?: {
                                        /**
                                         * @description Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
                                         * @example ORDERS_QUANTITY
                                         */
                                        capacityType: string;
                                        /**
                                         * @description Maximum number of orders or SKUs that the store is capable of fulfilling.
                                         * @example 0
                                         */
                                        maxValue: number;
                                    }[];
                                }[];
                            }[];
                        };
                        /**
                         * carrierSchedule
                         * @description Schedule sent by the carrier to configure the shipping policy.
                         */
                        carrierSchedule?: {
                            /**
                             * @description Day of the week, from `0` (sunday) to `6` (saturday).
                             * @example 0
                             */
                            dayOfWeek?: number;
                            /**
                             * @description Time limit.
                             * @example time_limit
                             */
                            timeLimit?: string;
                        }[];
                        /**
                         * cubicWeightSettings
                         * @description Measure that accounts package's volume, and not only weight.
                         * @example {
                         *       "volumetricFactor": 3,
                         *       "minimunAcceptableVolumetricWeight": 5
                         *     }
                         */
                        cubicWeightSettings: {
                            /**
                             * volumetricFactor
                             * @description Factor that will be used on the cubic weight calculation.
                             * @example 0
                             */
                            volumetricFactor: number;
                            /**
                             * minimunAcceptableVolumetricWeight
                             * @description Packages' minimum acceptable [volumetric weight](https://help.vtex.com/en/tutorial/understanding-the-cubic-weight-factor--tutorials_128).
                             * @example 0
                             */
                            minimunAcceptableVolumetricWeight: number;
                        };
                        /**
                         * modalSettings
                         * @description Configurations for the [modal](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125), which is the attachement of a specific product to a carrier specialized in delivering that type of product.
                         * @example {
                         *       "modals": [
                         *         "ELECTRONICS",
                         *         "FURNITURE"
                         *       ],
                         *       "useOnlyItemsWithDefinedModal": false
                         *     }
                         */
                        modalSettings: {
                            /**
                             * modals
                             * @description Type of special freight. The possible values are:
                             *     - `CHEMICALS`
                             *     - `ELECTRONICS`
                             *     - `FURNITURE`
                             *     - `GLASS`
                             *     - `LIQUID`
                             *     - `MATTRESSES`
                             *     - `REFRIGERATED`
                             *     - `TIRES`
                             *     - `WHITE_GOODS`
                             *     - `FIREARMS`.
                             * @example [
                             *       "ELECTRONICS",
                             *       "FURNITURE"
                             *     ]
                             */
                            modals: ("CHEMICALS" | "ELECTRONICS" | "FURNITURE" | "GLASS" | "LIQUID" | "MATTRESSES" | "REFRIGERATED" | "TIRES" | "WHITE_GOODS" | "FIREARMS")[];
                            /**
                             * useOnlyItemsWithDefinedModal
                             * @description When set as `true`, the modal's configurations will apply only for items with a defined modal.
                             * @example false
                             */
                            useOnlyItemsWithDefinedModal: boolean;
                        };
                        /**
                         * businessHourSettings
                         * @description Business hour configuration.
                         * @example {
                         *       "carrierBusinessHours": [
                         *         {
                         *           "dayOfWeek": 0,
                         *           "openingTime": "09:00:00",
                         *           "closingTime": "18:59:59"
                         *         }
                         *       ],
                         *       "isOpenOutsideBusinessHours": true
                         *     }
                         */
                        businessHourSettings: {
                            /**
                             * carrierBusinessHours
                             * @description Array containing objects with business hour configurations.
                             */
                            carrierBusinessHours: {
                                /**
                                 * openingTime
                                 * @description Opening time.
                                 * @example 00:00:00
                                 */
                                openingTime: string;
                                /**
                                 * closingTime
                                 * @description Closing time.
                                 * @example 23:59:59
                                 */
                                closingTime: string;
                                /**
                                 * dayOfWeek
                                 * @description Day of the week, from `0` (sunday) to `6` (saturday).
                                 * @example 1
                                 */
                                dayOfWeek: number;
                            }[];
                            /**
                             * isOpenOutsideBusinessHours
                             * @description Select whether the shipping policy allows deliveries outside business hours.
                             * @example true
                             */
                            isOpenOutsideBusinessHours: boolean;
                        };
                        /**
                         * pickupPointsSettings
                         * @description Configuration for Pickup Points.
                         * @example {
                         *       "pickupPointIds": [
                         *         "null"
                         *       ],
                         *       "pickupPointTags": [
                         *         "null"
                         *       ],
                         *       "sellers": [
                         *         "cosmetics2"
                         *       ]
                         *     }
                         */
                        pickupPointsSettings: {
                            /**
                             * pickupPointIds
                             * @description Insert the IDs for pickup points previously configured in your store.
                             * @example [
                             *       "Id1",
                             *       "Id2"
                             *     ]
                             */
                            pickupPointIds: unknown[];
                            /**
                             * pickupPointTags
                             * @description Insert the tags for pickup points previously configured in your store.
                             * @example [
                             *       "Tag1",
                             *       "Tag2"
                             *     ]
                             */
                            pickupPointTags: unknown[];
                            /**
                             * sellers
                             * @description Sellers that will be associated with the [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) of the shipping policy being created.
                             * @example [
                             *       "Seller1"
                             *     ]
                             */
                            sellers: unknown[];
                        };
                        /**
                         * @description Indicates whether shipping policy is active or not.
                         * @example false
                         */
                        isActive: boolean;
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
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/freights/{carrierId}/values/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create/update freight values
         * @description Creates or updates the freight values of your store's carriers. Learn more in [Shipping rate template](https://help.vtex.com/en/tutorial/planilha-de-frete--tutorials_127#).
         */
        post: operations["Create/UpdateFreightValues"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/freights/{carrierId}/{cep}/values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List freight values
         * @description Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).
         */
        get: operations["FreightValues"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/carriers/{carrierId}/getdayofweekblocked": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve blocked delivery windows
         * @description Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
         */
        get: operations["RetrieveBlockedDeliveryWindows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/carriers/{carrierId}/adddayofweekblocked": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add blocked delivery windows
         * @description Adds blocked delivery windows for your store's shipping policies.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
         */
        post: operations["AddBlockedDeliveryWindows"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/carriers/{carrierId}/removedayofweekblocked": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove blocked delivery windows
         * @description Removes the blocked delivery windows set to your store's shipping policies.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
         */
        post: operations["RemoveBlockedDeliveryWindows"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/docks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all docks
         * @description Informs a list of all docks.
         */
        get: operations["AllDocks"];
        put?: never;
        /**
         * Create/update dock
         * @description Creates or updates docks to be used in your logistic operation.
         */
        post: operations["Create/UpdateDock"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/docks/{dockId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List dock by ID
         * @description Informs a given dock's information, searching by dock ID.
         */
        get: operations["DockById"];
        put?: never;
        post?: never;
        /**
         * Delete dock
         * @description Deletes dock by dock ID.
         */
        delete: operations["Dock"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/docks/{dockId}/activation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Activate dock
         * @description Activates dock through dock ID.
         */
        post: operations["ActivateDock"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/docks/{dockId}/deactivation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Deactivate dock
         * @description Deactivate dock by dock ID
         */
        post: operations["DeactivateDock"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/warehouses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all warehouses
         * @description Lists information about all warehouses set up in your store.
         */
        get: operations["AllWarehouses"];
        put?: never;
        /**
         * Create/update warehouse
         * @description Creates or updates your store's warehouses.
         */
        post: operations["Create/UpdateWarehouse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/warehouses/{warehouseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List warehouse by ID
         * @description Lists the information of a given warehouse, searching by warehouse ID.
         */
        get: operations["WarehouseById"];
        put?: never;
        post?: never;
        /**
         * Remove warehouse
         * @description Deletes given warehouse by warehouse ID.
         */
        delete: operations["RemoveWarehouse"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/warehouses/{warehouseId}/activation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Activate warehouse
         * @description Activates a given warehouse, by warehouse ID.
         */
        post: operations["ActivateWarehouse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/warehouses/{warehouseId}/deactivation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Deactivate warehouse
         * @description Deactivates a given warehouse by warehouse ID.
         */
        post: operations["DeactivateWarehouse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/skus/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory by SKU
         * @description Lists your [inventory](https://help.vtex.com/en/tutorial/inventory-management--tutorials_139) information by a SKU unique identifier (SKU ID).
         */
        get: operations["InventoryBySku"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory per warehouse
         * @description Lists your [inventory](https://help.vtex.com/en/tutorial/inventory-management--tutorials_139) information by warehouse.
         */
        get: operations["Inventoryperwarehouse"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/skus/{skuId}/warehouses/{warehouseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update inventory by SKU and warehouse
         * @description Updates the [inventory](https://help.vtex.com/tutorial/inventory-management--tutorials_139) of a SKU in a given [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb). This endpoint allows you to do the following:
         *
         *     - **Define a quantity:** Indicate a specific number of SKUs, and it will decrease whenever a unit is sold. The store can eventually run out of inventory.
         *
         *     - **Configure lead time:** Set the [lead time](https://help.vtex.com/en/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B) for a given SKU from a warehouse, and this period will be added to the order total shipping time. This is an optional configuration.
         *
         *     - **Set an infinite inventory:** Always have the SKU from the informed warehouse available for sales. The store cannot run out of inventory.
         *
         *     Successful requests receive a `200 OK` with `true` in the response body. If an error occurs, you will not get a `false` string in the response body, but a message instead. For example, sending a malformatted request body will result in a  `400 Bad Request` message as a response.
         */
        put: operations["UpdateInventoryBySkuandWarehouse"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory per dock
         * @description Lists your inventory information by [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj).
         */
        get: operations["Inventoryperdock"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}/warehouses/{warehouseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory per dock and warehouse
         * @description Lists your inventory information from the combination of a [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) and a [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb).
         */
        get: operations["Inventoryperdockandwarehouse"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/items/{itemId}/warehouses/{warehouseId}/dispatched": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List inventory with dispatched reservations
         * @description [Reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92) is the VTEX solution that prevents stores from selling the same item more than once. Adding products to the shopping cart does not create a reservation, this only happens after the shopper completes the purchase.
         *
         *     This endpoint lists your [inventory](https://help.vtex.com/en/tutorial/inventory-management--tutorials_139) information about dispatched reservations from a given warehouse. A reservation is considered dispatched after the order has passed the `authorize-fulfillment` status in the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196) and is not canceled.
         *
         *     **Response 400 Bad Request:** When the store has more than 2.000 active reservations, you receive a `400 Bad Request` error with the message: _Too many active reservations_
         */
        get: operations["Getinventorywithdispatchedreservations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List supply lots
         * @description Returns a list of the supply lots of an SKU in a specific warehouse.
         */
        get: operations["GetSupplyLots"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots/{supplyLotId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Save supply lot
         * @description Creates a new Supply Lot. A Supply Lot lets the store sell products that are not currently available in stock but whose arrival is already scheduled.
         *
         *     Check out our [documentation](https://help.vtex.com/en/tutorial/setting-up-future-inventory--UMSGjooqRfkRbeoh94kS4) about this feature.
         */
        put: operations["SaveSupplyLot"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots/{supplyLotId}/transfer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Transfer supply lot
         * @description Transfers an SKU from a Supply Lot to the currently available inventory.
         *
         *     Check out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.
         */
        post: operations["TransferSupplyLot"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/holidays/{holidayId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List holiday by ID
         * @description Lists holiday's information by holiday ID.
         */
        get: operations["HolidayById"];
        /**
         * Create/update holiday
         * @description Creates or updates holidays through holiday ID.
         */
        put: operations["Create/UpdateHoliday"];
        post?: never;
        /**
         * Delete holiday
         * @description Deletes given holidays set up in your store.
         */
        delete: operations["Holiday"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/holidays": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all holidays
         * @description Lists information of all holidays.
         */
        get: operations["AllHolidays"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/reservations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create reservation
         * @description Creates [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92).
         */
        post: operations["CreateReservation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/reservations/{reservationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reservation by ID
         * @description Lists reservation's information by ID.
         */
        get: operations["ReservationById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/reservations/{reservationId}/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Confirm reservation
         * @description Confirms reservation by reservation ID.
         */
        post: operations["ConfirmReservation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/reservations/{reservationId}/acknowledge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Acknowledgment reservation
         * @description Acknowledges reservations made by reservation ID.
         */
        post: operations["AcknowledgmentReservation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/reservations/{reservationId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel reservation
         * @description Cancels reservation by reservation ID.
         */
        post: operations["CancelReservation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/inventory/reservations/{warehouseId}/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reservation by warehouse and SKU
         * @description Lists reservations in your store, by searching through warehouse and SKU.
         */
        get: operations["ReservationbyWarehouseandSku"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/shipping/calculate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Calculate SLA
         * @description Endpoint used by the checkout to calculate the Service Level Agreement (SLA), a contract between the store and shoppers on the order's fulfillment conditions, such as the shipping estimated date.
         *
         *     The calculation of the estimated date considers the [shipping policy](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) and [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj) related to the order.
         */
        post: operations["CalculateSLA"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/pickuppoints": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all pickup points
         * @description Lists all of your store's pickup points.
         */
        get: operations["ListAllPickupPpoints"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/pickuppoints/{pickupPointId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List pickup point by ID
         * @description Lists your store's pickup points while searching by ID.
         */
        get: operations["GetById"];
        /**
         * Create/update pickup point
         * @description Creates or updates [pickup points](https://help.vtex.com/en/subcategory/pickup-points--1c5Btie9ou2Gg2iUo0ggqM#) in your store by Pickup Point ID.
         */
        put: operations["CreateUpdatePickupPoint"];
        post?: never;
        /**
         * Delete pickup point
         * @description Deletes a given pickup point for your store, by pickup point ID.
         */
        delete: operations["Delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/pickuppoints/_search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List paged pickup points
         * @description Lists paged pickup points in your store.
         */
        get: operations["Getpaged"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/geoshape": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List paged polygons
         * @description Lists stored polygons.
         */
        get: operations["PagedPolygons"];
        /**
         * Create/update polygon
         * @description Creates or updates your store's polygons by geoshape coordinates and polygon name.
         */
        put: operations["CreateUpdatePolygon"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics/pvt/configuration/geoshape/{polygonName}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List polygon by ID
         * @description Lists your store's polygons by searching through polygon name
         */
        get: operations["PolygonbyId"];
        put?: never;
        post?: never;
        /**
         * Delete polygon
         * @description Deletes polygon set up in your store, by polygon name.
         */
        delete: operations["DeletePolygon"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search capacity reservations in time range
         * @description Get information on all capacity reservations made to scheduled delivery windows in a given time range.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
         *
         *
        > Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.
         */
        get: {
            parameters: {
                query: {
                    /** @description Starting date of time range */
                    rangeStart: string;
                    /** @description End date of time range. */
                    rangeEnd: string;
                };
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`). */
                    capacityType: string;
                    /** @description ID of shipping policy to search. */
                    shippingPolicyId: string;
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
                        "application/json": unknown;
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
    "/api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames/{windowDay}F{windowStartTime}T{windowEndTime}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get capacity reservation usage by window
         * @description Retrieves capacity usage of a specific scheduled delivery reservation window.
         *
         *
        > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
         *
         *
        > Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.
         */
        get: {
            parameters: {
                query?: never;
                header: {
                    /** @description Type of the content being sent. */
                    "Content-Type": string;
                    /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                    Accept: string;
                };
                path: {
                    /** @description How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`). */
                    capacityType: string;
                    /** @description ID of shipping policy to search. */
                    shippingPolicyId: string;
                    /** @description Day of the specific scheduled delivery window to be consulted for reservations. */
                    windowDay: string;
                    /** @description Start time of specific scheduled delivery window to be consulted for reservations. */
                    windowStartTime: string;
                    /** @description End time of specific scheduled delivery window to be consulted for reservations. */
                    windowEndTime: string;
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
                        "application/json": unknown;
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
        /**
         * Create/UpdateCarrierRequest
         * @example {
         *       "id": "13942e4",
         *       "slaType": "Expressa",
         *       "name": "Transportadora Expressa",
         *       "scheduledDelivery": false,
         *       "maxRangeDelivery": 0,
         *       "dayOfWeekForDelivery": null,
         *       "dayOfWeekBlockeds": [],
         *       "freightValue": [],
         *       "factorCubicWeight": null,
         *       "freightTableProcessStatus": 1,
         *       "freightTableValueError": null,
         *       "modals": [],
         *       "onlyItemsWithDefinedModal": false,
         *       "deliveryOnWeekends": false,
         *       "carrierSchedule": [],
         *       "maxDimension": {
         *         "weight": 0,
         *         "height": 0,
         *         "width": 0,
         *         "length": 0,
         *         "maxSumDimension": 0
         *       },
         *       "exclusiveToDeliveryPoints": false,
         *       "minimunCubicWeight": 0,
         *       "isPolygon": false,
         *       "numberOfItemsPerShipment": null
         *     }
         */
        CreateUpdateCarrierRequest: {
            id: string;
            slaType: string;
            name: string;
            scheduledDelivery: boolean;
            /** Format: int32 */
            maxRangeDelivery: number;
            /** @description Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example. */
            dayOfWeekForDelivery: {
                /**
                 * @description Day of the week, from `0` (sunday) to `6` (saturday).
                 * @example 2
                 */
                dayOfWeek: number;
                /** @description Reservation windows for scheduled delivery. */
                deliveryRanges: {
                    /**
                     * startTime
                     * @description Start time for day of the week.
                     * @example 11:00:00
                     */
                    startTime: string;
                    /**
                     * @description End time for day of the week.
                     * @example 12:30:00
                     */
                    endTime: string;
                    /**
                     * @description List price for day of the week.
                     * @example 0
                     */
                    listPrice: number;
                    /** @description Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
                    deliveryCapacity?: {
                        /**
                         * @description Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
                         * @example ORDERS_QUANTITY
                         */
                        capacityType: string;
                        /**
                         * @description Maximum number of orders or SKUs that the store is capable of fulfilling.
                         * @example 0
                         */
                        maxValue: number;
                    }[];
                }[];
            }[] | null;
            dayOfWeekBlockeds: string[];
            freightValue: string[];
            factorCubicWeight: string | null;
            /** Format: int32 */
            freightTableProcessStatus: number;
            freightTableValueError: string | null;
            modals: string[];
            onlyItemsWithDefinedModal: boolean;
            deliveryOnWeekends: boolean;
            carrierSchedule: string[];
            /**
             * MaxDimension
             * @example {
             *       "weight": 0,
             *       "height": 0,
             *       "width": 0,
             *       "length": 0,
             *       "maxSumDimension": 0
             *     }
             */
            maxDimension: {
                /** Format: int32 */
                weight: number;
                /** Format: int32 */
                height: number;
                /** Format: int32 */
                width: number;
                /** Format: int32 */
                length: number;
                /** Format: int32 */
                maxSumDimension: number;
            };
            exclusiveToDeliveryPoints: boolean;
            /** Format: int32 */
            minimunCubicWeight: number;
            isPolygon: boolean;
            numberOfItemsPerShipment: string | null;
        };
        /**
         * MaxDimension
         * @example {
         *       "weight": 0,
         *       "height": 0,
         *       "width": 0,
         *       "length": 0,
         *       "maxSumDimension": 0
         *     }
         */
        MaxDimension: {
            /** Format: int32 */
            weight: number;
            /** Format: int32 */
            height: number;
            /** Format: int32 */
            width: number;
            /** Format: int32 */
            length: number;
            /** Format: int32 */
            maxSumDimension: number;
        };
        /**
         * Create/UpdateCarrier(DeliveryWindows)Request
         * @example {
         *       "id": "11cc4b5",
         *       "name": "Entrega Agendada",
         *       "slaType": "Entrega Agendada",
         *       "factorCubicWeight": null,
         *       "minimunCubicWeight": null,
         *       "numberOfItemsPerShipment": null,
         *       "modals": [],
         *       "onlyItemsWithDefinedModal": false,
         *       "maxDimension": {
         *         "maxSumDimension": null,
         *         "height": null,
         *         "length": null
         *       },
         *       "scheduledDelivery": true,
         *       "maxRangeDelivery": 7,
         *       "dayOfWeekForDelivery": [
         *         {
         *           "dayOfWeek": 0,
         *           "deliveryRanges": [
         *             {
         *               "startTime": "08:00:00",
         *               "endTime": "12:00:00",
         *               "listPrice": 10
         *             },
         *             {
         *               "startTime": "12:01:00",
         *               "endTime": "18:00:00",
         *               "listPrice": 10
         *             }
         *           ]
         *         },
         *         {
         *           "dayOfWeek": 1,
         *           "deliveryRanges": [
         *             {
         *               "startTime": "08:00:00",
         *               "endTime": "12:00:00",
         *               "listPrice": 10
         *             },
         *             {
         *               "startTime": "12:01:00",
         *               "endTime": "18:00:00",
         *               "listPrice": 10
         *             }
         *           ]
         *         },
         *         {
         *           "dayOfWeek": 2,
         *           "deliveryRanges": [
         *             {
         *               "startTime": "08:00:00",
         *               "endTime": "12:00:00",
         *               "listPrice": 10
         *             },
         *             {
         *               "startTime": "12:01:00",
         *               "endTime": "18:00:00",
         *               "listPrice": 10
         *             }
         *           ]
         *         },
         *         {
         *           "dayOfWeek": 3,
         *           "deliveryRanges": [
         *             {
         *               "startTime": "08:00:00",
         *               "endTime": "12:00:00",
         *               "listPrice": 10
         *             },
         *             {
         *               "startTime": "12:01:00",
         *               "endTime": "18:00:00",
         *               "listPrice": 10
         *             }
         *           ]
         *         },
         *         {
         *           "dayOfWeek": 4,
         *           "deliveryRanges": [
         *             {
         *               "startTime": "08:00:00",
         *               "endTime": "12:00:00",
         *               "listPrice": 10
         *             },
         *             {
         *               "startTime": "12:01:00",
         *               "endTime": "18:00:00",
         *               "listPrice": 10
         *             }
         *           ]
         *         },
         *         {
         *           "dayOfWeek": 5,
         *           "deliveryRanges": [
         *             {
         *               "startTime": "08:00:00",
         *               "endTime": "12:00:00",
         *               "listPrice": 10
         *             },
         *             {
         *               "startTime": "12:01:00",
         *               "endTime": "18:00:00",
         *               "listPrice": 10
         *             }
         *           ]
         *         },
         *         {
         *           "dayOfWeek": 6,
         *           "deliveryRanges": [
         *             {
         *               "startTime": "08:00:00",
         *               "endTime": "12:00:00",
         *               "listPrice": 10
         *             },
         *             {
         *               "startTime": "12:01:00",
         *               "endTime": "18:00:00",
         *               "listPrice": 10
         *             }
         *           ]
         *         }
         *       ],
         *       "deliveryOnWeekends": false,
         *       "carrierSchedule": []
         *     }
         */
        CreateUpdateCarrierDeliveryWindowsRequest: {
            id: string;
            name: string;
            slaType: string;
            factorCubicWeight: string | null;
            minimunCubicWeight: string | null;
            numberOfItemsPerShipment: string | null;
            modals: string[];
            onlyItemsWithDefinedModal: boolean;
            /**
             * MaxDimension1
             * @example {
             *       "maxSumDimension": null,
             *       "height": null,
             *       "length": null
             *     }
             */
            maxDimension: {
                maxSumDimension: string | null;
                height: string | null;
                length: string | null;
            };
            scheduledDelivery: boolean;
            /** Format: int32 */
            maxRangeDelivery: number;
            /** @description Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example. */
            dayOfWeekForDelivery: {
                /**
                 * @description Day of the week, from `0` (sunday) to `6` (saturday).
                 * @example 2
                 */
                dayOfWeek: number;
                /** @description Reservation windows for scheduled delivery. */
                deliveryRanges: {
                    /**
                     * startTime
                     * @description Start time for day of the week.
                     * @example 11:00:00
                     */
                    startTime: string;
                    /**
                     * @description End time for day of the week.
                     * @example 12:30:00
                     */
                    endTime: string;
                    /**
                     * @description List price for day of the week.
                     * @example 0
                     */
                    listPrice: number;
                    /** @description Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
                    deliveryCapacity?: {
                        /**
                         * @description Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
                         * @example ORDERS_QUANTITY
                         */
                        capacityType: string;
                        /**
                         * @description Maximum number of orders or SKUs that the store is capable of fulfilling.
                         * @example 0
                         */
                        maxValue: number;
                    }[];
                }[];
            }[];
            deliveryOnWeekends: boolean;
            carrierSchedule: string[];
        };
        /**
         * MaxDimension1
         * @example {
         *       "maxSumDimension": null,
         *       "height": null,
         *       "length": null
         *     }
         */
        MaxDimension1: {
            maxSumDimension: string | null;
            height: string | null;
            length: string | null;
        };
        /**
         * DayOfWeekForDelivery
         * @example {
         *       "dayOfWeek": 0,
         *       "deliveryRanges": [
         *         {
         *           "startTime": "08:00:00",
         *           "endTime": "12:00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startTime": "12:01:00",
         *           "endTime": "18:00:00",
         *           "listPrice": 10
         *         }
         *       ]
         *     }
         */
        DayOfWeekForDelivery: {
            /** Format: int32 */
            dayOfWeek: number;
            deliveryRanges: {
                startTime: string;
                endTime: string;
                /** Format: int32 */
                listPrice: number;
            }[];
        };
        /**
         * DeliveryRange
         * @example {
         *       "startTime": "08:00:00",
         *       "endTime": "12:00:00",
         *       "listPrice": 10
         *     }
         */
        DeliveryRange: {
            startTime: string;
            endTime: string;
            /** Format: int32 */
            listPrice: number;
        };
        /**
         * allcarrier
         * @example {
         *       "id": "11cc4b6",
         *       "slaType": "Normal",
         *       "name": "Correios PAC",
         *       "scheduledDelivery": false,
         *       "maxRangeDelivery": 0,
         *       "dayOfWeekForDelivery": null,
         *       "dayOfWeekBlockeds": [],
         *       "freightValue": [],
         *       "factorCubicWeight": 0.0167,
         *       "freightTableProcessStatus": 1,
         *       "freightTableValueError": null,
         *       "modals": [],
         *       "onlyItemsWithDefinedModal": false,
         *       "deliveryOnWeekends": true,
         *       "carrierSchedule": [],
         *       "maxDimension": {
         *         "weight": 0,
         *         "height": 110,
         *         "width": 110,
         *         "length": 110,
         *         "maxSumDimension": 200
         *       },
         *       "exclusiveToDeliveryPoints": false,
         *       "minimunCubicWeight": 10000,
         *       "isPolygon": false,
         *       "numberOfItemsPerShipment": null
         *     }
         */
        allcarrier: {
            id: string;
            slaType: string;
            name: string;
            scheduledDelivery: boolean;
            /** Format: int32 */
            maxRangeDelivery: number;
            /** @description Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example. */
            dayOfWeekForDelivery: {
                /**
                 * @description Day of the week, from `0` (sunday) to `6` (saturday).
                 * @example 2
                 */
                dayOfWeek: number;
                /** @description Reservation windows for scheduled delivery. */
                deliveryRanges: {
                    /**
                     * startTime
                     * @description Start time for day of the week.
                     * @example 11:00:00
                     */
                    startTime: string;
                    /**
                     * @description End time for day of the week.
                     * @example 12:30:00
                     */
                    endTime: string;
                    /**
                     * @description List price for day of the week.
                     * @example 0
                     */
                    listPrice: number;
                    /** @description Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
                    deliveryCapacity?: {
                        /**
                         * @description Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
                         * @example ORDERS_QUANTITY
                         */
                        capacityType: string;
                        /**
                         * @description Maximum number of orders or SKUs that the store is capable of fulfilling.
                         * @example 0
                         */
                        maxValue: number;
                    }[];
                }[];
            }[] | null;
            dayOfWeekBlockeds: string[];
            freightValue: string[];
            factorCubicWeight: number | null;
            /** Format: int32 */
            freightTableProcessStatus: number;
            freightTableValueError: string | null;
            modals: string[];
            onlyItemsWithDefinedModal: boolean;
            deliveryOnWeekends: boolean;
            carrierSchedule: string[];
            /**
             * MaxDimension2
             * @example {
             *       "weight": 0,
             *       "height": 110,
             *       "width": 110,
             *       "length": 110,
             *       "maxSumDimension": 200
             *     }
             */
            maxDimension: {
                weight: number;
                height: number;
                width: number;
                length: number;
                maxSumDimension: number;
            };
            exclusiveToDeliveryPoints: boolean;
            minimunCubicWeight: number;
            isPolygon: boolean;
            numberOfItemsPerShipment: string | null;
        };
        /**
         * DayOfWeekForDelivery1
         * @example {
         *       "dayOfWeek": 0,
         *       "deliveryRanges": [
         *         {
         *           "startTime": "08:00:00",
         *           "endTime": "12:00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startTime": "12:01:00",
         *           "endTime": "18:00:00",
         *           "listPrice": 10
         *         }
         *       ]
         *     }
         */
        DayOfWeekForDelivery1: {
            /** Format: int32 */
            dayOfWeek: number;
            deliveryRanges: {
                startTime: string;
                endTime: string;
                listPrice: number;
            }[];
        };
        /**
         * DeliveryRange1
         * @example {
         *       "startTime": "08:00:00",
         *       "endTime": "12:00:00",
         *       "listPrice": 10
         *     }
         */
        DeliveryRange1: {
            startTime: string;
            endTime: string;
            listPrice: number;
        };
        /**
         * MaxDimension2
         * @example {
         *       "weight": 0,
         *       "height": 110,
         *       "width": 110,
         *       "length": 110,
         *       "maxSumDimension": 200
         *     }
         */
        MaxDimension2: {
            weight: number;
            height: number;
            width: number;
            length: number;
            maxSumDimension: number;
        };
        /**
         * carrierbyid
         * @example {
         *       "id": "11cc4b6",
         *       "slaType": "Normal",
         *       "name": "Correios PAC",
         *       "scheduledDelivery": false,
         *       "maxRangeDelivery": 0,
         *       "dayOfWeekForDelivery": null,
         *       "dayOfWeekBlockeds": [],
         *       "freightValue": [],
         *       "factorCubicWeight": 0.0167,
         *       "freightTableProcessStatus": 1,
         *       "freightTableValueError": null,
         *       "modals": [],
         *       "onlyItemsWithDefinedModal": false,
         *       "deliveryOnWeekends": true,
         *       "carrierSchedule": [],
         *       "maxDimension": {
         *         "weight": 0,
         *         "height": 110,
         *         "width": 110,
         *         "length": 110,
         *         "maxSumDimension": 200
         *       },
         *       "exclusiveToDeliveryPoints": false,
         *       "minimunCubicWeight": 10000,
         *       "isPolygon": false,
         *       "numberOfItemsPerShipment": null
         *     }
         */
        carrierbyid: {
            id: string;
            slaType: string;
            name: string;
            scheduledDelivery: boolean;
            /** Format: int32 */
            maxRangeDelivery: number;
            /** @description Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example. */
            dayOfWeekForDelivery: {
                /**
                 * @description Day of the week, from `0` (sunday) to `6` (saturday).
                 * @example 2
                 */
                dayOfWeek: number;
                /** @description Reservation windows for scheduled delivery. */
                deliveryRanges: {
                    /**
                     * startTime
                     * @description Start time for day of the week.
                     * @example 11:00:00
                     */
                    startTime: string;
                    /**
                     * @description End time for day of the week.
                     * @example 12:30:00
                     */
                    endTime: string;
                    /**
                     * @description List price for day of the week.
                     * @example 0
                     */
                    listPrice: number;
                    /** @description Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
                    deliveryCapacity?: {
                        /**
                         * @description Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
                         * @example ORDERS_QUANTITY
                         */
                        capacityType: string;
                        /**
                         * @description Maximum number of orders or SKUs that the store is capable of fulfilling.
                         * @example 0
                         */
                        maxValue: number;
                    }[];
                }[];
            }[] | null;
            dayOfWeekBlockeds: string[];
            freightValue: string[];
            factorCubicWeight: number;
            /** Format: int32 */
            freightTableProcessStatus: number;
            freightTableValueError: string | null;
            modals: string[];
            onlyItemsWithDefinedModal: boolean;
            deliveryOnWeekends: boolean;
            carrierSchedule: string[];
            /**
             * MaxDimension2
             * @example {
             *       "weight": 0,
             *       "height": 110,
             *       "width": 110,
             *       "length": 110,
             *       "maxSumDimension": 200
             *     }
             */
            maxDimension: {
                weight: number;
                height: number;
                width: number;
                length: number;
                maxSumDimension: number;
            };
            exclusiveToDeliveryPoints: boolean;
            minimunCubicWeight: number;
            isPolygon: boolean;
            numberOfItemsPerShipment: string | null;
        };
        /**
         * Create/UpdateFreightValuesRequest
         * @example {
         *       "absoluteMoneyCost": "1.00",
         *       "country": "BRA",
         *       "maxVolume": 1000000000,
         *       "operationType": 1,
         *       "pricePercent": 0,
         *       "pricePercentByWeight": 0,
         *       "timeCost": "2.00:00:00",
         *       "weightEnd": 1000,
         *       "weightStart": 1,
         *       "zipCodeEnd": "99999999",
         *       "zipCodeStart": "0",
         *       "polygon": ""
         *     }
         */
        CreateUpdateFreightValuesRequest: {
            absoluteMoneyCost: string;
            country: string;
            /** Format: int32 */
            maxVolume: number;
            /** Format: int32 */
            operationType: number;
            /** Format: int32 */
            pricePercent: number;
            /** Format: int32 */
            pricePercentByWeight: number;
            timeCost: string;
            /** Format: int32 */
            weightEnd: number;
            /** Format: int32 */
            weightStart: number;
            zipCodeEnd: string;
            zipCodeStart: string;
            polygon: string;
        };
        /** @example {
         *       "zipCodeStart": "0",
         *       "zipCodeEnd": "99999999",
         *       "weightStart": 1,
         *       "weightEnd": 1000,
         *       "absoluteMoneyCost": 1,
         *       "pricePercent": 0,
         *       "pricePercentByWeight": 0,
         *       "maxVolume": 1000000000,
         *       "timeCost": "2.00:00:00",
         *       "country": "BRA",
         *       "operationType": 0,
         *       "restrictedFreights": [],
         *       "polygon": "",
         *       "minimumValueInsurance": 0
         *     } */
        ListFreightValues: {
            zipCodeStart: string;
            zipCodeEnd: string;
            weightStart: number;
            weightEnd: number;
            absoluteMoneyCost: number;
            pricePercent: number;
            pricePercentByWeight: number;
            maxVolume: number;
            timeCost: string;
            country: string;
            /** Format: int32 */
            operationType: number;
            restrictedFreights: string[];
            polygon: string;
            minimumValueInsurance: number;
        };
        /**
         * Create/UpdateDockRequest
         * @example {
         *       "id": "catete",
         *       "name": "Loja Catete",
         *       "priority": 0,
         *       "dockTimeFake": "00:00:00",
         *       "timeFakeOverhead": "00:00:00",
         *       "salesChannels": [
         *         "1"
         *       ],
         *       "salesChannel": null,
         *       "freightTableIds": [],
         *       "wmsEndPoint": "",
         *       "pickupStoreInfo": {
         *         "isPickupStore": false,
         *         "storeId": null,
         *         "friendlyName": null,
         *         "address": {
         *           "postalCode": "22220070",
         *           "country": {
         *             "acronym": "BRA",
         *             "name": "Brazil"
         *           },
         *           "city": "Rio de Janeiro",
         *           "state": "RJ",
         *           "neighborhood": "Catete",
         *           "street": "Artur Bernardes Street",
         *           "number": "100",
         *           "complement": "",
         *           "coordinates": null
         *         },
         *         "additionalInfo": null,
         *         "dockId": null
         *       },
         *       "address": {
         *         "postalCode": "22220070",
         *         "country": {
         *           "acronym": "BRA",
         *           "name": "Brazil"
         *         },
         *         "city": "Rio de Janeiro",
         *         "state": "RJ",
         *         "neighborhood": "Catete",
         *         "street": "Artur Bernardes Street",
         *         "number": "100",
         *         "complement": "",
         *         "coordinates": [
         *           [
         *             -43.18228090000002,
         *             -22.9460398
         *           ]
         *         ]
         *       }
         *     }
         */
        CreateUpdateDockRequest: {
            id: string;
            name: string;
            /** Format: int32 */
            priority: number;
            dockTimeFake: string;
            timeFakeOverhead: string;
            salesChannels: string[];
            salesChannel: string | null;
            freightTableIds: string[];
            wmsEndPoint: string;
            /**
             * PickupStoreInfo
             * @example {
             *       "isPickupStore": false,
             *       "storeId": null,
             *       "friendlyName": null,
             *       "address": {
             *         "postalCode": "22220070",
             *         "country": {
             *           "acronym": "BRA",
             *           "name": "Brazil"
             *         },
             *         "city": "Rio de Janeiro",
             *         "state": "RJ",
             *         "neighborhood": "Catete",
             *         "street": "Artur Bernardes Street",
             *         "number": "100",
             *         "complement": "",
             *         "coordinates": null
             *       },
             *       "additionalInfo": null,
             *       "dockId": null
             *     }
             */
            pickupStoreInfo: {
                isPickupStore: boolean;
                storeId: string | null;
                friendlyName: string | null;
                /**
                 * Address
                 * @example {
                 *       "postalCode": "22220070",
                 *       "country": {
                 *         "acronym": "BRA",
                 *         "name": "Brazil"
                 *       },
                 *       "city": "Rio de Janeiro",
                 *       "state": "RJ",
                 *       "neighborhood": "Catete",
                 *       "street": "Artur Bernardes Street",
                 *       "number": "100",
                 *       "complement": "",
                 *       "coordinates": null
                 *     }
                 */
                address: {
                    postalCode: string;
                    /**
                     * Country
                     * @example {
                     *       "acronym": "BRA",
                     *       "name": "Brazil"
                     *     }
                     */
                    country: {
                        acronym: string;
                        name: string;
                    };
                    city: string;
                    state: string;
                    neighborhood: string;
                    street: string;
                    number: string;
                    complement: string;
                    coordinates: string | null;
                };
                additionalInfo: string | null;
                dockId: string | null;
            };
            /**
             * Address1
             * @example {
             *       "postalCode": "22220070",
             *       "country": {
             *         "acronym": "BRA",
             *         "name": "Brazil"
             *       },
             *       "city": "Rio de Janeiro",
             *       "state": "RJ",
             *       "neighborhood": "Catete",
             *       "street": "Artur Bernardes Street",
             *       "number": "100",
             *       "complement": "",
             *       "coordinates": [
             *         [
             *           -43.18228090000002,
             *           -22.9460398
             *         ]
             *       ]
             *     }
             */
            address: {
                postalCode: string;
                /**
                 * Country
                 * @example {
                 *       "acronym": "BRA",
                 *       "name": "Brazil"
                 *     }
                 */
                country: {
                    acronym: string;
                    name: string;
                };
                city: string;
                state: string;
                neighborhood: string;
                street: string;
                number: string;
                complement: string;
                coordinates: number[][];
            };
        };
        /**
         * PickupStoreInfo
         * @example {
         *       "isPickupStore": false,
         *       "storeId": null,
         *       "friendlyName": null,
         *       "address": {
         *         "postalCode": "22220070",
         *         "country": {
         *           "acronym": "BRA",
         *           "name": "Brazil"
         *         },
         *         "city": "Rio de Janeiro",
         *         "state": "RJ",
         *         "neighborhood": "Catete",
         *         "street": "Artur Bernardes Street",
         *         "number": "100",
         *         "complement": "",
         *         "coordinates": null
         *       },
         *       "additionalInfo": null,
         *       "dockId": null
         *     }
         */
        PickupStoreInfo: {
            isPickupStore: boolean;
            storeId: string | null;
            friendlyName: string | null;
            /**
             * Address
             * @example {
             *       "postalCode": "22220070",
             *       "country": {
             *         "acronym": "BRA",
             *         "name": "Brazil"
             *       },
             *       "city": "Rio de Janeiro",
             *       "state": "RJ",
             *       "neighborhood": "Catete",
             *       "street": "Artur Bernardes Street",
             *       "number": "100",
             *       "complement": "",
             *       "coordinates": null
             *     }
             */
            address: {
                postalCode: string;
                /**
                 * Country
                 * @example {
                 *       "acronym": "BRA",
                 *       "name": "Brazil"
                 *     }
                 */
                country: {
                    acronym: string;
                    name: string;
                };
                city: string;
                state: string;
                neighborhood: string;
                street: string;
                number: string;
                complement: string;
                coordinates: string | null;
            };
            additionalInfo: string | null;
            dockId: string | null;
        };
        /**
         * Address
         * @example {
         *       "postalCode": "22220070",
         *       "country": {
         *         "acronym": "BRA",
         *         "name": "Brazil"
         *       },
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "neighborhood": "Catete",
         *       "street": "Artur Bernardes Street",
         *       "number": "100",
         *       "complement": "",
         *       "coordinates": null
         *     }
         */
        Address: {
            postalCode: string;
            /**
             * Country
             * @example {
             *       "acronym": "BRA",
             *       "name": "Brazil"
             *     }
             */
            country: {
                acronym: string;
                name: string;
            };
            city: string;
            state: string;
            neighborhood: string;
            street: string;
            number: string;
            complement: string;
            coordinates: string | null;
        };
        /**
         * Country
         * @example {
         *       "acronym": "BRA",
         *       "name": "Brazil"
         *     }
         */
        Country: {
            acronym: string;
            name: string;
        };
        /**
         * Address1
         * @example {
         *       "postalCode": "22220070",
         *       "country": {
         *         "acronym": "BRA",
         *         "name": "Brazil"
         *       },
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "neighborhood": "Catete",
         *       "street": "Artur Bernardes Street",
         *       "number": "100",
         *       "complement": "",
         *       "coordinates": [
         *         [
         *           -43.18228090000002,
         *           -22.9460398
         *         ]
         *       ]
         *     }
         */
        Address1: {
            postalCode: string;
            /**
             * Country
             * @example {
             *       "acronym": "BRA",
             *       "name": "Brazil"
             *     }
             */
            country: {
                acronym: string;
                name: string;
            };
            city: string;
            state: string;
            neighborhood: string;
            street: string;
            number: string;
            complement: string;
            coordinates: number[][];
        };
        /** @example {
         *       "id": "1a8bce3",
         *       "name": "Centro de Distribui├º├úo Principal",
         *       "priority": 0,
         *       "dockTimeFake": "1.00:00:00",
         *       "timeFakeOverhead": "00:00:00",
         *       "salesChannels": [
         *         "1",
         *         "2"
         *       ],
         *       "salesChannel": null,
         *       "freightTableIds": [
         *         "11cc4b6",
         *         "teste1",
         *         "186a2a6",
         *         "1962962",
         *         "173a63f"
         *       ],
         *       "wmsEndPoint": "",
         *       "pickupStoreInfo": {
         *         "isPickupStore": false,
         *         "storeId": null,
         *         "friendlyName": null,
         *         "address": null,
         *         "additionalInfo": null,
         *         "dockId": null
         *       }
         *     } */
        ListAllDocks: {
            id: string;
            name: string;
            /** Format: int32 */
            priority: number;
            dockTimeFake: string;
            timeFakeOverhead: string;
            salesChannels: string[];
            salesChannel: string | null;
            freightTableIds: string[];
            wmsEndPoint: string;
            /**
             * PickupStoreInfo1
             * @example {
             *       "isPickupStore": false,
             *       "storeId": null,
             *       "friendlyName": null,
             *       "address": null,
             *       "additionalInfo": null,
             *       "dockId": null
             *     }
             */
            pickupStoreInfo: {
                isPickupStore: boolean;
                storeId: string | null;
                friendlyName: string | null;
                address: string | null;
                additionalInfo: string | null;
                dockId: string | null;
            };
        };
        /**
         * PickupStoreInfo1
         * @example {
         *       "isPickupStore": false,
         *       "storeId": null,
         *       "friendlyName": null,
         *       "address": null,
         *       "additionalInfo": null,
         *       "dockId": null
         *     }
         */
        PickupStoreInfo1: {
            isPickupStore: boolean;
            storeId: string | null;
            friendlyName: string | null;
            address: string | null;
            additionalInfo: string | null;
            dockId: string | null;
        };
        /**
         * Create/UpdateWarehouseRequest
         * @example {
         *       "id": "15bfc76",
         *       "name": "Estoque Principal",
         *       "warehouseDocks": [
         *         {
         *           "dockId": "1a8bce3",
         *           "name": "Centro de Distribui├º├úo Principal",
         *           "time": "3.00:00:00",
         *           "cost": "5.00",
         *           "translateDays": "dias",
         *           "costToDisplay": "5,00"
         *         }
         *       ]
         *     }
         */
        CreateUpdateWarehouseRequest: {
            id: string;
            name: string;
            warehouseDocks: {
                dockId: string;
                name: string;
                time: string;
                cost: string;
                translateDays: string;
                costToDisplay: string;
            }[];
        };
        /**
         * WarehouseDock
         * @example {
         *       "dockId": "1a8bce3",
         *       "name": "Centro de Distribui├º├úo Principal",
         *       "time": "3.00:00:00",
         *       "cost": "5.00",
         *       "translateDays": "dias",
         *       "costToDisplay": "5,00"
         *     }
         */
        WarehouseDock: {
            dockId: string;
            name: string;
            time: string;
            cost: string;
            translateDays: string;
            costToDisplay: string;
        };
        /** @example {
         *       "id": "1937054",
         *       "name": "Estoque A",
         *       "warehouseDocks": [
         *         {
         *           "dockId": "1_1_1",
         *           "time": "1.00:00:00",
         *           "cost": 0
         *         }
         *       ]
         *     } */
        ListAllAarehouses: {
            id: string;
            name: string;
            warehouseDocks: {
                dockId: string;
                time: string;
                cost: number;
            }[];
        };
        /**
         * WarehouseDock1
         * @example {
         *       "dockId": "1_1_1",
         *       "time": "1.00:00:00",
         *       "cost": 0
         *     }
         */
        WarehouseDock1: {
            dockId: string;
            time: string;
            cost: number;
        };
        /** @example {
         *       "skuId": "2390059",
         *       "balance": [
         *         {
         *           "warehouseId": "1937054",
         *           "warehouseName": "Estoque A",
         *           "totalQuantity": 101,
         *           "reservedQuantity": 9,
         *           "hasUnlimitedQuantity": false
         *         },
         *         {
         *           "warehouseId": "avl",
         *           "warehouseName": "Estoque InStore",
         *           "totalQuantity": 100,
         *           "reservedQuantity": 0,
         *           "hasUnlimitedQuantity": false
         *         },
         *         {
         *           "warehouseId": "1448dc2",
         *           "warehouseName": "Estoque C",
         *           "totalQuantity": 100,
         *           "reservedQuantity": 0,
         *           "hasUnlimitedQuantity": false
         *         },
         *         {
         *           "warehouseId": "140ac66",
         *           "warehouseName": "Estoque B",
         *           "totalQuantity": 100,
         *           "reservedQuantity": 0,
         *           "hasUnlimitedQuantity": false
         *         },
         *         {
         *           "warehouseId": "pickuppoint",
         *           "warehouseName": "PickupPoint",
         *           "totalQuantity": 100,
         *           "reservedQuantity": 0,
         *           "hasUnlimitedQuantity": false
         *         },
         *         {
         *           "warehouseId": "pickuppoint_2",
         *           "warehouseName": "PickupPoint 2",
         *           "totalQuantity": 200,
         *           "reservedQuantity": 0,
         *           "hasUnlimitedQuantity": false
         *         },
         *         {
         *           "warehouseId": "15bfc76",
         *           "warehouseName": "Estoque Principal",
         *           "totalQuantity": 1011,
         *           "reservedQuantity": 0,
         *           "hasUnlimitedQuantity": false
         *         }
         *       ]
         *     } */
        ListInventoryBySKU: {
            skuId: string;
            balance: {
                warehouseId: string;
                warehouseName: string;
                /** Format: int32 */
                totalQuantity: number;
                /** Format: int32 */
                reservedQuantity: number;
                hasUnlimitedQuantity: boolean;
            }[];
        };
        /**
         * Balance
         * @example {
         *       "warehouseId": "1937054",
         *       "warehouseName": "Estoque A",
         *       "totalQuantity": 101,
         *       "reservedQuantity": 9,
         *       "hasUnlimitedQuantity": false
         *     }
         */
        Balance: {
            warehouseId: string;
            warehouseName: string;
            /** Format: int32 */
            totalQuantity: number;
            /** Format: int32 */
            reservedQuantity: number;
            hasUnlimitedQuantity: boolean;
        };
        /**
         * Success
         * @example {
         *       "skuId": "19",
         *       "warehouseId": "1_1",
         *       "quantity": 2147483647,
         *       "isUnlimitedQuantity": true,
         *       "totalReservedQuantity": 13,
         *       "dispatchedReservationsQuantity": 0,
         *       "availableQuantity": 2147483634
         *     }
         */
        Success: {
            skuId: string;
            warehouseId: string;
            /** Format: int32 */
            quantity: number;
            isUnlimitedQuantity: boolean;
            /** Format: int32 */
            totalReservedQuantity: number;
            /** Format: int32 */
            dispatchedReservationsQuantity: number;
            /** Format: int32 */
            availableQuantity: number;
        };
        /**
         * Errorbytoomanyactivereservations
         * @example {
         *       "error": {
         *         "code": "429",
         *         "message": "Too many active reservation!"
         *       }
         *     }
         */
        Errorbytoomanyactivereservations: {
            /**
             * Error
             * @example {
             *       "code": "429",
             *       "message": "Too many active reservation!"
             *     }
             */
            error: {
                code: string;
                message: string;
            };
        };
        /**
         * Error
         * @example {
         *       "code": "429",
         *       "message": "Too many active reservation!"
         *     }
         */
        Error: {
            code: string;
            message: string;
        };
        /**
         * UpdateInventoryBySkuandWarehouseRequest
         * @example {
         *       "unlimitedQuantity": false,
         *       "dateUtcOnBalanceSystem": "2023-03-15T00:52:16",
         *       "quantity": 101
         *     }
         */
        UpdateInventoryBySkuandWarehouseRequest: {
            unlimitedQuantity: boolean;
            dateUtcOnBalanceSystem: string | null;
            /** Format: int32 */
            quantity: number;
        };
        /**
         * Create/UpdateHolidayRequest
         * @example {
         *       "name": "Natal",
         *       "startDate": "2016-12-25"
         *     }
         */
        CreateUpdateHolidayRequest: {
            name: string;
            startDate: string;
        };
        /**
         * CreateReservationRequest
         * @example {
         *       "salesChannel": "1",
         *       "lockId": null,
         *       "autorizationExpirationTTL": "00:10:00",
         *       "deliveryItemOptions": [
         *         {
         *           "item": {
         *             "id": "2390059",
         *             "groupItemId": null,
         *             "kitItem": [],
         *             "quantity": 1,
         *             "price": 0,
         *             "additionalHandlingTime": "00:00:00",
         *             "dimension": {
         *               "weight": 150,
         *               "height": 1,
         *               "width": 1,
         *               "length": 1
         *             }
         *           },
         *           "slaType": "Expressa",
         *           "slaTypeName": "Expressa",
         *           "listPrice": 10.5,
         *           "promotionalPrice": 10.5,
         *           "transitTime": "2.00:00:00",
         *           "dockTime": "00:00:00",
         *           "timeToDockPlusDockTime": "1.00:00:00",
         *           "aditionalTimeBlockedDays": "00:00:00",
         *           "totalTime": "3.00:00:00",
         *           "deliveryWindows": [],
         *           "wareHouseId": null,
         *           "dockId": "1a8bce3",
         *           "location": {
         *             "zipCode": "22220070",
         *             "country": "BRA",
         *             "inStore": {
         *               "IsCheckedIn": false,
         *               "StoreId": null
         *             }
         *           }
         *         }
         *       ]
         *     }
         */
        CreateReservationRequest: {
            salesChannel: string;
            lockId: string | null;
            autorizationExpirationTTL: string;
            deliveryItemOptions: {
                /**
                 * Item
                 * @example {
                 *       "id": "2390059",
                 *       "groupItemId": null,
                 *       "kitItem": [],
                 *       "quantity": 1,
                 *       "price": 0,
                 *       "additionalHandlingTime": "00:00:00",
                 *       "dimension": {
                 *         "weight": 150,
                 *         "height": 1,
                 *         "width": 1,
                 *         "length": 1
                 *       }
                 *     }
                 */
                item: {
                    id: string;
                    groupItemId: string | null;
                    kitItem: string[];
                    /** Format: int32 */
                    quantity: number;
                    /** Format: int32 */
                    price: number;
                    additionalHandlingTime: string;
                    /**
                     * Dimension
                     * @example {
                     *       "weight": 150,
                     *       "height": 1,
                     *       "width": 1,
                     *       "length": 1
                     *     }
                     */
                    dimension: {
                        /** Format: int32 */
                        weight: number;
                        /** Format: int32 */
                        height: number;
                        /** Format: int32 */
                        width: number;
                        /** Format: int32 */
                        length: number;
                    };
                };
                slaType: string;
                slaTypeName: string;
                listPrice: number;
                promotionalPrice: number;
                transitTime: string;
                dockTime: string;
                timeToDockPlusDockTime: string;
                aditionalTimeBlockedDays: string;
                totalTime: string;
                deliveryWindows: string[];
                wareHouseId: string | null;
                dockId: string;
                /**
                 * Location
                 * @example {
                 *       "zipCode": "22220070",
                 *       "country": "BRA",
                 *       "inStore": {
                 *         "IsCheckedIn": false,
                 *         "StoreId": null
                 *       }
                 *     }
                 */
                location: {
                    zipCode: string;
                    country: string;
                    /**
                     * InStore
                     * @example {
                     *       "IsCheckedIn": false,
                     *       "StoreId": null
                     *     }
                     */
                    inStore: {
                        IsCheckedIn: boolean;
                        StoreId: string | null;
                    };
                };
            }[];
        };
        /**
         * DeliveryItemOption
         * @example {
         *       "item": {
         *         "id": "2390059",
         *         "groupItemId": null,
         *         "kitItem": [],
         *         "quantity": 1,
         *         "price": 0,
         *         "additionalHandlingTime": "00:00:00",
         *         "dimension": {
         *           "weight": 150,
         *           "height": 1,
         *           "width": 1,
         *           "length": 1
         *         }
         *       },
         *       "slaType": "Expressa",
         *       "slaTypeName": "Expressa",
         *       "listPrice": 10.5,
         *       "promotionalPrice": 10.5,
         *       "transitTime": "2.00:00:00",
         *       "dockTime": "00:00:00",
         *       "timeToDockPlusDockTime": "1.00:00:00",
         *       "aditionalTimeBlockedDays": "00:00:00",
         *       "totalTime": "3.00:00:00",
         *       "deliveryWindows": [],
         *       "wareHouseId": null,
         *       "dockId": "1a8bce3",
         *       "location": {
         *         "zipCode": "22220070",
         *         "country": "BRA",
         *         "inStore": {
         *           "IsCheckedIn": false,
         *           "StoreId": null
         *         }
         *       }
         *     }
         */
        DeliveryItemOption: {
            /**
             * Item
             * @example {
             *       "id": "2390059",
             *       "groupItemId": null,
             *       "kitItem": [],
             *       "quantity": 1,
             *       "price": 0,
             *       "additionalHandlingTime": "00:00:00",
             *       "dimension": {
             *         "weight": 150,
             *         "height": 1,
             *         "width": 1,
             *         "length": 1
             *       }
             *     }
             */
            item: {
                id: string;
                groupItemId: string | null;
                kitItem: string[];
                /** Format: int32 */
                quantity: number;
                /** Format: int32 */
                price: number;
                additionalHandlingTime: string;
                /**
                 * Dimension
                 * @example {
                 *       "weight": 150,
                 *       "height": 1,
                 *       "width": 1,
                 *       "length": 1
                 *     }
                 */
                dimension: {
                    /** Format: int32 */
                    weight: number;
                    /** Format: int32 */
                    height: number;
                    /** Format: int32 */
                    width: number;
                    /** Format: int32 */
                    length: number;
                };
            };
            slaType: string;
            slaTypeName: string;
            listPrice: number;
            promotionalPrice: number;
            transitTime: string;
            dockTime: string;
            timeToDockPlusDockTime: string;
            aditionalTimeBlockedDays: string;
            totalTime: string;
            deliveryWindows: string[];
            wareHouseId: string | null;
            dockId: string;
            /**
             * Location
             * @example {
             *       "zipCode": "22220070",
             *       "country": "BRA",
             *       "inStore": {
             *         "IsCheckedIn": false,
             *         "StoreId": null
             *       }
             *     }
             */
            location: {
                zipCode: string;
                country: string;
                /**
                 * InStore
                 * @example {
                 *       "IsCheckedIn": false,
                 *       "StoreId": null
                 *     }
                 */
                inStore: {
                    IsCheckedIn: boolean;
                    StoreId: string | null;
                };
            };
        };
        /**
         * Item
         * @example {
         *       "id": "2390059",
         *       "groupItemId": null,
         *       "kitItem": [],
         *       "quantity": 1,
         *       "price": 0,
         *       "additionalHandlingTime": "00:00:00",
         *       "dimension": {
         *         "weight": 150,
         *         "height": 1,
         *         "width": 1,
         *         "length": 1
         *       }
         *     }
         */
        Item: {
            id: string;
            groupItemId: string | null;
            kitItem: string[];
            /** Format: int32 */
            quantity: number;
            /** Format: int32 */
            price: number;
            additionalHandlingTime: string;
            /**
             * Dimension
             * @example {
             *       "weight": 150,
             *       "height": 1,
             *       "width": 1,
             *       "length": 1
             *     }
             */
            dimension: {
                /** Format: int32 */
                weight: number;
                /** Format: int32 */
                height: number;
                /** Format: int32 */
                width: number;
                /** Format: int32 */
                length: number;
            };
        };
        /**
         * Dimension
         * @example {
         *       "weight": 150,
         *       "height": 1,
         *       "width": 1,
         *       "length": 1
         *     }
         */
        Dimension: {
            /** Format: int32 */
            weight: number;
            /** Format: int32 */
            height: number;
            /** Format: int32 */
            width: number;
            /** Format: int32 */
            length: number;
        };
        /**
         * Location
         * @example {
         *       "zipCode": "22220070",
         *       "country": "BRA",
         *       "inStore": {
         *         "IsCheckedIn": false,
         *         "StoreId": null
         *       }
         *     }
         */
        Location: {
            zipCode: string;
            country: string;
            /**
             * InStore
             * @example {
             *       "IsCheckedIn": false,
             *       "StoreId": null
             *     }
             */
            inStore: {
                IsCheckedIn: boolean;
                StoreId: string | null;
            };
        };
        /**
         * InStore
         * @example {
         *       "IsCheckedIn": false,
         *       "StoreId": null
         *     }
         */
        InStore: {
            IsCheckedIn: boolean;
            StoreId: string | null;
        };
        /** @example {
         *       "LastUpdateDateUtc": "2016-04-15T19:59:20.0397988+00:00",
         *       "SalesChannel": "2",
         *       "LockId": "3bfe679d-c0a8-475a-b315-706f84a9deb4",
         *       "ReservationDateUtc": "2016-04-15T19:59:20.0397988+00:00",
         *       "MaximumConfirmationDateUtc": "2016-04-15T20:09:20.0397988+00:00",
         *       "Status": 1,
         *       "SlaRequest": [
         *         {
         *           "item": {
         *             "id": "2390059",
         *             "groupItemId": null,
         *             "quantity": 1,
         *             "price": 0,
         *             "modal": null,
         *             "additionalHandlingTime": "00:00:00",
         *             "dimension": {
         *               "weight": 800,
         *               "height": 10,
         *               "width": 12,
         *               "length": 35,
         *               "maxSumDimension": 0
         *             },
         *             "kitItem": [],
         *             "unlimitedQuantity": false
         *           },
         *           "slaType": "Normal",
         *           "slaTypeName": "Normal",
         *           "freightTableName": "Correios PAC",
         *           "freightTableId": "11cc4b6",
         *           "listPrice": 10.5,
         *           "promotionalPrice": 10.5,
         *           "transitTime": "2.00:00:00",
         *           "dockTime": "00:00:00",
         *           "timeToDockPlusDockTime": "1.00:00:00",
         *           "totalTime": "3.00:00:00",
         *           "deliveryWindows": null,
         *           "wareHouseId": "1937054",
         *           "dockId": "1_1_1",
         *           "wmsEndPoint": "",
         *           "location": {
         *             "zipCode": "22220070",
         *             "country": "BRA",
         *             "deliveryPointId": null,
         *             "point": null,
         *             "inStore": {
         *               "IsCheckedIn": false,
         *               "StoreId": "180082"
         *             }
         *           },
         *           "pickupStoreInfo": null
         *         }
         *       ],
         *       "PickupPointItemOptions": null,
         *       "CanceledDateUtc": "0001-01-01T00:00:00+00:00",
         *       "AuthorizedDateUtc": "2016-04-15T19:59:20.0397988+00:00",
         *       "ConfirmedDateUtc": "0001-01-01T00:00:00+00:00",
         *       "Errors": [],
         *       "IsSucess": true
         *     } */
        CreateReservation: {
            LastUpdateDateUtc: string;
            SalesChannel: string;
            LockId: string;
            ReservationDateUtc: string;
            MaximumConfirmationDateUtc: string;
            /** Format: int32 */
            Status: number;
            SlaRequest: {
                /**
                 * Item1
                 * @example {
                 *       "id": "2390059",
                 *       "groupItemId": null,
                 *       "quantity": 1,
                 *       "price": 0,
                 *       "modal": null,
                 *       "additionalHandlingTime": "00:00:00",
                 *       "dimension": {
                 *         "weight": 800,
                 *         "height": 10,
                 *         "width": 12,
                 *         "length": 35,
                 *         "maxSumDimension": 0
                 *       },
                 *       "kitItem": [],
                 *       "unlimitedQuantity": false
                 *     }
                 */
                item: {
                    id: string;
                    groupItemId: string | null;
                    /** Format: int32 */
                    quantity: number;
                    price: number;
                    modal: string | null;
                    additionalHandlingTime: string;
                    /**
                     * Dimension1
                     * @example {
                     *       "weight": 800,
                     *       "height": 10,
                     *       "width": 12,
                     *       "length": 35,
                     *       "maxSumDimension": 0
                     *     }
                     */
                    dimension: {
                        weight: number;
                        height: number;
                        width: number;
                        length: number;
                        maxSumDimension: number;
                    };
                    kitItem: string[];
                    unlimitedQuantity: boolean;
                };
                slaType: string;
                slaTypeName: string;
                freightTableName: string;
                freightTableId: string;
                listPrice: number;
                promotionalPrice: number;
                transitTime: string;
                dockTime: string;
                timeToDockPlusDockTime: string;
                totalTime: string;
                deliveryWindows: string | null;
                wareHouseId: string;
                dockId: string;
                wmsEndPoint: string;
                /**
                 * Location1
                 * @example {
                 *       "zipCode": "22220070",
                 *       "country": "BRA",
                 *       "deliveryPointId": null,
                 *       "point": null,
                 *       "inStore": {
                 *         "IsCheckedIn": false,
                 *         "StoreId": "180082"
                 *       }
                 *     }
                 */
                location: {
                    zipCode: string;
                    country: string;
                    deliveryPointId: string | null;
                    point: string | null;
                    /**
                     * InStore1
                     * @example {
                     *       "IsCheckedIn": false,
                     *       "StoreId": "180082"
                     *     }
                     */
                    inStore: {
                        IsCheckedIn: boolean;
                        StoreId: string;
                    };
                };
                pickupStoreInfo: string | null;
            }[];
            PickupPointItemOptions: string | null;
            CanceledDateUtc: string;
            AuthorizedDateUtc: string;
            ConfirmedDateUtc: string;
            Errors: string[];
            IsSucess: boolean;
        };
        /**
         * SlaRequest
         * @example {
         *       "item": {
         *         "id": "2390059",
         *         "groupItemId": null,
         *         "quantity": 1,
         *         "price": 0,
         *         "modal": null,
         *         "additionalHandlingTime": "00:00:00",
         *         "dimension": {
         *           "weight": 800,
         *           "height": 10,
         *           "width": 12,
         *           "length": 35,
         *           "maxSumDimension": 0
         *         },
         *         "kitItem": [],
         *         "unlimitedQuantity": false
         *       },
         *       "slaType": "Normal",
         *       "slaTypeName": "Normal",
         *       "freightTableName": "Correios PAC",
         *       "freightTableId": "11cc4b6",
         *       "listPrice": 10.5,
         *       "promotionalPrice": 10.5,
         *       "transitTime": "2.00:00:00",
         *       "dockTime": "00:00:00",
         *       "timeToDockPlusDockTime": "1.00:00:00",
         *       "totalTime": "3.00:00:00",
         *       "deliveryWindows": null,
         *       "wareHouseId": "1937054",
         *       "dockId": "1_1_1",
         *       "wmsEndPoint": "",
         *       "location": {
         *         "zipCode": "22220070",
         *         "country": "BRA",
         *         "deliveryPointId": null,
         *         "point": null,
         *         "inStore": {
         *           "IsCheckedIn": false,
         *           "StoreId": "180082"
         *         }
         *       },
         *       "pickupStoreInfo": null
         *     }
         */
        SlaRequest: {
            /**
             * Item1
             * @example {
             *       "id": "2390059",
             *       "groupItemId": null,
             *       "quantity": 1,
             *       "price": 0,
             *       "modal": null,
             *       "additionalHandlingTime": "00:00:00",
             *       "dimension": {
             *         "weight": 800,
             *         "height": 10,
             *         "width": 12,
             *         "length": 35,
             *         "maxSumDimension": 0
             *       },
             *       "kitItem": [],
             *       "unlimitedQuantity": false
             *     }
             */
            item: {
                id: string;
                groupItemId: string | null;
                /** Format: int32 */
                quantity: number;
                price: number;
                modal: string | null;
                additionalHandlingTime: string;
                /**
                 * Dimension1
                 * @example {
                 *       "weight": 800,
                 *       "height": 10,
                 *       "width": 12,
                 *       "length": 35,
                 *       "maxSumDimension": 0
                 *     }
                 */
                dimension: {
                    weight: number;
                    height: number;
                    width: number;
                    length: number;
                    maxSumDimension: number;
                };
                kitItem: string[];
                unlimitedQuantity: boolean;
            };
            slaType: string;
            slaTypeName: string;
            freightTableName: string;
            freightTableId: string;
            listPrice: number;
            promotionalPrice: number;
            transitTime: string;
            dockTime: string;
            timeToDockPlusDockTime: string;
            totalTime: string;
            deliveryWindows: string | null;
            wareHouseId: string;
            dockId: string;
            wmsEndPoint: string;
            /**
             * Location1
             * @example {
             *       "zipCode": "22220070",
             *       "country": "BRA",
             *       "deliveryPointId": null,
             *       "point": null,
             *       "inStore": {
             *         "IsCheckedIn": false,
             *         "StoreId": "180082"
             *       }
             *     }
             */
            location: {
                zipCode: string;
                country: string;
                deliveryPointId: string | null;
                point: string | null;
                /**
                 * InStore1
                 * @example {
                 *       "IsCheckedIn": false,
                 *       "StoreId": "180082"
                 *     }
                 */
                inStore: {
                    IsCheckedIn: boolean;
                    StoreId: string;
                };
            };
            pickupStoreInfo: string | null;
        };
        /**
         * Item1
         * @example {
         *       "id": "2390059",
         *       "groupItemId": null,
         *       "quantity": 1,
         *       "price": 0,
         *       "modal": null,
         *       "additionalHandlingTime": "00:00:00",
         *       "dimension": {
         *         "weight": 800,
         *         "height": 10,
         *         "width": 12,
         *         "length": 35,
         *         "maxSumDimension": 0
         *       },
         *       "kitItem": [],
         *       "unlimitedQuantity": false
         *     }
         */
        Item1: {
            id: string;
            groupItemId: string | null;
            /** Format: int32 */
            quantity: number;
            price: number;
            modal: string | null;
            additionalHandlingTime: string;
            /**
             * Dimension1
             * @example {
             *       "weight": 800,
             *       "height": 10,
             *       "width": 12,
             *       "length": 35,
             *       "maxSumDimension": 0
             *     }
             */
            dimension: {
                weight: number;
                height: number;
                width: number;
                length: number;
                maxSumDimension: number;
            };
            kitItem: string[];
            unlimitedQuantity: boolean;
        };
        /**
         * Dimension1
         * @example {
         *       "weight": 800,
         *       "height": 10,
         *       "width": 12,
         *       "length": 35,
         *       "maxSumDimension": 0
         *     }
         */
        Dimension1: {
            weight: number;
            height: number;
            width: number;
            length: number;
            maxSumDimension: number;
        };
        /**
         * Location1
         * @example {
         *       "zipCode": "22220070",
         *       "country": "BRA",
         *       "deliveryPointId": null,
         *       "point": null,
         *       "inStore": {
         *         "IsCheckedIn": false,
         *         "StoreId": "180082"
         *       }
         *     }
         */
        Location1: {
            zipCode: string;
            country: string;
            deliveryPointId: string | null;
            point: string | null;
            /**
             * InStore1
             * @example {
             *       "IsCheckedIn": false,
             *       "StoreId": "180082"
             *     }
             */
            inStore: {
                IsCheckedIn: boolean;
                StoreId: string;
            };
        };
        /**
         * InStore1
         * @example {
         *       "IsCheckedIn": false,
         *       "StoreId": "180082"
         *     }
         */
        InStore1: {
            IsCheckedIn: boolean;
            StoreId: string;
        };
        /**
         * CalculateSLARequest
         * @example {
         *       "items": [
         *         {
         *           "id": "1",
         *           "groupItemId": null,
         *           "kitItem": [
         *             {
         *               "id": "2000042",
         *               "groupItemId": null,
         *               "kitItem": [],
         *               "quantity": 1,
         *               "price": 0,
         *               "additionalHandlingTime": "00:00:00",
         *               "dimension": {
         *                 "weight": 150,
         *                 "height": 5,
         *                 "width": 17,
         *                 "length": 17
         *               }
         *             },
         *             {
         *               "id": "2390059",
         *               "groupItemId": null,
         *               "kitItem": [],
         *               "quantity": 1,
         *               "price": 0,
         *               "additionalHandlingTime": "00:00:00",
         *               "dimension": {
         *                 "weight": 150,
         *                 "height": 5,
         *                 "width": 17,
         *                 "length": 17
         *               }
         *             }
         *           ],
         *           "quantity": 1,
         *           "price": 0,
         *           "additionalHandlingTime": "00:00:00",
         *           "dimension": {
         *             "weight": 150,
         *             "height": 5,
         *             "width": 17,
         *             "length": 17
         *           }
         *         }
         *       ],
         *       "location": {
         *         "zipCode": "22780084",
         *         "country": "BRA",
         *         "point": [
         *           -43.32475950000003,
         *           -22.9999575
         *         ]
         *       },
         *       "salesChannel": "1"
         *     }
         */
        CalculateSLARequest: {
            items: {
                id: string;
                groupItemId: string | null;
                kitItem: {
                    id: string;
                    groupItemId: string | null;
                    kitItem: string[];
                    /** Format: int32 */
                    quantity: number;
                    /** Format: int32 */
                    price: number;
                    additionalHandlingTime: string;
                    /**
                     * Dimension
                     * @example {
                     *       "weight": 150,
                     *       "height": 1,
                     *       "width": 1,
                     *       "length": 1
                     *     }
                     */
                    dimension: {
                        /** Format: int32 */
                        weight: number;
                        /** Format: int32 */
                        height: number;
                        /** Format: int32 */
                        width: number;
                        /** Format: int32 */
                        length: number;
                    };
                }[];
                /** Format: int32 */
                quantity: number;
                /** Format: int32 */
                price: number;
                additionalHandlingTime: string;
                /**
                 * Dimension
                 * @example {
                 *       "weight": 150,
                 *       "height": 1,
                 *       "width": 1,
                 *       "length": 1
                 *     }
                 */
                dimension: {
                    /** Format: int32 */
                    weight: number;
                    /** Format: int32 */
                    height: number;
                    /** Format: int32 */
                    width: number;
                    /** Format: int32 */
                    length: number;
                };
            }[];
            /**
             * Location3
             * @example {
             *       "zipCode": "22780084",
             *       "country": "BRA",
             *       "point": [
             *         -43.32475950000003,
             *         -22.9999575
             *       ]
             *     }
             */
            location: {
                zipCode: string;
                country: string;
                point: number[];
            };
            salesChannel: string;
        };
        /**
         * Item3
         * @example {
         *       "id": "1",
         *       "groupItemId": null,
         *       "kitItem": [
         *         {
         *           "id": "2000042",
         *           "groupItemId": null,
         *           "kitItem": [],
         *           "quantity": 1,
         *           "price": 0,
         *           "additionalHandlingTime": "00:00:00",
         *           "dimension": {
         *             "weight": 150,
         *             "height": 5,
         *             "width": 17,
         *             "length": 17
         *           }
         *         },
         *         {
         *           "id": "2390059",
         *           "groupItemId": null,
         *           "kitItem": [],
         *           "quantity": 1,
         *           "price": 0,
         *           "additionalHandlingTime": "00:00:00",
         *           "dimension": {
         *             "weight": 150,
         *             "height": 5,
         *             "width": 17,
         *             "length": 17
         *           }
         *         }
         *       ],
         *       "quantity": 1,
         *       "price": 0,
         *       "additionalHandlingTime": "00:00:00",
         *       "dimension": {
         *         "weight": 150,
         *         "height": 5,
         *         "width": 17,
         *         "length": 17
         *       }
         *     }
         */
        Item3: {
            id: string;
            groupItemId: string | null;
            kitItem: {
                id: string;
                groupItemId: string | null;
                kitItem: string[];
                /** Format: int32 */
                quantity: number;
                /** Format: int32 */
                price: number;
                additionalHandlingTime: string;
                /**
                 * Dimension
                 * @example {
                 *       "weight": 150,
                 *       "height": 1,
                 *       "width": 1,
                 *       "length": 1
                 *     }
                 */
                dimension: {
                    /** Format: int32 */
                    weight: number;
                    /** Format: int32 */
                    height: number;
                    /** Format: int32 */
                    width: number;
                    /** Format: int32 */
                    length: number;
                };
            }[];
            /** Format: int32 */
            quantity: number;
            /** Format: int32 */
            price: number;
            additionalHandlingTime: string;
            /**
             * Dimension
             * @example {
             *       "weight": 150,
             *       "height": 1,
             *       "width": 1,
             *       "length": 1
             *     }
             */
            dimension: {
                /** Format: int32 */
                weight: number;
                /** Format: int32 */
                height: number;
                /** Format: int32 */
                width: number;
                /** Format: int32 */
                length: number;
            };
        };
        /**
         * KitItem
         * @example {
         *       "id": "2000042",
         *       "groupItemId": null,
         *       "kitItem": [],
         *       "quantity": 1,
         *       "price": 0,
         *       "additionalHandlingTime": "00:00:00",
         *       "dimension": {
         *         "weight": 150,
         *         "height": 5,
         *         "width": 17,
         *         "length": 17
         *       }
         *     }
         */
        KitItem: {
            id: string;
            groupItemId: string | null;
            kitItem: string[];
            /** Format: int32 */
            quantity: number;
            /** Format: int32 */
            price: number;
            additionalHandlingTime: string;
            /**
             * Dimension
             * @example {
             *       "weight": 150,
             *       "height": 1,
             *       "width": 1,
             *       "length": 1
             *     }
             */
            dimension: {
                /** Format: int32 */
                weight: number;
                /** Format: int32 */
                height: number;
                /** Format: int32 */
                width: number;
                /** Format: int32 */
                length: number;
            };
        };
        /**
         * Location3
         * @example {
         *       "zipCode": "22780084",
         *       "country": "BRA",
         *       "point": [
         *         -43.32475950000003,
         *         -22.9999575
         *       ]
         *     }
         */
        Location3: {
            zipCode: string;
            country: string;
            point: number[];
        };
        /** @example {
         *       "itemId": "2389945",
         *       "quantity": 1,
         *       "availabilityQuantity": 500,
         *       "salesChannel": "1",
         *       "slaType": "Entrega Agendada",
         *       "slaTypeName": "Entrega Agendada",
         *       "freightTableName": "Entrega Agendada",
         *       "freightTableId": "teste1",
         *       "listPrice": 5.25,
         *       "transitTime": "2.00:00:00",
         *       "dockTime": "00:00:00",
         *       "timeToDockPlusDockTime": "1.00:00:00",
         *       "aditionalTimeBlockedDays": "00:00:00",
         *       "totalTime": "3.00:00:00",
         *       "deliveryWindows": [
         *         {
         *           "startDateUtc": "2016-04-20T08:00:00+00:00",
         *           "endDateUtc": "2016-04-20T12:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-20T12:01:00+00:00",
         *           "endDateUtc": "2016-04-20T18:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-21T08:00:00+00:00",
         *           "endDateUtc": "2016-04-21T12:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-21T12:01:00+00:00",
         *           "endDateUtc": "2016-04-21T18:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-22T08:00:00+00:00",
         *           "endDateUtc": "2016-04-22T12:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-22T12:01:00+00:00",
         *           "endDateUtc": "2016-04-22T18:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-23T08:00:00+00:00",
         *           "endDateUtc": "2016-04-23T12:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-23T12:01:00+00:00",
         *           "endDateUtc": "2016-04-23T18:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-24T08:00:00+00:00",
         *           "endDateUtc": "2016-04-24T12:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-24T12:01:00+00:00",
         *           "endDateUtc": "2016-04-24T18:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-25T08:00:00+00:00",
         *           "endDateUtc": "2016-04-25T12:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-25T12:01:00+00:00",
         *           "endDateUtc": "2016-04-25T18:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-26T08:00:00+00:00",
         *           "endDateUtc": "2016-04-26T12:00:00+00:00",
         *           "listPrice": 10
         *         },
         *         {
         *           "startDateUtc": "2016-04-26T12:01:00+00:00",
         *           "endDateUtc": "2016-04-26T18:00:00+00:00",
         *           "listPrice": 10
         *         }
         *       ],
         *       "wareHouseId": "1937054",
         *       "dockId": "1_1_1",
         *       "location": {
         *         "zipCode": "22220070",
         *         "country": "BRA",
         *         "deliveryPointId": null,
         *         "point": null,
         *         "inStore": {
         *           "IsCheckedIn": false,
         *           "StoreId": "180082"
         *         }
         *       },
         *       "deliveryOnWeekends": false,
         *       "carrierSchedule": [],
         *       "restrictedFreight": null,
         *       "coordinates": null,
         *       "pickupStoreInfo": null
         *     } */
        ListReservationByWarehouseAndSKU: {
            itemId: string;
            /** Format: int32 */
            quantity: number;
            /** Format: int32 */
            availabilityQuantity: number;
            salesChannel: string;
            slaType: string;
            slaTypeName: string;
            freightTableName: string;
            freightTableId: string;
            listPrice: number;
            transitTime: string;
            dockTime: string;
            timeToDockPlusDockTime: string;
            aditionalTimeBlockedDays: string;
            totalTime: string;
            deliveryWindows: {
                startDateUtc?: string;
                endDateUtc?: string;
                listPrice?: number;
            }[];
            wareHouseId: string;
            dockId: string;
            /**
             * Location1
             * @example {
             *       "zipCode": "22220070",
             *       "country": "BRA",
             *       "deliveryPointId": null,
             *       "point": null,
             *       "inStore": {
             *         "IsCheckedIn": false,
             *         "StoreId": "180082"
             *       }
             *     }
             */
            location: {
                zipCode: string;
                country: string;
                deliveryPointId: string | null;
                point: string | null;
                /**
                 * InStore1
                 * @example {
                 *       "IsCheckedIn": false,
                 *       "StoreId": "180082"
                 *     }
                 */
                inStore: {
                    IsCheckedIn: boolean;
                    StoreId: string;
                };
            };
            deliveryOnWeekends: boolean;
            carrierSchedule: string[];
            restrictedFreight: string | null;
            coordinates: string | null;
            pickupStoreInfo: string | null;
        };
        /**
         * DeliveryWindow
         * @example {
         *       "startDateUtc": "2016-04-20T08:00:00+00:00",
         *       "endDateUtc": "2016-04-20T12:00:00+00:00",
         *       "listPrice": 10
         *     }
         */
        DeliveryWindow: {
            startDateUtc?: string;
            endDateUtc?: string;
            listPrice?: number;
        };
        /**
         * Create/UpdateRequest
         * @example {
         *       "id": "1a227d3",
         *       "name": "Loja Copacabana",
         *       "description": "",
         *       "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
         *       "formatted_address": "undefined",
         *       "address": {
         *         "postalCode": "22070002",
         *         "country": {
         *           "acronym": "BRA",
         *           "name": "Brazil"
         *         },
         *         "city": "Rio de Janeiro",
         *         "state": "RJ",
         *         "neighborhood": "Copacabana",
         *         "street": "Avenida Atl├óntica",
         *         "number": "",
         *         "complement": "",
         *         "reference": null,
         *         "location": {
         *           "latitude": -22.974477767944336,
         *           "longitude": -43.18672561645508
         *         }
         *       },
         *       "isActive": true,
         *       "businessHours": [
         *         {
         *           "dayOfWeek": 1,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 2,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 3,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 4,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 5,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         }
         *       ],
         *       "tagsLabel": [
         *         "zonasul",
         *         "rio de janeiro"
         *       ]
         *     }
         */
        CreateUpdateRequest: {
            id: string;
            name: string;
            description: string;
            instructions: string;
            formatted_address: string;
            /**
             * Address2
             * @example {
             *       "postalCode": "22070002",
             *       "country": {
             *         "acronym": "BRA",
             *         "name": "Brazil"
             *       },
             *       "city": "Rio de Janeiro",
             *       "state": "RJ",
             *       "neighborhood": "Copacabana",
             *       "street": "Avenida Atl├óntica",
             *       "number": "",
             *       "complement": "",
             *       "reference": null,
             *       "location": {
             *         "latitude": -22.974477767944336,
             *         "longitude": -43.18672561645508
             *       }
             *     }
             */
            address: {
                postalCode: string;
                /**
                 * Country
                 * @example {
                 *       "acronym": "BRA",
                 *       "name": "Brazil"
                 *     }
                 */
                country: {
                    acronym: string;
                    name: string;
                };
                city: string;
                state: string;
                neighborhood: string;
                street: string;
                number: string;
                complement: string;
                reference: string | null;
                /**
                 * Location5
                 * @example {
                 *       "latitude": -22.974477767944336,
                 *       "longitude": -43.18672561645508
                 *     }
                 */
                location: {
                    latitude: number;
                    longitude: number;
                };
            };
            isActive: boolean;
            businessHours: {
                /** Format: int32 */
                dayOfWeek: number;
                openingTime: string;
                closingTime: string;
            }[];
            tagsLabel: string[];
        };
        /**
         * Address2
         * @example {
         *       "postalCode": "22070002",
         *       "country": {
         *         "acronym": "BRA",
         *         "name": "Brazil"
         *       },
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "neighborhood": "Copacabana",
         *       "street": "Avenida Atl├óntica",
         *       "number": "",
         *       "complement": "",
         *       "reference": null,
         *       "location": {
         *         "latitude": -22.974477767944336,
         *         "longitude": -43.18672561645508
         *       }
         *     }
         */
        Address2: {
            postalCode: string;
            /**
             * Country
             * @example {
             *       "acronym": "BRA",
             *       "name": "Brazil"
             *     }
             */
            country: {
                acronym: string;
                name: string;
            };
            city: string;
            state: string;
            neighborhood: string;
            street: string;
            number: string;
            complement: string;
            reference: string | null;
            /**
             * Location5
             * @example {
             *       "latitude": -22.974477767944336,
             *       "longitude": -43.18672561645508
             *     }
             */
            location: {
                latitude: number;
                longitude: number;
            };
        };
        /**
         * Location5
         * @example {
         *       "latitude": -22.974477767944336,
         *       "longitude": -43.18672561645508
         *     }
         */
        Location5: {
            latitude: number;
            longitude: number;
        };
        /**
         * BusinessHour
         * @example {
         *       "dayOfWeek": 1,
         *       "openingTime": "08:00:00",
         *       "closingTime": "20:00:00"
         *     }
         */
        BusinessHour: {
            /** Format: int32 */
            dayOfWeek: number;
            openingTime: string;
            closingTime: string;
        };
        /**
         * Create/Update
         * @example {
         *       "id": "rteste",
         *       "name": "Loja Copacabana",
         *       "description": "",
         *       "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
         *       "formatted_address": "undefined",
         *       "address": {
         *         "postalCode": "22070002",
         *         "country": {
         *           "acronym": "BRA",
         *           "name": "Brazil"
         *         },
         *         "city": "Rio de Janeiro",
         *         "state": "RJ",
         *         "neighborhood": "Copacabana",
         *         "street": "Avenida Atl├óntica",
         *         "number": "",
         *         "complement": "",
         *         "reference": null,
         *         "location": {
         *           "latitude": -22.974477767944336,
         *           "longitude": -43.18672561645508
         *         }
         *       },
         *       "isActive": true,
         *       "businessHours": [
         *         {
         *           "dayOfWeek": 1,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 2,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 3,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 4,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         },
         *         {
         *           "dayOfWeek": 5,
         *           "openingTime": "08:00:00",
         *           "closingTime": "20:00:00"
         *         }
         *       ],
         *       "tagsLabel": [
         *         "zonasul",
         *         "rio de janeiro"
         *       ],
         *       "pickupHolidays": []
         *     }
         */
        CreateUpdate: {
            id: string;
            name: string;
            description: string;
            instructions: string;
            formatted_address: string;
            /**
             * Address2
             * @example {
             *       "postalCode": "22070002",
             *       "country": {
             *         "acronym": "BRA",
             *         "name": "Brazil"
             *       },
             *       "city": "Rio de Janeiro",
             *       "state": "RJ",
             *       "neighborhood": "Copacabana",
             *       "street": "Avenida Atl├óntica",
             *       "number": "",
             *       "complement": "",
             *       "reference": null,
             *       "location": {
             *         "latitude": -22.974477767944336,
             *         "longitude": -43.18672561645508
             *       }
             *     }
             */
            address: {
                postalCode: string;
                /**
                 * Country
                 * @example {
                 *       "acronym": "BRA",
                 *       "name": "Brazil"
                 *     }
                 */
                country: {
                    acronym: string;
                    name: string;
                };
                city: string;
                state: string;
                neighborhood: string;
                street: string;
                number: string;
                complement: string;
                reference: string | null;
                /**
                 * Location5
                 * @example {
                 *       "latitude": -22.974477767944336,
                 *       "longitude": -43.18672561645508
                 *     }
                 */
                location: {
                    latitude: number;
                    longitude: number;
                };
            };
            isActive: boolean;
            businessHours: {
                /** Format: int32 */
                dayOfWeek: number;
                openingTime: string;
                closingTime: string;
            }[];
            tagsLabel: string[];
            pickupHolidays: string[];
        };
        /**
         * GetById
         * @example {
         *       "id": "12345",
         *       "name": "Loja Barra da Tijuca",
         *       "description": "Loja Barra da Tijuca",
         *       "instructions": "Loja Barra da Tijuca",
         *       "formatted_address": "undefined",
         *       "address": {
         *         "postalCode": "22220070",
         *         "country": {
         *           "acronym": "BRA",
         *           "name": "Brazil"
         *         },
         *         "city": "Rio de Janeiro",
         *         "state": "RJ",
         *         "neighborhood": "Catete",
         *         "street": "Rua Artur Bernardes",
         *         "number": "",
         *         "complement": "",
         *         "location": {
         *           "latitude": -22.92860984802246,
         *           "longitude": -22.92860984802246
         *         }
         *       },
         *       "isActive": true,
         *       "warehouseId": null,
         *       "businessHours": [
         *         {
         *           "dayOfWeek": 0,
         *           "openingTime": "11:00:00",
         *           "closingTime": "21:00:00"
         *         }
         *       ]
         *     }
         */
        GetById: {
            id: string;
            name: string;
            description: string;
            instructions: string;
            formatted_address: string;
            /**
             * Address4
             * @example {
             *       "postalCode": "22220070",
             *       "country": {
             *         "acronym": "BRA",
             *         "name": "Brazil"
             *       },
             *       "city": "Rio de Janeiro",
             *       "state": "RJ",
             *       "neighborhood": "Catete",
             *       "street": "Rua Artur Bernardes",
             *       "number": "",
             *       "complement": "",
             *       "location": {
             *         "latitude": -22.92860984802246,
             *         "longitude": -22.92860984802246
             *       }
             *     }
             */
            address: {
                postalCode: string;
                /**
                 * Country
                 * @example {
                 *       "acronym": "BRA",
                 *       "name": "Brazil"
                 *     }
                 */
                country: {
                    acronym: string;
                    name: string;
                };
                city: string;
                state: string;
                neighborhood: string;
                street: string;
                number: string;
                complement: string;
                /**
                 * Location5
                 * @example {
                 *       "latitude": -22.974477767944336,
                 *       "longitude": -43.18672561645508
                 *     }
                 */
                location: {
                    latitude: number;
                    longitude: number;
                };
            };
            isActive: boolean;
            warehouseId: string | null;
            businessHours: {
                /** Format: int32 */
                dayOfWeek: number;
                openingTime: string;
                closingTime: string;
            }[];
        };
        /**
         * Address4
         * @example {
         *       "postalCode": "22220070",
         *       "country": {
         *         "acronym": "BRA",
         *         "name": "Brazil"
         *       },
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "neighborhood": "Catete",
         *       "street": "Rua Artur Bernardes",
         *       "number": "",
         *       "complement": "",
         *       "location": {
         *         "latitude": -22.92860984802246,
         *         "longitude": -22.92860984802246
         *       }
         *     }
         */
        Address4: {
            postalCode: string;
            /**
             * Country
             * @example {
             *       "acronym": "BRA",
             *       "name": "Brazil"
             *     }
             */
            country: {
                acronym: string;
                name: string;
            };
            city: string;
            state: string;
            neighborhood: string;
            street: string;
            number: string;
            complement: string;
            /**
             * Location5
             * @example {
             *       "latitude": -22.974477767944336,
             *       "longitude": -43.18672561645508
             *     }
             */
            location: {
                latitude: number;
                longitude: number;
            };
        };
        /** Create/UpdatePolygonRequest */
        CreateUpdatePolygonRequest: {
            name: string;
            /** GeoShape */
            geoShape: {
                coordinates: number[][];
            };
        };
        /** GeoShape */
        GeoShape: {
            coordinates: number[][];
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
    "Create/UpdateFreightValues": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                carrierId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json; charset=utf-8": {
                    /**
                     * @description Fixed shipping cost to be charged in a decimal number.
                     * @example 1.00
                     */
                    absoluteMoneyCost: string;
                    /**
                     * @description Three letter ISO code for the country where the delivery will take place.
                     * @example BRA
                     */
                    country: string;
                    /**
                     * Format: int32
                     * @description Maximum volume that can be transported by the carrier in cm³.
                     * @example 1000000000
                     */
                    maxVolume: number;
                    /**
                     * Format: int32
                     * @description Indicates desired action for the object. Possible values are `1` (Insert), `2` (Update) or `3`(Delete).
                     * @example 1
                     */
                    operationType: number;
                    /**
                     * Format: int32
                     * @description [Price-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total price of the order, in decimal number. You must fill in this field with a percentage value. For example, for an additional charge of 10%, fill in the table with 10.
                     * @example 10
                     */
                    pricePercent: number;
                    /**
                     * Format: int32
                     * @description [Weight-based additional shipping charge](https://help.vtex.com/en/tutorial/additional-shipping-costs--2vqGwMn0LabkOHY6zSHYNV), calculated based on the total weight of the order.
                     * @example 0
                     */
                    pricePercentByWeight: number;
                    /**
                     * @description Delivery time frame informed by the carrier, in the format DD.HH:MM:SS.
                     * @example 2.00:00:00
                     */
                    timeCost: string;
                    /**
                     * Format: int32
                     * @description Maximum weight allowed.
                     * @example 1000
                     */
                    weightEnd: number;
                    /**
                     * Format: int32
                     * @description Minimum weight allowed.
                     * @example 1
                     */
                    weightStart: number;
                    /**
                     * @description End of postal code interval.
                     * @example 1234500
                     */
                    zipCodeEnd: string;
                    /**
                     * @description Start of postal code interval.
                     * @example 1000000
                     */
                    zipCodeStart: string;
                    /**
                     * @description Polygon ID, according to the [geolocation](https://help.vtex.com/en/tutorial/registering-geolocation/) feature.
                     * @example polygon2
                     */
                    polygon: string;
                }[];
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
    FreightValues: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Carrier ID */
                carrierId: string;
                /** @description Postal code. */
                cep: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 919 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 19:49:41 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx1 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Router"?: {
                        /** @example 2.1.155 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Cache-Status-Janus-ApiCache"?: {
                        /** @example MISS */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example f0945154-c722-40a6-8c24-3873f8cd16c7 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        zipCodeStart: string;
                        zipCodeEnd: string;
                        weightStart: number;
                        weightEnd: number;
                        absoluteMoneyCost: number;
                        pricePercent: number;
                        pricePercentByWeight: number;
                        maxVolume: number;
                        timeCost: string;
                        country: string;
                        /** Format: int32 */
                        operationType: number;
                        /** @description Restricted freights. */
                        restrictedFreights: string[];
                        polygon: string;
                        minimumValueInsurance: number;
                    }[];
                };
            };
        };
    };
    RetrieveBlockedDeliveryWindows: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                carrierId: string;
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
    AddBlockedDeliveryWindows: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                carrierId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example "2016-08-09T08:00:00" */
                "application/json; charset=utf-8": string;
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
    RemoveBlockedDeliveryWindows: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                carrierId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example "2016-08-09T08:00:00" */
                "application/json; charset=utf-8": string;
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
    AllDocks: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
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
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 469 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 19:58:37 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    Vary?: {
                        /** @example Accept-Encoding */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx5 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Router"?: {
                        /** @example 2.1.155 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Cache-Status-Janus-ApiCache"?: {
                        /** @example MISS */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example 4dc9fc80-722a-468f-8f7d-aabe2b804b18 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        id: string;
                        name: string;
                        /** Format: int32 */
                        priority: number;
                        dockTimeFake: string;
                        timeFakeOverhead: string;
                        /** @description Which sales channels ([trade policies](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) are associated with the loading docks. */
                        salesChannels: string[];
                        salesChannel: string | null;
                        /** @description Freight table IDs. */
                        freightTableIds: string[];
                        wmsEndPoint: string;
                        /**
                         * PickupStoreInfo1
                         * @example {
                         *       "isPickupStore": false,
                         *       "storeId": null,
                         *       "friendlyName": null,
                         *       "address": null,
                         *       "additionalInfo": null,
                         *       "dockId": null
                         *     }
                         */
                        pickupStoreInfo: {
                            isPickupStore: boolean;
                            storeId: string | null;
                            friendlyName: string | null;
                            address: string | null;
                            additionalInfo: string | null;
                            dockId: string | null;
                        };
                    }[];
                };
            };
        };
    };
    "Create/UpdateDock": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "id": "catete",
                 *       "name": "Loja Catete",
                 *       "priority": 0,
                 *       "dockTimeFake": "00:00:00",
                 *       "timeFakeOverhead": "00:00:00",
                 *       "salesChannels": [
                 *         "1"
                 *       ],
                 *       "salesChannel": null,
                 *       "freightTableIds": [],
                 *       "wmsEndPoint": "",
                 *       "address": {
                 *         "postalCode": "22220070",
                 *         "country": {
                 *           "acronym": "BRA",
                 *           "name": "Brazil"
                 *         },
                 *         "city": "Rio de Janeiro",
                 *         "state": "RJ",
                 *         "neighborhood": "Catete",
                 *         "street": "Artur Bernardes Street",
                 *         "number": "100",
                 *         "complement": "",
                 *         "coordinates": [
                 *           [
                 *             -43.18228090000002,
                 *             -22.9460398
                 *           ]
                 *         ]
                 *       }
                 *     } */
                "application/json; charset=utf-8": {
                    id: string;
                    name: string;
                    /** Format: int32 */
                    priority: number;
                    dockTimeFake: string;
                    timeFakeOverhead: string;
                    /** @description Which sales channels ([trade policies](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) will be associated with the loading dock. */
                    salesChannels: string[];
                    salesChannel: string | null;
                    /** @description Freight table IDs. */
                    freightTableIds: string[];
                    wmsEndPoint: string;
                    /**
                     * Address1
                     * @example {
                     *       "postalCode": "22220070",
                     *       "country": {
                     *         "acronym": "BRA",
                     *         "name": "Brazil"
                     *       },
                     *       "city": "Rio de Janeiro",
                     *       "state": "RJ",
                     *       "neighborhood": "Catete",
                     *       "street": "Artur Bernardes Street",
                     *       "number": "100",
                     *       "complement": "",
                     *       "coordinates": [
                     *         [
                     *           -43.18228090000002,
                     *           -22.9460398
                     *         ]
                     *       ]
                     *     }
                     */
                    address: {
                        postalCode: string;
                        /**
                         * Country
                         * @example {
                         *       "acronym": "BRA",
                         *       "name": "Brazil"
                         *     }
                         */
                        country: {
                            acronym: string;
                            name: string;
                        };
                        city: string;
                        state: string;
                        neighborhood: string;
                        street: string;
                        number: string;
                        complement: string;
                        coordinates: number[][];
                    };
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
        };
    };
    DockById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                dockId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 391 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 19:58:51 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx2 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Router"?: {
                        /** @example 2.1.155 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Cache-Status-Janus-ApiCache"?: {
                        /** @example MISS */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example 7df9de37-d013-4823-bbd7-5726aa8d7f7a */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        id: string;
                        name: string;
                        /** Format: int32 */
                        priority: number;
                        dockTimeFake: string;
                        timeFakeOverhead: string;
                        /** @description Which sales channels ([trade policies](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) are associated with the loading dock. */
                        salesChannels: string[];
                        salesChannel: string | null;
                        /** @description Freight table IDs. */
                        freightTableIds: string[];
                        wmsEndPoint: string;
                        /**
                         * PickupStoreInfo1
                         * @example {
                         *       "isPickupStore": false,
                         *       "storeId": null,
                         *       "friendlyName": null,
                         *       "address": null,
                         *       "additionalInfo": null,
                         *       "dockId": null
                         *     }
                         */
                        pickupStoreInfo: {
                            isPickupStore: boolean;
                            storeId: string | null;
                            friendlyName: string | null;
                            address: string | null;
                            additionalInfo: string | null;
                            dockId: string | null;
                        };
                    };
                };
            };
        };
    };
    Dock: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                dockId: string;
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
    ActivateDock: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                dockId: string;
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
    DeactivateDock: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                dockId: string;
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
    AllWarehouses: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
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
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 877 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 20:00:55 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx5 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Router"?: {
                        /** @example 2.1.155 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Cache-Status-Janus-ApiCache"?: {
                        /** @example MISS */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example 718fc3ea-7ad8-458c-a20b-e9cc63df3173 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        /**
                         * @description Code that identifies a warehouse.
                         * @example warehouse123
                         */
                        id: string;
                        /**
                         * @description Name of the warehouse.
                         * @example Main Warehouse
                         */
                        name: string;
                        /** @description Information related to the docks available for the warehouses. */
                        warehouseDocks: {
                            /**
                             * @description Code that identifies a dock.
                             * @example dock1
                             */
                            dockId: string;
                            /**
                             * @description This field returns the dock's processing time in days and hours. If none is configured, the request returns `00:00:00`.
                             * @example 00:00:00
                             */
                            time: string;
                            /**
                             * @description Extra charges added to the shipping rate when **Additional shipping costs** are configured.
                             * @example 1
                             */
                            cost: number;
                        }[];
                        /**
                         * @description This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.
                         * @example [
                         *       "NameId1"
                         *     ]
                         */
                        pickupPointIds: unknown[];
                        /**
                         * @description If the warehouse was configured as a priority. When no priority was set, the value returns`0`.
                         * @example 0
                         */
                        priority: number;
                        /**
                         * @description Shows if the warehouse is active (`true`) or inactive (`false`).
                         * @example true
                         */
                        isActive: boolean;
                    }[];
                };
            };
        };
    };
    "Create/UpdateWarehouse": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "id": "15bfc76",
                 *       "name": "Estoque Principal",
                 *       "warehouseDocks": [
                 *         {
                 *           "dockId": "1a8bce3",
                 *           "name": "Centro de Distribui├º├úo Principal",
                 *           "time": "3.00:00:00",
                 *           "cost": "5.00",
                 *           "translateDays": "dias",
                 *           "costToDisplay": "5,00"
                 *         }
                 *       ]
                 *     } */
                "application/json; charset=utf-8": {
                    id: string;
                    name: string;
                    /** @description List of loading docks to associate with the warehouse. */
                    warehouseDocks: {
                        dockId: string;
                        name: string;
                        time: string;
                        cost: string;
                        translateDays: string;
                        costToDisplay: string;
                    }[];
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
        };
    };
    WarehouseById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                warehouseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 119 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 20:01:12 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx5 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Cache-Status-Janus-ApiCache"?: {
                        /** @example MISS */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Processado"?: {
                        /** @example 119 */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-SO"?: {
                        /** @example Linux */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example 22863291-d5a7-43a6-b611-352e80d6fd24 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        id?: string;
                        name?: string;
                        /** @description List of loading docks associated with the warehouse. */
                        warehouseDocks?: {
                            dockId: string;
                            time: string;
                            cost: number;
                        }[];
                        /**
                         * @description This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.
                         * @example [
                         *       "NameId1"
                         *     ]
                         */
                        pickupPointIds?: unknown[];
                        /**
                         * @description If the warehouse was configured as a priority. When no priority was set, the value returns`0`.
                         * @example 0
                         */
                        priority?: number;
                        /**
                         * @description Shows if the warehouse is active (`true`) or inactive (`false`).
                         * @example true
                         */
                        isActive?: boolean;
                    };
                };
            };
        };
    };
    RemoveWarehouse: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                warehouseId: string;
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
    ActivateWarehouse: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                warehouseId: string;
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
    DeactivateWarehouse: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                warehouseId: string;
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
    InventoryBySku: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Every SKU has a unique identifier called SKU ID. */
                skuId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 926 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 20 May 2016 14:11:32 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example Microsoft-IIS/10.0 */
                        "text/plain": string;
                    };
                    "X-AspNet-Version"?: {
                        /** @example 4.0.30319 */
                        "text/plain": string;
                    };
                    "X-Powered-By"?: {
                        /** @example ASP.NET */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example 79a7a62f-03b8-42f8-bcb9-686bb6d67155 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        skuId: string;
                        /** @description Array of objects with warehouses' inventory details. */
                        balance: {
                            warehouseId: string;
                            warehouseName: string;
                            /** Format: int32 */
                            totalQuantity: number;
                            /** Format: int32 */
                            reservedQuantity: number;
                            hasUnlimitedQuantity: boolean;
                        }[];
                    };
                };
            };
        };
    };
    Inventoryperwarehouse: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Every SKU has a unique identifier called SKU ID. */
                skuId: string;
                /** @description Warehouse ID is the unique identifier of the [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb). */
                warehouseId: string;
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
                        /** @description SKU ID. */
                        skuId?: string;
                        /** @description Warehouse ID. */
                        warehouseId?: string;
                        /** @description Dock ID. */
                        dockId?: string;
                        /** @description Total quantity of SKU. */
                        totalQuantity?: number;
                        /** @description Reserved quantity of the SKU. */
                        reservedQuantity?: number;
                        /** @description Amount of items available for sale. Difference between total quantity and reserved quantity. */
                        availableQuantity?: number;
                        /** @description Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
                        isUnlimited?: boolean;
                        /** @description List of sales channels associated. */
                        salesChannel?: string[];
                        /** @description List of delivery channels available. */
                        deliveryChannel?: string[];
                        /** @description Time to refill (deprecated). */
                        timeToRefill?: string;
                        /** @description Date of supply lot in UTC. */
                        dateOfSupplyUtc?: string;
                        /** @description Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
                        keepSellingAfterExpiration?: boolean;
                        /** @description Transfer. */
                        transfer?: string;
                    }[];
                };
            };
        };
    };
    UpdateInventoryBySkuandWarehouse: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description SKU ID is the unique identifier of the SKU you wish to update. */
                skuId: string;
                /** @description Warehouse ID is the unique identifier of the [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb) associated with the SKU you wish to update. */
                warehouseId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "unlimitedQuantity": false,
                 *       "dateUtcOnBalanceSystem": "2023-03-15T00:52:16",
                 *       "quantity": 101,
                 *       "leadTime": "10.00:00:00"
                 *     } */
                "application/json": {
                    /**
                     * Format: int32
                     * @description Quantity of SKU units you wish to update the [inventory](https://help.vtex.com/tutorial/inventory-management--tutorials_139) in the given [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb). Note that:
                     *
                     *     - Sending it as `null` sets the quantity to `0`.
                     *
                     *     - Not sending it sets the quantity to `0`.
                     *
                     *     - Sending `unlimitedQuantity` as `true` overrules the `quantity`.
                     */
                    quantity: number | null;
                    /** @description When set as `true`, you make the SKU from the given warehouse permanently available for sales. No matter how many units are sold, the default quantity of `1000000` units does not decrease, and the store never runs out of stock. When set as `false`, every sold unit will decrease your inventory quantity. Note that:
                     *
                     *     - Sending this field as `null` sets the value to `false`.
                     *
                     *     - Not sending this field sets the value to `false`.
                     *
                     *     - Sending this field as `true` overrules `quantity`. */
                    unlimitedQuantity: boolean | null;
                    /**
                     * @description Defines the corresponding moment to the given warehouse. It is useful due to the liberation of handling order reservations.
                     *
                     *     When set as `null`, the value will be the date/time of the request. Its format is `DateTimeOffset`, as in `yyyy-mm-dd-Thh:mm:ss`. For example: `2023-03-15T00:52:16`.
                     * @example 2023-03-15T00:52:16
                     */
                    dateUtcOnBalanceSystem?: string | null;
                    /**
                     * @description Defines the [lead time](https://help.vtex.com/en/tutorial/lead_time-shipping-time-at-sku-level--16yv5Mkj6bTyWR1hCN2f4B), which is an optional time configuration you can make for a SKU in a warehouse. It can be handling time, fabrication or how long it takes for the item to be available to be shipped to customers.
                     *
                     *     The lead time is a part of the total shipping time and will be considered for shipping date calculation.
                     *
                     *     The format is `dd.hh:mm:ss` (days.hours:minutes:seconds). Note that:
                     *
                     *     - Sending this field as `null` sets the value to `0`.
                     *
                     *     - Not sending this field sets the value to `0`.
                     * @example 10.23:59:15
                     */
                    leadTime?: string | null;
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
        };
    };
    Inventoryperdock: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Every SKU has a unique identifier called SKU ID. */
                skuId: string;
                /** @description Dock ID is the unique identifier of the [loading dock](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj). */
                dockId: string;
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
                        /** @description SKU ID. */
                        skuId?: string;
                        /** @description Warehouse ID. */
                        warehouseId?: string;
                        /** @description Dock ID. */
                        dockId?: string;
                        /** @description Total quantity of SKU. */
                        totalQuantity?: number;
                        /** @description Reserved quantity of the SKU. */
                        reservedQuantity?: number;
                        /** @description Amount of items available for sale. Difference between total quantity and reserved quantity. */
                        availableQuantity?: number;
                        /** @description Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
                        isUnlimited?: boolean;
                        /** @description List of sales channels associated. */
                        salesChannel?: string[];
                        /** @description List of delivery channels available. */
                        deliveryChannel?: string[];
                        /** @description Time to refill (deprecated). */
                        timeToRefill?: string;
                        /** @description Date of supply lot in UTC. */
                        dateOfSupplyUtc?: string;
                        /** @description Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
                        keepSellingAfterExpiration?: boolean;
                        /** @description Transfer. */
                        transfer?: string;
                    }[];
                };
            };
        };
    };
    Inventoryperdockandwarehouse: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                skuId: string;
                dockId: string;
                warehouseId: string;
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
                        /** @description SKU ID. */
                        skuId?: string;
                        /** @description Warehouse ID. */
                        warehouseId?: string;
                        /** @description Dock ID. */
                        dockId?: string;
                        /** @description Total quantity of SKU. */
                        totalQuantity?: number;
                        /** @description Reserved quantity of the SKU. */
                        reservedQuantity?: number;
                        /** @description Amount of items available for sale. Difference between total quantity and reserved quantity. */
                        availableQuantity?: number;
                        /** @description Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
                        isUnlimited?: boolean;
                        /** @description List of sales channels associated. */
                        salesChannel?: string[];
                        /** @description List of delivery channels available. */
                        deliveryChannel?: string[];
                        /** @description Time to refill (deprecated). */
                        timeToRefill?: string;
                        /** @description Date of supply lot in UTC. */
                        dateOfSupplyUtc?: string;
                        /** @description Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
                        keepSellingAfterExpiration?: boolean;
                        /** @description Transfer. */
                        transfer?: string;
                    }[];
                };
            };
        };
    };
    Getinventorywithdispatchedreservations: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description SKU unique identifier called SKU ID. This field is an equivalent to `skuId`. */
                itemId: string;
                /** @description Warehouse ID is the unique identifier of the [warehouse](https://help.vtex.com/en/tutorial/warehouse--6oIxvsVDTtGpO7y6zwhGpb). */
                warehouseId: string;
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
                        /** @description SKU ID. */
                        skuId?: string;
                        /** @description Warehouse ID. */
                        warehouseId?: string;
                        /** @description SKU quantity. */
                        quantity?: number;
                        /** @description Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
                        isUnlimitedQuantity?: boolean;
                        /** @description Total reserved quantity of the SKU. */
                        totalReservedQuantity?: number;
                        /** @description Dispatched reservations quantity. */
                        dispatchedReservationsQuantity?: number;
                        /** @description Available quantity. */
                        availableQuantity?: number;
                    }[];
                };
            };
        };
    };
    GetSupplyLots: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description ID of the SKU. */
                skuId: string;
                /** @description ID of the warehouse where the SKU is located. */
                warehouseId: string;
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
    SaveSupplyLot: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description ID of the SKU whose availability is being scheduled. */
                skuId: string;
                /** @description ID of the warehouse where the SKU will arrive. */
                warehouseId: string;
                /** @description ID of the Supply Lot in which the SKU's scheduling should be considered. */
                supplyLotId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "quantity": 1000,
                 *       "dateOfSupplyUtc": "2020-04-05T00:00:00+00:00",
                 *       "keepSellingAfterExpiration": true
                 *     } */
                "application/json; charset=utf-8": {
                    quantity: number;
                    dateOfSupplyUtc: string;
                    keepSellingAfterExpiration: boolean;
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
        };
    };
    TransferSupplyLot: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description ID of the SKU. */
                skuId: string;
                /** @description ID of the warehouse where the SKU is located. */
                warehouseId: string;
                /** @description ID of the Supply Lot in which the SKU is currently located and from where it will be transfered. */
                supplyLotId: string;
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
    HolidayById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                holidayId: string;
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
    "Create/UpdateHoliday": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                holidayId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "name": "Natal",
                 *       "startDate": "2016-12-25"
                 *     } */
                "application/json; charset=utf-8": {
                    name: string;
                    startDate: string;
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
        };
    };
    Holiday: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                holidayId: string;
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
    AllHolidays: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
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
                content?: never;
            };
        };
    };
    CreateReservation: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "salesChannel": "1",
                 *       "lockId": null,
                 *       "autorizationExpirationTTL": "00:10:00",
                 *       "deliveryItemOptions": [
                 *         {
                 *           "item": {
                 *             "id": "2390059",
                 *             "groupItemId": null,
                 *             "kitItem": [],
                 *             "quantity": 1,
                 *             "price": 0,
                 *             "additionalHandlingTime": "00:00:00",
                 *             "dimension": {
                 *               "weight": 150,
                 *               "height": 1,
                 *               "width": 1,
                 *               "length": 1
                 *             }
                 *           },
                 *           "slaType": "Expressa",
                 *           "slaTypeName": "Expressa",
                 *           "listPrice": 10.5,
                 *           "promotionalPrice": 10.5,
                 *           "transitTime": "2.00:00:00",
                 *           "dockTime": "00:00:00",
                 *           "timeToDockPlusDockTime": "1.00:00:00",
                 *           "aditionalTimeBlockedDays": "00:00:00",
                 *           "totalTime": "3.00:00:00",
                 *           "deliveryWindows": [],
                 *           "wareHouseId": null,
                 *           "dockId": "1a8bce3",
                 *           "location": {
                 *             "zipCode": "22220070",
                 *             "country": "BRA",
                 *             "inStore": {
                 *               "IsCheckedIn": false,
                 *               "StoreId": null
                 *             }
                 *           }
                 *         }
                 *       ]
                 *     } */
                "application/json; charset=utf-8": {
                    salesChannel: string;
                    lockId: string | null;
                    autorizationExpirationTTL: string;
                    /** @description Array of objects with delivery item options information. */
                    deliveryItemOptions: {
                        /**
                         * Item
                         * @example {
                         *       "id": "2390059",
                         *       "groupItemId": null,
                         *       "kitItem": [],
                         *       "quantity": 1,
                         *       "price": 0,
                         *       "additionalHandlingTime": "00:00:00",
                         *       "dimension": {
                         *         "weight": 150,
                         *         "height": 1,
                         *         "width": 1,
                         *         "length": 1
                         *       }
                         *     }
                         */
                        item: {
                            id: string;
                            groupItemId: string | null;
                            /** @description [Kit](https://help.vtex.com/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28) item information. */
                            kitItem: string[];
                            /** Format: int32 */
                            quantity: number;
                            /** Format: int32 */
                            price: number;
                            additionalHandlingTime: string;
                            /**
                             * Dimension
                             * @example {
                             *       "weight": 150,
                             *       "height": 1,
                             *       "width": 1,
                             *       "length": 1
                             *     }
                             */
                            dimension: {
                                /** Format: int32 */
                                weight: number;
                                /** Format: int32 */
                                height: number;
                                /** Format: int32 */
                                width: number;
                                /** Format: int32 */
                                length: number;
                            };
                        };
                        slaType: string;
                        slaTypeName: string;
                        listPrice: number;
                        promotionalPrice: number;
                        transitTime: string;
                        dockTime: string;
                        timeToDockPlusDockTime: string;
                        aditionalTimeBlockedDays: string;
                        totalTime: string;
                        /** @description [Delivery windows](https://help.vtex.com/en/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz). */
                        deliveryWindows: string[];
                        wareHouseId: string | null;
                        dockId: string;
                        /**
                         * Location
                         * @example {
                         *       "zipCode": "22220070",
                         *       "country": "BRA",
                         *       "inStore": {
                         *         "IsCheckedIn": false,
                         *         "StoreId": null
                         *       }
                         *     }
                         */
                        location: {
                            zipCode: string;
                            country: string;
                            /**
                             * InStore
                             * @example {
                             *       "IsCheckedIn": false,
                             *       "StoreId": null
                             *     }
                             */
                            inStore: {
                                IsCheckedIn: boolean;
                                StoreId: string | null;
                            };
                        };
                    }[];
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 620 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 19:59:18 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    Vary?: {
                        /** @example Accept-Encoding */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx5 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Router"?: {
                        /** @example 2.1.155 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example 4e3847c0-596e-4abd-a761-e711bb68bdfa */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        LastUpdateDateUtc: string;
                        SalesChannel: string;
                        LockId: string;
                        ReservationDateUtc: string;
                        MaximumConfirmationDateUtc: string;
                        /** Format: int32 */
                        Status: number;
                        /** @description SLA (Service Level Agreement) information. */
                        SlaRequest: {
                            /**
                             * Item1
                             * @example {
                             *       "id": "2390059",
                             *       "groupItemId": null,
                             *       "quantity": 1,
                             *       "price": 0,
                             *       "modal": null,
                             *       "additionalHandlingTime": "00:00:00",
                             *       "dimension": {
                             *         "weight": 800,
                             *         "height": 10,
                             *         "width": 12,
                             *         "length": 35,
                             *         "maxSumDimension": 0
                             *       },
                             *       "kitItem": [],
                             *       "unlimitedQuantity": false
                             *     }
                             */
                            item: {
                                id: string;
                                groupItemId: string | null;
                                /** Format: int32 */
                                quantity: number;
                                price: number;
                                modal: string | null;
                                additionalHandlingTime: string;
                                /**
                                 * Dimension1
                                 * @example {
                                 *       "weight": 800,
                                 *       "height": 10,
                                 *       "width": 12,
                                 *       "length": 35,
                                 *       "maxSumDimension": 0
                                 *     }
                                 */
                                dimension: {
                                    weight: number;
                                    height: number;
                                    width: number;
                                    length: number;
                                    maxSumDimension: number;
                                };
                                /** @description [Kit](https://help.vtex.com/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28) item information. */
                                kitItem: string[];
                                unlimitedQuantity: boolean;
                            };
                            slaType: string;
                            slaTypeName: string;
                            freightTableName: string;
                            freightTableId: string;
                            listPrice: number;
                            promotionalPrice: number;
                            transitTime: string;
                            dockTime: string;
                            timeToDockPlusDockTime: string;
                            totalTime: string;
                            deliveryWindows: string | null;
                            wareHouseId: string;
                            dockId: string;
                            wmsEndPoint: string;
                            /**
                             * Location1
                             * @example {
                             *       "zipCode": "22220070",
                             *       "country": "BRA",
                             *       "deliveryPointId": null,
                             *       "point": null,
                             *       "inStore": {
                             *         "IsCheckedIn": false,
                             *         "StoreId": "180082"
                             *       }
                             *     }
                             */
                            location: {
                                zipCode: string;
                                country: string;
                                deliveryPointId: string | null;
                                point: string | null;
                                /**
                                 * InStore1
                                 * @example {
                                 *       "IsCheckedIn": false,
                                 *       "StoreId": "180082"
                                 *     }
                                 */
                                inStore: {
                                    IsCheckedIn: boolean;
                                    StoreId: string;
                                };
                            };
                            pickupStoreInfo: string | null;
                        }[];
                        PickupPointItemOptions: string | null;
                        CanceledDateUtc: string;
                        AuthorizedDateUtc: string;
                        ConfirmedDateUtc: string;
                        /** @description Errors details. */
                        Errors: string[];
                        IsSucess: boolean;
                    };
                };
            };
        };
    };
    ReservationById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                reservationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 621 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 20:00:01 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    Vary?: {
                        /** @example Accept-Encoding */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx5 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Router"?: {
                        /** @example 2.1.155 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Cache-Status-Janus-ApiCache"?: {
                        /** @example MISS */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example ffa62df6-4fd0-4cf0-a348-1f3964abc4c4 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        /** @description Date of the last update in UTC. */
                        LastUpdateDateUtc?: string;
                        /** @description Sales channel. */
                        SalesChannel?: string;
                        /** @description Lock ID. */
                        LockId?: string;
                        /** @description Reservation date in UTC. */
                        ReservationDateUtc?: string;
                        /** @description Maximum confirmation date in UTC. */
                        MaximumConfirmationDateUtc?: string;
                        /**
                         * Format: int32
                         * @description Reservation status, being:
                         *
                         *     - `0`: `NotCommitted`
                         *
                         *     - `1`: `Authorized`
                         *
                         *     - `2`: `Confirmed`
                         *
                         *     - `3`: `Canceled_AbortedCommitted`
                         *
                         *     - `4`: `Canceled_AuthorizationExpired`
                         *
                         *     - `5`: `Canceled_Manually`.
                         */
                        Status?: number;
                        /** @description Information on SLA request. */
                        SlaRequest?: {
                            /**
                             * Item1
                             * @example {
                             *       "id": "2390059",
                             *       "groupItemId": null,
                             *       "quantity": 1,
                             *       "price": 0,
                             *       "modal": null,
                             *       "additionalHandlingTime": "00:00:00",
                             *       "dimension": {
                             *         "weight": 800,
                             *         "height": 10,
                             *         "width": 12,
                             *         "length": 35,
                             *         "maxSumDimension": 0
                             *       },
                             *       "kitItem": [],
                             *       "unlimitedQuantity": false
                             *     }
                             */
                            item?: {
                                id: string;
                                groupItemId: string | null;
                                /** Format: int32 */
                                quantity: number;
                                price: number;
                                modal: string | null;
                                additionalHandlingTime: string;
                                /**
                                 * Dimension1
                                 * @example {
                                 *       "weight": 800,
                                 *       "height": 10,
                                 *       "width": 12,
                                 *       "length": 35,
                                 *       "maxSumDimension": 0
                                 *     }
                                 */
                                dimension: {
                                    weight: number;
                                    height: number;
                                    width: number;
                                    length: number;
                                    maxSumDimension: number;
                                };
                                /** @description [Kit](https://help.vtex.com/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28) item information. */
                                kitItem: string[];
                                unlimitedQuantity: boolean;
                            };
                            slaType?: string;
                            slaTypeName?: string;
                            freightTableName?: string;
                            freightTableId?: string;
                            listPrice?: number;
                            promotionalPrice?: number;
                            transitTime?: string;
                            dockTime?: string;
                            timeToDockPlusDockTime?: string;
                            totalTime?: string;
                            deliveryWindows?: string | null;
                            wareHouseId?: string;
                            dockId?: string;
                            wmsEndPoint?: string;
                            /**
                             * Location1
                             * @example {
                             *       "zipCode": "22220070",
                             *       "country": "BRA",
                             *       "deliveryPointId": null,
                             *       "point": null,
                             *       "inStore": {
                             *         "IsCheckedIn": false,
                             *         "StoreId": "180082"
                             *       }
                             *     }
                             */
                            location?: {
                                zipCode: string;
                                country: string;
                                deliveryPointId: string | null;
                                point: string | null;
                                /**
                                 * InStore1
                                 * @example {
                                 *       "IsCheckedIn": false,
                                 *       "StoreId": "180082"
                                 *     }
                                 */
                                inStore: {
                                    IsCheckedIn: boolean;
                                    StoreId: string;
                                };
                            };
                            pickupStoreInfo?: string | null;
                        }[];
                        /** @description Pickup point item options. */
                        PickupPointItemOptions?: string;
                        /** @description Canceled date in UTC. */
                        CanceledDateUtc?: string;
                        /** @description Authorized date in UTC. */
                        AuthorizedDateUtc?: string;
                        /** @description Confirmed date in UTC. */
                        ConfirmedDateUtc?: string;
                        /** @description Information on errors, if there are any. */
                        Errors?: string[];
                        IsSucess?: boolean;
                    };
                };
            };
        };
    };
    ConfirmReservation: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                reservationId: string;
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
    AcknowledgmentReservation: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                reservationId: string;
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
    CancelReservation: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                reservationId: string;
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
    ReservationbyWarehouseandSku: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                warehouseId: string;
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
        };
    };
    CalculateSLA: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example [
                 *       {
                 *         "items": [
                 *           {
                 *             "id": "1",
                 *             "groupItemId": null,
                 *             "kitItem": [
                 *               {
                 *                 "id": "2000042",
                 *                 "groupItemId": null,
                 *                 "kitItem": [],
                 *                 "quantity": 1,
                 *                 "price": 0,
                 *                 "additionalHandlingTime": "00:00:00",
                 *                 "dimension": {
                 *                   "weight": 150,
                 *                   "height": 5,
                 *                   "width": 17,
                 *                   "length": 17
                 *                 }
                 *               },
                 *               {
                 *                 "id": "2390059",
                 *                 "groupItemId": null,
                 *                 "kitItem": [],
                 *                 "quantity": 1,
                 *                 "price": 0,
                 *                 "additionalHandlingTime": "00:00:00",
                 *                 "dimension": {
                 *                   "weight": 150,
                 *                   "height": 5,
                 *                   "width": 17,
                 *                   "length": 17
                 *                 }
                 *               }
                 *             ],
                 *             "quantity": 1,
                 *             "price": 0,
                 *             "additionalHandlingTime": "00:00:00",
                 *             "dimension": {
                 *               "weight": 150,
                 *               "height": 5,
                 *               "width": 17,
                 *               "length": 17
                 *             }
                 *           }
                 *         ],
                 *         "location": {
                 *           "zipCode": "22780084",
                 *           "country": "BRA",
                 *           "point": [
                 *             -43.32475950000003,
                 *             -22.9999575
                 *           ]
                 *         },
                 *         "salesChannel": "1"
                 *       }
                 *     ] */
                "application/json; charset=utf-8": {
                    items: {
                        id: string;
                        groupItemId: string | null;
                        /** @description [Kit](https://help.vtex.com/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28) item information. */
                        kitItem: {
                            id: string;
                            groupItemId: string | null;
                            /** @description [Kit item](https://help.vtex.com/en/tutorial/what-is-a-kit--5ov5s3eHM4AqAAgqWwoc28) details. */
                            kitItem: string[];
                            /** Format: int32 */
                            quantity: number;
                            /** Format: int32 */
                            price: number;
                            additionalHandlingTime: string;
                            /**
                             * Dimension
                             * @example {
                             *       "weight": 150,
                             *       "height": 1,
                             *       "width": 1,
                             *       "length": 1
                             *     }
                             */
                            dimension: {
                                /** Format: int32 */
                                weight: number;
                                /** Format: int32 */
                                height: number;
                                /** Format: int32 */
                                width: number;
                                /** Format: int32 */
                                length: number;
                            };
                        }[];
                        /** Format: int32 */
                        quantity: number;
                        /** Format: int32 */
                        price: number;
                        additionalHandlingTime: string;
                        /**
                         * Dimension
                         * @example {
                         *       "weight": 150,
                         *       "height": 1,
                         *       "width": 1,
                         *       "length": 1
                         *     }
                         */
                        dimension: {
                            /** Format: int32 */
                            weight: number;
                            /** Format: int32 */
                            height: number;
                            /** Format: int32 */
                            width: number;
                            /** Format: int32 */
                            length: number;
                        };
                    }[];
                    /**
                     * Location3
                     * @example {
                     *       "zipCode": "22780084",
                     *       "country": "BRA",
                     *       "point": [
                     *         -43.32475950000003,
                     *         -22.9999575
                     *       ]
                     *     }
                     */
                    location: {
                        zipCode: string;
                        country: string;
                        point: number[];
                    };
                    salesChannel: string;
                }[];
            };
        };
        responses: {
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 632 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Fri, 15 Apr 2016 20:00:26 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    Vary?: {
                        /** @example Accept-Encoding */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx1 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.8 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.26.4 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Router"?: {
                        /** @example 2.1.155 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.2.96-stable+863 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example 0c124229-3bb5-4fc2-9d4e-94b9cbe4281f */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        itemId: string;
                        /** Format: int32 */
                        quantity: number;
                        /** Format: int32 */
                        availabilityQuantity: number;
                        salesChannel: string;
                        slaType: string;
                        slaTypeName: string;
                        freightTableName: string;
                        freightTableId: string;
                        listPrice: number;
                        transitTime: string;
                        dockTime: string;
                        timeToDockPlusDockTime: string;
                        aditionalTimeBlockedDays: string;
                        totalTime: string;
                        deliveryWindows: {
                            startDateUtc?: string;
                            endDateUtc?: string;
                            listPrice?: number;
                        }[];
                        wareHouseId: string;
                        dockId: string;
                        /**
                         * Location1
                         * @example {
                         *       "zipCode": "22220070",
                         *       "country": "BRA",
                         *       "deliveryPointId": null,
                         *       "point": null,
                         *       "inStore": {
                         *         "IsCheckedIn": false,
                         *         "StoreId": "180082"
                         *       }
                         *     }
                         */
                        location: {
                            zipCode: string;
                            country: string;
                            deliveryPointId: string | null;
                            point: string | null;
                            /**
                             * InStore1
                             * @example {
                             *       "IsCheckedIn": false,
                             *       "StoreId": "180082"
                             *     }
                             */
                            inStore: {
                                IsCheckedIn: boolean;
                                StoreId: string;
                            };
                        };
                        deliveryOnWeekends: boolean;
                        carrierSchedule: string[];
                        restrictedFreight: string | null;
                        coordinates: string | null;
                        pickupStoreInfo: string | null;
                    }[][];
                };
            };
        };
    };
    ListAllPickupPpoints: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
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
                    "application/json; charset=utf-8": {
                        /** @description Pickup point ID. */
                        id?: string;
                        /** @description Pickup point name. */
                        name?: string;
                        /** @description Pickup point description. */
                        description?: string;
                        /** @description Instructions. */
                        instructions?: string;
                        /** @description Formated address. */
                        formatted_address?: string;
                        address?: {
                            /** @description Postal code. */
                            postalCode?: string;
                            /** @example {
                             *       "acronym": "BRA",
                             *       "name": "Brazil"
                             *     } */
                            country?: {
                                /** @description Three letter ISO code. */
                                acronym?: string;
                                /** @description Country name. */
                                name?: string;
                            };
                            /** @description City. */
                            city?: string;
                            /** @description State. */
                            state?: string;
                            /** @description Neighborhood. */
                            neighborhood?: string;
                            /** @description Street name. */
                            street?: string;
                            /** @description Pickup point address number. */
                            number?: string;
                            /** @description Address complement. */
                            complement?: string;
                            /**
                             * @description Geolocation properties.
                             * @example {
                             *       "latitude": -22.974477767944336,
                             *       "longitude": -43.18672561645508
                             *     }
                             */
                            location?: {
                                /** @description Latitude. */
                                latitude?: number;
                                /** @description Longitude. */
                                longitude?: number;
                            };
                        };
                        /** @description Indicates whether pickup point is active. */
                        isActive?: boolean;
                        /** @description Distance. */
                        distance?: number;
                        /** @description Seller corresponding to pickup point. */
                        seller?: string;
                        /** @description Business hours information for each day of the week. */
                        businessHours?: {
                            /** @description Day of the week, from `0` (sunday) to `6` (saturday). */
                            dayOfWeek?: number;
                            /** @description Opening time in `hh:mm:ss`. */
                            openingTime?: string;
                            /** @description Closing time in `hh:mm:ss`. */
                            closingTime?: string;
                        }[];
                        /** @description List of tags. */
                        tagsLabel?: string[];
                        /** @description Holidays which apply for pickup point. */
                        pickupHolidays?: string[];
                        /** @description Indicates whether pickup point is third party. */
                        isThirdPartyPickup?: boolean;
                        /** @description Account owner name. */
                        accountOwnerName?: string;
                        /** @description Account owner ID. */
                        accountOwnerId?: string;
                        /** @description Account group ID. */
                        accountGroupId?: string;
                        /** @description Parent account name. */
                        parentAccountName?: string;
                        /** @description Original ID. */
                        originalId?: string;
                    }[];
                };
            };
        };
    };
    GetById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                pickupPointId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 546 */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Wed, 25 Oct 2017 20:24:00 GMT */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example nginx */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    "X-CacheServer"?: {
                        /** @example janus-apicache-nginx-21 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-ApiCache"?: {
                        /** @example v1.3.19 */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.44.1-beta */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example beta */
                        "text/plain": string;
                    };
                    "X-VTEX-Cache-Status-Janus-ApiCache"?: {
                        /** @example MISS */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.3.54-beta.2+1365 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example d9cb24ab-d650-4728-8a79-a981fbbdc9a2 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        id: string;
                        name: string;
                        description: string;
                        instructions: string;
                        formatted_address: string;
                        /**
                         * Address4
                         * @example {
                         *       "postalCode": "22220070",
                         *       "country": {
                         *         "acronym": "BRA",
                         *         "name": "Brazil"
                         *       },
                         *       "city": "Rio de Janeiro",
                         *       "state": "RJ",
                         *       "neighborhood": "Catete",
                         *       "street": "Rua Artur Bernardes",
                         *       "number": "",
                         *       "complement": "",
                         *       "location": {
                         *         "latitude": -22.92860984802246,
                         *         "longitude": -22.92860984802246
                         *       }
                         *     }
                         */
                        address: {
                            postalCode: string;
                            /**
                             * Country
                             * @example {
                             *       "acronym": "BRA",
                             *       "name": "Brazil"
                             *     }
                             */
                            country: {
                                acronym: string;
                                name: string;
                            };
                            city: string;
                            state: string;
                            neighborhood: string;
                            street: string;
                            number: string;
                            complement: string;
                            /**
                             * Location5
                             * @example {
                             *       "latitude": -22.974477767944336,
                             *       "longitude": -43.18672561645508
                             *     }
                             */
                            location: {
                                latitude: number;
                                longitude: number;
                            };
                        };
                        isActive: boolean;
                        warehouseId: string | null;
                        businessHours: {
                            /** Format: int32 */
                            dayOfWeek: number;
                            openingTime: string;
                            closingTime: string;
                        }[];
                    };
                };
            };
        };
    };
    CreateUpdatePickupPoint: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Pickup Point ID. Cannot contain spaces. */
                pickupPointId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "id": "1a227d3",
                 *       "name": "Loja Copacabana",
                 *       "description": "",
                 *       "instructions": "Obrigat├│rio apresentar documento de identifica├º├úo",
                 *       "formatted_address": "undefined",
                 *       "address": {
                 *         "postalCode": "22070002",
                 *         "country": {
                 *           "acronym": "BRA",
                 *           "name": "Brazil"
                 *         },
                 *         "city": "Rio de Janeiro",
                 *         "state": "RJ",
                 *         "neighborhood": "Copacabana",
                 *         "street": "Avenida Atl├óntica",
                 *         "number": "",
                 *         "complement": "",
                 *         "reference": "Grey building",
                 *         "location": {
                 *           "latitude": -22.974477767944336,
                 *           "longitude": -43.18672561645508
                 *         }
                 *       },
                 *       "isActive": true,
                 *       "businessHours": [
                 *         {
                 *           "dayOfWeek": 1,
                 *           "openingTime": "08:00:00",
                 *           "closingTime": "20:00:00"
                 *         },
                 *         {
                 *           "dayOfWeek": 2,
                 *           "openingTime": "08:00:00",
                 *           "closingTime": "20:00:00"
                 *         },
                 *         {
                 *           "dayOfWeek": 3,
                 *           "openingTime": "08:00:00",
                 *           "closingTime": "20:00:00"
                 *         },
                 *         {
                 *           "dayOfWeek": 4,
                 *           "openingTime": "08:00:00",
                 *           "closingTime": "20:00:00"
                 *         },
                 *         {
                 *           "dayOfWeek": 5,
                 *           "openingTime": "08:00:00",
                 *           "closingTime": "20:00:00"
                 *         }
                 *       ],
                 *       "tagsLabel": [
                 *         "zonasul",
                 *         "rio de janeiro"
                 *       ]
                 *     } */
                "application/json; charset=utf-8": {
                    /**
                     * @description Pickup Point ID. Cannot contain spaces.
                     * @example 123456789
                     */
                    id: string;
                    /**
                     * @description Pickup point name.
                     * @example Pickup store.
                     */
                    name: string;
                    /**
                     * @description Pickup point description.
                     * @example Pickup your items in our store.
                     */
                    description: string;
                    /**
                     * @description Pickup point instructions.
                     * @example Bring your ID in order to pickup your order.
                     */
                    instructions: string;
                    /** @description Formated address. */
                    formatted_address: string;
                    /** @example {
                     *       "postalCode": "22070002",
                     *       "country": {
                     *         "acronym": "BRA",
                     *         "name": "Brazil"
                     *       },
                     *       "city": "Rio de Janeiro",
                     *       "state": "RJ",
                     *       "neighborhood": "Copacabana",
                     *       "street": "Avenida Atl├óntica",
                     *       "number": "",
                     *       "complement": "",
                     *       "reference": "Grey building",
                     *       "location": {
                     *         "latitude": -22.974477767944336,
                     *         "longitude": -43.18672561645508
                     *       }
                     *     } */
                    address: {
                        /** @description Postal code. */
                        postalCode: string;
                        country: {
                            /**
                             * @description Three letter ISO code of the address country.
                             * @example BRA
                             */
                            acronym: string;
                            /**
                             * @description Address country name.
                             * @example Brasil
                             */
                            name: string;
                        };
                        /**
                         * @description Address city.
                         * @example Rio de Janeiro
                         */
                        city: string;
                        /**
                         * @description Address state.
                         * @example RJ
                         */
                        state: string;
                        /**
                         * @description Address neighborhood.
                         * @example Botafogo
                         */
                        neighborhood: string;
                        /**
                         * @description Address street name.
                         * @example Praia de botafogo.
                         */
                        street: string;
                        /**
                         * @description Address street number.
                         * @example 200
                         */
                        number: string;
                        /**
                         * @description Address complement.
                         * @example 3rd floor
                         */
                        complement: string;
                        /**
                         * @description Complement that might help locate the shipping address more precisely in case of delivery.
                         * @example Grey building
                         */
                        reference: string;
                        location: {
                            /**
                             * @description latitude
                             * @example -22.974477767944336
                             */
                            latitude: number;
                            /**
                             * @description longitude
                             * @example -43.18672561645508
                             */
                            longitude: number;
                        };
                    };
                    isActive: boolean;
                    businessHours: {
                        /** Format: int32 */
                        dayOfWeek: number;
                        openingTime: string;
                        closingTime: string;
                    }[];
                    tagsLabel: string[];
                    isThirdPartyPickup?: boolean;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    Date?: {
                        /** @example Fri, 14 Dec 2018 17:39:52 GMT */
                        "text/plain": string;
                    };
                    "Content-Length"?: {
                        /** @example 922 */
                        "text/plain": string;
                    };
                    Connection?: {
                        /** @example keep-alive */
                        "text/plain": string;
                    };
                    "Cache-Control"?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    Expires?: {
                        /** @example -1 */
                        "text/plain": string;
                    };
                    Pragma?: {
                        /** @example no-cache */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example logist-v6.4.58+1915 */
                        "text/plain": string;
                    };
                    "x-vtex-operation-id"?: {
                        /** @example c0c59544-e9bb-476c-81c8-ebf4d5f027f2 */
                        "text/plain": string;
                    };
                    Server?: {
                        /** @example Powered by VTEX */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.44.60 */
                        "text/plain": string;
                    };
                    "X-CDNIgnore"?: {
                        /** @example 1 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        id: string;
                        name: string;
                        description: string;
                        instructions: string;
                        formatted_address: string;
                        /**
                         * Address2
                         * @example {
                         *       "postalCode": "22070002",
                         *       "country": {
                         *         "acronym": "BRA",
                         *         "name": "Brazil"
                         *       },
                         *       "city": "Rio de Janeiro",
                         *       "state": "RJ",
                         *       "neighborhood": "Copacabana",
                         *       "street": "Avenida Atl├óntica",
                         *       "number": "",
                         *       "complement": "",
                         *       "reference": null,
                         *       "location": {
                         *         "latitude": -22.974477767944336,
                         *         "longitude": -43.18672561645508
                         *       }
                         *     }
                         */
                        address: {
                            postalCode: string;
                            /**
                             * Country
                             * @example {
                             *       "acronym": "BRA",
                             *       "name": "Brazil"
                             *     }
                             */
                            country: {
                                acronym: string;
                                name: string;
                            };
                            city: string;
                            state: string;
                            neighborhood: string;
                            street: string;
                            number: string;
                            complement: string;
                            reference: string | null;
                            /**
                             * Location5
                             * @example {
                             *       "latitude": -22.974477767944336,
                             *       "longitude": -43.18672561645508
                             *     }
                             */
                            location: {
                                latitude: number;
                                longitude: number;
                            };
                        };
                        isActive: boolean;
                        businessHours: {
                            /** Format: int32 */
                            dayOfWeek: number;
                            openingTime: string;
                            closingTime: string;
                        }[];
                        tagsLabel: string[];
                        pickupHolidays: string[];
                    };
                };
            };
        };
    };
    Delete: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                pickupPointId: string;
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
    Getpaged: {
        parameters: {
            query: {
                page: string;
                pageSize: string;
                keyword: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
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
                content?: never;
            };
        };
    };
    PagedPolygons: {
        parameters: {
            query: {
                page: string;
                perPage: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
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
                content?: never;
            };
        };
    };
    CreateUpdatePolygon: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json; charset=utf-8": {
                    name: string;
                    /** GeoShape */
                    geoShape: {
                        coordinates: number[][];
                    };
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
        };
    };
    PolygonbyId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                polygonName: string;
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
    DeletePolygon: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                polygonName: string;
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
