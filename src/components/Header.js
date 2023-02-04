import React from 'react';
import image from '../assets/logo.png';

export const Header = () => {
  return (
    <>
      <header>
        <img src={image} alt="Logo" />
        <a href='/'>Home</a>
      </header>

    </>
  )
}

