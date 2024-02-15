const mongoose =require('mongoose')

const connectDB=async(uri)=>{
    try{
        const connect= await mongoose.connect(uri)
        console.log('db connection complited ', connect.connection.name);

    }catch (err){
        console.log(err);
    }
}
module.exports=connectDB