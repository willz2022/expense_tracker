import dotenv from 'dotenv'
import express from "express";
import { db } from "./db.js";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import cors from 'cors'
import corsOptions from './config/corsOptions.js';
import connectDB from './config/dbConn.js';

dotenv.config()
connectDB()

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use('/api/seed',seedRouter)
app.use('/api/transactions', transactionRouter)


/* app.get('/api/transactions',(req, res)=>{
    res.send(db.transactions)
}) */

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
})