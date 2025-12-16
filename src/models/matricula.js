'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {
      // define association here
      Matricula.belongsTo(models.Aluno, { foreignKey: 'alunoId' });
      Matricula.belongsTo(models.Curso, { foreignKey: 'cursoId' });
    }
  }
  Matricula.init({
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cursoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dataMatricula: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Matricula',
    tableName: 'Matriculas'
  });
  return Matricula;
};