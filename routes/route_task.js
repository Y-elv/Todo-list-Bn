import express from "express"
import bodyParser from "body-parser"
import {createTask,readTaskById,readAllTask,updateTaskById,deleteTaskById,deleteAllTask} from "../controllers/controller_task.js"
import verifyToken from "../middleware/verifyToken.js"
import registerApp from "../controllers/registerApp.js"
const router=express.Router()
router.use(bodyParser.json())

router.post("/register",registerApp)
router.post("/create",verifyToken,createTask)
router.get("/readAll",verifyToken,readAllTask)
router.get("/read/:taskId",verifyToken,readTaskById)
router.patch("/update/:taskId",verifyToken,updateTaskById)
router.delete("/deleteAll",verifyToken,deleteAllTask)
router.delete("/delete/:taskId",verifyToken,deleteTaskById)

export default router