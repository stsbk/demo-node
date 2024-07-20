import { app } from './app'

const port = 3000
  
if (process.env.NODE_ENV !== 'test') {  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })  
}
