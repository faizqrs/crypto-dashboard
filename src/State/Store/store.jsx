// Import necessary functions and middleware from Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Thunk middleware for handling asynchronous actions
import rootReducer from '../reducer';// Import the root reducer (combine reducers if needed)

// Create the Redux store and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; // Export the configured Redux store for use in the application
