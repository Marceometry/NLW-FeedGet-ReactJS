import { CodeBlock } from '@/components'
import { HOME_EXAMPLE } from '@/constants'
import { ThemeToggler } from '../ThemeToggler'

export const SideImage = () => {
  return (
    <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-end justify-end'>
      <div className='relative h-80 w-full lg:pl-[5%] grid place-items-center lg:max-w-[45vw] object-cover md:h-96 lg:w-full lg:h-full bg-brand-500 shadow-2xl'>
        <ThemeToggler />
        <CodeBlock
          className='w-[80%] min-w-[380px]'
          codeString={HOME_EXAMPLE}
        />
      </div>
    </div>
  )
}
