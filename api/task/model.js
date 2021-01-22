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
  return db('tasks as t')
    .join('projects as p', 'p.project_id', 't.project_id')
    .select('p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.task_completed')
      .then(tasks => {
        return tasks.map((task) => TaskBoolean(task))
      })
}

function findById(id) {
  return db('tasks')
  .select('task_completed', 'task_description', 'task_notes')
  .where('task_id', id)
  .then(tasks => {
    return tasks.map((task) => TaskBoolean(task))
  })
}

async function add(resource) {
  const [id] = await db('tasks').insert(resource);
  return findById(id);
}