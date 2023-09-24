let mongoose=require("mongoose")

let dataSchema=mongoose.Schema({
    
    concious:Number,
    unconcious:Number,
    date:Date
})

let dataModel=mongoose.model("data",dataSchema)

module.exports={dataModel}