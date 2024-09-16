const express = require("express")
const router = express.Router();
const {SendToWetress} = require("../models")
router.post("/wetressRemender/:id", async(req,res) => {
    const {nameOfOffice,create,numbersOfBottles,nameOfDrinks} = req.body;
    const officeId = req.params.id

    const lookFor = await SendToWetress.findOne({where:{nameOfDrinks:nameOfDrinks,AddToOfficeId:officeId}}) 
    if(lookFor){
        await lookFor.increment("create",{by:create})
        await lookFor.increment("numbersOfBottles",{by:numbersOfBottles})
    }else{
        const sendItemToOffice =   
        await SendToWetress.create({  
           nameOfOffice:nameOfOffice, 
           create:create,
           numbersOfBottles:numbersOfBottles,
           nameOfDrinks:nameOfDrinks,
           AddToOfficeId:officeId
       })
       res.json(sendItemToOffice)
   }
})
router.get("/getAllRender", async(req,res) => { 
    const findAllRemenderId = await SendToWetress.findAll({})
    res.json(findAllRemenderId) 
})
router.get("/getBarRemender/:id", async(req,res) => {   
    const gatRemender = req.params.id;
    const findRemenderId = await SendToWetress.findAll({where:{AddToOfficeId:gatRemender}})
    res.json(findRemenderId) 
})
router.put("/updateCount/:id", async(req,res) => { 
    const {updateBottles,AddToOfficeId } = req.body;
    const SendToWetressId = req.params.id;
    const updatetd = await SendToWetress.update({numbersOfBottles:updateBottles,AddToOfficeId:AddToOfficeId},
    {where:{id:SendToWetressId}})
    res.json(updatetd) 
})




module.exports = router;