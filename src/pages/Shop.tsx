import React from 'react';

import { ChevronDown } from 'react-bootstrap-icons';

import ShopImg from '../assets/shop.jpg';
import './Shop.scss';

const ShopPage = () => {
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
            <a href='#product-list'>
              <ChevronDown />
            </a>
          </div>
        </div>
      </section>
      <div id='product-list' />
      <section className='product-list'>
      </section>
    </main>
  );
}

export default ShopPage;
