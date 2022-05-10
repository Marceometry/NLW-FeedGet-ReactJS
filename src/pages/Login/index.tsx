import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const Login = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const code = useMemo(() => searchParams.get('code'), [])

  console.log({ isAuth })

  useEffect(() => {
    if (!code || isAuth) return
    console.log({ code, isAuth })
    setIsAuth(true)
    const auth = async () => {
      // const res = await api.post('/users/authenticate', { code })
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsAuth(false)
      navigate('/dashboard', { replace: true })
    }
    auth()
  }, [code])

  return <div className='w-screen h-screen bg-zinc-900' />
}
