export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  InvalidPostParam = 'InvalidPostParam',
}

type ErrorResponseObject = {
  message: string;
  httpStatus: number;
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const errorCatalog: ErrorCatalog = {
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
  InvalidPostParam: {
    message: 'Parameters should be valid',
    httpStatus: 400,
  },
};
