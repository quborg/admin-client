declare namespace SCHEMA {
  interface User {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    token: string;
    avatar: Image;
    role: Role;
    public: boolean;
    active: boolean;
    verified: boolean;
  }

  interface Product {
    _id: string;
    title: string;
    SKU: string;
    description: string;
    images: [Image];
    price: number;
    salePrice: number;
    unitPricing: string;
    published: boolean;
    availability: ProductAvailability;
    availabilityDate: string;
    category: Category;
    tags: [Tag];
    colors: [Color];
    createdAt: string;
    updatedAt: string;
  }

  interface Category {
    _id: string;
    name: string;
    type: CategoryType;
  }

  interface Tag {
    _id: string;
    name: string;
  }

  interface Color {
    _id: string;
    name: string;
    code: string;
  }

  interface Order {
    userId: string;
    items: [ItemShipment];
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    acknowledged: boolean;
    customerInvoiceEmail: string;
    billingAddress: OrderAddress;
    deliveryDetails: {
      address: OrderAddress;
      phoneNumber: string;
    };
    shipments: [Shipment];
    shippingCost: Price;
    shippingCostTax: Price;
    promotions: [Promotion];
    refund: {
      amount: Price;
      reason: RefundReason;
      reasonText: string;
      createdAt: string;
      updatedAt: string;
    };
    netPriceAmount: Price;
    netTaxAmount: Price;
    pickup: Pickup;
    annotations: [
      {
        key: string;
        value: string;
      }
    ];
    createdAt: string;
    updatedAt: string;
  }

  interface OrderAddress {
    recipientName: string;
    streetAddress: [string];
    locality: string;
    region: string;
    country: string;
    postalCode: string;
    isPostOfficeBox: boolean;
    fullAddress: [string];
  }

  interface Shipment {
    carrier: Carrier;
    deliveryDate: string;
    items: [ItemShipment];
    trackingId: string;
    shipmentGroupId: string;
    status: ShipmentStatus;
    deliveryDetails: {
      ScheduledDate: string;
      CarrierPhoneNumber: string;
    };
  }

  interface ItemShipment {
    productId: string;
    quantity: number;
  }

  interface Promotion {
    _id: string;
    type: PromotionType;
    subtype: PromotionSubType;
    title: string;
    shortTitle: string;
    priceValue: Price;
    applicableItems: [PromotionApplicableItems];
    appliedItems: [Product];
    startTime: string;
    endTime: string;
  }

  interface Pickup {
    _id: string;
    address: OrderAddress;
    collectors: [
      {
        name: string;
        phoneNumber: string;
      }
    ];
    type: PickupType;
  }
}
