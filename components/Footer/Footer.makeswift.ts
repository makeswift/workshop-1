import {
  Image,
  Link,
  List,
  Number,
  RichText,
  Shape,
  Style,
  TextInput,
} from '@makeswift/runtime/controls'

import { runtime } from '@/lib/makeswift/runtime'

import Footer from './Footer'

export const props = {
  className: Style(),
  logoImage: Image({
    label: 'Logo',
    format: Image.Format.WithDimensions,
  }),
  logoWidth: Number({
    label: 'Logo width',
    defaultValue: 120,
    suffix: 'px',
    selectAll: true,
  }),
  logoAlt: TextInput({
    label: 'Logo alt text',
    defaultValue: 'Logo',
    selectAll: true,
  }),
  logoLink: Link({ label: 'Logo on click' }),
  copyright: RichText({
    mode: RichText.Mode.Inline,
  }),
  footerGroups: List({
    label: 'Footer groups',
    type: Shape({
      type: {
        icon: Image({
          label: 'Logo',
          format: Image.Format.WithDimensions,
        }),
        iconAlt: TextInput({
          label: 'Logo alt text',
          defaultValue: 'Logo',
          selectAll: true,
        }),
        heading: TextInput({
          label: 'Group heading',
          defaultValue: 'Heading',
          selectAll: true,
        }),
        footerLinks: List({
          label: 'Links',
          type: Shape({
            type: {
              text: TextInput({ label: 'Text', defaultValue: 'Link', selectAll: true }),
              link: Link({ label: 'On click' }),
            },
          }),
          getItemLabel(link) {
            return link?.text || 'Link'
          },
        }),
      },
    }),
    getItemLabel(group) {
      return group?.heading || 'Heading'
    },
  }),
  legalLinks: List({
    label: 'Legal links',
    type: Shape({
      type: {
        text: TextInput({ label: 'Text', defaultValue: 'Link', selectAll: true }),
        link: Link({ label: 'On click' }),
      },
    }),
    getItemLabel(link) {
      return link?.text || 'Link'
    },
  }),
}

runtime.registerComponent(Footer, {
  type: 'Footer',
  label: 'Footer',
  icon: 'navigation',
  props,
})
