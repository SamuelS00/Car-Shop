import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { carMock, carMockWithId, carMockWithIdUpdated } from '../../mocks/carMock';
import CarController from '../../../controllers/Car';
import CarService from '../../../services/Car';
import CarModel from '../../../models/Car';

describe('Car Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'read').resolves([carMock]);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);
    sinon.stub(carService, 'update').resolves(carMockWithIdUpdated);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Car', () => {
    it('sucess', async () => {
      req.body = carMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Read all Cars', () => {
    it('Sucess', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMock])).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('Sucess', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('Update Car', () => {
    it('Sucess', async () => {
      req.params = { id: carMockWithId._id };
      req.body = carMockWithIdUpdated;
      await carController.update(req, res);
      
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithIdUpdated)).to.be.true;
    });
  });
});