// build your `/api/tasks` router here
const express = require('express');

const Task = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Task.find()
    .then(task => {
      res.json(task)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get task' });
    })
});

router.post('/', (req, res) => {
  const taskData = req.body;

  Task.add(taskData)
    .then(task => {
      res.status(201).json(taskData);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
});

module.exports = router