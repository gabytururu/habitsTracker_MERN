const express = require('express')
require('dotenv').config()
const HabitsRoutes = require('./routes/routesHabitsTracker')
const mongoose = require('mongoose')


const app = express()

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
app.use(express.json())

app.use('/api/habits/', HabitsRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () =>{
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((err)=>{
        console.log('Ooops! hubo un error: ',err)
    })



