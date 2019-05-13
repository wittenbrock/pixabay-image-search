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
    imagesAreLoading: false,
  };

  handleSubmit = inputtedSearch => {
    this.setState(() => ({
      searchQuery: inputtedSearch,
    }));
  };

  setImagesAreLoadingTo = trueOrFalse => {
    console.log('imagesAreLoading was set to:', trueOrFalse);
    this.setState(() => ({
      imagesAreLoading: trueOrFalse,
    }));
  };

  render() {
    const { searchQuery, imagesAreLoading } = this.state;
    return (
      <div>
        <SearchBar
          onSubmit={this.handleSubmit}
          setImagesAreLoadingTo={this.setImagesAreLoadingTo}
        />
        {searchQuery !== '' && (
          <DisplaySearchResults
            searchQuery={searchQuery}
            imagesAreLoading={imagesAreLoading}
            setImagesAreLoadingTo={this.setImagesAreLoadingTo}
          />
        )}
      </div>
    );
  }
}

export default App;
