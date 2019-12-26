import React from 'react';
import './side-panel.scss';

// COMPONENTS
import { Logo } from '../logo/logo';

// CONSTANTS
// import { constants } from '../../constants/constants';

const SidePanel = ({ className, onMoveToPage }) => {
  const handleOnTitleClick = () => {
    // history.push(constants.ROUTES.CRYPTOCURRENCY_MARKETS);
  };

  const handleOnExploreMarketsClick = () => {
    onMoveToPage('/');
  };

  // const handleOnDashboardClick = () => {
  //   // history.push(constants.ROUTES.CRYPTOCURRENCY_MARKETS);
  // };

  return (
    <aside className={className + ' side-panel'}>
      <div onClick={handleOnTitleClick} className="side-panel__title">
        <Logo />
      </div>
      <div className="side-panel__navigation-panel">
        <div
          onClick={handleOnExploreMarketsClick}
          className="side-panel__navigation-element side-panel__navigation-element--selected"
        >
          Explore Markets
        </div>
{/*         <div onClick={handleOnDashboardClick} className="side-panel__navigation-element">
          Dashboard
        </div> */}
      </div>
    </aside>
  );
};

export default SidePanel;
