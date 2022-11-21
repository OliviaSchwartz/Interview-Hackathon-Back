const Router = require('express').Router()
const controller = require('../controllers/GradeController')

Router.put('/:course_id/:student_id', controller.updateGrade)

module.exports = Router
