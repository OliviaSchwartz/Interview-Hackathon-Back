const Router = require('express').Router()
const controller = require('../controllers/StudentController')

Router.get('/', controller.getAllStudents)

module.exports = Router
