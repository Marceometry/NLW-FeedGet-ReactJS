import EXAMPLE_COLORS_LIGHT from '@/assets/example-colors-light.png'
import EXAMPLE_COLORS_DARK from '@/assets/example-colors-dark.png'
import { COLORS_CODE_EXAMPLE } from '.'

export type SectionProps = {
  id: string
  title: string
  codeString: string
  images: {
    light: string
    dark: string
  }
}

const colorsSection: SectionProps = {
  id: 'customizing-colors',
  title: 'Personalizando cores',
  codeString: COLORS_CODE_EXAMPLE,
  images: {
    light: EXAMPLE_COLORS_LIGHT,
    dark: EXAMPLE_COLORS_DARK,
  },
}

export const sections: SectionProps[] = [colorsSection]
