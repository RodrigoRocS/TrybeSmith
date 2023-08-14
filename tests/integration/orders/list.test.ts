import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Verifica se retorna todas as ordens cadastradas.', async function () {

   const response = await chai.request(app).get('/orders')
   console.log(response);
   expect(response.status).to.be.equal(200)

  })

});
