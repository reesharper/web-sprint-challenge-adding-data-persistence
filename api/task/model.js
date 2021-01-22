// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,

}

function find() {
  return db('tasks')
}

function findById(id) {
  return db('tasks')
  .where('task_id', id)
}

async function add(resource) {
  const [id] = await db('tasks').insert(resource);
  return findById(id);
}