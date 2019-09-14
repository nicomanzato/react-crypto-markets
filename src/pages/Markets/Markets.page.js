import React from 'react';
import './Markets.page.scss';

// REDUX
import { connect } from 'react-redux';
import { LoadCryptocurrencyDetails } from '../../store/cryptocurrency/cryptocurrency.actions';

// COMPONENTS
import { CryptocurrencyList } from '../../components/CryptocurrencyList/CryptocurrencyList';
import { LoadingIndicator } from '../../components/common/LoadingIndicator/LoadingIndicator';

// CONSTANTS
//import { constants } from '../../constants/constants';

export const MarketsPage = ({ cryptocurrencies, isLoadingCryptocurrencies, LoadCryptocurrencyDetails }) => {
  return (
    <>
      {!isLoadingCryptocurrencies && (
        <div className="markets-page">
          <div className="markets-page__header">Crypto Markets</div>
          <CryptocurrencyList data={cryptocurrencies} onElementClick={LoadCryptocurrencyDetails} />
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
  LoadCryptocurrencyDetails: id => LoadCryptocurrencyDetails(id),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketsPage);
