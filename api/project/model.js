// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,

}

function find() {
  return db('projects')
}

function findById(id) {
  return db('projects')
  .where('project_id', id)
}

async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}
