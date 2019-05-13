import React, { Component } from 'react';
import SearchBar from './search-bar';
import DisplaySearchResults from './display-search-results';

/*
  app
    -> search-bar 
    -> display-image-results
        -> loading-screen
        -> image-grid
            -> pixabay-image
*/

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = inputtedSearch => {
    this.setState(() => ({ searchQuery: inputtedSearch }));
  };

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
