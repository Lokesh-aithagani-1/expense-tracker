const express= require('express')
const mongoose= require('mongoose')
const cors=require('cors')
const expenseRoutes=require('../backend/routes/expenseRoutes')
const app=express()
const port=3001

app.use(express.json())
app.use(cors())

//connect to database
mongoose.connect('mongodb://localhost:27017/expensetracker')

//Routes
app.use('/expenses',expenseRoutes)

//Start server
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})
