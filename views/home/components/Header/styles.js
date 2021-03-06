import styled from 'styled-components';
import { Button, Layout, Menu, Row, Statistic, Tabs } from 'antd';

const { Header } = Layout;

export const HeaderContainer = styled.div`
  min-height: 40vh;
  background-color: #fff;

  @media (max-width: 768px) {
    min-height: 80vh;
  }

  @media (max-width: 576px) {
    min-height: 100vh;
  }
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
  padding-top: 64px;
  padding-left: 24px;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const RightBanner = styled.div`
  background: #001b54;
  padding-right: 24px;
  height: 100%;
  width: 100%;
`;

export const StyledMenu = styled(Menu)`
  background: transparent;
  justify-content: start;
  border-bottom: 0;

  && {
    .ant-menu-item,
    .ant-menu-item:hover {
      font-weight: 600;
      padding: 0 32px;
      color: #fff;
      border-bottom: none;
    }

    .ant-menu-overflow-item-rest {
      color: #fff;
    }
  }
`;

export const ToolbarMenu = styled(StyledMenu)`
  background: #181949;

  .ant-menu-item,
  .ant-menu-item:hover {
    font-weight: 400;
  }
`;

export const ToolbarWrapper = styled.div`
  height: 64px;
  display: flex;
  vertical-align: middle;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

export const StyledLeftMenu = styled(StyledMenu)`
  && {
    justify-content: end;
    width: 80%;

    .ant-menu-item,
    .ant-menu-item:hover {
      padding: 0px 32px;
      color: #001b54;
      border-bottom: none;
    }

    .ant-menu-overflow-item-rest {
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
  min-height: 40vh;
  width: 100%;

  @media (max-width: 768px) {
    min-height: 80vh;
  }

  @media (max-width: 576px) {
    min-height: 100vh;
  }
`;

export const TitleWrapper = styled.div`
  margin: 0 auto;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  width: 100%;

  h1 {
    font-size: 56px;
    margin-bottom: 0;
    padding: 0 48px;
    color: #001b54;
  }

  @media (max-width: 768px) {
    top: 70%;
    transform: translateY(-70%);
    h1 {
      font-size: 26px;
      padding-left: 56px;
    }
  }
`;

export const TabWrapper = styled.div`
  margin: 0 auto;
  top: 48%;
  position: absolute;
  transform: translateY(-48%);

  width: 100%;
`;

export const StyledTabs = styled(Tabs)`
  && {
    .ant-tabs-nav:before {
      border-bottom: none;
    }

    .ant-tabs-tab-btn {
      font-size: 20px;
    }

    .ant-tabs-tab {
      padding-left: 24px;
      padding-right: 24px;
      color: #6a7ba3;
    }

    .ant-tabs-ink-bar {
      background-color: #fff;
    }

    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: #fff;
      }
    }

    .ant-tabs-content-holder {
      margin-top: 24px;
    }
  }
`;

export const StyledStatistic = styled.div`
  height: 100%;
  text-align: center;
`;

export const TextWrapper = styled.div`
  width: 120px;
  color: #fff;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  height: 64px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd1e8;
  font-size: 16px;
`;

export const StyledHome = styled.div`
  float: right;
  padding-right: 32px;
`;

export const LogoutButton = styled(Button)`
  && {
    color: red;
    padding: 8px 0;
  }
`;
