import request from 'superagent'

const rootUrl = '/api/v1'

export function addUser(user) {
  return request
    .post(rootUrl + '/contacts/add')
    .send({ email: user })
    .then((res) => {
      return res.body
    })
}
