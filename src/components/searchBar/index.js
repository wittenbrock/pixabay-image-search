import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledButton, StyledInput } from './style';
import { ScreenReaderOnly } from '../helper-styles';

// Stores user's search as inputtedSearch,
// then sends it to up to App where it's stored as searchQuery.
class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    setImagesAreLoadingTo: PropTypes.func.isRequired,
    placeholderText: PropTypes.string.isRequired,
    handleHomePageRedirect: PropTypes.func,
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
    const {
      onSubmit,
      setImagesAreLoadingTo,
      handleHomePageRedirect,
    } = this.props;
    const { inputtedSearch, prevInputtedSearch } = this.state;

    if (inputtedSearch !== prevInputtedSearch) {
      // Start the loading animation.
      setImagesAreLoadingTo(true);
      // Send the search up to the App component.
      onSubmit(inputtedSearch);
      // Call handleHomePageRedirect if it is passed through props.
      if (handleHomePageRedirect) {
        handleHomePageRedirect();
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
