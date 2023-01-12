const express = require('express');
const router = express.Router()
const { addUser, getUsers } = require('../controller/userController');

router.post('/adduser', addUser)
router.get('/allusers', getUsers)

module.exports = router