const mongoose=require('mongoose')

const personnelSchema=new mongoose.Schema({
    nom:{
        type:String, 
        required:true
    },
    prenom:{
        type : String,
        required : true
    },
    dateNaissance:{
        type:Date,
        required : true,
    },
    adresse:{
        type:String,
        required : true
    },
    ville:{
        type : String,
        required : true
    },
    email:{
        type : String
    },
    CIN:{
        type : String,
        required : true
    },
    lieuNaissance:{
        type : String
    },
    matricule:{
        type: String,
        required : true
    },
    matCNSS:{
        type:String
    },
    situationFamiliale:{
        type : String,
        enum:['marie','celibataire','divorce']
    },
    nombreEnfant:{
        type: Number
    },
    categorie:{
        type : String,
        enum : ['A','B','C']
    },
    diplomeId:{
        type : mongoose.Types.ObjectId,
        ref : 'diplome'
    },
    responsableId : {
        type : mongoose.Types.ObjectId,
        ref : 'personnel'
    }
})

module.exports=mongoose.model('personnel',personnelSchema)