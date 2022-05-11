import { Fragment, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { ExternalLinkIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useAuth } from '@/hooks'
import logo from '@/assets/feedget-logo.png'

const navItems = [
  { name: 'Documentação', href: '/' },
  { name: 'Dashboard', href: '/dashboard', private: true },
  {
    name: 'Github',
    href: 'https://github.com/Marceometry/feedget.git',
    target: '_blank',
  },
]

export const Header = () => {
  const location = useLocation()
  const { user, login, logout } = useAuth()

  const navigation = useMemo(() => {
    let items = navItems.filter((item) => item.href !== location.pathname)
    if (!user) items = items.filter((item) => !item.private)
    return items
  }, [user])

  return (
    <Popover>
      <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
        <nav
          className='relative flex items-center justify-between sm:h-10 lg:justify-start'
          aria-label='Global'
        >
          <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
            <div className='flex items-center justify-between w-full pr-3 md:pr-0'>
              <a href='/'>
                <img src={logo} alt='FeedGet Logo' />
              </a>
              <div className='-mr-2 flex items-center'>
                <Popover.Button className='bg-white dark:!bg-zinc-700 rounded-md p-2 inline-flex items-center justify-center text-zinc-400 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-colors md:hidden'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className='hidden md:flex items-center justify-end w-full md:ml-10 md:pr-4 md:space-x-8'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                className='flex items-center gap-1 font-medium text-zinc-500  dark:!text-zinc-200 hover:text-zinc-900 dark:hover:!text-white transition-colors'
              >
                {item.name}
                {!!item.target && <ExternalLinkIcon className='h-5 w-5' />}
              </a>
            ))}
            <button
              type='button'
              onClick={user ? logout : login}
              className='font-medium py-1 px-3 rounded-sm text-zinc-100 bg-brand-500 hover:bg-brand-300 transition-colors'
            >
              Log {user ? 'out' : 'in'}
            </button>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:'
        >
          <div className='rounded-lg shadow-md bg-white dark:!bg-zinc-800 ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <a href='/'>
                <h2 className='text-zinc-900 dark:text-zinc-100 font-bold text-xl'>
                  FeedGet
                </h2>
              </a>
              <div className='-mr-2'>
                <Popover.Button className='bg-white dark:!bg-zinc-800 rounded-md p-2 inline-flex items-center justify-center text-zinc-400 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:!bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 transition-colors'>
                  <span className='sr-only'>Close main menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-100 dark:hover:text-zinc-200 dark:hover:bg-zinc-900 text-center transition-colors'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href='#'
              className='block w-full px-5 py-3 text-center font-medium text-zinc-100 bg-brand-500 hover:bg-brand-300 transition-colors'
            >
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
