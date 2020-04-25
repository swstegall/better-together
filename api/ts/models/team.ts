import { Sequelize, DataTypes } from 'sequelize';

const model = (sequelize: Sequelize) => {
  const teams = sequelize.define(
    'team',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'teams',
      timestamps: false,
    },
  );
  (teams as any).associate = function(models: any) {
    const { user } = models;
    (teams as any).hasMany(user, { as: 'users' });
  };
  return teams;
};

export default model;