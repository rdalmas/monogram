import { useState, useEffect } from 'react';

import { ChevronDown } from 'react-bootstrap-icons';

import ShopImg from '../assets/shop.jpg';
import './Shop.scss';
import ProductCard from '../components/Product-Card';
import { Product } from '../types';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main id='main'>
      <section className='shop'>
        <div aria-hidden='true' className='shop-overlay' />
        <picture className='shop-cover'>
          <img className='shop-img' src={ShopImg} />
        </picture>
        <div className='shop-info'>
          <div className='shop-text'>
            <h1>A console for every workflow</h1>
            <p>Discover the perfect console for yours.</p>
            <a className='product-list-link' href='#product-list'>
              <h1>
                <ChevronDown />
              </h1>
            </a>
          </div>
        </div>
      </section>
      <section className='product-list' id='product-list'>
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
}

export default ShopPage;
