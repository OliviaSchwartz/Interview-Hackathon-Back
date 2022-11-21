const { Course, Student, Grade } = require('../models')

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.course_id, {
      include: {
        model: Student,
        through: Grade,
        as: 'students',
        attributes: ['name']
      }
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}

const addCourse = async (req, res) => {
  try {
    const course = await new Course(req.body)
    await course.save()
    res.send(course)
  } catch (error) {
    throw error
  }
}

const addStudentToCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.course_id)
    await course.addStudents([req.body.studentId])
    await course.save()
    const response = await Course.findByPk(req.params.course_id, {
      include: [
        {
          model: Student,
          through: Grade,
          as: 'students',
          attributes: ['name']
        }
      ]
    })
    res.send(response)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  addStudentToCourse
}
