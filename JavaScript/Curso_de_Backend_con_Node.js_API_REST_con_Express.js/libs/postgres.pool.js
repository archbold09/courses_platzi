const { Pool } = require('pg');

module.exports = () => {
  const pool = new Pool({
    host: 'localhost',
    post: 5432,
    user: 'angel',
    password: 'admin123',
    database: 'my_store',
  });
  return pool;
};
