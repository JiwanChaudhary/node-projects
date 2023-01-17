require('dotenv').config()
const express = require('express');
const connectDB = require('./db/connect');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to database and start server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()