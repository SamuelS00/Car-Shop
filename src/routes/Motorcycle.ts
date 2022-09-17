import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleService from '../services/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';

const route = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

const URL_MOTORCYCLE = '/motorcycle';
const URL_MOTORCYCLE_ID = URL_MOTORCYCLE.concat('/:id');

route.post(URL_MOTORCYCLE, (req, res) => motorcycleController.create(req, res));
route.get(URL_MOTORCYCLE, (req, res) => motorcycleController.read(req, res));
route.get(URL_MOTORCYCLE_ID, (req, res) => motorcycleController.readOne(req, res));
route.put(URL_MOTORCYCLE_ID, (req, res) => motorcycleController.update(req, res));
route.delete(URL_MOTORCYCLE_ID, (req, res) => motorcycleController.destroy(req, res));

export default route;