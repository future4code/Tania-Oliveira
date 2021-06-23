import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { InputsContainer } from './styledLogin'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'
import { login } from "../../services/user"
import { goToFeed } from '../../routes/coordinator'


const LoginForm = ({ setRightButtonText }) => {
    const [form, onChange, clear] = useForm({ email: '', password: '' })
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText, setIsLoading)
    }


    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'email'}
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'password'}
                />
                <Button
                    type={'submit'}
                    fullWidth
                    variant="contained" color={'primary'}>Entrar</Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm
