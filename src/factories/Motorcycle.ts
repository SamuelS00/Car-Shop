import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleService from '../services/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';

export default class CreateMotorcycleControllerFactory {
  static make() {
    const motorcycleModel = new MotorcycleModel();
    const motorcycleService = new MotorcycleService(motorcycleModel);
    const motorcycleController = new MotorcycleController(motorcycleService);

    return motorcycleController;
  }
}