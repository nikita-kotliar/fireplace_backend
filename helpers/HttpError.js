const errorMessages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Internal Server Error',
};

class HttpError extends Error {
  constructor(status, message = errorMessages[status] || 'Unknown Error') {
    super(message);
    this.status = status;
  }
}

export default HttpError;
