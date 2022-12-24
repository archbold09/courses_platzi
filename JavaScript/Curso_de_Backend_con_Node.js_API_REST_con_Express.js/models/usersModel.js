const PGPool = require('../libs/postgres.pool');

class UserModel {
  constructor() {
    this.pool = PGPool();
    this.pool.on('error', (error) => console.error(error));
  }

  async list() {
    const connect = await this.pool;
    const response = await connect.query('SELECT * FROM tasks');
    return response.rows;
  }
}

module.exports = new UserModel();
