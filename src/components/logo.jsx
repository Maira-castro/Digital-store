import React from 'react';
import logoImage from '/assets/logo.svg';
import styled from 'styled-components';

const Logo = () => {
  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      width="253px" 
      height="44px" 
    />
  );
};

export default Logo;