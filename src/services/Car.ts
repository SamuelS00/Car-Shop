import { ErrorTypes } from '../errors/catalog';
import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';

class CarService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: Partial<ICar>): Promise<ICar> {
    const dataParsed = CarService.validateParsed(obj);
    return this._car.create(dataParsed);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar> {
    const result = await this._car.readOne(_id);
    return CarService.validateCar(result);
  }

  public async update(_id: string, obj: Partial<ICar>): Promise<ICar> {
    const dataParsed = CarService.validateParsed(obj);
    const result = await this._car.update(_id, dataParsed);
    return CarService.validateCar(result);
  }

  public async destroy(_id: string): Promise<ICar> {
    const result = await this._car.delete(_id);
    return CarService.validateCar(result);
  }

  static validateCar(car: ICar | null) {
    if (!car) throw new Error(ErrorTypes.ObjectNotFound);
    return car;
  }

  static validateParsed(obj: Partial<ICar>) {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return parsed.data;
  }
}

export default CarService;