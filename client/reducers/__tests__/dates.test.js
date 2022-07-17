import datesReducer from '../dates'
import { setDates } from '../../actions'

describe('dates reducer', () => {
  it('sets dates in state', () => {
    const oldState = [
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
    ]
    const action = setDates([
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
    ])
    const newState = datesReducer(oldState, action)
    expect(newState).toEqual(action.payload)
  })

  it('can get dates by name', () => {
    const action = setDates([
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
    ])

    const inputState = [
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

    const expectedOutputState = [
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
    ]

    const outputState = datesReducer(inputState, action)
    expect(outputState).toEqual(expectedOutputState)
  })
})
