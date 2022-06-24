import express from "express";
import { db } from "./db.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db')
}).catch(err=>{console.log(err.message)})


const app = express()

app.get('/api/transactions',(req, res)=>{
    res.send(db.transactions)
})

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
})