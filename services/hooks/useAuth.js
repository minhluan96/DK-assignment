import React from 'react';
import useFetchApi from './useFetchAPI';
import { actions } from '../actions';
import { useDispatch } from 'react-redux';
import { onSetLoginStatus } from '../reducers/auth';

export default function useAuth() {
  const dispatch = useDispatch();
  const fetchApi = useFetchApi();

  const validateLogin = (isLogin) => {
    dispatch(onSetLoginStatus(isLogin));
  };

  const login = (username, password, callback) => {
    fetchApi.call({
      type: actions.auth.login,
      onSuccess: (data) => {
        if (username === data.username && password === data.password) {
          localStorage.setItem('auth', true);
          validateLogin(true);
        } else {
          validateLogin(false);
          callback(new Error('Incorrect username or password'));
        }
      },
      onFailure: (error) => {
        validateLogin(false);
        callback(new Error('Unable to fetch data'));
        console.error(error);
      },
    });
  };

  const logout = () => {
    localStorage.removeItem('auth');
    validateLogin(false);
  };

  return { login, logout, validateLogin };
}
