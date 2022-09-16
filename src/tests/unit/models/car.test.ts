import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarService from '../../../services/Car';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMock]);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('returns all cars created', () => {
    it('successfully returned', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal([carMock])
    });
  });

  describe('returns car from specified id successfully ', () => {
    it('successfully found', async () => {
      const car = await carModel.readOne(carMockWithId._id);
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
				await carModel.readOne('iderrado');
			} catch (error: any) {
				expect(error.message).to.be.equal('InvalidMongoId');
			}
    });
  });
});