import React from "react"
import { EscolhaContainer } from "./components/styled"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuario from "./components/TelaListaUsuario"
import GlobalStyle from "./components/global"




export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro Página não encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }


  render() {

    return (
      <EscolhaContainer>
      <div>
        <h1>Labenusers</h1> <br></br>
        {this.escolheTela()}
      </div>
      <GlobalStyle />
      </EscolhaContainer>     
    )
  }
}
