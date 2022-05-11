import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Home } from '@/pages'
import { PrivateRoute } from './PrivateRoute'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dashboard'
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
