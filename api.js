const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const user = {
      'username' : 'Adil',
      'email': 'adil.baaj@nimbleways.com'
  }
  res.send(user)
})

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
