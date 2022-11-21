const Router = require('express').Router()
const controller = require('../controllers/CourseController')

Router.get('/', controller.getAllCourses)
Router.get('/:course_id', controller.getCourseById)
Router.post('/addCourse', controller.addCourse)
Router.post('/:course_id/addStudent', controller.addStudentToCourse)

module.exports = Router
