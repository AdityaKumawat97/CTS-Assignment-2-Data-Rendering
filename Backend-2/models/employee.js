const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Employees', EmployeeSchema)