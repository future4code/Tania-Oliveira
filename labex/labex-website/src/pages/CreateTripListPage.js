import React from 'react'
import { CreateFormStyled } from './CreateTripStyled'
import { TextField, Button } from '@material-ui/core'
import PageTitle from '../components/PageTitle'
import { KeyboardDatePicker } from '@material-ui/pickers'



// import useInput from '../hooks/useInput'
// import axios from 'axios'
// import { BASE_URL } from '../constants/urls'
// import { useHistory } from 'react-router-dom'


const CreateTrip = () => {
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
            <PageTitle title={'Criar Viagem'} />
            <CreateFormStyled>
                <TextField label={'Nome'} />
                <TextField label={'Planeta'} />
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"/>
                <TextField label={'Descrição'} />
                <TextField label={'Duração em Dias'}  type={'number'} />
                <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>

            </CreateFormStyled>
            {/* <input type='password' value={email} onChange={handleEmail} placeholder="E-mail"></input>
           <input type='password' value={password} onChange={handlePassword} placeholder="Senha"></input>
           <button onClick={onClickLogin}>Enviar</button> */}
        </div>
    )
}

export default CreateTrip
