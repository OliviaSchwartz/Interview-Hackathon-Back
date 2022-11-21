const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const GradeRouter = require('./GradeRouter')

Router.use('/auth', AuthRouter)
Router.use('/students', StudentRouter)
Router.use('/courses', CourseRouter)
Router.use('/grades', GradeRouter)

module.exports = Router
