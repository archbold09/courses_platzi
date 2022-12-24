const faker = require('faker');
const boom = require('@hapi/boom');

const UserModel = require('../models/usersModel');

class UsersSevice {
  constructor() {
    this.userModel = UserModel;
  }

  async list() {
    const response = await this.userModel.list();
    return response;
  }
}

module.exports = new UsersSevice();
