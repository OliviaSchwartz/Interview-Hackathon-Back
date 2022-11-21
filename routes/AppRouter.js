const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')

Router.use('/auth', AuthRouter)
Router.use('/students', StudentRouter)
Router.use('/courses', CourseRouter)

module.exports = Router
