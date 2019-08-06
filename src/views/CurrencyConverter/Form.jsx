import React, { Component } from 'react';
import Input from 'components/Common/Input';
import SelectForm from 'components/Common/Select';
import Button from 'components/Button';
import { reduxForm, Field } from 'redux-form';


class Form extends Component {

  render() {
    const { handleSubmit, currency } = this.props;
    const options = Object.keys(currency);

    return (
      <div className="converter-body">

        <h3>КОНВЕРТЕР ВАЛЮТ</h3>

        <div className="converter-item-wrap">
          <div className="converter-item">
            <h4>Обмінюю</h4>
            <div className="converter-input">
              <Field
                component={Input}
                name="input_change"
                type="number"
              />
            </div>
            <div className="converter-input">
              <Field
                component={SelectForm}
                name="select_change"
                options={options}
                isSearchable={false}
              />
            </div>
          </div>

          <div className="converter-item">
            <h4>Продаю</h4>
            <div className="converter-input">
              <Field
                component={Input}
                name="input_sell"
                type="number"
                readOnly="readonly"
              />
            </div>
            <div className="converter-input">
              <Field
                component={SelectForm}
                name="select_sell"
                options={options}
                isSearchable={false}
              />
            </div>
          </div>
        </div>
        <div className="converter-btn-wrap">
          <Button onClick={handleSubmit}>Розрахувати</Button>
        </div>
      </div>
    )
  }
}
export default reduxForm({
  form: 'currency_converter',
})(Form)
