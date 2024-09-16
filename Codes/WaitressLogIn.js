const express = require("express")
const {WaitressLogIn} = require("../models")
const officejwt = require("jsonwebtoken")
const {waitressValidation} = require("../JWT/LogInWaitressToken")
const router = express.Router();

router.post('/signWaiter/:id',async(req,res) => {
  const {userName,password} = req.body;
  const asignOffice = req.params.id
   const findTab = await WaitressLogIn.findOne({where:{UserName:userName}});
   if(findTab){
    res.status(501).json({message:"This tab already exixt"})
   }else{
    const addTab = await WaitressLogIn.create({UserName:userName,Password:password,AddToOfficeId:asignOffice}); 
    res.json(addTab)
   }
})
 

router.post("/logInWaitress",async(req,res) => {
    const {UserName,Password} = req.body;
    const user = await WaitressLogIn.findOne({where:{UserName:UserName}});
    if(!user){
        res.status(501).json({message:"please user name is incorrect"})
    }else{
      const passwordCheck = Password === user.Password
      if(!passwordCheck){
        res.status(501).json({message:"password does not match"}) 
    }else{
      const WaitressWebToken = officejwt.sign({userId:user.id,userName:user.UserName},"wetress_token")
      res.status(200).json({WaitressWebToken:WaitressWebToken,userId:user.id,userName:user.UserName})
   
      }
     }
   })
   router.get("/allWaitress/:id",async(req,res) => {
    const tabasign = req.params.id
    const findAll = await WaitressLogIn.findAll({where:{AddToOfficeId:tabasign}})
    res.json(findAll)
   })
   router.get("/allWaitress",async(req,res) => { 
    const allFind = await WaitressLogIn.findAll({})
    res.json(allFind)
   })
   router.get("/getWaitressLogIn",waitressValidation, (req,res) => {
    res.json(req.user)
  
  })
  router.put("/passwordChange/:id",async(req,res) => {
    const {oldPassword,newPassword} = req.body; 
    const userId = req.params.id;
    const confirm  = await WaitressLogIn.findOne({where:{Password:oldPassword}})
    if(!confirm){
     res.status(501).json({message:"your previous password does not align "})
    }else{
     const changePassword = await WaitressLogIn.update({Password:newPassword},{where:{id:userId}})
     res.send(changePassword)
    }
   
   })

module.exports = router