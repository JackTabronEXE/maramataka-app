exports.up = function (knex) {
  return knex.schema.createTable('maramataka', function (table) {
    table.integer('id').primary()
    table.string('name')
    table.string('goodFor')
    table.string('energy')
    table.string('image')
    table.integer('moonphase_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('maramataka')
}
