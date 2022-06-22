import express from "express";
import { db } from "./db.js";

const app = express()

app.get('/api/transactions',(req, res)=>{
    res.send(db.transactions)
})

const port = process.env.PORT || 3500

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
})