import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/vinodkumar8698" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/vinodkumar_pvt/" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/vinodkumar-kanike-028621200/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
