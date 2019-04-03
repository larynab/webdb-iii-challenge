exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate() // resets the primary key in addition to cleaning the table
    .then(function() {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'TA' },
        { name: 'Student' },
        { name: 'Staff' },
      ]);
    });
};