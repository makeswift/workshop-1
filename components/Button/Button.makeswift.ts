import { MakeswiftComponentType } from '@makeswift/runtime'
import { Link, RichText, Select, Style } from '@makeswift/runtime/controls'

import { runtime } from '@/lib/makeswift/runtime'

import Button from './Button'

export const props = {
  className: Style({ properties: [Style.Margin] }),
  link: Link(),
  children: RichText({ mode: RichText.Mode.Inline, defaultValue: 'Test' }),
  variant: Select({
    label: 'Variant',
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
    ],
    defaultValue: 'primary',
  }),
  size: Select({
    label: 'Size',
    options: [
      { label: 'Default', value: 'default' },
      { label: 'Small', value: 'small' },
    ],
    defaultValue: 'default',
  }),
}

runtime.registerComponent(Button, {
  type: MakeswiftComponentType.Button,
  label: 'Button',
  props,
})
