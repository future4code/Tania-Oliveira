import app from "./app"
import { postEstudante } from "./endpoints/postEstudante"
import { postTurma } from './endpoints/postTurma'
import { postDocente } from './endpoints/postDocente';



app.post('/turma', postTurma)
app.post('/estudante', postEstudante)
app.post('/docente', postDocente)