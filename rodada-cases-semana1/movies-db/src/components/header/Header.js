import React from 'react'
import { HeaderContainer, Logo } from './styled'
import SearchIcon from '@material-ui/icons/Search';




const Header = () => {
  return (
    <HeaderContainer>
      <Logo img width="50" src="favicon.ico" />
      <h1>MovieDb</h1>
      <input type="text"/>  
      <SearchIcon/>
    </HeaderContainer>
  )
}

export default Header
