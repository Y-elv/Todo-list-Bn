import TaskModel from "../models/model_task.js"

const createTask = (req, res) => {
   try{
    const data = req.body

    let taskInstance=new TaskModel({
        title:data.title,
        description:data.description,
        dueDate:data.dueDate,
        completed:data.completed,
    })

   

    taskInstance.save()
    .then((data)=>{
        res.status(200).json({
            message:"data saved successfully",
            error:null,
            data:data
        })
    })
}
    catch(error){
    res.status(500).json({
message:"failed to save the data",
error:"failed"
    })
    }

    
}
const readAllTask =async (req, res) => {
    try{
   let result=await TaskModel.find({})
   if (result==0){
    res.status(400).json({
    message:"there is no data saved yet",
    data:result
    })
   }
   else{
    res.status(200).json({
       
        message:"data retrieved successfully",
        data:result,
        error:null

    })
   }
    }
    catch(error){
    res.staus(500).json({
       data:null,
       message:"failed to retrieve data" ,
       error:"internal error server"
    })
    }
}
const readTaskById =async (req, res) => {
    try{
        let id=req.params.taskId
        let enteredId={_id:id}

        let result=await TaskModel.find(enteredId)
        if(result.length==0){
        res.status(400).json({
            message:"no data found",
            data:result
        })
        }
        else{
            res.status(200).json({
                message:`data with ${id} retrieved successfully`,
                data:result,
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:"failed",
            error:"internal error server"
        })
    }
    
}
const updateTaskById =async (req, res) => {
    try{
      let id=req.params.taskId
      let bodyEntered=req.body
      let foundData=await TaskModel.find({_id:id})
    if(foundData==0){
    res.status(404).json({
        message:"task trying to update is not available ",
        error:"task not found"
    })
    }
    else{
     let result=await TaskModel.findOneAndUpdate(
        {_id:id},
        {$set:bodyEntered}
     )
     res.status(200).json({
        message:`data with ${id} updated successfully`,
        data:result
     })
    }
    } 
    catch(error){
        res.status(500).json({
            message:"internal error server",
            err:error
        })
    }
}
const deleteAllTask = async(req, res) => {
    try{
    let result=await TaskModel.deleteMany({})
    res.status(200).json({
        message:"all tasks has been deleted",
        data:result
    })
    }
    catch(error){
    res.status(500).json({
        message:"Internal error server ",
        err:error

    })
    }
}
const deleteTaskById =async (req, res) => {
   try{
    let enteredId=req.params.taskId
    let foundData=await TaskModel.find({_id:enteredId})
    if(foundData.length==0){
        res.status(400).json({
            message:`no data found with this id :${enteredId}`,
            error:"not found"
        })
    }
    else{
        let result =await TaskModel.deleteOne({_id:enteredId})
        res.status(200).json({
            message:`task with ${enteredId} deleted successfully`,
            data:result
        })
    }
   }
   catch(error){
    res.status(500).json({
        message:"internal error server",
        err:error
    })
   }
}
export  {createTask,readTaskById,readAllTask,updateTaskById,deleteTaskById,deleteAllTask}
