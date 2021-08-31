import React from 'react'
import { ScreenContainer, SignUpButtonContainer } from './styledLogin'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import {goToRegister} from '../../routes/coordinator'

const Login = () => {
    const history = useHistory

    return (
        <ScreenContainer>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToRegister(history)}
                    type={'submit'}
                    fullWidth
                    variant="text" color={'primary'}>Cadastrar</Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default Login
