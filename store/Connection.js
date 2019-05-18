const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://lordone:83agas@cluster0-y8dxz.mongodb.net/test?retryWrites=true'

const openConnection = () => mongoose.connect(connectionString)

module.exports = {
    openConnection,
}