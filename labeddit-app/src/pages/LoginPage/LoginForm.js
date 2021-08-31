import TextField from '@material-ui/core/TextField'

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
