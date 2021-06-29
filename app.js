const mongoose = require("mongoose");
const express = require("express")

const app = express()

app.use(express.json())

const placeRouter = require('./routes/place')

app.use('api/places', placeRouter)

mongoose.connect("mongodb://127.0.0.1:27017/places-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('connected'));


const PORT = 3300
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })