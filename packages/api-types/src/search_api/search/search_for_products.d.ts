export type SearchForProducts = {
  Response: Response;
};

export type Response = Product[];

type Product = {
  productId: string;
  productName: string;
  brand: string;
  brandId: number;
  brandImageUrl: unknown;
  linkText: string;
  productReference: string;
  productReferenceCode: unknown;
  categoryId: string;
  productTitle: string;
  metaTagDescription: string;
  releaseDate: string;
  clusterHighlights: unknown;
  productClusters: ProductClusters;
  searchableClusters: SearchableClusters;
  categories: string[];
  categoriesIds: string[];
  link: string;
  NCM: string[];
  officialstoreid_meli: string[];
  IBU: string[];
  allSpecifications: string[];
  allSpecificationsGroups: string[];
  description: string;
  items: Item[];
};

type ProductClusters = Record<string, string>;

type SearchableClusters = Record<string, string>;

type Item = {
  itemId: string;
  name: string;
  nameComplete: string;
  complementName: string;
  ean: string;
  referenceId: ReferenceId[];
  measurementUnit: string;
  unitMultiplier: number;
  modalType: unknown;
  isKit: boolean;
  images: Image[];
  sellers: Seller[];
  Videos: unknown[];
  estimatedDateArrival: unknown;
};

type ReferenceId = {
  Key: string;
  Value: string;
};

type Image = {
  imageId: string;
  imageLabel: unknown;
  imageTag: string;
  imageUrl: string;
  imageText: string;
  imageLastModified: string;
};

type Seller = {
  sellerId: string;
  sellerName: string;
  addToCartLink: string;
  sellerDefault: boolean;
  commertialOffer: CommertialOffer;
};

type CommertialOffer = {
  DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion;
  Installments: Installment[];
  DiscountHighLight: unknown[];
  GiftSkuIds: unknown[];
  Teasers: unknown[];
  PromotionTeasers: unknown[];
  BuyTogether: unknown[];
  ItemMetadataAttachment: unknown[];
  Price: number;
  ListPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil?: string;
  AvailableQuantity: number;
  IsAvailable: boolean;
  Tax: number;
  DeliverySlaSamples: DeliverySlaSample[];
  GetInfoErrorMessage?: string;
  CacheVersionUsedToCallCheckout: string;
  PaymentOptions?: PaymentOptions;
};

type DeliverySlaSamplesPerRegion = Record<string, N0>;

type N0 = {
  DeliverySlaPerTypes: unknown[];
  Region: unknown;
};

type Installment = {
  Value: number;
  InterestRate: number;
  TotalValuePlusInterestRate: number;
  NumberOfInstallments: number;
  PaymentSystemName: string;
  PaymentSystemGroupName: string;
  Name: string;
};

type DeliverySlaSample = {
  DeliverySlaPerTypes: unknown[];
  Region: unknown;
};

type PaymentOptions = {
  installmentOptions: InstallmentOption[];
  paymentSystems: PaymentSystem[];
  payments: unknown[];
  giftCards: unknown[];
  giftCardMessages: unknown[];
  availableAccounts: unknown[];
  availableTokens: unknown[];
};

type InstallmentOption = {
  paymentSystem: string;
  bin: unknown;
  paymentName: string;
  paymentGroupName: string;
  value: number;
  installments: Installment2[];
};

type Installment2 = {
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
  sellerMerchantInstallments: SellerMerchantInstallment[];
};

type SellerMerchantInstallment = {
  id: string;
  count: number;
  hasInterestRate: boolean;
  interestRate: number;
  value: number;
  total: number;
};

type PaymentSystem = {
  id: number;
  name: string;
  groupName: string;
  validator: unknown;
  stringId: string;
  template: string;
  requiresDocument: boolean;
  isCustom: boolean;
  description: unknown;
  requiresAuthentication: boolean;
  dueDate: string;
  availablePayments: unknown;
};
