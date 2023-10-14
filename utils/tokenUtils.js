import jwt from "jsonwebtoken"
const generateToken = (appId,appName,res)=>{
const token =jwt.sign({appId,appName},"myApp")
if (res){
    res.cookie('jwtToken', token, { httpOnly: true, secure: true });
}
    

return token 
}
export default generateToken