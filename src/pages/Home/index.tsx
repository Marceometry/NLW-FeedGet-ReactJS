import { CodeBlock, Header, Main, SideImage } from '@/components'

export const Home = () => {
  return (
    <>
      <div className='relative bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-10 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900 sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-[55vw] lg:pb-28 xl:pb-32'>
            <svg
              className='hidden lg:block absolute right-0 inset-y-0 h-full w-32 text-brand-500 transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>

            <Header />

            <Main />
          </div>
        </div>
        <SideImage />
      </div>
      <div className='bg-white dark:bg-zinc-900 h-96 w-full'>
        <div className='py-10 px-8 max-w-7xl mx-auto'>
          <h1 className='text-3xl mb-10'>Customizar cor primária</h1>

          <div className='w-full flex justify-between gap-8'>
            <CodeBlock className='w-full shadow-neutral-900' />
            <div className='w-full'></div>
          </div>
        </div>
      </div>
    </>
  )
}
