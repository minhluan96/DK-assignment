import React from 'react';
import { Col, Layout, Menu, Row, Typography } from 'antd';
import {
  HeaderContainer,
  LeftBanner,
  Logo,
  RightBanner,
  StyledHeader,
  StyledLeftMenu,
  StyledMenu,
  StyledRow,
  TitleWrapper,
} from './styles';
import logo from 'assets/images/logo.png';

const { Title } = Typography;

const MENU_ITEMS = [
  {
    key: 'autoHomepage',
    title: 'Auto Homepage',
  },
  {
    key: 'sales',
    title: 'Sales',
  },
  {
    key: 'crm',
    title: 'CRM',
  },
  {
    key: 'electronic',
    title: 'Electronic office',
  },
  {
    key: 'cloud',
    title: 'Cloud ERP',
  },
  {
    key: 'ssl',
    title: 'SSL',
  },
];

export default function Header() {
  return (
    <HeaderContainer>
      <StyledHeader>
        <StyledRow>
          <Col span={6}>
            <LeftBanner>
              <Logo $img={logo} />
              <StyledLeftMenu mode='horizontal' defaultSelectedKeys={['1']}>
                <Menu.Item key='home' icon={<i className='uil uil-home-alt' />}>
                  Home
                </Menu.Item>
              </StyledLeftMenu>
              <TitleWrapper>
                <Title level={1}>
                  Asia IT
                  <br />
                  Market Place
                </Title>
              </TitleWrapper>
            </LeftBanner>
          </Col>
          <Col span={18}>
            <RightBanner>
              <StyledMenu mode='horizontal'>
                {MENU_ITEMS.map(({ key, title }) => {
                  return <Menu.Item key={key}>{title}</Menu.Item>;
                })}
              </StyledMenu>
            </RightBanner>
          </Col>
        </StyledRow>
      </StyledHeader>
    </HeaderContainer>
  );
}
