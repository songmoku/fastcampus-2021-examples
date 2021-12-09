/* eslint-disable no-unused-vars */
// @ts-check
const http = require('http')

const PORT = 4000

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My first post',
    content: 'Hello!',
  },
  {
    id: 'Second_post',
    title: 'My seconde post',
    content: 'second',
  },
]

/**
 * post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
  const REGEX_ID = /^\/posts\/([a-zA-Z0-9-_]+)$/ // () Capture Group
  const postIdRexResult = (req.url && REGEX_ID.exec(req.url)) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('List of Posts')
  } else if (postIdRexResult) {
    console.log(REGEX_ID.exec(req.url))
    res.statusCode = 200
    res.end('A content of the posts')
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Create a post')
  } else {
    res.statusCode = 404
    res.end('The page is not found out')
  }
})

server.listen(PORT, () => {
  console.log(`The server is working on ${PORT}`)
})
