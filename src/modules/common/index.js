import * as routes from 'config/routePaths';
import acTypes from './actionTypes';

const initialState = {
  lastRoutePath: routes.LOGIN
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case acTypes.SET_LAST_ROUTE_PATH:
      return { ...state, lastRoutePath: payload.path }

    default:
      return state;
  }
}

const setLastRoutePath = path => ({
  type: acTypes.SET_LAST_ROUTE_PATH,
  payload: { path }
});

export {
  reducer
}

export default {
  setLastRoutePath
};

