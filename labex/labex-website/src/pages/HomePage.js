import React from 'react'
import { useHistory } from 'react-router-dom'
import Route from '../route/RoutesManager'
import { goToListTripPage, goToLoginPage, goBack } from '../route/cordinator'

const HomePage = () => {

    const history = useHistory()

  

    return (
        
        <div>
            <Route />
            <h1>HOMEPAGE LABEX</h1>
        <button onClick={()=>goToListTripPage(history)}>Ver Viagens</button>
            {/* Para fazermos login como administrador */}
        <button onClick={()=>goToLoginPage(history)}>Área Restrista</button>
        <button onClick={()=>goBack(history)}>Voltar</button>
        </div>
    )
}

export default HomePage
