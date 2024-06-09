export interface paths {
    "/pvt/orderForms/simulation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fulfillment simulation - External Seller
         * @description This endpoint may be called upon by VTEX for fulfillment simulation in the external seller different contexts. See examples below.
         *
         *     When a [price](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price) or [inventory](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory) notification request returns a response with status `200 OK`, it means that the SKU already exists in the marketplace. Whenever this happens, the marketplace will call the seller to get two updated information about the SKU: Price and Inventory.
         *
         *     The seller needs to have an endpoint implemented in order to receive this call and send a response containing the requested information to the marketplace. We call it the Fulfillment Simulation endpoint.
         *
         *     If the seller wishes to include other parameters in this call (like account name, or [sales channel](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) ID), this should be done within their {fulfillmentEndpoint}. This path is then inserted in the marketplace's VTEX admin when [configuring a seller](https://help.vtex.com/en/tutorial/configurando-seller--tutorials_392).
         *
         *     The marketplace will send an object containing an array of items. The seller must use this list to get the updated information about the referred SKUs and send them back to the marketplace, following the response format explained in the API Reference.
         *
         *     This call is also applied in the Storefront simulation scenario, in which case the request from VTEX does not send the parameters `country` and `postalCode`.
         *     The call's payload can be adapted into two scenarios:
         *
         *     - **Displaying items in the storefront**: the address information can be nulled in the request since they are not mandatory data for this context.
         *     - **Making a shopping cart simulation during checkout**: address information must be sent since this data is needed to calculate freight values. If the address information (including `postalCode` and `country`) is not sent through the call, VTEX interprets the stock balance as zero. Without a valid stock balance, the seller will not be shown as an option during checkout.
         *
         *     ## Request body example - Indexing simulation
         *
         *     ```
         *     {
         *         "items": [
         *           {
         *             "id": "7908010136043",
         *             "quantity": 1,
         *             "seller": "1",
         *           }
         *         ],
         *         "isCheckedIn": false,
         *       }
         *     ```
         *     ## Request body example - Checkout simulation
         *
         *     ```
         *     {
         *         "items": [
         *           {
         *             "id": "7908010136043",
         *             "quantity": 1,
         *             "seller": "1",
         *           }
         *         ],
         *         "postalCode": "22270-030",
         *         "country": "BRA",
         *       }
         *     ```
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["fulfillment-simulation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pvt/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Order placement
         * @description This request is sent by VTEX to the external seller once the customer finishes their checkout, to let the seller know there is a newly placed order. It does that by calling the **Order Placement** endpoint, which needs to be implemented by the seller.
         *
         *     The marketplace will send information such as the items contained in the cart, the client’s profile data, the shipping data, and the payment data. With all that, the seller will be able to create the order in their store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | VTEX Fulfilment | Fulfilment Resources | **Place Orders** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Create orders | Place Orders |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["order-placement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pvt/orders/{sellerOrderId}/fulfill": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Authorize fulfillment
         * @description This request is sent from VTEX to the seller after the payment is approved, to notify them that the fulfillment process can start.
         *
         *     ## Permissions
         *
         *     Check with your service provider to know what permissions are needed.
         */
        post: operations["authorize-fulfillment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pvt/orders/{orderId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Marketplace order cancellation
         * @description This request may be sent from VTEX to the external seller in case of order cancelation. For that, the seller will need to implement the Marketplace order cancellation endpoint. Whenever this request is received by the seller, the order should be canceled and the fulfillment flow should not proceed.
         *
         *     For the seller to:
         *
         *     - **Evaluate a cancellation request:** it is possible to send an empty body as a response to the cancellation request, meaning that the seller is evaluating whether to proceed with the cancellation or not.
         *
         *     - **Confirm the cancellation request:** it is possible to confirm the order cancellation by the marketplace by responding to the call with a body including only one information: the `marketplaceOrderId`, which identifies the order in the marketplace. The seller should use this ID to trigger the cancellation of the corresponding order. The seller should then respond with the same `marketplaceOrderId` and also with the `orderId`, which identifies the order in the seller, the date and time of the notification receipt, and a protocol code that confirms the receipt of the request (which may have the value `null`).
         *
         *     - **Refuse a cancellation request:** it is possible to to [send the Invoice](https://developers.vtex.com/vtex-rest-api/reference/external-seller#send-invoice), meaning that the cancellation has been denied, and the flow continues to the [Order Invoicing](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-connector#order-invoicing) step, and the ones that follow it.
         *
         *     >⚠️ This call should be made twice: once for the *Evaluate cancellation request* scenario, and a second time to *Confirm cancellation* or *Refuse cancellation*.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Order Cancellation** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Cancela Pedidos | Order Cancellation |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["mkp-order-cancellation"];
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
        /** @description Details of an item to be fulfilled. */
        fulfillmentItem: {
            /**
             * @description SKU ID.
             * @example 6
             */
            id: string;
            /**
             * @description Quantity of items of the SKU in the cart.
             * @example 1
             */
            quantity: number;
            /**
             * @description ID of the seller registered in VTEX.
             * @example 01
             */
            seller: string;
        };
        /** @description Informations related to the placement of an order. */
        orderPlacement: {
            /**
             * @description Identifies the order in the marketplace.
             * @example 1138342255777-01
             */
            marketplaceOrderId?: string;
            /**
             * @description Endpoint sent by VTEX to the seller, that will be used to send the invoice and tracking data to the marketplace. This endpoint will also be used in [change order in Multilevel Omnichannel Inventory](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces#implementators) operations in external marketplaces.
             * @example https://marketplaceservicesendpoint.myvtex.com/
             */
            marketplaceServicesEndpoint?: string;
            /**
             * @description Amount that the marketplace agrees to pay to the seller. The last two digits are the cents. For example, $24.99 is represented 2499.
             * @example 2499
             */
            marketplacePaymentValue?: number;
            /** @description Array of objects. */
            items?: {
                /**
                 * @description SKU ID.
                 * @example 123456789abc
                 */
                id?: string;
                /**
                 * @description Quantity of the item.
                 * @example 1
                 */
                quantity?: number;
                /**
                 * @description ID of the seller registered in VTEX.
                 * @example seller-example
                 */
                seller?: string;
                /**
                 * @description Comission.
                 * @example 0
                 */
                commission?: number;
                /**
                 * @description Freight comission.
                 * @example 0
                 */
                freightCommission?: number;
                /**
                 * @description SKU price. The last two digits are the cents. For example, $24.99 is represented 2499.
                 * @example 2499
                 */
                price?: number;
                /** @description Information on services sold along with the SKU. Example: a gift package. */
                bundleItems?: components["schemas"]["bundleItemsItem"][];
                /** @description Attachments sold with the SKU. */
                itemsAttachment?: components["schemas"]["itemAttachment"][];
                /** @description Array containing information on attachments. */
                attachments?: {
                    /**
                     * @description Unique identifier of the attachment.
                     * @example attachment-1
                     */
                    id?: string;
                    /**
                     * @description Name of the attachment.
                     * @example Product Image
                     */
                    name?: string;
                    /**
                     * @description URL of the attachment.
                     * @example https://example.com/image.jpg
                     */
                    url?: string;
                }[];
                /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                priceTags?: {
                    /**
                     * @description Price tag identifier.
                     * @example 1234abc-5678b-1234c
                     */
                    identifier?: string;
                    /**
                     * @description `true` if price tag value is applied through a percentage.
                     * @example false
                     */
                    isPercentual?: boolean;
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
                 * @description Indicates if the item is a gift (`true`).
                 * @example true
                 */
                isGift?: boolean;
            }[];
            /**
             * @description In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context.
             * @example null
             */
            paymentData?: Record<string, never>;
            /** @description Customer's profile information. */
            clientProfileData?: {
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
                 * @description Document number informed by the customer.
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
                 * @default false
                 * @example false
                 */
                isCorporate: boolean | null;
            };
            /** @description Shipping information. */
            shippingData?: {
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
                     * @description Postal Code.
                     * @example 12345-000
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
                    neighborhood: string;
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
                    /** @description Geographic coordinates of the delivery address. This may be used instead of the postalCode, in case the marketplace is configured to accept geolocation. Example of value: `[-22.9443504,-43.1825635]`. */
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
                     * @description Selected shipping option.
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
                    /** @description Scheduled delivery window information, in case it applies to the item. */
                    deliveryWindow?: {
                        /**
                         * @description Scheduled delivery window start date in UTC.
                         * @example 2016-04-20T08:00:00+00:00
                         */
                        startDateUtc?: string;
                        /**
                         * @description Scheduled delivery window end date in UTC.
                         * @example 2016-04-20T12:00:00+00:00
                         */
                        endDateUtc?: string;
                        /**
                         * @description Scheduled delivery window list price.
                         * @example 10
                         */
                        listPrice?: number;
                    };
                }[];
                /**
                 * @description Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`.
                 * @example updated
                 */
                updateStatus?: string;
            };
            /** @description Marketing tracking data. If the order has no tracking data, the value will be `null`. */
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
                 * @description UTM campaign.
                 * @example Black friday
                 */
                utmCampaign?: string;
                /**
                 * @description utmi_page (internal utm).
                 * @example utmi_page-example
                 */
                utmiPage?: string;
                /**
                 * @description utmi_part (internal utm).
                 * @example utmi_part-exmaple
                 */
                utmiPart?: string;
                /**
                 * @description utmi_campaign (internal utm).
                 * @example utmi_campaign-exmaple
                 */
                utmiCampaign?: string;
            };
            /**
             * @description Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `json` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).
             * @example open-text-example
             */
            openTextField?: string;
        };
        /** @description Expected response from the Order Placement endpoint. */
        responseOrderPlacement: {
            /** @description Number of the order in the marketplace. */
            marketplaceOrderId?: string;
            /** @description Order number. */
            orderId?: string;
            /** @description Email for contact with the store (seller). */
            followUpEmail?: string;
            /** @description List of order items. */
            items?: {
                /** @description SKU ID. */
                id?: string;
                /** @description Quantity of the item. */
                quantity?: number;
                /** @description ID of the seller registered in VTEX. */
                seller?: string;
                /** @description Comission. */
                commission?: number;
                /** @description Freight comission. */
                freightCommission?: number;
                /**
                 * @description SKU price. The last two digits are the cents. For example, $24.99 is represented 2499.
                 * @example 2499
                 */
                price?: number;
                /** @description Information on services sold along with the SKU. Example: a gift package. */
                bundleItems?: components["schemas"]["bundleItemsItem"][];
                /** @description Attachments sold with the SKU. */
                itemsAttachment?: components["schemas"]["itemAttachment"][];
                /** @description Array containing information on attachments. */
                attachments?: {
                    /** @description Unique identifier of the attachment. */
                    id?: string;
                    /** @description Name of the attachment. */
                    name?: string;
                    /** @description URL of the attachment. */
                    url?: string;
                }[];
                /** @description Array of price tags. Each one modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                priceTags?: {
                    /** @description Price tag identifier. */
                    identifier?: string;
                    /** @description `true` if price tag value is applied through a percentage. */
                    isPercentual?: boolean;
                    /** @description Price tag name. */
                    name?: string;
                    /** @description Price tag value. */
                    rawValue?: number;
                    /** @description Price tag raw value. */
                    value?: number;
                }[];
                /** @description SKU measurement unit. */
                measurementUnit?: string;
                /** @description SKU unit multiplier. */
                unitMultiplier?: number;
                /** @description `true` if the item is a gift. */
                isGift?: boolean;
            }[];
            /** @description Customer's data. */
            clientProfileData?: {
                /** @description Customer's email address. */
                email?: string;
                /** @description Customer's first name. */
                firstName?: string;
                /** @description Customer's last name. */
                lastName?: string;
                /** @description Type of the document informed by the customer. */
                documentType?: string;
                /** @description Document number informed by the customer. */
                document?: string;
                /** @description Customer's phone number. */
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
                /**
                 * @description `true` if the customer is a legal entity.
                 * @default false
                 */
                isCorporate: boolean | null;
            };
            /** @description Shipping information. */
            shippingData?: {
                /** @description Shipping address. */
                address?: {
                    /** @description Type of address. For example, `Residential` or `Pickup`, among others. */
                    addressType: string;
                    /** @description Name of the person who is going to receive the order. */
                    receiverName: string;
                    /** @description Address ID. */
                    addressId?: string;
                    /** @description Postal Code. */
                    postalCode: string;
                    /** @description City of the shipping address. */
                    city: string;
                    /** @description State of the shipping address. */
                    state: string;
                    /** @description Three letter ISO code of the country of the shipping address. */
                    country: string;
                    /** @description Street of the shipping address. */
                    street: string;
                    /** @description Number of the building, house or apartment in the shipping address. */
                    number: string;
                    /** @description Neighborhood of the shipping address. */
                    neighborhood: string;
                    /** @description Complement to the shipping address in case it applies. */
                    complement?: string;
                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                    reference?: string;
                    /** @description Geographic coordinates of the delivery address. This may be used instead of the postalCode, in case the marketplace is configured to accept geolocation. Example of value: `[-22.9443504,-43.1825635]`. */
                    geoCoordinates?: string[];
                };
                /** @description Array of objects containing logistics information of each item. */
                logisticsInfo?: {
                    /** @description Index of the item in the `items` array, starting from 0. */
                    itemIndex: number;
                    /** @description Selected shipping option. */
                    selectedSla: string;
                    /** @description Logistics reservation waiting time. */
                    lockTTL?: string;
                    /** @description Estimated time until delivery for the item. */
                    shippingEstimate?: string;
                    /** @description Shipping price for the item. Does not account for the whole order's shipping price. */
                    price: number;
                    /** @description Scheduled delivery window information, in case it applies to the item. */
                    deliveryWindow?: {
                        /** @description Scheduled delivery window start date in UTC. */
                        startDateUtc?: string;
                        /** @description Scheduled delivery window end date in UTC. */
                        endDateUtc?: string;
                        /**
                         * @description Scheduled delivery window list price.
                         * @example 10
                         */
                        listPrice?: number;
                    };
                }[];
            };
            /** @description In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context. */
            paymentData?: Record<string, never>;
            /** @description Custom data for the order. */
            customData?: Record<string, never>;
            /** @description Flag for permission of multiple deliveries. */
            allowMultipleDeliveries?: boolean;
        };
        /** @description An item included in a bundle, representing a service or product. */
        bundleItemsItem: {
            /**
             * @description Service type.
             * @example type
             */
            type?: string;
            /**
             * @description Service identifier.
             * @example 7436
             */
            id?: number;
            /**
             * @description Service name.
             * @example name
             */
            name?: string;
            /**
             * @description Service price. The last two digits are the cents.
             * @example 1000
             */
            price?: number;
        };
        /** @description An attachment associated with an item, containing additional information or customization requested by the customer. */
        itemAttachment: {
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
        /** @description This request body represents a fulfillmentsimulation, which may involve delivering items to a specified address. It is used to test the process of fulfilling orders without actually placing them. */
        requestFulfillmentSimulation: {
            /**
             * @description Delivery address postal code. This field is mandatory for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
             * @example 12345678
             */
            postalCode: string;
            /** @description Geographic coordinates of the delivery address. This may be used instead of the postalCode, in case the marketplace is configured to accept geolocation. Example of value: `[-22.9443504,-43.1825635]`. */
            geoCoordinates?: string[];
            /**
             * @description ISO 3-digit code of the country where the delivery address is located.  This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
             * @example USA
             */
            country?: string;
            /** @description Array containing the cart items. */
            items?: components["schemas"]["fulfillmentItem"][];
            /**
             * @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
             * @example 1
             */
            sc?: string;
        };
        /**
         * Response body
         * @description Expected response body of fulfillment simulation.
         */
        responseFulfillmentSimulation: {
            /**
             * Country
             * @description ISO 3-digit code of the country where the delivery address is located. If you don’t want to send it, use the value null.
             */
            country: string;
            /**
             * Items
             * @description Contains the data about each SKU in the cart.
             */
            items: {
                /**
                 * id
                 * @description SKU ID.
                 */
                id: string;
                /**
                 * listPrice
                 * @description List price. It’s the amount presented to the customer as a “previous” price that has been lowered due to a discount. Don’t separate the decimal places. The last two digits are the cents.
                 */
                listPrice: number;
                /**
                 * measurementUnit
                 * @description SKU’s measurement unit.
                 */
                measurementUnit: string;
                /**
                 * merchantName
                 * @description Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [​​Payments in VTEX marketplaces](https://help.vtex.com/en/tutorial/payments-in-vtex-marketplaces--2kYOfWCZYweJkYl18bw9yD) article to know more.
                 */
                merchantName: string;
                /**
                 * offerings
                 * @description Services that may be offered for this SKU. example are the assembly of a piece of furniture or warranty. In case these information are sent, the following fields are mandatory. If you don’t want to send it, use an empty array.
                 */
                offerings: {
                    /**
                     * type
                     * @description Type of the service.
                     */
                    type: string;
                    /**
                     * id
                     * @description Service ID.
                     */
                    id: string;
                    /**
                     * name
                     * @description Service name.
                     */
                    name: string;
                    /**
                     * price
                     * @description Service price. The last two digits are the cents.
                     */
                    price: number;
                }[];
                /**
                 * price
                 * @description Actual selling price of the SKU. Don’t separate the decimal places. The last two digits are the cents.
                 */
                price: number;
                /**
                 * priceTags
                 * @description List with the promotions applied to the SKU.
                 */
                priceTags: string[];
                /**
                 * priceValidUntil
                 * @description Expiration date of the SKU price. Example: `2014-03-01T22:58:28.143`. In case you don’t want to send it, use the value null.
                 */
                priceValidUntil: string | null;
                /**
                 * quantity
                 * @description Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.
                 * @default 0
                 */
                quantity: number;
                /**
                 * requestIndex
                 * @description Position of this item in the original array (request).
                 */
                requestIndex: number;
                /**
                 * seller
                 * @description ID of the seller as registered in VTEX. You should send the same value that came in the request.
                 */
                seller: string;
                /**
                 * unitMultiplier
                 * @description SKU unit multiplier. The default value is 1.
                 */
                unitMultiplier: number;
            }[];
            /**
             * logisticsInfo
             * @description Array that contains the data regarding the delivery methods and stock for each item. If all products are unavailable, this field should return empty.
             */
            logisticsInfo: {
                /**
                 * itemIndex
                 * @description Position of this item in the original array, i.e., in the array that came with the request. This index is what identifies which SKU you are referring to for each object inside the `logisticsInfo`.
                 */
                itemIndex: number;
                /**
                 * quantity
                 * @description Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.
                 */
                quantity: number;
                /**
                 * shipsTo
                 * @description ISO 3-digit code of the countries to where the SKU is delivered.
                 */
                shipsTo: string[];
                /**
                 * slas
                 * @description Contains the available delivery methods.
                 */
                slas: {
                    /**
                     * id
                     * @description Identifier of the delivery method.
                     */
                    id: string;
                    /**
                     * deliveryChannel
                     * @description Type of delivery channel. The values that are possible are: `pickup-in-point` for pickup point and `delivery` for regular delivery.
                     */
                    deliveryChannel: string;
                    /**
                     * name
                     * @description Name of the delivery method.
                     */
                    name: string;
                    /**
                     * price
                     * @description Delivery price. The two last digits are the cents.
                     */
                    price: number;
                    /**
                     * shippingEstimate
                     * @description Time estimated for the delivery. Possible suffixes are `bd` for *business day* , `h` for *hours*, and `m` for *minutes*.
                     */
                    shippingEstimate: string;
                    /**
                     * availableDeliveryWindows
                     * @description Contains the delivery windows available for the SLA.
                     */
                    availableDeliveryWindows: {
                        /**
                         * startDateUtc
                         * @description Start date of the delivery window.
                         */
                        startDateUtc: string;
                        /**
                         * endDateUtc
                         * @description End date of the delivery window.
                         */
                        endDateUtc: string;
                        /**
                         * price
                         * @description Extra price for scheduled delivery. The last two digits are the cents.
                         */
                        price: number;
                    }[];
                    /**
                     * pickupStoreInfo
                     * @description Contains the data about the pickup point. If you do not want to send this, use the value `null`.
                     */
                    pickupStoreInfo: {
                        /**
                         * isPickupStore
                         * @description `true` if it is a pickup point.
                         */
                        isPickupStore: boolean;
                        /**
                         * friendlyName
                         * @description Friendly name of the pickup point.
                         */
                        friendlyName: string;
                        /**
                         * address
                         * @description Address data of the pickup point.
                         */
                        address: {
                            /**
                             *  addressType
                             * @description The possible value is pickup.
                             */
                            addressType: string;
                            /**
                             * receiverName
                             * @description Name of the person who will receive the product. May be sent as `null`.
                             */
                            receiverName: string | null;
                            /**
                             * addressId
                             * @description Identifies the pickup point.
                             */
                            addressId: string;
                            /**
                             * postalCode
                             * @description Postal code of the pickup point. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
                             */
                            postalCode: string;
                            /**
                             * city
                             * @description Pickup point's city.
                             */
                            city: string;
                            /**
                             * state
                             * @description Pickup point's state.
                             */
                            state: string;
                            /**
                             * country
                             * @description 3-digit ISO code of the country where the pickup point is located.
                             */
                            country: string;
                            /**
                             * street
                             * @description Street where the pickup point is located.
                             */
                            street: string;
                            /**
                             * number
                             * @description Address number of the pickup point.
                             */
                            number: string;
                            /**
                             * neighborhood
                             * @description Neighborhood where the pickup point is located.
                             */
                            neighborhood: string;
                            /**
                             * complement
                             * @description Complement of the pickup point address.
                             */
                            complement: string;
                            /**
                             * reference
                             * @description A reference for the pickup point address.
                             */
                            reference: string | null;
                            /**
                             * geoCoordinates
                             * @description Contains the geographic coordinates of the pickup point.
                             */
                            geoCoordinates: number[];
                        };
                        /**
                         * additionalInfo
                         * @description Description or extra information about the pickup point.
                         */
                        additionalInfo: string;
                    } | null;
                }[];
                /**
                 * stockBalance
                 * @description Stock balance of the SKU.
                 */
                stockBalance: number;
                /**
                 * deliveryChannels
                 * @description Array contains the stock balance for each channel.
                 */
                deliveryChannels: {
                    /**
                     * id
                     * @description Identifies the channel type whose stock balance will be informed in the next field. Possible values are: pickup-in-point for pickup point and delivery for regular delivery.
                     */
                    id: string;
                    /**
                     * stockBalance
                     * @description Stock balance for the channel type selected in the previous field.
                     */
                    stockBalance: number;
                }[];
            }[];
            /**
             * postalCode
             * @description Postal code of the delivery address. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
             */
            postalCode: string;
            /** @description Flag for permission of multiple deliveries. */
            allowMultipleDeliveries?: boolean;
        };
        /** @description Details related to a request for an order ID, which is used to trigger the fulfillment process of the corresponding order. */
        requestOrderId: {
            /**
             * @description Identifies the order. The seller should use this ID to trigger the fulfillment process of the corresponding order.
             * @example 1138342255777-01
             */
            marketplaceOrderId: string;
            /**
             * @description Identifies the group to which the order belongs. Useful for orders placed on marketplaces that operate with the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) structure.
             * @example group-123
             */
            marketplaceOrderGroup: string;
            /**
             * @description Unique identifier of the cancellation request on the platform.
             * @example 85838ab408514b52aa139e4236ce0c43
             */
            cancellationRequestId: string;
            /**
             * @description Date and time the platform processed the cancellation request, in this format: `YYYY-MM-DDThh:mm:ss.SSSSSSS+00:00`.
             * @example 2024-03-04T15:45:02.1306363+00:00
             */
            cancellationRequestDate: string;
            /**
             * @description Brief explanation of why the order is being canceled.
             * @example Incorrect product
             */
            reason: string;
            /**
             * @description When set as `true`, the cancellation was requested by the shopper, and when set as `false`, the cancellation was not requested by the shopper.
             * @example true
             */
            requestedByUser: boolean;
        };
        /** @description Details related to an order, including the order approval date, marketplace order ID, order number, and order receipt code. */
        repsonseOrderId: {
            /**
             * Date
             * @description Order approval date.
             */
            date?: string;
            /**
             * Marketplace Order Id
             * @description Identifies the order. The seller should use this ID to trigger the fulfillment process of the corresponding order.
             */
            marketplaceOrderId?: string;
            /**
             * Order Id
             * @description Order number.
             */
            orderId?: string;
            /**
             * Receipt
             * @description Order receipt code.
             */
            receipt?: string;
        };
    };
    responses: never;
    parameters: {
        /** @description This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel. */
        fulfillmentEndpoint: string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description Describes the type of the content being sent. */
        "Content-Type": string;
        /** @description Length of the request body. */
        "content-length": string;
        /** @description Indicates authorization. */
        authorization: string;
        /** @description Indicates the types of response enconding the client can understand. */
        "accept-enconding": string;
        /** @description VTEX operation ID. */
        vtexOperationID: string;
        /** @description Determines the protocol used by the client in the request. */
        forwardedProto: string;
        /** @description Identifies the originating IP address of the HTTP client. */
        forwardedFor: string;
        /** @description VTEX cache client bypass. */
        vtexCacheClientBypass: string;
        /** @description Identifies the incoming request in a tracing system. */
        traceparent: string;
        /**
         * @description Seller's order ID of the order ready for fulfillment. The seller can be a VTEX seller or an external one.
         * @example 00-1268540501456-01
         */
        sellerOrderId: string;
        /** @description ID of the order being fulfilled. */
        orderId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "fulfillment-simulation": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Describes the type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel. */
                fulfillmentEndpoint: components["parameters"]["fulfillmentEndpoint"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["requestFulfillmentSimulation"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseFulfillmentSimulation"];
                };
            };
        };
    };
    "order-placement": {
        parameters: {
            query?: never;
            header: {
                /** @description Length of the request body. */
                "content-length": components["parameters"]["content-length"];
                /** @description Indicates authorization. */
                authorization: components["parameters"]["authorization"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Indicates the types of response enconding the client can understand. */
                "accept-enconding": components["parameters"]["accept-enconding"];
                /** @description VTEX operation ID. */
                "x-vtex-operation-id": components["parameters"]["vtexOperationID"];
                /** @description Determines the protocol used by the client in the request. */
                "x-forwarded-proto": components["parameters"]["forwardedProto"];
                /** @description Identifies the originating IP address of the HTTP client. */
                "x-forwarded-for": components["parameters"]["forwardedFor"];
                /** @description VTEX cache client bypass. */
                "x-vtex-cache-client-bypass": components["parameters"]["vtexCacheClientBypass"];
                /** @description Describes the type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description Identifies the incoming request in a tracing system. */
                traceparent: components["parameters"]["traceparent"];
            };
            path: {
                /** @description This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel. */
                fulfillmentEndpoint: components["parameters"]["fulfillmentEndpoint"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "marketplaceOrderId": "1138342255777-01",
                 *       "marketplaceServicesEndpoint": "https://marketplaceservicesendpoint.myvtex.com/",
                 *       "marketplacePaymentValue": 2499,
                 *       "items": [
                 *         {
                 *           "id": "123456789abc",
                 *           "quantity": 1,
                 *           "seller": "seller-example",
                 *           "commission": 0,
                 *           "freightCommission": 0,
                 *           "price": 2499,
                 *           "bundleItems": [
                 *             {
                 *               "id": 12,
                 *               "quantity": 2
                 *             },
                 *             {
                 *               "id": 5,
                 *               "quantity": 1
                 *             }
                 *           ],
                 *           "itemsAttachment": [
                 *             {
                 *               "id": "attachment-1",
                 *               "name": "Product Manual",
                 *               "url": "https://example.com/manual.pdf"
                 *             }
                 *           ],
                 *           "attachments": [
                 *             {
                 *               "id": "attachment-2",
                 *               "name": "Product Image",
                 *               "url": "https://example.com/image.jpg"
                 *             }
                 *           ],
                 *           "priceTags": [
                 *             {
                 *               "identifier": "1234abc-5678b-1234c",
                 *               "isPercentual": false,
                 *               "name": "discount@name-1234abc-5678b-1234c",
                 *               "rawValue": 12,
                 *               "value": 1200
                 *             }
                 *           ],
                 *           "measurementUnit": "g",
                 *           "unitMultiplier": 1,
                 *           "isGift": false
                 *         }
                 *       ],
                 *       "paymentData": null,
                 *       "clientProfileData": {
                 *         "email": "customer@examplemail.com",
                 *         "firstName": "first-name",
                 *         "lastName": "last-name",
                 *         "documentType": "cpf",
                 *         "document": "123456789",
                 *         "phone": "+55110988887777",
                 *         "corporateName": null,
                 *         "tradeName": null,
                 *         "corporateDocument": null,
                 *         "stateInscription": null,
                 *         "corporatePhone": null,
                 *         "isCorporate": false
                 *       },
                 *       "shippingData": {
                 *         "address": {
                 *           "addressType": "residential",
                 *           "receiverName": "receiver-name",
                 *           "addressId": "Home",
                 *           "postalCode": "12345-000",
                 *           "city": "Rio de Janeiro",
                 *           "state": "Rio de Janeiro",
                 *           "country": "BRA",
                 *           "street": "Praia de Botafogo",
                 *           "number": "300",
                 *           "neighborhood": "Botafogo",
                 *           "complement": "3rd floor",
                 *           "reference": "Grey building",
                 *           "geoCoordinates": [
                 *             "49.334934",
                 *             "25.401705"
                 *           ]
                 *         },
                 *         "logisticsInfo": [
                 *           {
                 *             "itemIndex": 0,
                 *             "selectedSla": "Express",
                 *             "lockTTL": "8d",
                 *             "shippingEstimate": "7d",
                 *             "price": 1099,
                 *             "deliveryWindow": {
                 *               "startDateUtc": "2016-04-20T08:00:00+00:00",
                 *               "endDateUtc": "2016-04-20T12:00:00+00:00",
                 *               "listPrice": 10
                 *             }
                 *           }
                 *         ],
                 *         "updateStatus": "updated"
                 *       },
                 *       "marketingData": {
                 *         "utmSource": "Facebook",
                 *         "utmMedium": "CPC",
                 *         "utmCampaign": "Black friday",
                 *         "utmiPage": "utmi_page-example",
                 *         "utmiPart": "utmi_part-exmaple",
                 *         "utmiCampaign": "utmi_campaign-exmaple"
                 *       },
                 *       "openTextField": "open-text-example"
                 *     } */
                "application/json": components["schemas"]["orderPlacement"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseOrderPlacement"];
                };
            };
        };
    };
    "authorize-fulfillment": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Describes the type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel. */
                fulfillmentEndpoint: components["parameters"]["fulfillmentEndpoint"];
                /**
                 * @description Seller's order ID of the order ready for fulfillment. The seller can be a VTEX seller or an external one.
                 * @example 00-1268540501456-01
                 */
                sellerOrderId: components["parameters"]["sellerOrderId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["requestOrderId"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["repsonseOrderId"];
                };
            };
        };
    };
    "mkp-order-cancellation": {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description Describes the type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
            };
            path: {
                /** @description This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel. */
                fulfillmentEndpoint: components["parameters"]["fulfillmentEndpoint"];
                /** @description ID of the order being fulfilled. */
                orderId: components["parameters"]["orderId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "marketplaceOrderId": "1138342255777-01",
                 *       "marketplaceOrderGroup": "group-123",
                 *       "cancellationRequestId": "85835ab408514b52aa139e4236ce0c33",
                 *       "cancellationRequestDate": "2024-03-04T15:45:02.1306363+00:00",
                 *       "reason": "Out of stock",
                 *       "requestedByUser": true
                 *     } */
                "application/json": components["schemas"]["requestOrderId"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["repsonseOrderId"];
                };
            };
        };
    };
}
