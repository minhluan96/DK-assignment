import React from 'react';
import LoginView from '../views/login';
import Container from 'components/Container';

export default function Login() {
  return <LoginView />;
}

Login.getLayout = (page) => <Container>{page}</Container>;
