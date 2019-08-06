import logger from 'utils/logger';

const FETCH_REQUEST = 'CURRENCY/FETCH_REQUEST';
const FETCH_SUCCESS = 'CURRENCY/FETCH_SUCCESS';
const FETCH_FAILURE = 'CURRENCY/FETCH_FAILURE';

const initialState = {
  isLoading: false,
  isLoaded: false,
  base: "USD",
  list: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case FETCH_REQUEST:
      return { ...state, isLoading: true, isLoaded: false };

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        list: payload.currency,
        base: payload.base,
      };

    case FETCH_FAILURE:
      return { ...state, isLoading: false, isLoaded: false };

    case 'RESET':
      return initialState

    default:
      return state;
  }
}

const fetchRequest = () => ({ type: FETCH_REQUEST });
const fetchFailure = () => ({ type: FETCH_FAILURE });
const fetchSuccess = (currency, base) => ({ type: FETCH_SUCCESS, payload: { currency, base } });

const getCurrency = (currency = "USD") => async (dispatch, getState) => {
  return new Promise((resolve) => {
    dispatch(fetchRequest());

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`, {
      method: 'get'
    })
      .then(response => {
        if (response.status !== 200) {
          resolve({ error: true });
          dispatch(fetchFailure())
        }
        return response.json();
      })
      .then(result => {

        const rates = { ...result.rates };

        Object.keys(rates).forEach((item) => {
          rates[item] = +rates[item].toFixed(2)
        })

        dispatch(fetchSuccess(rates, result.base))
        resolve({ error: false, currency: rates });
      })
      .catch(error => {
        dispatch(fetchFailure());
        resolve({ error: true });
        logger.error(error)
      });
  })
}


export { reducer };

export default {
  getCurrency
}