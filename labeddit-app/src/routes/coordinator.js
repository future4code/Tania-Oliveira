export const goToLogin = (history) =>{
    history.push('/')
}
export const goToRegister = (history) =>{
    history.push('/register')
}
export const goToFeed = (history) =>{
    history.push('/feed')
}
export const goToPost = (history) =>{
    history.push(`/post/:id`)
}