import React, { useEffect } from 'react';
import './CryptocurrencyDetail.page.scss';

// REDUX
import { connect } from 'react-redux';
import { LoadCryptocurrencyDetails } from '../../store/cryptocurrency/cryptocurrency.actions';

// COMPONENTS
import { ChangeIndicator } from '../../components/ChangeIndicator/ChangeIndicator';
import { CryptocurrencyIcon } from '../../components/CryptocurrencyIcon/CryptocurrencyIcon';
import { LineChart } from '../../components/common/Chart/Chart';
import { LoadingIndicator } from '../../components/common/LoadingIndicator/LoadingIndicator';

// CONSTANTS
import { lineChartOptions } from '../../components/common/Chart/helpers.js';
//import { constants } from '../../constants/constants';

export const CryptocurrencyDetailPage = ({ LoadCryptocurrencyDetails, isLoading, cryptocurrency, match }) => {
  useEffect(() => {
    LoadCryptocurrencyDetails(match.params.cryptocurrencyId);
  }, [match.params.cryptocurrencyId, LoadCryptocurrencyDetails]);
  console.log(cryptocurrency);
  return (
    <>
      {!isLoading && (
        <div className="cryptocurrency-detail-page">
          <div className="cryptocurrency-detail-page__content">
            <div className="cryptocurrency-detail-page__header">
              <CryptocurrencyIcon data={cryptocurrency.symbol} className={'cryptocurrency-detail-page__icon'} />
              <div className="cryptocurrency-detail-page__title">{cryptocurrency.name}</div>
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
