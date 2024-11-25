import React from 'react';
import logoImage from '/public/assets/logo.svg'; // Ajuste o caminho conforme necessário

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