import jwt from "jsonwebtoken"
function generateToken (appId,appName){
const token =jwt.sign({appId,appName},"myApp")
return token 
}
export default generateToken