import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId, carMockWithIdUpdated } from '../../mocks/carMock';
import CarService from '../../../services/Car';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMock]);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findOneAndUpdate').resolves(carMockWithIdUpdated);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMock);
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

  describe('return car from specified id successfully ', () => {
    it('successfully found', async () => {
      const car = await carModel.readOne(carMockWithId._id);
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it('_id not found', async () => {
      try {
				await carModel.readOne('iderrado');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal('InvalidMongoId');
			}
    });
  });

  describe('return the updated car of the specified id', () => {
    it('successfully found and updated', async () => {
      const updatedCar = await carModel.update(carMockWithId._id, carMockWithId);
      expect(updatedCar).to.be.deep.equal(carMockWithIdUpdated);
    });

    it('_id not found', async () => {
      try {
				await carModel.update('iderrado', carMockWithIdUpdated);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal('InvalidMongoId');
			}
    });
  });

  describe('return the deleted car of the specified id', () => {
    it('successfully found and deleted', async () => {
      const deletedCar = await carModel.destroy(carMockWithId._id);
      expect(deletedCar).to.be.deep.equal(carMock);
    });

    it('_id not found', async () => {
      try {
				await carModel.destroy('iderrado');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal('InvalidMongoId');
			}
    });
  });
});