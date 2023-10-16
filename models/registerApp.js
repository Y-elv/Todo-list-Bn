import mongoose from "mongoose";


const registerAppSchema = new mongoose.Schema({
    appId: {
        type: String,
        required: true,
    },
    appName: {
        type: String,
        required: true,
    },
    token :{
        type:String
    }
  
});


const registerApp = mongoose.model('registerApp', registerAppSchema);
export default registerApp
