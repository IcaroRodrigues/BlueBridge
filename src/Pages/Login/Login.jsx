import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import Api, { LoginWithEmail } from '../../Api/index'

import { Container, FormContainer, Button, Form } from './style'
import { Input } from '../../Components/Input/input'

export const Login = ({ onReceiveGoogle }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const user_token = localStorage.getItem('BlueBridge_user_token')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {

    if(!!user_token) {
      navigate('/dashboard')
    }

  }, [user_token])


  const handleLoginWithEmail = async () => {
    try {
      const { user } = await LoginWithEmail(email, password)

      let newUser = {
        id: user.uid,
        email: user.email,
        avatar: user.photoURL,
      }

      localStorage.setItem('BlueBridge', JSON.stringify(newUser))

      navigate('/dashboard')

    } catch (error) {
      alert(error.message)
    }
  }

  const handleLoginGoogle = async () => {
    const result = await Api.googleLogin()

    if (result) {
      onReceiveGoogle(result.user)
    } else {
      alert('error')
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <h1>Login</h1>
          <Input
            type="text"
            placeholder="Email"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <Button onClick={handleLoginWithEmail}>LOGIN</Button>
          <div>
            <p>OR</p>
          </div>
          <Button onClick={handleLoginGoogle}>LOGIN WITH GOOGLE</Button>
          <p>
            Se não possui uma conta, <Link to="/Register">Registre-se</Link>
          </p>
        </FormContainer>
      </Form>
    </Container>
  )
}
