import express from 'express'
import cors from 'cors'

// Router
import routes from './routes/user.js'

const app = express()
const port = 8100

app.use(express.json())
app.use(cors())

// Router
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
