exports.up = knex => knex.schema.createTable('moves', table => {
  table.increments('id').primary()
  table.integer('playerId')
  table.integer('gameId')
  table.string('adventurerPositions')
  table.string('adventurerGems')
  table.string('adventurerRewards')
  table.string('tilesPlacements')
})

exports.down = knex => knex.schema.dropTable('moves')
