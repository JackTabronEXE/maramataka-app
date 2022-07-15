import request from 'superagent'

export function getDates() {
  return request.get('/api/v1').then((res) => {
    return res.body
  })
}
