import { useEffect, useState } from 'react'
import { DuplicateIcon } from '@heroicons/react/outline'
import { useAuth, useCopy, useToast } from '@/hooks'
import { Header, Table } from '@/components'
import { FeedbackModel } from '@/constants'
import { api } from '@/services'

export const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackModel[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { user, authHeaders } = useAuth()
  const { handleCopy } = useCopy()
  const { addToast } = useToast()

  const loadFeedbacks = async () => {
    try {
      const { data } = await api.get(
        `feedbacks?clientId=${user.id}`,
        authHeaders()
      )
      setFeedbacks(data)
    } catch (error: any) {
      addToast(error.message || 'Ocorreu um erro', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadFeedbacks()
  }, [])

  const handleRemoveFeedback = (id: string) => {
    setFeedbacks((oldState) => oldState.filter((item) => item.id !== id))
  }

  return (
    <div className='w-screen min-h-screen pb-16 bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100'>
      <div className='w-full max-w-7xl mx-auto'>
        <Header />

        <main className='px-8'>
          <div className='my-16 p-4 rounded-md flex gap-4 bg-zinc-200 dark:bg-zinc-800 border border-zinc-700'>
            {user.avatar_url && (
              <img className='w-40 rounded-xl' src={user.avatar_url} />
            )}
            <div>
              <p>
                {user.name} ({user.username})
              </p>
              <p className='mt-2'>{user.email}</p>
              <h1 className='mt-8 mb-4'>
                <span>CLIENT_ID:</span>
                <span
                  onClick={() => handleCopy(user.id)}
                  className='p-1 ml-3 rounded-lg inline-flex items-center cursor-pointer bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-700 transition-colors'
                >
                  {user.id}
                  <DuplicateIcon className='w-6 h-6 ml-2 inline' />
                </span>
              </h1>
              <p className='text-sm'>
                Use seu CLIENT_ID no componente FeedGet e pronto! Você já estará
                apto a receber seus feedbacks.
              </p>
            </div>
          </div>

          <Table
            feedbacks={feedbacks}
            isLoading={isLoading}
            removeFeedback={handleRemoveFeedback}
          />
        </main>
      </div>
    </div>
  )
}
