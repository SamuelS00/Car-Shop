import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
// import { ErrorTypes } from '../../../errors/catalog';
import MotorcycleModel from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import { 
    motorcycleMock, 
    motorcycleMockWithId, 
    motorcycleMockWithIdUpdated 
} from '../../mocks/motorcycleMock';

describe('Motorcycle Service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  before(() => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleModel, 'read').resolves([motorcycleMock]);
    sinon.stub(motorcycleModel, 'readOne')
      .onCall(0).resolves(motorcycleMockWithId)
      .onCall(1).resolves(null);
    sinon.stub(motorcycleModel, 'update')
      .onCall(0).resolves(motorcycleMockWithIdUpdated)
      .onCall(1).resolves(null);
    sinon.stub(motorcycleModel, 'delete')
      .onCall(0).resolves(motorcycleMockWithId)
      .onCall(1).resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Motorcycle', () => {
    it('Success', async () => {
      const MotorcycleCreated = await motorcycleService.create(motorcycleMock);
      expect(MotorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
    });

    it('Failure', async () => {
      let error;
      
      try { 
        await motorcycleService.create({}) 
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe('Read Motorcycles', () => {
    it('Success', async () => {
      const Motorcycles = await motorcycleService.read();
      expect(Motorcycles).to.be.deep.equal([motorcycleMock]);
    });
  });

  describe('ReadOne Motorcycle', () => {
    it('Success', async () => {
       const Motorcycle = await motorcycleService.readOne(motorcycleMockWithId._id);
       expect(Motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('Failure', async () => {
      let error;

      try {
        await motorcycleService.readOne(motorcycleMockWithId._id)
      } catch (err: any) {
        error = err;
      }

      expect(error).not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });

  describe('Update Motorcycle', () => {
    it('Success', async () => {
       const updatedMotorcycle = await motorcycleService.update(motorcycleMockWithId._id, motorcycleMock);
       expect(updatedMotorcycle).to.be.deep.equal(motorcycleMockWithIdUpdated);
    });

    it('Failure', async () => {
      let error;

      try {
        await motorcycleService.update(motorcycleMockWithId._id, motorcycleMock)
      } catch (err: any) {
        error = err;
      }

      expect(error).not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });

  describe('Destroy Motorcycle', () => {
    it('Success', async () => {
       const Motorcycle = await motorcycleService.destroy(motorcycleMockWithId._id)
       expect(Motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('Failure', async () => {
      let error;

      try {
        await motorcycleService.destroy(motorcycleMockWithId._id)
      } catch (err: any) {
        error = err;
      }

      expect(error).not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.ObjectNotFound);
    });
  });
});