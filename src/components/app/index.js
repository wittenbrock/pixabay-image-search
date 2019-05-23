import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from '../noMatch/index';
import HomePage from '../homePage/index';
import SearchResults from '../searchResults/index';

// Creates two routes: "/" and "/search-results".
class App extends Component {
  state = {
    searchQuery: '',
    imagesAreLoading: false,
  };

  handleSubmittedSearch = inputtedSearch => {
    this.setState(() => ({
      searchQuery: inputtedSearch,
    }));
  };

  setImagesAreLoadingTo = trueOrFalse => {
    this.setState(() => ({
      imagesAreLoading: trueOrFalse,
    }));
  };

  render() {
    const { searchQuery, imagesAreLoading } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                {...props}
                handleSubmittedSearch={this.handleSubmittedSearch}
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
                setImagesAreLoadingTo={this.setImagesAreLoadingTo}
                imagesAreLoading={imagesAreLoading}
                handleSubmittedSearch={this.handleSubmittedSearch}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
