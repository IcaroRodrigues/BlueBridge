import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;

  label {
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 3rem;
    border-radius: 5px;
    padding: 2rem 1rem;
    
    font-size: 1.5rem;

    border: 0;

    background-color: rgb(225,225,225);


    &::placeholder {
      font-size: 1.5rem;
    }
  }
`