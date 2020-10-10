const express = require("express");
const router = express.Router();
const {
  fetchAllTasks,
  fetchTask,
  submitTask,
  updateTask,
  deleteTask
} = require("../Controllers/tasks");

// get all tasks
router.get('/', fetchAllTasks);

//get a task using ID
router.get('/:id', fetchTask);

//add a task
router.post('/', submitTask);

//edit a task
router.put('/:id', updateTask);

//remove a task
router.delete('/:id', deleteTask);

module.exports = router;