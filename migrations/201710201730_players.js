exports.up = knex => knex.schema.createTable('players', table => {
  table.increments('id').primary()
  table.string('playerName')
})

exports.down = knex => knex.schema.dropTable('players')
