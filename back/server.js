//modules
const dbConnect=require('./helpers/dbconnection')
const express=require('express')
const PORT=process.env.PORT || 5000

const app=express()
dbConnect()

//middleware declaraltion
app.use(express.json())

app.use('/login',require('./USERS/routes/loginRoute'))
app.use('/admin',require('./USERS/routes/adminRoute'))


app.listen(PORT,(err)=>{
    if(err)
        throw err
    console.log(`server listening on http://localhost:${PORT}`)
})