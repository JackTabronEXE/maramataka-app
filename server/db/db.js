const connection = require('./connection')

function getDates(db = connection) {
  return db('maramataka')
    .join('dates', 'maramataka.id', 'dates.moon_id')
    .select(
      'dates.id as id',
      'DMY',
      'name',
      'goodFor',
      'energy',
      'image',
      'maramataka.id as moonPhaseId'
    )
}

module.exports = {
  getDates,
}
