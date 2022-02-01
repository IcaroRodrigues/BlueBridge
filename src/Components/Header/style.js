import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  height: 3rem;

  padding: 0rem 1rem;

  background-color: transparent;

  font-size: 1rem;
  color: black;

  align-items: center;
  justify-content: space-between;
`

export const User = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.5rem;

  & > div {
    display: flex;
    align-items: center;

    flex-direction: column;   
    
    position: relative;
  }

  p {
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  a {

    display: ${({ options }) => options ? '' : 'none'};

    position: absolute;

    background-color: white;

    width: 100%;

    text-align: center;

    bottom: -1.5rem;

    font-size: 1rem;
    text-decoration: none;
    color: black;


    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
`