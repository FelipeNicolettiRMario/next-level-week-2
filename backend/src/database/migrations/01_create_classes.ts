import knex from 'knex';

export async function up(knex: knex){
    return knex.schema.createTable('class',table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    })
}

export async function down(knex: knex){
    return knex.schema.dropTable('class');
}