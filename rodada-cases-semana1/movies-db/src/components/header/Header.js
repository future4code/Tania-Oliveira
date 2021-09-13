import React from 'react'
import { HeaderContainer, Logo } from './styled'




const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo img width="50" src="favicon.ico" />
        <h1>MovieDb</h1>
      </HeaderContainer>
      {/* <Search> */}
        {/* <input onchange={this.searchChangeHandler.bind(this)} type="text" placeholder="procure um título" /> */}
        {/* <SearchIcon /> */}
        {/* </Search> */}
    </>
  )
}

export default Header
