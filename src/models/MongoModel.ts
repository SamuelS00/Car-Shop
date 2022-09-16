import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: Partial<T>):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read():Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id:string):Promise<T | null> {
    MongoModel.validateObjectId(_id);
    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>):Promise<T | null> {
    MongoModel.validateObjectId(_id);
    const update = obj as UpdateQuery<T>;
    const filter = { _id };
    return this._model.findOneAndUpdate(filter, update, { returnOriginal: false });
  }

  public async destroy(_id: string): Promise<T | null> {
    MongoModel.validateObjectId(_id);
    return this._model.findByIdAndDelete({ _id });
  }
  
  static validateObjectId(_id: string) {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
  }
}

export default MongoModel;