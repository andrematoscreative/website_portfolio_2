import React, { useState, useEffect, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import Testimonials_data from '../../components/Testimonials_data';
import './Testimonials.scss';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick(currentIndex === Testimonials_data.length - 1 ? 0 : currentIndex + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const NavigationDots = () => {
    return (
      <div className="app__testimonials-dots">
        {Testimonials_data.map((_, index) => (
          <div
            key={index}
            className={`app__testimonials-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className='app__testimonials app__flex' id='Testimonials'>
      <div className='app__master-container'>
        <div className='app__testimonials-info'>
          <div className='app__testimonials-title'>
            <motion.div
              whileInView={{ x: [-90, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className='app__testimonials-title-title'>Testimonials
            </motion.div>
            <motion.div
              whileInView={{ x: [-90, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className='app__testimonials-title-info'>words of clients, collaborators and organizations who I have helped to empower and reach their fullest potential.
              <div className='app__Testimonials-blink'>|</div>
            </motion.div>
          </div>

          <motion.div
            whileInView={{ y: [-30, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}className='app__testimonials-info-content'>
            <div className='app__testimonials-box'>
              <div className="app__testimonials-btn-left"
                onClick={() => handleClick(currentIndex === 0 ? Testimonials_data.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>

              <div className="app__testimonials-item">
                <img src={Testimonials_data[currentIndex].image} alt={Testimonials_data[currentIndex].name} />
                <div className="app__testimonials-content">
                  <div className="app__testimonials-content-text">{Testimonials_data[currentIndex].message}</div>

                  <div className='app__testimonials-content-titles'>
                    <div className="app__testimonials-content-titles-name">{Testimonials_data[currentIndex].name}</div>
                    <div className="app__testimonials-content-titles-job">{Testimonials_data[currentIndex].title}</div>
                  </div>
                </div>
              </div>

              <div className="app__testimonials-btn-right" onClick={() => handleClick(currentIndex === Testimonials_data.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>

            </div>
            <div className='app__testimonials-nav'>
              <div className="app__testimonials-btn-left2"
                onClick={() => handleClick(currentIndex === 0 ? Testimonials_data.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <NavigationDots />
              <div className="app__testimonials-btn-right2" onClick={() => handleClick(currentIndex === Testimonials_data.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;