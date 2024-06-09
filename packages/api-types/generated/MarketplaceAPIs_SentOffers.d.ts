export interface paths {
    "/api/sent-offers/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Channel
         * @description >ℹ
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      The first step for connectors to integrate with [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors) is to create a channel, that represents the marketplace to where sellers will send their offers.
         *
         *     This endpoint creates a channel and the integration developers should call it once for each marketplace. The information about the marketplace sent in the request will be shown to sellers in their [Offer Management UI](https://help.vtex.com/en/tutorial/offers-listing--7MRb9S78aBdZjFGpbuffpE).
         *
         *     The `feedId` created by this call will apply to all sellers connected to the given channel, and will be necessary for the next step of the integration flow, which is to [activate feed](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds).
         *
         *     >ℹ
         *     > Offer Management is available for integrations with [Mercado Livre (Classic and Premium)](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm), and VTEX marketplaces. For more information, see [Offer Management Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).
         */
        post: operations["CreateChannel"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/feeds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Feeds
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), a feed is a list of information about seller's offers sent to a marketplace, and it is updated in real-time with content provided by the marketplace and VTEX modules.
         *
         *     Since a seller can have integrations with multiple marketplaces, numerous feeds can be associated with an account. This endpoint retrieves a list with all the feeds related to an account.
         */
        get: operations["ListFeeds"];
        put?: never;
        /**
         * Activate Feed
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *     In [Offer Management](https://developers.vtex.com/docs/guides/sent-offers-integration-guide-connectors), after [creating the channel](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/channels), the next step is to create a feed, which is a list updated nearly in real time with information about the seller's offers sent to the marketplace.
         *
         *     This endpoint allows the creation of a feed so that the seller's sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) is connected to the marketplace. Feeds are nearly real time updated with content provided by the marketplace and VTEX modules.
         *
         *     This endpoint should only be used once, to activate the channel and establish the connection. However, after a [feed is deactivated](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#delete-/api/sent-offers/feeds/-feedId-), in order to activate it again it will be necessary another call to this endpoint.The integration starts with the creation of the Feed. This endpoint is used to establish the connection between connector and seller through the Sent Offers.
         *
         *     The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when calling this endpoint. It follows the pattern `vendor.channel`.
         */
        post: operations["CreateFeed"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/feeds/{feedId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Feed by feedId
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), after you have [created the channel](https://developers.vtex.com/vtex-rest-api/reference/createchannel), the next step is to create a feed, which is a list of information about the seller's offers sent to the marketplace.
         *
         *     This endpoint retrieves information about a specific feed by searching through its `feedId`.
         */
        get: operations["RetrieveFeed"];
        /**
         * Update Feed
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), a feed is a list of information about seller's offers sent to a marketplace.
         *
         *     Once you have [created a feed](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/channels), this endpoint allows the seller to update the sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) and [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID used in the integration with the marketplace.
         */
        put: operations["UpdateFeed"];
        post?: never;
        /**
         * Deactivate Feed
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), a feed is a list of information about seller's offers sent to a marketplace. After [creating a feed](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds), it will be activated; and through this endpoint the seller can deactivate the feed.
         *
         *     When a feed is deactivated, all data related to the marketplace is removed from Offer Management UI. That includes the channels, offers, interactions, and errors.
         *
         *     Deactivating a feed does not mean deleting information, and the seller can restore the data by [activating the feed](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds) again.
         */
        delete: operations["DeleteFeed"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/feeds/{feedId}/skus/{skuId}/interactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Open Interaction
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), VTEX platform and marketplaces interact with offers through a medium called Interaction. For every action that happens to an offer, whether it is a status notification or a price update, the connector creates an Interaction about it.
         *
         *     This endpoint creates a new interaction for an SKU so that changes can be applied to an offer. The changes informed by interactions are related to: price, inventory, catalog and status.
         *
         *     Usually, interactions process a single type of change at a time, but it is possible to add data about catalog, price, and inventory simultaneously in the same interaction.
         */
        post: operations["CreateInteraction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/feeds/{feedId}/skus/{skuId}/interactions/{interactionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Interaction Data by interactionId
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), VTEX platform and marketplaces interact with offers through a medium called [interaction](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions).
         *
         *     A unique code called `interactionId` is used to identify each interaction. This endpoint retrieves information about an interaction, searching by its `interactionId`.
         *
         *     It also retrieves existing logs through the `log` field.
         */
        get: operations["RetrieveInteraction"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/feeds/{feedId}/skus/{skuId}/interactions/{interactionId}/close": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Close Interaction
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), VTEX platform and marketplaces interact with offers through a medium called [interaction](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions).
         *
         *     Once an interaction has fulfilled its initial goal and there are no more actions (or [logs](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions/-interactionId-/logs)) taking place within it, this endpoint closes an interaction.
         */
        post: operations["CloseInteraction"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/feeds/{feedId}/skus/{skuId}/interactions/{interactionId}/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Log
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), logs are the granular details of actions that happen within an [interaction](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions), and they are organized in a timeline. All of the micro-steps of an interaction are represented through logs; they are how interactions become visible in Offer Management UI.
         *
         *     This endpoint adds logs that take place within an interaction, which can be done after [creating an interaction](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions) so that there will be an `interactionId`.
         *
         *     `Errors`: When Offer Management, or the connectors, find an error that prevents sending or updating an offer to a channel, they should open a type failure log, and fill in its details through the `errors` attribute. The information provided should enable sellers to identify and fix errors on their offers.
         *
         *     The connectors should go through every possible validation, identify all errors, and only after that create the failure log, with the information in a single request.
         */
        post: operations["CreateLog"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/feeds/{feedId}/skus/{skuId}/interactions/{interactionId}/logs/{logId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Log Data by logId
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), logs are the granular details of actions that happen within an [interaction](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions), organized in a timeline. All interaction's micro-steps will be represented through logs; they are how interactions become visible in Offer Management UI.
         *
         *     A unique code called `logId` is used to identify every log created. This endpoint enables the retrieval of information about a log by searching through its `logId`.
         */
        get: operations["RetrieveLog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/search/interactions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Interactions and their Logs
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      In [Offer Management](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors), VTEX platform and marketplaces interact with offers through a medium called [interaction](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions). The granular details of actions and micro-steps that happen within an interaction's are called [logs](https://developers.vtex.com/docs/api-reference/marketplace-apis-offer-management#post-/api/sent-offers/feeds/-feedId-/skus/-skuId-/interactions/-interactionId-/logs).
         *
         *     This endpoint retrieves information about interactions and all logs within it. It allows filtering interactions by using the following query params: `channel`, `brand`, `category`, `scope`, `result`, `fromDate`, `toDate`. This endpoint also counts with the following pagination query params: `sort`, `from`, `to`.
         */
        get: operations["SearchInteractions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/search/errors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Errors
         * @description > ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      This endpoint provides the single source of truth of updated error codes in [Offer Management's](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors) configuration. It retrieves a list of all the error codes available at that moment.
         *
         *     The connector will retrieve all the error codes available directly on this API and use the codes that apply the most to their error scenarios. Then, the connector will implement these codes into every validation error inside their system.
         *
         *     This endpoint allows filtering errors by using the following query params: `channel`, `brand`, `category`, `errorCategory`. It also counts with the following pagination query params: `sort`, `from`, `to`, `q`.
         */
        get: operations["SearchErrors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/sent-offers/error-codes/{errorCodeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Error Code data by errorCodeId
         * @description >ℹ
         *     >
         *     >To evolve your experience in synchronizing and updating offers, the VTEX team is developing a new functionality that will replace the current module <b>Offer Management</b> . As a result, the Offer Management module will not receive new updates or maintenance.
         *     >
         *     >For connectors and marketplaces already integrated into the module, please contact the development team by email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
         *     >
         *     >For connectors interested in starting the integration, we ask you to wait for the release of the new module, as soon as it is available we will announce it to all customers through the [dev portal](https://developers.vtex.com/updates/release-notes) and [help VTEX](https://help.vtex.com/pt/en/announcements).
         *
         *      This endpoint retrieves specific information about an error code in [Offer Management's](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors) configuration. It provides the single source of truth of updated information about an error code through the `errorCodeId`.
         *
         *     The connector will retrieve all the error codes available directly on this API and use the codes that apply the most to their error scenarios. Then, the connector will implement these codes into every validation error inside their system.
         */
        get: operations["RetrieveErrorCode"];
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
         * CreateChannel
         * @example {
         *       "vendor": "vtex",
         *       "name": "Amazon",
         *       "logo": "https://marketplace.com/logos/logo.png"
         *     }
         */
        CreateChannel: {
            /**
             * @description Name of the connector making the integration.
             * @default vtex
             */
            vendor: string;
            /**
             * @description Name of the channel with which the integration is being established.
             * @default Amazon
             */
            name: string;
            /**
             * @description URL redirecting to the image file of the graphic symbol that identifies the marketplace. The file must in PNG format, and the image's dimension should be 300x300 pixels.
             * @default https://marketplace.com/logos/logo.png
             */
            logo: string;
        };
        /** CreateFeedRequest */
        CreateFeedRequest: {
            /**
             * @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when calling this endpoint. It follows the pattern `vendor.channel`.
             * @default vtex.amazon
             */
            id: string;
            /**
             * @description This attribute is created by the seller, in their VTEX store configuration.
             * @default MKP
             */
            affiliateId: string;
            /**
             * @description This attribute is created by the seller, in their VTEX store configuration.
             * @default 1
             */
            SalesChannels: string;
        };
        /** UpdateFeedRequest */
        UpdateFeedRequest: {
            /**
             * @description Corresponds to the 3-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code created by the seller.
             * @default MKP
             */
            affiliateId: string;
            /**
             * @description This attribute is created by the seller, in their VTEX store configuration.
             * @default 1
             */
            salesChannels: string;
        };
        /** CreateInteractionRequest */
        CreateInteractionRequest: {
            /** @default 2020-10-29 */
            startDate: string;
            /**
             * @description This attribute defines the entity responsible for the interaction. Possible values include `seller` or `channel`.
             * @default seller
             */
            source: string;
            /**
             * @description This attribute defines where the interaction originated from. Possible values include `catalog`, `price` or `inventory`. Interactions are usually used to deal with a single type of process at a time. However, there are situations in which data about catalog, price and inventory are added in the same interaction.
             * @default catalog
             */
            origin: string;
            /**
             * @description This field informs Sent Offers about an offer's lifecycle. When the integration has been recently installed, and producst are being sent for the first time, the value should be `setup`. If it's an update log, when the interaction is already up and running, the value should be `ongoing`.
             * @default setup
             */
            context: string;
        };
        /** CreateLogRequest */
        CreateLogRequest: {
            /**
             * @description In this field, connectors should describe relevant information about the log, so Sent Offers users can better understand the action taking place.
             * @default Insert your message
             */
            description: string;
            /**
             * @description Logs follow a chronological timeline, so make sure the date included corresponds to the correct order of logs.
             * @default 2020-03-22
             */
            date: string;
            /**
             * @description Connectors are responsible for attributing the correct type for each log. Therefore, be mindful of their correct usage.
             *
             *     `success`: only logs that conclude an interaction’s goal should be `“type”=”success”`.
             *
             *     `information`: logs that expose the actions of an update process, to provide visibility and contribute with more technical investigations. Information logs may include internal processes of a system (`agent` attribute), or calls between two systems.
             *
             *     `warning`: logs used in cases where the communication between two systems fails, and there are no actions that the user can take to fix it. They are usually cases where the connector should perform a retry, and provide visibility of what is being attempted again.
             *
             *     `failure`: logs noticed by the connector as errors that prevent an offer from being correctly sent and synced to a channel.
             * @default information
             */
            type: string;
            /**
             * @description Entity responsible for creating the entry.
             * @default broadcaster
             */
            agent: string;
            evidence: components["schemas"]["Evidence"];
            data: components["schemas"]["Data"];
            errors: components["schemas"]["Errors"];
        };
        /**
         * Evidence
         * @description cURL with the call that the connector has made for a VTEX system. It will provide the evidence needed to contextualize the entry, if the user needs to fully understand the process ocurred, or solve any errors.
         */
        Evidence: {
            /**
             * @description cURL with the request call that the connector has made for a VTEX system. It will provide the evidence needed to contextualize the entry, if the user needs to fully understand the process ocurred, or solve any errors.
             * @default GET https://www.vtex.com
             */
            request: string;
            /**
             * @description cURL with the response of the call that the connector has made for a VTEX system. It will provide the evidence needed to contextualize the entry, if the user needs to fully understand the process occurred, or solve any errors.
             * @default 200 Ok
             */
            response: string;
        };
        /**
         * Data
         * @description Data related to an offer, that will be updated or sent for the first time during setup.
         */
        Data: {
            /**
             * @description The ID used by the channel to identify this offer. Fill in this field if there are any updates in that ID.
             * @default 123456
             */
            externalOfferId: string;
            /**
             * @description Updated inventory level of that offer. Fill in this field if there are any updates in inventory.
             * @default 33
             */
            inventory: string;
            /**
             * @description The value the offer is being sold for, on the channel. Fill in this field if there are any updates in price.
             * @default 79.99
             */
            salesPrice: string;
            /**
             * @description The currency applied to the offer's `salesPrice`. The international currency code should be used as value for this field. Fill in this field if there are any updates in price.
             * @default BRL
             */
            currency: string;
            /**
             * @description The offer status can have the following values:
             *
             *     `Synced`:  when offers are successfully sent to a channel and are currently being synced between both entities.
             *
             *     `Sending`: intermediate state, when offers are still in the process of being sent to a channel. This status involves offers that are either sent for the first time to the marketplace, migrated to a new marketplace, or resent offers that were once deleted from a channel.
             *
             *     `Error`: when Sent Offers finds an error that prevents sending or updating an offer to a channel. Therefore this status requires manual correction.
             *
             *     `Disabled`: when the offer is discarded by the connector, by being inactive or not included in the trade policy,
             * @default disabled
             */
            status: string;
        };
        /**
         * Errors
         * @description When Sent Offers, or the connectors, find an error that prevents sending or updating an offer to a channel, they should open a `failure` log, and fill in its details through this `errors` attribute. From the information sent through this attribute, sellers can identify and fix errors on their offers. Connectors must identify all errors, and send them all in a single request. This means that connectors should go through every possible validation, and only after all errors are identified, create the failure log.
         */
        Errors: {
            /**
             * @description The Search Errors endpoint returns the updated list of error codes. It is the only source of truth about the codes and where they will be always updated. Fill in this field with the code corresponding to the error identified.
             * @default CTLG-001
             */
            code: string;
            /**
             * @description Connectors must extend the Sent Offers' codes by adding their own code IDs for mapping specific scenarios that apply to their own system. They can send those codes through a suffix ID added in an existing code. This way the Sent Offers knows which errors must be archived and which errors must be kept, being able to classify that given error and improve its solving action. These suffix IDs are totally managed by the connectors, which will require them a way to map each error inside their own code.
             * @default 284692
             */
            externalCode: string;
            /**
             * @description Short text summarizing the error identified. It will be the title that appears in the Sent Offers' UI.
             * @default Description includes HTML
             */
            title: string;
            /**
             * @description Short text giving more context about the error identified. It will be the description of the error mentioned in the title, also appearing in the Sent Offers' UI.
             * @default Netshoes does not allow HTML tags in an offer's description. Access the product in your Catalog to remove the HTML tag.
             */
            description: string;
            /**
             * @description Values allowed in this field are `catalog`, `price` and `inventory`.
             * @default [
             *       "catalog",
             *       "price"
             *     ]
             */
            closableOrigins: unknown[];
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
    CreateChannel: {
        parameters: {
            query: {
                /** @description Name of the seller's VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "vendor": "vtex",
                 *       "name": "Amazon",
                 *       "logo": "https://s3.amazonaws.com/Marketplace-Integration/Bridge/logos/madeiramadeira.png"
                 *     } */
                "application/json": components["schemas"]["CreateChannel"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @description The `feedId` attribute created by the connector that will identify sellers’ feeds with a channel. The `feedId` is always the same for the relation between sellers and channels, but connectors can create more than one `feedId` with a single marketplace, depending on their business rules. The `feedId` follows the standardized pattern `vendor.channel`.
                         * @default vtex.amazon
                         */
                        id: string;
                        /**
                         * @description Name of the connector making the integration.
                         * @default vtex
                         */
                        vendor: string;
                        /**
                         * @description Name of the channel with which the integration is being established.
                         * @default Amazon
                         */
                        name: string;
                        /**
                         * @description URL redirecting to the image file of the graphic symbol that identifies the marketplace. The file must in PNG format, and the image's dimension should be 300x300 pixels.
                         * @default https://marketplace.com/logos/logo.png
                         */
                        logo: string;
                    };
                };
            };
        };
    };
    ListFeeds: {
        parameters: {
            query: {
                /** @description Name of the Seller's VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
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
                        /** @description Seller's account name. */
                        account?: string;
                        /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when calling this endpoint. It follows the pattern `vendor.channel`. */
                        id?: string;
                        /** @description Corresponds to the 3-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code created by the seller. */
                        affiliateId?: string;
                        /** @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMVa)) used in the integration. */
                        salesChannel?: string;
                        /** @description Name of the marketplace, or channel, present in the feed. */
                        channelName?: string;
                        /** @description URL redirecting to the image file of the graphic symbol that identifies the marketplace. */
                        channelLogo?: string;
                    }[];
                };
            };
        };
    };
    CreateFeed: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "id": "{{feedId}}",
                 *       "affiliateId": "MKP",
                 *       "salesChannels": "5"
                 *     } */
                "application/json": components["schemas"]["CreateFeedRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Seller's account name. */
                        account?: string;
                        /** @description Channel's ID. */
                        id?: string;
                        /**
                         * @description Corresponds to the 3-digit [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) identification code created by the seller.
                         * @default MKP
                         */
                        affiliateId: string;
                        /** @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. */
                        salesChannel?: string;
                    };
                };
            };
        };
    };
    RetrieveFeed: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
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
                        /** @description Seller's account name. */
                        account?: string;
                        /** @description Channel's ID. */
                        id?: string;
                        /** @description This attribute is created by the seller, in their VTEX store configuration. */
                        affiliateId?: string;
                        /** @description Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created. */
                        salesChannel?: string;
                        /** @description Name of the channel where the offer was sent. */
                        channelName?: string;
                        /** @description Logo of the channel where the offer was sent. */
                        channelLogo?: string;
                    };
                };
            };
        };
    };
    UpdateFeed: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "affiliateId": "MKP",
                 *       "salesChannels": "5"
                 *     } */
                "application/json": components["schemas"]["UpdateFeedRequest"];
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
    DeleteFeed: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
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
    CreateInteraction: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
                /** @description This attribute is the SKU ID in the seller's perspective, registered in their VTEX Catalog. */
                skuId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "startDate": "2020-10-29",
                 *       "source": "seller",
                 *       "origin": "catalog",
                 *       "context": "setup"
                 *     } */
                "application/json": components["schemas"]["CreateInteractionRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Seller's account name. */
                        account?: string;
                        /** @description Attribute that identifies a feed between a seller and a channel. It follows a standardized pattern that will be used by connectors when establishing the connection between the two. */
                        feedId?: string;
                        /** @description SKU's unique identifier number. */
                        skuId?: string;
                        /** @description Connectors must extend the Sent Offers' codes by adding their own code IDs for mapping specific scenarios that apply to their own system. They can send those codes through a suffix ID added in an existing code. */
                        id?: string;
                        /** @description The day the interaction was created. */
                        startDate?: string;
                        /** @description Search interactions, filtering by result. Results can have the following values:
                         *
                         *     Success: When events close their lifecycle successfully, and generate updates on an offer in terms of price, inventory, or catalog.
                         *
                         *     Failure: When the connector has detected processes that have failed to be made  due to an error.
                         *
                         *     Notification: When there are processes with the connector that are worth mentioning, but there are no actual updates. Ex: discarded updates or sendings of an offer.
                         *
                         *     Processing: When an open interaction has not been concluded, and should still receive more steps. */
                        result?: string;
                        /** @description State, from the seller's address. */
                        state?: string;
                        /** @description This attribute defines the entity responsible for the interaction. */
                        source?: string;
                        /** @description where the interaction originated from. Possible values include `catalog`, `price` or `inventory`. */
                        origin?: string;
                        /** @description This field informs Sent Offers about an offer's lifecycle. */
                        context?: string;
                        /** @description History of events related to interactions. */
                        logs?: string[];
                    };
                };
            };
        };
    };
    RetrieveInteraction: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
                /** @description This attribute is the SKU ID in the seller's perspective, registered in their VTEX Catalog. */
                skuId: string;
                /** @description This attribute is the code used to identify an existing interaction. */
                interactionId: string;
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
                        /** @description Seller's account name. */
                        account?: string;
                        /** @description Attribute that identifies a feed between a seller and a channel. It follows a standardized pattern that will be used by connectors when establishing the connection between the two. */
                        feedId?: string;
                        /** @description SKU's unique identifier number. */
                        skuId?: string;
                        /** @description Connectors must extend the Sent Offers' codes by adding their own code IDs for mapping specific scenarios that apply to their own system. They can send those codes through a suffix ID added in an existing code. */
                        id?: string;
                        /** @description The day the interaction was created. */
                        startDate?: string;
                        /** @description Search interactions, filtering by result. Results can have the following values:
                         *
                         *     Success: When events close their lifecycle successfully, and generate updates on an offer in terms of price, inventory, or catalog.
                         *
                         *     Failure: When the connector has detected processes that have failed to be made  due to an error.
                         *
                         *     Notification: When there are processes with the connector that are worth mentioning, but there are no actual updates. Ex: discarded updates or sendings of an offer.
                         *
                         *     Processing: When an open interaction has not been concluded, and should still receive more steps. */
                        result?: string;
                        /** @description State, from the seller's address. */
                        state?: string;
                        /** @description This attribute defines the entity responsible for the interaction. */
                        source?: string;
                        /** @description where the interaction originated from. Possible values include `catalog`, `price` or `inventory`. */
                        origin?: string;
                        /** @description This field informs Sent Offers about an offer's lifecycle. */
                        context?: string;
                        /** @description History of events related to interactions. */
                        logs?: string[];
                    };
                };
            };
        };
    };
    CloseInteraction: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
                /** @description This attribute is the SKU ID in the seller's perspective, registered in their VTEX Catalog. */
                skuId: string;
                /** @description This attribute is the code used to identify an existing interaction. */
                interactionId: string;
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
    CreateLog: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
                /** @description This attribute is the SKU ID in the seller's perspective, registered in their VTEX Catalog. */
                skuId: string;
                /** @description This attribute is the code used to identify an existing interaction. */
                interactionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "description": "Another log message with some information that is going to be relevant to our users",
                 *       "date": "2020-03-22",
                 *       "type": "information",
                 *       "agent": "broadcaster",
                 *       "evidence": {
                 *         "request": "Explanation 1",
                 *         "response": "Explanation 2"
                 *       },
                 *       "data": {
                 *         "externalOfferId": "123456",
                 *         "inventory": "33",
                 *         "salesPrice": "79.99",
                 *         "currency": "BRL",
                 *         "status": "disabled"
                 *       },
                 *       "errors": {
                 *         "code": "CTLG-001",
                 *         "externalCode": "284692",
                 *         "title": "Description includes HTML",
                 *         "description": "Netshoes does not allow HTML tags in an offer's description. Access the product in your Catalog to remove the HTML tag.",
                 *         "closableOrigins": [
                 *           "catalog",
                 *           "price"
                 *         ]
                 *       }
                 *     } */
                "application/json": components["schemas"]["CreateLogRequest"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json; charset=utf-8": {
                        /** @description Connectors must extend the Sent Offers' codes by adding their own code IDs for mapping specific scenarios that apply to their own system. They can send those codes through a suffix ID added in an existing code. */
                        id?: string;
                        /** @description Log's description. */
                        description?: string;
                        /** @description Date when the log was created. */
                        date?: string;
                        /** @description Entity responsible for creating the entry. */
                        agent?: string;
                        /** @description cURL with the call that the connector has made for a VTEX system. */
                        evidence?: {
                            /** @description cURL with the request call that the connector has made for a VTEX system. It will provide the evidence needed to contextualize the entry, if the user needs to fully understand the process ocurred, or solve any errors. */
                            request?: string;
                            /** @description cURL with the response of the call that the connector has made for a VTEX system. It will provide the evidence needed to contextualize the entry, if the user needs to fully understand the process occurred, or solve any errors. */
                            response?: string;
                        };
                        /** @description Type of log. */
                        type?: string;
                    };
                };
            };
        };
    };
    RetrieveLog: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description The `feedId` attribute that identifies a feed between a seller and a channel, follows a standardized pattern that will be used by connectors when establishing the connection between the two. It follows the pattern `vendor.channel`. */
                feedId: string;
                /** @description This attribute is the SKU ID in the seller's perspective, registered in their VTEX Catalog. */
                skuId: string;
                /** @description This attribute is the code used to identify an existing interaction. */
                interactionId: string;
                /** @description A log's identifying code. This attribute is obtained from the Open Log API, or from the response of a Search Interactions API. */
                logId: string;
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
                        /** @description Connectors must extend the Sent Offers' codes by adding their own code IDs for mapping specific scenarios that apply to their own system. They can send those codes through a suffix ID added in an existing code. */
                        id?: string;
                        /** @description Log description */
                        description?: string;
                        /** @description Date when the log was created. */
                        date?: string;
                        /** @description Entity responsible for creating the entry. */
                        agent?: string;
                        /** @description cURL with the call that the connector has made for a VTEX system. */
                        evidence?: Record<string, never>;
                        errors?: {
                            code?: string;
                            externalCode?: string;
                            title?: string;
                            description?: string;
                            closableOrigins?: string[];
                        }[];
                        /** @description Type of log. */
                        type?: string;
                    };
                };
            };
        };
    };
    SearchInteractions: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as a query param. */
                an: string;
                /** @description Customizable field for searching interactions. */
                q: string;
                /** @description Search interactions, filtering by channel. */
                channels?: string;
                /** @description Search interactions, filtering by brand. */
                brand?: string;
                /** @description Search interactions, filtering by category. */
                category?: string;
                /** @description Search interactions, filtering by scope. */
                scope?: string;
                /** @description Search interactions, filtering by result. Results can have the following values:
                 *
                 *     Success: When events close their lifecycle successfully, and generate updates on an offer in terms of price, inventory, or catalog.
                 *
                 *     Failure: When the connector has detected processes that have failed to be made  due to an error.
                 *
                 *     Notification: When there are processes with the connector that are worth mentioning, but there are no actual updates. Ex: discarded updates or sendings of an offer.
                 *
                 *     Processing:  When an open interaction has not been concluded, and should still receive more steps. This is a transitory state, considering that when an interaction is closed, it can only end with `success`, `failure` or `notification` as its result. */
                result?: string;
                /** @description Search interactions filtering by sort. */
                sort: string;
                /** @description Search interactions from a given point. */
                from: string;
                /** @description Search interactions until a given point. */
                to: string;
                /** @description Search interactions from a specific date. */
                fromDate: string;
                /** @description Search interactions until a given date. */
                toDate: string;
            };
            header?: never;
            path: {
                /** @description Environment to use. Used as part of the URL. */
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
                content?: never;
            };
        };
    };
    SearchErrors: {
        parameters: {
            query: {
                /** @description Name of the VTEX account. Used as query param. */
                an: string;
                /** @description Customizable field for searching error codes. */
                q: string;
                /** @description Search errors filtering by channels. */
                channels: string;
                /** @description Search errors filtering by brand. */
                brand: string;
                /** @description Search errors filtering by category. */
                category: string;
                /** @description Search errors filtering by error category. */
                errorCategory: string;
                /** @description Pagination that returns a range of ordered error codes. */
                sort: string;
                /** @description Pagination that returns error codes from a given point. */
                from: string;
                /** @description Pagination that returns error codes until a given point. */
                to: string;
            };
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
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
                content?: never;
            };
        };
    };
    RetrieveErrorCode: {
        parameters: {
            query?: never;
            header: {
                /** @description Describes the type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path: {
                /** @description Environment to use. Used as part of the URL. */
                environment: string;
                /** @description Id for the error code chosen. */
                errorCodeId: string;
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
                        id?: string;
                        type?: string;
                        description?: string;
                        solutionText?: string;
                        solutionLink?: string;
                    }[];
                };
            };
        };
    };
}
