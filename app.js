const dotenv = require("dotenv").config();
const express=require('express')

const connect=require('./db/connectDB')
const productRoute=require('./routes/productRoutes')

const app= express()
app.use(express.json())
app.use('/api/v1/productlist',productRoute)

const port = process.env.PORT || 4000;
const start=async()=>{
    try{
        await connect(process.env.MONGO_URI)
        app.listen(port,()=>{
                console.log( `server listen http://localhost:${port}`);
            })
    }catch(err){
        console.log(err);
    }
}
start();
