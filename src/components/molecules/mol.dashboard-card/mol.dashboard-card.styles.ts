import { Colors } from 'consts';
import styled from 'styled-components';

interface CardWrapperInterface {
  backgroundColor?: string | undefined;
}

export const CardWrapper = styled.div<CardWrapperInterface>`
  background-color: ${props => props.backgroundColor || Colors.clouds};
  border-radius: 3px;
  color: ${Colors.white};
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  & h1 {
    color: ${Colors.white};
    font-size: 2.5em;
    margin-top: 10px;
    margin-bottom: 10px;
    z-index: 2;
  }
  & .dashboard-icon {
    color: white;
    font-size: 64px;
    opacity: 0.5;
    position: absolute;
    z-index: 1;
    top: 25px;
    right: 10px;
  }
`;
