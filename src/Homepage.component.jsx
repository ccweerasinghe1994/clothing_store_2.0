import React from 'react';
import './Homepage.styles.scss'

const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Hats</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>SHOES</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MENS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMENS</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;