import { Router } from 'express';
import CreateMotorcycleControllerFactory from '../factories/Motorcycle';

const route = Router();
const motorcycleController = CreateMotorcycleControllerFactory.make();

route.post('/', (req, res) => motorcycleController.create(req, res));
route.get('/', (req, res) => motorcycleController.read(req, res));
route.get('/:id', (req, res) => motorcycleController.readOne(req, res));
route.put('/:id', (req, res) => motorcycleController.update(req, res));
route.delete('/:id', (req, res) => motorcycleController.destroy(req, res));

export default route;