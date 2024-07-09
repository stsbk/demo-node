import express from 'express'

const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

app.get('/', (req, res) => {
  res.send('Hello world')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
