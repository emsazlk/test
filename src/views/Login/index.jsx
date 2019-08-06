import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as routes from 'config/routePaths';
import { reset } from 'redux-form';
import MODULE_CURRENCY from 'modules/currency';
import MODULE_AUTH from 'modules/auth';
import history from 'utils/history';
import Form from './Form';
import './style.css';


class Login extends Component {

  handleSubmit = async (value) => {
    const { reset, getCurrency, auth } = this.props;
    const { login, password } = value;

    if (login === "admin" && password === "admin123") {

      const currency = await getCurrency();

      if (!currency.error) {
        reset();
        auth();
        return history.push(routes.HOME);
      }

      return alert('щось не так');
    }
    return alert('Логін або пароль неправильний');
  }

  render() {
    const { isLoading } = this.props;

    return (
      <div className="page-login">
        <div className="container">
          <div className="login-container">

            <h2>Hello!</h2>

            <Form
              onSubmit={this.handleSubmit}
              isLoading={isLoading}
            />

          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    isLoading: state.currency.isLoading
  }),
  dispatch => ({
    reset: () => dispatch(reset('login')),
    getCurrency: () => dispatch(MODULE_CURRENCY.getCurrency()),
    auth: () => dispatch(MODULE_AUTH.signin())
  })
)(Login);