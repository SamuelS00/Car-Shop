import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const route = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

const URL_CAR = '/cars';
const URL_CAR_ID = URL_CAR.concat(URL_CAR);

route.post(URL_CAR, (req, res) => carController.create(req, res));
route.get(URL_CAR, (req, res) => carController.read(req, res));
route.get(URL_CAR_ID, (req, res) => carController.readOne(req, res));
route.put(URL_CAR_ID, (req, res) => carController.update(req, res));
route.delete(URL_CAR_ID, (req, res) => carController.destroy(req, res));

export default route;