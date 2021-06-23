import React from 'react'
import { LoginForm } from './LoginStyled'
import { TextField, Button } from '@material-ui/core'
import PageTitle from '../components/PageTitle'
// import useInput from '../hooks/useInput'
// import axios from 'axios'
// import { BASE_URL } from '../constants/urls'
// import { useHistory } from 'react-router-dom'


const LoginPage = () => {
    // // const [email, handleEmail] = useInput('')
    // // const [password, handlePassword] = useInput('')
    // // const history = useHistory()


    // // const onClickLogin = () => {
    // //     const body = {email, password}
    // //     axios.post(`${BASE_URL}/login`, body)
    // //     .then(()=>{
    // //         localStorage.setItem('token', response.data.token)
    // //         history.push('/admin/trips/list')
    // //     })
    // //     .catch(()=> alert(err.response.data.message))
    // }
    // // const [email, handleEmail] = useInput('')
    // // const [password, handlePassword] = useInput('')
    // // const history = useHistory()
  

    // // const onClickLogin = () => {
    // //     const body = {email, password}
    // //     axios.post(`${BASE_URL}/login`, body)
    // //     .then(()=>{
    // //         localStorage.setItem('token', response.data.token)
    // //         history.push('/admin/trips/list')
    // //     })
    // //     .catch(()=> alert(err.response.data.message))
    // }
    return (
        <div>
           <PageTitle title={'Login'}/>
           <LoginForm>
               <TextField label={'email'} type={'email'}/>
               <TextField label={'Senha'} type={'password'}/>
               <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
               
           </LoginForm>
           {/* <input type='password' value={email} onChange={handleEmail} placeholder="E-mail"></input>
           <input type='password' value={password} onChange={handlePassword} placeholder="Senha"></input>
           <button onClick={onClickLogin}>Enviar</button> */}
            {/* <input type='password' value={email} onChange={handleEmail} placeholder="E-mail"></input>
           <input type='password' value={password} onChange={handlePassword} placeholder="Senha"></input>
           <button onClick={onClickLogin}>Enviar</button> */}
        </div>
    )
}

export default LoginPage
