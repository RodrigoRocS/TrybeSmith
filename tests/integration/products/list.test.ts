import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import mock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Verifica se retorna todos os produtos cadastrados.', async function () {

    sinon.stub(ProductModel, 'findAll').resolves()

   const response = await chai.request(app).get('/products')
   console.log(response);
   expect(response.status).to.be.equal(200)

  })

});
