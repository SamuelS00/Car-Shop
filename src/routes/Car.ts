import { Router } from 'express';
import CreateCarControllerFactory from '../factories/Car';

const route = Router();
const carController = CreateCarControllerFactory.make();

route.post('/', (req, res) => carController.create(req, res));
route.get('/', (req, res) => carController.read(req, res));
route.get('/:id', (req, res) => carController.readOne(req, res));
route.put('/:id', (req, res) => carController.update(req, res));
route.delete('/:id', (req, res) => carController.destroy(req, res));

export default route;