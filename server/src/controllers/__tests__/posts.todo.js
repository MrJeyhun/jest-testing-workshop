import * as postsController from '../posts.todo'
import db from '../../utils/db'
import {initDb, generate} from 'til-server-test-utils'
import { useDebugValue } from 'react'

// I'll give this one to you. You want the database to be fresh
// the initDb function will initialize the database with random users and posts
// you can rely on that fact in your tests if you want.
// (For example, getPosts should return all the posts in the DB)
beforeEach(() => initDb())

test('getPosts returns all posts in the database', async () => {
  const req = {}
  const res = {json: jest.fn()}

  await postsController.getPosts(req, res)

  expect(res.json).toHaveBeenCalledTimes(1)
  
  const allPosts = await db.getPosts()
  expect(res.json).toHaveBeenCalledWith({posts: allPosts})
})

test('getPost returns the specific post', async () => {

})

test('updatePost updates the post with the given changes', async () => {
  // BONUS: If you have extra time, try to implement this test as well!
})

// Here's where you'll add your new `deletePost` tests!
// - Think more about use cases than code coverage and use those use cases to title your tests
// - Write the code and tests iteratively as little as necessary at a time.
// - Create and use a `setup` test object(s) factory to keep your tests focused

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=postsController&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
