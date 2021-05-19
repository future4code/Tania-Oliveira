import styled from "styled-components"



export const CardUsuario = styled.div`
    border: 5px solid lightgrey;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;

        .botaoDelete{
            border: none;
            background-color: lightsteelblue;
        }
`
export const EscolhaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: cursive;
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
`
export const BotoesContainer = styled.div`
    display: flex;
    


    .botoes{
        margin: 10px;
        border-radius: 5px;
        width: 10rem;
        box-shadow: 5px 5px 5px 1px;
        font-family: cursive;
    }

    .nome{
        margin: 10px;
        border-radius: 4px;
        width: 10rem;
        font-family: cursive;
        
    }
    .email{
        margin: 10px;
        border-radius: 4px;
        width: 10rem;
        font-family: cursive;
    }
    .botaoCadastrar{
        margin: 10px;
        border-radius: 5px;
        width: 10rem;
        box-shadow: 5px 5px 5px 1px;
        font-family: cursive;
    }
`
 

