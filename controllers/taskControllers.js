const createError = require('http-errors');
const { task } = require('./../model');

module.exports.getTasks = (req, res) => {
  const { page, results } = req.query;

  const foundTasks = task.getTask(page, results);

  res.status(200).send(foundTasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;

  const createdTask = task.createTask(body);

  res.status(201).send(createdTask);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;

  const foundTask = task.getTaskById(id);

  if (!foundTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(200).send(foundTask);
};

module.exports.updateTaskById = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const updateTask = task.getTaskById(id, body);

  if (!updateTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(200).send(updateTask);
};

module.exports.deleteTaskById = (req, res) => {
  const { id } = req.params;

  const foundTask = task.deleteTask(id);

  if (!foundTask) {
    return res.status(404).send('Task Not Found');
  }

  res.status(200).send();
};
