import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as auth } from 'modules/auth';
import { reducer as common } from 'modules/common';
import { reducer as currency } from 'modules/currency';


export default combineReducers({
  form,
  auth,
  common,
  currency
});