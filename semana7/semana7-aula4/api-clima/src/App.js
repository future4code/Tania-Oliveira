import axios from 'axios';
import React from 'react';




export default class App extends React.Component {
  state={
    activity:{}
  }
  getActivity = () =>{
    axios.get('https://www.boredapi.com/api/activity/')
    .then((res)=>{
      console.log(res.data)
      this.setState({activity:res.data})

    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render(){
    const {activity, type, participants, price} = this.state.activity
    return(
      <div className='App'>
        <h1 className='titulo'>Está Entediado?</h1>
        <button className='botao' onClick={this.getActivity}>Escolha uma Forma de Diversão</button>
        <hr/>
        <h3 className='titulo'>Sugestões</h3>
        <p className='tagP'>Atividade: {activity}</p>
        <p className='tagP'>Tipo: {type}</p>
        <p className='tagP'>Participantes: {participants}</p>
        <p className='tagP'>Valor: {price}</p>
      </div>
    )
  }
}

