const mongoose=require('mongoose')

const utlisateurSchema=new mongoose.Schema({
    login:{
        type:String
    },
    password:{
        type:String
    },
    PersonnelId:{
        type: mongoose.Types.ObjectId,
        ref:'personnel'
    },
    roles:[{
        type:mongoose.Types.ObjectId,
        ref:'role'
    }]
})

module.exports=mongoose.model('utilisateur',utlisateurSchema)