require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const app = express()

mongoose.connect(process.env.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to mongodb atlas"))

app.use(cors())
app.use(express.json())

// app.get('/', (req,res)=>{
//     res.send("HELLO NIGS")
// })

const EmployeeRoutes = require('./routes/apis/employee')

app.use('/employee', EmployeeRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => console.log('server connected to port 5000'))
