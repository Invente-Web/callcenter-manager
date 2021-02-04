import { Colors } from 'consts';
import styled from 'styled-components';
import { H1 } from '../atm.typography';

export const PageHeaderWrapper = styled(H1)`
  border-bottom: 2px solid ${Colors.clouds};
  color: ${Colors.wetAsphalt};
`;

export const RightSideHeader = styled.span`
  float: right;
`;
