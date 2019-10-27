import React from 'react';
import './footer.scss';

// CONSTANTS
import { constants } from '../../constants/constants';

export const Footer = ({ className, data, history }) => {
  return (
    <footer className="footer">
      <a className="footer__repository-label" href={constants.URL.REPOSITORY}>
        Github Repository
      </a>
    </footer>
  );
};

export default Footer;
