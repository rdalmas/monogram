import { useEffect, useState } from 'react';
import { Record, RecordFill } from 'react-bootstrap-icons';

import homeVideo1 from '../assets/homeVideo1.mp4';
import homeVideo2 from '../assets/homeVideo2.mp4';


import './Home.scss';

const HomePage = () => {
  const [videoPlaying, setIsVideoPlaying] = useState('video1');

  useEffect(() => {
    setTimeout(() => {
      if (videoPlaying === 'video1') setIsVideoPlaying('video2');
      if (videoPlaying === 'video2') setIsVideoPlaying('video1');
    }, 10000);
  });

  return (
    <div className='main'>
      <div className='overlay' />
      <div className='video-carousel'>
        {videoPlaying === 'video1' && (<video src={homeVideo1} autoPlay loop muted className='active'></video>)}
        {videoPlaying === 'video2' && (<video src={homeVideo2} autoPlay loop muted className='active'></video>)}
      </div>
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
        <div className='video-controls'>
          <button onClick={() => setIsVideoPlaying('video1')}>{videoPlaying === 'video1' ? (<RecordFill />) : (<Record />)}</button>
          <button onClick={() => setIsVideoPlaying('video2')}>{videoPlaying === 'video2' ? (<RecordFill />) : (<Record />)}</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
