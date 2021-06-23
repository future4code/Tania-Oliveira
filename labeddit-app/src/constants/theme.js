import { createMuiTheme } from '@material-ui/core/styles'
import {primaryColor,neutralColor} from './colors'


const theme = createMuiTheme({
  palette: {
    primary: {
            main: primaryColor,
            contrastText: 'white'
    },
    secondary: {
      light: '#E0FFFF ',
      main: '#D3D3D3',
      
    },
    text:{
        primary: neutralColor
    }
    
  },
});
export default theme