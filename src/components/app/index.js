import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/index';
import SearchResults from '../searchResults/index';
import Test from './test';
// import SearchBar from '../searchBar';
// import DisplaySearchResults from '../displaySearchResults';

/*
  Component Tree

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
    // return (
    // <>
    //   <SearchBar
    // onSubmit={this.handleSubmit}
    // setImagesAreLoadingTo={this.setImagesAreLoadingTo}
    //   />
    //   {searchQuery !== '' && (
    //     <DisplaySearchResults
    // searchQuery={searchQuery}
    // imagesAreLoading={imagesAreLoading}
    // setImagesAreLoadingTo={this.setImagesAreLoadingTo}
    //     />
    //   )}
    // </>
    // );
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                {...props}
                handleSubmit={this.handleSubmit}
                setImagesAreLoadingTo={this.setImagesAreLoadingTo}
              />
            )}
          />
          <Route
            path="/search-results"
            render={props => (
              <SearchResults
                {...props}
                searchQuery={searchQuery}
                imagesAreLoading={imagesAreLoading}
                setImagesAreLoadingTo={this.setImagesAreLoadingTo}
                handleSubmit={this.handleSubmit}
                setImageAreLoadingTo={this.setImagesAreLoadingTo}
              />
            )}
          />
          <Route component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default App;
