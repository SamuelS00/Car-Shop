import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { ErrorTypes, errorCatalog } from '../errors/catalog';
import HttpStatusCodes from '../helpers/HttpStatusCode';

const errorHandler: ErrorRequestHandler = (err: Error | ZodError, _req, res, _next) => {
  if (err instanceof ZodError) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({ message: err.issues });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;

  const mappedError = errorCatalog[messageAsErrorType];

  if (mappedError) {
    const { httpStatus, error } = mappedError;
    return res.status(httpStatus).json({ error });
  }

  console.error(err);
  return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'internal error' });
};

export default errorHandler;