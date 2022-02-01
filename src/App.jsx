import { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import { Dashboard } from './Pages/Dashboard/Dashboard'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'

import { PrivateRoute } from './Components/PrivateRoute'

import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const actionLoginDataGoogle = async (user) => {
    let newUser = {
      id: user.uid,
      email: user.email,
    }

    localStorage.setItem('BlueBridge', JSON.stringify(newUser))
    localStorage.setItem('BlueBridge_user_token', user.uid)

    setUser(newUser)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login onReceiveGoogle={actionLoginDataGoogle} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard user={user} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
