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

var qstring = "DELETE FROM users WHERE id=1";

pool.query(qstring,
    (err, res) => {
        console.log(err, res);
        pool.end();
    });
