import express from 'express';
import cors from 'cors'
import routes from './routes';

const app = express();
 
app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(3333)
// BACKEND executando na porta 3333

//localhost:3333 isso é a rota
//localhost:3333/"users" isso é o recurso
