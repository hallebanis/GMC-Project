const mongoose=require('mongoose')

const assaignRoleSchema=new mongoose.Schema({
    utilisateurId:{
        type: mongoose.Types.ObjectId,
        ref:'utilisateur'
    }
})

module.exports=mongoose.model('assaignRole',assaignRoleSchema)