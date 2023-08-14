import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import mock from '../../mocks/product.mock'
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Verifica se é possivel cadastrar um produto com sucesso.', async function () {

    const productBuild = ProductModel.build(mock.createdNewProd)
    sinon.stub(ProductModel, 'create').resolves(productBuild)

   const response = await chai.request(app).post('/products').send(mock.newProduct)
   
   expect(response.body).to.be.deep.equal(mock.createdNewProd)
   expect(response.status).to.be.equal(201)

  })

});
