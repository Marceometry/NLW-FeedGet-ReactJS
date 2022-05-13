import bugImg from '@/assets/bug.svg'
import ideaImg from '@/assets/idea.svg'
import thoughtImg from '@/assets/thought.svg'
import { FeedbackModel, FeedbackType, FeedbackTypesEnum } from '@/constants'
import { Loading } from '@/components'
import { useAuth, useCopy, useToast } from '@/hooks'
import { TrashIcon } from '@heroicons/react/outline'
import { api } from '@/services'
import { useState } from 'react'

type Props = {
  feedbacks: FeedbackModel[]
  removeFeedback: (id: string) => void
  isLoading?: boolean
}

export const Table = ({ feedbacks, removeFeedback, isLoading }: Props) => {
  const [isDeleting, setIsDeleting] = useState('')
  const { addToast } = useToast()
  const { authHeaders } = useAuth()
  const { handleCopy } = useCopy()

  const getFeedbackTypeIcon = (type: FeedbackType): string => {
    switch (type) {
      case 'BUG':
        return bugImg
      case 'IDEA':
        return ideaImg
      case 'OTHER':
        return thoughtImg
    }
  }

  const handleDeleteFeedback = async (id: string) => {
    try {
      setIsDeleting(id)
      await api.delete(`/feedbacks/delete?id=${id}`, authHeaders())
      removeFeedback(id)
    } catch (error: any) {
      addToast(error.message || 'Ocorreu um erro', 'error')
    } finally {
      setIsDeleting('')
    }
  }

  return (
    <div className='mt-8 col-span-full xl:col-span-6 bg-zinc-200 dark:bg-zinc-800 shadow-lg rounded-sm border border-zinc-600'>
      <header className='px-5 py-4 border-b border-zinc-500'>
        <h2 className='font-semibold text-zinc-900 dark:text-zinc-100'>
          Feedbacks
        </h2>
      </header>
      <div className='p-3'>
        <div className='overflow-x-auto'>
          {isLoading ? (
            <div className='w-full py-8 grid place-items-center'>
              <Loading size={10} />
            </div>
          ) : (
            <table className='table-auto w-full'>
              <thead className='text-xs font-semibold uppercase bg-zinc-300 dark:bg-zinc-700'>
                <tr>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Tipo</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Comentário</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='font-semibold text-left'>Screenshot</div>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-zinc-800'>
                {feedbacks.map((item, index) => (
                  <tr key={item.id}>
                    <td
                      className={`p-2 !pr-4 ${
                        index === 0 ? '!pt-4' : ''
                      } whitespace-nowrap w-16`}
                    >
                      <div className='flex items-center'>
                        <div className='w-10 h-10 shrink-0 mr-1'>
                          <img
                            className='rounded-full'
                            src={getFeedbackTypeIcon(item.type)}
                            width='36'
                            height='36'
                            alt='Alex Shatov'
                          />
                        </div>
                        <div className='font-medium'>
                          {FeedbackTypesEnum[item.type]}
                        </div>
                      </div>
                    </td>
                    <td
                      className={`p-2 ${
                        index === 0 ? '!pt-4' : ''
                      } whitespace-nowrap`}
                    >
                      <div className='text-left'>{item.comment}</div>
                    </td>
                    <td
                      className={`p-2 ${
                        index === 0 ? '!pt-4' : ''
                      } whitespace-nowrap overflow-hidden max-w-[4rem]`}
                    >
                      <div className='text-left'>
                        {item.screenshot ? (
                          <button
                            type='button'
                            className='underline underline-offset-1'
                            onClick={() => handleCopy(item.screenshot!)}
                          >
                            {item.screenshot}
                          </button>
                        ) : (
                          '-'
                        )}
                      </div>
                    </td>
                    <td
                      className={`p-2 ${
                        index === 0 ? '!pt-4' : ''
                      } whitespace-nowrap overflow-hidden w-[4rem]`}
                    >
                      {isDeleting === item.id ? (
                        <Loading size={7} className='ml-auto' />
                      ) : (
                        <TrashIcon
                          onClick={() => handleDeleteFeedback(item.id)}
                          className='w-7 h-7 ml-auto cursor-pointer hover:text-red-400 transition-colors'
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
