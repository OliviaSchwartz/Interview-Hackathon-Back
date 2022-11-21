const { Student } = require('../models')

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const deleteStudent = async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.student_id } })
    res.send({
      msg: 'Student Un-enrolled',
      payload: req.params.student_id,
      status: 'OK'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllStudents,
  deleteStudent
}
