exports.seed = (knex) =>
  knex('maramataka')
    .del()
    .then(() =>
      knex('maramataka').insert([
        {
          id: 1,
          name: 'Rākaunui',
          goodFor:
            'Very productive day physically and mentally. Good time to ahcieve short term goals. Good time to engage in physical communal activities. Celebrate the new lunar cycle.',
          energy: 'high',
          image: 'rakaunui.png',
          moonphase_id: 1,
        },
        {
          id: 2,
          name: 'Rākaumatohi',
          goodFor:
            'Very productive day physically and mentally. Good time to ahcieve short term goals. You may feel impulsive and act accordingly. Great time for group activity.',
          energy: 'high',
          image: 'rakaumatohi.png',
          moonphase_id: 2,
        },
        {
          id: 3,
          name: 'Takirau',
          goodFor:
            'Non-productive day physically. Time to rest and reset. Good time to get out into nature. Good day for strategic planning.',
          energy: 'medium',
          image: 'takirau.png',
          moonphase_id: 3,
        },
        {
          id: 4,
          name: 'Oike',
          goodFor:
            'A time to rest and recuperate. Great time to clean and reset your space. Good time to visit whānau.',
          energy: 'medium',
          image: 'oike.png',
          moonphase_id: 4,
        },
        {
          id: 5,
          name: 'Korekore Tuatahi',
          goodFor:
            'Low physical energy. Utilise your mind and brain power. Great time for strategic planning and workplace reviews. Leverage creativity and mental energy. Support whānau who are sufferring mentally.',
          energy: 'low',
          image: 'korekore-tuatahi.png',
          moonphase_id: 5,
        },
        {
          id: 6,
          name: 'Korekore Rawea',
          goodFor:
            'Low physical energy. Support whānau who are sufferring mentally. Be wary of mental distress at home and at work. A good time to hold wananga.',
          energy: 'low',
          image: 'korekore-rawea.png',
          moonphase_id: 6,
        },
        {
          id: 7,
          name: 'Korekore Whakapiri',
          goodFor:
            'A good time to hold wananga. Time to plan for the high energy period coming tomorrow. Good time to leverage your creativity.',
          energy: 'low',
          image: 'korekore-whakapiri.png',
          moonphase_id: 7,
        },
        {
          id: 8,
          name: 'Tangaroa ā Mua',
          goodFor:
            'Very productive time mentally and physically. Great time for team events and trips. Good time to push yourself physically.',
          energy: 'medium',
          image: 'tangaroa-a-mua.png',
          moonphase_id: 8,
        },
        {
          id: 9,
          name: 'Tangaroa ā Roto',
          goodFor:
            'Very productive time mentally and physically. Great time to build new relationships. A time of abundance so take the best and leave the rest.',
          energy: 'high',
          image: 'tangaroa-a-roto.png',
          moonphase_id: 9,
        },
        {
          id: 10,
          name: 'Tangaroa Whakapau',
          goodFor:
            'Very productive time mentally and physically. Great time for ceremonies. Push yourself physically. Great time to come up with ideas.',
          energy: 'high',
          image: 'tangaroa-whakapau.png',
          moonphase_id: 10,
        },
        {
          id: 11,
          name: 'Tangaroa Whāriki Koikoi',
          goodFor:
            'Very productive time mentally and physically. Great time for brain exercises and problem solving. Great time to come up with ideas with others.',
          energy: 'high',
          image: 'tangaroa-whariki-koikoi.png',
          moonphase_id: 11,
        },
        {
          id: 12,
          name: 'Ōtane',
          goodFor:
            'A significant day for masculine energy, leverage your masculine energy today to your advantage.',
          energy: 'high',
          image: 'otane.png',
          moonphase_id: 12,
        },
        {
          id: 13,
          name: 'Ōrongonui',
          goodFor:
            'Very productive time mentally and physically. Lots of space for positivity and personal growth today. Good time to communicate thought provoking ideas to mull over during the upcoming low energy period.',
          energy: 'high',
          image: 'orongonui.png',
          moonphase_id: 13,
        },
        {
          id: 14,
          name: 'Ōmutu',
          goodFor:
            'You may feel indecisive and a bit frantic today. Today is a great day to spend with whānau. Prepare for the upcoming low period.',
          energy: 'high',
          image: 'omutu.png',
          moonphase_id: 14,
        },
        {
          id: 15,
          name: 'Mutu Whenua',
          goodFor:
            'Moderate productivity. A good time for cleaning and refreshing your spaces. Good time for strategic planning. Time to relax and reconnect with yourself. ',
          energy: 'medium',
          image: 'mutu-whenua.png',
          moonphase_id: 15,
        },
        {
          id: 16,
          name: 'Whiro',
          goodFor:
            'Good day for strategic planning and setting long term objectives. A good time to reflect on performance, accountability and bad habits.',
          energy: 'low',
          image: 'whiro.png',
          moonphase_id: 16,
        },
      ])
    )
