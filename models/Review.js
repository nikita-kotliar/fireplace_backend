import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const Review = sequelize.define(
  'review',
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'reviews',
    timestamps: true,
  }
);

export default Review;
