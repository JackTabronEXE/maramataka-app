const request = require('supertest')

const db = require('../../db/db')
const server = require('../../server')

jest.mock('../../db/db')

const datesMock = [
  {
    id: 1000,
    DMY: '25 November 2052',
    name: 'Mutu Whenua',
    goodFor:
      'Moderate productivity. A good time for cleaning and refreshing your spaces. Good time for strategic planning. Time to relax and reconnect with yourself. ',
    energy: 'medium',
    image: 'mutu-whenua.png',
    moonPhas: 15,
  },
  {
    id: 1001,
    DMY: '26 November 2052',
    name: 'Whiro',
    goodFor:
      'Good day for strategic planning and setting long term objectives. A good time to reflect on performance, accountability and bad habits.',
    energy: 'low',
    image: 'whiro.png',
    moonPhaseId: 16,
  },
]

describe('GET /api/v1', () => {
  test('mock route data', () => {
    expect.assertions(5)
    db.getDates.mockImplementation(() => Promise.resolve(datesMock))
    return request(server)
      .get('/api/v1')
      .then((res) => {
        expect(res.body).toEqual(datesMock)
        expect(res.body).toHaveLength(2)
        expect(res.status).toBe(200)
        expect(res.body[0].energy).toContain('medium')
        expect(res.body[1].moonPhaseId).toBe(16)
      })
  })
  test('testing a promise reject', () => {
    expect.assertions(1)
    db.getDates.mockImplementation(() => Promise.reject())
    return request(server)
      .get('/api/v1')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
