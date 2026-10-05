const api = require("express").Router()
const TaskController =  require("../controller/taskController")


api.get("/", TaskController.homePage)
api.post("/add-task",TaskController.createTask)
api.get("/tasks", TaskController.showTask)
api.put("/status/:id",TaskController.statusUpdate)
api.delete("/delete-task/:id", TaskController.deleteTask)
api.get("/getsingletask/:id",TaskController.singleTask )
api.put("/update-task/:id",TaskController.updateTask)







module.exports = api ;