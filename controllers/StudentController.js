const { Student, Course, Grade } = require('../models')

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.student_id, {
      include: {
        model: Course,
        through: Grade,
        as: 'courses'
        // attributes: ['name']
      }
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const updateGpa = async (req, res) => {
  try {
    const grades = await Grade.findAll({
      where: {
        studentId: req.params.student_id
      }
    })
    // res.send(grades)
    let sum = 0
    for (const number of grades) {
      sum += number.grade
    }
    let gpa = sum / grades.length
    // Update GPA
    const newGpa = await Student.update(
      { gpa: gpa },
      { where: { id: req.params.student_id }, returning: true }
    )
    res.send(newGpa)
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
  getStudentById,
  updateGpa,
  deleteStudent
}
