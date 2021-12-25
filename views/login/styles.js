import styled from 'styled-components';
import { Button } from 'antd';

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #f0f0f0;
`;

export const LoginWrapper = styled.div`
  background: white;
  min-width: 400px;
  height: 360px;
  margin-top: 128px;
  border-radius: 8px;
  padding: 24px;
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    border-radius: 8px;
  }
`;

export const BannerWrapper = styled.div`
  margin-bottom: 8px;
`;
