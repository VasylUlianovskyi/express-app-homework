const createError = require('http-errors');
const { task } = require('./../model');

module.exports.getTasks = (req, res) => {
  const { page, results } = req.pagination;

  const foundTasks = task.getTask(page, results);

  res.status(200).send(foundTasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;

  const createdTask = task.createTask(body);

  res.status(201).send(createdTask);
};

module.exports.getTaskById = (req, res, next) => {
  const { id } = req.params;

  const foundTask = task.getTaskById(id);

  if (!foundTask) {
    return next(createError(404, 'Task Not Found'));
  }

  res.status(200).send(foundTask);
};

module.exports.updateTaskById = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const updateTask = task.getTaskById(id, body);

  if (!updateTask) {
    return next(createError(404, 'Task Not Found'));
  }

  res.status(200).send(updateTask);
};

module.exports.deleteTaskById = (req, res, next) => {
  const { id } = req.params;

  const foundTask = task.deleteTask(id);

  if (!foundTask) {
    return next(createError(404, 'Task Not Found'));
  }

  res.status(200).send();
};
