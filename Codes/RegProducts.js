const express = require("express");
const router = express.Router();
const {RegProduct} = require("../models")

router.post("/registerProduct", async(req,res) => {
    const {productName,quantity} = req.body;
    const productreg = await RegProduct.findOne({where:{ProductName:productName}})
    if(productreg){
        res.status(501).json({message:"This product has already been registered,please check spellings"})
    }else{
        const regProuct = await RegProduct.create({ProductName:productName,quantity:quantity})
        res.json(regProuct);
    }
 })
 router.get("/getRegProduct", async(req,res) => {
    const getAllReg = await RegProduct.findAll({})
    res.json(getAllReg)
 })


module.exports = router;