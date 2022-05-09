import { Header, Main, SideImage, FeedbackWidget, Section } from '@/components'
import { sections } from '@/constants'

export const Home = () => {
  return (
    <>
      <div className='relative bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-[#09090a]'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-10 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-[#09090a] sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-[55vw] lg:pb-28 xl:pb-32'>
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
      <div id='docs'>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            codeString={section.codeString}
            images={section.images}
          />
        ))}
        <FeedbackWidget />
      </div>
    </>
  )
}
