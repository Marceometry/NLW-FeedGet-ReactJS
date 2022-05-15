import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckIcon, DuplicateIcon, TrashIcon } from '@heroicons/react/outline'
import { useAuth, useCopy, useToast } from '@/hooks'
import { Header, Loading, Modal, Table } from '@/components'
import { FeedbackModel } from '@/constants'
import { api } from '@/services'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { user, authHeaders } = useAuth()
  const { handleCopy } = useCopy()
  const { addToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [feedbacks, setFeedbacks] = useState<FeedbackModel[]>([])
  const [userEmail, setUserEmail] = useState(user.email || '')

  const loadFeedbacks = async () => {
    try {
      setIsLoading(true)
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

  const handleDeleteUserAccount = async () => {
    setIsDeleteModalOpen(false)
    try {
      await api.delete(`users/delete?id=${user.id}`, authHeaders())
      addToast('Conta excluída com sucesso!')
      navigate('/', { replace: true })
      localStorage.clear()
    } catch (error: any) {
      addToast(error.message || 'Ocorreu um erro', 'error')
    }
  }

  const handleUpdateUserEmail = async (email: string) => {
    try {
      setIsUpdatingEmail(true)
      const { data } = await api.put(
        `users/update`,
        { email, id: user.id },
        authHeaders()
      )
      addToast('E-mail alterado com sucesso!')
      localStorage.setItem('@feedget/user', JSON.stringify(data))
    } catch (error: any) {
      addToast(error.message || 'Ocorreu um erro', 'error')
    } finally {
      setIsUpdatingEmail(false)
    }
  }

  const handleRemoveFeedback = (id: string) => {
    setFeedbacks((oldState) => oldState.filter((item) => item.id !== id))
  }

  const handleCleanFeedbacksList = () => {
    setFeedbacks([])
  }

  return (
    <div className='w-screen min-h-screen pb-16 bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100'>
      <div className='w-full max-w-7xl mx-auto'>
        <Header />

        <main className='px-8 relative'>
          <button
            className='absolute right-12 top-4'
            onClick={() => setIsDeleteModalOpen(true)}
          >
            <TrashIcon className='w-7 h-7 ml-auto cursor-pointer hover:text-red-400 transition-colors' />
          </button>
          <div className='my-16 p-4 rounded-md flex gap-4 bg-zinc-200 dark:bg-zinc-800 border border-zinc-700'>
            {user.avatar_url && (
              <img
                className='w-44 h-4w-44 rounded-xl object-cover'
                src={user.avatar_url}
              />
            )}
            <div>
              <p>
                {user.name} ({user.username})
              </p>
              <div className='flex items-center gap-2 mt-2'>
                <input
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder='Digite seu email...'
                  className='py-1 px-2 w-64 text-sm placeholder-zinc-500 bg-zinc-100 text-zinc-800 border-zinc-300 dark:placeholder-zinc-400 dark:text-zinc-100 dark:border-zinc-600 dark:bg-zinc-900 rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none disabled:opacity-50'
                />
                {isUpdatingEmail ? (
                  <Loading className='w-4 h-4' />
                ) : (
                  <button onClick={() => handleUpdateUserEmail(userEmail)}>
                    <CheckIcon className='w-6 h-6 cursor-pointer text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors' />
                  </button>
                )}
              </div>
              <p className='mt-2 text-sm'>
                Seu e-mail é necessário para que receba seus feedbacks via
                e-mail.
              </p>
              <h1 className='mt-7 mb-2'>
                <span>CLIENT_ID:</span>
                <span
                  onClick={() => handleCopy(user.id)}
                  className='p-1 ml-3 rounded-lg inline-flex items-center gap-2 cursor-pointer bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-700 transition-colors'
                >
                  {user.id}
                  <button>
                    <DuplicateIcon className='w-6 h-6 inline' />
                  </button>
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
            setIsLoading={setIsLoading}
            loadFeedbacks={loadFeedbacks}
            removeFeedback={handleRemoveFeedback}
            handleCleanFeedbacksList={handleCleanFeedbacksList}
          />

          <Modal
            isOpen={isDeleteModalOpen}
            onConfirm={handleDeleteUserAccount}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        </main>
      </div>
    </div>
  )
}
