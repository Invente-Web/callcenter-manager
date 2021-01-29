import { Colors } from 'consts';
import styled from 'styled-components';

export const AsideMenuWrapper = styled.aside`
  background-color: ${Colors.wetAsphalt};
  width: 15vw;
  height: calc(100vh - 64px);
  position: absolute;
  z-index: 1;
`;

export const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;
