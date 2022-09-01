const routes = require("express").Router();
const TaskController = require("../controller/TaskController")

routes.get ("/", TaskController.getAllTasks);
routes.post ("/create", TaskController.createTask);
routes.get ("/getById/:id/:method/", TaskController.getById);
routes.post ("/updateOne/:id", TaskController.updateOneTask); // no MVC ejs só é aceito get e post
routes.get ("/deleteOne/:id/", TaskController.deleteOneTask);
routes.get("/check/:id", TaskController.taskCheck);

routes.post ("/api/get/:id", TaskController.getByIdTest);





module.exports = routes;