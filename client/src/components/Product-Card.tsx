import React from 'react';
import { Product } from '../types';

import './Product-Card.scss';

const ProductCard = (productInfo: Product) => {
  return (
    <article className='product-card'>
      <a href={`/products/${productInfo.id}`}>
        <header>
          <div className='product-card-img image-shadow'></div>
          <picture className='product-card-img'>
            <img src={productInfo.image} alt={productInfo.title} />
          </picture>
        </header>
        <footer>
          <div className='product-info'>
            <h3 className='product-card-title'>{productInfo.title}</h3>
            <h3 className='product-card-price'>{productInfo.price}</h3>
          </div>
          <span>{productInfo.description}</span>
        </footer>
      </a>
    </article>
  );
}

export default ProductCard;
