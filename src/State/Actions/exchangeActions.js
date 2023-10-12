// exchangeActions.js

// Action Import
import { SET_CRYPTO1,
SET_CRYPTO2,
SET_COMPARISON_RESULT,
SET_AMOUNT } from "../../Constants/ActionType";

// Action Creators
export const setCrypto1 = (crypto1) => ({
  type: SET_CRYPTO1,
  payload: crypto1,
});

export const setCrypto2 = (crypto2) => ({
  type: SET_CRYPTO2,
  payload: crypto2,
});

export const setAmount = (amount) => ({
  type: SET_AMOUNT,
  payload: amount,
});

export const setComparisonResult = (result) => ({
  type: SET_COMPARISON_RESULT,
  payload: result,
});

