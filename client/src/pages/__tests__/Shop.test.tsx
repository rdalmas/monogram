import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import ShopPage from '../Shop';

describe('Renders Shop page correctly', async () => {
  afterEach(() => {
    cleanup();
  });
  it('Should render the p correctly', async () => {
      render(<ShopPage />);
      const p = screen.queryByText('Discover the perfect console for yours.');
      expect(p).not.toBeNull();
  });
  it('Should render the h1 correctly', async () => {
    render(<ShopPage />);
    const h1 = screen.queryByText('A console for every workflow');
    expect(h1).not.toBeNull();
  });
  it('Should render the first product card correctly', async () => {
    render(<ShopPage />);
    await waitFor(() => {
      const product = screen.queryByText('PS5 controller Red Velvet');
      expect(product).not.toBeNull();
    });
  });
  it('Should render the second product card correctly', async () => {
    render(<ShopPage />);
    await waitFor(() => {
      const product = screen.queryByText('PS5 controller Black');
      expect(product).not.toBeNull();
    });
  });
  it('Should render the third product card correctly', async () => {
    render(<ShopPage />);
    await waitFor(() => {
      const product = screen.queryByText('Xbox controller gray');
      expect(product).not.toBeNull();
    });
  });
});
