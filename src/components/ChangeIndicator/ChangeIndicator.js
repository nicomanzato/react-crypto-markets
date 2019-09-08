import React from 'react';
import './ChangeIndicator.scss';

import classNames from 'classnames/bind';

export const ChangeIndicator = ({ data }) => {
  return (
    <div
      className={classNames('change-indicator__value', {
        'change-indicator__value--positive': data > 0,
        'change-indicator__value--negative': data < 0,
      })}
    >
      {data.toFixed(2)}%
    </div>
  );
};

export default ChangeIndicator;
