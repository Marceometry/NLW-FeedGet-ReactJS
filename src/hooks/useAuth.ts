import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { api } from '@/services'
import { useToast } from './useToast'

export const useAuth = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { addToast } = useToast()
  const code = useMemo(() => searchParams.get('code'), [])

  const storagedUser = sessionStorage.getItem('@feedget/user')
  const user =
    storagedUser && JSON.parse(storagedUser)?.id
      ? JSON.parse(storagedUser)
      : null

  const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
    addToast('Logout realizado com sucesso')
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
    const storagedCode = sessionStorage.getItem('@feedget/github_code')

    if (storagedCode === code) return

    try {
      setIsAuthenticating(true)
      sessionStorage.setItem('@feedget/github_code', code)
      const { data } = await api.post('/users/authenticate', { code })
      localStorage.setItem('@feedget/user', JSON.stringify(data.user))
      localStorage.setItem('@feedget/token', data.token)
      navigate('/dashboard', { replace: true })
    } catch (error: any) {
      addToast(error.message || 'Ocorreu um erro inesperado', 'error')
      navigate('/', { replace: true })
    } finally {
      setIsAuthenticating(false)
    }
  }

  const authHeaders = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('@feedget/token')}`,
    },
  })

  return { user, login, logout, handleCode, isAuthenticating, authHeaders }
}
