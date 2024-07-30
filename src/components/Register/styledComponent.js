import styled from 'styled-components'

export const RegisterAppConatiner = styled.div`
  height: 100vh;
`
export const RegisterBgContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
  }
`

export const RegisterImage = styled.img`
  width: 80%;
  padding: 20px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const RegisterForm = styled.form`
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const RegisterHeading = styled.h1`
  font-family: Roboto;
  color: #334155;
  @media screen and (min-width: 576px) {
    font-size: 40px;
  }
`

export const RegisterInputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`

export const RegisterLabel = styled.label`
  font-family: Roboto;
  font-weight: 500;
  color: #475569;
  font-size: 14px;
  margin-bottom: 5px;
`

export const RegisterInput = styled.input`
  height: 35px;
  width: 95%;
  outline: none;
  padding-left: 10px;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
`

export const Select = styled.select`
  height: 35px;
  width: 95%;
  outline: none;
  padding-left: 10px;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
`

export const RegisterNowBtn = styled.button`
  height: 35px;
  width: 120px;
  color: #ffffff;
  font-family: Roboto;
  font-weight: bold;
  background-color: #3b82f6;
  border-radius: 5px;
  border-width: 0;
  cursor: pointer;
`

export const ErrorText = styled.p`
  color: #ff0b37;
  font-family: Roboto;
  font-size: 10px;
  margin: 0;
`
