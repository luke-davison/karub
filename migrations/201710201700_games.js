exports.up = knex => knex.schema.createTable('games', table => {
  table.increments('id').primary()
  table.string('temples')
  table.string('adventurers')
  table.string('tiles')
})

exports.down = knex => knex.schema.dropTable('games')
