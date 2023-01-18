const express = require('express');
const router = express.Router()
const { addUser, getUsers, getUser, editUser } = require('../controller/userController');

router.post('/adduser', addUser)
router.get('/allusers', getUsers)
router.get('/:id', getUser)
router.post('/:id', editUser)

module.exports = router