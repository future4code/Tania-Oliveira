import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { ButtonsContainer } from './HomeStyled'
import PageTitle from '../components/PageTitle'
import { goToListTripPage, goToLoginPage, goBack } from '../route/cordinator'


const HomePage = () => {

    const history = useHistory()



    return (

        <div>
           <PageTitle title={'Labex'}/>
            <ButtonsContainer>
            <Button onClick={() => goToListTripPage(history)}>Ver Viagens</Button>
            {/* Para fazermos login como administrador */}
            <Button variant={"contained"} color={"primary"} onClick={() => goToLoginPage(history)}>Área Restrista</Button>
            <Button variant={"contained"} color={"primary"} onClick={() => goBack(history)}>Voltar</Button>
            </ButtonsContainer>
        </div>
    )
}

export default HomePage
