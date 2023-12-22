
const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb+srv://ajithc:1234@cluster0.blqnojj.mongodb.net/rentalcar', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('MongoDB connection successful');
    });

    connection.on('error', (err) => {
        console.error('MongoDB connection failed:', err);
    });
}

connectDB();

module.exports = mongoose;