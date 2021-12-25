import axios from 'config/axios';
import { takeLatest, call } from 'redux-saga/effects';
import { actions } from '../actions';

function* onGetUserProfile({ onSuccess, onFailure }) {
  try {
    const response = yield call(axios.get, '/auth/1');
    onSuccess(response);
  } catch (error) {
    onFailure(error);
  }
}

export default function* watcher() {
  yield takeLatest(actions.user.getProfile, onGetUserProfile);
}
