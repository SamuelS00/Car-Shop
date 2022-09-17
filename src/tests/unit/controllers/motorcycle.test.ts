import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { motorcycleMock, motorcycleMockWithId, motorcycleMockWithIdUpdated } from '../../mocks/motorcycleMock';
import MotorcycleController from '../../../controllers/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import MotorcycleModel from '../../../models/Motorcycle';

describe('Motorcycle Controller', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);
  const motorcycleController = new MotorcycleController(motorcycleService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(motorcycleService, 'create').resolves(motorcycleMock);
    sinon.stub(motorcycleService, 'read').resolves([motorcycleMock]);
    sinon.stub(motorcycleService, 'readOne').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleService, 'update').resolves(motorcycleMockWithIdUpdated);
    sinon.stub(motorcycleService, 'destroy').resolves(motorcycleMock)

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.end = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Motorcycle', () => {
    it('sucess', async () => {
      req.body = motorcycleMock;
      await motorcycleController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Read all Motorcycles', () => {
    it('Sucess', async () => {
      await motorcycleController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([motorcycleMock])).to.be.true;
    });
  });

  describe('ReadOne Motorcycle', () => {
    it('Sucess', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await motorcycleController.readOne(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithId)).to.be.true;
    });
  });

  describe('Update Motorcycle', () => {
    it('Sucess', async () => {
      req.params = { id: motorcycleMockWithId._id };
      req.body = motorcycleMockWithIdUpdated;
      await motorcycleController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithIdUpdated)).to.be.true;
    });
  });

  describe('Delete Motorcycle', () => {
    it('Sucess', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await motorcycleController.destroy(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  });
});