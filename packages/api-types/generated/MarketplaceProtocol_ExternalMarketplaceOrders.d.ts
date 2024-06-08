export interface paths {
    "/api/fulfillment/pvt/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Place fulfillment order
         * @description Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side.
         *
         *
        > If you plan to integrate external orders with possible [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#) be mindful of the `isCreatedAsync` request body field.
         *
         *     For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
         */
        post: operations["PlaceFulfillmentOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/fulfillment/pvt/orders/{orderId}/fulfill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Authorize dispatch for fulfillment order
         * @description Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side.
         *
         *     For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
         */
        post: operations["AuthorizeDispatchForFulfillmentOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/order-integration/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * New Order Integration
         * @description API to integrate an external channel's order into the VTEX plataform.
         *
         *     This process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectorEndpoint** field in [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie. If the account is not informed in the URL host, it should also be defined as a query string parameter in the route: `an={account}`.
         *
         *     For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
         */
        post: operations["EnqueueNewOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/order-integration/orders/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Order Status
         * @description API request used to update an order status in VTEX.
         *
         *     This process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectiorEndpoint** field or the **connectiorEndpoint** [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie.
         *
         *     For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
         */
        put: operations["UpdateOrderStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForms/simulation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fulfillment simulation - External Marketplace
         * @description This endpoint can be triggered by marketplaces to simulate the fulfillment of an item in the cart.
         *
         *     The fulfillment information is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.
         */
        post: operations["fulfillment-simulation-external-marketplace"];
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
         * EnqueueNewOrderRequest
         * @example {
         *       "marketplaceOrderId": "{{$guid}}",
         *       "marketplaceOrderStatus": "NEW",
         *       "marketplacePaymentValue": 3025,
         *       "connectorName": "SkyHub",
         *       "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
         *       "allowFranchises": false,
         *       "pickupAccountName": "",
         *       "items": [
         *         {
         *           "id": "1",
         *           "price": 975,
         *           "quantity": 1
         *         }
         *       ],
         *       "clientProfileData": {
         *         "email": "email@email.com.br",
         *         "firstName": "John",
         *         "lastName": "Doe",
         *         "phone": "99999999999",
         *         "document": "99999999999",
         *         "corporateDocument": null,
         *         "corporatePhone": null,
         *         "corporateName": null,
         *         "tradeName": null,
         *         "stateInscription": null
         *       },
         *       "shippingData": {
         *         "logisticsInfo": [
         *           {
         *             "price": 2050,
         *             "selectedDeliveryChannel": "delivery",
         *             "selectedSla": "Express",
         *             "lockTTL": "1d",
         *             "shippingEstimate": "2d",
         *             "deliveryIds": {
         *               "warehouseId": "AR1"
         *             }
         *           }
         *         ],
         *         "selectedAddresses": [
         *           {
         *             "addressType": "Residential",
         *             "addressId": "1",
         *             "receiverName": "John Doe",
         *             "postalCode": "81020-235",
         *             "city": "Curitiba",
         *             "state": "PR",
         *             "country": "BRA",
         *             "street": "Rua Eduardo Carlos Pereira",
         *             "number": "4125",
         *             "neighborhood": "Portão",
         *             "complement": "101",
         *             "geoCoordinates": {
         *               "latitude": "-29.5",
         *               "longitude": "-45.8"
         *             }
         *           }
         *         ],
         *         "isFob": true,
         *         "isMarketplaceFulfillment": true
         *       },
         *       "invoiceData": {
         *         "userPaymentInfo": {
         *           "paymentMethods": [
         *             "creditCardPaymentGroup"
         *           ]
         *         }
         *       },
         *       "customData": {
         *         "customApps": [
         *           {
         *             "id": "marketplace-integration",
         *             "major": 1,
         *             "fields": {
         *               "marketplacePaymentMethod": "credit card"
         *             }
         *           }
         *         ]
         *       }
         *     }
         */
        EnqueueNewOrderRequest: {
            /**
             * marketplaceOrderId
             * @description String that indicates the order's ID in the marketplace.
             * @example 7e62fcd3-827b-400d-be8a-f050a79c4976
             */
            marketplaceOrderId: string;
            /**
             * marketplaceOrderStatus
             * @description Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance it’s status in VTEX after integrating it. This field accepts the following values:
             *
             *     - `new`
             *
             *     - `approved`
             * @example new
             */
            marketplaceOrderStatus: string;
            /**
             * marketplacePaymentValue
             * @description Integer that indicates the order’s total value, which the marketplace will pay to the seller. It’s important to note that this value should include interest, if that’s the case. If the value is `USD110.50`, convert it to the format → `11050`.
             * @example 11050
             */
            marketplacePaymentValue: number;
            /**
             * connectorName
             * @description String with the identifier code of the connector responsible for the order.
             *
             *     This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
             *
             *     It is required if the connector is native or does not use the App Template.
             * @example connectorName
             */
            connectorName?: string;
            /**
             * connectorEndpoint
             * @description String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field accepts query strings. You can use the models below:
             *
             *     - `https://{{externalconnector}}.com`
             *
             *     - `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint.
             *
             *     This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
             *
             *     It is required if the connector is native or does not use the App Template.
             * @example https://{{externalconnector.com}}/api/vtex
             */
            connectorEndpoint?: string;
            /**
             * allowFranchises
             * @description Boolean indicating whether franchise accounts linked to the main seller should be considered. That is, if the order delivery pickup/SLA can belong to a [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl), for example. This field is optional and defaults to `false`.
             * @example false
             */
            allowFranchises: boolean;
            /**
             * pickupAccountName
             * @description String that indicates the name of the account responsible for the order’s pickup point. It is only required for pickup-in-point orders from franchise accounts, when franchise accounts `allowFranchises` is `true` and the order in question has a `pickup-in-point` delivery type. It is optional otherwise.
             * @example accountName
             */
            pickupAccountName?: string;
            items: components["schemas"]["Item"][];
            clientProfileData: components["schemas"]["ClientProfileData"];
            shippingData: components["schemas"]["ShippingData"];
            invoiceData: components["schemas"]["InvoiceData"];
            customData?: components["schemas"]["CustomData"];
        };
        /**
         * Item
         * @example {
         *       "id": "1",
         *       "price": 975,
         *       "quantity": 1
         *     }
         */
        Item: {
            /**
             * id
             * @description String with the SKU ID in VTEX’s catalog.
             * @example 1
             */
            id: string;
            /**
             * price
             * @description Integer with the SKU’s unit price. If the value is `USD110.50`, convert it to the format → `11050`.
             * @example 11050
             */
            price: number;
            /**
             * quantity
             * @description Integer with the quantity of the SKU present in the order. The value should be greater than zero.
             * @example 10
             */
            quantity: number;
        };
        /**
         * ClientProfileData
         * @description Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`).
         */
        ClientProfileData: {
            /**
             * email
             * @description String with the customer's email.
             * @example cirilla@cintra.com
             */
            email: string;
            /**
             * firstName
             * @description String with the customer's first name.
             * @example Cirilla
             */
            firstName: string;
            /**
             * lastName
             * @description String with the customer’s surname.
             * @example Cintra
             */
            lastName: string;
            /**
             * phone
             * @description String with the customer’s phone number.
             * @example 99999999999
             */
            phone: string;
            /**
             * The document schema
             * @description String with the customer’s document number.
             * @example 99999999999
             */
            document: string;
            /**
             * corporateDocument
             * @description String with the company’s document number, in case of corporate orders.
             * @example 99999999999
             */
            corporateDocument: string | null;
            /**
             * corporatePhone
             * @description String with the company’s phone number, in case of corporate orders.
             * @example 99999999999
             */
            corporatePhone: string | null;
            /**
             * corporateName
             * @description String with the company’s name, in case of corporate orders.
             * @example The Witcher Inc.
             */
            corporateName: string | null;
            /**
             * tradeName
             * @description String with the company’s fantasy name, in case of corporate orders.
             * @example The Witcher
             */
            tradeName: string | null;
            /**
             * stateInscription
             * @description String with the company’s state registration, in case of corporate orders.
             * @example 99999999999
             */
            stateInscription: string | null;
        };
        /** ShippingData */
        ShippingData: {
            /** @description List that references the SLAs responsible for delivering each item in the order.
             *
             *     This list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).
             *
             *     The order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well. */
            logisticsInfo: components["schemas"]["LogisticsInfo"][];
            selectedAddresses: components["schemas"]["SelectedAddress"][];
            /**
             * isFob
             * @description Boolean that indicates whether the order's delivery is the marketplace responsibility. Optional, defaulting to false.
             * @example false
             */
            isFob: boolean;
            /**
             * isMarketplaceFulfillment
             * @description Boolean that indicates whether the order's inventory in warehouse is the marketplace's responsibility. Optional, defaulting to false.
             * @example false
             */
            isMarketplaceFulfillment: boolean;
        };
        /**
         * LogisticsInfo
         * @description List that references the SLAs responsible for delivering each item in the order.
         *
         *     This list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).
         *
         *     The order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.
         * @example {
         *       "price": 2050,
         *       "selectedDeliveryChannel": "delivery",
         *       "selectedSla": "Express",
         *       "lockTTL": "1d",
         *       "shippingEstimate": "2d",
         *       "deliveryIds": {
         *         "warehouseId": "AR1"
         *       }
         *     }
         */
        LogisticsInfo: {
            /**
             * price
             * @description Integer indicating the shipping price for this SKU. If the value is `USD20.50`, convert it to the format → `2050`.
             * @example 2050
             */
            price: number;
            /**
             * selectedDeliveryChannel
             * @description String with the selected delivery channel. This field supports the following values:
             *
             *     - `delivery`,
             *
             *     - `pickup-in-point`.
             * @example delivery
             */
            selectedDeliveryChannel: string;
            /**
             * selectedSla
             * @description String with the selected delivery SLA.
             * @example T-G1-2-Express
             */
            selectedSla: string;
            /**
             * lockTTL
             * @description String with the inventory reservation period in VTEX's logistics system. To fill in this field insert the number of days, followed by the letter for the chosen unit.
             *
             *     - Days: `d`
             *
             *     - Business days: `bd`.
             *
             *     Example formats: `12d`, `5d`.
             * @example 5d
             */
            lockTTL: string;
            /**
             * shippingEstimate
             * @description String with the order's estimated delivery time. To fill in this field, insert a number,  followed by the letter for the chosen unit.
             *
             *     - Days: `d`
             *
             *     - Business days: `bd`.
             *
             *     - Hours: `h`
             *
             *     - Minutes: `m`.
             *
             *     Example formats: `12d`, `5bd`, `3h`, `50m`.
             * @example 7d
             */
            shippingEstimate: string;
            deliveryIds: components["schemas"]["DeliveryIds"];
        };
        /**
         * DeliveryIds
         * @description List of delivery IDs, used for orders where the marketplace is responsible for the fulfillment of the order, including keeping inventory at a warehouse as well as the delivery.
         * @example {
         *       "warehouseId": "AR1"
         *     }
         */
        DeliveryIds: {
            /**
             * @description String with the ID of the warehouse used for marketplace fulfillment. Required when `isFob` = `true` and `isMarketplaceFulfillment` = `true`.
             * @example AR1
             */
            warehouseId: string;
        };
        /**
         * SelectedAddress
         * @description List with the delivery addresses selected for the order. We currently only support a single delivery address.
         */
        SelectedAddress: {
            /**
             * addressType
             * @description String with the address type. The field supports the values: `residential`, `commercial`, `pickup`.
             * @example commercial
             */
            addressType: string;
            /**
             * addressId
             * @description String with the address identifier. Optional for `delivery` type orders, and required for `pickup-in-point` orders.
             * @example 1
             */
            addressId: string;
            /**
             * receiverName
             * @description String with the name of the person responsible for receiving the order.
             * @example Yennefer of Vengerberg
             */
            receiverName: string;
            /**
             * postalCode
             * @description String with the address' postal code.
             * @example 81020-235
             */
            postalCode: string;
            /**
             * city
             * @description String with the city’s name.
             * @example City
             */
            city?: string;
            /**
             * state
             * @description String with the state's name, filled in with two letter code.
             * @example RJ
             */
            state?: string;
            /**
             * country
             * @description String with the state's name, filled in with three letter code.
             * @example BRA
             */
            country: string;
            /**
             * street
             * @description String with the street's name.
             * @example The Witcher Avenue
             */
            street?: string;
            /**
             * The number
             * @description String with the street's number.
             * @example 1986
             */
            number?: string;
            /**
             * The neighborhood schema
             * @description String with the neighborhood's name.
             * @example Neighborhood's name
             */
            neighborhood?: string;
            /**
             * complement
             * @description String with the address' complement, like building name, or extra number.
             * @example Complement to address
             */
            complement?: string;
            geoCoordinates?: components["schemas"]["GeoCoordinates"];
        };
        /**
         * GeoCoordinates
         * @description Structure with the address geocoordinates. Optional for `delivery` orders, required for `pickup-in-point` orders.
         */
        GeoCoordinates: {
            /**
             * latitude
             * @description Double value with the latitude coordinates of the address. Required only if the geoCoordinates field is defined.
             *
             *     Example format: `-25.4158764`.
             * @example -25.4158764
             */
            latitude: string;
            /**
             * longitude
             * @description Double value with the longitude coordinates of the address. Required only if the geoCoordinates field is defined. Example format: `-49.342759`.
             * @example -49.342759
             */
            longitude: string;
        };
        /**
         * InvoiceData
         * @description Object with the order's billing data.
         * @example {
         *       "userPaymentInfo": {
         *         "paymentMethods": [
         *           "creditCardPaymentGroup"
         *         ]
         *       }
         *     }
         */
        InvoiceData: {
            userPaymentInfo: components["schemas"]["UserPaymentInfo"];
        };
        /**
         * UserPaymentInfo
         * @description Structure with the order’s payment data. Required only if `invoiceData` is defined.
         * @example {
         *       "paymentMethods": [
         *         "creditCardPaymentGroup"
         *       ]
         *     }
         */
        UserPaymentInfo: {
            /**
             * @description List of strings with the payment methods used in the order. Required only if `invoiceData` is defined. The format and some possible values of payment methods accepted in this list can be found in the call [Fetching marketplace information with the Orders API](https://developers.vtex.com/vtex-rest-api/docs/get-marketplace-data-orders-api).
             * @example [
             *       "creditCardPaymentGroup"
             *     ]
             */
            paymentMethods: string[];
        };
        /**
         * CustomData
         * @description Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api).
         * @example {
         *       "customApps": [
         *         {
         *           "id": "marketplace-integration",
         *           "major": 1,
         *           "fields": {
         *             "marketplacePaymentMethod": "credit card"
         *           }
         *         }
         *       ]
         *     }
         */
        CustomData: {
            /** @description Array of objects with information about custom apps. */
            customApps: components["schemas"]["CustomApp"][];
        };
        /**
         * CustomApp
         * @example {
         *       "id": "marketplace-integration",
         *       "major": 1,
         *       "fields": {
         *         "marketplacePaymentMethod": "credit card"
         *       }
         *     }
         */
        CustomApp: {
            /**
             * id
             * @description App's ID.
             * @example ID
             */
            id: string;
            /**
             * major
             * @description Integer with the major version of the app. Optional, defaulting to one.
             * @example 1
             */
            major: number;
            fields: components["schemas"]["Fields"];
        };
        /**
         * Fields
         * @description String dictionary with the names of the fields and their respective values that must be inserted into the order.
         * @example {
         *       "marketplacePaymentMethod": "credit card"
         *     }
         */
        Fields: {
            /**
             * marketplacePaymentMethod
             * @description String with field's key and value.
             * @example credit card
             */
            marketplacePaymentMethod: string;
        };
        /**
         * Deliverybyseller
         * @example {
         *       "marketplaceOrderId": null,
         *       "accountName": "grocery1",
         *       "code": "SOI003",
         *       "flow": "PlaceOrder",
         *       "success": true,
         *       "operationId": null,
         *       "errors": null,
         *       "fields": null,
         *       "message": "Order successfully enqueued"
         *     }
         */
        Deliverybyseller: {
            /**
             * @description String that indicates the order's ID in the marketplace.
             * @example 7e62fcd3-827b-400d-be8a-f050a79c4976
             */
            marketplaceOrderId: string | null;
            /**
             * @description String that indicates which account made the request.
             * @example accountName
             */
            accountName: string;
            /**
             * @description String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
             * @example SOI001
             */
            code: string;
            /**
             * @description String containing the name of the flow responsible for the response. This field can contain the following values:
             *
             *     `PlaceOrder`: when integrating new orders
             *
             *     `ApproveOrder`: when approving existing orders
             *
             *     `Unknown`: when we’re not able to identify the flow
             * @example ApproveOrder
             */
            flow: string;
            /**
             * @description Boolean that indicates if the response is successful or not.
             * @example true
             */
            success: boolean;
            /**
             * @description String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
             * @example 1234567
             */
            operationId: string | null;
            /** @description List with errors related to the response, if there's any. */
            errors: {
                /**
                 * Checkout
                 * @description Includes the following fields pointing out the context of the error:
                 *
                 *     `Fulfillment`
                 *
                 *     `Checkout`
                 *
                 *     `Order Integration`
                 * @example Fulfillment
                 */
                source: string;
                /**
                 * code
                 * @description String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
                 * @example FMT005
                 */
                code: string;
                /**
                 * description
                 * @description String containing the error message/description returned by the source.
                 * @example Message describing the error.
                 */
                description: string;
            }[] | null;
            /**
             * @description Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
             *
             *     `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
             *
             *     `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
             *
             *     - `allowFranchises` field set to `true` when integrating the order
             *
             *     - `SLA` chosen for the order is from a franchise account.
             * @example {
             *       "franchiseOrderId": "38475934875"
             *     }
             */
            fields: {
                /**
                 * fields
                 * @example {
                 *       "mainOrderId": "MKP-123456789",
                 *       "franchiseOrderId": "432874921387409182347"
                 *     }
                 */
                fields?: {
                    /**
                     * mainOrderId
                     * @description String with the order’s ID inside the main seller account in VTEX.
                     * @example MKP-123456789
                     */
                    mainOrderId: string;
                    /**
                     * franchiseOrderId
                     * @description String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
                     *
                     *     - `allowFranchises` field set to `true` when integrating the order
                     *     - SLA chosen for the order is from a franchise account
                     * @example 432874921387409182347
                     */
                    franchiseOrderId?: string;
                };
            } | null;
            /**
             * @description String with a message explaining the code returned in the response.
             * @example The order was integrated into VTEX successfully
             */
            message: string;
        };
        /**
         * Deliverybyfranchiseseller
         * @example {
         *       "marketplaceOrderId": null,
         *       "accountName": "grocery1",
         *       "code": "SOI003",
         *       "flow": "PlaceOrder",
         *       "success": true,
         *       "operationId": null,
         *       "errors": null,
         *       "fields": null,
         *       "message": "Order successfully enqueued"
         *     }
         */
        Deliverybyfranchiseseller: {
            /**
             * @description String that indicates the order's ID in the marketplace.
             * @example 7e62fcd3-827b-400d-be8a-f050a79c4976
             */
            marketplaceOrderId: string | null;
            /**
             * @description String that indicates which account made the request.
             * @example accountName
             */
            accountName: string;
            /**
             * @description String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
             * @example SOI001
             */
            code: string;
            /**
             * @description String containing the name of the flow responsible for the response. This field can contain the following values:
             *
             *     `PlaceOrder`: when integrating new orders
             *
             *     `ApproveOrder`: when approving existing orders
             *
             *     `Unknown`: when we’re not able to identify the flow
             * @example ApproveOrder
             */
            flow: string;
            /**
             * @description Boolean that indicates if the response is successful or not.
             * @example true
             */
            success: boolean;
            /**
             * @description String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
             * @example 1234567
             */
            operationId: string | null;
            /** @description List with errors related to the response, if there's any. */
            errors: {
                /**
                 * Checkout
                 * @description Includes the following fields pointing out the context of the error:
                 *
                 *     `Fulfillment`
                 *
                 *     `Checkout`
                 *
                 *     `Order Integration`
                 * @example Fulfillment
                 */
                source: string;
                /**
                 * code
                 * @description String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
                 * @example FMT005
                 */
                code: string;
                /**
                 * description
                 * @description String containing the error message/description returned by the source.
                 * @example Message describing the error.
                 */
                description: string;
            }[] | null;
            /**
             * @description Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
             *
             *     `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
             *
             *     `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
             *
             *     - `allowFranchises` field set to `true` when integrating the order
             *
             *     - `SLA` chosen for the order is from a franchise account.
             * @example {
             *       "franchiseOrderId": "38475934875"
             *     }
             */
            fields: {
                /**
                 * fields
                 * @example {
                 *       "mainOrderId": "MKP-123456789",
                 *       "franchiseOrderId": "432874921387409182347"
                 *     }
                 */
                fields?: {
                    /**
                     * mainOrderId
                     * @description String with the order’s ID inside the main seller account in VTEX.
                     * @example MKP-123456789
                     */
                    mainOrderId: string;
                    /**
                     * franchiseOrderId
                     * @description String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
                     *
                     *     - `allowFranchises` field set to `true` when integrating the order
                     *     - SLA chosen for the order is from a franchise account
                     * @example 432874921387409182347
                     */
                    franchiseOrderId?: string;
                };
            } | null;
            /**
             * @description String with a message explaining the code returned in the response.
             * @example The order was integrated into VTEX successfully
             */
            message: string | null;
        };
        /**
         * UpdateOrderStatusRequest
         * @example {
         *       "marketplaceOrderId": "{{$guid}}",
         *       "marketplaceOrderStatus": "APPROVED",
         *       "connectorName": "Skyhub",
         *       "connectorEndpoint": "https://connector-endpoint.com/api/vtex"
         *     }
         */
        UpdateOrderStatusRequest: {
            /**
             * @description String that indicates the order's ID in the marketplace.
             * @example 7e62fcd3-827b-400d-be8a-f050a79c4976
             */
            marketplaceOrderId: string;
            /**
             * marketplaceOrderStatus
             * @description Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance its status in VTEX after integrating it. This field accepts the following values:
             *
             *     - `new`
             *
             *     - `approved`.
             * @example new
             */
            marketplaceOrderStatus: string;
            /**
             * connectorName
             * @description String with the identifier code of the connector responsible for the order.
             *
             *     This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
             *
             *     It is required if the connector is native or does not use the App Template.
             * @example connectorName
             */
            connectorName: string;
            /**
             * connectorEndpoint
             * @description String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field does not accept query strings. You can use the models below:
             *
             *     - `https://{{externalconnector}}.com`
             *
             *     - `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint.
             *
             *     This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
             *
             *     It is required if the connector is native or does not use the App Template.
             * @example https://{{externalconnector.com}}/api/vtex
             */
            connectorEndpoint: string;
        };
        /**
         * Approveorder
         * @example {
         *       "marketplaceOrderId": "7e62fcd3-827b-400d-be8a-f050a79c4976",
         *       "accountName": null,
         *       "code": "SOI003",
         *       "flow": "ApproveOrder",
         *       "success": true,
         *       "operationId": null,
         *       "errors": null,
         *       "fields": null,
         *       "message": "Order successfully enqueued"
         *     }
         */
        Approveorder: {
            /**
             * @description String that indicates the order's ID in the marketplace.
             * @example 7e62fcd3-827b-400d-be8a-f050a79c4976
             */
            marketplaceOrderId: string | null;
            /**
             * @description String that indicates which account made the request.
             * @example accountName
             */
            accountName: string | null;
            /**
             * @description String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the Response Codes section of this API Reference.
             * @example SOI001
             */
            code: string;
            /**
             * @description String containing the name of the flow responsible for the response. This field can contain the following values:
             *
             *     `PlaceOrder`: when integrating new orders.
             *
             *     `ApproveOrder`: when approving existing orders.
             *
             *     `Unknown`: when we’re not able to identify the flow.
             * @example ApproveOrder
             */
            flow: string;
            /**
             * @description Boolean that indicates if the response is successful or not.
             * @example true
             */
            success: boolean;
            /**
             * @description String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
             * @example 1234567
             */
            operationId: string | null;
            /** @description List with errors related to the response, if there is any. */
            errors: {
                /**
                 * Checkout
                 * @description Includes the following fields pointing out the context of the error:
                 *
                 *     `Fulfillment`
                 *
                 *     `Checkout`
                 *
                 *     `Order Integration`
                 * @example Fulfillment
                 */
                source: string;
                /**
                 * code
                 * @description String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
                 * @example FMT005
                 */
                code: string;
                /**
                 * description
                 * @description String containing the error message/description returned by the source.
                 * @example Message describing the error.
                 */
                description: string;
            }[] | null;
            /**
             * @description Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
             *
             *     `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
             *
             *     `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
             *
             *     - `allowFranchises` field set to `true` when integrating the order
             *
             *     - `SLA` chosen for the order is from a franchise account.
             * @example {
             *       "franchiseOrderId": "38475934875"
             *     }
             */
            fields: {
                /**
                 * fields
                 * @example {
                 *       "mainOrderId": "MKP-123456789",
                 *       "franchiseOrderId": "432874921387409182347"
                 *     }
                 */
                fields?: {
                    /**
                     * The mainOrderId Schema
                     * @description String with the order’s ID inside the main seller account in VTEX.
                     * @example MKP-123456789
                     */
                    mainOrderId: string;
                    /**
                     * The franchiseOrderId Schema
                     * @description String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
                     *
                     *     - `allowFranchises` field set to `true` when integrating the order
                     *     - SLA chosen for the order is from a franchise account
                     * @example 432874921387409182347
                     */
                    franchiseOrderId?: string;
                };
            } | null;
            /**
             * @description String with a message explaining the code returned in the response.
             * @example The order was integrated into VTEX successfully
             */
            message: string;
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
    PlaceFulfillmentOrder: {
        parameters: {
            query: {
                /** @description Sales channel. */
                sc?: string;
                /** @description ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace. */
                affiliateId: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL. */
                accountName: string;
                /** @description Environment to be used. It is passed as part of the URL. */
                environment: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description ID of the order in the marketplace.
                     * @example 123456789
                     */
                    marketplaceOrderId: string;
                    /**
                     * @description Endpoint provided by the marketplace for post purchase communication. Should be an URL, containing protocol, host, path and query string (in case it applies).
                     * @example https://exampleseller.marketplaceservices.com
                     */
                    marketplaceServicesEndpoint: string;
                    /**
                     * @description Value of the payment made to the marketplace.
                     * @example 100
                     */
                    marketplacePaymentValue: number;
                    /**
                     * @description Indicates whether an order is created. It must be `true` if an order is being placed with [Price divergence](https://help.vtex.com/en/tutorial/configuring-price-divergence-rule--awAKP0sS5J8jgLs2g7pPe), otherwise the request will not work.
                     * @example false
                     */
                    isCreatedAsync?: boolean;
                    /** @description Array of objects containing information on each of the order's items. */
                    items: {
                        /**
                         * @description The SKU ID.
                         * @example 123
                         */
                        id: string;
                        /**
                         * Format: int32
                         * @description The quantity of items of this specific SKU in the cart to be simulated.
                         * @example 1
                         */
                        quantity: number;
                        /**
                         * @description The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.
                         * @example 1
                         */
                        seller: string;
                        /**
                         * @description Comission.
                         * @example 10
                         */
                        commission?: number;
                        /**
                         * @description Freight comission
                         * @example 10
                         */
                        freightCommission?: number;
                        /**
                         * @description Item price within the context of the order without separating cents. For example, $24.99 is represented `2499`.
                         * @example 2499
                         */
                        price?: number;
                        /** @description Information on services sold along with the SKU. Example: a gift package. */
                        bundleItems?: {
                            /**
                             * @description Service type.
                             * @example type-example
                             */
                            type?: string;
                            /**
                             * @description Service identifier.
                             * @example 1034
                             */
                            id?: number;
                            /**
                             * @description Service name.
                             * @example name-example
                             */
                            name?: string;
                            /**
                             * @description Service price. The last two digits are the cents.
                             * @example 199
                             */
                            price?: number;
                        }[];
                        /** @description Item attachment. */
                        itemAttachment?: {
                            /**
                             * @description Attachment name.
                             * @example name-example
                             */
                            name?: string;
                            /**
                             * @description Content referring to the customization requested by the customer.
                             * @example content-example
                             */
                            content?: string;
                        };
                        /** @description Array containing information on attachments. */
                        attachments?: string[];
                        /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                        priceTags?: {
                            /**
                             * @description Price tag identifier.
                             * @example 1234abc-5678b-1234c
                             */
                            identifier?: string;
                            /**
                             * @description `true` if price tag value is applied through a percentage.
                             * @default false
                             */
                            isPercentual: boolean;
                            /**
                             * @description Price tag name.
                             * @example discount@name-1234abc-5678b-1234c
                             */
                            name?: string;
                            /**
                             * @description Price tag value.
                             * @example -12
                             */
                            rawValue?: number;
                            /**
                             * @description Price tag raw value.
                             * @example -1200
                             */
                            value?: number;
                        }[];
                        /**
                         * @description SKU measurement unit.
                         * @example g
                         */
                        measurementUnit?: string;
                        /**
                         * @description SKU unit multiplier.
                         * @example 1
                         */
                        unitMultiplier?: number;
                        /**
                         * @description Indicates whether the order is a gift.
                         * @default false
                         */
                        isGift: boolean;
                    }[];
                    /** @description Customer's profile information. */
                    clientProfileData: {
                        /**
                         * @description Customer's email address.
                         * @example customer@examplemail.com
                         */
                        email: string;
                        /**
                         * @description Customer's first name.
                         * @example first-name
                         */
                        firstName: string;
                        /**
                         * @description Customer's last name.
                         * @example last-name
                         */
                        lastName: string;
                        /**
                         * @description Type of the document informed by the customer.
                         * @example cpf
                         */
                        documentType: string;
                        /**
                         * @description Document informed by the customer. Validation depends on the country.
                         * @example 123456789
                         */
                        document: string;
                        /**
                         * @description Customer's phone number.
                         * @example +55110988887777
                         */
                        phone?: string;
                        /**
                         * @description Company name, if the customer is a legal entity.
                         * @example company-name
                         */
                        corporateName?: string | null;
                        /**
                         * @description Trade name, if the customer is a legal entity.
                         * @example trade-name
                         */
                        tradeName?: string | null;
                        /**
                         * @description Corporate document, if the customer is a legal entity.
                         * @example 12345678000100
                         */
                        corporateDocument?: string | null;
                        /**
                         * @description State inscription, if the customer is a legal entity.
                         * @example 12345678
                         */
                        stateInscription?: string | null;
                        /**
                         * @description Corporate phone number, if the customer is a legal entity.
                         * @example +551100988887777
                         */
                        corporatePhone?: string | null;
                        /**
                         * @description `true` if the customer is a legal entity.
                         * @example false
                         */
                        isCorporate?: boolean | null;
                    };
                    /** @description Shipping information. */
                    shippingData: {
                        /** @description Shipping address. */
                        address?: {
                            /**
                             * @description Type of address. For example, `Residential` or `Pickup`, among others.
                             * @example residential
                             */
                            addressType: string;
                            /**
                             * @description Name of the person who is going to receive the order.
                             * @example receiver-name
                             */
                            receiverName: string;
                            /**
                             * @description Address ID.
                             * @example Home
                             */
                            addressId?: string;
                            /**
                             * @description Postal Code. Validation depends on the country.
                             * @example 12345000
                             */
                            postalCode: string;
                            /**
                             * @description City of the shipping address.
                             * @example Rio de Janeiro
                             */
                            city: string;
                            /**
                             * @description State of the shipping address.
                             * @example Rio de Janeiro
                             */
                            state: string;
                            /**
                             * @description Three letter ISO code of the country of the shipping address.
                             * @example BRA
                             */
                            country: string;
                            /**
                             * @description Street of the shipping address.
                             * @example Praia de Botafogo
                             */
                            street: string;
                            /**
                             * @description Number of the building, house or apartment in the shipping address.
                             * @example 300
                             */
                            number: string;
                            /**
                             * @description Neighborhood of the shipping address.
                             * @example Botafogo
                             */
                            neighborhood?: string;
                            /**
                             * @description Complement to the shipping address in case it applies.
                             * @example 3rd floor
                             */
                            complement?: string;
                            /**
                             * @description Complement that might help locate the shipping address more precisely in case of delivery.
                             * @example Grey building
                             */
                            reference?: string;
                            /** @description Array with two strings with geocoordinates, first latitude, then longitude. */
                            geoCoordinates?: string[];
                        };
                        /** @description Array of objects containing logistics information of each item. */
                        logisticsInfo?: {
                            /**
                             * @description Index of the item in the `items` array, starting from 0.
                             * @example 0
                             */
                            itemIndex: number;
                            /**
                             * @description Selected shipping option
                             * @example Express
                             */
                            selectedSla: string;
                            /**
                             * @description Logistics reservation waiting time.
                             * @example 8d
                             */
                            lockTTL?: string;
                            /**
                             * @description Estimated time until delivery for the item.
                             * @example 7d
                             */
                            shippingEstimate?: string;
                            /**
                             * @description Shipping price for the item. Does not account for the whole order's shipping price.
                             * @example 1099
                             */
                            price: number;
                            /** @description In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
                            deliveryWindow?: {
                                /**
                                 * @description Delivery window starting day and time in UTC.
                                 * @example 2021-07-13T00:00:00+00:00
                                 */
                                startDateUtc?: string;
                                /**
                                 * @description Delivery window ending day and time in UTC.
                                 * @example 2021-07-13T23:59:59+00:00
                                 */
                                endDateUtc?: string;
                                /**
                                 * @description Delivery window price.
                                 * @default 0
                                 */
                                price: number;
                                /**
                                 * @description Delivery window list price.
                                 * @default 0
                                 */
                                lisPrice: number;
                                /**
                                 * @description Delivery window tax.
                                 * @default 0
                                 */
                                tax: number;
                            };
                        }[];
                        /**
                         * @description Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`
                         * @example updated
                         */
                        updateStatus?: string;
                    };
                    /**
                     * @description In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context.
                     * @default null
                     */
                    paymentData: Record<string, never>;
                    marketingData?: {
                        /**
                         * @description UTM source.
                         * @example Facebook
                         */
                        utmSource?: string;
                        /**
                         * @description UTM medium.
                         * @example CPC
                         */
                        utmMedium?: string;
                        /**
                         * @description UTM campaign
                         * @example Black friday
                         */
                        utmCampaign?: string;
                        /**
                         * @description utmi_page (internal utm)
                         * @example utmi_page-example
                         */
                        utmiPage?: string;
                        /**
                         * @description utmi_part (internal utm)
                         * @example utmi_part-exmaple
                         */
                        utmiPart?: string;
                        /**
                         * @description utmi_campaign (internal utm)
                         * @example utmi_campaign-exmaple
                         */
                        utmiCampaign?: string;
                    };
                    /**
                     * @description Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)
                     * @example open-text-example
                     */
                    openTextField?: string;
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
                    "application/json": unknown;
                };
            };
        };
    };
    AuthorizeDispatchForFulfillmentOrder: {
        parameters: {
            query: {
                /** @description Sales channel. */
                sc?: string;
                /** @description ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace. */
                affiliateId: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL. */
                accountName: string;
                /** @description Environment to be used. It is passed as part of the URL. */
                environment: string;
                /** @description ID of the order that is to be authorized. It is composed of the `afilliateId` and the `marketplaceOrderId` joined with a `-`. For instance, an order with an ID `"123"` coming from the marketplace `"MKP"` has an `orderId` of `"MKP-123"`. */
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description ID of the order in the marketplace. It is the same as the `orderId` without the `afilliateId` at the beginning. For instance, if the `orderId` is `"MKP-123"`, the `marketplaceOrderId` is `"123"`.
                     * @default 123
                     */
                    marketplaceOrderId: string;
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
                    "application/json": unknown;
                };
            };
        };
    };
    EnqueueNewOrder: {
        parameters: {
            query: {
                /** @description Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order. */
                an?: string;
                /** @description ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace. */
                affiliateId: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order. */
                accountName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "marketplaceOrderId": "{{$guid}}",
                 *       "marketplaceOrderStatus": "NEW",
                 *       "marketplacePaymentValue": 3025,
                 *       "connectorName": "SkyHub",
                 *       "connectorEndpoint": "https://connector-endpoint.com/api/vtex",
                 *       "allowFranchises": false,
                 *       "pickupAccountName": "",
                 *       "items": [
                 *         {
                 *           "id": "1",
                 *           "price": 975,
                 *           "quantity": 1
                 *         }
                 *       ],
                 *       "clientProfileData": {
                 *         "email": "email@email.com.br",
                 *         "firstName": "John",
                 *         "lastName": "Doe",
                 *         "phone": "99999999999",
                 *         "document": "99999999999",
                 *         "corporateDocument": null,
                 *         "corporatePhone": null,
                 *         "corporateName": null,
                 *         "tradeName": null,
                 *         "stateInscription": null
                 *       },
                 *       "shippingData": {
                 *         "logisticsInfo": [
                 *           {
                 *             "price": 2050,
                 *             "selectedDeliveryChannel": "delivery",
                 *             "selectedSla": "Express",
                 *             "lockTTL": "1d",
                 *             "shippingEstimate": "2d",
                 *             "deliveryIds": {
                 *               "warehouseId": "AR1"
                 *             }
                 *           }
                 *         ],
                 *         "selectedAddresses": [
                 *           {
                 *             "addressType": "Residential",
                 *             "addressId": "1",
                 *             "receiverName": "John Doe",
                 *             "postalCode": "81020-235",
                 *             "city": "Curitiba",
                 *             "state": "PR",
                 *             "country": "BRA",
                 *             "street": "Rua Eduardo Carlos Pereira",
                 *             "number": "4125",
                 *             "neighborhood": "Portão",
                 *             "complement": "101",
                 *             "geoCoordinates": {
                 *               "latitude": "-29.5",
                 *               "longitude": "-45.8"
                 *             }
                 *           }
                 *         ],
                 *         "isFob": true,
                 *         "isMarketplaceFulfillment": true
                 *       },
                 *       "invoiceData": {
                 *         "userPaymentInfo": {
                 *           "paymentMethods": [
                 *             "creditCardPaymentGroup"
                 *           ]
                 *         }
                 *       },
                 *       "customData": {
                 *         "customApps": [
                 *           {
                 *             "id": "marketplace-integration",
                 *             "major": 1,
                 *             "fields": {
                 *               "marketplacePaymentMethod": "credit card"
                 *             }
                 *           }
                 *         ]
                 *       }
                 *     } */
                "application/json": components["schemas"]["EnqueueNewOrderRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Deliverybyseller"];
                };
            };
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Deliverybyfranchiseseller"];
                };
            };
        };
    };
    UpdateOrderStatus: {
        parameters: {
            query?: {
                /** @description Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order. */
                an?: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order. */
                accountName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "marketplaceOrderId": "{{$guid}}",
                 *       "marketplaceOrderStatus": "APPROVED",
                 *       "connectorName": "Skyhub",
                 *       "connectorEndpoint": "https://connector-endpoint.com/api/vtex"
                 *     } */
                "application/json": components["schemas"]["UpdateOrderStatusRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Approveorder"];
                };
            };
        };
    };
    "fulfillment-simulation-external-marketplace": {
        parameters: {
            query?: {
                /** @description The affiliate ID code created by the seller. */
                affiliateId?: string;
                /** @description Trade Policy (Sales Channel) identification. */
                sc?: number;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Name of the VTEX account. Used as part of the URL. */
                accountName: string;
                /** @description Environment to be used. It is passed as part of the URL. */
                environment: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Array containing information about the SKUs inside the cart to be simulated. */
                    items?: {
                        /**
                         * @description The SKU ID.
                         * @example 1
                         */
                        id?: string;
                        /**
                         * Format: int32
                         * @description The quantity of items of this specific SKU in the cart to be simulated.
                         * @example 1
                         */
                        quantity?: number;
                        /**
                         * @description The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.
                         * @example 1
                         */
                        seller?: string;
                    }[];
                    /** @description Object containing promotion data such as coupon tracking information and internal or external UTMs. */
                    marketingData?: {
                        /**
                         * @description Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
                         * @default free-shipping
                         */
                        coupon: string;
                        /**
                         * @description UTM source.
                         * @default Facebook
                         */
                        utmSource: string;
                        /**
                         * @description UTM medium.
                         * @default CPC
                         */
                        utmMedium: string;
                        /**
                         * @description UTM campaign
                         * @default Black friday
                         */
                        utmCampaign: string;
                        /**
                         * @description utmi_page (internal utm).
                         * @default utmi_page-example
                         */
                        utmiPage: string;
                        /**
                         * @description utmi_part (internal utm).
                         * @default utmi_part-example
                         */
                        utmiPart: string;
                        /**
                         * @description utmi_campaign (internal utm).
                         * @default utmi_campaign-example
                         */
                        utmiCampaign: string;
                    };
                    /**
                     * @description Postal code.
                     * @example 12345-000
                     */
                    postalCode?: string;
                    /**
                     * @description Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values.
                     * @example BRA
                     */
                    country?: string;
                    /**
                     * @description SLA selected by the customer.
                     * @example Normal
                     */
                    selectedSla?: string;
                    /** @description Customer's profile information. */
                    clientProfileData?: {
                        /**
                         * @description Email address.
                         * @example clark.kent@example.com
                         */
                        email?: string;
                        /**
                         * @description First name.
                         * @example Clark
                         */
                        firstName?: string;
                        /**
                         * @description Last name.
                         * @example Kent
                         */
                        lastName?: string;
                        /**
                         * @description Type of the document informed by the customer.
                         * @example cpf
                         */
                        documentType?: string;
                        /**
                         * @description Document informed by the customer.
                         * @example 12345678900
                         */
                        document?: string;
                        /**
                         * @description Phone number.
                         * @example +552199999999
                         */
                        phone?: string;
                        /** @description Company name, if the customer is a legal entity. */
                        corporateName?: string | null;
                        /** @description Trade name, if the customer is a legal entity. */
                        tradeName?: string | null;
                        /** @description Corporate document, if the customer is a legal entity. */
                        corporateDocument?: string | null;
                        /** @description State inscription, if the customer is a legal entity. */
                        stateInscription?: string | null;
                        /** @description Corporate phone number, if the customer is a legal entity. */
                        corporatePhone?: string | null;
                        /** @description Indicates whether the customer is a legal entity. */
                        isCorporate?: boolean;
                        /** @description Indicates whether profile is complete on loading. */
                        profileCompleteOnLoading?: boolean;
                        /** @description Indicates whether profile presents error on loading. */
                        profileErrorOnLoading?: boolean | null;
                        /** @description Customer class. */
                        customerClass?: string | null;
                    };
                    /**
                     * @description Array containing two floats with geocoordinates, first longitude, then latitude.
                     * @default [
                     *       -47.924747467041016,
                     *       -15.832582473754883
                     *     ]
                     */
                    geoCoordinates: number[];
                    /**
                     * @description Indicates whether order is checked in.
                     * @default false
                     */
                    isCheckedIn: boolean;
                    /** @description ID of the store. */
                    storeId?: string | null;
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
                        /** @description Information on each item in the cart. */
                        items?: {
                            /** @description ID of the item. */
                            id?: string;
                            /** @description Request index information. */
                            requestIndex?: number;
                            /** @description The quantity of the item the cart. */
                            quantity?: number;
                            /** @description The seller responsible for the SKU. */
                            seller?: string;
                            /** @description Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
                            sellerChain?: string[];
                            /** @description Tax value in cents. */
                            tax?: number;
                            /** @description Price expiration date and time. */
                            priceValidUntil?: string;
                            /** @description Price in cents. */
                            price?: number;
                            /** @description List price in cents. */
                            listPrice?: number;
                            /** @description Reward value in cents. */
                            rewardValue?: number;
                            /** @description Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
                            sellingPrice?: number;
                            /** @description Array containing offering information. */
                            offerings?: unknown[];
                            /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                            priceTags?: {
                                /** @description Price tag name. */
                                name?: string;
                                /** @description Price tag value. */
                                value?: number;
                                /** @description Price tag raw value. */
                                rawValue?: number;
                                /** @description Indicates whether price tag value is applied through a percentage. */
                                isPercentual?: boolean;
                                /** @description Price tag identifier. */
                                identifier?: string;
                                /** @description Identification of the responsible for the price tag. */
                                owner?: string;
                            }[];
                            /** @description Measurement unit. */
                            measurementUnit?: string;
                            /** @description Unit multiplier. */
                            unitMultiplier?: number;
                            /** @description Parent item index. */
                            parentItemIndex?: number | null;
                            /** @description Parent assembly binding. */
                            parentAssemblyBinding?: string | null;
                            /** @description Availability. */
                            availability?: string;
                            /** @description Price information for all units of a specific item. */
                            priceDefinition?: {
                                /** @description Item's calculated unitary selling price in cents. */
                                calculatedSellingPrice?: number;
                                /** @description Total value for all units of the item in cents. */
                                total?: number;
                                /** @description Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
                                sellingPrices?: {
                                    /** @description Value in cents for that specific rounding. */
                                    value?: number;
                                    /** @description Rounding quantity, meaning how many items are rounded to this value. */
                                    quantity?: number;
                                }[];
                            };
                        }[];
                        /** @description Information on rates and benefits that apply to the order. */
                        ratesAndBenefitsData?: {
                            /** @description List with rates and benefits identifiers. */
                            rateAndBenefitsIdentifiers?: unknown[];
                            /** @description List with rates and benefits teasers. */
                            teaser?: unknown[];
                        };
                        /** @description Payment data information. */
                        paymentData?: {
                            /** @description Installment options information. */
                            installmentOptions?: unknown[];
                            /** @description Information on payment systems. */
                            paymentSystems?: {
                                /** @description Payment system ID. */
                                id?: number;
                                /** @description Payment system name. */
                                name?: string;
                                /** @description Payment group name. */
                                groupName?: string;
                                /** @description Payment system validator. */
                                validator?: Record<string, never>;
                                /** @description String ID. */
                                stringId?: string;
                                /** @description Template. */
                                template?: string;
                                /** @description Indicates whether a document is required. */
                                requiresDocument?: boolean;
                                /** @description Indicates whether a document is shown. */
                                displayDocument?: boolean;
                                /** @description Indicates whether it is custom. */
                                isCustom?: boolean;
                                /** @description Description. */
                                description?: string;
                                /** @description Indicates whether a authentication is required. */
                                requiresAuthentication?: boolean;
                                /** @description Payment due date. */
                                dueDate?: string;
                                /** @description Availability of payment. */
                                availablePayments?: string | null;
                            }[];
                            /** @description Information on each payment. */
                            payments?: unknown[];
                            /** @description Gift card information, if it applies to the order. */
                            giftCards?: unknown[];
                            /** @description Array of gift card messages. */
                            giftCardMessages?: unknown[];
                            /** @description Available accounts. */
                            availableAccounts?: unknown[];
                            /** @description Available tokens. */
                            availableTokens?: unknown[];
                            /** @description Available associations. */
                            availableAssociations?: Record<string, never>;
                        };
                        /** @description Array containing the data of the item selected as a gift. */
                        selectableGifts?: unknown[];
                        /** @description Object containing promotion data such as coupon tracking information and internal or external UTMs. */
                        marketingData?: Record<string, never>;
                        /** @description Postal Code. */
                        postalCode?: string | null;
                        /** @description Three letter ISO code of the country of the shipping address. */
                        country?: string;
                        /** @description Array with logistics information on each item of the `items` array in the `orderForm`. */
                        logisticsInfo?: {
                            /** @description Index of item in items array. */
                            itemIndex?: number;
                            /** @description Address ID. */
                            addressId?: string | null;
                            /** @description Selected SLA. For example, `"normal"` or `"express"`. */
                            selectedSla?: string | null;
                            /** @description Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`. */
                            selectedDeliveryChannel?: string | null;
                            /** @description Quantity. */
                            quantity?: number;
                            /** @description List of countries that the item may be shipped to. */
                            shipsTo?: unknown[];
                            /** @description Information on available SLAs. */
                            slas?: {
                                /** @description SLA ID. */
                                id?: string;
                                /** @description Delivery channel. */
                                deliveryChannel?: string;
                                /** @description SLA name. */
                                name?: string;
                                /** @description Information on each delivery ID. */
                                deliveryIds?: {
                                    /** @description Courier ID. */
                                    courierId?: string;
                                    /** @description Warehouse ID. */
                                    warehouseId?: string;
                                    /** @description Warehouse ID. */
                                    dockId?: string;
                                    /** @description Courier name. */
                                    courierName?: string;
                                    /** @description Quantity. */
                                    quantity?: number;
                                }[];
                                /** @description Shipping estimate. For instance, "three business days" will be represented as `3bd`. */
                                shippingEstimate?: string;
                                /** @description Shipping estimate date. */
                                shippingEstimateDate?: string | null;
                                /** @description Estimate date of delivery. */
                                lockTTL?: string;
                                /** @description This object contains information about the delivery window available to the shopper. */
                                availableDeliveryWindows?: {
                                    /** @description Delivery window starting day and time in UTC. */
                                    startDateUtc?: string;
                                    /** @description Delivery window ending day and time in UTC. */
                                    endDateUtc?: string;
                                    /** @description Delivery window price. */
                                    price?: number;
                                    /** @description Delivery window list price. */
                                    lisPrice?: number;
                                    /** @description Delivery window tax. */
                                    tax?: number;
                                };
                                /** @description In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
                                deliveryWindow?: {
                                    /** @description Delivery window starting day and time in UTC. */
                                    startDateUtc?: string;
                                    /** @description Delivery window ending day and time in UTC. */
                                    endDateUtc?: string;
                                    /** @description Delivery window price. */
                                    price?: number;
                                    /** @description Delivery window list price. */
                                    lisPrice?: number;
                                    /** @description Delivery window tax. */
                                    tax?: number;
                                };
                                /** @description Price in cents. */
                                price?: number;
                                /** @description List price in cents. */
                                listPrice?: number;
                                /** @description Tax in cents. */
                                tax?: number;
                                /** @description Information on the pickup store. */
                                pickupStoreInfo?: {
                                    /** @description Indicates whether it is the pickup store. */
                                    isPickupStore?: boolean;
                                    /** @description Friendly name. */
                                    friendlyName?: string | null;
                                    /** @description Address information. */
                                    address?: Record<string, never>;
                                    /** @description Additional information. */
                                    additionalInfo?: string | null;
                                    /** @description Corresponding dock ID. */
                                    dockId?: string | null;
                                };
                                /** @description Pickup point ID. */
                                pickupPointId?: string | null;
                                /** @description Pickup point distance. */
                                pickupDistance?: number;
                                /** @description Polygon name. */
                                polygonName?: string | null;
                                /** @description Transit time. For instance, "three business days" is represented as `3bd`. */
                                transitTime?: string;
                            }[];
                            /** @description List of available delivery channels. */
                            deliveryChannels?: {
                                /** @description Delivery channel ID. */
                                id?: string;
                            }[];
                            /** @description Array containing an object for each message generated by our servers while processing the request. */
                            messages?: unknown[];
                            /** @description Purchase conditions information. */
                            purchaseConditions?: {
                                /** @description List of objects containing purchase condition information on each item in the order. */
                                itemPurchaseConditions?: {
                                    /** @description Item ID. */
                                    id?: string;
                                    /** @description Seller. */
                                    seller?: string;
                                    /** @description Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
                                    sellerChain?: unknown[];
                                    /** @description Information on available SLAs. */
                                    slas?: {
                                        /** @description SLA ID. */
                                        id?: string;
                                        /** @description Delivery channel. */
                                        deliveryChannel?: string;
                                        /** @description SLA name. */
                                        name?: string;
                                        /** @description Information on each delivery ID. */
                                        deliveryIds?: {
                                            /** @description Courier ID. */
                                            courierId?: string;
                                            /** @description Warehouse ID. */
                                            warehouseId?: string;
                                            /** @description Warehouse ID. */
                                            dockId?: string;
                                            /** @description Courier name. */
                                            courierName?: string;
                                            /** @description Quantity. */
                                            quantity?: number;
                                        }[];
                                        /** @description Shipping estimate. For instance, "three business days" will be represented as `3bd`. */
                                        shippingEstimate?: string;
                                        /** @description Shipping estimate date. */
                                        shippingEstimateDate?: string | null;
                                        /** @description Estimate date of delivery. */
                                        lockTTL?: string;
                                        /** @description This object contains information about the delivery window available to the shopper. */
                                        availableDeliveryWindows?: {
                                            /** @description Delivery window starting day and time in UTC. */
                                            startDateUtc?: string;
                                            /** @description Delivery window ending day and time in UTC. */
                                            endDateUtc?: string;
                                            /** @description Delivery window price. */
                                            price?: number;
                                            /** @description Delivery window list price. */
                                            lisPrice?: number;
                                            /** @description Delivery window tax. */
                                            tax?: number;
                                        };
                                        /** @description In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
                                        deliveryWindow?: {
                                            /** @description Delivery window starting day and time in UTC. */
                                            startDateUtc?: string;
                                            /** @description Delivery window ending day and time in UTC. */
                                            endDateUtc?: string;
                                            /** @description Delivery window price. */
                                            price?: number;
                                            /** @description Delivery window list price. */
                                            lisPrice?: number;
                                            /** @description Delivery window tax. */
                                            tax?: number;
                                        };
                                        /** @description Price in cents. */
                                        price?: number;
                                        /** @description List price in cents. */
                                        listPrice?: number;
                                        /** @description Tax in cents. */
                                        tax?: number;
                                        /** @description Information on the pickup store. */
                                        pickupStoreInfo?: {
                                            /** @description Indicates whether it is the pickup store. */
                                            isPickupStore?: boolean;
                                            /** @description Friendly name. */
                                            friendlyName?: string | null;
                                            /** @description Address information. */
                                            address?: Record<string, never>;
                                            /** @description Additional information. */
                                            additionalInfo?: string | null;
                                            /** @description Corresponding dock ID. */
                                            dockId?: string | null;
                                        };
                                        /** @description Pickup point ID. */
                                        pickupPointId?: string | null;
                                        /** @description Pickup point distance. */
                                        pickupDistance?: number;
                                        /** @description Polygon name. */
                                        polygonName?: string | null;
                                        /** @description Transit time. For instance, "three business days" is represented as `3bd`. */
                                        transitTime?: string;
                                    }[];
                                    /** @description Price in cents. */
                                    price?: number;
                                    /** @description List price in cents. */
                                    listPrice?: number;
                                }[];
                            };
                            /** @description Array containing pickup points information. */
                            pickupPoints?: unknown[];
                            /** @description Subscription information. */
                            subscriptionData?: Record<string, never>;
                            /** @description Information on order totals. */
                            totals?: {
                                /** @description Total ID. */
                                id?: string;
                                /** @description Total name. */
                                name?: string;
                                /** @description Total value. */
                                value?: number;
                            }[];
                            /** @description Item metadata. */
                            itemMetadata?: {
                                /** @description List of objects containing metadata on each item in the order. */
                                items?: {
                                    /** @description Item ID. */
                                    id?: string;
                                    /** @description Seller. */
                                    seller?: string;
                                    /** @description Assembly options information. */
                                    assemblyOptions?: unknown[];
                                }[];
                            };
                        }[];
                    };
                };
            };
        };
    };
}
