const express = require("express");
const router = express.Router();
const {validationToken} = require("../JWT/jwebToken")
const {StaffsFile} = require("../models")
const {updateStaff} = require("../models")


console.log(updateStaff);
router.post("/staffInfo",validationToken, async(req,res) => {
    const {surname,name,sex,photo,age,salary} = req.body; 
    const findStaffName = await StaffsFile.findOne({where:{name:name}})
    const findStaffsurname = await StaffsFile.findOne({where:{surname:surname}})
    if(findStaffName&&findStaffsurname){
     res.status(501).json({message:"Staff surname and Name already exist!!"})
    }else{
    const staff = await StaffsFile.create({surname:surname,name:name,sex:sex,photo:photo,age:age,salary:salary})
    res.send(staff)
    }
})

router.get("/getStaffs",validationToken,async (req,res) => {
    const staffs = await StaffsFile.findAll({})
    res.json(staffs);
})
router.get("/staffsData",validationToken,async (req,res) => {
    const staffs = await StaffsFile.findAll({})
    res.json(staffs);
})
router.get('/singleData/:id',async(req,res) => {
    const singleDataId = req.params.id;
    const findPK = await StaffsFile.findByPk(singleDataId);
    console.log(findPK);
    res.json(findPK);
})
router.get("/balance/:id",async(req,res) => {
const singleData = req.params.id;
const findPK =  await StaffsFile.findOne({where:{id:singleData},
});
res.json(findPK);

})
router.delete("/removerStaff/:id", async(req,res) => {
    const id = req.params.id;
    await StaffsFile.destroy({where:{id:id}})
    res.json("data removed")
})

module.exports = router;