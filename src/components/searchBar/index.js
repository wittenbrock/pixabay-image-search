import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput, StyledButton } from './style';
import { ScreenReaderOnly } from '../helper-styles';
// Stores user's input as inputtedSearch,
// then sends it to App, its parent component, where it's stored as searchQuery
class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    setImagesAreLoadingTo: PropTypes.func,
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
    const { onSubmit, setImagesAreLoadingTo } = this.props;
    const { inputtedSearch, prevInputtedSearch } = this.state;

    if (inputtedSearch !== prevInputtedSearch) {
      onSubmit(inputtedSearch);
      setImagesAreLoadingTo(true);
    }

    this.setState(() => ({ prevInputtedSearch: inputtedSearch }));
  };

  render() {
    const { inputtedSearch } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <ScreenReaderOnly as="label" htmlFor="search-query">
          Enter your image search
        </ScreenReaderOnly>
        <StyledInput
          id="search-query"
          type="text"
          onChange={this.handleChange}
          placeholder="Search images"
        />

        <StyledButton type="submit" disabled={!inputtedSearch}>
          <ScreenReaderOnly>Search</ScreenReaderOnly>
        </StyledButton>
      </StyledForm>
    );
  }
}

export default SearchBar;
