import { Sequelize, DataTypes } from 'sequelize';

const model = (sequelize: Sequelize) => {
  return sequelize.define(
    'task',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      conservation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'tasks',
      timestamps: false,
    },
  );
};

export default model;