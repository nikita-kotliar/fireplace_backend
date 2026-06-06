import Order from '../models/Order.js';

export const getAll = async () => {
  return Order.findAll({ order: [['createdAt', 'DESC']] });
};

export const create = async (data) => {
  return Order.create(data);
};
