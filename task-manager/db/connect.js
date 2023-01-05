const mongoose = require('mongoose')
mongoose.set('strictQuery', true);


const connectDB = (url) => {
    return mongoose.connect(url)
}

// mongoose.connect(connectionString).then(() => console.log('Connected successfully...')).catch((err) => console.log(err))

module.exports = connectDB