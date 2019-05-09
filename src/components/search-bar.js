import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Stores user's input as inputtedSearch,
// then sends it to App, its parent component, where it's stored as searchQuery
class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
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
    const { onSubmit } = this.props;
    const { inputtedSearch, prevInputtedSearch } = this.state;

    if (inputtedSearch !== prevInputtedSearch) {
      onSubmit(inputtedSearch);
    }

    this.setState(() => ({ prevInputtedSearch: inputtedSearch }));
  };

  render() {
    const { inputtedSearch } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search-query">
          <input id="search-query" type="text" onChange={this.handleChange} />
        </label>
        <button type="submit" disabled={!inputtedSearch}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
