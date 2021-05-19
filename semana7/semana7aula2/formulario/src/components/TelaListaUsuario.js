
import React from "react"
import axios from "axios"
import {CardUsuario} from "./styled"
import { BotoesContainer } from "./styled"





export default class TelaListaUsuario extends React.Component {
    state = {
        usuarios: []
    }


    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "tania-oliveira-paiva"
                }
            })

            this.setState({ usuarios: res.data })
        } catch (err) {
            alert("Ocorreu um problema!")
        }
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "tania-oliveira-paiva"
            }
        })
            .then((res) => {
                alert("Usuário deletado com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro!")
            })
    }

    render() {
        const listaUsuario = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button  className="botaoDelete" onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>)
        })

        return (
            <BotoesContainer>
            <div>
                <div>
                 <button className="botoes" onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                </div><br></br>
                <div>
                <h2>Lista de Usuários</h2><br></br>
                {listaUsuario}
                </div>
            </div>
            </BotoesContainer>
        )
    }
}