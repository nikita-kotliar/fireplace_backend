import Review from '../models/Review.js';

export const getAll = async () => {
  return Review.findAll({ order: [['createdAt', 'DESC']] });
};

export const create = async (data) => {
  return Review.create(data);
};
