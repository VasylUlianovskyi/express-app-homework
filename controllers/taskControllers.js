const { v4: uuidv4 } = require('uuid');

const tasks = [
  {
    id: uuidv4,
    body: 'Complete the React project',
    deadline: '2024-09-10',
    isDone: false,
  },
  {
    id: uuidv4,
    body: 'Prepare for the meeting',
    deadline: '2024-09-05',
    isDone: true,
  },
  {
    id: uuidv4,
    body: 'Buy groceries',
    deadline: '2024-09-07',
    isDone: false,
  },
];

module.exports.createTask = (req, res) => {
  const { body } = req;
  tasks.push({ ...body, id: uuidv4() });
  res.status(201).send(tasks[tasks.length - 1]);
};
