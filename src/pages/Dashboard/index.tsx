import { Header, MyTabs, Table } from '@/components'
import { FeedbackModel, FeedbackTypesEnum } from '@/constants'
import { useAuth } from '@/hooks'
import { api } from '@/services'
import { DuplicateIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

export const Dashboard = () => {
  const [feedbacks, setFeedbacks] = useState([])
  const { user } = useAuth()

  const loadFeedbacks = async () => {
    const { data } = await api.get(`feedbacks?clientId=${user.id}`)
    setFeedbacks(data)
  }

  useEffect(() => {
    loadFeedbacks()
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(user.id)
  }

  return (
    <div className='w-screen h-screen px-10 bg-zinc-900 text-zinc-100'>
      <Header />

      {user?.id && (
        <main className='my-8 flex gap-4'>
          {user.avatar_url && (
            <img className='w-64 rounded-lg' src={user.avatar_url} />
          )}
          <div>
            <h1>
              CLIENT_ID: {user.id}{' '}
              <DuplicateIcon
                onClick={handleCopy}
                className='w-6 h-6 inline cursor-pointer'
              />
            </h1>
            <p className='mt-2'>Nome: {user.name}</p>
            <p className='mt-2'>Nome de usuário: {user.username}</p>
            <p className='mt-2'>E-mail: {user.email}</p>
          </div>
        </main>
      )}

      <Table feedbacks={feedbacks} />
    </div>
  )
}
