import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { CodeBlock } from '@/components'
import { setTheme } from '@/styles'

export const SideImage = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    setTheme(isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-end justify-end'>
      <div className='relative h-80 w-full lg:pl-[5%] grid place-items-center lg:max-w-[45vw] object-cover md:h-96 lg:w-full lg:h-full bg-brand-500 shadow-2xl'>
        <Switch.Group>
          <div className='flex justify-center w-fit h-fit absolute lg:translate-x-[calc(-50%+5%)] translate-x-[calc(-50%)] left-[50%] md:top-8 top-4'>
            <Switch.Label className='mr-4 text-zinc-100'>
              Dark mode:
            </Switch.Label>
            <Switch
              checked={isDarkMode}
              onChange={setIsDarkMode}
              className={`${
                isDarkMode ? 'bg-zinc-700' : 'bg-zinc-300'
              } inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2`}
            >
              <span
                className={`${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
        <CodeBlock className='w-[80%] min-w-[380px]' />
      </div>
    </div>
  )
}
