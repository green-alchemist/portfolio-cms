import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderTopLevel extends Struct.ComponentSchema {
  collectionName: 'components_header_top_levels';
  info: {
    description: '';
    displayName: 'top-level';
  };
  attributes: {
    isSocial: Schema.Attribute.Boolean;
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header.top-level': HeaderTopLevel;
    }
  }
}
