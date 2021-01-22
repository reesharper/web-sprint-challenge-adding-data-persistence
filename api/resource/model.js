// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  
}

function find() {
  return db('resources')
}