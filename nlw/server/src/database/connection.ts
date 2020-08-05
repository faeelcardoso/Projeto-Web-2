import knex from 'knex'
import path from 'path'

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') 
        // estou dizendo praticamente para criar na pasta atual(__dirname) o arq database.sqlite
    },
    useNullAsDefault: true,
    // O sqllite não sabe o valor que ele tem que jogar pra algo quando n tem nada, assim falo para ele setar nulo
});

export default db;