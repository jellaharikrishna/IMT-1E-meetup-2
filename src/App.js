import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import ChangeContext from './context/ChangeContext'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegister: false,
    isError: false,
  }

  updateError = () => this.setState({isError: true})

  onSubmitRegister = () => this.setState({isRegister: true})

  changeTopic = topic => this.setState({topic})

  changeName = name => this.setState({name})

  render() {
    const {name, topic, isRegister, isError} = this.state
    return (
      <ChangeContext.Provider
        value={{
          name,
          topic,
          isRegister,
          isError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          onSubmitRegister: this.onSubmitRegister,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ChangeContext.Provider>
    )
  }
}

export default App
