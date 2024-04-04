const express = require('express')

const app = express()

let counter = 0

app.get('/', (req, res) => {
  console.log("GET REQUEST", ++counter)
  res.send(`This is Request no ${counter}, from some pod?`)
})

app.listen(3000)