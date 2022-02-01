import { Container } from './style'

export const Input = ({ placeholder, label, type, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </Container>
  )
}
