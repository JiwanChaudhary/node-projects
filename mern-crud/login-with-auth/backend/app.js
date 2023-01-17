require('dotenv').config()
const express = require('express');
const connectDB = require('./db/connect');
const cors = require('cors');
const authRoutes = require('./Routes/AuthRoutes');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cookieParser())
app.use(express.json());

// cors
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}))

// Routes
app.use('/', authRoutes)

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