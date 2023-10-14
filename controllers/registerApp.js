import registerAppModel from "../models/registerApp.js";
import generateToken from "../utils/tokenUtils.js"

const registerApp =(req,res)=>{
    try{
const {appName,appId} =req.body
const token =generateToken(appId,appName,res)

const registerAppInstance=new registerAppModel({
appId,
appName,
token
})
registerAppInstance.save()

.then((data)=>{

    res.status(200).json({
        message:"data saved successfully",
        error:null,
        data:data,
        token :token
    })
   
})

}
catch(error){
res.status(500).json({
message:"failed to save the data",
error:error
})

}

}
export default registerApp