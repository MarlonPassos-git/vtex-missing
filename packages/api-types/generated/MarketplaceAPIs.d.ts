export interface paths {
    "/notificator/{sellerId}/changenotification/{skuId}/price": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Notify marketplace of price update
         * @description This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs.
         *
         *     There is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`).
         *
         *     *Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["PriceNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notificator/{sellerId}/changenotification/{skuId}/inventory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Notify marketplace of inventory update
         * @description This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs.
         *
         *     There is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`).
         *
         *     *Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        post: operations["InventoryNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offer-manager/pvt/offers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Matched Offers List
         * @description Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
         *
         *      This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog.
         *
         *     It is possible to filter the search through the following parameters:
         *
         *     - rows
         *     - sort
         *
         *     - start
         *
         *     - fq
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["Getofferslist"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offer-manager/pvt/product/{productId}/sku/{skuId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Matched Offer's Data by SKU ID
         * @description Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
         *
         *     This endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog.
         *
         *     The call returns a list of offers for that ID, that contain the following data:
         *
         *     - Seller that sells the SKU
         *
         *     - Correspondent SKU ID
         *
         *     - SKU's price value
         *
         *     - Inventory level
         *
         *     - Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.
         */
        get: operations["GetSKUoffers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offer-manager/pvt/product/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Matched Offer's Data by Product ID
         * @description Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
         *
         *     This endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog.
         *
         *     The call returns a list of offers for that ID, that contain the following data:
         *
         *     - Seller that sells the SKU
         *
         *     - Correspondent SKU ID
         *
         *     - SKU's price value
         *
         *     - Inventory level
         *
         *     - Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.
         *
         *     ## Permissions
         *
         *     This endpoint does not require [permissions](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication-overview#machine-authentication).
         *
         *     >❗ To prevent integrations from having excessive permissions, consider the [best practices for managing app keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm) when assigning License Manager roles to integrations.
         */
        get: operations["GetProductoffers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/seller-leads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Seller Leads
         * @description This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information:
         *
         *     - `id`
         *
         *     - `createdAt`
         *
         *     - `status`
         *
         *     - `isConnected`
         *
         *     - `sellerEmail`
         *
         *     - `sellerName`
         *
         *     - `salesChannel`
         *
         *     - `email`
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Seller Register | Seller Administration | **View Seller** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | View all sellers linked to the Marketplace account described on the sellers management page, including recovering seller data, either from the sellers listing, or a specific seller. | View Seller |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["ListSellerLeads"];
        put?: never;
        /**
         * Invite Seller Lead
         * @description This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store.
         *
         *     The email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** |
         *     | --------------- | ----------------- | ----------------- |
         *     | Seller Register | Seller Administration | **Save Seller** |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with that resource or use one of the following [predefined roles](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy):
         *
         *     | **Role** | **Resource** |
         *     | --------------- | ----------------- |
         *     | Create new sellers and edit data from all sellers linked to Marketplace account from the sellers management page. | Save Seller |
         *
         *     >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm).
         *
         *     To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        post: operations["CreateSellerLead"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/seller-leads/{sellerLeadId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Seller Lead's Data by Id
         * @description Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information:
         *
         *     - `id`
         *
         *     - `createdAt`
         *
         *     - `status`
         *
         *     - `isConnected`
         *
         *     - `sellerEmail`
         *
         *     - `sellerName`
         *
         *     - `salesChannel`
         *
         *     - `email`
         */
        get: operations["RetrieveSellerLead"];
        /**
         * Accept Seller Lead
         * @description This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process.
         *
         *     Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward:
         *
         *      From `invite` > to `Accept` > closing on `Create Seller`.
         *
         *     If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.
         */
        put: operations["AcceptSellerLead"];
        post?: never;
        /**
         * Delete Seller Lead
         * @description This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.
         */
        delete: operations["RemoveSellerLead"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/seller-leads/{sellerLeadId}/seller": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Create Seller From Lead
         * @description This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled.
         *
         *     The creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step.
         *
         *     Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward:
         *
         *      From `invite` > to `Accept` > closing on `Create Seller`.
         *
         *     If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.
         */
        put: operations["CreateSellerFromSellerLead"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/seller-leads/{sellerLeadId}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Resend Seller Lead Invite
         * @description This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.
         */
        put: operations["ResendSellerLeadRequest"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/sellers/{sellerId}/commissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Seller Commissions by seller ID
         * @description This endpoint retrieves all comissions configured for a specific seller. It is not necessary to send a request body.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** | **Role** |
         *     |---|---|---|---|
         *     | Seller Register | Seller adminstration | View Seller | View all sellers linked to the Marketplace account described on the sellers management page, including recovering seller data, either from the sellers listing, or a specific seller. |
         *     | Seller Register | Seller administration | Save Seller | Create new sellers and edit data from all sellers linked to Marketplace account from the sellers management page. |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with this feature or use one of the predefined roles from the list above.
         *
         *      >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm). To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["ListSellerCommissions"];
        /**
         * Upsert Seller Commissions in bulk
         * @description This endpoint is used by marketplace operators to define comissions for multiple categories, sending an array with multiple objects in the same call.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** | **Role** |
         *     |----|----|----|----|
         *     | Seller Register | Seller administration | Save Seller | Create new sellers and edit data from all sellers linked to Marketplace account from the sellers management page. |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with this feature or use one of the predefined roles from the list above.
         *
         *      >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm). To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        put: operations["BulkUpsertSellerCommissions"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Seller Commissions by Category ID
         * @description This endpoint retrieves seller comissions applied to the selected category. It is not necessary to send a request body.
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** | **Role** |
         *     |---|---|---|---|
         *     | Seller Register | Seller adminstration | View Seller | View all sellers linked to the Marketplace account described on the sellers management page, including recovering seller data, either from the sellers listing, or a specific seller. |
         *     | Seller Register | Seller administration | Save Seller | Create new sellers and edit data from all sellers linked to Marketplace account from the sellers management page. |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with this feature or use one of the predefined roles from the list above.
         *
         *      >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm). To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        get: operations["RetrieveSellerCommissions"];
        put?: never;
        post?: never;
        /**
         * Remove Seller Commissions by Category ID
         * @description This endpoint removes a seller comission on the selected category.
         *
         *      >❗This action cannot be undone, to reconfigure the commission it is necessary to use the [Upsert Seller Commissions in Bulk endpoint](https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/seller-register/pvt/sellers/-sellerId-/commissions/categories?endpoint=put-/seller-register/pvt/sellers/-sellerId-/commissions/categories).
         *
         *     ## Permissions
         *
         *     Any user or [application key](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys) must have at least one of the appropriate [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to be able to successfully run this request. Otherwise they will receive a status code `403` error. These are the applicable resources for this endpoint:
         *
         *     | **Product** | **Category** | **Resource** | **Role** |
         *     |----|----|----|----|
         *     | Seller Register | Seller administration | Save Seller | Create new sellers and edit data from all sellers linked to Marketplace account from the sellers management page. |
         *
         *     You can [create a custom role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) with this feature or use one of the predefined roles from the list above.
         *
         *      >❗ Assigning a [predefined role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) to users or application keys usually grants permission to multiple [License Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3). If some of these permissions are not necessary, consider creating a custom role instead. For more information regarding security, see [Best practices for using application keys](https://help.vtex.com/en/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm). To learn more about machine authentication at VTEX, see [Authentication overview](https://developers.vtex.com/docs/guides/authentication).
         */
        delete: operations["RemoveSellerCommissions"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/sellers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Sellers
         * @description This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.
         */
        get: operations["GetListSellers"];
        put?: never;
        /**
         * Configure Seller Account
         * @description This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces.
         *
         *     For marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly.
         *
         *     This call includes all the information a seller needs to activate their account.
         */
        post: operations["UpsertSellerRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/seller-register/pvt/sellers/{sellerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Seller data by ID
         * @description Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.
         */
        get: operations["GetRetrieveSeller"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update Seller by Seller ID
         * @description This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.
         */
        patch: operations["UpdateSeller"];
        trace?: never;
    };
    "/seller-register/pvt/sellers/{sellerId}/sales-channel/mapping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Sales Channel Mapping Data
         * @description Retrieves information about the mapping between marketplace's sales channels and a specific seller.
         */
        get: operations["RetrieveMapping"];
        /**
         * Upsert Sales Channel Mapping
         * @description This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.
         */
        put: operations["UpsertMapping"];
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
         * @description Request to upsert a mapping between a marketplace's sales channel and a seller's affiliate.
         * @example {
         *       "marketplaceSalesChannel": 1,
         *       "sellerChannel": "GCB"
         *     }
         */
        UpsertMappingRequest: {
            /**
             * @description The sales channel of the marketplace to be associated with the seller's affiliate. It is linked to the seller's affiliate.
             * @example 1
             */
            marketplaceSalesChannel: number;
            /**
             * @description The affiliate of the seller that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channels will be used for the mapping.
             * @example GCB
             */
            sellerChannel: string;
        };
        /**
         * @description Object with the category properties and the commission percentage applied to it.
         * @example {
         *       "categoryId": "51",
         *       "categoryName": "Clothes",
         *       "categoryFullPath": [
         *         "2.0",
         *         "Boys",
         *         "Clothes"
         *       ],
         *       "productCommissionPercentage": 7.75,
         *       "freightCommissionPercentage": 2.33
         *     }
         */
        responseSellerCommissionsID: {
            /**
             * @description Marketplace's Category ID that the product belongs to, configured in the Catalog.
             * @example 51
             */
            categoryId?: string;
            /**
             * @description Category name with applied commission.
             * @example Clothes
             */
            categoryName?: string;
            /**
             * @description Full path to the SKU's category.
             * @example [
             *       "2.0",
             *       "Boys",
             *       "Clothes"
             *     ]
             */
            categoryFullPath?: string[];
            /**
             * @description Percentage of the comission applied to the product in decimals.
             * @example 7.75
             */
            productCommissionPercentage?: number;
            /**
             * @description Percentage of the comission applied to the freight in decimals.
             * @example 2.33
             */
            freightCommissionPercentage?: number;
        };
        /** @example [
         *       {
         *         "categoryId": "6",
         *         "categoryFullPath": null,
         *         "productCommissionPercentage": 9.85,
         *         "freightCommissionPercentage": 2.43
         *       },
         *       {
         *         "categoryId": "51",
         *         "categoryFullPath": "Appliances/Oven",
         *         "productCommissionPercentage": 7.85,
         *         "freightCommissionPercentage": 3.43
         *       }
         *     ] */
        BulkUpsertSellerCommissionsRequest: {
            /**
             * @description Marketplace's Category ID that the product belongs to, configured in the Catalog.
             * @example 6
             */
            categoryId: string;
            /**
             * @description Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
             * @example Appliances/Oven
             */
            categoryFullPath: string | null;
            /**
             * @description Percentage of the comission applied to the product in decimals.
             * @example 9.85
             */
            productCommissionPercentage: number;
            /**
             * @description Percentage of the comission applied to the freight in decimals.
             * @example 2.43
             */
            freightCommissionPercentage: number;
        };
        /** @example {
         *       "categoryId": "6",
         *       "categoryFullPath": null,
         *       "productCommissionPercentage": 9.85,
         *       "freightCommissionPercentage": 2.43
         *     } */
        UpsertSellerCommissionsRequest: {
            /**
             * @description Marketplace's Category ID that the product belongs to, configured in the Catalog.
             * @default 6
             */
            categoryId: string;
            /**
             * @description Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
             * @example Appliances/Oven
             */
            categoryFullPath: string | null;
            /**
             * @description Percentage of the comission applied to the product in decimals.
             * @default 9.85
             */
            productCommissionPercentage: number;
            /**
             * @description Percentage of the comission applied to the freight in decimals.
             * @default 2.43
             */
            freightCommissionPercentage: number;
        };
        /** @example {
         *       "sellerEmail": "selleremail@email.com",
         *       "sellerName": "Seller Name",
         *       "sellerAccountName": "seller123",
         *       "salesChannel": "1",
         *       "email": "email@email.com",
         *       "sellerType": 1,
         *       "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
         *       "document": "12345671000",
         *       "hasAcceptedLegalTerms": true,
         *       "address": {
         *         "postalcode": "12345678",
         *         "complement": "Appartment 1234",
         *         "street": "VTEX street",
         *         "number": "25",
         *         "neighborhood": "VTEX quarter",
         *         "state": "RJ",
         *         "city": "Rio de Janeiro"
         *       },
         *       "accountable": {
         *         "name": "Jane Smith",
         *         "email": "email@email.com",
         *         "phone": "1234567890"
         *       }
         *     } */
        CreateSellerLeadRequest: {
            /**
             * @description Seller's contact email;
             * @default selleremail@email.com
             */
            sellerEmail: string;
            /**
             * @description Seller's store's name.
             * @default Seller Name
             */
            sellerName: string;
            /**
             * @description Name of the seller's account, part of the url of their VTEX Admin.
             * @default seller123
             */
            sellerAccountName: string;
            /**
             * @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
             * @default 1
             */
            salesChannel: string;
            /** @default email@email.com */
            email: string;
            /**
             * @description Type of seller, including:
             *
             *     `1`: regular seller
             *
             *     `2`: whitelabel seller
             * @default 1
             */
            sellerType: number;
            /**
             * @description Marketplace's account ID
             * @default 5fb38ace-d95e-45ad-970d-ee97cce9fbcd
             */
            accountId: string;
            /**
             * @description Company's legal document code.
             * @default 12345671000
             */
            document: string;
            /**
             * @description Indicates if the seller has accepted the platform's legal terms and conditions.
             * @default true
             */
            hasAcceptedLegalTerms: boolean;
            address: components["schemas"]["address"];
            accountable: components["schemas"]["accountable"];
        };
        responseCreateSellerLead: {
            /**
             * @description ID of the created seller.
             * @example 7890123456
             */
            sellerId?: string;
            /**
             * @description Creation date of the seller.
             * @example 2022-01-01T12:34:56Z
             */
            createdAt?: string;
            /**
             * @description Date of the last update of the seller.
             * @example 2023-01-01T12:34:56Z
             */
            updatedAt?: string;
        };
        /** accountable */
        accountable: {
            /**
             * name
             * @description Name of the person responsible for the seller.
             * @default Jane Smith
             */
            name: string;
            /**
             * email
             * @description Email address of the person responsible for the seller.
             * @default email@email.com
             */
            email: string;
            /**
             * phone
             * @description Phone number of the person responsible for the seller.
             * @default 1234567890
             */
            phone: string;
        };
        /** address */
        address: {
            /**
             * postalCode
             * @description Postal code from the seller's address.
             * @default 12345678
             */
            postalcode: string;
            /**
             * complement
             * @description Seller's address complement.
             * @default Appartment 1234
             */
            complement: string;
            /**
             * street
             * @description Street information, from the seller's address.
             * @default VTEX street
             */
            street: string;
            /**
             * number
             * @description Street's number, from the seller's address.
             * @default 25
             */
            number: string;
            /**
             * The neighborhood schema
             * @description Seller's address neighborhood.
             * @default VTEX quarter
             */
            neighborhood: string;
            /**
             * state
             * @description State, from the seller's address.
             * @default RJ
             */
            state: string;
            /**
             * city
             * @description City name, from the seller's address.
             * @default Rio de Janeiro
             */
            city: string;
        };
        /** @example {
         *       "sellerEmail": "selleremail@email.com",
         *       "sellerName": "Seller Name",
         *       "affiliateId": "MKP",
         *       "sellerAccountName": "seller123",
         *       "salesChannel": "1",
         *       "email": "seller@email.com",
         *       "sellerType": 1,
         *       "accountId": "5fb38ace-d95e-45ad-970d-ee97cce9fbcd",
         *       "document": "12345671000",
         *       "hasAcceptedLegalTerms": true,
         *       "address": {
         *         "postalcode": "12345678",
         *         "complement": "Appartment 1234",
         *         "street": "VTEX street",
         *         "number": "25",
         *         "neighborhood": "VTEX quarter",
         *         "state": "RJ",
         *         "city": "Rio de Janeiro"
         *       },
         *       "accountable": {
         *         "name": "Jane Smith",
         *         "email": "email@email.com",
         *         "phone": "1234567890"
         *       }
         *     } */
        AcceptSellerLeadRequest: {
            /**
             * @description Seller's contact email.
             * @default selleremail@email.com
             */
            sellerEmail: string;
            /**
             * @description Seller's store's name.
             * @default Seller Name
             */
            sellerName: string;
            /**
             * @description Name of the seller's account, part of the url of their VTEX Admin.
             * @default seller123
             */
            sellerAccountName: string;
            /**
             * @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
             * @default 1
             */
            salesChannel: string;
            /**
             * @description email of the admin responsible for the seller.
             * @default seller@email.com
             */
            email: string;
            /**
             * @description Type of seller, including:
             *
             *     `1`: regular seller
             *
             *     `2`: whitelabel seller
             * @default 1
             */
            sellerType: number;
            /**
             * @description Marketplace's account ID
             * @default 5fb38ace-d95e-45ad-970d-ee97cce9fbcd
             */
            accountId: string;
            /**
             * @description Company's legal document code.
             * @default 12345671000
             */
            document: string;
            /**
             * @description Indicates if the seller has accepted the platform's legal terms and conditions.
             * @default true
             */
            hasAcceptedLegalTerms: boolean;
            address: components["schemas"]["address"];
            accountable: components["schemas"]["accountable"];
        };
        /** @example {
         *       "status": "accepted"
         *     } */
        ResendSellerLeadRequestRequest: {
            /**
             * @description Seller Lead's status. Includes `accepted`, `connected` or `invited`.
             * @default accepted
             */
            status: string;
        };
        /**
         * Configure Seller Account
         * @example {
         *       "id": "testeMARCUS123",
         *       "name": "qamarketplace",
         *       "isActive": true,
         *       "fulfillmentEndpoint": "http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=parceiro01",
         *       "allowHybridPayments": false,
         *       "trustPolicy": "AllowEmailSharing",
         *       "user": "integrationHubUserName",
         *       "password": "integrationHubPassword",
         *       "taxCode": "34444",
         *       "email": "vtexqa1@vtex.com.br",
         *       "description": "Seller A, from the B industry.",
         *       "sellerCommissionConfiguration": {
         *         "productCommissionPercentage": 3,
         *         "freightCommissionPercentage": 4,
         *         "categoriesCommissionConfiguration": []
         *       },
         *       "isBetterScope": false,
         *       "sellerType": 1,
         *       "availableSalesChannels": [
         *         {
         *           "isSelected": true,
         *           "id": 1,
         *           "name": "Loja Principal"
         *         },
         *         {
         *           "isSelected": true,
         *           "id": 2,
         *           "name": "Terceira"
         *         },
         *         {
         *           "isSelected": true,
         *           "id": 3,
         *           "name": "Marketplaces"
         *         }
         *       ],
         *       "CSCIdentification": "SampleCSCIdentification123",
         *       "account": "parceiro01",
         *       "channel": "SampleChannel",
         *       "salesChannel": "SampleSalesChannel",
         *       "isVtex": true,
         *       "score": 0,
         *       "exchangeReturnPolicy": "1",
         *       "deliveryPolicy": "3",
         *       "securityPrivacyPolicy": null,
         *       "catalogSystemEndpoint": "https://pedrostore.vtexcommercestable.com.br/api/catalog_system/",
         *       "fulfillmentSellerId": "seller1",
         *       "groups": [
         *         {
         *           "groups": [
         *             {
         *               "id": "8d845239bf1448dc8bc3ed3121837511",
         *               "name": "long tail"
         *             },
         *             {
         *               "id": "b9bcd348ab9c4cec8285ff9485c27a72",
         *               "name": "franchise accounts"
         *             }
         *           ]
         *         }
         *       ]
         *     }
         */
        UpsertSellerRequest: {
            /**
             * @description Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.
             * @default seller123
             */
            id: string;
            /**
             * @description Name of the seller's store, configured in the seller's environment.
             * @default Seller Name
             */
            name: string;
            /**
             * @description Whether the seller is active on the marketplace or not.
             * @default true
             */
            isActive: boolean;
            /**
             * @description URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller.
             *
             *     For **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process.
             *
             *     For **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}`.
             *
             *     The value `SellerName` corresponds to the store name if the seller is a VTEX store.
             *
             *     The value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
             *
             *     The value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
             *
             *     To configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{salesChannel`
             * @default http://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}
             */
            fulfillmentEndpoint: string;
            /**
             * @description Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.
             * @default false
             */
            allowHybridPayments: boolean;
            /**
             * @description This code is the Identity Number for the legal entity and is linked to information in its base country.
             * @default 34444
             */
            taxCode: string;
            /**
             * @description email of the admin responsible for the seller.
             * @default seller@email.com
             */
            email: string;
            /**
             * @description String describing the seller
             * @default Seller A, from the B industry.
             */
            description: string;
            sellerCommissionConfiguration: Record<string, never>;
            /**
             * @description Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.
             * @default true
             */
            isBetterScope: boolean;
            /**
             * @description Type of seller, including:
             *
             *     `1`: regular seller
             *
             *     `2`: whitelabel seller
             * @default 1
             */
            sellerType: number;
            /**
             * @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) available.
             * @default []
             */
            availableSalesChannels: components["schemas"]["AvailableSalesChannel"][];
            /**
             * @description SKU Seller Identification
             * @default cscidentification 123
             */
            CSCIdentification: string;
            /**
             * @description Seller's account name
             * @default partner01
             */
            account: string;
            /**
             * @description Channel's name.
             * @default channel name
             */
            channel: string;
            /**
             * @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.
             * @default 1
             */
            salesChannel: string;
            /**
             * @description Flag determining whether the seller configured is a VTEX store or not.
             * @default true
             */
            isVtex: boolean;
            /**
             * @description Text describing the exchange and return policy previously agreed between the marketplace and the seller.
             * @default Describe exchange and returns policy
             */
            exchangeReturnPolicy: string;
            /**
             * @description Text describing the delivery policy previously agreed between the marketplace and the seller.
             * @default Describe delivery policy
             */
            deliveryPolicy: string;
            /**
             * @description  Text describing the security policy previously agreed between the marketplace and the seller.
             * @default Describe privacy and security policy
             */
            securityPrivacyPolicy: string;
            /**
             * @description  Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.
             * @default seller1
             */
            fulfillmentSellerId: string;
            /** @description Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation. */
            groups?: components["schemas"]["Groups"][];
            /**
             * user
             * @description Username, if you are using a hub to integrate with the external seller.
             * @default integrationHubUserName
             */
            user: string;
            /**
             * password
             * @description User password, if you are using a hub to integrate with the external seller.
             * @default integrationHubPassword
             */
            password: string;
            /**
             * Catalog System Endpoint schema
             * @description URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`
             * @default https://pedrostore.vtexcommercestable.com.br/api/catalog_system/
             */
            catalogSystemEndpoint: string;
            /**
             * Trust Policy
             * @description  the marketplace must first allow VTEX to share clients’ email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field
             * @default AllowEmailSharing
             */
            trustPolicy: string;
            /**
             * Score
             * @description Score attributed to this seller.
             * @default 0
             */
            score: number;
        };
        /**
         * Seller Commission Configuration
         * @example {
         *       "productCommissionPercentage": 3,
         *       "freightCommissionPercentage": 4,
         *       "categoriesCommissionConfiguration": []
         *     }
         */
        SellerCommissionConfiguration: {
            /**
             * @description Percentage of the comission applied to the product in decimals.
             * @default 9.85
             */
            productCommissionPercentage: number;
            /**
             * @description Percentage of the comission applied to the freight in decimals.
             * @default 2.43
             */
            freightCommissionPercentage: number;
            /**
             * @description Array with percentage of the comission applied to categories in decimals.
             * @default []
             */
            categoriesCommissionConfiguration: string[];
        };
        /**
         * Available Sales Channel
         * @example {
         *       "isSelected": true,
         *       "id": 1,
         *       "name": "Loja Principal"
         *     }
         */
        AvailableSalesChannel: {
            /**
             * @description Flag defining if the sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) is selected or not.
             * @default true
             */
            isSelected: boolean;
            /**
             * @description Sales Channel's ID.
             * @default 1
             */
            id: number;
            /**
             * @description Name of the Sales Channel.
             * @default Main Store
             */
            name: string;
        };
        /**
         * groups
         * @description Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation.
         * @example {
         *       "groups": [
         *         {
         *           "id": "8d845239bf1448dc8bc3ed3121837511",
         *           "name": "long tail"
         *         },
         *         {
         *           "id": "b9bcd348ab9c4cec8285ff9485c27a72",
         *           "name": "franchise accounts"
         *         }
         *       ]
         *     }
         */
        Groups: {
            /**
             * @description Group's unique identifier code.
             * @default 8d845239bf1448dc8bc3ed3121837511
             */
            id: string;
            /**
             * @description Name of the tag chosen to identify the group.
             * @default franchise Accounts
             */
            name: string;
        };
        /**
         * Sku
         * @example {
         *       "SkuId": "1070268",
         *       "EanId": null,
         *       "RefId": null,
         *       "NameComplete": "Produto Teste 04 - Preto - 40 Cor:Preto",
         *       "Name": "Cor:Preto",
         *       "IsActive": true,
         *       "MainImage": {
         *         "ImageId": "53878805",
         *         "ImageLabel": null,
         *         "ImageTag": "<img src=\"~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg\" width=\"#width#\" height=\"#height#\" alt=\"image-8b4364782e664d76a6ebc8702008e478\" id=\"\" />",
         *         "ImagePath": "~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg",
         *         "IsMain": true,
         *         "IsZoomSize": true,
         *         "ImageText": "image-8b4364782e664d76a6ebc8702008e478",
         *         "LastModified": "2021-04-06T03:01:30.747"
         *       },
         *       "Offers": [
         *         {
         *           "SellerId": "1",
         *           "SellerSkuId": "1070268",
         *           "OffersPerSalesChannel": [
         *             {
         *               "SaleChannel": 1,
         *               "Price": 0,
         *               "ListPrice": 0,
         *               "PriceWithoutDiscount": 0,
         *               "AvailableQuantity": 0
         *             }
         *           ],
         *           "AvailableSalesChannels": null
         *         },
         *         {
         *           "SellerId": "madesacms",
         *           "SellerSkuId": "3298",
         *           "OffersPerSalesChannel": [
         *             {
         *               "SaleChannel": 0,
         *               "Price": 1200,
         *               "ListPrice": 1200,
         *               "PriceWithoutDiscount": 1200,
         *               "AvailableQuantity": 10000000
         *             }
         *           ],
         *           "AvailableSalesChannels": null
         *         }
         *       ]
         *     }
         */
        Sku2: {
            /**
             * @description SKU's unique identifier number
             * @default 1070268
             */
            SkuId: string;
            /**
             * @description EAN's unique identifier number
             * @default 768655
             */
            EanId: string;
            /**
             * @description SKU's Reference ID
             * @default 1234
             */
            RefId: string;
            /**
             * @description Complete name of the SKU
             * @default Name of the Product - 123 Color: Black
             */
            NameComplete: string;
            /**
             * @description Summarized name of the SKU
             * @default Color: Black
             */
            Name: string;
            /**
             * @description Whether the SKU is active in the sales channel (true), or not (false).
             * @default true
             */
            IsActive: boolean;
            /** @description Main image's information. */
            MainImage: Record<string, never>;
            /** @description Array with offers */
            Offers: components["schemas"]["Offer"][];
        };
        /**
         * MainImage
         * @example {
         *       "ImageId": "53878805",
         *       "ImageLabel": null,
         *       "ImageTag": "<img src=\"~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg\" width=\"#width#\" height=\"#height#\" alt=\"image-8b4364782e664d76a6ebc8702008e478\" id=\"\" />",
         *       "ImagePath": "~/arquivos/ids/53878805-#width#-#height#/image-8b4364782e664d76a6ebc8702008e478.jpg",
         *       "IsMain": true,
         *       "IsZoomSize": true,
         *       "ImageText": "image-8b4364782e664d76a6ebc8702008e478",
         *       "LastModified": "2021-04-06T03:01:30.747"
         *     }
         */
        MainImage: {
            /**
             * @description Code identifying the image's file.
             * @default 53878805
             */
            ImageId: string;
            /**
             * @description Image's label.
             * @default Image 1
             */
            ImageLabel: string;
            /**
             * @description HTML tag for the selected image.
             * @default <img src="~/archives/ids/155411-#width#-#height#/Webp.net-resizeimage.jpg" width="#width#" height="#height#" alt="Image name and description" id="" />
             */
            ImageTag: string;
            /**
             * @description Path for the image's file.
             * @default ~/archives/ids/155411-#width#-#height#/Webp.net-resizeimage.jpg
             */
            ImagePath: string;
            /**
             * @description Whether the image is the main one or not.
             * @default true
             */
            IsMain: boolean;
            /**
             * @description If zoom can be applied to the image.
             * @default true
             */
            IsZoomSize: boolean;
            /**
             * @description Alt text for the image.
             * @default Image name and description
             */
            ImageText: string;
            /**
             * @description Date of the last changed made to the offer.
             * @default 2021-05-06T21:37:24.262529
             */
            LastModified: string;
        };
        /**
         * Offer
         * @example {
         *       "SellerId": "1",
         *       "SellerSkuId": "1070268",
         *       "OffersPerSalesChannel": [
         *         {
         *           "SaleChannel": 1,
         *           "Price": 0,
         *           "ListPrice": 0,
         *           "PriceWithoutDiscount": 0,
         *           "AvailableQuantity": 0
         *         }
         *       ],
         *       "AvailableSalesChannels": null
         *     }
         */
        Offer: {
            /**
             * @description ID of the seller in the marketplace. This ID must be created by the marketplace.
             * @default 1
             */
            SellerId: string;
            /**
             * @description A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.
             * @default 1070268
             */
            SellerSkuId: string;
            /** @description Each element in the array corresponds to an offer in a specific sales channel. */
            OffersPerSalesChannel: components["schemas"]["OffersPerSalesChannel"][];
            /**
             * @description The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) ID in which the SKU is available.
             * @default 1
             */
            AvailableSalesChannels: string;
        };
        /**
         * OffersPerSalesChannel
         * @example {
         *       "SaleChannel": 1,
         *       "Price": 0,
         *       "ListPrice": 0,
         *       "PriceWithoutDiscount": 0,
         *       "AvailableQuantity": 0
         *     }
         */
        OffersPerSalesChannel: {
            /**
             * @description The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) of the SKU.
             * @default 1
             */
            SaleChannel: number;
            /**
             * @description SKU's price.
             * @default 1300
             */
            Price: number;
            /**
             * @description SKU's suggested selling price
             * @default 1200
             */
            ListPrice: number;
            /**
             * @description SKU's price without discount applied.
             * @default 1400
             */
            PriceWithoutDiscount: number;
            /**
             * @description Available SKU stock quantity
             * @default 30
             */
            AvailableQuantity: number;
        };
        /** @description Response with the list of offers available on the Marketplace. */
        responseGetMatchedOffersList: {
            /**
             * @description Last date the offer was modified.
             * @example 2021-05-06T21:37:24.262529
             */
            LastModified?: string;
            /**
             * @description A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product.
             * @example 941947
             */
            ProductId?: string;
            /**
             * @description Offer's Category ID that the product belongs to, configured in the Catalog. It should be the marketplace's category chosen for the offer to be matched with.
             * @example 1563
             */
            CategoryId?: number;
            /**
             * @description Offer's brand ID that the product belongs to, configured in the Catalog. It should be the marketplace's brand chosen for the offer to be matched with.
             * @example 2004291
             */
            BrandId?: number;
            /**
             * @description Name of the offer's product.
             * @example Name of the Product - 123
             */
            ProductName?: string;
            Skus?: components["schemas"]["Sku2"][];
        }[];
        /** @description Array of matched offers data by SKU. */
        responseGetMatchedOffersDataBySKU: {
            /**
             * @description The unique identifier for the product.
             * @example 1561208
             */
            productId?: string;
            /**
             * @description The unique identifier for the product SKU.
             * @example 1559161
             */
            skuId?: string;
            /**
             * @description The complete name of the product.
             * @example Blusa Cardigan Manga Longa Vestem - Feminina - CINZA G
             */
            nameComplete?: string;
            /** @description Schema for the main product image. */
            mainImage?: {
                /**
                 * @description The file path of the main product image.
                 * @example ~/arquivos/ids/8567753-#width#-#height#/image-05b40d3167b5b7ed42285124f6862f12.jpg
                 */
                imagePath: string;
            };
            /** @description Array of offers from different sellers. */
            sellersOffers?: {
                /**
                 * @description The unique identifier for the seller.
                 * @example 1
                 */
                sellerId?: string;
                /**
                 * @description The unique identifier for the seller's SKU.
                 * @example 1559161
                 */
                sellerSkuId?: string;
                /** @description Array of offers on different sales channels from the same seller. */
                salesChannelOffer?: {
                    /**
                     * @description The unique identifier for the sales channel.
                     * @example 1
                     */
                    salesChannelId?: string;
                    /**
                     * @description The name of the sales channel.
                     * @example Principal
                     */
                    salesChannelName?: string;
                    /**
                     * @description The offer price.
                     * @example 0
                     */
                    price?: number;
                    /**
                     * @description The list price of the product.
                     * @example 0
                     */
                    listPrice?: number;
                    /**
                     * @description The offer price without any discount.
                     * @example 0
                     */
                    priceWithoutDiscount?: number;
                    /**
                     * @description The available quantity of the product.
                     * @example 8
                     */
                    availableQuantity?: number;
                }[];
            }[];
        }[];
        /** @description Array of matched offers data by product ID. */
        responseGetMatchedOffersDataByProductId: {
            /**
             * @description The unique identifier for the product.
             * @example 1561208
             */
            productId?: string;
            /**
             * @description The unique identifier for the product SKU.
             * @example 1559161
             */
            skuId?: string;
            /**
             * @description The complete name of the product.
             * @example Blusa Cardigan Manga Longa Vestem - Feminina - CINZA G
             */
            nameComplete?: string;
            /** @description Schema for the main product image. */
            mainImage?: {
                /**
                 * @description The file path of the main product image.
                 * @example ~/arquivos/ids/8567753-#width#-#height#/image-05b40d3167b5b7ed42285124f6862f12.jpg
                 */
                imagePath: string;
            };
            /** @description Array of offers from different sellers. */
            sellersOffers?: {
                /**
                 * @description The unique identifier for the seller.
                 * @example 1
                 */
                sellerId?: string;
                /**
                 * @description The unique identifier for the seller's SKU.
                 * @example 1559161
                 */
                sellerSkuId?: string;
                /** @description Schema for the offer data on a specific sales channel. */
                salesChannelOffer?: {
                    /**
                     * @description The unique identifier for the sales channel.
                     * @example 1
                     */
                    salesChannelId?: string;
                    /**
                     * @description The name of the sales channel.
                     * @example Principal
                     */
                    salesChannelName?: string;
                    /**
                     * @description The offer price.
                     * @example 0
                     */
                    price?: number;
                    /**
                     * @description The list price of the product.
                     * @example 0
                     */
                    listPrice?: number;
                    /**
                     * @description The offer price without any discount.
                     * @example 0
                     */
                    priceWithoutDiscount?: number;
                    /**
                     * @description The available quantity of the product.
                     * @example 0
                     */
                    availableQuantity?: number;
                };
            }[];
        }[];
    };
    responses: never;
    parameters: {
        /** @description The flag `isBetterScope` is used by the VTEX Checkout to simulate shopping carts, products, and shipping only in sellers with the field set as `true`, avoiding performance issues. When used as a query param, `isBetterScope` filters sellers that have the flag set as `true` or `false`. */
        isBetterScope: boolean;
        /** @description Query param that enables results to be filter by whether the seller lead is already connected to the marketplace or not. */
        isConnected: string;
        /** @description Custom search field, that filters sellers invited by specific marketplace operator's  email. */
        search: string;
        /** @description Seller Lead's status. Includes `accepted`, `connected` or `invited`. */
        status: string;
        /** @description Query param determining how data will be ordered in the response, ordering by name or ID in descending our ascending order. Includes the following values:
         *
         *     `namesort` = desc/asc
         *
         *     `idsort` = desc/asc */
        orderBy: string;
        /** @description This field determines the limit used to retrieve the list of sellers. The response includes objects until the value inputted here.             */
        limit: number;
        /** @description This field determines the limit used to retrieve the list of sellers. The response includes objects starting `from` the value inputted here. */
        offset: number;
        /** @description ID of the category in which the comission was applied */
        categoryId: string;
        /** @description ID of the Seller Lead invited to the marketplace. */
        sellerLeadId: string;
        /** @description The start number of pagination, being `0` the default value. */
        from: number;
        /** @description The end number of pagination, being `100` the default value. */
        to: number;
        /** @description Search sellers by a keyword in `sellerId` or `sellerName`. */
        keyword: string;
        /** @description Filters sellers by the name of who made the integration, if VTEX or an external hub. The possible values for VTEX integrations are: `vtex-sellerportal`, `vtex-seller` and `vtex-franchise`. */
        integration: string;
        /** @description Groups are defined by keywords that group sellers into categories defined by the marketplace. */
        group: string;
        /** @description Enables to filter sellers that are active (`true`) or unactive (`false`) in the marketplace. */
        isActive: boolean;
        /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
        accountName: string;
        /** @description Type of the content being sent. */
        contentType: string;
        /** @description Environment to use. Used as part of the URL. */
        environment: string;
        /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
        accept: string;
        /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
        sellerId: string;
        /** @description A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications. */
        skuId: string;
        /** @description Criteria used to sort the list of offers. For sorting values in ascending order, use `asc`, while for descending order, use `desc`. To fill in the field, insert the sorting criteria, followed by 'asc', or 'desc', separated by a comma. You can sort by the following criteria:
         *
         *     - **price:** sorts offers by price. *Ascending* goes from lowest to highest price, while *Descending* goes from highest to lowest price.
         *
         *     - **name:** sorts offers by *productName*, in alphabetical order. *Ascending* goes from *A* to *Z*, while *Descending* goes from *Z* to *A*.
         *
         *     - **availability:** availability in the sales channel (sc). The default value is 1.
         *
         *     Ex. sort=availability,desc
         *
         *     Ex. sort=name,asc
         *
         *     Ex. price,desc */
        sort: string;
        /** @description Number of rows included in the response. Each row corresponds to a single offer. The default amount of rows in the response is 1, and the maximum amount is 50. To have more than one offer listed in the response, please add the `rows` parameter with a number greater than 1. */
        rows: number;
        /** @description Number corresponding to the row from which the offer list will begin, used for pagination. Filters the list of offers by retrieving the offers starting from the row defined. The default value is 0, if the param is not included in the call. */
        start: number;
        /** @description This filter query can be used to filter offers by the criteria described below. It should be filled in by following the format: `fq={{criteriaName}}:{{criteriaValue}}`.
         *
         *     - **productId:** integer of the product ID
         *
         *     - **productName:** string of the product's name
         *
         *     - **skuId:** integer of the SKU ID
         *
         *     - **eanId:** string of the EAN ID
         *
         *     - **refId:** string of the Ref ID
         *
         *     - **categoryId:** integer of the category ID
         *
         *     - **brandId:** integer of the brand ID
         *
         *     - **sellerId:** string of the seller ID
         *
         *     - **sc:** integer of the sales channel's ID (trade policy in VTEX)
         *
         *     Ex: skuId:172
         *
         *     Ex: categoryId:13
         *
         *     Ex. productName:Product example-123 */
        fq: string;
        /** @description A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications. */
        productId: string;
        /** @description Marketplace's account name, the same one inputted on the endpoint's path. */
        an: string;
        /** @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. */
        sc: string;
        /** @description Filters sellers by their type, which can be regular seller (`1`) or whitelabel seller (`2`). */
        sellerType: number;
        /** @description When set as `true`, the list returned will be of sellers who have a VTEX store configured. When set as `false`, the list will be of sellers who do not have a VTEX store configured. */
        isVtex: boolean;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    PriceNotification: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
                /** @description A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications. */
                skuId: components["parameters"]["skuId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    InventoryNotification: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
                /** @description A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications. */
                skuId: components["parameters"]["skuId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Accepted */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    Getofferslist: {
        parameters: {
            query?: {
                /** @description Criteria used to sort the list of offers. For sorting values in ascending order, use `asc`, while for descending order, use `desc`. To fill in the field, insert the sorting criteria, followed by 'asc', or 'desc', separated by a comma. You can sort by the following criteria:
                 *
                 *     - **price:** sorts offers by price. *Ascending* goes from lowest to highest price, while *Descending* goes from highest to lowest price.
                 *
                 *     - **name:** sorts offers by *productName*, in alphabetical order. *Ascending* goes from *A* to *Z*, while *Descending* goes from *Z* to *A*.
                 *
                 *     - **availability:** availability in the sales channel (sc). The default value is 1.
                 *
                 *     Ex. sort=availability,desc
                 *
                 *     Ex. sort=name,asc
                 *
                 *     Ex. price,desc */
                sort?: components["parameters"]["sort"];
                /** @description Number of rows included in the response. Each row corresponds to a single offer. The default amount of rows in the response is 1, and the maximum amount is 50. To have more than one offer listed in the response, please add the `rows` parameter with a number greater than 1. */
                rows?: components["parameters"]["rows"];
                /** @description Number corresponding to the row from which the offer list will begin, used for pagination. Filters the list of offers by retrieving the offers starting from the row defined. The default value is 0, if the param is not included in the call. */
                start?: components["parameters"]["start"];
                /** @description This filter query can be used to filter offers by the criteria described below. It should be filled in by following the format: `fq={{criteriaName}}:{{criteriaValue}}`.
                 *
                 *     - **productId:** integer of the product ID
                 *
                 *     - **productName:** string of the product's name
                 *
                 *     - **skuId:** integer of the SKU ID
                 *
                 *     - **eanId:** string of the EAN ID
                 *
                 *     - **refId:** string of the Ref ID
                 *
                 *     - **categoryId:** integer of the category ID
                 *
                 *     - **brandId:** integer of the brand ID
                 *
                 *     - **sellerId:** string of the seller ID
                 *
                 *     - **sc:** integer of the sales channel's ID (trade policy in VTEX)
                 *
                 *     Ex: skuId:172
                 *
                 *     Ex: categoryId:13
                 *
                 *     Ex. productName:Product example-123 */
                fq?: components["parameters"]["fq"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
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
                    "application/json": components["schemas"]["responseGetMatchedOffersList"];
                };
            };
        };
    };
    GetSKUoffers: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications. */
                productId: components["parameters"]["productId"];
                /** @description A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications. */
                skuId: components["parameters"]["skuId"];
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
                    "application/json": components["schemas"]["responseGetMatchedOffersDataBySKU"];
                };
            };
        };
    };
    GetProductoffers: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications. */
                productId: components["parameters"]["productId"];
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
                    "application/json": components["schemas"]["responseGetMatchedOffersDataByProductId"];
                };
            };
        };
    };
    ListSellerLeads: {
        parameters: {
            query: {
                /** @description This field determines the limit used to retrieve the list of sellers. The response includes objects starting `from` the value inputted here. */
                offset: components["parameters"]["offset"];
                /** @description This field determines the limit used to retrieve the list of sellers. The response includes objects until the value inputted here.             */
                limit: components["parameters"]["limit"];
                /** @description Query param that enables results to be filter by whether the seller lead is already connected to the marketplace or not. */
                isConnected: components["parameters"]["isConnected"];
                /** @description Custom search field, that filters sellers invited by specific marketplace operator's  email. */
                search: components["parameters"]["search"];
                /** @description Seller Lead's status. Includes `accepted`, `connected` or `invited`. */
                status: components["parameters"]["status"];
                /** @description Query param determining how data will be ordered in the response, ordering by name or ID in descending our ascending order. Includes the following values:
                 *
                 *     `namesort` = desc/asc
                 *
                 *     `idsort` = desc/asc */
                orderBy: components["parameters"]["orderBy"];
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
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
    CreateSellerLead: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
            };
            cookie?: never;
        };
        /** @description This request requires detailed information about the seller, including their email, name, account name, sales channel, and other related details. Data should be in JSON format and follow the schema specified in 'CreateSellerLeadRequest'. A sample valid payload is provided for reference, including details such as address, contact information, and acceptance of legal terms. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateSellerLeadRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["responseCreateSellerLead"];
                };
            };
        };
    };
    RetrieveSellerLead: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
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
    AcceptSellerLead: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
            };
            cookie?: never;
        };
        /** @description This request requires information about the seller who is accepting the lead, including their email, name, account name, sales channel, and other relevant details. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcceptSellerLeadRequest"];
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
    RemoveSellerLead: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description ID of the Seller Lead invited to the marketplace. */
                sellerLeadId: components["parameters"]["sellerLeadId"];
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
    CreateSellerFromSellerLead: {
        parameters: {
            query?: {
                /** @description Enables to filter sellers that are active (`true`) or unactive (`false`) in the marketplace. */
                isActive?: components["parameters"]["isActive"];
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
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
    ResendSellerLeadRequest: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
            };
            cookie?: never;
        };
        /** @description This request requires information specifying the action to be taken, such as the status to be resent. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResendSellerLeadRequestRequest"];
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
    ListSellerCommissions: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
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
                    "application/json": components["schemas"]["responseSellerCommissionsID"][];
                };
            };
        };
    };
    BulkUpsertSellerCommissions: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BulkUpsertSellerCommissionsRequest"][];
            };
        };
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    RetrieveSellerCommissions: {
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
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace. */
                sellerId: string;
                /** @description ID of the category in which the comission was applied */
                categoryId: string;
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
                    "application/json": components["schemas"]["responseSellerCommissionsID"];
                };
            };
        };
    };
    RemoveSellerCommissions: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
                /** @description ID of the category in which the comission was applied */
                categoryId: components["parameters"]["categoryId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description No Content */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetListSellers: {
        parameters: {
            query?: {
                /** @description The start number of pagination, being `0` the default value. */
                from?: components["parameters"]["from"];
                /** @description The end number of pagination, being `100` the default value. */
                to?: components["parameters"]["to"];
                /** @description Search sellers by a keyword in `sellerId` or `sellerName`. */
                keyword?: components["parameters"]["keyword"];
                /** @description Filters sellers by the name of who made the integration, if VTEX or an external hub. The possible values for VTEX integrations are: `vtex-sellerportal`, `vtex-seller` and `vtex-franchise`. */
                integration?: components["parameters"]["integration"];
                /** @description Groups are defined by keywords that group sellers into categories defined by the marketplace. */
                "group "?: components["parameters"]["group"];
                /** @description Enables to filter sellers that are active (`true`) or unactive (`false`) in the marketplace. */
                isActive?: components["parameters"]["isActive"];
                /** @description The flag `isBetterScope` is used by the VTEX Checkout to simulate shopping carts, products, and shipping only in sellers with the field set as `true`, avoiding performance issues. When used as a query param, `isBetterScope` filters sellers that have the flag set as `true` or `false`. */
                isBetterScope?: components["parameters"]["isBetterScope"];
                /** @description When set as `true`, the list returned will be of sellers who have a VTEX store configured. When set as `false`, the list will be of sellers who do not have a VTEX store configured. */
                isVtex?: components["parameters"]["isVtex"];
                /** @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. */
                sc?: components["parameters"]["sc"];
                /** @description Filters sellers by their type, which can be regular seller (`1`) or whitelabel seller (`2`). */
                sellerType?: components["parameters"]["sellerType"];
                /** @description Criteria used to sort the list of offers. For sorting values in ascending order, use `asc`, while for descending order, use `desc`. To fill in the field, insert the sorting criteria, followed by 'asc', or 'desc', separated by a comma. You can sort by the following criteria:
                 *
                 *     - **price:** sorts offers by price. *Ascending* goes from lowest to highest price, while *Descending* goes from highest to lowest price.
                 *
                 *     - **name:** sorts offers by *productName*, in alphabetical order. *Ascending* goes from *A* to *Z*, while *Descending* goes from *Z* to *A*.
                 *
                 *     - **availability:** availability in the sales channel (sc). The default value is 1.
                 *
                 *     Ex. sort=availability,desc
                 *
                 *     Ex. sort=name,asc
                 *
                 *     Ex. price,desc */
                sort?: components["parameters"]["sort"];
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
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
    UpsertSellerRequest: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
            };
            cookie?: never;
        };
        /** @description Request to upsert seller information. */
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpsertSellerRequest"];
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
    GetRetrieveSeller: {
        parameters: {
            query?: {
                /** @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. */
                sc?: components["parameters"]["sc"];
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
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
    UpdateSeller: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
            };
            cookie?: never;
        };
        /** @description array of objects */
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description The action being performed, which is always going to be `replace`.
                     * @default replace
                     */
                    operation: string;
                    /**
                     * @description The path in which the value is being updated. It follows the standardized format `/{field}`, where `{field}` is the path's name.
                     * @default /field
                     */
                    path: string;
                    /**
                     * @description The value that is being updated. Notice that the type will depend on the path that is being updated.
                     * @default false
                     */
                    value: boolean;
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
    RetrieveMapping: {
        parameters: {
            query: {
                /** @description Marketplace's account name, the same one inputted on the endpoint's path. */
                an: components["parameters"]["an"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
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
                         * @description Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).
                         * @default 1
                         */
                        marketplaceSalesChannel: string;
                        /**
                         * @description Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.
                         * @default GCB
                         */
                        sellerChannel: string;
                    }[];
                };
            };
        };
    };
    UpsertMapping: {
        parameters: {
            query: {
                /** @description Marketplace's account name, the same one inputted on the endpoint's path. */
                an: components["parameters"]["an"];
            };
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": components["parameters"]["contentType"];
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: components["parameters"]["accept"];
            };
            path: {
                /** @description Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account. */
                accountName: components["parameters"]["accountName"];
                /** @description Environment to use. Used as part of the URL. */
                environment: components["parameters"]["environment"];
                /** @description A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built. */
                sellerId: components["parameters"]["sellerId"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example [
                 *       {
                 *         "marketplaceSalesChannel": 1,
                 *         "sellerChannel": "GCB"
                 *       },
                 *       {
                 *         "marketplaceSalesChannel": 2,
                 *         "sellerChannel": "GCB"
                 *       }
                 *     ] */
                "application/json": components["schemas"]["UpsertMappingRequest"][];
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
                         * @description Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).
                         * @default 1
                         */
                        marketplaceSalesChannel: string;
                        /**
                         * @description Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.
                         * @default GCB
                         */
                        sellerChannel: string;
                    }[];
                };
            };
        };
    };
}
