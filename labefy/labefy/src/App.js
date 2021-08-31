import React from "react"
import GlobalStyle from "./global"
import LibraryMusic from "./components/LibraryMusic/LibraryMusic"
import Home from "./components/Home/Home"
import Create from "./components/Create/Create"
import {AppContainer} from "./AppStyled"




export default class App extends React.Component {
  state = {
    telaAtual: 'home'
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'home':
        return <Home irParaHome={this.irParaHome} />
      case 'create':
        return <Create irParaCreate={this.irParaCreate} />
      case 'library':
        return <LibraryMusic irParaLibrar={this.irParaLibrary} />
      default:
        return <div>Erro</div>
    }
  }

  irParaHome = () => {
    this.setState({ telaAtual: "home" })
  }
  irParaCreate = () => {
    this.setState({ telaAtual: "create" })
  }
  irParaLibrary = () => {
    this.setState({ telaAtual: "library" })
  }


  render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
        <div className='main'>
          <div className='header'>
            <h1>Labefy</h1>
          </div>
          <nav>
            <button className='home' onClick={this.irParaHome}>home</button>
            <button className='search' >buscar</button>
            <button className='library' onClick={this.irParaLibrary}>biblioteca</button>
            <button className='createPlayList' onClick={this.irParaCreate}>criar playlist</button>
          </nav>
          {this.escolheTela()}
          <div className='footer'>
            <button>PLAY</button>
          </div>
        </div>
        </AppContainer>
      </>
    )
  }
}