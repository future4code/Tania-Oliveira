import { app } from './app'
import { getRegisterUser } from './endpoints/getRegisterUser'
import { postCreateAccount } from './endpoints/postCreateAccount';

app.post('/users/create', postCreateAccount)
app.get('/users/all', getRegisterUser)
