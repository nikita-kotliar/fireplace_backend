import HttpError from '../helpers/HttpError.js';

const notFound = (req, res, next) => {
  next(new HttpError(404, `Route ${req.method} ${req.originalUrl} not found`));
};

export default notFound;
