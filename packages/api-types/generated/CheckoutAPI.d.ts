export interface paths {
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
         * Cart simulation
         * @description This endpoint is used to simulate a cart in VTEX Checkout.
         *
         *     It receives an SKU ID, the quantity of items in the cart and the seller ID.
         *
         *     It returns all information about the cart, such as the selling price of each item, pricing and promotion data, payment and logistics info.
         *
         *     This request is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.
         *
         *     >⚠️ The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [authentication](https://developers.vtex.com/docs/guides/authentication) or [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        post: operations["CartSimulation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get current or create a new cart
         * @description You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.
         *
         *     **Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.
         *
         *
        > This request has a time out of 45 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["CreateANewCart"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get cart information by ID
         * @description Retrieves all information associated to a given shopping  cart.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 45 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | Checkout | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetCartInformationById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/items/removeAll": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Remove all items from shopping cart
         * @description This request removes all items from a given cart, leaving it empty.
         *
         *     You must send an empty JSON in the body of the request.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *     >ℹ️ Request body must always be sent with empty value "{ }" in this endpoint.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Shopping Cart Full Access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["RemoveAllItems"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/checkout/changeToAnonymousUser/{orderFormId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Remove all personal data from shopping cart
         * @description This call removes all user information, making a cart anonymous while leaving the items.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *     This call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Save OrderForm Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Removeallpersonaldata"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/items/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update cart items
         * @description You can use this request to:
         *
         *
        1. Change the quantity of one or more items in a specific cart.
         *
        2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).
         *
         *     >ℹ️ To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/items/removeAll?endpoint=post-/api/checkout/pub/orderForm/-orderFormId-/items/removeAll) endpoint.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 45 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["ItemsUpdate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add cart items
         * @description Use this request to add a new item to the shopping cart.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 45 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Items"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Handle cart items
         * @description You can use this request to:
         *
         *
        1. Change the quantity or price of one or more items to the shopping cart.
         *
        2. Add a new item to the shopping cart.
         *
         *     **Important**: To add a new item to the shopping cart, do not send the string `index` in the request body.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 45 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        patch: operations["ItemsHandle"];
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/price": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Change price of an SKU in a cart
         * @description This request changes the price of an SKU in a cart.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        You need to inform which cart you are referring to, by sending its `orderFormId` and what is the item whose price you want to change, by sending its `itemIndex`.
         *
         *
        You also need to pass the new price value in the body.
         *
         *
        Remember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pvt/configuration/orderForm) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) endpoint, making the `allowManualPrice` field `true`.
         *
         *
        > Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["PriceChange"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Ignore profile data on checkout
         * @description When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automatically.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *     Note that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        patch: operations["IgnoreProfileData"];
        trace?: never;
    };
    "/api/checkout/pub/profiles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get client profile by email
         * @description Retrieves a client's profile information by providing an email address.
         *
         *
        If the response body fields are empty, the following situations may have occurred:
         *
         *
        1. There is no client registered with the email address provided in your store, or;
         *
        2. Client profile is invalid or incomplete. However, you can use the query parameter `ensureComplete=false` to get incomplete profiles. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).
         *
         *     >⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Shopping Cart Full Access** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Checkout Admin | Shopping Cart Full Access |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["GetClientProfileByEmail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/attachments/clientProfileData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add client profile
         * @description Use this request to include client profile information to a given shopping cart.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 12 seconds.
         *
         *     >⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddClientProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/attachments/shippingData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add shipping address and select delivery option
         * @description Use this request to include shipping information and/or selected delivery option to a given shopping cart.
         *
         *     To add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 12 seconds.
         *
         *     >⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddShippingAddress"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/attachments/clientPreferencesData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add client preferences
         * @description Use this request to include client preferences information to a given shopping cart.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 12 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddClientPreferences"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/attachments/marketingData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add marketing data
         * @description Use this request to include marketing information to a given shopping cart.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 12 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddMarketingData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add payment data
         * @description Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 12 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddPaymentData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/attachments/merchantContextData": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add merchant context data
         * @description This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        > This request has a time out of 12 seconds.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddMerchantContextData"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/customData/{appId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Set multiple custom field values
         * @description Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) request. The values of these custom fields can then be updated by this request.
         *
         *
        To do that, you need to inform the ID of the app you created with the configuration API (`appId`).
         *
         *
        In the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["SetMultipleCustomFieldValues"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Set single custom field value
         * @description Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) request. The value of a specific custom field can then be updated by this request.
         *
         *
        To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).
         *
         *
        In the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["SetSingleCustomFieldValue"];
        post?: never;
        /**
         * Remove single custom field value
         * @description Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) request. The value of a specific custom field can be removed by this request.
         *
         *
        To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).
         *
         *
        You also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["Removesinglecustomfieldvalue"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pvt/configuration/orderForm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get orderForm configuration
         * @description Retrieves the settings that are currently applied to every orderForm in the account.
         *
         *
        These settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).
         *
         *
        Always use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Save OrderForm Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetorderFormconfiguration"];
        put?: never;
        /**
         * Update orderForm configuration
         * @description Determines settings that will apply to every orderForm in the account.
         *
         *
        For example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.
         *
         *
        >ℹ️ Always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pvt/configuration/orderForm).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Save OrderForm Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["UpdateorderFormconfiguration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pvt/configuration/window-to-change-seller": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get window to change seller
         * @description Retrieves a marketplace's window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
         *
         *
        > The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Save OrderForm Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetWindowToChangeSeller"];
        put?: never;
        /**
         * Update window to change seller
         * @description Updates a marketplace's window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
         *
         *
        > It is possible to check the current window using the request Get window to change seller.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Save OrderForm Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["UpdateWindowToChangeSeller"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/messages/clear": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Clear orderForm messages
         * @description This request removes all messages from the `messages` field of the orderForm , leaving it empty.
         *
         *     You must send an empty JSON in the body of the request.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *     **Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["ClearorderFormMessages"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/installments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Cart installments
         * @description Retrieves possible amount of installments and respective values for a given cart with a given payment method.
         *
         *     The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
         *
         *
        This endpoint can be used to get the installment options for only one payment method at a time.
         *
         *
        This endpoint should be called only after the selected `orderForm` already has a `paymentData`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetCartInstallments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/coupons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add coupons to the cart
         * @description Use this request to add coupons to a given shopping cart.
         *
         *
        To add multiple coupons to the same cart, you need to:
         *
         *
        1. Request the activation of this feature through the [Support VTEX](https://help.vtex.com/support) if this is the first time you perform this action on your store.
         *
        2. Submit all coupon codes in the same requisition separated by commas. E.g.: {"text": "freeshipping, discount10, holiday30"}.
         *
         *     For more information on multiple coupons, access the [coupons tutorial](https://help.vtex.com/en/tutorial/creating-a-coupon-beta--7lMk3MmhNp2IEccyGApxU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddCoupons"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/pickup-points": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List pickup points by location
         * @description Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.
         *
         *
        The pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["ListPickupPpointsByLocation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/postal-code/{countryCode}/{postalCode}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get address by postal code
         * @description Retrieves address information for a given postal code and country.
         *
         *     This request can be used to implement auto complete functionality when a customer needs to fill in an address.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        get: operations["GetAddressByPostalCode"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orderForm/{orderFormId}/transaction": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Place order from an existing cart
         * @description This endpoint places an order from an existing `orderForm` object, meaning an existing cart.
         *
         *
        After the creation of an order with this request, you have five minutes to send payment information and then request payment processing.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Read Shopping Cart** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["PlaceOrderFromExistingOrderForm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Place order
         * @description Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.
         *
         *     >⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Orders Full Access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["PlaceOrder"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/gatewayCallback/{orderGroup}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Process order
         * @description Order processing callback request, which is made after an order's payment is approved.
         *
         *
        > This request has to be made within five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Save Order Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["ProcessOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/checkout/pub/regions/{regionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get sellers by region or address
         * @description Retrieves a list of sellers that cater to a specific region or address, according to your setup of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/docs/guides/region-v2-release).
         *
         *
        To access the list of sellers, you must choose one of the following methods:
         *
         *
        1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;
         *
        2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.
         *
         *
        > The `regionId` and `country` parameters are indicated as required in this documentation. However, only one of them should be sent in the request according to one of the methods mentioned above.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Checkout | CheckoutResources | **Shopping Cart Full Access** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetSellersByRegion"];
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
        orderForm: {
            /** @description ID of the orderForm corresponding to a specific cart. */
            orderFormId?: string;
            /** @description Attribute created by the seller, in their VTEX store configuration. */
            salesChannel?: string;
            /** @description Indicates whether the user is logged into the store. */
            loggedIn?: boolean;
            /** @description Indicates whether order is checked in. */
            isCheckedIn?: boolean;
            /** @description ID of the store. */
            storeId?: string | null;
            /** @description Permission to modify item price manually. */
            allowManualPrice?: boolean;
            /** @description Data can be edited. */
            canEditData?: boolean;
            /** @description Unique ID associated with the customer profile. */
            userProfileId?: string;
            /** @description Profile provider. */
            profileProvider?: string;
            /** @description Available accounts. */
            availableAccounts?: string[];
            /** @description Information on each available address. */
            availableAddresses?: {
                /** @description Address type. */
                addressType?: string;
                /** @description Name of the receiver. */
                receiverName?: string;
                /** @description Address ID. */
                addressId?: string | null;
                /** @description Indicates whether address is disposable. */
                isDisposable?: boolean;
                /** @description City of the address. */
                city?: string;
                /** @description State of the address. */
                state?: string;
                /** @description Country of the address. ISO three-letter code. */
                country?: string;
                /** @description Street of the address. */
                street?: string;
                /** @description Number of the address. */
                number?: string;
                /** @description Neighborhood of the address. */
                neighborhood?: string;
                /** @description Complement to the address. */
                complement?: string | null;
                /** @description Reference that may help in the location of the address. */
                reference?: string | null;
                /** @description Array with two strings that represent geocoordinates: first latitude, then longitude. */
                geoCoordinates?: number[];
            }[];
            /** @description User type. */
            userType?: string | null;
            /** @description Ignore customer profile data. */
            ignoreProfileData?: boolean;
            /** @description Total value of the order without separating cents. For example, $24.99 is represented as `2499`. */
            value?: number;
            /** @description Array containing an object for each message generated by our servers while processing the request. */
            messages?: string[];
            /** @description Information on each item in the order. */
            items?: {
                /** @description Unique ID. */
                uniqueId?: string;
                /** @description ID of the item. */
                id?: string;
                /** @description Product ID. */
                productId?: string;
                /** @description Product Ref ID. */
                productRefId?: string;
                /** @description Ref ID. */
                refId?: string;
                /** @description European Article Number. */
                ean?: string | null;
                /** @description Product name. */
                name?: string;
                /** @description SKU name. */
                skuName?: string;
                /** @description Modal type. */
                modalType?: string | null;
                /** @description Parent item index. */
                parentItemIndex?: number | null;
                /** @description Parent assembly binding. */
                parentAssemblyBinding?: string | null;
                /** @description Price expiration date and time. */
                priceValidUntil?: string;
                /** @description Tax value in cents. */
                tax?: number;
                /** @description A unique identifier code assigned to a tax within the VTEX Admin. */
                taxCode?: string;
                /** @description Price in cents. */
                price?: number;
                /** @description List price in cents. */
                listPrice?: number;
                /** @description Manual price in cents. */
                manualPrice?: number | null;
                /** @description User that applied the manual price, if that is the case. */
                manualPriceAppliedBy?: string | null;
                /** @description Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
                sellingPrice?: number;
                /** @description Reward value in cents. */
                rewardValue?: number;
                /** @description Indicates whether item is a gift. */
                isGift?: boolean;
                /** @description Additional information. */
                additionalInfo?: {
                    /** @description Dimension. */
                    dimension?: string | null;
                    /** @description Brand name. */
                    brandName?: string;
                    /** @description Brand ID. */
                    brandId?: string;
                    /** @description Offering information. */
                    offeringInfo?: string | null;
                    /** @description Offering type. */
                    offeringType?: string | null;
                    /** @description Offering type ID. */
                    offeringTypeId?: string | null;
                };
                /** @description Presale date. */
                preSaleDate?: string | null;
                /** @description Product category IDs. */
                productCategoryIds?: string;
                /** @description Object, where each field is an ID from `productCategoryIds`. */
                productCategories?: {
                    /** @description Product category corresponding to the ID in the field key. */
                    "{ID}"?: string;
                };
                /** @description Quantity. */
                quantity?: number;
                /** @description Seller. */
                seller?: string;
                /** @description Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
                sellerChain?: string[];
                /** @description Image URL. */
                imageUrl?: string;
                /** @description Detail URL. */
                detailUrl?: string;
                /** @description Information on services sold along with the SKU. Example: a gift package. */
                bundleItems?: {
                    /** @description Service type. */
                    type?: string;
                    /** @description Service identifier. */
                    id?: number;
                    /** @description Service name. */
                    name?: string;
                    /** @description Service price in cents. */
                    price?: number;
                }[];
                /** @description Array containing information on attachments. */
                attachments?: string[];
                /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                priceTags?: {
                    /** @description Price tag identifier. */
                    identifier?: string | null;
                    /** @description Indicates whether price tag value is applied through a percentage. */
                    isPercentual?: boolean;
                    /** @description Price tag name. */
                    name?: string;
                    /** @description Price tag raw value. */
                    rawValue?: number;
                    /** @description Price tag value. */
                    value?: number;
                }[];
                /** @description Availability. */
                availability?: string;
                /** @description Measurement unit. */
                measurementUnit?: string;
                /** @description Unit multiplier. */
                unitMultiplier?: number;
                /** @description Manufacturer code. */
                manufacturerCode?: string | null;
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
            /** @description Array containing the data of the item selected as a gift. */
            selectableGifts?: string[];
            /** @description Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value). */
            totalizers?: Record<string, never>[];
            /** @description Shipping information pertinent to the order. */
            shippingData?: {
                /** @description Address information. */
                address?: {
                    /** @description Type of address. For example, `Residential` or `Pickup`. */
                    addressType?: string;
                    /** @description Name of the person who is going to receive the order. */
                    receiverName?: string;
                    /** @description Address ID. */
                    addressId?: string | null;
                    /** @description Indicates whether address is disposable. */
                    isDisposable?: boolean;
                    /** @description Postal code. */
                    postalCode?: string;
                    /** @description City of the shipping address. */
                    city?: string;
                    /** @description State of the shipping address. */
                    state?: string;
                    /** @description Three letter ISO code of the country of the shipping address. */
                    country?: string;
                    /** @description Street of the shipping address. */
                    street?: string;
                    /** @description Number of the building, house or apartment in the shipping address. */
                    number?: string;
                    /** @description Neighborhood of the shipping address. */
                    neighborhood?: string;
                    /** @description Complement to the shipping address, in case it applies. */
                    complement?: string | null;
                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                    reference?: string | null;
                    /** @description Array with two strings that represent geocoordinates: first latitude, then longitude. */
                    geoCoordinates?: number[];
                } | null;
                /** @description Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
                logisticsInfo?: {
                    /** @description Index corresponding to the position of the object in the `items` array. */
                    itemIndex?: number;
                    /** @description SLA selected by the customer. */
                    selectedSla?: string | null;
                    /** @description Delivery channel selected by the customer. */
                    selectedDeliveryChannel?: string | null;
                    /** @description Address ID. */
                    addressId?: string | null;
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
                        lockTTL?: string | null;
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
                            address?: {
                                /** @description Type of address. For example, `Residential` or `Pickup`. */
                                addressType?: string;
                                /** @description Postal code. */
                                postalCode?: string;
                                /** @description City of the shipping address. */
                                city?: string;
                                /** @description State of the shipping address. */
                                state?: string;
                                /** @description Three letter ISO code of the country of the shipping address. */
                                country?: string;
                                /** @description Street of the shipping address. */
                                street?: string;
                                /** @description Number of the building, house or apartment in the shipping address. */
                                number?: string;
                                /** @description Neighborhood of the shipping address. */
                                neighborhood?: string;
                                /** @description Complement to the shipping address, in case it applies. */
                                complement?: string | null;
                                /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                reference?: string | null;
                                /** @description Array with two strings that repesent geocoordinates: first latitude, then longitude. */
                                geoCoordinates?: number[];
                            } | null;
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
                    /** @description List of countries that the item may be shipped to. */
                    shipsTo?: string[];
                    /** @description Item ID. */
                    itemId?: string;
                    /** @description List of available delivery channels. */
                    deliveryChannels?: {
                        /** @description Delivery channel ID. */
                        id?: string;
                    }[];
                }[];
                /** @description Array with information on the selected addresses for the order. */
                selectedAddresses?: {
                    /** @description Type of address. For example, `Residential` or `Pickup`. */
                    addressType?: string;
                    /** @description Name of the person who is going to receive the order. */
                    receiverName?: string;
                    /** @description Address ID. */
                    addressId?: string | null;
                    /** @description Indicates whether address is disposable. */
                    isDisposable?: boolean;
                    /** @description Postal code. */
                    postalCode?: string;
                    /** @description City of the shipping address. */
                    city?: string;
                    /** @description State of the shipping address. */
                    state?: string;
                    /** @description Three letter ISO code of the country of the shipping address. */
                    country?: string;
                    /** @description Street of the shipping address. */
                    street?: string;
                    /** @description Number of the building, house or apartment in the shipping address. */
                    number?: string;
                    /** @description Neighborhood of the shipping address. */
                    neighborhood?: string;
                    /** @description Complement to the shipping address, in case it applies. */
                    complement?: string;
                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                    reference?: string | null;
                    /** @description Array with two strings that represent geocoordinates: first latitude, then longitude. */
                    geoCoordinates?: number[];
                }[];
                /** @description Array with information on the available addresses for the order. */
                availableAddresses?: {
                    /** @description Type of address. For example, `Residential` or `Pickup`. */
                    addressType?: string;
                    /** @description Name of the person who is going to receive the order. */
                    receiverName?: string;
                    /** @description Address ID. */
                    addressId?: string | null;
                    /** @description Indicates whether address is disposable. */
                    isDisposable?: boolean;
                    /** @description Postal code. */
                    postalCode?: string;
                    /** @description City of the shipping address. */
                    city?: string;
                    /** @description State of the shipping address. */
                    state?: string;
                    /** @description Three letter ISO code of the country of the shipping address. */
                    country?: string;
                    /** @description Street of the shipping address. */
                    street?: string;
                    /** @description Number of the building, house or apartment in the shipping address. */
                    number?: string;
                    /** @description Neighborhood of the shipping address. */
                    neighborhood?: string;
                    /** @description Complement to the shipping address, in case it applies. */
                    complement?: string;
                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                    reference?: string | null;
                    /** @description Array with two strings that represent geocoordinates: first latitude, then longitude. */
                    geoCoordinates?: number[];
                }[];
            } | null;
            /** @description Customer's profile information. */
            clientProfileData?: {
                /** @description Email address. */
                email?: string | null;
                /** @description First name. */
                firstName?: string | null;
                /** @description Last name. */
                lastName?: string;
                /** @description Type of the document informed by the customer. */
                documentType?: string;
                /** @description Document informed by the customer. */
                document?: string;
                /** @description Phone number. */
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
            } | null;
            /** @description Information on the order's payment. */
            paymentData?: {
                /** @description Gift card information, if it applies to the order. */
                giftCards?: {
                    /** @description Gift card redemption code. */
                    redemptionCode?: string;
                    /** @description Gift card value in cents. */
                    value?: number;
                    /** @description Gift card balance in cents. */
                    balance?: number;
                    /** @description Gift card name. */
                    name?: string;
                    /** @description Gift card ID. */
                    id?: string;
                    /** @description Indicates whether gift card is in use. */
                    inUse?: boolean;
                    /** @description Indicates whether gift card is special. */
                    isSpecialCard?: boolean;
                }[];
                /** @description Information on each transaction pertinent to the order. */
                transactions?: {
                    /** @description Indicates whether transaction is active. */
                    isActive?: boolean;
                    /** @description Transaction ID. */
                    transactionId?: string;
                    /** @description Merchant name. */
                    merchantName?: string;
                    /** @description Information on each payment. */
                    payments?: {
                        /** @description Account ID. */
                        accountId?: string;
                        /** @description Bin. */
                        bin?: string | null;
                        /** @description Number of installments. */
                        installments?: number;
                        /** @description Payment system. */
                        paymentSystem?: string;
                        /** @description Reference value for calculating interest rates, in case it applies. Displayed in cents. */
                        referenceValue?: number;
                        /** @description Value including interest, in case it applies. Displayed in cents. */
                        value?: number;
                    }[];
                    /** @description Indicates whather transaction is shared. */
                    sharedTransaction?: boolean;
                }[];
            };
            /** @description Object containing promotion data such as coupon tracking information and internal or external UTMs. */
            marketingData?: {
                /**
                 * @description Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
                 * @example free-shipping
                 */
                coupon?: string;
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
                 * @description utmi_page (internal utm).
                 * @example utmi_page-example
                 */
                utmiPage?: string | null;
                /**
                 * @description utmi_part (internal utm).
                 * @example utmi_part-example
                 */
                utmiPart?: string | null;
                /**
                 * @description utmi_campaign (internal utm).
                 * @example utmi_campaign-example
                 */
                utmiCampaign?: string | null;
            } | null;
            /** @description Information on each seller. */
            sellers?: {
                /** @description Seller ID. */
                id?: string;
                /** @description Seller name. */
                name?: string;
                /** @description Seller logo. */
                logo?: string | null;
            }[];
            /** @description Object containing preferences from the client who placed the order. */
            clientPreferencesData?: {
                /** @description Client's locale. Examples: `pt-BR` and `en-US`. */
                locale?: string;
                /**
                 * @description `true` if the client opted to receive newsletter from the store.
                 * @example false
                 */
                optinNewsLetter?: boolean | null;
            };
            /** @description Object containing commercial condition information. */
            commercialConditionData?: Record<string, never>;
            /** @description Object containing data from the store's configuration (stored in VTEX's License Manager). */
            storePreferencesData?: Record<string, never>;
            /** @description Gift registry list information. */
            giftRegistryData?: Record<string, never>;
            /**
             * @description Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).
             * @example open-text-example
             */
            openTextField?: string | null;
            /** @description Object containing information pertinent to the order's invoice. */
            invoiceData?: Record<string, never>;
            /** @description Customer additional information. */
            customData?: Record<string, never>;
            /** @description Item metadata. */
            itemMetadata?: {
                /** @description List of objects containing metadata on each item in the order. */
                items?: {
                    /** @description Item ID. */
                    id?: string;
                    /** @description Seller. */
                    seller?: string;
                    /** @description Product name. */
                    name?: string;
                    /** @description SKU name. */
                    skuName?: string;
                    /** @description Product ID. */
                    productId?: string;
                    /** @description Ref ID. */
                    refId?: string;
                    /** @description European Article Number. */
                    ean?: string | null;
                    /** @description Image URL. */
                    imageUrl?: string;
                    /** @description Detail URL. */
                    detailUrl?: string;
                }[];
            };
            /** @description Hooks information. */
            hooksData?: Record<string, never>;
            /** @description Information on rates and benefits that apply to the order. */
            ratesAndBenefitsData?: {
                /** @description List with rates and benefits identifiers. */
                rateAndBenefitsIdentifiers?: string[];
                /** @description List with rates and benefits teasers. */
                teaser?: string[];
            };
            /** @description Subscription information. */
            subscriptionData?: Record<string, never>;
            /** @description Object containing information about the ordering of items within the `orderForm`. */
            itemsOrdination?: {
                /** @description Criteria adopted to order the items in the list. */
                criteria?: string;
                /** @description Indicates whether the ordering is ascending. */
                ascending?: boolean;
            };
        };
        /** @example {
         *       "items": [
         *         {
         *           "id": "{{skuId}}",
         *           "quantity": 1,
         *           "seller": "1"
         *         }
         *       ],
         *       "country": "{{countryCode-ISO-3-digits}}"
         *     } */
        OrderFormSimulationRequest: {
            /** @description Array containing information about the SKUs inside the cart to be simulated. */
            items: components["schemas"]["Item"][];
            country: string;
        };
        /**
         * Item
         * @example {
         *       "id": "{{skuId}}",
         *       "quantity": 1,
         *       "seller": "1"
         *     }
         */
        Item: {
            /** @description The SKU ID. */
            id: string;
            /**
             * Format: int32
             * @description The quantity of items of this specific SKU in the cart to be simulated.
             */
            quantity: number;
            /** @description The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin. */
            seller: string;
        };
        /** @example {
         *       "price": 10000
         *     } */
        PriceChangeRequest: {
            /**
             * Format: int32
             * @description The new price of the item.
             */
            price: number;
        };
        SetsinglecustomfieldvalueRequest: {
            /** @description The value you want to set to the specified field. */
            value: string;
        };
        /** @example {
         *       "paymentConfiguration": {
         *         "requiresAuthenticationForPreAuthorizedPaymentOption": false
         *       },
         *       "taxConfiguration": null,
         *       "minimumQuantityAccumulatedForItems": 1,
         *       "decimalDigitsPrecision": 2,
         *       "minimumValueAccumulated": null,
         *       "apps": null,
         *       "allowMultipleDeliveries": null,
         *       "allowManualPrice": null
         *     } */
        UpdateorderFormconfigurationRequest: {
            paymentConfiguration: components["schemas"]["PaymentConfiguration"];
            /** @description External tax service configuration. */
            taxConfiguration: {
                /** @description Endpoint URL. */
                url?: string | null;
                /** @description Authorization header. */
                authorizationHeader?: string | null;
                /**
                 * @description Custom data ID sent to the tax system.
                 * @example 12345
                 */
                appId?: string;
                /** @description Indicates whether the marketplace is responsible for the products taxes. */
                isMarketplaceResponsibleForTaxes?: unknown;
            } | null;
            /**
             * Format: int32
             * @description Minimum SKU quantity by cart.
             */
            minimumQuantityAccumulatedForItems: number;
            /**
             * Format: int32
             * @description Number of price digits.
             */
            decimalDigitsPrecision: number;
            /** @description Minimum cart value. */
            minimumValueAccumulated: number | null;
            /** @description Array of objects containing Apps configuration information. */
            apps: {
                /**
                 * @description App ID.
                 * @example birthdayApp
                 */
                id?: string;
                /** @description Array of fields available to the app. */
                fields?: string[];
                /**
                 * @description App major version.
                 * @example 1
                 */
                major?: number;
            }[] | null;
            /** @description On the same purchase, allows the selection of items from multiple delivery channels. */
            allowMultipleDeliveries: boolean | null;
            /** @description Allows the editing of SKU prices right in the cart. */
            allowManualPrice: boolean | null;
            /** @description Allows the input of a limit of white label sellers involved on the cart. */
            maxNumberOfWhiteLabelSellers?: number;
            /** @description Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data. */
            maskFirstPurchaseData?: boolean;
            /**
             * @description If the response body is masked, on a first purchase, this flag causes the state (UF) to be masked. The default behavior is to be masked.
             * @default true
             */
            maskStateOnAddress: boolean;
            /**
             * @description Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)
             *
             *     Possible values are:
             *
             *     - `"never"`: no purchases are validated with reCAPTCHA.
             *     - `null`: no purchases are validated with reCAPTCHA. The same as `never`.
             *     - `"always"`: every purchase is validated with reCAPTCHA.
             *     - `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.
             * @example vtexCriteria
             */
            recaptchaValidation?: string | null;
            /** @description Indicates whether authentication is required for completing purchases. */
            requiresLoginToPlaceOrder?: boolean;
            /** @description Minimum interval (in seconds) between successive purchases. */
            minimumPurchaseDowntimeSeconds?: number;
            /** @description Minimum cart existence period (in seconds) before allowing the use of a new credit card. */
            cartAgeToUseNewCardSeconds?: number;
            /**
             * @description If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt).
             * @example 6
             */
            paymentSystemToCheckFirstInstallment?: string;
        };
        /**
         * PaymentConfiguration
         * @description Payment Configuration object.
         * @example {
         *       "requiresAuthenticationForPreAuthorizedPaymentOption": false,
         *       "allowInstallmentsMerge": false,
         *       "blockPaymentSession": false
         *     }
         */
        PaymentConfiguration: {
            /** @description Determines whether pre-authorized payments require authentication. */
            requiresAuthenticationForPreAuthorizedPaymentOption: boolean;
            /** @description By default (when `false`), on a multi-seller purchase is on the run, a simple intersection with installments options configured by every seller will be available. When `true`, this option allows a more complex but flexible installment option, since it considers max installments of every seller configuration, even if those don't match. Installment values ​​may not be equal in this case. */
            allowInstallmentsMerge?: boolean;
            /** @description Indicates whether shoppers can add credit cards in your store's `My Account` section. */
            blockPaymentSession?: boolean;
        };
        /** @description Object containing the days after order cancelation by a seller. */
        WaitingTime: {
            /** @description Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order. */
            waitingTime: number;
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    CartSimulation: {
        parameters: {
            query?: {
                /** @description This parameter defines which promotions apply to the simulation. Use `0` for simulations at cart stage, which means all promotions apply. In case of window simulation use `1`, which indicates promotions that apply nominal discounts over the total purchase value shouldn't be considered on the simulation.
                 *
                 *
                Note that if this not sent, the parameter is `1`. */
                RnbBehavior?: number;
                /** @description Trade Policy (Sales Channel) identification. */
                sc?: number;
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
                    /**
                     * @description Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values.
                     * @example BRA
                     */
                    country?: string;
                    /**
                     * @description Postal code.
                     * @example 12345-000
                     */
                    postalCode?: string;
                    /**
                     * @description Array containing two floats with geocoordinates, first longitude, then latitude.
                     * @example [
                     *       -47.924747467041016,
                     *       -15.832582473754883
                     *     ]
                     */
                    geoCoordinates?: number[];
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
                            /** @description A unique identifier code assigned to a tax within the VTEX Admin. */
                            taxCode?: string;
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
                            /** @description Array containing offering information of SKU service. A service is an item that may come with a product, optionally and with cost. It is used to assign a value of an additional service itself to an SKU. */
                            offerings?: {
                                /** @description Service type. */
                                type?: string;
                                /** @description Service type ID. */
                                id?: string;
                                /** @description Name of the service type. */
                                name?: string;
                                /** @description Option to display the service type on the gift card. */
                                allowGiftMessage?: boolean;
                                /** @description Array of attachments that will be added to the service type. The attachment is used to add customized information to the service. */
                                attachmentOfferings?: string[];
                                /** @description Service type price. */
                                price?: number;
                            }[];
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
                                identifier?: string | null;
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
                        /** @description Information on pricing and promotions that apply to the order. */
                        ratesAndBenefitsData?: {
                            /** @description List with pricing and promotions identifiers. */
                            rateAndBenefitsIdentifiers?: string[];
                            /** @description List with pricing and promotions teaser. */
                            teaser?: string[];
                        };
                        /** @description Payment data information. */
                        paymentData?: {
                            /** @description List of Installment options. */
                            installmentOptions?: {
                                /** @description Payment system identification. */
                                paymentSystem?: number;
                                /** @description Card bin. */
                                bin?: string | null;
                                /** @description Payment name. */
                                paymentName?: string | null;
                                /** @description Payment group name. */
                                paymentGroupName?: string | null;
                                /** @description Total value assigned to this payment. */
                                value?: number;
                                /** @description Installment information. */
                                installments?: {
                                    /** @description Count information. */
                                    count?: number;
                                    /** @description Indicates whether the payment has interest. */
                                    hasInterestRate?: boolean;
                                    /** @description Interest rate value. */
                                    interestRate?: number;
                                    /** @description Value of the order without the interest rate. The value is shown without separating cents. */
                                    value?: number;
                                    /** @description Total value of the order without separating cents. For example, $24.99 is represented `2499`. */
                                    total?: number;
                                    /** @description Seller merchant installments information. */
                                    sellerMerchantInstallments?: Record<string, never>[];
                                }[];
                            }[];
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
                            payments?: string[];
                            /** @description Gift card information, if it applies to the order. */
                            giftCards?: string[];
                            /** @description Array of gift card messages. */
                            giftCardMessages?: string[];
                            /** @description Available accounts. */
                            availableAccounts?: string[];
                            /** @description Available tokens. */
                            availableTokens?: string[];
                            /** @description Available associations. */
                            availableAssociations?: Record<string, never>;
                        };
                        /** @description Array containing the data of the items selected as a gift. */
                        selectableGifts?: string[];
                        /** @description Object containing promotion data such as coupon tracking information and internal or external UTMs. */
                        marketingData?: Record<string, never>;
                        /** @description Postal code. */
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
                            shipsTo?: string[];
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
                                lockTTL?: string | null;
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
                            messages?: string[];
                            /** @description Purchase conditions information. */
                            purchaseConditions?: {
                                /** @description List of objects containing purchase condition information on each item in the order. */
                                itemPurchaseConditions?: {
                                    /** @description Item ID. */
                                    id?: string;
                                    /** @description Seller. */
                                    seller?: string;
                                    /** @description Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
                                    sellerChain?: string[];
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
                                        lockTTL?: string | null;
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
                            pickupPoints?: string[];
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
                                    assemblyOptions?: string[];
                                }[];
                            };
                        }[];
                    };
                };
            };
        };
    };
    CreateANewCart: {
        parameters: {
            query?: {
                /** @description Use this query parameter to create a new empty shopping cart. */
                forceNewCart?: boolean;
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
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    GetCartInformationById: {
        parameters: {
            query?: {
                /** @description It is possible to use the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/cart-update#itemsupdate) so as to allow outdated information in the `orderForm`, which may improve performance in some cases. To guarantee that all cart information is updated, send this request with this parameter as `true`. We recommend doing this in the final stages of the shopping experience, starting from the checkout page. */
                refreshOutdatedData?: boolean;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart whose information you want to retrieve. */
                orderFormId: string;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    RemoveAllItems: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart whose items you want to remove. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    Removeallpersonaldata: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart whose user's personal data you want to remove. */
                orderFormId: string;
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
                    "text/plain": Record<string, never>;
                };
            };
        };
    };
    ItemsUpdate: {
        parameters: {
            query?: {
                /** @description In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.
                 *
                 *
                This array accepts strings and currently the only possible value is `”paymentData”`. */
                allowedOutdatedData?: string[];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the `orderForm` corresponding to the cart whose items you want to update. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Array containing the cart items. Each object inside this array corresponds to a different item. */
                    orderItems?: {
                        /**
                         * Format: int32
                         * @description The quantity of the item in the cart.
                         * @example 3
                         */
                        quantity?: number;
                        /**
                         * @description The position of the item in the array.
                         * @example 0
                         */
                        index?: number;
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
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    Items: {
        parameters: {
            query?: {
                /** @description In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.
                 *
                 *
                This array accepts strings and currently the only possible value is `”paymentData”`. */
                allowedOutdatedData?: string[];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart in which the new item will be added. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Array containing the cart items. Each object inside this array corresponds to a different item. */
                    orderItems?: {
                        /**
                         * Format: int32
                         * @description The quantity of the item (SKU) in the cart.
                         * @example 3
                         */
                        quantity: number;
                        /**
                         * @description The seller responsible for the SKU.
                         * @example 1
                         */
                        seller: string;
                        /**
                         * @description The ID of the SKU in VTEX platform.
                         * @example 2005
                         */
                        id: string;
                        /**
                         * @description The position of the item in the array.
                         * @example 0
                         */
                        index: number;
                        /**
                         * @description Price of the item in cents. Send this value in case you want to make a bulk price change.
                         * @example 1099
                         */
                        price?: number;
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
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    ItemsHandle: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart in which items will be handled. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Array containing the cart items. Each object inside this array corresponds to a different item. */
                    orderItems?: {
                        /**
                         * @description The ID of the SKU in VTEX platform.
                         * @example 2005
                         */
                        id: string;
                        /**
                         * Format: int32
                         * @description The quantity of the item (SKU) in the cart.
                         * @example 3
                         */
                        quantity: number;
                        /**
                         * @description The seller responsible for the SKU.
                         * @example 1
                         */
                        seller: string;
                        /**
                         * @description The position of the item in the array. This string should be sent only to modify price or quantity of an item. NOTE: This string should not be sent when you are adding a new item to the cart.
                         * @example 0
                         */
                        index?: number;
                        /**
                         * @description Price of the item in cents. Send this value in case you want to make a bulk price change.
                         * @example 1099
                         */
                        price?: number;
                        /** @description Array containing information on attachments. */
                        attachments?: {
                            /**
                             * @description Attachment identification.
                             * @example Packages
                             */
                            name?: string;
                            /** @description Attachment content data. E.g. `"Do you want to receive packages?": "Yes"`. */
                            content?: {
                                /**
                                 * @description Content referring to the customization requested by the customer.
                                 * @example content-example
                                 */
                                content?: string;
                            } | null;
                        }[];
                        /**
                         * @description Indicates whether the item can be splitted.
                         * @example false
                         */
                        noSplitItem?: boolean;
                        /** @description In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance. This array accepts strings and currently the only possible value is `"paymentData"`. */
                        allowedOutdatedData?: string[];
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
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    PriceChange: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart whose items will have the price changed. */
                orderFormId: string;
                /** @description The index of the item in the cart. Each cart item is identified by an index, starting in 0. */
                itemIndex: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "price": 10000
                 *     } */
                "application/json": components["schemas"]["PriceChangeRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    IgnoreProfileData: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart whose items will have the price changed. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "ignoreProfileData": true
                 *     } */
                "application/json": {
                    /**
                     * @description Indicates whether profile data should be ignored.
                     * @example false
                     */
                    ignoreProfileData?: boolean;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    GetClientProfileByEmail: {
        parameters: {
            query: {
                /** @description Client's email address to be searched. */
                email: string;
                /** @description Indicates whether the returned profiles must be complete or not. */
                ensureComplete?: boolean;
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
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Unique ID associated with the customer profile. */
                        userProfileId?: string;
                        /** @description Profile provider. */
                        profileProvider?: string;
                        /** @description Available accounts. */
                        availableAccounts?: string[];
                        /** @description Information on each available address. */
                        availableAddresses?: {
                            /** @description Address type. */
                            addressType?: string;
                            /** @description Name of the receiver. */
                            receiverName?: string;
                            /** @description Address ID. */
                            addressId?: string | null;
                            /** @description Indicates whether address is disposable. */
                            isDisposable?: boolean;
                            /** @description City of the address. */
                            city?: string;
                            /** @description State of the address. */
                            state?: string;
                            /** @description Country of the address. ISO three-letter code. */
                            country?: string;
                            /** @description Street of the address. */
                            street?: string;
                            /** @description Number of the address. */
                            number?: string;
                            /** @description Neighborhood of the address. */
                            neighborhood?: string;
                            /** @description Complement to the address. */
                            complement?: string | null;
                            /** @description Reference that may help in the location of the address. */
                            reference?: string | null;
                            /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                            geoCoordinates?: number[];
                        }[];
                        /** @description Customer profile information. */
                        userProfile?: {
                            /** @description Email address. */
                            email?: string | null;
                            /** @description First name. */
                            firstName?: string | null;
                            /** @description Last name. */
                            lastName?: string;
                            /** @description Document. */
                            document?: string;
                            /** @description Document type. */
                            documentType?: string;
                            /** @description Telephone number. */
                            phone?: string;
                            /** @description Name of the company. Used for corporate clients. */
                            corporateName?: string | null;
                            /** @description Trade name. Used for corporate clients. */
                            tradeName?: string | null;
                            /** @description Document. Used for corporate clients. */
                            corporateDocument?: string | null;
                            /** @description State inscription. Used for corporate clients. */
                            stateInscription?: string | null;
                            /** @description Telephone number. Used for corporate clients. */
                            corporatePhone?: string | null;
                            /**
                             * @description Indicates whether client is corporate.
                             * @example false
                             */
                            isCorporate?: boolean;
                            /** @description Profile complete when loading. */
                            profileCompleteOnLoading?: boolean | null;
                            /** @description Profile error when loading. */
                            profileErrorOnLoading?: string | null;
                            /** @description Customer class. */
                            customerClass?: string | null;
                        };
                        /** @description Indicates whether customer profile is complete. */
                        isComplete?: boolean;
                    };
                };
            };
        };
    };
    AddClientProfile: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive client profile information. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Customer's email address.
                     * @example customer@examplemail.com
                     */
                    email: string | null;
                    /**
                     * @description Customer's first name.
                     * @example first-name
                     */
                    firstName: string | null;
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
                    corporateName?: string;
                    /**
                     * @description Trade name, if the customer is a legal entity.
                     * @example trade-name
                     */
                    tradeName?: string;
                    /**
                     * @description Corporate document, if the customer is a legal entity.
                     * @example 12345678000100
                     */
                    corporateDocument?: string;
                    /**
                     * @description State inscription, if the customer is a legal entity.
                     * @example 12345678
                     */
                    stateInscription?: string;
                    /**
                     * @description Corporate phone number, if the customer is a legal entity.
                     * @example +551100988887777
                     */
                    corporatePhone?: string;
                    /**
                     * @description Set `true` if the customer is a legal entity.
                     * @example false
                     */
                    isCorporate?: boolean;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    AddShippingAddress: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive client profile information. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description This field should be sent as `false` to prevent the address information from being filled in automatically based on the `postalCode` information.
                     * @example false
                     */
                    clearAddressIfPostalCodeNotFound?: boolean;
                    /** @description List of objects with addresses information. */
                    selectedAddresses?: {
                        /**
                         * @description Type of address. For example, `Residential` or `Pickup`, among others.
                         * @example residential
                         */
                        addressType?: string;
                        /**
                         * @description Name of the person who is going to receive the order.
                         * @example receiver name
                         */
                        receiverName?: string;
                        /**
                         * @description Address ID.
                         * @example c3701fc4c61b4d1b91f67e81415db44d
                         */
                        addressId?: string | null;
                        /**
                         * @description Postal Code.
                         * @example 12345-000
                         */
                        postalCode?: string;
                        /**
                         * @description City of the shipping address.
                         * @example Rio de Janeiro
                         */
                        city?: string;
                        /**
                         * @description State of the shipping address.
                         * @example RJ
                         */
                        state?: string;
                        /**
                         * @description Three letter ISO code of the country of the shipping address.
                         * @example BRA
                         */
                        country?: string;
                        /**
                         * @description Street of the shipping address.
                         * @example Praia de Botafogo
                         */
                        street?: string;
                        /**
                         * @description Number of the building, house or apartment in the shipping address.
                         * @example 300
                         */
                        number?: string;
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
                        /**
                         * @description Array containing two floats with geocoordinates, first longitude, then latitude.
                         * @example [
                         *       -47.924747467041016,
                         *       -15.832582473754883
                         *     ]
                         */
                        geoCoordinates?: number[];
                    }[];
                    /** @description Array with logistics information on each item of the `items` array in the `orderForm`. */
                    logisticsInfo?: {
                        /**
                         * @description Index of item in items array.
                         * @example 0
                         */
                        itemIndex?: number;
                        /**
                         * @description Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`.
                         * @example delivery
                         */
                        selectedDeliveryChannel?: string | null;
                        /**
                         * @description Selected SLA. For example, `"normal"` or `"express"`.
                         * @example normal
                         */
                        selectedSla?: string | null;
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
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    AddClientPreferences: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive client profile information. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Locale chosen by the shopper. Determines website language.
                     * @example EN
                     */
                    locale?: string;
                    /**
                     * @description Indicates whether the shopper opted in to receive the store's news letter.
                     * @example false
                     */
                    optinNewsLetter?: boolean | null;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    AddMarketingData: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive client profile information. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
                     *
                     *
                    To send more than one coupon code to the same cart, use commas. E.g.`"sales25, blackfriday30"`.
                     * @example free-shipping
                     */
                    coupon?: string;
                    /**
                     * @description Marketing tags. Limited to a maximum of 50 items.
                     * @example [
                     *       "tag1",
                     *       "tag2"
                     *     ]
                     */
                    marketingTags?: string[];
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
                     * @description UTMI page (internal utm).
                     * @example utmi_page-example
                     */
                    utmiPage?: string;
                    /**
                     * @description UTMI part (internal utm).
                     * @example utmi_part-exmaple
                     */
                    utmiPart?: string;
                    /**
                     * @description UTMI campaign (internal utm).
                     * @example utmi_campaign-exmaple
                     */
                    utmiCampaign?: string;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    AddPaymentData: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive client profile information. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Array with information on each payment chosen by the shopper. */
                    payments?: {
                        /**
                         * @description Payment system ID.
                         * @example 1
                         */
                        paymentSystem?: number;
                        /**
                         * @description Payment system name.
                         * @example Boleto Bancário
                         */
                        paymentSystemName?: string;
                        /**
                         * @description Payment system group.
                         * @example bankInvoicePaymentGroup
                         */
                        group?: string;
                        /**
                         * @description Selected number of installments.
                         * @example 1
                         */
                        installments?: number;
                        /**
                         * @description Installments' interest rate.
                         * @example 0
                         */
                        installmentsInterestRate?: number;
                        /**
                         * @description Value of the installments.
                         * @example 1
                         */
                        installmentsValue?: number;
                        /**
                         * @description Total value assigned to this payment.
                         * @example 100
                         */
                        value?: number;
                        /**
                         * @description Reference value used to calculate total order value with interest.
                         * @example 100
                         */
                        referenceValue?: number;
                        /**
                         * @description Indicates whether billing address for this payment is the default address.
                         * @example false
                         */
                        hasDefaultBillingAddress?: boolean;
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
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    AddMerchantContextData: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive the relevant information added by the merchant. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Sales Associate information. */
                    salesAssociateData: {
                        /**
                         * @description Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.
                         * @example seller123
                         */
                        salesAssociateId?: string;
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
                content: {
                    "application/json": {
                        /** @description Sales Associate (Seller) identification code. */
                        salesAssociateId?: string;
                    };
                };
            };
        };
    };
    SetMultipleCustomFieldValues: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive the new custom field values. */
                orderFormId: string;
                /** @description ID of the app created with the configuration API. */
                appId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    SetSingleCustomFieldValue: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description The ID of the orderForm whose custom field's value you want to change. */
                orderFormId: string;
                /** @description ID of the app created through the Update orderForm Configuration endpoint. */
                appId: string;
                /** @description Name of the app's field created through the Update orderForm Configuration endpoint. */
                appFieldName: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "value": "{appFieldValue}"
                 *     } */
                "application/json": components["schemas"]["SetsinglecustomfieldvalueRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    Removesinglecustomfieldvalue: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description The ID of the orderForm from which you want to remove the custom field value. */
                orderFormId: string;
                /** @description ID of the app created through the Update orderForm Configuration endpoint. */
                appId: string;
                /** @description Name of the app's field created through the Update orderForm Configuration endpoint and which will be deleted. */
                appFieldName: string;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    GetorderFormconfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                        /** @description Payment configuration information. */
                        paymentConfiguration?: {
                            /** @description Determines whether pre-authorized payments require authentication. */
                            requiresAuthenticationForPreAuthorizedPaymentOption?: boolean;
                            /** @description By default (when `false`), on a multi-seller purchase is on the run, a simple intersection with installment options configured by every seller will be available. When indicated as `true`, this option allows a more complex but flexible installment option, since it considers max installments of every seller configuration, even if those do not match. Installment values may not be equal in this case. */
                            allowInstallmentsMerge?: boolean;
                        };
                        /** @description External tax service configuration information. */
                        taxConfiguration?: {
                            /** @description Endpoint URL. */
                            url?: string | null;
                            /** @description Authorization header. */
                            authorizationHeader?: string | null;
                            /** @description Custom data ID sent to the tax system. */
                            appId?: string;
                            /** @description Indicates whether the marketplace is responsible for the products taxes. */
                            isMarketplaceResponsibleForTaxes?: boolean;
                        } | null;
                        /** @description Minimum SKU quantity by cart. */
                        minimumQuantityAccumulatedForItems?: number;
                        /** @description Number of price digits. */
                        decimalDigitsPrecision?: number;
                        /** @description Minimum cart value. */
                        minimumValueAccumulated?: number | null;
                        /** @description Array of objects containing Apps configuration information. */
                        apps?: {
                            /** @description App ID. */
                            id?: string;
                            /** @description Array of fields available to the app. */
                            fields?: string[];
                            /** @description App major version. */
                            major?: number;
                        }[] | null;
                        /** @description On the same purchase, allows the selection of items from multiple delivery channels. */
                        allowMultipleDeliveries?: boolean | null;
                        /** @description Allows the editing of SKU prices right in the cart. */
                        allowManualPrice?: boolean | null;
                        /** @description Allows users to select whether they want the store to keep their personal and payment data saved. */
                        savePersonalDataAsOptIn?: boolean | null;
                        /** @description Allows the input of a limit of white label sellers involved on the cart. */
                        maxNumberOfWhiteLabelSellers?: number | null;
                        /** @description Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client does not want to share its data. */
                        maskFirstPurchaseData?: boolean | null;
                        /**
                         * @description Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/en/tutorial/using-recaptcha-at-checkout--18Te3oDd7f4qcjKu9jhNzP)
                         *
                         *
                        Possible values are:
                         *
                        - `"never"`: no purchases are validated with reCAPTCHA.
                         *
                        - `"always"`: every purchase is validated with reCAPTCHA.
                         *
                        - `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX's algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.
                         * @example vtexCriteria
                         */
                        recaptchaValidation?: string;
                        /**
                         * @description Indicates whether authentication is required for completing purchases.
                         * @example true
                         */
                        requiresLoginToPlaceOrder?: boolean;
                        /**
                         * @description Minimum interval (in seconds) between successive purchases.
                         * @example 90
                         */
                        minimumPurchaseDowntimeSeconds?: number;
                        /**
                         * @description Minimum cart existence period (in seconds) before allowing the use of a new credit card.
                         * @example 30
                         */
                        cartAgeToUseNewCardSeconds?: number;
                    };
                };
            };
        };
    };
    UpdateorderFormconfiguration: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "paymentConfiguration": {
                 *         "requiresAuthenticationForPreAuthorizedPaymentOption": false
                 *       },
                 *       "taxConfiguration": null,
                 *       "minimumQuantityAccumulatedForItems": 1,
                 *       "decimalDigitsPrecision": 2,
                 *       "minimumValueAccumulated": null,
                 *       "apps": null,
                 *       "allowMultipleDeliveries": null,
                 *       "allowManualPrice": null,
                 *       "requiresLoginToPlaceOrder": true,
                 *       "minimumPurchaseDowntimeSeconds": 90,
                 *       "cartAgeToUseNewCardSeconds": 30
                 *     } */
                "application/json": components["schemas"]["UpdateorderFormconfigurationRequest"];
            };
        };
        responses: {
            /** @description No Content. The request has succeeded. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetWindowToChangeSeller: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
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
                    "text/plain": unknown;
                };
            };
        };
    };
    UpdateWindowToChangeSeller: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "waitingTime": 4
                 *     } */
                "application/json": components["schemas"]["WaitingTime"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    ClearorderFormMessages: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm corresponding to the cart whose messages you want to remove. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": Record<string, never>;
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
                        /** @description Object response. */
                        response?: {
                            /** @description Object with response value. */
                            value?: {
                                /** @description ID of the orderForm corresponding to a specific cart. */
                                orderFormId?: string;
                                /** @description Attribute created by the seller, in their VTEX store configuration. */
                                salesChannel?: string;
                                /** @description Indicates whether the user is logged into the store. */
                                loggedIn?: boolean;
                                /** @description Indicates whether order is checked in. */
                                isCheckedIn?: boolean;
                                /** @description ID of the store. */
                                storeId?: string | null;
                                /** @description Permission to modify item price manually. */
                                allowManualPrice?: boolean;
                                /** @description Data can be edited. */
                                canEditData?: boolean;
                                /** @description Unique ID associated with the customer profile. */
                                userProfileId?: string;
                                /** @description Profile provider. */
                                profileProvider?: string;
                                /** @description Available accounts. */
                                availableAccounts?: string[];
                                /** @description Information on each available address. */
                                availableAddresses?: {
                                    /** @description Address type. */
                                    addressType?: string;
                                    /** @description Name of the receiver. */
                                    receiverName?: string;
                                    /** @description Address ID. */
                                    addressId?: string | null;
                                    /** @description Indicates whether address is disposable. */
                                    isDisposable?: boolean;
                                    /** @description City of the address. */
                                    city?: string;
                                    /** @description State of the address. */
                                    state?: string;
                                    /** @description Country of the address. ISO three-letter code. */
                                    country?: string;
                                    /** @description Street of the address. */
                                    street?: string;
                                    /** @description Number of the address. */
                                    number?: string;
                                    /** @description Neighborhood of the address. */
                                    neighborhood?: string;
                                    /** @description Complement to the address. */
                                    complement?: string | null;
                                    /** @description Reference that may help in the location of the address. */
                                    reference?: string | null;
                                    /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                    geoCoordinates?: number[];
                                }[];
                                /** @description User type. */
                                userType?: string | null;
                                /** @description Ignore customer profile data. */
                                ignoreProfileData?: boolean;
                                /** @description Total value of the order without separating cents. For example, $24.99 is represented `2499`. */
                                value?: number;
                                /** @description Array containing an object for each message generated by our servers while processing the request. */
                                messages?: string[];
                                /** @description Information on each item in the order. */
                                items?: {
                                    /** @description Unique ID. */
                                    uniqueId?: string;
                                    /** @description ID of the item. */
                                    id?: string;
                                    /** @description Product ID. */
                                    productId?: string;
                                    /** @description Product Ref ID. */
                                    productRefId?: string;
                                    /** @description Ref ID. */
                                    refId?: string;
                                    /** @description European Article Number. */
                                    ean?: string | null;
                                    /** @description Product name. */
                                    name?: string;
                                    /** @description SKU name. */
                                    skuName?: string;
                                    /** @description Modal type. */
                                    modalType?: string | null;
                                    /** @description Parent item index. */
                                    parentItemIndex?: number | null;
                                    /** @description Parent assembly binding. */
                                    parentAssemblyBinding?: string | null;
                                    /** @description Price expiration date and time. */
                                    priceValidUntil?: string;
                                    /** @description Tax value in cents. */
                                    tax?: number;
                                    /** @description Price in cents. */
                                    price?: number;
                                    /** @description List price in cents. */
                                    listPrice?: number;
                                    /** @description Manual price in cents. */
                                    manualPrice?: number | null;
                                    /** @description User that applied the manual price, if that is the case. */
                                    manualPriceAppliedBy?: string | null;
                                    /** @description Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
                                    sellingPrice?: number;
                                    /** @description Reward value in cents. */
                                    rewardValue?: number;
                                    /** @description Indicates whether item is a gift. */
                                    isGift?: boolean;
                                    /** @description Additional information. */
                                    additionalInfo?: {
                                        /** @description Dimension. */
                                        dimension?: string | null;
                                        /** @description Brand name. */
                                        brandName?: string;
                                        /** @description Brand ID. */
                                        brandId?: string;
                                        /** @description Offering information. */
                                        offeringInfo?: string | null;
                                        /** @description Offering type. */
                                        offeringType?: string | null;
                                        /** @description Offering type ID. */
                                        offeringTypeId?: string | null;
                                    };
                                    /** @description Presale date. */
                                    preSaleDate?: string | null;
                                    /** @description Product category IDs. */
                                    productCategoryIds?: string;
                                    /** @description Object, where each field is an ID from `productCategoryIds`. */
                                    productCategories?: {
                                        /** @description Product category corresponding to the ID in the field key. */
                                        "{ID}"?: string;
                                    };
                                    /** @description Quantity. */
                                    quantity?: number;
                                    /** @description Seller. */
                                    seller?: string;
                                    /** @description Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
                                    sellerChain?: string[];
                                    /** @description Image URL. */
                                    imageUrl?: string;
                                    /** @description Detail URL. */
                                    detailUrl?: string;
                                    /** @description Information on services sold along with the SKU. Example: a gift package. */
                                    bundleItems?: {
                                        /** @description Service type. */
                                        type?: string;
                                        /** @description Service identifier. */
                                        id?: number;
                                        /** @description Service name. */
                                        name?: string;
                                        /** @description Service price in cents. */
                                        price?: number;
                                    }[];
                                    /** @description Array containing information on attachments. */
                                    attachments?: string[];
                                    /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                                    priceTags?: {
                                        /** @description Price tag identifier. */
                                        identifier?: string | null;
                                        /** @description Indicates whether price tag value is applied through a percentage. */
                                        isPercentual?: boolean;
                                        /** @description Price tag name. */
                                        name?: string;
                                        /** @description Price tag raw value. */
                                        rawValue?: number;
                                        /** @description Price tag value. */
                                        value?: number;
                                    }[];
                                    /** @description Availability. */
                                    availability?: string;
                                    /** @description Measurement unit. */
                                    measurementUnit?: string;
                                    /** @description Unit multiplier. */
                                    unitMultiplier?: number;
                                    /** @description Manufacturer code. */
                                    manufacturerCode?: string | null;
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
                                /** @description Array containing the data of the item selected as a gift. */
                                selectableGifts?: string[];
                                /** @description Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value). */
                                totalizers?: Record<string, never>[];
                                /** @description Shipping information pertinent to the order. */
                                shippingData?: {
                                    /** @description Address information. */
                                    address?: {
                                        /** @description Type of address. For example, `Residential` or `Pickup`. */
                                        addressType?: string;
                                        /** @description Name of the person who is going to receive the order. */
                                        receiverName?: string;
                                        /** @description Address ID. */
                                        addressId?: string | null;
                                        /** @description Indicates whether address is disposable. */
                                        isDisposable?: boolean;
                                        /** @description Postal code. */
                                        postalCode?: string;
                                        /** @description City of the shipping address. */
                                        city?: string;
                                        /** @description State of the shipping address. */
                                        state?: string;
                                        /** @description Three letter ISO code of the country of the shipping address. */
                                        country?: string;
                                        /** @description Street of the shipping address. */
                                        street?: string;
                                        /** @description Number of the building, house or apartment in the shipping address. */
                                        number?: string;
                                        /** @description Neighborhood of the shipping address. */
                                        neighborhood?: string;
                                        /** @description Complement to the shipping address, in case it applies. */
                                        complement?: string | null;
                                        /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                        reference?: string | null;
                                        /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                        geoCoordinates?: number[];
                                    } | null;
                                    /** @description Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
                                    logisticsInfo?: {
                                        /** @description Index corresponding to the position of the object in the `items` array. */
                                        itemIndex?: number;
                                        /** @description SLA selected by the customer. */
                                        selectedSla?: string | null;
                                        /** @description Delivery channel selected by the customer. */
                                        selectedDeliveryChannel?: string | null;
                                        /** @description Address ID. */
                                        addressId?: string | null;
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
                                            /** @description Shipping estimate. For instance, Three business days will be represented `3bd`. */
                                            shippingEstimate?: string;
                                            /** @description Shipping estimate date. */
                                            shippingEstimateDate?: string | null;
                                            /** @description Estimate date of delivery. */
                                            lockTTL?: string | null;
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
                                                address?: {
                                                    /** @description Type of address. For example, `Residential` or `Pickup`. */
                                                    addressType?: string;
                                                    /** @description Postal code. */
                                                    postalCode?: string;
                                                    /** @description City of the shipping address. */
                                                    city?: string;
                                                    /** @description State of the shipping address. */
                                                    state?: string;
                                                    /** @description Three letter ISO code of the country of the shipping address. */
                                                    country?: string;
                                                    /** @description Street of the shipping address. */
                                                    street?: string;
                                                    /** @description Number of the building, house or apartment in the shipping address. */
                                                    number?: string;
                                                    /** @description Neighborhood of the shipping address. */
                                                    neighborhood?: string;
                                                    /** @description Complement to the shipping address, in case it applies. */
                                                    complement?: string | null;
                                                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                                    reference?: string | null;
                                                    /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                                    geoCoordinates?: number[];
                                                } | null;
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
                                            /** @description Transit time. For instance, "three business days" is represented `3bd`. */
                                            transitTime?: string;
                                        }[];
                                        /** @description List of countries that the item may be shipped to. */
                                        shipsTo?: string[];
                                        /** @description Item ID. */
                                        itemId?: string;
                                        /** @description List of available delivery channels. */
                                        deliveryChannels?: {
                                            /** @description Delivery channel ID. */
                                            id?: string;
                                        }[];
                                    }[];
                                    /** @description Array with information on the selected addresses for the order. */
                                    selectedAddresses?: {
                                        /** @description Type of address. For example, `Residential` or `Pickup`. */
                                        addressType?: string;
                                        /** @description Name of the person who is going to receive the order. */
                                        receiverName?: string;
                                        /** @description Address ID. */
                                        addressId?: string | null;
                                        /** @description Indicates whether address is disposable. */
                                        isDisposable?: boolean;
                                        /** @description Postal code. */
                                        postalCode?: string;
                                        /** @description City of the shipping address. */
                                        city?: string;
                                        /** @description State of the shipping address. */
                                        state?: string;
                                        /** @description Three letter ISO code of the country of the shipping address. */
                                        country?: string;
                                        /** @description Street of the shipping address. */
                                        street?: string;
                                        /** @description Number of the building, house or apartment in the shipping address. */
                                        number?: string;
                                        /** @description Neighborhood of the shipping address. */
                                        neighborhood?: string;
                                        /** @description Complement to the shipping address, in case it applies. */
                                        complement?: string;
                                        /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                        reference?: string | null;
                                        /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                        geoCoordinates?: number[];
                                    }[];
                                    /** @description Array with information on the available addresses for the order. */
                                    availableAddresses?: {
                                        /** @description Type of address. For example, `Residential` or `Pickup`. */
                                        addressType?: string;
                                        /** @description Name of the person who is going to receive the order. */
                                        receiverName?: string;
                                        /** @description Address ID. */
                                        addressId?: string | null;
                                        /** @description Indicates whether address is disposable. */
                                        isDisposable?: boolean;
                                        /** @description Postal code. */
                                        postalCode?: string;
                                        /** @description City of the shipping address. */
                                        city?: string;
                                        /** @description State of the shipping address. */
                                        state?: string;
                                        /** @description Three letter ISO code of the country of the shipping address. */
                                        country?: string;
                                        /** @description Street of the shipping address. */
                                        street?: string;
                                        /** @description Number of the building, house or apartment in the shipping address. */
                                        number?: string;
                                        /** @description Neighborhood of the shipping address. */
                                        neighborhood?: string;
                                        /** @description Complement to the shipping address, in case it applies. */
                                        complement?: string;
                                        /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                        reference?: string | null;
                                        /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                        geoCoordinates?: number[];
                                    }[];
                                } | null;
                                /** @description Customer's profile information. */
                                clientProfileData?: {
                                    /** @description Email address. */
                                    email?: string | null;
                                    /** @description First name. */
                                    firstName?: string | null;
                                    /** @description Last name. */
                                    lastName?: string;
                                    /** @description Type of the document informed by the customer. */
                                    documentType?: string;
                                    /** @description Document informed by the customer. */
                                    document?: string;
                                    /** @description Phone number. */
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
                                } | null;
                                /** @description Information on the order's payment. */
                                paymentData?: {
                                    /** @description Gift card information, if it applies to the order. */
                                    giftCards?: {
                                        /** @description Gift card redemption code. */
                                        redemptionCode?: string;
                                        /** @description Gift card value in cents. */
                                        value?: number;
                                        /** @description Gift card balance in cents. */
                                        balance?: number;
                                        /** @description Gift card name. */
                                        name?: string;
                                        /** @description Gift card ID. */
                                        id?: string;
                                        /** @description Indicates whether gift card is in use. */
                                        inUse?: boolean;
                                        /** @description Indicates whether gift card is special. */
                                        isSpecialCard?: boolean;
                                    }[];
                                    /** @description Information on each transaction pertinent to the order. */
                                    transactions?: {
                                        /** @description Indicates whether transaction is active. */
                                        isActive?: boolean;
                                        /** @description Transaction ID. */
                                        transactionId?: string;
                                        /** @description Merchant name. */
                                        merchantName?: string;
                                        /** @description Information on each payment. */
                                        payments?: {
                                            /** @description Account ID. */
                                            accountId?: string | null;
                                            /** @description Bin. */
                                            bin?: string | null;
                                            /** @description Number of installments. */
                                            installments?: number;
                                            /** @description Payment system. */
                                            paymentSystem?: number;
                                            /** @description Reference value for calculating interest rates, in case it applies. Displayed in cents. */
                                            referenceValue?: number;
                                            /** @description Value including interest, in case it applies. Displayed in cents. */
                                            value?: number;
                                        }[];
                                        /** @description Indicates whather transaction is shared. */
                                        sharedTransaction?: boolean;
                                    }[];
                                };
                                /** @description Object containing promotion data such as coupon tracking information and internal or external UTMs. */
                                marketingData?: {
                                    /**
                                     * @description Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
                                     * @example free-shipping
                                     */
                                    coupon?: string;
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
                                    utmiPage?: string | null;
                                    /**
                                     * @description utmi_part (internal utm).
                                     * @example utmi_part-example
                                     */
                                    utmiPart?: string | null;
                                    /**
                                     * @description utmi_campaign (internal utm).
                                     * @example utmi_campaign-example
                                     */
                                    utmiCampaign?: string | null;
                                } | null;
                                /** @description Information on each seller. */
                                sellers?: {
                                    /** @description Seller ID. */
                                    id?: string;
                                    /** @description Seller name. */
                                    name?: string;
                                    /** @description Seller logo. */
                                    logo?: string | null;
                                }[];
                                /** @description Object containing preferences from the client who placed the order. */
                                clientPreferencesData?: {
                                    /** @description Client's locale. Examples: `pt-BR` and `en-US`. */
                                    locale?: string;
                                    /**
                                     * @description `true` if the client opted to receive newsletter from the store.
                                     * @example false
                                     */
                                    optinNewsLetter?: boolean | null;
                                };
                                /** @description Object containing commercial condition information. */
                                commercialConditionData?: Record<string, never>;
                                /** @description Object containing data from the store's configuration (stored in VTEX's License Manager). */
                                storePreferencesData?: Record<string, never>;
                                /** @description Gift registry list information. */
                                giftRegistryData?: Record<string, never>;
                                /**
                                 * @description Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1).
                                 * @example open-text-example
                                 */
                                openTextField?: string | null;
                                /** @description Object containing information pertinent to the order's invoice. */
                                invoiceData?: Record<string, never>;
                                /** @description Customer additional information. */
                                customData?: Record<string, never>;
                                /** @description Item metadata. */
                                itemMetadata?: {
                                    /** @description List of objects containing metadata on each item in the order. */
                                    items?: {
                                        /** @description Item ID. */
                                        id?: string;
                                        /** @description Seller. */
                                        seller?: string;
                                        /** @description Product name. */
                                        name?: string;
                                        /** @description SKU name. */
                                        skuName?: string;
                                        /** @description Product ID. */
                                        productId?: string;
                                        /** @description Ref ID. */
                                        refId?: string;
                                        /** @description European Article Number. */
                                        ean?: string | null;
                                        /** @description Image URL. */
                                        imageUrl?: string;
                                        /** @description Detail URL. */
                                        detailUrl?: string;
                                    }[];
                                };
                                /** @description Hooks information. */
                                hooksData?: Record<string, never>;
                                /** @description Information on rates and benefits that apply to the order. */
                                ratesAndBenefitsData?: {
                                    /** @description List with rates and benefits identifiers. */
                                    rateAndBenefitsIdentifiers?: string[];
                                    /** @description List with rates and benefits teasers. */
                                    teaser?: string[];
                                };
                                /** @description Subscription information. */
                                subscriptionData?: Record<string, never>;
                                /** @description Object containing information about the ordering of items within the orderForm. */
                                itemsOrdination?: {
                                    /** @description Criteria adopted to order the items in the list. */
                                    criteria?: string;
                                    /** @description Indicates whether the ordering is ascending. */
                                    ascending?: boolean;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    GetCartInstallments: {
        parameters: {
            query: {
                /** @description ID of the payment method to be consulted for installments. */
                paymentSystem: number;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the `orderForm` to be consulted for installments. */
                orderFormId: string;
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
                        /** @description Bin. */
                        bin?: string | null;
                        /** @description Array of installments. */
                        installments?: {
                            /** @description An explanation about the purpose of this instance. */
                            count?: number;
                            /** @description An explanation about the purpose of this instance. */
                            hasInterestRate?: boolean;
                            /** @description An explanation about the purpose of this instance. */
                            interestRate?: number;
                            /** @description An explanation about the purpose of this instance. */
                            value?: number;
                            /** @description An explanation about the purpose of this instance. */
                            total?: number;
                            /** @description An explanation about the purpose of this instance. */
                            sellerMerchantInstallments?: {
                                /** @description Installment ID. */
                                id?: string;
                                /** @description Count. */
                                count?: number;
                                /** @description If the installment has an interest rate. */
                                hasInterestRate?: boolean;
                                /** @description Interest rate number. */
                                interestRate?: number;
                                /** @description Installment value. */
                                value?: number;
                                /** @description Installment total. */
                                total?: number;
                            }[];
                        }[];
                        /** @description Payment system. */
                        paymentSystem?: number;
                        /** @description Value including interest, in case it applies. Displayed in cents. */
                        value?: number;
                        /** @description Payment name. */
                        paymentName?: string | null;
                        /** @description Payment group name. */
                        paymentGroupName?: string | null;
                    };
                };
            };
        };
    };
    AddCoupons: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the orderForm that will receive coupon information. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Sending an existing coupon code in this field will return the corresponding discount in the purchase.
                     * @example freeshipping
                     */
                    text?: string;
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
                        /** @description ID of the orderForm corresponding to a specific cart. */
                        orderFormId?: string;
                        /** @description Attribute created by the seller, in their VTEX store configuration. */
                        salesChannel?: string;
                        /** @description Indicates whether the user is logged into the store. */
                        loggedIn?: boolean;
                        /** @description Indicates whether order is checked in. */
                        isCheckedIn?: boolean;
                        /** @description ID of the store. */
                        storeId?: string | null;
                        /** @description Permission to modify item price manually. */
                        allowManualPrice?: boolean;
                        /** @description Data can be edited. */
                        canEditData?: boolean;
                        /** @description Unique ID associated with the customer profile. */
                        userProfileId?: string;
                        /** @description Profile provider. */
                        profileProvider?: string;
                        /** @description Available accounts. */
                        availableAccounts?: string[];
                        /** @description Information on each available address. */
                        availableAddresses?: {
                            /** @description Address type. */
                            addressType?: string;
                            /** @description Name of the receiver. */
                            receiverName?: string;
                            /** @description Address ID. */
                            addressId?: string | null;
                            /** @description Indicates whether address is disposable. */
                            isDisposable?: boolean;
                            /** @description City of the address. */
                            city?: string;
                            /** @description State of the address. */
                            state?: string;
                            /** @description Country of the address. ISO three-letter code. */
                            country?: string;
                            /** @description Street of the address. */
                            street?: string;
                            /** @description Number of the address. */
                            number?: string;
                            /** @description Neighborhood of the address. */
                            neighborhood?: string;
                            /** @description Complement to the address. */
                            complement?: string | null;
                            /** @description Reference that may help in the location of the address. */
                            reference?: string | null;
                            /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                            geoCoordinates?: number[];
                        }[];
                        /** @description User type. */
                        userType?: string | null;
                        /** @description Ignore customer profile data. */
                        ignoreProfileData?: boolean;
                        /** @description Total value of the order without separating cents. For example, $24.99 is represented `2499`. */
                        value?: number;
                        /** @description Array containing an object for each message generated by our servers while processing the request. */
                        messages?: string[];
                        /** @description Information on each item in the order. */
                        items?: {
                            /** @description Unique ID. */
                            uniqueId?: string;
                            /** @description ID of the item. */
                            id?: string;
                            /** @description Product ID. */
                            productId?: string;
                            /** @description Product Ref ID. */
                            productRefId?: string;
                            /** @description Ref ID. */
                            refId?: string;
                            /** @description European Article Number. */
                            ean?: string | null;
                            /** @description Product name. */
                            name?: string;
                            /** @description SKU name. */
                            skuName?: string;
                            /** @description Modal type. */
                            modalType?: string | null;
                            /** @description Parent item index. */
                            parentItemIndex?: number | null;
                            /** @description Parent assembly binding. */
                            parentAssemblyBinding?: string | null;
                            /** @description Price expiration date and time. */
                            priceValidUntil?: string;
                            /** @description Tax value in cents. */
                            tax?: number;
                            /** @description Price in cents. */
                            price?: number;
                            /** @description List price in cents. */
                            listPrice?: number;
                            /** @description Manual price in cents. */
                            manualPrice?: number | null;
                            /** @description User that applied the manual price, if that is the case. */
                            manualPriceAppliedBy?: string | null;
                            /** @description Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
                            sellingPrice?: number;
                            /** @description Reward value in cents. */
                            rewardValue?: number;
                            /** @description Indicates whether item is a gift. */
                            isGift?: boolean;
                            /** @description Additional information. */
                            additionalInfo?: {
                                /** @description Dimension. */
                                dimension?: string | null;
                                /** @description Brand name. */
                                brandName?: string;
                                /** @description Brand ID. */
                                brandId?: string;
                                /** @description Offering information. */
                                offeringInfo?: string | null;
                                /** @description Offering type. */
                                offeringType?: string | null;
                                /** @description Offering type ID. */
                                offeringTypeId?: string | null;
                            };
                            /** @description Presale date. */
                            preSaleDate?: string | null;
                            /** @description Product category IDs. */
                            productCategoryIds?: string;
                            /** @description Object, where each field is an ID from `productCategoryIds`. */
                            productCategories?: {
                                /** @description Product category corresponding to the ID in the field key. */
                                "{ID}"?: string;
                            };
                            /** @description Quantity. */
                            quantity?: number;
                            /** @description Seller. */
                            seller?: string;
                            /** @description Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
                            sellerChain?: string[];
                            /** @description Image URL. */
                            imageUrl?: string;
                            /** @description Detail URL. */
                            detailUrl?: string;
                            /** @description Information on services sold along with the SKU. Example: a gift package. */
                            bundleItems?: {
                                /** @description Service type. */
                                type?: string;
                                /** @description Service identifier. */
                                id?: number;
                                /** @description Service name. */
                                name?: string;
                                /** @description Service price in cents. */
                                price?: number;
                            }[];
                            /** @description Array containing information on attachments. */
                            attachments?: string[];
                            /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                            priceTags?: {
                                /** @description Price tag identifier. */
                                identifier?: string | null;
                                /** @description Indicates whether price tag value is applied through a percentage. */
                                isPercentual?: boolean;
                                /** @description Price tag name. */
                                name?: string;
                                /** @description Price tag raw value. */
                                rawValue?: number;
                                /** @description Price tag value. */
                                value?: number;
                            }[];
                            /** @description Availability */
                            availability?: string;
                            /** @description Measurement unit */
                            measurementUnit?: string;
                            /** @description Unit multiplier */
                            unitMultiplier?: number;
                            /** @description Manufacturer code. */
                            manufacturerCode?: string | null;
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
                        /** @description Array containing the data of the item selected as a gift. */
                        selectableGifts?: string[];
                        /** @description Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value). */
                        totalizers?: Record<string, never>[];
                        /** @description Shipping information pertinent to the order. */
                        shippingData?: {
                            /** @description Address information. */
                            address?: {
                                /** @description Type of address. For example, `Residential` or `Pickup`. */
                                addressType?: string;
                                /** @description Name of the person who is going to receive the order. */
                                receiverName?: string;
                                /** @description Address ID. */
                                addressId?: string | null;
                                /** @description Indicates whether address is disposable. */
                                isDisposable?: boolean;
                                /** @description Postal code. */
                                postalCode?: string;
                                /** @description City of the shipping address. */
                                city?: string;
                                /** @description State of the shipping address. */
                                state?: string;
                                /** @description Three letter ISO code of the country of the shipping address. */
                                country?: string;
                                /** @description Street of the shipping address. */
                                street?: string;
                                /** @description Number of the building, house or apartment in the shipping address. */
                                number?: string;
                                /** @description Neighborhood of the shipping address. */
                                neighborhood?: string;
                                /** @description Complement to the shipping address, in case it applies. */
                                complement?: string | null;
                                /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                reference?: string | null;
                                /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                geoCoordinates?: number[];
                            };
                            /** @description Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
                            logisticsInfo?: {
                                /** @description Index corresponding to the position of the object in the `items` array. */
                                itemIndex?: number;
                                /** @description SLA selected by the customer. */
                                selectedSla?: string | null;
                                /** @description Delivery channel selected by the customer. */
                                selectedDeliveryChannel?: string | null;
                                /** @description Address ID. */
                                addressId?: string | null;
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
                                    /** @description Shipping estimate. For instance, Three business days will be represented `3bd`. */
                                    shippingEstimate?: string;
                                    /** @description Shipping estimate date. */
                                    shippingEstimateDate?: string | null;
                                    /** @description Estimate date of delivery. */
                                    lockTTL?: string | null;
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
                                        address?: {
                                            /** @description Type of address. For example, `Residential` or `Pickup`. */
                                            addressType?: string;
                                            /** @description Postal code. */
                                            postalCode?: string;
                                            /** @description City of the shipping address. */
                                            city?: string;
                                            /** @description State of the shipping address. */
                                            state?: string;
                                            /** @description Three letter ISO code of the country of the shipping address. */
                                            country?: string;
                                            /** @description Street of the shipping address. */
                                            street?: string;
                                            /** @description Number of the building, house or apartment in the shipping address. */
                                            number?: string;
                                            /** @description Neighborhood of the shipping address. */
                                            neighborhood?: string;
                                            /** @description Complement to the shipping address, in case it applies. */
                                            complement?: string | null;
                                            /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                            reference?: string | null;
                                            /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                            geoCoordinates?: number[];
                                        } | null;
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
                                    /** @description Transit time. For instance, "three business days" is represented `3bd`. */
                                    transitTime?: string;
                                }[];
                                /** @description List of countries that the item may be shipped to. */
                                shipsTo?: string[];
                                /** @description Item ID. */
                                itemId?: string;
                                /** @description List of available delivery channels. */
                                deliveryChannels?: {
                                    /** @description Delivery channel ID. */
                                    id?: string;
                                }[];
                            }[];
                            /** @description Array with information on the selected addresses for the order. */
                            selectedAddresses?: {
                                /** @description Type of address. For example, `Residential` or `Pickup`. */
                                addressType?: string;
                                /** @description Name of the person who is going to receive the order. */
                                receiverName?: string;
                                /** @description Address ID. */
                                addressId?: string | null;
                                /** @description Indicates whether address is disposable. */
                                isDisposable?: boolean;
                                /** @description Postal code. */
                                postalCode?: string;
                                /** @description City of the shipping address. */
                                city?: string;
                                /** @description State of the shipping address. */
                                state?: string;
                                /** @description Three letter ISO code of the country of the shipping address. */
                                country?: string;
                                /** @description Street of the shipping address. */
                                street?: string;
                                /** @description Number of the building, house or apartment in the shipping address. */
                                number?: string;
                                /** @description Neighborhood of the shipping address. */
                                neighborhood?: string;
                                /** @description Complement to the shipping address, in case it applies. */
                                complement?: string;
                                /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                reference?: string | null;
                                /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                geoCoordinates?: number[];
                            }[];
                            /** @description Array with information on the available addresses for the order. */
                            availableAddresses?: {
                                /** @description Type of address. For example, `Residential` or `Pickup`. */
                                addressType?: string;
                                /** @description Name of the person who is going to receive the order. */
                                receiverName?: string;
                                /** @description Address ID. */
                                addressId?: string | null;
                                /** @description Indicates whether address is disposable. */
                                isDisposable?: boolean;
                                /** @description Postal code. */
                                postalCode?: string;
                                /** @description City of the shipping address. */
                                city?: string;
                                /** @description State of the shipping address. */
                                state?: string;
                                /** @description Three letter ISO code of the country of the shipping address. */
                                country?: string;
                                /** @description Street of the shipping address. */
                                street?: string;
                                /** @description Number of the building, house or apartment in the shipping address. */
                                number?: string;
                                /** @description Neighborhood of the shipping address. */
                                neighborhood?: string;
                                /** @description Complement to the shipping address, in case it applies. */
                                complement?: string;
                                /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                reference?: string | null;
                                /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                geoCoordinates?: number[];
                            }[];
                        } | null;
                        /** @description Customer's profile information. */
                        clientProfileData?: {
                            /** @description Email address. */
                            email?: string | null;
                            /** @description First name. */
                            firstName?: string | null;
                            /** @description Last name. */
                            lastName?: string;
                            /** @description Type of the document informed by the customer. */
                            documentType?: string;
                            /** @description Document informed by the customer. */
                            document?: string;
                            /** @description Phone number. */
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
                        } | null;
                        /** @description Information on the order's payment. */
                        paymentData?: {
                            /** @description Gift card information, if it applies to the order. */
                            giftCards?: {
                                /** @description Gift card redemption code. */
                                redemptionCode?: string;
                                /** @description Gift card value in cents. */
                                value?: number;
                                /** @description Gift card balance in cents. */
                                balance?: number;
                                /** @description Gift card name. */
                                name?: string;
                                /** @description Gift card ID. */
                                id?: string;
                                /** @description Indicates whether gift card is in use. */
                                inUse?: boolean;
                                /** @description Indicates whether gift card is special. */
                                isSpecialCard?: boolean;
                            }[];
                            /** @description Information on each transaction pertinent to the order. */
                            transactions?: {
                                /** @description Indicates whether transaction is active. */
                                isActive?: boolean;
                                /** @description Transaction ID. */
                                transactionId?: string;
                                /** @description Merchant name. */
                                merchantName?: string;
                                /** @description Information on each payment. */
                                payments?: {
                                    /** @description Account ID. */
                                    accountId?: string;
                                    /** @description Bin. */
                                    bin?: string | null;
                                    /** @description Number of installments. */
                                    installments?: number;
                                    /** @description Payment system. */
                                    paymentSystem?: number;
                                    /** @description Reference value for calculating interest rates, in case it applies. Displayed in cents. */
                                    referenceValue?: number;
                                    /** @description Value including interest, in case it applies. Displayed in cents. */
                                    value?: number;
                                }[];
                                /** @description Indicates whather transaction is shared. */
                                sharedTransaction?: boolean;
                            }[];
                        };
                        /** @description Object containIng promotion data such as coupon tracking information and internal or external UTMs. */
                        marketingData?: {
                            /**
                             * @description Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
                             * @example free-shipping
                             */
                            coupon?: string;
                            /**
                             * @description UTM source.
                             * @example Facebook
                             */
                            utmSource?: string | null;
                            /**
                             * @description UTM medium.
                             * @example CPC
                             */
                            utmMedium?: string | null;
                            /**
                             * @description UTM campaign.
                             * @example Black friday
                             */
                            utmCampaign?: string | null;
                            /**
                             * @description utmi_page (internal utm).
                             * @example utmi_page-example
                             */
                            utmiPage?: string | null;
                            /**
                             * @description utmi_part (internal utm).
                             * @example utmi_part-exmaple
                             */
                            utmiPart?: string | null;
                            /**
                             * @description utmi_campaign (internal utm).
                             * @example utmi_campaign-exmaple
                             */
                            utmiCampaign?: string | null;
                        } | null;
                        /** @description Information on each seller. */
                        sellers?: {
                            /** @description Seller ID. */
                            id?: string;
                            /** @description Seller name. */
                            name?: string;
                            /** @description Seller logo. */
                            logo?: string | null;
                        }[];
                        /** @description Object containing preferences from the client who placed the order. */
                        clientPreferencesData?: {
                            /** @description Client's locale. Examples: `pt-BR` and `en-US`. */
                            locale?: string;
                            /** @description `true` if the client opted to receive newsletter from the store. */
                            optinNewsLetter?: boolean;
                        };
                        /** @description Object containing commercial condition information. */
                        commercialConditionData?: Record<string, never>;
                        /** @description Object containing data from the store's configuration (stored in VTEX's License Manager). */
                        storePreferencesData?: Record<string, never>;
                        /** @description Gift registry list information. */
                        giftRegistryData?: Record<string, never>;
                        /**
                         * @description Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)
                         * @example open-text-example
                         */
                        openTextField?: string | null;
                        /** @description Object containing information pertinent to the order's invoice. */
                        invoiceData?: Record<string, never>;
                        /** @description Customer additional information. */
                        customData?: Record<string, never>;
                        /** @description Item metadata. */
                        itemMetadata?: {
                            /** @description List of objects containing metadata on each item in the order. */
                            items?: {
                                /** @description Item ID. */
                                id?: string;
                                /** @description Seller. */
                                seller?: string;
                                /** @description Product name. */
                                name?: string;
                                /** @description SKU name. */
                                skuName?: string;
                                /** @description Product ID. */
                                productId?: string;
                                /** @description Ref ID. */
                                refId?: string;
                                /** @description European Article Number. */
                                ean?: string | null;
                                /** @description Image URL. */
                                imageUrl?: string;
                                /** @description Detail URL. */
                                detailUrl?: string;
                            }[];
                        };
                        /** @description Hooks information. */
                        hooksData?: Record<string, never>;
                        /** @description Information on rates and benefits that apply to the order. */
                        ratesAndBenefitsData?: {
                            /** @description List with rates and benefits identifiers. */
                            rateAndBenefitsIdentifiers?: string[];
                            /** @description List with rates and benefits teasers. */
                            teaser?: string[];
                        };
                        /** @description Subscription information. */
                        subscriptionData?: Record<string, never>;
                        /** @description Object containing information about the ordering of items within the orderForm. */
                        itemsOrdination?: {
                            /** @description Criteria adopted to order the items in the list. */
                            criteria?: string;
                            /** @description Indicates whether the ordering is ascending. */
                            ascending?: boolean;
                        };
                    };
                };
            };
        };
    };
    ListPickupPpointsByLocation: {
        parameters: {
            query?: {
                /** @description Geocoordinates (first longitude, then latitude) around which to search for pickup points. If you use this type of search, do not pass postal and country codes. */
                geoCoordinates?: number[];
                /** @description Postal code around which to search for pickup points. If you use this type of search, make sure to pass a `countryCode` and do not pass `geoCoordinates`. */
                postalCode?: string;
                /** @description Three letter country code refering to the `postalCode` field. Pass the country code only if you are searching pickup points by postal code. */
                countryCode?: string;
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
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Paging. */
                        paging?: {
                            /** @description Page number. */
                            page?: number;
                            /** @description Page size. */
                            pageSize?: number;
                            /** @description Total pages. */
                            total?: number;
                            /** @description Pages. */
                            pages?: number;
                        };
                        /** @description Items. */
                        items?: {
                            /** @description Distance. */
                            distance?: number;
                            /** @description Pickup point. */
                            pickupPoint?: {
                                /** @description Friendly name. */
                                friendlyName?: string;
                                /** @description Address. */
                                address?: {
                                    /** @description Address type. */
                                    addressType?: string;
                                    /** @description Receiver name. */
                                    receiverName?: string;
                                    /** @description Address ID. */
                                    addressId?: string | null;
                                    /** @description Is disposable. */
                                    isDisposable?: boolean;
                                    /** @description Postal code. */
                                    postalCode?: string;
                                    /** @description City. */
                                    city?: string;
                                    /** @description State. */
                                    state?: string;
                                    /** @description Country. */
                                    country?: string;
                                    /** @description Street. */
                                    street?: string;
                                    /** @description Number. */
                                    number?: string;
                                    /** @description Neighborhood. */
                                    neighborhood?: string;
                                    /** @description Complement. */
                                    complement?: string;
                                    /** @description Racao. */
                                    reference?: string;
                                    /** @description Geo coordinates. */
                                    geoCoordinates?: number[];
                                };
                                /** @description Additional info. */
                                additionalInfo?: string;
                                /** @description ID. */
                                id?: string;
                                /** @description Array with business hours. */
                                businessHours?: {
                                    /** @description Day of week. */
                                    DayOfWeek?: number;
                                    /** @description Opening time. */
                                    OpeningTime?: string;
                                    /** @description Closing time. */
                                    ClosingTime?: string;
                                }[];
                            };
                        }[];
                    };
                };
            };
        };
    };
    GetAddressByPostalCode: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Three letter country code refering to the `postalCode` field. */
                countryCode: string;
                /** @description Postal code. */
                postalCode: string;
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
                        /** @description Postal code. */
                        postalCode?: string;
                        /** @description City. */
                        city?: string;
                        /** @description State. */
                        state?: string;
                        /** @description Country. */
                        country?: string;
                        /** @description Street. */
                        street?: string;
                        /** @description Number. */
                        number?: string;
                        /** @description Neighborhood. */
                        neighborhood?: string;
                        /** @description Complement. */
                        complement?: string;
                        /** @description Reference. */
                        reference?: string;
                        /** @description Geo coordinates. */
                        geoCoordinates?: number[];
                    };
                };
            };
        };
    };
    PlaceOrderFromExistingOrderForm: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the `orderForm` corresponding to the cart from which to place the order. */
                orderFormId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * referenceId
                     * @description ID of the `orderForm` corresponding to the cart from which to place the order. This is the same as the `orderFormId` parameter.
                     * @example 41a22925298a4ddca95318131a25b000
                     */
                    referenceId: string;
                    /**
                     * savePersonalData
                     * @description `true` if the shopper's data provided during checkout should be saved for future reference.
                     * @example false
                     */
                    savePersonalData?: boolean;
                    /**
                     * optinNewsLetter
                     * @description True if the shopper opted to receive the newsletter.
                     * @example false
                     */
                    optinNewsLetter?: boolean | null;
                    /**
                     * @description Total value of the order without separating cents. For example, $24.99 is represented `2499`.
                     * @example 6800
                     */
                    value: number;
                    /**
                     * @description Reference value of the order for calculating interest if that is the case. Can be equal to the total value and does not separate cents. For example, $24.99 is represented `2499`.
                     * @example 6800
                     */
                    referenceValue: number;
                    /**
                     * @description Interest rate to be used in case it applies.
                     * @example 0
                     */
                    interestValue: number;
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
                    "application/json": components["schemas"]["orderForm"];
                };
            };
        };
    };
    PlaceOrder: {
        parameters: {
            query?: {
                /** @description Trade Policy (Sales Channel) identification. This query can be used to create an order for a specific sales channel. */
                sc?: number;
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
                             * @example id-example
                             */
                            id?: string;
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
                             * @example false
                             */
                            isPercentual?: boolean;
                            /**
                             * @description Price tag name.
                             * @example discount@name-1234abc-5678b-1234c
                             */
                            name?: string;
                            /**
                             * @description Price tag raw value.
                             * @example -12
                             */
                            rawValue?: number;
                            /**
                             * @description Price tag value.
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
                         * @example false
                         */
                        isGift?: boolean;
                    }[];
                    /** @description Customer's profile information. The `email` functions as a customer's ID.
                     *
                     *
                    For customers already in your database, sending only the email address is enough to register the order to the shopper’s existing account.
                     *
                     *
                    > If the shopper exists in you database but is not logged in, sending other profile information along with the email will cause the platform to fail placing the order. This happens because this action is interpreted as an attempt to edit profile data, which is not possible unless the customer is logged in to the store. */
                    clientProfileData: {
                        /**
                         * @description Customer's email address.
                         * @example customer@examplemail.com
                         */
                        email: string | null;
                        /**
                         * @description Customer's first name.
                         * @example first-name
                         */
                        firstName?: string | null;
                        /**
                         * @description Customer's last name.
                         * @example last-name
                         */
                        lastName?: string;
                        /**
                         * @description Type of the document informed by the customer.
                         * @example cpf
                         */
                        documentType?: string;
                        /**
                         * @description Document number informed by the customer.
                         * @example 123456789
                         */
                        document?: string;
                        /**
                         * @description Customer's phone number.
                         * @example +55110988887777
                         */
                        phone?: string;
                        /**
                         * @description Company name, if the customer is a legal entity.
                         * @example company-name
                         */
                        corporateName?: string;
                        /**
                         * @description Trade name, if the customer is a legal entity.
                         * @example trade-name
                         */
                        tradeName?: string;
                        /**
                         * @description Corporate document, if the customer is a legal entity.
                         * @example 12345678000100
                         */
                        corporateDocument?: string;
                        /**
                         * @description State inscription, if the customer is a legal entity.
                         * @example 12345678
                         */
                        stateInscription?: string;
                        /**
                         * @description Corporate phone number, if the customer is a legal entity.
                         * @example +551100988887777
                         */
                        corporatePhone?: string;
                        /**
                         * @description `true` if the customer is a legal entity.
                         * @example false
                         */
                        isCorporate?: boolean;
                    } | null;
                    /** @description Shipping information. */
                    shippingData: {
                        /** @description Shipping address.
                         *
                         *
                        For customers already in your data base, it is enough to send this object only with an `addressId`, which you may obtain from a [Cart simulation request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#cartsimulation), for example. */
                        address?: {
                            /**
                             * @description Type of address. For example, `Residential` or `Pickup`, among others.
                             * @example residential
                             */
                            addressType?: string;
                            /**
                             * @description Name of the person who is going to receive the order.
                             * @example receiver-name
                             */
                            receiverName?: string;
                            /**
                             * @description Address ID.
                             * @example Home
                             */
                            addressId?: string | null;
                            /**
                             * @description Postal Code.
                             * @example 12345-000
                             */
                            postalCode?: string;
                            /**
                             * @description City of the shipping address.
                             * @example Rio de Janeiro
                             */
                            city?: string;
                            /**
                             * @description State of the shipping address.
                             * @example Rio de Janeiro
                             */
                            state?: string;
                            /**
                             * @description Three letter ISO code of the country of the shipping address.
                             * @example BRA
                             */
                            country?: string;
                            /**
                             * @description Street of the shipping address.
                             * @example Praia de Botafogo
                             */
                            street?: string;
                            /**
                             * @description Number of the building, house or apartment in the shipping address.
                             * @example 300
                             */
                            number?: string;
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
                            /**
                             * @description Array containing two floats with geocoordinates, first longitude, then latitude.
                             * @example [
                             *       -47.924747467041016,
                             *       -15.832582473754883
                             *     ]
                             */
                            geoCoordinates?: number[];
                        } | null;
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
                            selectedSla: string | null;
                            /**
                             * @description String with the selected delivery channel. This field supports the following values:
                             *
                             *     - `delivery`,
                             *
                             *     - `pickup-in-point`.
                             * @example delivery
                             */
                            selectedDeliveryChannel?: string | null;
                            /**
                             * @description Logistics reservation waiting time.
                             * @example 8d
                             */
                            lockTTL?: string | null;
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
                                 * @example 0
                                 */
                                price?: number;
                                /**
                                 * @description Delivery window list price.
                                 * @example 0
                                 */
                                lisPrice?: number;
                                /**
                                 * @description Delivery window tax.
                                 * @example 0
                                 */
                                tax?: number;
                            };
                        }[];
                        /**
                         * @description Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`
                         * @example updated
                         */
                        updateStatus?: string;
                    } | null;
                    /** @description Payment infomation. */
                    paymentData: {
                        /** @description Gift card information, if it applies to the order. */
                        giftCards?: {
                            /**
                             * @description Gift card redemption code.
                             * @example HYUO-TEZZ-QFFT-HTFR
                             */
                            redemptionCode: string;
                            /**
                             * @description Gift card value.
                             * @example 500
                             */
                            value: number;
                            /**
                             * @description Gift card balance.
                             * @example 500
                             */
                            balance?: number;
                            /**
                             * @description Gift card name.
                             * @example name-example
                             */
                            name?: string;
                            /**
                             * @description Gift card ID.
                             * @example 1390324156495k195pmab4rall3di
                             */
                            id?: string;
                            /**
                             * @description Indicates whether gift card is in use.
                             * @example true
                             */
                            inUse?: boolean;
                            /**
                             * @description Indicates whether gift card is special.
                             * @example false
                             */
                            isSpecialCard?: boolean;
                        }[];
                        /** @description Array of gift card messages. */
                        giftCardMessages?: unknown[];
                        /** @description Information on payment systems. */
                        paymentSystems?: {
                            /**
                             * @description Payment system ID.
                             * @example 2
                             */
                            id?: number;
                            /**
                             * @description Payment system name.
                             * @example Visa
                             */
                            name?: string;
                            /**
                             * @description Payment group name.
                             * @example creditCardPaymentGroup
                             */
                            groupName?: string;
                            /** @description Payment system validator. */
                            validator?: {
                                /**
                                 * @description Payment system validator.
                                 * @example ^4
                                 */
                                regex?: string;
                                /**
                                 * @description Validator mask.
                                 * @example 9999 9999 9999 9999
                                 */
                                mask?: string;
                                /**
                                 * @description Card code regular expression.
                                 * @example [^0-9]
                                 */
                                cardCodeRegex?: string;
                                /**
                                 * @description Card code mask.
                                 * @example 999
                                 */
                                cardCodeMask?: string;
                                /**
                                 * @description Weights.
                                 * @example [
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2,
                                 *       1,
                                 *       2
                                 *     ]
                                 */
                                weights?: number[];
                            };
                            /**
                             * @description String ID.
                             * @example 12345abc
                             */
                            stringId?: string;
                            /**
                             * @description Template.
                             * @example creditCardPaymentGroup-template
                             */
                            template?: string;
                            /**
                             * @description Indicates whether a document is required.
                             * @example false
                             */
                            requiresDocument?: boolean;
                            /**
                             * @description Indicates whether this payment system has been selected.
                             * @example false
                             */
                            selected?: boolean;
                            /**
                             * @description Indicates whether it is custom.
                             * @example false
                             */
                            isCustom?: boolean;
                            /**
                             * @description Description.
                             * @example description-example
                             */
                            description?: string;
                        }[];
                        /** @description Payment information. */
                        payments: {
                            /**
                             * @description Account ID.
                             * @example accountID-example
                             */
                            accountId?: string;
                            /**
                             * @description Payment bin.
                             * @example 2
                             */
                            bin?: string | null;
                            /**
                             * @description Number of installments.
                             * @example 2
                             */
                            installments: number;
                            /**
                             * @description Payment system.
                             * @example 12
                             */
                            paymentSystem: number;
                            /**
                             * @description Reference value for calculating interest rates, in case it applies.
                             * @example 16175
                             */
                            referenceValue: number;
                            /**
                             * @description Value including interest, in case it applies.
                             * @example 16175
                             */
                            value: number;
                        }[];
                        /**
                         * @description Indicates whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"`.
                         * @example updated
                         */
                        updateStatus?: string;
                    };
                    /** @description Coupon information. */
                    marketingData?: {
                        /**
                         * @description Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order.
                         * @example free-shipping
                         */
                        coupon?: string;
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
                    } | null;
                    /**
                     * @description Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1)
                     * @example open-text-example
                     */
                    openTextField?: string;
                    /** @description Sales Associate information. */
                    salesAssociateData?: {
                        /**
                         * @description Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters.
                         * @example seller123
                         */
                        salesAssociateId?: string;
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
                content: {
                    "application/json": {
                        /** @description This is `null` since this request does not depend on any previously existing orderForm information in the platform. */
                        orderForm?: string | null;
                        /** @description Information on each transaction pertinent to the order placed. */
                        transactionData?: {
                            /** @description Information on each merchant transaction. */
                            merchantTransactions?: {
                                /** @description ID of the seller. */
                                id?: string;
                                /** @description ID of the transaction in the platform. */
                                transactionId?: string;
                                /** @description Name of the merchant responsible for the sale. */
                                merchantName?: string;
                                /** @description Information on each payment pertinent to the transaction. */
                                payments?: {
                                    /** @description Payment system. */
                                    paymentSystem?: number;
                                    /** @description Payment bin. */
                                    bin?: string | null;
                                    /** @description Account ID. */
                                    accountId?: string | null;
                                    /** @description Token ID. */
                                    tokenId?: string | null;
                                    /** @description Total value to be paid in this payment. */
                                    value?: number;
                                    /** @description Reference value over which interests may be applied. */
                                    referenceValue?: number;
                                    /** @description Gift card redemption code. */
                                    giftCardRedemptionCode?: string | null;
                                    /** @description Gift card provider. */
                                    giftCardProvider?: string | null;
                                    /** @description Gift card ID. */
                                    giftCardId?: string | null;
                                }[];
                            }[];
                            /** @description Receiver URI. */
                            receiverUri?: string;
                            /** @description Template of the gateway callback path, which may later be used to send information about the transaction. */
                            gatewayCallbackTemplatePath?: string;
                        };
                        /** @description Information on each of the orders created. */
                        orders?: {
                            /** @description ID of the order in the Order Management System (OMS). */
                            orderId?: string;
                            /** @description Order group. Orders that involve different sellers are split into different orders of a same order group. */
                            orderGroup?: string;
                            /** @description State. */
                            state?: string | null;
                            /**
                             * @description Indicates whether order is checked in.
                             * @example false
                             */
                            isCheckedIn?: boolean;
                            /** @description ID of the order in the seller. */
                            sellerOrderId?: string | null;
                            /** @description Store ID. */
                            storeId?: string | null;
                            /** @description Checked in pickup point. */
                            checkedInPickupPointId?: string | null;
                            /** @description Value of the order. */
                            value?: number;
                            /** @description Information on each item in the order. */
                            items?: {
                                /** @description Unique ID. */
                                uniqueId?: string;
                                /** @description ID of the item. */
                                id?: string;
                                /** @description Product ID. */
                                productId?: string;
                                /** @description Product Ref ID. */
                                productRefId?: string;
                                /** @description Ref ID. */
                                refId?: string;
                                /** @description European Article Number. */
                                ean?: string | null;
                                /** @description Product name. */
                                name?: string;
                                /** @description SKU name. */
                                skuName?: string;
                                /** @description Modal type. */
                                modalType?: string | null;
                                /** @description Parent item index. */
                                parentItemIndex?: number | null;
                                /** @description Parent assembly binding. */
                                parentAssemblyBinding?: string | null;
                                /** @description Price expiration date and time. */
                                priceValidUntil?: string;
                                /** @description Tax value in cents. */
                                tax?: number;
                                /** @description Price in cents. */
                                price?: number;
                                /** @description List price in cents. */
                                listPrice?: number;
                                /** @description Manual price in cents. */
                                manualPrice?: number | null;
                                /** @description User that applied the manual price, if that is the case. */
                                manualPriceAppliedBy?: string | null;
                                /** @description Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
                                sellingPrice?: number;
                                /** @description Reward value in cents. */
                                rewardValue?: number;
                                /** @description Indicates whether item is a gift. */
                                isGift?: boolean;
                                /** @description Additional information. */
                                additionalInfo?: {
                                    /** @description Dimension. */
                                    dimension?: string | null;
                                    /** @description Brand name. */
                                    brandName?: string;
                                    /** @description Brand ID. */
                                    brandId?: string;
                                    /** @description Offering information. */
                                    offeringInfo?: string | null;
                                    /** @description Offering type. */
                                    offeringType?: string | null;
                                    /** @description Offering type ID. */
                                    offeringTypeId?: string | null;
                                };
                                /** @description Presale date. */
                                preSaleDate?: string | null;
                                /** @description Product category IDs. */
                                productCategoryIds?: string;
                                /** @description Object, where each field is an ID from `productCategoryIds`. */
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
                                    /** @description Service type. */
                                    type?: string;
                                    /** @description Service identifier. */
                                    id?: number;
                                    /** @description Service name. */
                                    name?: string;
                                    /** @description Service price in cents. */
                                    price?: number;
                                }[];
                                /** @description Array containing information on attachments. */
                                attachments?: string[];
                                /** @description Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
                                priceTags?: {
                                    /** @description Price tag identifier. */
                                    identifier?: string | null;
                                    /** @description Indicates whether price tag value is applied through a percentage. */
                                    isPercentual?: boolean;
                                    /** @description Price tag name. */
                                    name?: string;
                                    /** @description Price tag raw value. */
                                    rawValue?: number;
                                    /** @description Price tag value. */
                                    value?: number;
                                }[];
                                /** @description Availability */
                                availability?: string;
                                /** @description Measurement unit */
                                measurementUnit?: string;
                                /** @description Unit multiplier */
                                unitMultiplier?: number;
                                /** @description Manufacturer code. */
                                manufacturerCode?: string | null;
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
                            /** @description Information on each seller. */
                            sellers?: {
                                /** @description Seller ID. */
                                id?: string;
                                /** @description Seller name. */
                                name?: string;
                                /** @description Seller logo. */
                                logo?: string | null;
                            }[];
                            /** @description Information on order totals. */
                            totals?: {
                                /** @description Total ID. */
                                id?: string;
                                /** @description Total name. */
                                name?: string;
                                /** @description Total value. */
                                value?: number;
                            }[];
                            /** @description Customer's profile information. */
                            clientProfileData?: {
                                /** @description Email address. */
                                email?: string | null;
                                /** @description First name. */
                                firstName?: string | null;
                                /** @description Last name. */
                                lastName?: string;
                                /** @description Type of the document informed by the customer. */
                                documentType?: string;
                                /** @description Document informed by the customer. */
                                document?: string;
                                /** @description Phone number. */
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
                            } | null;
                            /** @description Information on rates and benefits that apply to the order. */
                            ratesAndBenefitsData?: {
                                /** @description List with rates and benefits identifiers. */
                                rateAndBenefitsIdentifiers?: string[];
                                /** @description List with rates and benefits teasers. */
                                teaser?: string[];
                            };
                            /** @description Shipping information pertinent to the order. */
                            shippingData?: {
                                /** @description Address information. */
                                address?: {
                                    /** @description Type of address. For example, `Residential` or `Pickup`. */
                                    addressType?: string;
                                    /** @description Name of the person who is going to receive the order. */
                                    receiverName?: string;
                                    /** @description Address ID. */
                                    addressId?: string | null;
                                    /** @description Indicates whether address is disposable. */
                                    isDisposable?: boolean;
                                    /** @description Postal code. */
                                    postalCode?: string;
                                    /** @description City of the shipping address. */
                                    city?: string;
                                    /** @description State of the shipping address. */
                                    state?: string;
                                    /** @description Three letter ISO code of the country of the shipping address. */
                                    country?: string;
                                    /** @description Street of the shipping address. */
                                    street?: string;
                                    /** @description Number of the building, house or apartment in the shipping address. */
                                    number?: string;
                                    /** @description Neighborhood of the shipping address. */
                                    neighborhood?: string;
                                    /** @description Complement to the shipping address, in case it applies. */
                                    complement?: string | null;
                                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                    reference?: string | null;
                                    /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                    geoCoordinates?: number[];
                                } | null;
                                /** @description Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
                                logisticsInfo?: {
                                    /** @description Index corresponding to the position of the object in the `items` array. */
                                    itemIndex?: number;
                                    /** @description SLA selected by the customer. */
                                    selectedSla?: string | null;
                                    /** @description Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`. */
                                    selectedDeliveryChannel?: string | null;
                                    /** @description Address ID. */
                                    addressId?: string | null;
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
                                        /** @description Shipping estimate. For instance, Three business days will be represented `3bd`. */
                                        shippingEstimate?: string;
                                        /** @description Shipping estimate date. */
                                        shippingEstimateDate?: string | null;
                                        /** @description Estimate date of delivery. */
                                        lockTTL?: string | null;
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
                                            address?: {
                                                /** @description Type of address. For example, `Residential` or `Pickup`. */
                                                addressType?: string;
                                                /** @description Postal code. */
                                                postalCode?: string;
                                                /** @description City of the shipping address. */
                                                city?: string;
                                                /** @description State of the shipping address. */
                                                state?: string;
                                                /** @description Three letter ISO code of the country of the shipping address. */
                                                country?: string;
                                                /** @description Street of the shipping address. */
                                                street?: string;
                                                /** @description Number of the building, house or apartment in the shipping address. */
                                                number?: string;
                                                /** @description Neighborhood of the shipping address. */
                                                neighborhood?: string;
                                                /** @description Complement to the shipping address, in case it applies. */
                                                complement?: string | null;
                                                /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                                reference?: string | null;
                                                /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                                geoCoordinates?: number[];
                                            } | null;
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
                                        /** @description Transit time. For instance, "three business days" is represented `3bd`. */
                                        transitTime?: string;
                                    }[];
                                    /** @description List of countries that the item may be shipped to. */
                                    shipsTo?: string[];
                                    /** @description Item ID. */
                                    itemId?: string;
                                    /** @description List of available delivery channels. */
                                    deliveryChannels?: {
                                        /** @description Delivery channel ID. */
                                        id?: string;
                                    }[];
                                }[];
                                /** @description Array with information on the selected addresses for the order. */
                                selectedAddresses?: {
                                    /** @description Type of address. For example, `Residential` or `Pickup`. */
                                    addressType?: string;
                                    /** @description Name of the person who is going to receive the order. */
                                    receiverName?: string;
                                    /** @description Address ID. */
                                    addressId?: string | null;
                                    /** @description Indicates whether address is disposable. */
                                    isDisposable?: boolean;
                                    /** @description Postal code. */
                                    postalCode?: string;
                                    /** @description City of the shipping address. */
                                    city?: string;
                                    /** @description State of the shipping address. */
                                    state?: string;
                                    /** @description Three letter ISO code of the country of the shipping address. */
                                    country?: string;
                                    /** @description Street of the shipping address. */
                                    street?: string;
                                    /** @description Number of the building, house or apartment in the shipping address. */
                                    number?: string;
                                    /** @description Neighborhood of the shipping address. */
                                    neighborhood?: string;
                                    /** @description Complement to the shipping address, in case it applies. */
                                    complement?: string;
                                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                    reference?: string | null;
                                    /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                    geoCoordinates?: number[];
                                }[];
                                /** @description Array with information on the available addresses for the order. */
                                availableAddresses?: {
                                    /** @description Type of address. For example, `Residential` or `Pickup`. */
                                    addressType?: string;
                                    /** @description Name of the person who is going to receive the order. */
                                    receiverName?: string;
                                    /** @description Address ID. */
                                    addressId?: string | null;
                                    /** @description Indicates whether address is disposable. */
                                    isDisposable?: boolean;
                                    /** @description Postal code. */
                                    postalCode?: string;
                                    /** @description City of the shipping address. */
                                    city?: string;
                                    /** @description State of the shipping address. */
                                    state?: string;
                                    /** @description Three letter ISO code of the country of the shipping address. */
                                    country?: string;
                                    /** @description Street of the shipping address. */
                                    street?: string;
                                    /** @description Number of the building, house or apartment in the shipping address. */
                                    number?: string;
                                    /** @description Neighborhood of the shipping address. */
                                    neighborhood?: string;
                                    /** @description Complement to the shipping address, in case it applies. */
                                    complement?: string;
                                    /** @description Complement that might help locate the shipping address more precisely in case of delivery. */
                                    reference?: string | null;
                                    /** @description Array containing two floats with geocoordinates, first longitude, then latitude. */
                                    geoCoordinates?: number[];
                                }[];
                            };
                            /** @description Information on the order's payment. */
                            paymentData?: {
                                /** @description Gift card information, if it applies to the order. */
                                giftCards?: {
                                    /** @description Gift card redemption code. */
                                    redemptionCode?: string;
                                    /** @description Gift card value in cents. */
                                    value?: number;
                                    /** @description Gift card balance in cents. */
                                    balance?: number;
                                    /** @description Gift card name. */
                                    name?: string;
                                    /** @description Gift card ID. */
                                    id?: string;
                                    /** @description Indicates whether gift card is in use. */
                                    inUse?: boolean;
                                    /** @description Indicates whether gift card is special. */
                                    isSpecialCard?: boolean;
                                }[];
                                /** @description Information on each transaction pertinent to the order. */
                                transactions?: {
                                    /** @description Indicates whether transaction is active. */
                                    isActive?: boolean;
                                    /** @description Transaction ID. */
                                    transactionId?: string;
                                    /** @description Merchant name. */
                                    merchantName?: string;
                                    /** @description Information on each payment. */
                                    payments?: {
                                        /** @description Account ID. */
                                        accountId?: string;
                                        /** @description Bin. */
                                        bin?: string | null;
                                        /** @description Number of installments. */
                                        installments?: number;
                                        /** @description Payment system. */
                                        paymentSystem?: number;
                                        /** @description Reference value for calculating interest rates, in case it applies. Displayed in cents. */
                                        referenceValue?: number;
                                        /** @description Value including interest, in case it applies. Displayed in cents. */
                                        value?: number;
                                    }[];
                                    /** @description Indicates whather transaction is shared. */
                                    sharedTransaction?: boolean;
                                }[];
                            };
                            /** @description Item metadata. */
                            itemMetadata?: {
                                /** @description List of objects containing metadata on each item in the order. */
                                items?: {
                                    /** @description Item ID. */
                                    id?: string;
                                    /** @description Seller. */
                                    seller?: string;
                                    /** @description Product name. */
                                    name?: string;
                                    /** @description SKU name. */
                                    skuName?: string;
                                    /** @description Product ID. */
                                    productId?: string;
                                    /** @description Ref ID. */
                                    refId?: string;
                                    /** @description European Article Number. */
                                    ean?: string | null;
                                    /** @description Image URL. */
                                    imageUrl?: string;
                                    /** @description Detail URL. */
                                    detailUrl?: string;
                                }[];
                            };
                            /** @description Sales channel. */
                            salesChannel?: string;
                            /** @description Follow up email address. */
                            followUpEmail?: string;
                            /** @description Creation date. */
                            creationDate?: string;
                            /** @description Last change. */
                            lastChange?: string;
                            /** @description Time zone creation date. */
                            timeZoneCreationDate?: string;
                            /** @description Time zone last change. */
                            timeZoneLastChange?: string;
                            /** @description Indicates whether order is completed. */
                            isCompleted?: boolean;
                            /** @description Host name. */
                            hostName?: string;
                            /** @description Merchant name. */
                            merchantName?: string | null;
                            /** @description User type. */
                            userType?: string;
                            /** @description Rounding error. */
                            roundingError?: number;
                            /** @description Indicates whether edition is allowed. */
                            allowEdition?: boolean;
                            /** @description Indicates whether cancelation is allowed. */
                            allowCancelation?: boolean;
                            /** @description Indicates whether seller changing is allowed. */
                            allowChangeSeller?: boolean;
                            /** @description Indicates whether user data is visible. */
                            isUserDataVisible?: boolean;
                            /** @description `orderForm` creation date. */
                            orderFormCreationDate?: string;
                            /** @description Sales Associate (Seller) identification code. */
                            salesAssociateId?: string;
                        }[];
                    };
                };
            };
        };
    };
    ProcessOrder: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
                /** @description VTEX Chekout cookie associated with a specific order. Use the `Vtex_CHKO_Auth` and the `CheckoutDataAccess` cookies returned by the [Place order](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorder) or [Place order from existing cart](https://developers.vtex.com/vtex-rest-api/reference/order-placement-1#placeorderfromexistingorderform) API requests, like a browser would. */
                Cookie: string;
            };
            path: {
                /** @description Order group. It is the part of the `orderId` that comes before the `-`. For example, the `orderGroup` of the order `123456789-01` is `123456789`. */
                orderGroup: string;
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
            /** @description This code is used to indicate that a payment redirection flow is required to complete the order, such as using an [external payment application](https://developers.vtex.com/docs/guides/payments-integration-payment-app). */
            428: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Redirect Payment information. */
                        RedirectResponseCollection?: {
                            /** @description Redirect URL information. */
                            redirectUrl?: string;
                        }[];
                        /** @description Payment authorization information. */
                        paymentAuthorizationAppCollection?: {
                            /** @description Indicates which VTEX IO app that will handle the payment flow at Checkout. */
                            appName?: string;
                            /** @description App payload information. */
                            appPayload?: {
                                /** @description URL source of external payment flow. */
                                code?: string;
                                /** @description Payment flow expiration date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`). */
                                expiresAt?: string;
                                /** @description Payment identifier at VTEX. */
                                paymentId?: string;
                                /** @description Transaction ID. */
                                transactionId?: string;
                            };
                        }[];
                    };
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Operation ID. */
                        operationId?: string;
                        /** @description Information on the error. */
                        error?: {
                            /** @description Error code. */
                            code?: string;
                            /** @description Error message. */
                            message?: string;
                            /** @description Error exception. */
                            exception?: string | null;
                        };
                    };
                };
            };
        };
    };
    GetSellersByRegion: {
        parameters: {
            query: {
                /** @description Three letter country code refering to the `postalCode` field. */
                country: string;
                /** @description Postal code corresponding to the shopper's location. */
                postalCode?: string;
                /** @description Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location. */
                geoCoordinates?: number[];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description ID of the region corresponding to the shopper's location. */
                regionId: string;
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
                        /** @description Region ID. */
                        id?: string;
                        /** @description Array with information on each seller retrieved for the given region. */
                        sellers?: {
                            /** @description Seller ID. */
                            id?: string;
                            /** @description Seller name. */
                            name?: string;
                            /** @description Seller logo. */
                            logo?: string | null;
                        }[];
                    };
                };
            };
        };
    };
}
