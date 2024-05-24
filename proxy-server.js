const cors = require('cors')
const express = require('express')
const request = require('request')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.post('/shorten', (req, res) => {
  const longUrl = req.body.url

  request.post(
    {
      url: 'https://cleanuri.com/api/v1/shorten',
      form: { url: longUrl },
    },
    (error, response, body) => {
      if (error) {
        return res.status(500).send(error)
      }
      res.send(body)
    },
  )
})

app.listen(port, () => {
  console.log(`Proxy server listening at http://127.0.0.1:${port}`)
})
