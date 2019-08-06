import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import MODULE_CURRENCY from 'modules/currency';
import Form from './Form';
import './style.css';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: props.currency,
      base: props.base,
      resulte: null,
    };
  }


  handleSubmit = async (value) => {
    const { changeResulte, getCurrency, base, currency } = this.props;
    const { select_change, select_sell, input_change } = value;

    let current_currency = { ...currency };
    let resulte = 0;

    if (select_change !== base) {
      await getCurrency(select_change)
        .then(response => {
          if (!response.error) {
            current_currency = response.currency;
          } else {
            alert('Error')
          }
        })
    }

    if (current_currency[select_sell]) {
      resulte = current_currency[select_sell] * input_change
    }

    changeResulte(resulte.toFixed(2))
  }

  render() {
    const { currency, base } = this.props;

    return (
      <div className="page-converter">
        <div className="container">

          <Form
            onSubmit={this.handleSubmit}
            currency={currency}
            initialValues={{
              select_change: base,
              input_change: 100,
              select_sell: base,
              input_sell: 100,
            }}
          />

        </div>
      </div>
    )
  }
}


export default connect(
  state => ({
    currency: state.currency.list,
    base: state.currency.base,
  }),
  dispatch => ({
    getCurrency: (val) => dispatch(MODULE_CURRENCY.getCurrency(val)),
    changeResulte: (resulte) => dispatch(change('currency_converter', 'input_sell', resulte))
  })
)(CurrencyConverter);