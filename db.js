const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    host: 'db',
    database: 'smartpos',
    password: 'password',
    port: 5432,
});

module.exports = pool;
