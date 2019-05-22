import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledForm } from './style';
import { ScreenReaderOnly } from '../helper-styles';

const StyledButton = styled.button`
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

const StyledInput = styled.input`
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

// Stores user's input as inputtedSearch,
// then sends it to App, its parent component, where it's stored as searchQuery
class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    setImagesAreLoadingTo: PropTypes.func.isRequired,
    handleRedirect: PropTypes.func,
    placeholderText: PropTypes.string.isRequired,
  };

  state = {
    inputtedSearch: '',
    prevInputtedSearch: '',
  };

  handleChange = event => {
    const { value: inputtedSearch } = event.target;

    this.setState(() => ({ inputtedSearch }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit, setImagesAreLoadingTo, handleRedirect } = this.props;
    const { inputtedSearch, prevInputtedSearch } = this.state;

    if (inputtedSearch !== prevInputtedSearch) {
      onSubmit(inputtedSearch);
      setImagesAreLoadingTo(true);
      if (handleRedirect) {
        handleRedirect();
      }
    }

    this.setState(() => ({ prevInputtedSearch: inputtedSearch }));
  };

  render() {
    const { inputtedSearch } = this.state;
    const { placeholderText } = this.props;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <ScreenReaderOnly as="label" htmlFor="search-query">
          Enter your image search query
        </ScreenReaderOnly>
        <StyledInput
          id="search-query"
          type="text"
          onChange={this.handleChange}
          placeholder={placeholderText}
          inputtedSearch={inputtedSearch}
        />

        <StyledButton
          type="submit"
          disabled={!inputtedSearch}
          inputtedSearch={inputtedSearch}
        >
          <ScreenReaderOnly>Search</ScreenReaderOnly>
        </StyledButton>
      </StyledForm>
    );
  }
}

export default SearchBar;
