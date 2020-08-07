import Knex from 'knex'

// para alterar algo do banco
export async function up(knex: Knex) {
    // criando a tabela classes
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()
       
        // relacionamento para procurar os id's dos professores na tabela users
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // caso altere ou exclua um id, um professor da tabela, tudo envolvido a esse id, esse professor é alterado/excluo da tabela, ou seja, "cascata"
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

// para refazer algo do banco, caso dê merda
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
    // ou seja, se der merda, exclua a tabela criada
}