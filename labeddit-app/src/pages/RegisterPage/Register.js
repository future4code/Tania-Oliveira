import React from 'react'
import { ScreenContainer } from './styledRegister'
import RegisterForm from './RegisterForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const Register = ({setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <RegisterForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default Register
