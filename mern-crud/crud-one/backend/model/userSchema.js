const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const UserDataSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be provided']
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
})

autoIncrement.initialize(mongoose.connection)
UserDataSchema.plugin(autoIncrement.plugin, 'UserData')

module.exports = mongoose.model('UserData', UserDataSchema)


//  npm i --legacy-peer-deps mongoose-auto-increment
// for installing mongoose-auto-increment