import styled from "styled-components";
import { mainColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
 font-size: 2em;
  height: 10vh;
  background: ${mainColor};
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  `

export const Logo = styled.img`
padding: 5em;
`
export const Search = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-top: 1em;
  input{
  font-size:2em ;
  padding: 15 15 15 15 ;
  border-radius: 5px;
  border: solid;
  box-shadow: 1px 1px 2px black;
  }
`