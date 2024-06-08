export interface paths {
    "/api/orders/pvt/document/{orderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get order
         * @description Retrieves order details by searching a specific order ID.
         *
         *
        >If you wish to retrieve unmasked data, use the `reason` parameter.
         *
         *
        > The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
         *
         *
        > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
         *
         *
        > Throttling: Each account can make up to 5000 requests per minute.
         *
         *
        ## Request object has the following properties:
         *
         *     | Attribute    | Type        | Description |
         *     | --------------- |:---------:| --------------------------------------:|
         *     | `orderId` | string | Order Id |
         *
         *
         *     ## Response object has the following properties:
         *
         *
         *     | Attribute    | Type        | Description |
         *     | --------------- |:---------:| --------------------------------------:|
         *     | `affiliateId` | string | Seller Name who was responsible for the order |
         *     | `allowCancellation` | boolean | If Cancellation is allowed |
         *     | `allowEdition` | boolean | If Order Edition is allowed |
         *     | `approvedBy` | string | User who approved the order |
         *     | `authorizedDate` | string | Authorized Order Date |
         *     | `callCenterOperatorData` | string | Call Center Operator responsible for the order |
         *     | `cancelReason` | string | Cancel Reason |
         *     | `cancelledBy` | string | User who Cancelled the order |
         *     | `changesAttachment` | object | Change details object |
         *     | `changesData` | object | Array with each change |
         *     | `discountValue` | integer | Change Discount Value |
         *     | `incrementValue` | integer | Change Increment Value |
         *     | `itemsAdded` | object | Added items details |
         *     | `itemsRemoved` | object | Removed items details |
         *     | `id` | integer | Changed SKU ID |
         *     | `name` | string | Changed SKU Name |
         *     | `price` | integer | Changed SKU Price |
         *     | `quantity` | integer | Changed SKU Quantity |
         *     | `unitMultiplier` | integer | Changed SKU Unit Multiplier |
         *     | `reason` | string | Change Reason |
         *     | `receipt` | object | Change receipt details object |
         *     | `date` | string | Change receipt date |
         *     | `orderId` | string | Change receipt order Id |
         *     | `receipt` | object | Change receipt ID |
         *     | `id` | string | Object Id, expect value "changeAttachment" |
         *     | `clientProfileData` | object | Object with all Cliente Profile Data |
         *     | `corporateDocument` | string | Client Corporate Document |
         *     | `corporateName` | string | Client Corporate Name |
         *     | `corporatePhone` | string | Cliente Corporate Telephone |
         *     | `customerClass` | string | Customer class |
         *     | `document` | string | Client Document |
         *     | `documentType` | string | Client Document Type |
         *     | `email` | string | Client e-mail |
         *     | `firstName` | string | Client First Name |
         *     | `id` | string | Object ID, expected value "clientProfileData" |
         *     | `isCorporate` | string | If the Client is a Corporate Client |
         *     | `lastName` | string | Client Last Name|
         *     | `phone` | string | Client Telephone |
         *     | `stateInscription` | string | Client Corporate Inscription |
         *     | `tradeName` | string | Client Corporate Trade Name |
         *     | `userProfileId` | string | Client User Profile ID |
         *     | `commercialConditionData` | object | Commercial condition information, including `"Id"`, `"parentOrderId"`, and `"reason"` |
         *     | `creationDate` | string | Order Creation Date |
         *     | `customData` | object | Custom Data Object |
         *     | `customApps` | object | Custom apps details object |
         *     | `fields` | object | Custom app fields |
         *     | `id` | string | Custom App ID |
         *     | `major` | integer | Major |
         *     | `emailTracked` | string | Client Conversation Tracker email  |
         *     | `followUpEmail` | string | Responsible store e-mail |
         *     | `giftRegistryData` | object | Gift registry list information, including `"addressId"` (object), `"description"` (string), and `"giftRegistryId"` (string) |
         *     | `hostname` | string | Account hostname registered in License Manager |
         *     | `invoiceData` | object | Information pertinent to the order's invoice |
         *     | `invoicedDate` | string | Invoice Date |
         *     | `isCheckedIn` | boolean | True if order is from inStore |
         *     | `isCompleted` | boolean | True if the order is completed |
         *     | `items` | object | Order items object |
         *     | `additionalInfo` | string | Order item additional info |
         *     | `brandId` | string | Brand ID |
         *     | `brandName` | string | Brand name |
         *     | `categoriesIds` | string | Item category ID |
         *     | `commercialConditionId` | string | Invoice date |
         *     | `dimension` | object | Item dimension object |
         *     | `cubicweight` | number | Item cubic weight |
         *     | `height` | number | Item height |
         *     | `length` | number | Item length |
         *     | `weight` | number | Item weight |
         *     | `width` | number | Item width |
         *     | `offeringInfo` | string | Extra information on offering |
         *     | `offeringType` | string | Offering type |
         *     | `offeringTypeId` | string | ID of offering type |
         *     | `productClusterId` | string | All releated product clusters |
         *     | `attachments` | object | Attachents Array |
         *     | `content` | object | Attachment Content Custom Field |
         *     | `name` | string | Attachment Name |
         *     | `bundleItems` | object | Invoice date |
         *     | `commission` | string | Comission value registered to Seller |
         *     | `components` | object | If item is a kit, contains components information |
         *     | `detailUrl` | string | Product Slug URL |
         *     | `ean` | string | SKU EAN |
         *     | `freightCommission` | integer | Comission value registered to seller |
         *     | `id` | string | SKU Id |
         *     | `imageUrl` | string | SKU Image URL |
         *     | `isGift` | string | If this item is a gift in order context |
         *     | `itemAttachment` | object | Attachment Object |
         *     | `content` | object | Attachment Content Array |
         *     | `name` | string | Attachment Name |
         *     | `listPrice` | integer | Item List Price |
         *     | `lockId` | string | Reservation ID |
         *     | `manualPrice` | string | Manually inserted price, if there is one. |
         *     | `measurementUnit` | string | Item measurement unit |
         *     | `name` | string | Item name |
         *     | `offerings` | object | Offerings information |
         *     | `params` | object | "ContextParameter" hashset with `"name"` and `"value"` |
         *     | `preSaleDate` | string | Item pre sale date |
         *     | `price` | integer | Item Price |
         *     | `items[].priceDefinition`                        | Object   | Price information for all units of a specific item.                                                                                                                  |
         *     | `items[].priceDefinition.total`                  | Integer  | Total value for all units of the item in cents.                                                                                                                      |
         *     | `items[].priceDefinition.calculatedSellingPrice` | Integer  | Item's calculated unitary selling price in cents.                                                                                                                    |
         *     | `items[].priceDefinition.sellingPrices`          | Array    | Array of objects, each containing `value` (in cents) and `quantity` for the different rounding instances that can be combined to form the correctly rounded `total`. |
         *     | `priceTags` | object | Object with all price modifiers |
         *     | `identifier` | string | Price Tag ID |
         *     | `isPercentual` | boolean | Indicates whether the price tag is a percentual modifier |
         *     | `name` | string | Price tag name |
         *     | `rawValue` | string | Price tag raw value |
         *     | `value` | string | Price tag value |
         *     | `priceValidUntil` | string | Price expiration date |
         *     | `productId` | string | Item product ID |
         *     | `quantity` | integer | Item quantity |
         *     | `refId` | string | Item reference ID |
         *     | `rewardValue` | integer | Item reward value |
         *     | `seller` | string | Item seller |
         *     | `sellerSku` | string | Invoice Date |
         *     | `sellingPrice` | integer | Item selling price. For more accurate information, see the `priceDefinition` field |
         *     | `shippingPrice` | string | Item Shipping Price |
         *     | `tax` | integer | Item Tax |
         *     | `taxCode` | string | Item Tax Code |
         *     | `uniqueId` | string | Item Order Unique ID |
         *     | `unitMultiplier` | integer | Item Unit Multipler |
         *     | `lastChange` | string | Order Last Change Date |
         *     | `lastMessage` | string | initial excerpt from last message sent to the customer |
         *     | `marketingData` | string | Marketing Data Object |
         *     | `coupon` | string | Order Disccount Coupon |
         *     | `id` | string |  Object ID, expected value "marketingData" |
         *     | `marketingTags` | object | Marketing Tags Array |
         *     | `utmCampaign` | string | UTM Campaign Parameters |
         *     | `utmMedium` | string | UTM Medium Parameters |
         *     | `utmPartner` | string | UTM Source Parameters |
         *     | `utmSource` | string | UTM Source Parameters|
         *     | `utmiCampaign` | string | UTMI Campaign Internal Parameters |
         *     | `utmiPart` | string | UTMI Part Internal Parameters |
         *     | `utmipage` | string | UTMI Page Internal Parameters |
         *     | `marketplace` | object | Marketplace Details Object |
         *     | `baseURL` | string | Marketplace Base URL |
         *     | `isCertified` | string | If is a Certified Marketplace |
         *     | `name` | string | Marketplace Name |
         *     | `marketplaceItems` | object | Marketplace Details Object |
         *     | `marketplaceOrderId` | string | Marketplace Order Id |
         *     | `marketplaceServicesEndpoint` | string | Marketplace Services Endpoint |
         *     | `merchantName` | string | Merchant Name |
         *     | `openTextField` | object | Open Text Field Object |
         *     | `value` | string | Open Text Field Value |
         *     | `orderFormId` | string | Order Form Id |
         *     | `orderGroup` | string | Order Group Id |
         *     | `orderId` | string | Order Id |
         *     | `origin` | string | Order Origin: "Marketplace", "Fulfillment", or "Chain" (for the third level in a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4?&utm_source=autocomplete#) purchase). |
         *     | `packageAttachment` | object | Package Object |
         *     | `packages` | object | Packages Details Object, populated after order invoiced |
         *     | `cfop` | string | Fiscal code for operations and installments |
         *     | `courier` | string | Package selected Courier |
         *     | `courierStatus` | string | Package Tracking Status |
         *     | `data` | object | Package Tracking Timeline |
         *     | `finished` | string | If the delivery are finished |
         *     | `status` | string | Courier Status |
         *     | `embeddedInvoice` | string | XML of the invoice |
         *     | `invoiceKey` | string | Invoice Credencial Key |
         *     | `invoiceNumber` | string | Package Invoice Number |
         *     | `invoiceUrl` | string | Package Invoice URL |
         *     | `invoiceValue` | string | Package Invoice Value |
         *     | `issuanceDate` | string | Package Issuance Date |
         *     | `items` | string | Items Package Array |
         *     | `description` | string | Item Desciprtion |
         *     | `itemIndex` | string | Item Index |
         *     | `price` | string | Item Price |
         *     | `quantity` | string | Item Quantity |
         *     | `unitMultiplier` | string | Unit Multiplier |
         *     | `trackingNumber` | string | Package Tracking Number |
         *     | `trackingUrl` | string | Tracking Order URL |
         *     | `type` | string | Invoice Type, expected values "Output" and "Input" |
         *     | `paymentData` | object | Payment Object |
         *     | `transactions` | object | Transactions Object |
         *     | `isActive` | boolean | If the payment is Active |
         *     | `merchantName` | string | Merchant Name|
         *     | `payments` | object | Payment Object |
         *     | `cardHolder` | string | Payment Card Holder |
         *     | `connectorResponses` | object | Connector Responses Object |
         *     | `billingAddress` | object | Billing Address information |
         *     | `Message` | string | Connector Responses Message |
         *     | `ReturnCode` | string | Connector Return Code |
         *     | `Tid` | string | Connector Transaction ID |
         *     | `acquirer` | string | Connector acquirer |
         *     | `authId` | string | Connector authorization ID |
         *     | `dueDate` | string | Payment due date |
         *     | `firstDigits` | string | Payment card first digits |
         *     | `giftCardCaption` | string | Gift card caption |
         *     | `giftCardId` | string | Gift card ID |
         *     | `giftCardName` | string | Gift card name |
         *     | `group` | string | Payment group |
         *     | `id` | string | Payment ID |
         *     | `installments` | string | Payment installments quantity |
         *     | `lastDigits` | string | Payment card last digits |
         *     | `paymentSystem` | string | Payment system type ID |
         *     | `paymentSystemName` | string | Payment system name |
         *     | `redemptionCode` | string | Gift card redemption code |
         *     | `referenceValue` | string | Payment reference value |
         *     | `tid` | string | Payment transaction ID |
         *     | `url` | string | Payment URL |
         *     | `value` | string | Payment value with interest if it applies |
         *     | `transactionId` | string | Transaction Id |
         *     | `ratesAndBenefitsData` | string | Rates and Benefits Data Object |
         *     | `id` | string |  Object ID, expected value "ratesAndBenefitsData" |
         *     | `rateAndBenefitsIdentifiers` | object | Rates and Benefits Details Object |
         *     | `additionalInfo` | string |  Rates and Benefits Additional Info |
         *     | `description` | string | Rates and Benefits Description |
         *     | `featured` | string |  If is allowed to acumulate the Rates and Benefits |
         *     | `matchedParameters` | object | March Parameters Array |
         *     | `name` | string |  Rates and Benefits Name |
         *     | `roundingError` | integer | Rounding Error Total Amount  |
         *     | `salesChannel` | string | Order Sales Channel Id |
         *     | `sellerOrderId` | string | Order Seller Id |
         *     | `sellers` | object | Sellers Array |
         *     | `id` | string | Seller Id |
         *     | `logo` | string | URL Seller Logo |
         *     | `name` | string | Seller Name |
         *     | `sequence` | string | Order Sequence ID |
         *     | `shippingData` | object | Shipping Data Object |
         *     | `address` | object | Shipping Address |
         *     | `addressId` | string | Shipping Address Id |
         *     | `addressType` | string | Shipping Address Type |
         *     | `city` | string | Shipping City |
         *     | `complement` | string | Shipping Complement |
         *     | `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
         *     | `geoCoordinates` | object | Shipping Geo Coordinates Array |
         *     | `neighborhood` | string | Shipping Neighborhood |
         *     | `number` | string | Shipping Number |
         *     | `postalCode` | string | Shipping Postal Code |
         *     | `receiverName` | string | Shipping Receiver Name |
         *     | `reference` | string | Shipping Reference |
         *     | `state` | string | Shipping State |
         *     | `street` | string | Shipping Street |
         *     | `id` | string | Object ID, expected value "shippingData"|
         *     | `logisticsInfo` | object | Logistics Info Object |
         *     | `addressId` | string | Adress Id |
         *     | `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
         *     | `deliveryCompany` | string | Courier Company Name |
         *     | `deliveryIds` | object | Delivery Ids Object |
         *     | `courierId` | string | Courier Id |
         *     | `courierName` | string | Courier Name |
         *     | `dockId` | string | Releated Dock Id |
         *     | `quantity` | integer | Items Quantity |
         *     | `warehouseId` | string | Releated Warehouse Id |
         *     | `deliveryWindow` | object | Delivery Window Object |
         *     | `endDateUtc` | string | Delivery Date End in UTC  |
         *     | `price` | string | Delivery Window Cost |
         *     | `startDateUtc` | string | Delivery Date Starts in UTC |
         *     | `itemIndex` | integer | Logistic Info Item Index |
         *     | `listPrice` | integer | Logistic Info Item List Price |
         *     | `lockTTL` | string | Stock reservation waiting period |
         *     | `pickupStoreInfo` | object | Pickup Store Info Object |
         *     | `additionalInfo` | string | Pickup Store Additional Info |
         *     | `address` | string | Pickup Store Address |
         *     | `dockId` | string | Pickup Store Releated Dock Id |
         *     | `friendlyName` | string | Pickup Store Friendly Name |
         *     | `isPickupStore` | boolean | If is a Pickup Store |
         *     | `polygonName` | string | Releated Polygom Name |
         *     | `price` | integer | Logistic Info Item Price |
         *     | `selectedSla` | string | Selected SLA |
         *     | `sellingPrice` | integer | Logistic Info Item Selling Price |
         *     | `shippingEstimate` | string | Estimate Shipping Duration |
         *     | `shippingEstimateDate` | string | Estimate Shipping Date |
         *     | `shipsTo` | object | Shipping Country in ISO 3166 ALPHA-3 abbreviation |
         *     | `slas` | object | SLAs Object |
         *     | `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
         *     | `deliveryWindow` | object | Delivery Window Object |
         *     | `endDateUtc` | string | Delivery Date End in UTC  |
         *     | `price` | string | Delivery Window Cost |
         *     | `startDateUtc` | string | Delivery Date Starts in UTC |
         *     | `id` | string | SLA Id |
         *     | `pickupStoreInfo` | object | Pickup Store Details Object |
         *     | `additionalInfo` | string | Pickup Store Additional Info |
         *     | `address` | string | Pickup Store Address |
         *     | `dockId` | string | Pickup Store releated Dock Id  |
         *     | `friendlyName` | string | Pickup Store Friendly Name |
         *     | `isPickupStore` | boolean | If is a Pickup Store |
         *     | `polygonName` | string | Releated Polygon Name |
         *     | `price` | integer | SLA Price |
         *     | `shippingEstimate` | string | SLA Shipping Estimate |
         *     | `selectedAddresses` | object | Selected Address Details Object |
         *     | `addressId` | string | Shipping Address Id |
         *     | `addressType` | string | Shipping Address Type |
         *     | `city` | string | Shipping City |
         *     | `complement` | string | Shipping Complement |
         *     | `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
         *     | `geoCoordinates` | object | Shipping Geo Coordinates Array |
         *     | `neighborhood` | string | Shipping Neighborhood |
         *     | `number` | string | Shipping Number |
         *     | `postalCode` | string | Shipping Postal Code |
         *     | `receiverName` | string | Shipping Receiver Name |
         *     | `reference` | string | Shipping Reference |
         *     | `state` | string | Shipping State |
         *     | `street` | string | Shipping Street |
         *     | `trackingHints` | array | Array of tracking hint objects, containing `"courierName"`, `"trackingId"`, `"trackingLabel"`, and `"trackingUrl"` |
         *     | `status` | string | Order Status |
         *     | `statusDescription` | string | Status Description |
         *     | `storePreferencesData` | object | Store Preferences Data Object |
         *     | `countryCode` | string | Country Code in ISO 3166 ALPHA-3 abbreviation |
         *     | `currencyCode` | string | Currency Code in ISO 4217  |
         *     | `currencyFormatInfo` | object | Currency Format Info Object |
         *     | `CurrencyDecimalDigits` | integer | Currency Decimal Digits |
         *     | `CurrencyDecimalSeparator` | string | Currency Decimal Separator |
         *     | `CurrencyGroupSeparator` | string | Currency Group Separator |
         *     | `CurrencyGroupSize` | integer | Currency Group Size |
         *     | `StartsWithCurrencySymbol` | boolean | If Starts With Currency Symbol |
         *     | `currencyLocale` | integer | LCID Decimal |
         *     | `currencySymbol` | string | Currency Symbol |
         *     | `timeZone` | string | Order Time Zone |
         *     | `totals` | object | Totals Object |
         *     | `id` | string | Totals Ids, expected values: "Items", "Discounts", "Shipping" and "Tax" |
         *     | `name` | string | Totals ID Description |
         *     | `value` | integer | Totals Value |
         *     | `value` | integer | Order Value |
         *
         */
        get: operations["GetOrder2"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/extendsearch/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List orders
         * @description Retrieves a list of orders according to the filters described below.
         *
         *
        > This endpoint returns masked order data.
         *
         *
        > This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) for this purpose.
         *
         *
        This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
         *
         *
        > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
         *
         *
        ## Do not use request for integrations
         *
        > This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies or become unavailable in periods of peak order volume. In other words, **order integrations built with the List orders endpoint are not reliable** and **will not be supported**. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
         *
         *
        ## Throtling
         *
        Each account can make up to 5000 requests per minute.
         *
         *
        ## Request parameters allowed
         *
         *
        | Attribute    | Type        | Description |
         *     | --------------- |:---------:| -------------------------------------------------------------------------------------------:|
         *     | `orderBy` | string | Order Field and Order Type concatenated `orderBy={{OrderField}},{{OrderType}}`  |
         *     | `OrderField` | string | Order Field expected values: `creationDate`,`orderId`,`items`,`totalValue` and `origin` |
         *     | `OrderType` | string | Order Type expected values: `asc` and `desc`  |
         *
         *
         *     ## Sorting Examples
         *
         *
         *     CreationDate:
         *
         *         `/api/oms/pvt/orders?orderBy=creationDate,desc`
         *
         *
         *     OrderID:
         *
         *         `/api/oms/pvt/orders?orderBy=orderId,desc`
         *
         *
         *     Items:
         *
         *         `/api/oms/pvt/orders?orderBy=items,asc`
         *
         *
         *     TotalValue:
         *
         *         `/api/oms/pvt/orders?orderBy=totalValue,desc`
         *
         *
         *     Origin:
         *
         *         `/api/oms/pvt/orders?orderBy=origin,asc`
         *
         *
         *
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `page` | integer | Page Number  |
         *
         *     ## Pagination Examples:
         *
         *         `/api/oms/pvt/orders?page=3`
         *
         *
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `per_page` | integer | Quantity orders per page  |
         *
         *     Quantity per Page Examples:
         *
         *         `/api/oms/pvt/orders?per_page=15`
         *
         *
         *
         *
         *
         *     <div class="alert alert-info">Pagination Limit: The limit of pages that can be requested is 30.
         *     </div>
         *
         *
         *
         *     ## Time zone query
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `utc` | integer | Time Zone. By including this parameter alone in your query, the call will not convert the UTC nor show the number of orders set for that UTC. To filter orders with the desired UTC, you must also modify date and time in the `f_creationDate=creationDate:` parameter.  |
         *
         *     Time Zone Example:
         *
         *         `/api/oms/pvt/orders?utc=-0200`
         *
         *
         *
         *
         *     ## Request filters
         *
         *
         *     ## Fulltext
         *
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `q` | string | Fulltext accepts Order Ids, Client E-mail, Client Document and Client Name  |
         *
         *     > The `+` caracter isn't allowed in Fulltext Search
         *
         *
         *     Fulltext filter Examples:
         *
         *     OrderID:
         *
         *         `/api/oms/pvt/orders?q=v212333lux-02`
         *
         *
         *     Email:
         *
         *         `/api/oms/pvt/orders?q=rodrigo.cunha@vtex.com`
         *
         *
         *     Document:
         *
         *         `/api/oms/pvt/orders?q=21133355524`
         *
         *
         *     ClientName:
         *
         *         `/api/oms/pvt/orders?q=Cunha`
         *
         *
         *
         *
         *     ## Shipping Estimate
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_shippingEstimate` | string | Concatened value of quantity days and sufix `.days`  |
         *
         *
         *
         *
         *     Shipping Estimate filter Examples:
         *
         *
         *     Next 7 days:
         *
         *         `/api/oms/pvt/orders?f_shippingEstimate=7.days`
         *
         *
         *     Tomorrow:
         *
         *         `/api/oms/pvt/orders?f_shippingEstimate=1.days`
         *
         *
         *     Today:
         *
         *         `/api/oms/pvt/orders?f_shippingEstimate=0.days`
         *
         *
         *     Late:
         *
         *         `/api/oms/pvt/orders?f_shippingEstimate=-1.days`
         *
         *
         *
         *
         *     ## Invoiced Date
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_invoicedDate` | string | Concatened value sufix `invoicedDate` and range date in Timestamp format  |
         *
         *
         *
         *     Invoiced Date filter Examples:
         *
         *     1 Day:
         *
         *         `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
         *
         *
         *     1 Month:
         *
         *         `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
         *
         *
         *     1 Year:
         *
         *         `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
         *
         *
         *
         *     ## Order Date
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_creationDate` | string | Concatened value suffix `creationDate` and range date in Timestamp format  |
         *
         *
         *
         *     Order Date filter Examples:
         *
         *     1 Day:
         *
         *         `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
         *
         *
         *     1 Month:
         *
         *         `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
         *
         *
         *     1 Year:
         *
         *         `/api/oms/pvt/orders?f_creationDate=creationDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
         *
         *
         *
         *
         *     ## Authorized Date
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_authorizedDate` | string | Concatened value suffix `authorizedDate` and range date in Timestamp format  |
         *
         *
         *
         *     Authorized Date filter Examples:
         *
         *     1 Day:
         *
         *         `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
         *
         *
         *     1 Month:
         *
         *         `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
         *
         *
         *     1 Year:
         *
         *         `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
         *
         *
         *
         *
         *     ## UTMs
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_UtmSource` | string | UTM Source value  |
         *
         *
         *
         *     Channels filter Examples:
         *
         *         `/api/oms/pvt/orders?f_UtmSource=buscape_campaign`
         *
         *
         *
         *
         *     ## Seller
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_sellerNames` | string | Seller Name value  |
         *
         *
         *
         *     Seller filter Examples:
         *
         *         `/api/oms/pvt/orders?f_sellerNames=Fast+Shop`
         *
         *
         *
         *
         *     ## Call Center Operator
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_callCenterOperatorName` | string | Call Center Operator Value  |
         *
         *
         *
         *     Call Center Operator filter Examples:
         *
         *         `/api/oms/pvt/orders?f_callCenterOperatorName=Operator%20Name`
         *
         *
         *
         *
         *     ## Sales Channel Name
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_salesChannel` | string | Sales Channel Name Value  |
         *
         *
         *
         *     Sales Channel Name filter Examples:
         *
         *         `/api/oms/pvt/orders?f_salesChannel=Main`
         *
         *
         *
         *
         *
         *     ## Sales Channel ID
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `salesChannelId` | string | Sales Channel ID Value  |
         *
         *
         *
         *     Sales Channel ID filter Examples:
         *
         *         `/api/oms/pvt/orders?salesChannelId=1`
         *
         *
         *
         *
         *
         *     ## Affiliate ID
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_affiliateId` | string | Affiliate ID Value  |
         *
         *
         *
         *     Affiliate ID filter Examples:
         *
         *         `/api/oms/pvt/orders?f_affiliateId=WLM`
         *
         *
         *
         *
         *     ## Order Status
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_status` | string | Order Status Value  |
         *
         *
         *
         *     | Order Status avaible to filter    |
         *     | --------------------- |
         *     | `waiting-for-sellers-confirmation` |
         *     | `payment-pending` |
         *     | `payment-approved` |
         *     | `ready-for-handling` |
         *     | `handling` |
         *     | `invoiced` |
         *     | `canceled` |
         *
         *
         *     Order Status filter Examples:
         *
         *         `/api/oms/pvt/orders?f_status=ready-for-handling`
         *
         *
         *
         *
         *     ## Order Status Description
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_statusDescription` | string | Order Status Description Value  |
         *
         *
         *
         *
         *
         *     | Order Status Description avaible to filter |
         *     | --------------------- |
         *     | `Aguardando+autorização+para+despachar` |
         *     | `Pagamento+Pendente` |
         *     | `Pagamento+Aprovado` |
         *     | `Pronto+para+o+manuseio` |
         *     | `Preparando+Entrega` |
         *     | `Faturado` |
         *     | `Cancelado` |
         *
         *     Order Status Description filter Examples:
         *
         *         `/api/oms/pvt/orders?f_statusDescription=Pronto+para+o+manuseio`
         *
         *
         *
         *
         *
         *     ## Order Situation
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `incompleteOrders` | boolean | If is a Incomplete Order  |
         *
         *
         *     > know more about [Incomplete Orders in VTEX Help](https://help.vtex.com/en/tutorial/understanding-incomplete-orders)
         *
         *     Order Situation filter Examples:
         *
         *         `/api/oms/pvt/orders?incompleteOrders=true`
         *
         *
         *
         *
         *
         *     ## Error Situation
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `incompleteOrders` | boolean | Error Situation Type  |
         *
         *
         *
         *     | Error Situation Values avaible to filter |
         *     | ------- |
         *     | `all` |
         *     | `perm` |
         *     | `temp` |
         *
         *
         *     Error Situation filter Examples:
         *
         *         `/api/oms/pvt/orders?filterError=all`
         *
         *
         *
         *
         *
         *
         *     ## Payment Type Name
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_paymentNames` | string | Payment Type Value  |
         *
         *
         *
         *     Payment Type Name filter Examples:
         *
         *         `/api/oms/pvt/orders?f_paymentNames=Visa`
         *
         *
         *
         *
         *
         *     ## Rates and Benefits Name
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `f_RnB` | string | Rates and Benefits Name  |
         *
         *
         *
         *     Rates and Benefits filter Examples:
         *
         *         `/api/oms/pvt/orders?f_RnB="Free+Shipping"`
         *
         *
         *
         *
         *     ## Search Field
         *
         *     | Attribute    | Type      | Description |
         *     | ------------ |:---------:| -----------:|
         *     | `searchField` | string | Affiliate ID Value  |
         *     | `sku_Ids&sku_Ids` | integer | SKU ID  |
         *     | `listId&listId` | integer | Gift List ID  |
         *     | `tid&tid` | integer | Transaction ID (TID)  |
         *     | `pci_tid&pci_tid` | integer | PCI Connector's Transaction ID (TID)  |
         *     | `paymentId&paymentId` | integer | Payment ID (PID)  |
         *     | `nsu&nsu` | integer | Connector's NSU  |
         *
         *
         *
         *     Search Field filter Examples:
         *
         *     SKU ID:
         *
         *         `/api/oms/pvt/orders?searchField=sku_Ids&sku_Ids=11223`
         *
         *
         *
         *     Gift List ID:
         *
         *         `/api/oms/pvt/orders?searchField=listId&listId=11223`
         *
         *
         *
         *     Transaction ID (TID):
         *
         *         `/api/oms/pvt/orders?searchField=tid&tid=54546300238810034995829230012`
         *
         *
         *
         *     PCI Connector's Transaction ID (TID):
         *
         *         `/api/oms/pvt/orders?searchField=pci_tid&pci_tid=7032909234899834298423209`
         *
         *
         *
         *     Payment ID (PID):
         *
         *         `/api/oms/pvt/orders?searchField=paymentId&paymentId=2`
         *
         *
         *
         *     Connector's NSU:
         *
         *         `/api/oms/pvt/orders?searchField=nsu&nsu=2437281`
         *     \n\r\n\r## Response objects\n\r\n\r,
         *     **Response object has the following properties:**
         *
         *
         *     | Attribute    | Type        | Description |
         *     | --------------- |:---------:| --------------------------------------:|
         *     | `list` | object | Order List Object |
         *     | `shippingEstimateDate` | string | Estimate Shipping Date |
         *     | `affiliateId` | string | Seller Name who was responsible for the order |
         *     | `authorizedDate` | string | Authorized Order Date |
         *     | `callCenterOperatorData` | string | Call Center Operator responsible for the order |
         *     | `name` | string | Client Name|
         *     | `creationDate` | string | Order Creation Date |
         *     | `currencyCode` | string | Currency Code in ISO 4217  |
         *     | `items` | object | Obsolete Field  |
         *     | `lastMessageUnread` | string | Last sent transactional message  |
         *     | `listId` | string | Releated Gift List Id |
         *     | `listType` | string | Releated Gift List Type |
         *     | `marketplaceOrderId` | string | Marketplace Order Id |
         *     | `orderId` | string | Change receipt order Id |
         *     | `orderIsComplete` | boolean | If is a Order Completed |
         *     | `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
         *     | `paymentNames` | string | Payment System Name |
         *     | `salesChannel` | string | Order Sales Channel Id |
         *     | `sequence` | string | Order Sequence ID |
         *     | `status` | string | Order Status |
         *     | `statusDescription` | string | Status Description |
         *     | `totalItems` | integer | Total Order Items |
         *     | `totalValue` | integer | Total Value Amount |
         *     | `workflowInErrorState` | boolean | If is a Work Flow Error |
         *     | `workflowInRetry` | boolean | If is in a Work Flow Retry |
         *     | `paging` | object | Paging Details Object |
         *     | `pages` | integer | Paging Total Pages |
         *     | `perPage` | integer | Paging total per Page |
         *     | `total` | integer | Total Result |
         *     | `stats` | object | Results segmented by `totalItems` and `totalValue` |
         *     | `totalItems` | integer | Total Order Items segmeted by `currencyCode` and `origin`|
         *     | `totalValue` | integer | Total Value Amount segmeted by `currencyCode` and `origin`|
         *     | `currencyCode` | string | Currency Code in ISO 4217  |
         *     | `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
         *     | `Count` | integer | Orders Count |
         *     | `Facets` | object | Grouping Object |
         *     | `Max` | object | Paging Details Object |
         *     | `Mean` | object | Paging Details Object |
         *     | `Min` | object | Paging Details Object |
         *     | `Missing` | object | Paging Details Object |
         *     | `StdDev` | object | Paging Details Object |
         *     | `Sum` | object | Paging Details Object |
         *     | `SumOfSquares` | object | Paging Details Object |
         */
        post: operations["ListOrders2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/pvt/document/{orderId}/actions/start-handling": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start handling order
         * @description Change the status of an order to indicate that is is in `handling`.
         *
         *
        > Expect a `status 204` response with no content in case of a successful request.
         *
         *
        > The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
         */
        post: operations["StartHandling2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/pvt/document/{orderId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel order
         * @description You should use this endpoint to cancel an order by its `orderId`.
         *
         *     A common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.
         *
         *     You should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.
         *
         *     Be aware that if the order status is already `Invoiced`, the order can only be canceled if - before using this request - you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).
         *
         *
        > The `Cancel order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
         */
        post: operations["CancelOrder2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/pvt/document/{orderId}/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Order invoice notification
         * @description Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.
         *
         *     We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.
         *
         *     It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.
         *
         *     Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.
         *
         *
        > The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
         */
        post: operations["InvoiceNotification2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/orders/pvt/document/{orderId}/payment/{paymentId}/notify-payment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send payment notification
         * @description Send a payment notification of a given order, by order ID and payment ID.
         *
         *
        > The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
         *
         *
        > Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).
         *
         *
         *     ## Request body properties
         *
         *     | Attribute    | Type        | Description |
         *     | --------------- |:---------:| --------------------------------------:|
         *     | `orderId` | string | Order Id |
         *     | `paymentId` | string | Payment ID |
         */
        post: operations["SendPaymentNotification2"];
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
         * ClientProfileData
         * @example {
         *       "id": "clientProfileData",
         *       "email": "rodrigo.cunha@vtex.com.br",
         *       "firstName": "Rodrigo",
         *       "lastName": "VTEX",
         *       "documentType": "cpf",
         *       "document": "11047867702",
         *       "phone": "+5521972321094",
         *       "corporateName": null,
         *       "tradeName": null,
         *       "corporateDocument": null,
         *       "stateInscription": null,
         *       "corporatePhone": null,
         *       "isCorporate": false,
         *       "userProfileId": "5a3692de-358a-4bea-8885-044bce33bb93",
         *       "customerClass": null
         *     }
         */
        ClientProfileData: {
            /** @description Client ID. */
            id: string;
            /** @description Client email address. */
            email: string;
            /** @description Client first name. */
            firstName: string;
            /** @description Client last name. */
            lastName: string;
            /** @description Client document type. */
            documentType: string;
            /** @description Client document. */
            document: string;
            /** @description Client telephone number. */
            phone: string;
            /** @description Company name, in case client is corporate. */
            corporateName: string | null;
            /** @description Company trade name, in case client is corporate. */
            tradeName: string | null;
            /** @description Company document, in case client is corporate. */
            corporateDocument: string | null;
            /** @description Company state inscription, in case client is corporate. */
            stateInscription: string | null;
            /** @description Company telephone number, in case client is corporate. */
            corporatePhone: string | null;
            /** @description Indicates whether client is corporate. */
            isCorporate: boolean;
            /** @description User profile ID. */
            userProfileId: string;
            /** @description Customer class. */
            customerClass: string | null;
        };
        /**
         * RatesAndBenefitsData
         * @example {
         *       "id": "ratesAndBenefitsData",
         *       "rateAndBenefitsIdentifiers": []
         *     }
         */
        RatesAndBenefitsData: {
            /**
             * @description Field ID.
             * @default ratesAndBenefitsData
             */
            id: string;
            /** @description Array with rates and benefits IDs. */
            rateAndBenefitsIdentifiers: string[];
        };
        /**
         * ShippingData
         * @example {
         *       "id": "shippingData",
         *       "address": {
         *         "addressType": "residential",
         *         "receiverName": "Rodrigo Cunha",
         *         "addressId": "-1425945657910",
         *         "postalCode": "22250-040",
         *         "city": "Rio de Janeiro",
         *         "state": "RJ",
         *         "country": "BRA",
         *         "street": "Praia de Botafogo",
         *         "number": "300",
         *         "neighborhood": "Botafogo",
         *         "complement": "3",
         *         "reference": null,
         *         "geoCoordinates": []
         *       },
         *       "logisticsInfo": [
         *         {
         *           "itemIndex": 0,
         *           "selectedSla": "Normal",
         *           "lockTTL": "10d",
         *           "price": 1160,
         *           "listPrice": 1160,
         *           "sellingPrice": 1160,
         *           "deliveryWindow": null,
         *           "deliveryCompany": "Todos os CEPS",
         *           "shippingEstimate": "5bd",
         *           "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
         *           "slas": [
         *             {
         *               "id": "Normal",
         *               "name": "Normal",
         *               "shippingEstimate": "5bd",
         *               "deliveryWindow": null,
         *               "price": 1160,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": null
         *             },
         *             {
         *               "id": "Expressa",
         *               "name": "Expressa",
         *               "shippingEstimate": "5bd",
         *               "deliveryWindow": null,
         *               "price": 1160,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": null
         *             },
         *             {
         *               "id": "Quebra Kit",
         *               "name": "Quebra Kit",
         *               "shippingEstimate": "2bd",
         *               "deliveryWindow": null,
         *               "price": 1392,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": null
         *             },
         *             {
         *               "id": "Sob Encomenda",
         *               "name": "Sob Encomenda",
         *               "shippingEstimate": "32bd",
         *               "deliveryWindow": null,
         *               "price": 1392,
         *               "deliveryChannel": "delivery",
         *               "pickupStoreInfo": {
         *                 "additionalInfo": null,
         *                 "address": null,
         *                 "dockId": null,
         *                 "friendlyName": null,
         *                 "isPickupStore": false
         *               },
         *               "polygonName": null
         *             }
         *           ],
         *           "shipsTo": [
         *             "BRA"
         *           ],
         *           "deliveryIds": [
         *             {
         *               "courierId": "197a56f",
         *               "courierName": "Todos os CEPS",
         *               "dockId": "1",
         *               "quantity": 1,
         *               "warehouseId": "1_1"
         *             }
         *           ],
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "addressId": "-1425945657910",
         *           "polygonName": null
         *         }
         *       ],
         *       "contactInformation": [
         *         {
         *           "id": "1",
         *           "email": "paTest@mailinator.com",
         *           "firstName": "Postman",
         *           "lastName": "Test",
         *           "document": "01675916306",
         *           "phone": "+552222222222",
         *           "documentType": "cpf"
         *         }
         *       ],
         *       "trackingHints": null,
         *       "selectedAddresses": [
         *         {
         *           "addressId": "-1425945657910",
         *           "addressType": "residential",
         *           "receiverName": "Rodrigo Cunha",
         *           "street": "Praia de Botafogo",
         *           "number": "518",
         *           "complement": "10",
         *           "neighborhood": "Botafogo",
         *           "postalCode": "22250-040",
         *           "city": "Rio de Janeiro",
         *           "state": "RJ",
         *           "country": "BRA",
         *           "reference": null,
         *           "geoCoordinates": []
         *         }
         *       ]
         *     }
         */
        ShippingData: {
            /**
             * @description Field ID.
             * @default shippingData
             */
            id: string;
            address: components["schemas"]["Address"];
            /** @description Array with logistics information of each item in the order. */
            logisticsInfo: components["schemas"]["LogisticsInfo"][];
            /** @description Array with contact information. */
            contactInformation?: {
                /** @description Contact unique identifier. */
                id?: string;
                /** @description Contact email. */
                email?: string;
                /** @description Contact first name. */
                firstName?: string;
                /** @description Contact last name. */
                lastName?: string;
                /** @description Contact document number. */
                document?: string;
                /** @description Contact phone number. */
                phone?: string;
                /** @description Contact document type. */
                documentType?: string;
            }[];
            /** @description Tracking hints. */
            trackingHints: string | null;
            /** @description Array of the selected addresses' information. */
            selectedAddresses: components["schemas"]["SelectedAddress"][];
        };
        /**
         * Address
         * @example {
         *       "addressType": "residential",
         *       "receiverName": "Rodrigo Cunha",
         *       "addressId": "-1425945657910",
         *       "postalCode": "22250-040",
         *       "city": "Rio de Janeiro",
         *       "state": "RJ",
         *       "country": "BRA",
         *       "street": "Praia de Botafogo",
         *       "number": "300",
         *       "neighborhood": "Botafogo",
         *       "complement": "3",
         *       "reference": null,
         *       "geoCoordinates": [],
         *       "contactId": "1"
         *     }
         */
        Address: {
            /** @description Address type. */
            addressType: string;
            /** @description Address receiver name. */
            receiverName: string;
            /** @description Address ID. */
            addressId: string;
            /** @description Address postal code. */
            postalCode: string;
            /** @description Address city. */
            city: string;
            /** @description Address state. */
            state: string;
            /** @description Address country. */
            country: string;
            /** @description Address street. */
            street: string;
            /** @description Address number. */
            number: string;
            /** @description Address neighborhood. */
            neighborhood: string;
            /** @description Address complement. */
            complement: string;
            /** @description Address reference. */
            reference: string | null;
            /** @description Geolocation coordinates. */
            geoCoordinates: string[];
            /** @description Contact unique identifier. */
            contactId?: string;
        };
        /**
         * LogisticsInfo
         * @example {
         *       "itemIndex": 0,
         *       "selectedSla": "Normal",
         *       "lockTTL": "10d",
         *       "price": 1160,
         *       "listPrice": 1160,
         *       "sellingPrice": 1160,
         *       "deliveryWindow": null,
         *       "deliveryCompany": "Todos os CEPS",
         *       "shippingEstimate": "5bd",
         *       "shippingEstimateDate": "2019-02-04T20:33:46.4595004+00:00",
         *       "slas": [
         *         {
         *           "id": "Normal",
         *           "name": "Normal",
         *           "shippingEstimate": "5bd",
         *           "deliveryWindow": null,
         *           "price": 1160,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": null
         *         },
         *         {
         *           "id": "Expressa",
         *           "name": "Expressa",
         *           "shippingEstimate": "5bd",
         *           "deliveryWindow": null,
         *           "price": 1160,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": null
         *         },
         *         {
         *           "id": "Quebra Kit",
         *           "name": "Quebra Kit",
         *           "shippingEstimate": "2bd",
         *           "deliveryWindow": null,
         *           "price": 1392,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": null
         *         },
         *         {
         *           "id": "Sob Encomenda",
         *           "name": "Sob Encomenda",
         *           "shippingEstimate": "32bd",
         *           "deliveryWindow": null,
         *           "price": 1392,
         *           "deliveryChannel": "delivery",
         *           "pickupStoreInfo": {
         *             "additionalInfo": null,
         *             "address": null,
         *             "dockId": null,
         *             "friendlyName": null,
         *             "isPickupStore": false
         *           },
         *           "polygonName": null
         *         }
         *       ],
         *       "shipsTo": [
         *         "BRA"
         *       ],
         *       "deliveryIds": [
         *         {
         *           "courierId": "197a56f",
         *           "courierName": "Todos os CEPS",
         *           "dockId": "1",
         *           "quantity": 1,
         *           "warehouseId": "1_1"
         *         }
         *       ],
         *       "deliveryChannel": "delivery",
         *       "pickupStoreInfo": {
         *         "additionalInfo": null,
         *         "address": null,
         *         "dockId": null,
         *         "friendlyName": null,
         *         "isPickupStore": false
         *       },
         *       "addressId": "-1425945657910",
         *       "polygonName": null
         *     }
         */
        LogisticsInfo: {
            /**
             * Format: int32
             * @description Item index, matching the index in the `items` array.
             */
            itemIndex: number;
            /** @description Selected SLA. */
            selectedSla: string;
            /** @description Reservation lasting period. */
            lockTTL: string;
            /**
             * Format: int32
             * @description Prince in cents.
             */
            price: number;
            /**
             * Format: int32
             * @description List price in cents.
             */
            listPrice: number;
            /**
             * Format: int32
             * @description Selling price in cents.
             */
            sellingPrice: number;
            /** @description Delivery window information. */
            deliveryWindow: string | null;
            /** @description Delivery company. */
            deliveryCompany: string;
            /** @description Shipping estimate. */
            shippingEstimate: string;
            /** @description Shipping estimate date. */
            shippingEstimateDate: string;
            /** @description Array with information on the SLAs. */
            slas: components["schemas"]["Sla"][];
            /** @description List of countries (three letter ISO code) to which shipping is available. */
            shipsTo: string[];
            /** @description Array of delivery IDs. */
            deliveryIds: components["schemas"]["DeliveryId"][];
            /** @description Delivery channel. */
            deliveryChannel: string;
            pickupStoreInfo: components["schemas"]["PickupStoreInfo"];
            /** @description Address ID. */
            addressId: string;
            /** @description Polygon name. */
            polygonName: string | null;
        };
        /**
         * Sla
         * @example {
         *       "id": "Normal",
         *       "name": "Normal",
         *       "shippingEstimate": "5bd",
         *       "deliveryWindow": null,
         *       "price": 1160,
         *       "deliveryChannel": "delivery",
         *       "pickupStoreInfo": {
         *         "additionalInfo": null,
         *         "address": null,
         *         "dockId": null,
         *         "friendlyName": null,
         *         "isPickupStore": false
         *       },
         *       "polygonName": null
         *     }
         */
        Sla: {
            /** @description SLA ID. */
            id: string;
            /** @description SLA name. */
            name: string;
            /** @description SLA shipping estimate. */
            shippingEstimate: string;
            /** @description SLA delivery window. */
            deliveryWindow: string | null;
            /**
             * Format: int32
             * @description SLA price in cents.
             */
            price: number;
            /** @description SLA delivery channel. */
            deliveryChannel: string;
            pickupStoreInfo: components["schemas"]["PickupStoreInfo"];
            /** @description SLA polygon name. */
            polygonName: string | null;
        };
        /**
         * PickupStoreInfo
         * @example {
         *       "additionalInfo": null,
         *       "address": null,
         *       "dockId": null,
         *       "friendlyName": null,
         *       "isPickupStore": false
         *     }
         */
        PickupStoreInfo: {
            /** @description Pickup additional information. */
            additionalInfo: string | null;
            /** @description Pickup address. */
            address: string | null;
            /** @description Pickup dock ID. */
            dockId: string | null;
            /** @description Pickup friendly name. */
            friendlyName: string | null;
            /** @description Indicates whether it is pickup store. */
            isPickupStore: boolean;
        };
        /**
         * DeliveryId
         * @example {
         *       "courierId": "197a56f",
         *       "courierName": "Todos os CEPS",
         *       "dockId": "1",
         *       "quantity": 1,
         *       "warehouseId": "1_1"
         *     }
         */
        DeliveryId: {
            /** @description Courier ID. */
            courierId: string;
            /** @description Courier name. */
            courierName: string;
            /** @description Dock ID. */
            dockId: string;
            /**
             * Format: int32
             * @description Quantity.
             */
            quantity: number;
            /** @description Warehouse ID. */
            warehouseId: string;
        };
        SelectedAddress: components["schemas"]["Address"];
        /**
         * PaymentData
         * @example {
         *       "transactions": [
         *         {
         *           "isActive": true,
         *           "transactionId": "418213DE29634837A63DD693A937A696",
         *           "merchantName": "luxstore",
         *           "payments": [
         *             {
         *               "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *               "paymentSystem": "6",
         *               "paymentSystemName": "Boleto Bancário",
         *               "value": 4450,
         *               "installments": 1,
         *               "referenceValue": 4450,
         *               "cardHolder": null,
         *               "cardNumber": null,
         *               "firstDigits": null,
         *               "lastDigits": null,
         *               "cvv2": null,
         *               "expireMonth": null,
         *               "expireYear": null,
         *               "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *               "giftCardId": null,
         *               "giftCardName": null,
         *               "giftCardCaption": null,
         *               "redemptionCode": null,
         *               "group": "bankInvoice",
         *               "tid": null,
         *               "dueDate": "2019-02-02",
         *               "connectorResponses": {}
         *             }
         *           ]
         *         }
         *       ]
         *     }
         */
        PaymentData: {
            /** @description Array with information on each transaction of the order. */
            transactions: components["schemas"]["Transaction"][];
        };
        /**
         * Transaction
         * @example {
         *       "isActive": true,
         *       "transactionId": "418213DE29634837A63DD693A937A696",
         *       "merchantName": "luxstore",
         *       "payments": [
         *         {
         *           "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *           "paymentSystem": "6",
         *           "paymentSystemName": "Boleto Bancário",
         *           "value": 4450,
         *           "installments": 1,
         *           "referenceValue": 4450,
         *           "cardHolder": null,
         *           "cardNumber": null,
         *           "firstDigits": null,
         *           "lastDigits": null,
         *           "cvv2": null,
         *           "expireMonth": null,
         *           "expireYear": null,
         *           "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *           "giftCardId": null,
         *           "giftCardName": null,
         *           "giftCardCaption": null,
         *           "redemptionCode": null,
         *           "group": "bankInvoice",
         *           "tid": null,
         *           "dueDate": "2019-02-02",
         *           "connectorResponses": {}
         *         }
         *       ]
         *     }
         */
        Transaction: {
            /** @description Indicates whether transaction is active. */
            isActive: boolean;
            /** @description Transaction ID. */
            transactionId: string;
            /** @description Merchant name. */
            merchantName: string;
            /** @description Array with information on each payment for the order. */
            payments: components["schemas"]["Payment"][];
        };
        /**
         * Payment
         * @example {
         *       "id": "D3DEECAB3C6C4B9EAF8EF4C1FE062FF3",
         *       "paymentSystem": "6",
         *       "paymentSystemName": "Boleto Bancário",
         *       "value": 4450,
         *       "installments": 1,
         *       "referenceValue": 4450,
         *       "cardHolder": null,
         *       "cardNumber": null,
         *       "firstDigits": null,
         *       "lastDigits": null,
         *       "cvv2": null,
         *       "expireMonth": null,
         *       "expireYear": null,
         *       "url": "https://luxstore.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/418213DE29634837A63DD693A937A696/Payment/D3DEECAB3C6C4B9EAF8EF4C1FE062FF3/Installment/{Installment}",
         *       "giftCardId": null,
         *       "giftCardName": null,
         *       "giftCardCaption": null,
         *       "redemptionCode": null,
         *       "group": "bankInvoice",
         *       "tid": null,
         *       "dueDate": "2019-02-02",
         *       "connectorResponses": {}
         *     }
         */
        Payment: {
            /** @description Payment ID. */
            id: string;
            /** @description Payment system. */
            paymentSystem: string;
            /** @description Payment system name. */
            paymentSystemName: string;
            /**
             * Format: int32
             * @description Payment value in cents.
             */
            value: number;
            /**
             * Format: int32
             * @description Payment installments.
             */
            installments: number;
            /**
             * Format: int32
             * @description Reference value for interest calculation in cents.
             */
            referenceValue: number;
            /** @description Card holder */
            cardHolder: string | null;
            /** @description Card number. */
            cardNumber: string | null;
            /** @description Card first digits. */
            firstDigits: string | null;
            /** @description Card last digits. */
            lastDigits: string | null;
            /** @description Card verification code. */
            cvv2: string | null;
            /** @description Card expiration month. */
            expireMonth: string | null;
            /** @description Card expiration year. */
            expireYear: string | null;
            /** @description Payment URL. */
            url: string;
            /** @description Gift card ID. */
            giftCardId: string | null;
            /** @description Gift card name. */
            giftCardName: string | null;
            /** @description Gift card caption. */
            giftCardCaption: string | null;
            /** @description Redemption code. */
            redemptionCode: string | null;
            /** @description Payment group. */
            group: string;
            /** @description Payment TID. */
            tid: string | null;
            /** @description Due date. */
            dueDate: string;
            /** @description Connector responses. */
            connectorResponses: Record<string, never>;
        };
        /**
         * Seller
         * @example {
         *       "id": "1",
         *       "name": "Loja do Suporte",
         *       "logo": ""
         *     }
         */
        Seller: {
            /** @description Seller ID. */
            id: string;
            /** @description Seller name. */
            name: string;
            /** @description Seller logo. */
            logo: string;
        };
        /**
         * ChangesAttachment
         * @example {
         *       "id": "changeAttachment",
         *       "changesData": [
         *         {
         *           "reason": "Blah",
         *           "discountValue": 3290,
         *           "incrementValue": 0,
         *           "itemsAdded": [],
         *           "itemsRemoved": [
         *             {
         *               "id": "1234568358",
         *               "name": "Bay Max L",
         *               "quantity": 1,
         *               "price": 3290,
         *               "unitMultiplier": null
         *             }
         *           ],
         *           "receipt": {
         *             "date": "2019-02-06T20:46:04.4003606+00:00",
         *             "orderId": "v5195004lux-01",
         *             "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *           }
         *         }
         *       ]
         *     }
         */
        ChangesAttachment: {
            /** @description Change ID. */
            id: string;
            /** @description Array with data on order changes. */
            changesData: components["schemas"]["ChangesDatum"][];
        };
        /**
         * ChangesDatum
         * @example {
         *       "reason": "Blah",
         *       "discountValue": 3290,
         *       "incrementValue": 0,
         *       "itemsAdded": [],
         *       "itemsRemoved": [
         *         {
         *           "id": "1234568358",
         *           "name": "Bay Max L",
         *           "quantity": 1,
         *           "price": 3290,
         *           "unitMultiplier": null
         *         }
         *       ],
         *       "receipt": {
         *         "date": "2019-02-06T20:46:04.4003606+00:00",
         *         "orderId": "v5195004lux-01",
         *         "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *       }
         *     }
         */
        ChangesDatum: {
            /** @description Change reason. */
            reason: string;
            /**
             * Format: int32
             * @description Discount value in cents.
             */
            discountValue: number;
            /**
             * Format: int32
             * @description Order value increment in cents.
             */
            incrementValue: number;
            /** @description Array with information on items added to the order. */
            itemsAdded: string[];
            /** @description Array with information on items removed from the order. */
            itemsRemoved: components["schemas"]["ItemsRemoved"][];
            receipt: components["schemas"]["Receipt"];
        };
        /**
         * ItemsRemoved
         * @example {
         *       "id": "1234568358",
         *       "name": "Bay Max L",
         *       "quantity": 1,
         *       "price": 3290,
         *       "unitMultiplier": null
         *     }
         */
        ItemsRemoved: {
            /** @description Id of removed item. */
            id: string;
            /** @description Name of removed item. */
            name: string;
            /**
             * Format: int32
             * @description Quantity of items removed.
             */
            quantity: number;
            /**
             * Format: int32
             * @description Removed items price in cents.
             */
            price: number;
            /** @description Removed item unit multiplier. */
            unitMultiplier: string | null;
        };
        /**
         * Receipt
         * @example {
         *       "date": "2019-02-06T20:46:04.4003606+00:00",
         *       "orderId": "v5195004lux-01",
         *       "receipt": "029f9ab8-751a-4b1e-bf81-7dd25d14b49b"
         *     }
         */
        Receipt: {
            /** @description Date. */
            date: string;
            /** @description Order ID. */
            orderId: string;
            /** @description Receipt. */
            receipt: string;
        };
        /**
         * StorePreferencesData
         * @example {
         *       "countryCode": "BRA",
         *       "currencyCode": "BRL",
         *       "currencyFormatInfo": {
         *         "CurrencyDecimalDigits": 2,
         *         "CurrencyDecimalSeparator": ",",
         *         "CurrencyGroupSeparator": ".",
         *         "CurrencyGroupSize": 3,
         *         "StartsWithCurrencySymbol": true
         *       },
         *       "currencyLocale": 1046,
         *       "currencySymbol": "R$",
         *       "timeZone": "E. South America Standard Time"
         *     }
         */
        StorePreferencesData: {
            /** @description Three letter ISO country code. */
            countryCode: string;
            /** @description Currency code. */
            currencyCode: string;
            currencyFormatInfo: components["schemas"]["CurrencyFormatInfo"];
            /**
             * Format: int32
             * @description Currency locale.
             */
            currencyLocale: number;
            /** @description Currency symbol. */
            currencySymbol: string;
            /** @description Time zone. */
            timeZone: string;
        };
        /**
         * CurrencyFormatInfo
         * @example {
         *       "CurrencyDecimalDigits": 2,
         *       "CurrencyDecimalSeparator": ",",
         *       "CurrencyGroupSeparator": ".",
         *       "CurrencyGroupSize": 3,
         *       "StartsWithCurrencySymbol": true
         *     }
         */
        CurrencyFormatInfo: {
            /**
             * Format: int32
             * @description Currency decimal digits.
             */
            CurrencyDecimalDigits: number;
            /** @description Currency decimal separator. */
            CurrencyDecimalSeparator: string;
            /** @description Currency group separator. */
            CurrencyGroupSeparator: string;
            /**
             * Format: int32
             * @description Currency group size.
             */
            CurrencyGroupSize: number;
            /** @description Indicates whether value representations start with currency symbol. */
            StartsWithCurrencySymbol: boolean;
        };
        /**
         * Marketplace
         * @example {
         *       "baseURL": "http://oms.vtexinternal.com.br/api/oms?an=luxstore",
         *       "isCertified": null,
         *       "name": "luxstore"
         *     }
         */
        Marketplace: {
            /** @description Marketplace base URL. */
            baseURL: string;
            /** @description Indicates whether marketplace is certified. */
            isCertified: string | null;
            /** @description Marketplace name. */
            name: string;
        };
        /**
         * ListOrders
         * @example {
         *       "list": [
         *         {
         *           "orderId": "v502559llux-01",
         *           "creationDate": "2019-02-04T10:29:11+00:00",
         *           "clientName": "J C",
         *           "items": null,
         *           "totalValue": 7453,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "invoiced",
         *           "statusDescription": "Faturado",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502559",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-02-07T21:29:54+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502556llux-01",
         *           "creationDate": "2019-01-28T20:09:43+00:00",
         *           "clientName": "Rodrigo VTEX",
         *           "items": null,
         *           "totalValue": 1160,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "handling",
         *           "statusDescription": "Preparando Entrega",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502556",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store Seu pedido foi alterado! Pedido realizado em: 28/01/2019 Olá, Rodrigo. Seu pedido foi alterado. Seguem informações abaixo: ",
         *           "ShippingEstimatedDate": "2019-02-04T20:33:46+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-28T20:33:04+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502553llux-01",
         *           "creationDate": "2019-01-24T12:35:19+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 10150,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502554",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502553llux-01 Olá, test. Estamos empacotando seu produto para provide",
         *           "ShippingEstimatedDate": "2019-01-31T12:36:30+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-24T12:36:01+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502550llux-01",
         *           "creationDate": "2019-01-23T16:39:45+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 10150,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502551",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502550llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
         *           "ShippingEstimatedDate": "2019-01-30T16:40:55+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-23T16:40:27+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502547llux-01",
         *           "creationDate": "2019-01-23T16:34:20+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 10150,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502548",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502547llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
         *           "ShippingEstimatedDate": "2019-01-30T16:35:30+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2019-01-23T16:35:04+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502544llux-01",
         *           "creationDate": "2018-12-28T18:15:28+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 8990,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502544",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502544llux-01 Resumo Itens R$ 89,90 Total R$ 89,90 Produto Alavanca De M",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502541llux-01",
         *           "creationDate": "2018-12-18T18:48:17+00:00",
         *           "clientName": "Douglas Rodrigues",
         *           "items": null,
         *           "totalValue": 3290,
         *           "paymentNames": "Boleto Bancário",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502541",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pedido foi cancelado. Referente ao Pedido #v502541llux-01 Resumo Itens R$ 32,90 Total R$ 32,90 Produto Bay Max L 1 u",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "v502538llux-01",
         *           "creationDate": "2018-12-12T18:21:47+00:00",
         *           "clientName": "test test",
         *           "items": null,
         *           "totalValue": 8990,
         *           "paymentNames": "Mastercard",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": null,
         *           "sequence": "502538",
         *           "salesChannel": "1",
         *           "affiliateId": "",
         *           "origin": "Marketplace",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": " Lux Store 96 Seu pagamento foi aprovado. Referente ao Pedido #v502538llux-01 Olá, test. Estamos providenciando a emissão da Nota Fisc",
         *           "ShippingEstimatedDate": "2018-12-19T18:22:26+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-12-12T18:22:22+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880102018018-01",
         *           "creationDate": "2018-11-30T17:34:01+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "880102018018-01",
         *           "sequence": "502537",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": "cancelamento teste shp ",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:34:42+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880091692043-01",
         *           "creationDate": "2018-11-30T17:28:35+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "invoiced",
         *           "statusDescription": "Faturado",
         *           "marketPlaceOrderId": "880091692043-01",
         *           "sequence": "502536",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:29:22+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880091058221-01",
         *           "creationDate": "2018-11-30T17:18:00+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "880091058221-01",
         *           "sequence": "502535",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": "Teste de cancelamento do ShopFácil ",
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:18:44+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880090643370-01",
         *           "creationDate": "2018-11-30T17:10:59+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": "880090643370-01",
         *           "sequence": "502534",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2018-12-07T17:11:39+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-30T17:11:42+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-880090622238-01",
         *           "creationDate": "2018-11-30T17:10:45+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "880090622238-01",
         *           "sequence": "502533",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": null,
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "MNC-877730530419-01",
         *           "creationDate": "2018-11-20T21:09:01+00:00",
         *           "clientName": "Carlos VTEX",
         *           "items": null,
         *           "totalValue": 11150,
         *           "paymentNames": "",
         *           "status": "canceled",
         *           "statusDescription": "Cancelado",
         *           "marketPlaceOrderId": "877730530419-01",
         *           "sequence": "502532",
         *           "salesChannel": "1",
         *           "affiliateId": "MNC",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": null,
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-20T21:13:06+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         },
         *         {
         *           "orderId": "SCP-876733475998-01",
         *           "creationDate": "2018-11-16T16:58:18+00:00",
         *           "clientName": "roberta grecco",
         *           "items": null,
         *           "totalValue": 1250,
         *           "paymentNames": "",
         *           "status": "ready-for-handling",
         *           "statusDescription": "Pronto para o manuseio",
         *           "marketPlaceOrderId": "876733475998-01",
         *           "sequence": "502531",
         *           "salesChannel": "1",
         *           "affiliateId": "SCP",
         *           "origin": "Fulfillment",
         *           "workflowInErrorState": false,
         *           "workflowInRetry": false,
         *           "lastMessageUnread": null,
         *           "ShippingEstimatedDate": "2018-11-23T16:58:48+00:00",
         *           "ShippingEstimatedDateMax": null,
         *           "ShippingEstimatedDateMin": null,
         *           "orderIsComplete": true,
         *           "listId": null,
         *           "listType": null,
         *           "authorizedDate": "2018-11-16T16:58:53+00:00",
         *           "callCenterOperatorName": null,
         *           "totalItems": 1,
         *           "currencyCode": "BRL"
         *         }
         *       ],
         *       "facets": [],
         *       "paging": {
         *         "total": 84,
         *         "pages": 6,
         *         "currentPage": 1,
         *         "perPage": 15
         *       },
         *       "stats": {
         *         "stats": {
         *           "totalValue": {
         *             "Count": 84,
         *             "Max": 21526180,
         *             "Mean": 262672.75,
         *             "Min": 1160,
         *             "Missing": 0,
         *             "StdDev": 2348087.3869179883,
         *             "Sum": 22064511,
         *             "SumOfSquares": 463417439039853,
         *             "Facets": {
         *               "origin": {
         *                 "Fulfillment": {
         *                   "Count": 68,
         *                   "Max": 11150,
         *                   "Mean": 1395.5882352941176,
         *                   "Min": 1250,
         *                   "Missing": 0,
         *                   "StdDev": 1200.5513439298484,
         *                   "Sum": 94900,
         *                   "SumOfSquares": 229010000,
         *                   "Facets": null
         *                 },
         *                 "Marketplace": {
         *                   "Count": 16,
         *                   "Max": 21526180,
         *                   "Mean": 1373100.6875,
         *                   "Min": 1160,
         *                   "Missing": 0,
         *                   "StdDev": 5374326.141087491,
         *                   "Sum": 21969611,
         *                   "SumOfSquares": 463417210029853,
         *                   "Facets": null
         *                 }
         *               },
         *               "currencyCode": {
         *                 "BRL": {
         *                   "Count": 84,
         *                   "Max": 21526180,
         *                   "Mean": 262672.75,
         *                   "Min": 1160,
         *                   "Missing": 0,
         *                   "StdDev": 2348087.3869179883,
         *                   "Sum": 22064511,
         *                   "SumOfSquares": 463417439039853,
         *                   "Facets": null
         *                 }
         *               }
         *             }
         *           },
         *           "totalItems": {
         *             "Count": 84,
         *             "Max": 89,
         *             "Mean": 2.2261904761904763,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 9.660940100525016,
         *             "Sum": 187,
         *             "SumOfSquares": 8163,
         *             "Facets": {
         *               "origin": {
         *                 "Fulfillment": {
         *                   "Count": 68,
         *                   "Max": 1,
         *                   "Mean": 1,
         *                   "Min": 1,
         *                   "Missing": 0,
         *                   "StdDev": 0,
         *                   "Sum": 68,
         *                   "SumOfSquares": 68,
         *                   "Facets": null
         *                 },
         *                 "Marketplace": {
         *                   "Count": 16,
         *                   "Max": 89,
         *                   "Mean": 7.4375,
         *                   "Min": 1,
         *                   "Missing": 0,
         *                   "StdDev": 21.92401651157926,
         *                   "Sum": 119,
         *                   "SumOfSquares": 8095,
         *                   "Facets": null
         *                 }
         *               },
         *               "currencyCode": {
         *                 "BRL": {
         *                   "Count": 84,
         *                   "Max": 89,
         *                   "Mean": 2.2261904761904763,
         *                   "Min": 1,
         *                   "Missing": 0,
         *                   "StdDev": 9.660940100525016,
         *                   "Sum": 187,
         *                   "SumOfSquares": 8163,
         *                   "Facets": null
         *                 }
         *               }
         *             }
         *           }
         *         }
         *       }
         *     }
         */
        ListOrders: {
            /** @description Array containing information on orders listed. */
            list: components["schemas"]["List"][];
            /** @description Array of facets. */
            facets: string[];
            paging: components["schemas"]["Paging"];
            stats: components["schemas"]["Stats"];
        };
        /**
         * List
         * @example {
         *       "orderId": "v502559llux-01",
         *       "creationDate": "2019-02-04T10:29:11+00:00",
         *       "clientName": "J C",
         *       "items": null,
         *       "totalValue": 7453,
         *       "paymentNames": "Boleto Bancário",
         *       "status": "invoiced",
         *       "statusDescription": "Faturado",
         *       "marketPlaceOrderId": null,
         *       "sequence": "502559",
         *       "salesChannel": "1",
         *       "affiliateId": "",
         *       "origin": "Marketplace",
         *       "workflowInErrorState": false,
         *       "workflowInRetry": false,
         *       "lastMessageUnread": " Lux Store 96 Sua Nota Fiscal foi emitida. Referente ao Pedido #v502559llux-01 Olá, J. Estamos empacotando seu produto para providenci",
         *       "ShippingEstimatedDate": null,
         *       "ShippingEstimatedDateMax": null,
         *       "ShippingEstimatedDateMin": null,
         *       "orderIsComplete": true,
         *       "listId": null,
         *       "listType": null,
         *       "authorizedDate": "2019-02-07T21:29:54+00:00",
         *       "callCenterOperatorName": null,
         *       "totalItems": 1,
         *       "currencyCode": "BRL"
         *     }
         */
        List: {
            /** @description Order ID. */
            orderId: string;
            /** @description Creation date. */
            creationDate: string;
            /** @description Client name. */
            clientName: string;
            /** @description Order items. */
            items: string | null;
            /**
             * Format: int32
             * @description Order total value in cents.
             */
            totalValue: number;
            /** @description Order payment names. */
            paymentNames: string;
            /** @description Order status. */
            status: string;
            /** @description Order status description. */
            statusDescription: string;
            /** @description ID of the order in the marketplace. */
            marketPlaceOrderId: string | null;
            /** @description Order sequence number. */
            sequence: string;
            /** @description Sales channel. */
            salesChannel: string;
            /** @description Three letter code indicating the marketplace in which the order was placed. */
            affiliateId: string;
            /** @description Indicates whether order is marketplace, fulfillment or chain. */
            origin: string;
            /** @description Indicates whether order workflow is in error state. */
            workflowInErrorState: boolean;
            /** @description Indicates whether workflow is in retry. */
            workflowInRetry: boolean;
            /** @description Last unread message. */
            lastMessageUnread: string | null;
            /** @description Shipping estimate date. */
            ShippingEstimatedDate: string | null;
            /** @description Maximum shipping estimate date. */
            ShippingEstimatedDateMax: string | null;
            /** @description Minimum shipping estimate date. */
            ShippingEstimatedDateMin: string | null;
            /** @description Indicates whether order is complete. */
            orderIsComplete: boolean;
            /** @description List ID. */
            listId: string | null;
            /** @description List type. */
            listType: string | null;
            /** @description Authorized date. */
            authorizedDate: string | null;
            /** @description Call center operator name. */
            callCenterOperatorName: string | null;
            /**
             * Format: int32
             * @description Total items.
             */
            totalItems: number;
            /** @description Currency code. */
            currencyCode: string;
        };
        /**
         * Paging
         * @example {
         *       "total": 84,
         *       "pages": 6,
         *       "currentPage": 1,
         *       "perPage": 15
         *     }
         */
        Paging: {
            /**
             * Format: int32
             * @description Paging total.
             */
            total: number;
            /**
             * Format: int32
             * @description Number of pages.
             */
            pages: number;
            /**
             * Format: int32
             * @description Current returned page.
             */
            currentPage: number;
            /**
             * Format: int32
             * @description Number of items returned per page.
             */
            perPage: number;
        };
        /**
         * Stats
         * @example {
         *       "stats": {
         *         "totalValue": {
         *           "Count": 84,
         *           "Max": 21526180,
         *           "Mean": 262672.75,
         *           "Min": 1160,
         *           "Missing": 0,
         *           "StdDev": 2348087.3869179883,
         *           "Sum": 22064511,
         *           "SumOfSquares": 463417439039853,
         *           "Facets": {
         *             "origin": {
         *               "Fulfillment": {
         *                 "Count": 68,
         *                 "Max": 11150,
         *                 "Mean": 1395.5882352941176,
         *                 "Min": 1250,
         *                 "Missing": 0,
         *                 "StdDev": 1200.5513439298484,
         *                 "Sum": 94900,
         *                 "SumOfSquares": 229010000,
         *                 "Facets": null
         *               },
         *               "Marketplace": {
         *                 "Count": 16,
         *                 "Max": 21526180,
         *                 "Mean": 1373100.6875,
         *                 "Min": 1160,
         *                 "Missing": 0,
         *                 "StdDev": 5374326.141087491,
         *                 "Sum": 21969611,
         *                 "SumOfSquares": 463417210029853,
         *                 "Facets": null
         *               }
         *             },
         *             "currencyCode": {
         *               "BRL": {
         *                 "Count": 84,
         *                 "Max": 21526180,
         *                 "Mean": 262672.75,
         *                 "Min": 1160,
         *                 "Missing": 0,
         *                 "StdDev": 2348087.3869179883,
         *                 "Sum": 22064511,
         *                 "SumOfSquares": 463417439039853,
         *                 "Facets": null
         *               }
         *             }
         *           }
         *         },
         *         "totalItems": {
         *           "Count": 84,
         *           "Max": 89,
         *           "Mean": 2.2261904761904763,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 9.660940100525016,
         *           "Sum": 187,
         *           "SumOfSquares": 8163,
         *           "Facets": {
         *             "origin": {
         *               "Fulfillment": {
         *                 "Count": 68,
         *                 "Max": 1,
         *                 "Mean": 1,
         *                 "Min": 1,
         *                 "Missing": 0,
         *                 "StdDev": 0,
         *                 "Sum": 68,
         *                 "SumOfSquares": 68,
         *                 "Facets": null
         *               },
         *               "Marketplace": {
         *                 "Count": 16,
         *                 "Max": 89,
         *                 "Mean": 7.4375,
         *                 "Min": 1,
         *                 "Missing": 0,
         *                 "StdDev": 21.92401651157926,
         *                 "Sum": 119,
         *                 "SumOfSquares": 8095,
         *                 "Facets": null
         *               }
         *             },
         *             "currencyCode": {
         *               "BRL": {
         *                 "Count": 84,
         *                 "Max": 89,
         *                 "Mean": 2.2261904761904763,
         *                 "Min": 1,
         *                 "Missing": 0,
         *                 "StdDev": 9.660940100525016,
         *                 "Sum": 187,
         *                 "SumOfSquares": 8163,
         *                 "Facets": null
         *               }
         *             }
         *           }
         *         }
         *       }
         *     }
         */
        Stats: {
            stats: components["schemas"]["Stats1"];
        };
        /**
         * Stats1
         * @example {
         *       "totalValue": {
         *         "Count": 84,
         *         "Max": 21526180,
         *         "Mean": 262672.75,
         *         "Min": 1160,
         *         "Missing": 0,
         *         "StdDev": 2348087.3869179883,
         *         "Sum": 22064511,
         *         "SumOfSquares": 463417439039853,
         *         "Facets": {
         *           "origin": {
         *             "Fulfillment": {
         *               "Count": 68,
         *               "Max": 11150,
         *               "Mean": 1395.5882352941176,
         *               "Min": 1250,
         *               "Missing": 0,
         *               "StdDev": 1200.5513439298484,
         *               "Sum": 94900,
         *               "SumOfSquares": 229010000,
         *               "Facets": null
         *             },
         *             "Marketplace": {
         *               "Count": 16,
         *               "Max": 21526180,
         *               "Mean": 1373100.6875,
         *               "Min": 1160,
         *               "Missing": 0,
         *               "StdDev": 5374326.141087491,
         *               "Sum": 21969611,
         *               "SumOfSquares": 463417210029853,
         *               "Facets": null
         *             }
         *           },
         *           "currencyCode": {
         *             "BRL": {
         *               "Count": 84,
         *               "Max": 21526180,
         *               "Mean": 262672.75,
         *               "Min": 1160,
         *               "Missing": 0,
         *               "StdDev": 2348087.3869179883,
         *               "Sum": 22064511,
         *               "SumOfSquares": 463417439039853,
         *               "Facets": null
         *             }
         *           }
         *         }
         *       },
         *       "totalItems": {
         *         "Count": 84,
         *         "Max": 89,
         *         "Mean": 2.2261904761904763,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 9.660940100525016,
         *         "Sum": 187,
         *         "SumOfSquares": 8163,
         *         "Facets": {
         *           "origin": {
         *             "Fulfillment": {
         *               "Count": 68,
         *               "Max": 1,
         *               "Mean": 1,
         *               "Min": 1,
         *               "Missing": 0,
         *               "StdDev": 0,
         *               "Sum": 68,
         *               "SumOfSquares": 68,
         *               "Facets": null
         *             },
         *             "Marketplace": {
         *               "Count": 16,
         *               "Max": 89,
         *               "Mean": 7.4375,
         *               "Min": 1,
         *               "Missing": 0,
         *               "StdDev": 21.92401651157926,
         *               "Sum": 119,
         *               "SumOfSquares": 8095,
         *               "Facets": null
         *             }
         *           },
         *           "currencyCode": {
         *             "BRL": {
         *               "Count": 84,
         *               "Max": 89,
         *               "Mean": 2.2261904761904763,
         *               "Min": 1,
         *               "Missing": 0,
         *               "StdDev": 9.660940100525016,
         *               "Sum": 187,
         *               "SumOfSquares": 8163,
         *               "Facets": null
         *             }
         *           }
         *         }
         *       }
         *     }
         */
        Stats1: {
            totalValue: components["schemas"]["TotalValue"];
            totalItems: components["schemas"]["TotalItems"];
        };
        /**
         * TotalValue
         * @example {
         *       "Count": 84,
         *       "Max": 21526180,
         *       "Mean": 262672.75,
         *       "Min": 1160,
         *       "Missing": 0,
         *       "StdDev": 2348087.3869179883,
         *       "Sum": 22064511,
         *       "SumOfSquares": 463417439039853,
         *       "Facets": {
         *         "origin": {
         *           "Fulfillment": {
         *             "Count": 68,
         *             "Max": 11150,
         *             "Mean": 1395.5882352941176,
         *             "Min": 1250,
         *             "Missing": 0,
         *             "StdDev": 1200.5513439298484,
         *             "Sum": 94900,
         *             "SumOfSquares": 229010000,
         *             "Facets": null
         *           },
         *           "Marketplace": {
         *             "Count": 16,
         *             "Max": 21526180,
         *             "Mean": 1373100.6875,
         *             "Min": 1160,
         *             "Missing": 0,
         *             "StdDev": 5374326.141087491,
         *             "Sum": 21969611,
         *             "SumOfSquares": 463417210029853,
         *             "Facets": null
         *           }
         *         },
         *         "currencyCode": {
         *           "BRL": {
         *             "Count": 84,
         *             "Max": 21526180,
         *             "Mean": 262672.75,
         *             "Min": 1160,
         *             "Missing": 0,
         *             "StdDev": 2348087.3869179883,
         *             "Sum": 22064511,
         *             "SumOfSquares": 463417439039853,
         *             "Facets": null
         *           }
         *         }
         *       }
         *     }
         */
        TotalValue: {
            /**
             * Format: int32
             * @description Value count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Value maximum.
             */
            Max: number;
            /** @description Value mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Value minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing values.
             */
            Missing: number;
            /** @description Values standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Values sum.
             */
            Sum: number;
            /**
             * Format: int64
             * @description Values sum of squares
             */
            SumOfSquares: number;
            Facets: components["schemas"]["Facets"];
        };
        /**
         * Facets
         * @example {
         *       "origin": {
         *         "Fulfillment": {
         *           "Count": 68,
         *           "Max": 11150,
         *           "Mean": 1395.5882352941176,
         *           "Min": 1250,
         *           "Missing": 0,
         *           "StdDev": 1200.5513439298484,
         *           "Sum": 94900,
         *           "SumOfSquares": 229010000,
         *           "Facets": null
         *         },
         *         "Marketplace": {
         *           "Count": 16,
         *           "Max": 21526180,
         *           "Mean": 1373100.6875,
         *           "Min": 1160,
         *           "Missing": 0,
         *           "StdDev": 5374326.141087491,
         *           "Sum": 21969611,
         *           "SumOfSquares": 463417210029853,
         *           "Facets": null
         *         }
         *       },
         *       "currencyCode": {
         *         "BRL": {
         *           "Count": 84,
         *           "Max": 21526180,
         *           "Mean": 262672.75,
         *           "Min": 1160,
         *           "Missing": 0,
         *           "StdDev": 2348087.3869179883,
         *           "Sum": 22064511,
         *           "SumOfSquares": 463417439039853,
         *           "Facets": null
         *         }
         *       }
         *     }
         */
        Facets: {
            origin: components["schemas"]["Origin"];
            currencyCode: components["schemas"]["CurrencyCode"];
        };
        /**
         * Origin
         * @example {
         *       "Fulfillment": {
         *         "Count": 68,
         *         "Max": 11150,
         *         "Mean": 1395.5882352941176,
         *         "Min": 1250,
         *         "Missing": 0,
         *         "StdDev": 1200.5513439298484,
         *         "Sum": 94900,
         *         "SumOfSquares": 229010000,
         *         "Facets": null
         *       },
         *       "Marketplace": {
         *         "Count": 16,
         *         "Max": 21526180,
         *         "Mean": 1373100.6875,
         *         "Min": 1160,
         *         "Missing": 0,
         *         "StdDev": 5374326.141087491,
         *         "Sum": 21969611,
         *         "SumOfSquares": 463417210029853,
         *         "Facets": null
         *       }
         *     }
         */
        Origin: {
            Fulfillment: components["schemas"]["Fulfillment"];
            Marketplace: components["schemas"]["Marketplace1"];
        };
        /**
         * Fulfillment
         * @example {
         *       "Count": 68,
         *       "Max": 11150,
         *       "Mean": 1395.5882352941176,
         *       "Min": 1250,
         *       "Missing": 0,
         *       "StdDev": 1200.5513439298484,
         *       "Sum": 94900,
         *       "SumOfSquares": 229010000,
         *       "Facets": null
         *     }
         */
        Fulfillment: {
            /**
             * Format: int32
             * @description Count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Maximum.
             */
            Max: number;
            /** @description Mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing.
             */
            Missing: number;
            /** @description Standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Sum.
             */
            Sum: number;
            /**
             * Format: int32
             * @description Sum of squares.
             */
            SumOfSquares: number;
            /** @description Facets. */
            Facets: string | null;
        };
        /**
         * Marketplace1
         * @example {
         *       "Count": 16,
         *       "Max": 21526180,
         *       "Mean": 1373100.6875,
         *       "Min": 1160,
         *       "Missing": 0,
         *       "StdDev": 5374326.141087491,
         *       "Sum": 21969611,
         *       "SumOfSquares": 463417210029853,
         *       "Facets": null
         *     }
         */
        Marketplace1: {
            /**
             * Format: int32
             * @description Count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Maximum.
             */
            Max: number;
            /** @description Mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing.
             */
            Missing: number;
            /** @description Standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Sum.
             */
            Sum: number;
            /**
             * Format: int64
             * @description Sum of squares.
             */
            SumOfSquares: number;
            /** @description Facets. */
            Facets: string | null;
        };
        /**
         * CurrencyCode
         * @example {
         *       "BRL": {
         *         "Count": 84,
         *         "Max": 21526180,
         *         "Mean": 262672.75,
         *         "Min": 1160,
         *         "Missing": 0,
         *         "StdDev": 2348087.3869179883,
         *         "Sum": 22064511,
         *         "SumOfSquares": 463417439039853,
         *         "Facets": null
         *       }
         *     }
         */
        CurrencyCode: {
            BRL: components["schemas"]["BRL"];
        };
        /**
         * BRL
         * @example {
         *       "Count": 84,
         *       "Max": 21526180,
         *       "Mean": 262672.75,
         *       "Min": 1160,
         *       "Missing": 0,
         *       "StdDev": 2348087.3869179883,
         *       "Sum": 22064511,
         *       "SumOfSquares": 463417439039853,
         *       "Facets": null
         *     }
         */
        BRL: {
            /**
             * Format: int32
             * @description Count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Maximum.
             */
            Max: number;
            /** @description Mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing.
             */
            Missing: number;
            /** @description Standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Sum.
             */
            Sum: number;
            /**
             * Format: int64
             * @description Sum of squares.
             */
            SumOfSquares: number;
            /** @description Facets. */
            Facets: string | null;
        };
        /**
         * TotalItems
         * @example {
         *       "Count": 84,
         *       "Max": 89,
         *       "Mean": 2.2261904761904763,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 9.660940100525016,
         *       "Sum": 187,
         *       "SumOfSquares": 8163,
         *       "Facets": {
         *         "origin": {
         *           "Fulfillment": {
         *             "Count": 68,
         *             "Max": 1,
         *             "Mean": 1,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 0,
         *             "Sum": 68,
         *             "SumOfSquares": 68,
         *             "Facets": null
         *           },
         *           "Marketplace": {
         *             "Count": 16,
         *             "Max": 89,
         *             "Mean": 7.4375,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 21.92401651157926,
         *             "Sum": 119,
         *             "SumOfSquares": 8095,
         *             "Facets": null
         *           }
         *         },
         *         "currencyCode": {
         *           "BRL": {
         *             "Count": 84,
         *             "Max": 89,
         *             "Mean": 2.2261904761904763,
         *             "Min": 1,
         *             "Missing": 0,
         *             "StdDev": 9.660940100525016,
         *             "Sum": 187,
         *             "SumOfSquares": 8163,
         *             "Facets": null
         *           }
         *         }
         *       }
         *     }
         */
        TotalItems: {
            /**
             * Format: int32
             * @description Count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Maximum.
             */
            Max: number;
            /** @description Mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing.
             */
            Missing: number;
            /** @description Standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Sum.
             */
            Sum: number;
            /**
             * Format: int64
             * @description Sum of squares.
             */
            SumOfSquares: number;
            /** @description Facets. */
            Facets: string | null;
        };
        /**
         * Facets1
         * @example {
         *       "origin": {
         *         "Fulfillment": {
         *           "Count": 68,
         *           "Max": 1,
         *           "Mean": 1,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 0,
         *           "Sum": 68,
         *           "SumOfSquares": 68,
         *           "Facets": null
         *         },
         *         "Marketplace": {
         *           "Count": 16,
         *           "Max": 89,
         *           "Mean": 7.4375,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 21.92401651157926,
         *           "Sum": 119,
         *           "SumOfSquares": 8095,
         *           "Facets": null
         *         }
         *       },
         *       "currencyCode": {
         *         "BRL": {
         *           "Count": 84,
         *           "Max": 89,
         *           "Mean": 2.2261904761904763,
         *           "Min": 1,
         *           "Missing": 0,
         *           "StdDev": 9.660940100525016,
         *           "Sum": 187,
         *           "SumOfSquares": 8163,
         *           "Facets": null
         *         }
         *       }
         *     }
         */
        Facets1: {
            origin: components["schemas"]["Origin1"];
            currencyCode: components["schemas"]["CurrencyCode1"];
        };
        /**
         * Origin1
         * @example {
         *       "Fulfillment": {
         *         "Count": 68,
         *         "Max": 1,
         *         "Mean": 1,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 0,
         *         "Sum": 68,
         *         "SumOfSquares": 68,
         *         "Facets": null
         *       },
         *       "Marketplace": {
         *         "Count": 16,
         *         "Max": 89,
         *         "Mean": 7.4375,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 21.92401651157926,
         *         "Sum": 119,
         *         "SumOfSquares": 8095,
         *         "Facets": null
         *       }
         *     }
         */
        Origin1: {
            Fulfillment: components["schemas"]["Fulfillment1"];
            Marketplace: components["schemas"]["Marketplace2"];
        };
        /**
         * Fulfillment1
         * @example {
         *       "Count": 68,
         *       "Max": 1,
         *       "Mean": 1,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 0,
         *       "Sum": 68,
         *       "SumOfSquares": 68,
         *       "Facets": null
         *     }
         */
        Fulfillment1: {
            /**
             * Format: int32
             * @description Count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Maximum.
             */
            Max: number;
            /** @description Mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing.
             */
            Missing: number;
            /** @description Standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Sum.
             */
            Sum: number;
            /**
             * Format: int64
             * @description Sum of squares.
             */
            SumOfSquares: number;
            /** @description Facets. */
            Facets: string | null;
        };
        /**
         * Marketplace2
         * @example {
         *       "Count": 16,
         *       "Max": 89,
         *       "Mean": 7.4375,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 21.92401651157926,
         *       "Sum": 119,
         *       "SumOfSquares": 8095,
         *       "Facets": null
         *     }
         */
        Marketplace2: {
            /**
             * Format: int32
             * @description Count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Maximum.
             */
            Max: number;
            /** @description Mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing.
             */
            Missing: number;
            /** @description Standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Sum.
             */
            Sum: number;
            /**
             * Format: int64
             * @description Sum of squares.
             */
            SumOfSquares: number;
            /** @description Facets. */
            Facets: string | null;
        };
        /**
         * CurrencyCode1
         * @example {
         *       "BRL": {
         *         "Count": 84,
         *         "Max": 89,
         *         "Mean": 2.2261904761904763,
         *         "Min": 1,
         *         "Missing": 0,
         *         "StdDev": 9.660940100525016,
         *         "Sum": 187,
         *         "SumOfSquares": 8163,
         *         "Facets": null
         *       }
         *     }
         */
        CurrencyCode1: {
            BRL: components["schemas"]["BRL1"];
        };
        /**
         * BRL1
         * @example {
         *       "Count": 84,
         *       "Max": 89,
         *       "Mean": 2.2261904761904763,
         *       "Min": 1,
         *       "Missing": 0,
         *       "StdDev": 9.660940100525016,
         *       "Sum": 187,
         *       "SumOfSquares": 8163,
         *       "Facets": null
         *     }
         */
        BRL1: {
            /**
             * Format: int32
             * @description Count.
             */
            Count: number;
            /**
             * Format: int32
             * @description Maximum.
             */
            Max: number;
            /** @description Mean. */
            Mean: number;
            /**
             * Format: int32
             * @description Minimum.
             */
            Min: number;
            /**
             * Format: int32
             * @description Missing.
             */
            Missing: number;
            /** @description Standard deviation. */
            StdDev: number;
            /**
             * Format: int32
             * @description Sum.
             */
            Sum: number;
            /**
             * Format: int64
             * @description Sum of squares.
             */
            SumOfSquares: number;
            /** @description Facets. */
            Facets: string | null;
        };
        /**
         * InvoiceNotificationRequest
         * @example {
         *       "type": "Output",
         *       "issuedDate": "2019-01-30",
         *       "invoiceNumber": "9999",
         *       "invoiceValue": 2499,
         *       "extraValue": 100,
         *       "invoiceKey": null,
         *       "invoiceUrl": null,
         *       "courier": null,
         *       "trackingNumber": null,
         *       "trackingUrl": null,
         *       "items": [
         *         {
         *           "id": "1234",
         *           "price": 10000,
         *           "quantity": 1
         *         }
         *       ]
         *     }
         */
        InvoiceNotificationRequest: {
            /**
             * @description The type of invoice. There are two possible values: `"Output"` and `"Input"`. The `"Output"` type should be used when the invoice you are sending is a selling invoice. The `"Input"` type should be used when you send a return invoice.
             * @example Output
             */
            type: string;
            /**
             * @description Issuance date of the invoice in ISO format.
             * @example 2020-07-15
             */
            issuedDate: string;
            /**
             * @description Number that identifies the invoice.
             * @example 123456789
             */
            invoiceNumber: string;
            /**
             * @description Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
             * @example 2499
             */
            invoiceValue: string;
            /**
             * @description Extra value in the invoice in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
             * @example 100
             */
            extraValue?: number;
            /** @description Invoice key. */
            invoiceKey?: string | null;
            /** @description URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations. */
            invoiceUrl?: string;
            /** @description The name of the carrier responsible for delivering the order.
             *
            > This field should only be used when sending **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`). */
            courier?: string | null;
            /** @description Code that identifies the order tracking.
             *
            > This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`). */
            trackingNumber?: string | null;
            /** @description URL used to track the order.
             *
            > This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`). */
            trackingUrl?: string | null;
            /** @description Array containing the SKUs that are being invoiced. */
            items: components["schemas"]["Item1"][];
            /**
             * @description Fiscal code used in Brazil.
             * @example 6.104
             */
            cfop?: string;
            /**
             * @description Number of volumes in the invoice.
             * @example 3
             */
            volumes?: number;
        };
        /**
         * Item1
         * @example {
         *       "id": "1234",
         *       "price": 10000,
         *       "quantity": 1
         *     }
         */
        Item1: {
            /**
             * @description Index of the SKU being invoiced.
             * @example 67
             */
            itemIndex: string;
            /**
             * Format: int32
             * @description Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
             * @example 2499
             */
            price: number;
            /**
             * Format: int32
             * @description Quantity cof the SKU being invoiced.
             * @example 3
             */
            quantity: number;
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description ID of the order. */
        orderId: string;
        /** @description Reason for requesting unmasked data. */
        reason: string;
        /** @description Filters list to return only orders with non `null` values for the `invoiceInput` field. */
        f_hasInputInvoice: boolean;
        /** @description ID of the payment. */
        paymentId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetOrder2: {
        parameters: {
            query?: {
                /** @description Reason for requesting unmasked data. */
                reason?: components["parameters"]["reason"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the order. */
                orderId: components["parameters"]["orderId"];
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
                         * @description Email tracked.
                         * @example clark.kent@example.com
                         */
                        emailTracked?: string;
                        /**
                         * @description User that approved the order, in case of manual approval.
                         * @example alex@store.com
                         */
                        approvedBy?: string;
                        /**
                         * @description User that canceled the order.
                         * @example alex@store.com
                         */
                        cancelledBy?: string;
                        /**
                         * @description Reason for cancelation.
                         * @example Stock shortage.
                         */
                        cancelReason?: string;
                        /**
                         * @description Order ID.
                         * @example v5195004lux-01
                         */
                        orderId?: string;
                        /**
                         * @description Sequence number.
                         * @example 502556
                         */
                        sequence?: string;
                        /**
                         * @description ID of the order in the marketplace.
                         * @example ABC-v5195004lux-01
                         */
                        marketplaceOrderId?: string;
                        /**
                         * @description Marketplace endpoint for post purchase communication.
                         * @example http://oms.vtexinternal.com.br/api/oms?an=luxstore
                         */
                        marketplaceServicesEndpoint?: string;
                        /**
                         * @description Seller order ID.
                         * @example 00-v5195004lux-01
                         */
                        sellerOrderId?: string;
                        /**
                         * @description Origin.
                         * @example Marketplace
                         */
                        origin?: string;
                        /**
                         * @description Three letter code identifying the marketplace where the order was placed.
                         * @example ABC
                         */
                        affiliateId?: string;
                        /**
                         * @description Sales channel.
                         * @example 1
                         */
                        salesChannel?: string;
                        /**
                         * @description Merchant name.
                         * @example luxstore
                         */
                        merchantName?: string;
                        /**
                         * @description Status in the order workflow.
                         * @example invoiced
                         */
                        status?: string;
                        /**
                         * @description Status description which is displayed on the Admin panel.
                         * @example Faturado
                         */
                        statusDescription?: string;
                        /**
                         * Format: int32
                         * @description Value in cents.
                         * @example 2499
                         */
                        value?: number;
                        /**
                         * @description Creation date.
                         * @example 2019-01-28T20:09:43+00:00
                         */
                        creationDate?: string;
                        /**
                         * @description Date of last change.
                         * @example 2019-02-06T20:46:11.7010747+00:00
                         */
                        lastChange?: string;
                        /**
                         * @description Order group.
                         * @example 00
                         */
                        orderGroup?: string;
                        /** @description Information on each of the order's totals. */
                        totals?: {
                            /**
                             * @description Order's total ID.
                             * @example Discounts
                             */
                            id?: string;
                            /**
                             * @description Order's total name.
                             * @example Discount total.
                             */
                            name?: string;
                            /**
                             * Format: int32
                             * @description Order's total value.
                             * @example 199
                             */
                            value?: number;
                        }[];
                        /** @description Information on each item in the order. */
                        items?: {
                            /** @description Order's item unique ID. */
                            uniqueId?: string;
                            /** @description ID. */
                            id?: string;
                            /** @description Product ID. */
                            productId?: string;
                            /** @description Product Ref ID. */
                            productRefId?: string;
                            /** @description Ref ID. */
                            refId?: string;
                            /** @description European Article Number. */
                            ean?: string;
                            /** @description Name. */
                            name?: string;
                            /** @description SKU name. */
                            skuName?: string;
                            /** @description Modal type. */
                            modalType?: string;
                            /** @description Parent item index. */
                            parentItemIndex?: number;
                            /** @description Parent assembly binding. */
                            parentAssemblyBinding?: string;
                            /** @description Price expiration date and time. */
                            priceValidUntil?: string;
                            /** @description Tax value in cents. */
                            tax?: number;
                            /** @description Price in cents. */
                            price?: number;
                            /** @description List price in cents. */
                            listPrice?: number;
                            /** @description Manual price in cents. */
                            manualPrice?: number;
                            /** @description User that applied the manual price, if that is the case. */
                            manualPriceAppliedBy?: string;
                            /** @description Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
                            sellingPrice?: number;
                            /** @description Reward value in cents. */
                            rewardValue?: number;
                            /** @description Indicates whether item is a gift. */
                            isGift?: boolean;
                            /** @description Additional information. */
                            additionalInfo?: {
                                /** @description Dimension. */
                                dimension?: string;
                                /** @description Brand name. */
                                brandName?: string;
                                /** @description Brand ID. */
                                brandId?: string;
                                /** @description Offering information. */
                                offeringInfo?: string;
                                /** @description Offering type. */
                                offeringType?: string;
                                /** @description Offering type ID. */
                                offeringTypeId?: string;
                            };
                            /** @description Presale date. */
                            preSaleDate?: string;
                            /** @description Product category IDs. */
                            productCategoryIds?: string;
                            /** @description Object, where each field is an ID from `productCategoryIds. */
                            productCategories?: {
                                /** @description Product category corresponding to the ID in the field key. */
                                "{ID}"?: string;
                            };
                            /** @description Quantity. */
                            quantity?: number;
                            /** @description Seller. */
                            seller?: string;
                            /** @description Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
                            sellerChain?: string[];
                            /** @description Image URL. */
                            imageUrl?: string;
                            /** @description Detail URL. */
                            detailUrl?: string;
                            /** @description Information on services sold along with the SKU. Example: a gift package. */
                            bundleItems?: {
                                /** @description Type */
                                type?: string;
                                /** @description Service identifier. */
                                id?: number;
                                /** @description Name. */
                                name?: string;
                                /** @description Price in cents. */
                                price?: number;
                            }[];
                            /** @description Array containing information on attachments. */
                            attachments?: string[];
                            /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                            priceTags?: {
                                /** @description Price tag identifier. */
                                identifier?: string;
                                /** @description Indicates whether price tag value is applied through a percentage. */
                                isPercentual?: boolean;
                                /** @description Name. */
                                name?: string;
                                /** @description Raw value. */
                                rawValue?: number;
                                /** @description Value. */
                                value?: number;
                            }[];
                            /** @description Availability */
                            availability?: string;
                            /** @description Measurement unit */
                            measurementUnit?: string;
                            /** @description Unit multiplier */
                            unitMultiplier?: number;
                            /** @description Manufacturer code. */
                            manufacturerCode?: string;
                            /** @description Price information. */
                            priceDefinition?: {
                                /** @description Calculated selling price in cents. */
                                calculatedSellingPrice?: number;
                                /** @description Total in cents. */
                                total?: number;
                                /** @description Selling prices. */
                                sellingPrices?: {
                                    /** @description Value in cents. */
                                    value?: number;
                                    /** @description Quantity. */
                                    quantity?: number;
                                }[];
                            };
                        }[];
                        /** @description Marketplace items. */
                        marketplaceItems?: string[];
                        clientProfileData?: components["schemas"]["ClientProfileData"];
                        /** @description Gift registry data. */
                        giftRegistryData?: string | null;
                        /** @description Marketing data. */
                        marketingData?: string | null;
                        ratesAndBenefitsData?: components["schemas"]["RatesAndBenefitsData"];
                        shippingData?: components["schemas"]["ShippingData"];
                        paymentData?: components["schemas"]["PaymentData"];
                        /**
                         * @description Package attachment.
                         * @example {
                         *       "packages": []
                         *     }
                         */
                        packageAttachment?: {
                            /** @description Information on each package. */
                            packages?: {
                                /** @description Information on each item in the package. */
                                items?: {
                                    /** @description Item index in reference to the position of the item in the `items` array. */
                                    itemIndex?: number;
                                    /** @description Item quantity. */
                                    quantity?: number;
                                    /** @description Item price in cents. */
                                    price?: number;
                                    /** @description Item description. */
                                    description?: string;
                                    /** @description Item unit multiplier. */
                                    unitMultiplier?: number;
                                }[];
                                /** @description Courier. */
                                courier?: string;
                                /** @description Invoice number. */
                                invoiceNumber?: string;
                                /** @description Invoice value in cents. */
                                invoiceValue?: number;
                                /** @description Invoice URL. */
                                invoiceUrl?: string;
                                /** @description Issuance date. */
                                issuanceDate?: string;
                                /** @description Tracking number. */
                                trackingNumber?: string;
                                /** @description Invoice key. */
                                invoiceKey?: string;
                                /** @description Tracking URL. */
                                trackingUrl?: string;
                                /** @description Embedded voice in XML. */
                                embeddedInvoice?: string;
                                /** @description Invoice type `Output` for sales and `Input` for returns. */
                                type?: string;
                                /** @description Courier status. */
                                courierStatus?: string;
                                /** @description Fiscal operation code. */
                                cfop?: string;
                                /** @description Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`). */
                                restitutions?: {
                                    /** @description Information on refunds. */
                                    refund?: {
                                        /** @description Information on items. */
                                        items?: {
                                            /** @description Item index corresponding to the position of the item in the main `items` array. */
                                            itemIndex?: string;
                                            /** @description Quantity. */
                                            quantity?: number;
                                        }[];
                                    };
                                };
                                /** @description Quantity of packages involved in the order. */
                                volumes?: number;
                            }[];
                        };
                        /** @description Array with sellers information. */
                        sellers?: components["schemas"]["Seller"][];
                        /** @description Call center operator data. */
                        callCenterOperatorData?: string | null;
                        /** @description Follow up email. */
                        followUpEmail?: string;
                        /** @description Last message. */
                        lastMessage?: string | null;
                        /** @description Host name. */
                        hostname?: string;
                        /** @description Information pertinent to the order's invoice. */
                        invoiceData?: Record<string, never>;
                        changesAttachment?: components["schemas"]["ChangesAttachment"];
                        /** @description Open text field. */
                        openTextField?: string | null;
                        /**
                         * Format: int32
                         * @description Rounding error in cents.
                         */
                        roundingError?: number;
                        /** @description ID of the shopping cart from which the order was created. */
                        orderFormId?: string;
                        /** @description Commercial condition data. */
                        commercialConditionData?: string | null;
                        /** @description Indicates whether order is completed. */
                        isCompleted?: boolean;
                        /** @description Custom data. */
                        customData?: string | null;
                        storePreferencesData?: components["schemas"]["StorePreferencesData"];
                        /** @description Indicates whether cancelation is allowed for the order. */
                        allowCancellation?: boolean;
                        /** @description Indicates whether edition is allowed for the order. */
                        allowEdition?: boolean;
                        /** @description Indicates whether client is checked in. */
                        isCheckedIn?: boolean;
                        marketplace?: components["schemas"]["Marketplace"];
                        /** @description Date in which the order was authorized in UTC. */
                        authorizedDate?: string;
                        /** @description Date in which the order was invoiced in UTC. */
                        invoicedDate?: string;
                    };
                };
            };
        };
    };
    ListOrders2: {
        parameters: {
            query?: {
                /** @description Filters list to return only orders with non `null` values for the `invoiceInput` field. */
                f_hasInputInvoice?: components["parameters"]["f_hasInputInvoice"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Concatened value sufix {{creationDate}} and range date in Timestamp format.
                     * @example creationDate:[2021-11-01T00:00:00.000Z TO 2022-11-10T02:00:00.000Z]
                     */
                    f_creationDate: string;
                    /**
                     * @description Number of orders per page.
                     * @example 15
                     */
                    per_page: number;
                    /**
                     * @description Number of the page to be retrieved.
                     * @example 1
                     */
                    page: number;
                    /**
                     * @description Full-text search for the orders.
                     * @example Postman Test
                     */
                    q?: string;
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
                        /** @example close */
                        "text/plain": string;
                    };
                    "Content-Encoding"?: {
                        /** @example gzip */
                        "text/plain": string;
                    };
                    Date?: {
                        /** @example Mon, 13 Feb 2017 15:25:12 GMT */
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
                    "X-Powered-by-VTEX-Janus-Edge"?: {
                        /** @example v1.35.3 */
                        "text/plain": string;
                    };
                    "X-Track"?: {
                        /** @example stable */
                        "text/plain": string;
                    };
                    "X-VTEX-Janus-Router-Backend-App"?: {
                        /** @example omsapi-v1.5.135 */
                        "text/plain": string;
                    };
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": components["schemas"]["ListOrders"];
                };
            };
        };
    };
    StartHandling2: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the order. */
                orderId: components["parameters"]["orderId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No content */
            204: {
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
    CancelOrder2: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the order. */
                orderId: components["parameters"]["orderId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Reason for cancelling the order.
                     * @example Unexpected stock shortage
                     */
                    reason?: string;
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
                        /** @description Date and time when the notification was received. */
                        date?: string;
                        /** @description Identification of the order in the seller. */
                        orderId?: string;
                        /** @description Protocol code generated by the update. It may be `null`. */
                        receipt?: string;
                    };
                };
            };
            /** @description The credentials are not enabled to access the service. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Value not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many requests. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    InvoiceNotification2: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the order. */
                orderId: components["parameters"]["orderId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "type": "Output",
                 *       "issuanceDate": "2010-01-31",
                 *       "invoiceNumber": "9999",
                 *       "invoiceValue": "10000",
                 *       "invoiceKey": null,
                 *       "invoiceUrl": null,
                 *       "courier": null,
                 *       "trackingNumber": null,
                 *       "trackingUrl": null,
                 *       "dispatchedDate": null,
                 *       "items": [
                 *         {
                 *           "id": "1234",
                 *           "price": 10000,
                 *           "quantity": 1
                 *         }
                 *       ]
                 *     } */
                "application/json": components["schemas"]["InvoiceNotificationRequest"];
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
                        /** @description Date and time when the notification was received. */
                        date?: string;
                        /** @description Identification of the order in the seller. */
                        orderId?: string;
                        /** @description Protocol code generated by the update. It may be `null`. */
                        receipt?: string;
                    };
                };
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
    SendPaymentNotification2: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the order. */
                orderId: components["parameters"]["orderId"];
                /** @description ID of the payment. */
                paymentId: components["parameters"]["paymentId"];
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
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too Many Requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
