const {verify} = require("jsonwebtoken")

const officeValidation = (req,res,next) => {

    const officeToken = req.header("accessToken");
    if(!officeToken) return res.status(400).json({error:"user not authenticated"})
try {
    const tokenOffice = verify(officeToken,"office_token");
    if(tokenOffice){
     req.user = tokenOffice;
     return next();
    }
} catch (error) {
    return res.status(400).json({error:error})
}
}
module.exports = {officeValidation}