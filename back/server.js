//modules
const dbConnect=require('./helpers/dbconnection')
const express=require('express')

const app=express()
dbConnect()

//middleware declaraltion
app.use(express.json())