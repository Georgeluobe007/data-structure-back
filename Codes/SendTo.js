const express = require("express")
const {validationToken} = require("../JWT/jwebToken")
const {officeValidation} = require("../JWT/OfficeJWT")
const {SendTo} = require("../models")
const router = express.Router();

router.post('/sendToOffice/:id',async(req,res) => {
const {nameOfOffice,create,numbersOfBottles,nameOfDrinks} = req.body; 
 const officeId = req.params.id
 const sendItemToOffice = 
 await SendTo.create({
    nameOfOffice:nameOfOffice,
    create:create,
    numbersOfBottles:numbersOfBottles,
    nameOfDrinks:nameOfDrinks,
    AddToOfficeId:officeId
})
res.json(sendItemToOffice)
})

router.get("/getSentOffice",async(req,res) => { 
 const getOffice = await SendTo.findAll({})
 res.json(getOffice);
})
router.get("/officeId/:id",officeValidation,async(req,res) => {
    const officeId = req.params.id
    const findOne = await SendTo.findAll({where:{AddToOfficeId:officeId}});  
    res.json(findOne)
})
// router.delete("/deleteParticularOffice/:id",async(req,res) => {
//   const particularOfficeId = req.params.id;
//   const deleteOffice = await SendTo.destroy({where:{AddToOfficeId:particularOfficeId}});
//   res.json(deleteOffice)
// })
  
router.delete("/deleteSingle/:id",validationToken,async(req,res) => {
    const singleDelete = req.params.id;
    const findOneToDelete = await SendTo.destroy({where:{id:singleDelete}})
    res.json(findOneToDelete)

})
router.delete("/deleteSalesPoint",validationToken, async(req,res) => {
  const deleteItem = await SendTo.truncate();
    res.json(deleteItem)
})


module.exports = router;