const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = async () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(console.log('Connected to MongoDB'))
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error)
        console.error(error);
        process.exit(1);
    });
}
