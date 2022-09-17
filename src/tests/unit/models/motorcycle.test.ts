import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleModel from '../../../models/Motorcycle';
import { Model } from 'mongoose';
import { 
  motorcycleMock,
  motorcycleMockWithId,
  motorcycleMockWithIdUpdated 
} from '../../mocks/motorcycleMock';

describe.only('Motorcycle Model', () => {
  const motorcycleModel = new MotorcycleModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'find').resolves([motorcycleMock]);
    sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'findOneAndUpdate').resolves(motorcycleMockWithIdUpdated);
    sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleMock);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a Motorcycle', () => {
    it('successfully created', async () => {
      const newMotorcycle = await motorcycleModel.create(motorcycleMock);
      expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
  });

  describe('returns all Motorcycles created', () => {
    it('successfully returned', async () => {
      const Motorcycles = await motorcycleModel.read();
      expect(Motorcycles).to.be.deep.equal([motorcycleMock])
    });
  });

  describe('return Motorcycle from specified id successfully ', () => {
    it('successfully found', async () => {
      const Motorcycle = await motorcycleModel.readOne(motorcycleMockWithId._id);
      expect(Motorcycle).to.be.deep.equal(motorcycleMockWithId);
    });

    it('_id not found', async () => {
      try {
				await motorcycleModel.readOne('iderrado');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal('InvalidMongoId');
			}
    });
  });

  describe('return the updated Motorcycle of the specified id', () => {
    it('successfully found and updated', async () => {
      const updatedMotorcycle = await motorcycleModel.update(motorcycleMockWithId._id, motorcycleMockWithId);
      expect(updatedMotorcycle).to.be.deep.equal(motorcycleMockWithIdUpdated);
    });

    it('_id not found', async () => {
      try {
				await motorcycleModel.update('iderrado', motorcycleMockWithIdUpdated);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal('InvalidMongoId');
			}
    });
  });

  describe('return the deleted Motorcycle of the specified id', () => {
    it('successfully found and deleted', async () => {
      const deletedMotorcycle = await motorcycleModel.delete(motorcycleMockWithId._id);
      expect(deletedMotorcycle).to.be.deep.equal(motorcycleMock);
    });

    it('_id not found', async () => {
      try {
				await motorcycleModel.delete('iderrado');
			} catch (error: any) {
				expect(error.message).to.be.deep.equal('InvalidMongoId');
			}
    });
  });
});