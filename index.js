import express from "express"
import cors from "cors";
import landingPage from "./controllers/welcome.js"
import mongoose from "mongoose";
import dotenv from "dotenv"
import task from "./routes/route_task.js"
import swaggerDocs from "./api-docs/swagger.js"
import swaggerUi from "swagger-ui-express"
import cookieParser from "cookie-parser";
const app=express()

app.use(cookieParser());

app.use(cors({
    origin: '*',
  }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs ));
dotenv.config()

app.use("/api/v1/task",task)

const connectToMongdb=()=>{
    mongoose.connect(process.env.MONGLINK)
.then(()=>{
console.log("connected to mongoDB")
})
.catch((err)=>{
    console.log("can't connect to mongoDb",err)
})

}
app.get("/",landingPage)

const port=8000
app.listen(port,()=>{
    console.log("your server has been started "+port)
connectToMongdb()

})

