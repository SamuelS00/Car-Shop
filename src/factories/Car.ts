import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

export default class CreateCarControllerFactory {
  static make() {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);

    return carController;
  }
}