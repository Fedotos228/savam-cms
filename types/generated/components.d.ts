import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButtons extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Buttons';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['default', 'full', 'icon']> &
      Schema.Attribute.DefaultTo<'default'>;
    variant: Schema.Attribute.Enumeration<['default', 'secondary', 'link']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface ComponentsList extends Struct.ComponentSchema {
  collectionName: 'components_components_lists';
  info: {
    displayName: 'List';
    icon: 'folder';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Block: Schema.Attribute.Component<'shared.about-block', true>;
    SectionHeading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface SectionsBeforeAfter extends Struct.ComponentSchema {
  collectionName: 'components_sections_before_afters';
  info: {
    displayName: 'BeforeAfter';
  };
  attributes: {
    Contact: Schema.Attribute.Component<'shared.contact-buttons', false>;
    SectionHeading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    SectionHeading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    phone: Schema.Attribute.String;
    SectionHeading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface SectionsPrices extends Struct.ComponentSchema {
  collectionName: 'components_sections_prices';
  info: {
    displayName: 'Prices';
  };
  attributes: {
    SectionHeading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface SectionsReviews extends Struct.ComponentSchema {
  collectionName: 'components_sections_reviews';
  info: {
    displayName: 'Reviews';
    icon: 'star';
  };
  attributes: {
    SectionHeading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Services';
    icon: 'grid';
  };
  attributes: {
    SectionHeading: Schema.Attribute.Component<'shared.section-heading', false>;
  };
}

export interface SharedAboutBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_blocks';
  info: {
    displayName: 'AboutBlock';
    icon: 'paint';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedBeforeButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_before_buttons';
  info: {
    displayName: 'BeforeButtons';
    icon: 'rocket';
  };
  attributes: {
    Title: Schema.Attribute.Text;
  };
}

export interface SharedContactButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_buttons';
  info: {
    displayName: 'ContactButtons';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'components.buttons', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headings';
  info: {
    displayName: 'SectionHeading';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.buttons': ComponentsButtons;
      'components.list': ComponentsList;
      'sections.about': SectionsAbout;
      'sections.before-after': SectionsBeforeAfter;
      'sections.faq': SectionsFaq;
      'sections.hero': SectionsHero;
      'sections.prices': SectionsPrices;
      'sections.reviews': SectionsReviews;
      'sections.services': SectionsServices;
      'shared.about-block': SharedAboutBlock;
      'shared.before-buttons': SharedBeforeButtons;
      'shared.contact-buttons': SharedContactButtons;
      'shared.section-heading': SharedSectionHeading;
    }
  }
}
