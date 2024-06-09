export interface paths {
    "/api/pvt/installments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get installments options
         * @description Returns the best installment options according to the parameters informed in the request.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Installmentsoptions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/affiliations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all affiliations
         * @description Returns all affiliations (payment and anti-fraud providers) that are already configured in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Affiliations"];
        put?: never;
        /**
         * Insert new affiliation
         * @description Registers a new affiliation (payment or anti-fraud provider) in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-ManageStore | **Manage Store** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["InsertAffiliation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/affiliations/{affiliationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get affiliation by ID
         * @description Returns data for a specific affiliation (payment or anti-fraud provider).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["AffiliationById"];
        /**
         * Update affiliation by ID
         * @description Updates information about an affiliation (payment or anti-fraud provider) configured in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-ManageStore | **Manage Store** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["UpdateAffiliation"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/rules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all payment rules
         * @description Returns all payment rules applied to the payment providers configured in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Rules"];
        put?: never;
        /**
         * Insert a new payment rule
         * @description Creates a new payment rule to be applied to the payment providers configured in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-ManageStore | **Manage Store** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["InsertRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/rules/{ruleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get payment rule by ID
         * @description Returns data for a specific payment rule applied to the payment providers configured in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["RuleById"];
        /**
         * Update payment rule by ID
         * @description Updates information about a specific payment rule applied to the payment providers configured in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-ManageStore | **Manage Store** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["PutRuleById"];
        post?: never;
        /**
         * Delete payment rule by ID
         * @description Deletes a specific payment rule applied to the payment providers configured in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-ManageStore | **Manage Store** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["Rule"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/merchants/payment-systems": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all available payment methods
         * @description Returns all payment methods (such as Visa, Master, among others) that can be used in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["AvailablePaymentMethods"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 1. Start a new transaction
         * @description This request is the first step to create a new transaction.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["1.Createanewtransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pub/transactions/{transactionId}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 2.1 Send payments information public
         * @description The second step to create a new transaction. This request is used to send the payment data through a public request.
         *     >
         *     >ℹ️ If you want to send payment data containing sensitive information, such as credit card data, use the [Send payments with saved credit card](https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/payments) endpoint.## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         */
        post: operations["2.SendPaymentsPublic"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 2.2 Send payments with saved credit card
         * @description The second step to create a new transaction. This request is used to send the payment data through a private request.
         *     >
         *     >ℹ️ If you want to send payment data that does not contain sensitive information, you can use the [Send payments information public](https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pub/transactions/-transactionId-/payments) endpoint.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["2.SendPaymentsWithSavedCreditCard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/additional-data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 3. Send additional data
         * @description The third step to create a new transaction. This request sends additional data related to the transaction, such as profile information, shopping cart, shipping data, among others.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["3.SendAdditionalData"];
        delete?: never;
        options?: never;
        head?: never;
        /**
         * 3.1 Update additional data (optional)
         * @description Use this request to update any information that has previously been sent on endpoint [3. Send additional data](https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/additional-data).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        patch: operations["3.1UpdateAdditionalData"];
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/authorization-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * 4. Authorize new transaction
         * @description The fourth and last step to create a new transaction. It will authorized the new transaction creation according to the data previously informed in the latests requests.
         *
         *     This step is the trigger to process each of payments that were received in step 2.
         *
         *     Each payment will be sent to acquirer. If all payments are authorized, the transaction will be authorized. If one of the payments is denied, all payments in transaction will be cancelled.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["4.Doauthorization"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get transaction details
         * @description Returns data about a specific transaction made in your store.
         *
         *     >⚠️ Do not use the `interactions.href` route which is part of this endpoint's response. This is an internal-only route not meant to be used by external developers.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["TransactionDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/payments/{paymentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get payment details
         * @description Returns data about a specific payment made in your store.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["PaymentDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get transaction settlement details
         * @description Returns settlement data associated with a specific transaction.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **View Payment Data** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["TransactionSettlementDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/settlement-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Settle the transaction
         * @description Settles the transaction amount. A payment settled means that the seller will receive the value of the purchase value after bank conciliation.
         *
         *     >ℹ️ This call is mandatory to complete a transaction and its payments.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Settlethetransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/refunding-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refund the transaction
         * @description Refunds the amount of the transaction that was previously settled.
         *
         *     After a transaction is settled, this request can be used to partially or fully refund the transaction amount.
         *
         *     Due to acquirer rules, it is not possible to perform this step online against the acquirer, and, if an error occurrs, we notify the seller company responsible by email to manually check the transaction status against the acquirer.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Refundthetransaction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pvt/transactions/{transactionId}/cancellation-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel the transaction
         * @description Cancels a transaction that was previously approved, but not settled. It is possible to cancel partially or complete value of the transaction.
         *
         *     Due to acquirer rules it is not possible to perform this step online against the acquirer.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | PCI Gateway | Payment-Make Payments | **Process payments** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint. To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["Cancelthetransaction"];
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
        /** @description Installments options response body information. */
        ValidRequest: {
            /** @description Value to be paid in installments. */
            value: number;
            /** @description Installments information. */
            installments: components["schemas"]["Installment"][];
        };
        /** @description Installment options information. */
        Installment: {
            payment: components["schemas"]["Payment"];
            /** @description Array containing information about installment options. */
            options: components["schemas"]["Option"][];
        };
        /** @description Payment system information. */
        Payment: {
            /** @description Payment system identification. */
            id: number;
            /** @description Payment system name. */
            name: string | null;
            /** @description First six digits of the card number. */
            bin: string | null;
            /** @description Value to be paid in installments. */
            value: number;
            /**
             * @description Indicates whether the payment system is automatically applied by default.
             * @default false
             */
            isDefault: boolean;
            self: components["schemas"]["Self"];
        };
        /** @description Object containing the payment system reference route. */
        Self: {
            /** @description Payment system reference route. */
            href: string;
        };
        /** @description Installment options information. */
        Option: {
            /** @description Rule identification. */
            ruleId: string | null;
            /** @description Number of installments. */
            quantity: number;
            /** @description Value of each installment. */
            value: number;
            /** @description Interest rate (percent 0.1 = 10%). */
            interestRate: number;
            /** @description Indicates the external installment system (if applicable). */
            isExternalInstallmentService: number | null;
            /** @description Interest tax (percent 0.1 = 10%). */
            interestTax: number | null;
        };
        /** @description Installments options response body information. */
        InvalidRequestValue: {
            /** @description Error information. */
            error: {
                /** @description Error code. */
                code: string;
                /** @description Error message. */
                message: string;
                /** @description Exception information. */
                exception: string | null;
            };
        };
        /**
         * @description Insert new affiliation request body information.
         * @example {
         *       "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
         *       "name": "CieloV3 - Test",
         *       "configuration": [
         *         {
         *           "name": "HowTo",
         *           "value": "https://developercielo.github.io/payment-method-enablement/"
         *         },
         *         {
         *           "name": "MerchantId",
         *           "value": "sampleData"
         *         },
         *         {
         *           "name": "MerchantKey",
         *           "value": "**********"
         *         },
         *         {
         *           "name": "softDescriptor",
         *           "value": "teste"
         *         },
         *         {
         *           "name": "bankInvoiceProvider",
         *           "value": "Disabled"
         *         },
         *         {
         *           "name": "bankIDebitProvider",
         *           "value": "Disabled"
         *         },
         *         {
         *           "name": "useEarlySecurityCapture",
         *           "value": "0"
         *         },
         *         {
         *           "name": "isProduction",
         *           "value": "false"
         *         },
         *         {
         *           "name": "bankDebitProvider",
         *           "value": "Disabled"
         *         },
         *         {
         *           "name": "Registered",
         *           "value": "false"
         *         }
         *       ],
         *       "isdelivered": true,
         *       "isConfigured": true
         *     }
         */
        InsertAffiliationRequest: {
            /**
             * @description Provider implementation class name.
             * @example Vtex.PaymentGateway.Connectors.CieloV3Connector
             */
            implementation: string;
            /**
             * @description Provider name.
             * @example CieloV3 - Test
             */
            name: string;
            /** @description Array containing provider configuration information. */
            configuration: {
                /**
                 * @description Configuration parameter name.
                 * @example MerchantId
                 */
                name: string;
                /**
                 * @description Configuration parameter value.
                 * @example sampleData
                 */
                value: string;
            }[];
            /**
             * @description Indicates whether the provider is published and available for use.
             * @example true
             */
            isdelivered: boolean;
            /**
             * @description Indicates whether the provider is configured.
             * @example true
             */
            isConfigured: boolean;
        };
        /**
         * @description Update affiliation by ID request body information.
         * @example {
         *       "id": "fg8b4ea5-0b24-47dc-971e-2f6635ea1f14",
         *       "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
         *       "name": "CieloV3 - Test",
         *       "configuration": [
         *         {
         *           "name": "HowTo",
         *           "value": "https://developercielo.github.io/payment-method-enablement/",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "MerchantId",
         *           "value": "sampleData",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "MerchantKey",
         *           "value": "**********",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "softDescriptor",
         *           "value": "teste",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "bankInvoiceProvider",
         *           "value": "Disabled",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "bankIDebitProvider",
         *           "value": "Disabled",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "useEarlySecurityCapture",
         *           "value": "0",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "isProduction",
         *           "value": "false",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "bankDebitProvider",
         *           "value": "Disabled",
         *           "valueKey": null
         *         },
         *         {
         *           "name": "Registered",
         *           "value": "false",
         *           "valueKey": null
         *         }
         *       ],
         *       "isdelivered": true,
         *       "isConfigured": true
         *     }
         */
        UpdateAffiliationRequest: {
            /**
             * @description Provider identification.
             * @example fg8b4ea5-0b24-47dc-971e-2f6635ea1f14
             */
            id: string;
            /**
             * @description Provider implementation class name.
             * @example Vtex.PaymentGateway.Connectors.CieloV3Connector
             */
            implementation: string;
            /**
             * @description Provider name.
             * @example CieloV3 - Test
             */
            name: string;
            /** @description Array containing provider configuration information. */
            configuration: {
                /**
                 * @description Configuration parameter name.
                 * @example MerchantId
                 */
                name: string;
                /**
                 * @description Configuration parameter value.
                 * @example sampleData
                 */
                value: string;
                /**
                 * @description Value key information.
                 * @example valuekey_1
                 */
                valueKey: string | null;
            }[];
            /**
             * @description Indicates whether the provider is published and available for use.
             * @example true
             */
            isdelivered: boolean;
            /**
             * @description Indicates whether the provider is configured.
             * @example true
             */
            isConfigured: boolean;
        };
        /** @description Affiliation by ID response body information. */
        AffiliationResponse: {
            /** @description Provider identification. */
            id: string;
            /** @description Provider implementation class name. */
            implementation: string;
            /** @description Provider name. */
            name: string;
            /** @description Array containing provider configuration information. */
            configuration: {
                /** @description Configuration parameter name. */
                name: string;
                /** @description Configuration parameter value. */
                value: string;
                /** @description Value key information. */
                valueKey: string | null;
            }[];
            /**
             * @description Indicates whether the provider is published and available for use.
             * @example true
             */
            isdelivered: boolean;
            /**
             * @description Indicates whether the provider is configured.
             * @example true
             */
            isConfigured: boolean;
        };
        /** @description Array containing payment rules information. */
        GetRulesResponse: {
            /**
             * @description Rule identification.
             * @example 9e11ed95-4b7f-4445-a53e-2512f260ff1c
             */
            id?: string;
            /**
             * @description Rule name.
             * @example American Express
             */
            name?: string;
            salesChannels?: components["schemas"]["SalesChannel"];
            paymentSystem?: components["schemas"]["PaymentSystem"];
            connector?: components["schemas"]["Connector"];
            issuer?: components["schemas"]["Issuer"];
            antifraud?: components["schemas"]["Antifraud"];
            /** @description Installment options information. */
            installmentOptions?: {
                /**
                 * @description Indicates whether the billing date will be at the end (0) or beginning of the period (1).
                 * @enum {number}
                 */
                dueDateType: 0 | 1;
                /**
                 * @description Indicates the type of interest to calculate the value of the installments (Compound Interest = `null` or `0`, Simple Interest Rate with Tax = `1` and Single Interest = `2`).
                 * @enum {number|null}
                 */
                interestRateMethod: null | 0 | 1 | 2;
                /** @description Minimum value of each installment. */
                minimumInstallmentValue: number;
                /** @description Array containing installments information. */
                installments: {
                    /**
                     * @description Rule identification.
                     * @example fe6c470b-f80b-4bb1-a75c-378617f8767a
                     */
                    ruleId: string | null;
                    /**
                     * @description Number of installments.
                     * @example 1
                     */
                    quantity: number;
                    /** @description Value of each installment. */
                    value: number;
                    /** @description Interest rate (percent 0.1 = 10%). */
                    interestRate: number;
                    /** @description Indicates the external installment system (if applicable). */
                    isExternalInstallmentService: number | null;
                    /** @description Interest tax (percent 0.1 = 10%). */
                    interestTax: number | null;
                }[];
            } | null;
            /**
             * @description Indicates whether the payment is automatically authorized.
             * @example true
             */
            isSelfAuthorized?: boolean | null;
            /**
             * @description Indicates whether it is necessary to log in to make the payment.
             * @example true
             */
            requiresAuthentication?: boolean | null;
            /**
             * @description Indicates whether the rule is enabled in the store.
             * @example true
             */
            enabled?: boolean;
            /**
             * @description Indicates whether any specific type of installment service is used.
             * @example false
             */
            installmentsService?: boolean;
            /**
             * @description Indicates whether this rule should be considered the default for a given payment condition.
             * @example false
             */
            isDefault?: boolean | null;
            /**
             * @description Rule start date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`), if applicable.
             * @example 2023-12-10T17:00:00Z
             */
            beginDate?: string | null;
            /**
             * @description Rule end date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`), if applicable.
             * @example 2023-12-12T17:00:00Z
             */
            endDate?: string | null;
            /** @description Commercial condition information. */
            condition?: {
                /**
                 * @description Commercial condition identification.
                 * @example 1
                 */
                id: string;
                /**
                 * @description Indicates the minimum percentage of SKUs required in the cart using this commercial condition for it to be activated.
                 * @example 0
                 */
                pullRate: number;
                /**
                 * @description Commercial condition information.
                 * @example Commercial_condition_1
                 */
                name: string | null;
            } | null;
            /** @description Indicates the names of the accounts to which the rule is being applied exclusively. */
            multiMerchantList?: string[] | null;
            /** @description Information about rule application in a country. */
            country?: {
                /**
                 * @description Country name.
                 * @example Brazil
                 */
                name: string | null;
                /**
                 * @description Country code (ISO 3166 alpha-2).
                 * @example BRA
                 */
                isoCode: string;
            } | null;
            /** @description Array containing information about the periods (days and hours) in which the rule is enabled. */
            dateIntervals?: {
                /**
                 * @description Time, days of the week, and GMT time zone in which the rule is activated. This data is available in [CRON format](https://en.wikipedia.org/wiki/Cron).
                 * @example * * 11 * * 1,3,4 * -0300
                 */
                start: string;
                /**
                 * @description Time, days of the week and GMT time zone in which the rule is deactivated. This data is available in [CRON format](https://en.wikipedia.org/wiki/Cron).
                 * @example * * 18 * * 1,3,4 * -0300
                 */
                end: string;
            }[] | null;
            /**
             * @description Indicates whether interest can be calculated externally.
             * @example false
             */
            externalInterest?: boolean;
            /** @description Minimum payment transaction amount for the rule to be applied. */
            minimumValue?: number | null;
            /** @description Array containing information about the payment deadlines (applicable for credit payment method). */
            deadlines?: {
                /** @description Array containing payment options information. */
                paymentOptions: {
                    /**
                     * @description Deadline in days to make payment.
                     * @example 30
                     */
                    days: number;
                    /**
                     * @description Interest rate applied (in percentage, e.g. `3.0` means 3%).
                     * @example 0
                     */
                    interestRate: number;
                }[];
            }[];
            /** @description Information about the cobranded card. */
            cobrand?: {
                /**
                 * @description Card name.
                 * @example Cobrand_Test
                 */
                name: string | null;
            };
            /** @description Information about the card category. */
            cardLevel?: {
                /**
                 * @description Card category name (e.g. standard, gold, premium).
                 * @example premium
                 */
                name: string | null;
            };
            /** @description Range of card bins excluded from application of this rule. */
            excludedBinsRanges?: number | null;
        }[];
        /** @description Payment rules information. */
        RulesRequest: {
            /**
             * @description Rule identification.
             * @example 9e11ed95-4b7f-4445-a53e-2512f260ff1c
             */
            id: string;
            /**
             * @description Rule name.
             * @example American Express
             */
            name: string;
            salesChannels: components["schemas"]["SalesChannel"];
            paymentSystem: components["schemas"]["PaymentSystem"];
            connector: components["schemas"]["Connector"];
            issuer: components["schemas"]["Issuer"];
            antifraud: components["schemas"]["Antifraud"];
            /** @description Installment options information. */
            installmentOptions: {
                /**
                 * @description Indicates whether the billing date will be at the end (0) or beginning of the period (1).
                 * @enum {number}
                 */
                dueDateType: 0 | 1;
                /**
                 * @description Indicates the type of interest to calculate the value of the installments (Compound Interest = `null` or `0`, Simple Interest Rate with Tax = `1` and Single Interest = `2`).
                 * @enum {number|null}
                 */
                interestRateMethod: null | 0 | 1 | 2;
                /** @description Minimum value of each installment. */
                minimumInstallmentValue: number;
                /** @description Array containing installments information. */
                installments: {
                    /**
                     * @description Rule identification.
                     * @example fe6c470b-f80b-4bb1-a75c-378617f8767a
                     */
                    ruleId: string | null;
                    /**
                     * @description Number of installments.
                     * @example 1
                     */
                    quantity: number;
                    /** @description Value of each installment. */
                    value: number;
                    /** @description Interest rate (percent 0.1 = 10%). */
                    interestRate: number;
                    /** @description Indicates the external installment system (if applicable). */
                    isExternalInstallmentService: number | null;
                    /** @description Interest tax (percent 0.1 = 10%). */
                    interestTax: number | null;
                }[];
            } | null;
            /**
             * @description Indicates whether the payment is automatically authorized.
             * @example true
             */
            isSelfAuthorized: boolean | null;
            /**
             * @description Indicates whether it is necessary to log in to make the payment.
             * @example true
             */
            requiresAuthentication: boolean | null;
            /**
             * @description Indicates whether the rule is enabled in the store.
             * @example true
             */
            enabled: boolean;
            /**
             * @description Indicates whether any specific type of installment service is used.
             * @example false
             */
            installmentsService: boolean;
            /**
             * @description Indicates whether this rule should be considered the default for a given payment condition.
             * @example false
             */
            isDefault: boolean | null;
            /**
             * @description Rule start date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`), if applicable.
             * @example 2023-12-10T17:00:00Z
             */
            beginDate: string | null;
            /**
             * @description Rule end date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`), if applicable.
             * @example 2023-12-12T17:00:00Z
             */
            endDate: string | null;
            /** @description Commercial condition information. */
            condition: {
                /**
                 * @description Commercial condition identification.
                 * @example 1
                 */
                id: string;
                /**
                 * @description Indicates the minimum percentage of SKUs required in the cart using this commercial condition for it to be activated.
                 * @example 0
                 */
                pullRate: number;
                /**
                 * @description Commercial condition information.
                 * @example Commercial_condition_1
                 */
                name: string | null;
            } | null;
            /** @description Indicates the names of the accounts to which the rule is being applied exclusively. */
            multiMerchantList: string[] | null;
            /** @description Information about rule application in a country. */
            country: {
                /**
                 * @description Country name.
                 * @example Brazil
                 */
                name: string | null;
                /**
                 * @description Country code (ISO 3166 alpha-2).
                 * @example BRA
                 */
                isoCode: string;
            } | null;
            /** @description Array containing information about the periods (days and hours) in which the rule is enabled. */
            dateIntervals: {
                /**
                 * @description Time, days of the week, and GMT time zone in which the rule is activated. This data is available in [CRON format](https://en.wikipedia.org/wiki/Cron).
                 * @example * * 11 * * 1,3,4 * -0300
                 */
                start: string;
                /**
                 * @description Time, days of the week and GMT time zone in which the rule is deactivated. This data is available in [CRON format](https://en.wikipedia.org/wiki/Cron).
                 * @example * * 18 * * 1,3,4 * -0300
                 */
                end: string;
            }[] | null;
            /**
             * @description Indicates whether interest can be calculated externally.
             * @example false
             */
            externalInterest?: boolean;
            /** @description Minimum payment transaction amount for the rule to be applied. */
            minimumValue?: number | null;
            /** @description Array containing information about the payment deadlines (applicable for credit payment method). */
            deadlines?: {
                /** @description Array containing payment options information. */
                paymentOptions: {
                    /**
                     * @description Deadline in days to make payment.
                     * @example 30
                     */
                    days: number;
                    /**
                     * @description Interest rate applied (in percentage, e.g. `3.0` means 3%).
                     * @example 0
                     */
                    interestRate: number;
                }[];
            }[];
            /** @description Information about the cobranded card. */
            cobrand?: {
                /**
                 * @description Card name.
                 * @example Cobrand_Test
                 */
                name: string | null;
            };
            /** @description Information about the card category. */
            cardLevel?: {
                /**
                 * @description Card category name (e.g. standard, gold, premium).
                 * @example premium
                 */
                name: string | null;
            };
            /** @description Range of card bins excluded from application of this rule. */
            excludedBinsRanges?: number | null;
        };
        /** @description New payment rule request body information. */
        InsertRuleRequest: {
            /**
             * @description Rule name.
             * @example Test_API_2
             */
            name: string;
            salesChannels: components["schemas"]["SalesChannel"];
            paymentSystem: components["schemas"]["PaymentSystem"];
            connector: components["schemas"]["Connector"];
            issuer: components["schemas"]["Issuer"];
            antifraud: components["schemas"]["Antifraud"];
            /** @description Installment options information. */
            installmentOptions: {
                /**
                 * @description Indicates whether the billing date will be at the end (0) or beginning of the period (1).
                 * @enum {number}
                 */
                dueDateType: 0 | 1;
                /**
                 * @description Indicates the type of interest to calculate the value of the installments (Compound Interest = `null` or `0`, Simple Interest Rate with Tax = `1` and Single Interest = `2`).
                 * @enum {number|null}
                 */
                interestRateMethod: null | 0 | 1 | 2;
                /** @description Minimum value of each installment. */
                minimumInstallmentValue: number;
                /** @description Array containing installments information. */
                installments: {
                    /**
                     * @description Rule identification.
                     * @example fe6c470b-f80b-4bb1-a75c-378617f8767a
                     */
                    ruleId: string | null;
                    /**
                     * @description Number of installments.
                     * @example 1
                     */
                    quantity: number;
                    /** @description Value of each installment. */
                    value: number;
                    /** @description Interest rate (percent 0.1 = 10%). */
                    interestRate: number;
                    /** @description Indicates the external installment system (if applicable). */
                    isExternalInstallmentService: number | null;
                    /** @description Interest tax (percent 0.1 = 10%). */
                    interestTax: number | null;
                }[];
            } | null;
            /**
             * @description Indicates whether the payment is automatically authorized.
             * @example true
             */
            isSelfAuthorized: boolean | null;
            /**
             * @description Indicates whether it is necessary to log in to make the payment.
             * @example true
             */
            requiresAuthentication: boolean | null;
            /**
             * @description Indicates whether the rule is enabled in the store.
             * @example false
             */
            enabled: boolean;
            /**
             * @description Indicates whether any specific type of installment service is used.
             * @example false
             */
            installmentsService: boolean;
            /**
             * @description Indicates whether this rule should be considered the default for a given payment condition.
             * @example false
             */
            isDefault: boolean | null;
            /**
             * @description Rule start date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`), if applicable.
             * @example 2023-12-10T17:00:00Z
             */
            beginDate: string | null;
            /**
             * @description Rule end date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format (`YYYY-MM-DDThh:mm:ss.fff`), if applicable.
             * @example 2023-12-12T17:00:00Z
             */
            endDate: string | null;
            /** @description Commercial condition information. */
            condition: {
                /**
                 * @description Commercial condition identification.
                 * @example 1
                 */
                id: string;
                /**
                 * @description Indicates the minimum percentage of SKUs required in the cart using this commercial condition for it to be activated.
                 * @example 0
                 */
                pullRate: number;
                /**
                 * @description Commercial condition information.
                 * @example Commercial_condition_1
                 */
                name: string | null;
            } | null;
            /** @description Indicates the names of the accounts to which the rule is being applied exclusively. */
            multiMerchantList: string[] | null;
            /** @description Information about rule application in a country. */
            country: {
                /**
                 * @description Country name.
                 * @example Brazil
                 */
                name: string | null;
                /**
                 * @description Country code (ISO 3166 alpha-2).
                 * @example BRA
                 */
                isoCode: string;
            } | null;
            /** @description Array containing information about the periods (days and hours) in which the rule is enabled. */
            dateIntervals: {
                /**
                 * @description Time, days of the week, and GMT time zone in which the rule is activated. This data is available in [CRON format](https://en.wikipedia.org/wiki/Cron).
                 * @example * * 11 * * 1,3,4 * -0300
                 */
                start: string;
                /**
                 * @description Time, days of the week and GMT time zone in which the rule is deactivated. This data is available in [CRON format](https://en.wikipedia.org/wiki/Cron).
                 * @example * * 18 * * 1,3,4 * -0300
                 */
                end: string;
            }[] | null;
            /**
             * @description Indicates whether interest can be calculated externally.
             * @example false
             */
            externalInterest?: boolean;
            /** @description Minimum payment transaction amount for the rule to be applied. */
            minimumValue?: number | null;
            /** @description Array containing information about the payment deadlines (applicable for credit payment method). */
            deadlines?: {
                /** @description Array containing payment options information. */
                paymentOptions: {
                    /**
                     * @description Deadline in days to make payment.
                     * @example 30
                     */
                    days: number;
                    /**
                     * @description Interest rate applied (in percentage, e.g. `3.0` means 3%).
                     * @example 0
                     */
                    interestRate: number;
                }[];
            }[];
            /** @description Information about the cobranded card. */
            cobrand?: {
                /**
                 * @description Card name.
                 * @example Cobrand_Test
                 */
                name: string | null;
            };
            /** @description Information about the card category. */
            cardLevel?: {
                /**
                 * @description Card category name (e.g. standard, gold, premium).
                 * @example premium
                 */
                name: string | null;
            };
            /** @description Range of card bins excluded from application of this rule. */
            excludedBinsRanges?: number | null;
        };
        /** @description Array containing information about the Sales channel. */
        SalesChannel: {
            /**
             * @description Sales channel identification.
             * @example 1
             */
            id: string;
        }[];
        /** @description Payment system information. */
        PaymentSystem: {
            /**
             * @description Payment system identification.
             * @example 1
             */
            id: number;
            /**
             * @description Payment system name.
             * @example CieloV3 - Test
             */
            name: string;
            /**
             * @description Payment system implementation class name.
             * @example Vtex.PaymentGateway.Connectors.CieloV3Connector
             */
            implementation: string | null;
        };
        /** @description Connector (payment provider) information. */
        Connector: {
            /**
             * @description Connector (payment provider) implementation class name.
             * @example Vtex.PaymentGateway.Connectors.CieloV3Connector
             */
            implementation: string;
            /**
             * @description Affiliation connector (payment provider) identification.
             * @example 0a8488e6-0c30-4150-be96-b0dcaaa6a0cd
             */
            affiliationId: string;
        } | null;
        /** @description Card issuer information. */
        Issuer: {
            /**
             * @description Card issuer name.
             * @example barclays
             */
            name: string | null;
        };
        /** @description Anti-fraud information. */
        Antifraud: {
            /**
             * @description Connector (anti-fraud provider) implementation class name.
             * @example Vtex.PaymentGateway.Connectors.ClearSaleConnector
             */
            implementation: string | null;
            /**
             * @description Affiliation connector (anti-fraud provider) identification.
             * @example 0a8488e6-0c30-4150-be96-b0dcaaa6a0cd
             */
            affiliationId: string | null;
        } | null;
        /** @description Available payment methods response body information. */
        PaymentSystemsResponse: {
            /** @description Payment method identification. */
            id: number;
            /** @description Payment method name. */
            name: string;
            /** @description Indicates whether a document is required. */
            requiresDocument: boolean;
            /** @description Payment method implementation class name. */
            implementation: string;
            /** @description Connector (payment provider) implementation class name. */
            connectorImplementation: string;
            /** @description Connector (anti-fraud provider) implementation class name. */
            antifraudConnectorImplementation: string | null;
            /** @description Payment group name. */
            groupName: string;
            /** @description Indicates whether the payment method allows redirection. */
            redirect: boolean;
            /** @description Indicates whether it is custom. */
            isCustom: boolean;
            /** @description Indicates whether the payment is automatically authorized. */
            isSelfAuthorized: boolean;
            /** @description Indicates whether it is necessary to log in to make the payment. */
            requiresAuthentication: boolean;
            /** @description Indicates whether the payment method allows installments. */
            allowInstallments: boolean;
            /** @description Indicates whether it is possible to restrict the use of specific BIN codes (only applicable for cards). */
            allowBinExclusion: boolean;
            /** @description Indicates whether the method allows multiple payments. Example of `false`: debit card. */
            allowMultiple: boolean;
            /** @description Indicates whether it is possible to identify the name of the bank responsible for issuing the card. */
            allowIssuer: boolean;
            /** @description Indicates whether it is possible to restrict a payment rule by the country where the purchase is made. */
            allowCountry: boolean;
            /** @description Indicates whether to restrict a payment rule by commercial policy type. */
            allowCommercialPolicy: boolean;
            /** @description Indicates whether to restrict a payment rule by commercial condition type. */
            allowCommercialCondition: boolean;
            /** @description Indicates whether it is possible to restrict a period for making the payment. */
            allowPeriod: boolean;
            /** @description Indicates whether the payment method is available for use. */
            isAvailable: boolean;
            /** @description Description of the payment method. */
            description: string | null;
            /** @description Indicates whether the payment method supports recurrence. */
            supportRecurrence: boolean;
            validator: components["schemas"]["Validator"];
            /** @description App dependencies information. */
            appDependencies: string | null;
            /** @description Indicates whether a document is shown. */
            displayDocument: boolean;
            /** @description Payment due date. */
            dueDate: string;
            /** @description Indicates the possibility of payment notification (used by bank invoices and notes payable). */
            allowNotification: boolean;
            /** @description Affiliation connector (payment provider) identification. */
            affiliationId: string | null;
            /** @description Information about payment availability. */
            availablePayments: string | null;
            /** @description Amount of time (in minutes) until the payment date (`dueDate`). */
            dueDateMinutes: number;
        };
        /** @description Validator information. */
        Validator: {
            /** @description [Regex](https://regexr.com/) information. */
            regex: string | null;
            /** @description Validator mask. */
            mask: string | null;
            /** @description Card code regular mask. */
            cardCodeMask: string | null;
            /** @description Card code regular expression. */
            cardCodeRegex: string | null;
            /** @description Array containing weigths information. */
            weights: number[] | null;
            /** @description Indicates whether it is necessary to use the CVV code to complete a transaction with payment made by card. */
            useCvv: boolean;
            /** @description Indicates whether it is necessary to use the expiration date to complete a card payment transaction. */
            useExpirationDate: boolean;
            /** @description Indicates whether it is necessary to use the card holder name to complete a payment transaction made by card. */
            useCardHolderName: boolean;
            /** @description Indicates whether it is necessary to use the billing address to complete a card payment transaction. */
            useBillingAddress: boolean;
            /** @description Information about valid card lengths. */
            validCardLengths: string | null;
        };
        /** @description New transaction request body information. */
        "1.CreateanewtransactionRequest": {
            /**
             * @description Transaction value. The value must be described without using separation for decimals, e.g. for a transaction with a value equal to 201.50, send 20150.
             * @example 20000
             */
            value: number;
            /**
             * @description Identification number that relates the transaction to a purchase order.
             * @example 1234567
             */
            referenceId: string;
            /**
             * @description Store where the transaction was initiated.
             * @example cosmetics2
             */
            channel: string;
            /**
             * @description [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) information.
             * @example urn:amazon:webservices:clientvpn
             */
            urn?: string | null;
            /**
             * @description Sales channel information.
             * @example 1
             */
            salesChannel: string;
        };
        /** @description New transaction response body information. */
        StartTransactionResponse: {
            /** @description Transaction identification. */
            id: string;
            /** @description Transaction identification (same value of the `id` field). */
            transactionId: string;
            /** @description Identification number that relates the transaction to a purchase order. It can be also used for anti-fraud to identify the transaction. */
            referenceKey: string;
            interactions: components["schemas"]["Interactions"];
            settlements: components["schemas"]["Settlements"];
            payments: components["schemas"]["Payments"];
            refunds: components["schemas"]["Refunds"];
            cancellations: components["schemas"]["Cancellations"];
            capabilities: components["schemas"]["Capabilities"];
            /**
             * @description Field that represents the possible transaction timeout statuses. Possible statuses and meanings: `0` = NotStarted, `1` = CancellingOrFinishing, `2` = CancellingOrFinishingByTimeout, `3` = CancelledOrFinished and `4` = TriesExceeded.
             * @enum {number}
             */
            timeoutStatus: 0 | 1 | 2 | 3 | 4;
            /** @description Total refunded transaction amount. */
            totalRefunds: number;
            /** @description Transaction status. */
            status: string;
            /** @description Transaction value. */
            value: number;
            /** @description Receiver [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) information. */
            receiverUri: string | null;
            /** @description Transaction start date. */
            startDate: string;
            /** @description Transaction authorization token. */
            authorizationToken: string | null;
            /** @description Transaction authorization date. */
            authorizationDate: string | null;
            /** @description Transaction completion token. */
            commitmentToken: string | null;
            /** @description Transaction completion date. */
            commitmentDate: string | null;
            /** @description Transaction refund token. */
            refundingToken: string | null;
            /** @description Transaction refund date. */
            refundingDate: string | null;
            /** @description Transaction cancellation token. */
            cancelationToken: string | null;
            /** @description Transaction cancellation date. */
            cancelationDate: string | null;
            /** @description Field containing transaction information. */
            fields: components["schemas"]["Field"][];
            /** @description IP address information. */
            ipAddress: string | null;
            /** @description Session identification. */
            sessionId: string | null;
            /** @description Random [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) V4 generated when the Request Capture receives a session that does not contain the macID already set. This value is set to the cookie `VtexRCMacIdv7`. The cookie has 1 year of expiration. */
            macId: string | null;
            /** @description VTEX fingerprint information. */
            vtexFingerprint: string | null;
            /** @description Chargeback information. */
            chargeback: string | null;
            /** @description White signature (anti-fraud list) information. */
            whiteSignature: string | null;
            /** @description Responsible for transaction request. */
            owner: string;
            /** @description Order identitication. */
            orderId: string | null;
            /** @description HTTP client used in the transaction. */
            userAgent: string | null;
            /** @description Type of content accepted in the transaction request header. */
            acceptHeader: string | null;
            /** @description Anti-fraud transaction identification. */
            antifraudTid: string | null;
            /** @description Anti-fraud response information. */
            antifraudResponse: string | null;
            /** @description Anti-fraud reference information. */
            antifraudReference: string | null;
            /** @description Anti-fraud affiliation identification. */
            antifraudAffiliationId: string | null;
            /** @description Store where the transaction was initiated. */
            channel: string;
            /** @description Sales channel information. */
            salesChannel: string;
            /** @description [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) information. */
            urn: string | null;
            /** @description Custom field for a transaction that can be displayed on the customer's invoice. */
            softDescriptor: string | null;
            /** @description Indicates whether the payment transaction should be recurring. */
            markedForRecurrence: boolean;
            /** @description Buyer information. */
            buyer: {
                /** @description Buyer first name. */
                firstName?: string;
                /** @description Buyer last name. */
                lastName?: string;
                /** @description Type of the document informed by the buyer. */
                documentType?: string;
                /** @description Document informed by the buyer. */
                document?: string;
                /** @description Buyer email address. */
                email?: string;
                /** @description Buyer address. */
                address?: string;
                /** @description Buyer phone number. */
                phone?: string;
            } | null;
        };
        /** @description Object containing the reference route of transaction interactions. */
        Interactions: {
            /** @description Transaction interaction reference route. */
            href: string;
        };
        /** @description Object containing the reference route of transaction settlements. */
        Settlements: {
            /** @description Transaction settlement reference route. */
            href: string;
        };
        /** @description Object containing the reference route of transaction payments. */
        Payments: {
            /** @description Transaction payment reference route. */
            href: string;
        };
        /** @description Object containing the reference route of transaction refunds. */
        Refunds: {
            /** @description Transaction refund reference route. */
            href: string;
        };
        /** @description Object containing the reference route of transaction cancellations. */
        Cancellations: {
            /** @description Transaction cancellation reference route. */
            href: string;
        };
        /** @description Object containing the reference route of transaction capabilities. */
        Capabilities: {
            /** @description Transaction capabilities reference route. */
            href: string;
        };
        /** @description Transaction parameters information. */
        Field: {
            /** @description Transaction parameter name. */
            name: string;
            /** @description Transaction parameter value. */
            value: string;
        };
        /** @description Fields information. */
        Fields: {
            /**
             * @description Card holder name.
             * @example UserTest
             */
            holderName: string | null;
            /**
             * @description Card number information.
             * @example 111111111111
             */
            cardNumber: number | null;
            /**
             * @description CVV code.
             * @example 231
             */
            validationCode: number | null;
            /**
             * @description Due date information. The date format is `mm/yy`.
             * @example 10/19
             */
            dueDate: string | null;
            /**
             * @description Card holder documentation.
             * @example 8041734561
             */
            document: string | null;
            /**
             * @description Account identification.
             * @example 08134AF761A148B9A5DCE14A81F31DD9
             */
            accountId: string | null;
            /** @description Array containing customer address information. */
            address: {
                /**
                 * @description Address type.
                 * @example Residential
                 */
                addressType?: string;
                /**
                 * @description Name of the receiver.
                 * @example Clark Kent
                 */
                receiverName?: string;
                /**
                 * @description Postal code information.
                 * @example 5555555
                 */
                postalCode?: string;
                /**
                 * @description City of the address.
                 * @example Sao Paulo
                 */
                city?: string;
                /**
                 * @description State of the address.
                 * @example SP
                 */
                state?: string;
                /**
                 * @description Country of the address. ISO three-letter code.
                 * @example BRA
                 */
                country?: string | null;
                /**
                 * @description Street of the address.
                 * @example Avenue Splendor Garden
                 */
                street?: string;
                /**
                 * @description Number of the address.
                 * @example 111
                 */
                number?: number;
                /**
                 * @description Neighborhood of the address.
                 * @example Sumare
                 */
                neighborhood?: string;
                /**
                 * @description Complement to the address.
                 * @example House
                 */
                complement?: string | null;
                /**
                 * @description Reference that may help in the location of the address.
                 * @example Close to the bank.
                 */
                reference?: string | null;
                /**
                 * @description Array containing two floats with geocoordinates, first longitude, then latitude.
                 * @example [
                 *       -47.924747467041016,
                 *       -15.832582473754883
                 *     ]
                 */
                geoCoordinates?: number[];
            }[];
            /**
             * @description Callback URL information.
             * @example https://coinshop.vtexpayments.com.br/payment-provider/transactions/900BA26FEAC84332A53AE1007E740DE3/payments/E713830E32764BF99028A0A275841BFC/notification
             */
            callbackUrl: string;
        };
        /** @description Transaction information. */
        Transaction: {
            /**
             * @description Transaction identification.
             * @example 72E84719BDF14B2FB170B38AD12598C9
             */
            id: string;
            /**
             * @description Merchant name.
             * @example cosmetics2
             */
            merchantName: string;
        };
        /** @description Payment parameters information. */
        Fields1: {
            /** @description Payment parameter name. */
            name: string;
            /** @description Payment parameter value. */
            value: string;
        };
        /** @description Send payments information public request body information. */
        "2.SendPaymentsPublicRequest": {
            /**
             * @description Payment system identification.
             * @example 17
             */
            paymentSystem: number;
            /**
             * @description Number of installments.
             * @example 1
             */
            installments: number;
            /**
             * @description Currency code in ISO 4217 standard.
             * @example BRL
             */
            currencyCode: string;
            /**
             * @description Payment value.
             * @example 15000
             */
            value: number;
            /**
             * @description The interest rate.
             * @example 0
             */
            installmentsInterestRate: number;
            /**
             * @description The value of each installment.
             * @example 0
             */
            installmentsValue: number;
            /**
             * @description Value amount of the payment without interest applied. This value is the same as the `value` field when `installmentsInterestRate` is `0.0`.
             * @example 15000
             */
            referenceValue: number;
            fields: components["schemas"]["Fields"];
            transaction: components["schemas"]["Transaction"];
        };
        /** @description Send payments with saved credit card request body information. */
        "2.SendPaymentsWithSavedCreditCardRequest": {
            /**
             * @description Payment system identification.
             * @example 4
             */
            paymentSystem: number;
            /**
             * @description Number of installments.
             * @example 1
             */
            installments: number;
            /**
             * @description Currency code in ISO 4217 standard.
             * @example BRL
             */
            currencyCode: string;
            /**
             * @description Payment value.
             * @example 30000
             */
            value: number;
            /**
             * @description The interest rate.
             * @example 0
             */
            installmentsInterestRate: number;
            /**
             * @description The value of each installment.
             * @example 0
             */
            installmentsValue: number;
            /**
             * @description Value amount of the payment without interest applied. This value is the same as the `value` field when `installmentsInterestRate` is `0.0`.
             * @example 30000
             */
            referenceValue: number;
            fields: components["schemas"]["Fields3"];
            transaction: components["schemas"]["Transaction"];
        };
        /** @description Fields information. */
        Fields3: {
            /**
             * @description Card holder name.
             * @example UserTest
             */
            holderName: string;
            /**
             * @description Card number information.
             * @example 111111111111
             */
            cardNumber: number;
            /**
             * @description CVV code.
             * @example 231
             */
            validationCode: number;
            /**
             * @description Due date information. The date format is `mm/yy`.
             * @example 10/19
             */
            dueDate: string;
            /**
             * @description Card holder documentation.
             * @example 8041734561
             */
            document: string;
            /**
             * @description Account identification.
             * @example 08134AF761A148B9A5DCE14A81F31DD9
             */
            accountId: string | null;
            /** @description Array containing customer address information. */
            address: string[] | null;
            /**
             * @description Callback URL information.
             * @example https://payment-test.myvtex.com/checkout/gatewayCallback/1336650505288/Success
             */
            callbackUrl: string | null;
        };
        /** @description Authorize new transaction request body information. */
        "4.DoauthorizationRequest": {
            /**
             * @description Transaction identification.
             * @example 7ECE7DF3EEE14647B05DB904164923E8
             */
            transactionId: string;
            /**
             * @description Custom field for a transaction that can be displayed on the customer's invoice.
             * @example company_name_description_code
             */
            softDescriptor: string | null;
            /**
             * @description Indicates whether the transaction supports recurrence.
             * @example false
             */
            prepareForRecurrency: boolean;
        };
        /** @description Transaction details response body information. */
        TransactionDetailsResponse: {
            /** @description Transaction identification. */
            id: string;
            /** @description Transaction identification (same value of the `id` field). */
            transactionId: string;
            /** @description Field used for anti-fraud to identify the transaction. */
            referenceKey: string;
            interactions: components["schemas"]["Interactions"];
            settlements: components["schemas"]["Settlements"];
            payments: components["schemas"]["Payments"];
            refunds: components["schemas"]["Refunds"];
            cancellations: components["schemas"]["Cancellations"];
            capabilities: components["schemas"]["Capabilities"];
            /**
             * @description Field that represents the possible transaction timeout statuses. Possible statuses and meanings: `0` = NotStarted, `1` = CancellingOrFinishing, `2` = CancellingOrFinishingByTimeout, `3` = CancelledOrFinished and `4` = TriesExceeded.
             * @enum {number}
             */
            timeoutStatus: 0 | 1 | 2 | 3 | 4;
            /** @description Total refunded transaction amount. */
            totalRefunds: number;
            /** @description Transaction status. */
            status: string;
            /** @description Transaction value. */
            value: number;
            /** @description Receiver [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) information. */
            receiverUri: string | null;
            /** @description Transaction start date. */
            startDate: string;
            /** @description Transaction authorization token. */
            authorizationToken: string | null;
            /** @description Transaction authorization date. */
            authorizationDate: string | null;
            /** @description Transaction completion token. */
            commitmentToken: string | null;
            /** @description Transaction completion date. */
            commitmentDate: string | null;
            /** @description Transaction refund token. */
            refundingToken: string | null;
            /** @description Transaction refund date. */
            refundingDate: string | null;
            /** @description Transaction cancellation token. */
            cancelationToken: string | null;
            /** @description Transaction cancellation date. */
            cancelationDate: string | null;
            /** @description Field containing information and values of payment parameters. */
            fields: components["schemas"]["Fields1"][];
            /** @description Transaction origin. */
            shopperInteraction: string;
            /** @description Ip address information. */
            ipAddress: string | null;
            /** @description Session identification. */
            sessionId: string | null;
            /** @description Random [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) V4 generated when the Request Capture receives a session that does not contain the macID already set. This value is set to the cookie `VtexRCMacIdv7`. The cookie has 1 year of expiration. */
            macId: string;
            /** @description VTEX fingerprint information. */
            vtexFingerprint: string | null;
            /** @description Chargeback information. */
            chargeback: string | null;
            /** @description White signature (anti-fraud list) information. */
            whiteSignature: string | null;
            /** @description Responsible for transaction request. */
            owner: string;
            /** @description Order identitication. */
            orderId: string | null;
            /** @description HTTP client used in the transaction. */
            userAgent: string;
            /** @description Type of content accepted in the transaction request header. */
            acceptHeader: string;
            /** @description Anti-fraud transaction identification. */
            antifraudTid: string | null;
            /** @description Anti-fraud response information. */
            antifraudResponse: string | null;
            /** @description Anti-fraud reference information. */
            antifraudReference: string | null;
            /** @description Anti-fraud affiliation identification. */
            antifraudAffiliationId: string | null;
            /** @description Store where the transaction was initiated. */
            channel: string;
            /** @description Sales channel information. */
            salesChannel: string;
            /** @description [URN](https://en.wikipedia.org/wiki/Uniform_Resource_Name) information. */
            urn: string | null;
            /** @description Custom field for a transaction that can be displayed on the customer's invoice. */
            softDescriptor: string | null;
            /** @description Indicates whether the payment transaction should be recurring. */
            markedForRecurrence: boolean;
            /** @description Buyer information. */
            buyer: {
                /** @description Buyer first name. */
                firstName?: string;
                /** @description Buyer last name. */
                lastName?: string;
                /** @description Type of the document informed by the buyer. */
                documentType?: string;
                /** @description Document informed by the buyer. */
                document?: string;
                /** @description Buyer email address. */
                email?: string;
                /** @description Buyer address. */
                address?: string;
                /** @description Buyer phone number. */
                phone?: string;
            } | null;
        };
        /** @description Array containing transaction interactions information. */
        TransactionInteractionsResponse: {
            /** @description Interaction identification. */
            Id?: string;
            /** @description Payment identification. */
            PaymentId?: string | null;
            /** @description Transaction identification. */
            TransactionId?: string;
            /** @description Origin of interaction in the VTEX system. */
            Source?: string;
            /** @description Transaction status. */
            Status?: string;
            /** @description Date of interaction in the transaction. */
            Date?: string;
            /** @description Information about the action performed in the interaction. */
            Message?: string;
            /** @description [Time span value](https://learn.microsoft.com/en-us/dotnet/api/system.timespan.ticks?view=net-8.0#remarks) information. A Tick is the smallest unit of time, equal to 100 nanoseconds or one ten-millionth of a second. */
            Ticks?: number;
        }[];
        /** @description Payment details information. */
        PaymentDetailsResponse: Record<string, never>;
        /** @description Transaction settlement details response body information. */
        TransactionSettlementDetails: {
            /** @description Array containing requests information. */
            requests: components["schemas"]["Request"][];
            /** @description Array containing actions information. */
            actions: components["schemas"]["Action"][];
        };
        /** @description Requests information. */
        Request: {
            /** @description Transaction identification. This is the same `transactionId` value sent in the request path. */
            id: string;
            /** @description Transaction settlement date. */
            date: string;
            /** @description Transaction settlement value. */
            value: number;
        };
        /** @description Actions information. */
        Action: {
            /** @description Payment identification. */
            paymentId: string;
            payment: components["schemas"]["Payment1"];
            /** @description Transaction settlement date. */
            date: string;
            /** @description Settlement action date. */
            type: string;
            /** @description Transaction settlement value. */
            value: number;
            /** @description Connector transaction response information. This object can return different fields according to the internal configuration of each connector (payment provider), for example, `Tid`, `ReturnCode`, `authId`, among others). */
            connectorResponse: string | null;
        };
        /** @description Object containing the transaction settlement reference route. */
        Payment1: {
            /** @description Transaction reference settlement route. */
            href: string;
        };
        /** @description Settle transaction request body information. */
        SettlethetransactionRequest: {
            /**
             * @description Value to be settled. The value must be described without using separation for decimals, e.g. to capture a value of 320.50, send 32050.
             * @example 10050
             */
            value: number;
        };
        /** @description  Transaction response body information. */
        SettleResponse: {
            /** @description Settle request identification. */
            id: string | null;
            /** @description Token identification. */
            token: string;
            /** @description Status code. */
            status: number;
            /** @description Status detail information. */
            statusDetail: string;
            /** @description Settlement processing date. */
            processingDate: string;
            /** @description Refunded value. */
            refundedValue: number;
            /** @description Refund operation token. */
            refundedToken: string | null;
            /** @description Custom message. */
            message: string | null;
            /** @description Custom code. */
            code: string | null;
            /** @description Refunded value by connector (provider). */
            connectorRefundedValue: number;
            /** @description Cancelled value. */
            cancelledValue: number;
        };
        /** @description Refund transaction request body information. */
        RefundthetransactionRequest: {
            /** @description Purchase value. The value must be described without using separation for decimals, e.g. to capture a value of 320.50, send 32050. */
            value: number;
            /** @description Freigth value, if applicable. */
            freight?: number;
            /** @description Tax value, if applicable. */
            tax?: number;
            /** @description This field is filled with the content of the cart of the transaction, which can be obtained using [Get Orders](https://developers.vtex.com/docs/api-reference/orders-api?endpoint=get-/api/oms/pvt/orders/-orderId-) or [Transaction Details](https://developers.vtex.com/docs/api-reference/payments-gateway-api?endpoint=get-/api/pvt/transactions/-transactionId-) endpoints. It should only be included for transactions with split payment. */
            minicart?: Record<string, never>;
        };
        /** @description Cancel transaction request body information. */
        CancelthetransactionRequest: {
            /** @description Value of the purchase that will be cancelled. */
            value: number;
        };
    };
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description Affiliation (payment or anti-fraud provider) identification. */
        affiliationId: string;
        /** @description Rule identification. */
        ruleId: string;
        /** @description Transaction identification. */
        transactionId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Installmentsoptions: {
        parameters: {
            query: {
                /** @description Value to be divided into installments. */
                "request.value": number;
                /** @description Sales channel identification. Attribute created by the seller in their VTEX store configuration. */
                "request.salesChannel"?: number;
                /** @description Payment system identification. */
                "request.paymentDetails[0].id"?: number;
                /** @description Total value paid in installments. If applied in the search, it must be equal to the `request.value` field. */
                "request.paymentDetails[0].value"?: number;
                /** @description First six digits of the card number. */
                "request.paymentDetails[0].bin"?: number;
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
                    "application/json": components["schemas"]["ValidRequest"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvalidRequestValue"];
                };
            };
        };
    };
    Affiliations: {
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
                        /** @description Provider identification. */
                        id?: string;
                        /** @description Provider implementation class name. */
                        implementation?: string;
                        /** @description Provider name. */
                        name?: string;
                        /** @description Array containing configuration information fields. */
                        configuration?: {
                            /** @description Configuration parameter name. */
                            name: string;
                            /** @description Configuration parameter value. */
                            value: string | null;
                            /** @description Value key information. */
                            valueKey: string | null;
                        }[];
                        /** @description Indicates whether the provider is published and available for use. */
                        isdelivered?: boolean;
                        /** @description Indicates whether the provider is configured. */
                        isConfigured?: boolean;
                    }[];
                };
            };
        };
    };
    InsertAffiliation: {
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["InsertAffiliationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliationResponse"];
                };
            };
        };
    };
    AffiliationById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Affiliation (payment or anti-fraud provider) identification. */
                affiliationId: components["parameters"]["affiliationId"];
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
                    "application/json": components["schemas"]["AffiliationResponse"];
                };
            };
        };
    };
    UpdateAffiliation: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Affiliation (payment or anti-fraud provider) identification. */
                affiliationId: components["parameters"]["affiliationId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateAffiliationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AffiliationResponse"];
                };
            };
        };
    };
    Rules: {
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
                    "application/json": components["schemas"]["GetRulesResponse"];
                };
            };
        };
    };
    InsertRule: {
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
        requestBody?: {
            content: {
                /** @example {
                 *       "name": "Test_API_2",
                 *       "salesChannels": [
                 *         {
                 *           "id": "1"
                 *         }
                 *       ],
                 *       "paymentSystem": {
                 *         "id": 8,
                 *         "name": "Hipercard",
                 *         "implementation": null
                 *       },
                 *       "connector": {
                 *         "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
                 *         "affiliationId": "0a8488e6-0c30-4150-be96-b0dcaaa6a0cd"
                 *       },
                 *       "issuer": {
                 *         "name": "barclays"
                 *       },
                 *       "antifraud": {
                 *         "implementation": null,
                 *         "affiliationId": null
                 *       },
                 *       "installmentOptions": {
                 *         "dueDateType": 1,
                 *         "interestRateMethod": 2,
                 *         "minimumInstallmentValue": 50,
                 *         "installments": [
                 *           {
                 *             "ruleId": null,
                 *             "quantity": 6,
                 *             "value": 0,
                 *             "interestRate": 15,
                 *             "isExternalInstallmentService": null,
                 *             "interestTax": 0
                 *           }
                 *         ]
                 *       },
                 *       "isSelfAuthorized": null,
                 *       "requiresAuthentication": null,
                 *       "enabled": false,
                 *       "installmentsService": false,
                 *       "isDefault": null,
                 *       "beginDate": "2023-12-10T17:00:00Z",
                 *       "endDate": "2023-12-22T01:00:00Z",
                 *       "condition": {
                 *         "id": "1",
                 *         "pullRate": 0,
                 *         "name": null
                 *       },
                 *       "multiMerchantList": [
                 *         "cosmetics2"
                 *       ],
                 *       "country": {
                 *         "name": null,
                 *         "isoCode": "us"
                 *       },
                 *       "dateIntervals": [
                 *         {
                 *           "start": "* * 11 * * 1,3,4 * -0300",
                 *           "end": "* * 18 * * 1,3,4 * -0300"
                 *         },
                 *         {
                 *           "start": "* * 05 * * * * -0300",
                 *           "end": "* * 23 * * * * -0300"
                 *         }
                 *       ],
                 *       "externalInterest": false,
                 *       "minimumValue": null,
                 *       "deadlines": [],
                 *       "cobrand": {
                 *         "name": null
                 *       },
                 *       "cardLevel": {
                 *         "name": "business"
                 *       },
                 *       "excludedBinsRanges": null
                 *     } */
                "application/json": components["schemas"]["InsertRuleRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RulesRequest"];
                };
            };
        };
    };
    RuleById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Rule identification. */
                ruleId: components["parameters"]["ruleId"];
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
                    "application/json": components["schemas"]["RulesRequest"];
                };
            };
        };
    };
    PutRuleById: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Rule identification. */
                ruleId: components["parameters"]["ruleId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "id": "c997267e-39bf-4217-a890-a503f6a7dc47",
                 *       "name": "Test_API_2_Updated",
                 *       "salesChannels": [
                 *         {
                 *           "id": "1"
                 *         }
                 *       ],
                 *       "paymentSystem": {
                 *         "id": 8,
                 *         "name": "Hipercard",
                 *         "implementation": null
                 *       },
                 *       "connector": {
                 *         "implementation": "Vtex.PaymentGateway.Connectors.CieloV3Connector",
                 *         "affiliationId": "0a8488e6-0c30-4150-be96-b0dcaaa6a0cd"
                 *       },
                 *       "issuer": {
                 *         "name": "barclays"
                 *       },
                 *       "antifraud": null,
                 *       "installmentOptions": {
                 *         "dueDateType": 0,
                 *         "interestRateMethod": 1,
                 *         "minimumInstallmentValue": 400,
                 *         "installments": [
                 *           {
                 *             "ruleId": null,
                 *             "quantity": 12,
                 *             "value": 0,
                 *             "interestRate": 25,
                 *             "isExternalInstallmentService": null,
                 *             "interestTax": 0
                 *           }
                 *         ]
                 *       },
                 *       "isSelfAuthorized": null,
                 *       "requiresAuthentication": null,
                 *       "enabled": false,
                 *       "installmentsService": false,
                 *       "isDefault": null,
                 *       "beginDate": "2023-12-15T17:00:00Z",
                 *       "endDate": "2023-12-30T01:00:00Z",
                 *       "condition": {
                 *         "id": "1",
                 *         "pullRate": 15,
                 *         "name": null
                 *       },
                 *       "multiMerchantList": [],
                 *       "country": {
                 *         "name": null,
                 *         "isoCode": "br"
                 *       },
                 *       "dateIntervals": [
                 *         {
                 *           "start": "* * 12 * * 1,3,4 * -0300",
                 *           "end": "* * 19 * * 1,3,4 * -0300"
                 *         },
                 *         {
                 *           "start": "* * 09 * * * * -0300",
                 *           "end": "* * 21 * * * * -0300"
                 *         }
                 *       ],
                 *       "externalInterest": false,
                 *       "minimumValue": null,
                 *       "deadlines": [],
                 *       "cobrand": {
                 *         "name": null
                 *       },
                 *       "cardLevel": {
                 *         "name": "gold"
                 *       },
                 *       "excludedBinsRanges": null
                 *     } */
                "application/json": components["schemas"]["RulesRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RulesRequest"];
                };
            };
        };
    };
    Rule: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Rule identification. */
                ruleId: components["parameters"]["ruleId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK. This endpoint does not return any data in the response body. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    AvailablePaymentMethods: {
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
                    "application/json": components["schemas"]["PaymentSystemsResponse"][];
                };
            };
        };
    };
    "1.Createanewtransaction": {
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["1.CreateanewtransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StartTransactionResponse"];
                };
            };
        };
    };
    "2.SendPaymentsPublic": {
        parameters: {
            query: {
                /** @description Order identification. */
                orderId: string;
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["2.SendPaymentsPublicRequest"][];
            };
        };
        responses: {
            /** @description Created. This endpoint does not return any data in the response body. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "2.SendPaymentsWithSavedCreditCard": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["2.SendPaymentsWithSavedCreditCardRequest"][];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PaymentDetailsResponse"];
                };
            };
        };
    };
    "3.SendAdditionalData": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example [
                 *       {
                 *         "name": "cart",
                 *         "value": "{\"items\":[{\"id\":\"6257034\",\"name\":\"Tamanco Couro Preto Poá\",\"value\":5999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"C503YC002_34\",\"productId\":\"6257000\",\"sellingPrice\":59.99,\"sellerId\":\"1\",\"dockId\":\"999800000-5\",\"categoryId\":\"18\",\"categoryName\":\"Tamanco\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Convencional\",\"deliverySlaInMinutes\":5760,\"deliveryWindow\":null,\"tax\":0,\"freight\":167},{\"id\":\"7136034\",\"name\":\"Sandália Off White Espadrile Salto Forrado\",\"value\":5999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"S5146R881_34\",\"productId\":\"7136000\",\"sellingPrice\":59.99,\"sellerId\":\"1\",\"dockId\":\"999800000-5\",\"categoryId\":\"12\",\"categoryName\":\"Anabela\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Convencional\",\"deliverySlaInMinutes\":5760,\"deliveryWindow\":null,\"tax\":0,\"freight\":166},{\"id\":\"8305038\",\"name\":\"Tamanco Caramelo Salto Fachete\",\"value\":9999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"S534IZ012_38\",\"productId\":\"8305000\",\"sellingPrice\":99.99,\"sellerId\":\"1\",\"dockId\":\"999800000-5\",\"categoryId\":\"18\",\"categoryName\":\"Tamanco\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Convencional\",\"deliverySlaInMinutes\":5760,\"deliveryWindow\":null,\"tax\":0,\"freight\":166},{\"id\":\"7641034\",\"name\":\"Tênis Slip On Couro Preto Recorte\",\"value\":9999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"C524B9002_34\",\"productId\":\"7641000\",\"sellingPrice\":99.99,\"sellerId\":\"coinshop\",\"dockId\":\"0405\",\"categoryId\":\"30\",\"categoryName\":\"Clássico\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Correios - PAC\",\"deliverySlaInMinutes\":18720,\"deliveryWindow\":null,\"tax\":0,\"freight\":7138},{\"id\":\"8278038\",\"name\":\"Tênis Slip Caramelo Matelassê\",\"value\":5999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"S534IR012_38\",\"productId\":\"8278000\",\"sellingPrice\":59.99,\"sellerId\":\"coinmarket\",\"dockId\":\"0571\",\"categoryId\":\"32\",\"categoryName\":\"Slip On\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"PAC\",\"deliverySlaInMinutes\":14400,\"deliveryWindow\":null,\"tax\":0,\"freight\":7090}],\"sellers\":[{\"id\":\"1\",\"name\":\"CONSTANCE\",\"documentType\":\"CNPJ\",\"document\":\"30901791000191\"},{\"id\":\"coinshop\",\"name\":\"coinshop\",\"documentType\":\"CNPJ\",\"document\":\"48275547000126\"},{\"id\":\"coinmarket\",\"name\":\"coinmarket\",\"documentType\":\"CNPJ\",\"document\":\"48314133000169\"}],\"freight\":14727,\"shippingdate\":null,\"shippingestimated\":\"4bd\",\"orderUrl\":\"http://www.constance.com.br/admin/checkout/#/orders?q=1373160984904\",\"tax\":0,\"isGiftRegistry\":null,\"giftRegistryDescription\":null,\"giftRegistryId\":null,\"isPickupStore\":null,\"isCallCenter\":null}"
                 *       },
                 *       {
                 *         "name": "clientProfileData",
                 *         "value": "{\"email\":\"test@test.com\",\"firstName\":\"Izidio\",\"lastName\":\"Test Trace\",\"document\":\"111111111\",\"phone\":\"+56987654321\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":\"Exento\",\"postalCode\":\"8320000\",\"address\":{\"receiverName\":\"wqqw weqw\",\"postalCode\":\"8320000\",\"city\":\"wdade\",\"state\":\"Región Metropolitana\",\"country\":\"CHL\",\"street\":\"asdafd\",\"number\":\"sadas\",\"neighborhood\":\"Santiago\",\"complement\":\"604\",\"reference\":\"efa\"},\"gender\":null,\"birthDate\":null,\"createdDate\":null,\"corporatePhone\":null,\"isCorporate\":false,\"documentType\":\"rutCHL\",\"id\":\"d48a1cd3-c04e-4949-a275-df4b197a7ec9\"}"
                 *       }
                 *     ] */
                "application/json": {
                    /** @description Dataset name. This information must be sent in escaped JSON format. */
                    name: string;
                    /** @description Dataset values. This information must be sent in escaped JSON format. */
                    value: string;
                }[];
            };
        };
        responses: {
            /** @description OK. This endpoint does not return any data in the response body. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "3.1UpdateAdditionalData": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example [
                 *       {
                 *         "name": "cart",
                 *         "value": "{\"items\":[{\"id\":\"6257034\",\"name\":\"Tamanco Couro Preto Poá\",\"value\":5999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"C503YC002_34\",\"productId\":\"6257000\",\"sellingPrice\":59.99,\"sellerId\":\"1\",\"dockId\":\"999800000-5\",\"categoryId\":\"18\",\"categoryName\":\"Tamanco\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Convencional\",\"deliverySlaInMinutes\":5760,\"deliveryWindow\":null,\"tax\":0,\"freight\":167},{\"id\":\"7136034\",\"name\":\"Sandália Off White Espadrile Salto Forrado\",\"value\":5999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"S5146R881_34\",\"productId\":\"7136000\",\"sellingPrice\":59.99,\"sellerId\":\"1\",\"dockId\":\"999800000-5\",\"categoryId\":\"12\",\"categoryName\":\"Anabela\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Convencional\",\"deliverySlaInMinutes\":5760,\"deliveryWindow\":null,\"tax\":0,\"freight\":166},{\"id\":\"8305038\",\"name\":\"Tamanco Caramelo Salto Fachete\",\"value\":9999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"S534IZ012_38\",\"productId\":\"8305000\",\"sellingPrice\":99.99,\"sellerId\":\"1\",\"dockId\":\"999800000-5\",\"categoryId\":\"18\",\"categoryName\":\"Tamanco\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Convencional\",\"deliverySlaInMinutes\":5760,\"deliveryWindow\":null,\"tax\":0,\"freight\":166},{\"id\":\"7641034\",\"name\":\"Tênis Slip On Couro Preto Recorte\",\"value\":9999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"C524B9002_34\",\"productId\":\"7641000\",\"sellingPrice\":99.99,\"sellerId\":\"coinshop\",\"dockId\":\"0405\",\"categoryId\":\"30\",\"categoryName\":\"Clássico\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"Correios - PAC\",\"deliverySlaInMinutes\":18720,\"deliveryWindow\":null,\"tax\":0,\"freight\":7138},{\"id\":\"8278038\",\"name\":\"Tênis Slip Caramelo Matelassê\",\"value\":5999,\"quantity\":1,\"priceTags\":[],\"components\":null,\"commission\":0.0,\"freightCommission\":0.0,\"sellerChain\":null,\"shippingDiscount\":0,\"discount\":0,\"refId\":\"S534IR012_38\",\"productId\":\"8278000\",\"sellingPrice\":59.99,\"sellerId\":\"coinmarket\",\"dockId\":\"0571\",\"categoryId\":\"32\",\"categoryName\":\"Slip On\",\"deliveryChannel\":\"delivery\",\"deliveryType\":\"PAC\",\"deliverySlaInMinutes\":14400,\"deliveryWindow\":null,\"tax\":0,\"freight\":7090}],\"sellers\":[{\"id\":\"1\",\"name\":\"CONSTANCE\",\"documentType\":\"CNPJ\",\"document\":\"30901791000191\"},{\"id\":\"coinshop\",\"name\":\"coinshop\",\"documentType\":\"CNPJ\",\"document\":\"48275547000126\"},{\"id\":\"coinmarket\",\"name\":\"coinmarket\",\"documentType\":\"CNPJ\",\"document\":\"48314133000169\"}],\"freight\":14727,\"shippingdate\":null,\"shippingestimated\":\"4bd\",\"orderUrl\":\"http://www.constance.com.br/admin/checkout/#/orders?q=1373160984904\",\"tax\":0,\"isGiftRegistry\":null,\"giftRegistryDescription\":null,\"giftRegistryId\":null,\"isPickupStore\":null,\"isCallCenter\":null}"
                 *       },
                 *       {
                 *         "name": "clientProfileData",
                 *         "value": "{\"email\":\"test@test.com\",\"firstName\":\"Izidio\",\"lastName\":\"Test Trace\",\"document\":\"111111111\",\"phone\":\"+56987654321\",\"corporateName\":null,\"tradeName\":null,\"corporateDocument\":null,\"stateInscription\":\"Exento\",\"postalCode\":\"8320000\",\"address\":{\"receiverName\":\"wqqw weqw\",\"postalCode\":\"8320000\",\"city\":\"wdade\",\"state\":\"Región Metropolitana\",\"country\":\"CHL\",\"street\":\"asdafd\",\"number\":\"sadas\",\"neighborhood\":\"Santiago\",\"complement\":\"604\",\"reference\":\"efa\"},\"gender\":null,\"birthDate\":null,\"createdDate\":null,\"corporatePhone\":null,\"isCorporate\":false,\"documentType\":\"rutCHL\",\"id\":\"d48a1cd3-c04e-4949-a275-df4b197a7ec9\"}"
                 *       }
                 *     ] */
                "application/json": {
                    /** @description Dataset name. This information must be sent in escaped JSON format. */
                    name: string;
                    /** @description Dataset values. This information must be sent in escaped JSON format. */
                    value: string;
                }[];
            };
        };
        responses: {
            /** @description OK. This endpoint does not return any data in the response body. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "4.Doauthorization": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["4.DoauthorizationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SettleResponse"];
                };
            };
        };
    };
    TransactionDetails: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
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
                    "application/json": components["schemas"]["TransactionDetailsResponse"];
                };
            };
        };
    };
    PaymentDetails: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
                /** @description Payment identification. */
                paymentId: string;
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
                    "application/json": components["schemas"]["PaymentDetailsResponse"];
                };
            };
        };
    };
    TransactionSettlementDetails: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
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
                    "application/json": components["schemas"]["TransactionSettlementDetails"];
                };
            };
        };
    };
    Settlethetransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlethetransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SettleResponse"];
                };
            };
        };
    };
    Refundthetransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "value": 2300,
                 *       "freight": 200,
                 *       "tax": 0,
                 *       "minicart": {
                 *         "items": [
                 *           {
                 *             "id": "122323",
                 *             "name": "Tenis Preto I",
                 *             "value": 1000,
                 *             "quantity": 1,
                 *             "shippingDiscount": 0,
                 *             "discount": 50
                 *           },
                 *           {
                 *             "id": "122324",
                 *             "name": "Tenis Nike Azul",
                 *             "value": 1100,
                 *             "quantity": 1,
                 *             "shippingDiscount": 0,
                 *             "discount": 50
                 *           }
                 *         ]
                 *       }
                 *     } */
                "application/json": components["schemas"]["RefundthetransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SettleResponse"];
                };
            };
        };
    };
    Cancelthetransaction: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Transaction identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                /** @example {
                 *       "value": 2300
                 *     } */
                "application/json": components["schemas"]["CancelthetransactionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SettleResponse"];
                };
            };
        };
    };
}
