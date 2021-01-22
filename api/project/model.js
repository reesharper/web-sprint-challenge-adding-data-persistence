// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,
  ProjectBoolean
}

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function ProjectBoolean(project) {
  return {
    ...project,
    project_completed: intToBoolean(project.project_completed),
  };
}

function find() {
  return db('projects')
    .then(projects => {
      return projects.map((project) => ProjectBoolean(project))
    })
}

function findById(id) {
  return db('projects')
  .select('project_completed', 'project_description', 'project_name')
  .where('project_id', id)
  .then(projects => {
    return projects.map((project) => ProjectBoolean(project))
  })
}

async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}
