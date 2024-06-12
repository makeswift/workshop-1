import { MakeswiftComponentType } from '@makeswift/runtime'
import { Image, Link, List, Number, Shape, Style, TextInput } from '@makeswift/runtime/controls'

import { runtime } from '@/lib/makeswift/runtime'

import Navigation from './Navigation'

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
  mainLinks: List({
    label: 'Main links',
    type: Shape({
      type: {
        text: TextInput({
          label: 'Text',
          defaultValue: 'Link',
          selectAll: true,
        }),
        link: Link({ label: 'On click' }),
      },
    }),
    getItemLabel(links) {
      return links?.text || 'Link'
    },
  }),
  secondaryLinks: List({
    label: 'Secondary links',
    type: Shape({
      type: {
        text: TextInput({
          label: 'Text',
          defaultValue: 'Link',
          selectAll: true,
        }),
        link: Link({ label: 'On click' }),
      },
    }),
    getItemLabel(links) {
      return links?.text || 'Link'
    },
  }),
  ctaText: TextInput({
    label: 'CTA text',
    defaultValue: 'Contact us',
    selectAll: true,
  }),
  ctaLink: Link({ label: 'CTA on click' }),
}

runtime.registerComponent(Navigation, {
  type: MakeswiftComponentType.Navigation,
  label: 'Navigation',
  icon: 'navigation',
  props,
})
