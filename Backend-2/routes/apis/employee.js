const express = require('express')
const router = express.Router()

const Employees = require('../../models/employee')

//get all employee data 
router.get('/', async (req, res) => {
    try {
        const Allemployees = await Employees.find()
        res.send(Allemployees)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//adding a new empployee
router.post('/', async (req, res) => {
    const emp = new Employees({
        name: req.body.name,
        skills: req.body.skills,
        gender: req.body.gender
    })
    try {
        const newEmp = await emp.save()
        res.status(201).json(newEmp)
    } catch (error) {
        res.status(400).json({ message: 'failed to add the data' })
    }
})

//deleteing one with ID
router.delete('/:id', getEmployee, async (req, res) => {
    try {
        await res.employee.remove()
        res.json({ message: "deleted the employee data" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//PATCHING ONE
router.patch('/:id', getEmployee, async (req, res) => {
    if (req.body.skills) {
        res.employee.skills = req.body.skills
    }
    try {
        const updatedEmployee = await res.employee.save()
        res.json(updatedEmployee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


async function getEmployee(req, res, next) {
    let employee
    try {
        employee = await Employees.findById(req.params.id)
        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find such an employee' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.employee = employee
    next()
}
module.exports = router