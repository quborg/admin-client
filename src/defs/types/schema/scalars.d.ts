declare namespace SCHEMA {
  type ReactiveAction = {
    _id?: string;
    type?: 'delete' | 'update' | string;
  };

  type Image = {
    path: string;
    filename: string;
    mimetype: string;
  };

  enum CurrencyType {
    USD = 'USD',
    EUR = 'EUR',
    JPY = 'JPY',
    GBP = 'GBP',
    TRY = 'TRY',
    CNY = 'CNY',
  }

  type Price = {
    value: string;
    currency: CurrencyType;
  };

  enum Role {
    ADMIN = 'ADMIN',
    MODERATOR = 'MODERATOR',
    REGULAR = 'REGULAR',
    ANONYM = 'ANONYM',
  }

  enum ProductAvailability {
    IN_STOCK = 'IN_STOCK',
    OUT_OF_STOCK = 'OUT_OF_STOCK',
    PRE_ORDER = 'PRE_ORDER',
    BACK_ORDER = 'BACK_ORDER',
  }

  enum CategoryType {
    ROOT = 'ROOT',
    CHILD = 'CHILD',
  }

  enum OrderStatus {
    CANCELED = 'CANCELED',
    DELIVERED = 'DELIVERED',
    INPROGRESS = 'INPROGRESS',
    PARTIALLY_DELIVERED = 'PARTIALLY_DELIVERED',
    PARTIALLY_RETURNED = 'PARTIALLY_RETURNED',
    PARTIALLY_SHIPPED = 'PARTIALLY_SHIPPED',
    PENDING_SHIPMENT = 'PENDING_SHIPMENT',
    RETURNED = 'RETURNED',
    SHIPPED = 'SHIPPED',
  }

  enum PaymentStatus {
    PAYMENT_CAPTURED = 'PAYMENT_CAPTURED',
    PAYMENT_REJECTED = 'PAYMENT_REJECTED',
    PAYMENT_SECURED = 'PAYMENT_SECURED',
    PENDING_AUTHORIZATION = 'PENDING_AUTHORIZATION',
  }

  enum RefundReason {
    ADJUSTMENT = 'ADJUSTMENT',
    AUTO_POST_INTERNAL = 'AUTO_POST_INTERNAL',
    AUTO_POST_INVALID_BILLING_ADDRESS = 'AUTO_POST_INVALID_BILLING_ADDRESS',
    AUTO_POST_NO_INVENTORY = 'AUTO_POST_NO_INVENTORY',
    AUTO_POST_PRICE_ERROR = 'AUTO_POST_PRICE_ERROR',
    AUTO_POST_UNDELIVERABLE_SHIPPING_ADDRESS = 'AUTO_POST_UNDELIVERABLE_SHIPPING_ADDRESS',
    COUPON_ABUSE = 'COUPON_ABUSE',
    COURTESY_ADJUSTMENT = 'COURTESY_ADJUSTMENT',
    CUSTOMER_CANCELED = 'CUSTOMER_CANCELED',
    CUSTOMER_DISCRETIONARY_RETURN = 'CUSTOMER_DISCRETIONARY_RETURN',
    CUSTOMER_INITIATED_MERCHANT_CANCEL = 'CUSTOMER_INITIATED_MERCHANT_CANCEL',
    CUSTOMER_SUPPORT_REQUESTED = 'CUSTOMER_SUPPORT_REQUESTED',
    DELIVERED_LATE_BY_CARRIER = 'DELIVERED_LATE_BY_CARRIER',
    DELIVERED_TOO_LATE = 'DELIVERED_TOO_LATE',
    EXPIRED_ITEM = 'EXPIRED_ITEM',
    FAIL_TO_PUSH_ORDER_SERVER_ERROR = 'FAIL_TO_PUSH_ORDER_SERVER_ERROR',
    FAIL_TO_PUSH_ORDER_MERCHANT_ERROR = 'FAIL_TO_PUSH_ORDER_MERCHANT_ERROR',
    FAIL_TO_PUSH_ORDER_MERCHANT_FULFILLMENT_ERROR = 'FAIL_TO_PUSH_ORDER_MERCHANT_FULFILLMENT_ERROR',
    FAIL_TO_PUSH_ORDER_TO_MERCHANT = 'FAIL_TO_PUSH_ORDER_TO_MERCHANT',
    FAIL_TO_PUSH_ORDER_TO_MERCHANT_OUT_OF_STOCK = 'FAIL_TO_PUSH_ORDER_TO_MERCHANT_OUT_OF_STOCK',
    FEE_ADJUSTMENT = 'FEE_ADJUSTMENT',
    INVALID_COUPON = 'INVALID_COUPON',
    LATE_SHIPMENT_CREDIT = 'LATE_SHIPMENT_CREDIT',
    MALFORMED_SHIPPING_ADDRESS = 'MALFORMED_SHIPPING_ADDRESS',
    MERCHANT_DID_NOT_SHIP_ON_TIME = 'MERCHANT_DID_NOT_SHIP_ON_TIME',
    NO_INVENTORY = 'NO_INVENTORY',
    ORDER_TIMEOUT = 'ORDER_TIMEOUT',
    OTHER = 'OTHER',
    PAYMENT_ABUSE = 'PAYMENT_ABUSE',
    PAYMENT_DECLINED = 'PAYMENT_DECLINED',
    PRICE_ADJUSTMENT = 'PRICE_ADJUSTMENT',
    PRICE_ERROR = 'PRICE_ERROR',
    PRODUCT_ARRIVED_DAMAGED = 'PRODUCT_ARRIVED_DAMAGED',
    PRODUCT_NOT_AS_DESCRIBED = 'PRODUCT_NOT_AS_DESCRIBED',
    PROMO_REAL_LOCATION = 'PROMO_REAL_LOCATION',
    QUALITY_NOT_AS_EXPECTED = 'QUALITY_NOT_AS_EXPECTED',
    RETURN_REFUND_ABUSE = 'RETURN_REFUND_ABUSE',
    SHIPPING_COST_ADJUSTMENT = 'SHIPPING_COST_ADJUSTMENT',
    SHIPPING_PRICE_ERROR = 'SHIPPING_PRICE_ERROR',
    TAX_ADJUSTMENT = 'TAX_ADJUSTMENT',
    TAX_ERROR = 'TAX_ERROR',
    UNDELIVERABLE_SHIPPING_ADDRESS = 'UNDELIVERABLE_SHIPPING_ADDRESS',
    UNSUPPORTED_PO_BOX_ADDRESS = 'UNSUPPORTED_PO_BOX_ADDRESS',
    WRONG_PRODUCT_SHIPPED = 'WRONG_PRODUCT_SHIPPED',
  }

  enum ShipmentStatus {
    DELIVERED = 'DELIVERED',
    READY_FOR_PICKUP = 'READY_FOR_PICKUP',
    SHIPPED = 'SHIPPED',
    UNDELIVERABLE = 'UNDELIVERABLE',
  }

  enum Carrier {
    SHOP_CARRIER = 'SHOP_CARRIER',
    UPS = 'UPS',
    DHL = 'DHL',
    FEDEX = 'FEDEX',
    CHRONOPOST = 'CHRONOPOST',
    ARAMEX = 'ARAMEX',
  }

  enum PromotionType {
    PRODUCT = 'PRODUCT',
    SHIPPING = 'SHIPPING',
  }

  enum PromotionSubType {
    MONEY_OFF = 'MONEY_OFF',
    PERCENT_OFF = 'PERCENT_OFF',
    FREE_GIFT = 'FREE_GIFT',
    FREE_SHIPPING = 'FREE_SHIPPING',
    SALE_PRICE = 'SALE_PRICE',
  }

  enum PromotionApplicableItems {
    PRODUCT = 'PRODUCT',
    CATEGORY = 'CATEGORY',
    TAG = 'TAG',
  }

  enum PickupType {
    STORE = 'STORE',
    LOCKER = 'LOCKER',
    THIRD_PARTY = 'THIRD_PARTY',
  }
}
