import nock from 'nock'
import * as actions from '../index'

test('fetchDates', () => {
  const scope = nock('http://localhost')
    .get('/api/v1')
    .reply(200, [
      {
        id: 1000,
        DMY: '25 November 2052',
        name: 'Jack Moon',
        goodFor: 'Time to sleep',
        energy: 'wavy',
        image: 'mutu-whenua.png',
        moonPhas: 15,
      },
    ])

  const dispatch = jest.fn()

  return actions
    .fetchDates('Jack Moon')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe('SET_DATES')
      scope.done()
      return null
    })
})
