import { Sequelize, DataTypes } from 'sequelize';

const model = (sequelize: Sequelize) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      team: {
        type: DataTypes.INTEGER,
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
      tableName: 'users',
      timestamps: false,
    },
  );
};

export default model;