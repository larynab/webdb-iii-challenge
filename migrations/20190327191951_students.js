exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(tbl) {
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();

    //foreign key
    tbl
      .integer("cohort_id") // the column name in this table (students)
      .unsigned()
      .references("id") // primary key in the related (parent) table (cohorts)
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("students");
};
