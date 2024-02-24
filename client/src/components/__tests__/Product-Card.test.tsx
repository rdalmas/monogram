import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import ProductCard from '../Product-Card';
import { productMock } from '../__mocks__/product.mock';

describe('Renders Product Card correctly', async () => {
  afterEach(() => {
    cleanup();
  });
  it('Should render product title correctly', async () => {
    render(
      <ProductCard
        {...productMock}
      />
    );
    const title = screen.queryByText('Xbox controller white');
    expect(title).not.toBeNull();
  });
  it('Should render product price correctly', async () => {
    render(
      <ProductCard
        {...productMock}
      />
    );
    const price = screen.queryByText('99');
    expect(price).not.toBeNull();
  });
  it('Should render product description correctly', async () => {
    render(
      <ProductCard
        {...productMock}
      />
    );
    const description = screen.queryByText('Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The DualSense wireless controller offers immersive haptic feedback');
    expect(description).not.toBeNull();
  });
  it('Should render product image correctly', async () => {
    render(
      <ProductCard
        {...productMock}
      />
    );
    const image = screen.queryByAltText('Xbox controller white');
    expect(image).not.toBeNull();
  });
});
