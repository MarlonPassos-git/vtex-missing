export interface paths {
    "/api/creditcontrol/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search all invoices
         * @description Returns a list of invoices related to payment orders created through [customer credit accounts](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     >ℹ️ Query parameters can be used individually or combined to filter invoice results.
         *
         *     ### Queries to filter results
         *
         *     - **By the location of the invoices in the list (quantity of invoices)**: `?from={int}&to={int}`
         *     - **By creation date**: `?createdDateFrom={dateISO8601}&createDateTo={dateISO8601}`. The dates should be in ISO8601 format.
         *     - **By due date**: `?dueDateFrom={dateISO8601}&dueDateTo={dateISO8601}`. The dates should be in ISO8601 format.
         *     - **By value**: `?value={decimal}`
         *     - **By status**: `?status={string}`
         *     - **By Id**: `?friendlyId={string}`
         *     - **By observation**: `?observation={string}`
         *     - **By creditAccountId**: `?creditAccountId={creditAcountId}`
         *
         *     ### Combining filters
         *
         *     You can use the `op` query parameter to specify if filters will be evaluated as `AND` or `OR` for the query. The default behavior when there is more than one query parameter is `AND`.
         *
         *     Example:
         *
         *     For the query `?value=100&status=Paid`, the criteria will build **value = 100 AND status = Paid**.
         *
         *     For the same query, adding the `op` parameter (`?value=100&status=Paid&op=or`), the criteria will build **value = 100 OR status = Paid**.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Invoices | **Read Invoices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Searchallinvoices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve invoice by ID
         * @description Returns data from a specific invoice using `invoiceId`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Invoices | **Read Invoices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["RetrieveInvoicebyId"];
        /**
         * Change invoice
         * @description Updates invoice's `status`, `observation` and `paymentLink` attributes.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Invoices | **Create Invoices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["ChangeInvoice"];
        post?: never;
        /**
         * Cancel invoice
         * @description Changes the status of a specific invoice (`invoiceId`) to `Cancelled`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Invoices | **Create Invoices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["CancelInvoice"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/invoices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve invoices by creditaccountid
         * @description Returns associated invoices given a specific `creditAccountId`.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Invoices | **Read Invoices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["SearchallinvoicesofaAccount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mark an invoice as paid
         * @description Records the payment of an invoice.
         *
         *     This operation causes a balance restore with the invoice value to the checking account.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Invoices | **Pay Invoice** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["MarkaninvoiceasPaid"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/postponement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Postpone an invoice
         * @description Postpones an invoice by the amount of time defined on the `dueDays` field (number of days for the invoice to be postponed by).
         *
         *     This operation updates the invoice field `dueDate`.
         *
         *     >⚠️ Before making this request, access the endpoint [Retrieve store configuration](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-creditAccountId-/invoices/-invoiceId-/postponement) to check whether the option to postpone invoice is enabled in the store (`invoicePostponementLimit: value greater than 0`  and `postponementEnabled: true`).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Invoices | **Create Invoices** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Postponeaninvoice"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search all accounts
         * @description Retrieves a list of all [customer credit accounts](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU) in the store.
         *
         *     >ℹ️ You can use the queries below (individually or combined) to obtain a more accurate search result. If your store has more than 20 customer credit accounts and you do not use any queries in the call, only the first 20 account records will appear in the response body.
         *
         *     >ℹ️ Query params can be used individually or combined.
         *
         *     ### Queries to filter results
         *
         *     - **By the location of the accounts in the list (quantity of accounts)**: `?from={int}&to={int}`
         *     - **By status**: `?status={Open, Closed or Cancelled}`
         *     - **By email**: `?email={string}`
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Read Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Searchallaccounts"];
        put?: never;
        /**
         * Open an account
         * @description Opens a [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU) on your store.
         *
         *     >⚠️ This request should only be used if you do not have an account yet registered. If you already have an account (open or closed) and want to create or modify an account, go to [Open or Change Account](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-accountId-) endpoint.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Create Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["OpenanAccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve an account by ID
         * @description Retrieves a [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU) by the credit account identification.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Read Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["RetrieveaAccountbyId"];
        /**
         * Update account information
         * @description Updates information on a [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Create Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Updateemailanddescriptionofaaccount"];
        post?: never;
        /**
         * Close an account
         * @description Closes a [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Create Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["CloseanAccount"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/statements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get account statements
         * @description Retrieves the [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU) statements.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Statements | **Read Statements** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Accountstatements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/creditlimit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Change credit limit of an account
         * @description Increases or decreases the credit limit of a [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Edit credits** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["ChangecreditlimitofanAccount"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/statements/{statementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Decrease balance of an account
         * @description Creates a debit value updating the account balance.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Edit credits** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Decreasebalanceofanaccount"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/settlement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Create or update settlement
         * @description Creates an invoice or update its value for an order placed in the store that used customer credit as a payment method.
         *
         *     >ℹ️ If payment for the order is made in installments, you can create an invoice for each installment. The first invoice will be due in 30 days, and subsequent invoices will be due 30 days after the previous invoice.
         *
         *     .
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Statements | **Create Statements** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["CreateorUpdateSettlement"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/transactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a pre-authorization
         * @description Creates a Pre-Authorization. Also known as authorization hold, card authorization or pre-auth, pre-authorization is the practice of holding this balance as unavailable until either the merchant clears the transaction, also called settlement, or the hold *falls off*.
         *
         *     This operation does not appear in statements, but the available balance will be updated.
         *
         *     The result of this operation is generating a `transactionId` (pre-authorization identification) to use in a settlement.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Statements | **Create Statements** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["CreateaPreAuthorization"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a pre-authorization
         * @description Updates information for a specific pre-authorization request.
         *
         *     >⚠️ This call can only be used for pre-authorizations that have not yet been captured or canceled.
         *
         *     Also known as authorization hold, card authorization or pre-auth, pre-authorization is the practice of holding this balance as unavailable until either the merchant clears the transaction, also called settlement, or the hold *falls off*.
         *
         *     This operation does not appear in statements but the available balance will be updated.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Statements | **Create Statements** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["CreateaPreAuthorization(usingid)"];
        post?: never;
        /**
         * Cancel a pre-authorization
         * @description Cancels a pre-authorization created by the [Create a Pre-Authorization](https://developers.vtex.com/docs/api-reference/customer-credit-api#post-/api/creditcontrol/accounts/-creditAccountId-/transaction) endpoint.
         *
         *     >⚠️ The pre-authorization can only be deleted by this endpoint if it was created with the `settled` field set to `false` previously.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Statements | **Create Statements** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["CancelaPreAuthorization"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/holders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add an account holder
         * @description Adds a new account holder to the [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU). This new user can share the account's credit limit with users already registered on the account.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Create Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["AddanaccountHolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/holders/{holderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete an account holder
         * @description Deletes an account holder from the [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Create Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        delete: operations["Deleteanaccountholder"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/tolerance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Change tolerance of an account
         * @description Modifies the credit tolerance amount to increase the credit limit on a [customer credit account](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Checking Accounts | **Create Checking Accounts** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Changetoleranceofanaccount"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/refunds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Partially or totally refund a settlement
         * @description Refunds a value from an already settled transaction.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Statements | **Create Statements** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["PartialorTotalRefundaSettlement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/creditcontrol/storeconfig": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve store configuration
         * @description Gets store configuration data related to [customer credit accounts](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Store Configuration | **Read Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Retrievestoreconfiguration"];
        /**
         * Create or change store configuration
         * @description Creates or changes store configuration data related to [customer credit accounts](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/7FHLd0cmxqqGeEUuc8uioU).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Credit Control | Main | **Main Access** |
         *     | Credit Control | Store Configuration | **Edit Configuration** |
         *
         *     There are no applicable [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) for this resource list. You must [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) and add at least one of the resources above in order to use this endpoint.To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        put: operations["Createorchangestoreconfiguration"];
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
    schemas: never;
    responses: never;
    parameters: {
        /** @description Type of the content being sent. */
        "Content-Type": string;
        /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
        Accept: string;
        /** @description Credit account identification. */
        creditAccountId: string;
        /** @description Invoice identification. */
        invoiceId: string;
        /** @description Simplified identification of an invoice. This code is created automatically, always associated with an existing invoice. It consists of an 8-digit random ID (of numbers and letters) and the installment. */
        friendlyId: string;
        /** @description Pre-authorization identification. */
        transactionId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    Searchallinvoices: {
        parameters: {
            query: {
                /** @description Indicates the starting position of the invoice to be searched in the invoice list. For example, the value `1` indicates that the first invoice in the list will be returned. */
                from?: string;
                /** @description Indicates the final position of the invoice to be searched in the invoice list. For example, if the value of `from` is equal to `1` and `to` is `300`, information from 300 invoices will be displayed in the response body of the request. */
                to?: string;
                /** @description Indicates the initial creation date of invoices that should be searched in the invoice list based on their creation date. The dates should be in ISO8601 format. */
                createdDateFrom?: string;
                /** @description Indicates the final creation date of invoices that should be searched in the invoice list based on their creation date. The dates should be in ISO8601 format. */
                createdDateTo?: string;
                /** @description Indicates the initial due date of invoices that should be searched in the invoice list based on their creation date. The dates should be in ISO8601 format. */
                dueDateFrom?: string;
                /** @description Indicates the final due date of invoices that should be searched in the invoice list based on their creation date. The dates should be in ISO8601 format. */
                dueDateTo?: string;
                /** @description Indicates the value of the invoices to be searched for. It must be completed with a decimal value. */
                value?: number;
                /** @description Indicates the status of the invoices to be searched for. */
                status?: "Open" | "Paid" | "Cancelled";
                /** @description Simplified identification of an invoice. This code is created automatically, always associated with an existing invoice. It consists of an 8-digit random ID (of numbers and letters) and the installment. */
                friendlyId?: components["parameters"]["friendlyId"];
                /** @description Observation notes about the invoice. */
                observation?: string;
                /** @description Credit account identification. */
                creditAccountId: string;
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
                        /** @description Data information. */
                        data: {
                            /** @description Invoice identification. */
                            id: string;
                            /** @description Simplified identification of an invoice. This code is created automatically, always associated with an existing invoice. It consists of an 8-digit random ID (of numbers and letters) and the installment. */
                            friendlyId: string;
                            /**
                             * @description Invoice status.
                             * @enum {string}
                             */
                            status: "Opened" | "Paid" | "Cancelled";
                            /** @description Invoice value. */
                            value: number;
                            /** @description Account identification. It is the same `creditAccountId` parameter used in other Customer Credit API endpoints. */
                            accountId: string;
                            /** @description Credit value. */
                            creditValue: number;
                            /** @description Invoice creation date. */
                            createdAt: string;
                            /** @description Invoice closing date. */
                            resolvedAt?: string | null;
                            /** @description Date of the last update made to the invoice. */
                            updatedAt: string;
                            /** @description Link (URL) created to direct the customer to an invoice payment environment (optional). */
                            paymentLink?: string | null;
                            /** @description Original invoice expiration date. */
                            originalDueDate: string;
                            /** @description Modified invoice expiration date. */
                            dueDate: string;
                            /** @description Identification of installment number. */
                            installment: number;
                            /** @description Identification of the order that generated the invoice. */
                            orderId: string;
                            /** @description Observation notes about the invoice. */
                            observation?: string | null;
                            /** @description Identification of the invoice transaction. This is the same number as the `id` field, removing the last three characters. */
                            transactionId: string;
                            /** @description Number of installments. */
                            numberOfInstallments: number;
                            /** @description Credit account identification. It is the same `accountId` parameter used in other Customer Credit API endpoints. */
                            creditAccountId: string;
                        }[];
                        /** @description Summary information. */
                        summary: {
                            /** @description Total amount payable (sum of invoices listed with status `Open`). */
                            total: number;
                            /** @description Number of invoices listed. */
                            count: number;
                            /** @description Total amount paid (sum of invoices listed with status `Paid`). */
                            totalPaid?: number;
                            /** @description Total amount canceled (sum of invoices listed with status `Cancelled`). */
                            totalCancelled?: number;
                        };
                    };
                };
            };
        };
    };
    RetrieveInvoicebyId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Invoice identification. */
                invoiceId: components["parameters"]["invoiceId"];
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
                        /** @description Invoice identification. */
                        id: string;
                        /** @description Simplified identification of an invoice. This code is created automatically, always associated with an existing invoice. It consists of an 8-digit random ID (of numbers and letters) and the installment. */
                        friendlyId: string;
                        /**
                         * @description Invoice status.
                         * @enum {string}
                         */
                        status: "Opened" | "Paid" | "Cancelled";
                        /** @description Invoice value. */
                        value: number;
                        /** @description Account identification. It is the same `checkingAccountId` parameter used in other Customer Credit API endpoints. */
                        accountId: string;
                        /** @description Credit value. */
                        creditValue: number;
                        /** @description Invoice creation date. */
                        createdAt: string;
                        /** @description Date of the last update made to the invoice. */
                        updatedAt: string;
                        /** @description Original invoice expiration date. */
                        originalDueDate: string;
                        /** @description Modified invoice expiration date. */
                        dueDate: string;
                        /** @description Identification of installment number. */
                        installment: number;
                        /** @description Identification of the order that generated the invoice. */
                        orderId: string;
                        /** @description Identification of the invoice transaction. This is the same number as the `id` field, removing the last three characters. */
                        transactionId: string;
                        /** @description Number of installments. */
                        numberOfInstallments: number;
                        /** @description Credit account identification. It is the same `accountId` parameter used in other Customer Credit API endpoints. */
                        creditAccountId: string;
                    };
                };
            };
        };
    };
    ChangeInvoice: {
        parameters: {
            query?: {
                /** @description Simplified identification of an invoice. This code is created automatically, always associated with an existing invoice. It consists of an 8-digit random ID (of numbers and letters) and the installment. */
                friendlyId?: components["parameters"]["friendlyId"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Invoice identification. */
                invoiceId: components["parameters"]["invoiceId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Invoice status.
                     * @example Paid
                     * @enum {string}
                     */
                    status: "Open" | "Paid" | "Cancelled";
                    /**
                     * @description Observation notes about the invoice.
                     * @example BF 2023 customer invoice.
                     */
                    observation?: string | null;
                    /**
                     * @description Link (URL) created to direct the customer to an invoice payment environment (optional).
                     * @example https://paymentlink.com
                     */
                    paymentLink?: string | null;
                };
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
    CancelInvoice: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Invoice identification. */
                invoiceId: components["parameters"]["invoiceId"];
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
    SearchallinvoicesofaAccount: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
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
                        /** @description Data information. */
                        data: {
                            /** @description Invoice identification. */
                            id: string;
                            /** @description Simplified identification of an invoice. This code is created automatically, always associated with an existing invoice. It consists of an 8-digit random ID (of numbers and letters) and the installment. */
                            friendlyId: string;
                            /**
                             * @description Invoice status.
                             * @enum {string}
                             */
                            status: "Opened" | "Paid" | "Cancelled";
                            /** @description Invoice value. */
                            value: number;
                            /** @description Account identification. It is the same `checkingAccountId` parameter used in other Customer Credit API endpoints. */
                            accountId: string;
                            /** @description Credit value. */
                            creditValue: number;
                            /** @description Invoice creation date. */
                            createdAt: string;
                            /** @description Date of the last update made to the invoice. */
                            updatedAt: string;
                            /** @description Original invoice expiration date. */
                            originalDueDate: string;
                            /** @description Modified invoice expiration date. */
                            dueDate: string;
                            /** @description Identification of installment number. */
                            installment: number;
                            /** @description Identification of the order that generated the invoice. */
                            orderId: string;
                            /** @description Identification of the invoice transaction. This is the same number as the `id` field, removing the last three characters. */
                            transactionId: string;
                            /** @description Number of installments. */
                            numberOfInstallments: number;
                            /** @description Credit account identification. It is the same `accountId` parameter used in other Customer Credit API endpoints. */
                            creditAccountId: string;
                        }[];
                        /** @description Summary information. */
                        summary: {
                            /** @description Total amount payable (sum of invoices listed with status `Open`). */
                            total: number;
                            /** @description Number of invoices listed. */
                            count: number;
                            /** @description Total amount paid (sum of invoices listed with status `Paid`). */
                            totalPaid?: number;
                            /** @description Total amount canceled (sum of invoices listed with status `Cancelled`). */
                            totalCancelled?: number;
                        };
                    };
                };
            };
        };
    };
    MarkaninvoiceasPaid: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Invoice identification. */
                invoiceId: components["parameters"]["invoiceId"];
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
                        /** @description Invoice identification. */
                        id: string;
                        /** @description Simplified identification of an invoice. This code is created automatically, always associated with an existing invoice. It consists of an 8-digit random ID (of numbers and letters) and the installment. */
                        friendlyId: string;
                        /**
                         * @description Invoice status.
                         * @enum {string}
                         */
                        status: "Open" | "Paid" | "Cancelled";
                        /** @description Invoice value. */
                        value: number;
                        /** @description Account identification. It is the same `checkingAccountId` parameter used in other Customer Credit API endpoints. */
                        accountId: string;
                        /** @description Credit value. */
                        creditValue: number;
                        /** @description Invoice creation date. */
                        createdAt: string;
                        /** @description Date of the last update made to the invoice. */
                        updatedAt: string;
                        /** @description Original invoice expiration date. */
                        originalDueDate: string;
                        /** @description Modified invoice expiration date. */
                        dueDate: string;
                        /** @description Identification of installment number. */
                        installment: number;
                        /** @description Identification of the order that generated the invoice. */
                        orderId: string;
                        /** @description Identification of the invoice transaction. This is the same number as the `id` field, removing the last three characters. */
                        transactionId: string;
                        /** @description Number of installments. */
                        numberOfInstallments: number;
                        /** @description Credit account identification. It is the same `accountId` parameter used in other Customer Credit API endpoints. */
                        creditAccountId: string;
                    };
                };
            };
        };
    };
    Postponeaninvoice: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Invoice identification. */
                invoiceId: components["parameters"]["invoiceId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Number of days to postpone the invoice.
                     * @example 10
                     */
                    dueDays: number;
                };
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
    Searchallaccounts: {
        parameters: {
            query?: {
                /** @description Indicates the starting position of the credit customer account to be searched in the account list. Example, value `1` indicates that the first account in the list will be returned. */
                from?: string;
                /** @description Indicates the final position of the credit customer account to be searched in the account list. Example, if the value of `from` is equal to `1` and `to` is `40`, information from 40 accounts will be displayed in the response body of the request. */
                to?: string;
                /** @description Indicates the status of the accounts to be searched for. */
                status?: "Open" | "Paid" | "Cancelled";
                /** @description Indicates the email registered to the account to be searched. */
                email?: string;
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
                        /** @description Data information. */
                        data: {
                            /** @description Credit customer account identification. */
                            id: string;
                            /** @description Account balance value. If this number is negative, it means that the account has a debit instead of a credit to be used. */
                            balance: number;
                            /** @description Account owner document. */
                            document: string;
                            /**
                             * @description Credit customer account status. This value will always come as `Open`. If an account is closed (`Closed`), it will not be displayed in the response body of this endpoint.
                             * @enum {string}
                             */
                            status: "Open" | "Closed";
                            /**
                             * @description Document type.
                             * @enum {string}
                             */
                            documentType: "CPF" | "CNPJ" | "Other";
                            /** @description Maximum credit amount on the account. */
                            creditLimit: number;
                            /** @description Date of the last update made to the account. */
                            updatedAt: string;
                            /** @description Account creation date. */
                            createdAt: string;
                            /** @description This field is deprecated. */
                            description?: string;
                            /** @description Credit amount available on the account. */
                            availableCredit: number;
                            /** @description Credit value that can only be used by the account owner after the merchant releases a specific purchase transaction. */
                            preAuthorizedCredit: number;
                            /** @description Account owner email. */
                            email: string;
                            /** @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount. */
                            tolerance: number;
                            /** @description Balance available for use on the account. */
                            availableBalance: number;
                        }[];
                        /** @description Summary information. */
                        summary: {
                            /** @description Number of customer credit accounts in the store. */
                            count: number;
                        };
                    };
                };
            };
        };
    };
    OpenanAccount: {
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
                "application/json": {
                    /**
                     * @description Account owner document.
                     * @example 11111111111
                     */
                    document: string;
                    /**
                     * @description Document type.
                     * @example CPF
                     * @enum {string}
                     */
                    documentType: "CPF" | "CNPJ" | "Other";
                    /**
                     * @description Account owner email.
                     * @example test@test.com
                     */
                    email: string;
                    /**
                     * @description Maximum credit amount on the account.
                     * @example 1100
                     */
                    creditLimit: string;
                    /**
                     * @deprecated
                     * @description This field is deprecated.
                     * @example Not applicable.
                     */
                    description: string;
                    /**
                     * @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount.
                     * @example 0.2
                     */
                    tolerance: string;
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
                        /** @description Credit customer account identification. */
                        id: string;
                        /** @description Account balance value. If this number is negative, it means that the account has a debit instead of a credit to be used. */
                        balance: number;
                        /** @description Account owner document. */
                        document: string;
                        /** @description Credit customer account status. */
                        status: string;
                        /** @description Document type. Possible values: `CPF`, `CNPJ` or `Other`. */
                        documentType: string;
                        /** @description Maximum credit amount on the account. */
                        creditLimit: number;
                        /** @description Date of the last update made to the account. */
                        updatedAt: string;
                        /** @description Account creation date. */
                        createdAt: string;
                        /** @description This field is deprecated. */
                        description?: string;
                        /** @description Credit amount available on the account. */
                        availableCredit: number;
                        /** @description Credit value that can only be used by the account owner after the merchant releases a specific purchase transaction. */
                        preAuthorizedCredit: number;
                        /** @description Account owner email. */
                        email: string;
                        /** @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount. */
                        tolerance: number;
                        /** @description Balance available for use on the account. */
                        availableBalance: number;
                    };
                };
            };
        };
    };
    RetrieveaAccountbyId: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
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
                        /** @description Credit customer account identification. */
                        id: string;
                        /** @description Account balance value. If this number is negative, it means that the account has a debit instead of a credit to be used. */
                        balance: number;
                        /** @description Account owner document. */
                        document: string;
                        /** @description Credit customer account status. */
                        status: string;
                        /** @description Document type. Possible values: `CPF`, `CNPJ` or `Other`. */
                        documentType: string;
                        /** @description Maximum credit amount on the account. */
                        creditLimit: number;
                        /** @description Date of the last update made to the account. */
                        updatedAt: string;
                        /** @description Account creation date. */
                        createdAt: string;
                        /** @description This field is deprecated. */
                        description?: string;
                        /** @description Credit amount available on the account. */
                        availableCredit: number;
                        /** @description Credit value that can only be used by the account owner after the merchant releases a specific purchase transaction. */
                        preAuthorizedCredit: number;
                        /** @description Account owner email. */
                        email: string;
                        /** @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount. */
                        tolerance: number;
                        /** @description Balance available for use on the account. */
                        availableBalance: number;
                    };
                };
            };
        };
    };
    Updateemailanddescriptionofaaccount: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Account owner email.
                     * @example test1@test.com
                     */
                    email: string;
                    /**
                     * @description Account owner document.
                     * @example 111111111111
                     */
                    document: string;
                    /**
                     * @description Document type.
                     * @example CPF
                     * @enum {string}
                     */
                    documentType: "CPF" | "CNPJ" | "Other";
                    /**
                     * @description Maximum credit amount on the account.
                     * @example 3400
                     */
                    creditLimit?: number;
                    /**
                     * @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount.
                     * @example 0.25
                     */
                    tolerance?: number;
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
                        /** @description Credit customer account identification. */
                        id: string;
                        /** @description Account balance value. If this number is negative, it means that the account has a debit instead of a credit to be used. */
                        balance: number;
                        /** @description Account owner document. */
                        document?: string;
                        /** @description Credit customer account status. */
                        status: string;
                        /**
                         * @description Document type.
                         * @enum {string}
                         */
                        documentType?: "CPF" | "CNPJ" | "Other";
                        /** @description Maximum credit amount on the account. */
                        creditLimit: number;
                        /** @description Date of the last update made to the account. */
                        updatedAt: string;
                        /** @description Account creation date. */
                        createdAt: string;
                        /** @description This field is deprecated. */
                        description?: string;
                        /** @description Credit amount available on the account. */
                        availableCredit: number;
                        /** @description Credit value that can only be used by the account owner after the merchant releases a specific purchase transaction. */
                        preAuthorizedCredit: number;
                        /** @description Account owner email. */
                        email: string;
                        /** @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount. */
                        tolerance: number;
                        /** @description Balance available for use on the account. */
                        availableBalance: number;
                    };
                };
            };
        };
    };
    CloseanAccount: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Account owner document.
                     * @example 32222222222
                     */
                    document?: string;
                    /**
                     * @description Document type.
                     * @example CPF
                     * @enum {string}
                     */
                    documentType?: "CPF" | "CNPJ" | "Other";
                    /**
                     * @description Account owner email.
                     * @example email@domain.com
                     */
                    email?: string;
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
                        /** @description Credit customer account identification. */
                        id: string;
                        /** @description Account balance value. If this number is negative, it means that the account has a debit instead of a credit to be used. */
                        balance: number;
                        /** @description Account owner document. */
                        document: string;
                        /** @description Credit customer account status. */
                        status: string;
                        /**
                         * @description Document type.
                         * @enum {string}
                         */
                        documentType: "CPF" | "CNPJ" | "Other";
                        /** @description Maximum credit amount on the account. */
                        creditLimit: number;
                        /** @description Date of the last update made to the account. */
                        updatedAt: string;
                        /** @description Account creation date. */
                        createdAt: string;
                        /**
                         * @deprecated
                         * @description This field is deprecated.
                         */
                        description?: string;
                        /** @description Credit amount available on the account. */
                        availableCredit: number;
                        /** @description Credit value that can only be used by the account owner after the merchant releases a specific purchase transaction. */
                        preAuthorizedCredit: number;
                        /** @description Account owner email. */
                        email: string;
                        /** @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount. */
                        tolerance: number;
                        /** @description Balance available for use on the account. */
                        availableBalance: number;
                    };
                };
            };
        };
    };
    Accountstatements: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
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
                        /** @description Statements information. */
                        statements: {
                            /** @description Operation value. */
                            value: number;
                            /** @description Operation date. */
                            date: string;
                            /** @description Email of the person responsible for the operation. */
                            doneby?: string;
                            /**
                             * @description Operation origin.
                             * @enum {string}
                             */
                            origin: "Credit" | "Invoice" | "Payment" | "Statement";
                            /** @description Metadata information. */
                            metadata?: {
                                /** @description Transaction identification. */
                                transactionId?: string;
                                /** @description Number of installments. */
                                numberOfInstallments?: number;
                            };
                        }[];
                        /** @description Current balance value. */
                        currentBalance: number;
                        /** @description Interval balance. Indicates the balance between debits and credits made since the account was opened. Negative values ​​indicate that there were more debits than new credits in the account. */
                        intervalBalance: number;
                        /** @description Current balance value. */
                        previousBalance: number;
                    };
                };
            };
        };
    };
    ChangecreditlimitofanAccount: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Credit limit value.
                     * @example 5500
                     */
                    value: number;
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
                        /** @description Credit customer account identification. */
                        id: string;
                        /** @description Account balance value. If this number is negative, it means that the account has a debit instead of a credit to be used. */
                        balance: number;
                        /** @description Credit customer account status. */
                        status: string;
                        /** @description Maximum credit amount on the account. */
                        creditLimit: number;
                        /** @description Date of the last update made to the account. */
                        updatedAt: string;
                        /** @description Account creation date. */
                        createdAt: string;
                        /** @description This field is deprecated. */
                        description?: string;
                        /** @description Credit amount available on the account. */
                        availableCredit: number;
                        /** @description Credit value that can only be used by the account owner after the merchant releases a specific purchase transaction. */
                        preAuthorizedCredit: number;
                        /** @description Account owner email. */
                        email: string;
                        /** @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount. */
                        tolerance: number;
                        /** @description Balance available for use on the account. */
                        availableBalance: number;
                    };
                };
            };
        };
    };
    Decreasebalanceofanaccount: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Statement identification. This is the same `transactionId` value obtained from the [Account statements](https://developers.vtex.com/docs/api-reference/customer-credit-api#get-/api/creditcontrol/accounts/-creditAccountId-) endpoint response body. */
                statementId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Value to be debited from the account balance.
                     * @example -15
                     */
                    value: string;
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
                        /** @description Value debited from the account balance. */
                        value: string;
                    };
                };
            };
        };
    };
    CreateorUpdateSettlement: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Pre-authorization identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Value to be settled in the invoice.
                     * @example 49.95
                     */
                    value: number;
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
                        /** @description Invoice value. */
                        value: number;
                        /** @description Identification of the pre-authorization generated when creating the order. This number plus the information `-01` indicates the number of the invoice created. */
                        id: string;
                    };
                };
            };
        };
    };
    CreateaPreAuthorization: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Pre-Authorization value.
                     * @example 49.7
                     */
                    value: number;
                    /**
                     * @description Indicates whether pre-authorization should be available to be settled. This means that the `transactionId` created in this request can be used to be associated with an order within a maximum period of 30 days.
                     * @example true
                     */
                    settle: boolean;
                    /**
                     * @description Number of installments.
                     * @example 1
                     */
                    installments: number;
                    /**
                     * @description Pre-Authorization expiration date. This field should only be sent if the `settle` field is sent as `false`.
                     * @example 2023-11-25
                     */
                    expirationDate?: string;
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
                        /** @description Pre-Authorization identification. */
                        id: string;
                        /** @description Pre-Authorization value. */
                        value: number;
                        /** @description Pre-Authorization expiration date. */
                        expirationDate?: string;
                        /** @description Number of installments. */
                        installments: number;
                    };
                };
            };
        };
    };
    "CreateaPreAuthorization(usingid)": {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Pre-authorization identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Pre-Authorization value.
                     * @example 55
                     */
                    value: number;
                    /**
                     * @description Indicates whether pre-authorization should be available to be settled. This means that the `transactionId` can be used to be associated with an order within a maximum period of 30 days.
                     * @example true
                     */
                    settle: boolean;
                    /**
                     * @description Number of installments.
                     * @example 1
                     */
                    installments: number;
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
                        /** @description Pre-Authorization identification. */
                        id: string;
                        /** @description Pre-Authorization value. */
                        value: number;
                        /** @description Number of installments. */
                        installments: number;
                    };
                };
            };
        };
    };
    CancelaPreAuthorization: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Pre-authorization identification. */
                transactionId: components["parameters"]["transactionId"];
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
    AddanaccountHolder: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Holder information. */
                    claims: {
                        /**
                         * @description Holder email.
                         * @example email@domain.com
                         */
                        email: string;
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
                        /** @description Holder hierarchy. The value `2` indicates that the holder is a dependent of the account's main holder. */
                        level: number;
                        /** @description New holder information. */
                        claims: {
                            /** @description Holder email. */
                            email: string;
                        };
                        /** @description Holder identification. */
                        id: string;
                        /** @description Date of appointment of the holder. */
                        createdAt: string;
                    };
                };
            };
        };
    };
    Deleteanaccountholder: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Holder identification. */
                holderId: string;
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
                        /** @description Identification of the holder deleted from the account. */
                        id: string;
                    };
                };
            };
        };
    };
    Changetoleranceofanaccount: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount.
                     * @example 0.3
                     */
                    value: number;
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
                        /** @description Credit customer account identification. */
                        id: string;
                        /** @description Account balance value. If this number is negative, it means that the account has a debit instead of a credit to be used. */
                        balance: number;
                        /** @description Credit customer account status. */
                        status: string;
                        /** @description Maximum credit amount on the account. */
                        creditLimit: number;
                        /** @description Date of the last update made to the account. */
                        updatedAt: string;
                        /** @description Account creation date. */
                        createdAt: string;
                        /**
                         * @deprecated
                         * @description This field is deprecated.
                         */
                        description?: string;
                        /** @description Credit amount available on the account. */
                        availableCredit: number;
                        /** @description Credit value that can only be used by the account owner after the merchant releases a specific purchase transaction. */
                        preAuthorizedCredit: number;
                        /** @description Account owner email. */
                        email: string;
                        /** @description Account credit tolerance (in decimals). This value represents the increase in credit on an account. For example, a value of `0.30` indicates that the account owner can use up to 30% above the account's original maximum credit amount. */
                        tolerance: number;
                        /** @description Balance available for use on the account. */
                        availableBalance: number;
                    };
                };
            };
        };
    };
    PartialorTotalRefundaSettlement: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["Content-Type"];
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["Accept"];
            };
            path: {
                /** @description Credit account identification. */
                creditAccountId: components["parameters"]["creditAccountId"];
                /** @description Pre-authorization identification. */
                transactionId: components["parameters"]["transactionId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Refund amount. This number must always be less than or equal to the value of the captured transaction.
                     * @example 30
                     */
                    value: number;
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
                        /** @description Refunded amount. */
                        value: number;
                    };
                };
            };
        };
    };
    Retrievestoreconfiguration: {
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
                        /** @description Daily interest rate (percent 0.1 = 10%). */
                        dailyInterestRate: number;
                        /** @description Maximum number of postponements allowed. */
                        invoicePostponementLimit: number;
                        /** @description Tax rate value (percent 0.1 = 10%). */
                        taxRate: number;
                        /** @description Maximum number of days of postponement. */
                        maxPostponementDays: number;
                        /** @description Default credit amount. */
                        defaultCreditValue: number;
                        /**
                         * @description Postponement option activated.
                         * @default false
                         */
                        postponementEnabled: boolean;
                        /**
                         * @description Allows users who have not previously received credit to complete an order.
                         * @default false
                         */
                        automaticCheckingAccountCreationEnabled: boolean;
                        /**
                         * @description Allows orders to be placed even if they exceed X % of the account's credit limit.
                         * @default false
                         */
                        toleranceEnabled: boolean;
                        /**
                         * @description Show the [My Credits](https://help.vtex.com/en/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0#my-credits) page on storefront.
                         * @default false
                         */
                        myCreditsEnabled: boolean;
                        /** @description Pre-authorization growth-rate value (percent 0.1 = 10%). */
                        maxPreAuthorizationGrowthRate: number;
                        /** @description Notification settings information. */
                        notificationsSettings?: {
                            /** @description Notification information sent before invoice payment date. */
                            daysPrior?: {
                                /** @description How many days before the invoice payment date is the notification sent. */
                                days: number;
                                /** @description Notification sending time. */
                                timeOfDay: string;
                            }[];
                            /** @description Notification information sent after invoice payment date. */
                            daysAfter?: {
                                /** @description How many days after the invoice payment date is the notification sent. */
                                days: number;
                                /** @description Notification sending time. */
                                timeOfDay: string;
                            }[];
                        };
                    };
                };
            };
        };
    };
    Createorchangestoreconfiguration: {
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
                "application/json": {
                    /**
                     * @description Daily interest rate (percent 0.1 = 10%).
                     * @example 0.01
                     */
                    dailyInterestRate: number;
                    /**
                     * @description Maximum number of postponements allowed.
                     * @example 2
                     */
                    invoicePostponementLimit: number;
                    /**
                     * @description Tax rate value (percent 0.1 = 10%).
                     * @example 0.4
                     */
                    taxRate: number;
                    /**
                     * @description Maximum number of days of postponement.
                     * @example 3
                     */
                    maxPostponementDays: number;
                    /**
                     * @description Default credit amount.
                     * @example 150
                     */
                    defaultCreditValue: number;
                    /**
                     * @description Pre-authorization growth rate value (percent 0.1 = 10%).
                     * @example 0.1
                     */
                    maxPreAuthorizationGrowthRate: number;
                    /**
                     * @description Show the [My Credits](https://help.vtex.com/en/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0#my-credits) page on storefront.
                     * @example true
                     */
                    myCreditsEnabled: boolean;
                    /**
                     * @description Allows orders to be placed even if they exceed X % of the account's credit limit.
                     * @example true
                     */
                    toleranceEnabled: boolean;
                    /**
                     * @description Allows users who have not previously received credit to complete an order.
                     * @example true
                     */
                    automaticCheckingAccountCreationEnabled: boolean;
                    /**
                     * @description Postponement option activated.
                     * @example true
                     */
                    postponementEnabled: boolean;
                    /** @description Notification settings information. */
                    notificationsSettings?: {
                        /** @description Notification information sent before invoice payment date. */
                        daysPrior?: {
                            /**
                             * @description How many days before the invoice payment date is the notification sent.
                             * @example 1
                             */
                            days: number;
                            /**
                             * @description Notification sending time.
                             * @example 16:00:00
                             */
                            timeOfDay: string;
                        }[];
                        /** @description Notification information sent after invoice payment date. */
                        daysAfter?: {
                            /**
                             * @description How many days after the invoice payment date is the notification sent.
                             * @example 0
                             */
                            days: number;
                            /**
                             * @description Notification sending time.
                             * @example 12:00:00
                             */
                            timeOfDay: string;
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
                content: {
                    "application/json": {
                        /** @description Daily interest rate (percent 0.1 = 10%). */
                        dailyInterestRate: number;
                        /** @description Maximum number of postponements allowed. */
                        invoicePostponementLimit: number;
                        /** @description Tax rate value (percent 0.1 = 10%). */
                        taxRate: number;
                        /** @description Maximum number of days of postponement. */
                        maxPostponementDays: number;
                        /** @description Default credit amount. */
                        defaultCreditValue: number;
                        /**
                         * @description Postponement option activated.
                         * @default false
                         */
                        postponementEnabled: boolean;
                        /**
                         * @description Allows users who have not previously received credit to complete an order.
                         * @default false
                         */
                        automaticCheckingAccountCreationEnabled: boolean;
                        /**
                         * @description Allows orders to be placed even if they exceed X % of the account's credit limit.
                         * @default false
                         */
                        toleranceEnabled: boolean;
                        /**
                         * @description Show the [My Credits](https://help.vtex.com/en/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0#my-credits) page on storefront.
                         * @default false
                         */
                        myCreditsEnabled: boolean;
                        /** @description Pre-authorization growth rate value (percent 0.1 = 10%). */
                        maxPreAuthorizationGrowthRate: number;
                        /** @description Notification settings information. */
                        notificationsSettings?: {
                            /** @description Notification information sent before invoice payment date. */
                            daysPrior?: {
                                /** @description How many days before the invoice payment date is the notification sent. */
                                days: number;
                                /** @description Notification sending time. */
                                timeOfDay: string;
                            }[];
                            /** @description Notification information sent after invoice payment date. */
                            daysAfter?: {
                                /** @description How many days after the invoice payment date is the notification sent. */
                                days: number;
                                /** @description Notification sending time. */
                                timeOfDay: string;
                            }[];
                        };
                    };
                };
            };
        };
    };
}
