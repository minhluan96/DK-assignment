import React from 'react';
import { Button, Col, Layout, Menu, Row, Tabs, Typography } from 'antd';
import {
  HeaderContainer,
  InfoWrapper,
  LeftBanner,
  Logo,
  RightBanner,
  StyledHeader,
  StyledHome,
  StyledLeftMenu,
  StyledMenu,
  StyledRow,
  StyledStatistic,
  StyledTabs,
  TabWrapper,
  TextWrapper,
  TitleWrapper,
  ToolbarMenu,
  ToolbarWrapper,
} from './styles';
import logo from 'assets/images/logo.png';
import Media from '../../../../components/Media';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

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

const TOOLBAR_MENU_ITEMS = [
  {
    key: 'en',
    title: 'EN',
  },
  {
    key: 'company',
    title: 'Company',
  },
  {
    key: 'partnerMarketPlace',
    title: 'Partner Market Place',
  },
];

const TAB_DATA = [
  {
    title: 'different IT Software Networks',
    statistic: 6,
  },
  {
    title: 'partners',
    statistic: 32,
  },
  {
    title: 'countries',
    statistic: 4,
  },
];

const TabDataContent = () => {
  return (
    <Row align='middle' justify='center' gutter={[64, 64]}>
      {TAB_DATA.map(({ title, statistic }) => {
        return (
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={4}
            xl={4}
            style={{ display: 'flex', alignSelf: 'flex-start' }}
          >
            <StyledStatistic>
              <Title level={1} style={{ color: '#cfe5ff', fontWeight: 700 }}>
                {statistic}
              </Title>
              <TextWrapper>
                <Text style={{ color: '#fff' }}>{title}</Text>
              </TextWrapper>
            </StyledStatistic>
          </Col>
        );
      })}
    </Row>
  );
};

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <StyledHeader>
          <StyledRow justify='center'>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <LeftBanner>
                <Logo $img={logo} />
                <StyledHome>
                  <Media
                    image={<i className='uil uil-home-alt' />}
                    verticalAlign='center'
                  >
                    Home
                  </Media>
                </StyledHome>

                <TitleWrapper>
                  <Title level={1}>
                    Asia IT
                    <br />
                    Market Place
                  </Title>
                </TitleWrapper>
              </LeftBanner>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <RightBanner>
                <ToolbarWrapper mode='horizontal'>
                  <ToolbarMenu mode='horizontal'>
                    {TOOLBAR_MENU_ITEMS.map(({ key, title }) => {
                      return (
                        <Menu.Item key={key}>
                          <Media
                            verticalAlign='center'
                            extra={<i className='uil uil-angle-down' />}
                          >
                            <Text style={{ color: '#fff' }}>{title}</Text>
                          </Media>
                        </Menu.Item>
                      );
                    })}
                  </ToolbarMenu>
                </ToolbarWrapper>
                <StyledMenu mode='horizontal'>
                  {MENU_ITEMS.map(({ key, title }) => {
                    return <Menu.Item key={key}>{title}</Menu.Item>;
                  })}
                </StyledMenu>
                <TabWrapper>
                  <StyledTabs centered size='large' tabBarGutter={24}>
                    <TabPane tab='Now' key='now'>
                      <TabDataContent />
                    </TabPane>
                    <TabPane tab='Future' key='future'>
                      <TabDataContent />
                    </TabPane>
                  </StyledTabs>
                </TabWrapper>
              </RightBanner>
            </Col>
          </StyledRow>
        </StyledHeader>
      </HeaderContainer>
      <InfoWrapper>
        <Text>
          You are now viewing an <b>IT Software</b> that has been verified by{' '}
          <b>over 1 million users.</b>
        </Text>
      </InfoWrapper>
    </>
  );
}
