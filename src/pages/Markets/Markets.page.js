import React from 'react';
import './Markets.page.scss';

// REDUX
import { connect } from 'react-redux';

// COMPONENTS
import { CryptocurrencyList } from '../../components/CryptocurrencyList/CryptocurrencyList';
import { LoadingIndicator } from '../../components/common/LoadingIndicator/LoadingIndicator';

// CONSTANTS
import { constants } from '../../constants/constants';

export const MarketsPage = ({ cryptocurrencies, isLoadingCryptocurrencies, LoadCryptocurrencyDetails, history }) => {
  const handleOnCryptocurrencyClick = cryptocurrencyId => {
    history.push(constants.ROUTES.CRYPTOCURRENCY_DETAIL.replace(':cryptocurrencyId', cryptocurrencyId));
  };

  return (
    <>
      {!isLoadingCryptocurrencies && (
        <div className="markets-page">
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
