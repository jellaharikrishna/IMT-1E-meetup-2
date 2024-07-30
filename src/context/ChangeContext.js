import React from 'react'

const ChangeContext = React.createContext({
  name: '',
  changeName: () => {},
  topic: 'Arts and Culture',
  changeTopic: () => {},
  isRegister: false,
  onSubmitRegister: () => {},
  isError: false,
  updateError: () => {},
})

export default ChangeContext
