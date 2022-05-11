import { useTheme } from '@/contexts'
import { Switch } from '@headlessui/react'

export const ThemeToggler = () => {
  const { isDarkMode, setIsDarkMode } = useTheme()

  return (
    <Switch.Group>
      <div className='flex justify-center w-fit h-fit absolute lg:translate-x-[calc(-50%+5%)] translate-x-[calc(-50%)] left-[50%] md:top-8 top-4'>
        <Switch.Label className='mr-4 text-zinc-100'>Dark mode:</Switch.Label>
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
  )
}
