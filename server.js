const http = require('http')

const PORT = 4000

/**
 * post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('List of Posts')
  } else if (req.url && /^\/posts\/[a-zA-Z0-9-_]+$/.test(req.url)) {
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
