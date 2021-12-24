import styled from 'styled-components';
import { Row } from 'antd';

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 64px 0 24px;
  align-items: center;
  background: #fff;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const TagsWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
  display: flex;
  width: 100%;
`;

export const StyledImg = styled.img`
  width: 256px;
  height: 256px;

  @media (max-width: 768px) {
    width: 128px;
    height: 128px;
  }
`;

export const BannerWrapper = styled.div`
  padding: 48px 0;
  background: ${({ $rowIndex }) => ($rowIndex % 2 === 0 ? '#fff' : '#f4f4f4')};
`;

export const ImgWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const StyledRow = styled(Row)`
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 8px;
`;
