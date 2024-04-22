import React from 'react';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__Footer" id='Footer'>
      <div className='app__master-container'>
        <div className="app__footer--content">©2024 André Matos Creative. All rights reserved.
          <div className="app__footer-right-content">Design and code: André Matos
          <a href={`#Home`}>
            <div className='app__footer-logo'>
            <img src={images.logo} alt='andre matos creative logo'/>
          </div>
          </a>
          </div>
        </div>
        

      </div>
    </footer>
  );
};

export default Footer;