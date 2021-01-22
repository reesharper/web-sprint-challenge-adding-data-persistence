// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add
}

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function TaskBoolean(task) {
  return {
    ...task,
    task_completed: intToBoolean(task.task_completed),
  };
}

function find() {
  return db('tasks')
    .then(tasks => {
      return tasks.map((task) => TaskBoolean(task))
    })
}

function findById(id) {
  return db('tasks')
  .where('task_id', id)
  .then(tasks => {
    return tasks.map((task) => TaskBoolean(task))
  })
}

async function add(resource) {
  const [id] = await db('tasks').insert(resource);
  return findById(id);
}