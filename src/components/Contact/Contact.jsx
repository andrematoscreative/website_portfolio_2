import React , { useState }from 'react'
import { motion } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    /*sanity.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));*/
  };
return (
  <div className='app__Contact'>
    <div className='app__master-container'>
      <div className='app__Contact-info'>
        <div className='app__Contact-title '>
          <motion.div
          whileInView={{ x: [-100, 0], opacity: [0,1] }}
          transition={{ duration: 1 }}
          className='app__Contact-title-title'>Contact
          </motion.div>
          <motion.div
          whileInView={{ x: [-100, 0], opacity: [0,1] }}
          transition={{ duration: 1.5 }}
          className='app__Contact-title-info'>Helping to empower individuals and organizations to reach their fullest potential.
          <div className='app__Contact-blink'>|</div>
          </motion.div>
        </div>

        <div className='app__Contact-content'>
            {!isFormSubmitted ? (
            <div className="app__Contact-content-form">
              <div>
                <input type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
              </div>
              <div>
                <input type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}/>
              </div>
              <button type="button" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
            ) : (
            <div>
            <h3 className="app__Contact-content-form-message">
              Thank you for getting in touch!
            </h3>
            </div>
            )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact;