export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  InvalidPostParam = 'InvalidPostParam',
  ObjectNotFound = 'ObjectNotFound',
}

type ErrorResponseObject = {
  error: string;
  httpStatus: number;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const errorCatalog: ErrorCatalog = {
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  InvalidPostParam: {
    error: 'Parameters should be valid',
    httpStatus: 400,
  },
  ObjectNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
};
