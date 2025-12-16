'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      // define association here
      Curso.belongsToMany(models.Aluno, {
        through: models.Matricula,
        foreignKey: 'cursoId',
        otherKey: 'alunoId'
      })
    }
  }
  Curso.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cargaHoraria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modalidade: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'Cursos'
  });
  return Curso;
};