import styled from 'styled-components';
import { Colors } from 'consts';

export const StyledLi = styled.li`
  list-style: none;
  transition: all 0.4s ease-in-out;
  & a {
    color: ${Colors.white};
    display: block;
    font-size: 14px;
    padding: 10px;
    text-decoration: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-left: 0px;
  }
  & :hover {
    background-color: ${Colors.midnightBlue};
    border-left: 5px solid ${Colors.white}50;
    padding-left: 5px;
  }
`;
