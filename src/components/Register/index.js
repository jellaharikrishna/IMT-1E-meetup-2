import ChangeContext from '../../context/ChangeContext'

import Header from '../Header'

import {
  RegisterAppConatiner,
  RegisterBgContainer,
  RegisterImage,
  RegisterForm,
  RegisterHeading,
  RegisterInputContainer,
  RegisterLabel,
  RegisterInput,
  Select,
  RegisterNowBtn,
  ErrorText,
} from './styledComponent'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <ChangeContext.Consumer>
    {value => {
      const {
        name,
        topic,
        isError,
        changeName,
        changeTopic,
        onSubmitRegister,
        updateError,
      } = value

      const onSubmitRegisterNow = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          onSubmitRegister()
        } else {
          updateError()
        }
      }

      const onChangeNameText = event => {
        changeName(event.target.value)
      }

      const onChangeTopicText = event => {
        changeTopic(event.target.value)
      }

      return (
        <RegisterAppConatiner>
          <Header />
          <RegisterBgContainer>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegisterForm onSubmit={onSubmitRegisterNow}>
              <RegisterHeading>Let us join</RegisterHeading>
              <RegisterInputContainer>
                <RegisterLabel htmlFor="name">NAME</RegisterLabel>
                <RegisterInput
                  value={name}
                  id="name"
                  placeholder="Your name"
                  type="text"
                  onChange={onChangeNameText}
                />
              </RegisterInputContainer>
              <RegisterInputContainer>
                <RegisterLabel htmlFor="topic">TOPICS</RegisterLabel>
                <Select value={topic} id="topic" onChange={onChangeTopicText}>
                  {topicsList.map(each => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </Select>
              </RegisterInputContainer>
              <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>
              <ErrorText>{isError && 'Please enter your name'}</ErrorText>
            </RegisterForm>
          </RegisterBgContainer>
        </RegisterAppConatiner>
      )
    }}
  </ChangeContext.Consumer>
)
export default Register
