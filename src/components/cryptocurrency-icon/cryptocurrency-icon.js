import React, { useState } from 'react';
import './cryptocurrency-icon.scss';

import classNames from 'classnames';

// CONSTANTS
import { constants } from '../../constants/constants';

export const CryptocurrencyIcon = ({ className, data }) => {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleOnError = event => {
    setLoaded(true);
    setError(event);
  };

  return (
    <div
      className={classNames({
        'cryptocurrency-icon': true,
        'cryptocurrency-icon__loaded': loaded,
      })}
    >
      {!error && data && (
        <img
          alt={data}
          onLoad={() => setLoaded(true)}
          src={constants.RESOURCES.SVG_PATH.replace('{symbol}', data.toLowerCase())}
          className={className}
          onError={handleOnError}
        />
      )}

      {error && <div className={['cryptocurrency-icon__backup-icon']}>{data}</div>}
    </div>
  );
};
