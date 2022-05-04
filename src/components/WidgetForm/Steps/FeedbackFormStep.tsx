import { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'
import { FeedbackType, feedbackTypes } from '@/constants'
import { CloseButton, ScreenshotButton } from '@/components'

type Props = {
  feedbackType: FeedbackType
  handleRestartFeedback: () => void
  onFormSubmit: () => void
}

export const FeedbackFormStep = ({
  feedbackType,
  handleRestartFeedback,
  onFormSubmit,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const stepInfo = feedbackTypes[feedbackType]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      screenshot,
      comment,
    })
    onFormSubmit()
  }

  return (
    <>
      <header>
        <button
          type='button'
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 transition-colors'
          onClick={handleRestartFeedback}
        >
          <ArrowLeft className='w-4 h-4' weight='bold' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            src={stepInfo.image.source}
            alt={stepInfo.image.alt}
            className='w-6 h-6'
          />
          {stepInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmit} className='my-4 w-full'>
        <textarea
          onChange={(e) => setComment(e.target.value)}
          placeholder='Conte com detalhes o que está acontecendo'
          className='w-full min-w-[304px] min-h-[100px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent'
        />

        <footer className='flex gap-2 mt-1'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshot={setScreenshot}
          />
          <button
            type='submit'
            disabled={comment.length === 0}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 disabled:cursor-not-allowed'
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
