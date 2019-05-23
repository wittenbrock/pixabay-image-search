import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledButton, StyledInput } from './style';
import { ScreenReaderOnly } from '../helper-styles';

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
