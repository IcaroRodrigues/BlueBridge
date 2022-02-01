import { Container } from './style.ts'

export const Input = ({ placeholder, label, type, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  )
}
