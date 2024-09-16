const {verify} = require("jsonwebtoken")

const waitressValidation = (req,res,next) => {

    const officeToken = req.header("LogInWatressToken");
    if(!officeToken) return res.status(400).json({error:"user not authenticated"})
try {
    const tokenOffice = verify(officeToken,"wetress_token");
    if(tokenOffice){
     req.user = tokenOffice;
     return next();
    }
} catch (error) {
    return res.status(400).json({error:error})
}
}
module.exports = {waitressValidation}