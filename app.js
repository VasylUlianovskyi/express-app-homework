const express = require('express');
const { taskController } = require('./controllers');

const app = express();
app.use(express.json());

app.get('/tasks', taskController.getTasks);
app.post('/tasks', taskController.createTask);
app.get('/tasks/:id', taskController.getTaskById);
app.patch('/tasks/:id', taskController.updateTaskById);
app.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = app;
