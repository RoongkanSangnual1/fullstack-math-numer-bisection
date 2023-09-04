const mongoose =require("mongoose")


const bisectionSchema = mongoose.Schema({
    XL:{
        type:Number,
        
    },
    XR:{
        type:Number,
      
    },
    xm:{
        type:Number,
      
    },
    Iteration:{
        type:Number,
       
    },


})
module.exports = mongoose.model("bisection",bisectionSchema)