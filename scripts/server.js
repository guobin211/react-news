const path = require('path')
const express = require('express')
const fs = require('fs')

const app = express()
const port = 4000
const dir = path.resolve(__dirname, '..', 'build')

app.use('/', express.static(dir))

app.use((req, res, next) => {
  const index = fs.readFileSync(dir + '/index.html')
  if (index) {
    res.writeHead(200, {
      'Content-type': 'text/html',
      'Connection':'keep-alive'
    })
    res.end(index)
  } else {
    res.send('server error')
  }
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

