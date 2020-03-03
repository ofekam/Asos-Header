import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;  
`;

const FlexRow = styled(FlexContainer)`
  flex-direction: row;
`;

const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export default { FlexRow, FlexColumn };
