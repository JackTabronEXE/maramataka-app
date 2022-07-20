exports.up = function (knex) {
  return knex.schema.createTable('dates', function (table) {
    table.string('DMY').primary()
    table.integer('id')
    table.integer('moon_id').references()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dates')
}
