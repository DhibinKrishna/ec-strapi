import type { Schema, Struct } from '@strapi/strapi';

export interface PricingPrice extends Struct.ComponentSchema {
  collectionName: 'components_pricing_prices';
  info: {
    displayName: 'Price';
    icon: 'priceTag';
  };
  attributes: {
    basePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    discountPercentage: Schema.Attribute.Integer & Schema.Attribute.Required;
    isOnSale: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    maxQuantity: Schema.Attribute.Integer & Schema.Attribute.Required;
    minQuantity: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    priceEndDate: Schema.Attribute.Date & Schema.Attribute.Required;
    priceStartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    salePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface PricingPriceHistory extends Struct.ComponentSchema {
  collectionName: 'components_pricing_price_histories';
  info: {
    displayName: 'PriceHistory';
    icon: 'clock';
  };
  attributes: {
    basePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    discountPercentage: Schema.Attribute.Integer & Schema.Attribute.Required;
    priceEndDate: Schema.Attribute.Date & Schema.Attribute.Required;
    priceStartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    salePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface PropertyPropertyItem extends Struct.ComponentSchema {
  collectionName: 'components_property_property_items';
  info: {
    displayName: 'PropertyItem';
    icon: 'check';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PropertyPropertySection extends Struct.ComponentSchema {
  collectionName: 'components_property_property_sections';
  info: {
    displayName: 'PropertySection';
    icon: 'arrowRight';
  };
  attributes: {
    display: Schema.Attribute.String & Schema.Attribute.Required;
    key: Schema.Attribute.String & Schema.Attribute.Required;
    properties: Schema.Attribute.Component<'property.property-item', true> &
      Schema.Attribute.Required;
  };
}

export interface VariantVariantAttributes extends Struct.ComponentSchema {
  collectionName: 'components_variant_variant_attributes';
  info: {
    displayName: 'VariantAttributes';
    icon: 'stack';
  };
  attributes: {
    display: Schema.Attribute.String & Schema.Attribute.Required;
    key: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VariantVariantOptions extends Struct.ComponentSchema {
  collectionName: 'components_variant_variant_options';
  info: {
    displayName: 'VariantOptions';
    icon: 'dashboard';
  };
  attributes: {
    display: Schema.Attribute.String & Schema.Attribute.Required;
    key: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'variant.variant-attributes', true> &
      Schema.Attribute.Required;
  };
}

export interface VariantVariantProperties extends Struct.ComponentSchema {
  collectionName: 'components_variant_variant_properties';
  info: {
    displayName: 'VariantProperties';
    icon: 'check';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pricing.price': PricingPrice;
      'pricing.price-history': PricingPriceHistory;
      'property.property-item': PropertyPropertyItem;
      'property.property-section': PropertyPropertySection;
      'variant.variant-attributes': VariantVariantAttributes;
      'variant.variant-options': VariantVariantOptions;
      'variant.variant-properties': VariantVariantProperties;
    }
  }
}
