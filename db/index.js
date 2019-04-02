const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  usere: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'wasmo',
  port: 5432
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};
