const Query = require("../models/Query");
const mongoose = require("mongoose");

exports.postQwuery=async(req,res)=>{
    let queryStatement = req.body.query;
    let Querrier = req.body.querrier;

    let query1 = new Query({
        querrier: Querrier,
        query: queryStatement
    });
    await query1.save()
    res.status(201).json({ message: "Query sent Successfully !" });
}


exports.getAllQuery=async(req,res)=>{
    try {
        let querries=await Query.find({});
        res.json({querries:querries})
    } catch (error) {
        console.log(error);
    }
}