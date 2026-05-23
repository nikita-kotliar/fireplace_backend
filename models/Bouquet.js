import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const Bouquet = sequelize.define(
  'bouquet',
  {
    photoURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'bouquets',
    timestamps: true,
  }
);

export default Bouquet;
