import { Colors } from 'consts';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 64px;
    background-color: ${Colors.wisteria};
    color: ${Colors.white};
    z-index: 1000;
`;

export const HeaderSpacer = styled.div`
    width: 100vw;
    height: 64px;
    position: relative;
`