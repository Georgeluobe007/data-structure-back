const express = require("express")
const router = express.Router();
const {PutPrice} = require("../models")

router.post("/price",async(req,res) => {
    const {NameOfItem,NameOfOffice,PriceOfItem,AddToOfficeId} = req.body;
    const findOne = await PutPrice.findOne({where:{NameOfItem:NameOfItem,NameOfOffice:NameOfOffice}});
  
    if(findOne){
        res.status(501).json({error:"this office has been given price of this particular drink"})
    }else{
           await PutPrice.create({
            NameOfItem:NameOfItem,
            NameOfOffice:NameOfOffice,
            PriceOfItem:PriceOfItem,
            AddToOfficeId:AddToOfficeId 
           }) 
            res.status(200).json({message:"price has been given"});   
    }
})
router.get("/getItemPrice",async(req,res) => {
    const findAllPrice = await PutPrice.findAll({});  
    res.json(findAllPrice)
})
router.put("/editPrice/:id",async(req,res) => {
    const {newPrice} = req.body;
    const editPriceId = req.params.id;
    await PutPrice.update({PriceOfItem:newPrice},{where:{id:editPriceId}});
    res.json({message:"price has been updated"})
})





module.exports = router;