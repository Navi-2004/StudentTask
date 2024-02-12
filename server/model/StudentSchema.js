const mongoose = require('mongoose');

// Define a schema for the data
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    dept: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    college: {
        type: String
    },
    cgpa: {
        type: Number
    }
});

// Create a Mongoose model using the schema
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
