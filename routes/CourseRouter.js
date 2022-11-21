const Router = require('express').Router()
const controller = require('../controllers/CourseController')

Router.get('/', controller.getAllCourses)

module.exports = Router
