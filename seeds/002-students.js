exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate() // resets the primary key in addition to cleaning the table
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Apple', cohort_id: 1 },
        { name: 'Pineapple', cohort_id: 2 },
        { name: 'Doge', cohort_id: 3 },
      ]);
    });
};