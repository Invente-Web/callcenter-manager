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
  margin: 0 0 20px 0;
  & .dashboard-icon {
    color: white;
    font-size: 64px;
    opacity: 0.5;
    position: absolute;
    z-index: 1;
    padding: 25px 10px;
    height: 100%;
    box-sizing: border-box;
    top: 0px;
    right: 0px;
    background-color: ${Colors.white}50;
  }
`;
