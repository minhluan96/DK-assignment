import React, { useEffect, useState } from 'react';
import {
  BannerWrapper,
  ContainerWrapper,
  LoginWrapper,
  StyledButton,
} from './styles';
import { Alert, Form, Input, Typography } from 'antd';
import useAuth from '../../services/hooks/useAuth';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const { Title } = Typography;

export default function LoginView() {
  const [form] = Form.useForm();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [error, setError] = useState(false);
  const { login, validateLogin } = useAuth();

  useEffect(() => {
    document.title = 'Login';

    form.setFieldsValue({
      username: 'Mona_Kassulke14',
      password: 'EECsjlVnWIXfeuA',
    });
  }, []);

  const loginFailedCallback = (err) => {
    setError(err);
  };

  const onLoginButtonClick = () => {
    form
      .validateFields()
      .then((values) => {
        setError(null);
        const { username, password } = values;
        login(username, password, loginFailedCallback);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (isLogin) {
      Router.push('/');
      return;
    }

    /* mock the situation when the browser has saved the token, don't need to login again until the token expired */
    const isValidated = localStorage.getItem('auth');
    if (isValidated) {
      validateLogin(true);
      Router.push('/');
    }
  }, [isLogin]);

  return (
    <ContainerWrapper>
      <LoginWrapper>
        <Title level={4}>Login</Title>
        {error && (
          <BannerWrapper>
            <Alert
              type='error'
              message={error.message}
              banner
              closable={false}
            />
          </BannerWrapper>
        )}
        <Form form={form} layout='vertical'>
          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input username' }]}
          >
            <Input placeholder='Username' />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input the password' }]}
          >
            <Input placeholder='Password' type='password' />
          </Form.Item>
          <StyledButton type='primary' onClick={onLoginButtonClick}>
            Login
          </StyledButton>
        </Form>
      </LoginWrapper>
    </ContainerWrapper>
  );
}
