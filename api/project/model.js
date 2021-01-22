// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,
  intToBoolean
}

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function find() {
  return db('projects')
    .then(projects => {
      return projects.map((project) => intToBoolean(project))
    })
}

function findById(id) {
  return db('projects')
  .where('project_id', id)
}

async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}
