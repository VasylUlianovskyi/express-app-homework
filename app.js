const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('./controllers/taskControllers');

const app = express();
app.use(express.json());

app.get('/tasks', getTasks);
app.post('/tasks', createTask);
app.get('/tasks/:id', getTaskById);
app.patch('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);

module.exports = app;
