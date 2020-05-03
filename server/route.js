const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/user/login', controller.user.login);
router.post('/user/signUp', controller.user.signUp);
router.post('/lab319/reserve', controller.seat.reserve);


module.exports = router;