import React from 'react';
import './Header.scss';

export const Header = ({ className, data }) => {
  return (
    <div className="header">
      <div className="header__title">Crypto Markets</div>
      <div className="header__nav">
        <span href="#" className="header__nav-element"></span>
      </div>
    </div>
  );
};
