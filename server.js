/* eslint-disable no-unused-vars */
// @ts-check
const http = require('http')

const PORT = 4000

const { routes } = require('./src/api')

/**
 * post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
  async function main() {
    const route = routes.find(
      (_route) =>
        req.url &&
        req.method &&
        _route.url.test(req.url) &&
        _route.method === req.method
    )

    // route.callback
    console.log('route table is found')

    if (!route) {
      res.statusCode = 404
      res.end('Your request has not definded')
    }

    const result = await route.callback()
    res.statusCode = result.statusCode

    if (typeof result.body === 'string') {
      res.end(result.body)
    } else {
      res.end(JSON.stringify(result.body))
    }
  }

  main()
})

server.listen(PORT, () => {
  console.log(`The server is working on ${PORT}`)
})
