import { Navigate } from 'react-router-dom'

const isLogged = () => !!localStorage.getItem('BlueBridge_user_token')

export const PrivateRoute = ({ children }) =>
  isLogged() ? children : <Navigate to="/" />
