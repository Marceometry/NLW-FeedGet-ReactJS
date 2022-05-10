import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '@/services'

export const useAuth = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const code = useMemo(() => searchParams.get('code'), [])

  const storagedUser = sessionStorage.getItem('@feedget/user')
  const user =
    storagedUser && JSON.parse(storagedUser)?.id
      ? JSON.parse(storagedUser)
      : null

  const logout = () => {
    sessionStorage.clear()
    navigate('/', { replace: true })
  }

  const login = () => {
    const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID
    const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI
    const url = 'https://github.com/login/oauth/authorize?scope=user'
    window.location.replace(
      `${url}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    )
  }

  const handleCode = async () => {
    if (!code) return

    try {
      setIsAuthenticating(true)
      const user = await api.post('/users/authenticate', { code })
      sessionStorage.setItem('@feedget/user', JSON.stringify(user.data))
      navigate('/dashboard', { replace: true })
    } catch (error) {
      navigate('/', { replace: true })
    } finally {
      setIsAuthenticating(false)
    }
  }

  return { user, login, logout, handleCode, isAuthenticating }
}
