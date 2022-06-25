import { Route, RouteObject, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import Crypto from '../pages/Crypto'
import Home from '../pages/Home'
import Login from '../pages/Login'

export const routes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route
        path='home'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path='crypto/:id/:name'
        element={
          <ProtectedRoute>
            <Crypto />
          </ProtectedRoute>
        }

      />

    </Routes>
  )
}