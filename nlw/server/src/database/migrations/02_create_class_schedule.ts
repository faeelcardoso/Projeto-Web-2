import Knex from 'knex'

// para alterar algo do banco
export async function up(knex: Knex) {
    // criando a tabela class_schedule
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()

        table.integer('week_day').notNullable() // dia da semana, ex: "1" = segunda
        table.integer('from').notNullable() // começo tal hr
        table.integer('to').notNullable() // e termino tal hr
       
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

// para refazer algo do banco, caso dê merda
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule')
    // ou seja, se der merda, exclua a tabela criada
}