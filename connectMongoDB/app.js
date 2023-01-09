const express = require('express');
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect');
const Test = require('./models/test');

// Middleware
app.use(express.json())


// app.use('/', (req, res) => {
//     res.send('Welcome to MongoDB')
// })

app.post('/create', async (req, res) => {
    try {
        const test = await Test.create(req.body)
        res.status(201).json({ test: test })
    } catch (error) {
        console.log(error);
    }
})

app.get('/get', async (req, res) => {
    try {
        const tasks = await Test.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        console.log(error);
    }
})

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()



