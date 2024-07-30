import {Link} from 'react-router-dom'

import Header from '../Header'

import ChangeContext from '../../context/ChangeContext'

import {
  HomeAppConatiner,
  HomeBgContainer,
  HomeContentContainer,
  HomeContent,
  HomeMainHeading,
  HomePara,
  HomeRegisterBtn,
  HomeMeetupImage,
  RegisterName,
  RegisterTopic,
} from './styledComponent'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <ChangeContext.Consumer>
      {value => {
        const {name, topic, isRegister} = value

        return (
          <HomeAppConatiner>
            <Header />
            <HomeBgContainer>
              <HomeContentContainer>
                {isRegister ? (
                  <HomeContent>
                    <RegisterName>Hello {name}</RegisterName>
                    <RegisterTopic>Welcome to {topic}</RegisterTopic>
                  </HomeContent>
                ) : (
                  <HomeContent>
                    <HomeMainHeading>Welcome to Meetup</HomeMainHeading>
                    <HomePara>Please register for the topic</HomePara>
                    <Link to="/register">
                      <HomeRegisterBtn onClick={onClickRegister}>
                        Register
                      </HomeRegisterBtn>
                    </Link>
                  </HomeContent>
                )}
                <HomeMeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContentContainer>
            </HomeBgContainer>
          </HomeAppConatiner>
        )
      }}
    </ChangeContext.Consumer>
  )
}

export default Home
