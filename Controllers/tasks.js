const {getLengthOfTasks, getAllTasks, getTask, addTask, editTask, removeTask} = require("../db");

//get all tasks
const fetchAllTasks = (req, res) => {
  res.json({
    success: true,
    length: getLengthOfTasks(),
    data: getAllTasks()
  });
}

//get a single task using ID
const fetchTask = (req, res) => {
  const id = req.params.id;

  const task = getTask(parseInt(id));

  if(task) {
    res.json({
      success: true,
      data: task
    })
  } else {
    res.status(404).json({
      success: false,
      error: `Task with ID ${id} not found!`
    })
  }
}

//add a task
const submitTask = (req, res) => {
  const reqData = req.body;

  if(reqData.text) {
    addTask(reqData);
    res.json({
      success: true,
      message: `Task added successfully`,
      length: getLengthOfTasks(),
      data: getAllTasks()
    })
  } else {
    res.status(404).json({
      success: false,
      error: `Failed to add task`
    })
  }
}

//update a task
const updateTask = (req, res) => {
  const id = req.params.id;
  const reqData = req.body;

  if(reqData.text || reqData.date) {
    editTask(parseInt(id), reqData);
    res.json({
      success: true,
      message: `Task updated successfully`,
      length: getLengthOfTasks(),
      data: getAllTasks()
    })
  } else {
    res.status(404).json({
      success: false,
      error: `Failed to update task`
    })
  }
}

//remove a task using ID
const deleteTask = (req, res) => {
  const id = req.params.id;

  if(getTask(parseInt(id))) {
    removeTask(parseInt(id));
    res.json({
      success: true,
      message: `Task removed successfully`,
      length: getLengthOfTasks(),
      data: getAllTasks()
    })
  } else {
    res.status(404).json({
      success: false,
      error: `Failed to remove task`
    })
  }
}

module.exports = {
  fetchAllTasks,
  fetchTask,
  submitTask,
  updateTask,
  deleteTask
}