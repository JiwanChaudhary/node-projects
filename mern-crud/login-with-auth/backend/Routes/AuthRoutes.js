// const express = require('express');

const { register, login } = require('../Controllers/AuthControllers');

// const router = express().Router();
const router = require('express').Router();

router.post('/')
router.post('/register', register)
router.post('/login', login)

module.exports = router