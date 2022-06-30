import express from "express";
import Transaction from "../models/transactionModel.js";
import { db } from "../db.js";

const seedRouter = express.Router()

seedRouter.get('/', async(req,res)=>{
    await Transaction.remove({})
    const createTransactions = await Transaction.insertMany(db.transactions)
    res.send({createTransactions})

})

export default seedRouter