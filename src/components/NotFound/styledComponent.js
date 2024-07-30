import styled from 'styled-components'

export const NotFoundConatiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImage = styled.img`
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  color: #334155;
  text-align: center;
`

export const NotFoundPara = styled.p`
  font-family: Roboto;
  color: #475569;
  text-align: center;
  margin: 0;
`
