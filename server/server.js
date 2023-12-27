const express = require('express')
const app = express()
// const bodyParser = require('body-parser')

const cors = require('cors')
const port = process.env.PORT || 2000

const dbconnection = require('./db')
app.use(express.json())
// app.use(bodyParser.json())
app.use(cors())
app.use('/api/cars/' , require('./Routes/carsRoute'))
app.use('/api/users/' , require('./Routes/userRoute'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})