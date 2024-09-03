const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { createTask } = require('./controllers/taskControllers');

const app = express();
app.use(express.json());

app.post('/tasks', createTask);

module.exports = app;
