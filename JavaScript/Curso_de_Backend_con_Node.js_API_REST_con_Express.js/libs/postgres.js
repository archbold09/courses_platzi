const { Client } = require('pg');

module.exports = async () => {
  const client = new Client({
    host: 'localhost',
    post: 5432,
    user: 'angel',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  return client;
};
