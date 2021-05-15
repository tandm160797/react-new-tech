import { combineReducers } from 'redux';
import counterReducer from '$redux-toolkit/slices/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
	counter: counterReducer
});
const store = configureStore({ reducer });

export default store;
