import React from 'react'
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
    return (
        <div>
           <h1>LOGIN</h1> 
           {/* <input type='password' value={email} onChange={handleEmail} placeholder="E-mail"></input>
           <input type='password' value={password} onChange={handlePassword} placeholder="Senha"></input>
           <button onClick={onClickLogin}>Enviar</button> */}
        </div>
    )
}

export default LoginPage
