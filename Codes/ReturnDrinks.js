const express = require("express")
const {ReturnDrinks} = require("../models")
const router = express.Router();
router.post("/returnSendDrink", async(req,res) => {
    const {NameOfItem,count,SendToWetressId,AddToOfficeId,WaitressLogInId,nameOfOffice,drinkId} = req.body; 
    const findWhere = await ReturnDrinks.findOne({where:{WaitressLogInId:WaitressLogInId}}) 
    if(findWhere){
        res.status(501).json({message:"this person hasn't acknowledge the previous item(s)"})
    }else{
      const sendToWaiter = await ReturnDrinks.create({
        NameOfItem:NameOfItem,
        count:count,
        drinkId:drinkId,
        SendToWetressId:SendToWetressId,
        AddToOfficeId:AddToOfficeId,  
        WaitressLogInId:WaitressLogInId,
        nameOfOffice:nameOfOffice
     })
     res.json(sendToWaiter)
    }  
})
router.get("/getReturnDrinks/:id",async (req,res) => { 
    const tabId = req.params.id;
     const drinks = await ReturnDrinks.findAll({where:{AddToOfficeId:tabId}})
    res.json(drinks)
})
router.delete("/removeDrinks/:id",async(req,res) => {
    const itemDeleted = req.params.id;
    const deletefrom = await ReturnDrinks.destroy({where:{WaitressLogInId:itemDeleted}})
    res.json(deletefrom)
})
module.exports = router;