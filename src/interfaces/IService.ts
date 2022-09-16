export interface IService<T> {
  create(obj: Partial<T>): Promise<T>,
  read(): Promise<T[]>,
  readOne(_id: string): Promise<T>,
  update(_id: string, obj: Partial<T>):Promise<T>,
}