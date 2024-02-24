import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';


import HomePage from '../Home';

describe('Renders Home page correctly', async () => {
  afterEach(() => {
    cleanup();
  });
  
  it('Should render the h2 correctly', async () => {
      render(<HomePage />);
      const h2 = screen.queryByText('Monogram');
      expect(h2).not.toBeNull();
  });
  it('Should render the h1 correctly', async () => {
    render(<HomePage />);
    const h1 = screen.queryByText('Creative Console');
    expect(h1).not.toBeNull();
  });
  it('Should render the h4 correctly', async () => {
    render(<HomePage />);
    const h4 = screen.queryByText('Simple. Powerful. Adaptable. A better way to create.');
    expect(h4).not.toBeNull();
  });
  it('Should render the first button correctly', async () => {
    render(<HomePage />);
    const btn1 = screen.queryByText('Shop Now');
    expect(btn1).not.toBeNull();
  });
  it('Should render the second button correctly', async () => {
    render(<HomePage />);
    const btn2 = screen.queryByText('Products');
    expect(btn2).not.toBeNull();
  });
});
