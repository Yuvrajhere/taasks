var tasks = [
  {
    id: 1,
    text: "sample test 1",
    date: new Date()
  },
  {
    id: 2,
    text: "sample test 2",
    date: new Date()
  }
];

//get length of the tasks
const getLengthOfTasks = () => {
  return tasks.length;
}

//get all tasks
const getAllTasks = () => {
  return tasks;
}

//get a single task with ID
const getTask = (key) => {
  return tasks.find(task => task.id === key);
}

//add new task
const addTask = (data) => {
  const task = {
    id: getLengthOfTasks() + 1,
    text: data.text,
    date: data.date ? new Date(data.date) : new Date()
  }
  tasks.push(task);
}

//edit a task
const editTask = (key, data) => {
  const taskData = tasks.find(task => task.id === key);

  taskData.text = data.text ? data.text : taskData.text;
  taskData.date = data.date ? new Date(data.date) : taskData.date;
}

//remove a task
const removeTask = (key) => {
  tasks = tasks.filter(task => task.id !== key);
}

module.exports = {getLengthOfTasks, getAllTasks, getTask, addTask, editTask, removeTask};