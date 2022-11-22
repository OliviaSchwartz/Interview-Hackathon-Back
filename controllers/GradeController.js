const { Course, Student, Grade } = require('../models')

const updateGrade = async (req, res) => {
  try {
    const newGrade = await Grade.update(
      { ...req.body },
      {
        where: {
          studentId: req.params.student_id,
          courseId: req.params.course_id
        },
        returning: true
      }
    )
    // add update GPA call here

    res.send(newGrade)
  } catch (error) {
    throw error
  }
}

const getGrade = async (req, res) => {
  try {
    const grade = await Grade.findOne({
      where: {
        studentId: req.params.student_id,
        courseId: req.params.course_id
      }
    })
    res.send(grade)
  } catch (error) {
    throw error
  }
}

module.exports = {
  updateGrade,
  getGrade
}
