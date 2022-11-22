const Router = require('express').Router()
const controller = require('../controllers/StudentController')
const middleware = require('../middleware')

Router.get('/', controller.getAllStudents)
Router.get(
  '/:student_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getStudentById
)
Router.delete(
  '/:student_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteStudent
)
Router.put(
  '/gpa/:student_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateGpa
)

module.exports = Router
