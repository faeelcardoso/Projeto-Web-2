import Knex from 'knex'

// para alterar algo do banco
export async function up(knex: Knex) {
    // criando a tabela users
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('whatsapp').notNullable()
        table.string('bio').notNullable()
    })
}

// para refazer algo do banco, caso dê merda
export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
    // ou seja, se der merda, exclua a tabela criada
}