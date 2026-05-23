import Joi from 'joi';

export const createBouquetSchema = Joi.object({
  title: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Title cannot be empty',
    'any.required': 'Title is required',
  }),
  description: Joi.string().min(5).max(500).required().messages({
    'string.empty': 'Description cannot be empty',
    'any.required': 'Description is required',
  }),
  price: Joi.number().integer().min(0).required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
  }),
  photoURL: Joi.string().uri().optional(),
  favorite: Joi.boolean().optional(),
});

export const updateBouquetSchema = Joi.object({
  title: Joi.string().min(2).max(100),
  description: Joi.string().min(5).max(500),
  price: Joi.number().integer().min(0),
  photoURL: Joi.string().uri().optional(),
  favorite: Joi.boolean(),
}).min(1).messages({
  'object.min': 'Body must contain at least one field',
});

export const patchFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': 'Field favorite is required',
    'boolean.base': 'Favorite must be a boolean',
  }),
});
