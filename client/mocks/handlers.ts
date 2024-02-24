import { http, HttpResponse } from 'msw';
import { productsResponseMock } from './mocks';

export const handlers = [
  http.get('http://localhost:3001/api/products', () => {
    return HttpResponse.json(productsResponseMock)}),
];
