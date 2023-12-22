const express = require('express')
const app = express()
const port = process.env.PORT || 2000

const dbconnection = require('./db')


app.use('/api/cars/' , require('./Routes/carsRoute'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})