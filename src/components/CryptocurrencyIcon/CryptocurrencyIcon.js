import React, { useState } from 'react';
import './CryptocurrencyIcon.scss';

// CONSTANTS
import { constants } from '../../constants/constants';

export const CryptocurrencyIcon = ({ className, data }) => {
  const [error, setError] = useState(null);

  const handleOnError = event => {
    setError(event);
  };

  return (
    <div className={'cryptocurrency-icon'}>
      {!error && (
        <img
          src={constants.RESOURCES.SVG_PATH.replace('{symbol}', data.toLowerCase())}
          className={className}
          onError={handleOnError}
        />
      )}

      {error && <div className={['cryptocurrency-icon__backup-icon']}>{data}</div>}
    </div>
  );
};
