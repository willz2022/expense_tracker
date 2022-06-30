import mongoose from 'mongoose'
const Schema = mongoose.Schema


const transactionSchema = new Schema(
    {
        item:{type:String, required: true},
        amount:{type:Number, required:true},
        type:{type:String, required:true}
    },
    {
        timestamps:true
    }
)

const Transaction = mongoose.model('Transaction',transactionSchema)

export default Transaction