// monkey-patching
import thumbWar from '../thumb-war'
import * as utils from "../utils";

test('returns winner', () => {
  const orginalWinner = utils.getWinner
  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args)
    return args[1]
  }
  utils.getWinner.mock = {
    calls: []
  }

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')

  // or .toHaveLength(2) as alternative
  expect(utils.getWinner.mock.calls).toEqual(
    [
      [ 'Ken Wheeler', 'Kent C. Dodds' ],
      [ 'Ken Wheeler', 'Kent C. Dodds' ]
    ]
  )
  
  utils.getWinner = orginalWinner
})
