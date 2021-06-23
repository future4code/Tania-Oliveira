import React from 'react'
import { ScreenContainer, SignUpButtonContainer } from './styledLogin'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import {goToRegister} from '../../routes/coordinator'
import useUnProtectedPage from '../../hooks/useProtectedPage'

const Login = ({setRightButtonText}) => {
    useUnProtectedPage()

    const history = useHistory()

    return (
        <ScreenContainer>
            <LoginForm setRightButtonText={setRightButtonText}/>
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
