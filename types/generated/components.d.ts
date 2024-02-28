import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderTopLevel extends Schema.Component {
  collectionName: 'components_header_top_levels';
  info: {
    displayName: 'top-level';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isSocial: Attribute.Boolean;
    path: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.top-level': HeaderTopLevel;
    }
  }
}
