const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.get('/', controller.getAllStudents)
Router.get('/:student_id', controller.getStudentById)
Router.delete('/:student_id', controller.deleteStudent)

module.exports = Router
