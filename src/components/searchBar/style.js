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
  margin-bottom: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const StyledButton = styled.button`
  background-image: url('/assets/icon-chevron-right-circle.svg');
  background-repeat: no-repeat;
  background-position: left center;
  border-top-right-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  border: 2px solid hsl(0, 0%, 100%);
  border-left: none;
  height: 4.4rem;
  width: 5rem;
  background-color: ${p =>
    p.inputtedSearch !== '' ? 'hsl(0, 0%, 100%)' : 'transparent'};

  &:disabled {
    background-image: url('/assets/icon-search-disabled.svg');
  }

  &:active {
    background-image: url('/assets/icon-chevron-right-circle-active.svg');
  }

  @media screen and (min-width: 600px) {
    background-position: center;
  }
`;

export const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  border: 2px solid hsl(0, 0%, 100%);
  border-right: none;
  width: 56rem;
  height: 4.4rem;
  padding-left: 1.8rem;
  background-color: ${p =>
    p.inputtedSearch !== '' ? 'hsl(0, 0%, 100%)' : 'transparent'};

  &:focus {
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
  }

  &:focus ~ ${StyledButton} {
    background-color: hsl(0, 0%, 100%);
  }

  @media screen and (min-width: 600px) {
    padding-left: 2.8rem;
  }
`;
