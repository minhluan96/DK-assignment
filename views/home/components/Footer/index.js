import React, { useState } from 'react';
import {
  FooterContainer,
  OfficeInfoWrapper,
  PriceWrapper,
  StyledCard, StyledRow,
  TextWrapper,
} from './styles';
import { Col, Divider, Row, Statistic, Typography } from 'antd';
import Media from '../../../../components/Media';

const { Title, Text } = Typography;

const PRICE_DATA = [
  {
    title: 'Free Test',
    description: 'Organize across all apps by hand',
    price: 0,
    unit: '$',
    suffix: 'Per Month',
  },
  {
    title: 'Low Price',
    description: 'Monthly Fixed Amount',
    price: '200.000',
    unit: '$',
    suffix: 'Per Month',
  },
  {
    title: 'Easy Using Methods',
    description: 'Various Manuals',
    price: '200.000',
    unit: '$',
    suffix: 'Per Month',
  },
  {
    title: 'Verified IT Service',
    description: 'On sale in 4 countries',
    price: '300.000',
    unit: 'VND',
    suffix: 'Per Month',
  },
];

const OFFICE_DATA = [
  {
    title: 'Vietnam Office',
    descriptions: [
      '14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city',
      'Business resigtration: 0315321202',
      'Tel: 028-3520-2367 sales@dkinno.com',
      'Copyright 2021 DaouKiwoon Innocation CO., Ltd',
    ],
  },
  {
    title: 'Indonesia Office',
    descriptions: [
      'Menara Mandiri II, JI. jend. Sudirman No.54-55, South Jakatar, DKI Jakarta 12190, Indonesia',
      'Tel: +62-21-5082-0038',
    ],
  },
  {
    title: 'Korea Office',
    descriptions: [
      '5th FI, C-dong, PDC, 242, Pangyo-ro, Bundangu-gu, Seongnam-si, Gyeonggi-do, Korea',
    ],
  },
];

const PriceCard = ({
  title,
  description,
  price,
  unit,
  suffix,
  selectedKey,
  onClick,
}) => {
  return (
    <StyledCard
      $selected={selectedKey === title}
      onClick={() => onClick(title)}
    >
      <Title level={4}>{title}</Title>
      <Text strong type='secondary' style={{ color: '#505e6a', fontSize: 10 }}>
        {description}
      </Text>
      <div>
        <Media
          verticalAlign='center'
          extra={
            <>
              <div>
                <Text
                  strong
                  type='secondary'
                  style={{ color: '#505e6a', fontSize: 12 }}
                >
                  {unit}
                </Text>
              </div>
              <Text
                strong
                type='secondary'
                style={{ color: '#505e6a', fontSize: 12 }}
              >
                {suffix}
              </Text>
            </>
          }
        >
          <Text strong style={{ color: '#505e6a', fontSize: 32 }}>
            {price}
          </Text>
        </Media>
      </div>
    </StyledCard>
  );
};

const OfficeInfo = ({ title, descriptions }) => {
  return (
    <OfficeInfoWrapper>
      <Text style={{ fontSize: 16 }}>{title}</Text>
      {descriptions.map((description) => {
        return (
          <TextWrapper>
            <Text type='secondary' style={{ fontSize: 12 }}>
              {description}
            </Text>
          </TextWrapper>
        );
      })}
    </OfficeInfoWrapper>
  );
};

export default function Footer() {
  const [selected, setSelected] = useState(null);

  const onClickCard = (key) => {
    setSelected(key);
  };

  return (
    <FooterContainer>
      <PriceWrapper>
        <Row align='middle' justify='center' gutter={[16, 24]}>
          {PRICE_DATA.map((price) => {
            return (
              <Col span={4} key={price.title}>
                <PriceCard
                  {...price}
                  onClick={onClickCard}
                  selectedKey={selected}
                />
              </Col>
            );
          })}
        </Row>
      </PriceWrapper>
      <Divider style={{ borderWidth: 3, marginBottom: 0 }} />
      <StyledRow align='top' justify='center'>
        {OFFICE_DATA.map((item) => {
          return (
            <Col span={8}>
              <OfficeInfo {...item} />
            </Col>
          );
        })}
      </StyledRow>
    </FooterContainer>
  );
}
