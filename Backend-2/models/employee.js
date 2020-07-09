const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ID: {
        type: String,
        required: true,
        default: "123456"
    },
    skills: {
        type: Array,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    Project: {
        type: String,
        required: true,
        default: "Cognizant Internal"
    },
    HCM: {
        type: String,
        required: true,
        default: "Alex"
    },
})

module.exports = mongoose.model('Employees', EmployeeSchema)