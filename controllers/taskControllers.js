const { v4: uuidv4 } = require('uuid');
const { tasks } = require('../model');

// const tasks = [
//   {
//     id: 'fec5a357',
//     body: 'Complete the React project',
//     deadline: '2024-09-10',
//     isDone: false,
//   },
//   {
//     id: uuidv4(),
//     body: 'Prepare for the meeting',
//     deadline: '2024-09-05',
//     isDone: true,
//   },
//   {
//     id: uuidv4(),
//     body: 'Buy groceries',
//     deadline: '2024-09-07',
//     isDone: false,
//   },
// ];

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  tasks.push({ ...body, id: uuidv4() });
  res.status(201).send(tasks[tasks.length - 1]);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;
  const foundTask = tasks.find(t => t.id === id);

  if (!foundTask) {
    return res.status(404).send('Task Not Found');
  }
  res.status(200).send(foundTask);
};

module.exports.updateTask = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const foundTaskIndex = tasks.findIndex(t => t.id === id);

  if (foundTaskIndex === -1) {
    return res.status(404).send('Task Not Found');
  }
  tasks[foundTaskIndex] = { ...tasks[foundTaskIndex], ...body };
  res.status(200).send(tasks[foundTaskIndex]);
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const foundTask = tasks.findIndex(t => t.id === id);
  if (foundTask === -1) {
    return res.status(404).send('Task Not Found');
  }
  tasks.splice(foundTask, 1);
  res.status(204).send();
};
