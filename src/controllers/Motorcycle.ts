import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import HttpStatusCodes from '../helpers/HttpStatusCode';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(req: Request, res: Response<IMotorcycle>) {
    const motorcycle = MotorcycleController.destructsMotorcycle(req);
    const results = await this._service.create(motorcycle);
    return res.status(HttpStatusCodes.CREATED).json(results); 
  }

  public async read(req: Request, res: Response<IMotorcycle[]>) {
    const results = await this._service.read();
    return res.status(HttpStatusCodes.OK).json(results);
  }

  public async readOne(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const results = await this._service.readOne(id);
    return res.status(HttpStatusCodes.OK).json(results);
  }

  public async update(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const motorcycle = MotorcycleController.destructsMotorcycle(req);
    const results = await this._service.update(id, motorcycle);
    return res.status(HttpStatusCodes.OK).json(results);
  }

  public async destroy(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    await this._service.destroy(id);
    return res.status(HttpStatusCodes.DELETE).end();
  }

  static destructsMotorcycle(req: Request) {
    const { model, year, color, status, buyValue, category, engineCapacity } = req.body;
    const motorcycle = { model, year, color, status, buyValue, category, engineCapacity }; 
    return motorcycle;
  }
}