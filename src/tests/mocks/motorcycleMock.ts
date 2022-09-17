import { IMotorcycle } from '../../interfaces/IMotorcycle';

const motorcycleMock: IMotorcycle = {
  model: 'Celta',
  year: 2007,
  color: 'Blue',
  status: true,
  buyValue: 7000,
  category: 'Street',
  engineCapacity: 125,
}

const motorcycleMockWithId: IMotorcycle & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Celta',
  year: 2007,
  color: 'Blue',
  status: true,
  buyValue: 7000,
  category: 'Street',
  engineCapacity: 125,
}

const motorcycleMockWithIdUpdated: IMotorcycle & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Celta',
  year: 2007,
  color: 'Red',
  status: true,
  buyValue: 1000,
  category: 'Trail',
  engineCapacity: 2000,
}

export { motorcycleMock, motorcycleMockWithId, motorcycleMockWithIdUpdated };