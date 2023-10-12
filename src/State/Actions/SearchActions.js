// searchActions.js
import { SEARCH_REQUEST,
SEARCH_SUCCESS,
SEARCH_FAILURE } from "../../Constants/ActionType";

export const searchRequest = () => ({
  type: ActionType.SEARCH_REQUEST,
});

export const searchSuccess = (data) => ({
  type: ActionType.SEARCH_SUCCESS,
  payload: data,
});

export const searchFailure = (error) => ({
  type: ActionType.SEARCH_FAILURE,
  payload: error,
});

export const search = (query) => async (dispatch) => {
  try {
    dispatch(searchRequest());

    // Make your API request here (you can use axios)

    // Assuming you have a 'data' variable with the API response
    dispatch(searchSuccess(data));
  } catch (error) {
    dispatch(searchFailure(error));
  }
};
