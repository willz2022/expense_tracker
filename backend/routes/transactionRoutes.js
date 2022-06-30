import express from "express";
import Transaction from "../models/transactionModel.js";
const transactionRouter = express.Router()


transactionRouter.route('/')
    .get(async(req,res)=>{
        const transactions = await Transaction.find()
        

        res.json(transactions)
    })
    .post(async(req,res)=>{
        try{
            const result = await Transaction.create({
                "item": req.body.item,
                "amount": req.body.amount,
                "type": req.body.type
        })
        console.log(req.body)
            res.status(201).json(result)
        }catch(err){
            console.error(err)
        }
    })

    transactionRouter.route('/:id')
        .delete(async(req, res)=>{
            const transaction = await Transaction.findOne({ _id: req.body.id}).exec()
            const result = await transaction.deleteOne()
            console.log(req.body)
            res.json(result)
        })
        .get(async(req,res)=>{
            const transaction = await Transaction.findOne({ _id: req.params.id }).exec();
            console.log(req.params)
            res.json(transaction)
        })
   

export default transactionRouter