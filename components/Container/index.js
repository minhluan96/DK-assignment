import React, { useEffect } from 'react';
import Router from 'next/router';
import useAuth from 'services/hooks/useAuth';

export default function Container({ children }) {
  const { validateLogin } = useAuth();

  useEffect(() => {
    /* mock the situation when the browser has saved the token, don't need to login again until the token expired */
    const isValidated = localStorage.getItem('auth');
    if (isValidated) {
      validateLogin(true);
      Router.push('/');
    }
  }, []);

  return <div>{children}</div>;
}
