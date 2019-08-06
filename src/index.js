import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Helmet } from "react-helmet";

import store, { persistor } from 'store';
import history from 'utils/history';
import 'styles';
import * as routes from 'config/routePaths';

import Home from 'views/Home';
import Login from 'views/Login';
import CurrencyConverter from 'views/CurrencyConverter';
import ViewNotFound from 'views/ViewNotFound';

import LayoutDefault from 'container/layouts';



const Loading = props => <div>Loading...</div>;


class App extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Test</title>
          <meta name="description" content="" />
        </Helmet>
        <Switch>

          <Route exact path={routes.LOGIN} component={Login} />
          <LayoutDefault exact path={routes.HOME} component={Home} />
          <LayoutDefault exact path={routes.CURRENCY_CONVERTER} component={CurrencyConverter} />

          <Route component={ViewNotFound} />

        </Switch>

      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)