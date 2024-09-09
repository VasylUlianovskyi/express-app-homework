const { v4: uuidv4 } = require('uuid');

const tasksDb = [
  {
    id: 'fec5a357',
    body: 'Complete the React project',
    deadline: '2024-09-10',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Prepare for the meeting',
    deadline: '2024-09-05',
    isDone: true,
  },
  {
    id: uuidv4(),
    body: 'Buy groceries',
    deadline: '2024-09-07',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Update resume',
    deadline: '2024-09-12',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Book dentist appointment',
    deadline: '2024-09-15',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Plan weekend trip',
    deadline: '2024-09-20',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Finish book reading',
    deadline: '2024-09-22',
    isDone: true,
  },
  {
    id: uuidv4(),
    body: 'Clean the house',
    deadline: '2024-09-14',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Submit tax returns',
    deadline: '2024-09-25',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Organize work documents',
    deadline: '2024-09-18',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Reply to emails',
    deadline: '2024-09-08',
    isDone: true,
  },
  {
    id: uuidv4(),
    body: 'Buy new laptop',
    deadline: '2024-09-30',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Attend coding workshop',
    deadline: '2024-09-28',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Meet with mentor',
    deadline: '2024-09-11',
    isDone: false,
  },
  {
    id: uuidv4(),
    body: 'Prepare presentation',
    deadline: '2024-09-13',
    isDone: false,
  },
];

class TaskDb {
  constructor (arr) {
    this.tasks = [...arr];
  }

  getTask (page, results) {
    return [...this.tasks.slice((page - 1) * results, page * results)];
  }

  createTask (newTask) {
    this.contacts.push({ ...newTask, id: uuidv4(), isDone: false });
    return this.tasks[this.tasks.length - 1];
  }

  getTaskById (id) {
    const foundIndex = this.tasks.findIndex(t => t.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTasktIndex = this.tasks.findIndex(t => t.id === id);
    if (foundTasktIndex !== -1) {
      this.tasks[foundTasktIndex] = {
        ...this.tasks[foundTasktIndex],
        ...values,
      };
    }

    return foundTasktIndex === -1 ? null : this.tasks[foundTasktIndex];
  }

  deleteTask (id) {
    const foundTasktIndex = this.tasks.findIndex(t => t.id === id);

    return foundTasktIndex === -1
      ? null
      : this.tasks.splice(foundTasktIndex, 1);
  }
}

const tasksDbInstanse = new TaskDb(tasksDb);

module.exports = tasksDbInstanse;
