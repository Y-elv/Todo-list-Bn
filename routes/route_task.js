import express from "express"
import bodyParser from "body-parser"
import {createTask,readTaskById,readAllTask,updateTaskById,deleteTaskById,deleteAllTask} from "../controllers/controller_task.js"

const router=express.Router()
router.use(bodyParser.json())

router.post("/create",createTask)
router.get("/readAll",readAllTask)
router.get("/read/:taskId",readTaskById)
router.patch("/update/:taskId",updateTaskById)
router.delete("/deleteAll",deleteAllTask)
router.delete("/delete/:taskId",deleteTaskById)

export default router