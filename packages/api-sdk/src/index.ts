import createClient from "openapi-fetch"
import { 
    AntifraudProviderAPI,
    BuyerOrganizations,
    CatalogAPI,
    CatalogAPISellerPortal,
    CheckoutAPI,
    CustomerCreditAPI,
    DataSubjectRights,
    GiftCardHubAPI,
    GiftcardAPI,
    GiftcardProviderProtocol,
    HeadlessCMSAPI,
    IntelligentSearchAPI,
    IntelligentSearchEventsAPI_Headless,
    LegacyCMSPortalAPI,
    LicenseManagerAPI,
    LogisticsAPI,
    MarketplaceAPIs,
    MarketplaceAPIs_SentOffers,
    MarketplaceAPIs_Suggestions,
    MarketplaceProtocol_ExternalMarketplaceMapper,
    MarketplaceProtocol_ExternalMarketplaceOrders,
    MarketplaceProtocol_ExternalSellerFulfillment,
    MarketplaceProtocol_ExternalSellerMarketplace,
    MasterDataAPI_v10_2,
    MasterDataAPI_v2,
    MessageCenterAPI,
    OrdersAPI,
    OrdersAPI_PIIversion,
    PaymentProviderProtocol,
    PaymentsGatewayAPI,
    PoliciesSystemAPI,
    PricingAPI,
    PricingHub,
    ProfileSystem,
    PromotionsAndTaxesAPI,
    PromotionsAndTaxesAPI_v2,
    Recurrence_v1_deprecated,
    ReviewsandRatingsAPI,
    SKUBindingsAPI,
    SearchAPI,
    SessionManagerAPI,
    SubscriptionsAPI_v2,
    SubscriptionsAPI_v3,
    Tracking,
    VTEXDoAPI,
    VTEXIDAPI,
  } from "@vtex-miss/api-types"

export const antifraudProviderClient = createClient<AntifraudProviderAPI.paths>()
export const buyerOrganizationsClient = createClient<BuyerOrganizations.paths>()
export const catalogClient = createClient<CatalogAPI.paths>()
export const catalogAPISellerPortalClient = createClient<CatalogAPISellerPortal.paths>()
export const checkoutClient = createClient<CheckoutAPI.paths>()
export const customerCreditClient = createClient<CustomerCreditAPI.paths>()
export const dataSubjectRightsClient = createClient<DataSubjectRights.paths>()
export const giftCardHubClient = createClient<GiftCardHubAPI.paths>()
export const giftcardClient = createClient<GiftcardAPI.paths>()
export const giftcardProviderProtocolClient = createClient<GiftcardProviderProtocol.paths>()
export const headlessCMSClient = createClient<HeadlessCMSAPI.paths>()
export const intelligentSearchClient = createClient<IntelligentSearchAPI.paths>()
export const intelligentSearchEventsClient = createClient<IntelligentSearchEventsAPI_Headless.paths>()
export const legacyCMSPortalClient = createClient<LegacyCMSPortalAPI.paths>()
export const licenseManagerClient = createClient<LicenseManagerAPI.paths>()
export const logisticsClient = createClient<LogisticsAPI.paths>()
export const marketplaceClient = createClient<MarketplaceAPIs.paths>()
export const marketplaceSentOffersClient = createClient<MarketplaceAPIs_SentOffers.paths>()
export const marketplaceSuggestionsClient = createClient<MarketplaceAPIs_Suggestions.paths>()
export const marketplaceExternalMarketplaceMapperClient = createClient<MarketplaceProtocol_ExternalMarketplaceMapper.paths>()
export const marketplaceExternalMarketplaceOrdersClient = createClient<MarketplaceProtocol_ExternalMarketplaceOrders.paths>()
export const marketplaceExternalSellerFulfillmentClient = createClient<MarketplaceProtocol_ExternalSellerFulfillment.paths>()
export const marketplaceExternalSellerMarketplaceClient = createClient<MarketplaceProtocol_ExternalSellerMarketplace.paths>()
export const masterData_v10_2Client = createClient<MasterDataAPI_v10_2.paths>()
export const masterData_v2Client = createClient<MasterDataAPI_v2.paths>()
export const messageCenterClient = createClient<MessageCenterAPI.paths>()
export const ordersClient = createClient<OrdersAPI.paths>()
export const ordersPIIversionClient = createClient<OrdersAPI_PIIversion.paths>()
export const paymentProviderProtocolClient = createClient<PaymentProviderProtocol.paths>()
export const paymentsGatewayClient = createClient<PaymentsGatewayAPI.paths>()
export const policiesSystemClient = createClient<PoliciesSystemAPI.paths>()
export const pricingClient = createClient<PricingAPI.paths>()
export const pricingHubClient = createClient<PricingHub.paths>()
export const profileSystemClient = createClient<ProfileSystem.paths>()
export const promotionsAndTaxesClient = createClient<PromotionsAndTaxesAPI.paths>()
export const promotionsAndTaxes_v2Client = createClient<PromotionsAndTaxesAPI_v2.paths>()
export const recurrence_v1_deprecatedClient = createClient<Recurrence_v1_deprecated.paths>()
export const reviewsandRatingsClient = createClient<ReviewsandRatingsAPI.paths>()
export const sKUBindingsClient = createClient<SKUBindingsAPI.paths>()
export const searchClient = createClient<SearchAPI.paths>()
export const sessionManagerClient = createClient<SessionManagerAPI.paths>()
export const subscriptions_v2Client = createClient<SubscriptionsAPI_v2.paths>()
export const subscriptions_v3Client = createClient<SubscriptionsAPI_v3.paths>()
export const trackingClient = createClient<Tracking.paths>()
export const vTEXDoClient = createClient<VTEXDoAPI.paths>()
export const vTEXIDClient = createClient<VTEXIDAPI.paths>()

