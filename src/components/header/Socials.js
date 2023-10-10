import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';


const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/spgokulpalanisamy/" 
      target="_blank"> < BsLinkedin /></a>
       <a href="https://github.com/Gokudsp" target="_blank"> <BsGithub/></a>
    </div>
  );
}

export default Socials;