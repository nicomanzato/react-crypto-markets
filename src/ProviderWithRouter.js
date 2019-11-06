import React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import configureStore from './store';

class ProviderWithRouter extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore(
      {},
      {
        routerHistory: props.history,
      }
    );
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export default withRouter(ProviderWithRouter);
