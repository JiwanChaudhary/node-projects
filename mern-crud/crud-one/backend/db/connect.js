// import mongoose from "mongoose"

// const connect = async () => {
//     const URL = '';
//     try {
//         await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
//     } catch (error) {
//         console.log('Error while connecting database', error);
//     }
// }

//! This way tala ko wala
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB