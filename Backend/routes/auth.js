import express from "express";
import EmployeeModel from "../model/Employee.js"

const router=express.Router();

router.post("/login", async(req,res)=>{
    const {email,password}=req.body;
    const user= await EmployeeModel.findOne({email});
    if(!user) return res.status(400).json({error:error.message})
    if(user.password!==password) return res.status(400).json({error:error.mesage})
    res.status(200).json({message:"Login Successfull"})
});

export default router;