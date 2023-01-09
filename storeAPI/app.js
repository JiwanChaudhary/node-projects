require('dotenv').config()
//* Async errors
require('express-async-errors')

const express = require('express');
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products');

const notFound = require('./errors/not-found');
const notFoundMiddleware = require('./errors/error-handler');

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products</a>')
})

app.use('/api/v1/products', productsRouter)

// Products Route

// Add errors after the routes
app.use(notFound)
app.use(notFoundMiddleware)

const port = process.env.port || 3000;
const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()