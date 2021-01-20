import { Row as StyledRow, RowProps } from "styled-bootstrap-grid";

export const Row: React.FC<RowProps> = (props) => {
    return <StyledRow {...props} />
}