import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Nav from '../Nav';

describe('Renders Nav correctly', async () => {
  afterEach(() => {
    cleanup();
  });
  it('Should render the first link correctly', async () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const link = screen.queryByText('Home');
    expect(link).not.toBeNull();
  });
  it('Should render the second link correctly', async () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const link = screen.queryByText('Shop');
    expect(link).not.toBeNull();
  });
  it('Should render the third link correctly', async () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const link = screen.queryByText('Products');
    expect(link).not.toBeNull();
  });
});
