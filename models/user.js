const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/seProject");

const userSchema = mongoose.Schema({
    studentName: String,
    fatherName: String,
    motherName: String,
    gender: String,
    mobile: String,
    emailId: String,
    dob2: String,
    address1: String,
    address2: String,
    state: String,
    school10: String,
    percent10: String,
    board10: String,
    school12: String,
    percent12: String,
    board12: String,
    lastExam: String,
    lastExamPercent: String,
    course: String 
    
})

module.exports = mongoose.model('user', userSchema);