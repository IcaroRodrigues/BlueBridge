import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, User } from './style'

export const Header = () => {
  const user = JSON.parse(localStorage.getItem('BlueBridge'))
  const [options, setOptions] = useState(false)
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('BlueBridge')
    localStorage.removeItem('BlueBridge_user_token')
  
    navigate('/')
  }

  return (
    <Container>
      <h1>BlueBridge</h1>
      <User options={options}>
        <div>
          <p onClick={() => setOptions(!options)}>{user.email}</p>
          <Link to="/" onClick={handleSignOut}>
            Sair
          </Link>
        </div>
      </User>
    </Container>
  )
}
