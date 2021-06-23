import React, { useEffect, useState } from 'react'
import { CreateFormStyled } from './CreateTripStyled'
import { TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import PageTitle from '../components/PageTitle'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { useForm } from '../hooks/useForm'


const ApplictionForm = () => {
    const [trips, setTrips] = useState([])
    const [form, onChangeInput] = useForm({

        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: '',
        trip: null

    })


    useEffect(() => {
        axios.get(`${BASE_URL}/trips`)
            .then((response) => {
                setTrips(response.data.trips)
            })
    }, [])
    const onSubmitApplication = (e) => {
        e.preventDefault()

        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`${BASE_URL}/trips/${form.trip.id}/apply`, body)

    }



    return (
        <div>
            <PageTitle title={'Inscreva-se Para a Experiência de Sua Vida'} />
            <CreateFormStyled onSubmit={onSubmitApplication}>
                <TextField
                    label={'Nome do Candidato:'}
                    onChange={onChangeInput}
                    value={form['name']}
                    name={'name'}
                />
                <TextField
                    label={'Idade:'} type={'number'}
                    onChange={onChangeInput}
                    value={form['age']}
                    name={'age'}
                />
                <TextField
                    label={'Texto de Aplicação:'} helperText='Explique sua motivação, e por que devemos escolher você!'
                    onChange={onChangeInput}
                    value={form['applicationText']}
                    name={'applicationText'}
                />
                <TextField
                    label={'Profissão:'}
                    onChange={onChangeInput}
                    value={form['profession']}
                    name={'profession'}
                />
                <FormControl>
                    <InputLabel id="select-paises">País</InputLabel>
                    <Select labelId="select-paises"
                        onChange={onChangeInput}
                        value={form['country']}
                        name={'country'}
                    >
                        <MenuItem value={'Brasil'}>Brasil</MenuItem>
                        <MenuItem value={'Estados Unidos'}>Estados Unidos</MenuItem>
                        <MenuItem value={'França'}>França</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="select-viagens">Viagens</InputLabel>
                    <Select labelId="select-viagens"
                        onChange={onChangeInput}
                        value={form['trip']}
                        name={'trip'}
                    >
                        {trips.map((trip) => {
                            return <MenuItem value={trip}>{trip.name}</MenuItem>
                        })}

                    </Select>
                </FormControl>
                <Button variant={'contained'} color={'primary'} type={'submit'}>Increver-se</Button>
            </CreateFormStyled>

        </div>
    )
}

export default ApplictionForm
