import styled from 'styled-components';
import { Colors } from 'consts';

export const StyledLi = styled.li`
  list-style: none;
  & a {
    color: ${Colors.white};
    display: block;
    font-size: 14px;
    padding: 10px;
    text-decoration: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & :hover {
    background-color: ${Colors.midnightBlue};
  }
`;
