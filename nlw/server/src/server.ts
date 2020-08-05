import express from 'express';

const app = express();

app.use(express.json());

// Métodos:
/*
GET: Buscar ou listar uma informação.
POST: Criar alguma nova informação.
PUT: Atualizar uma informação existente.
DELETE: Deletar uma informação existente.
*/

// Corpo (Request Body): Dados para criação ou atualização de um registro 
// Route Params: Identificar qual recurso eu quero atualizar ou deletar :id
// Query Params: Paginação, filtros, ordenação

app.get('/', (req, resp) => {
    return resp.json({ message: 'Hello World!' })
})

app.listen(3333)
// BACKEND executando na porta 3333

//localhost:3333 isso é a rota
//localhost:3333/"users" isso é o recurso
