import mongoose from "mongoose";

const connectDB = async() =>{
    try{
         mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        console.log('connected to db'))

    }catch(err){
        console.error(err)
    }
}

export default connectDB