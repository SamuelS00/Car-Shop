import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Celta',
  year: 2007,
  color: 'Blue',
  status: true,
  buyValue: 7000,
  doorsQty: 4,
  seatsQty: 4
}

const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Celta',
  year: 2007,
  color: 'Blue',
  status: true,
  buyValue: 7000,
  doorsQty: 4,
  seatsQty: 4
}

const carMockWithIdUpdated: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Celta',
  year: 2007,
  color: 'Red',
  status: true,
  buyValue: 1000,
  doorsQty: 4,
  seatsQty: 4
}


export { carMock, carMockWithId, carMockWithIdUpdated };