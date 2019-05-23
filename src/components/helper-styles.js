import styled from 'styled-components';

export const ScreenReaderOnly = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

export const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CenteredRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;
