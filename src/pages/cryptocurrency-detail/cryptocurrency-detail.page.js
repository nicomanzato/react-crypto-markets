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
    if (
      match &&
      match.params &&
      match.params.cryptocurrencyId &&
      cryptocurrency &&
      cryptocurrency.symbol !== match.params.cryptocurrencyId
    ) {
      LoadCryptocurrencyDetails(match.params.cryptocurrencyId);
    }
  }, [match, LoadCryptocurrencyDetails]);

  return (
    <>
      {!isLoading && cryptocurrency.quote && (
        <div className="page cryptocurrency-detail-page">
          <div className="cryptocurrency-detail-page__header">
            <CryptocurrencyIcon data={cryptocurrency.symbol} className={'cryptocurrency-detail-page__icon'} />
            <h1 className="cryptocurrency-detail-page__title">
              {cryptocurrency.name} ({cryptocurrency.symbol.toUpperCase()})
            </h1>
          </div>

          <div className="cryptocurrency-detail-page__content">
            <div className="cryptocurrency-detail-page__cryptocurrency-side-details">
              <div className="cryptocurrency-detail-page__cryptocurrency-side-details-element">
                <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-title">
                  Current Price
                </span>
                <div className="cryptocurrency-detail-page__cryptocurrency-side-details-element-price-container">
                  <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-value">
                    ${formatMoney(cryptocurrency.quote.USD.price)}
                  </span>
                  <ChangeIndicator data={cryptocurrency.quote.USD.percent_change_24h} />
                </div>
              </div>

              <div className="cryptocurrency-detail-page__cryptocurrency-side-details-element">
                <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-title">
                  Market Cap
                </span>
                <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-value">
                  ${formatMoneyReducer(cryptocurrency.quote.USD.market_cap)}
                </span>
              </div>

              <div className="cryptocurrency-detail-page__cryptocurrency-side-details-element">
                <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-title">
                  Circulating Supply
                </span>
                <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-value">
                  {formatMoney(cryptocurrency.circulating_supply)}
                </span>
              </div>

              {cryptocurrency.max_supply && cryptocurrency.max_supply > 0 && (
                <div className="cryptocurrency-detail-page__cryptocurrency-side-details-element">
                  <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-title">
                    Total Supply
                  </span>
                  <span className="cryptocurrency-detail-page__cryptocurrency-side-details-element-value">
                    {formatMoney(cryptocurrency.max_supply)}
                  </span>
                </div>
              )}
            </div>

            <div className="cryptocurrency-detail-page__historic-price-chart">
              <LineChart
                className={'cryptocurrency-detail-page__historic-price-chart'}
                id={'cryptocurrency-historic-price-chart-' + cryptocurrency.symbol}
                data={cryptocurrency.historicalPrice}
                options={lineChartOptions}
              />
            </div>
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
