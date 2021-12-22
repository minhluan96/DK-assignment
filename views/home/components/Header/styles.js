import styled from 'styled-components';
import { Layout, Menu, Row } from 'antd';

const { Header } = Layout;

export const HeaderContainer = styled.div`
  min-height: 30vh;
  background-color: #fff;
`;

export const StyledHeader = styled(Header)`
  && {
    width: 100%;
    background: transparent;
    padding: 0;
  }
`;

export const LeftBanner = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
`;

export const RightBanner = styled.div`
  background: #001b54;
  height: 100%;
  width: 100%;
`;

export const StyledMenu = styled(Menu)`
  background: transparent;
  justify-content: start;
  border-bottom: 0;

  && {
    .ant-menu-item {
      font-weight: 600;
      padding: 0 60px;
      color: #fff;
    }
  }
`;

export const StyledLeftMenu = styled(StyledMenu)`
  justify-content: end;

  && {
    .ant-menu-item {
      padding: 0px 32px;
      color: #001b54;
    }
  }
`;

export const Logo = styled.div`
  float: left;
  width: 240px;
  height: 31px;
  margin: 16px 24px 16px 0;

  ${({ $img }) =>
    $img &&
    `
    background-image: url(${$img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
  `}
`;

export const StyledRow = styled(Row)`
  height: 30vh;
`;

export const TitleWrapper = styled.div`
  margin: 0 auto;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  width: 100%;

  h1 {
    font-size: 64px;
    margin-bottom: 0;
    padding: 0 48px;
    color: #001b54;
  }
`;
