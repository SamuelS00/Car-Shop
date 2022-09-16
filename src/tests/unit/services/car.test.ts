import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
// import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockWithId, carMockWithIdUpdated } from '../../mocks/carMock';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves([carMock]);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'update')
      .onCall(0).resolves(carMockWithIdUpdated)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'destroy')
      .onCall(0).resolves(carMockWithId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Car', () => {
    it('Success', async () => {
      const carCreated = await  carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      let error;
      
      try { 
        await carService.create({}) 
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('Read Cars', () => {
    it('Success', async () => {
      const cars = await carService.read();
      expect(cars).to.be.deep.equal([carMock]);
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
       const car = await carService.readOne(carMockWithId._id);
       expect(car).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      let error;

      try {
        await carService.readOne(carMockWithId._id)
      } catch (err: any) {
        error = err;
      }

      expect(error).not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });

  describe('Update Car', () => {
    it('Success', async () => {
       const updatedCar = await carService.update(carMockWithId._id, carMock);
       expect(updatedCar).to.be.deep.equal(carMockWithIdUpdated);
    });

    it('Failure', async () => {
      let error;

      try {
        await carService.update(carMockWithId._id, carMock)
      } catch (err: any) {
        error = err;
      }

      expect(error).not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });

  describe('Destroy Car', () => {
    it('Success', async () => {
       const car = await carService.destroy(carMockWithId._id);
       expect(car).to.be.deep.equal(carMockWithId);
    });

    it('Failure', async () => {
      let error;

      try {
        await carService.destroy(carMockWithId._id)
      } catch (err: any) {
        error = err;
      }

      expect(error).not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });
});