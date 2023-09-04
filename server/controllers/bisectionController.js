const bisection = require("../models/bisections")

exports.create=(req,res)=>{
    const {XR,XL,xm,Iteration} = req.body
    bisection.create({XR,XL,xm,Iteration}).then(bisec=>{
        res.json(bisec)
    }).catch(err=>{
        res.status(400).json({error:"มีชื่อบทความซ้ำกัน"})
    })
}