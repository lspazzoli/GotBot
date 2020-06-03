const express = require('express');
const router = express.Router();
const User = require('../Controllers/user');


router.post('/email', User.email);

router.post('/name', User.fullName);

router.post('/mobile', User.mobileNumber);


module.exports = router;
