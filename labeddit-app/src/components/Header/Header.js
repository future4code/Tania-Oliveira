import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { StyledToolbar } from './styledHeader'
import { goToFeed, goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'




 projeto_labook
const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem('token')
    const history= useHistory()
    
    
    const logout = () =>{
        localStorage.removeItem('token')
    }

    const rightButtonAction = () =>{
        if(token){
            logout()
            setRightButtonText('Login')
            goToLogin(history)
        }else {
            goToLogin(history)
        }
    }


            </StyledToolbar>
        </AppBar>
    )
}
export default Header