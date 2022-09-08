const routes = require("express").Router();
const TaskController = require("../controller/TaskController")
const TaskApiController = require("../controller/TaskApiController")

// FRONT ROUTES
routes.get ("/", TaskController.getAllTasks);
routes.post ("/create", TaskController.createTask);
routes.get ("/getById/:id/:method/", TaskController.getById);
routes.post ("/updateOne/:id", TaskController.updateOneTask); // no MVC ejs só é aceito get e post
routes.get ("/deleteOne/:id/", TaskController.deleteOneTask);
routes.get("/check/:id", TaskController.taskCheck);


//  API ROUTES 
routes.get("/api/get-all", TaskApiController.getAllTasks);
routes.get ("/api/get/:id", TaskApiController.getById);
routes.post ("/api/create", TaskApiController.createTask);
routes.post ("/api/update/:id", TaskApiController.updateById);
routes.get ("/api/delete/:id", TaskApiController.deleteTaskById);





module.exports = routes;