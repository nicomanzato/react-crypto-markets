import React from 'react';
import './Markets.page.scss';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import { CryptocurrencyList } from '../../components/CryptocurrencyList/CryptocurrencyList';

// CONSTANTS
//import { constants } from '../../constants/constants';

export const MarketsPage = ({ cryptocurrencies, isLoadingCryptocurrencies }) => {
  return (
    <>
      {!isLoadingCryptocurrencies && (
        <div className="markets-page">
          <div className="markets-page__header">Crypto Markets</div>
          <CryptocurrencyList data={cryptocurrencies} onElementClick={element => console.log(element)} />
        </div>
      )}
      {isLoadingCryptocurrencies && 'Loading'}
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
