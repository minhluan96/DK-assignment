import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Menu,
  Row,
  Tabs,
  Typography,
} from 'antd';
import {
  HeaderContainer,
  InfoWrapper,
  LeftBanner,
  Logo,
  LogoutButton,
  RightBanner,
  StyledHeader,
  StyledHome,
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
import { useSelector } from 'react-redux';
import useFetchApi from '../../../../services/hooks/useFetchAPI';
import { actions } from '../../../../services/actions';
import useAuth from '../../../../services/hooks/useAuth';
import Router from 'next/router';

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

const menuOverlay = (name, onLogout) => {
  return (
    <Menu>
      <Menu.Item>
        <Text>{name}</Text>
      </Menu.Item>
      <Menu.Item onClick={onLogout}>
        <LogoutButton type='link'>Logout</LogoutButton>
      </Menu.Item>
    </Menu>
  );
};

export default function Header() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const fetchApi = useFetchApi();
  const [user, setUser] = useState();
  const { logout } = useAuth();

  const getUserProfile = () => {
    fetchApi.call({
      type: actions.user.getProfile,
      onSuccess: (response) => {
        setUser(response);
      },
      onFailure: (error) => {
        console.error(error);
      },
    });
  };

  useEffect(() => {
    if (!isLogin) {
      setUser(null);
      return;
    }

    getUserProfile();
  }, [isLogin]);

  const onRedirectToLogin = () => {
    Router.push('/login');
  };

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
                    {TOOLBAR_MENU_ITEMS.map(
                      ({ key, title, action, hideArrow }) => {
                        return (
                          <Menu.Item
                            key={key}
                            onClick={() => {
                              if (action) action();
                            }}
                          >
                            <Media
                              verticalAlign='center'
                              extra={
                                !hideArrow && (
                                  <i className='uil uil-angle-down' />
                                )
                              }
                            >
                              <Text style={{ color: '#fff' }}>{title}</Text>
                            </Media>
                          </Menu.Item>
                        );
                      }
                    )}
                  </ToolbarMenu>
                  {user ? (
                    <Dropdown
                      arrow
                      overlay={menuOverlay(user.name, logout)}
                      trigger='click'
                    >
                      <Avatar size='small' src={user.avatar} shape='circle' />
                    </Dropdown>
                  ) : (
                    <Button type='link' onClick={onRedirectToLogin}>
                      <Text style={{ color: '#fff' }}>Login</Text>
                    </Button>
                  )}
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
