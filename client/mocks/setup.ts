import {
  afterAll,
  afterEach,
  beforeAll,
} from 'vitest';
import { fetch } from 'cross-fetch';

import { server } from './node';

global.fetch = fetch;
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
