const mongoose = require("mongoose") 

const {Schema , model } = mongoose

const taskSchema = new Schema({
        title:{
            type:String,
            required:true,
            trim:true
            },
        description:{
            type:String,
            trim:true,
            default:""
         } ,
         priority:{
            type:String,
            enum:["high" , "medium" , "low"],
            default:"low"
         },
         dueDate:{
            type:Date,
            default:null,

         },
         status:{
            type:String,
            enum:["Pending" , "Completed"],
            default:"Pending"
         },
        
},{
    timestamps:true,
}
)


module.exports = model("Task" , taskSchema)