import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {

  return (

    <div className='app__Skills' id='Skills'>
      <div className='app__master-container'>
        <div className='app__Skills-info'>
            <div className='app__Skills-title'>

                <motion.div
                whileInView={{ x: [-90, 0], opacity: [0,1] }}
                transition={{ duration: 1 }}
                className='app__Skills-title-title'>Skills
                </motion.div>

                <motion.div
                whileInView={{ x: [-90, 0], opacity: [0,1] }}
                transition={{ duration: 1.5 }}
                className='app__Skills-title-info'>Always learning, always growing. Follow my journey as I sharpen my skills and challenge myself.
                <div className='app__Skills-blink'>|</div>
                </motion.div>
            
            </div>
            <div className="app__Skills-container">
            <motion.div
            whileInView={{ y: [-30, 0], opacity: [0,1] }}
            transition={{ duration: 1.5 }}>

                    <div className='app__Skills-item_row1'>
                        
                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.javascript} alt='javascript'/>
                            </div>
                            <p className="p-text">Javascript</p>
                        </div>
                        
                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.html} alt='html'/>
                            </div>
                            <p className="p-text">Html</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.css} alt='Css'/>
                            </div>
                            <p className="p-text">Css</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.react} alt='react'/>
                            </div>
                            <p className="p-text">React</p>
                        </div>
                        
                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.sass} alt='sass'/>
                            </div>
                            <p className="p-text">Sass</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.node} alt='node'/>
                            </div>
                            <p className="p-text">Node Js</p>
                        </div>

                    </div>
                    <div className='app__Skills-item_row2'>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.redux} alt='redux'/>
                            </div>
                            <p className="p-text">Redux</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.git} alt='git'/>
                            </div>
                            <p className="p-text">Git</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.figma} alt='figma'/>
                            </div>
                            <p className="p-text">Figma</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.photoshop} alt='photoshop'/>
                            </div>
                            <p className="p-text">Photoshop</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.illustrator} alt='illustrator'/>
                            </div>
                            <p className="p-text">Illustrator</p>
                        </div>

                        <div className="app__Skills-item">
                            <div className="app__Skills-image-container">
                                <img className="app__Skills-image" src={images.aftereffects} alt='aftereffects'/>
                            </div>
                            <p className="p-text">After Effects</p>
                        </div>

                    </div>

                </motion.div>
            </div>

                {/*<div className="app__Skills-container">
                    <div class="app__Skills-container-row">
                        <div class="skill">
                            <img src={images.javascript} alt='javascript'/>
                            <p>Javascript</p>
                        </div>
                        <div class="skill">
                            <img src={images.html} alt='html'/>
                            <p>Html</p>
                        </div>
                        <div class="skill">
                            <img src={images.css} alt='Css'/>
                            <p>Css</p>
                        </div>
                        <div class="skill">
                            <img src={images.react} alt='react'/>
                            <p>React</p>
                        </div>
                        <div class="skill">
                            <img src={images.sass} alt='sass'/>
                            <p>Sass</p>
                        </div>
                        <div class="skill">
                            <img src={images.node} alt='node'/>
                            <p>Node Js</p>
                        </div>
                    </div>
                    <div class="app__Skills-container-row">
                        <div class="skill">
                            <img src={images.redux} alt='redux'/>
                            <p>Redux</p>
                        </div>
                        <div class="skill">
                            <img src={images.git} alt='git'/>
                            <p>Git</p>
                        </div>
                        <div class="skill">
                            <img src={images.figma} alt='figma'/>
                            <p>Figma</p>
                        </div>
                        <div class="skill">
                            <img src={images.photoshop} alt='photoshop'/>
                            <p>Photoshop</p>
                        </div>
                        <div class="skill">
                            <img src={images.illustrator} alt='illustrator'/>
                            <p>Illustrator</p>
                        </div>
                        <div class="skill">
                            <img src={images.aftereffects} alt='aftereffects'/>
                            <p>After Effects</p>
                        </div>
                    </div>
                </div>*/}

        </div>
      </div>
    </div>
  );
};

export default Skills;