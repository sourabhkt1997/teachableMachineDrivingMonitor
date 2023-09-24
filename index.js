let express=require("express")
let app=express()
app.use(express.json())
let cors=require("cors")
const { connection } = require("./db")
app.use(cors())
require("dotenv").config()
let port=process.env.port ||8600
let {dataModel}=require("./models/data.model")


app.get('/data',async(req,res)=>{
   try {
    let data=await dataModel.find()
    res.status(200).send({msg:data})
    
   } catch (error) {
    res.status(400).send({msg:"some error happend"})
   }
})
app.post('/data',async(req,res)=>{
    try {
    let {concious,unconcious,date}=req.body
   
    newdata=new dataModel({concious,unconcious,"date":new Date(date)})
    await newdata.save()
    res.status(200).send({msg:"data added"})

    } catch (error) {
     res.status(400).send({msg:"some error happend"})
    }
 })






app.listen(port,async()=>{
   try {
    await connection
    console.log("server running")
   } catch (error) {
    console.log(error)
   }
})