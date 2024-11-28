import React from 'react';
import { assets } from '../assets/assets';

function Logo() {
  return (
    <>
      <img className="logo" src={assets.logo} alt="logo" />
    </>
  );
}

export default Logo;
