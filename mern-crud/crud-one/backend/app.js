require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const connectDB = require('./db/connect');
const routes = require('./routes/route');
const PORT = 5000;

// Middleware
app.use(express.json())

// body-parser is a package
// Body-parser is a middleware package for Node.js that allows you to parse 
// incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
// cors is a package for sharing resources between different sources
app.use(cors());
app.use('/', routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`))
    } catch (error) {
        console.log(error);
    }
}

start()

