
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/lambda.sqlite3',
  },
  useNullAsDefault: true, // needed for sqlite
};
const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

//POST
// create roles
server.post('/api/cohorts', async (req, res) => {
    try {
      const [id] = await db('cohorts').insert(req.body);
  
      const cohort = await db('cohorts')
        .where({ id: id })
        .first();
  
      res.status(201).json(cohort);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });

  //GET
// list all roles
server.get('/api/cohorts', async (req, res) => {

  try {
    const cohorts = await db('cohorts'); // all the records from the table
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//--------------------------------------------------------------
//STUDENTS
//GET
server.get('/api/students', async (req, res) => {

    try {
      const students = await db('students'); // all the records from the table
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  //----------------------------------------------------------------------
//SERVER PORT
const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

