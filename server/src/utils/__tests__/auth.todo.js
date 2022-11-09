import {isPasswordAllowed, userToJSON} from "../auth"

describe('isPasswordAllowed', () => {
  const allowedPwds = ['qwewqeW#55']
  const disAllowedPwds = ['', 'ffffffffffff', '8888888888']

  allowedPwds.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(true)
    })
  })

  disAllowedPwds.forEach(pwd => {
    it(`"${pwd}" should not be allowed`, () => {
      expect(isPasswordAllowed(pwd)).toBe(false)
    })
  })
})

test('isPasswordAllowed only allows some passwords', () => {
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('11111111')).toBe(false)
  expect(isPasswordAllowed('ffffffff')).toBe(false)
  expect(isPasswordAllowed('qwewqeW#55')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }

  const user = {
    ...safeUser,
    // ↑ above are properties which should
    // be present in the returned object
  
    // ↓ below are properties which shouldn't
    // be present in the returned object
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const jsonUser = userToJSON(user)
  expect(jsonUser).toEqual(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
