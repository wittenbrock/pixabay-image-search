import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from '../noMatch/index';
import HomePage from '../homePage/index';
import SearchResults from '../searchResults/index';

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
                setImagesAreLoadingTo={this.setImagesAreLoadingTo}
                imagesAreLoading={imagesAreLoading}
                handleSubmit={this.handleSubmit}
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
