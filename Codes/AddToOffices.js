const express = require("express")
const {officeValidation} = require("../JWT/OfficeJWT")
const {validationToken} = require("../JWT/jwebToken")
const officejwt = require("jsonwebtoken")
const {AddToOffice} = require("../models")
const router = express.Router();


 router.post("/addoffice",validationToken,async(req,res) => {
    const {officeName,password} = req.body;
    const findOfficeName = await AddToOffice.findOne({where:{officeName:officeName}})
    if(findOfficeName){
      res.status(501).json({message:"office name already exist"})
    }else{
      const sendToOffice = await AddToOffice.create({officeName:officeName,password:password});
      res.json(sendToOffice)
    }
   
 })
 router.post("/logInOffice",async(req,res) => {
  const {userName,password} = req.body;
  const user = await AddToOffice.findOne({where:{officeName:userName}});
  if(!user){
      res.status(501).json({message:"please user name is incorrect"}) 
  }else{
    const passwordCheck = password === user.password
    if(!passwordCheck){
      res.status(501).json({message:"password does not match"}) 
  }else{
    const officeWebToken = officejwt.sign({userId:user.id,userName:user.officeName},"office_token")
    res.status(200).json({officeWebToken:officeWebToken,userId:user.id,userName:user.officeName})
    }
   }
 })
 router.get("/office", async(req,res) => {
   const allOffice = await AddToOffice.findAll({})
   res.json(allOffice)
 })

 router.get("/getOfficeWeb",officeValidation, (req,res) => { 
  res.json(req.user)

})
router.put("/changePassword/:id",async(req,res) => {
 const {oldPassword,newPassword} = req.body; 
 const userId = req.params.id;
 const confirm  = await AddToOffice.findOne({where:{password:oldPassword}})
 if(!confirm){
  res.status(501).json({message:"your previous password does not align "})
 }else{
  const changePassword = await AddToOffice.update({password:newPassword},{where:{id:userId}})
  res.send(changePassword)
 }

})


module.exports = router