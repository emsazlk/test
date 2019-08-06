import * as routes from 'config/routePaths';
import history from 'utils/history';

const SIGNIN_REQUEST = 'AUTH/SIGNIN_REQUEST';
const SIGNIN_SUCCESS = 'AUTH/SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'AUTH/SIGNIN_FAILURE';

const initialState = {
  isLoading: false,
  Auth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        Auth: false
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Auth: true
      }
    case SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        Auth: false
      }

    case 'RESET':
      return {
        ...state,
        isLoading: false,
        Auth: false
      }
    default:
      return state;
  }
}

const signinRequest = () => ({ type: SIGNIN_REQUEST });
const signinSuccess = () => ({ type: SIGNIN_SUCCESS });
// const signinFailure = () => ({ type: SIGNIN_FAILURE });

const signin = (email, password) => dispatch => {
  return new Promise(resolve => {
    dispatch(signinRequest());

    dispatch(signinSuccess());
  });
}

const localLogout = () => dispatch => {
  dispatch({ type: "RESET" });
  history.replace(routes.LOGIN);
  window.history.pushState('', '', routes.LOGIN);
}


export { reducer };

export default {
  signin,
  localLogout
};