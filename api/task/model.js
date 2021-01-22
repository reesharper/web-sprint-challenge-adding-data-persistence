// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  
}

function find() {
  return db('tasks')
}