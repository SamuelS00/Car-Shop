import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import HttpStatusCodes from '../helpers/HttpStatusCode';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>) {
    const car = CarController.destructsCar(req);
    const results = await this._service.create(car);
    return res.status(HttpStatusCodes.CREATED).json(results); 
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const results = await this._service.read();
    return res.status(HttpStatusCodes.OK).json(results);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const results = await this._service.readOne(id);
    return res.status(HttpStatusCodes.OK).json(results);
  }

  public async update(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const car = CarController.destructsCar(req);
    const results = await this._service.update(id, car);
    return res.status(HttpStatusCodes.OK).json(results);
  }

  public async destroy(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    await this._service.destroy(id);
    return res.status(HttpStatusCodes.DELETE).end();
  }

  static destructsCar(req: Request) {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, status, buyValue, doorsQty, seatsQty }; 
    return car;
  }
}