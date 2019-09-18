import React from 'react';
import './Header.scss';

import { withRouter } from 'react-router-dom';

// CONSTANTS
import { constants } from '../../constants/constants';

export const Header = ({ className, data, history }) => {
  const handleOnTitleClick = () => {
    history.push(constants.ROUTES.CRYPTOCURRENCY_MARKETS);
  };
  return (
    <div className="header">
      <div onClick={handleOnTitleClick} className="header__title">
        Crypto Markets
      </div>
      <div className="header__nav">
        <span href="#" className="header__nav-element"></span>
      </div>
    </div>
  );
};

export default withRouter(Header);
