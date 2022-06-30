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

    transactionRouter.route('/')
        .post(async(req,res)=>{
            try{
                const newTransaction = new Transaction({
                        item: req.body.item,
                        amount: req.body.amount,
                        type: req.body.type
                })
                const transaction = await newTransaction.save()
                res.status(201).send(transaction)
            }catch(err){
                console.error(err)
            }
        })


    transactionRouter.route('/:id')
        .delete(async(req, res)=>{
            const transaction = await Transaction.findOne({ _id: req.params.id}).exec()
            const result = await transaction.deleteOne()
            console.log(req.params)
            res.json(result)
        })

        .get(async(req,res)=>{
            const transaction = await Transaction.findOne({ _id: req.params.id }).exec();
            console.log(req.params)
            res.json(transaction)
        })
   

export default transactionRouter