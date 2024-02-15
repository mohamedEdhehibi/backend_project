const mongoose=require('mongoose')
const productlist=mongoose.Schema(
{
    name:{
        type:String,
        required:[true,'please proved name'],
    },
    price :{
        type:Number,
        required:[true,'please proved price'],
    },
    serie_number :{
        type:Number,
        unique:[true,'this serie number already exist'],
    }

})

module.exports=mongoose.model('prod',productlist)