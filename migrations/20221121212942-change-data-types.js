'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.changeColumn('students', 'gpa', {
      type: Sequelize.FLOAT
    })
    queryInterface.changeColumn('grades', 'grade', {
      type: Sequelize.FLOAT
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.changeColumn('students', 'gpa', {
      type: Sequelize.INTEGER
    })
    queryInterface.changeColumn('grades', 'grade', {
      type: Sequelize.INTEGER
    })
  }
}
