import React from 'react';

import { Col as StyledCol, ColProps } from 'styled-bootstrap-grid';

export const Col: React.FC<ColProps> = (props) => <StyledCol col {...props} />;
