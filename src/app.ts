import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './docs/swagger-output.json';
import errorHandler from './middleware/errorHandler';
import carRouter from './routes/Car';
import motorcycleRouter from './routes/Motorcycle';

/** Middleware */
const app = express();
app.use(express.json());

/** Routes */
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);

/* Swagger */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(errorHandler);

export default app;
