import request from 'superagent'
// import { format } from 'date-fns'
// import toDate from 'date-fns/toDate'

export function getDates() {
  return request.get('/api/v1').then((res) => {
    return res.body
  })
}

// export function formatDay() {
//   getDates()
//     .then((res) => {
//       const day = format(toDate(Date.now()), 'd MMMM y')
//       res.find((date) => {
//         return date.DMY == day
//       })
//     })
//     .catch((err) => console.error(err, 'apiClient getDay'))
// }
