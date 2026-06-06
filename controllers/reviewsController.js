import * as reviewsService from '../services/reviewsService.js';

export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await reviewsService.getAll();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const review = await reviewsService.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};
