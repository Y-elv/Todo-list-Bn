import jwt from "jsonwebtoken"
function generateToken (appId){
const token =jwt.sign({appId},"myApp")
return token 
}
export default generateToken