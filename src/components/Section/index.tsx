import { SectionProps } from '@/constants'
import { CodeBlock } from '@/components'

export const Section = ({
  id,
  title,
  codeString,
  description,
  images,
}: SectionProps) => {
  return (
    <div id={id} className='bg-zinc-100 dark:!bg-[#09090a] h-96 mb-40 w-screen'>
      <div className='py-10 px-8 max-w-7xl mx-auto'>
        <h1 className='text-3xl mb-8'>{title}</h1>

        {!!description && <div className='mb-6'>{description}</div>}

        <div className='w-full flex justify-center items-center gap-8'>
          <CodeBlock
            className='w-full max-w-[60%] shadow-zinc-900'
            codeString={codeString}
          />
          {!!images && (
            <div className='w-full rounded-md grid place-items-center'>
              <img
                src={images.light}
                className='rounded-md block dark:hidden'
              />
              <img src={images.dark} className='rounded-md hidden dark:block' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
