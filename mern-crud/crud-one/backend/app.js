const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const connectDB = require('./db/connect');
const routes = require('./routes/route');
const PORT = 5000;

// Different server ma data exchange garna lai cors ko use garinxa
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

