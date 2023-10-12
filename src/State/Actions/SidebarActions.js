// src/actions/cryptoActions.js

import axios from 'axios';
import { FETCH_CRYPTO_REQUEST,
FETCH_CRYPTO_SUCCESS,
FETCH_CRYPTO_FAILURE } from '../../Constants/ActionType';


export const fetchCryptoRequest = () => ({
  type: FETCH_CRYPTO_REQUEST,
});

export const fetchCryptoSuccess = (cryptoData) => ({
  type: FETCH_CRYPTO_SUCCESS,
  payload: cryptoData,
});

export const fetchCryptoFailure = (error) => ({
  type: FETCH_CRYPTO_FAILURE,
  payload: error,
});

export const fetchCryptoData = (currency) => {
  return (dispatch) => {
    dispatch(fetchCryptoRequest());

    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: currency,
          order: 'market_cap_desc',
          per_page: 50,
          page: 1,
        },
      })
      .then((response) => {
        dispatch(fetchCryptoSuccess(response.data));
      })
      
      .catch((error) => {
        dispatch(fetchCryptoFailure(error));
      });
  };
};
