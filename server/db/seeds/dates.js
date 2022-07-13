exports.seed = (knex) =>
  knex('dates')
    .del()
    .then(() =>
      knex('dates').insert([
        { DMY: '14 July 2022', id: 1, moon_id: 1 },
        { DMY: '15 July 2022', id: 2, moon_id: 2 },
        { DMY: '16 July 2022', id: 3, moon_id: 3 },
        { DMY: '17 July 2022', id: 4, moon_id: 4 },
        { DMY: '18 July 2022', id: 5, moon_id: 5 },
        { DMY: '19 July 2022', id: 6, moon_id: 6 },
        { DMY: '20 July 2022', id: 7, moon_id: 7 },
        { DMY: '21 July 2022', id: 8, moon_id: 8 },
        { DMY: '22 July 2022', id: 9, moon_id: 9 },
        { DMY: '23 July 2022', id: 10, moon_id: 10 },
        { DMY: '24 July 2022', id: 11, moon_id: 11 },
        { DMY: '25 July 2022', id: 12, moon_id: 12 },
        { DMY: '26 July 2022', id: 13, moon_id: 13 },
        { DMY: '27 July 2022', id: 14, moon_id: 14 },
        { DMY: '28 July 2022', id: 15, moon_id: 15 },
        { DMY: '29 July 2022', id: 16, moon_id: 16 },
        { DMY: '30 July 2022', id: 17, moon_id: 17 },
        { DMY: '31 July 2022', id: 18, moon_id: 18 },
        { DMY: '1 August 2022', id: 19, moon_id: 19 },
        { DMY: '2 August 2022', id: 20, moon_id: 20 },
        { DMY: '3 August 2022', id: 21, moon_id: 21 },
        { DMY: '4 August 2022', id: 22, moon_id: 22 },
        { DMY: '5 August 2022', id: 23, moon_id: 23 },
        { DMY: '6 August 2022', id: 24, moon_id: 24 },
        { DMY: '7 August 2022', id: 25, moon_id: 25 },
        { DMY: '8 August 2022', id: 26, moon_id: 26 },
        { DMY: '9 August 2022', id: 27, moon_id: 27 },
        { DMY: '10 August 2022', id: 28, moon_id: 28 },
        { DMY: '11 August 2022', id: 29, moon_id: 29 },
        { DMY: '12 August 2022', id: 30, moon_id: 30 },
        { DMY: '13 August 2022', id: 31, moon_id: 1 },
        { DMY: '14 August 2022', id: 32, moon_id: 2 },
        { DMY: '15 August 2022', id: 33, moon_id: 3 },
        { DMY: '16 August 2022', id: 34, moon_id: 4 },
        { DMY: '17 August 2022', id: 35, moon_id: 5 },
        { DMY: '18 August 2022', id: 36, moon_id: 6 },
        { DMY: '19 August 2022', id: 37, moon_id: 7 },
        { DMY: '20 August 2022', id: 38, moon_id: 8 },
        { DMY: '21 August 2022', id: 39, moon_id: 9 },
        { DMY: '22 August 2022', id: 40, moon_id: 10 },
        { DMY: '23 August 2022', id: 41, moon_id: 11 },
        { DMY: '24 August 2022', id: 42, moon_id: 12 },
        { DMY: '25 August 2022', id: 43, moon_id: 13 },
        { DMY: '26 August 2022', id: 44, moon_id: 14 },
        { DMY: '27 August 2022', id: 45, moon_id: 15 },
        { DMY: '28 August 2022', id: 46, moon_id: 16 },
        { DMY: '29 August 2022', id: 47, moon_id: 17 },
        { DMY: '30 August 2022', id: 48, moon_id: 18 },
        { DMY: '31 August 2022', id: 49, moon_id: 19 },
        { DMY: '1 September 2022', id: 50, moon_id: 20 },
        { DMY: '2 September 2022', id: 51, moon_id: 21 },
        { DMY: '3 September 2022', id: 52, moon_id: 22 },
        { DMY: '4 September 2022', id: 53, moon_id: 23 },
        { DMY: '5 September 2022', id: 54, moon_id: 24 },
        { DMY: '6 September 2022', id: 55, moon_id: 25 },
        { DMY: '7 September 2022', id: 56, moon_id: 26 },
        { DMY: '8 September 2022', id: 57, moon_id: 27 },
        { DMY: '9 September 2022', id: 58, moon_id: 28 },
        { DMY: '10 September 2022', id: 59, moon_id: 29 },
        { DMY: '11 September 2022', id: 60, moon_id: 30 },
        { DMY: '12 September 2022', id: 61, moon_id: 1 },
        { DMY: '13 September 2022', id: 62, moon_id: 2 },
        { DMY: '14 September 2022', id: 63, moon_id: 3 },
        { DMY: '15 September 2022', id: 64, moon_id: 4 },
        { DMY: '16 September 2022', id: 65, moon_id: 5 },
        { DMY: '17 September 2022', id: 66, moon_id: 6 },
        { DMY: '18 September 2022', id: 67, moon_id: 7 },
        { DMY: '19 September 2022', id: 68, moon_id: 8 },
        { DMY: '20 September 2022', id: 69, moon_id: 9 },
        { DMY: '21 September 2022', id: 70, moon_id: 10 },
        { DMY: '22 September 2022', id: 71, moon_id: 11 },
        { DMY: '23 September 2022', id: 72, moon_id: 12 },
        { DMY: '24 September 2022', id: 73, moon_id: 13 },
        { DMY: '25 September 2022', id: 74, moon_id: 14 },
        { DMY: '26 September 2022', id: 75, moon_id: 15 },
        { DMY: '27 September 2022', id: 76, moon_id: 16 },
        { DMY: '28 September 2022', id: 77, moon_id: 17 },
        { DMY: '29 September 2022', id: 78, moon_id: 18 },
        { DMY: '30 September 2022', id: 79, moon_id: 19 },
        { DMY: '1 October 2022', id: 80, moon_id: 20 },
        { DMY: '2 October 2022', id: 81, moon_id: 21 },
        { DMY: '3 October 2022', id: 82, moon_id: 22 },
        { DMY: '4 October 2022', id: 83, moon_id: 23 },
        { DMY: '5 October 2022', id: 84, moon_id: 24 },
        { DMY: '6 October 2022', id: 85, moon_id: 25 },
        { DMY: '7 October 2022', id: 86, moon_id: 26 },
        { DMY: '8 October 2022', id: 87, moon_id: 27 },
        { DMY: '9 October 2022', id: 88, moon_id: 28 },
        { DMY: '10 October 2022', id: 89, moon_id: 29 },
        { DMY: '11 October 2022', id: 90, moon_id: 30 },
        { DMY: '12 October 2022', id: 91, moon_id: 1 },
        { DMY: '13 October 2022', id: 92, moon_id: 2 },
        { DMY: '14 October 2022', id: 93, moon_id: 3 },
        { DMY: '15 October 2022', id: 94, moon_id: 4 },
        { DMY: '16 October 2022', id: 95, moon_id: 5 },
        { DMY: '17 October 2022', id: 96, moon_id: 6 },
        { DMY: '18 October 2022', id: 97, moon_id: 7 },
        { DMY: '19 October 2022', id: 98, moon_id: 8 },
        { DMY: '20 October 2022', id: 99, moon_id: 9 },
        { DMY: '21 October 2022', id: 100, moon_id: 10 },
        { DMY: '22 October 2022', id: 101, moon_id: 11 },
        { DMY: '23 October 2022', id: 102, moon_id: 12 },
        { DMY: '24 October 2022', id: 103, moon_id: 13 },
        { DMY: '25 October 2022', id: 104, moon_id: 14 },
        { DMY: '26 October 2022', id: 105, moon_id: 15 },
        { DMY: '27 October 2022', id: 106, moon_id: 16 },
        { DMY: '28 October 2022', id: 107, moon_id: 17 },
        { DMY: '29 October 2022', id: 108, moon_id: 18 },
        { DMY: '30 October 2022', id: 109, moon_id: 19 },
        { DMY: '31 October 2022', id: 110, moon_id: 20 },
        { DMY: '1 November 2022', id: 111, moon_id: 21 },
        { DMY: '2 November 2022', id: 112, moon_id: 22 },
        { DMY: '3 November 2022', id: 113, moon_id: 23 },
        { DMY: '4 November 2022', id: 114, moon_id: 24 },
        { DMY: '5 November 2022', id: 115, moon_id: 25 },
        { DMY: '6 November 2022', id: 116, moon_id: 26 },
        { DMY: '7 November 2022', id: 117, moon_id: 27 },
        { DMY: '8 November 2022', id: 118, moon_id: 28 },
        { DMY: '9 November 2022', id: 119, moon_id: 29 },
        { DMY: '10 November 2022', id: 120, moon_id: 30 },
        { DMY: '11 November 2022', id: 121, moon_id: 1 },
        { DMY: '12 November 2022', id: 122, moon_id: 2 },
        { DMY: '13 November 2022', id: 123, moon_id: 3 },
        { DMY: '14 November 2022', id: 124, moon_id: 4 },
        { DMY: '15 November 2022', id: 125, moon_id: 5 },
        { DMY: '16 November 2022', id: 126, moon_id: 6 },
        { DMY: '17 November 2022', id: 127, moon_id: 7 },
        { DMY: '18 November 2022', id: 128, moon_id: 8 },
        { DMY: '19 November 2022', id: 129, moon_id: 9 },
        { DMY: '20 November 2022', id: 130, moon_id: 10 },
        { DMY: '21 November 2022', id: 131, moon_id: 11 },
        { DMY: '22 November 2022', id: 132, moon_id: 12 },
        { DMY: '23 November 2022', id: 133, moon_id: 13 },
        { DMY: '24 November 2022', id: 134, moon_id: 14 },
        { DMY: '25 November 2022', id: 135, moon_id: 15 },
        { DMY: '26 November 2022', id: 136, moon_id: 16 },
        { DMY: '27 November 2022', id: 137, moon_id: 17 },
        { DMY: '28 November 2022', id: 138, moon_id: 18 },
        { DMY: '29 November 2022', id: 139, moon_id: 19 },
        { DMY: '30 November 2022', id: 140, moon_id: 20 },
        { DMY: '1 December 2022', id: 141, moon_id: 21 },
        { DMY: '2 December 2022', id: 142, moon_id: 22 },
        { DMY: '3 December 2022', id: 143, moon_id: 23 },
        { DMY: '4 December 2022', id: 144, moon_id: 24 },
        { DMY: '5 December 2022', id: 145, moon_id: 25 },
        { DMY: '6 December 2022', id: 146, moon_id: 26 },
        { DMY: '7 December 2022', id: 147, moon_id: 27 },
        { DMY: '8 December 2022', id: 148, moon_id: 28 },
        { DMY: '9 December 2022', id: 149, moon_id: 29 },
        { DMY: '10 December 2022', id: 150, moon_id: 30 },
      ])
    )

/* Blank object to hard-seed more dates later:
{DMY:'',
          id:,
          moon_id:,
        },

        */
