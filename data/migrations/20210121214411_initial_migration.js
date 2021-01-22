
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increment('project_id')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
};
