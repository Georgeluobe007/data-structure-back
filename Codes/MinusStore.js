const express = require("express")
const {MinusStore} = require("../models")
const {validationToken} = require("../JWT/jwebToken")
const router = express.Router();

router.post("/minusItems",validationToken, async(req,res) => {
    const {NameOfItem,NumbersOfCreate,BottlesOfAllCreate} = req.body;

      const lookFor = await MinusStore.findOne({where:{NameOfItem:NameOfItem}}) 
       if(lookFor){ 
          await lookFor.increment("NumbersOfCreate",{by:NumbersOfCreate})
          await lookFor.increment("BottlesOfAllCreate",{by:BottlesOfAllCreate})
       }else{ 
        const createStore = await MinusStore.create({
          NameOfItem:NameOfItem,
          NumbersOfCreate:NumbersOfCreate,
          BottlesOfAllCreate:BottlesOfAllCreate   
        })
        res.send(createStore);
       }
     }) 
 
  router.get("/getRemender",async(req,res) => {
    const getAll = await MinusStore.findAll({})
    res.json(getAll) 
  })

  router.put("/remender/:id",async(req,res) => {
    const {NumbersOfCreate,BottlesOfAllCreate} = req.body
    const remove = req.params.id;
    const getValue = 
    await MinusStore.update({
    NumbersOfCreate:NumbersOfCreate,
    BottlesOfAllCreate:BottlesOfAllCreate
    },{where:{id:remove}})
    res.send(getValue)
  })
 router.put("/update",async(req,res) => { 
      const {NumbersOfCreate,BottlesOfAllCreate,NameOfItem} = req.body;
      const getValue =  await MinusStore.update({
      NumbersOfCreate:NumbersOfCreate,
      BottlesOfAllCreate:BottlesOfAllCreate
    },{where:{NameOfItem:NameOfItem}})
    res.json(getValue)
  
 })
 router.delete("/delete",async(req,res) => {
  await MinusStore.truncate();
  res.json({message:"we deleted all in the page"})
 })






module.exports = router;