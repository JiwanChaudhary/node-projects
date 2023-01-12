require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const userRoutes = require('./router/user');
const authRoutes = require('./router/auth');


// Middleware
app.use(express.json())

app.use(cors());

// Routes
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

const port = process.env.PORT || 5000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()