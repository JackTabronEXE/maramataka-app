exports.seed = (knex) =>
  knex('maramataka')
    .del()
    .then(() =>
      knex('maramataka').insert([
        {
          id: 1,
          name: 'Rākaunui',
          goodFor: 'Planning, productive work',
          energy: 'high',
          image: '',
          moonphase_id: 1,
        },
      ])
    )
