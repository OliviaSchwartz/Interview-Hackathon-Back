const Router = require('express').Router()
const controller = require('../controllers/CourseController')
const middleware = require('../middleware')

Router.get('/', controller.getAllCourses)
Router.get(
  '/:course_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getCourseById
)
Router.post(
  '/addCourse',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.addCourse
)
Router.post(
  '/:course_id/addStudent',
  middleware.stripToken,
  middleware.verifyToken,
  controller.addStudentToCourse
)

module.exports = Router
