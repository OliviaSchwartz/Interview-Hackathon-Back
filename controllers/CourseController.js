const { Course } = require('../models')

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllCourses
}
