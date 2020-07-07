const express = require('express')
const router = express.Router()

const Employees = require('../../models/employee')


router.get('/', async (req, res) => {
    try {
        const Allemployees = await Employees.find()
        res.send(Allemployees)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//adding a new empployee
router.post('/', async (req,res)=>{
    const emp = new Employees({
        name: req.body.name,
        skills:req.body.skills
    })
    try {
        const newEmp = await emp.save()
        res.status(201).json(newEmp)
    } catch (error) {
        res.status(400).json({message: 'failed to add the data'})   
    }

})
// router.post('/add', (req,res)=>{
//     const name = req.body.name
//     const skills = req.body.skills
//     new Employees({
//         name,
//         skills
//     })
//     Employees.save()
//     .then(Employee)
// })

module.exports = router