// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/docs/swagger_output.json';
const endpointsFiles = ['./src/app.ts'];

swaggerAutogen(outputFile, endpointsFiles);

// tags
// responses
// securiy