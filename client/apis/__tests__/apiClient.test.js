import nock from 'nock'
import { getDates } from '../apiClient'

describe('getDates', () => {
  const datesArray = [
    {
      id: 1000,
      DMY: '25 November 2052',
      name: 'Mere Moon',
      goodFor:
        'Moderate productivity. A good time for cleaning and refreshing your spaces. Good time for strategic planning. Time to relax and reconnect with yourself. ',
      energy: 'medium',
      image: 'mutu-whenua.png',
      moonPhas: 15,
    },
    {
      id: 1001,
      DMY: '26 November 2052',
      name: 'Jack Moon',
      goodFor:
        'Good day for strategic planning and setting long term objectives. A good time to reflect on performance, accountability and bad habits.',
      energy: 'low',
      image: 'whiro.png',
      moonPhaseId: 16,
    },
  ]

  const scope = nock('http://localhost').get('/api/v1').reply(200, datesArray)

  test('returns the body of the response', () => {
    expect.assertions(3)
    return getDates().then((dates) => {
      expect(dates).toHaveLength(2)
      expect(dates).toEqual(datesArray)
      expect(scope.isDone()).toBe(true)
      return null
    })
  })
})
