const express = require('express')
const nodemon = require('nodemon')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})