import React from 'react';
import homeVideo1 from '../assets/homeVideo1.mp4';

import './Home.scss';

const HomePage = () => {
  return (
    <div className='main'>
      <div className='overlay' />
      <video src={homeVideo1} autoPlay loop muted></video>
      <div className='content'>
        <div>
          <h2>Monogram</h2>
          <h1>Creative Console</h1>
          <h4>Simple. Powerful. Adaptable. A better way to create</h4>
          <div className='buttons'>
            <a href='/shop' className='btn'>Shop Now</a>
            <a href='/products' className='btn'>Products</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
