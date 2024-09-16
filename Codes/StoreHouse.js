const express = require("express")
const router = express.Router();
const {StoreHouse} = require("../models")
const {validationToken} = require("../JWT/jwebToken")

router.post("/store",validationToken, async(req,res) => {
  const {NameOfItem,NumbersOfCreate,BottlesOfAllCreate} = req.body;
    const createStore = await StoreHouse.create({
    NameOfItem:NameOfItem,
    NumbersOfCreate:NumbersOfCreate,
    BottlesOfAllCreate:BottlesOfAllCreate
  })
  res.send(createStore);
})
router.put("/updateCreate/:id",async(req,res) => {
 const {create,bottlesOfAllCreate} = req.body;
 const createId = req.params.id;
 const update = await StoreHouse.update({NumbersOfCreate:create,BottlesOfAllCreate:bottlesOfAllCreate},{where:{id:createId}});
 res.json(update)
})
router.get("/getStore",validationToken,async(req,res) => {
  const getAll = await StoreHouse.findAll({})     
  res.json(getAll) 
})
router.delete("/deleteItem/:id",async(req,res) => {
  const deleteId = req.params.id;
  await StoreHouse.destroy({where:{id:deleteId}})
  res.send();
})
router.delete("/deleteAll", async(req,res) => {
 await StoreHouse.truncate();
  res.json({message:"you have successfully refresh your page"})
})


module.exports = router;