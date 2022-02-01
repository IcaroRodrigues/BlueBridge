import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CreateUser } from '../../Api'

import { Container, FormContainer, Button, Form } from './style'
import { Input } from '../../Components/Input/input'

export const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const user_token = localStorage.getItem('BlueBridge_user_token')

  useEffect(() => {
    if (!!user_token) {
      navigate('/dashboard')
    }
  }, [user_token])

  const RegisterUser = (e) => {
    e.preventDefault()

    const result = CreateUser(email, password)

    if (result) {
      navigate('/dashboard')
    }
  }

  const RedirectToLogin = (e) => {
    e.preventDefault()

    navigate('/')
  }

  return (
    <Container>
      <Form>
        <FormContainer>
          <h1>SignUp</h1>
          {/* <Input
            type="text"
            placeholder="Name"
            onChange={(ev) => setName(ev.target.value)}
          /> */}
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
          <Button onClick={RegisterUser}>Enviar</Button>
          <Button onClick={RedirectToLogin}>Voltar</Button>
        </FormContainer>
      </Form>
    </Container>
  )
}
