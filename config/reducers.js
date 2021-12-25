import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'services/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
