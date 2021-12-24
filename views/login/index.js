import React from 'react';
import { ContainerWrapper, LoginWrapper } from './styles';
import {Typography} from "antd";

const { Title } = Typography;

export default function LoginView() {
  return (
    <ContainerWrapper>
      <LoginWrapper>
        <Title level={4}>Login</Title>
      </LoginWrapper>
    </ContainerWrapper>
  );
}
