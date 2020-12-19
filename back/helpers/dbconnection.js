const mongoose=require('mongoose')
require('dotenv').config({path:'./config/.env'})
const dbConnect=()=>{
    mongoose.connect(process.env.DB_PATH,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>console.log("Database Connected..."))
    .catch(err=>console.error(err.message))
}
module.exports=dbConnect