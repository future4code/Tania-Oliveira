import React from "react"
import axios from "axios"

export default class Create extends React.Component {
  state = {
    playlist: '',
    listaPlayList:[]
  }
  componentDidMount(){
    this.getAllPlaylists()
  }

  handleList = (e) =>{
    this.setState({playlist: e.target.value})
  }
  

  criarPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const boby = {
      name: this.state.playlist
    }
    

   axios.post(url, boby, {
    headers: {
        Authorization: "tania-oliveira-paiva"
    }
   })
   .then((res)=>{
    this.setState({playlist:""})
   })
   .catch((err)=>{
    alert(err.response.data.message)
   })

    
  }
  getAllPlaylists = ()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
          Authorization: "tania-oliveira-paiva"
      }
     })
     .then((res)=>{
      this.setState({listaPlayList:res.data.result.list})
     })
     .catch((err)=>{
      alert(err.response.data.message)
     })
    
  }
  



  render() {
    const mostraPlayList = this.state.listaPlayList.map((list) => {
      return(
        <li key={list.id}>
          <button>X</button>
          {list.name}
        </li>
      )
    })
    return (
      <>
        <div>
          <h2>Criar PlayList</h2>
          <label>
            <input placeholder={'Nome Nova Playlist'} 
            value={this.state.playlist}
            onChange={this.handleList}></input>
            <button onClick={this.criarPlayList}>Criar</button>
          </label>
          {mostraPlayList}
        </div>
      </>
    )
  }
}