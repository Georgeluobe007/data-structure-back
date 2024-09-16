const express = require("express");
const router = express.Router();
const {CostomersBill} = require("../models")


router.post("/showBill",async(req,res) => {
    const {WaitressLogInId,TableName,NameOfItem,PriceOfItem,count,SubTotal,TableNameId} = req.body;
    const checkFor = await CostomersBill.findOne({where:{NameOfItem:NameOfItem,TableName:TableName}})
    if(checkFor){
        const priceItem = await checkFor.increment("SubTotal",{by:parseInt(SubTotal)})
        const countItem = await checkFor.increment("count",{by:count})
        res.json({priceItem,countItem})
    }else{
        const costomerPayment = await CostomersBill.create({
            WaiterId:WaitressLogInId,
            TableName:TableName,
            NameOfItem:NameOfItem,
            PriceOfItem:PriceOfItem,
            Count:count,
            SubTotal:SubTotal,
            TableNameId:TableNameId
        })
        res.send(costomerPayment)
    }
})

router.get("/costomerBill/:id", async (req,res) => {
    const getAllCostomer = req.params.id;
    const findAllCostomer = await CostomersBill.findAll({where:{WaiterId:getAllCostomer}})
    res.json(findAllCostomer)
})

router.get("/getIndividualBill/:id",async(req,res) => {
    const individualBill = req.params.id;
    const findIndividual = await CostomersBill.findAll({where:{TableNameId:individualBill}})
    res.send(findIndividual)
})
router.put("/updateItem",async(req,res) => {
    const {counted,countedId,totalSub} = req.body;
    const updatesItem = await CostomersBill.update({Count:counted,SubTotal:totalSub},{where:{id:countedId}})
    res.send(updatesItem)
})
router.delete("/deleteIndividually/:id",async(req,res) => {
    const itemdelete = req.params.id; 
    const deleteItem = await CostomersBill.destroy({where:{id:itemdelete}})
    res.json(deleteItem)
})





module.exports = router;