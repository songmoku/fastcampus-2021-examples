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
    id: '1',
    title: 'My first post',
    content: 'Hello!',
  },
  {
    id: '2',
    title: '두번째 포스트',
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
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json; encoding=utf-8')
    res.end(JSON.stringify(result))
  } else if (postIdRexResult && req.method === 'GET') {
    // GET /posts/:id

    const postId = postIdRexResult[1]
    console.log(postId)

    const post = posts.find((_post) => _post.id === postId)
    console.log(post)
    if (post) {
      res.setHeader('Content-Type', 'application/json; encoding=utf-8')
      res.statusCode = 200
      res.end(JSON.stringify(post))
    } else {
      res.statusCode = 404
      res.end('A post not found')
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8')
    req.on('data', (data) => {
      /**
       * @typedef CreatePostBody
       * @property {string} title
       * @property {string} content
       */

      /** @type {CreatePostBody} */
      const body = JSON.parse(data)
      console.log(body)
      posts.push({
        id: (posts.length + 1).toString(),
        title: body.title,
        content: body.content,
      })
    })
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
