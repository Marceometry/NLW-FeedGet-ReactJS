import { CloseButton } from '@/components'
import { successImage } from '@/assets'

type Props = {
  handleRestartFeedback: () => void
}

export const FeedbackSuccessStep = ({ handleRestartFeedback }: Props) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className='flex flex-col items-center py-9 w-[304px]'>
        <img src={successImage} alt='Ícone de sucesso' />

        <span className='text-xl mt-[6px]'>Agradecemos o feedback!</span>

        <button
          type='button'
          onClick={handleRestartFeedback}
          className='py-2 px-6 mt-5 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
