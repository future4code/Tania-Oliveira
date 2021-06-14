import React from 'react'
import Header from './components/Header'
import { useHistory } from 'react-router-dom'
import RoutesManager  from './route/RoutesManager'
import { goToHome, goBack } from './route/cordinator'

function App() {

  const history = useHistory()

  

  return (

    <>

      <div>
        <RoutesManager />
        {/* Para o usuário escolher entre 
        Área Administrativa e Lista de Viagens */}
        <button onClick={()=>goToHome(history)}>Home</button>

        {/* Para vermos todas as viagens */}
        <button>Escolha Sua Próxima Viagem</button>

        {/* Para o usuário se candidatar à viagens, 
          página que vai ter o formulário de inscrição */}
        <button onClick={()=>goBack(history)}>Seja o Próximo Homen ou Mulher a Conhecer a Lua,
            Pode Também Candidatar Sua Sogra!</button>


      </div>

      <div className="App">
        <Header />
        <h1>hello</h1>
      </div>
    </>
  );
}

export default App;
