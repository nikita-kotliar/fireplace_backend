import Bouquet from '../models/Bouquet.js';
import HttpError from '../helpers/HttpError.js';

export const getAll = async (filter = {}) => {
  const where = {};
  if (filter.favorite !== undefined) {
    where.favorite = filter.favorite;
  }
  return Bouquet.findAll({ where, order: [['createdAt', 'DESC']] });
};

export const getById = async (id) => {
  const bouquet = await Bouquet.findByPk(id);
  if (!bouquet) throw new HttpError(404, 'Not found');
  return bouquet;
};

export const create = async (data) => {
  return Bouquet.create(data);
};

export const update = async (id, data) => {
  const bouquet = await Bouquet.findByPk(id);
  if (!bouquet) throw new HttpError(404, 'Not found');
  await bouquet.update(data);
  return bouquet;
};

export const remove = async (id) => {
  const bouquet = await Bouquet.findByPk(id);
  if (!bouquet) throw new HttpError(404, 'Not found');
  await bouquet.destroy();
  return bouquet;
};

export const updateStatus = async (id, data) => {
  const bouquet = await Bouquet.findByPk(id);
  if (!bouquet) throw new HttpError(404, 'Not found');
  await bouquet.update({ favorite: data.favorite });
  return bouquet;
};

export const updatePhoto = async (id, photoURL) => {
  const bouquet = await Bouquet.findByPk(id);
  if (!bouquet) throw new HttpError(404, 'Not found');
  await bouquet.update({ photoURL });
  return bouquet;
};
