import React from 'react';
import LoginView from '../views/login';

export default function Login() {
  return <LoginView />;
}

Login.getLayout = (page) => <div>{page}</div>;
