import TextField from '@material-ui/core/TextField'
import React from 'react'
import { InputsContainer } from './styledLogin'
import useForm from '../../hooks/useForm'
import { Button } from '@material-ui/core'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: '', password: '' })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <InputsContainer>
            <form onSubmitForm={onSubmitForm}>
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