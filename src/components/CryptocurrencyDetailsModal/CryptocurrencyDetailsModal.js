import React from 'react';
import './CryptocurrencyDetailsModal.scss';

// COMPONENTS
import { CryptocurrencyIcon } from '../CryptocurrencyIcon/CryptocurrencyIcon';
import { LineChart } from '../common/Chart/Chart';

export const CryptocurrencyDetailsModal = ({ data, onClose, shouldDisplay }) => {
  console.log(data);
  return (
    <>
      {shouldDisplay && data && (
        <>
          <div className="cryptocurrency-details-modal">
            <div className="cryptocurrency-details-modal__header">
              <CryptocurrencyIcon data={data.symbol} className={'cryptocurrency-details-modal__icon'} />
              <div className="cryptocurrency-details-modal__title">{data.name}</div>
            </div>
            <div className="cryptocurrency-details-modal__close" onClick={onClose}>
              X
            </div>
          </div>
          <div className="cryptocurrency-details-modal__shadow" onClick={onClose}></div>
        </>
      )}
    </>
  );
};

export default CryptocurrencyDetailsModal;
