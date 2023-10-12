import {
  SET_CHART_TYPE,
  SET_TIME_INTERVAL,
  SET_CURRENCY,
  FETCH_CHART_DATA_REQUEST,
  FETCH_CHART_DATA_SUCCESS,
  FETCH_CHART_DATA_FAILURE
} from "../../Constants/ActionType";

const initialState = {
  timeInterval: '1d',     // Default time interval
  currency: 'bitcoin',    // Default currency
  chartType: 'line',      // Default chart type
  chartData: [],          // Empty chart data
  loading: false,         // Loading state (initially false)
  error: null             // Error state (initially null)
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_INTERVAL:
      // Update the timeInterval with the value from the action payload
      return { ...state, timeInterval: action.payload };

    case SET_CURRENCY:
      // Update the currency with the value from the action payload
      return { ...state, currency: action.payload };

    case SET_CHART_TYPE:
      // Update the chartType with the value from the action payload
      return { ...state, chartType: action.payload };

    case FETCH_CHART_DATA_REQUEST:
      // Set loading to true and clear any previous errors
      return { ...state, loading: true, error: null };

    case FETCH_CHART_DATA_SUCCESS:
      // Set loading to false and update chartData with the data from the action payload
      return { ...state, loading: false, chartData: action.payload };

    case FETCH_CHART_DATA_FAILURE:
      // Set loading to false and update the error with the error message from the action payload
      return { ...state, loading: false, error: action.payload };

    default:
      // If the action type is not recognized, return the current state
      return state;
  }
};

export default chartReducer;
