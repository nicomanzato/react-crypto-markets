import React, { useEffect } from 'react';
import './cryptocurrency-detail.page.scss';

// REDUX
import { connect } from 'react-redux';
import { LoadCryptocurrencyDetails } from '../../store/cryptocurrency/cryptocurrency.actions';

// COMPONENTS
import { ChangeIndicator } from '../../components/change-indicator/change-indicator';
import { CryptocurrencyIcon } from '../../components/cryptocurrency-icon/cryptocurrency-icon';
import { LineChart } from '../../components/common/chart/chart';
import { LoadingIndicator } from '../../components/common/loading-indicator/loading-indicator';

// CONSTANTS
import { lineChartOptions } from '../../components/common/chart/helpers.js';
import { formatMoney, formatMoneyReducer } from '../../utils/utils';
//import { constants } from '../../constants/constants';

export const CryptocurrencyDetailPage = ({ LoadCryptocurrencyDetails, isLoading, cryptocurrency, match }) => {
  useEffect(() => {
    if (match && match.params && match.params.cryptocurrencyId) {
      LoadCryptocurrencyDetails(match.params.cryptocurrencyId);
    }
  }, [match, LoadCryptocurrencyDetails]);

  return (
    <>
      {!isLoading && (
        <div className="page cryptocurrency-detail-page">
          <div className="cryptocurrency-detail-page__content">
            <div className="cryptocurrency-detail-page__header">
              <CryptocurrencyIcon data={cryptocurrency.symbol} className={'cryptocurrency-detail-page__icon'} />
              <div className="cryptocurrency-detail-page__title">
                {cryptocurrency.name} ({cryptocurrency.symbol})
              </div>
            </div>
            <div className="cryptocurrency-detail-page__price-history">Price History</div>
            <LineChart
              className={'cryptocurrency-detail-page__cryptocurrency-historic-price-chart'}
              id={'cryptocurrency-historic-price-chart-' + cryptocurrency.symbol}
              data={cryptocurrency.historicalPrice}
              options={lineChartOptions}
            />
          </div>
          <div className="cryptocurrency-detail-page__side-panel">
            {cryptocurrency.quote && cryptocurrency.quote.USD && cryptocurrency.quote.USD.price && (
              <div className="cryptocurrency-detail-page__side-panel-element cryptocurrency-detail-page__side-panel-big-element">
                ${formatMoney(cryptocurrency.quote.USD.price)}
              </div>
            )}
            {cryptocurrency.circulating_supply && (
              <div className="cryptocurrency-detail-page__side-panel-element">
                <div className="cryptocurrency-detail-page__side-panel-label">Circulating Supply</div>
                <div className="cryptocurrency-detail-page__side-panel-value">{cryptocurrency.circulating_supply}</div>
              </div>
            )}

            {cryptocurrency.max_supply && (
              <div className="cryptocurrency-detail-page__side-panel-element">
                <div className="cryptocurrency-detail-page__side-panel-label">Max Supply</div>
                <div className="cryptocurrency-detail-page__side-panel-value">{cryptocurrency.max_supply}</div>
              </div>
            )}

            {cryptocurrency.quote && cryptocurrency.quote.USD && cryptocurrency.quote.USD.percent_change_1h && (
              <div className="cryptocurrency-detail-page__side-panel-element">
                <div className="cryptocurrency-detail-page__side-panel-label">Change (1h)</div>
                <ChangeIndicator
                  data={cryptocurrency.quote.USD.percent_change_1h}
                  className={'cryptocurrency-detail-page__side-panel-value'}
                />
              </div>
            )}

            {cryptocurrency.quote && cryptocurrency.quote.USD && cryptocurrency.quote.USD.percent_change_24h && (
              <div className="cryptocurrency-detail-page__side-panel-element">
                <div className="cryptocurrency-detail-page__side-panel-label">Change (24h)</div>
                <ChangeIndicator
                  data={cryptocurrency.quote.USD.percent_change_24h}
                  className={'cryptocurrency-detail-page__side-panel-value'}
                />
              </div>
            )}

            {cryptocurrency.quote && cryptocurrency.quote.USD && cryptocurrency.quote.USD.percent_change_7d && (
              <div className="cryptocurrency-detail-page__side-panel-element">
                <div className="cryptocurrency-detail-page__side-panel-label">Change (7d)</div>
                <ChangeIndicator
                  data={cryptocurrency.quote.USD.percent_change_7d}
                  className={'cryptocurrency-detail-page__side-panel-value'}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {isLoading && <LoadingIndicator />}
    </>
  );
};

function mapStateToProps(state, props) {
  return {
    cryptocurrency: state.CryptocurrencyReducer.detailedCryptocurrency,
    isLoading: state.CryptocurrencyReducer.isLoadingCryptocurrencyDetail,
  };
}

const mapDispatchToProps = {
  LoadCryptocurrencyDetails: cryptocurrencyId => LoadCryptocurrencyDetails(cryptocurrencyId),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptocurrencyDetailPage);
