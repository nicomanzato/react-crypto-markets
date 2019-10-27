import React from 'react';
import './side-panel.scss';

import { withRouter } from 'react-router-dom';

// CONSTANTS
import { constants } from '../../constants/constants';

export const SidePanel = ({ className, data, history }) => {
  return (
    <aside className={className + ' side-panel'}>
      <div className="side-panel__portfolio">Your Portfolio</div>
      <div className="side-panel__navigation-panel"></div>
    </aside>
  );
};

export default withRouter(SidePanel);
