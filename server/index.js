import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'
// import userRouter from './routes/user.js'

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts',postRoutes)

// app.use('/user', userRouter)

const CONNECTION_URL = "mongodb+srv://majorproject:%40Saritha954@majorprojectcluster.trma74d.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000

console.log("NodeJS server listening on port %d in %s mode", PORT, app.settings.env)

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: https://cryptic-chamber-85334.herokuapp.com:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`))


// mongoose.set('useFindAndModify', false)
