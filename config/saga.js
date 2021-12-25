import { all } from 'redux-saga/effects';
import auth from 'services/saga/auth';
import user from 'services/saga/user';

export default function* saga() {
  yield all([auth(), user()]);
}
