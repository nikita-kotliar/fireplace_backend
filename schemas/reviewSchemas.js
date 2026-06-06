import Joi from 'joi';

export const createReviewSchema = Joi.object({
  text: Joi.string().min(5).max(1000).required().messages({
    'string.empty': 'Text cannot be empty',
    'any.required': 'Text is required',
  }),
  author: Joi.string().min(2).max(100).required().messages({
    'string.empty': 'Author cannot be empty',
    'any.required': 'Author is required',
  }),
});
