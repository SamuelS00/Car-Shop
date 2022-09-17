import { Router } from 'express';
import CreateMotorcycleControllerFactory from '../factories/Motorcycle';

const route = Router();
const motorcycleController = CreateMotorcycleControllerFactory.make();

const URL_MOTORCYCLE = '/motorcycles';
const URL_MOTORCYCLE_ID = URL_MOTORCYCLE.concat('/:id');

route.post(URL_MOTORCYCLE, (req, res) => motorcycleController.create(req, res));
route.get(URL_MOTORCYCLE, (req, res) => motorcycleController.read(req, res));
route.get(URL_MOTORCYCLE_ID, (req, res) => motorcycleController.readOne(req, res));
route.put(URL_MOTORCYCLE_ID, (req, res) => motorcycleController.update(req, res));
route.delete(URL_MOTORCYCLE_ID, (req, res) => motorcycleController.destroy(req, res));

export default route;