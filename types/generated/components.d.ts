import type { Schema, Struct } from '@strapi/strapi';

export interface PricingPrice extends Struct.ComponentSchema {
  collectionName: 'components_pricing_prices';
  info: {
    displayName: 'Price';
    icon: 'priceTag';
  };
  attributes: {
    basePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    discountedPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    discountPercentage: Schema.Attribute.Integer & Schema.Attribute.Required;
    priceEndDate: Schema.Attribute.Date & Schema.Attribute.Required;
    priceStartDate: Schema.Attribute.Date & Schema.Attribute.Required;
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

export interface SelfVariantOption extends Struct.ComponentSchema {
  collectionName: 'components_self_variant_options';
  info: {
    displayName: 'Option';
    icon: 'bulletList';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SelfVariantSelfVariant extends Struct.ComponentSchema {
  collectionName: 'components_self_variant_self_variants';
  info: {
    displayName: 'SelfVariant';
    icon: 'apps';
  };
  attributes: {
    defaultOption: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    display: Schema.Attribute.String & Schema.Attribute.Required;
    key: Schema.Attribute.String & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'self-variant.option', true> &
      Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['Required', 'Optional']> &
      Schema.Attribute.Required;
    unit: Schema.Attribute.Component<'self-variant.unit', false>;
  };
}

export interface SelfVariantSelfVariantPricing extends Struct.ComponentSchema {
  collectionName: 'components_self_variant_self_variant_pricings';
  info: {
    displayName: 'SelfVariantPricing';
    icon: 'check';
  };
  attributes: {
    key: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SelfVariantUnit extends Struct.ComponentSchema {
  collectionName: 'components_self_variant_units';
  info: {
    displayName: 'Unit';
    icon: 'arrowDown';
  };
  attributes: {
    display: Schema.Attribute.String & Schema.Attribute.Required;
    key: Schema.Attribute.String & Schema.Attribute.Required;
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
      'self-variant.option': SelfVariantOption;
      'self-variant.self-variant': SelfVariantSelfVariant;
      'self-variant.self-variant-pricing': SelfVariantSelfVariantPricing;
      'self-variant.unit': SelfVariantUnit;
      'variant.variant-attributes': VariantVariantAttributes;
      'variant.variant-options': VariantVariantOptions;
      'variant.variant-properties': VariantVariantProperties;
    }
  }
}
