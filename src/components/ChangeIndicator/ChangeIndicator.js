import React from 'react';
import './ChangeIndicator.scss';

export const ChangeIndicator = ({ data, className }) => {
  return (
    <div
      className={[
        className,
        'change-indicator__value',
        data > 0 ? 'change-indicator__value--positive' : 'change-indicator__value--negative',
      ]}
    >
      {data.toFixed(2)}% {data > 0 ? <>UP</> : <>DOWN</>}
    </div>
  );
};

export default ChangeIndicator;
