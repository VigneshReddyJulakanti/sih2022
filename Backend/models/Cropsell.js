const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    cropname : {
        type : String,
        required : true
    },
    quantity:{
        type: String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    description : {
        type : String,
        
    },
    address :{
        type:string,
        required : true
    },
    company:{
        type:string,
        required:true
    },
    contact:{
        type:string,
        required:true
    },
    date: {
        type : Date,
        default : Date.now 
    }
    
});

module.exports = mongoose.model("notes",NotesSchema)