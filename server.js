// server.js
//const { createServer } = require('https')
var https=require('https');
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 9800
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
const fs = require('fs');

const options = {
  key: fs.readFileSync(''),
  cert: fs.readFileSync('')
};

const env = process.env.NODE_ENV
if(env == "development"){
  // do something
  console.log('Development Build');
}
else if (env == "production"){
 // do something
  console.log('Production Build');
}


app.prepare().then(() => {
    https.createServer(options, async (req, res) =>{
//  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl

      if (pathname === '/a') {
        await app.render(req, res, '/a', query)
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query)
      } else {
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on https://${hostname}:${port}`)
  })
})