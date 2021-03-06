import React from 'react';
import './logo.scss';

// CONSTANTS
import { constants } from '../../constants/constants';

export const Logo = () => {
  return (
    <div className="logo">
      <img alt={'logo'} className="logo__image" src={constants.RESOURCES.LOGO_IMAGE_URL} />
      <h1 className="logo__title">Crypto Markets</h1>
    </div>
  );
};
