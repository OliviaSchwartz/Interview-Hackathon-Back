const { Student } = require('../models')

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllStudents
}
