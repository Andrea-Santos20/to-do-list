const Task = require("../models/Task");

// API METHODS  
const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();

    res.status(200).json(tasksList);

  } catch (err) {
    res.status(404).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  let task;

  try {
    task = await Task.findOne({ _id: req.params.id });

    // const jsonObj = {
    //   id: task.id,
    //   task: task.task,
    //   confirm: task.check,
    //   date: task.date
    // }
    res.status(200).json(task);

  } catch (err) {
    res.status(404).json({ "error": "usuário não encontrado pelo id: " + req.params.id });
  }
};

const createTask = async (req, res) => {  
    const  task = req.body     
    
  if (!task.task || task.task == " ") {    
    res.status(404).json({ "error": "os campos não podem estar vazios." });
  }
  try {
    const createdObj = await Task.create(task);
    res.status(201).json(createdObj);

  } catch (err) {
    res.status(500).json({ "error": err.message });
  }
};

const updateById = async (req, res) => {
  try {
    const task = req.body;

    await Task.updateOne({ _id: req.params.id }, task);
    res.status(200).json({ message: "tarefa do id " + req.params.id + " atualizada" });

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "tarefa deletada com sucesso!" });

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};




module.exports = {
  getById,
  getAllTasks,
  createTask,
  updateById,
  deleteTaskById, 
};