const express = require("express")
const {Confirmation} = require("../models")
const router = express.Router();

router.post("/confirm/:id",async(req,res) => {
    const {NameOfItem,count,SendToWetressId,AddToOfficeId,nameOfOffice} = req.body;
    const tabid = req.params.id;
    const lookFor = await Confirmation.findOne({where:{NameOfItem:NameOfItem,WaitressLogInId:tabid}}) 
    if(lookFor){ 
      const wave = await lookFor.increment("count",{by:count})
       res.send(wave)
    }else{
           const sendToWaiter = await Confirmation.create({
            NameOfItem:NameOfItem,
            count:count,
            SendToWetressId:SendToWetressId,  
            AddToOfficeId:AddToOfficeId, 
             WaitressLogInId:tabid,
            nameOfOffice:nameOfOffice
         })
         res.json(sendToWaiter)
    }

})
router.get("/getAllConfirmation/:id",async(req,res) => {  
    const getAllId = req.params.id
    const getAll = await Confirmation.findAll({where:{AddToOfficeId:getAllId}})
    res.json(getAll)
})
router.get("/getItemWaiter/:id",async(req,res) => {
    const getAllId = req.params.id
    const getAll = await Confirmation.findAll({where:{WaitressLogInId:getAllId}})
    res.json(getAll)
})
router.put("/returnDrinks",async(req,res) => {  
    const {count,returnId} = req.body;
    const sendReturns = await Confirmation.update({count:count},{where:{id:returnId}})
    res.json(sendReturns)
})









module.exports = router;