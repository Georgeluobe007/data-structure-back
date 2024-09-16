const express = require("express");
const router = express.Router();
const {TableName} = require("../models")


router.post("/nameTable/:id",async(req,res) => {
    const {mytabeName} = req.body;
    const waiterId = req.params.id;
    const checkName = await TableName.findOne({where:{officeName:mytabeName,WaitressLogInId:waiterId}})
    if(checkName){
        res.status(501).json({message:"this table name already exist"})
    }else{
        const createTableName = await TableName.create({
            officeName:mytabeName,
            WaitressLogInId:waiterId
        })
        res.status(200).json(createTableName)
    }
})
router.get("/getTableName/:id",async(req,res) => {
    const allTable = req.params.id
    const getAllTable = await TableName.findAll({where:{ WaitressLogInId:allTable}})
    res.json(getAllTable)
})
router.delete("/deleteTable/:id",async(req,res) => {
    const deleteTableId = req.params.id;
    const deleteTable = await TableName.destroy({where:{id:deleteTableId}})
    res.json(deleteTable)
})

module.exports = router;