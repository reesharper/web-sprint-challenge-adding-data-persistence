// build your `/api/resources` router here
const express = require('express');

const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Resource.find()
    .then(Resource => {
      res.json(Resource)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Resource' });
    })
});

router.post('/', (req, res) => {
  const ResourceData = req.body;

  Resource.add(ResourceData)
    .then(resource => {
      res.status(201).json(ResourceData);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new Resource' });
    });
});

module.exports = router