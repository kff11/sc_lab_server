const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/user/login', controller.user.login);


module.exports = router;