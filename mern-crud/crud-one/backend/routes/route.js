const express = require('express');
const router = express.Router()
const { addUser, getUsers, getUser, editUser, deleteUser } = require('../controller/userController');

router.post('/adduser', addUser)
router.get('/allusers', getUsers)
router.get('/:id', getUser)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

module.exports = router