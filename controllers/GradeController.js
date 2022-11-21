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
    res.send(newGrade)
  } catch (error) {
    throw error
  }
}

module.exports = {
  updateGrade
}
