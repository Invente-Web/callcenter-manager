import { Colors } from 'consts';
import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Brand = styled.div`
  color: ${Colors.white};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  align-self: center;
`;

export const NavbarItemsUl = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
`;
