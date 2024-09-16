const express = require("express")
const {DrinksToWaiter} = require("../models")
const router = express.Router();
router.post("/sendDrinks", async(req,res) => {
    const {NameOfItem,count,SendToWetressId,AddToOfficeId,WaitressLogInId,nameOfOffice} = req.body;
    const findWhere = await DrinksToWaiter.findOne({where:{WaitressLogInId:WaitressLogInId}}) 
    if(findWhere){
        res.status(501).json({message:"this person hasn't acknowledge the previous item(s)"})
    }else{
       const sendToWaiter = await DrinksToWaiter.create({
        NameOfItem:NameOfItem,
        count:count,
        SendToWetressId:SendToWetressId,
        AddToOfficeId:AddToOfficeId,  
        WaitressLogInId:WaitressLogInId,
        nameOfOffice:nameOfOffice
     })
     res.json(sendToWaiter)
    } 
})

router.get("/getSendDrinks/:id",async (req,res) => {
    const tabId = req.params.id;
     const drinks = await DrinksToWaiter.findAll({where:{WaitressLogInId:tabId}})
    res.json(drinks)
})


router.delete("/itemRemoveOndata/:id",async(req,res) => {
    const itemDeleted = req.params.id;
    const deletefrom = await DrinksToWaiter.destroy({where:{WaitressLogInId:itemDeleted}})
    res.json(deletefrom)
})



module.exports = router;