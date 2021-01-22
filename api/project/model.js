// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,

}

function find() {
  return db('projects')
  .case
    .when("project_completed", 1)
    .then(true)
    .when('project_completed', 0)
    .then(false)
  .end
}

function findById(id) {
  return db('projects')
  .where('project_id', id)
}

async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}
