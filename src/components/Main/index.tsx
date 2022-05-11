import { useAuth } from '@/hooks'

export const Main = () => {
  const { login } = useAuth()

  return (
    <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
      <div className='sm:text-center lg:text-left'>
        <h1 className='text-4xl lg:max-w-[650px] tracking-tight font-extrabold text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl'>
          <span className='block xl:inline'>Feedbacks rápidos</span>{' '}
          <span className='block text-brand-500 xl:inline'>com FeedGet</span>
        </h1>
        <p className='mt-10 text-base text-zinc-500 dark:!text-zinc-300 sm:mt-12 sm:text-lg sm:max-w-[480px] sm:mx-auto md:mt-20 md:text-xl lg:mx-0'>
          Receba feedbacks de seus usuários{' '}
          <span className='text-brand-500 dark:text-brand-300 xl:inline'>
            com screenshot
          </span>{' '}
          sem que eles precisem sair da sua aplicação.{' '}
          <span className='text-brand-500 dark:text-brand-300 xl:inline'>
            Rápido e fácil.
          </span>
        </p>
        <div className='mt-10 sm:mt-12 md:mt-32 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <button
              type='button'
              onClick={login}
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-500 hover:bg-brand-300 md:py-4 md:text-lg md:px-10 transition-colors'
            >
              Comece agora
            </button>
          </div>
          <div className='mt-3 sm:mt-0 sm:ml-5'>
            <a
              href='#docs'
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-zinc-800 dark:text-zinc-100 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 md:py-4 md:text-lg md:px-10 transition-colors'
            >
              Documentação
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
