import express from "express"
import bodyParser from "body-parser"
import {createTask,readTaskById,readAllTask,updateTaskById,deleteTaskById,deleteAllTask} from "../controllers/controller_task.js"
import verifyToken from "../middleware/verifyToken.js"
import registerApp from "../controllers/registerApp.js"
const router=express.Router()
router.use(bodyParser.json())

router.post("/register",registerApp)
router.post("/create",createTask)
router.get("/readAll",readAllTask)
router.get("/read/:taskId",readTaskById)
router.patch("/update/:taskId",updateTaskById)
router.delete("/deleteAll",deleteAllTask)
router.delete("/delete/:taskId",deleteTaskById)

export default router