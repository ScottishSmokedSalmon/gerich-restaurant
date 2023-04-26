import React from 'react';
import { FiFavebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components'

import './Footer.css';

const Footer = () => (
  <div className="app__footer section_padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
