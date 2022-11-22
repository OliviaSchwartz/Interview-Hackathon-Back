const Router = require('express').Router()
const controller = require('../controllers/GradeController')
const middleware = require('../middleware')

Router.put(
  '/:course_id/:student_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateGrade
)
Router.get(
  '/:course_id/:student_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getGrade
)

module.exports = Router
