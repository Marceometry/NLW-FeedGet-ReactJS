import { useTheme } from '@/contexts'
import { Switch } from '@headlessui/react'

type Props = {
  className?: string
}

export const ThemeToggler = ({ className }: Props) => {
  const { isDarkMode, setIsDarkMode } = useTheme()

  return (
    <Switch.Group>
      <div className={`flex justify-center w-fit h-fit text-zinc-100 ${className}`}>
        <Switch.Label className='mr-4 '>Dark mode:</Switch.Label>
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
