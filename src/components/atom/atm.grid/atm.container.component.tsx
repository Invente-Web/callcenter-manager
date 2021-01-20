import { Container as StyledContainer, ContainerProps } from "styled-bootstrap-grid";

export const Container: React.FC<ContainerProps> = (props) => {
    return <StyledContainer {...props} />
}