const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const connectionString = 'mongodb+srv://jeewa_n:qe9STQ1ZhSNjWobd@nodeexpress.umjtdvb.mongodb.net/TaskManager?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

// mongoose.connect(connectionString).then(() => console.log('Connected successfully...')).catch((err) => console.log(err))

module.exports = connectDB