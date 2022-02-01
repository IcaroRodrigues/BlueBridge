import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  background-color: #F5F5F5;
  
  color: gray;

  width: 30rem;
  margin: 0px 1rem;
  padding: 2rem 2rem;
  border-radius: 10px;
`

export const Button = styled.button`
  width: 100%;

  padding: 1rem 0rem;

  font-size: 1.5rem;
  color: #FFFFFF;
  background-color: #013453;
  
  filter: drop-shadow(0px 1.4422px 1.20183px rgba(0, 0, 0, 0.55));
  
  border: 0;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`

export const Form = styled.form``