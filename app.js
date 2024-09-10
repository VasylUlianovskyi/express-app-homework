const express = require('express');
const { taskController } = require('./controllers');
const { validate, paginate } = require('./middleware');

const app = express();
app.use(express.json());

app.get('/tasks', paginate.taskPaginate, taskController.getTasks);
app.post('/tasks', validate.validateTaskOnCreate, taskController.createTask);
app.get('/tasks/:id', taskController.getTaskById);
app.patch(
  '/tasks/:id',
  validate.validateTaskOnCreate,
  taskController.updateTaskById
);
app.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = app;
