
import * as ActionType from '../../Constants/ActionType';


const initialState = {
  query: '',
  results: [],
  loading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case ActionType.SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
