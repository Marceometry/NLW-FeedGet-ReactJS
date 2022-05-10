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
    <div className='w-screen h-screen p-10 bg-zinc-900 text-zinc-100'>
      {user?.id && (
        <>
          <h1>
            Seu CLIENT_ID: {user.id}{' '}
            <DuplicateIcon
              onClick={handleCopy}
              className='w-6 h-6 inline cursor-pointer'
            />
          </h1>
          <p className='mt-2'>Nome: {user.name}</p>
          <p className='mt-2'>Nome de usuário: {user.username}</p>
          <p className='mt-2'>E-mail: {user.email}</p>
          {user.avatar_url && (
            <img className='mt-4 w-64 rounded-lg' src={user.avatar_url} />
          )}
        </>
      )}

      <p className='mt-8'>Feedbacks:</p>

      <ul className='mt-2'>
        {feedbacks.map((item: FeedbackModel) => (
          <li key={item.id}>
            <span>{item.comment}</span> -{' '}
            <span>{FeedbackTypesEnum[item.type]}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
