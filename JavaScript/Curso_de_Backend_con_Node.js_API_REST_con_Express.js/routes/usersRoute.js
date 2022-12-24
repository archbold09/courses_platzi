const express = require('express');

const UsersService = require('../services/usersService');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await UsersService.list();

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
