const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3,])
})

app.listen(3000, () => console.log('Server is listening on port 3000...'))