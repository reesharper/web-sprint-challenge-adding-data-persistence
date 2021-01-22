// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
  find,
  findById,
  add,

}

function find() {
  return db('resources')
}

function findById(id) {
  return db('resources')
  .where('resource_id', id)
}

async function add(resource) {
  const [id] = await db('resources').insert(resource);
  return findById(id);
}