const express = require("express")
const router = express.Router()
const {validationToken} = require("../JWT/jwebToken")
const {updateStaff} = require("../models") 

router.post("/singleStaffPost/:id",validationToken,async (req,res) => {
    const {description,amount} = req.body;
    const singleStaffId = req.params.id;
    const postSingle = await updateStaff.create({description:description,amount:amount,StaffsFileId:singleStaffId});

    res.json(postSingle)
})
router.get("/get-debt/:id",validationToken,async(req,res) => {
 const debtId = req.params.id;
 const getDebt = await updateStaff.findAll({where:{StaffsFileId:debtId}})
 res.json(getDebt)
})

router.get("/allDebtors",validationToken,async(req,res) => {
    const findPK =  await updateStaff.findAll({});
     res.json(findPK);
    })

    router.delete("/deleteOne/:id",async (req,res) => {
        const id = req.params.id;
        await updateStaff.destroy({where:{id:id}});
        res.json("post was deleted");
    })
    router.delete("/default",validationToken,async(req,res) => {
        await updateStaff.truncate()  
        res.json("you have successfully refresh page") 
    })



module.exports = router;