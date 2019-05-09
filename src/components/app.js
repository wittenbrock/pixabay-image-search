import React, { Component } from 'react';
import SearchBar from './search-bar';
import DisplaySearchResults from './display-search-results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(inputtedSearch) {
    this.setState(() => ({ searchQuery: inputtedSearch }));
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {searchQuery !== '' && (
          <DisplaySearchResults searchQuery={searchQuery} />
        )}
      </div>
    );
  }
}

export default App;
