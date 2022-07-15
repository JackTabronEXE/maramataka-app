import knex from 'knex'
import config from '../knexfile'
import { getDates } from '../db'

const testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getDates', () => {
  test('return all dates and maramataka data', () => {
    expect.assertions(3)
    return getDates(testDb).then((dates) => {
      expect(dates).toHaveLength(150)
      expect(dates[0].name).toContain('Rākaunui')
      expect(dates[149].energy).toContain('high')
    })
  })
})
