import styled from 'styled-components';
import { Card, Row } from 'antd';

export const FooterContainer = styled.div`
  background: #f3f9ff;
  padding: 48px 0 0;
`;

export const StyledCard = styled(Card)`
  && {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%);
    cursor: pointer;

    &:hover {
      border-color: #e6367e;
      border-width: 2px;
    }

    ${({ $selected }) =>
      $selected &&
      `
      border-color: #e6367e;
      background-color: #e6367e;
      
      .ant-typography {
        color: #fff !important;
      }
    `}
  }
`;

export const PriceWrapper = styled.div`
  padding: 24px 16px 48px;
`;

export const OfficeInfoWrapper = styled.div`
  padding: 32px 64px 32px;
`;

export const TextWrapper = styled.div`
  margin: 4px 0;
`;

export const StyledRow = styled(Row)`
  && {
    .ant-col {
      align-self: stretch;
    }

    .ant-col:nth-child(2) {
      border-left: 2px #e4e9ee solid;
      border-right: 2px #e4e9ee solid;
    }
  }
`;
