import express from "express";
import sqlitedb from './models/index.js';

const app=express();
    app.use(express.json());
    app.get('/Eduloan',async (req,res)=>{
        console.log(req.path);
        try {
            const loans = await sqlitedb.EduLoan.findAll();
            res.status(200).json({success: true, data: loans});
        
        }catch(error) {
            res.status(500).json({error:error.message});
        }
    });
    app.listen(8000,() => {
        console.log("server started")});