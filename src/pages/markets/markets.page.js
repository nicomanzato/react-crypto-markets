import React from 'react';
import './markets.page.scss';

// REDUX
import { connect } from 'react-redux';
import { LoadCryptocurrencyDetails } from '../../store/cryptocurrency/cryptocurrency.actions';

// COMPONENTS
import { CryptocurrencyList } from '../../components/cryptocurrency-list/cryptocurrency-list';
import { LoadingIndicator } from '../../components/common/loading-indicator/loading-indicator';

export const MarketsPage = ({ cryptocurrencies, isLoadingCryptocurrencies, LoadCryptocurrencyDetails, history }) => {
  const handleOnCryptocurrencyClick = cryptocurrencyId => {
    LoadCryptocurrencyDetails(cryptocurrencyId);
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

const mapDispatchToProps = {
  LoadCryptocurrencyDetails: cryptocurrencyId => LoadCryptocurrencyDetails(cryptocurrencyId),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketsPage);
