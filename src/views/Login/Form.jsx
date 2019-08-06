import React, { PureComponent, Fragment } from 'react';
import Input from 'components/Common/Input';
import Button from 'components/Button';
import { reduxForm, Field } from 'redux-form';
import * as validRules from 'utils/validationRules';


class Form extends PureComponent {
  render() {
    const { handleSubmit, isLoading } = this.props;

    return (
      <Fragment>

        <Field
          component={Input}
          name="login"
          labelName="Email"
          validate={validRules.required}
        />

        <Field
          component={Input}
          name="password"
          labelName="Password"
          validate={validRules.required}
          type="password"
        />

        <Button
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          Login
        </Button>

      </Fragment>
    )
  }
}
export default reduxForm({
  form: 'login',
})(Form)
