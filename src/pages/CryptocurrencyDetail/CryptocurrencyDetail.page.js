import React, { useEffect } from 'react';
import './CryptocurrencyDetail.page.scss';

// REDUX
import { connect } from 'react-redux';
import { LoadCryptocurrencyDetails } from '../../store/cryptocurrency/cryptocurrency.actions';

// COMPONENTS
import { LoadingIndicator } from '../../components/common/LoadingIndicator/LoadingIndicator';
import { CryptocurrencyIcon } from '../../components/CryptocurrencyIcon/CryptocurrencyIcon';
import { LineChart } from '../../components/common/Chart/Chart';

// CONSTANTS
import { lineChartOptions } from '../../components/common/Chart/helpers.js';
//import { constants } from '../../constants/constants';

export const CryptocurrencyDetailPage = ({ LoadCryptocurrencyDetails, isLoading, cryptocurrency }) => {
  useEffect(() => {
    LoadCryptocurrencyDetails();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="cryptocurrency-detail-page">
          <div className="cryptocurrency-detail-page__content">
            <div className="cryptocurrency-detail-page__header">
              <CryptocurrencyIcon data={cryptocurrency.symbol} className={'cryptocurrency-detail-page__icon'} />
              <div className="cryptocurrency-detail-page__title">{cryptocurrency.name}</div>
            </div>
            <LineChart
              className={'cryptocurrency-detail-page__cryptocurrency-historic-price-chart'}
              id={'cryptocurrency-historic-price-chart-' + cryptocurrency.symbol}
              data={cryptocurrency.historicalPrice}
              options={lineChartOptions}
            />
          </div>
          <div className="cryptocurrency-detail-page__side-panel">{cryptocurrency.name}</div>
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
  LoadCryptocurrencyDetails: () => LoadCryptocurrencyDetails(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CryptocurrencyDetailPage);
