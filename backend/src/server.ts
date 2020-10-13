import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar informação
// POST = Inserindo informação

// PUT = Editar informação
// DELETE = Excluindo informação

// Query Params: https://locahost:3333/users?serach=diego&page=2
// Route Params: https://locahost:3333/users/1 (Identificar um recurso)
// Body: https://locahost:3333/users/1 (Identificar um recurso)

app.listen(3333);

// NATIVO sqlite3.query('SELECT * FROM users')
// QUERY BUILDER knex('users').select('*').where('name', 'Diego')

// ORM



