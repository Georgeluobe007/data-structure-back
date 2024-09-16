const express = require("express");
const {HumanResources} = require("../models")
const jwt = require("jsonwebtoken")
const {validationToken} = require("../JWT/jwebToken")
const router = express.Router();

router.post("/humanresouces",async(req,res) => {
    const {userName,password} = req.body;
    const user = await HumanResources.findOne({where:{userName:userName}});
    if(!user){
        res.status(501).json({message:"please user name is incorrect"})
    }else{
        const passwordCheck = password === user.password;
        if(!passwordCheck){
            res.status(501).json({message:"password does not match"})  
        }else{
            const token = jwt.sign({userName:user.userName,id:user.id},"human-resources-token")
            res.status(200).json({token:token,userName:user.userName,id:user.id})
        }
    }
})

router.get("/getWeb",validationToken, (req,res) => {
    res.json(req.user)
 
})
router.put("/changePasswordForHr/:id",async(req,res) => {
    const {oldPassword,newPassword} = req.body; 
    const userId = req.params.id;
    const confirm  = await HumanResources.findOne({where:{password:oldPassword}})
    if(!confirm){
     res.status(501).json({message:"your previous password does not align "})
    }else{
     const changePassword = await HumanResources.update({password:newPassword},{where:{id:userId}})
     res.send(changePassword)
    }
   
   })
module.exports = router