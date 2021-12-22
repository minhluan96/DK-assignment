import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import saga from './saga';
import createReducer from './reducers';

export default function appStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [];
  middleware.push(sagaMiddleware);

  const createAppStore = compose(applyMiddleware(...middleware))(createStore);
  const store = createAppStore(combineReducers(createReducer()));
  sagaMiddleware.run(saga);
  return store;
}
