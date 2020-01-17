const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    //host: '10.0.1.46',
    host: 'localhost',
    database: 'test123',
    password: 'xxx',
    port: '5432',
    ssl: false
});

var qstring = "INSERT INTO users"
    + "(id, firstName, lastName) VALUES"
    + "(1, 'Shahriar', 'Shovon')";

pool.query(qustring,
    (err, res) => {
        console.log(err, res);
        pool.end();
    });
