import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import { motorcycleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle:IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }

  public async create(obj: Partial<IMotorcycle>): Promise<IMotorcycle> {
    const dataParsed = MotorcycleService.validateParsed(obj);
    return this._motorcycle.create(dataParsed);
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const result = await this._motorcycle.readOne(_id);
    return MotorcycleService.validateMotorcycle(result);
  }

  public async update(_id: string, obj: Partial<IMotorcycle>): Promise<IMotorcycle> {
    const dataParsed = MotorcycleService.validateParsed(obj);
    const result = await this._motorcycle.update(_id, dataParsed);
    return MotorcycleService.validateMotorcycle(result);
  }

  public async destroy(_id: string): Promise<IMotorcycle> {
    const result = await this._motorcycle.delete(_id);
    return MotorcycleService.validateMotorcycle(result);
  }

  static validateMotorcycle(car: IMotorcycle | null) {
    if (!car) throw new Error(ErrorTypes.ObjectNotFound);
    return car;
  }

  static validateParsed(obj: Partial<IMotorcycle>) {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return parsed.data;
  } 
}

export default MotorcycleService;