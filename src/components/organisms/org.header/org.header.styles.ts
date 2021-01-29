import { Colors } from 'consts';

import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  background-color: ${Colors.midnightBlue};
  z-index: 1000;
  box-sizing: border-box;
`;

export const HeaderSpacer = styled.div`
  height: 64px;
  position: relative;
`;
