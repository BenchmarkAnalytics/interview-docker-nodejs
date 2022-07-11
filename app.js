const express = require('express')
// const fs = require('fs')

const app = express()

app.set('view engine', 'ejs')
// app.use(express.json())
app.use(express.static('public'))

app.listen(3000, function() {
  console.log("Running server... Listening on port", process.env.PORT)
})