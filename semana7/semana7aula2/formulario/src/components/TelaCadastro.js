import React from "react"
import axios from "axios"
import { BotoesContainer } from "./styled"

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    };

    handleName = (event) => {
        this.setState({ nome: event.target.value })
    }
    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "tania-oliveira-paiva"
            }
        })
            .then((res) => {
                alert("Usuário(a) cadastrado(a) com sucesso!")
                this.setState({ nome: "", email: "" })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    render() {

        return (
            <BotoesContainer>
                <div >
                    <div >
                    <button  className="botoes" onClick={this.props.irParaLista}>Ir para lista de Usuários</button>
                    </div><br></br>
                    
                    <h2>Criar Usuário</h2>
                    <div>
                        <input className="nome" placeholder={"Nome"} value={this.state.nome} onChange={this.handleName} />
                    </div>
                    <div>
                        <input className="email" placeholder={"E-mail"} value={this.state.email} onChange={this.handleEmail} />
                    </div>
                    <button className="botaoCadastrar" onClick={this.fazerCadastro}>Cadastrar</button>
                </div>
            </BotoesContainer>
        )
    }
}