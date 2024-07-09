import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

const app = express()

const corsMiddleware = cors()
app.use(corsMiddleware)
const jsonBodyMiddleware = bodyParser.json()
app.use(jsonBodyMiddleware)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
