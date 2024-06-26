import React, { useState } from 'react';
import './Navbar.scss';
import { HiMenu } from 'react-icons/hi';
import { SlClose } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const Navbar = ({active}) => {
    const[toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

  return (
    <div className='app__navbar'>
        <div className='app__master-container app__navbar-all'>
            <div className='app__navbar-logo'>
                <a href={`#Home`}>
                <img src={images.logo} alt='andre matos creative logo'/>
                ANDRÉ MATOS CREATIVE
                </a>
            </div>

            <ul className='app__navbar-links'>
                {['Home', 'About', 'Skills', 'Works', 'Testimonials', 'Contact'].map((item) => (
                    <li key={`link-${item}`}>
                        <div />
                        <a 
                        href={`#${item}`}
                        className={item === activeLink ? 'active' : ''}
                        onClick={() => setActiveLink(item)}
                        >{item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenu onClick={() => setToggle(true)}/>
                { toggle && (
                    <motion.div whileInView = {{ x: [300, 0] }} transition = {{ duration: 0.3, ease: 'easeOut'}}>
                        <SlClose onClick={() => setToggle(false)}/>
                        <ul>
                        {['Home', 'About', 'Skills', 'Works', 'Testimonials', 'Contact'].map((item) => (
                            <li key= {item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar