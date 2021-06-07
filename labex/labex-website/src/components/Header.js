import React from 'react'
import './HeaderStyled'


function Header() {
    return (
        <div className='header'>
            <img className='header_logo' />
            <h1>LabeX</h1>
            <div className='header_nav'>
                <div className='header_adm'>
                    <button className='header_button_adm'>Acesso Administrador</button>
                </div>
                <div className='header-login'>
                    <button className='header_button_login'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header
