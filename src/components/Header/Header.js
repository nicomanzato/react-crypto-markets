import React from 'react';
import './header.scss';

import { withRouter } from 'react-router-dom';

// COMPONENTS
import { Logo } from '../logo/logo';

// CONSTANTS
import { constants } from '../../constants/constants';

export const Header = ({ className, data, history }) => {
  const handleOnTitleClick = () => {
    history.push(constants.ROUTES.CRYPTOCURRENCY_MARKETS);
  };
  return (
    <div className="header">
      <Logo />
    </div>
  );
};

export default withRouter(Header);
