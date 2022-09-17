import { Router } from 'express';
import CreateCarControllerFactory from '../factories/Car';

const route = Router();
const carController = CreateCarControllerFactory.make();

const URL_CAR = '/cars';
const URL_CAR_ID = URL_CAR.concat('/:id');

route.post(URL_CAR, (req, res) => carController.create(req, res));
route.get(URL_CAR, (req, res) => carController.read(req, res));
route.get(URL_CAR_ID, (req, res) => carController.readOne(req, res));
route.put(URL_CAR_ID, (req, res) => carController.update(req, res));
route.delete(URL_CAR_ID, (req, res) => carController.destroy(req, res));

export default route;