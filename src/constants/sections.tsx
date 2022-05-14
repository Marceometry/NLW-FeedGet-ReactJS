import EXAMPLE_COLORS_LIGHT from '@/assets/example-colors-light.png'
import EXAMPLE_COLORS_DARK from '@/assets/example-colors-dark.png'
import { BASIC_CODE_EXAMPLE, CUSTOMIZED_CODE_EXAMPLE } from '@/constants'
import React from 'react'

export type SectionProps = {
  id: string
  title: string
  codeString: string
  description?: React.ReactNode
  images?: {
    light: string
    dark: string
  }
}

const basicSection: SectionProps = {
  id: 'basic-implementation',
  title: 'Implementação básica',
  codeString: BASIC_CODE_EXAMPLE,
  description: (
    <p className='leading-relaxed'>
      Para começar, faça o login através do github e acesse o dashboard. Em
      seguida, copie seu{' '}
      <span className='py-[2px] px-1 rounded-sm text-sm bg-zinc-300 dark:bg-zinc-600'>
        CLIENT_ID
      </span>{' '}
      e passe para o componente FeedGet como no exemplo abaixo. Não esqueça de
      adicionar o componente em seu projeto com{' '}
      <span className='py-[2px] px-1 rounded-sm text-sm bg-zinc-300 dark:bg-zinc-600'>
        npm i feedget
      </span>{' '}
      ou{' '}
      <span className='py-[2px] px-1 rounded-sm text-sm bg-zinc-300 dark:bg-zinc-600'>
        yarn add feedget
      </span>{' '}
      (demonstração do componente no canto da tela).
    </p>
  ),
}

const customizingSection: SectionProps = {
  id: 'customizing-component',
  title: 'Customizando o componente',
  codeString: CUSTOMIZED_CODE_EXAMPLE,
  images: {
    light: EXAMPLE_COLORS_LIGHT,
    dark: EXAMPLE_COLORS_DARK,
  },
}

export const sections: SectionProps[] = [basicSection, customizingSection]
