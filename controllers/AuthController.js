const { Student } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const student = await Student.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      student &&
      (await middleware.comparePassword(
        student.passwordDigest,
        req.body.password
      ))
    ) {
      let payload = {
        id: student.id,
        email: student.email
      }
      let token = middleware.createToken(payload)
      return res.send({ student: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { username, name, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const student = await Student.create({
      username,
      name,
      email,
      passwordDigest
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const student = await Student.findByPk(req.params.user_id)
    if (
      student &&
      (await middleware.comparePassword(
        student.dataValues.passwordDigest,
        oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await student.update({ passwordDigest })
      return res.send({ status: 'Ok', payload: student })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdatePassword,
  CheckSession
}
