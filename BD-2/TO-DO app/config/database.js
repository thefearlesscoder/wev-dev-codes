const mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables from.env file in the process object

// Connect to MongoDB
const dBConnect =  () => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => console.log('MongoDB Connected...'))
       .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        console.log("issue in the DB connection");
        
        // Exit the application after a certain period of time
        process.exit(1);
    });
}

module.exports = dBConnect;