import Knex from 'knex'

// para alterar algo do banco
export async function up(knex: Knex) {
    // criando a tabela class_schedule
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()
       
        // pego o id do prof
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        // pego a hr que a conexão aconteceu
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP')) // hr exata, como se fosse o now()
            .notNullable()
    })
}

// para refazer algo do banco, caso dê merda
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
    // ou seja, se der merda, exclua a tabela criada
}