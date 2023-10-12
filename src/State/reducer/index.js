import { combineReducers } from 'redux';
import cryptoReducer from './RightSidebar';
import currencyReducer from './currency';
import exchangeReducer from './exchange';
import chartDataReducer from './chart';
import searchReducer from './Search';

const rootReducer = combineReducers({
  crypto: cryptoReducer, 
  currency: currencyReducer,
  exchange: exchangeReducer,
  chartData: chartDataReducer,
  search: searchReducer,
  
  // You can add more reducers here if needed
});

export default rootReducer;
