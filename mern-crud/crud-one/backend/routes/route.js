const express = require('express');
// const app = express()

const router = express.Router()

router.post('/adduser', () => {
    console.log('Hello');
})

module.exports = router