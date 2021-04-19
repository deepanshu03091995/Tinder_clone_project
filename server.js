import express from "express";

import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from 'cors';
 //app config
const app=express()
const port = process.env.PORT||8001
const connection_url='mongodb+srv://Admin-Deep:E5pR6gJW6xoSHOt3@cluster0.0mhcj.mongodb.net/tinderdb?retryWrites=true&w=majority'
 // Middlewares
 app.use(express.json());
 app.use(Cors());

 //DB config
 mongoose.connect(connection_url,{
     useNewUrlParser:true,
     useCreateIndex:true,
     useUnifiedTopology:true,
 })
 //API endpoints
app.get('/',(req,res)=>res.status(200).send("hello world"));
app.post('/tinder/cards',(req,res)=>{
    const dbcard=req.body;
    Cards.create(dbcard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data); 
        }
    })
})
app.get('/tinder/cards',(req,res)=>{
    const dbcard=req.body;
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data); 
        }
    })
});
 //Listeners

 app.listen(port,()=>console.log(`listening on localhost ${port}`));