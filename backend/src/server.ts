import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();

app.use(express.json());

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

app.post('/orphanages', async (request, response) => {
    const {
        name,
	    latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
	    latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });
    
    await orphanagesRepository.save(orphanage);

    return response.json({ message: 'hello world' })
});

app.listen(3333);

// NATIVO sqlite3.query('SELECT * FROM users')
// QUERY BUILDER knex('users').select('*').where('name', 'Diego')

// ORM



