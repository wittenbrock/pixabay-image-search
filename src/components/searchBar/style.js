import styled from 'styled-components';
import '../../assets/icon-search-disabled.svg';
import '../../assets/icon-search-enabled.svg';
import '../../assets/icon-search-active.svg';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  width: 56rem;
  height: 4.4rem;
  padding-left: 2.8rem;
`;

export const StyledButton = styled.button`
  background-color: #4d87ec;
  background-image: url('/assets/icon-search-enabled.svg');
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  height: 4.4rem;
  width: 5rem;
  fill: white;

  &:disabled {
    background-image: url('/assets/icon-search-disabled.svg');
    background-color: white;
  }

  &:active {
    background-image: url('/assets/icon-search-active.svg');
    background-color: #56a45c;
  }
`;
