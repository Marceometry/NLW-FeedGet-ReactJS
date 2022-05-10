import { useAuth } from '@/hooks'
import { Navigate } from 'react-router-dom'

type Props = {
  element: React.ReactNode
}

export const PrivateRoute: React.FC<Props> = ({ element }) => {
  const { user } = useAuth()

  if (!user?.id) return <Navigate to='/' replace />

  return <>{element}</>
}
