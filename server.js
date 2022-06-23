const express = require('express')
require('dotenv').config({path: './config/.env'})
const app = express()
const connectDB = require('./config/database')
const todoRoutes = require('./routes/todos')
const homeRoutes = require('./routes/home')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/home', homeRoutes)
app.use('/todos', todoRoutes)

connectDB();

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})

