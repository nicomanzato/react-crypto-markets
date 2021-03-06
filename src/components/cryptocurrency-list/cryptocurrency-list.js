import React from 'react';
import './cryptocurrency-list.scss';

// COMPONENTS
import { ChangeIndicator } from '../change-indicator/change-indicator';
import { CryptocurrencyIcon } from '../cryptocurrency-icon/cryptocurrency-icon';
import { LineChart } from '../common/chart/chart';

// CONSTANTS
//import { constants } from '../../constants/constants';
import { formatMoney, formatMoneyReducer } from '../../utils/utils';

export const CryptocurrencyList = ({ data, onElementClick }) => {
  return (
    <div className="cryptocurrency-list">
      {data.map(cryptocurrency => (
        <div
          className="cryptocurrency-list__cryptocurrency-container"
          key={cryptocurrency.symbol}
          onClick={() => onElementClick(cryptocurrency.symbol)}
        >
          <div className="cryptocurrency-list__cryptocurrency-rank">#{cryptocurrency.cmc_rank}</div>
          <CryptocurrencyIcon data={cryptocurrency.symbol} className={'cryptocurrency-list__cryptocurrency-icon'} />
          <div className="cryptocurrency-list__cryptocurrency-list-item cryptocurrency-list__cryptocurrency-name">
            {cryptocurrency.name}
          </div>
          <div className="cryptocurrency-list__cryptocurrency-list-item cryptocurrency-list__cryptocurrency-price-container">
            <div className="cryptocurrency-list__cryptocurrency-price">
              ${formatMoney(cryptocurrency.quote.USD.price)}
            </div>
            <ChangeIndicator data={cryptocurrency.quote.USD.percent_change_24h} />
          </div>
          <div className="cryptocurrency-list__cryptocurrency-list-item cryptocurrency-list__cryptocurrency-market-cap-container">
            <div className="cryptocurrency-list__cryptocurrency-market-cap-label">Market Cap</div>
            <div className="cryptocurrency-list__cryptocurrency-market-cap">
              ${formatMoneyReducer(cryptocurrency.quote.USD.market_cap)}
            </div>

            <LineChart
              className={'cryptocurrency-list__cryptocurrency-price-change-chart'}
              id={'cryptocurrency-chart-' + cryptocurrency.id}
              data={cryptocurrency.historicalPrice.slice(-7)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
