import React from 'react';
import './markets.page.scss';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import { CryptocurrencyList } from '../../components/cryptocurrency-list/cryptocurrency-list';
import { LoadingIndicator } from '../../components/common/loading-indicator/loading-indicator';

// CONSTANTS
import { constants } from '../../constants/constants';

export const MarketsPage = ({ cryptocurrencies, isLoadingCryptocurrencies, LoadCryptocurrencyDetails, history }) => {
  const handleOnCryptocurrencyClick = cryptocurrencyId => {
    history.push(constants.ROUTES.CRYPTOCURRENCY_DETAIL.replace(':cryptocurrencyId', cryptocurrencyId));
  };

  return (
    <>
      {!isLoadingCryptocurrencies && (
        <div className="page markets-page">
          <h1 className="markets-page__title">Explore Markets</h1>
          <CryptocurrencyList data={cryptocurrencies} onElementClick={handleOnCryptocurrencyClick} />
        </div>
      )}
      {isLoadingCryptocurrencies && <LoadingIndicator />}
    </>
  );
};

function mapStateToProps(state, props) {
  return {
    cryptocurrencies: state.CryptocurrencyReducer.cryptocurrencies,
    isLoadingCryptocurrencies: state.CryptocurrencyReducer.isLoadingCryptocurrencies,
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketsPage);
