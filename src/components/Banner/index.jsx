import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

export function Banner({ bannerImage, children }) {
  return (
    <div className="banner">
      <img className="banner__img" src={bannerImage} alt="Bannière" />
      {children && <div className="banner__darken"></div>}
      {children}
    </div>
  );
}

Banner.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  text: PropTypes.string,
};