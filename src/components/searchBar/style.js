import styled from 'styled-components';
import '../../assets/icon-search-disabled.svg';
import '../../assets/icon-chevron-right-circle.svg';
import '../../assets/icon-chevron-right-circle-active.svg';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

export const StyledInput = styled.input`
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  width: 56rem;
  height: 4.4rem;
  padding-left: 2.8rem;
`;

export const StyledButton = styled.button`
  background-image: url('/assets/icon-chevron-right-circle.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  height: 4.4rem;
  width: 5rem;
  fill: white;

  &:disabled {
    background-image: url('/assets/icon-search-disabled.svg');
  }

  &:active {
    background-image: url('/assets/icon-chevron-right-circle-active.svg');
  }
`;
