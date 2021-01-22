import { Row as StyledRow, RowProps } from 'styled-bootstrap-grid';

export const Row: React.FC<RowProps> = props => (
  <StyledRow {...props} style={{ margin: '10px 0px' }} />
);
