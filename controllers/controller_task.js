const createTask = (req, res) => {
    res.send("create your task ")
}
const readAllTask = (req, res) => {
    res.send("read all your task ")
}
const readTaskById = (req, res) => {
    res.send("read your task ")
}
const updateTaskById = (req, res) => {
    res.send("update your task ")
}
const deleteAllTask = (req, res) => {
    res.send("delete all your task ")
}
const deleteTaskById = (req, res) => {
    res.send("delete your task ")
}
export  {createTask,readTaskById,readAllTask,updateTaskById,deleteTaskById,deleteAllTask}
