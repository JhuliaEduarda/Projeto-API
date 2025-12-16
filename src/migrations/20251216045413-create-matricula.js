'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alunoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Alunos",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Cursos",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      dataMatricula: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matriculas');
  }
};