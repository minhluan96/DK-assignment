import React from 'react';
import {
  BannerWrapper, DescriptionWrapper,
  ImgWrapper,
  InfoWrapper,
  StyledImg, StyledRow,
  TagsWrapper,
  TagWrapper,
  TitleWrapper,
} from './styles';
import { Col, Row, Typography } from 'antd';
import assetImg from 'assets/images/asset.png';
import Tag from '../../../../components/Tag';

const { Title, Text } = Typography;

const BANNER_DATA = [
  {
    title: 'ASSETS',
    img: assetImg,
    tags: [
      {
        description: 'Inventory Management',
        title: 'G-Book',
      },
    ],
    iconAlignment: 'left',
  },
  {
    title: 'ACCOUNTING',
    img: assetImg,
    tags: [
      {
        description: 'Accounting',
        title: 'G-Book',
      },
    ],
    iconAlignment: 'right',
  },
  {
    title: 'HR & ADMIN',
    img: assetImg,
    tags: [
      {
        description: 'Webmail',
        title: 'E-office',
      },
      {
        description: 'E-Approval',
        title: 'E-office',
      },
      {
        description: 'E-Document',
        title: 'E-office',
      },
      {
        description: 'E-Check in.out',
        title: 'E-office',
      },
      {
        description: 'Co-worker/Project',
        title: 'E-office',
      },
    ],
    iconAlignment: 'left',
  },
  {
    title: 'SALES',
    img: assetImg,
    tags: [
      {
        description: 'Create Homepage Youtube & Instagram',
        title: 'Fieldmake',
      },
    ],
    iconAlignment: 'right',
  },
  {
    title: 'CUSTOMER',
    img: assetImg,
    tags: [
      {
        description: 'Customer Request Management',
        title: 'OQUFIE',
      },
    ],
    iconAlignment: 'left',
  },
  {
    title: 'SECURITY',
    img: assetImg,
    tags: [
      {
        description: 'SSL Server',
        title: 'SECTIGO',
      },
    ],
    iconAlignment: 'right',
  },
];

const BannerImage = ({ title, img }) => {
  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
      <ImgWrapper>
        <StyledImg alt={title} src={img} />
      </ImgWrapper>
    </Col>
  );
};

const Banner = ({ title, img, tags, iconAlignment, index }) => {
  return (
    <BannerWrapper $rowIndex={index}>
      <Row align='middle' gutter={[24, 24]} justify='center'>
        {iconAlignment === 'left' && <BannerImage title={title} img={img} />}
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <InfoWrapper>
            <Title level={3}>{title}</Title>
            <TagsWrapper>
              <StyledRow align='middle' justify='center' gutter={[0, 24]}>
                {tags.map((tag) => {
                  return (
                    <Col span={8}>
                      <DescriptionWrapper>
                        <Text type='secondary'>{tag.description}</Text>
                      </DescriptionWrapper>
                      <Tag>{tag.title}</Tag>
                    </Col>
                  );
                })}
              </StyledRow>
            </TagsWrapper>
          </InfoWrapper>
        </Col>
        {iconAlignment === 'right' && <BannerImage title={title} img={img} />}
      </Row>
    </BannerWrapper>
  );
};

export default function Body() {
  return (
    <>
      <TitleWrapper>
        <Title level={2} style={{ color: '#181949', margin: '0 auto' }}>
          IT CLOUD SEA'S IT SERVICE
        </Title>
      </TitleWrapper>
      {BANNER_DATA.map((banner, index) => {
        return <Banner {...banner} index={index} />;
      })}
    </>
  );
}
