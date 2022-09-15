import express from 'express';
import 'express-async-errors';
import errorHandler from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(errorHandler);

export default app;
