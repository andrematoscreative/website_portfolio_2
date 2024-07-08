import React from 'react';
import { motion } from 'framer-motion';
import skillData from '../../components/Skills_data';
import './Skills.scss';

const Skills = () => {
  const renderSkills = (skills) => {
    return skills.map((skill) => (
      <div key={skill.id} className="app__Skills-item">
        <div className="app__Skills-image-container">
          <img className="app__Skills-image" src={skill.image} alt={skill.name} />
        </div>
        <p className="p-text">{skill.name}</p>
      </div>
    ));
  };

  //ready for more skills :D coming...
  const firstRowSkills = skillData.slice(0, 6);
  const secondRowSkills = skillData.slice(6, 12);
  const thirdRowSkills = skillData.slice(12);

  return (
    <div className='app__Skills' id='Skills'>
      <div className='app__master-container'>
        <div className='app__Skills-info'>
          <div className='app__Skills-title'>
            <motion.div
              whileInView={{ x: [-90, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className='app__Skills-title-title'
            >
              Skills
            </motion.div>

            <motion.div
              whileInView={{ x: [-90, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className='app__Skills-title-info'
            >
              Always learning, always growing. Follow my journey as I sharpen my skills and challenge myself.
              <div className='app__Skills-blink'>|</div>
            </motion.div>
          </div>

          <div className="app__Skills-container">
            <motion.div whileInView={{ y: [-30, 0], opacity: [0, 1] }} transition={{ duration: 1.5 }}>
              <div className='app__Skills-item_row1'>
                {renderSkills(firstRowSkills)}
              </div>
              <div className='app__Skills-item_row2'>
                {renderSkills(secondRowSkills)}
              </div>
              <div className='app__Skills-item_row3'>
                {renderSkills(thirdRowSkills)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;