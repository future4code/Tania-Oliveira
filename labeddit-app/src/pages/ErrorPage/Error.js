import React from 'react'
import{ErrorPageContainer} from './styledError'


const Error = () => {
    return (
        <ErrorPageContainer>
            <h1>ERRO PÁGINA NÃO ENCONTRADA!</h1>
            <iframe src="https://giphy.com/embed/14uQ3cOFteDaU" width="100%" height="500" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </ErrorPageContainer>
    )
}

export default Error
