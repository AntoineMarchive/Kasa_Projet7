import React from 'react';
import './Banner.scss';
import Logo from '../../assets/homeBanner.png';

export function Banner({ logo = Logo, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={logo} alt="Bannière" />
      <div className="banner__darken"></div>
      <span className="banner__text">{text}</span>
    </div>
  );
}
