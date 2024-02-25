import request from 'supertest';
import mockery from 'mockery';
import sinon from 'sinon';

import mockProducts from '../../../__mock__/products.json';
import server from '../../../server';
import prismaClient from '../../../database';



describe('GET /api/products', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnUnregistered: false,
      warnOnReplace: false,
      useCleanCache: true,
    });
  });
  afterEach(() => {
    mockery.resetCache();
  });
  afterAll((done) => {
    mockery.disable();
    server.close();
    done();
  });
  it('should return 200 OK', async () => {
    mockery.registerMock('./api/products/products', mockProducts);
    await request(server)
      .get('/api/products')
      .expect(200);
  });
  it('should return an array of products', async () => {
    mockery.registerMock('./api/products/products', mockProducts);
    const response = await request(server)
      .get('/api/products');
    expect(response.body).toBeInstanceOf(Array);
  });
  it('should return an array of products with the correct properties', async () => {
    mockery.registerMock('./api/products/products', mockProducts);
    const response = await request(server)
      .get('/api/products');
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    expect(response.body[0]).toHaveProperty('price');
    expect(response.body[0]).toHaveProperty('image');
    expect(response.body[0]).toHaveProperty('description');
  });
  it('should return an array of products with the correct types', async () => {
    mockery.registerMock('./api/products/products', mockProducts);
    const response = await request(server)
      .get('/api/products');
    expect(typeof response.body[0].id).toBe('number');
    expect(typeof response.body[0].title).toBe('string');
    expect(typeof response.body[0].price).toBe('string');
    expect(typeof response.body[0].image).toBe('string');
    expect(typeof response.body[0].description).toBe('string');
  });
  it('should return an array of products with the correct values', async () => {
    mockery.registerMock('./api/products/products', mockProducts);
    const response = await request(server)
      .get('/api/products');
    expect(response.body[0].id).toBe(7);
    expect(response.body[0].title).toBe('PS5 controller Red Velvet');
    expect(response.body[0].price).toBe("99.00");
    expect(response.body[0].image).toBe('https://images.pexels.com/photos/7776091/pexels-photo-7776091.jpeg');
    expect(response.body[0].description).toBe('Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback');
  });
  it('should return an array of products with the correct length', async () => {
    mockery.registerMock('./api/products/products', mockProducts);
    const response = await request(server)
      .get('/api/products');
    expect(response.body.length).toBe(10);
  });
  it('should return an error message', async () => {
    mockery.registerMock('./api/products/products', null);
    prismaClient.products.findMany = sinon.stub().rejects(new Error('Error'));
    const response = await request(server)
      .get('/api/products');
    expect(response.body.message).toBe('No products found');
  });
});
