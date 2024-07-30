import styled from 'styled-components'

export const HomeAppConatiner = styled.div`
  height: 100vh;
`

export const HomeBgContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeContentContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 576px) {
    height: 80vh;
  }
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

export const HomeMainHeading = styled.h1`
  font-family: Roboto;
  color: #334155;
  margin-bottom: 0;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 40px;
  }
`

export const HomePara = styled.p`
  font-family: Roboto;
  color: #475569;
  font-size: 22px;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const HomeRegisterBtn = styled.button`
  height: 30px;
  width: 80px;
  color: #ffffff;
  font-family: Roboto;
  font-weight: bold;
  background-color: #3b82f6;
  border-radius: 5px;
  border-width: 0;
  cursor: pointer;
`

export const HomeMeetupImage = styled.img`
  width: 70%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const RegisterName = styled.h1`
  font-family: Roboto;
  color: #2563eb;
  margin-bottom: 0;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 40px;
  }
`

export const RegisterTopic = styled.p`
  font-family: Roboto;
  font-size: 22px;
  color: #475569;
  text-align: center;
  font-weight: bold;
  @media screen and (min-width: 576px) {
    font-size: 30px;
  }
`
